import { useGlobalHandler } from "../dom-helpers/use-event-handler.js";
import { getWindow } from "../util/get-window.js";
import { StateUpdater, useLayoutEffect } from "../util/lib.js";
import { useStableCallback } from "./use-stable-callback.js";
import { useStableGetter } from "./use-stable-getter.js";
import { useState } from "./use-state.js";

/* eslint-disable @typescript-eslint/no-empty-interface */
/**
 * All types allowed by `usePersistentState`.
 * 
 * Use module augmentation to add new properties to this object that `usePersistentState` will correctly understand:
 * 
 * ```typescript
 * declare module 'preact-prop-helpers' {
 *     interface PersistentStates {
 *         numberState: number;
 *         stringState: string;
 *     }
 * }
 * ```
 */
export interface PersistentStates { }
export const PersistentStates: PersistentStates = undefined!; // Needed for the isolatedModules flag?

const defaultStorage = (typeof window === 'undefined' ? undefined : window.localStorage) as Storage;

/**
 * #__NO_SIDE_EFFECTS__
 */
export function getFromLocalStorage<Key extends (keyof PersistentStates) & string>(key: Key, converter: ((input: string) => PersistentStates[Key]) = JSON.parse, storage: Storage = defaultStorage): PersistentStates[Key] | null {
    if (storage != null) {
        try {
            const item = storage.getItem(key);
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
    return null;
}

export function storeToLocalStorage<Key extends (keyof PersistentStates) & string>(key: Key, value: PersistentStates[Key], converter: ((input: PersistentStates[Key]) => string) = JSON.stringify, storage: Storage = defaultStorage): void {
    if (storage != null) {
        try {
            if (value == null)
                storage.removeItem(key);
            else
                storage.setItem(key, converter(value));
        }
        catch (e) {
            /* eslint-disable no-debugger */
            debugger;
        }
    }
}

/**
 * @remarks Use module augmentation to get the correct types for this function.
 * 
 * ```typescript
 * declare module 'preact-prop-helpers' {
 *     interface PersistentStates {
 *         numberState: number;
 *         stringState: string;
 *     }
 * }
 * ```
 * @param key -  
 * @param initialValue -  
 * @param fromString -  
 * @param toString -  
 * @returns 
 */
export function usePersistentState<Key extends keyof PersistentStates, T = PersistentStates[Key]>(key: Key | null, initialValue: T, fromString: ((value: string) => T) = JSON.parse, toString: ((value: T) => string) = JSON.stringify, storage: Storage = defaultStorage): [T, StateUpdater<T>, () => T] {

    const [localCopy, setLocalCopy, getLocalCopy] = useState<T>(() => ((key ? (getFromLocalStorage(key, fromString as any, storage)) : null) ?? initialValue));
    const getInitialValue = useStableGetter(initialValue);

    // Ensure that if our key changes, we also update `localCopy` to match.
    useLayoutEffect(() => {
        if (key) {
            const newCopy = getFromLocalStorage(key, fromString as any, storage);
            setLocalCopy(newCopy ?? getInitialValue());
        }
    }, [key, storage])

    // Listen for changes to this storage in other browser tabs
    useGlobalHandler(getWindow(), "storage", useStableCallback((e: StorageEvent) => {

        if (key && e.key === key && e.storageArea == storage) {
            const newValue = e.newValue;

            if (newValue != null)
                setLocalCopy(fromString(newValue));
            else
                setLocalCopy(initialValue);
        }
    }));

    const setValueWrapper = useStableCallback<typeof setLocalCopy>((valueOrSetter) => {

        const value: PersistentStates[Key] = typeof valueOrSetter === "function" ? (valueOrSetter as Function)(getLocalCopy()) : valueOrSetter;

        // Make sure this update is available immediately before the next render
        setLocalCopy(valueOrSetter);

        // Actually save the value to local storage.
        if (key) {
            storeToLocalStorage(key, value as PersistentStates[Key], toString, storage);

            if (typeof value == "object" && (value as object) instanceof Date) {
                console.assert(fromString != JSON.parse, "Dates (and other non-JSON types) must be given custom fromString and toString functions.");
            }
        }
    });

    const getValue = useStableCallback(() => {
        const trueValue = !key ? undefined : getFromLocalStorage(key, fromString as any, storage);
        return trueValue ?? localCopy;
    });

    return [localCopy, setValueWrapper, getValue];

}
