import { useCallback, useRef } from "preact/hooks";
import { useBeforeLayoutEffect } from "./use-before-layout-effect";

const Unset = Symbol("unset");

/**
 * Given an input value, returns a constant getter function that can be used 
 * inside of `useEffect` and friends without including it in the dependency array.
 * 
 * This uses `options.diffed` in order to run before everything, even
 * ref assignment. This means this getter is safe to use anywhere ***except the render phase***.
 * 
 * @param value 
 * @returns 
 */
export function useStableGetter<T>(value: T): () => T {
    const ref = useRef<T>(Unset as unknown as T);
    useBeforeLayoutEffect(() => { ref.current = value; }, [value]);
    return useCallback(() => {
        if (ref.current as unknown === Unset) {
            throw new Error('Value retrieved from useStableGetter() cannot be called during render.')
        }
        return ref.current;
    }, [])
}