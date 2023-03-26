import { useCallback, useEffect, useRef } from "preact/hooks";
import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { OnPassiveStateChange, returnFalse, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { ElementProps, FocusEventType } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";

export interface UseHasCurrentFocusParameters<T extends Node> {
    refElementReturn: Required<Pick<UseRefElementReturnType<T>["refElementReturn"], "getElement">>;

    hasCurrentFocusParameters: {

        /**
         * Whether the element itself currently has focus.
         * 
         * `prevFocused` is generally the opposite of `focused`, but on mount it's `undefined` while `focused` is probably false (both falsy)
         */
        onCurrentFocusedChanged?: undefined | null | OnPassiveStateChange<boolean, FocusEventType<T>>;

        /**
         * Like `onFocusedChanged`, but also *additionally* if any child elements are focused.
         * 
         * @see this.onFocusedChanged
         */
        onCurrentFocusedInnerChanged?: undefined | null | OnPassiveStateChange<boolean, FocusEventType<T>>;
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

    const {
        hasCurrentFocusParameters: { onCurrentFocusedChanged: onFocusedChanged, onCurrentFocusedInnerChanged: onFocusedInnerChanged },
        refElementReturn: { getElement }
    } = args;


    useEnsureStability("useHasCurrentFocus", onFocusedChanged, onFocusedInnerChanged, getElement);

    const [getFocused, setFocused] = usePassiveState<boolean, FocusEventType<T>>(onFocusedChanged, returnFalse, runImmediately);
    const [getFocusedInner, setFocusedInner] = usePassiveState<boolean, FocusEventType<T>>(onFocusedInnerChanged, returnFalse, runImmediately);

    const onFocusIn = useCallback((e: FocusEventType<T>) => {
        setFocusedInner(true, e);
        setFocused(e.target == getElement(), e)
    }, []);

    const onFocusOut = useCallback((e: FocusEventType<T>) => {
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

