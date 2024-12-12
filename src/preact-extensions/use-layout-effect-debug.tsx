
import { Inputs, useLayoutEffect as useLayoutEffectNative } from "../util/lib.js";
import { useMonitoring } from "../util/use-call-count.js";
import { EffectChange, useEffectDebug } from "./use-effect-debug.js";

/**
 * Wrap the native `useLayoutEffect` to add arguments 
 * that allow accessing the previous value as the first argument,
 * as well as the changes that caused the hook to be called as the second argument.
 * 
 * @param effect - Same as the built-in's
 * @param inputs - Same as the built-in's
 * 
 * #__NO_SIDE_EFFECTS__
 */
export function useLayoutEffectDebug<I extends Inputs>(effect: (prev: I | undefined, changes: EffectChange<I, number>[]) => (void | (() => void)), inputs?: I) {
    return useMonitoring(function useLayoutEffectDebug() {
        return useEffectDebug(effect, inputs, useLayoutEffectNative);
    });
}
