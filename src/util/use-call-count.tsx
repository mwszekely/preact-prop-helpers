import { useEffect } from "preact/hooks";
import { getBuildMode } from "./mode.js";
import { noop } from "lodash-es";

let timeoutHandle = null as number | null;

interface HookCallCount {
    callCountsTotal: { [K: string]: number | undefined };
    callCountsMoment: { [K: string]: number | undefined }
}

type WindowWithHookCallCount = (Window & typeof globalThis) & {
    _hookCallCount: HookCallCount;
}

function callCountU(hook: Function) {
    const name = hook.name;
    if (filterAll || filters.has(name))
        return;

    (window as WindowWithHookCallCount)._hookCallCount ??= { callCountsMoment: {}, callCountsTotal: {} };
    (window as WindowWithHookCallCount)._hookCallCount.callCountsMoment[name] ??= 0;
    (window as WindowWithHookCallCount)._hookCallCount.callCountsTotal[name] ??= 0;
    (window as WindowWithHookCallCount)._hookCallCount.callCountsMoment[name]! += 1;
    (window as WindowWithHookCallCount)._hookCallCount.callCountsTotal[name]! += 1;

    if (timeoutHandle == null) {
        timeoutHandle = requestIdleCallback(() => {
            console.log((window as WindowWithHookCallCount)._hookCallCount.callCountsMoment);
            (window as WindowWithHookCallCount)._hookCallCount.callCountsMoment = {};
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
