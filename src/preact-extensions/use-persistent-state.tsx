import { useCallback } from "preact/hooks";
import { useGlobalHandler } from "../dom-helpers/use-event-handler";
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

export function getFromLocalStorage<Key extends (keyof PersistentStates) & string>(key: Key, converter: ((input: string) => PersistentStates[Key]) = JSON.parse): PersistentStates[Key] | undefined {
    try {
        const item = localStorage.getItem(key);
        if (!item)
            return undefined;
        return converter(item);
    }
    catch (e) {
        /* eslint-disable no-debugger */
        debugger;
        return undefined;
    }
}


export function storeToLocalStorage<Key extends (keyof PersistentStates) & string>(key: Key, value: PersistentStates[Key], converter: ((input: PersistentStates[Key]) => string) = JSON.stringify): void {
    try {
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
export function usePersistentState<Key extends keyof PersistentStates>(key: Key, initialValue: PersistentStates[Key], fromString: ((value: string) => PersistentStates[Key]) = JSON.parse, toString: ((value: PersistentStates[Key]) => string) = JSON.stringify) {
    const [localCopy, setLocalCopy, getLocalCopy] = useState(getFromLocalStorage(key, fromString) ?? initialValue);

    // Listen for changes to this storage in other browser tabs
    useGlobalHandler(window, "storage", (e: StorageEvent) => {
        if (e.key === key) {
            const newValue = e.newValue;

            if (newValue != null)
                setLocalCopy(fromString(newValue));
        }
    });

    const setValueWrapper = useCallback<typeof setLocalCopy>((valueOrSetter) => {

        const value: unknown = typeof valueOrSetter === "function" ? (valueOrSetter as Function)(getLocalCopy()) : valueOrSetter;

        // Make sure this update is available immediately before the next render
        setLocalCopy(valueOrSetter);

        // Actually save the value to local storage.
        storeToLocalStorage(key, value as PersistentStates[Key], toString);

        if (value instanceof Date) {
            console.assert(fromString != JSON.parse);
        }
    }, [key, toString]);

    const getValue = useCallback(() => {
        const trueValue = getFromLocalStorage(key, fromString);
        return trueValue ?? localCopy;
    }, [key, fromString]);

    return [localCopy, setValueWrapper, getValue] as const;

}
