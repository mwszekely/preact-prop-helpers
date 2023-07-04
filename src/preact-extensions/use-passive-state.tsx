import { debounceRendering, useCallback, useLayoutEffect, useRef } from "../util/lib.js";
import { getBuildMode } from "../util/mode.js";
import { Nullable } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";

/** Takes a new value or a function that updates a value, unlike `OnPassiveStateChange` which reacts to those updates */
export type PassiveStateUpdater<S, R> = ((value: S | ((prevState: S | undefined) => S), reason?: R) => void);//[R] extends [never]? ((value: S | ((prevState: S | undefined) => S), reason?: R) => void) : ((value: S | ((prevState: S | undefined) => S), reason: R) => void);
/** Responds to a change in a value, unlike `PassiveStateUpdater` which causes the updates */
export type OnPassiveStateChange<S, R> = ((value: S, prevValue: S | undefined, reason?: R) => (void | (() => void)));//[R] extends [never]? ((value: S, prevValue: S | undefined, reason?: R) => (void | (() => void))) : ((value: S, prevValue: S | undefined, reason: R) => (void | (() => void)));



/**
 * Debug hook.
 * 
 * Given a value or set of values, emits a console error if any of them change from one render to the next.
 * 
 * Eventually, when useEvent lands, we hopefully won't need this.
 */
export function useEnsureStability<T extends any[]>(parentHookName: string, ...values: T) {
    if (getBuildMode() == 'production')
        return;

    const helperToEnsureStability = useRef<Array<T>>([]);
    const shownError = useRef<Array<boolean>>([]);
    useHelper(values.length as any, -1);
    values.forEach(useHelper);
    return;


    function useHelper<U extends T>(value: U, i: number) {
        const index = i + 1;

        // Make sure that the provided functions are perfectly stable across renders
        if (helperToEnsureStability.current[index] === undefined)
            helperToEnsureStability.current[index] = value;

        if (helperToEnsureStability.current[index] != value) {
            if (!shownError.current[index]) {
                /* eslint-disable no-debugger */
                debugger;
                console.error(`The hook ${parentHookName} requires some or all of its arguments remain stable across each render; please check the ${i}-indexed argument (${i >= 0 ? JSON.stringify(values[i]) : "the number of supposedly stable elements"}).`);
                shownError.current[index] = true;
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
 * @param customDebounceRendering By default, changes to passive state are delayed by one tick so that we only check for changes in a similar way to Preact. You can override this to, for example, always run immediately instead.
 * @returns 
 */
export function usePassiveState<T, R>(onChange: Nullable<OnPassiveStateChange<T, R>>, getInitialValue?: () => T, customDebounceRendering?: typeof debounceRendering): readonly [getStateStable: () => T, setStateStable: PassiveStateUpdater<T, R>] {

    monitorCallCount(usePassiveState);
    //let [id, ,getId] = useState(() => generateRandomId());

    const valueRef = useRef<T | typeof Unset>(Unset);
    const reasonRef = useRef<R | typeof Unset>(Unset);
    const warningRef = useRef(false);
    const dependencyToCompareAgainst = useRef<T | (typeof Unset)>(Unset);
    const cleanupCallbackRef = useRef<undefined | (() => void)>(undefined);

    // Make sure that the provided functions are perfectly stable across renders
    useEnsureStability("usePassiveState", onChange, getInitialValue, customDebounceRendering);

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
                cleanupCallbackRef.current = (onChange?.(initialValue, undefined, undefined!) ?? undefined);
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
    const setValue = useCallback<PassiveStateUpdater<T, R>>((arg: Parameters<PassiveStateUpdater<T, R>>[0], reason: Parameters<PassiveStateUpdater<T, R>>[1]) => {
       
        // Regardless of anything else, figure out what our next value is about to be.
        const nextValue = (arg instanceof Function ? arg(valueRef.current === Unset ? undefined : valueRef.current) : arg);

        //let id = getId();
        //console.log((nextValue !== valueRef.current? "" : "NOT ") + "Scheduling effect ", id, " with value ", nextValue);

        if (/*dependencyToCompareAgainst.current === Unset &&*/ nextValue !== valueRef.current) {
            // This is the first request to change this value.
            // Evaluate the request immediately, then queue up the onChange function

            // Save our current value so that we can compare against it later
            // (if we flip back to this state, then we won't send the onChange function)
            dependencyToCompareAgainst.current = valueRef.current;

            // It's important to update this here (as well as below) in case customDebounceRendering invokes this immediately
            valueRef.current = nextValue;
            reasonRef.current = reason as R;

            // Schedule the actual check and invocation of onChange later to let effects settle
            (customDebounceRendering ?? debounceRendering)(() => {

                const nextReason = reasonRef.current! as R;
                const nextDep = valueRef.current! as T;
                const prevDep = dependencyToCompareAgainst.current;

                //let id = getId();
                //console.log(((dependencyToCompareAgainst.current != valueRef.current)? "" : "NOT ") + "Running effect ", id, " with value ", nextDep);
                if (dependencyToCompareAgainst.current != valueRef.current) {
                    // TODO: This needs to happen here in order to make recursive onChanges work
                    // but it feels better to have it happen after onChange...
                    valueRef.current = dependencyToCompareAgainst.current = Unset;

                    warningRef.current = true;

                    try {
                        // Call any registered cleanup function
                        onShouldCleanUp();
                        valueRef.current = nextDep; // Needs to happen before onChange in case onChange is recursive (e.g. focusing causing a focus causing a focus)
                        cleanupCallbackRef.current = (onChange?.(nextDep, prevDep === Unset ? undefined : prevDep, nextReason) ?? undefined);
                    }
                    finally {
                        // Allow the user to normally call getValue again
                        warningRef.current = false;
                    }

                }

                // We've finished with everything, so mark us as being on a clean slate again.
                dependencyToCompareAgainst.current = Unset;

            });
        }

        // Update the value immediately.
        // This will be checked against prevDep to see if we should actually call onChange
        //valueRef.current = nextValue;

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

/** 
 * An alternative to use for `customDebounceRendering` that causes `usePassiveState` to run changes without waiting a tick.
 */
export function runImmediately(f: () => void) { f(); }