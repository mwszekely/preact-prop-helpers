import { OmitStrong } from "../util/types.js";
import { GridChildCellInfo as gcci, GridChildRowInfo as gcri, UseGridNavigationCellParameters, UseGridNavigationCellReturnType, UseGridNavigationParameters, UseGridNavigationReturnType, UseGridNavigationRowParameters, UseGridNavigationRowReturnType } from "./use-grid-navigation-partial.js";
import { SelectableChildInfo, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnType, UseSingleSelectionParameters, UseSingleSelectionReturnType } from "./use-single-selection.js";
export interface GridSingleSelectChildRowInfo<RowElement extends Element, CellElement extends Element> extends gcri<RowElement, CellElement>, SelectableChildInfo<RowElement> {
}
export interface GridSingleSelectChildCellInfo<CellElement extends Element> extends gcci<CellElement> {
}
export interface UseGridNavigationSingleSelectionParameters<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, M extends GridSingleSelectChildRowInfo<RowElement, CellElement>> extends UseGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, M>, OmitStrong<UseSingleSelectionParameters<RowElement>, "rovingTabIndexReturn"> {
    managedChildrenReturn: UseGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, M>["managedChildrenReturn"] & UseSingleSelectionParameters<RowElement>["managedChildrenReturn"];
}
export interface UseGridNavigationSingleSelectionReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> extends UseGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, UseSingleSelectionReturnType<RowElement> {
}
export interface UseGridNavigationSingleSelectionRowParameters<RowElement extends Element, CellElement extends Element, _RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> {
    rowAsChildOfGridParameters: UseGridNavigationRowParameters<RowElement, CellElement, _RM, CM>["rowAsChildOfGridParameters"] & UseSingleSelectionChildParameters<RowElement>;
    rowAsParentOfCellsParameters: UseGridNavigationRowParameters<RowElement, CellElement, _RM, CM>["rowAsParentOfCellsParameters"];
}
export interface UseGridNavigationSingleSelectionRowReturnType<RowElement extends Element, CellElement extends Element> {
    rowAsChildOfGridReturn: UseGridNavigationRowReturnType<RowElement, CellElement>["rowAsChildOfGridReturn"] & OmitStrong<UseSingleSelectionChildReturnType<RowElement>, "pressParameters">;
    rowAsParentOfCellsReturn: UseGridNavigationRowReturnType<RowElement, CellElement>["rowAsParentOfCellsReturn"];
}
export interface UseGridNavigationSingleSelectionCellParameters<RowElement extends Element, CellElement extends Element> extends UseGridNavigationCellParameters<RowElement, CellElement> {
}
export interface UseGridNavigationSingleSelectionCellReturnType<CellElement extends Element> extends UseGridNavigationCellReturnType<CellElement> {
}
export declare function useGridNavigationSingleSelection<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>>({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, typeaheadNavigationParameters, singleSelectionParameters, ..._void2 }: UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, CellElement, RM>): UseGridNavigationSingleSelectionReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>;
export declare function useGridNavigationSingleSelectionRow<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>>({ rowAsChildOfGridParameters, rowAsParentOfCellsParameters, ..._void1 }: UseGridNavigationSingleSelectionRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement>;
export declare function useGridNavigationSingleSelectionCell<CellElement extends Element>(p: UseGridNavigationSingleSelectionCellParameters<any, CellElement>): UseGridNavigationSingleSelectionCellReturnType<CellElement>;
//# sourceMappingURL=use-grid-navigation-single-selection.d.ts.map