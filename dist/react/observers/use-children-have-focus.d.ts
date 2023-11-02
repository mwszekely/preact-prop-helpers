import { OnPassiveStateChange, PassiveStateUpdater } from "../preact-extensions/use-passive-state.js";
import { FocusEventType } from "../util/lib.js";
import { GenericHook, Parameter, StandardDepsContext, StandardDepsPick } from "../util/types.js";
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
    childrenHaveFocusChildContext: UseChildrenHaveFocusContextSelf<T>;
}
export type UseChildrenHaveFocus<ChildElement extends Element> = GenericHook<"childrenHaveFocus", UseChildrenHaveFocusParametersSelf<ChildElement>, [], UseChildrenHaveFocusReturnTypeSelf, [StandardDepsContext<UseChildrenHaveFocusContext<ChildElement>>]>;
export type UseChildrenHaveFocusChild<ChildElement extends Element> = GenericHook<"childrenHaveFocusChild", never, [StandardDepsContext<UseChildrenHaveFocusContext<ChildElement>, "childrenHaveFocusChildContext">], never, [StandardDepsPick<"params", UseHasCurrentFocus<ChildElement>, "hasCurrentFocusParameters", "pick", "onCurrentFocusedInnerChanged">]>;
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
export declare const useChildrenHaveFocus: <ChildElement extends Element>(args: {
    childrenHaveFocusParameters: UseChildrenHaveFocusParametersSelf<ChildElement>;
}) => {
    childrenHaveFocusReturn: UseChildrenHaveFocusReturnTypeSelf;
} & StandardDepsContext<UseChildrenHaveFocusContext<ChildElement>, "childrenHaveFocusChildContext">;
/**
 * @compositeParams
 */
export declare const useChildrenHaveFocusChild: <E extends Element>({ context: { childrenHaveFocusChildContext: { setFocusCount } } }: {} & StandardDepsContext<UseChildrenHaveFocusContext<E>, "childrenHaveFocusChildContext">) => {} & StandardDepsPick<"params", UseHasCurrentFocus<E>, "hasCurrentFocusParameters", "pick", "onCurrentFocusedInnerChanged">;
//# sourceMappingURL=use-children-have-focus.d.ts.map