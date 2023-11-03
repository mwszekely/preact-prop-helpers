import { UseRefElement } from "../../dom-helpers/use-ref-element.js";
import { UseHasCurrentFocus } from "../../observers/use-has-current-focus.js";
import { OnPassiveStateChange, PassiveStateUpdater } from "../../preact-extensions/use-passive-state.js";
import { EventType } from "../../util/lib.js";
import { Nullable, Parameter, StandardDepsContext, StandardDepsInfo, StandardDepsOmit, StandardDepsPick, StandardDepsProps, StandardHook } from "../../util/types.js";
import { UseListNavigation, UseListNavigationChild, UseListNavigationChildContext, UseListNavigationChildInfo, UseListNavigationChildInfoKeysParameters, UseListNavigationChildInfoKeysReturnType } from "./use-list-navigation-partial.js";
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
    colSpan: Nullable<number>;
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
    onTabbableColumnChange: Nullable<OnPassiveStateChange<TabbableColumnInfo, EventType<any, any> | undefined>>;
    /**
     * Which column of cells is initially tabbable the first time the user interacts with the control.
     */
    initiallyTabbableColumn: number;
}
export interface UseGridNavigationRowContextSelf {
    setTabbableRow: SetTabbableIndex;
    getTabbableColumn: () => TabbableColumnInfo;
    setTabbableColumn: PassiveStateUpdater<TabbableColumnInfo, EventType<any, any> | undefined>;
}
export type UseGridNavigation<ParentElement extends Element, RowElement extends Element> = StandardHook<"gridNavigation", UseGridNavigationParametersSelf, [
    StandardDepsOmit<"params", UseListNavigation<ParentElement, RowElement>, "linearNavigationParameters", [
        StandardDepsPick<"params", UseListNavigation<ParentElement, RowElement>, "linearNavigationParameters", "omit", "arrowKeyDirection">
    ]>
], never, [
    StandardDepsPick<"return", UseListNavigation<ParentElement, RowElement>>,
    StandardDepsContext<UseGridNavigationRowContext>,
    StandardDepsProps<ParentElement>
]>;
export type UseGridNavigationRow<RowElement extends Element, CellElement extends Element> = StandardHook<"gridNavigationRow", never, [
    StandardDepsOmit<"params", UseListNavigation<RowElement, CellElement>, "rearrangeableChildrenReturn" | "paginatedChildrenParameters", [
        StandardDepsPick<"params", UseListNavigation<RowElement, CellElement>, "linearNavigationParameters", "omit", "disableHomeEndKeys" | "pageNavigationSize" | "arrowKeyDirection">,
        StandardDepsPick<"params", UseListNavigation<RowElement, CellElement>, "rovingTabIndexParameters", "omit", "untabbableBehavior" | "focusSelfParent">
    ]>,
    StandardDepsInfo<GridChildRowInfo<RowElement>, UseGridNavigationRowInfoKeysParameters>,
    StandardDepsContext<UseGridNavigationRowContext>
], never, [
    StandardDepsPick<"return", UseListNavigation<RowElement, CellElement>>,
    StandardDepsOmit<"return", UseListNavigationChild<CellElement>, never, [
        StandardDepsPick<"params", UseHasCurrentFocus<RowElement>, "hasCurrentFocusParameters", "pick", "onCurrentFocusedInnerChanged">
    ]>,
    StandardDepsInfo<GridChildRowInfo<RowElement>, UseGridNavigationRowInfoKeysReturnType>,
    StandardDepsContext<UseGridNavigationCellContext>,
    StandardDepsProps<RowElement>
]>;
export type UseGridNavigationCell<CellElement extends Element> = StandardHook<"gridNavigationCell", UseGridNavigationCellParametersSelf, [
    StandardDepsPick<"return", UseRefElement<CellElement>, "refElementReturn", "pick", "getElement">,
    StandardDepsInfo<GridChildCellInfo<CellElement>, UseGridNavigationCellInfoKeysParameters>,
    StandardDepsContext<UseGridNavigationCellContext>
], never, [
    StandardDepsPick<"return", UseListNavigationChild<CellElement>>,
    StandardDepsInfo<GridChildCellInfo<CellElement>, UseGridNavigationCellInfoKeysReturnType>,
    StandardDepsProps<CellElement>
]>;
export interface UseGridNavigationRowContext extends UseListNavigationChildContext {
    gridNavigationRowContext: UseGridNavigationRowContextSelf;
}
export type UseGridNavigationRowInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
export type UseGridNavigationRowInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType | "focusSelf";
export type UseGridNavigationCellInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
export type UseGridNavigationCellInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType;
export interface TabbableColumnInfo {
    /** Which cell in this row is actually tabbable? */
    actual: number | null;
    /** Which column was the last column the user navigated to? */
    ideal: number | null;
}
export interface UseGridNavigationCellContext extends UseListNavigationChildContext {
    gridNavigationCellContext: UseGridNavigationCellContextSelf;
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
export declare const useGridNavigation: <ParentOrRowElement extends Element, RowElement extends Element>({ gridNavigationParameters: { onTabbableColumnChange, initiallyTabbableColumn, ...void3 }, linearNavigationParameters, ...listNavigationParameters }: {
    gridNavigationParameters: UseGridNavigationParametersSelf;
} & StandardDepsOmit<"params", UseListNavigation<ParentOrRowElement, RowElement>, "linearNavigationParameters", [StandardDepsPick<"params", UseListNavigation<ParentOrRowElement, RowElement>, "linearNavigationParameters", "omit", "arrowKeyDirection">]>) => {} & StandardDepsPick<"return", UseListNavigation<ParentOrRowElement, RowElement>> & StandardDepsContext<UseGridNavigationRowContext, keyof UseGridNavigationRowContext> & StandardDepsProps<ParentOrRowElement>;
/**
 * Child hook for {@link useGridNavigation}
 *
 * As a row, this hook is responsible for both being a **child** of list navigation, but also a **parent** of list navigation.
 * As such, this is one of the most complicated hooks here in terms of dependencies.
 *
 * @compositeParams
 */
export declare const useGridNavigationRow: <RowElement extends Element, CellElement extends Element>({ info: { index, untabbable, ...void3 }, context: contextFromParent, linearNavigationParameters: { onNavigateLinear, ...linearNavigationParameters }, rovingTabIndexParameters: { untabbable: rowIsUntabbableAndSoAreCells, initiallyTabbedIndex, onTabbableIndexChange, ...void4 }, managedChildrenReturn, typeaheadNavigationParameters, refElementReturn, ...void1 }: {} & StandardDepsOmit<"params", UseListNavigation<RowElement, CellElement>, "rearrangeableChildrenReturn" | "paginatedChildrenParameters", [StandardDepsPick<"params", UseListNavigation<RowElement, CellElement>, "linearNavigationParameters", "omit", "arrowKeyDirection" | "disableHomeEndKeys" | "pageNavigationSize">, StandardDepsPick<"params", UseListNavigation<RowElement, CellElement>, "rovingTabIndexParameters", "omit", "focusSelfParent" | "untabbableBehavior">]> & StandardDepsInfo<GridChildRowInfo<RowElement>, UseListNavigationChildInfoKeysParameters> & StandardDepsContext<UseGridNavigationRowContext, keyof UseGridNavigationRowContext>) => {} & StandardDepsPick<"return", UseListNavigation<RowElement, CellElement>> & StandardDepsOmit<"return", UseListNavigationChild<CellElement>, never, [StandardDepsPick<"params", UseHasCurrentFocus<RowElement>, "hasCurrentFocusParameters", "pick", "onCurrentFocusedInnerChanged">]> & StandardDepsInfo<GridChildRowInfo<RowElement>, UseGridNavigationRowInfoKeysReturnType> & StandardDepsContext<UseGridNavigationCellContext, keyof UseGridNavigationCellContext> & StandardDepsProps<RowElement>;
/**
 * Child hook for {@link useGridNavigationRow} (and {@link useGridNavigation}).
 *
 * @compositeParams
 */
export declare const useGridNavigationCell: <CellElement extends Element>({ context: { gridNavigationCellContext: { getRowIndex, setTabbableRow, getTabbableColumn: _getCurrentColumn, setTabbableColumn, setTabbableCell, ...void4 }, rovingTabIndexContext, typeaheadNavigationContext, ...void5 }, info: { index, untabbable, ...void7 }, refElementReturn, gridNavigationCellParameters: { colSpan, ...void6 }, ...void1 }: {
    gridNavigationCellParameters: UseGridNavigationCellParametersSelf;
} & StandardDepsPick<"return", UseRefElement<CellElement>, "refElementReturn", "pick", "getElement"> & StandardDepsInfo<GridChildCellInfo<CellElement>, UseListNavigationChildInfoKeysParameters> & StandardDepsContext<UseGridNavigationCellContext, keyof UseGridNavigationCellContext>) => {} & StandardDepsPick<"return", UseListNavigationChild<CellElement>> & StandardDepsInfo<GridChildCellInfo<CellElement>, UseListNavigationChildInfoKeysReturnType> & StandardDepsProps<CellElement>;
//# sourceMappingURL=use-grid-navigation-partial.d.ts.map