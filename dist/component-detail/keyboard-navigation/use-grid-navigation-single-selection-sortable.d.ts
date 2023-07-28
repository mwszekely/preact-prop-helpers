import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { OmitStrong } from "../../util/types.js";
import { UseSingleSelectionChildInfoKeysReturnType } from "../use-single-selection.js";
import { UseSortableChildInfo, UseSortableChildrenParameters, UseSortableChildrenReturnType } from "../use-sortable-children.js";
import { GridSingleSelectChildCellInfo, GridSingleSelectChildRowInfo, UseGridNavigationCellSingleSelectionContext, UseGridNavigationRowSingleSelectionContext, UseGridNavigationSingleSelectionCellInfoKeysParameters, UseGridNavigationSingleSelectionCellInfoKeysReturnType, UseGridNavigationSingleSelectionCellParameters, UseGridNavigationSingleSelectionCellReturnType, UseGridNavigationSingleSelectionParameters, UseGridNavigationSingleSelectionReturnType, UseGridNavigationSingleSelectionRowInfoKeysParameters, UseGridNavigationSingleSelectionRowInfoKeysReturnType, UseGridNavigationSingleSelectionRowParameters, UseGridNavigationSingleSelectionRowReturnType } from "./use-grid-navigation-single-selection.js";
import { UseRovingTabIndexChildInfoKeysReturnType } from "./use-roving-tabindex.js";
export type UseGridNavigationSingleSelectionSortableRowInfoKeysParameters = UseGridNavigationSingleSelectionRowInfoKeysParameters;
export type UseGridNavigationSingleSelectionSortableRowInfoKeysReturnType = UseGridNavigationSingleSelectionRowInfoKeysReturnType;
export type UseGridNavigationSingleSelectionSortableCellInfoKeysParameters = UseGridNavigationSingleSelectionCellInfoKeysParameters;
export type UseGridNavigationSingleSelectionSortableCellInfoKeysReturnType = UseGridNavigationSingleSelectionCellInfoKeysReturnType;
export interface UseGridNavigationRowSingleSelectionSortableContext extends UseGridNavigationRowSingleSelectionContext {
}
export interface UseGridNavigationCellSingleSelectionSortableContext extends UseGridNavigationCellSingleSelectionContext {
}
export interface GridSingleSelectSortableChildRowInfo<RowElement extends Element> extends GridSingleSelectChildRowInfo<RowElement>, UseSortableChildInfo {
}
export interface GridSingleSelectSortableChildCellInfo<CellElement extends Element> extends GridSingleSelectChildCellInfo<CellElement>, UseSortableChildInfo {
}
export interface UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement extends Element, RowElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement>> extends OmitStrong<UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, RM>, "managedChildrenReturn" | "rearrangeableChildrenReturn">, UseSortableChildrenParameters<RM> {
}
export interface UseGridNavigationSingleSelectionSortableReturnType<ParentOrRowElement extends Element, RowElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement>> extends UseGridNavigationSingleSelectionReturnType<ParentOrRowElement, RowElement>, UseSortableChildrenReturnType<RM> {
    context: UseGridNavigationRowSingleSelectionContext;
}
export interface UseGridNavigationSingleSelectionSortableRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>> extends UseGenericChildParameters<UseGridNavigationRowSingleSelectionSortableContext, Pick<RM, UseGridNavigationSingleSelectionSortableRowInfoKeysParameters>>, OmitStrong<UseGridNavigationSingleSelectionRowParameters<RowElement, CellElement, CM>, "context" | "info"> {
    gridNavigationSingleSelectionSortableRowParameters: UseGridNavigationSingleSelectionSortableRowParametersSelf;
}
export interface UseGridNavigationSingleSelectionSortableRowReturnType<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>> extends OmitStrong<UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement>, "context" | "info"> {
    info: Pick<RM, "focusSelf" | "getSortValue" | UseRovingTabIndexChildInfoKeysReturnType | UseSingleSelectionChildInfoKeysReturnType>;
    context: UseGridNavigationCellSingleSelectionContext;
}
export interface UseGridNavigationSingleSelectionSortableRowParametersSelf {
    /**
     * When the grid is sorted, this column of cells is chosen to sort by.
     */
    getSortableColumnIndex(): number | null | undefined;
}
export interface UseGridNavigationSingleSelectionSortableCellParameters<CellElement extends Element, CM extends GridSingleSelectSortableChildCellInfo<CellElement>> extends UseGenericChildParameters<UseGridNavigationCellSingleSelectionSortableContext, Pick<CM, UseGridNavigationSingleSelectionSortableCellInfoKeysParameters>>, OmitStrong<UseGridNavigationSingleSelectionCellParameters<CellElement>, "context" | "info"> {
}
export interface UseGridNavigationSingleSelectionSortableCellReturnType<CellElement extends Element> extends UseGridNavigationSingleSelectionCellReturnType<CellElement> {
}
/**
 * Combines {@link useGridNavigation}, {@link useSingleSelection}, and {@link useSortableChildren}.
 *
 * @remarks This is a separate hook because {@link useSortableChildren} imposes unique requirements to the structure of your `children`.
 *
 * @hasChild {@link useGridNavigationSingleSelectionSortableRow}
 *
 * @compositeParams
 */
export declare function useGridNavigationSingleSelectionSortable<ParentOrRowElement extends Element, RowElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement>>({ rearrangeableChildrenParameters, sortableChildrenParameters, linearNavigationParameters, managedChildrenReturn, gridNavigationParameters, paginatedChildrenParameters, refElementReturn, rovingTabIndexParameters, singleSelectionParameters, typeaheadNavigationParameters, ...void1 }: UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, RM>): UseGridNavigationSingleSelectionSortableReturnType<ParentOrRowElement, RowElement, RM>;
/**
 * Besides just overriding `focusSelf` for `useRovingTabIndex`, this also overrides `getSortValue` to return the sort value of the current cell.
 *
 * @compositeParams
 */
export declare function useGridNavigationSingleSelectionSortableRow<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>>({ context: ctxIncoming, info: { index, unselectable, untabbable, ...void2 }, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, gridNavigationSingleSelectionSortableRowParameters: { getSortableColumnIndex: getSortableColumnIndexUnstable, ...void5 }, ...void1 }: UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement, RM, CM>;
/**
 * @compositeParams
 */
export declare function useGridNavigationSingleSelectionSortableCell<CellElement extends Element>({ context, gridNavigationCellParameters, info: { index, untabbable, ...void2 }, refElementReturn, textContentParameters, ...void1 }: UseGridNavigationSingleSelectionSortableCellParameters<CellElement, GridSingleSelectSortableChildCellInfo<CellElement>>): UseGridNavigationSingleSelectionSortableCellReturnType<CellElement>;
//# sourceMappingURL=use-grid-navigation-single-selection-sortable.d.ts.map