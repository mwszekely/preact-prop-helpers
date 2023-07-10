
import { OnPassiveStateChange, returnNull, returnTrue, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { StateUpdater, useEffect } from "../util/lib.js";
import { monitorCallCount } from "../util/use-call-count.js";


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
 */
const _dummy = 0;

interface Foo<T> {
    lastSent: T | undefined;
    send: (e: T, r: FocusEvent) => void;
}

const activeElementUpdaters = new Map<Window | null | undefined, Set<Foo<Node | null>>>();
const lastActiveElementUpdaters = new Map<Window | null | undefined, Set<Foo<Node>>>();
const windowFocusedUpdaters = new Map<Window | null | undefined, Set<Foo<boolean>>>();
const windowsFocusedUpdaters = new Map<Window | null | undefined, boolean>();


// The focusin and focusout events often fire synchronously in the middle of running code.
// E.G. calling element.focus() can cause a focusin event handler to immediately interrupt that code.
// For the purpose of improving stability, we debounce all focus events to the next microtask.
function forEachUpdater<T>(window: Window | null | undefined, map: Map<Window | null | undefined, Set<Foo<T>>>, value: T, reason: any) {
    const updaters = map.get(window);
    if (updaters) {
        if (updaters) {
            for (const updater of updaters) {
                const { lastSent, send } = updater;
                if (value !== lastSent) {
                    send(value, reason);
                    updater.lastSent = value;
                }

            }
        }
    }
}

function focusout(e: FocusEvent) {
    const window = (e.target as Element).ownerDocument.defaultView;

    if (e.relatedTarget == null) {
        forEachUpdater(window, activeElementUpdaters, null, e);
    }
    else {
        // Just wait for the focusin event.
    }

}

function focusin(e: FocusEvent) {
    const window = (e.target as Element).ownerDocument.defaultView;
    const currentlyFocusedElement = e.target as (Element & HTMLOrSVGElement);
    forEachUpdater(window, activeElementUpdaters, currentlyFocusedElement, e);
    forEachUpdater(window, lastActiveElementUpdaters, currentlyFocusedElement, e);
}

function windowFocus(e: FocusEvent) {
    const window = (e.target instanceof Window ? e.target : e.currentTarget instanceof Window ? e.currentTarget : (e.target as Element).ownerDocument.defaultView);
    windowsFocusedUpdaters.set(window, true);
    forEachUpdater(window, windowFocusedUpdaters, true, e);
}

function windowBlur(e: FocusEvent) {
    const window = (e.target instanceof Window ? e.target : e.currentTarget instanceof Window ? e.currentTarget : (e.target as Element).ownerDocument.defaultView);
    windowsFocusedUpdaters.set(window, false);
    forEachUpdater(window, windowFocusedUpdaters, false, e);
}

export interface UseActiveElementParameters {

    activeElementParameters: { 
        /**
         * Called any time the active element changes. Must be stable.
         */
        onActiveElementChange?: OnPassiveStateChange<Element | null, FocusEvent> | null | undefined;

        /**
         * Called any time the active element changes and is not null. 
         * Must be stable.
         */
        onLastActiveElementChange?: OnPassiveStateChange<Element, FocusEvent> | null | undefined;

        /**
         * Called any time the window gains/loses focus. Must be stable.
         */
        onWindowFocusedChange?: OnPassiveStateChange<boolean, FocusEvent> | null | undefined;

        /**
         * This must be a function that returns the document associated with whatever elements we're listening to.
         * 
         * E.G. someDivElement.ownerDocument
         * 
         * **MUST** be stable
         */
        getDocument(): Document;

        /**
         * By default, event handlers are attached to the document's defaultView Window.
         * If you need something different, override it here.
         * 
         * **MUST** be stable
         */
        getWindow?: ((document: Document) => Window) | null | undefined;
    }
}

export interface UseActiveElementReturnType {
    activeElementReturn: {
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
    }
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
export function useActiveElement({ activeElementParameters: { onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getDocument, getWindow } }: UseActiveElementParameters): UseActiveElementReturnType {
    monitorCallCount(useActiveElement);

    useEnsureStability("useActiveElement", onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getDocument, getWindow);

    useEffect(() => {
        const document = getDocument();
        const window = (getWindow?.(document) ?? document?.defaultView);

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

        const laeu = { send: setActiveElement as StateUpdater<Node | null>, lastSent: undefined }
        const llaeu = { send: setLastActiveElement as StateUpdater<Node>, lastSent: undefined };
        const lwfu = { send: setWindowFocused, lastSent: undefined };

        localActiveElementUpdaters.add(laeu);
        localLastActiveElementUpdaters.add(llaeu);
        localWindowFocusedUpdaters.add(lwfu);

        activeElementUpdaters.set(window, localActiveElementUpdaters);
        lastActiveElementUpdaters.set(window, localLastActiveElementUpdaters);
        windowFocusedUpdaters.set(window, localWindowFocusedUpdaters);

        return () => {
            activeElementUpdaters.get(window)!.delete(laeu);
            lastActiveElementUpdaters.get(window)!.delete(laeu);
            windowFocusedUpdaters.get(window)!.delete(lwfu);

            if (activeElementUpdaters.size === 0) {
                document?.removeEventListener("focusin", focusin);
                document?.removeEventListener("focusout", focusout);
                window?.removeEventListener("focus", windowFocus);
                window?.removeEventListener("blur", windowBlur);
            }
        }
    }, [])

    const [getActiveElement, setActiveElement] = usePassiveState<Element | null, FocusEvent>(onActiveElementChange, returnNull, runImmediately);
    const [getLastActiveElement, setLastActiveElement] = usePassiveState<Element, FocusEvent>(onLastActiveElementChange, returnNull as () => never, runImmediately);
    const [getWindowFocused, setWindowFocused] = usePassiveState<boolean, FocusEvent>(onWindowFocusedChange, returnTrue, runImmediately);

    return { activeElementReturn: { getActiveElement, getLastActiveElement, getWindowFocused } };
}
