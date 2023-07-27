import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { ExtendMerge, OmitStrong } from "../../util/types.js";
import { GridChildCellInfo, GridChildRowInfo, UseGridNavigationCellContext, UseGridNavigationCellInfoKeysReturnType, UseGridNavigationCellParameters, UseGridNavigationCellReturnType, UseGridNavigationParameters, UseGridNavigationReturnType, UseGridNavigationRowContext, UseGridNavigationRowInfoKeysReturnType, UseGridNavigationRowParameters, UseGridNavigationRowReturnType } from "./use-grid-navigation-partial.js";
import { UseListNavigationChildInfoKeysParameters } from "./use-list-navigation-partial.js";
import { UseListNavigationSingleSelectionChildInfoKeysParameters } from "./use-list-navigation-single-selection.js";
import { UseSingleSelectionChildInfo, UseSingleSelectionChildInfoKeysReturnType, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnType, UseSingleSelectionContext, UseSingleSelectionParameters, UseSingleSelectionReturnType } from "./use-single-selection.js";
export type UseGridNavigationSingleSelectionRowInfoKeysParameters = UseListNavigationSingleSelectionChildInfoKeysParameters;
export type UseGridNavigationSingleSelectionRowInfoKeysReturnType = UseGridNavigationRowInfoKeysReturnType | UseSingleSelectionChildInfoKeysReturnType;
export type UseGridNavigationSingleSelectionCellInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
export type UseGridNavigationSingleSelectionCellInfoKeysReturnType = UseGridNavigationCellInfoKeysReturnType;
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
    info: Pick<GridSingleSelectChildRowInfo<RowElement>, UseGridNavigationSingleSelectionRowInfoKeysParameters>;
}
export interface UseGridNavigationSingleSelectionRowReturnType<RowElement extends Element, CellElement extends Element> extends OmitStrong<ExtendMerge<UseGridNavigationRowReturnType<RowElement, CellElement>, UseSingleSelectionChildReturnType<RowElement>>, "context" | "info"> {
    context: UseGridNavigationCellSingleSelectionContext;
    info: Pick<GridSingleSelectChildRowInfo<RowElement>, UseGridNavigationSingleSelectionRowInfoKeysReturnType>;
}
export interface UseGridNavigationSingleSelectionCellParameters<CellElement extends Element> extends UseGenericChildParameters<UseGridNavigationCellSingleSelectionContext, Pick<GridSingleSelectChildCellInfo<CellElement>, UseGridNavigationSingleSelectionCellInfoKeysParameters>>, OmitStrong<UseGridNavigationCellParameters<CellElement>, "context" | "info"> {
    info: Pick<GridSingleSelectChildCellInfo<CellElement>, UseGridNavigationSingleSelectionCellInfoKeysParameters>;
}
export interface UseGridNavigationSingleSelectionCellReturnType<CellElement extends Element> extends UseGridNavigationCellReturnType<CellElement> {
    info: Pick<GridSingleSelectChildCellInfo<CellElement>, UseGridNavigationSingleSelectionCellInfoKeysReturnType>;
}
/**
 * Combines {@link useGridNavigation} and {@link useSingleSelection}.
 *
 * @remarks The single-selection behavior is optional, if you decide you need multi-selection instead within the same component.
 *
 * @hasChild {@link useGridNavigationSingleSelectionRow}
 * @hasChild {@link useGridNavigationSingleSelectionCell}
 *
 * @compositeParams
 */
export declare function useGridNavigationSingleSelection<ParentOrRowElement extends Element, RowElement extends Element>({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, typeaheadNavigationParameters, singleSelectionParameters, refElementReturn, paginatedChildrenParameters, ...void2 }: UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, GridSingleSelectChildRowInfo<RowElement>>): UseGridNavigationSingleSelectionReturnType<ParentOrRowElement, RowElement>;
/**
 * @compositeParams
 */
export declare function useGridNavigationSingleSelectionRow<RowElement extends Element, CellElement extends Element>({ info: mcp1, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, context, ...void1 }: UseGridNavigationSingleSelectionRowParameters<RowElement, CellElement, GridSingleSelectChildCellInfo<CellElement>>): UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement>;
/**
 * @compositeParams
 */
export declare function useGridNavigationSingleSelectionCell<CellElement extends Element>(p: UseGridNavigationSingleSelectionCellParameters<CellElement>): UseGridNavigationSingleSelectionCellReturnType<CellElement>;
//# sourceMappingURL=use-grid-navigation-single-selection.d.ts.map