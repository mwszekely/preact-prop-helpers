import { ExtendMerge, OmitStrong } from "../../util/types.js";
import { UseGridNavigationCellContext, UseGridNavigationCellParameters, UseGridNavigationCellReturnType, UseGridNavigationParameters, UseGridNavigationReturnType, UseGridNavigationRowContext, UseGridNavigationRowParameters, UseGridNavigationRowReturnType, GridChildCellInfo as gcci, GridChildRowInfo as gcri } from "./use-grid-navigation-partial.js";
import { UseSingleSelectionChildInfo, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnType, UseSingleSelectionContext, UseSingleSelectionParameters, UseSingleSelectionReturnType } from "./use-single-selection.js";
export interface GridSingleSelectChildRowInfo<RowElement extends Element, CellElement extends Element> extends gcri<RowElement, CellElement>, UseSingleSelectionChildInfo<RowElement> {
}
export interface GridSingleSelectChildCellInfo<CellElement extends Element> extends gcci<CellElement> {
}
export interface UseGridNavigationSingleSelectionParameters<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>> extends ExtendMerge<UseGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, RM>, OmitStrong<UseSingleSelectionParameters<ParentOrRowElement, RowElement, RM>, "rovingTabIndexReturn">> {
}
export interface UseGridNavigationSingleSelectionReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> extends ExtendMerge<UseGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, UseSingleSelectionReturnType<RowElement, RM>> {
    context: UseGridNavigationRowSingleSelectionContext;
}
export interface UseGridNavigationRowSingleSelectionContext extends UseGridNavigationRowContext, UseSingleSelectionContext {
}
export interface UseGridNavigationCellSingleSelectionContext extends UseGridNavigationCellContext, UseSingleSelectionContext {
}
export interface UseGridNavigationSingleSelectionRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> extends ExtendMerge<UseGridNavigationRowParameters<RowElement, CellElement, RM, CM>, UseSingleSelectionChildParameters<RowElement, RM>> {
}
export interface UseGridNavigationSingleSelectionRowReturnType<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> extends ExtendMerge<UseGridNavigationRowReturnType<RowElement, CellElement, RM, CM>, UseSingleSelectionChildReturnType<RowElement>> {
    context: UseGridNavigationCellSingleSelectionContext;
}
export interface UseGridNavigationSingleSelectionCellParameters<RowElement extends Element, CellElement extends Element, CM extends GridSingleSelectChildCellInfo<CellElement>> extends UseGridNavigationCellParameters<RowElement, CellElement, CM> {
}
export interface UseGridNavigationSingleSelectionCellReturnType<CellElement extends Element, CM extends GridSingleSelectChildCellInfo<CellElement>> extends UseGridNavigationCellReturnType<CellElement, CM> {
}
export declare function useGridNavigationSingleSelection<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>>({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, typeaheadNavigationParameters, singleSelectionParameters, refElementReturn, ...void2 }: UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, CellElement, RM>): UseGridNavigationSingleSelectionReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>;
export declare function useGridNavigationSingleSelectionRow<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>>({ info: mcp1, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, typeaheadNavigationContext }, ...void1 }: UseGridNavigationSingleSelectionRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement, RM, CM>;
export declare function useGridNavigationSingleSelectionCell<CellElement extends Element, CM extends GridSingleSelectChildCellInfo<CellElement>>(p: UseGridNavigationSingleSelectionCellParameters<any, CellElement, CM>): UseGridNavigationSingleSelectionCellReturnType<CellElement, CM>;
//# sourceMappingURL=use-grid-navigation-single-selection.d.ts.map