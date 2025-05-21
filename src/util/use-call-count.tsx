import { useRef } from "./lib.js";
import "./mode.js";

// TODO: This shouldn't be in every build, I don't think it's in core-js? I think?
// And it's extremely small anyway and basically does nothing.
globalThis.requestIdleCallback ??= (callback) => {
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
 * @remarks Some of the more basic hooks, like `setState`, do not call `useMonitoring` at all. 
 * They are so small that their duration generally rounds down to 0 (or epsilon), so using
 * this function usually makes no sense on them. The performance monitoring takes more time
 * than the function itself.
 */
export const useMonitoring = ((process.env.NODE_ENV === 'development' && (globalThis as any)._monitor_call_duration)? useMonitoringImpl : dontUseMonitoringImpl) as typeof dontUseMonitoringImpl;

/**
 * 
 */
function dontUseMonitoringImpl<T extends (...args: any[]) => any>(t: T): ReturnType<T> {
    return t();
}

/**
 * 
 */
function useMonitoringImpl<T extends (...args: any[]) => any>(originalHook: T): ReturnType<T> {
    let wrappedHook: T = originalHook;
    
    if (process.env.NODE_ENV === 'development' && (globalThis as any)._monitor_call_duration) {
        wrappedHook = (function (...args: Parameters<((...args: any) => any)>): ReturnType<T & ((...args: any) => any)> {
            const r = useRef(++i);
            monitorCallCount(originalHook);
            const start = performance.mark(`${originalHook.name}-start-${r.current}`);
            const ret = originalHook(...args);
            const end = performance.mark(`${originalHook.name}-end-${r.current}`);
            performance.measure(originalHook.name, start.name, end.name);
            return ret;
        }) as T;
    }

    return wrappedHook();

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

    (globalThis as WindowWithHookCallCount)._hookCallCount ??= { callCounts: {} };
    (globalThis as WindowWithHookCallCount)._hookCallCount.callCounts[name] ??= { moment: 0, total: 0 };
    (globalThis as WindowWithHookCallCount)._hookCallCount.callCounts[name]!.moment += 1;
    (globalThis as WindowWithHookCallCount)._hookCallCount.callCounts[name]!.total += 1;

    if (timeoutHandle == null) {
        timeoutHandle = requestIdleCallback(() => {
            //console.log((window as WindowWithHookCallCount)._hookCallCount.callCountsMoment);
            //(window as WindowWithHookCallCount)._hookCallCount.callCountsMoment = {};
            const o: Array<{ readonly Hook: string; readonly Now: number; readonly Total: number; }> =
                Object.entries((globalThis as WindowWithHookCallCount)._hookCallCount.callCounts)
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
            Object.entries((globalThis as WindowWithHookCallCount)._hookCallCount.callCounts).forEach(([, counts]) => { counts!.moment = 0; });
            timeoutHandle = null;
        });
    }
}

let filterAll = false;
const filters = new Set<string>();

/**
 * 
 */
export function hideCallCount(hook: Function | "all") {
    filterAll = (hook === "all");

    if (hook != "all")
        filters.add(hook.name);
}
