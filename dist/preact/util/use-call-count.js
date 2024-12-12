import { useRef } from "./lib.js";
import "./mode.js";
// TODO: This shouldn't be in every build, I don't think it's in core-js? I think?
// And it's extremely small anyway and basically does nothing.
globalThis.requestIdleCallback ??= (callback) => {
    return setTimeout(() => { callback({ didTimeout: false, timeRemaining: () => { return 0; }, }); }, 5);
};
let timeoutHandle = null;
let i = 0;
/**
 * Adds a function to your browser's Performance tab, under "markers", so you can watch the call stack more clearly than random interval sampling (only if process.env.NODE_ENV is "development").
 *
 * @remarks Some of the more basic hooks, like `setState`, do not call `useMonitoring` at all.
 * They are so small that their duration generally rounds down to 0 (or epsilon), so using
 * this function usually makes no sense on them. The performance monitoring takes more time
 * than the function itself.
 */
export const useMonitoring = ((process.env.NODE_ENV === 'development' && globalThis._monitor_call_duration) ? useMonitoringImpl : dontUseMonitoringImpl);
/**
 * #__NO_SIDE_EFFECTS__
 */
function dontUseMonitoringImpl(t) {
    return t();
}
/**
 * #__NO_SIDE_EFFECTS__
 */
function useMonitoringImpl(hook) {
    const h = hook;
    if (process.env.NODE_ENV === 'development' && globalThis._monitor_call_duration) {
        return (function (...args) {
            const r = useRef(++i);
            monitorCallCount(h);
            const start = performance.mark(`${h.name}-start-${r.current}`);
            const ret = h(...args);
            const end = performance.mark(`${h.name}-end-${r.current}`);
            performance.measure(h.name, start.name, end.name);
            return ret;
        });
    }
    else {
        return hook;
    }
}
/**
 * When called inside a hook, monitors each call of that hook and prints the results to a table once things settle.
 *
 * @remarks Re-renders and such are all collected together when the table is printed to the console with `requestIdleCallback`.
 */
function monitorCallCount(hook) {
    if (process.env.NODE_ENV !== 'development')
        return;
    const name = hook.name;
    if (filterAll || filters.has(name))
        return;
    console.assert(name.length > 0);
    globalThis._hookCallCount ??= { callCounts: {} };
    globalThis._hookCallCount.callCounts[name] ??= { moment: 0, total: 0 };
    globalThis._hookCallCount.callCounts[name].moment += 1;
    globalThis._hookCallCount.callCounts[name].total += 1;
    if (timeoutHandle == null) {
        timeoutHandle = requestIdleCallback(() => {
            //console.log((window as WindowWithHookCallCount)._hookCallCount.callCountsMoment);
            //(window as WindowWithHookCallCount)._hookCallCount.callCountsMoment = {};
            const o = Object.entries(globalThis._hookCallCount.callCounts)
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
            Object.entries(globalThis._hookCallCount.callCounts).forEach(([, counts]) => { counts.moment = 0; });
            timeoutHandle = null;
        });
    }
}
let filterAll = false;
const filters = new Set();
/**
 * #__NO_SIDE_EFFECTS__
 */
export function hideCallCount(hook) {
    filterAll = (hook === "all");
    if (hook != "all")
        filters.add(hook.name);
}
//# sourceMappingURL=use-call-count.js.map