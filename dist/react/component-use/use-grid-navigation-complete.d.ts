import { UseGridNavigationRowContext, $gridNavigationCellParameters, $gridNavigationParameters } from "../component-detail/keyboard-navigation/use-grid-navigation-partial.js";
import { $linearNavigationParameters, $getLowestIndex, $getHighestIndex, $isValidForLinearNavigation } from "../component-detail/keyboard-navigation/use-linear-navigation.js";
import { $focusSelfChild, $untabbable, $untabbableBehavior, RovingTabIndexChildContext, $rovingTabIndexParameters } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { $isValidForTypeaheadNavigation, UseTypeaheadNavigationContext, $typeaheadNavigationParameters } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { UsePaginatedChildrenReturnType, $paginatedChildrenParameters } from "../component-detail/processed-children/use-paginated-children.js";
import { UseProcessedChildContext, UseProcessedChildInfo, UseProcessedChildrenContext, UseProcessedChildrenParameters, UseProcessedChildrenReturnType } from "../component-detail/processed-children/use-processed-children.js";
import { $children, $indexDemangler, $indexMangler, UseRearrangeableChildrenReturnType, $rearrangeableChildrenParameters, $rearrangeableChildrenReturn } from "../component-detail/processed-children/use-rearrangeable-children.js";
import { UseStaggeredChildrenReturnType, $staggeredChildrenParameters } from "../component-detail/processed-children/use-staggered-children.js";
import { $multiSelectionChildParameters, $multiSelectionParameters, $multiSelectionReturn } from "../component-detail/selection/use-multi-selection.js";
import { MakeSelectionDeclarativeParameters, UseSelectionContext } from "../component-detail/selection/use-selection.js";
import { $changeSingleSelectedIndex, $singleSelectionChildParameters, $singleSelectionDeclarativeParameters, $singleSelectionParameters, $singleSelectionReturn } from "../component-detail/selection/use-single-selection.js";
import { GridSelectChildCellInfo, GridSelectChildRowInfo, UseGridNavigationCellSelectionContext, UseGridNavigationSelectionCellInfoKeysParameters, UseGridNavigationSelectionCellParameters, UseGridNavigationSelectionCellReturnType, UseGridNavigationSelectionParameters, UseGridNavigationSelectionReturnType, UseGridNavigationSelectionRowInfoKeysParameters, UseGridNavigationSelectionRowParameters, UseGridNavigationSelectionRowReturnType } from "../component-detail/use-grid-navigation-selection.js";
import { UseRefElementParameters, UseRefElementReturnType, $refElementParameters, $refElementReturn } from "../dom-helpers/use-ref-element.js";
import { $getText, $onTextContentChange, $textContentParameters, $textContentReturn, UseTextContentParameters, UseTextContentReturnType } from "../dom-helpers/use-text-content.js";
import { UseChildrenHaveFocusContext, UseChildrenHaveFocusReturnType, $childrenHaveFocusParameters, $childrenHaveFocusReturn } from "../observers/use-children-have-focus.js";
import { $hasCurrentFocusParameters, $hasCurrentFocusReturn, $onCurrentFocusedChanged, $onCurrentFocusedInnerChanged, UseHasCurrentFocusParameters, UseHasCurrentFocusReturnType } from "../observers/use-has-current-focus.js";
import { $index, ManagedChildInfo, UseGenericChildParameters, UseManagedChildReturnType, UseManagedChildrenContext, UseManagedChildrenReturnType, $managedChildReturn, $managedChildrenParameters, $managedChildrenReturn } from "../preact-extensions/use-managed-children.js";
import { TargetedOmit } from "../util/lib.js";
import { ElementProps, OmitStrong } from "../util/types.js";
export type UseCompleteGridNavigationRowInfoKeysParameters<M extends UseCompleteGridNavigationRowInfo<any>> = Exclude<keyof M, keyof UseCompleteGridNavigationRowInfo<any>> | UseGridNavigationSelectionRowInfoKeysParameters;
export type UseCompleteGridNavigationCellInfoKeysParameters<M extends UseCompleteGridNavigationCellInfo<any>> = Exclude<keyof M, keyof UseCompleteGridNavigationCellInfo<any>> | UseGridNavigationSelectionCellInfoKeysParameters | typeof $focusSelfChild;
export interface UseCompleteGridNavigationRowInfo<RowElement extends Element> extends GridSelectChildRowInfo<RowElement>, ManagedChildInfo<number> {
}
export interface UseCompleteGridNavigationCellInfo<CellElement extends Element> extends GridSelectChildCellInfo<CellElement>, ManagedChildInfo<number> {
}
export interface UseCompleteGridNavigationRowsInfo<ChildElement extends Element> extends UseProcessedChildInfo<ChildElement>, ManagedChildInfo<number> {
}
export interface UseCompleteGridNavigationParameters<ParentOrRowElement extends Element, RowElement extends Element, M extends UseCompleteGridNavigationRowInfo<RowElement>> extends OmitStrong<UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, M>, typeof $rearrangeableChildrenReturn | typeof $refElementReturn | typeof $managedChildrenReturn | typeof $linearNavigationParameters | typeof $typeaheadNavigationParameters | typeof $rovingTabIndexParameters | typeof $childrenHaveFocusReturn>, TargetedOmit<UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, M>, typeof $linearNavigationParameters, typeof $getLowestIndex | typeof $getHighestIndex | typeof $isValidForLinearNavigation>, TargetedOmit<UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, M>, typeof $typeaheadNavigationParameters, typeof $isValidForTypeaheadNavigation>, TargetedOmit<UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, M>, typeof $rovingTabIndexParameters, typeof $untabbableBehavior>, Pick<UseRefElementParameters<ParentOrRowElement>, typeof $refElementParameters> {
}
export interface UseCompleteGridNavigationRowsParameters<TabbableChildElement extends Element, M extends UseCompleteGridNavigationRowsInfo<TabbableChildElement>> extends OmitStrong<UseProcessedChildrenParameters<TabbableChildElement, M>, never> {
}
export interface UseCompleteGridNavigationRowsReturnType<TabbableChildElement extends Element, M extends UseCompleteGridNavigationRowsInfo<TabbableChildElement>> extends OmitStrong<UseRearrangeableChildrenReturnType<M>, never>, OmitStrong<UsePaginatedChildrenReturnType, "context">, OmitStrong<UseStaggeredChildrenReturnType, "context"> {
    context: UseProcessedChildContext<TabbableChildElement, M>;
}
export interface UseCompleteGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends UseGenericChildParameters<CompleteGridNavigationRowContext<RowElement, RM>, Pick<RM, UseCompleteGridNavigationRowInfoKeysParameters<RM>>>, OmitStrong<UseGridNavigationSelectionRowParameters<RowElement, CellElement, RM, CM>, "info" | "context" | typeof $managedChildrenReturn | typeof $refElementReturn | typeof $linearNavigationParameters | typeof $typeaheadNavigationParameters>, Pick<UseTextContentParameters<RowElement>, typeof $textContentParameters>, TargetedOmit<UseGridNavigationSelectionRowParameters<RowElement, CellElement, RM, CM>, typeof $linearNavigationParameters, typeof $getLowestIndex | typeof $getHighestIndex | typeof $isValidForLinearNavigation>, TargetedOmit<UseGridNavigationSelectionRowParameters<RowElement, CellElement, RM, CM>, typeof $typeaheadNavigationParameters, typeof $isValidForTypeaheadNavigation>, OmitStrong<UseHasCurrentFocusParameters<RowElement>, typeof $refElementReturn> {
}
export interface UseCompleteGridNavigationCellParameters<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends UseGenericChildParameters<CompleteGridNavigationCellContext<CellElement, CM>, Pick<CM, UseCompleteGridNavigationCellInfoKeysParameters<CM>>>, Pick<UseTextContentParameters<CellElement>, typeof $textContentParameters>, OmitStrong<UseGridNavigationSelectionCellParameters<CellElement>, "info" | "context" | typeof $refElementReturn> {
}
export interface CompleteGridNavigationRowContext<RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends UseManagedChildrenContext<RM>, UseChildrenHaveFocusContext<RowElement>, UseTypeaheadNavigationContext, UseSelectionContext, RovingTabIndexChildContext, UseGridNavigationRowContext {
    contextProcessing: UseProcessedChildrenContext;
}
export interface CompleteGridNavigationCellContext<ChildElement extends Element, CM extends UseCompleteGridNavigationCellInfo<ChildElement>> extends UseManagedChildrenContext<CM>, UseTypeaheadNavigationContext, RovingTabIndexChildContext, UseGridNavigationCellSelectionContext {
}
export interface UseCompleteGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends OmitStrong<UseGridNavigationSelectionReturnType<ParentOrRowElement, RowElement>, "props" | "context" | typeof $childrenHaveFocusParameters | typeof $managedChildrenParameters>, Pick<UseManagedChildrenReturnType<RM>, typeof $managedChildrenReturn>, Pick<UseRefElementReturnType<ParentOrRowElement>, typeof $refElementReturn>, TargetedOmit<UseProcessedChildrenReturnType<RowElement, any>, typeof $rearrangeableChildrenReturn, typeof $indexDemangler | typeof $indexMangler | typeof $children>, Pick<UseChildrenHaveFocusReturnType<RowElement>, typeof $childrenHaveFocusReturn> {
    contextChildren: CompleteGridNavigationRowContext<RowElement, RM>;
    contextProcessing: UseProcessedChildrenContext;
    props: ElementProps<ParentOrRowElement>;
}
export interface UseCompleteGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends OmitStrong<UseGridNavigationSelectionRowReturnType<RowElement, CellElement, RM>, typeof $hasCurrentFocusParameters | typeof $managedChildrenParameters | "info" | typeof $textContentParameters>, Pick<UseManagedChildrenReturnType<CM>, typeof $managedChildrenReturn>, Pick<UseHasCurrentFocusReturnType<RowElement>, typeof $hasCurrentFocusReturn>, Pick<UseRefElementReturnType<RowElement>, typeof $refElementReturn>, Pick<UseTextContentReturnType, typeof $textContentReturn>, Pick<UseManagedChildReturnType<RM>, typeof $managedChildReturn> {
    context: CompleteGridNavigationCellContext<CellElement, CM>;
}
export interface UseCompleteGridNavigationCellReturnType<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends OmitStrong<UseGridNavigationSelectionCellReturnType<CellElement>, typeof $hasCurrentFocusParameters | "info" | typeof $textContentParameters>, OmitStrong<UseRefElementReturnType<CellElement>, "propsStable">, Pick<UseTextContentReturnType, typeof $textContentReturn>, UseHasCurrentFocusReturnType<CellElement>, UseManagedChildReturnType<CM> {
    props: ElementProps<CellElement>;
}
/**
 * Combines all the grid- (&amp; list-) related hooks into one giant hook that accomplishes everything.
 *
 * @compositeParams
 *
 * @hasChild {@link useCompleteGridNavigationRow}
 * @hasChild {@link useCompleteGridNavigationCell}
 */
export declare const useCompleteGridNavigation: <ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>>({ [$gridNavigationParameters]: gridNavigationParameters, [$linearNavigationParameters]: linearNavigationParameters, [$rovingTabIndexParameters]: rovingTabIndexParameters, [$singleSelectionParameters]: singleSelectionParameters, [$multiSelectionParameters]: multiSelectionParameters, [$typeaheadNavigationParameters]: typeaheadNavigationParameters, [$paginatedChildrenParameters]: paginatedChildrenParameters, [$refElementParameters]: refElementParameters, ...void1 }: UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, RM>) => UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>;
/**
 * Helper for `useCompleteGridNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 *
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize
 */
export declare const useCompleteGridNavigationRows: <TabbableChildElement extends Element, M extends UseCompleteGridNavigationRowsInfo<TabbableChildElement>>({ context, [$paginatedChildrenParameters]: paginatedChildrenParameters, [$rearrangeableChildrenParameters]: rearrangeableChildrenParameters, [$staggeredChildrenParameters]: staggeredChildrenParameters, [$managedChildrenParameters]: managedChildrenParameters }: UseCompleteGridNavigationRowsParameters<TabbableChildElement, M>) => UseCompleteGridNavigationRowsReturnType<TabbableChildElement, M>;
/**
 * @compositeParams
 */
export declare const useCompleteGridNavigationRow: <RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({ info: { [$index]: index, [$untabbable]: untabbable, ...customUserInfo }, context: contextIncomingForRowAsChildOfTable, [$textContentParameters]: { [$getText]: getText, [$onTextContentChange]: otcc1 }, [$linearNavigationParameters]: linearNavigationParameters, [$rovingTabIndexParameters]: rovingTabIndexParameters, [$typeaheadNavigationParameters]: typeaheadNavigationParameters, [$hasCurrentFocusParameters]: { [$onCurrentFocusedChanged]: ocfc1, [$onCurrentFocusedInnerChanged]: ocfic3, ...void5 }, [$singleSelectionChildParameters]: singleSelectionChildParameters, [$multiSelectionChildParameters]: multiSelectionChildParameters, ...void1 }: UseCompleteGridNavigationRowParameters<RowElement, CellElement, RM, CM>) => UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM>;
/**
 * @compositeParams
 */
export declare const useCompleteGridNavigationCell: <CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({ [$gridNavigationCellParameters]: gridNavigationCellParameters, context, [$textContentParameters]: { [$getText]: getText, [$onTextContentChange]: otcc1, ...void4 }, info: { [$focusSelfChild]: focusSelf, [$index]: index, [$untabbable]: untabbable, ...customUserInfo }, ...void1 }: UseCompleteGridNavigationCellParameters<CellElement, CM>) => UseCompleteGridNavigationCellReturnType<CellElement, CM>;
export interface UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends OmitStrong<MakeSelectionDeclarativeParameters<UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, RM>>, typeof $singleSelectionReturn> {
}
export interface UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends TargetedOmit<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>, typeof $singleSelectionReturn, typeof $changeSingleSelectedIndex>, TargetedOmit<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>, typeof $multiSelectionReturn, never>, OmitStrong<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>, typeof $singleSelectionReturn | typeof $multiSelectionReturn> {
}
export declare function useCompleteGridNavigationDeclarative<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>>({ [$singleSelectionDeclarativeParameters]: singleSelectionDeclarativeParameters, [$singleSelectionParameters]: singleSelectionParameters, ...normalGridNavParameters }: UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement, RowElement, RM>): UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement, RowElement, RM>;
//# sourceMappingURL=use-grid-navigation-complete.d.ts.map