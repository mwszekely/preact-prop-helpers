import { UsePressParameters } from "../../component-use/use-press.js";
import { UseChildrenHaveFocusParameters, UseChildrenHaveFocusReturnType } from "../../observers/use-children-have-focus.js";
import { UseHasCurrentFocusParameters } from "../../observers/use-has-current-focus.js";
import { UseGenericChildParameters, UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { EnhancedEventHandler, TargetedEnhancedEvent } from "../../util/event.js";
import { ElementProps, EventType, Nullable, OmitStrong, PropNames } from "../../util/types.js";
import { UseRovingTabIndexChildInfo } from "../keyboard-navigation/use-roving-tabindex.js";
declare module "../../util/types.js" {
    interface PropNames {
        MultiSelectionParameters: typeof P1Names;
    }
}
declare module "../../util/types.js" {
    interface PropNames {
        MultiSelectionReturn: typeof R1Names;
    }
}
declare module "../../util/types.js" {
    interface PropNames {
        MultiSelectionChildParameters: typeof P2Names;
    }
}
declare module "../../util/types.js" {
    interface PropNames {
        MultiSelectionChildReturn: typeof R2Names;
    }
}
export declare const P1Names: {
    readonly onSelectionChange: "PropNames.MultiSelectionParameters.onSelectionChange";
    readonly multiSelectionMode: "PropNames.MultiSelectionParameters.multiSelectionMode";
    readonly multiSelectionAriaPropName: "PropNames.MultiSelectionParameters.multiSelectionAriaPropName";
};
export declare const R1Names: {
    readonly changeMultiSelectedIndex: "PropNames.MultiSelectionReturn.changeMultiSelectedIndex";
    readonly getMultiSelectedIndex: "PropNames.MultiSelectionReturn.getMultiSelectedIndex";
};
export declare const P2Names: {
    readonly onMultiSelectChange: "PropNames.MultiSelectionChildParameters.onMultiSelectChange";
    readonly initiallyMultiSelected: "PropNames.MultiSelectionChildParameters.initiallyMultiSelected";
    readonly multiSelectionDisabled: "PropNames.MultiSelectionChildParameters.multiSelectionDisabled";
    readonly multiSelected: "PropNames.MultiSelectionChildParameters.multiSelected";
};
export declare const R2Names: {
    readonly changeMultiSelected: "PropNames.MultiSelectionChildReturn.changeMultiSelected";
    readonly multiSelected: "PropNames.MultiSelectionChildReturn.multiSelected";
    readonly getMultiSelected: "PropNames.MultiSelectionChildReturn.getMultiSelected";
};
export type MultiSelectChildChangeHandler = EnhancedEventHandler<Event, {
    multiSelected: boolean;
}>;
export type MultiSelectChildChangeEvent = TargetedEnhancedEvent<Event, {
    multiSelected: boolean;
}>;
export type MultiSelectionChangeEvent = TargetedEnhancedEvent<EventType<any, any>, {
    selectedPercent: number;
    selectedIndices: Set<number>;
}>;
export interface UseMultiSelectionContextSelf extends Pick<UseMultiSelectionParametersSelf, typeof PropNames.MultiSelectionParameters.multiSelectionAriaPropName | typeof PropNames.MultiSelectionParameters.multiSelectionMode> {
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
export interface UseMultiSelectionParameters<M extends UseMultiSelectionChildInfo<any>> extends UseMultiSelectionParametersSelf, Pick<UseChildrenHaveFocusReturnType<any>, typeof PropNames.ChildrenHaveFocusReturn.getAnyFocused>, Pick<UseManagedChildrenReturnType<M>, typeof PropNames.ManagedChildrenReturn.getChildren> {
}
export interface UseMultiSelectionReturnTypeSelf {
}
export interface UseMultiSelectionReturnType<ParentElement extends Element, ChildElement extends Element> extends UseMultiSelectionReturnTypeSelf, Pick<UseChildrenHaveFocusParameters<ChildElement>, typeof PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange> {
    context: UseMultiSelectionContext;
    props: ElementProps<ParentElement>;
}
export type UseMultiSelectionChildInfoKeysParameters = "index";
export type UseMultiSelectionChildInfoKeysReturnType = "setSelectedFromParent" | "getMultiSelected" | "getMultiSelectionDisabled";
export interface UseMultiSelectionParametersSelf {
    [PropNames.MultiSelectionParameters.onSelectionChange]: Nullable<(e: MultiSelectionChangeEvent) => void>;
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
    [PropNames.MultiSelectionParameters.multiSelectionMode]: "focus" | "activation" | "disabled";
    /**
     * What property will be used to mark this item as selected.
     *
     * TODO: No compelling use-case for aria-current in multi-select? Just in case: | `current-${"page" | "step" | "date" | "time" | "location" | "true"}`
     */
    [PropNames.MultiSelectionParameters.multiSelectionAriaPropName]: Nullable<`aria-${"pressed" | "selected" | "checked"}`>;
}
export interface UseMultiSelectionChildParameters<E extends Element, M extends UseMultiSelectionChildInfo<E>> extends UseMultiSelectionChildParametersSelf<E>, UseGenericChildParameters<UseMultiSelectionContext, Pick<M, UseMultiSelectionChildInfoKeysParameters>> {
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
    [PropNames.MultiSelectionChildParameters.onMultiSelectChange]: Nullable<(e: MultiSelectChildChangeEvent) => void>;
    [PropNames.MultiSelectionChildParameters.initiallyMultiSelected]: boolean;
    /** When true, this child cannot be selected via multi-select, either by focusing it or by clicking it. */
    [PropNames.MultiSelectionChildParameters.multiSelectionDisabled]: boolean;
}
export interface UseMultiSelectionChildReturnType<E extends Element, M extends UseMultiSelectionChildInfo<E>> extends UseMultiSelectionChildReturnTypeSelf, Pick<UsePressParameters<any>, typeof PropNames.PressParameters.onPressSync>, Pick<UseHasCurrentFocusParameters<any>, typeof PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged> {
    props: ElementProps<E>;
    info: Pick<M, UseMultiSelectionChildInfoKeysReturnType>;
}
export interface UseMultiSelectionChildReturnTypeSelf extends Pick<Required<UseMultiSelectionContextSelf>, typeof PropNames.MultiSelectionParameters.multiSelectionMode> {
    /**
     * @stable
     */
    [PropNames.MultiSelectionChildReturn.changeMultiSelected](event: EventType<any, any>, selected: boolean): void;
    /**
     * Indicates that this child is selected, according to itself.
     */
    [PropNames.MultiSelectionChildReturn.multiSelected]: boolean;
    /**
     * @stable
     */
    [PropNames.MultiSelectionChildReturn.getMultiSelected](): boolean;
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
export declare function useMultiSelection<ParentOrChildElement extends Element, ChildElement extends Element>({ [PropNames.ChildrenHaveFocusReturn.getAnyFocused]: getAnyFocused, [PropNames.ManagedChildrenReturn.getChildren]: getChildren, [PropNames.MultiSelectionParameters.multiSelectionAriaPropName]: multiSelectionAriaPropName, [PropNames.MultiSelectionParameters.multiSelectionMode]: multiSelectionMode, [PropNames.MultiSelectionParameters.onSelectionChange]: onSelectionChange, ...void2 }: UseMultiSelectionParameters<UseMultiSelectionChildInfo<any>>): UseMultiSelectionReturnType<ParentOrChildElement, ChildElement>;
/**
 *
 * @compositeParams
 */
export declare function useMultiSelectionChild<E extends Element>({ info: { index, ...void4 }, [PropNames.MultiSelectionChildParameters.initiallyMultiSelected]: initiallyMultiSelected, [PropNames.MultiSelectionChildParameters.multiSelectionDisabled]: multiSelectionDisabled, [PropNames.MultiSelectionChildParameters.onMultiSelectChange]: onMultiSelectChange, context: { multiSelectionContext: { notifyParentOfChildSelectChange, [PropNames.MultiSelectionParameters.multiSelectionAriaPropName]: multiSelectionAriaPropName, [PropNames.MultiSelectionParameters.multiSelectionMode]: multiSelectionMode, doContiguousSelection, changeAllChildren, getCtrlKeyDown, getShiftKeyDown, getAnyFocused, ...void5 }, ...void3 }, ...void2 }: UseMultiSelectionChildParameters<E, UseMultiSelectionChildInfo<E>>): UseMultiSelectionChildReturnType<E, UseMultiSelectionChildInfo<E>>;
export interface UseMultiSelectionChildDeclarativeReturnType<E extends Element, M extends UseMultiSelectionChildInfo<E>> extends Pick<UseMultiSelectionChildParameters<E, M>, typeof PropNames.MultiSelectionChildParameters.onMultiSelectChange> {
    info: Pick<M, "setSelectedFromParent">;
}
export interface UseMultiSelectionChildDeclarativeParameters<E extends Element, M extends UseMultiSelectionChildInfo<E>> extends Pick<UseMultiSelectionChildReturnType<E, M>, typeof PropNames.MultiSelectionChildReturn.changeMultiSelected> {
    [PropNames.MultiSelectionChildParameters.multiSelected]: boolean;
    [PropNames.MultiSelectionChildParameters.onMultiSelectChange]: Nullable<(e: MultiSelectChildChangeEvent) => void>;
}
export type MakeMultiSelectionChildDeclarativeParameters<P extends UseMultiSelectionChildParameters<any, any>> = Omit<P, keyof typeof PropNames.MultiSelectionChildParameters> & UseMultiSelectionChildDeclarativeParameters<any, any>;
export type MakeMultiSelectionChildDeclarativeReturnType<R extends UseMultiSelectionChildReturnType<any, any>> = Omit<R, keyof typeof PropNames.MultiSelectionChildReturn> & OmitStrong<UseMultiSelectionChildReturnType<any, any>, typeof PropNames.MultiSelectionChildReturn.changeMultiSelected>;
/**
 *
 * @compositeParams
 */
export declare function useMultiSelectionChildDeclarative<E extends Element>({ [PropNames.MultiSelectionChildParameters.onMultiSelectChange]: onMultiSelectChange, [PropNames.MultiSelectionChildParameters.multiSelected]: multiSelected, [PropNames.MultiSelectionChildReturn.changeMultiSelected]: changeMultiSelected, ...void1 }: UseMultiSelectionChildDeclarativeParameters<E, UseMultiSelectionChildInfo<E>>): UseMultiSelectionChildDeclarativeReturnType<E, UseMultiSelectionChildInfo<E>>;
//# sourceMappingURL=use-multi-selection.d.ts.map