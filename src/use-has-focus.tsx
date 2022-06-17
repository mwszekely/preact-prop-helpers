
import { h } from "preact";
import { useCallback } from "preact/hooks";
import { useActiveElement, UseActiveElementParameters, UseActiveElementReturnType } from "./use-active-element";
import { MergedProps } from "./use-merged-props";
import { returnFalse, useEnsureStability, usePassiveState } from "./use-passive-state";
import { UseRefElementPropsReturnType, UseRefElementReturnType } from "./use-ref-element";

export interface UseFocusParameters<T extends Node> extends UseActiveElementParameters<T> {
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

export interface UseHasFocusReturnType<T extends Node> extends Omit<UseRefElementReturnType<T>, "useRefElementProps">, Omit<UseActiveElementReturnType<T>, "useActiveElementProps"> {

    /**
     * Modifies the element to be able to track its own focus state
     */
    useHasFocusProps: <P extends UseHasFocusPropsParameters<T>>(props: P) => UseHasFocusPropsReturnType<T, P>;

    getFocused(): boolean;
    getFocusedInner(): boolean;
    getLastFocused(): boolean;
    getLastFocusedInner(): boolean;
}

export function useHasFocus<T extends Node>({ onFocusedChanged, onFocusedInnerChanged, onLastFocusedChanged, onLastFocusedInnerChanged, onLastActiveElementChange, onActiveElementChange, onWindowFocusedChange }: UseFocusParameters<T>): UseHasFocusReturnType<T> {

    useEnsureStability("useHasFocus", onFocusedChanged, onFocusedInnerChanged, onLastFocusedChanged, onLastFocusedInnerChanged, onLastActiveElementChange, onActiveElementChange, onWindowFocusedChange);

    const [getFocused, setFocused] = usePassiveState<boolean>(onFocusedChanged, returnFalse);
    const [getFocusedInner, setFocusedInner] = usePassiveState<boolean>(onFocusedInnerChanged, returnFalse);
    const [getLastFocused, setLastFocused] = usePassiveState<boolean>(onLastFocusedChanged, returnFalse);
    const [getLastFocusedInner, setLastFocusedInner] = usePassiveState<boolean>(onLastFocusedInnerChanged, returnFalse);

    const { getActiveElement, getLastActiveElement, getWindowFocused, useActiveElementProps, getElement } = useActiveElement<T>({
        onActiveElementChange: useCallback<NonNullable<UseActiveElementParameters<T>["onActiveElementChange"]>>((activeElement, prevActiveElement) => {
            const selfElement = getElement();
            const focused = (selfElement != null && (selfElement == activeElement as Node | null));
            const focusedInner = (!!selfElement?.contains(activeElement as Node | null));
            setFocused(focused);
            setFocusedInner(focusedInner);
            onActiveElementChange?.(activeElement, prevActiveElement);
        }, []),
        onLastActiveElementChange: useCallback<NonNullable<UseActiveElementParameters<T>["onLastActiveElementChange"]>>((lastActiveElement, prevLastActiveElement) => {
            const selfElement = getElement();
            const focused = (selfElement != null && (selfElement == lastActiveElement as Node | null));
            const focusedInner = (!!selfElement?.contains(lastActiveElement as Node | null));
            setLastFocused(focused);
            setLastFocusedInner(focusedInner);
            onLastActiveElementChange?.(lastActiveElement, prevLastActiveElement);
        }, []),
        onWindowFocusedChange
    });

    const useHasFocusProps = useCallback(<P extends UseHasFocusPropsParameters<T>>(props: P) => { return useActiveElementProps(props); }, [useActiveElementProps]);


    return { useHasFocusProps, getElement, getFocused, getFocusedInner, getLastFocused, getLastFocusedInner, getActiveElement, getLastActiveElement, getWindowFocused };
}
