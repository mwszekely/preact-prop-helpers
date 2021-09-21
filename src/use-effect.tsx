import { Inputs, useEffect as useEffectNative, useRef } from "preact/hooks";

/**
 * Wrap the native `useEffect` to add arguments 
 * that allow accessing the previous value as the first argument,
 * as well as the changes that caused the hook to be called as the second argument.
 * 
 * @param effect 
 * @param inputs 
 */
export function useEffect<I extends Inputs>(effect: (prev: I, changes: EffectChange<I, number>[]) => (void | (() => void)), inputs: I) {

    const prevInputs = useRef(inputs);
    const effect2 = () => {
        let changes: { from: any, to: any }[] = [];
        for (let i = 0; i < Math.max(prevInputs.current.length, inputs.length); ++i) {
            if (prevInputs.current[i] != inputs[i])
                changes[i] = { from: prevInputs.current[i], to: inputs[i] }
        }
        const ret = effect(prevInputs.current, changes);
        prevInputs.current = inputs;
        return ret;
    };

    useEffectNative(effect2, inputs);
}

export interface EffectChange<I extends Inputs, N extends number> { from: I[N], to: I[N] };
