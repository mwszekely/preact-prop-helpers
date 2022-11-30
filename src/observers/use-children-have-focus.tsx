
import { useStableObject } from "../preact-extensions/use-stable-getter";
import { UseHasCurrentFocusParameters } from "./use-has-current-focus";
import { OnPassiveStateChange, PassiveStateUpdater, returnFalse, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state";
import { useStableCallback } from "../preact-extensions/use-stable-callback";
import { h } from "preact";


export interface UseChildrenHaveFocusParameters<T extends Element> {
    childrenHaveFocusParameters: {
        /** */
        onCompositeFocusChange: null | OnPassiveStateChange<boolean, h.JSX.TargetedEvent<T>>;
    }
}

export interface UseChildrenHaveFocusChildReturnType<E extends Element> {
    hasCurrentFocusParameters: Required<Pick<UseHasCurrentFocusParameters<E>["hasCurrentFocusParameters"], "onCurrentFocusedInnerChanged">>;
    //refElementParameters: Required<Pick<UseRefElementParameters<E>["refElementParameters"], "onElementChange">>;
}

export interface UseChildrenHaveFocusReturnType<T extends Element> {
    childrenHaveFocusReturn: { getAnyFocused(): boolean; }
    childrenHaveFocusChildContext: UseChildrenHaveFocusChildParameters<T>["childrenHaveFocusChildContext"];
}

export interface UseChildrenHaveFocusChildParameters<T extends Element> {
    childrenHaveFocusChildContext: {
        childrenHaveFocusChildParameters: {
            /** **STABLE** */
            setFocusCount: PassiveStateUpdater<number, h.JSX.TargetedEvent<T>>;

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
export function useChildrenHaveFocus<ChildElement extends Element>(args: UseChildrenHaveFocusParameters<ChildElement>): UseChildrenHaveFocusReturnType<ChildElement> {
    type R = h.JSX.TargetedEvent<ChildElement>;
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

export function useChildrenHaveFocusChild<E extends Element>({ childrenHaveFocusChildContext: { childrenHaveFocusChildParameters: { setFocusCount } } }: UseChildrenHaveFocusChildParameters<E>): UseChildrenHaveFocusChildReturnType<E> {
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