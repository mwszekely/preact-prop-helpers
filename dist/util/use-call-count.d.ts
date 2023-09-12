import "./mode.js";
/**
 * Wraps a hook/component that gives it nice devtools timing visualizations, only if process.env.NODE_ENV is "development".
 *
 * Some functions in this library are parenthesized but not wrapped in `monitored` --
 * they are so small that their duration generally rounds down to 0 (or epsilon), so using
 * this function usually makes no sense on them. The performance monitoring takes more time
 * than the function itself.
 *
 * @param hook
 * @returns
 */
export declare function monitored<T extends any>(hook: T): T;
export declare function hideCallCount(hook: Function | "all"): void;
//# sourceMappingURL=use-call-count.d.ts.map