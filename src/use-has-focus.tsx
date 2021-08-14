
import { useCallback, useLayoutEffect, useMemo } from "preact/hooks";
import { useActiveElement } from "./use-active-element";
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
