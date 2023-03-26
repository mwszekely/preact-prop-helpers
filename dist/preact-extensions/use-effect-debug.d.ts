import { DependencyList, useEffect as useEffectNative } from "react";
/**
 * Wrap the native `useEffect` to add arguments
 * that allow accessing the previous value as the first argument,
 * as well as the changes that caused the hook to be called as the second argument.
 *
 * @param effect
 * @param inputs
 * @param impl You can choose whether to use `useEffect` or `useLayoutEffect` by
 * passing one of them as this argument. By default, it's `useEffect`.
 */
export declare function useEffectDebug<I extends DependencyList>(effect: (prev: I | undefined, changes: EffectChange<I, number>[]) => (void | (() => void)), inputs?: I, impl?: typeof useEffectNative): void;
export interface EffectChange<I extends DependencyList, N extends number> {
    from: I[N];
    to: I[N];
}
//# sourceMappingURL=use-effect-debug.d.ts.map