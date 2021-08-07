import { useCallback } from "preact/hooks";
import { useGlobalHandler } from "./use-event-handler";
import { useState } from "./use-state";

export interface Foo {
    foo: "foo";
}

function getFromLocalStorage<States extends object>() {
    return function <Key extends (keyof States) & string>(key: Key, initialValue: States[Key], converter: (input: string) => States[Key]): States[Key] {
        try {
            const item = localStorage.getItem(key);
            if (!item)
                return initialValue;
            return converter(item);
        }
        catch (e) {
            debugger;   // Intentional
            return initialValue;
        }
    }
}

function storeToLocalStorage<States extends object>() {
    return function <Key extends (keyof States) & string>(key: Key, value: States[Key], converter: (input: States[Key]) => string): void {
        try {
            localStorage.setItem(key, converter(value));
        }
        catch (e) {
            debugger;   // Intentional
        }
    }
}

export function usePersistentState<States extends object = Record<string, unknown>>() {
    return useCallback(<Key extends (keyof States) & string>(key: Key, initialValue: States[Key], fromString: (value: string) => States[Key] = JSON.parse, toString: (value: States[Key]) => string = JSON.stringify) => {
        const [value, setValue, getValue] = useState(getFromLocalStorage<States>()(key, initialValue, fromString));

        // Listen for changes to this storage in other browser tabs
        useGlobalHandler(window, "storage", (e: StorageEvent) => {
            if (e.key === key) {
                const newValue = e.newValue;

                if (newValue != null)
                    setValue(fromString(newValue));
            }
        })

        const setValueWrapper = useCallback<typeof setValue>((valueOrSetter) => {

            const value: States[Key] = typeof valueOrSetter === "function"? (valueOrSetter as Function)(getValue()) : valueOrSetter;

            storeToLocalStorage<States>()(key, value, toString);
        }, [])

        return [value, setValueWrapper, getValue] as const;

    }, [])
}
