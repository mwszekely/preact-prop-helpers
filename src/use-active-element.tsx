
import { Ref } from "preact";
import { useCallback, useEffect, useLayoutEffect, useMemo } from "preact/hooks";
import { useRefElement, UseRefElementPropsParameters, UseRefElementPropsReturnType, UseRefElementReturnType } from "./use-ref-element";
import { useGlobalHandler } from "./use-event-handler";
import { MergedProps, useMergedProps } from "./use-merged-props";
import { useState } from "./use-state"
import { isFocusable } from "tabbable";

interface UseFocusParameters { }

export interface UseHasFocusPropsParameters<T extends EventTarget> extends UseRefElementPropsParameters<T> { }

export type UseHasFocusPropsReturnType<T extends EventTarget, P extends UseHasFocusPropsParameters<T>> = MergedProps<T, UseRefElementPropsReturnType<T, { onFocus: (e: FocusEvent) => void; onBlur: (e: FocusEvent) => void; }>, P>;
/*
interface UseFocusResult<T extends EventTarget> {
    useFocusProps: <P extends UseFocusProps<T>>(props: P) => MergedProps<FocusProps, P>
}*/

export interface UseHasFocusReturnType<T extends Node> {

    /**
     * Modifies the element to be able to track its own focus state
     */
    useHasFocusProps: <P extends UseHasFocusPropsParameters<T>>(props: P) => UseHasFocusPropsReturnType<T, P>;

    /**
     * Whether the element itself currently has focus.
     */
    focused: boolean;

    /**
     * Like `focused`, but also *additionally* if any child elements are focused.
     * 
     * @see focused
     */
    focusedInner: boolean;

    /**
     * Similar to `focused`, but if there is no currently focused element, is `true` if this element that *did* have focus last.
     * 
     * This is always `true` while `focused` is `true`. If `focused` is `false`, this may be `true` or `false`.
     */
    lastFocused: boolean;

    /**
     * Combines the implications of `lastFocused` and `focusedInner`.
     */
    lastFocusedInner: boolean;

    /**
     * The currently-focused element, for reference.
     * 
     * Corresponds to `focused` and `focusedInner`, though this may have a value even while those are `false`.
     */
    focusedElement: EventTarget | null;

    /**
     * The most recently-focused element, for reference.
     * 
     * Corresponds to `focused` and `focusedInner`, though this may have a value even while those are `false`.
     */
    lastFocusedElement: EventTarget | null;
}

export function useHasFocus<T extends Node>({ }: UseFocusParameters = {}): UseHasFocusReturnType<T> {

    //const [focusedElement, setFocusedElement, getFocusedElement] = useState<EventTarget | null>(null);
    //const [focused, setFocused] = useState(false);
    //const [focusedInner, setFocusedInner] = useState(false);

    const { element, getElement, useRefElementProps } = useRefElement<T>();
    const { activeElement, lastActiveElement } = useActiveElement();

    const useHasFocusProps = useCallback(<P extends UseHasFocusPropsParameters<T>>(props: P) => {
        return useRefElementProps(props);
    }, []);

    const focused = useMemo(() => { return element == activeElement }, [element, activeElement]);
    const focusedInner = useMemo(() => { return element?.contains(activeElement) ?? false }, [element, activeElement]);

    const lastFocused = useMemo(() => { return element == lastActiveElement }, [element, lastActiveElement]);
    const lastFocusedInner = useMemo(() => { return element?.contains(lastActiveElement) ?? false }, [element, lastActiveElement]);


    return {
        useHasFocusProps,

        focusedElement: activeElement,
        lastFocusedElement: lastActiveElement,

        focused,
        focusedInner,
        lastFocused,
        lastFocusedInner
    };
}

/*
(function () {
    document.addEventListener("focus", e => {
        console.log({
            type: "focus",
            activeElement: document.activeElement,
            toFocus: e.target,
            toBlur: e.relatedTarget
        })
    }, { capture: true });

    document.addEventListener("blur", e => {
        console.log({
            type: "blur",
            activeElement: document.activeElement,
            toBlur: e.target,
            toFocus: e.relatedTarget
        })
    }, { capture: true })


    document.addEventListener("focusin", e => {
        console.log({
            type: "focusin",
            activeElement: document.activeElement,
            toFocus: e.target,
            toBlur: e.relatedTarget
        })
    });

    document.addEventListener("focusout", e => {
        console.log({
            type: "focusout",
            activeElement: document.activeElement,
            toBlur: e.target,
            toFocus: e.relatedTarget
        })
    })
})()*/

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



export function useActiveElement() {
    const [i, setI] = useState(0);
    const [windowFocused, setWindowFocused] = useState(false);

    const wfTrue = useCallback(() => { setWindowFocused(true);  }, [])
    const wfFalse = useCallback(() => { setWindowFocused(false);  }, [])

    useLayoutEffect(() => {
        const F = () => setI(i => ++i);
        if (updaters.size === 0) {
            document.addEventListener("focusin", focusin, { passive: true });
            document.addEventListener("focusout", focusout, { passive: true });
            window.addEventListener("focus", wfTrue, { passive: true });
            window.addEventListener("blur", wfFalse, { passive: true });
        }
        updaters.add(F);

        return () => {
            updaters.delete(F);
            if (updaters.size === 0) {
                document.removeEventListener("focusin", focusin);
                document.removeEventListener("focusout", focusout);
                window.removeEventListener("focus", wfTrue);
                window.removeEventListener("blur", wfFalse);
            }
        }
    }, []);

    return {
        activeElement: currentlyFocusedElement,
        lastActiveElement: lastFocusedElement,
        windowFocused
    }
}
