
import { useLayoutEffect } from "preact/hooks";
import { OnPassiveStateChange, usePassiveState } from "./use-passive-state";


/**
 * 
 * There are several different ways that a focus event can happen.  Assume
 * the following steps happen in order:
 * 
 * 1. The page loads.
 *    * Nothing is focused, but `document.activeElement` is `body`. 
 *    * No focus events are fired.
 * 2. The window is focused, an unfocusable element is clicked, text is selected, etc.
 *    * The `activeElement` remains as `body`.
 *    * A `focus`/`focusin` event *MIGHT* be fired for `body`. Depending on
 *      the browser, this depends on whether the handler was attached to `window` or `document`.
 *      Probably just best to not rely on it, or listen to `window` focus events directly.
 * 3. A focusable element is clicked, etc.
 *    * The `activeElement` is set to the new element before any event even fires.
 *    * `focusout` and `blur` are *not* fired on `body`.
 *    * `focus` and `focusin` are fired on the new element. `relatedTarget` is null.
 * 4. A focusable element is clicked, etc.
 *    * **The `activeElement` is set to the `body`** before any event even fires.
 *    * `blur` and `focusout` are fired on the old element. `relatedTarget` is the new element.
 *    * The `activeElement` is now set to the new element.
 *    * `focusin` is fired on the new element. `relatedTarget` is the old element.
 * 5. An unfocusable element is clicked, text is selected, etc.
 *    * The `activeElement` is set to `body`.
 *    * `blur` and `focusout` are fired on the old element. `relatedTarget` is null.
 *    * `focusin` is *not* fired on `body`.
 * 
 * 
 * In summary:
 * 1. Focus events *do* notify us of all changes in focus, but there is no one single comprehensive event that provides us with all available information.
 * 2. `document.activeElement` *is not* always the same as what's being referenced by a focus event. In particular, it may become `body` at any arbitrary time.
 * 3. A `blur` without a `focus` can and will occur. This means it is not possible to solely use `focus` to detect all changes.
 * 4. A `blur` event whose `relatedTarget` is null indicates that there will be no following `focus` event.
 * 
 * 
 * @param callback 
 * @returns 
 */
const dummy = 0;

const activeElementUpdaters = new Set<undefined | ((e: (Element & HTMLOrSVGElement) | null) => void)>();
const lastActiveElementUpdaters = new Set<undefined | ((e: (Element & HTMLOrSVGElement)) => void)>();
const windowFocusedUpdaters = new Set<undefined | ((focused: boolean) => void)>();
let windowFocused = true;

function focusout(e: FocusEvent) {
    if (e.relatedTarget == null) {
        for (let f of activeElementUpdaters) f?.(null);
    }
    else {
        // Just wait for the focusin event.
    }

}

function focusin(e: FocusEvent) {
    let currentlyFocusedElement = e.target as (Element & HTMLOrSVGElement);
    let lastFocusedElement = e.target as (Element & HTMLOrSVGElement);
    activeElementUpdaters.forEach(f => f?.(currentlyFocusedElement));
    lastActiveElementUpdaters.forEach(f => f?.(lastFocusedElement!));
}

function windowFocus() {
    windowFocused = true;
    windowFocusedUpdaters.forEach(f => f?.(windowFocused));
}

function windowBlur() {
    windowFocused = false;
    windowFocusedUpdaters.forEach(f => f?.(windowFocused));
}

export interface UseActiveElementParameters {

    /**
     * Called any time the active element changes. Does not need
     * to be stable.
     */
    onActiveElementChange?: OnPassiveStateChange<(Element & HTMLOrSVGElement) | null>;

    /**
     * Called any time the active element changes and is not null. 
     * Does not need to be stable.
     */
    onLastActiveElementChange?: OnPassiveStateChange<(Element & HTMLOrSVGElement)>;

    /**
     * Called any time the window gains/loses focus. Does not need
     * to be stable.
     */
    onWindowFocusedChanged?: OnPassiveStateChange<boolean>;
}

export function useActiveElement({ onActiveElementChange, onLastActiveElementChange, onWindowFocusedChanged }: UseActiveElementParameters) {

    const [getActiveElement, setActiveElement] = usePassiveState(onActiveElementChange, undefined);
    const [getLastActiveElement, setLastActiveElement] = usePassiveState(onLastActiveElementChange, undefined);
    const [getWindowFocused, setWindowFocused] = usePassiveState(onWindowFocusedChanged, windowFocused);

    useLayoutEffect(() => {

        if (activeElementUpdaters.size === 0) {
            document.addEventListener("focusin", focusin, { passive: true });
            document.addEventListener("focusout", focusout, { passive: true });
            window.addEventListener("focus", windowFocus, { passive: true });
            window.addEventListener("blur", windowBlur, { passive: true });
        }

        // Add them even if they're undefined to more easily
        // manage the ">0 means don't add handlers" logic.
        activeElementUpdaters.add(setActiveElement);
        lastActiveElementUpdaters.add(setLastActiveElement);
        windowFocusedUpdaters.add(setWindowFocused);

        return () => {
            activeElementUpdaters.delete(setActiveElement);
            lastActiveElementUpdaters.delete(setLastActiveElement);
            windowFocusedUpdaters.delete(setWindowFocused);

            if (activeElementUpdaters.size === 0) {
                document.removeEventListener("focusin", focusin);
                document.removeEventListener("focusout", focusout);
                window.removeEventListener("focus", windowFocus);
                window.removeEventListener("blur", windowBlur);
            }
        }
    }, []);

    return { getActiveElement, getLastActiveElement, getWindowFocused };
}
