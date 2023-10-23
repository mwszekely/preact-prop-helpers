import "./mode.js";
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
export declare function monitored<T>(hook: T): T;
export declare function hideCallCount(hook: Function | "all"): void;
//# sourceMappingURL=use-call-count.d.ts.map