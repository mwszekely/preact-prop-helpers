import { useCallback, useEffect, useLayoutEffect, useRef } from "preact/hooks";
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
export function usePassiveState<T>(onChange: undefined | null | OnPassiveStateChange<T>, initialValue?: T) {
    const valueRef = useRef<T | typeof Unset>(initialValue === undefined? Unset : initialValue);
    const cleanupCallbackRef = useRef<undefined | (() => void)>(undefined);

    // Shared between "dependency changed" and "component unmounted".
    const onShouldCleanUp = useCallback(() => {
        let cleanupCallback = cleanupCallbackRef.current;
        if (cleanupCallback)
            cleanupCallback();
    }, []);

    const getValue = useCallback(() => valueRef.current === Unset? undefined : valueRef.current, []);

    // The actual code the user calls to (possibly) run a new effect.
    const setValue = useStableCallback<PassiveStateUpdater<T>>((arg) => {
        const prevDep = valueRef.current === Unset ? undefined : valueRef.current;
        const dep = arg instanceof Function? arg(prevDep!) : arg;

        if (dep !== valueRef.current) {
            onShouldCleanUp();
            cleanupCallbackRef.current = (onChange?.(dep, prevDep) ?? undefined);
            valueRef.current = dep;
        }
    });


    // Handle running on mount/unmount
    useLayoutEffect(() => {
        if (initialValue !== undefined) {
            cleanupCallbackRef.current = (onChange?.(initialValue, undefined) ?? undefined);
            valueRef.current = initialValue;
        }


        return onShouldCleanUp;
    }, []);

    return [getValue, setValue] as const;
}

const Unset = Symbol();
