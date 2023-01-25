import { StateUpdater, useLayoutEffect } from "preact/hooks";
import { useGlobalHandler } from "../dom-helpers/use-event-handler";
import { useStableCallback } from "./use-stable-callback";
import { useStableGetter } from "./use-stable-getter";
import { useState } from "./use-state";

/* eslint-disable @typescript-eslint/no-empty-interface */
/**
 * All types allowed by `usePersistentState`.
 * 
 * Use module augmentation to add new properties to this object that `usePersistentState` will correctly understand:
 * 
 * ````
 * declare module 'preact-prop-helpers' {
 *     interface PersistentStates {
 *         numberState: number;
 *         stringState: string;
 *     }
 * }
 * ````
 */
export interface PersistentStates { }

export function getFromLocalStorage<Key extends (keyof PersistentStates) & string>(key: Key, converter: ((input: string) => PersistentStates[Key]) = JSON.parse): PersistentStates[Key] | null {
    try {
        const item = localStorage.getItem(key);
        if (item == null)
            return null;
        return converter(item);
    }
    catch (e) {
        /* eslint-disable no-debugger */
        debugger;
        return null;
    }
}


export function storeToLocalStorage<Key extends (keyof PersistentStates) & string>(key: Key, value: PersistentStates[Key], converter: ((input: PersistentStates[Key]) => string) = JSON.stringify): void {
    try {
        if (value == null)
            localStorage.removeItem(key);
        else
            localStorage.setItem(key, converter(value));
    }
    catch (e) {
        /* eslint-disable no-debugger */
        debugger;
    }
}

/**
 * Use module augmentation to get the correct types for this function.
 * 
 * ````
 * declare module 'preact-prop-helpers' {
 *     interface PersistentStates {
 *         numberState: number;
 *         stringState: string;
 *     }
 * }
 * ````
 * @param key 
 * @param initialValue 
 * @param fromString 
 * @param toString 
 * @returns 
 */
export function usePersistentState<Key extends keyof PersistentStates, T = PersistentStates[Key]>(key: Key | null, initialValue: T, fromString: ((value: string) => T) = JSON.parse, toString: ((value: T) => string) = JSON.stringify): [T, StateUpdater<T>, () => T] {
    const [localCopy, setLocalCopy, getLocalCopy] = useState<T>(() => ((key ? (getFromLocalStorage(key, fromString as any)) : null) ?? initialValue));
    const getInitialValue = useStableGetter(initialValue);

    // Ensure that if our key changes, we also update `localCopy` to match.
    useLayoutEffect(() => {
        if (key) {
            const newCopy = getFromLocalStorage(key, fromString as any);
            setLocalCopy(newCopy ?? getInitialValue());
        }
    }, [key])

    // Listen for changes to this storage in other browser tabs
    useGlobalHandler(window, "storage", (e: StorageEvent) => {
        if (key && e.key === key) {
            const newValue = e.newValue;

            if (newValue != null)
                setLocalCopy(fromString(newValue));
            else
                setLocalCopy(initialValue);
        }
    });

    const setValueWrapper = useStableCallback<typeof setLocalCopy>((valueOrSetter) => {

        const value: PersistentStates[Key] = typeof valueOrSetter === "function" ? (valueOrSetter as Function)(getLocalCopy()) : valueOrSetter;

        // Make sure this update is available immediately before the next render
        setLocalCopy(valueOrSetter);

        // Actually save the value to local storage.
        if (key) {
            storeToLocalStorage(key, value as PersistentStates[Key], toString);

            if (typeof value == "object" && (value as object) instanceof Date) {
                console.assert(fromString != JSON.parse, "Dates (and other non-JSON types) must be given custom fromString and toString functions.");
            }
        }
    });

    const getValue = useStableCallback(() => {
        const trueValue = !key ? undefined : getFromLocalStorage(key, fromString as any);
        return trueValue ?? localCopy;
    });

    return [localCopy, setValueWrapper, getValue];

}
