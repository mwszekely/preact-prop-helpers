import { h } from "preact";
import { UseChildrenHaveFocusChildReturnType, UseChildrenHaveFocusParameters } from "../../observers/use-children-have-focus.js";
import { UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { PassiveStateUpdater } from "../../preact-extensions/use-passive-state.js";
import { UseRovingTabIndexChildInfo, UseRovingTabIndexReturnType } from "./use-roving-tabindex.js";
/** Anything that's selectable must be tabbable, so we DO use rovingtabindex instead of just managedchildren */
export interface UseSingleSelectionChildInfo<E extends Element> extends UseRovingTabIndexChildInfo<E> {
    selected: boolean;
    getSelected(): boolean;
    /**
     * The parent calls this to change the child's local state.
     *
     * When the `selectedIndex` changes, the relevant children's `setLocalSelected` are called (max of 2).
     *
     * @param selected This is the selected child (out of all of them)
     * @param direction How far to the `selectedIndex` this child is
     */
    setLocalSelected(selected: boolean, direction: number | null): void;
    /**
     * This is similar to `hidden` for `useRovingTabIndex`, but for selection.
     *
     * Disables selecting this child. Being `hidden` must imply being `disabled`, but you can of course have something that's disabled (unselectable) but not hidden (untabbable).
     */
    disabled: boolean;
}
export interface UseSingleSelectionParameters<ChildElement extends Element, M extends UseSingleSelectionChildInfo<ChildElement>> {
    managedChildrenReturn: Pick<UseManagedChildrenReturnType<UseSingleSelectionChildInfo<ChildElement>>["managedChildrenReturn"], "getChildren">;
    rovingTabIndexReturn: Pick<UseRovingTabIndexReturnType<ChildElement, M>["rovingTabIndexReturn"], "setTabbableIndex">;
    singleSelectionParameters: {
        /**
         * This is imperative, as opposed to declarative,
         * to save on re-rendering the parent whenever the selected index changes.
         */
        initiallySelectedIndex: number | null;
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
         */
        onSelectedIndexChange: null | ((index: number | null, reason: Event | undefined) => void);
    };
}
export interface UseSingleSelectionChildParameters<E extends Element, M extends UseSingleSelectionChildInfo<E>> {
    context: UseSingleSelectionReturnType<E, M>["context"];
    singleSelectionChildParameters: {
        selectionMode: "focus" | "activation" | "disabled";
        /**
         * What property will be used to mark this item as selected.
         *
         * **IMPORTANT**: The `aria-current` options should be used with caution as they are semantically very different from the usual selection cases.
         */
        ariaPropName: `aria-${"pressed" | "selected" | "checked" | `current-${"page" | "step" | "date" | "time" | "location" | "true"}`}` | null;
    } & Pick<UseSingleSelectionChildInfo<E>, "disabled">;
    info: Pick<UseSingleSelectionChildInfo<E>, "index">;
}
export interface UseSingleSelectionChildReturnType<E extends Element> extends UseChildrenHaveFocusChildReturnType<E> {
    props: h.JSX.HTMLAttributes<E>;
    info: Pick<UseSingleSelectionChildInfo<E>, "getSelected" | "setLocalSelected" | "selected">;
    singleSelectionChildReturn: {
        selected: boolean;
        getSelected(): boolean;
        /**
         * Any time `selected` changes to or from being visible, this will represent the direction and magnitude of the change.
         *
         * It will never be zero; when `selected` is `true`, then this will be the most recently-used offset.
         *
         * This useful for things like animations or transitions.
         */
        selectedOffset: number | null;
        getSelectedOffset: () => (number | null);
        setThisOneSelected: (event: Event) => void;
    };
}
export interface UseSingleSelectionReturnType<ChildElement extends Element, M extends UseSingleSelectionChildInfo<ChildElement>> {
    singleSelectionReturn: {
        /**
         * A function that, when called, internally updates the selected index to the one you provide,
         * and tells the relevant children that they are/are not selected.
         *
         * If you are creating an imperative component, this is what how you can force the value to change in response to something.
         *
         * If you are creating a declarative component, this is what you call in `useEffect` when your `selectedIndex` changes.
         */
        changeSelectedIndex: PassiveStateUpdater<number | null, Event>;
        getSelectedIndex(): number | null;
    };
    context: UseSingleSelectionContext<ChildElement, M>;
    childrenHaveFocusParameters: Pick<UseChildrenHaveFocusParameters<ChildElement>["childrenHaveFocusParameters"], "onCompositeFocusChange">;
}
export interface UseSingleSelectionContext<ChildElement extends Element, M extends UseSingleSelectionChildInfo<ChildElement>> {
    singleSelectionContext: {
        _c?: ChildElement;
        onSelectedIndexChange: UseSingleSelectionParameters<ChildElement, M>["singleSelectionParameters"]["onSelectedIndexChange"];
        getSelectedIndex(): number | null;
    };
}
export declare function useSingleSelection<ChildElement extends Element, M extends UseSingleSelectionChildInfo<ChildElement>>({ managedChildrenReturn: { getChildren }, rovingTabIndexReturn: { setTabbableIndex }, singleSelectionParameters: { onSelectedIndexChange: onSelectedIndexChange_U, initiallySelectedIndex } }: UseSingleSelectionParameters<ChildElement, M>): UseSingleSelectionReturnType<ChildElement, M>;
export declare function useSingleSelectionChild<ChildElement extends Element, M extends UseSingleSelectionChildInfo<ChildElement>>(args: UseSingleSelectionChildParameters<ChildElement, M>): UseSingleSelectionChildReturnType<ChildElement>;
export interface UseSingleSelectionDeclarativeParameters<ChildElement extends Element, M extends UseSingleSelectionChildInfo<ChildElement>> {
    singleSelectionDeclarativeParameters: {
        selectedIndex: number | null;
    };
    singleSelectionReturn: Pick<UseSingleSelectionReturnType<any, M>["singleSelectionReturn"], "changeSelectedIndex">;
}
export type MakeSingleSelectionDeclarativeParameters<P, ChildElement extends Element, M extends UseSingleSelectionChildInfo<ChildElement>> = Omit<P, "singleSelectionParameters"> & UseSingleSelectionDeclarativeParameters<ChildElement, M>;
export type MakeSingleSelectionDeclarativeReturnType<R> = Omit<R, "singleSelectionReturn">;
/**
 * Let's face it, declarative is nicer to use than imperative, so this is a shortcut.
 */
export declare function useSingleSelectionDeclarative<ChildElement extends Element, M extends UseSingleSelectionChildInfo<ChildElement>>({ singleSelectionReturn: { changeSelectedIndex }, singleSelectionDeclarativeParameters: { selectedIndex } }: UseSingleSelectionDeclarativeParameters<ChildElement, M>): void;
//# sourceMappingURL=use-single-selection.d.ts.map