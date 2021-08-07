import { Inputs, useLayoutEffect as useLayoutEffectNative, useRef } from "preact/hooks";
import type { EffectChange } from "./use-effect";

/**
 * Wrap the native `useLayoutEffect` to add arguments 
 * that allow accessing the previous value as the first argument,
 * as well as the changes that caused the hook to be called as the second argument.
 * 
 * @param effect 
 * @param inputs 
 */
export function useLayoutEffect<I extends Inputs>(effect: (prev: I, changes: EffectChange<I, number>[]) => void, inputs: I) {

    const prevInputs = useRef(inputs);
    const effect2 = () => {
        let changes: { from: any, to: any }[] = [];
        for (let i = 0; i < Math.max(prevInputs.current.length, inputs.length); ++i) {
            if (prevInputs.current[i] != inputs[i])
                changes[i] = { from: prevInputs.current[i], to: inputs[i] }
        }
        effect(prevInputs.current, changes);
        prevInputs.current = inputs;
    };

    useLayoutEffectNative(effect2, inputs);
}
