import { useCallback, useLayoutEffect, useRef } from "preact/hooks";
import { useStableCallback } from "./use-stable-callback";


export type PassiveStateUpdater<S> = (value: S | ((prevState: S | undefined) => S)) => void;
export type OnPassiveStateChange<T> = ((value: T, prevValue: T | undefined) => (void | (() => void)));

/**
 * Similar to `useState`, but for values that aren't "render-important" &ndash; updates don't cause a re-render and so the value shouldn't be used during render (though it certainly can).
 * 
 * To compensate for this, you should pass a `useEffect`-esque callback that is run whenever the value changes.  Just like `useEffect`, this callback can return a cleanup function that's run before the value changes.  If you would like to re-render when the value changes (or, say, when the value meets some criteria), this is where you'll want to put in a call to a `setState` function.
 * 
 * To summarize, it's like a `useState`-`useEffect` mashup:
 * 
 * 1. It's like `useState`, except this version of `setState` doesn't re-render the whole component
 * 2. It's like `useState`, except you can run a function when the value changes that optionally returns a cleanup function
 * 3. It's like `useEffect`, except you trigger the effect function "remotely" instead of it running after rendering
 * 4. It's like `useEffect`, except the single "dependency" is based on your calls to `setState`
 * 
 * Note that while calling `setState` doesn't cause any re-renders, you can do that within your `onChange` function, called whenever the value changes via that `setState`.
 * 
 * @param onChange The "effect" function to run when the value changes. Effectively the same as `useEffect`'s "effect" function
 * @param initialValue If provided, the effect will be invoked once with this value on mount.
 * @returns 
 */
export function usePassiveState<T>(onChange: undefined | null | OnPassiveStateChange<T>, getInitialValue?: () => T): readonly [() => T, PassiveStateUpdater<T>] {
    const valueRef = useRef<T | typeof Unset>(Unset);
    const warningRef = useRef(false);
    const cleanupCallbackRef = useRef<undefined | (() => void)>(undefined);

    // Shared between "dependency changed" and "component unmounted".
    const onShouldCleanUp = useCallback(() => {
        let cleanupCallback = cleanupCallbackRef.current;
        if (cleanupCallback)
            cleanupCallback();
    }, []);

    // There are a couple places where we'd like to use our initial
    // value in place of having no value at all yet.
    // This is the shared code for that, used on mount and whenever
    // getValue is called.
    const tryEnsureValue = useStableCallback(() => {
        if (valueRef.current === Unset && getInitialValue != undefined) {
            try {
                const initialValue = getInitialValue();
                valueRef.current = initialValue;
                cleanupCallbackRef.current = (onChange?.(initialValue, undefined) ?? undefined);
            }
            catch (ex) {
                // Exceptions are intentional to allow bailout (without exposing the Unset symbol)
            }
        }
    });

    const getValue = useCallback(() => {
        if (warningRef.current)
            console.warn("During onChange, prefer using the (value, prevValue) arguments instead of getValue -- it's ambiguous as to if you're asking for the old or new value at this point in time for this component.");

        // The first time we call getValue, if we haven't been given a value yet,
        // (and we were given an initial value to use)
        // return the initial value instead of nothing.
        if (valueRef.current === Unset)
            tryEnsureValue();

        return (valueRef.current === Unset ? undefined! : valueRef.current!) as T;
    }, []);

    useLayoutEffect(() => {
        // Make sure we've run our effect at least once on mount.
        // (If we have an initial value, of course)
        tryEnsureValue();
    }, [])

    // The actual code the user calls to (possibly) run a new effect.
    const setValue = useStableCallback<PassiveStateUpdater<T>>((arg) => {
        const prevDep = getValue();
        const dep = arg instanceof Function ? arg(prevDep!) : arg;

        if (dep !== valueRef.current) {

            // Indicate to the user that they shouldn't call getValue during onChange
            warningRef.current = true;

            // Call any registerd cleanup function
            onShouldCleanUp();
            cleanupCallbackRef.current = (onChange?.(dep, prevDep) ?? undefined);
            valueRef.current = dep;

            // Allow the user to normally call getValue again
            warningRef.current = false;
        }
    });

    return [getValue, setValue] as const;
}

const Unset = Symbol();
