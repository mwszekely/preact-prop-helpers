import { PropNames_RefElementReturn_getElement } from "../../dom-helpers/use-ref-element.js";
import { PropNames_TextContentParameters_getText } from "../../dom-helpers/use-text-content.js";
import { PropNames_ManagedChildrenReturn_getChildren, UseGenericChildParameters, UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { OnPassiveStateChange, PassiveStateUpdater } from "../../preact-extensions/use-passive-state.js";
import { ElementProps, EventType, Nullable, OmitStrong } from "../../util/types.js";
import { PropNames_PaginatedParameters_paginationMax, PropNames_PaginatedParameters_paginationMin } from "../processed-children/use-paginated-children.js";
import { PropNames_RearrangeableReturn_indexDemangler, PropNames_RearrangeableReturn_indexMangler } from "../processed-children/use-rearrangeable-children.js";
import { PropNames_LinearNavigationParameters_arrowKeyDirection, PropNames_LinearNavigationParameters_disableHomeEndKeys, PropNames_LinearNavigationParameters_getHighestIndex, PropNames_LinearNavigationParameters_getLowestIndex, PropNames_LinearNavigationParameters_isValidForLinearNavigation, PropNames_LinearNavigationParameters_navigatePastEnd, PropNames_LinearNavigationParameters_navigatePastStart, PropNames_LinearNavigationParameters_onNavigateLinear, PropNames_LinearNavigationParameters_pageNavigationSize } from "./use-linear-navigation.js";
import { UseListNavigationChildInfo, UseListNavigationChildInfoKeysParameters, UseListNavigationChildInfoKeysReturnType, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType } from "./use-list-navigation-partial.js";
import { PropNames_RovingTabIndexParameters_focusSelfParent, PropNames_RovingTabIndexParameters_initiallyTabbedIndex, PropNames_RovingTabIndexParameters_onTabbableIndexChange, PropNames_RovingTabIndexParameters_untabbable, PropNames_RovingTabIndexParameters_untabbableBehavior, PropNames_RovingTabIndexReturn_focusSelf, SetTabbableIndex } from "./use-roving-tabindex.js";
import { PropNames_TypeaheadNavigationParameters_collator, PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation, PropNames_TypeaheadNavigationParameters_noTypeahead, PropNames_TypeaheadNavigationParameters_onNavigateTypeahead, PropNames_TypeaheadNavigationParameters_typeaheadTimeout } from "./use-typeahead-navigation.js";
export declare const PropNames_GridNavigationParameters_onTabbableColumnChange = "PropNames.GridNavigationParameters.onTabbableColumnChange";
export declare const PropNames_GridNavigationParameters_initiallyTabbableColumn = "PropNames.GridNavigationParameters.initiallyTabbableColumn";
export declare const PropNames_GridNavigationCellParameters_colSpan = "PropNames.GridNavigationCellParameters.colSpan";
export interface GridChildRowInfo<RowElement extends Element> extends UseListNavigationChildInfo<RowElement> {
}
export interface GridChildCellInfo<CellElement extends Element> extends UseListNavigationChildInfo<CellElement> {
}
export interface UseGridNavigationCellParametersSelf {
    /**
     * How many columns this cell spans (all cells default to 1).
     *
     * Any following cells should skip over the `index`es this one covered with its `colSpan`. E.G. if this cell is `index=5` and `colSpan=3`, the next cell would be `index=8`, **not** `index=6`
     */
    [PropNames_GridNavigationCellParameters_colSpan]: Nullable<number>;
}
export interface UseGridNavigationCellContextSelf {
    getRowIndex: () => number;
    setTabbableRow: SetTabbableIndex;
    getTabbableColumn: () => TabbableColumnInfo;
    setTabbableColumn: PassiveStateUpdater<TabbableColumnInfo, EventType<any, any> | undefined>;
    setTabbableCell: SetTabbableIndex;
}
export interface UseGridNavigationParametersSelf {
    /**
     * TODO: This may be called even when there is no actual change in the numeric values
     *
     * @stable
     */
    [PropNames_GridNavigationParameters_onTabbableColumnChange]: Nullable<OnPassiveStateChange<TabbableColumnInfo, EventType<any, any> | undefined>>;
    /**
     * Which column of cells is initially tabbable the first time the user interacts with the control.
     */
    [PropNames_GridNavigationParameters_initiallyTabbableColumn]: number;
}
export interface UseGridNavigationRowContextSelf {
    setTabbableRow: SetTabbableIndex;
    getTabbableColumn: () => TabbableColumnInfo;
    setTabbableColumn: PassiveStateUpdater<TabbableColumnInfo, EventType<any, any> | undefined>;
}
export interface UseGridNavigationParameters<ParentOrChildElement extends Element, RowElement extends Element, RM extends GridChildRowInfo<RowElement>> extends UseGridNavigationParametersSelf, OmitStrong<UseListNavigationParameters<ParentOrChildElement, RowElement, RM>, typeof PropNames_LinearNavigationParameters_arrowKeyDirection> {
}
export interface UseGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element> extends OmitStrong<UseListNavigationReturnType<ParentOrRowElement, RowElement>, "context"> {
    context: UseGridNavigationRowContext;
}
export interface UseGridNavigationRowContext extends UseListNavigationContext {
    gridNavigationRowContext: UseGridNavigationRowContextSelf;
}
export type UseGridNavigationRowInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
export type UseGridNavigationRowInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType | "focusSelf";
export type UseGridNavigationCellInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
export type UseGridNavigationCellInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType;
export interface UseGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, CM extends GridChildCellInfo<CellElement>> extends UseGenericChildParameters<UseGridNavigationRowContext, Pick<GridChildRowInfo<RowElement>, UseGridNavigationRowInfoKeysParameters>>, OmitStrong<UseListNavigationChildParameters<RowElement>, "info" | "context">, OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>, typeof PropNames_LinearNavigationParameters_disableHomeEndKeys | typeof PropNames_LinearNavigationParameters_onNavigateLinear | typeof PropNames_LinearNavigationParameters_arrowKeyDirection | typeof PropNames_LinearNavigationParameters_pageNavigationSize | typeof PropNames_RearrangeableReturn_indexMangler | typeof PropNames_RearrangeableReturn_indexDemangler | typeof PropNames_PaginatedParameters_paginationMax | typeof PropNames_PaginatedParameters_paginationMin | typeof PropNames_RovingTabIndexParameters_focusSelfParent | typeof PropNames_RovingTabIndexParameters_untabbableBehavior>, Pick<UseManagedChildrenReturnType<CM>, typeof PropNames_ManagedChildrenReturn_getChildren> {
}
export interface UseGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element> extends OmitStrong<UseListNavigationChildReturnType<RowElement>, "props">, OmitStrong<UseListNavigationReturnType<RowElement, CellElement>, "context" | "props">, OmitStrong<UseListNavigationReturnType<RowElement, CellElement>, "props" | typeof PropNames_RovingTabIndexReturn_focusSelf> {
    context: UseGridNavigationCellContext;
    info: Pick<GridChildRowInfo<RowElement>, UseGridNavigationRowInfoKeysReturnType>;
    props: ElementProps<RowElement>[];
}
export interface UseGridNavigationCellParameters<CellElement extends Element> extends UseGridNavigationCellParametersSelf, UseGenericChildParameters<UseGridNavigationCellContext, Pick<GridChildCellInfo<CellElement>, UseGridNavigationCellInfoKeysParameters>>, OmitStrong<UseListNavigationChildParameters<CellElement>, "context" | "info"> {
}
export interface TabbableColumnInfo {
    /** Which cell in this row is actually tabbable? */
    actual: number | null;
    /** Which column was the last column the user navigated to? */
    ideal: number | null;
}
export interface UseGridNavigationCellContext extends UseListNavigationContext {
    gridNavigationCellContext: UseGridNavigationCellContextSelf;
}
export interface UseGridNavigationCellReturnType<CellElement extends Element> extends UseListNavigationChildReturnType<CellElement> {
    info: Pick<GridChildCellInfo<CellElement>, UseGridNavigationCellInfoKeysReturnType>;
}
/**
 * Implements 2-dimensional grid-based keyboard navigation, similarly to {@link useListNavigation}.
 *
 * @remarks Due to the complexity of this hook, it is *highly* recommended to use {@link useCompleteGridNavigation} instead.
 * But if you do need to it's designed to work well with intellisense -- just keep plugging the holes until the errors stop and that's 95% of it right there.
 *
 * Some features and/or limitations of this hook:
 *
 * ```md-literal
 * * Like all other hooks (except sorting), the only DOM restriction is that the rows and cells are descendants of the grid as a whole **somewhere**.
 * * Rows are given priority over columns. Sorting/filtering happens by row, Page Up/Down, the Home/End keys, and typeahead affect the current row, etc.
 * * Cells can have a `colSpan` or be missing, and moving with the arrow keys will "remember" the correct column to be in as focus jumps around.
 * ```
 *
 * @compositeParams
 *
 * @hasChild {@link useGridNavigationRow}
 * @hasChild {@link useGridNavigationCell}
 */
export declare const useGridNavigation: <ParentOrRowElement extends Element, RowElement extends Element>({ [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys, [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex, [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex, [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation, [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd, [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart, [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear, [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize, [PropNames_ManagedChildrenReturn_getChildren]: getChildren, [PropNames_PaginatedParameters_paginationMax]: paginationMax, [PropNames_PaginatedParameters_paginationMin]: paginationMin, [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler, [PropNames_RearrangeableReturn_indexMangler]: indexMangler, [PropNames_RefElementReturn_getElement]: getElement, [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent, [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex, [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange, [PropNames_RovingTabIndexParameters_untabbable]: untabbable, [PropNames_RovingTabIndexParameters_untabbableBehavior]: untabbableBehavior, [PropNames_TypeaheadNavigationParameters_collator]: collator, [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation, [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead, [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead, [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout, [PropNames_GridNavigationParameters_onTabbableColumnChange]: onTabbableColumnChange, [PropNames_GridNavigationParameters_initiallyTabbableColumn]: initiallyTabbableColumn, ...void2 }: UseGridNavigationParameters<ParentOrRowElement, RowElement, GridChildRowInfo<RowElement>>) => UseGridNavigationReturnType<ParentOrRowElement, RowElement>;
/**
 * Child hook for {@link useGridNavigation}
 *
 * As a row, this hook is responsible for both being a **child** of list navigation, but also a **parent** of list navigation.
 * As such, this is one of the most complicated hooks here in terms of dependencies.
 *
 * @compositeParams
 */
export declare const useGridNavigationRow: <RowElement extends Element, CellElement extends Element>({ info: { index, untabbable, ...void3 }, [PropNames_TextContentParameters_getText]: getText, context: contextFromParent, [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex, [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex, [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation, [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd, [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart, [PropNames_RovingTabIndexParameters_untabbable]: rowIsUntabbableAndSoAreCells, [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex, [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange, [PropNames_RefElementReturn_getElement]: getElement, [PropNames_ManagedChildrenReturn_getChildren]: getChildren, [PropNames_TypeaheadNavigationParameters_collator]: collator, [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation, [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead, [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead, [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout, ...void1 }: UseGridNavigationRowParameters<RowElement, CellElement, GridChildCellInfo<CellElement>>) => UseGridNavigationRowReturnType<RowElement, CellElement>;
/**
 * Child hook for {@link useGridNavigationRow} (and {@link useGridNavigation}).
 *
 * @compositeParams
 */
export declare const useGridNavigationCell: <CellElement extends Element>({ context: { gridNavigationCellContext: { getRowIndex, setTabbableRow, getTabbableColumn: _getCurrentColumn, setTabbableColumn, setTabbableCell, ...void4 }, rovingTabIndexContext, typeaheadNavigationContext, ...void5 }, info: { index, untabbable, ...void7 }, [PropNames_RefElementReturn_getElement]: getElement, [PropNames_TextContentParameters_getText]: getText, [PropNames_GridNavigationCellParameters_colSpan]: colSpan, ...void1 }: UseGridNavigationCellParameters<CellElement>) => UseGridNavigationCellReturnType<CellElement>;
//# sourceMappingURL=use-grid-navigation-partial.d.ts.map