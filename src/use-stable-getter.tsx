import { useCallback, useRef } from "preact/hooks";
import { useEnsureStability } from "./use-passive-state";
import { useBeforeLayoutEffect } from "./use-before-layout-effect";

const Unset = Symbol("unset");

const STABLE = Symbol("STABLE");
//type StableDeep<T> = T extends (number | boolean | Function | null | undefined | string)? WithStableTag<(T)> : {[K in keyof T]: WithStableTag<StableDeep<T[K]>> } ;
//type WithStableTag<T> = T & { [STABLE]: true };
//export type Stable<T> = WithStableTag<StableDeep<T>>
export type Stable<T> = T & { [STABLE]: true };


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
export function useStableGetter<T>(value: T): Stable<() => T> {
    const ref = useRef<T>(Unset as unknown as T);
    useBeforeLayoutEffect(() => { ref.current = value; }, [value]);
    return useCallback(() => {
        if (ref.current as unknown === Unset) {
            throw new Error('Value retrieved from useStableGetter() cannot be called during render.')
        }
        return ref.current;
    }, []) as Stable<() => T>
}


/**
 * Like `useStableGetter`, but ***requires*** that everything in the object is also stable,
 * and in turn returns an object that itself is stable.
 * @param t 
 * @returns 
 */
 export function useStableObject<T extends {}>(t: T): Stable<T> {
    const e = Object.entries(t);
    useEnsureStability("useStableObject", e.length, e.map(([k, v]) => v));
    return useRef(t).current as Stable<T>;
}

