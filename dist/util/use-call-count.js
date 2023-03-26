import { noop } from "lodash-es";
import { getBuildMode } from "./mode.js";
let timeoutHandle = null;
function callCountU(hook) {
    const name = hook.name;
    if (filterAll || filters.has(name))
        return;
    console.assert(name.length > 0);
    window._hookCallCount ??= { callCounts: {} };
    window._hookCallCount.callCounts[name] ??= { moment: 0, total: 0 };
    window._hookCallCount.callCounts[name].moment += 1;
    window._hookCallCount.callCounts[name].total += 1;
    if (timeoutHandle == null) {
        timeoutHandle = requestIdleCallback(() => {
            //console.log((window as WindowWithHookCallCount)._hookCallCount.callCountsMoment);
            //(window as WindowWithHookCallCount)._hookCallCount.callCountsMoment = {};
            const o = Object.entries(window._hookCallCount.callCounts)
                .map(([hook, counts]) => { return { Hook: hook || "?", Now: counts?.moment || 0, Total: counts?.total || 0 }; })
                .filter(({ Now }) => { return !!Now; })
                .sort(({ Now: lhsM }, { Now: rhsM }) => {
                if (!lhsM && !rhsM)
                    return 0;
                lhsM ||= Infinity;
                rhsM ||= Infinity;
                return lhsM - rhsM;
            });
            console.table(o, ['Hook', 'Now', 'Total']);
            Object.entries(window._hookCallCount.callCounts).forEach(([, counts]) => { counts.moment = 0; });
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