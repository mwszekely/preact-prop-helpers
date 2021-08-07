import { useRef, useImperativeHandle, useCallback } from "preact/hooks";



/**
 * Given an input value, returns a constant getter function that can be used 
 * inside of `useEffect` and friends without including it in the dependency array.
 * 
 * DO NOT USE THE GETTER IN useLayoutEffect!! If available, prefer `setState`, which returns
 * @param value 
 * @returns 
 */
 export function useStableGetter<T>(value: T): () => T {
    const ref = useRef<T>(value);
    useImperativeHandle(ref, () => value);
    return useCallback(() => { return ref.current; }, [])
}