/**
 * Given an input value, returns a constant getter function that can be used
 * inside of `useEffect` and friends without including it in the dependency array.
 *
 * @remarks This uses `options.diffed` in order to run before everything, even
 * ref assignment. This means this getter is safe to use anywhere ***except the render phase***.
 */
export declare const useStableGetter: <T>(value: T) => () => T;
export declare function useMemoObject<T extends {}>(t: T): T;
//# sourceMappingURL=use-stable-getter.d.ts.map