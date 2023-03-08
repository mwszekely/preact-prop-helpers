
import { StateUpdater, useCallback, useRef, useState as useStateP } from "preact/hooks";

/**
 * Slightly enhanced version of `useState` that includes a getter that remains constant
 * (i.e. you can use it in `useEffect` and friends without it being a dependency).
 * 
 * @param initialState 
 * @returns 
 */
export function useState<T>(initialState: T | (() => T)): readonly [value: T, setValue: StateUpdater<T>, getValue: () => T] {

    // We keep both, but overrride the `setState` functionality
    const [state, setStateP] = useStateP(initialState);
    const ref = useRef(state);

    // Hijack the normal setter function 
    // to also set our ref to the new value
    const setState = useCallback<StateUpdater<T>>(value => {
        if (typeof value === "function") {
            const callback = value as ((_prevValue: T) => T);
            setStateP(prevValue => {
                const nextValue = callback(prevValue);
                ref.current = nextValue;
                return nextValue;
            });
        }
        else {
            ref.current = value;
            setStateP(value);
        }
    }, []);

    const getState = useCallback(() => { return ref.current; }, []);

    return [state, setState, getState] as const;
}