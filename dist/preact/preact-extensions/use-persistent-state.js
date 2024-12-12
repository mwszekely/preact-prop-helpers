import { useGlobalHandler } from "../dom-helpers/use-event-handler.js";
import { getWindow } from "../util/get-window.js";
import { useLayoutEffect } from "../util/lib.js";
import { useStableCallback } from "./use-stable-callback.js";
import { useStableGetter } from "./use-stable-getter.js";
import { useState } from "./use-state.js";
export const PersistentStates = undefined; // Needed for the isolatedModules flag?
const defaultStorage = (typeof window === 'undefined' ? undefined : window.localStorage);
/**
 * #__NO_SIDE_EFFECTS__
 */
export function getFromLocalStorage(key, converter = JSON.parse, storage = defaultStorage) {
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
/**
 * #__NO_SIDE_EFFECTS__
 */
export function storeToLocalStorage(key, value, converter = JSON.stringify, storage = defaultStorage) {
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
//function dummy<Key extends keyof PersistentStates, T = PersistentStates[Key]>(key: Key | null, initialValue: T, fromString: ((value: string) => T) = JSON.parse, toString: ((value: T) => string) = JSON.stringify, storage: Storage = localStorage): [T, StateUpdater<T>, () => T] { return null!; }
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
 *
 * #__NO_SIDE_EFFECTS__
 */
export function usePersistentState(key, initialValue, fromString = JSON.parse, toString = JSON.stringify, storage = defaultStorage) {
    const [localCopy, setLocalCopy, getLocalCopy] = useState(() => ((key ? (getFromLocalStorage(key, fromString, storage)) : null) ?? initialValue));
    const getInitialValue = useStableGetter(initialValue);
    // Ensure that if our key changes, we also update `localCopy` to match.
    useLayoutEffect(() => {
        if (key) {
            const newCopy = getFromLocalStorage(key, fromString, storage);
            setLocalCopy(newCopy ?? getInitialValue());
        }
    }, [key, storage]);
    // Listen for changes to this storage in other browser tabs
    useGlobalHandler(getWindow(), "storage", useStableCallback((e) => {
        if (key && e.key === key && e.storageArea == storage) {
            const newValue = e.newValue;
            if (newValue != null)
                setLocalCopy(fromString(newValue));
            else
                setLocalCopy(initialValue);
        }
    }));
    const setValueWrapper = useStableCallback((valueOrSetter) => {
        const value = typeof valueOrSetter === "function" ? valueOrSetter(getLocalCopy()) : valueOrSetter;
        // Make sure this update is available immediately before the next render
        setLocalCopy(valueOrSetter);
        // Actually save the value to local storage.
        if (key) {
            storeToLocalStorage(key, value, toString, storage);
            if (typeof value == "object" && value instanceof Date) {
                console.assert(fromString != JSON.parse, "Dates (and other non-JSON types) must be given custom fromString and toString functions.");
            }
        }
    });
    const getValue = useStableCallback(() => {
        const trueValue = !key ? undefined : getFromLocalStorage(key, fromString, storage);
        return trueValue ?? localCopy;
    });
    return [localCopy, setValueWrapper, getValue];
}
//# sourceMappingURL=use-persistent-state.js.map