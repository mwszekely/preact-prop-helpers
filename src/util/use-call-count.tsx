import { getBuildMode } from "./mode.js";
import { noop } from "lodash-es";

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
            console.table(Object.entries((window as WindowWithHookCallCount)._hookCallCount.callCounts).map(([hook, counts]) => { return { hook, moment: counts?.moment, total: counts?.total } as const }).filter(({ moment }) => { return !!moment }).sort(({ moment: lhsM }, { moment: rhsM }) => {
                if (!lhsM && !rhsM)
                    return 0;
                lhsM ||= Infinity;
                rhsM ||= Infinity;
                return lhsM - rhsM;
            }), ['hook', 'moment', 'total']);
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
