import { $refElementReturn } from "../dom-helpers/use-ref-element.js";
import { $childrenHaveFocusReturn } from "../observers/use-children-have-focus.js";
import { UseGenericChildParameters, $managedChildrenReturn } from "../preact-extensions/use-managed-children.js";
import { ExtendMerge, OmitStrong, TargetedOmit } from "../util/types.js";
import { GridChildCellInfo, GridChildRowInfo, UseGridNavigationCellContext, UseGridNavigationCellInfoKeysReturnType, UseGridNavigationCellParameters, UseGridNavigationCellReturnType, UseGridNavigationParameters, UseGridNavigationReturnType, UseGridNavigationRowContext, UseGridNavigationRowInfoKeysReturnType, UseGridNavigationRowParameters, UseGridNavigationRowReturnType, $gridNavigationParameters } from "./keyboard-navigation/use-grid-navigation-partial.js";
import { $linearNavigationParameters } from "./keyboard-navigation/use-linear-navigation.js";
import { UseListNavigationChildInfoKeysParameters } from "./keyboard-navigation/use-list-navigation-partial.js";
import { $initiallyTabbedIndex, $rovingTabIndexParameters, $rovingTabIndexReturn } from "./keyboard-navigation/use-roving-tabindex.js";
import { $typeaheadNavigationParameters } from "./keyboard-navigation/use-typeahead-navigation.js";
import { $paginatedChildrenParameters } from "./processed-children/use-paginated-children.js";
import { $rearrangeableChildrenReturn } from "./processed-children/use-rearrangeable-children.js";
import { $multiSelectionChildParameters, $multiSelectionParameters } from "./selection/use-multi-selection.js";
import { UseSelectionChildInfo, UseSelectionChildInfoKeysReturnType, UseSelectionChildParameters, UseSelectionChildReturnType, UseSelectionContext, UseSelectionParameters, UseSelectionReturnType } from "./selection/use-selection.js";
import { $singleSelectionChildParameters, $singleSelectionParameters } from "./selection/use-single-selection.js";
import { UseListNavigationSelectionChildInfoKeysParameters } from "./use-list-navigation-selection.js";
export type UseGridNavigationSelectionRowInfoKeysParameters = UseListNavigationSelectionChildInfoKeysParameters;
export type UseGridNavigationSelectionRowInfoKeysReturnType = UseGridNavigationRowInfoKeysReturnType | UseSelectionChildInfoKeysReturnType;
export type UseGridNavigationSelectionCellInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
export type UseGridNavigationSelectionCellInfoKeysReturnType = UseGridNavigationCellInfoKeysReturnType;
export interface GridSelectChildRowInfo<RowElement extends Element> extends GridChildRowInfo<RowElement>, UseSelectionChildInfo<RowElement> {
}
export interface GridSelectChildCellInfo<CellElement extends Element> extends GridChildCellInfo<CellElement> {
}
export interface UseGridNavigationSelectionParameters<ParentOrRowElement extends Element, RowElement extends Element, RM extends GridSelectChildRowInfo<RowElement>> extends OmitStrong<UseGridNavigationParameters<ParentOrRowElement, RowElement, RM>, typeof $rovingTabIndexParameters>, TargetedOmit<UseGridNavigationParameters<ParentOrRowElement, RowElement, RM>, typeof $rovingTabIndexParameters, typeof $initiallyTabbedIndex>, OmitStrong<UseSelectionParameters<ParentOrRowElement, RowElement, RM>, typeof $rovingTabIndexReturn> {
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
export declare const useGridNavigationSelection: <ParentOrRowElement extends Element, RowElement extends Element>({ [$gridNavigationParameters]: gridNavigationParameters, [$linearNavigationParameters]: linearNavigationParameters, [$rovingTabIndexParameters]: rovingTabIndexParameters, [$managedChildrenReturn]: managedChildrenReturn, [$typeaheadNavigationParameters]: typeaheadNavigationParameters, [$singleSelectionParameters]: singleSelectionParameters, [$multiSelectionParameters]: multiSelectionParameters, [$refElementReturn]: refElementReturn, [$paginatedChildrenParameters]: paginatedChildrenParameters, [$rearrangeableChildrenReturn]: rearrangeableChildrenReturn, [$childrenHaveFocusReturn]: childrenHaveFocusReturn, ...void2 }: UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, GridSelectChildRowInfo<RowElement>>) => UseGridNavigationSelectionReturnType<ParentOrRowElement, RowElement>;
/**
 * @compositeParams
 */
export declare const useGridNavigationSelectionRow: <RowElement extends Element, CellElement extends Element>({ info: mcp1, [$linearNavigationParameters]: linearNavigationParameters, [$managedChildrenReturn]: managedChildrenReturn, [$refElementReturn]: refElementReturn, [$rovingTabIndexParameters]: rovingTabIndexParameters, [$typeaheadNavigationParameters]: typeaheadNavigationParameters, context, [$singleSelectionChildParameters]: singleSelectionChildParameters, [$multiSelectionChildParameters]: multiSelectionChildParameters, ...void1 }: UseGridNavigationSelectionRowParameters<RowElement, CellElement, GridSelectChildRowInfo<RowElement>, GridSelectChildCellInfo<CellElement>>) => UseGridNavigationSelectionRowReturnType<RowElement, CellElement, GridSelectChildRowInfo<RowElement>>;
/**
 * @compositeParams
 */
export declare const useGridNavigationSelectionCell: <CellElement extends Element>(p: UseGridNavigationSelectionCellParameters<CellElement>) => UseGridNavigationSelectionCellReturnType<CellElement>;
//# sourceMappingURL=use-grid-navigation-selection.d.ts.map