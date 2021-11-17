
import { h } from "preact";
import { useCallback } from "preact/hooks";
import { usePassiveState } from "./use-passive-state";
import { useActiveElement } from "./use-active-element";
import { MergedProps } from "./use-merged-props";
import { useRefElement, UseRefElementPropsReturnType, UseRefElementReturnType } from "./use-ref-element";

export interface UseFocusParameters {
    /**
     * Whether the element itself currently has focus.
     */
    onFocusedChanged?(focused: boolean): void;

    /**
     * Like `focused`, but also *additionally* if any child elements are focused.
     * 
     * @see setFocused
     */
    onFocusedInnerChanged?(focused: boolean): void;

    /**
     * Similar to `setFocused`, but if there is no currently focused element, is `true` if this element that *did* have focus last.
     * 
     * This is always `true` while `focused` is `true`. If `focused` is `false`, this may be `true` or `false`.
     */
    onLastFocusedChanged?(focused: boolean): void;

    /**
     * Combines the implications of `setLastFocused` and `setFocusedInner`.
     */
    onLastFocusedInnerChanged?(focused: boolean): void;
}

export interface UseHasFocusPropsParameters<T extends EventTarget> extends h.JSX.HTMLAttributes<T> { }

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

    getFocused(): boolean;
    getFocusedInner(): boolean;
    getLastFocused(): boolean;
    getLastFocusedInner(): boolean;
}

export function useHasFocus<T extends Node>({ onFocusedChanged, onFocusedInnerChanged, onLastFocusedChanged, onLastFocusedInnerChanged }: UseFocusParameters): UseHasFocusReturnType<T> {

    const { getElement, useRefElementProps } = useRefElement<T>({  });

    const [getFocused, setFocused] = usePassiveState<boolean>(onFocusedChanged, false);
    const [getFocusedInner, setFocusedInner] = usePassiveState<boolean>(onFocusedInnerChanged, false);
    const [getLastFocused, setLastFocused] = usePassiveState<boolean>(onLastFocusedChanged, false);
    const [getLastFocusedInner, setLastFocusedInner] = usePassiveState<boolean>(onLastFocusedInnerChanged, false);

    useActiveElement({
        onActiveElementChange: node => {
            const element = getElement();
            setFocused(element == node && element != null);
            setFocusedInner(!!element?.contains(node));
        },
        onLastActiveElementChange: node => {
            const element = getElement();
            setLastFocused?.(element == (node as Node) && element != null);
            setLastFocusedInner?.(!!element?.contains(node));
        }
    });

    const useHasFocusProps = useCallback(<P extends UseHasFocusPropsParameters<T>>(props: P) => { return useRefElementProps(props); }, [useRefElementProps]);


    return { useHasFocusProps, getElement, getFocused, getFocusedInner, getLastFocused, getLastFocusedInner };
}
