
import { useCallback, useLayoutEffect, useMemo } from "preact/hooks";
import { ActiveElementFilterInfo, useActiveElement } from "./use-active-element";
import { MergedProps } from "./use-merged-props";
import { useRefElement, UseRefElementPropsParameters, UseRefElementPropsReturnType } from "./use-ref-element";
import { useState } from "./use-state";

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
}

export function useHasFocus<T extends Node>({ }: UseFocusParameters = {}): UseHasFocusReturnType<T> {

    // These are slightly redundant, but any time the focus changes, we need to know if it's "relevant" to us.
    // It's "relevant" if the newly-focused element is a child of us,
    // OR if we're focused and focus moves OUTSIDE of us our our children.
    // Because of that second bit, we need to keep track of where the focus was the last time we checked for the filter.
    const [hasFocus, setHasFocus, getHasFocus] = useState(false);
    const [hasLastFocus, setHasLastFocus, getHasLastFocus] = useState(false);

    const { element, getElement, useRefElementProps } = useRefElement<T>();
    const { activeElement, lastActiveElement } = useActiveElement(useCallback(({ current, last, windowFocused }: ActiveElementFilterInfo) => {
        // Keep in mind that once we get our element, even if the hook and filter functions
        // don't re-run, the currently-focused element will still be returned below, and,
        // even if it's not us or one of our children, will still be safely filtered out at render time.
        let element = getElement();
        if (!element)
            return false;


        let hasFocusNow = (element.contains(current) || element.contains(last));

        if (hasFocusNow) {
            return true;
        }
        else {
            let hadFocusBeforeThis = (getHasLastFocus() || getHasFocus());
            if (hadFocusBeforeThis) {
                // Return true once, so that useActiveElement will return one instance of a different element having focus.
                // Then, back outside this filter function, we'll know that we're no longer focused.
                return true;
            }
            return false;
        }
    }, []));

    // These are primarily used for bookkeeping during the filter function above.
    useLayoutEffect(() => { setHasFocus(element?.contains(activeElement) ?? false); }, [element, activeElement]);
    useLayoutEffect(() => { setHasLastFocus(element?.contains(lastActiveElement) ?? false); }, [element, lastActiveElement]);

    const useHasFocusProps = useCallback(<P extends UseHasFocusPropsParameters<T>>(props: P) => { return useRefElementProps(props); }, [useRefElementProps]);

    const focused = useMemo(() => { return element == activeElement }, [element, activeElement]);
    const focusedInner = useMemo(() => { return element?.contains(activeElement) ?? false }, [element, activeElement]);

    const lastFocused = useMemo(() => { return element == lastActiveElement }, [element, lastActiveElement]);
    const lastFocusedInner = useMemo(() => { return element?.contains(lastActiveElement) ?? false }, [element, lastActiveElement]);


    return {
        useHasFocusProps,

        focused,
        focusedInner,
        lastFocused,
        lastFocusedInner
    };
}
