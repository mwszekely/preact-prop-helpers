import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";

import { OnPassiveStateChange, returnFalse, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { FocusEventTypeByTag, TargetedPick, onfocusin, onfocusout, useCallback, useEffect, useRef } from "../util/lib.js";
import { ElementProps, Nullable, JSX } from "../util/types.js";
import { useMonitoring } from "../util/use-call-count.js";

export interface UseHasCurrentFocusParametersSelf<Tag extends keyof JSX.IntrinsicElements> {

    /**
     * Whether the element itself currently has focus.
     * 
     * `prevFocused` is generally the opposite of `focused`, but on mount it's `undefined` while `focused` is probably false (both falsy)
     * 
     * @stable
     */
    onCurrentFocusedChanged: Nullable<OnPassiveStateChange<boolean, FocusEventTypeByTag<Tag> | undefined>>;

    /**
     * Like `onFocusedChanged`, but also *additionally* if any child elements are focused.
     * 
     * @see this.onFocusedChanged
     * 
     * @stable
     */
    onCurrentFocusedInnerChanged: Nullable<OnPassiveStateChange<boolean, FocusEventTypeByTag<Tag> | undefined>>;
}

export interface UseHasCurrentFocusParameters<Tag extends keyof JSX.IntrinsicElements> extends TargetedPick<UseRefElementReturnType<Tag>, "refElementReturn", "getElement"> {
    hasCurrentFocusParameters: UseHasCurrentFocusParametersSelf<Tag>;
}

export interface UseHasCurrentFocusReturnTypeSelf<Tag extends keyof JSX.IntrinsicElements> {
    propsStable: ElementProps<Tag>
    /**
     * Modifies the element to be able to track its own focus state
     */
    //propsStable: ElementProps<T>;

    /** @stable */
    getCurrentFocused(): boolean;
    /** @stable */
    getCurrentFocusedInner(): boolean;
}

export interface UseHasCurrentFocusReturnType<Tag extends keyof JSX.IntrinsicElements> {
    hasCurrentFocusReturn: UseHasCurrentFocusReturnTypeSelf<Tag>;
}

/**
 * Allows monitoring whether the rendered element is or is not focused directly (i.e. would satisfy `:focus`).
 * 
 * @see {@link useHasLastFocus}, in which even if the `body` is clicked it's not considered a loss in focus.
 * 
 * @compositeParams
 */
export function useHasCurrentFocus<Tag extends keyof JSX.IntrinsicElements>(args: UseHasCurrentFocusParameters<Tag>): UseHasCurrentFocusReturnType<Tag> {
    return useMonitoring(function useHasCurrentFocus(): UseHasCurrentFocusReturnType<Tag> {
        const {
            hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged },
            refElementReturn: { getElement }
        } = args;


        useEnsureStability("useHasCurrentFocus", onCurrentFocusedChanged, onCurrentFocusedInnerChanged, getElement);

        const [getFocused, setFocused] = usePassiveState<boolean, FocusEventTypeByTag<Tag> | undefined>(onCurrentFocusedChanged, returnFalse, { debounceRendering: runImmediately, skipMountInitialization: true });
        const [getFocusedInner, setFocusedInner] = usePassiveState<boolean, FocusEventTypeByTag<Tag> | undefined>(onCurrentFocusedInnerChanged, returnFalse, { debounceRendering: runImmediately, skipMountInitialization: true });

        const onFocusIn = useCallback((e: FocusEventTypeByTag<Tag>) => {
            setFocusedInner(true, e);
            setFocused(e.target == getElement(), e)
        }, []);

        const onFocusOut = useCallback((e: FocusEventTypeByTag<Tag>) => {
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

        const propsStable = useRef<{}>({
            [onfocusin]: onFocusIn,
            [onfocusout]: onFocusOut,
        });

        return {
            hasCurrentFocusReturn: {
                propsStable: propsStable.current as ElementProps<Tag>,
                getCurrentFocused: getFocused,
                getCurrentFocusedInner: getFocusedInner,
            }
        };
    });
}

