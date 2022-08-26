
import { h } from "preact";
import { useCallback } from "preact/hooks";
import { useActiveElement, UseActiveElementParameters, UseActiveElementReturnType } from "./use-active-element";
import { returnFalse, useEnsureStability, usePassiveState } from "./use-passive-state";
import { UseRefElementReturnType } from "./use-ref-element";

export interface UseHasFocusParameters<T extends Node> extends UseActiveElementParameters<T> {
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

export interface UseHasFocusReturnType<T extends Node> extends Omit<UseRefElementReturnType<T>, "useRefElementProps">, Omit<UseActiveElementReturnType<T>, "useActiveElementProps"> {

    /**
     * Modifies the element to be able to track its own focus state
     * 
     * **STABLE**
     */
    useHasFocusProps: (props: h.JSX.HTMLAttributes<T>) => h.JSX.HTMLAttributes<T>;

    /** STABLE */
    getFocused(): boolean;
    /** STABLE */
    getFocusedInner(): boolean;
    /** STABLE */
    getLastFocused(): boolean;
    /** STABLE */
    getLastFocusedInner(): boolean;
}

export function useHasFocus<T extends Node>({ onFocusedChanged, onFocusedInnerChanged, onLastFocusedChanged, onLastFocusedInnerChanged, onLastActiveElementChange, onActiveElementChange, onWindowFocusedChange }: UseHasFocusParameters<T>): UseHasFocusReturnType<T> {

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

    const useHasFocusProps = useCallback((props: h.JSX.HTMLAttributes<T>) => { return useActiveElementProps(props); }, []);


    return { 
        useHasFocusProps, 
        getElement, 
        getFocused, 
        getFocusedInner, 
        getLastFocused, 
        getLastFocusedInner, 
        getActiveElement, 
        getLastActiveElement, 
        getWindowFocused 
    };
}
