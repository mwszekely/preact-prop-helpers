import { getBuildMode } from "./mode.js";
import { noop } from "lodash-es";
let timeoutHandle = null;
function callCountU(hook) {
    const name = hook.name;
    if (filterAll || filters.has(name))
        return;
    window._hookCallCount ??= { callCountsMoment: {}, callCountsTotal: {} };
    window._hookCallCount.callCountsMoment[name] ??= 0;
    window._hookCallCount.callCountsTotal[name] ??= 0;
    window._hookCallCount.callCountsMoment[name] += 1;
    window._hookCallCount.callCountsTotal[name] += 1;
    if (timeoutHandle == null) {
        timeoutHandle = requestIdleCallback(() => {
            console.log(window._hookCallCount.callCountsMoment);
            window._hookCallCount.callCountsMoment = {};
            timeoutHandle = null;
        });
    }
}
let filterAll = false;
const filters = new Set();
export function hideCallCount(hook) {
    filterAll = (hook === "all");
    if (hook != "all")
        filters.add(hook.name);
}
export const monitorCallCount = (getBuildMode() == "development") ? callCountU : noop;
//# sourceMappingURL=use-call-count.js.map