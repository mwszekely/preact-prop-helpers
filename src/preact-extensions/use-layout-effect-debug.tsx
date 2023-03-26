import { DependencyList, useLayoutEffect as useLayoutEffectNative } from "react";
import { EffectChange, useEffectDebug } from "./use-effect-debug.js";
import { monitorCallCount } from "../util/use-call-count.js";

/**
 * Wrap the native `useLayoutEffect` to add arguments 
 * that allow accessing the previous value as the first argument,
 * as well as the changes that caused the hook to be called as the second argument.
 * 
 * @param effect 
 * @param inputs 
 */
export function useLayoutEffectDebug<I extends DependencyList>(effect: (prev: I | undefined, changes: EffectChange<I, number>[]) => (void | (() => void)), inputs?: I) {
    monitorCallCount(useLayoutEffectDebug);

    return useEffectDebug(effect, inputs, useLayoutEffectNative);
}
