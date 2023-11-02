import { GenericHook, Parameter, StandardDepsContext, StandardDepsInfo, StandardDepsOmit, StandardDepsPick, StandardDepsProps } from "../util/types.js";
import { GridChildCellInfo, GridChildRowInfo, UseGridNavigation, UseGridNavigationCell, UseGridNavigationCellContext, UseGridNavigationCellInfoKeysReturnType, UseGridNavigationRow, UseGridNavigationRowContext, UseGridNavigationRowInfoKeysReturnType } from "./keyboard-navigation/use-grid-navigation-partial.js";
import { UseListNavigationChildInfoKeysParameters } from "./keyboard-navigation/use-list-navigation-partial.js";
import { UseSelection, UseSelectionChild, UseSelectionChildContext, UseSelectionChildInfo, UseSelectionChildInfoKeysReturnType } from "./selection/use-selection.js";
import { UseListNavigationSelectionChildInfoKeysParameters } from "./use-list-navigation-selection.js";
export type UseGridNavigationSelectionRowInfoKeysParameters = UseListNavigationSelectionChildInfoKeysParameters;
export type UseGridNavigationSelectionRowInfoKeysReturnType = UseGridNavigationRowInfoKeysReturnType | UseSelectionChildInfoKeysReturnType;
export type UseGridNavigationSelectionCellInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
export type UseGridNavigationSelectionCellInfoKeysReturnType = UseGridNavigationCellInfoKeysReturnType;
export interface GridSelectChildRowInfo<RowElement extends Element> extends GridChildRowInfo<RowElement>, UseSelectionChildInfo<RowElement> {
}
export interface GridSelectChildCellInfo<CellElement extends Element> extends GridChildCellInfo<CellElement> {
}
export interface UseGridNavigationRowSelectionContext extends UseGridNavigationRowContext, UseSelectionChildContext {
}
export interface UseGridNavigationCellSelectionContext extends UseGridNavigationCellContext {
}
export type UseGridNavigationSelection<ParentElement extends Element, ChildElement extends Element> = GenericHook<"gridNavigationSelection", never, [
    StandardDepsPick<"params", UseGridNavigation<ParentElement, ChildElement>>,
    StandardDepsOmit<"params", UseSelection<ParentElement, ChildElement>, "rovingTabIndexReturn">
], never, [
    StandardDepsPick<"return", UseGridNavigation<ParentElement, ChildElement>>,
    StandardDepsPick<"return", UseSelection<ParentElement, ChildElement>>,
    StandardDepsContext<UseGridNavigationRowSelectionContext>,
    StandardDepsProps<ParentElement>
]>;
export type UseGridNavigationSelectionRow<RowElement extends Element, CellElement extends Element> = GenericHook<"gridNavigationSelectionRow", never, [
    StandardDepsInfo<GridSelectChildRowInfo<RowElement>, UseGridNavigationSelectionRowInfoKeysParameters>,
    StandardDepsContext<UseGridNavigationRowSelectionContext>,
    StandardDepsPick<"params", UseGridNavigationRow<RowElement, CellElement>>,
    StandardDepsPick<"params", UseSelectionChild<RowElement>>
], never, [
    StandardDepsPick<"return", UseGridNavigationRow<RowElement, CellElement>, never>,
    StandardDepsPick<"return", UseSelectionChild<RowElement>>,
    StandardDepsProps<RowElement>,
    StandardDepsContext<UseGridNavigationCellSelectionContext>,
    StandardDepsInfo<GridSelectChildRowInfo<RowElement>, UseGridNavigationSelectionRowInfoKeysReturnType>
]>;
export type UseGridNavigationSelectionCell<CellElement extends Element> = UseGridNavigationCell<CellElement>;
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
export declare const useGridNavigationSelection: <ParentOrRowElement extends Element, RowElement extends Element>({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, refElementReturn, paginatedChildrenParameters, rearrangeableChildrenReturn, childrenHaveFocusReturn, ...void2 }: {} & StandardDepsPick<"params", UseGridNavigation<ParentOrRowElement, RowElement>> & StandardDepsOmit<"params", UseSelection<ParentOrRowElement, RowElement>, "rovingTabIndexReturn">) => {} & StandardDepsPick<"return", UseGridNavigation<ParentOrRowElement, RowElement>> & StandardDepsPick<"return", UseSelection<ParentOrRowElement, RowElement>> & StandardDepsContext<UseGridNavigationRowSelectionContext, keyof UseGridNavigationRowSelectionContext> & StandardDepsProps<ParentOrRowElement>;
/**
 * @compositeParams
 */
export declare const useGridNavigationSelectionRow: <RowElement extends Element, CellElement extends Element>({ info: mcp1, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, typeaheadNavigationParameters, context, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }: {} & StandardDepsInfo<GridSelectChildRowInfo<RowElement>, UseListNavigationSelectionChildInfoKeysParameters> & StandardDepsContext<UseGridNavigationRowSelectionContext, keyof UseGridNavigationRowSelectionContext> & StandardDepsPick<"params", UseGridNavigationRow<RowElement, CellElement>> & StandardDepsPick<"params", UseSelectionChild<RowElement>>) => {} & StandardDepsPick<"return", UseGridNavigationRow<RowElement, CellElement>, never> & StandardDepsPick<"return", UseSelectionChild<RowElement>> & StandardDepsProps<RowElement> & StandardDepsContext<UseGridNavigationCellSelectionContext, keyof UseGridNavigationCellSelectionContext> & StandardDepsInfo<GridSelectChildRowInfo<RowElement>, UseGridNavigationSelectionRowInfoKeysReturnType>;
/**
 * @compositeParams
 */
export declare const useGridNavigationSelectionCell: <CellElement extends Element>(p: {
    gridNavigationCellParameters: import("./keyboard-navigation/use-grid-navigation-partial.js").UseGridNavigationCellParametersSelf;
} & StandardDepsPick<"return", import("../index.js").UseRefElement<CellElement>, "refElementReturn", "pick", "getElement"> & StandardDepsInfo<GridChildCellInfo<CellElement>, UseListNavigationChildInfoKeysParameters> & StandardDepsContext<UseGridNavigationCellContext, keyof UseGridNavigationCellContext>) => {} & StandardDepsPick<"return", import("./keyboard-navigation/use-list-navigation-partial.js").UseListNavigationChild<CellElement>> & StandardDepsInfo<GridChildCellInfo<CellElement>, import("./keyboard-navigation/use-list-navigation-partial.js").UseListNavigationChildInfoKeysReturnType> & StandardDepsProps<CellElement>;
//# sourceMappingURL=use-grid-navigation-selection.d.ts.map