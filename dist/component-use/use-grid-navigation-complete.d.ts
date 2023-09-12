import { UseGridNavigationRowContext } from "../component-detail/keyboard-navigation/use-grid-navigation-partial.js";
import { RovingTabIndexChildContext } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { UseTypeaheadNavigationContext } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { MakeSelectionDeclarativeParameters, UseSelectionContext } from "../component-detail/selection/use-selection.js";
import { GridSelectChildCellInfo, GridSelectChildRowInfo, UseGridNavigationCellSelectionContext, UseGridNavigationSelectionCellInfoKeysParameters, UseGridNavigationSelectionCellParameters, UseGridNavigationSelectionCellReturnType, UseGridNavigationSelectionParameters, UseGridNavigationSelectionReturnType, UseGridNavigationSelectionRowInfoKeysParameters, UseGridNavigationSelectionRowParameters, UseGridNavigationSelectionRowReturnType } from "../component-detail/use-grid-navigation-selection.js";
import { UseRefElementParameters, UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { UseChildrenHaveFocusContext, UseChildrenHaveFocusReturnType } from "../observers/use-children-have-focus.js";
import { UseHasCurrentFocusParameters, UseHasCurrentFocusReturnType } from "../observers/use-has-current-focus.js";
import { ManagedChildInfo, UseGenericChildParameters, UseManagedChildReturnType, UseManagedChildrenContext, UseManagedChildrenReturnType } from "../preact-extensions/use-managed-children.js";
import { TargetedOmit } from "../util/lib.js";
import { ElementProps, OmitStrong } from "../util/types.js";
export type UseCompleteGridNavigationRowInfoKeysParameters<M extends UseCompleteGridNavigationRowInfo<any>> = Exclude<keyof M, keyof UseCompleteGridNavigationRowInfo<any>> | UseGridNavigationSelectionRowInfoKeysParameters;
export type UseCompleteGridNavigationCellInfoKeysParameters<M extends UseCompleteGridNavigationCellInfo<any>> = Exclude<keyof M, keyof UseCompleteGridNavigationCellInfo<any>> | UseGridNavigationSelectionCellInfoKeysParameters | "focusSelf";
export interface UseCompleteGridNavigationRowInfo<RowElement extends Element> extends GridSelectChildRowInfo<RowElement>, ManagedChildInfo<number> {
}
export interface UseCompleteGridNavigationCellInfo<CellElement extends Element> extends GridSelectChildCellInfo<CellElement>, ManagedChildInfo<number> {
}
export interface UseCompleteGridNavigationParameters<ParentOrRowElement extends Element, RowElement extends Element, M extends UseCompleteGridNavigationRowInfo<RowElement>> extends OmitStrong<UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, M>, "rearrangeableChildrenReturn" | "refElementReturn" | "managedChildrenReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters" | "rovingTabIndexParameters" | "childrenHaveFocusReturn">, TargetedOmit<UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, M>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">, TargetedOmit<UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, M>, "typeaheadNavigationParameters", "isValidForTypeaheadNavigation">, TargetedOmit<UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, M>, "rovingTabIndexParameters", "untabbableBehavior">, Pick<UseRefElementParameters<ParentOrRowElement>, "refElementParameters"> {
}
export interface UseCompleteGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends UseGenericChildParameters<CompleteGridNavigationRowContext<RowElement, RM>, Pick<RM, UseCompleteGridNavigationRowInfoKeysParameters<RM>>>, OmitStrong<UseGridNavigationSelectionRowParameters<RowElement, CellElement, RM, CM>, "info" | "context" | "textContentParameters" | "managedChildrenReturn" | "refElementReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters">, TargetedOmit<UseGridNavigationSelectionRowParameters<RowElement, CellElement, RM, CM>, "textContentParameters", never>, TargetedOmit<UseGridNavigationSelectionRowParameters<RowElement, CellElement, RM, CM>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">, TargetedOmit<UseGridNavigationSelectionRowParameters<RowElement, CellElement, RM, CM>, "typeaheadNavigationParameters", "isValidForTypeaheadNavigation">, OmitStrong<UseHasCurrentFocusParameters<RowElement>, "refElementReturn"> {
}
export interface UseCompleteGridNavigationCellParameters<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends UseGenericChildParameters<CompleteGridNavigationCellContext<CellElement, CM>, Pick<CM, UseCompleteGridNavigationCellInfoKeysParameters<CM>>>, OmitStrong<UseGridNavigationSelectionCellParameters<CellElement>, "info" | "context" | "refElementReturn"> {
}
export interface CompleteGridNavigationRowContext<RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends UseManagedChildrenContext<RM>, UseChildrenHaveFocusContext<RowElement>, UseTypeaheadNavigationContext, UseSelectionContext, RovingTabIndexChildContext, UseGridNavigationRowContext {
}
export interface CompleteGridNavigationCellContext<ChildElement extends Element, CM extends UseCompleteGridNavigationCellInfo<ChildElement>> extends UseManagedChildrenContext<CM>, UseTypeaheadNavigationContext, RovingTabIndexChildContext, UseGridNavigationCellSelectionContext {
}
export interface UseCompleteGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends OmitStrong<UseGridNavigationSelectionReturnType<ParentOrRowElement, RowElement>, "props" | "context" | "childrenHaveFocusParameters" | "managedChildrenParameters">, Pick<UseManagedChildrenReturnType<RM>, "managedChildrenReturn">, Pick<UseChildrenHaveFocusReturnType<RowElement>, "childrenHaveFocusReturn"> {
    context: CompleteGridNavigationRowContext<RowElement, RM>;
    props: ElementProps<ParentOrRowElement>;
}
export interface UseCompleteGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends OmitStrong<UseGridNavigationSelectionRowReturnType<RowElement, CellElement, RM>, "hasCurrentFocusParameters" | "managedChildrenParameters" | "info">, Pick<UseManagedChildrenReturnType<CM>, "managedChildrenReturn">, Pick<UseHasCurrentFocusReturnType<RowElement>, "hasCurrentFocusReturn">, Pick<UseManagedChildReturnType<RM>, "managedChildReturn"> {
    context: CompleteGridNavigationCellContext<CellElement, CM>;
}
export interface UseCompleteGridNavigationCellReturnType<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends OmitStrong<UseGridNavigationSelectionCellReturnType<CellElement>, "hasCurrentFocusParameters" | "info">, OmitStrong<UseRefElementReturnType<CellElement>, "propsStable">, UseHasCurrentFocusReturnType<CellElement>, UseManagedChildReturnType<CM> {
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
export declare const useCompleteGridNavigation: <ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>>({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, typeaheadNavigationParameters, paginatedChildrenParameters, refElementParameters, ...void1 }: UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, RM>) => UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>;
/**
 * @compositeParams
 */
export declare const useCompleteGridNavigationRow: <RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({ info: { index, untabbable, ...customUserInfo }, context: contextIncomingForRowAsChildOfTable, textContentParameters, linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, hasCurrentFocusParameters: { onCurrentFocusedChanged: ocfc1, onCurrentFocusedInnerChanged: ocfic3, ...void5 }, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }: UseCompleteGridNavigationRowParameters<RowElement, CellElement, RM, CM>) => UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM>;
/**
 * @compositeParams
 */
export declare const useCompleteGridNavigationCell: <CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({ gridNavigationCellParameters, context, textContentParameters, info: { focusSelf, index, untabbable, ...customUserInfo }, ...void1 }: UseCompleteGridNavigationCellParameters<CellElement, CM>) => UseCompleteGridNavigationCellReturnType<CellElement, CM>;
export interface UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends OmitStrong<MakeSelectionDeclarativeParameters<UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, RM>>, "singleSelectionReturn"> {
}
export interface UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends TargetedOmit<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>, "singleSelectionReturn", "changeSingleSelectedIndex">, TargetedOmit<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>, "multiSelectionReturn", never>, OmitStrong<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>, "singleSelectionReturn" | "multiSelectionReturn"> {
}
export declare function useCompleteGridNavigationDeclarative<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({ gridNavigationParameters, linearNavigationParameters, paginatedChildrenParameters, rovingTabIndexParameters, singleSelectionDeclarativeParameters, multiSelectionParameters, typeaheadNavigationParameters, singleSelectionParameters, refElementParameters, ...void1 }: UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement, RowElement, RM>): UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>;
//# sourceMappingURL=use-grid-navigation-complete.d.ts.map