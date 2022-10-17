
import { h } from "preact";
import { useCallback, useRef } from "preact/hooks";
//import { UseManagedChildParameters, useManagedChildren, UseManagedChildrenParameters, UseManagedChildrenReturnTypeInfo } from "./use-child-manager";
import { useStableCallback } from "./use-stable-callback";
import { useActiveElement, UseActiveElementParameters, UseActiveElementReturnType } from "./use-active-element";
import { returnFalse, useEnsureStability, usePassiveState } from "./use-passive-state";
import { useRefElement, UseRefElementParameters, UseRefElementReturnType } from "./use-ref-element";
import { useMergedProps } from "./use-merged-props";

export interface UseHasFocusParameters<T extends Node> extends UseActiveElementParameters {
    refElementReturn: Pick<UseRefElementReturnType<T>["refElementReturn"], "getElement">;
    hasFocusParameters: {

        /**
         * Whether the element itself currently has focus.
         * 
         * `prevFocused` is generally the opposite of `focused`, but on mount it's `undefined` while `focused` is probably false (both falsy)
         */
        onFocusedChanged: null | ((focused: boolean, prevFocused: boolean | undefined) => void);

        /**
         * Like `onFocusedChanged`, but also *additionally* if any child elements are focused.
         * 
         * @see this.onFocusedChanged
         */
        onFocusedInnerChanged: null | ((focused: boolean, prevFocused: boolean | undefined) => void);

        /**
         * Similar to `onFocusedChanged`, but if there is no currently focused element, is `true` if this element that *did* have focus last.
         * 
         * This is always `true` while `focused` is `true`. If `focused` is `false`, this may be `true` or `false`.
         */
        onLastFocusedChanged: null | ((focused: boolean, prevFocused: boolean | undefined) => void);

        /**
         * Combines the implications of `onFocusedChanged` and `onFocusedChanged`.
         */
        onLastFocusedInnerChanged: null | ((focused: boolean, prevFocused: boolean | undefined) => void);
    }
}

export interface UseHasFocusReturnType extends UseActiveElementReturnType {
    hasFocusReturn: {
        /**
         * Modifies the element to be able to track its own focus state
         */
        //propsStable: h.JSX.HTMLAttributes<T>;

        /** STABLE */
        getFocused(): boolean;
        /** STABLE */
        getFocusedInner(): boolean;
        /** STABLE */
        getLastFocused(): boolean;
        /** STABLE */
        getLastFocusedInner(): boolean;
    }
}

export function useHasFocus<T extends Node>(args: UseHasFocusParameters<T>): UseHasFocusReturnType {
    const {
        refElementReturn: { getElement },
        activeElementParameters: { onActiveElementChange, onLastActiveElementChange, ...activeElementParameters },
        hasFocusParameters: { onFocusedChanged, onFocusedInnerChanged, onLastFocusedChanged, onLastFocusedInnerChanged, ..._void }
    } = args;


    useEnsureStability("useHasFocus", onFocusedChanged, onFocusedInnerChanged, onLastFocusedChanged, onLastFocusedInnerChanged);

    const [getFocused, setFocused] = usePassiveState<boolean>(onFocusedChanged, returnFalse);
    const [getFocusedInner, setFocusedInner] = usePassiveState<boolean>(onFocusedInnerChanged, returnFalse);
    const [getLastFocused, setLastFocused] = usePassiveState<boolean>(onLastFocusedChanged, returnFalse);
    const [getLastFocusedInner, setLastFocusedInner] = usePassiveState<boolean>(onLastFocusedInnerChanged, returnFalse);

    const { activeElementReturn } = useActiveElement({
        activeElementParameters: {
            onActiveElementChange: useCallback<NonNullable<typeof onActiveElementChange>>((activeElement, prevActiveElement) => {
                const selfElement = getElement();
                const focused = (selfElement != null && (selfElement == activeElement as Node | null));
                const focusedInner = (!!selfElement?.contains(activeElement as Node | null));
                setFocused(focused);
                setFocusedInner(focusedInner);
                onActiveElementChange?.(activeElement, prevActiveElement);
            }, []),
            onLastActiveElementChange: useCallback<NonNullable<typeof onLastActiveElementChange>>((lastActiveElement, prevLastActiveElement) => {
                const selfElement = getElement();
                const focused = (selfElement != null && (selfElement == lastActiveElement as Node | null));
                const focusedInner = (!!selfElement?.contains(lastActiveElement as Node | null));
                setLastFocused(focused);
                setLastFocusedInner(focusedInner);
                onLastActiveElementChange?.(lastActiveElement, prevLastActiveElement);
            }, []),
            ...activeElementParameters
        },
    });

    return {
        activeElementReturn,
        hasFocusReturn: {
            getFocused,
            getFocusedInner,
            getLastFocused,
            getLastFocusedInner,
        }
    };
}

export interface UseChildrenHaveFocusParameters {
    childrenHaveFocusParameters: {
        onAnyGainedFocus: null | (() => void);
        onAllLostFocus: null | (() => void);
    }
}



export interface UseChildrenHaveFocusChildParameters {
}

export interface UseChildrenHaveFocusChildReturnType<E extends Element> {
    hasFocusParameters: Required<Pick<UseHasFocusParameters<E>["hasFocusParameters"], "onLastFocusedInnerChanged">>;
    refElementParameters: Required<Pick<UseRefElementParameters<E>["refElementParameters"], "onElementChange">>;
}

export interface UseChildrenHaveFocusChildReturnType2<E extends Element> extends UseChildrenHaveFocusChildReturnType<E> {
}

export interface UseChildrenHaveFocusReturnTypeInfo {
}


export interface UseChildrenHaveFocusReturnTypeWithHooks extends UseChildrenHaveFocusReturnTypeInfo {
    useChildrenHaveFocusChild: <E extends Element>(parameters: UseChildrenHaveFocusChildParameters) => UseChildrenHaveFocusChildReturnType2<E>;
}

export function useChildrenHaveFocus(args: UseChildrenHaveFocusParameters): UseChildrenHaveFocusReturnTypeWithHooks {
    const { childrenHaveFocusParameters: { onAllLostFocus, onAnyGainedFocus } } = args;

    ///const { managedChildrenReturn, useManagedChild } = useManagedChildren<number, C, K>({ managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange } });

    const allElementsRef = useRef<Set<Node>>(new Set());
    const [_getFocusCount, setFocusCount] = usePassiveState<number>(useStableCallback((anyFocused: number, anyPreviouslyFocused: number | undefined) => {
        console.assert(anyFocused >= 0 && anyFocused <= 1);

        if (anyFocused && !anyPreviouslyFocused)
            onAnyGainedFocus?.();
        if (!anyFocused && anyPreviouslyFocused)
            onAllLostFocus?.();
    }));

    const useChildrenHaveFocusChild = useCallback(<E extends Element>(args: UseChildrenHaveFocusChildParameters): UseChildrenHaveFocusChildReturnType2<E> => {


        return {
            hasFocusParameters: {
                onLastFocusedInnerChanged: useCallback((focused: boolean, prev: boolean | undefined) => {
                    if (focused) {
                        setFocusCount(p => (p ?? 0) + 1);
                    }
                    else if (!focused && prev) {
                        setFocusCount(p => (p ?? 0) - 1);
                    }
                }, []),
            },
            refElementParameters: {
                onElementChange: useCallback((e: E | null, prev: E | null | undefined) => {
                    if (e) {
                        allElementsRef.current.add(e);
                        return () => {
                            allElementsRef.current.delete(e);
                        }
                    }
                }, [])
            }
        };
    }, []);

    return {
        useChildrenHaveFocusChild
    }
}
