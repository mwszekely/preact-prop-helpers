import { PropNames_RefElementReturn_getElement, UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";

import { OnPassiveStateChange, returnFalse, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { onfocusin, onfocusout, useCallback, useEffect, useRef } from "../util/lib.js";
import { ElementProps, FocusEventType, Nullable } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";


const P = `PropNames.HasCurrentFocusParameters`;
const R = `PropNames.HasCurrentFocusReturn`;


export const PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged = `${P}.onCurrentFocusedChanged`;
export const PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged = `${P}.onCurrentFocusedInnerChanged`;
export const PropNames_HasCurrentFocusReturn_getCurrentFocused = `${R}.getCurrentFocused`;
export const PropNames_HasCurrentFocusReturn_getCurrentFocusedInner = `${R}.getCurrentFocusedInner`;


export interface UseHasCurrentFocusParametersSelf<T extends Node> {

    /**
     * Whether the element itself currently has focus.
     * 
     * `prevFocused` is generally the opposite of `focused`, but on mount it's `undefined` while `focused` is probably false (both falsy)
     * 
     * @stable
     */
    [PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged]: Nullable<OnPassiveStateChange<boolean, FocusEventType<T> | undefined>>;

    /**
     * Like `onFocusedChanged`, but also *additionally* if any child elements are focused.
     * 
     * @see this.onFocusedChanged
     * 
     * @stable
     */
    [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: Nullable<OnPassiveStateChange<boolean, FocusEventType<T> | undefined>>;
}

export interface UseHasCurrentFocusReturnTypeSelf<E extends Element> {
    props: ElementProps<E>;

    /** @stable */
    [PropNames_HasCurrentFocusReturn_getCurrentFocused](): boolean;
    /** @stable */
    [PropNames_HasCurrentFocusReturn_getCurrentFocusedInner](): boolean;
}

export interface UseHasCurrentFocusParameters<T extends Node> extends UseHasCurrentFocusParametersSelf<T>, Pick<UseRefElementReturnType<T>, typeof PropNames_RefElementReturn_getElement> { }
export interface UseHasCurrentFocusReturnType<E extends Element> extends UseHasCurrentFocusReturnTypeSelf<E> {}

/**
 * Allows monitoring whether the rendered element is or is not focused directly (i.e. would satisfy `:focus`).
 * 
 * @see {@link useHasLastFocus}, in which even if the `body` is clicked it's not considered a loss in focus.
 * 
 * @compositeParams
 */
export const useHasCurrentFocus = monitored(function useHasCurrentFocus<T extends Element>({
    [PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged]: onCurrentFocusedChanged,
    [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged,
    [PropNames_RefElementReturn_getElement]: getElement
}: UseHasCurrentFocusParameters<T>): UseHasCurrentFocusReturnType<T> {
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
        [onfocusin]: onFocusIn,
        [onfocusout]: onFocusOut
    });

    return {
        [PropNames_HasCurrentFocusReturn_getCurrentFocused]: getFocused,
        [PropNames_HasCurrentFocusReturn_getCurrentFocusedInner]: getFocusedInner,
        props: propsStable.current,
    };
})

