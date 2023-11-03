import { OnPassiveStateChange, PassiveStateUpdater, returnFalse, returnZero, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { FocusEventType } from "../util/lib.js";
import { Parameter, StandardDepsContext, StandardDepsPick, StandardHook } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
import { UseHasCurrentFocus } from "./use-has-current-focus.js";


export interface UseChildrenHaveFocusParametersSelf<T extends Element> {
    /**
     * Fires `true` once any of the children have become focused, and `false` once all of the children have become unfocused.
     * 
     * @stable
     */
    onCompositeFocusChange: null | OnPassiveStateChange<boolean, FocusEventType<T> | undefined>;
}

export interface UseChildrenHaveFocusReturnTypeSelf {
    /** @stable */
    getAnyFocused(): boolean;
}

export interface UseChildrenHaveFocusContextSelf<T extends Element> {
    /** @stable */
    setFocusCount: PassiveStateUpdater<number, FocusEventType<T> | undefined>;
}

export interface UseChildrenHaveFocusContext<T extends Element> {
    childrenHaveFocusChildContext: UseChildrenHaveFocusContextSelf<T>
}

export type UseChildrenHaveFocus<ChildElement extends Element> = StandardHook<
    "childrenHaveFocus", 
    UseChildrenHaveFocusParametersSelf<ChildElement>, [],
    UseChildrenHaveFocusReturnTypeSelf, [StandardDepsContext<UseChildrenHaveFocusContext<ChildElement>>]
>;

export type UseChildrenHaveFocusChild<ChildElement extends Element> = StandardHook<
    "childrenHaveFocusChild", 
    never, [StandardDepsContext<UseChildrenHaveFocusContext<ChildElement>, "childrenHaveFocusChildContext">],
    never, [StandardDepsPick<"params", UseHasCurrentFocus<ChildElement>, "hasCurrentFocusParameters", "pick", "onCurrentFocusedInnerChanged">]
>;


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
export const useChildrenHaveFocus = monitored(function useChildrenHaveFocus<ChildElement extends Element>(args: Parameter<UseChildrenHaveFocus<ChildElement>>): ReturnType<UseChildrenHaveFocus<ChildElement>> {
    const { childrenHaveFocusParameters: { onCompositeFocusChange } } = args;

    const [getAnyFocused, setAnyFocused] = usePassiveState<boolean, FocusEventType<ChildElement> | undefined>(onCompositeFocusChange, returnFalse, runImmediately);
    const [_getFocusCount, setFocusCount] = usePassiveState<number, FocusEventType<ChildElement> | undefined>(useStableCallback<OnPassiveStateChange<number, FocusEventType<ChildElement> | undefined>>((anyFocused, anyPreviouslyFocused, e) => {
        console.assert(anyFocused >= 0 && anyFocused <= 1);
        setAnyFocused(!!(anyFocused && !anyPreviouslyFocused), e);
    }), returnZero, setTimeout);    // setTimeout is used for the debounce to be somewhat generous with timing, and to guard against the default being runImmediately...

    return {
        childrenHaveFocusReturn: { getAnyFocused },
        context: useMemoObject<UseChildrenHaveFocusContext<ChildElement>>({ childrenHaveFocusChildContext: useMemoObject<UseChildrenHaveFocusContext<ChildElement>["childrenHaveFocusChildContext"]>({ setFocusCount }) }),
    }
})

/**
 * @compositeParams
 */
export const useChildrenHaveFocusChild = monitored(function useChildrenHaveFocusChild<E extends Element>({ context: { childrenHaveFocusChildContext: { setFocusCount } } }: Parameter<UseChildrenHaveFocusChild<E>>): ReturnType<UseChildrenHaveFocusChild<E>> {
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
})