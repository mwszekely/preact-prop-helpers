import { Inputs, useLayoutEffect as useLayoutEffectNative } from "preact/hooks";
import { EffectChange, useEffect } from "./use-effect";

/**
 * Wrap the native `useLayoutEffect` to add arguments 
 * that allow accessing the previous value as the first argument,
 * as well as the changes that caused the hook to be called as the second argument.
 * 
 * @param effect 
 * @param inputs 
 */
export function useLayoutEffect<I extends Inputs>(effect: (prev: I, changes: EffectChange<I, number>[]) => (void | (() => void)), inputs: I) {
    return useEffect(effect, inputs, useLayoutEffectNative);
}
