
import { h } from "preact";
import { OnPassiveStateChange, PassiveStateUpdater, returnFalse, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useStableObject } from "../preact-extensions/use-stable-getter.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { UseHasCurrentFocusParameters } from "./use-has-current-focus.js";


export interface UseChildrenHaveFocusParameters<T extends Element> {
    childrenHaveFocusParameters: {
        /**
         * Fires `true` once any of the children have become focused, and `false` once all of the children have become unfocused.
         */
        onCompositeFocusChange: null | OnPassiveStateChange<boolean, h.JSX.TargetedEvent<T>>;
    }
}

export interface UseChildrenHaveFocusChildReturnType<E extends Element> {
    hasCurrentFocusParameters: Required<Pick<UseHasCurrentFocusParameters<E>["hasCurrentFocusParameters"], "onCurrentFocusedInnerChanged">>;
}

export interface UseChildrenHaveFocusReturnType<T extends Element> {
    childrenHaveFocusReturn: { getAnyFocused(): boolean; }
    context: UseChildrenHaveFocusContext<T>;
}

export interface UseChildrenHaveFocusContext<T extends Element> {
    childrenHaveFocusChildContext: {
        /** **STABLE** */
        setFocusCount: PassiveStateUpdater<number, h.JSX.TargetedEvent<T>>;
    }
}

export interface UseChildrenHaveFocusChildParameters<T extends Element> {
    context: UseChildrenHaveFocusContext<T>;
}




/**
 * Allows a composite component (such as a radio group or listbox) to listen
 * for an "overall focusin/out" event; this hook lets you know when focus has 
 * moved in/out of this grouping of children EVEN IF there is no actual parent DOM element.
 * 
 * I.E. you can use this without needing a parent `<div>` to listen for a `focusout` event.
 */
export function useChildrenHaveFocus<ChildElement extends Element>(args: UseChildrenHaveFocusParameters<ChildElement>): UseChildrenHaveFocusReturnType<ChildElement> {
    monitorCallCount(useChildrenHaveFocus);

    type R = h.JSX.TargetedEvent<ChildElement>;
    const { childrenHaveFocusParameters: { onCompositeFocusChange } } = args;

    const [getAnyFocused, setAnyFocused] = usePassiveState<boolean, R>(onCompositeFocusChange, returnFalse, runImmediately);
    const [_getFocusCount, setFocusCount] = usePassiveState<number, R>(useStableCallback<OnPassiveStateChange<number, R>>((anyFocused, anyPreviouslyFocused, e) => {
        console.assert(anyFocused >= 0 && anyFocused <= 1);
        setAnyFocused(!!(anyFocused && !anyPreviouslyFocused), e);
    }));

    return {
        childrenHaveFocusReturn: { getAnyFocused },
        context: useStableObject({ childrenHaveFocusChildContext: useStableObject({ setFocusCount }) }),
    }
}

export function useChildrenHaveFocusChild<E extends Element>({ context: { childrenHaveFocusChildContext: { setFocusCount } } }: UseChildrenHaveFocusChildParameters<E>): UseChildrenHaveFocusChildReturnType<E> {
    monitorCallCount(useChildrenHaveFocusChild);
    
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