import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { ExtendMerge, OmitStrong } from "../../util/types.js";
import { UseGridNavigationCellContext, UseGridNavigationCellParameters, UseGridNavigationCellReturnType, UseGridNavigationParameters, UseGridNavigationReturnType, UseGridNavigationRowContext, UseGridNavigationRowParameters, UseGridNavigationRowReturnType, GridChildCellInfo as gcci, GridChildRowInfo as gcri } from "./use-grid-navigation-partial.js";
import { UseListNavigationChildInfoKeysParameters } from "./use-list-navigation-partial.js";
import { UseListNavigationSingleSelectionChildInfoKeysParameters } from "./use-list-navigation-single-selection.js";
import { UseSingleSelectionChildInfo, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnType, UseSingleSelectionContext, UseSingleSelectionParameters, UseSingleSelectionReturnType } from "./use-single-selection.js";
export type UseGridNavigationSingleSelectionRowInfoKeysParameters = UseListNavigationSingleSelectionChildInfoKeysParameters;
export type UseGridNavigationSingleSelectionCellInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
export interface GridSingleSelectChildRowInfo<RowElement extends Element> extends gcri<RowElement>, UseSingleSelectionChildInfo<RowElement> {
}
export interface GridSingleSelectChildCellInfo<CellElement extends Element> extends gcci<CellElement> {
}
export interface UseGridNavigationSingleSelectionParameters<ParentOrRowElement extends Element, RowElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement>> extends ExtendMerge<UseGridNavigationParameters<ParentOrRowElement, RowElement, RM>, OmitStrong<UseSingleSelectionParameters<ParentOrRowElement, RowElement, RM>, "rovingTabIndexReturn">> {
}
export interface UseGridNavigationSingleSelectionReturnType<ParentOrRowElement extends Element, RowElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement>> extends ExtendMerge<UseGridNavigationReturnType<ParentOrRowElement, RowElement, RM>, UseSingleSelectionReturnType<RowElement>> {
    context: UseGridNavigationRowSingleSelectionContext;
}
export interface UseGridNavigationRowSingleSelectionContext extends UseGridNavigationRowContext, UseSingleSelectionContext {
}
export interface UseGridNavigationCellSingleSelectionContext extends UseGridNavigationCellContext, UseSingleSelectionContext {
}
export interface UseGridNavigationSingleSelectionRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> extends UseGenericChildParameters<UseGridNavigationRowSingleSelectionContext, Pick<RM, UseGridNavigationSingleSelectionRowInfoKeysParameters>>, OmitStrong<UseGridNavigationRowParameters<RowElement, CellElement, RM, CM>, "info" | "context">, OmitStrong<UseSingleSelectionChildParameters<RowElement>, "info" | "context"> {
}
export interface UseGridNavigationSingleSelectionRowReturnType<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> extends ExtendMerge<UseGridNavigationRowReturnType<RowElement, CellElement, RM, CM>, UseSingleSelectionChildReturnType<RowElement>> {
    context: UseGridNavigationCellSingleSelectionContext;
}
export interface UseGridNavigationSingleSelectionCellParameters<CellElement extends Element, CM extends GridSingleSelectChildCellInfo<CellElement>> extends UseGenericChildParameters<UseGridNavigationCellSingleSelectionContext, Pick<CM, UseGridNavigationSingleSelectionCellInfoKeysParameters>>, OmitStrong<UseGridNavigationCellParameters<CellElement, CM>, "context" | "info"> {
}
export interface UseGridNavigationSingleSelectionCellReturnType<CellElement extends Element, CM extends GridSingleSelectChildCellInfo<CellElement>> extends UseGridNavigationCellReturnType<CellElement, CM> {
}
export declare function useGridNavigationSingleSelection<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement>, CM extends GridSingleSelectChildCellInfo<CellElement>>({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, typeaheadNavigationParameters, singleSelectionParameters, refElementReturn, paginatedChildrenParameters, ...void2 }: UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, RM>): UseGridNavigationSingleSelectionReturnType<ParentOrRowElement, RowElement, RM>;
export declare function useGridNavigationSingleSelectionRow<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement>, CM extends GridSingleSelectChildCellInfo<CellElement>>({ info: mcp1, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, typeaheadNavigationContext }, ...void1 }: UseGridNavigationSingleSelectionRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement, RM, CM>;
export declare function useGridNavigationSingleSelectionCell<CellElement extends Element, CM extends GridSingleSelectChildCellInfo<CellElement>>(p: UseGridNavigationSingleSelectionCellParameters<CellElement, CM>): UseGridNavigationSingleSelectionCellReturnType<CellElement, CM>;
//# sourceMappingURL=use-grid-navigation-single-selection.d.ts.map