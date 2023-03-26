
import { Dispatch, SetStateAction, useCallback, useRef, useState as useStateP } from "react";
import { monitorCallCount } from "../util/use-call-count.js";


/**
 * Slightly enhanced version of `useState` that includes a getter that remains constant
 * (i.e. you can use it in `useEffect` and friends without it being a dependency).
 * 
 * @param initialState 
 * @returns 
 */
export function useState<T>(initialState: T | (() => T)): readonly [value: T, setValue: Dispatch<SetStateAction<T>>, getValue: () => T] {
    monitorCallCount(useState);

    // We keep both, but overrride the `setState` functionality
    const [state, setStateP] = useStateP(initialState);
    const ref = useRef(state);

    // Hijack the normal setter function 
    // to also set our ref to the new value
    const setState = useCallback<Dispatch<SetStateAction<T>>>(value => {
        if (typeof value === "function") {
            const callback = value as ((_prevValue: T) => T);
            return setStateP(prevValue => {
                const nextValue = callback(prevValue);
                ref.current = nextValue;
                return nextValue;
            });
        }
        else {
            ref.current = value;
            return setStateP(value);
        }
    }, []);

    const getState = useCallback(() => { return ref.current; }, []);

    return [state, setState, getState] as const;
}