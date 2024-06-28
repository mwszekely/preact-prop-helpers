import { UsePressParameters } from "../../component-use/use-press.js";
import { UseChildrenHaveFocusParameters, UseChildrenHaveFocusReturnType } from "../../observers/use-children-have-focus.js";
import { UseHasCurrentFocusParameters } from "../../observers/use-has-current-focus.js";
import { UseGenericChildParameters, UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { EnhancedEventHandler, TargetedEnhancedEvent } from "../../util/event.js";
import { ElementProps, EventType, Nullable, OmitStrong, TargetedOmit, TargetedPick } from "../../util/types.js";
import { UseRovingTabIndexChildInfo } from "../keyboard-navigation/use-roving-tabindex.js";
export type MultiSelectChildChangeHandler<E extends Element> = EnhancedEventHandler<EventType<E, Event>, {
    multiSelected: boolean;
}>;
export type MultiSelectChildChangeEvent<E extends Element> = TargetedEnhancedEvent<EventType<E, Event>, {
    multiSelected: boolean;
}>;
export type MultiSelectionChangeEvent = TargetedEnhancedEvent<EventType<any, any>, {
    selectedPercent: number;
    selectedIndices: Set<number>;
}>;
export interface UseMultiSelectionContextSelf extends Pick<UseMultiSelectionParametersSelf, "multiSelectionAriaPropName" | "multiSelectionMode"> {
    notifyParentOfChildSelectChange(event: EventType<any, any>, childIndex: number, selected: boolean | undefined, previous: boolean | undefined): void;
    /**
     * When the user presses Shift+Space or Ctrl+Space (depending on selectionMode),
     * all the items since the last selected item are toggled,
     * so the child in question needs to be able to track that.
     */
    doContiguousSelection(event: EventType<any, any>, endIndex: number): void;
    /**
     * Mostly used for when focus-mode selects something (because by default it deselects everything else)
     */
    changeAllChildren: (event: EventType<any, any>, shouldBeSelected: (index: number) => boolean) => void;
    getCtrlKeyDown(): boolean;
    getShiftKeyDown(): boolean;
    getAnyFocused(): boolean;
}
export interface UseMultiSelectionContext {
    multiSelectionContext: UseMultiSelectionContextSelf;
}
export interface UseMultiSelectionChildInfo<E extends Element> extends UseRovingTabIndexChildInfo<E> {
    /**
     * When the parent changes all children (generally because of CTRL+A, focus-selection mode, etc.)
     * it needs to change all the child checkboxes at once.
     * It calls this function to do so.
     *
     * TODO: This should be a promise because
     * 1) It might take time for a child to change its state
     * 2) It might be impossible for a child to change itself, which is neatly represented as a rejected promise.
     *
     * But that propagates all the way to linear navigation, which is sync...
     * (and for good reasons, cause navigation shouldn't be slowed down by sending data to a server or something)
     */
    setSelectedFromParent(event: EventType<any, any>, selected: boolean): void;
    getMultiSelected(): boolean;
    getMultiSelectionDisabled(): boolean;
}
export interface UseMultiSelectionParameters<M extends UseMultiSelectionChildInfo<any>> extends TargetedPick<UseChildrenHaveFocusReturnType<any>, "childrenHaveFocusReturn", "getAnyFocused">, TargetedPick<UseManagedChildrenReturnType<M>, "managedChildrenReturn", "getChildren"> {
    multiSelectionParameters: UseMultiSelectionParametersSelf;
}
export interface UseMultiSelectionReturnTypeSelf {
}
export interface UseMultiSelectionReturnType<ParentElement extends Element, ChildElement extends Element> extends TargetedPick<UseChildrenHaveFocusParameters<ChildElement>, "childrenHaveFocusParameters", "onCompositeFocusChange"> {
    context: UseMultiSelectionContext;
    multiSelectionReturn: UseMultiSelectionReturnTypeSelf;
    propsStable: ElementProps<ParentElement>;
}
export type UseMultiSelectionChildInfoKeysParameters = "index";
export type UseMultiSelectionChildInfoKeysReturnType = "setSelectedFromParent" | "getMultiSelected" | "getMultiSelectionDisabled";
export interface UseMultiSelectionParametersSelf {
    onSelectionChange: Nullable<(e: MultiSelectionChangeEvent) => void>;
    /**
     * What causes a child to become selected?
     *
     * @remarks **`"focus"`** is **strongly** discouraged, even though it behaves like a native HTML element (e.g. like `<select size=10>`).
     *
     * Notably, in `"focus"` mode, it can be difficult to tell the difference between multi-select and single-select unless you already know that this is a multi-select control.
     *
     * Keyboard controls in `"activation"` mode don't differ strongly from the usual conventions of "navigate to a thing, press Space to activate it".
     * However, because the `"focus"` mode controls are extremely unintuitive, all controls are documented here:
     *
     * ```md-literal
     *
     * * In either mode, navigation/selection has the usual keyboard controls (arrow keys, space/enter, page up/down, home/end, mouse clicks, pointer events, etc.)
     * * In either mode, <kbd>Ctrl</kbd>+<kbd>A</kbd> will select all items.
     * * In either mode, holding <kbd>Shift</kbd> while changing selection will extend the current selection to include the new item and any items in between.
     * * Exclusive to `"focus"` mode:
     *     * Navigating to a new item will automatically select it.
     *         * To navigate **without** selecting a new item, hold <kbd>Ctrl</kbd>.
     *             * Any item navigated to in this way can be selected by pressing <kbd>Space</kbd>/<kbd>Enter</kbd> as usual, but...
     *     * Selecting a new item (whether via navigation or pressing <kbd>Space</kbd> or <kbd>Enter</kbd>) will **deselect all other items** unless <kbd>Ctrl</kbd> is held.
     * ```
     */
    multiSelectionMode: "focus" | "activation" | "disabled";
    /**
     * What property will be used to mark this item as selected.
     *
     * TODO: No compelling use-case for aria-current in multi-select? Just in case: | `current-${"page" | "step" | "date" | "time" | "location" | "true"}`
     */
    multiSelectionAriaPropName: Nullable<`aria-${"pressed" | "selected" | "checked"}`>;
}
export interface UseMultiSelectionChildParameters<E extends Element, M extends UseMultiSelectionChildInfo<E>> extends UseGenericChildParameters<UseMultiSelectionContext, Pick<M, UseMultiSelectionChildInfoKeysParameters>> {
    multiSelectionChildParameters: UseMultiSelectionChildParametersSelf<E>;
    context: UseMultiSelectionContext;
}
export interface UseMultiSelectionChildParametersSelf<E extends Element> {
    /**
     * Called when the child is requesting to change whether it's selected or not (generally because the user clicked it)
     *
     * @remarks To comply with the child's request, you should either:
     *
     * ```md-literal
     * * Change the `selected` parameter to true (probably by calling `setState` somewhere) if this is declaratively controlled (most cases).
     * * Call `changeSelected`, if this is imperatively controlled.
     * ```
     */
    onMultiSelectChange: Nullable<(e: MultiSelectChildChangeEvent<E>) => void>;
    initiallyMultiSelected: boolean | null;
    /** When true, this child cannot be selected via multi-select, either by focusing it or by clicking it. */
    multiSelectionDisabled: boolean;
}
export interface UseMultiSelectionChildReturnType<E extends Element, M extends UseMultiSelectionChildInfo<E>> extends TargetedPick<UsePressParameters<any>, "pressParameters", "onPressSync">, TargetedPick<UseHasCurrentFocusParameters<any>, "hasCurrentFocusParameters", "onCurrentFocusedInnerChanged"> {
    multiSelectionChildReturn: UseMultiSelectionChildReturnTypeSelf;
    props: ElementProps<E>;
    info: Pick<M, UseMultiSelectionChildInfoKeysReturnType>;
}
export interface UseMultiSelectionChildReturnTypeSelf extends Pick<Required<UseMultiSelectionContextSelf>, "multiSelectionMode"> {
    /**
     * @stable
     */
    changeMultiSelected(event: EventType<any, any>, selected: boolean): void;
    /**
     * Indicates that this child is selected, according to itself.
     */
    multiSelected: boolean;
    /**
     * @stable
     */
    getMultiSelected(): boolean;
}
/**
 * Allows a parent to track the changes made to multi-selection children.
 *
 * @remarks Beyond just giving each child the ability to track its own selected state, the parent can change all children at once.
 * Pressing <kbd>Ctrl</kbd>+<kbd>A</kbd> will select all children, for example.
 *
 * This is not exclusive with {@link useSingleSelection}, you can use both at once if you have a use case for it.
 *
 * @compositeParams
 *
 * @hasChild {@link useMultiSelectionChild}
 */
export declare function useMultiSelection<ParentOrChildElement extends Element, ChildElement extends Element>({ multiSelectionParameters: { onSelectionChange, multiSelectionAriaPropName, multiSelectionMode, ...void3 }, managedChildrenReturn: { getChildren, ...void1 }, childrenHaveFocusReturn: { getAnyFocused, ...void4 }, ...void2 }: UseMultiSelectionParameters<UseMultiSelectionChildInfo<any>>): UseMultiSelectionReturnType<ParentOrChildElement, ChildElement>;
/**
 *
 * @compositeParams
 */
export declare function useMultiSelectionChild<E extends Element>({ info: { index, ...void4 }, multiSelectionChildParameters: { initiallyMultiSelected, onMultiSelectChange, multiSelectionDisabled, ...void1 }, context: { multiSelectionContext: { notifyParentOfChildSelectChange, multiSelectionAriaPropName, multiSelectionMode, doContiguousSelection, changeAllChildren, getCtrlKeyDown, getShiftKeyDown, getAnyFocused, ...void5 }, ...void3 }, ...void2 }: UseMultiSelectionChildParameters<E, UseMultiSelectionChildInfo<E>>): UseMultiSelectionChildReturnType<E, UseMultiSelectionChildInfo<E>>;
export interface UseMultiSelectionChildDeclarativeReturnType<E extends Element, M extends UseMultiSelectionChildInfo<E>> extends TargetedPick<UseMultiSelectionChildParameters<E, M>, "multiSelectionChildParameters", "onMultiSelectChange"> {
    info: Pick<M, "setSelectedFromParent">;
}
export interface UseMultiSelectionChildDeclarativeParameters<E extends Element, M extends UseMultiSelectionChildInfo<E>> extends TargetedPick<UseMultiSelectionChildReturnType<E, M>, "multiSelectionChildReturn", "changeMultiSelected"> {
    multiSelectionChildDeclarativeParameters: {
        multiSelected: boolean | null;
        onMultiSelectedChange: Nullable<(e: MultiSelectChildChangeEvent<E>) => void>;
    };
}
export type MakeMultiSelectionChildDeclarativeParameters<P extends UseMultiSelectionChildParameters<any, any>> = OmitStrong<P, "multiSelectionChildParameters"> & UseMultiSelectionChildDeclarativeParameters<any, any> & TargetedPick<UseMultiSelectionChildParameters<any, any>, "multiSelectionChildParameters", "multiSelectionDisabled">;
export type MakeMultiSelectionChildDeclarativeReturnType<R extends UseMultiSelectionChildReturnType<any, any>> = OmitStrong<R, "multiSelectionChildReturn"> & TargetedOmit<UseMultiSelectionChildReturnType<any, any>, "multiSelectionChildReturn", "changeMultiSelected">;
/**
 *
 * @compositeParams
 */
export declare function useMultiSelectionChildDeclarative<E extends Element>({ multiSelectionChildDeclarativeParameters: { onMultiSelectedChange, multiSelected, ...void3 }, multiSelectionChildReturn: { changeMultiSelected, ...void2 }, ...void1 }: UseMultiSelectionChildDeclarativeParameters<E, UseMultiSelectionChildInfo<E>>): UseMultiSelectionChildDeclarativeReturnType<E, UseMultiSelectionChildInfo<E>>;
//# sourceMappingURL=use-multi-selection.d.ts.map