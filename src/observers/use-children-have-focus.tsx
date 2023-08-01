import { OnPassiveStateChange, PassiveStateUpdater, returnFalse, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { FocusEventType, TargetedPick } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { UseHasCurrentFocusParameters } from "./use-has-current-focus.js";


export interface UseChildrenHaveFocusParametersSelf<T extends Element> {
    /**
     * Fires `true` once any of the children have become focused, and `false` once all of the children have become unfocused.
     * 
     * @stable
     */
    onCompositeFocusChange: null | OnPassiveStateChange<boolean, FocusEventType<T> | undefined>;
}


export interface UseChildrenHaveFocusParameters<T extends Element> {
    childrenHaveFocusParameters: UseChildrenHaveFocusParametersSelf<T>
}

export interface UseChildrenHaveFocusChildReturnType<E extends Element> extends TargetedPick<UseHasCurrentFocusParameters<E>, "hasCurrentFocusParameters", "onCurrentFocusedInnerChanged"> {
}

export interface UseChildrenHaveFocusReturnTypeSelf { 
    /** @stable */
    getAnyFocused(): boolean; 
}

export interface UseChildrenHaveFocusReturnType<T extends Element> {
    childrenHaveFocusReturn: UseChildrenHaveFocusReturnTypeSelf;
    context: UseChildrenHaveFocusContext<T>;
}

export interface UseChildrenHaveFocusContext<T extends Element> {
    childrenHaveFocusChildContext: {
        /** @stable */
        setFocusCount: PassiveStateUpdater<number, FocusEventType<T> | undefined>;
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
 * @remarks I.E. you can use this without needing a parent `<div>` to listen for a `focusout` event.
 * 
 * @compositeParams
 * 
 * @hasChild {@link useChildrenHaveFocusChild}
 */
export function useChildrenHaveFocus<ChildElement extends Element>(args: UseChildrenHaveFocusParameters<ChildElement>): UseChildrenHaveFocusReturnType<ChildElement> {
    monitorCallCount(useChildrenHaveFocus);

    const { childrenHaveFocusParameters: { onCompositeFocusChange } } = args;

    const [getAnyFocused, setAnyFocused] = usePassiveState<boolean, FocusEventType<ChildElement> | undefined>(onCompositeFocusChange, returnFalse, runImmediately);
    const [_getFocusCount, setFocusCount] = usePassiveState<number, FocusEventType<ChildElement> | undefined>(useStableCallback<OnPassiveStateChange<number, FocusEventType<ChildElement> | undefined>>((anyFocused, anyPreviouslyFocused, e) => {
        console.assert(anyFocused >= 0 && anyFocused <= 1);
        setAnyFocused(!!(anyFocused && !anyPreviouslyFocused), e);
    }));

    return {
        childrenHaveFocusReturn: { getAnyFocused },
        context: useMemoObject<UseChildrenHaveFocusContext<ChildElement>>({ childrenHaveFocusChildContext: useMemoObject<UseChildrenHaveFocusContext<ChildElement>["childrenHaveFocusChildContext"]>({ setFocusCount }) }),
    }
}

/**
 * @compositeParams
 */
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