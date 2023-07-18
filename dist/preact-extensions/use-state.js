import { useCallback, useRef, useState as useStateP } from "../util/lib.js";
import { getBuildMode } from "../util/mode.js";
import { useStack } from "../util/stack.js";
import { monitorCallCount } from "../util/use-call-count.js";
/**
 * Slightly enhanced version of `useState` that includes a getter that remains constant
 * (i.e. you can use it in `useEffect` and friends without it being a dependency).
 *
 * If `getBuildMode()` returns `"development"`, then any calls to `setState` will also
 * take the stack at the time the hook was called and save it to `window._setState_stack`.
 * Useful if you want to trace whose state is being updated.
 *
 * @param initialState - Same as the built-in `setState`'s
 */
export function useState(initialState) {
    const getStack = useStack();
    monitorCallCount(useState);
    // We keep both, but override the `setState` functionality
    const [state, setStateP] = useStateP(initialState);
    const ref = useRef(state);
    // Hijack the normal setter function 
    // to also set our ref to the new value
    const setState = useCallback(value => {
        if (getBuildMode() === 'development') {
            window._setState_stack = getStack();
        }
        if (typeof value === "function") {
            const callback = value;
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
    }, []);
    const getState = useCallback(() => { return ref.current; }, []);
    return [state, setState, getState];
}
//# sourceMappingURL=use-state.js.map