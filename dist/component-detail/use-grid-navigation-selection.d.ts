import { PropNames_RefElementReturn_getElement } from "../dom-helpers/use-ref-element.js";
import { PropNames_TextContentParameters_getText } from "../dom-helpers/use-text-content.js";
import { PropNames_ChildrenHaveFocusReturn_getAnyFocused } from "../observers/use-children-have-focus.js";
import { PropNames_ManagedChildrenReturn_getChildren, UseGenericChildParameters } from "../preact-extensions/use-managed-children.js";
import { ExtendMerge, OmitStrong } from "../util/types.js";
import { GridChildCellInfo, GridChildRowInfo, PropNames_GridNavigationParameters_initiallyTabbableColumn, PropNames_GridNavigationParameters_onTabbableColumnChange, UseGridNavigationCellContext, UseGridNavigationCellInfoKeysReturnType, UseGridNavigationCellParameters, UseGridNavigationCellReturnType, UseGridNavigationParameters, UseGridNavigationReturnType, UseGridNavigationRowContext, UseGridNavigationRowInfoKeysReturnType, UseGridNavigationRowParameters, UseGridNavigationRowReturnType } from "./keyboard-navigation/use-grid-navigation-partial.js";
import { PropNames_LinearNavigationParameters_disableHomeEndKeys, PropNames_LinearNavigationParameters_getHighestIndex, PropNames_LinearNavigationParameters_getLowestIndex, PropNames_LinearNavigationParameters_isValidForLinearNavigation, PropNames_LinearNavigationParameters_navigatePastEnd, PropNames_LinearNavigationParameters_navigatePastStart, PropNames_LinearNavigationParameters_onNavigateLinear, PropNames_LinearNavigationParameters_pageNavigationSize } from "./keyboard-navigation/use-linear-navigation.js";
import { UseListNavigationChildInfoKeysParameters } from "./keyboard-navigation/use-list-navigation-partial.js";
import { PropNames_RovingTabIndexParameters_focusSelfParent, PropNames_RovingTabIndexParameters_initiallyTabbedIndex, PropNames_RovingTabIndexParameters_onTabbableIndexChange, PropNames_RovingTabIndexParameters_untabbable, PropNames_RovingTabIndexParameters_untabbableBehavior, PropNames_RovingTabIndexReturn_setTabbableIndex } from "./keyboard-navigation/use-roving-tabindex.js";
import { PropNames_TypeaheadNavigationParameters_collator, PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation, PropNames_TypeaheadNavigationParameters_noTypeahead, PropNames_TypeaheadNavigationParameters_onNavigateTypeahead, PropNames_TypeaheadNavigationParameters_typeaheadTimeout } from "./keyboard-navigation/use-typeahead-navigation.js";
import { PropNames_PaginatedParameters_paginationMax, PropNames_PaginatedParameters_paginationMin } from "./processed-children/use-paginated-children.js";
import { PropNames_RearrangeableReturn_indexDemangler, PropNames_RearrangeableReturn_indexMangler } from "./processed-children/use-rearrangeable-children.js";
import { PropNames_MultiSelectionChildParameters_initiallyMultiSelected, PropNames_MultiSelectionChildParameters_multiSelectionDisabled, PropNames_MultiSelectionChildParameters_onMultiSelectChange, PropNames_MultiSelectionParameters_multiSelectionAriaPropName, PropNames_MultiSelectionParameters_multiSelectionMode, PropNames_MultiSelectionParameters_onSelectionChange } from "./selection/use-multi-selection.js";
import { UseSelectionChildInfo, UseSelectionChildInfoKeysReturnType, UseSelectionChildParameters, UseSelectionChildReturnType, UseSelectionContext, UseSelectionParameters, UseSelectionReturnType } from "./selection/use-selection.js";
import { PropNames_SingleSelectionChildParameters_singleSelectionDisabled, PropNames_SingleSelectionParameters_initiallySingleSelectedIndex, PropNames_SingleSelectionParameters_onSingleSelectedIndexChange, PropNames_SingleSelectionParameters_singleSelectionAriaPropName, PropNames_SingleSelectionParameters_singleSelectionMode } from "./selection/use-single-selection.js";
import { UseListNavigationSelectionChildInfoKeysParameters } from "./use-list-navigation-selection.js";
export type UseGridNavigationSelectionRowInfoKeysParameters = UseListNavigationSelectionChildInfoKeysParameters;
export type UseGridNavigationSelectionRowInfoKeysReturnType = UseGridNavigationRowInfoKeysReturnType | UseSelectionChildInfoKeysReturnType;
export type UseGridNavigationSelectionCellInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
export type UseGridNavigationSelectionCellInfoKeysReturnType = UseGridNavigationCellInfoKeysReturnType;
export interface GridSelectChildRowInfo<RowElement extends Element> extends GridChildRowInfo<RowElement>, UseSelectionChildInfo<RowElement> {
}
export interface GridSelectChildCellInfo<CellElement extends Element> extends GridChildCellInfo<CellElement> {
}
export interface UseGridNavigationSelectionParameters<ParentOrRowElement extends Element, RowElement extends Element, RM extends GridSelectChildRowInfo<RowElement>> extends OmitStrong<UseGridNavigationParameters<ParentOrRowElement, RowElement, RM>, never>, OmitStrong<UseSelectionParameters<ParentOrRowElement, RowElement, RM>, never> {
}
export interface UseGridNavigationSelectionReturnType<ParentOrRowElement extends Element, RowElement extends Element> extends UseGridNavigationReturnType<ParentOrRowElement, RowElement>, OmitStrong<UseSelectionReturnType<ParentOrRowElement, RowElement>, "props"> {
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
export declare const useGridNavigationSelection: <ParentOrRowElement extends Element, RowElement extends Element>({ [PropNames_ManagedChildrenReturn_getChildren]: getChildren, [PropNames_GridNavigationParameters_initiallyTabbableColumn]: initiallyTabbableColumn, [PropNames_GridNavigationParameters_onTabbableColumnChange]: onTabbableColumnChange, [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys, [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex, [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex, [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation, [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd, [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart, [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear, [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize, [PropNames_PaginatedParameters_paginationMax]: paginationMax, [PropNames_PaginatedParameters_paginationMin]: paginationMin, [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler, [PropNames_RearrangeableReturn_indexMangler]: indexMangler, [PropNames_RefElementReturn_getElement]: getElement, [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent, [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex, [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange, [PropNames_RovingTabIndexParameters_untabbable]: untabbable, [PropNames_RovingTabIndexParameters_untabbableBehavior]: untabbableBehavior, [PropNames_TypeaheadNavigationParameters_collator]: collator, [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation, [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead, [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead, [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout, [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused, [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName, [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode, [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange, [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex, [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: initiallySingleSelectedIndex, [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange, [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName, [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode, ...void2 }: UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, GridSelectChildRowInfo<RowElement>>) => UseGridNavigationSelectionReturnType<ParentOrRowElement, RowElement>;
/**
 * @compositeParams
 */
export declare const useGridNavigationSelectionRow: <RowElement extends Element, CellElement extends Element>({ info: mcp1, context, [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex, [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex, [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation, [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd, [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart, [PropNames_ManagedChildrenReturn_getChildren]: getChildren, [PropNames_RefElementReturn_getElement]: getElement, [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex, [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange, [PropNames_RovingTabIndexParameters_untabbable]: untabbable, [PropNames_TextContentParameters_getText]: getText, [PropNames_TypeaheadNavigationParameters_collator]: collator, [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation, [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead, [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead, [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout, [PropNames_MultiSelectionChildParameters_initiallyMultiSelected]: initiallyMultiSelected, [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: multiSelectionDisabled, [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: onMultiSelectChange, [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled, ...void1 }: UseGridNavigationSelectionRowParameters<RowElement, CellElement, GridSelectChildRowInfo<RowElement>, GridSelectChildCellInfo<CellElement>>) => UseGridNavigationSelectionRowReturnType<RowElement, CellElement, GridSelectChildRowInfo<RowElement>>;
/**
 * @compositeParams
 */
export declare const useGridNavigationSelectionCell: <CellElement extends Element>(p: UseGridNavigationSelectionCellParameters<CellElement>) => UseGridNavigationSelectionCellReturnType<CellElement>;
//# sourceMappingURL=use-grid-navigation-selection.d.ts.map