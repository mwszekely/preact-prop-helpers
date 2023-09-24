import { PropNames_PressParameters_onPressSync, UsePressParameters } from "../../component-use/use-press.js";
import { PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange, UseChildrenHaveFocusChildReturnType, UseChildrenHaveFocusParameters } from "../../observers/use-children-have-focus.js";
import { PropNames_ManagedChildrenReturn_getChildren, UseGenericChildParameters, UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { PassiveStateUpdater } from "../../preact-extensions/use-passive-state.js";
import { EnhancedEventHandler, TargetedEnhancedEvent } from "../../util/event.js";
import { OmitStrong, RequiredN } from "../../util/lib-shared.js";
import { ElementProps, Nullable } from "../../util/types.js";
import { PropNames_RovingTabIndexReturn_setTabbableIndex, UseRovingTabIndexChildInfo, UseRovingTabIndexReturnType } from "../keyboard-navigation/use-roving-tabindex.js";
export declare const PropNames_SingleSelectionParameters_initiallySingleSelectedIndex = "PropNames.SingleSelectionParameters.initiallySingleSelectedIndex";
export declare const PropNames_SingleSelectionParameters_onSingleSelectedIndexChange = "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange";
export declare const PropNames_SingleSelectionParameters_singleSelectionMode = "PropNames.SingleSelectionParameters.singleSelectionMode";
export declare const PropNames_SingleSelectionParameters_singleSelectionAriaPropName = "PropNames.SingleSelectionParameters.singleSelectionAriaPropName";
export declare const PropNames_SingleSelectionParameters_singleSelectedIndex = "PropNames.SingleSelectionParameters.singleSelectedIndex";
export declare const PropNames_SingleSelectionReturn_changeSingleSelectedIndex = "PropNames.SingleSelectionReturn.changeSingleSelectedIndex";
export declare const PropNames_SingleSelectionReturn_getSingleSelectedIndex = "PropNames.SingleSelectionReturn.getSingleSelectedIndex";
export declare const PropNames_SingleSelectionChildParameters_singleSelectionDisabled = "PropNames.SingleSelectionParameters.singleSelectionDisabled";
export declare const PropNames_SingleSelectionChildReturn_singleSelected = "PropNames.SingleSelectionReturn.singleSelected";
export declare const PropNames_SingleSelectionChildReturn_getSingleSelected = "PropNames.SingleSelectionReturn.getSingleSelected";
export declare const PropNames_SingleSelectionChildReturn_singleSelectedOffset = "PropNames.SingleSelectionReturn.singleSelectedOffset";
export declare const PropNames_SingleSelectionChildReturn_singleSelectionMode = "PropNames.SingleSelectionReturn.singleSelectionMode";
export declare const PropNames_SingleSelectionChildReturn_getSingleSelectedOffset = "PropNames.SingleSelectionReturn.getSingleSelectedOffset";
/** Anything that's selectable must be tabbable, so we DO use rovingTabIndex instead of just managedChildren */
export interface UseSingleSelectionChildInfo<E extends Element> extends UseRovingTabIndexChildInfo<E> {
    singleSelected: boolean;
    getSingleSelected(): boolean;
    /**
     * The parent calls this to change the child's local state.
     *
     * When the `selectedIndex` changes, the relevant children's `setLocalSelected` are called (max of 2).
     *
     * @param selected - This is the selected child (out of all of them)
     * @param direction - How far to the `selectedIndex` this child is
     */
    setLocalSingleSelected(selected: boolean, direction: number | null): void;
}
export type SelectedIndexChangeHandler = EnhancedEventHandler<Event, {
    selectedIndex: number;
}>;
export type SelectedIndexChangeEvent = TargetedEnhancedEvent<Event, {
    selectedIndex: number;
}>;
export interface UseSingleSelectionParametersSelf {
    /**
     * This is imperative, as opposed to declarative,
     * to save on re-rendering the parent whenever the selected index changes.
     */
    [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: Nullable<number>;
    /**
     * Called when a child is selected (via a press or other method).
     *
     * If this component is declaratively controlled (with e.g. `useSingleSelectionDeclarative`),
     * then you should use this to `setState` somewhere that'll change your `selectedIndex`.
     *
     * If this component is imperatively controlled, then you should hook this up to the
     * returned `changeSelectedIndex` function to have the desired change occur.
     *
     * In general, this should only be `null` when single selection is entirely disabled.
     *
     * @nonstable
     */
    [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: Nullable<SelectedIndexChangeHandler>;
    /**
     * What causes a child to become selected?
     *
     * In general, `"focus"` is preferred (and also implies `"activation"` for iOS devices that may or may not focus anything ever),
     * especially when the change can be seen immediately and there is no consequence for doing so, like with tabs and sometimes radio buttons too.
     *
     * When this is `"disabled"`, all single-selection behavior is turned off, allowing for multi-selection, or no selection.
     */
    [PropNames_SingleSelectionParameters_singleSelectionMode]: "focus" | "activation" | "disabled";
    /**
     * What property will be used to mark this item as selected.
     *
     * **IMPORTANT**: The `aria-current` options should be used with caution as they are semantically very different from the usual selection cases.
     *
     * This is ignored if `selectionMode` is set to `"disabled"`.
     */
    [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: Nullable<`aria-${"pressed" | "selected" | "checked" | `current-${"page" | "step" | "date" | "time" | "location" | "true"}`}`>;
}
export interface UseSingleSelectionReturnTypeSelf {
    /**
     * A function that, when called, internally updates the selected index to the one you provide,
     * and tells the relevant children that they are/are not selected.
     *
     * If you are creating an imperative component, this is what how you can force the value to change in response to something.
     *
     * If you are creating a declarative component, this is what you call in `useEffect` when your `selectedIndex` changes.
     *
     * @stable
     */
    [PropNames_SingleSelectionReturn_changeSingleSelectedIndex]: PassiveStateUpdater<number | null, SelectedIndexChangeEvent>;
    /**
     * @stable
     */
    [PropNames_SingleSelectionReturn_getSingleSelectedIndex](): number | null;
}
export interface UseSingleSelectionChildReturnTypeSelf {
    /**
     * Is this child currently the selected child among all its siblings?
     */
    [PropNames_SingleSelectionChildReturn_singleSelected]: boolean;
    /** @stable */
    [PropNames_SingleSelectionChildReturn_getSingleSelected](): boolean;
    /**
     * Any time `selected` changes to or from being visible, this will represent the direction and magnitude of the change.
     *
     * It will never be zero; when `selected` is `true`, then this will be the most recently-used offset.
     *
     * This useful for things like animations or transitions.
     */
    [PropNames_SingleSelectionChildReturn_singleSelectedOffset]: Nullable<number>;
    /** @stable */
    [PropNames_SingleSelectionChildReturn_getSingleSelectedOffset]: () => (number | null);
    [PropNames_SingleSelectionChildReturn_singleSelectionMode]: SingleSelectionContextSelf[typeof PropNames_SingleSelectionParameters_singleSelectionMode];
}
export interface UseSingleSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseSingleSelectionChildInfo<ChildElement>> extends UseSingleSelectionParametersSelf, Pick<UseManagedChildrenReturnType<M>, typeof PropNames_ManagedChildrenReturn_getChildren>, Pick<UseRovingTabIndexReturnType<ParentOrChildElement, ChildElement>, typeof PropNames_RovingTabIndexReturn_setTabbableIndex> {
}
export type UseSingleSelectionChildInfoKeysParameters = "index" | "untabbable";
export type UseSingleSelectionChildInfoKeysReturnType = "getSingleSelected" | "setLocalSingleSelected" | "singleSelected";
export interface UseSingleSelectionChildParametersSelf {
    /** When true, this child cannot be selected via single-select, either by focusing it or by clicking it. */
    [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: boolean;
}
export interface UseSingleSelectionChildParameters<E extends Element, M extends UseSingleSelectionChildInfo<E>> extends UseSingleSelectionChildParametersSelf, UseGenericChildParameters<UseSingleSelectionContext, Pick<M, UseSingleSelectionChildInfoKeysParameters>> {
}
export interface UseSingleSelectionChildReturnType<E extends Element, M extends UseSingleSelectionChildInfo<E>> extends UseSingleSelectionChildReturnTypeSelf, UseChildrenHaveFocusChildReturnType<E>, Pick<UsePressParameters<any>, typeof PropNames_PressParameters_onPressSync> {
    props: ElementProps<E>;
    info: Pick<M, UseSingleSelectionChildInfoKeysReturnType>;
}
export interface UseSingleSelectionReturnType<ChildElement extends Element> extends UseSingleSelectionReturnTypeSelf, Pick<UseChildrenHaveFocusParameters<ChildElement>, typeof PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange> {
    context: UseSingleSelectionContext;
}
export interface SingleSelectionContextSelf extends RequiredN<Pick<UseSingleSelectionParametersSelf, typeof PropNames_SingleSelectionParameters_singleSelectionMode | typeof PropNames_SingleSelectionParameters_onSingleSelectedIndexChange>>, Pick<UseSingleSelectionParametersSelf, typeof PropNames_SingleSelectionParameters_singleSelectionAriaPropName> {
    getSingleSelectedIndex(): number | null;
}
export interface UseSingleSelectionContext {
    singleSelectionContext: SingleSelectionContextSelf;
}
/**
 * Allows a single child among all children to be the "selected" child (which can be different from the "focused" child).
 *
 * @remarks If you need multi-select instead of single-select and you're using this hook (e.g. as part of {@link useCompleteListNavigation}), you can disable the single-selection behavior either by setting the selected index to `null` or.
 *
 * @hasChild {@link useSingleSelectionChild}
 *
 * @compositeParams
 */
export declare const useSingleSelection: <ParentOrChildElement extends Element, ChildElement extends Element>({ [PropNames_ManagedChildrenReturn_getChildren]: getChildren, [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex, [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSelectedIndexChange_U, [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: initiallySingleSelectedIndex, [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName, [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode, ...void4 }: UseSingleSelectionParameters<ParentOrChildElement, ChildElement, UseSingleSelectionChildInfo<ChildElement>>) => UseSingleSelectionReturnType<ChildElement>;
/**
 *
 *
 * @compositeParams
 */
export declare const useSingleSelectionChild: <ChildElement extends Element>({ [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled, context: { singleSelectionContext: { getSingleSelectedIndex, [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange, [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: ariaPropName, [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode, ...void1 }, ...void2 }, info: { index, untabbable, ...void3 }, ...void4 }: UseSingleSelectionChildParameters<ChildElement, UseSingleSelectionChildInfo<ChildElement>>) => UseSingleSelectionChildReturnType<ChildElement, UseSingleSelectionChildInfo<ChildElement>>;
export interface UseSingleSelectionDeclarativeParametersSelf extends Pick<UseSingleSelectionParametersSelf, typeof PropNames_SingleSelectionParameters_onSingleSelectedIndexChange> {
    [PropNames_SingleSelectionParameters_singleSelectedIndex]: Nullable<number>;
}
export interface UseSingleSelectionDeclarativeParameters<ChildElement extends Element> extends UseSingleSelectionDeclarativeParametersSelf, Pick<UseSingleSelectionReturnType<ChildElement>, typeof PropNames_SingleSelectionReturn_changeSingleSelectedIndex> {
}
export type MakeSingleSelectionDeclarativeParameters<P> = Omit<P, keyof UseSingleSelectionParametersSelf> & UseSingleSelectionDeclarativeParameters<any> & Pick<UseSingleSelectionParameters<any, any, any>, typeof PropNames_SingleSelectionParameters_singleSelectionAriaPropName | typeof PropNames_SingleSelectionParameters_singleSelectionMode>;
export type MakeSingleSelectionDeclarativeReturnType<R> = Omit<R, keyof UseSingleSelectionReturnTypeSelf> & OmitStrong<UseSingleSelectionReturnType<any>, typeof PropNames_SingleSelectionReturn_changeSingleSelectedIndex>;
/**
 * Let's face it, declarative is nicer to use than imperative, so this is a shortcut.
 */
export declare function useSingleSelectionDeclarative<ParentOrChildElement extends Element, ChildElement extends Element>({ [PropNames_SingleSelectionReturn_changeSingleSelectedIndex]: changeSingleSelectedIndex, [PropNames_SingleSelectionParameters_singleSelectedIndex]: singleSelectedIndex, [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange }: UseSingleSelectionDeclarativeParameters<ChildElement>): {
    "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": SelectedIndexChangeHandler;
};
//# sourceMappingURL=use-single-selection.d.ts.map