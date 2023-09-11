import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { OmitStrong } from "../../util/types.js";
import { UseSelectionChildInfoKeysReturnType } from "../use-selection.js";
import { UseSortableChildInfo, UseSortableChildrenParameters, UseSortableChildrenReturnType } from "../use-sortable-children.js";
import { GridSelectChildCellInfo, GridSelectChildRowInfo, UseGridNavigationCellSelectionContext, UseGridNavigationRowSelectionContext, UseGridNavigationSelectionCellInfoKeysParameters, UseGridNavigationSelectionCellInfoKeysReturnType, UseGridNavigationSelectionCellParameters, UseGridNavigationSelectionCellReturnType, UseGridNavigationSelectionParameters, UseGridNavigationSelectionReturnType, UseGridNavigationSelectionRowInfoKeysParameters, UseGridNavigationSelectionRowInfoKeysReturnType, UseGridNavigationSelectionRowParameters, UseGridNavigationSelectionRowReturnType } from "./use-grid-navigation-selection.js";
import { UseRovingTabIndexChildInfoKeysReturnType } from "./use-roving-tabindex.js";
export type UseGridNavigationSelectionSortableRowInfoKeysParameters = UseGridNavigationSelectionRowInfoKeysParameters;
export type UseGridNavigationSelectionSortableRowInfoKeysReturnType = UseGridNavigationSelectionRowInfoKeysReturnType;
export type UseGridNavigationSelectionSortableCellInfoKeysParameters = UseGridNavigationSelectionCellInfoKeysParameters;
export type UseGridNavigationSelectionSortableCellInfoKeysReturnType = UseGridNavigationSelectionCellInfoKeysReturnType;
export interface UseGridNavigationRowSelectionSortableContext extends UseGridNavigationRowSelectionContext {
}
export interface UseGridNavigationCellSelectionSortableContext extends UseGridNavigationCellSelectionContext {
}
export interface GridSelectSortableChildRowInfo<RowElement extends Element> extends GridSelectChildRowInfo<RowElement>, UseSortableChildInfo {
}
export interface GridSelectSortableChildCellInfo<CellElement extends Element> extends GridSelectChildCellInfo<CellElement>, UseSortableChildInfo {
}
export interface UseGridNavigationSelectionSortableParameters<ParentOrRowElement extends Element, RowElement extends Element, RM extends GridSelectSortableChildRowInfo<RowElement>> extends OmitStrong<UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, RM>, "managedChildrenReturn" | "rearrangeableChildrenReturn">, UseSortableChildrenParameters<RM> {
}
export interface UseGridNavigationSelectionSortableReturnType<ParentOrRowElement extends Element, RowElement extends Element, RM extends GridSelectSortableChildRowInfo<RowElement>> extends UseGridNavigationSelectionReturnType<ParentOrRowElement, RowElement>, UseSortableChildrenReturnType<RM> {
    context: UseGridNavigationRowSelectionContext;
}
export interface UseGridNavigationSelectionSortableRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridSelectSortableChildRowInfo<RowElement>, CM extends GridSelectSortableChildCellInfo<CellElement>> extends UseGenericChildParameters<UseGridNavigationRowSelectionSortableContext, Pick<RM, UseGridNavigationSelectionSortableRowInfoKeysParameters>>, OmitStrong<UseGridNavigationSelectionRowParameters<RowElement, CellElement, RM, CM>, "context" | "info"> {
    gridNavigationSelectionSortableRowParameters: UseGridNavigationSelectionSortableRowParametersSelf;
}
export interface UseGridNavigationSelectionSortableRowReturnType<RowElement extends Element, CellElement extends Element, RM extends GridSelectSortableChildRowInfo<RowElement>, CM extends GridSelectSortableChildCellInfo<CellElement>> extends OmitStrong<UseGridNavigationSelectionRowReturnType<RowElement, CellElement, RM>, "context" | "info"> {
    info: Pick<RM, "focusSelf" | "getSortValue" | UseRovingTabIndexChildInfoKeysReturnType | UseSelectionChildInfoKeysReturnType>;
    context: UseGridNavigationCellSelectionContext;
}
export interface UseGridNavigationSelectionSortableRowParametersSelf {
    /**
     * When the grid is sorted, this column of cells is chosen to sort by.
     */
    getSortableColumnIndex(): number | null | undefined;
}
export interface UseGridNavigationSelectionSortableCellParameters<CellElement extends Element, CM extends GridSelectSortableChildCellInfo<CellElement>> extends UseGenericChildParameters<UseGridNavigationCellSelectionSortableContext, Pick<CM, UseGridNavigationSelectionSortableCellInfoKeysParameters>>, OmitStrong<UseGridNavigationSelectionCellParameters<CellElement>, "context" | "info"> {
}
export interface UseGridNavigationSelectionSortableCellReturnType<CellElement extends Element> extends UseGridNavigationSelectionCellReturnType<CellElement> {
}
/**
 * Combines {@link useGridNavigation}, {@link useSelection}, and {@link useSortableChildren}.
 *
 * @remarks This is a separate hook because {@link useSortableChildren} imposes unique requirements to the structure of your `children`.
 *
 * @hasChild {@link useGridNavigationSelectionSortableRow}
 *
 * @compositeParams
 */
export declare const useGridNavigationSelectionSortable: <ParentOrRowElement extends Element, RowElement extends Element, RM extends GridSelectSortableChildRowInfo<RowElement>>({ rearrangeableChildrenParameters, sortableChildrenParameters, linearNavigationParameters, managedChildrenReturn, gridNavigationParameters, paginatedChildrenParameters, refElementReturn, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, typeaheadNavigationParameters, childrenHaveFocusReturn, ...void1 }: UseGridNavigationSelectionSortableParameters<ParentOrRowElement, RowElement, RM>) => UseGridNavigationSelectionSortableReturnType<ParentOrRowElement, RowElement, RM>;
/**
 * Besides just overriding `focusSelf` for `useRovingTabIndex`, this also overrides `getSortValue` to return the sort value of the current cell.
 *
 * @compositeParams
 */
export declare const useGridNavigationSelectionSortableRow: <RowElement extends Element, CellElement extends Element, RM extends GridSelectSortableChildRowInfo<RowElement>, CM extends GridSelectSortableChildCellInfo<CellElement>>({ context: ctxIncoming, info: { index, untabbable, ...void2 }, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, gridNavigationSelectionSortableRowParameters: { getSortableColumnIndex: getSortableColumnIndexUnstable, ...void5 }, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }: UseGridNavigationSelectionSortableRowParameters<RowElement, CellElement, RM, CM>) => UseGridNavigationSelectionSortableRowReturnType<RowElement, CellElement, RM, CM>;
/**
 * @compositeParams
 */
export declare const useGridNavigationSelectionSortableCell: <CellElement extends Element>({ context, gridNavigationCellParameters, info: { index, untabbable, ...void2 }, refElementReturn, textContentParameters, ...void1 }: UseGridNavigationSelectionSortableCellParameters<CellElement, GridSelectSortableChildCellInfo<CellElement>>) => UseGridNavigationSelectionSortableCellReturnType<CellElement>;
//# sourceMappingURL=use-grid-navigation-selection-sortable.d.ts.map