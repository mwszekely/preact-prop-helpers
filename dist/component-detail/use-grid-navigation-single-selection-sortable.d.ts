import { OmitStrong } from "../util/types.js";
import { UseGridNavigationCellParameters, UseGridNavigationCellReturnType } from "./use-grid-navigation-partial.js";
import { GridSingleSelectChildCellInfo, GridSingleSelectChildRowInfo, UseGridNavigationSingleSelectionParameters, UseGridNavigationSingleSelectionReturnType, UseGridNavigationSingleSelectionRowParameters, UseGridNavigationSingleSelectionRowReturnType } from "./use-grid-navigation-single-selection.js";
import { UseSortableChildInfo, UseSortableChildrenParameters, UseSortableChildrenReturnType } from "./use-sortable-children.js";
export interface GridSingleSelectSortableChildRowInfo<RowElement extends Element, CellElement extends Element> extends GridSingleSelectChildRowInfo<RowElement, CellElement>, UseSortableChildInfo {
}
export interface GridSingleSelectSortableChildCellInfo<CellElement extends Element> extends GridSingleSelectChildCellInfo<CellElement> {
}
export interface UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, M extends GridSingleSelectChildRowInfo<RowElement, CellElement>> extends OmitStrong<UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, CellElement, M>, "linearNavigationParameters">, UseSortableChildrenParameters<M> {
    linearNavigationParameters: OmitStrong<UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, CellElement, M>["linearNavigationParameters"], "indexMangler" | "indexDemangler">;
}
export interface UseGridNavigationSingleSelectionSortableReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>> extends UseGridNavigationSingleSelectionReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, UseSortableChildrenReturnType<RM> {
}
export interface UseGridNavigationSingleSelectionSortableRowParameters<RowElement extends Element, CellElement extends Element, _RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> extends UseGridNavigationSingleSelectionRowParameters<RowElement, CellElement, _RM, CM> {
}
export interface UseGridNavigationSingleSelectionSortableRowReturnType<RowElement extends Element, CellElement extends Element> extends UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement> {
}
export interface UseGridNavigationSingleSelectionSortableCellParameters<RowElement extends Element, CellElement extends Element> extends UseGridNavigationCellParameters<RowElement, CellElement> {
}
export interface UseGridNavigationSingleSelectionSortableCellReturnType<CellElement extends Element> extends UseGridNavigationCellReturnType<CellElement> {
}
export declare function useGridNavigationSingleSelectionSortable<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>>({ rearrangeableChildrenParameters, sortableChildrenParameters, linearNavigationParameters, ...gridNavigationSingleSelectionParameters }: UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, CellElement, RM>): UseGridNavigationSingleSelectionSortableReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>;
export declare function useGridNavigationSingleSelectionSortableRow<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>>(p: UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement>;
export declare function useGridNavigationSingleSelectionSortableCell<CellElement extends Element>(p: UseGridNavigationSingleSelectionSortableCellParameters<any, CellElement>): UseGridNavigationSingleSelectionSortableCellReturnType<CellElement>;
//# sourceMappingURL=use-grid-navigation-single-selection-sortable.d.ts.map