import { useRef } from "./lib.js";
import "./mode.js";

// TODO: This shouldn't be in every build, I don't think it's in core-js? I think?
// And it's extremely small anyway and basically does nothing.
window.requestIdleCallback ??= (callback) => {
    return setTimeout(() => { callback({ didTimeout: false, timeRemaining: () => { return 0; }, }); }, 5);
};

let timeoutHandle = null as number | null;

interface HookCallCount {
    callCounts: { [K: string]: { total: number, moment: number } | undefined };
}

type WindowWithHookCallCount = (Window & typeof globalThis) & {
    _hookCallCount: HookCallCount;
}

let i = 0;

/**
 * Adds a function to your browser's Performance tab, under "markers", so you can watch the call stack more clearly than random interval sampling (only if process.env.NODE_ENV is "development").
 * 
 * @remarks Some functions in this library are parenthesized but not wrapped in `monitored` -- 
 * they are so small that their duration generally rounds down to 0 (or epsilon), so using
 * this function usually makes no sense on them. The performance monitoring takes more time
 * than the function itself.
 * 
 * important for Typescript: If passed a generic function its types may be slightly erased (see usePersistentState). No clue why or what's happening.
 * 
 * @param hook 
 * @returns 
 */
export function monitored<T extends any>(hook: T): T {
    const h = (hook as (...args: any) => any);

    if (process.env.NODE_ENV === 'development') {
        return (function (...args: Parameters<((...args: any) => any)>): ReturnType<T & ((...args: any) => any)> {
            const r = useRef(++i);
            monitorCallCount(h);
            const start = performance.mark(`${h.name}-start-${r.current}`);
            const ret = h(...args);
            const end = performance.mark(`${h.name}-end-${r.current}`);
            performance.measure(h.name, start.name, end.name);
            return ret;
        }) as T;
    }
    else {
        return hook as T;
    }
}

/**
 * When called inside a hook, monitors each call of that hook and prints the results to a table once things settle.
 * 
 * @remarks Re-renders and such are all collected together when the table is printed to the console with `requestIdleCallback`.
 */
function monitorCallCount(hook: Function) {
    if (process.env.NODE_ENV !== 'development')
        return;

    const name = hook.name;
    if (filterAll || filters.has(name))
        return;

    console.assert(name.length > 0);

    (window as WindowWithHookCallCount)._hookCallCount ??= { callCounts: {} };
    (window as WindowWithHookCallCount)._hookCallCount.callCounts[name] ??= { moment: 0, total: 0 };
    (window as WindowWithHookCallCount)._hookCallCount.callCounts[name]!.moment += 1;
    (window as WindowWithHookCallCount)._hookCallCount.callCounts[name]!.total += 1;

    if (timeoutHandle == null) {
        timeoutHandle = requestIdleCallback(() => {
            //console.log((window as WindowWithHookCallCount)._hookCallCount.callCountsMoment);
            //(window as WindowWithHookCallCount)._hookCallCount.callCountsMoment = {};
            const o: Array<{ readonly Hook: string; readonly Now: number; readonly Total: number; }> =
                Object.entries((window as WindowWithHookCallCount)._hookCallCount.callCounts)
                    .map(([hook, counts]) => { return { Hook: hook || "?", Now: counts?.moment || 0, Total: counts?.total || 0 } as const })
                    .filter(({ Now }) => { return !!Now })
                    .sort(({ Now: lhsM }, { Now: rhsM }) => {
                        if (!lhsM && !rhsM)
                            return 0;
                        lhsM ||= Infinity;
                        rhsM ||= Infinity;
                        return lhsM - rhsM;
                    });
            console.table(o, ['Hook', 'Now', 'Total']);
            Object.entries((window as WindowWithHookCallCount)._hookCallCount.callCounts).forEach(([, counts]) => { counts!.moment = 0; });
            timeoutHandle = null;
        });
    }
}

let filterAll = false;
const filters = new Set<string>();

export function hideCallCount(hook: Function | "all") {
    filterAll = (hook === "all");

    if (hook != "all")
        filters.add(hook.name);
}
