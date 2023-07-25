import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { OmitStrong, TargetedOmit } from "../../util/types.js";
import { GridSingleSelectChildCellInfo, GridSingleSelectChildRowInfo, UseGridNavigationCellSingleSelectionContext, UseGridNavigationRowSingleSelectionContext, UseGridNavigationSingleSelectionCellParameters, UseGridNavigationSingleSelectionCellReturnType, UseGridNavigationSingleSelectionParameters, UseGridNavigationSingleSelectionReturnType, UseGridNavigationSingleSelectionRowParameters, UseGridNavigationSingleSelectionRowReturnType } from "./use-grid-navigation-single-selection.js";
import { UseListNavigationChildInfoKeysParameters } from "./use-list-navigation-partial.js";
import { UseListNavigationSingleSelectionSortableChildInfoKeysParameters } from "./use-list-navigation-single-selection-sortable.js";
import { UseRovingTabIndexChildInfoKeysReturnType } from "./use-roving-tabindex.js";
import { UseSingleSelectionChildInfoKeysReturnType } from "./use-single-selection.js";
import { UseSortableChildInfo, UseSortableChildrenParameters, UseSortableChildrenReturnType } from "./use-sortable-children.js";
export type UseGridNavigationSingleSelectionSortableRowInfoKeysParameters = UseListNavigationSingleSelectionSortableChildInfoKeysParameters;
export type UseGridNavigationSingleSelectionSortableCellInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
export interface UseGridNavigationRowSingleSelectionSortableContext extends UseGridNavigationRowSingleSelectionContext {
}
export interface UseGridNavigationCellSingleSelectionSortableContext extends UseGridNavigationCellSingleSelectionContext {
}
export interface GridSingleSelectSortableChildRowInfo<RowElement extends Element> extends GridSingleSelectChildRowInfo<RowElement>, UseSortableChildInfo {
}
export interface GridSingleSelectSortableChildCellInfo<CellElement extends Element> extends GridSingleSelectChildCellInfo<CellElement>, UseSortableChildInfo {
}
export interface UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement extends Element, RowElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement>> extends OmitStrong<UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, RM>, "linearNavigationParameters" | "managedChildrenReturn">, TargetedOmit<UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, RM>, "linearNavigationParameters", "indexDemangler" | "indexMangler">, UseSortableChildrenParameters<RM> {
}
export interface UseGridNavigationSingleSelectionSortableReturnType<ParentOrRowElement extends Element, RowElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement>> extends UseGridNavigationSingleSelectionReturnType<ParentOrRowElement, RowElement>, UseSortableChildrenReturnType<RM> {
    context: UseGridNavigationRowSingleSelectionContext;
}
export interface UseGridNavigationSingleSelectionSortableRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>> extends UseGenericChildParameters<UseGridNavigationRowSingleSelectionSortableContext, Pick<RM, UseGridNavigationSingleSelectionSortableRowInfoKeysParameters>>, OmitStrong<UseGridNavigationSingleSelectionRowParameters<RowElement, CellElement, CM>, "context" | "info"> {
}
export interface UseGridNavigationSingleSelectionSortableRowReturnType<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>> extends OmitStrong<UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement>, "context" | "info"> {
    info: Pick<RM, "focusSelf" | "getSortValue" | UseRovingTabIndexChildInfoKeysReturnType | UseSingleSelectionChildInfoKeysReturnType>;
    context: UseGridNavigationCellSingleSelectionContext;
}
export interface UseGridNavigationSingleSelectionSortableCellParameters<CellElement extends Element, CM extends GridSingleSelectSortableChildCellInfo<CellElement>> extends UseGenericChildParameters<UseGridNavigationCellSingleSelectionSortableContext, Pick<CM, UseGridNavigationSingleSelectionSortableCellInfoKeysParameters>>, OmitStrong<UseGridNavigationSingleSelectionCellParameters<CellElement>, "context" | "info"> {
}
export interface UseGridNavigationSingleSelectionSortableCellReturnType<CellElement extends Element> extends UseGridNavigationSingleSelectionCellReturnType<CellElement> {
}
export declare function useGridNavigationSingleSelectionSortable<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement>>({ rearrangeableChildrenParameters, sortableChildrenParameters, linearNavigationParameters, managedChildrenReturn, gridNavigationParameters, paginatedChildrenParameters, refElementReturn, rovingTabIndexParameters, singleSelectionParameters, typeaheadNavigationParameters, ...void1 }: UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, RM>): UseGridNavigationSingleSelectionSortableReturnType<ParentOrRowElement, RowElement, RM>;
export declare function useGridNavigationSingleSelectionSortableRow<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>>({ context, info: { index, unselectable, untabbable, ...void2 }, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, ...void1 }: UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement, RM, CM>;
export declare function useGridNavigationSingleSelectionSortableCell<CellElement extends Element>({ context, gridNavigationCellParameters, info: { index, untabbable, ...void2 }, refElementReturn, textContentParameters, ...void1 }: UseGridNavigationSingleSelectionSortableCellParameters<CellElement, GridSingleSelectSortableChildCellInfo<CellElement>>): UseGridNavigationSingleSelectionSortableCellReturnType<CellElement>;
//# sourceMappingURL=use-grid-navigation-single-selection-sortable.d.ts.map