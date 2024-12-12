
import { MapOfSets } from "map-and-set-extensions";

import { OnPassiveStateChange, returnNull, returnTrue, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { Nullable, StateUpdater, useEffect } from "../util/lib.js";
import { useMonitoring } from "../util/use-call-count.js";


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


const activeElementUpdaters: Map<Window | null | undefined, Set<Foo<Node | null>>> = new Map();
const lastActiveElementUpdaters: Map<Window | null | undefined, Set<Foo<Node>>> = new Map();
const windowFocusedUpdaters: Map<Window | null | undefined, Set<Foo<boolean>>> = new Map();
const windowsFocusedUpdaters = new Map<Window | null | undefined, boolean>();


// The focusin and focusout events often fire synchronously in the middle of running code.
// E.G. calling element.focus() can cause a focusin event handler to immediately interrupt that code.
// For the purpose of improving stability, we debounce all focus events to the next microtask.
function forEachUpdater<T>(window: Window | null | undefined, map: Map<Window | null | undefined, Set<Foo<T>>>, value: T, reason: any) {
    const updaters = map.get(window);

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

export interface UseActiveElementParametersSelf {
    /**
     * Called any time the active element changes.
     * 
     * @stable
     */
    onActiveElementChange: Nullable<OnPassiveStateChange<Element | null, FocusEvent>>;

    /**
     * Called any time the active element changes and is not null.
     * 
     * @stable
     */
    onLastActiveElementChange: Nullable<OnPassiveStateChange<Element, FocusEvent>>;

    /**
     * Called any time the window gains/loses focus.
     * 
     * @stable
     */
    onWindowFocusedChange: Nullable<OnPassiveStateChange<boolean, FocusEvent>>;

    /**
     * This must be a function that returns the document associated with whatever elements we're listening to.
     * 
     * E.G. someDivElement.ownerDocument
     * 
     * @stable
     */
    getDocument(): Document;

    /**
     * By default, event handlers are attached to the document's defaultView Window.
     * If you need something different, override it here.
     * 
     * @stable
     */
    //getWindow: Nullable<((document: Document) => Window)>;
}


export interface UseActiveElementParameters {

    activeElementParameters: UseActiveElementParametersSelf;
}

export interface UseActiveElementReturnTypeSelf {
    /** 
     * Returns whatever element is currently focused, or `null` if there's no focused element
     * @stable
     */
    getActiveElement: () => Element | null;
    /** 
     * Returns whatever element is currently focused, or whatever element was most recently focused if there's no focused element
     * @stable
     */
    getLastActiveElement: () => Element;
    /** 
     * Returns if the window itself has focus or not
     * @stable
     */
    getWindowFocused: () => boolean;
}

export interface UseActiveElementReturnType {
    activeElementReturn: UseActiveElementReturnTypeSelf;
}

/**
 * Allows you to inspect which element in the `document` currently has focus, which was most recently focused if none are currently, and whether or not the window has focus 
 * 
 * @remarks The document's body receiving focus, like it does when you click on an empty area, is counted as no element having focus for all intents and purposes
 * 
 * This is a passive hook, so by default it returns getter functions that report this information but the component will not re-render by default when the active element changes.
 * 
 * If you need the component to re-render when the active element changes, use the `on*Change` arguments to set some state on your end.
 * 
 * @compositeParams
 */
export function useActiveElement({ activeElementParameters: { onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getDocument } }: UseActiveElementParameters): UseActiveElementReturnType {
    return useMonitoring(function useActiveElement(): UseActiveElementReturnType {
        useEnsureStability("useActiveElement", onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getDocument);

        useEffect(() => {
            const document = getDocument();
            const window = (document?.defaultView);

            if ((activeElementUpdaters.get(window)?.size ?? 0) === 0) {
                document?.addEventListener("focusin", focusin, { passive: true });
                document?.addEventListener("focusout", focusout, { passive: true });
                window?.addEventListener("focus", windowFocus, { passive: true });
                window?.addEventListener("blur", windowBlur, { passive: true });
            }

            const laeu = { send: setActiveElement as StateUpdater<Node | null>, lastSent: undefined }
            const llaeu = { send: setLastActiveElement as StateUpdater<Node>, lastSent: undefined };
            const lwfu = { send: setWindowFocused, lastSent: undefined };

            MapOfSets.add(activeElementUpdaters, window, laeu);
            MapOfSets.add(lastActiveElementUpdaters, window, llaeu);
            MapOfSets.add(windowFocusedUpdaters, window, lwfu);

            return () => {
                MapOfSets.delete(activeElementUpdaters, window, laeu);
                MapOfSets.delete(lastActiveElementUpdaters, window, llaeu);
                MapOfSets.delete(windowFocusedUpdaters, window, lwfu);

                if (activeElementUpdaters.size === 0) {
                    document?.removeEventListener("focusin", focusin);
                    document?.removeEventListener("focusout", focusout);
                    window?.removeEventListener("focus", windowFocus);
                    window?.removeEventListener("blur", windowBlur);
                }
            }
        }, [])

        const [getActiveElement, setActiveElement] = usePassiveState<Element | null, FocusEvent>(onActiveElementChange, returnNull, { debounceRendering: runImmediately, skipMountInitialization: true });
        const [getLastActiveElement, setLastActiveElement] = usePassiveState<Element, FocusEvent>(onLastActiveElementChange, returnNull as () => never, { debounceRendering: runImmediately, skipMountInitialization: true });
        const [getWindowFocused, setWindowFocused] = usePassiveState<boolean, FocusEvent>(onWindowFocusedChange, returnTrue, { debounceRendering: runImmediately, skipMountInitialization: true });

        return { activeElementReturn: { getActiveElement, getLastActiveElement, getWindowFocused } };
    });
}
