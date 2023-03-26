
import { FocusEvent, FocusEventHandler, useCallback, useEffect, useRef } from "react";
import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { OnPassiveStateChange, returnFalse, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { ElementProps } from "../util/types.js";

export interface UseHasCurrentFocusParameters<T extends Node> {
    refElementReturn: Required<Pick<UseRefElementReturnType<T>["refElementReturn"], "getElement">>;

    hasCurrentFocusParameters: {

        /**
         * Whether the element itself currently has focus.
         * 
         * `prevFocused` is generally the opposite of `focused`, but on mount it's `undefined` while `focused` is probably false (both falsy)
         */
        onCurrentFocusedChanged?: undefined | null | OnPassiveStateChange<boolean, FocusEvent<T>>; //((focused: boolean, prevFocused: boolean | undefined) => void);

        /**
         * Like `onFocusedChanged`, but also *additionally* if any child elements are focused.
         * 
         * @see this.onFocusedChanged
         */
        onCurrentFocusedInnerChanged?: undefined | null | OnPassiveStateChange<boolean, FocusEvent<T>>; //((focused: boolean, prevFocused: boolean | undefined) => void);
    }
}

export interface UseHasCurrentFocusReturnType<E extends Node> {
    hasCurrentFocusReturn: {
        propsStable: ElementProps<E>
        /**
         * Modifies the element to be able to track its own focus state
         */
        //propsStable: HTMLAttributes<T>;

        /** STABLE */
        getCurrentFocused(): boolean;
        /** STABLE */
        getCurrentFocusedInner(): boolean;
    }
}

export function useHasCurrentFocus<T extends Node>(args: UseHasCurrentFocusParameters<T>): UseHasCurrentFocusReturnType<T> {
    monitorCallCount(useHasCurrentFocus);

    const {
        hasCurrentFocusParameters: { onCurrentFocusedChanged: onFocusedChanged, onCurrentFocusedInnerChanged: onFocusedInnerChanged },
        refElementReturn: { getElement }
    } = args;


    useEnsureStability("useHasCurrentFocus", onFocusedChanged, onFocusedInnerChanged, getElement);

    const [getFocused, setFocused] = usePassiveState<boolean, FocusEvent<T>>(onFocusedChanged, returnFalse, runImmediately);
    const [getFocusedInner, setFocusedInner] = usePassiveState<boolean, FocusEvent<T>>(onFocusedInnerChanged, returnFalse, runImmediately);

    const onFocusIn = useCallback<FocusEventHandler<T>>((e) => {

        setFocusedInner(true, e);
        setFocused(e.target == getElement(), e)
    }, []);

    const onFocusOut = useCallback<FocusEventHandler<T>>((e) => {
        // Even if we're focusOut-ing to another inner element,
        // that'll be caught during onFocusIn,
        // so just set everything to false and let that revert things back to true if necessary.
        setFocusedInner(false, e);
        setFocused(false, e);
    }, []);

    useEffect(() => {
        return () => {
            setFocused(false);
            setFocusedInner(false);
        }
    }, []);

    const propsStable = useRef<ElementProps<T>>({
        onFocus: onFocusIn,
        onBlur: onFocusOut
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

