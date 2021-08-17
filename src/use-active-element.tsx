
import { Ref } from "preact";
import { useCallback, useEffect, useLayoutEffect, useMemo } from "preact/hooks";
import { useRefElement, UseRefElementPropsParameters, UseRefElementPropsReturnType, UseRefElementReturnType } from "./use-ref-element";
import { useGlobalHandler } from "./use-event-handler";
import { MergedProps, useMergedProps } from "./use-merged-props";
import { useState } from "./use-state"
import { isFocusable } from "tabbable";


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

let currentlyFocusedElement: (Element & HTMLOrSVGElement) | null = null;
let lastFocusedElement: (Element & HTMLOrSVGElement) | null = null;
function getLastFocusedElement() {
    return lastFocusedElement;
}
function getCurrentlyFocusedElement() {
    return currentlyFocusedElement;
}

const updaters = new Set<() => void>();

function focusout(e: FocusEvent) {
    if (e.relatedTarget == null) {
        currentlyFocusedElement = null;
        for (let f of updaters) { f(); }
    }
    else {
        // Just wait for the focusin event.
    }

}

function focusin(e: FocusEvent) {
    currentlyFocusedElement = lastFocusedElement = e.target as (Element & HTMLOrSVGElement);
    for (let f of updaters) { f(); }
}

let windowFocused = true;
function windowFocus() {
    windowFocused = true;
    for (let f of updaters) { f(); }
}

function windowBlur() {
    windowFocused = false;
    for (let f of updaters) { f(); }
}


export function useActiveElement() {
    // TODO: Is this actually better than using proper state management?
    const [i, setI] = useState(0);

    useLayoutEffect(() => {
        const F = () => setI(i => ++i);
        if (updaters.size === 0) {
            document.addEventListener("focusin", focusin, { passive: true });
            document.addEventListener("focusout", focusout, { passive: true });
            window.addEventListener("focus", windowFocus, { passive: true });
            window.addEventListener("blur", windowBlur, { passive: true });
        }
        updaters.add(F);

        return () => {
            updaters.delete(F);
            if (updaters.size === 0) {
                document.removeEventListener("focusin", focusin);
                document.removeEventListener("focusout", focusout);
                window.removeEventListener("focus", windowFocus);
                window.removeEventListener("blur", windowBlur);
            }
        }
    }, []);

    return {
        activeElement: currentlyFocusedElement,
        lastActiveElement: lastFocusedElement,
        getActiveElement: getCurrentlyFocusedElement,
        getLastActiveElement: getLastFocusedElement,
        windowFocused
    }
}
