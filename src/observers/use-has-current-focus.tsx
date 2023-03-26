
import type { JSX } from "preact";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { OnPassiveStateChange, returnFalse, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { ElementProps } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";

export interface UseHasCurrentFocusParameters<T extends Node> {
    refElementReturn: Required<Pick<UseRefElementReturnType<T>["refElementReturn"], "getElement">>;

    hasCurrentFocusParameters: {

        /**
         * Whether the element itself currently has focus.
         * 
         * `prevFocused` is generally the opposite of `focused`, but on mount it's `undefined` while `focused` is probably false (both falsy)
         */
        onCurrentFocusedChanged?: undefined | null | OnPassiveStateChange<boolean, JSX.TargetedFocusEvent<T>>;

        /**
         * Like `onFocusedChanged`, but also *additionally* if any child elements are focused.
         * 
         * @see this.onFocusedChanged
         */
        onCurrentFocusedInnerChanged?: undefined | null | OnPassiveStateChange<boolean, JSX.TargetedFocusEvent<T>>;
    }
}

export interface UseHasCurrentFocusReturnType<E extends Element> {
    hasCurrentFocusReturn: {
        propsStable: ElementProps<E>
        /**
         * Modifies the element to be able to track its own focus state
         */
        //propsStable: ElementProps<T>;

        /** STABLE */
        getCurrentFocused(): boolean;
        /** STABLE */
        getCurrentFocusedInner(): boolean;
    }
}

export function useHasCurrentFocus<T extends Element>(args: UseHasCurrentFocusParameters<T>): UseHasCurrentFocusReturnType<T> {
    monitorCallCount(useHasCurrentFocus);

    type R = JSX.TargetedFocusEvent<T>;
    const {
        hasCurrentFocusParameters: { onCurrentFocusedChanged: onFocusedChanged, onCurrentFocusedInnerChanged: onFocusedInnerChanged },
        refElementReturn: { getElement }
    } = args;


    useEnsureStability("useHasCurrentFocus", onFocusedChanged, onFocusedInnerChanged, getElement);

    const [getFocused, setFocused] = usePassiveState<boolean, R>(onFocusedChanged, returnFalse, runImmediately);
    const [getFocusedInner, setFocusedInner] = usePassiveState<boolean, R>(onFocusedInnerChanged, returnFalse, runImmediately);

    const onFocusIn = useCallback<JSX.EventHandler<JSX.TargetedFocusEvent<T>>>((e) => {

        setFocusedInner(true, e as R);
        setFocused(e.target == getElement(), e as R)
    }, []);

    const onFocusOut = useCallback<JSX.EventHandler<JSX.TargetedFocusEvent<T>>>((e) => {
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

    const propsStable = useRef<ElementProps<T>>({
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

