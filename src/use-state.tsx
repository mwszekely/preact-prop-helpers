
import { useCallback, useRef, useState as useStateP } from "preact/hooks";

/**
 * Slightly enhanced version of `useState` that includes a getter that remains constant
 * (i.e. you can use it in `useEffect` and friends without it being a dependency).
 * 
 * @param initialState 
 * @returns 
 */
export function useState<T>(initialState: T | (() => T)) {

    // We keep both
    const [state, setState] = useStateP(initialState);
    const ref = useRef(state);

    // Hijack the normal setter function 
    // to also set our ref to the new value
    const set = useCallback((value: T | ((prevValue: T) => T)) => {
        if (typeof value === "function") {
            let callback = value as (prevValue: T) => T;
            setState(prevValue => {
                let nextValue = callback(prevValue);
                ref.current = nextValue;
                return nextValue;
            });
        }
        else {
            ref.current = value;
            setState(value);
        }
    }, [])

    const get = () => { return ref.current; };


    console.assert(ref.current === state);
    return [state, set, get] as const;
}