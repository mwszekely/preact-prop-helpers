
import { h } from "preact";
import { useCallback, useRef } from "preact/hooks";
import { UseManagedChildParameters, useManagedChildren, UseManagedChildrenParameters, UseManagedChildrenReturnTypeInfo } from "./use-child-manager";
import { useStableCallback } from "./use-stable-callback";
import { useActiveElement, UseActiveElementParameters, UseActiveElementReturnType } from "./use-active-element";
import { returnFalse, useEnsureStability, usePassiveState } from "./use-passive-state";
import { useRefElement, UseRefElementParameters, UseRefElementReturnType } from "./use-ref-element";

export interface UseHasFocusParameters<T extends Node> extends UseActiveElementParameters, UseRefElementParameters<T> {
    /**
     * Whether the element itself currently has focus.
     * 
     * `prevFocused` is generally the opposite of `focused`, but on mount it's `undefined` while `focused` is probably false (both falsy)
     */
    onFocusedChanged?(focused: boolean, prevFocused: boolean | undefined): void;

    /**
     * Like `onFocusedChanged`, but also *additionally* if any child elements are focused.
     * 
     * @see this.onFocusedChanged
     */
    onFocusedInnerChanged?(focused: boolean, prevFocused: boolean | undefined): void;

    /**
     * Similar to `onFocusedChanged`, but if there is no currently focused element, is `true` if this element that *did* have focus last.
     * 
     * This is always `true` while `focused` is `true`. If `focused` is `false`, this may be `true` or `false`.
     */
    onLastFocusedChanged?(focused: boolean, prevFocused: boolean | undefined): void;

    /**
     * Combines the implications of `onFocusedChanged` and `onFocusedChanged`.
     */
    onLastFocusedInnerChanged?(focused: boolean, prevFocused: boolean | undefined): void;
}

export interface UseHasFocusReturnType<T extends Node> extends Omit<UseRefElementReturnType<T>, "useRefElementProps">, UseActiveElementReturnType {

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

export function useHasFocus<T extends Node>({ onFocusedChanged, onFocusedInnerChanged, onLastFocusedChanged, onLastFocusedInnerChanged, onLastActiveElementChange, onActiveElementChange, onWindowFocusedChange, getDocument, getWindow, onElementChange, onMount, onUnmount }: UseHasFocusParameters<T>): UseHasFocusReturnType<T> {

    useEnsureStability("useHasFocus", onFocusedChanged, onFocusedInnerChanged, onLastFocusedChanged, onLastFocusedInnerChanged, onLastActiveElementChange, onActiveElementChange, onWindowFocusedChange);

    const [getFocused, setFocused] = usePassiveState<boolean>(onFocusedChanged, returnFalse);
    const [getFocusedInner, setFocusedInner] = usePassiveState<boolean>(onFocusedInnerChanged, returnFalse);
    const [getLastFocused, setLastFocused] = usePassiveState<boolean>(onLastFocusedChanged, returnFalse);
    const [getLastFocusedInner, setLastFocusedInner] = usePassiveState<boolean>(onLastFocusedInnerChanged, returnFalse);

    const { getElement, useRefElementProps } = useRefElement<T>({ onElementChange, onMount, onUnmount });

    const { getActiveElement, getLastActiveElement, getWindowFocused } = useActiveElement({
        getDocument,
        getWindow,
        onActiveElementChange: useCallback<NonNullable<UseActiveElementParameters["onActiveElementChange"]>>((activeElement, prevActiveElement) => {
            const selfElement = getElement();
            const focused = (selfElement != null && (selfElement == activeElement as Node | null));
            const focusedInner = (!!selfElement?.contains(activeElement as Node | null));
            setFocused(focused);
            setFocusedInner(focusedInner);
            onActiveElementChange?.(activeElement, prevActiveElement);
        }, []),
        onLastActiveElementChange: useCallback<NonNullable<UseActiveElementParameters["onLastActiveElementChange"]>>((lastActiveElement, prevLastActiveElement) => {
            const selfElement = getElement();
            const focused = (selfElement != null && (selfElement == lastActiveElement as Node | null));
            const focusedInner = (!!selfElement?.contains(lastActiveElement as Node | null));
            setLastFocused(focused);
            setLastFocusedInner(focusedInner);
            onLastActiveElementChange?.(lastActiveElement, prevLastActiveElement);
        }, []),
        onWindowFocusedChange
    });

    const useHasFocusProps = useCallback((props: h.JSX.HTMLAttributes<T>) => { return useRefElementProps(props); }, []);


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

export interface UseChildrenHaveFocusParameters extends UseManagedChildrenParameters<number, never> {
    childrenHaveFocus: {
        onAnyGainedFocus?(): void;
        onAllLostFocus?(): void;
    }
}



export interface UseChildrenHaveFocusChildParameters<E extends Element, C, K extends string, SubbestInfo> extends UseManagedChildParameters<number, C, K, never, SubbestInfo>, UseHasFocusParameters<E> {
}

export interface UseChildrenHaveFocusChildReturnType<E extends Element> extends Omit<UseRefElementReturnType<E>, "useRefElementProps">, Omit<UseHasFocusReturnType<E>, "useHasFocusProps"> {
    useChildrenHaveFocusChildProps(props: h.JSX.HTMLAttributes<E>): h.JSX.HTMLAttributes<E>;
}

export interface UseChildrenHaveFocusReturnTypeInfo<C, K extends string> extends UseManagedChildrenReturnTypeInfo<number, C, K> {
}


export interface UseChildrenHaveFocusReturnTypeWithHooks<C, K extends string> extends UseChildrenHaveFocusReturnTypeInfo<C, K> {
    useChildrenHaveFocusChild: <E extends Element>(parameters: UseChildrenHaveFocusChildParameters<E, C, K, C>) => UseChildrenHaveFocusChildReturnType<E>;
}

export function useChildrenHaveFocus<C, K extends string>({ childrenHaveFocus: { onAllLostFocus, onAnyGainedFocus }, managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange } }: UseChildrenHaveFocusParameters): UseChildrenHaveFocusReturnTypeWithHooks<C, K> {
    const { managedChildren, useManagedChild } = useManagedChildren<number, C, K>({ managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange } });
    const allElementsRef = useRef<Set<Node>>(new Set());
    const [_getFocusCount, setFocusCount] = usePassiveState<number>(useStableCallback((anyFocused: number, anyPreviouslyFocused: number | undefined) => {
        console.assert(anyFocused >= 0 && anyFocused <= 1);

        if (anyFocused && !anyPreviouslyFocused)
            onAnyGainedFocus?.();
        if (!anyFocused && anyPreviouslyFocused)
            onAllLostFocus?.();
    }));

    const useChildrenHaveFocusChild = useCallback(<E extends Element>({ onElementChange, onMount, onUnmount, getDocument, getWindow, onActiveElementChange, onFocusedChanged, onFocusedInnerChanged, onLastActiveElementChange, onLastFocusedChanged, onLastFocusedInnerChanged, onWindowFocusedChange, managedChild: { index, flags }, subInfo }: UseChildrenHaveFocusChildParameters<E, C, K, C>): UseChildrenHaveFocusChildReturnType<E> => {
        useManagedChild({ managedChild: { index, flags }, subInfo });
        const { useHasFocusProps, ...hasFocus } = useHasFocus<E>({
            getDocument,
            getWindow,
            onActiveElementChange,
            onElementChange: useCallback((e: E | null, prev: E | null | undefined) => {
                let r = onElementChange?.(e, prev);
                if (e) {
                    allElementsRef.current.add(e);
                    return () => {
                        r?.();
                        allElementsRef.current.delete(e);
                    }
                }
            }, [onElementChange]),
            onMount,
            onUnmount,
            onFocusedChanged,
            onFocusedInnerChanged,
            onLastActiveElementChange,
            onLastFocusedChanged,
            onLastFocusedInnerChanged: useStableCallback((focused: boolean, prev: boolean | undefined) => {
                if (focused) {
                    setFocusCount(p => (p ?? 0) + 1);
                }
                else if (!focused && prev) {
                    setFocusCount(p => (p ?? 0) - 1);
                }

                onLastFocusedInnerChanged?.(focused, prev);
            }),
            onWindowFocusedChange
        });

        return {
            useChildrenHaveFocusChildProps: useHasFocusProps,
            ...hasFocus
        }
    }, []);

    return {
        managedChildren,
        useChildrenHaveFocusChild
    }
}
