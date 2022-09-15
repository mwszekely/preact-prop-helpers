
import { StateUpdater, useCallback } from "preact/hooks";
import { debounceRendering, OnPassiveStateChange, returnNull, returnTrue, useEnsureStability, usePassiveState } from "./use-passive-state";
import { useRefElement, UseRefElementParameters, UseRefElementReturnType } from "./use-ref-element";


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
const _dummy = 0;

const activeElementUpdaters = new Map<Window | null | undefined, Set<undefined | ((e: Node | null) => void)>>();
const lastActiveElementUpdaters = new Map<Window | null | undefined, Set<undefined | ((e: Node) => void)>>();
const windowFocusedUpdaters = new Map<Window | null | undefined, Set<undefined | ((focused: boolean) => void)>>();
const windowsFocusedUpdaters = new Map<Window | null | undefined, boolean>();

const microtasks = new Set<Map<any, any>>();

// The focusin and focusout events often fire syncronously in the middle of running code.
// E.G. calling element.focus() can cause a focusin event handler to immediately interrupt that code.
// For the purpose of improving stability, we debounce all focus events to the next microtask.
function forEachUpdater<T>(window: Window | null | undefined, map: Map<Window | null | undefined, Set<undefined | ((e: T) => void)>>, value: T) {
    if (!microtasks.has(map)) {
        microtasks.add(map);
        debounceRendering(() => {
            microtasks.delete(map);

            const updaters = map.get(window);
            if (updaters) {
                for (const updater of updaters) {
                    updater?.(value);
                }
            }
        });
    }
}

function focusout(e: FocusEvent) {
    const window = (e.target as Element).ownerDocument.defaultView;

    if (e.relatedTarget == null) {
        forEachUpdater(window, activeElementUpdaters, null);
    }
    else {
        // Just wait for the focusin event.
    }

}

function focusin(e: FocusEvent) {
    const window = (e.target as Element).ownerDocument.defaultView;
    const currentlyFocusedElement = e.target as (Element & HTMLOrSVGElement);
    forEachUpdater(window, activeElementUpdaters, currentlyFocusedElement);
    forEachUpdater(window, lastActiveElementUpdaters, currentlyFocusedElement);
}

function windowFocus(e: FocusEvent) {
    const window = (e.target instanceof Window ? e.target : e.currentTarget instanceof Window ? e.currentTarget : (e.target as Element).ownerDocument.defaultView);
    windowsFocusedUpdaters.set(window, true);
    forEachUpdater(window, windowFocusedUpdaters, true);
}

function windowBlur(e: FocusEvent) {
    const window = (e.target instanceof Window ? e.target : e.currentTarget instanceof Window ? e.currentTarget : (e.target as Element).ownerDocument.defaultView);
    windowsFocusedUpdaters.set(window, false);
    forEachUpdater(window, windowFocusedUpdaters, false);
}

export interface UseActiveElementParameters<T extends Node> {

    /**
     * Called any time the active element changes. Must be stable.
     */
    onActiveElementChange?: OnPassiveStateChange<Element | null>;

    /**
     * Called any time the active element changes and is not null. 
     * Must be stable.
     */
    onLastActiveElementChange?: OnPassiveStateChange<Element>;

    /**
     * Called any time the window gains/loses focus. Must be stable.
     */
    onWindowFocusedChange?: OnPassiveStateChange<boolean>;

    onMount?: UseRefElementParameters<T>["onMount"];
    onUnmount?: UseRefElementParameters<T>["onUnmount"];
    onMountChange?: UseRefElementParameters<T>["onElementChange"];
}

export interface UseActiveElementReturnType<T extends Node> extends Omit<UseRefElementReturnType<T>, "useRefElementProps"> {
    /** 
     * Returns whatever element is currently focused, or `null` if there's no focused element
     * **STABLE**
     */
    getActiveElement: () => Element | null;
    /** 
     * Returns whatever element is currently focused, or whatever element was most recently focused if there's no focused element
     * **STABLE**
     */
    getLastActiveElement: () => Element;
    /** 
     * Returns if the window itself has focus or not
     * **STABLE**
     */
    getWindowFocused: () => boolean;

    /** **STABLE** */
    useActiveElementProps: UseRefElementReturnType<T>["useRefElementProps"];
}

/**
 * Allows you to inspect which element in the `document` currently has focus, which was most recently focused if none are currently, and whether or not the window has focus by returning the following functions:
 * * `getActiveElement()`
 * * `getLastActiveElement()`
 * * `getWindowFocused()`
 * 
 * (The document's body receiving focus, like it does when you click on an empty area, is counted as no element having focus for all intents and purposes)
 * 
 * This is a passive hook, so by default it returns getter functions that report this information but the component will not re-render by default when the active element changes.
 * 
 * If you need the component to re-render when the active element changes, use the `on*Change` arguments to set some state on your end.
 */
export function useActiveElement<T extends Node>({ onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, onMount, onUnmount, onMountChange }: UseActiveElementParameters<T>): UseActiveElementReturnType<T> {

    useEnsureStability("useActiveElement", onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, onMountChange, onMount, onUnmount);

    const { getElement, useRefElementProps } = useRefElement<T>({
        onMount,
        onUnmount,
        onElementChange: useCallback((element: T | null, prevValue: T | null | undefined) => {
            onMountChange?.(element, prevValue);
            if (element) {
                const document = element.ownerDocument;
                const window = document?.defaultView;

                if ((activeElementUpdaters.get(window)?.size ?? 0) === 0) {
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

                localActiveElementUpdaters.add(setActiveElement as StateUpdater<Node | null>);
                localLastActiveElementUpdaters.add(setLastActiveElement as StateUpdater<Node>);
                localWindowFocusedUpdaters.add(setWindowFocused);

                activeElementUpdaters.set(window, localActiveElementUpdaters);
                lastActiveElementUpdaters.set(window, localLastActiveElementUpdaters);
                windowFocusedUpdaters.set(window, localWindowFocusedUpdaters);

                return () => {
                    activeElementUpdaters.get(window)!.delete(setActiveElement as StateUpdater<Node | null>);
                    lastActiveElementUpdaters.get(window)!.delete(setLastActiveElement as StateUpdater<Node>);
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

    const [getActiveElement, setActiveElement] = usePassiveState<Element | null>(onActiveElementChange, returnNull);
    const [getLastActiveElement, setLastActiveElement] = usePassiveState<Element>(onLastActiveElementChange, returnNull as () => never);
    const [getWindowFocused, setWindowFocused] = usePassiveState<boolean>(onWindowFocusedChange, returnTrue);

    return { getElement, useActiveElementProps: useRefElementProps, getActiveElement, getLastActiveElement, getWindowFocused };
}
