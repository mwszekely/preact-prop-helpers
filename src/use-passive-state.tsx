import { useCallback, useLayoutEffect, useRef } from "preact/hooks";


export type PassiveStateUpdater<S> = (value: S | ((prevState: S | undefined) => S)) => void;
export type OnPassiveStateChange<T> = ((value: T, prevValue: T | undefined) => (void | (() => void)));

/**
 * Debug hook.
 * 
 * Given a value or set of values, emits a console error if any of them change from one render to the next.
 * 
 * Eventually, when useEvent lands, we hopefully won't need this.
 */
export function useEnsureStability<T extends any[]>(parentHookName: string, ...values: T) {
    useHelper(values.length, 0);
    values.forEach(useHelper);
    return;


    function useHelper<U>(value: U, index: number) {

        // Make sure that the provided functions are perfectly stable across renders
        const helperToEnsureStability = useRef(value);
        const shownError = useRef(false);
        if (helperToEnsureStability.current != value) {
            if (!shownError.current) {
                /* eslint-disable no-debugger */
                debugger;
                console.error(`The hook ${parentHookName} requires some or all of its arguments remain stable across each render; please check the ${index}-indexed argument.`);
                shownError.current = true;
            }
        }
    }
}

/**
 * Similar to `useState`, but for values that aren't "render-important" &ndash; updates don't cause a re-render and so the value shouldn't be used during render (though it certainly can, at least by re-rendering again).
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
 * @param onChange The "effect" function to run when the value changes. Effectively the same as `useEffect`'s "effect" function.  MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.
 * @param getInitialValue If provided, the effect will be invoked once with this value on mount. MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.
 * @returns 
 */
export function usePassiveState<T>(onChange: undefined | null | OnPassiveStateChange<T>, getInitialValue?: () => T): readonly [getStateStable: () => T, setStateStable: PassiveStateUpdater<T>] {

    const valueRef = useRef<T | typeof Unset>(Unset);
    const warningRef = useRef(false);
    const cleanupCallbackRef = useRef<undefined | (() => void)>(undefined);

    // Make sure that the provided functions are perfectly stable across renders
    useEnsureStability("usePassiveState", onChange, getInitialValue);

    // Shared between "dependency changed" and "component unmounted".
    const onShouldCleanUp = useCallback(() => {
        const cleanupCallback = cleanupCallbackRef.current;
        if (cleanupCallback)
            cleanupCallback();
    }, []);

    // There are a couple places where we'd like to use our initial
    // value in place of having no value at all yet.
    // This is the shared code for that, used on mount and whenever
    // getValue is called.
    const tryEnsureValue = useCallback(() => {
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
    }, [/* getInitialValue and onChange intentionally omitted */]);


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


    }, []);

    // The actual code the user calls to (possibly) run a new effect.
    const r = useRef({ microtaskQueued: false, arg: undefined as undefined | Parameters<PassiveStateUpdater<T>>[0], prevDep: undefined as T | undefined });
    const setValue = useCallback<PassiveStateUpdater<T>>((arg) => {
        r.current.prevDep = valueRef.current === Unset ? undefined : getValue();
        r.current.arg = arg;
        if (!r.current.microtaskQueued) {
            r.current.microtaskQueued = true;
            setTimeout(() => {
                r.current.microtaskQueued = false;
                const prevDep = r.current.prevDep;
                const arg = r.current.arg!;
                const dep = arg instanceof Function ? arg(prevDep!) : arg;
                if (dep !== valueRef.current) {

                    // Indicate to the user that they shouldn't call getValue during onChange
                    warningRef.current = true;

                    try {
                        // Call any registered cleanup function
                        onShouldCleanUp();
                        cleanupCallbackRef.current = (onChange?.(dep, prevDep) ?? undefined);
                        valueRef.current = dep;

                    }
                    finally {
                        // Allow the user to normally call getValue again
                        warningRef.current = false;
                    }
                }

            }, 0);
        }


    }, []);

    return [getValue, setValue] as const;
}

const Unset = Symbol();

// Easy constants for getInitialValue
export function returnTrue() { return true; }
export function returnFalse() { return false; }
export function returnNull() { return null; }
export function returnUndefined() { return undefined; }
export function returnZero() { return 0; }