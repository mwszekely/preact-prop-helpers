import { UseGenericChildParameters, UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { OnPassiveStateChange, PassiveStateUpdater } from "../../preact-extensions/use-passive-state.js";
import { ElementProps, EventType, Nullable, OmitStrong } from "../../util/types.js";
import { UseListNavigationChildInfo, UseListNavigationChildInfoKeysParameters, UseListNavigationChildInfoKeysReturnType, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType } from "./use-list-navigation-partial.js";
import { SetTabbableIndex } from "./use-roving-tabindex.js";
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
    "PropNames.GridNavigationCellParameters.colSpan": Nullable<number>;
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
    "PropNames.GridNavigationParameters.onTabbableColumnChange": Nullable<OnPassiveStateChange<TabbableColumnInfo, EventType<any, any> | undefined>>;
    /**
     * Which column of cells is initially tabbable the first time the user interacts with the control.
     */
    "PropNames.GridNavigationParameters.initiallyTabbableColumn": number;
}
export interface UseGridNavigationRowContextSelf {
    setTabbableRow: SetTabbableIndex;
    getTabbableColumn: () => TabbableColumnInfo;
    setTabbableColumn: PassiveStateUpdater<TabbableColumnInfo, EventType<any, any> | undefined>;
}
export interface UseGridNavigationParameters<ParentOrChildElement extends Element, RowElement extends Element, RM extends GridChildRowInfo<RowElement>> extends UseGridNavigationParametersSelf, OmitStrong<UseListNavigationParameters<ParentOrChildElement, RowElement, RM>, "PropNames.LinearNavigationParameters.arrowKeyDirection"> {
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
export interface UseGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, CM extends GridChildCellInfo<CellElement>> extends UseGenericChildParameters<UseGridNavigationRowContext, Pick<GridChildRowInfo<RowElement>, UseGridNavigationRowInfoKeysParameters>>, OmitStrong<UseListNavigationChildParameters<RowElement>, "info" | "context">, OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>, "PropNames.LinearNavigationParameters.disableHomeEndKeys" | "PropNames.LinearNavigationParameters.onNavigateLinear" | "PropNames.LinearNavigationParameters.arrowKeyDirection" | "PropNames.LinearNavigationParameters.pageNavigationSize" | "PropNames.RearrangeableReturn.indexMangler" | "PropNames.RearrangeableReturn.indexDemangler" | "PropNames.PaginatedParameters.paginationMax" | "PropNames.PaginatedParameters.paginationMin" | "PropNames.RovingTabIndexParameters.focusSelfParent" | "PropNames.RovingTabIndexParameters.untabbableBehavior">, Pick<UseManagedChildrenReturnType<CM>, "PropNames.ManagedChildrenReturn.getChildren"> {
}
export interface UseGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element> extends OmitStrong<UseListNavigationChildReturnType<RowElement>, "props">, OmitStrong<UseListNavigationReturnType<RowElement, CellElement>, "context" | "props">, OmitStrong<UseListNavigationReturnType<RowElement, CellElement>, "props" | "PropNames.RovingTabIndexReturn.focusSelf"> {
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
export declare const useGridNavigation: <ParentOrRowElement extends Element, RowElement extends Element>({ "PropNames.LinearNavigationParameters.disableHomeEndKeys": disableHomeEndKeys, "PropNames.LinearNavigationParameters.getHighestIndex": getHighestIndex, "PropNames.LinearNavigationParameters.getLowestIndex": getLowestIndex, "PropNames.LinearNavigationParameters.isValidForLinearNavigation": isValidForLinearNavigation, "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd, "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart, "PropNames.LinearNavigationParameters.onNavigateLinear": onNavigateLinear, "PropNames.LinearNavigationParameters.pageNavigationSize": pageNavigationSize, "PropNames.ManagedChildrenReturn.getChildren": getChildren, "PropNames.PaginatedParameters.paginationMax": paginationMax, "PropNames.PaginatedParameters.paginationMin": paginationMin, "PropNames.RearrangeableReturn.indexDemangler": indexDemangler, "PropNames.RearrangeableReturn.indexMangler": indexMangler, "PropNames.RefElementReturn.getElement": getElement, "PropNames.RovingTabIndexParameters.focusSelfParent": focusSelfParent, "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex, "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange, "PropNames.RovingTabIndexParameters.untabbable": untabbable, "PropNames.RovingTabIndexParameters.untabbableBehavior": untabbableBehavior, "PropNames.TypeaheadNavigationParameters.collator": collator, "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation": isValidForTypeaheadNavigation, "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead, "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead, "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout, "PropNames.GridNavigationParameters.onTabbableColumnChange": onTabbableColumnChange, "PropNames.GridNavigationParameters.initiallyTabbableColumn": initiallyTabbableColumn, ...void2 }: UseGridNavigationParameters<ParentOrRowElement, RowElement, GridChildRowInfo<RowElement>>) => UseGridNavigationReturnType<ParentOrRowElement, RowElement>;
/**
 * Child hook for {@link useGridNavigation}
 *
 * As a row, this hook is responsible for both being a **child** of list navigation, but also a **parent** of list navigation.
 * As such, this is one of the most complicated hooks here in terms of dependencies.
 *
 * @compositeParams
 */
export declare const useGridNavigationRow: <RowElement extends Element, CellElement extends Element>({ info: { index, untabbable, ...void3 }, "PropNames.TextContentParameters.getText": getText, context: contextFromParent, "PropNames.LinearNavigationParameters.getHighestIndex": getHighestIndex, "PropNames.LinearNavigationParameters.getLowestIndex": getLowestIndex, "PropNames.LinearNavigationParameters.isValidForLinearNavigation": isValidForLinearNavigation, "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd, "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart, "PropNames.RovingTabIndexParameters.untabbable": rowIsUntabbableAndSoAreCells, "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex, "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange, "PropNames.RefElementReturn.getElement": getElement, "PropNames.ManagedChildrenReturn.getChildren": getChildren, "PropNames.TypeaheadNavigationParameters.collator": collator, "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation": isValidForTypeaheadNavigation, "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead, "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead, "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout, ...void1 }: UseGridNavigationRowParameters<RowElement, CellElement, GridChildCellInfo<CellElement>>) => UseGridNavigationRowReturnType<RowElement, CellElement>;
/**
 * Child hook for {@link useGridNavigationRow} (and {@link useGridNavigation}).
 *
 * @compositeParams
 */
export declare const useGridNavigationCell: <CellElement extends Element>({ context: { gridNavigationCellContext: { getRowIndex, setTabbableRow, getTabbableColumn: _getCurrentColumn, setTabbableColumn, setTabbableCell, ...void4 }, rovingTabIndexContext, typeaheadNavigationContext, ...void5 }, info: { index, untabbable, ...void7 }, "PropNames.RefElementReturn.getElement": getElement, "PropNames.TextContentParameters.getText": getText, "PropNames.GridNavigationCellParameters.colSpan": colSpan, ...void1 }: UseGridNavigationCellParameters<CellElement>) => UseGridNavigationCellReturnType<CellElement>;
//# sourceMappingURL=use-grid-navigation-partial.d.ts.map