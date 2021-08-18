import { useRef, useImperativeHandle, useCallback } from "preact/hooks";



/**
 * Given an input value, returns a constant getter function that can be used 
 * inside of `useEffect` and friends without including it in the dependency array.
 * 
 * Use with caution, and **do not use the getter in useLayoutEffect!!**
 * `setState`'s getter does not have this problem, but then you're using your own state 
 * instead of an existing value, which might not always be feasible.
 * 
 * Weigh your options, and hopefully one of them gets the job done.
 * 
 * @param value 
 * @returns 
 */
 export function useStableGetter<T>(value: T): () => T {
    const ref = useRef<T>(value);
    useImperativeHandle(ref, () => value);
    return useCallback(() => { return ref.current; }, [])
}