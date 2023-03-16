import { ExtendMerge, OmitStrong } from "../util/types.js";
import { GridChildCellInfo as gcci, GridChildRowInfo as gcri, UseGridNavigationCellContext, UseGridNavigationCellParameters, UseGridNavigationCellReturnType, UseGridNavigationParameters, UseGridNavigationReturnType, UseGridNavigationRowContext, UseGridNavigationRowParameters, UseGridNavigationRowReturnType } from "./use-grid-navigation-partial.js";
import { SelectableChildInfo, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnType, UseSingleSelectionContext, UseSingleSelectionParameters, UseSingleSelectionReturnType } from "./use-single-selection.js";
export interface GridSingleSelectChildRowInfo<RowElement extends Element, CellElement extends Element> extends gcri<RowElement, CellElement>, SelectableChildInfo<RowElement> {
}
export interface GridSingleSelectChildCellInfo<CellElement extends Element> extends gcci<CellElement> {
}
export interface UseGridNavigationSingleSelectionParameters<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, M extends GridSingleSelectChildRowInfo<RowElement, CellElement>> extends ExtendMerge<UseGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, M>, OmitStrong<UseSingleSelectionParameters<RowElement>, "rovingTabIndexReturn">> {
}
export interface UseGridNavigationSingleSelectionReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> extends ExtendMerge<UseGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, UseSingleSelectionReturnType<RowElement>> {
}
export interface UseGridNavigationRowSingleSelectionContext<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element> extends UseGridNavigationRowContext<ParentOrRowElement, RowElement, CellElement>, UseSingleSelectionContext<RowElement> {
}
export interface UseGridNavigationCellSingleSelectionContext<RowElement extends Element, CellElement extends Element> extends UseGridNavigationCellContext<RowElement, CellElement>, UseSingleSelectionContext<RowElement> {
}
export interface UseGridNavigationSingleSelectionRowParameters<RowElement extends Element, CellElement extends Element, _RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> extends ExtendMerge<UseGridNavigationRowParameters<RowElement, CellElement, _RM, CM>, UseSingleSelectionChildParameters<RowElement>> {
}
export interface UseGridNavigationSingleSelectionRowReturnType<RowElement extends Element, CellElement extends Element> extends ExtendMerge<UseGridNavigationRowReturnType<RowElement, CellElement>, UseSingleSelectionChildReturnType<RowElement>> {
}
export interface UseGridNavigationSingleSelectionCellParameters<RowElement extends Element, CellElement extends Element> extends UseGridNavigationCellParameters<RowElement, CellElement> {
}
export interface UseGridNavigationSingleSelectionCellReturnType<CellElement extends Element> extends UseGridNavigationCellReturnType<CellElement> {
}
export declare function useGridNavigationSingleSelection<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>>({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, typeaheadNavigationParameters, singleSelectionParameters, ..._void2 }: UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, CellElement, RM>): UseGridNavigationSingleSelectionReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>;
export declare function useGridNavigationSingleSelectionRow<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>>({ managedChildParameters: mcp1, singleSelectionChildParameters, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexChildParameters, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, typeaheadNavigationContext }, ..._void1 }: UseGridNavigationSingleSelectionRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement>;
export declare function useGridNavigationSingleSelectionCell<CellElement extends Element>(p: UseGridNavigationSingleSelectionCellParameters<any, CellElement>): UseGridNavigationSingleSelectionCellReturnType<CellElement>;
//# sourceMappingURL=use-grid-navigation-single-selection.d.ts.map