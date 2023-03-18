import { h } from "preact";
import { UsePaginatedChildContext, UsePaginatedChildReturn, UsePaginatedChildrenInfo, UsePaginatedChildrenParameters, UsePaginatedChildrenReturnType } from "../component-detail/use-paginated-children.js";
import { UseStaggeredChildContext, UseStaggeredChildReturn, UseStaggeredChildrenInfo, UseStaggeredChildrenParameters, UseStaggeredChildrenReturnType } from "../component-detail/use-staggered-children.js";
import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { UseGridNavigationCellContext, UseGridNavigationRowContext } from "../component-detail/keyboard-navigation/use-grid-navigation-partial.js";
import { GridSingleSelectSortableChildCellInfo, GridSingleSelectSortableChildRowInfo, UseGridNavigationSingleSelectionSortableCellReturnType, UseGridNavigationSingleSelectionSortableParameters, UseGridNavigationSingleSelectionSortableReturnType, UseGridNavigationSingleSelectionSortableRowParameters, UseGridNavigationSingleSelectionSortableRowReturnType } from "../component-detail/keyboard-navigation/use-grid-navigation-single-selection-sortable.js";
import { UseGridNavigationSingleSelectionCellParameters, UseGridNavigationSingleSelectionParameters } from "../component-detail/keyboard-navigation/use-grid-navigation-single-selection.js";
import { RovingTabIndexChildContext } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { UseSingleSelectionContext } from "../component-detail/keyboard-navigation/use-single-selection.js";
import { UseSortableChildInfo } from "../component-detail/keyboard-navigation/use-sortable-children.js";
import { UseTypeaheadNavigationContext } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { UseChildrenHaveFocusContext, UseChildrenHaveFocusReturnType } from "../observers/use-children-have-focus.js";
import { UseHasCurrentFocusReturnType } from "../observers/use-has-current-focus.js";
import { UseManagedChildReturnType, UseManagedChildrenContext, UseManagedChildrenReturnType } from "../preact-extensions/use-managed-children.js";
import { OmitStrong } from "../util/types.js";
export interface UseCompleteGridNavigationRowInfo<RowElement extends Element, CellElement extends Element> extends GridSingleSelectSortableChildRowInfo<RowElement, CellElement>, UsePaginatedChildrenInfo<RowElement>, UseStaggeredChildrenInfo<RowElement> {
}
export interface UseCompleteGridNavigationCellInfo<CellElement extends Element> extends GridSingleSelectSortableChildCellInfo<CellElement> {
}
export interface UseCompleteGridNavigationParameters<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, M extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>> extends OmitStrong<UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, CellElement, M>, "managedChildrenReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters" | "rearrangeableChildrenParameters" | "rovingTabIndexParameters"> {
    linearNavigationParameters: OmitStrong<UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, CellElement, M>["linearNavigationParameters"], "getHighestIndex" | "indexMangler" | "indexDemangler" | "isValid">;
    typeaheadNavigationParameters: OmitStrong<UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, CellElement, M>["typeaheadNavigationParameters"], "isValid">;
    rearrangeableChildrenParameters: OmitStrong<UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, CellElement, M>["rearrangeableChildrenParameters"], "onRearranged">;
    rovingTabIndexParameters: OmitStrong<UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, CellElement, M>["rovingTabIndexParameters"], "initiallyTabbedIndex">;
    paginatedChildrenParameters: Pick<UsePaginatedChildrenParameters<RowElement, M>, "paginatedChildrenParameters">["paginatedChildrenParameters"];
    staggeredChildrenParameters: Pick<UseStaggeredChildrenParameters<RowElement, M>, "staggeredChildrenParameters">["staggeredChildrenParameters"];
}
export interface UseCompleteGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends OmitStrong<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>, "context" | "textContentParameters" | "managedChildrenReturn" | "refElementReturn" | "rovingTabIndexParameters" | "linearNavigationParameters" | "typeaheadNavigationParameters"> {
    context: CompleteGridNavigationRowContext<any, RowElement, CellElement, RM, CM>;
    info: OmitStrong<RM, Exclude<keyof UseCompleteGridNavigationRowInfo<RowElement, CellElement>, "index">>;
    sortableChildParameters: Pick<UseSortableChildInfo, "getSortValue">;
    textContentParameters: OmitStrong<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["textContentParameters"], "hidden">;
    linearNavigationParameters: OmitStrong<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["linearNavigationParameters"], "getHighestIndex" | "pageNavigationSize" | "isValid" | "indexMangler" | "indexDemangler">;
    typeaheadNavigationParameters: OmitStrong<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["typeaheadNavigationParameters"], "isValid">;
    rovingTabIndexParameters: OmitStrong<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["rovingTabIndexParameters"], "initiallyTabbedIndex">;
}
export interface UseCompleteGridNavigationCellParameters<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends OmitStrong<UseGridNavigationSingleSelectionCellParameters<any, CellElement, CM>, "context" | "textContentParameters" | "refElementReturn"> {
    textContentParameters: OmitStrong<UseGridNavigationSingleSelectionCellParameters<any, CellElement, CM>["textContentParameters"], "hidden">;
    info: Omit<CM, Exclude<keyof UseCompleteGridNavigationCellInfo<CellElement>, "index" | "focusSelf">>;
    context: CompleteGridNavigationCellContext<any, CellElement, CM>;
}
export interface CompleteGridNavigationRowContext<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends UseManagedChildrenContext<RM>, UsePaginatedChildContext, UseStaggeredChildContext, UseChildrenHaveFocusContext<RowElement>, UseTypeaheadNavigationContext, UseSingleSelectionContext<RowElement, RM>, RovingTabIndexChildContext<RowElement, RM>, UseGridNavigationRowContext<ParentOrRowElement, RowElement, CellElement, RM> {
}
export interface CompleteGridNavigationCellContext<ParentElement extends Element, ChildElement extends Element, CM extends UseCompleteGridNavigationCellInfo<ChildElement>> extends UseManagedChildrenContext<CM>, UseTypeaheadNavigationContext, RovingTabIndexChildContext<ChildElement, CM>, UseGridNavigationCellContext<ParentElement, ChildElement, CM> {
}
export interface UseCompleteGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends Pick<UsePaginatedChildrenReturnType, "paginatedChildrenReturn">, Pick<UseStaggeredChildrenReturnType, "staggeredChildrenReturn">, OmitStrong<UseGridNavigationSingleSelectionSortableReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, "context" | "childrenHaveFocusParameters" | "managedChildrenParameters"> {
    context: CompleteGridNavigationRowContext<ParentOrRowElement, RowElement, CellElement, RM, CM>;
    managedChildrenReturn: UseManagedChildrenReturnType<RM>["managedChildrenReturn"];
    childrenHaveFocusReturn: UseChildrenHaveFocusReturnType<RowElement>["childrenHaveFocusReturn"];
}
export interface UseCompleteGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends OmitStrong<UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement, RM, CM>, "context" | "gridNavigationRowParameters" | "managedChildrenParameters" | "info" | "pressParameters" | "textContentReturn"> {
    managedChildrenReturn: UseManagedChildrenReturnType<CM>["managedChildrenReturn"];
    hasCurrentFocusReturn: UseHasCurrentFocusReturnType<RowElement>["hasCurrentFocusReturn"];
    context: CompleteGridNavigationCellContext<RowElement, CellElement, CM>;
    managedChildReturn: UseManagedChildReturnType<RM>["managedChildReturn"];
    paginatedChildReturn: UsePaginatedChildReturn<RowElement>["paginatedChildReturn"];
    staggeredChildReturn: UseStaggeredChildReturn<RowElement>["staggeredChildReturn"];
    textContentReturn: UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement, RM, CM>["textContentReturn"];
}
export interface UseCompleteGridNavigationCellReturnType<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends OmitStrong<UseGridNavigationSingleSelectionSortableCellReturnType<CellElement, CM>, "hasCurrentFocusParameters" | "info">, OmitStrong<UseRefElementReturnType<CellElement>, "propsStable">, UseHasCurrentFocusReturnType<CellElement>, UseManagedChildReturnType<CM> {
    props: h.JSX.HTMLAttributes<CellElement>;
}
export declare function useCompleteGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, typeaheadNavigationParameters, sortableChildrenParameters, rearrangeableChildrenParameters, paginatedChildrenParameters, staggeredChildrenParameters }: UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, RM>): UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>;
export declare function useCompleteGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({ info: { index, ...info5 }, context: contextIncomingForRowAsChildOfTable, singleSelectionChildParameters, rovingTabIndexChildParameters, rovingTabIndexChildParameters: { hidden }, textContentParameters, linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, sortableChildParameters }: UseCompleteGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM>;
export declare function useCompleteGridNavigationCell<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({ gridNavigationCellParameters, context: { gridNavigationCellContext, managedChildContext, rovingTabIndexContext, typeaheadNavigationContext }, rovingTabIndexChildParameters: { hidden }, rovingTabIndexChildParameters, textContentParameters, info: { focusSelf, index, ...info }, }: UseCompleteGridNavigationCellParameters<CellElement, CM>): UseCompleteGridNavigationCellReturnType<CellElement, CM>;
//# sourceMappingURL=use-grid-navigation-complete.d.ts.map