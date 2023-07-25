import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { ExtendMerge, OmitStrong } from "../../util/types.js";
import { GridChildCellInfo, GridChildRowInfo, UseGridNavigationCellContext, UseGridNavigationCellParameters, UseGridNavigationCellReturnType, UseGridNavigationParameters, UseGridNavigationReturnType, UseGridNavigationRowContext, UseGridNavigationRowParameters, UseGridNavigationRowReturnType } from "./use-grid-navigation-partial.js";
import { UseListNavigationChildInfoKeysParameters } from "./use-list-navigation-partial.js";
import { UseListNavigationSingleSelectionChildInfoKeysParameters } from "./use-list-navigation-single-selection.js";
import { UseRovingTabIndexChildInfoKeysReturnType } from "./use-roving-tabindex.js";
import { UseSingleSelectionChildInfo, UseSingleSelectionChildInfoKeysReturnType, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnType, UseSingleSelectionContext, UseSingleSelectionParameters, UseSingleSelectionReturnType } from "./use-single-selection.js";
export type UseGridNavigationSingleSelectionRowInfoKeysParameters = UseListNavigationSingleSelectionChildInfoKeysParameters;
export type UseGridNavigationSingleSelectionCellInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
export interface GridSingleSelectChildRowInfo<RowElement extends Element> extends GridChildRowInfo<RowElement>, UseSingleSelectionChildInfo<RowElement> {
}
export interface GridSingleSelectChildCellInfo<CellElement extends Element> extends GridChildCellInfo<CellElement> {
}
export interface UseGridNavigationSingleSelectionParameters<ParentOrRowElement extends Element, RowElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement>> extends ExtendMerge<UseGridNavigationParameters<ParentOrRowElement, RowElement, RM>, OmitStrong<UseSingleSelectionParameters<ParentOrRowElement, RowElement>, "rovingTabIndexReturn">> {
}
export interface UseGridNavigationSingleSelectionReturnType<ParentOrRowElement extends Element, RowElement extends Element> extends ExtendMerge<UseGridNavigationReturnType<ParentOrRowElement, RowElement>, UseSingleSelectionReturnType<RowElement>> {
    context: UseGridNavigationRowSingleSelectionContext;
}
export interface UseGridNavigationRowSingleSelectionContext extends UseGridNavigationRowContext, UseSingleSelectionContext {
}
export interface UseGridNavigationCellSingleSelectionContext extends UseGridNavigationCellContext, UseSingleSelectionContext {
}
export interface UseGridNavigationSingleSelectionRowParameters<RowElement extends Element, CellElement extends Element, CM extends GridSingleSelectChildCellInfo<CellElement>> extends UseGenericChildParameters<UseGridNavigationRowSingleSelectionContext, Pick<GridSingleSelectChildRowInfo<RowElement>, UseGridNavigationSingleSelectionRowInfoKeysParameters>>, OmitStrong<UseGridNavigationRowParameters<RowElement, CellElement, CM>, "info" | "context">, OmitStrong<UseSingleSelectionChildParameters<RowElement>, "info" | "context"> {
}
export interface UseGridNavigationSingleSelectionRowReturnType<RowElement extends Element, CellElement extends Element> extends OmitStrong<ExtendMerge<UseGridNavigationRowReturnType<RowElement, CellElement>, UseSingleSelectionChildReturnType<RowElement>>, "context" | "info"> {
    context: UseGridNavigationCellSingleSelectionContext;
    info: Pick<GridSingleSelectChildRowInfo<RowElement>, "focusSelf" | UseSingleSelectionChildInfoKeysReturnType | UseRovingTabIndexChildInfoKeysReturnType>;
}
export interface UseGridNavigationSingleSelectionCellParameters<CellElement extends Element> extends UseGenericChildParameters<UseGridNavigationCellSingleSelectionContext, Pick<GridSingleSelectChildCellInfo<CellElement>, UseGridNavigationSingleSelectionCellInfoKeysParameters>>, OmitStrong<UseGridNavigationCellParameters<CellElement>, "context" | "info"> {
}
export interface UseGridNavigationSingleSelectionCellReturnType<CellElement extends Element> extends UseGridNavigationCellReturnType<CellElement> {
}
export declare function useGridNavigationSingleSelection<ParentOrRowElement extends Element, RowElement extends Element>({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, typeaheadNavigationParameters, singleSelectionParameters, refElementReturn, paginatedChildrenParameters, ...void2 }: UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, GridSingleSelectChildRowInfo<RowElement>>): UseGridNavigationSingleSelectionReturnType<ParentOrRowElement, RowElement>;
export declare function useGridNavigationSingleSelectionRow<RowElement extends Element, CellElement extends Element>({ info: mcp1, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, context, ...void1 }: UseGridNavigationSingleSelectionRowParameters<RowElement, CellElement, GridSingleSelectChildCellInfo<CellElement>>): UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement>;
export declare function useGridNavigationSingleSelectionCell<CellElement extends Element>(p: UseGridNavigationSingleSelectionCellParameters<CellElement>): UseGridNavigationSingleSelectionCellReturnType<CellElement>;
//# sourceMappingURL=use-grid-navigation-single-selection.d.ts.map