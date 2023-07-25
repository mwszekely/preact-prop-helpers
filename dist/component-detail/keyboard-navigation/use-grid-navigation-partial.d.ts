import { UseGenericChildParameters, UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { OnPassiveStateChange, PassiveStateUpdater } from "../../preact-extensions/use-passive-state.js";
import { EventType, Nullable, OmitStrong, TargetedOmit, TargetedPick } from "../../util/types.js";
import { UseListNavigationChildInfo, UseListNavigationChildInfoKeysParameters, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType } from "./use-list-navigation-partial.js";
import { SetTabbableIndex, UseRovingTabIndexChildInfoKeysReturnType } from "./use-roving-tabindex.js";
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
    colSpan: Nullable<number>;
}
export interface UseGridNavigationCellContextSelf {
    getRowIndex: () => number;
    setTabbableRow: SetTabbableIndex;
    getTabbableColumn: () => TabbableColumnInfo;
    setTabbableColumn: PassiveStateUpdater<TabbableColumnInfo, EventType<any, any>>;
    setTabbableCell: SetTabbableIndex;
}
export interface UseGridNavigationParametersSelf {
    /**
     * TODO: This may be called even when there is no actual change in the numeric values
     *
     * @stable
     */
    onTabbableColumnChange: Nullable<OnPassiveStateChange<TabbableColumnInfo, EventType<any, any>>>;
}
export interface UseGridNavigationRowContextSelf {
    setTabbableRow: SetTabbableIndex;
    getTabbableColumn: () => TabbableColumnInfo;
    setTabbableColumn: PassiveStateUpdater<TabbableColumnInfo, EventType<any, any>>;
}
export interface UseGridNavigationParameters<ParentOrChildElement extends Element, RowElement extends Element, M extends GridChildRowInfo<RowElement>> extends OmitStrong<UseListNavigationParameters<ParentOrChildElement, RowElement, M>, "linearNavigationParameters">, TargetedOmit<UseListNavigationParameters<ParentOrChildElement, RowElement, M>, "linearNavigationParameters", "arrowKeyDirection"> {
    gridNavigationParameters: UseGridNavigationParametersSelf;
}
export interface UseGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, RM extends GridChildRowInfo<RowElement>> extends OmitStrong<UseListNavigationReturnType<ParentOrRowElement, RowElement, RM>, "context"> {
    context: UseGridNavigationRowContext;
}
export interface UseGridNavigationRowContext extends UseListNavigationContext {
    gridNavigationRowContext: UseGridNavigationRowContextSelf;
}
export type UseGridNavigationRowInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
export type UseGridNavigationCellInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
export interface UseGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement>, CM extends GridChildCellInfo<CellElement>> extends UseGenericChildParameters<UseGridNavigationRowContext, Pick<GridChildRowInfo<RowElement>, UseGridNavigationRowInfoKeysParameters>>, OmitStrong<UseListNavigationChildParameters<RowElement, RM>, "info" | "context">, TargetedOmit<UseListNavigationParameters<RowElement, CellElement, CM>, "linearNavigationParameters", "disableHomeEndKeys" | "onNavigateLinear" | "arrowKeyDirection">, TargetedOmit<UseListNavigationParameters<RowElement, CellElement, CM>, "rovingTabIndexParameters", "focusSelfParent" | "untabbableBehavior">, OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>, "paginatedChildrenParameters" | "refElementReturn" | "rovingTabIndexParameters" | "linearNavigationParameters">, TargetedPick<UseManagedChildrenReturnType<CM>, "managedChildrenReturn", "getChildren"> {
}
export interface UseGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement>, CM extends GridChildCellInfo<CellElement>> extends UseListNavigationChildReturnType<RowElement, RM>, OmitStrong<UseListNavigationReturnType<RowElement, CellElement, CM>, "rovingTabIndexReturn" | "propsStableParentOrChild" | "propsParent" | "context">, TargetedOmit<UseListNavigationReturnType<RowElement, CellElement, CM>, "rovingTabIndexReturn", "focusSelf"> {
    context: UseGridNavigationCellContext;
    info: Pick<RM, UseRovingTabIndexChildInfoKeysReturnType | "focusSelf">;
}
export interface UseGridNavigationCellParameters<CellElement extends Element, CM extends GridChildCellInfo<CellElement>> extends UseGenericChildParameters<UseGridNavigationCellContext, Pick<GridChildCellInfo<CellElement>, UseGridNavigationCellInfoKeysParameters>>, OmitStrong<UseListNavigationChildParameters<CellElement, CM>, "context" | "info"> {
    gridNavigationCellParameters: UseGridNavigationCellParametersSelf;
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
export interface UseGridNavigationCellReturnType<CellElement extends Element, CM extends GridChildCellInfo<CellElement>> extends UseListNavigationChildReturnType<CellElement, CM> {
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
export declare function useGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, RM extends GridChildRowInfo<RowElement>>({ gridNavigationParameters: { onTabbableColumnChange, ...void3 }, linearNavigationParameters, ...listNavigationParameters }: UseGridNavigationParameters<ParentOrRowElement, RowElement, RM>): UseGridNavigationReturnType<ParentOrRowElement, RowElement, RM>;
/**
 * Child hook for {@link useGridNavigation}
 *
 * As a row, this hook is responsible for both being a **child** of list navigation, but also a **parent** of list navigation.
 * As such, this is one of the most complicated hooks here in terms of dependencies.
 *
 * @compositeParams
 */
export declare function useGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement>, CM extends GridChildCellInfo<CellElement>>({ info: managedChildParameters, textContentParameters, context: contextFromParent, linearNavigationParameters, rovingTabIndexParameters: { untabbable: rowIsUntabbableAndSoAreCells, initiallyTabbedIndex, onTabbableIndexChange, ...void4 }, managedChildrenReturn, typeaheadNavigationParameters, refElementReturn, ...void1 }: UseGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationRowReturnType<RowElement, CellElement, RM, CM>;
/**
 * Child hook for {@link useGridNavigationRow} (and {@link useGridNavigation}).
 *
 * @compositeParams
 */
export declare function useGridNavigationCell<CellElement extends Element, CM extends GridChildCellInfo<CellElement>>({ context: { gridNavigationCellContext: { getRowIndex, setTabbableRow, getTabbableColumn, setTabbableColumn, setTabbableCell, ...void4 }, rovingTabIndexContext, typeaheadNavigationContext, ...void5 }, info: { index, untabbable, ...void7 }, refElementReturn, textContentParameters, gridNavigationCellParameters: { colSpan, ...void6 }, ...void1 }: UseGridNavigationCellParameters<CellElement, CM>): UseGridNavigationCellReturnType<CellElement, CM>;
//# sourceMappingURL=use-grid-navigation-partial.d.ts.map