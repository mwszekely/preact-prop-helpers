
import { useCallback } from "preact/hooks";
import { useActiveElement } from "./use-active-element";
import { MergedProps } from "./use-merged-props";
import { useRefElement, UseRefElementPropsParameters, UseRefElementPropsReturnType, UseRefElementReturnType } from "./use-ref-element";

export interface UseFocusParameters {
    /**
     * Whether the element itself currently has focus.
     */
    setFocused?(focused: boolean): void;

    /**
     * Like `focused`, but also *additionally* if any child elements are focused.
     * 
     * @see setFocused
     */
    setFocusedInner?(focused: boolean): void;

    /**
     * Similar to `setFocused`, but if there is no currently focused element, is `true` if this element that *did* have focus last.
     * 
     * This is always `true` while `focused` is `true`. If `focused` is `false`, this may be `true` or `false`.
     */
    setLastFocused?(focused: boolean): void;

    /**
     * Combines the implications of `setLastFocused` and `setFocusedInner`.
     */
    setLastFocusedInner?(focused: boolean): void;
}

export interface UseHasFocusPropsParameters<T extends EventTarget> extends UseRefElementPropsParameters<T> { }

export type UseHasFocusPropsReturnType<T extends EventTarget, P extends UseHasFocusPropsParameters<T>> = MergedProps<T, UseRefElementPropsReturnType<T, { onFocus: (e: FocusEvent) => void; onBlur: (e: FocusEvent) => void; }>, P>;
/*
interface UseFocusResult<T extends EventTarget> {
    useFocusProps: <P extends UseFocusProps<T>>(props: P) => MergedProps<FocusProps, P>
}*/

export interface UseHasFocusReturnType<T extends Node> extends Omit<UseRefElementReturnType<T>, "useRefElementProps"> {

    /**
     * Modifies the element to be able to track its own focus state
     */
    useHasFocusProps: <P extends UseHasFocusPropsParameters<T>>(props: P) => UseHasFocusPropsReturnType<T, P>;
}

export function useHasFocus<T extends Node>({ setFocused, setFocusedInner, setLastFocused, setLastFocusedInner }: UseFocusParameters): UseHasFocusReturnType<T> {

    const { element, getElement, useRefElementProps } = useRefElement<T>();

    const setActiveElement = useCallback((node: Node | null) => {
        setFocused?.(element == node && element != null);
        setFocusedInner?.(!!element?.contains(node));
    }, [setFocused, setFocusedInner, element]);

    const setLastActiveElement = useCallback((node: Node) => {
        setLastFocused?.(element == node && element != null);
        setLastFocusedInner?.(!!element?.contains(node));
    }, [setLastFocused, setLastFocusedInner, element]);

    useActiveElement({ setActiveElement, setLastActiveElement });

    const useHasFocusProps = useCallback(<P extends UseHasFocusPropsParameters<T>>(props: P) => { return useRefElementProps(props); }, [useRefElementProps]);


    return { useHasFocusProps, element, getElement };
}
