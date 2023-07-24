import { UseGridNavigationCellContext, UseGridNavigationRowContext } from "../component-detail/keyboard-navigation/use-grid-navigation-partial.js";
import { GridSingleSelectSortableChildCellInfo, GridSingleSelectSortableChildRowInfo, UseGridNavigationSingleSelectionSortableCellReturnType, UseGridNavigationSingleSelectionSortableParameters, UseGridNavigationSingleSelectionSortableReturnType, UseGridNavigationSingleSelectionSortableRowParameters, UseGridNavigationSingleSelectionSortableRowReturnType } from "../component-detail/keyboard-navigation/use-grid-navigation-single-selection-sortable.js";
import { UseGridNavigationSingleSelectionCellParameters, UseGridNavigationSingleSelectionParameters } from "../component-detail/keyboard-navigation/use-grid-navigation-single-selection.js";
import { RovingTabIndexChildContext } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { MakeSingleSelectionDeclarativeParameters, UseSingleSelectionContext } from "../component-detail/keyboard-navigation/use-single-selection.js";
import { UseTypeaheadNavigationContext } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { UsePaginatedChildContext, UsePaginatedChildReturnType, UsePaginatedChildrenInfo, UsePaginatedChildrenParameters, UsePaginatedChildrenReturnType } from "../component-detail/use-paginated-children.js";
import { UseStaggeredChildContext, UseStaggeredChildReturnType, UseStaggeredChildrenInfo, UseStaggeredChildrenParameters, UseStaggeredChildrenReturnType } from "../component-detail/use-staggered-children.js";
import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { UseChildrenHaveFocusContext, UseChildrenHaveFocusReturnType } from "../observers/use-children-have-focus.js";
import { UseHasCurrentFocusReturnType } from "../observers/use-has-current-focus.js";
import { UseManagedChildReturnType, UseManagedChildrenContext, UseManagedChildrenReturnType } from "../preact-extensions/use-managed-children.js";
import { TargetedOmit } from "../util/lib.js";
import { ElementProps, OmitStrong } from "../util/types.js";
export interface UseCompleteGridNavigationRowInfo<RowElement extends Element, CellElement extends Element> extends GridSingleSelectSortableChildRowInfo<RowElement, CellElement>, UsePaginatedChildrenInfo<RowElement>, UseStaggeredChildrenInfo<RowElement> {
}
export interface UseCompleteGridNavigationCellInfo<CellElement extends Element> extends GridSingleSelectSortableChildCellInfo<CellElement> {
}
export interface UseCompleteGridNavigationParameters<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, M extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>> extends OmitStrong<UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, CellElement, M>, "refElementReturn" | "managedChildrenReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters" | "rearrangeableChildrenParameters" | "rovingTabIndexParameters">, TargetedOmit<UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, CellElement, M>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "indexMangler" | "indexDemangler" | "isValid">, TargetedOmit<UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, CellElement, M>, "typeaheadNavigationParameters", "isValid">, TargetedOmit<UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, CellElement, M>, "rearrangeableChildrenParameters", "onRearranged">, TargetedOmit<UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, CellElement, M>, "rovingTabIndexParameters", "initiallyTabbedIndex" | "untabbableBehavior">, Pick<UsePaginatedChildrenParameters<ParentOrRowElement, RowElement, M>, "paginatedChildrenParameters">, Pick<UseStaggeredChildrenParameters<RowElement, M>, "staggeredChildrenParameters"> {
}
type S = "getSortValue" | "index" | "untabbable" | "unselectable";
export interface UseCompleteGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends OmitStrong<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM, S>, "context" | "textContentParameters" | "managedChildrenReturn" | "refElementReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters">, TargetedOmit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM, S>, "textContentParameters", never>, TargetedOmit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM, S>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "pageNavigationSize" | "isValid" | "indexMangler" | "indexDemangler">, TargetedOmit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM, S>, "typeaheadNavigationParameters", "isValid"> {
    context: CompleteGridNavigationRowContext<any, RowElement, CellElement, RM, CM>;
}
export interface UseCompleteGridNavigationCellParameters<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends OmitStrong<UseGridNavigationSingleSelectionCellParameters<any, CellElement, CM, "index" | "untabbable" | "focusSelf">, "context" | "refElementReturn"> {
    context: CompleteGridNavigationCellContext<any, CellElement, CM>;
}
export interface CompleteGridNavigationRowContext<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, _CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends UseManagedChildrenContext<RM>, UsePaginatedChildContext, UseStaggeredChildContext, UseChildrenHaveFocusContext<RowElement>, UseTypeaheadNavigationContext, UseSingleSelectionContext, RovingTabIndexChildContext, UseGridNavigationRowContext {
}
export interface CompleteGridNavigationCellContext<ParentElement extends Element, ChildElement extends Element, CM extends UseCompleteGridNavigationCellInfo<ChildElement>> extends UseManagedChildrenContext<CM>, UseTypeaheadNavigationContext, RovingTabIndexChildContext, UseGridNavigationCellContext {
}
export interface UseCompleteGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends Pick<UsePaginatedChildrenReturnType, "paginatedChildrenReturn">, Pick<UseStaggeredChildrenReturnType, "staggeredChildrenReturn">, Pick<UseManagedChildrenReturnType<RM>, "managedChildrenReturn">, Pick<UseChildrenHaveFocusReturnType<RowElement>, "childrenHaveFocusReturn">, OmitStrong<UseGridNavigationSingleSelectionSortableReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, "propsStableParentOrChild" | "propsParent" | "context" | "childrenHaveFocusParameters" | "managedChildrenParameters"> {
    context: CompleteGridNavigationRowContext<ParentOrRowElement, RowElement, CellElement, RM, CM>;
    props: ElementProps<ParentOrRowElement>;
}
export interface UseCompleteGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends OmitStrong<UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement, RM, CM>, "hasCurrentFocusParameters" | "context" | "managedChildrenParameters" | "info" | "textContentReturn">, Pick<UseManagedChildrenReturnType<CM>, "managedChildrenReturn">, Pick<UseHasCurrentFocusReturnType<RowElement>, "hasCurrentFocusReturn">, Pick<UseManagedChildReturnType<RM>, "managedChildReturn">, Pick<UsePaginatedChildReturnType<RowElement>, "paginatedChildReturn">, Pick<UseStaggeredChildReturnType<RowElement>, "staggeredChildReturn">, Pick<UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement, RM, CM>, "textContentReturn"> {
    context: CompleteGridNavigationCellContext<RowElement, CellElement, CM>;
}
export interface UseCompleteGridNavigationCellReturnType<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends OmitStrong<UseGridNavigationSingleSelectionSortableCellReturnType<CellElement, CM>, "hasCurrentFocusParameters" | "info">, OmitStrong<UseRefElementReturnType<CellElement>, "propsStable">, UseHasCurrentFocusReturnType<CellElement>, UseManagedChildReturnType<CM> {
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
export declare function useCompleteGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, typeaheadNavigationParameters, sortableChildrenParameters, rearrangeableChildrenParameters, paginatedChildrenParameters, staggeredChildrenParameters, ...void1 }: UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, RM>): UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>;
/**
 * @compositeParams
 */
export declare function useCompleteGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({ info, context: contextIncomingForRowAsChildOfTable, textContentParameters, linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, ...void1 }: UseCompleteGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM>;
/**
 * @compositeParams
 */
export declare function useCompleteGridNavigationCell<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({ gridNavigationCellParameters, context: { gridNavigationCellContext, managedChildContext, rovingTabIndexContext, typeaheadNavigationContext }, textContentParameters, info: { focusSelf, index, untabbable, ...info }, ...void1 }: UseCompleteGridNavigationCellParameters<CellElement, CM>): UseCompleteGridNavigationCellReturnType<CellElement, CM>;
export interface UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends OmitStrong<MakeSingleSelectionDeclarativeParameters<UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, RM>>, "singleSelectionReturn"> {
}
export interface UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends TargetedOmit<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, "singleSelectionReturn", "changeSelectedIndex">, OmitStrong<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, "singleSelectionReturn"> {
}
export declare function useCompleteGridNavigationDeclarative<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({ gridNavigationParameters, linearNavigationParameters, paginatedChildrenParameters, rearrangeableChildrenParameters, rovingTabIndexParameters, singleSelectionDeclarativeParameters, sortableChildrenParameters, staggeredChildrenParameters, typeaheadNavigationParameters, singleSelectionParameters, }: UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement, RowElement, CellElement, RM, CM>): UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>;
export {};
//# sourceMappingURL=use-grid-navigation-complete.d.ts.map