import { noop } from "lodash-es";
import { getBuildMode } from "./mode.js";

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

function callCountU(hook: Function) {
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

export const monitorCallCount: typeof callCountU = (getBuildMode() == "development") ? callCountU : noop;
