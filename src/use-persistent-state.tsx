import { useCallback } from "preact/hooks";
import { useGlobalHandler } from "./use-event-handler";
import { useState } from "./use-state";

export function getFromLocalStorage<States extends object>() {
    return function <Key extends (keyof States) & string>(key: Key, converter: ((input: string) => States[Key]) = JSON.parse): States[Key] | undefined {
        try {
            const item = localStorage.getItem(key);
            if (!item)
                return undefined;
            return converter(item);
        }
        catch (e) {
            debugger;   // Intentional
            return undefined;
        }
    }
}

export function storeToLocalStorage<States extends object>() {
    return function <Key extends (keyof States) & string>(key: Key, value: States[Key], converter: ((input: States[Key]) => string) = JSON.stringify): void {
        try {
            localStorage.setItem(key, converter(value));
        }
        catch (e) {
            debugger;   // Intentional
        }
    }
}

export function usePersistentState<States extends object = Record<string, unknown>>() {
    return useCallback(<Key extends (keyof States) & string>(key: Key, initialValue: States[Key], fromString: ((value: string) => States[Key]) = JSON.parse, toString: ((value: States[Key]) => string) = JSON.stringify) => {
        const [localCopy, setLocalCopy, getLocalCopy] = useState(getFromLocalStorage<States>()(key, fromString) ?? initialValue);

        // Listen for changes to this storage in other browser tabs
        useGlobalHandler(window, "storage", (e: StorageEvent) => {
            if (e.key === key) {
                const newValue = e.newValue;

                if (newValue != null)
                    setLocalCopy(fromString(newValue));
            }
        });

        const setValueWrapper = useCallback<typeof setLocalCopy>((valueOrSetter) => {

            const value: States[Key] = typeof valueOrSetter === "function"? (valueOrSetter as Function)(getLocalCopy()) : valueOrSetter;

            // Make sure this update is available immediately before the next render
            setLocalCopy(valueOrSetter);

            // Actually save the value to local storage.
            storeToLocalStorage<States>()(key, value, toString);

            if (value instanceof Date) {
                console.assert(fromString != JSON.parse);
            }
        }, [key, toString]);

        const getValue = useCallback(() => {
            const trueValue = getFromLocalStorage<States>()(key, fromString);
            return trueValue ?? localCopy;
        }, [key, fromString]);

        return [localCopy, setValueWrapper, getValue] as const;

    }, [])
}
