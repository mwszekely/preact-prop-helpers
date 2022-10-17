
import { h } from "preact";
import { useCallback, useRef } from "preact/hooks";
//import { UseManagedChildParameters, useManagedChildren, UseManagedChildrenParameters, UseManagedChildrenReturnTypeInfo } from "./use-child-manager";
import { useStableCallback } from "./use-stable-callback";
import { useActiveElement, UseActiveElementParameters, UseActiveElementReturnType } from "./use-active-element";
import { returnFalse, useEnsureStability, usePassiveState } from "./use-passive-state";
import { useRefElement, UseRefElementParameters, UseRefElementReturnType } from "./use-ref-element";
import { useMergedProps } from "./use-merged-props";

export interface UseHasCurrentFocusParameters<T extends Node> {
    refElementReturn: Required<Pick<UseRefElementReturnType<T>["refElementReturn"], "getElement">>;

    hasCurrentFocusParameters: {

        /**
         * Whether the element itself currently has focus.
         * 
         * `prevFocused` is generally the opposite of `focused`, but on mount it's `undefined` while `focused` is probably false (both falsy)
         */
        onCurrentFocusedChanged: null | ((focused: boolean, prevFocused: boolean | undefined) => void);

        /**
         * Like `onFocusedChanged`, but also *additionally* if any child elements are focused.
         * 
         * @see this.onFocusedChanged
         */
        onCurrentFocusedInnerChanged: null | ((focused: boolean, prevFocused: boolean | undefined) => void);
    }
}

export interface UseHasCurrentFocusReturnType<E extends Node> {
    hasCurrentFocusReturn: {
        propsStable: h.JSX.HTMLAttributes<E>
        /**
         * Modifies the element to be able to track its own focus state
         */
        //propsStable: h.JSX.HTMLAttributes<T>;

        /** STABLE */
        getCurrentFocused(): boolean;
        /** STABLE */
        getCurrentFocusedInner(): boolean;
    }
}

export function useHasCurrentFocus<T extends Node>(args: UseHasCurrentFocusParameters<T>): UseHasCurrentFocusReturnType<T> {
    const {
        hasCurrentFocusParameters: { onCurrentFocusedChanged: onFocusedChanged, onCurrentFocusedInnerChanged: onFocusedInnerChanged },
        refElementReturn: { getElement }
    } = args;


    useEnsureStability("useHasCurrentFocus", onFocusedChanged, onFocusedInnerChanged, getElement);

    const [getFocused, setFocused] = usePassiveState<boolean>(onFocusedChanged, returnFalse);
    const [getFocusedInner, setFocusedInner] = usePassiveState<boolean>(onFocusedInnerChanged, returnFalse);

    const onFocusIn = useCallback((e: h.JSX.TargetedFocusEvent<T>) => {
        setFocusedInner(true);
        setFocused(e.target == getElement())
    }, []);

    const onFocusOut = useCallback((e: h.JSX.TargetedFocusEvent<T>) => {
        if (e.target == getElement()) {
            setFocusedInner(false);
            setFocused(false);
        }
    }, []);

    const propsStable = useRef<h.JSX.HTMLAttributes<T>>({
        onfocusin: onFocusIn,
        onfocusout: onFocusOut
    })

    return {
        hasCurrentFocusReturn: {
            propsStable: propsStable.current,
            getCurrentFocused: getFocused,
            getCurrentFocusedInner: getFocusedInner,
        }
    };
}

