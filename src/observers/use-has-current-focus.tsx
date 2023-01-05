
import { h } from "preact";
import { useCallback, useEffect, useRef } from "preact/hooks";
//import { UseManagedChildParameters, useManagedChildren, UseManagedChildrenParameters, UseManagedChildrenReturnTypeInfo } from "./use-child-manager";
import { UseRefElementReturnType } from "../dom-helpers/use-ref-element";
import { OnPassiveStateChange, returnFalse, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state";

/*
export function useHasCurrentFocusProps<E extends Element>(r: UseHasCurrentFocusReturnType<E>, ...otherProps: h.JSX.HTMLAttributes<E>[]) {
    return useMergedProps<E>(r.hasCurrentFocusReturn.propsStable, ...otherProps);
}*/

export interface UseHasCurrentFocusParameters<T extends Node> {
    refElementReturn: Required<Pick<UseRefElementReturnType<T>["refElementReturn"], "getElement">>;

    hasCurrentFocusParameters: {

        /**
         * Whether the element itself currently has focus.
         * 
         * `prevFocused` is generally the opposite of `focused`, but on mount it's `undefined` while `focused` is probably false (both falsy)
         */
        onCurrentFocusedChanged: null | OnPassiveStateChange<boolean, h.JSX.TargetedEvent<T>>; //((focused: boolean, prevFocused: boolean | undefined) => void);

        /**
         * Like `onFocusedChanged`, but also *additionally* if any child elements are focused.
         * 
         * @see this.onFocusedChanged
         */
        onCurrentFocusedInnerChanged: null | OnPassiveStateChange<boolean, h.JSX.TargetedEvent<T>>; //((focused: boolean, prevFocused: boolean | undefined) => void);
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
    type R = h.JSX.TargetedFocusEvent<T>;
    const {
        hasCurrentFocusParameters: { onCurrentFocusedChanged: onFocusedChanged, onCurrentFocusedInnerChanged: onFocusedInnerChanged },
        refElementReturn: { getElement }
    } = args;


    useEnsureStability("useHasCurrentFocus", onFocusedChanged, onFocusedInnerChanged, getElement);

    const [getFocused, setFocused] = usePassiveState<boolean, R>(onFocusedChanged, returnFalse, runImmediately);
    const [getFocusedInner, setFocusedInner] = usePassiveState<boolean, R>(onFocusedInnerChanged, returnFalse, runImmediately);

    const onFocusIn = useCallback<h.JSX.EventHandler<h.JSX.TargetedFocusEvent<T>>>((e) => {

        setFocusedInner(true, e as R);
        setFocused(e.target == getElement(), e as R)
    }, []);

    const onFocusOut = useCallback<h.JSX.EventHandler<h.JSX.TargetedFocusEvent<T>>>((e) => {
        // Even if we're focusOut-ing to another inner element,
        // that'll be caught during onFocusIn,
        // so just set everything to false and let that revert things back to true if necessary.
        setFocusedInner(false, e as R);
        setFocused(false, e as R);
    }, []);

    useEffect(() => {
        return () => {
            setFocused(false);
            setFocusedInner(false);
        }
    }, []);

    const propsStable = useRef<h.JSX.HTMLAttributes<T>>({
        onfocusin: onFocusIn,
        onfocusout: onFocusOut
    });

    useEffect(() => {
        return () => {
            setFocused(false);
            setFocusedInner(false);
        }
    }, []);

    return {
        hasCurrentFocusReturn: {
            propsStable: propsStable.current,
            getCurrentFocused: getFocused,
            getCurrentFocusedInner: getFocusedInner,
        }
    };
}

