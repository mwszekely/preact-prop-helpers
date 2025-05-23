import { UseGridNavigationRowContext } from "../component-detail/keyboard-navigation/use-grid-navigation-partial.js";
import { RovingTabIndexChildContext } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { UseTypeaheadNavigationContext } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { UsePaginatedChildrenReturnType } from "../component-detail/processed-children/use-paginated-children.js";
import { UseProcessedChildContext, UseProcessedChildInfo, UseProcessedChildParameters, UseProcessedChildReturnType, UseProcessedChildrenContext, UseProcessedChildrenParameters, UseProcessedChildrenReturnType } from "../component-detail/processed-children/use-processed-children.js";
import { UseProcessedIndexManglerParameters, UseProcessedIndexManglerParametersSelf } from "../component-detail/processed-children/use-processed-index-mangler.js";
import { UseRearrangeableChildrenReturnType } from "../component-detail/processed-children/use-rearrangeable-children.js";
import { UseStaggeredChildrenReturnType } from "../component-detail/processed-children/use-staggered-children.js";
import { MakeMultiSelectionChildDeclarativeParameters } from "../component-detail/selection/use-multi-selection.js";
import { MakeSelectionDeclarativeParameters, UseSelectionContext } from "../component-detail/selection/use-selection.js";
import { GridSelectChildCellInfo, GridSelectChildRowInfo, UseGridNavigationCellSelectionContext, UseGridNavigationSelectionCellInfoKeysParameters, UseGridNavigationSelectionCellParameters, UseGridNavigationSelectionCellReturnType, UseGridNavigationSelectionParameters, UseGridNavigationSelectionReturnType, UseGridNavigationSelectionRowInfoKeysParameters, UseGridNavigationSelectionRowParameters, UseGridNavigationSelectionRowReturnType } from "../component-detail/use-grid-navigation-selection.js";
import { UseRefElementParameters, UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { UseTextContentParameters, UseTextContentReturnType } from "../dom-helpers/use-text-content.js";
import { UseChildrenHaveFocusContext, UseChildrenHaveFocusReturnType } from "../observers/use-children-have-focus.js";
import { UseHasCurrentFocusParameters, UseHasCurrentFocusReturnType } from "../observers/use-has-current-focus.js";
import { ManagedChildInfo, UseGenericChildParameters, UseManagedChildReturnType, UseManagedChildrenContext, UseManagedChildrenReturnType } from "../preact-extensions/use-managed-children.js";
import { TargetedOmit } from "../util/lib.js";
import { ElementProps, Nullable, OmitStrong } from "../util/types.js";
export type UseCompleteGridNavigationRowInfoKeysParameters<M extends UseCompleteGridNavigationRowInfo<any>> = Exclude<keyof M, keyof UseCompleteGridNavigationRowInfo<any>> | UseGridNavigationSelectionRowInfoKeysParameters;
export type UseCompleteGridNavigationCellInfoKeysParameters<M extends UseCompleteGridNavigationCellInfo<any>> = Exclude<keyof M, keyof UseCompleteGridNavigationCellInfo<any>> | UseGridNavigationSelectionCellInfoKeysParameters | "focusSelf";
export interface UseCompleteGridNavigationRowInfo<RowElement extends Element> extends GridSelectChildRowInfo<RowElement>, ManagedChildInfo<number> {
}
export interface UseCompleteGridNavigationCellInfo<CellElement extends Element> extends GridSelectChildCellInfo<CellElement>, ManagedChildInfo<number> {
}
export interface UseCompleteGridNavigationRowsInfo<ChildElement extends Element> extends UseProcessedChildInfo<ChildElement>, ManagedChildInfo<number> {
}
export interface UseCompleteGridNavigationParameters<ParentOrRowElement extends Element, RowElement extends Element, M extends UseCompleteGridNavigationRowInfo<RowElement>> extends OmitStrong<UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, M>, "processedIndexManglerReturn" | "refElementReturn" | "managedChildrenReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters" | "rovingTabIndexParameters" | "childrenHaveFocusReturn">, TargetedOmit<UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, M>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">, TargetedOmit<UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, M>, "typeaheadNavigationParameters", "isValidForTypeaheadNavigation">, TargetedOmit<UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, M>, "rovingTabIndexParameters", "untabbableBehavior">, TargetedOmit<UseProcessedIndexManglerParameters, "processedIndexManglerParameters", "getSortValueAt">, Pick<UseRefElementParameters<ParentOrRowElement>, "refElementParameters"> {
    gridNavigationCompleteParameters: UseCompleteGridNavigationParametersSelf;
}
export interface UseCompleteGridNavigationParametersSelf {
    /**
     * If this grid is sorted by column, then this should return the index of the column that is currently being sorted by.
     *
     * The value returned will be passed to `getSortValueAt`.
     * If the grid you're using this for doesn't have a concept of a "sortable column", this can be entirely ignored.
     */
    getSortColumn: Nullable<() => (number | undefined)>;
    /**
     * Should return a value that works with `rearrangeableChildrenParameters.compare` (or, by default, that works with the minus operator).
     *
     * The `column` parameter will be whatever `getSortColumn` returns, or `undefined` if none was provided.
     *
     * @param row: The index of the row to check
     * @param column: The index of the column to check (as returned by `getSortColumn`)
     */
    getSortValueAt(row: number, column: number | undefined): unknown;
}
export interface UseCompleteGridNavigationContextSelf extends UseProcessedIndexManglerParametersSelf {
    provideParentWithRefreshRows(refreshRows: () => void): void;
}
export interface UseCompleteGridNavigationRowsParameters<RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, RsM extends UseCompleteGridNavigationRowsInfo<RowElement>> extends OmitStrong<UseProcessedChildrenParameters<RowElement, RsM>, "context" | "processedIndexManglerParameters"> {
    context: CompleteGridNavigationRowContext<RowElement, RM>;
}
export interface UseCompleteGridNavigationRowsContext<RowElement extends Element, M extends UseCompleteGridNavigationRowsInfo<RowElement>> extends UseProcessedChildContext<RowElement, M> {
}
export interface UseCompleteGridNavigationRowsReturnType<TabbableChildElement extends Element, M extends UseCompleteGridNavigationRowsInfo<TabbableChildElement>> extends OmitStrong<UseRearrangeableChildrenReturnType, never>, OmitStrong<UsePaginatedChildrenReturnType, "context">, OmitStrong<UseStaggeredChildrenReturnType, "context"> {
    context: UseCompleteGridNavigationRowsContext<TabbableChildElement, M>;
}
export interface UseCompleteGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends UseGenericChildParameters<CompleteGridNavigationRowContext<RowElement, RM>, Pick<RM, UseCompleteGridNavigationRowInfoKeysParameters<RM>>>, OmitStrong<UseGridNavigationSelectionRowParameters<RowElement, CellElement, RM, CM>, "info" | "context" | "managedChildrenReturn" | "refElementReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters">, Pick<UseTextContentParameters<RowElement>, "textContentParameters">, UseRefElementParameters<RowElement>, TargetedOmit<UseGridNavigationSelectionRowParameters<RowElement, CellElement, RM, CM>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">, TargetedOmit<UseGridNavigationSelectionRowParameters<RowElement, CellElement, RM, CM>, "typeaheadNavigationParameters", "isValidForTypeaheadNavigation">, OmitStrong<UseHasCurrentFocusParameters<RowElement>, "refElementReturn"> {
}
export interface UseCompleteGridNavigationCellParameters<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends UseGenericChildParameters<CompleteGridNavigationCellContext<CellElement, CM>, Pick<CM, UseCompleteGridNavigationCellInfoKeysParameters<CM>>>, Pick<UseTextContentParameters<CellElement>, "textContentParameters">, OmitStrong<UseGridNavigationSelectionCellParameters<CellElement>, "info" | "context" | "refElementReturn"> {
}
export interface CompleteGridNavigationRowContext<RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends UseManagedChildrenContext<RM>, UseChildrenHaveFocusContext<RowElement>, UseTypeaheadNavigationContext, UseSelectionContext, RovingTabIndexChildContext, UseGridNavigationRowContext, UseProcessedChildrenContext {
    completeGridNavigationContext: UseCompleteGridNavigationContextSelf;
}
export interface CompleteGridNavigationCellContext<ChildElement extends Element, CM extends UseCompleteGridNavigationCellInfo<ChildElement>> extends UseManagedChildrenContext<CM>, UseTypeaheadNavigationContext, RovingTabIndexChildContext, UseGridNavigationCellSelectionContext {
}
export interface UseCompleteGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends OmitStrong<UseGridNavigationSelectionReturnType<ParentOrRowElement, RowElement>, "props" | "context" | "childrenHaveFocusParameters" | "managedChildrenParameters">, Pick<UseManagedChildrenReturnType<RM>, "managedChildrenReturn">, Pick<UseRefElementReturnType<ParentOrRowElement>, "refElementReturn">, TargetedOmit<UseProcessedChildrenReturnType<RowElement, any>, "rearrangeableChildrenReturn", "children">, Pick<UseChildrenHaveFocusReturnType<RowElement>, "childrenHaveFocusReturn"> {
    context: CompleteGridNavigationRowContext<RowElement, RM>;
    props: ElementProps<ParentOrRowElement>;
}
export interface UseCompleteGridNavigationReturnTypeSelf {
    /**
     * Call this any time the values for the sortable children change to re-sort and re-render them.
     */
    refreshRows(): void;
}
export interface UseCompleteGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends OmitStrong<UseGridNavigationSelectionRowReturnType<RowElement, CellElement, RM>, "hasCurrentFocusParameters" | "managedChildrenParameters" | "info" | "textContentParameters">, Pick<UseManagedChildrenReturnType<CM>, "managedChildrenReturn">, Pick<UseHasCurrentFocusReturnType<RowElement>, "hasCurrentFocusReturn">, Pick<UseRefElementReturnType<RowElement>, "refElementReturn">, Pick<UseTextContentReturnType, "textContentReturn">, Pick<UseManagedChildReturnType<RM>, "managedChildReturn"> {
    context: CompleteGridNavigationCellContext<CellElement, CM>;
}
export interface UseCompleteGridNavigationCellReturnType<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends OmitStrong<UseGridNavigationSelectionCellReturnType<CellElement>, "hasCurrentFocusParameters" | "info" | "textContentParameters">, OmitStrong<UseRefElementReturnType<CellElement>, "propsStable">, Pick<UseTextContentReturnType, "textContentReturn">, UseHasCurrentFocusReturnType<CellElement>, UseManagedChildReturnType<CM> {
    props: ElementProps<CellElement>;
}
/**
 * Combines all the grid- (&amp; list-) related hooks into one giant hook that accomplishes everything.
 *
 * @hasChild {@link useCompleteGridNavigationRow}
 * @hasChild {@link useCompleteGridNavigationCell}
 *
 * @compositeParams
 */
export declare function useCompleteGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>>({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, typeaheadNavigationParameters, paginatedChildrenParameters, refElementParameters, gridNavigationCompleteParameters: { getSortColumn, getSortValueAt: gsva }, processedIndexManglerParameters: { compare, getIndex }, ...void1 }: UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, RM>): UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>;
/**
 * Helper for `useCompleteGridNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 *
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize
 *
 * @compositeParams
 */
export declare function useCompleteGridNavigationRows<TabbableChildElement extends Element, M extends UseCompleteGridNavigationRowInfo<TabbableChildElement>, RsM extends UseCompleteGridNavigationRowsInfo<TabbableChildElement>>({ context, paginatedChildrenParameters, staggeredChildrenParameters, managedChildrenParameters, rearrangeableChildrenParameters, ...void1 }: UseCompleteGridNavigationRowsParameters<TabbableChildElement, M, RsM>): UseCompleteGridNavigationRowsReturnType<TabbableChildElement, RsM>;
export interface UseCompleteGridNavigationRowOuterParameters<RowElement extends Element, RsM extends UseCompleteGridNavigationRowsInfo<RowElement>> extends OmitStrong<UseProcessedChildParameters<RowElement, RsM>, "info">, UseRefElementParameters<RowElement> {
    info: OmitStrong<UseProcessedChildParameters<RowElement, RsM>["info"], "getElement">;
    context: UseCompleteGridNavigationRowsContext<RowElement, RsM>;
}
export interface UseCompleteGridNavigationRowOuterReturnType<RowElement extends Element, RsM extends UseCompleteGridNavigationRowsInfo<RowElement>> extends OmitStrong<UseProcessedChildReturnType<RowElement, RsM>, "refElementParameters">, OmitStrong<UseRefElementReturnType<RowElement>, "propsStable"> {
    hide: boolean;
}
/**
 * @compositeParams
 */
export declare function useCompleteGridNavigationRowOuter<RowElement extends Element, RsM extends UseCompleteGridNavigationRowsInfo<RowElement>>({ context, info: { index, ...uinfo }, refElementParameters: { onElementChange: oec1, onMount, onUnmount }, rearrangeableChildParameters }: UseCompleteGridNavigationRowOuterParameters<RowElement, RsM>): UseCompleteGridNavigationRowOuterReturnType<RowElement, RsM>;
/**
 * @compositeParams
 */
export declare function useCompleteGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({ info: { index, untabbable, ...customUserInfo }, context: contextIncomingForRowAsChildOfTable, textContentParameters: { getText, onTextContentChange: otcc1 }, linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, hasCurrentFocusParameters: { onCurrentFocusedChanged: ocfc1, onCurrentFocusedInnerChanged: ocfic3, ...void5 }, singleSelectionChildParameters, multiSelectionChildParameters, refElementParameters, ...void1 }: UseCompleteGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM>;
/**
 * @compositeParams
 */
export declare function useCompleteGridNavigationCell<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({ gridNavigationCellParameters, context, textContentParameters: { getText, onTextContentChange: otcc1, ...void4 }, info: { focusSelf, index, untabbable, ...customUserInfo }, ...void1 }: UseCompleteGridNavigationCellParameters<CellElement, CM>): UseCompleteGridNavigationCellReturnType<CellElement, CM>;
export interface UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends OmitStrong<MakeSelectionDeclarativeParameters<UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, RM>>, "singleSelectionReturn"> {
}
export interface UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends TargetedOmit<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>, "singleSelectionReturn", "changeSingleSelectedIndex">, TargetedOmit<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>, "multiSelectionReturn", never>, OmitStrong<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>, "singleSelectionReturn" | "multiSelectionReturn"> {
}
/**
 * @compositeParams
 */
export declare function useCompleteGridNavigationDeclarative<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>>({ singleSelectionDeclarativeParameters, singleSelectionParameters, ...normalGridNavParameters }: UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement, RowElement, RM>): UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement, RowElement, RM>;
export type UseCompleteGridNavigationRowDeclarativeParameters<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> = OmitStrong<MakeMultiSelectionChildDeclarativeParameters<UseCompleteGridNavigationRowParameters<RowElement, CellElement, RM, CM>>, "multiSelectionChildReturn">;
/**
 * @compositeParams
 */
export declare function useCompleteGridNavigationRowDeclarative<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({ multiSelectionChildParameters: { multiSelectionDisabled, ...multiSelectionChildParameters }, multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange, ...multiSelectionChildDeclarativeParameters }, info, ...p }: UseCompleteGridNavigationRowDeclarativeParameters<RowElement, CellElement, RM, CM>): UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM>;
//# sourceMappingURL=use-grid-navigation-complete.d.ts.map