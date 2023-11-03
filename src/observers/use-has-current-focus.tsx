import { UseRefElement } from "../dom-helpers/use-ref-element.js";
import { OnPassiveStateChange, returnFalse, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { ElementProps, FocusEventType, onfocusin, onfocusout, useCallback, useEffect, useRef } from "../util/lib.js";
import { Nullable, Parameter, StandardDepsPick, StandardDepsPropsStable, StandardHook } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";

export interface UseHasCurrentFocusParametersSelf<T extends Node> {

    /**
     * Whether the element itself currently has focus.
     * 
     * `prevFocused` is generally the opposite of `focused`, but on mount it's `undefined` while `focused` is probably false (both falsy)
     * 
     * @stable
     */
    onCurrentFocusedChanged: Nullable<OnPassiveStateChange<boolean, FocusEventType<T> | undefined>>;

    /**
     * Like `onFocusedChanged`, but also *additionally* if any child elements are focused.
     * 
     * @see this.onFocusedChanged
     * 
     * @stable
     */
    onCurrentFocusedInnerChanged: Nullable<OnPassiveStateChange<boolean, FocusEventType<T> | undefined>>;
}

export interface UseHasCurrentFocusReturnTypeSelf {
    /** @stable */
    getCurrentFocused(): boolean;
    /** @stable */
    getCurrentFocusedInner(): boolean;
}


export type UseHasCurrentFocus<E extends Element> =
    StandardHook<
        "hasCurrentFocus", 
        UseHasCurrentFocusParametersSelf<E>, [StandardDepsPick<"return", UseRefElement<E>, "refElementReturn", "pick", "getElement">],
        UseHasCurrentFocusReturnTypeSelf, [StandardDepsPropsStable<E>]
    >;


/**
 * Allows monitoring whether the rendered element is or is not focused directly (i.e. would satisfy `:focus`).
 * 
 * @see {@link useHasLastFocus}, in which even if the `body` is clicked it's not considered a loss in focus.
 * 
 * @compositeParams
 */
export const useHasCurrentFocus = monitored(function useHasCurrentFocus<T extends Element>(args: Parameter<UseHasCurrentFocus<T>>): ReturnType<UseHasCurrentFocus<T>> {
    const {
        hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
        refElementReturn: { getElement }
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
        [onfocusin]: onFocusIn,
        [onfocusout]: onFocusOut
    });

    return {
        propsStable: propsStable.current,
        hasCurrentFocusReturn: {
            getCurrentFocused: getFocused,
            getCurrentFocusedInner: getFocusedInner,
        }
    };
})

