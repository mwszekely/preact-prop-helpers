import { useCallback } from "react";
import { useActiveElement } from "../../dist/index.js";
import { useState } from "../../dist/index.js";

export function UseActiveElementDemo() {
    
    const getWindow = useCallback(() => { return getDocument().defaultView!; }, []);
    const getDocument = useCallback(() => { return document }, []);

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
                getWindow,
                onActiveElementChange: setActiveElement,
                onLastActiveElementChange: setLastActiveElement,
                onWindowFocusedChange: setWindowFocused
            }
        });
}
