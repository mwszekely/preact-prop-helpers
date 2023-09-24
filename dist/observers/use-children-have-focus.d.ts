import { OnPassiveStateChange, PassiveStateUpdater } from "../preact-extensions/use-passive-state.js";
import { FocusEventType } from "../util/types.js";
import { PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged, UseHasCurrentFocusParameters } from "./use-has-current-focus.js";
export declare const PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange = "PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange";
export declare const PropNames_ChildrenHaveFocusReturn_getAnyFocused = "PropNames.ChildrenHaveFocusReturn.getAnyFocused";
export interface UseChildrenHaveFocusParametersSelf<T extends Element> {
    /**
     * Fires `true` once any of the children have become focused, and `false` once all of the children have become unfocused.
     *
     * @stable
     */
    [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: null | OnPassiveStateChange<boolean, FocusEventType<T> | undefined>;
}
export interface UseChildrenHaveFocusParameters<T extends Element> extends UseChildrenHaveFocusParametersSelf<T> {
}
export interface UseChildrenHaveFocusChildReturnType<E extends Element> extends Pick<UseHasCurrentFocusParameters<E>, typeof PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged> {
}
export interface UseChildrenHaveFocusReturnTypeSelf {
    /** @stable */
    [PropNames_ChildrenHaveFocusReturn_getAnyFocused](): boolean;
}
export interface UseChildrenHaveFocusReturnType<T extends Element> extends UseChildrenHaveFocusReturnTypeSelf {
    context: UseChildrenHaveFocusContext<T>;
}
export interface UseChildrenHaveFocusContext<T extends Element> {
    childrenHaveFocusChildContext: {
        /** @stable */
        setFocusCount: PassiveStateUpdater<number, FocusEventType<T> | undefined>;
    };
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
export declare const useChildrenHaveFocus: <ChildElement extends Element>({ [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: onCompositeFocusChange }: UseChildrenHaveFocusParameters<ChildElement>) => UseChildrenHaveFocusReturnType<ChildElement>;
/**
 * @compositeParams
 */
export declare const useChildrenHaveFocusChild: <E extends Element>({ context: { childrenHaveFocusChildContext: { setFocusCount } } }: UseChildrenHaveFocusChildParameters<E>) => UseChildrenHaveFocusChildReturnType<E>;
//# sourceMappingURL=use-children-have-focus.d.ts.map