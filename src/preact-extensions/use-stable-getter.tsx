import { useCallback, useRef } from "react";
import { monitorCallCount } from "../util/use-call-count.js";
import { useBeforeLayoutEffect } from "./use-before-layout-effect.js";
import { useEnsureStability } from "./use-passive-state.js";

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
export function useStableGetter<T>(value: T) {
    monitorCallCount(useStableGetter);

    const ref = useRef<T>(Unset as unknown as T);
    useBeforeLayoutEffect((() => { ref.current = value; }), [value]);

    return useCallback(() => {
        if (ref.current as unknown === Unset) {
            throw new Error('Value retrieved from useStableGetter() cannot be called during render.')
        }
        return ref.current;
    }, []);
}


/**
 * Like `useStableGetter`, but ***requires*** that everything in the object is also stable,
 * and in turn returns an object that itself is stable.
 * @param t 
 * @returns 
 */
export function useStableObject<T extends {}>(t: T): T {
    const e = Object.entries(t);
    useEnsureStability("useStableObject", e.length, ...e.map(([_k, v]) => v));
    return useRef(t).current;
}

