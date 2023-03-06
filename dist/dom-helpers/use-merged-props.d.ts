import { h } from "preact";
export declare function enableLoggingPropConflicts(log2: typeof console["log"]): void;
/**
 * Given two sets of props, merges them and returns the result.
 *
 * The hook is aware of and can intelligently merge `className`, `class`, `style`, `ref`, and all event handlers.
 * @param lhs2
 * @param rhs2
 * @returns
 */
export declare function useMergedProps<E extends EventTarget>(...allProps: h.JSX.HTMLAttributes<E>[]): h.JSX.HTMLAttributes<E>;
export declare function mergeFunctions<T extends (...args: any[]) => (void | Promise<void>), U extends (...args: any[]) => (void | Promise<void>)>(lhs: T | null | undefined, rhs: U | null | undefined): T | U | ((...args: Parameters<T>) => Promise<[void, void]> | undefined) | null | undefined;
//# sourceMappingURL=use-merged-props.d.ts.map