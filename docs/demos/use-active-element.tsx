import { useCallback } from "preact/hooks";
import { $activeElementParameters, $activeElementReturn, $getActiveElement, $getDocument, $getLastActiveElement, $getWindowFocused, $onActiveElementChange, $onLastActiveElementChange, $onWindowFocusedChange, useActiveElement, useState } from "../../dist/preact/index.js";

export function UseActiveElementDemo() {
    
    const getDocument = useCallback(() => { return globalThis.document }, []);

    const [activeElement, setActiveElement] = useState<Element | null>(null);
    const [lastActiveElement, setLastActiveElement] = useState<Element | null>(null);
    const [windowFocused, setWindowFocused] = useState<boolean | null>(null);

    const {
        [$activeElementReturn]: {
            [$getActiveElement]: getActiveElement,
            [$getLastActiveElement]: getLastActiveElement,
            [$getWindowFocused]: getWindowFocused
        } } = useActiveElement({
            [$activeElementParameters]: {
                [$getDocument]: getDocument,
                [$onActiveElementChange]: setActiveElement,
                [$onLastActiveElementChange]: setLastActiveElement,
                [$onWindowFocusedChange]: setWindowFocused
            }
        });
}
