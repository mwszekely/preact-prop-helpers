import "./mode.js";
/**
 * Adds a function to your browser's Performance tab, under "markers", so you can watch the call stack more clearly than random interval sampling.
 *
 * @remarks Important for Typescript: If passed a generic function its types may be slightly erased (see usePersistentState). No clue why or what's happening.
 *
 * @param hook
 * @returns
 */
export declare function monitored<T extends any>(hook: T): T;
export declare function hideCallCount(hook: Function | "all"): void;
//# sourceMappingURL=use-call-count.d.ts.map