import { useCallback } from "preact/hooks";
import { useStableCallback } from "./use-stable-callback";
import { useGlobalHandler } from "./use-event-handler";
import { useState } from "./use-state";

export interface Foo {
    foo: "foo";
}

export function getFromLocalStorage<States extends object>() {
    return function <Key extends (keyof States) & string>(key: Key, converter: (input: string) => States[Key]): States[Key] | undefined {
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
    return useCallback(<Key extends (keyof States) & string>(key: Key, initialValue: States[Key], fromString: ((value: string) => States[Key]) = JSON.parse, toString: ((value: States[Key]) => string) = JSON.stringify) => {
        const [localCopy, setLocalCopy, getLocalCopy] = useState(getFromLocalStorage<States>()(key, fromString) ?? initialValue);

        // Listen for changes to this storage in other browser tabs
        useGlobalHandler(window, "storage", (e: StorageEvent) => {
            if (e.key === key) {
                const newValue = e.newValue;

                if (newValue != null)
                    setLocalCopy(fromString(newValue));
            }
        })

        const setValueWrapper = useCallback<typeof setLocalCopy>((valueOrSetter) => {

            const value: States[Key] = typeof valueOrSetter === "function"? (valueOrSetter as Function)(getLocalCopy()) : valueOrSetter;

            // Make sure this update is available immediately before the next render
            setLocalCopy(valueOrSetter);

            // Actually save the value to local storage.
            storeToLocalStorage<States>()(key, value, toString);
        }, []);

        // TODO: Does not react to changes in key or fromString.
        // But on the plus side it's as stable as a normal getState call
        // and, like, key *probably* shouldn't change and changes in fromString *shouldn't* matter...
        // Better to make it stable but not work in some cases, or work in all obscure cases but with a useless stability guarantee?
        // I dunno. 🤷🏻
        const getValue = useCallback(() => {
            const trueValue = getFromLocalStorage<States>()(key, fromString);
            return trueValue ?? localCopy;
        }, []);

        return [localCopy, setValueWrapper, getValue] as const;

    }, [])
}
