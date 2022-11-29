
import { useStableObject } from "../preact-extensions/use-stable-getter";
import { UseHasCurrentFocusParameters } from "./use-has-current-focus";
import { OnPassiveStateChange, PassiveStateUpdater, returnFalse, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state";
import { useStableCallback } from "../preact-extensions/use-stable-callback";
import { h } from "preact";


export interface UseChildrenHaveFocusParameters<T extends Element, R extends h.JSX.TargetedFocusEvent<T>> {
    childrenHaveFocusParameters: {
        /** */
        onCompositeFocusChange: null | OnPassiveStateChange<boolean, R>;
    }
}

export interface UseChildrenHaveFocusChildReturnType<E extends Element, R extends h.JSX.TargetedFocusEvent<E>> {
    hasCurrentFocusParameters: Required<Pick<UseHasCurrentFocusParameters<E, R>["hasCurrentFocusParameters"], "onCurrentFocusedInnerChanged">>;
    //refElementParameters: Required<Pick<UseRefElementParameters<E>["refElementParameters"], "onElementChange">>;
}

export interface UseChildrenHaveFocusReturnType<T extends Element, R extends h.JSX.TargetedFocusEvent<T>> {
    childrenHaveFocusReturn: { getAnyFocused(): boolean; }
    childrenHaveFocusChildContext: UseChildrenHaveFocusChildParameters<T, R>["childrenHaveFocusChildContext"];
}

export interface UseChildrenHaveFocusChildParameters<T extends Element, R extends h.JSX.TargetedFocusEvent<T>> {
    childrenHaveFocusChildContext: {
        childrenHaveFocusChildParameters: {
            /** **STABLE** */
            setFocusCount: PassiveStateUpdater<number, R>;

            /** **STABLE** */
            //allElements: Set<Node>
        }
    }
}




/**
 * Allows a composite component (such as a radio group or listbox) to listen
 * for an "overall focusin/out" event; this hook lets you know when focus has 
 * moved in/out of this grouping of children EVEN IF there is no actual parent DOM element.
 * 
 * I.E. you can use this without needing a parent `<div>` to listen for a `focusout` event.
 */
export function useChildrenHaveFocus<ChildElement extends Element, R extends h.JSX.TargetedFocusEvent<ChildElement>>(args: UseChildrenHaveFocusParameters<ChildElement, R>): UseChildrenHaveFocusReturnType<ChildElement, R> {
    const { childrenHaveFocusParameters: { onCompositeFocusChange } } = args;

    const [getAnyFocused, setAnyFocused] = usePassiveState<boolean, R>(onCompositeFocusChange, returnFalse, runImmediately);
    const [_getFocusCount, setFocusCount] = usePassiveState<number, R>(useStableCallback<OnPassiveStateChange<number, R>>((anyFocused, anyPreviouslyFocused, e) => {
        console.assert(anyFocused >= 0 && anyFocused <= 1);
        setAnyFocused(!!(anyFocused && !anyPreviouslyFocused), e);
    }));

    return {
        childrenHaveFocusReturn: { getAnyFocused },
        childrenHaveFocusChildContext: useStableObject({ childrenHaveFocusChildParameters: useStableObject({ setFocusCount }) }),
    }
}

export function useChildrenHaveFocusChild<E extends Element, R extends h.JSX.TargetedFocusEvent<E>>({ childrenHaveFocusChildContext: { childrenHaveFocusChildParameters: { setFocusCount } } }: UseChildrenHaveFocusChildParameters<E, R>): UseChildrenHaveFocusChildReturnType<E, R> {
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
}