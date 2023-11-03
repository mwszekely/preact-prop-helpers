import { UseGridNavigationRowContext } from "../component-detail/keyboard-navigation/use-grid-navigation-partial.js";
import { RovingTabIndexChildContext } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { UseTypeaheadNavigationChildContext } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { UsePaginatedChildren } from "../component-detail/processed-children/use-paginated-children.js";
import { UseProcessedChildContext, UseProcessedChildInfo, UseProcessedChildren, UseProcessedChildrenContext } from "../component-detail/processed-children/use-processed-children.js";
import { UseRearrangeableChildren } from "../component-detail/processed-children/use-rearrangeable-children.js";
import { UseStaggeredChildren } from "../component-detail/processed-children/use-staggered-children.js";
import { MakeSelectionDeclarativeParameters, UseSelectionChildContext } from "../component-detail/selection/use-selection.js";
import { GridSelectChildCellInfo, GridSelectChildRowInfo, UseGridNavigationCellSelectionContext, UseGridNavigationSelection, UseGridNavigationSelectionCell, UseGridNavigationSelectionCellInfoKeysParameters, UseGridNavigationSelectionRow, UseGridNavigationSelectionRowInfoKeysParameters } from "../component-detail/use-grid-navigation-selection.js";
import { UseRefElement } from "../dom-helpers/use-ref-element.js";
import { UseTextContent } from "../dom-helpers/use-text-content.js";
import { UseChildrenHaveFocus, UseChildrenHaveFocusContext } from "../observers/use-children-have-focus.js";
import { UseHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { ManagedChildInfo, UseManagedChild, UseManagedChildContext, UseManagedChildren } from "../preact-extensions/use-managed-children.js";
import { OmitStrong, Parameter, StandardDepsContext, StandardDepsInfo, StandardDepsOmit, StandardDepsPick, StandardDepsProps, StandardHook, TargetedOmit } from "../util/types.js";
export type UseCompleteGridNavigationRowInfoKeysParameters<M extends UseCompleteGridNavigationRowInfo<any>> = Exclude<keyof M, keyof UseCompleteGridNavigationRowInfo<any>> | UseGridNavigationSelectionRowInfoKeysParameters;
export type UseCompleteGridNavigationCellInfoKeysParameters<M extends UseCompleteGridNavigationCellInfo<any>> = Exclude<keyof M, keyof UseCompleteGridNavigationCellInfo<any>> | UseGridNavigationSelectionCellInfoKeysParameters | "focusSelf";
export interface UseCompleteGridNavigationRowInfo<RowElement extends Element> extends GridSelectChildRowInfo<RowElement>, ManagedChildInfo<number> {
}
export interface UseCompleteGridNavigationCellInfo<CellElement extends Element> extends GridSelectChildCellInfo<CellElement>, ManagedChildInfo<number> {
}
export interface UseCompleteGridNavigationRowsInfo<ChildElement extends Element> extends UseProcessedChildInfo<ChildElement>, ManagedChildInfo<number> {
}
export type UseCompleteGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> = StandardHook<"completeGridNavigation", never, [
    StandardDepsOmit<"params", UseGridNavigationSelection<ParentOrRowElement, RowElement>, "rearrangeableChildrenReturn" | "refElementReturn" | "managedChildrenReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters" | "rovingTabIndexParameters" | "childrenHaveFocusReturn", [
        StandardDepsPick<"params", UseGridNavigationSelection<ParentOrRowElement, RowElement>, "linearNavigationParameters", "omit", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">,
        StandardDepsPick<"params", UseGridNavigationSelection<ParentOrRowElement, RowElement>, "typeaheadNavigationParameters", "omit", "isValidForTypeaheadNavigation">,
        StandardDepsPick<"params", UseGridNavigationSelection<ParentOrRowElement, RowElement>, "rovingTabIndexParameters", "omit", "untabbableBehavior">
    ]>,
    StandardDepsPick<"params", UseRefElement<ParentOrRowElement>>
], never, [
    StandardDepsPick<"return", UseRefElement<ParentOrRowElement>>,
    StandardDepsPick<"return", UseManagedChildren<RM>>,
    StandardDepsPick<"return", UseChildrenHaveFocus<RowElement>>,
    StandardDepsPick<"return", UseProcessedChildren<RowElement, any>, "rearrangeableChildrenReturn", "pick", "rearrange" | "reverse" | "shuffle" | "sort">,
    StandardDepsOmit<"return", UseGridNavigationSelection<ParentOrRowElement, RowElement>, "managedChildrenParameters" | "childrenHaveFocusParameters">,
    StandardDepsProps<ParentOrRowElement>,
    {
        contextChildren: CompleteGridNavigationRowContext<RowElement, RM>;
        contextProcessing: UseProcessedChildrenContext;
    }
]>;
export type UseCompleteGridNavigationRows<TabbableChildElement extends Element, M extends UseCompleteGridNavigationRowsInfo<TabbableChildElement>> = StandardHook<"completeGridNavigationRows", never, [
    StandardDepsPick<"params", UseProcessedChildren<TabbableChildElement, M>>,
    StandardDepsContext<UseProcessedChildrenContext>
], never, [
    StandardDepsPick<"return", UseRearrangeableChildren<M>, never>,
    StandardDepsPick<"return", UsePaginatedChildren<TabbableChildElement>>,
    StandardDepsPick<"return", UseStaggeredChildren>,
    StandardDepsContext<UseProcessedChildContext<TabbableChildElement, M>>
]>;
export type UseCompleteGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> = StandardHook<"completeGridNavigationRow", never, [
    StandardDepsInfo<RM, UseCompleteGridNavigationRowInfoKeysParameters<RM>>,
    StandardDepsContext<CompleteGridNavigationRowContext<RowElement, RM>>,
    StandardDepsOmit<"params", UseGridNavigationSelectionRow<RowElement, CellElement>, "managedChildrenReturn" | "refElementReturn", [
        StandardDepsPick<"params", UseGridNavigationSelectionRow<RowElement, CellElement>, "linearNavigationParameters", "omit", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">,
        StandardDepsPick<"params", UseGridNavigationSelectionRow<RowElement, CellElement>, "typeaheadNavigationParameters", "omit", "isValidForTypeaheadNavigation">
    ]>,
    StandardDepsOmit<"params", UseTextContent<RowElement>, "refElementReturn">,
    StandardDepsOmit<"params", UseHasCurrentFocus<RowElement>, "refElementReturn">
], never, [
    StandardDepsOmit<"return", UseGridNavigationSelectionRow<RowElement, CellElement>, "textContentParameters" | "hasCurrentFocusParameters" | "managedChildrenParameters">,
    StandardDepsPick<"return", UseHasCurrentFocus<RowElement>>,
    StandardDepsPick<"return", UseRefElement<RowElement>>,
    StandardDepsPick<"return", UseTextContent<RowElement>>,
    StandardDepsPick<"return", UseManagedChildren<CM>>,
    StandardDepsPick<"return", UseManagedChild<RM>>,
    StandardDepsContext<CompleteGridNavigationCellContext<CellElement, CM>>,
    StandardDepsProps<RowElement>
]>;
export type UseCompleteGridNavigationCell<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> = StandardHook<"completeGridNavigationCell", never, [
    StandardDepsInfo<CM, UseCompleteGridNavigationCellInfoKeysParameters<CM>>,
    StandardDepsOmit<"params", UseGridNavigationSelectionCell<CellElement>, "refElementReturn">,
    StandardDepsOmit<"params", UseTextContent<CellElement>, "refElementReturn">,
    StandardDepsContext<CompleteGridNavigationCellContext<CellElement, CM>>
], never, [
    StandardDepsOmit<"return", UseGridNavigationSelectionCell<CellElement>, "hasCurrentFocusParameters" | "textContentParameters">,
    StandardDepsPick<"return", UseRefElement<CellElement>>,
    StandardDepsPick<"return", UseHasCurrentFocus<CellElement>>,
    StandardDepsPick<"return", UseTextContent<CellElement>>,
    StandardDepsPick<"return", UseManagedChild<CM>>,
    StandardDepsProps<CellElement>
]>;
export interface CompleteGridNavigationRowContext<RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends UseManagedChildContext<RM>, UseChildrenHaveFocusContext<RowElement>, UseTypeaheadNavigationChildContext, UseSelectionChildContext, RovingTabIndexChildContext, UseGridNavigationRowContext {
    contextProcessing: UseProcessedChildrenContext;
}
export interface CompleteGridNavigationCellContext<ChildElement extends Element, CM extends UseCompleteGridNavigationCellInfo<ChildElement>> extends UseManagedChildContext<CM>, UseTypeaheadNavigationChildContext, RovingTabIndexChildContext, UseGridNavigationCellSelectionContext {
}
/**
 * Combines all the grid- (&amp; list-) related hooks into one giant hook that accomplishes everything.
 *
 * @compositeParams
 *
 * @hasChild {@link useCompleteGridNavigationRow}
 * @hasChild {@link useCompleteGridNavigationCell}
 */
export declare const useCompleteGridNavigation: <ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>>({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, typeaheadNavigationParameters, paginatedChildrenParameters, refElementParameters, ...void1 }: {} & StandardDepsOmit<"params", UseGridNavigationSelection<ParentOrRowElement, RowElement>, "refElementReturn" | "childrenHaveFocusReturn" | "managedChildrenReturn" | "rovingTabIndexParameters" | "rearrangeableChildrenReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters", [StandardDepsPick<"params", UseGridNavigationSelection<ParentOrRowElement, RowElement>, "linearNavigationParameters", "omit", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">, StandardDepsPick<"params", UseGridNavigationSelection<ParentOrRowElement, RowElement>, "typeaheadNavigationParameters", "omit", "isValidForTypeaheadNavigation">, StandardDepsPick<"params", UseGridNavigationSelection<ParentOrRowElement, RowElement>, "rovingTabIndexParameters", "omit", "untabbableBehavior">]> & StandardDepsPick<"params", UseRefElement<ParentOrRowElement>>) => {} & StandardDepsPick<"return", UseRefElement<ParentOrRowElement>> & StandardDepsPick<"return", UseManagedChildren<RM>> & StandardDepsPick<"return", UseChildrenHaveFocus<RowElement>> & StandardDepsPick<"return", UseProcessedChildren<RowElement, any>, "rearrangeableChildrenReturn", "pick", "reverse" | "sort" | "shuffle" | "rearrange"> & StandardDepsOmit<"return", UseGridNavigationSelection<ParentOrRowElement, RowElement>, "childrenHaveFocusParameters" | "managedChildrenParameters"> & StandardDepsProps<ParentOrRowElement> & {
    contextChildren: CompleteGridNavigationRowContext<RowElement, RM>;
    contextProcessing: UseProcessedChildrenContext;
};
/**
 * Helper for `useCompleteGridNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 *
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize
 */
export declare const useCompleteGridNavigationRows: <TabbableChildElement extends Element, M extends UseCompleteGridNavigationRowsInfo<TabbableChildElement>>({ context, paginatedChildrenParameters, rearrangeableChildrenParameters, staggeredChildrenParameters, managedChildrenParameters }: {} & StandardDepsPick<"params", UseProcessedChildren<TabbableChildElement, M>> & StandardDepsContext<UseProcessedChildrenContext, keyof UseProcessedChildrenContext>) => {} & StandardDepsPick<"return", UseRearrangeableChildren<M>, never> & StandardDepsPick<"return", UsePaginatedChildren<TabbableChildElement_1>> & StandardDepsPick<"return", UseStaggeredChildren> & StandardDepsContext<UseProcessedChildContext<TabbableChildElement, M>, keyof UseProcessedChildContext<TabbableChildElement_1, M_1>>;
/**
 * @compositeParams
 */
export declare const useCompleteGridNavigationRow: <RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({ info: { index, untabbable, ...customUserInfo }, context: contextIncomingForRowAsChildOfTable, textContentParameters: { getText, onTextContentChange: otcc1 }, linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, hasCurrentFocusParameters: { onCurrentFocusedChanged: ocfc1, onCurrentFocusedInnerChanged: ocfic3, ...void5 }, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }: {} & StandardDepsInfo<RM, UseCompleteGridNavigationRowInfoKeysParameters<RM>> & StandardDepsContext<CompleteGridNavigationRowContext<RowElement, RM>, keyof CompleteGridNavigationRowContext<RowElement_1, RM_1>> & StandardDepsOmit<"params", UseGridNavigationSelectionRow<RowElement, CellElement>, "refElementReturn" | "managedChildrenReturn", [StandardDepsPick<"params", UseGridNavigationSelectionRow<RowElement, CellElement>, "linearNavigationParameters", "omit", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">, StandardDepsPick<"params", UseGridNavigationSelectionRow<RowElement, CellElement>, "typeaheadNavigationParameters", "omit", "isValidForTypeaheadNavigation">]> & StandardDepsOmit<"params", UseTextContent<RowElement>, "refElementReturn"> & StandardDepsOmit<"params", UseHasCurrentFocus<RowElement>, "refElementReturn">) => {} & StandardDepsOmit<"return", UseGridNavigationSelectionRow<RowElement, CellElement>, "hasCurrentFocusParameters" | "managedChildrenParameters" | "textContentParameters"> & StandardDepsPick<"return", UseHasCurrentFocus<RowElement>> & StandardDepsPick<"return", UseRefElement<RowElement>> & StandardDepsPick<"return", UseTextContent<RowElement_1>> & StandardDepsPick<"return", UseManagedChildren<CM>> & StandardDepsPick<"return", UseManagedChild<RM>> & StandardDepsContext<CompleteGridNavigationCellContext<CellElement, CM>, keyof CompleteGridNavigationCellContext<CellElement_1, CM_1>> & StandardDepsProps<RowElement>;
/**
 * @compositeParams
 */
export declare const useCompleteGridNavigationCell: <CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({ gridNavigationCellParameters, context, textContentParameters: { getText, onTextContentChange: otcc1, ...void4 }, info: { focusSelf, index, untabbable, ...customUserInfo }, ...void1 }: {} & StandardDepsInfo<CM, UseCompleteGridNavigationCellInfoKeysParameters<CM>> & StandardDepsOmit<"params", UseGridNavigationSelectionCell<CellElement>, "refElementReturn"> & StandardDepsOmit<"params", UseTextContent<CellElement>, "refElementReturn"> & StandardDepsContext<CompleteGridNavigationCellContext<CellElement, CM>, keyof CompleteGridNavigationCellContext<CellElement_1, CM_1>>) => {} & StandardDepsOmit<"return", UseGridNavigationSelectionCell<CellElement>, "hasCurrentFocusParameters" | "textContentParameters"> & StandardDepsPick<"return", UseRefElement<CellElement>> & StandardDepsPick<"return", UseHasCurrentFocus<CellElement>> & StandardDepsPick<"return", UseTextContent<CellElement_1>> & StandardDepsPick<"return", UseManagedChild<CM>> & StandardDepsProps<CellElement>;
export interface UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends OmitStrong<MakeSelectionDeclarativeParameters<Parameter<UseCompleteGridNavigation<ParentOrRowElement, RowElement, RM>>>, "singleSelectionReturn"> {
}
export interface UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends TargetedOmit<ReturnType<UseCompleteGridNavigation<ParentOrRowElement, RowElement, RM>>, "singleSelectionReturn", "changeSingleSelectedIndex">, OmitStrong<ReturnType<UseCompleteGridNavigation<ParentOrRowElement, RowElement, RM>>, "singleSelectionReturn"> {
}
export declare function useCompleteGridNavigationDeclarative<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>>({ singleSelectionDeclarativeParameters, singleSelectionParameters, ...normalGridNavParameters }: UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement, RowElement, RM>): UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement, RowElement, RM>;
//# sourceMappingURL=use-grid-navigation-complete.d.ts.map