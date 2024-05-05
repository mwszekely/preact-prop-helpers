import { Inputs, useEffect as useEffectNative } from "../util/lib.js";
/**
 * Wrap the native `useEffect` to add arguments
 * that allow accessing the previous value as the first argument,
 * as well as the changes that caused the hook to be called as the second argument.
 *
 * @param effect - Same as the default
 * @param inputs - Same as the default
 * @param impl - You can choose whether to use `useEffect` or `useLayoutEffect` by
 * passing one of them as this argument. By default, it's `useEffect`.
 */
export declare const useEffectDebug: <I extends Inputs>(effect: (prev: I | undefined, changes: EffectChange<I, number>[]) => (void | (() => void)), inputs?: I | undefined, impl?: typeof useEffectNative) => void;
export interface EffectChange<I extends Inputs, N extends number> {
    from: I[N];
    to: I[N];
}
//# sourceMappingURL=use-effect-debug.d.ts.map