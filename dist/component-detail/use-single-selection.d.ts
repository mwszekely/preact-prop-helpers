import { UsePressParameters } from "../component-use/use-press.js";
import { UseChildrenHaveFocusChildReturnType, UseChildrenHaveFocusParameters } from "../observers/use-children-have-focus.js";
import { UseGenericChildParameters, UseManagedChildrenReturnType } from "../preact-extensions/use-managed-children.js";
import { PassiveStateUpdater } from "../preact-extensions/use-passive-state.js";
import { EnhancedEventHandler, TargetedEnhancedEvent } from "../util/event.js";
import { RequiredN } from "../util/lib-shared.js";
import { TargetedPick } from "../util/lib.js";
import { ElementProps, Nullable } from "../util/types.js";
import { UseRovingTabIndexChildInfo, UseRovingTabIndexReturnType } from "./keyboard-navigation/use-roving-tabindex.js";
/** Anything that's selectable must be tabbable, so we DO use rovingTabIndex instead of just managedChildren */
export interface UseSingleSelectionChildInfo<E extends Element> extends UseRovingTabIndexChildInfo<E> {
    selected: boolean;
    getSelected(): boolean;
    /**
     * The parent calls this to change the child's local state.
     *
     * When the `selectedIndex` changes, the relevant children's `setLocalSelected` are called (max of 2).
     *
     * @param selected - This is the selected child (out of all of them)
     * @param direction - How far to the `selectedIndex` this child is
     */
    setLocalSelected(selected: boolean, direction: number | null): void;
    /**
     * This is similar to `untabbable` for `useRovingTabIndex`, but for selection.
     *
     * Disables selecting this child. Being `untabbable` must imply being `unselectable`, but you can of course have something that's unselectable but not untabbable.
     */
    unselectable: boolean;
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
    initiallySelectedIndex: Nullable<number>;
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
    onSelectedIndexChange: Nullable<SelectedIndexChangeHandler>;
    selectionMode: "focus" | "activation" | "disabled";
    /**
     * What property will be used to mark this item as selected.
     *
     * **IMPORTANT**: The `aria-current` options should be used with caution as they are semantically very different from the usual selection cases.
     */
    ariaPropName: Nullable<`aria-${"pressed" | "selected" | "checked" | `current-${"page" | "step" | "date" | "time" | "location" | "true"}`}`>;
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
    changeSelectedIndex: PassiveStateUpdater<number | null, SelectedIndexChangeEvent>;
    /**
     * @stable
     */
    getSelectedIndex(): number | null;
}
export interface UseSingleSelectionChildReturnTypeSelf {
    /**
     * Is this child currently the selected child among all its siblings?
     */
    selected: boolean;
    /** @stable */
    getSelected(): boolean;
    /**
     * Any time `selected` changes to or from being visible, this will represent the direction and magnitude of the change.
     *
     * It will never be zero; when `selected` is `true`, then this will be the most recently-used offset.
     *
     * This useful for things like animations or transitions.
     */
    selectedOffset: Nullable<number>;
    /** @stable */
    getSelectedOffset: () => (number | null);
}
export interface UseSingleSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element> extends TargetedPick<UseManagedChildrenReturnType<UseSingleSelectionChildInfo<ChildElement>>, "managedChildrenReturn", "getChildren">, TargetedPick<UseRovingTabIndexReturnType<ParentOrChildElement, ChildElement>, "rovingTabIndexReturn", "setTabbableIndex"> {
    singleSelectionParameters: UseSingleSelectionParametersSelf;
}
export type UseSingleSelectionChildInfoKeysParameters = "index" | "unselectable";
export type UseSingleSelectionChildInfoKeysReturnType = "getSelected" | "setLocalSelected" | "selected";
export interface UseSingleSelectionChildParameters<E extends Element> extends UseGenericChildParameters<UseSingleSelectionContext, Pick<UseSingleSelectionChildInfo<E>, UseSingleSelectionChildInfoKeysParameters>> {
}
export interface UseSingleSelectionChildReturnType<E extends Element> extends UseChildrenHaveFocusChildReturnType<E>, TargetedPick<UsePressParameters<any>, "pressParameters", "onPressSync"> {
    props: ElementProps<E>;
    info: Pick<UseSingleSelectionChildInfo<E>, UseSingleSelectionChildInfoKeysReturnType>;
    singleSelectionChildReturn: UseSingleSelectionChildReturnTypeSelf;
}
export interface UseSingleSelectionReturnType<ChildElement extends Element> extends TargetedPick<UseChildrenHaveFocusParameters<ChildElement>, "childrenHaveFocusParameters", "onCompositeFocusChange"> {
    singleSelectionReturn: UseSingleSelectionReturnTypeSelf;
    context: UseSingleSelectionContext;
}
export interface SingleSelectionContextSelf extends RequiredN<Pick<UseSingleSelectionParametersSelf, "selectionMode" | "onSelectedIndexChange">>, Pick<UseSingleSelectionParametersSelf, "ariaPropName"> {
    getSelectedIndex(): number | null;
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
export declare function useSingleSelection<ParentOrChildElement extends Element, ChildElement extends Element>({ managedChildrenReturn: { getChildren, ...void1 }, rovingTabIndexReturn: { setTabbableIndex, ...void2 }, singleSelectionParameters: { onSelectedIndexChange: onSelectedIndexChange_U, initiallySelectedIndex, ariaPropName, selectionMode, ...void3 }, ...void4 }: UseSingleSelectionParameters<ParentOrChildElement, ChildElement>): UseSingleSelectionReturnType<ChildElement>;
/**
 *
 *
 * @compositeParams
 */
export declare function useSingleSelectionChild<ChildElement extends Element>({ context: { singleSelectionContext: { getSelectedIndex, onSelectedIndexChange, ariaPropName, selectionMode, ...void1 }, ...void2 }, info: { index, unselectable, ...void3 }, ...void4 }: UseSingleSelectionChildParameters<ChildElement>): UseSingleSelectionChildReturnType<ChildElement>;
export interface UseSingleSelectionDeclarativeParametersSelf extends Pick<UseSingleSelectionParametersSelf, "onSelectedIndexChange"> {
    selectedIndex: Nullable<number>;
}
export interface UseSingleSelectionDeclarativeParameters {
    singleSelectionDeclarativeParameters: UseSingleSelectionDeclarativeParametersSelf;
    singleSelectionReturn: Pick<UseSingleSelectionReturnTypeSelf, "changeSelectedIndex">;
}
export type MakeSingleSelectionDeclarativeParameters<P> = Omit<P, "singleSelectionParameters"> & UseSingleSelectionDeclarativeParameters & {
    singleSelectionParameters: Pick<UseSingleSelectionParameters<any, any>["singleSelectionParameters"], "ariaPropName" | "selectionMode">;
};
export type MakeSingleSelectionDeclarativeReturnType<R> = Omit<R, "singleSelectionReturn">;
/**
 * Let's face it, declarative is nicer to use than imperative, so this is a shortcut.
 */
export declare function useSingleSelectionDeclarative<ParentOrChildElement extends Element, ChildElement extends Element>({ singleSelectionReturn: { changeSelectedIndex }, singleSelectionDeclarativeParameters: { selectedIndex, onSelectedIndexChange } }: UseSingleSelectionDeclarativeParameters): {
    singleSelectionParameters: {
        onSelectedIndexChange: SelectedIndexChangeHandler;
    };
};
//# sourceMappingURL=use-single-selection.d.ts.map