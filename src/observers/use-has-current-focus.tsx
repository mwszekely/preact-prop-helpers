import { $getElement, UseRefElementReturnType, $refElementReturn } from "../dom-helpers/use-ref-element.js";

import { OnPassiveStateChange, returnFalse, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { TargetedPick, onfocusin, onfocusout, useCallback, useEffect, useRef } from "../util/lib.js";
import { ElementProps, FocusEventType, Nullable } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";

export const $onCurrentFocusedChanged = Symbol();
export const $onCurrentFocusedInnerChanged = Symbol();
export const $hasCurrentFocusParameters = Symbol();
export const $getCurrentFocused = Symbol();
export const $getCurrentFocusedInner = Symbol();
export const $hasCurrentFocusReturn = Symbol();

export interface UseHasCurrentFocusParametersSelf<T extends Node> {

    /**
     * Whether the element itself currently has focus.
     * 
     * `prevFocused` is generally the opposite of `focused`, but on mount it's `undefined` while `focused` is probably false (both falsy)
     * 
     * @stable
     */
    [$onCurrentFocusedChanged]: Nullable<OnPassiveStateChange<boolean, FocusEventType<T> | undefined>>;

    /**
     * Like `onFocusedChanged`, but also *additionally* if any child elements are focused.
     * 
     * @see this.onFocusedChanged
     * 
     * @stable
     */
    [$onCurrentFocusedInnerChanged]: Nullable<OnPassiveStateChange<boolean, FocusEventType<T> | undefined>>;
}

export interface UseHasCurrentFocusParameters<T extends Node> extends TargetedPick<UseRefElementReturnType<T>, typeof $refElementReturn, typeof $getElement> {
    [$hasCurrentFocusParameters]: UseHasCurrentFocusParametersSelf<T>;
}

export interface UseHasCurrentFocusReturnTypeSelf<E extends Element> {
    propsStable: ElementProps<E>
    /**
     * Modifies the element to be able to track its own focus state
     */
    //propsStable: ElementProps<T>;

    /** @stable */
    [$getCurrentFocused](): boolean;
    /** @stable */
    [$getCurrentFocusedInner](): boolean;
}

export interface UseHasCurrentFocusReturnType<E extends Element> {
    [$hasCurrentFocusReturn]: UseHasCurrentFocusReturnTypeSelf<E>;
}

/**
 * Allows monitoring whether the rendered element is or is not focused directly (i.e. would satisfy `:focus`).
 * 
 * @see {@link useHasLastFocus}, in which even if the `body` is clicked it's not considered a loss in focus.
 * 
 * @compositeParams
 */
export const useHasCurrentFocus = monitored(function useHasCurrentFocus<T extends Element>(args: UseHasCurrentFocusParameters<T>): UseHasCurrentFocusReturnType<T> {
    const {
        [$hasCurrentFocusParameters]: { [$onCurrentFocusedChanged]: onCurrentFocusedChanged, [$onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged },
        [$refElementReturn]: { [$getElement]: getElement }
    } = args;


    useEnsureStability("useHasCurrentFocus", onCurrentFocusedChanged, onCurrentFocusedInnerChanged, getElement);

    const [getFocused, setFocused] = usePassiveState<boolean, FocusEventType<T> | undefined>(onCurrentFocusedChanged, returnFalse, runImmediately);
    const [getFocusedInner, setFocusedInner] = usePassiveState<boolean, FocusEventType<T> | undefined>(onCurrentFocusedInnerChanged, returnFalse, runImmediately);

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
            setFocused(false, undefined);
            setFocusedInner(false, undefined);
        }
    }, []);

    const propsStable = useRef<ElementProps<T>>({
        [onfocusin as never]: onFocusIn,
        [onfocusout as never]: onFocusOut
    });

    return {
        [$hasCurrentFocusReturn]: {
            propsStable: propsStable.current,
            [$getCurrentFocused]: getFocused,
            [$getCurrentFocusedInner]: getFocusedInner,
        }
    };
})

