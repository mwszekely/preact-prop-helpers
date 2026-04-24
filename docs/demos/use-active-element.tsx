import { useCallback } from "react";
import { useActiveElement, useState } from "../../dist/react/index.js";

export function UseActiveElementDemo() {
    
    const getDocument = useCallback(() => { return globalThis.document }, []);

    const [activeElement, setActiveElement] = useState<Element | null>(null);
    const [lastActiveElement, setLastActiveElement] = useState<Element | null>(null);
    const [windowFocused, setWindowFocused] = useState<boolean | null>(null);

    const {
        activeElementReturn: {
            getActiveElement,
            getLastActiveElement,
            getWindowFocused
        } } = useActiveElement({
            activeElementParameters: {
                getDocument,
                onActiveElementChange: setActiveElement,
                onLastActiveElementChange: setLastActiveElement,
                onWindowFocusedChange: setWindowFocused
            }
        });
}
