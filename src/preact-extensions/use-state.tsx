

import { StateUpdater, useCallback, useRef, useState as useStateP } from "../util/lib.js";
import { useStack } from "../util/stack.js";

/**
 * Slightly enhanced version of `useState` that includes a getter that remains constant
 * (i.e. you can use it in `useEffect` and friends without it being a dependency).
 * 
 * @remarks If `getBuildMode()` returns `"development"`, then any calls to `setState` will also
 * take the stack at the time the hook was called and save it to `window._setState_stack`.
 * Useful if you want to trace whose state is being updated.
 * 
 * @param initialState - Same as the built-in `setState`'s
 * 
 * #__NO_SIDE_EFFECTS__
 */
export function useState<T>(initialState: T | (() => T)): readonly [value: T, setValue: StateUpdater<T>, getValue: () => T] {
    const getStack = useStack();

    // We keep both, but override the `setState` functionality
    const [state, setStateP] = useStateP(initialState);
    const ref = useRef(state);

    // Hijack the normal setter function 
    // to also set our ref to the new value
    const setState = useRef<StateUpdater<T>>(value => {
        if (process.env.NODE_ENV === 'development') {
            (globalThis as any)._setState_stack = getStack();
        }
        if (typeof value === "function") {
            const callback = value as ((_prevValue: T) => T);
            setStateP(prevValue => {
                const nextValue = callback(prevValue);
                if (ref.current !== nextValue) {
                    // put a breakpoint here if you want
                    ref.current = nextValue;
                }
                ref.current = nextValue;
                return nextValue;
            });
        }
        else {
            if (ref.current !== value) {
                // put a breakpoint here if you want
                ref.current = value;
            }
            ref.current = value;
            setStateP(value);
        }
    });

    const getState = useCallback(() => { return ref.current; }, []);

    return [state, setState.current, getState] as const;
}