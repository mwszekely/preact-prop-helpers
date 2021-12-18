
import { useCallback, useLayoutEffect } from "preact/hooks";
import { useRefElement, UseRefElementReturnType } from "./use-ref-element";
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

const activeElementUpdaters = new Map<Window | null | undefined, Set<undefined | ((e: (Element & HTMLOrSVGElement) | null) => void)>>();
const lastActiveElementUpdaters = new Map<Window | null | undefined, Set<undefined | ((e: (Element & HTMLOrSVGElement)) => void)>>();
const windowFocusedUpdaters = new Map<Window | null | undefined, Set<undefined | ((focused: boolean) => void)>>();
let windowsFocused = new Map<Window | null | undefined, boolean>();

function forEachUpdater<T>(element: Element | null | undefined, map: Map<Window | null | undefined, Set<undefined | ((e: T) => void)>>, value: T) {
    const window = element?.ownerDocument.defaultView;
    for (let [otherWindow, updaters] of map) {
        if (window === otherWindow) {
            for (let updater of updaters) {
                updater?.(value);
            }
        }
    }
}

function focusout(e: FocusEvent) {

    if (e.relatedTarget == null) {
        forEachUpdater(e.target as Element | null, activeElementUpdaters, null);
    }
    else {
        // Just wait for the focusin event.
    }

}

function focusin(e: FocusEvent) {
    const window = (e.target as Element).ownerDocument.defaultView;
    let currentlyFocusedElement = e.target as (Element & HTMLOrSVGElement);
    forEachUpdater(e.target as Element | null, activeElementUpdaters, currentlyFocusedElement);
    forEachUpdater(e.target as Element | null, lastActiveElementUpdaters, currentlyFocusedElement);
}

function windowFocus(e: FocusEvent) {
    const window = (e.target as Element).ownerDocument.defaultView;
    windowsFocused.set(window, true);
    forEachUpdater(e.target as Element | null, windowFocusedUpdaters, true);
}

function windowBlur(e: FocusEvent) {
    const window = (e.target as Element).ownerDocument.defaultView;
    windowsFocused.set(window, false);
    forEachUpdater(e.target as Element | null, windowFocusedUpdaters, false);
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
    onWindowFocusedChange?: OnPassiveStateChange<boolean>;
}

export interface UseActiveElementReturnType<T extends Node> extends Omit<UseRefElementReturnType<T>, "useRefElementProps"> {
    /** Returns whatever element is currently focused, or `null` if there's no focused element */
    getActiveElement: () => (Element & HTMLOrSVGElement) | null;
    /** Returns whatever element is currently focused, or whatever element was most recently focused if there's no focused element */
    getLastActiveElement: () => Element & HTMLOrSVGElement;
    /** Returns if the window itself has focus or not */
    getWindowFocused: () => boolean;

    useActiveElementProps: UseRefElementReturnType<T>["useRefElementProps"];
}

/**
 * Allows you to inspect which element in the `document` currently has focus, which was most recently focused if none are currently, and whether or not the window has focus by returning the following functions:
 * * `getActiveElement()`
 * * `getLastActiveElement()`
 * * `getWindowFocused()`
 * * **No prop-modifying hook is returned because none is necessary**
 * 
 * (The document's body receiving focus, like it does when you click on an empty area, is counted as no element having focus for all intents and purposes)
 * 
 * This is a passive hook, so by default it returns getter functions that report this information but the component will not re-render by default when the active element changes.
 * 
 * If you need the component to re-render when the active element changes, use the `on*Change` arguments to set some state on your end.
 */
export function useActiveElement<T extends Node>({ onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange }: UseActiveElementParameters): UseActiveElementReturnType<T> {

    const { getElement, useRefElementProps } = useRefElement<T>({
        onElementChange: useCallback((element: T | null) => {

            if (element) {
                const document = element.ownerDocument;
                const window = document?.defaultView;

                if (activeElementUpdaters.size === 0) {
                    document?.addEventListener("focusin", focusin, { passive: true });
                    document?.addEventListener("focusout", focusout, { passive: true });
                    window?.addEventListener("focus", windowFocus, { passive: true });
                    window?.addEventListener("blur", windowBlur, { passive: true });
                }

                // Add them even if they're undefined to more easily
                // manage the ">0 means don't add handlers" logic.
                const localActiveElementUpdaters = activeElementUpdaters.get(window) ?? new Set();
                const localLastActiveElementUpdaters = lastActiveElementUpdaters.get(window) ?? new Set();
                const localWindowFocusedUpdaters = windowFocusedUpdaters.get(window) ?? new Set();

                localActiveElementUpdaters.add(setActiveElement);
                localLastActiveElementUpdaters.add(setLastActiveElement);
                localWindowFocusedUpdaters.add(setWindowFocused);

                activeElementUpdaters.set(window, localActiveElementUpdaters);
                lastActiveElementUpdaters.set(window, localLastActiveElementUpdaters);
                windowFocusedUpdaters.set(window, localWindowFocusedUpdaters);

                return () => {
                    activeElementUpdaters.get(window)!.delete(setActiveElement);
                    lastActiveElementUpdaters.get(window)!.delete(setLastActiveElement);
                    windowFocusedUpdaters.get(window)!.delete(setWindowFocused);

                    if (activeElementUpdaters.size === 0) {
                        document?.removeEventListener("focusin", focusin);
                        document?.removeEventListener("focusout", focusout);
                        window?.removeEventListener("focus", windowFocus);
                        window?.removeEventListener("blur", windowBlur);
                    }
                }
            }
        }, [])
    })

    const [getActiveElement, setActiveElement] = usePassiveState<(Element & HTMLOrSVGElement) | null>(onActiveElementChange, undefined);
    const [getLastActiveElement, setLastActiveElement] = usePassiveState<(Element & HTMLOrSVGElement)>(onLastActiveElementChange, undefined);
    const [getWindowFocused, setWindowFocused] = usePassiveState<boolean>(onWindowFocusedChange, () => true);

    return { getElement, useActiveElementProps: useRefElementProps, getActiveElement, getLastActiveElement, getWindowFocused };
}
