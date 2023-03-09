import { h } from "preact";
import { UseGridNavigationCellContext, UseGridNavigationRowContext } from "../component-detail/use-grid-navigation-partial.js";
import { GridSingleSelectSortableChildCellInfo, GridSingleSelectSortableChildRowInfo, UseGridNavigationSingleSelectionSortableCellReturnType, UseGridNavigationSingleSelectionSortableParameters, UseGridNavigationSingleSelectionSortableReturnType, UseGridNavigationSingleSelectionSortableRowParameters, UseGridNavigationSingleSelectionSortableRowReturnType } from "../component-detail/use-grid-navigation-single-selection-sortable.js";
import { UseGridNavigationSingleSelectionCellParameters, UseGridNavigationSingleSelectionParameters } from "../component-detail/use-grid-navigation-single-selection.js";
import { UsePaginatedChildContext, UsePaginatedChildrenInfo, UsePaginatedChildrenParameters, UsePaginatedChildrenReturnType, UsePaginatedChildReturn } from "../component-detail/use-paginated-children.js";
import { UseSortableChildInfo } from "../component-detail/use-sortable-children.js";
import { UseStaggeredChildContext, UseStaggeredChildrenInfo, UseStaggeredChildrenParameters, UseStaggeredChildrenReturnType, UseStaggeredChildReturn } from "../component-detail/use-staggered-children.js";
import { UseTypeaheadNavigationContext } from "../component-detail/use-typeahead-navigation.js";
import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { UseChildrenHaveFocusContext, UseChildrenHaveFocusReturnType } from "../observers/use-children-have-focus.js";
import { UseHasCurrentFocusReturnType } from "../observers/use-has-current-focus.js";
import { UseManagedChildrenContext, UseManagedChildrenReturnType, UseManagedChildReturnType } from "../preact-extensions/use-managed-children.js";
import { OmitStrong } from "../util/types.js";
import { UseSingleSelectionContext } from "../component-detail/use-single-selection.js";
import { RovingTabIndexChildContext } from "../component-detail/use-roving-tabindex.js";
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
    completeGridNavigationRowParameters: OmitStrong<RM, keyof UseCompleteGridNavigationRowInfo<RowElement, CellElement>>;
    sortableChildParameters: Pick<UseSortableChildInfo, "getSortValue">;
    textContentParameters: OmitStrong<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["textContentParameters"], "hidden">;
    linearNavigationParameters: OmitStrong<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["linearNavigationParameters"], "getHighestIndex" | "pageNavigationSize" | "isValid" | "indexMangler" | "indexDemangler">;
    typeaheadNavigationParameters: OmitStrong<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["typeaheadNavigationParameters"], "isValid">;
    rovingTabIndexParameters: OmitStrong<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["rovingTabIndexParameters"], "initiallyTabbedIndex">;
}
export interface UseCompleteGridNavigationCellParameters<CellElement extends Element, M extends UseCompleteGridNavigationCellInfo<CellElement>> extends OmitStrong<UseGridNavigationSingleSelectionCellParameters<any, CellElement>, "context" | "textContentParameters" | "refElementReturn"> {
    textContentParameters: OmitStrong<UseGridNavigationSingleSelectionCellParameters<any, CellElement>["textContentParameters"], "hidden">;
    completeGridNavigationCellParameters: Pick<M, "focusSelf"> & OmitStrong<M, keyof UseCompleteGridNavigationCellInfo<CellElement>>;
    context: CompleteGridNavigationCellContext<any, CellElement, M>;
}
export interface CompleteGridNavigationRowContext<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends UseManagedChildrenContext<RM>, UsePaginatedChildContext, UseStaggeredChildContext, UseChildrenHaveFocusContext<RowElement>, UseTypeaheadNavigationContext, UseSingleSelectionContext<RowElement>, RovingTabIndexChildContext<RowElement>, UseGridNavigationRowContext<ParentOrRowElement, RowElement, CellElement> {
}
export interface CompleteGridNavigationCellContext<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteGridNavigationCellInfo<ChildElement>> extends UseManagedChildrenContext<M>, UseTypeaheadNavigationContext, RovingTabIndexChildContext<ChildElement>, UseGridNavigationCellContext<ParentElement, ChildElement> {
}
export interface UseCompleteGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends Pick<UsePaginatedChildrenReturnType, "paginatedChildrenReturn">, Pick<UseStaggeredChildrenReturnType, "staggeredChildrenReturn">, OmitStrong<UseGridNavigationSingleSelectionSortableReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, "context" | "childrenHaveFocusParameters" | "managedChildrenParameters"> {
    context: CompleteGridNavigationRowContext<ParentOrRowElement, RowElement, CellElement, RM, CM>;
    managedChildrenReturn: UseManagedChildrenReturnType<RM>["managedChildrenReturn"];
    childrenHaveFocusReturn: UseChildrenHaveFocusReturnType<RowElement>["childrenHaveFocusReturn"];
}
export interface UseCompleteGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends OmitStrong<UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement>, "context" | "gridNavigationRowParameters" | "managedChildrenParameters" | "managedChildParameters" | "pressParameters" | "textContentReturn"> {
    managedChildrenReturn: UseManagedChildrenReturnType<CM>["managedChildrenReturn"];
    hasCurrentFocusReturn: UseHasCurrentFocusReturnType<RowElement>["hasCurrentFocusReturn"];
    context: CompleteGridNavigationCellContext<RowElement, CellElement, CM>;
    managedChildReturn: UseManagedChildReturnType<RM>["managedChildReturn"];
    paginatedChildReturn: UsePaginatedChildReturn<RowElement>["paginatedChildReturn"];
    staggeredChildReturn: UseStaggeredChildReturn<RowElement>["staggeredChildReturn"];
    textContentReturn: UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement>["textContentReturn"];
}
export interface UseCompleteGridNavigationCellReturnType<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends OmitStrong<UseGridNavigationSingleSelectionSortableCellReturnType<CellElement>, "hasCurrentFocusParameters">, OmitStrong<UseRefElementReturnType<CellElement>, "propsStable">, UseHasCurrentFocusReturnType<CellElement>, UseManagedChildReturnType<CM> {
    props: h.JSX.HTMLAttributes<CellElement>;
}
export declare function useCompleteGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, typeaheadNavigationParameters, sortableChildrenParameters, rearrangeableChildrenParameters, paginatedChildrenParameters, staggeredChildrenParameters }: UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, RM>): UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>;
export declare function useCompleteGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({ managedChildParameters, context: contextIncomingForRowAsChildOfTable, completeGridNavigationRowParameters, singleSelectionChildParameters, rovingTabIndexChildParameters, rovingTabIndexChildParameters: { hidden }, textContentParameters, linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, sortableChildParameters }: UseCompleteGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM>;
export declare function useCompleteGridNavigationCell<CellElement extends Element, M extends UseCompleteGridNavigationCellInfo<CellElement>>({ gridNavigationCellParameters, managedChildParameters, context: { gridNavigationCellContext, managedChildContext, rovingTabIndexContext, typeaheadNavigationContext }, rovingTabIndexChildParameters: { hidden }, rovingTabIndexChildParameters, textContentParameters, completeGridNavigationCellParameters: { focusSelf, ...completeGridNavigationCellParameters }, }: UseCompleteGridNavigationCellParameters<CellElement, M>): UseCompleteGridNavigationCellReturnType<CellElement, M>;
//# sourceMappingURL=use-grid-navigation-complete.d.ts.map