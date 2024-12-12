/**
 * Given an input value, returns a constant getter function that can be used
 * inside of `useEffect` and friends without including it in the dependency array.
 *
 * @remarks This uses `options.diffed` in order to run before everything, even
 * ref assignment. This means this getter is safe to use anywhere ***except the render phase***.
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useStableGetter<T>(value: T): () => T;
/**
 * Like useMemo, but checks objects (shallowly)
 *
 * @param t
 * @returns
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useMemoObject<T extends {}>(t: T): T;
//# sourceMappingURL=use-stable-getter.d.ts.map