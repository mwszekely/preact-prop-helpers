import { OnPassiveStateChange, PassiveStateUpdater, returnFalse, returnZero, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { FocusEventTypeByTag } from "../util/lib.js";
import { TargetedPick, JSX } from "../util/types.js";
import { useMonitoring } from "../util/use-call-count.js";
import { UseHasCurrentFocusParameters } from "./use-has-current-focus.js";


export interface UseChildrenHaveFocusParametersSelf<Tag extends keyof JSX.IntrinsicElements> {
    /**
     * Fires `true` once any of the children have become focused, and `false` once all of the children have become unfocused.
     * 
     * @stable
     */
    onCompositeFocusChange: null | OnPassiveStateChange<boolean, FocusEventTypeByTag<Tag> | undefined>;
}


export interface UseChildrenHaveFocusParameters<Tag extends keyof JSX.IntrinsicElements> {
    childrenHaveFocusParameters: UseChildrenHaveFocusParametersSelf<Tag>
}

export interface UseChildrenHaveFocusChildReturnType<Tag extends keyof JSX.IntrinsicElements> extends TargetedPick<UseHasCurrentFocusParameters<Tag>, "hasCurrentFocusParameters", "onCurrentFocusedInnerChanged"> {
}

export interface UseChildrenHaveFocusReturnTypeSelf {
    /** @stable */
    getAnyFocused(): boolean;
}

export interface UseChildrenHaveFocusReturnType<Tag extends keyof JSX.IntrinsicElements> {
    childrenHaveFocusReturn: UseChildrenHaveFocusReturnTypeSelf;
    context: UseChildrenHaveFocusContext<Tag>;
}

export interface UseChildrenHaveFocusContext<Tag extends keyof JSX.IntrinsicElements> {
    childrenHaveFocusChildContext: {
        /** @stable */
        setFocusCount: PassiveStateUpdater<number, FocusEventTypeByTag<Tag> | undefined>;
    }
}

export interface UseChildrenHaveFocusChildParameters<Tag extends keyof JSX.IntrinsicElements> {
    context: UseChildrenHaveFocusContext<Tag>;
}




/**
 * Allows a composite component (such as a radio group or listbox) to listen
 * for an "overall focusin/out" event; this hook lets you know when focus has 
 * moved in/out of this grouping of children EVEN IF there is no actual parent DOM element.
 * 
 * @remarks I.E. you can use this without needing a parent `<div>` to listen for a `focusout` event.
 * 
 * @hasChild {@link useChildrenHaveFocusChild}
 * 
 * @compositeParams
 */
export function useChildrenHaveFocus<ChildElementTag extends keyof JSX.IntrinsicElements>(args: UseChildrenHaveFocusParameters<ChildElementTag>): UseChildrenHaveFocusReturnType<ChildElementTag> {
    return useMonitoring(function useChildrenHaveFocus(): UseChildrenHaveFocusReturnType<ChildElementTag> {
        const { childrenHaveFocusParameters: { onCompositeFocusChange } } = args;

        const [getAnyFocused, setAnyFocused] = usePassiveState<boolean, FocusEventTypeByTag<ChildElementTag> | undefined>(onCompositeFocusChange, returnFalse, { debounceRendering: runImmediately, skipMountInitialization: true });
        const [_getFocusCount, setFocusCount] = usePassiveState<number, FocusEventTypeByTag<ChildElementTag> | undefined>(useStableCallback<OnPassiveStateChange<number, FocusEventTypeByTag<ChildElementTag> | undefined>>((anyFocused, anyPreviouslyFocused, e) => {
            console.assert(anyFocused >= 0 && anyFocused <= 1);
            setAnyFocused(!!(anyFocused && !anyPreviouslyFocused), e);
        }), returnZero, { debounceRendering: setTimeout, skipMountInitialization: true });    // setTimeout is used for the debounce to be somewhat generous with timing, and to guard against the default being able to be runImmediately...

        return {
            childrenHaveFocusReturn: { getAnyFocused },
            context: useMemoObject<UseChildrenHaveFocusContext<ChildElementTag>>({ childrenHaveFocusChildContext: useMemoObject<UseChildrenHaveFocusContext<ChildElementTag>["childrenHaveFocusChildContext"]>({ setFocusCount }) }),
        }
    });
}

/**
 * @compositeParams
 */
export function useChildrenHaveFocusChild<Tag extends keyof JSX.IntrinsicElements>({ context: { childrenHaveFocusChildContext: { setFocusCount } } }: UseChildrenHaveFocusChildParameters<Tag>): UseChildrenHaveFocusChildReturnType<Tag> {
    return useMonitoring(function useChildrenHaveFocusChild(): UseChildrenHaveFocusChildReturnType<Tag> {
        return {
            hasCurrentFocusParameters: {
                onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e) => {
                    if (focused) {
                        setFocusCount(p => (p ?? 0) + 1, e);
                    }
                    else if (!focused && prev) {
                        setFocusCount(p => (p ?? 0) - 1, e);
                    }
                }),
            }
        };
    });
}