import { $refElementReturn } from "../../dom-helpers/use-ref-element.js";
import { $getChildren, $index, $managedChildrenReturn, UseGenericChildParameters, UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { OnPassiveStateChange, PassiveStateUpdater } from "../../preact-extensions/use-passive-state.js";
import { EventType, Nullable, OmitStrong, TargetedOmit, TargetedPick } from "../../util/types.js";
import { $paginatedChildrenParameters } from "../processed-children/use-paginated-children.js";
import { $rearrangeableChildrenReturn } from "../processed-children/use-rearrangeable-children.js";
import { $arrowKeyDirection, $disableHomeEndKeys, $linearNavigationParameters, $onNavigateLinear, $pageNavigationSize } from "./use-linear-navigation.js";
import { UseListNavigationChildInfo, UseListNavigationChildInfoKeysParameters, UseListNavigationChildInfoKeysReturnType, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType } from "./use-list-navigation-partial.js";
import { $focusSelfChild, $focusSelfParent2, $initiallyTabbedIndex, $onTabbableIndexChange, $onUntabbableFocus, $rovingTabIndexContext, $rovingTabIndexParameters, $rovingTabIndexReturn, $untabbable, $untabbableBehavior, SetTabbableIndex } from "./use-roving-tabindex.js";
import { $typeaheadNavigationContext, $typeaheadNavigationParameters } from "./use-typeahead-navigation.js";
export declare const $gridNavigationRowContext: unique symbol;
export declare const $gridNavigationCellParameters: unique symbol;
export declare const $gridNavigationParameters: unique symbol;
export declare const $getRowIndex: unique symbol;
export declare const $setTabbableRow: unique symbol;
export declare const $getTabbableColumn: unique symbol;
export declare const $setTabbableColumn: unique symbol;
export declare const $setTabbableCell: unique symbol;
export declare const $onTabbableColumnChange: unique symbol;
export declare const $initiallyTabbableColumn: unique symbol;
export declare const $colSpan: unique symbol;
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
    [$colSpan]: Nullable<number>;
}
export interface UseGridNavigationCellContextSelf {
    [$getRowIndex]: () => number;
    [$setTabbableRow]: SetTabbableIndex;
    [$getTabbableColumn]: () => TabbableColumnInfo;
    [$setTabbableColumn]: PassiveStateUpdater<TabbableColumnInfo, EventType<any, any> | undefined>;
    [$setTabbableCell]: SetTabbableIndex;
}
export interface UseGridNavigationParametersSelf {
    /**
     * TODO: This may be called even when there is no actual change in the numeric values
     *
     * @stable
     */
    [$onTabbableColumnChange]: Nullable<OnPassiveStateChange<TabbableColumnInfo, EventType<any, any> | undefined>>;
    /**
     * Which column of cells is initially tabbable the first time the user interacts with the control.
     */
    [$initiallyTabbableColumn]: number;
}
export interface UseGridNavigationRowContextSelf {
    [$setTabbableRow]: SetTabbableIndex;
    [$getTabbableColumn]: () => TabbableColumnInfo;
    [$setTabbableColumn]: PassiveStateUpdater<TabbableColumnInfo, EventType<any, any> | undefined>;
}
export interface UseGridNavigationParameters<ParentOrChildElement extends Element, RowElement extends Element, RM extends GridChildRowInfo<RowElement>> extends OmitStrong<UseListNavigationParameters<ParentOrChildElement, RowElement, RM>, typeof $linearNavigationParameters>, TargetedOmit<UseListNavigationParameters<ParentOrChildElement, RowElement, RM>, typeof $linearNavigationParameters, typeof $arrowKeyDirection> {
    [$gridNavigationParameters]: UseGridNavigationParametersSelf;
}
export interface UseGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element> extends OmitStrong<UseListNavigationReturnType<ParentOrRowElement, RowElement>, "context"> {
    context: UseGridNavigationRowContext;
}
export interface UseGridNavigationRowContext extends UseListNavigationContext {
    [$gridNavigationRowContext]: UseGridNavigationRowContextSelf;
}
export type UseGridNavigationRowInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
export type UseGridNavigationRowInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType | typeof $focusSelfChild;
export type UseGridNavigationCellInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
export type UseGridNavigationCellInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType;
export interface UseGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, CM extends GridChildCellInfo<CellElement>> extends UseGenericChildParameters<UseGridNavigationRowContext, Pick<GridChildRowInfo<RowElement>, UseGridNavigationRowInfoKeysParameters>>, OmitStrong<UseListNavigationChildParameters<RowElement>, "info" | "context">, TargetedOmit<UseListNavigationParameters<RowElement, CellElement, CM>, typeof $linearNavigationParameters, typeof $disableHomeEndKeys | typeof $onNavigateLinear | typeof $arrowKeyDirection | typeof $pageNavigationSize>, TargetedOmit<UseListNavigationParameters<RowElement, CellElement, CM>, typeof $rovingTabIndexParameters, typeof $onUntabbableFocus | typeof $untabbableBehavior>, OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>, typeof $rearrangeableChildrenReturn | typeof $paginatedChildrenParameters | typeof $refElementReturn | typeof $rovingTabIndexParameters | typeof $linearNavigationParameters>, TargetedPick<UseManagedChildrenReturnType<CM>, typeof $managedChildrenReturn, typeof $getChildren> {
}
export interface UseGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element> extends UseListNavigationChildReturnType<RowElement>, OmitStrong<UseListNavigationReturnType<RowElement, CellElement>, typeof $rovingTabIndexReturn | "context">, TargetedOmit<UseListNavigationReturnType<RowElement, CellElement>, typeof $rovingTabIndexReturn, typeof $focusSelfParent2> {
    context: UseGridNavigationCellContext;
    info: Pick<GridChildRowInfo<RowElement>, UseGridNavigationRowInfoKeysReturnType>;
}
export interface UseGridNavigationCellParameters<CellElement extends Element> extends UseGenericChildParameters<UseGridNavigationCellContext, Pick<GridChildCellInfo<CellElement>, UseGridNavigationCellInfoKeysParameters>>, OmitStrong<UseListNavigationChildParameters<CellElement>, "context" | "info"> {
    [$gridNavigationCellParameters]: UseGridNavigationCellParametersSelf;
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
export declare const useGridNavigation: <ParentOrRowElement extends Element, RowElement extends Element>({ [$gridNavigationParameters]: { [$onTabbableColumnChange]: onTabbableColumnChange, [$initiallyTabbableColumn]: initiallyTabbableColumn, ...void3 }, [$linearNavigationParameters]: linearNavigationParameters, ...listNavigationParameters }: UseGridNavigationParameters<ParentOrRowElement, RowElement, GridChildRowInfo<RowElement>>) => UseGridNavigationReturnType<ParentOrRowElement, RowElement>;
/**
 * Child hook for {@link useGridNavigation}
 *
 * As a row, this hook is responsible for both being a **child** of list navigation, but also a **parent** of list navigation.
 * As such, this is one of the most complicated hooks here in terms of dependencies.
 *
 * @compositeParams
 */
export declare const useGridNavigationRow: <RowElement extends Element, CellElement extends Element>({ info: { [$index]: index, [$untabbable]: untabbable, ...void3 }, context: contextFromParent, [$linearNavigationParameters]: linearNavigationParameters, [$rovingTabIndexParameters]: { [$untabbable]: rowIsUntabbableAndSoAreCells, [$initiallyTabbedIndex]: initiallyTabbedIndex, [$onTabbableIndexChange]: onTabbableIndexChange, ...void4 }, [$managedChildrenReturn]: managedChildrenReturn, [$typeaheadNavigationParameters]: typeaheadNavigationParameters, [$refElementReturn]: refElementReturn, ...void1 }: UseGridNavigationRowParameters<RowElement, CellElement, GridChildCellInfo<CellElement>>) => UseGridNavigationRowReturnType<RowElement, CellElement>;
/**
 * Child hook for {@link useGridNavigationRow} (and {@link useGridNavigation}).
 *
 * @compositeParams
 */
export declare const useGridNavigationCell: <CellElement extends Element>({ context: { gridNavigationCellContext: { [$getRowIndex]: getRowIndex, [$setTabbableRow]: setTabbableRow, [$getTabbableColumn]: _getCurrentColumn, [$setTabbableColumn]: setTabbableColumn, [$setTabbableCell]: setTabbableCell, ...void4 }, [$rovingTabIndexContext]: rovingTabIndexContext, [$typeaheadNavigationContext]: typeaheadNavigationContext, ...void5 }, info: { [$index]: index, [$untabbable]: untabbable, ...void7 }, [$refElementReturn]: refElementReturn, [$gridNavigationCellParameters]: { [$colSpan]: colSpan, ...void6 }, ...void1 }: UseGridNavigationCellParameters<CellElement>) => UseGridNavigationCellReturnType<CellElement>;
//# sourceMappingURL=use-grid-navigation-partial.d.ts.map