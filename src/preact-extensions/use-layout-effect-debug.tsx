import { Inputs, useLayoutEffect as useLayoutEffectNative } from "preact/hooks";
import { EffectChange, useEffectDebug } from "./use-effect-debug.js";

/**
 * Wrap the native `useLayoutEffect` to add arguments 
 * that allow accessing the previous value as the first argument,
 * as well as the changes that caused the hook to be called as the second argument.
 * 
 * @param effect 
 * @param inputs 
 */
export function useLayoutEffectDebug<I extends Inputs>(effect: (prev: I | undefined, changes: EffectChange<I, number>[]) => (void | (() => void)), inputs?: I) {
    return useEffectDebug(effect, inputs, useLayoutEffectNative);
}
