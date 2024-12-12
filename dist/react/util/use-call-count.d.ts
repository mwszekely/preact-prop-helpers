import "./mode.js";
/**
 * Adds a function to your browser's Performance tab, under "markers", so you can watch the call stack more clearly than random interval sampling (only if process.env.NODE_ENV is "development").
 *
 * @remarks Some of the more basic hooks, like `setState`, do not call `useMonitoring` at all.
 * They are so small that their duration generally rounds down to 0 (or epsilon), so using
 * this function usually makes no sense on them. The performance monitoring takes more time
 * than the function itself.
 */
export declare const useMonitoring: typeof dontUseMonitoringImpl;
/**
 * #__NO_SIDE_EFFECTS__
 */
declare function dontUseMonitoringImpl<T extends (...args: any[]) => any>(t: T): ReturnType<T>;
/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function hideCallCount(hook: Function | "all"): void;
export {};
//# sourceMappingURL=use-call-count.d.ts.map