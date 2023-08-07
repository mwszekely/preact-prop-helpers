import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { ExtendMerge, OmitStrong, TargetedOmit } from "../../util/types.js";
import { UseSelectionChildInfo, UseSelectionChildInfoKeysReturnType, UseSelectionChildParameters, UseSelectionChildReturnType, UseSelectionContext, UseSelectionParameters, UseSelectionReturnType } from "../use-selection.js";
import { GridChildCellInfo, GridChildRowInfo, UseGridNavigationCellContext, UseGridNavigationCellInfoKeysReturnType, UseGridNavigationCellParameters, UseGridNavigationCellReturnType, UseGridNavigationParameters, UseGridNavigationReturnType, UseGridNavigationRowContext, UseGridNavigationRowInfoKeysReturnType, UseGridNavigationRowParameters, UseGridNavigationRowReturnType } from "./use-grid-navigation-partial.js";
import { UseListNavigationChildInfoKeysParameters } from "./use-list-navigation-partial.js";
import { UseListNavigationSelectionChildInfoKeysParameters } from "./use-list-navigation-selection.js";
export type UseGridNavigationSelectionRowInfoKeysParameters = UseListNavigationSelectionChildInfoKeysParameters;
export type UseGridNavigationSelectionRowInfoKeysReturnType = UseGridNavigationRowInfoKeysReturnType | UseSelectionChildInfoKeysReturnType;
export type UseGridNavigationSelectionCellInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
export type UseGridNavigationSelectionCellInfoKeysReturnType = UseGridNavigationCellInfoKeysReturnType;
export interface GridSelectChildRowInfo<RowElement extends Element> extends GridChildRowInfo<RowElement>, UseSelectionChildInfo<RowElement> {
}
export interface GridSelectChildCellInfo<CellElement extends Element> extends GridChildCellInfo<CellElement> {
}
export interface UseGridNavigationSelectionParameters<ParentOrRowElement extends Element, RowElement extends Element, RM extends GridSelectChildRowInfo<RowElement>> extends OmitStrong<UseGridNavigationParameters<ParentOrRowElement, RowElement, RM>, "rovingTabIndexParameters">, TargetedOmit<UseGridNavigationParameters<ParentOrRowElement, RowElement, RM>, "rovingTabIndexParameters", "initiallyTabbedIndex">, OmitStrong<UseSelectionParameters<ParentOrRowElement, RowElement, RM>, "rovingTabIndexReturn"> {
}
export interface UseGridNavigationSelectionReturnType<ParentOrRowElement extends Element, RowElement extends Element> extends UseGridNavigationReturnType<ParentOrRowElement, RowElement>, OmitStrong<UseSelectionReturnType<ParentOrRowElement, RowElement>, "propsStable"> {
    context: UseGridNavigationRowSelectionContext;
}
export interface UseGridNavigationRowSelectionContext extends UseGridNavigationRowContext, UseSelectionContext {
}
export interface UseGridNavigationCellSelectionContext extends UseGridNavigationCellContext {
}
export interface UseGridNavigationSelectionRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridSelectChildRowInfo<RowElement>, CM extends GridSelectChildCellInfo<CellElement>> extends UseGenericChildParameters<UseGridNavigationRowSelectionContext, Pick<GridSelectChildRowInfo<RowElement>, UseGridNavigationSelectionRowInfoKeysParameters>>, OmitStrong<UseGridNavigationRowParameters<RowElement, CellElement, CM>, "info" | "context">, OmitStrong<UseSelectionChildParameters<RowElement, RM>, "info" | "context"> {
    info: Pick<GridSelectChildRowInfo<RowElement>, UseGridNavigationSelectionRowInfoKeysParameters>;
}
export interface UseGridNavigationSelectionRowReturnType<RowElement extends Element, CellElement extends Element, RM extends GridSelectChildRowInfo<RowElement>> extends ExtendMerge<OmitStrong<UseGridNavigationRowReturnType<RowElement, CellElement>, "context" | "info">, OmitStrong<UseSelectionChildReturnType<RowElement, RM>, "info">> {
    context: UseGridNavigationCellSelectionContext;
    info: Pick<GridSelectChildRowInfo<RowElement>, UseGridNavigationSelectionRowInfoKeysReturnType>;
}
export interface UseGridNavigationSelectionCellParameters<CellElement extends Element> extends UseGenericChildParameters<UseGridNavigationCellSelectionContext, Pick<GridSelectChildCellInfo<CellElement>, UseGridNavigationSelectionCellInfoKeysParameters>>, OmitStrong<UseGridNavigationCellParameters<CellElement>, "context" | "info"> {
    info: Pick<GridSelectChildCellInfo<CellElement>, UseGridNavigationSelectionCellInfoKeysParameters>;
}
export interface UseGridNavigationSelectionCellReturnType<CellElement extends Element> extends UseGridNavigationCellReturnType<CellElement> {
    info: Pick<GridSelectChildCellInfo<CellElement>, UseGridNavigationSelectionCellInfoKeysReturnType>;
}
/**
 * Combines {@link useGridNavigation} and {@link useSelection}.
 *
 * @remarks The -selection behavior is optional, if you decide you need multi-selection instead within the same component.
 *
 * @hasChild {@link useGridNavigationSelectionRow}
 * @hasChild {@link useGridNavigationSelectionCell}
 *
 * @compositeParams
 */
export declare function useGridNavigationSelection<ParentOrRowElement extends Element, RowElement extends Element>({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, refElementReturn, paginatedChildrenParameters, rearrangeableChildrenReturn, childrenHaveFocusReturn, ...void2 }: UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, GridSelectChildRowInfo<RowElement>>): UseGridNavigationSelectionReturnType<ParentOrRowElement, RowElement>;
/**
 * @compositeParams
 */
export declare function useGridNavigationSelectionRow<RowElement extends Element, CellElement extends Element>({ info: mcp1, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, context, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }: UseGridNavigationSelectionRowParameters<RowElement, CellElement, GridSelectChildRowInfo<RowElement>, GridSelectChildCellInfo<CellElement>>): UseGridNavigationSelectionRowReturnType<RowElement, CellElement, GridSelectChildRowInfo<RowElement>>;
/**
 * @compositeParams
 */
export declare function useGridNavigationSelectionCell<CellElement extends Element>(p: UseGridNavigationSelectionCellParameters<CellElement>): UseGridNavigationSelectionCellReturnType<CellElement>;
//# sourceMappingURL=use-grid-navigation-selection.d.ts.map