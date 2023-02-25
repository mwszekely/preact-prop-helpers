import { UseTypeaheadNavigationChildParameters } from "../component-detail/use-typeahead-navigation.js";
import { h } from "preact";
import { UseListNavigationSingleSelectionSortableChildInfo, UseListNavigationSingleSelectionSortableChildParameters, UseListNavigationSingleSelectionSortableChildReturnType, UseListNavigationSingleSelectionSortableParameters, UseListNavigationSingleSelectionSortableReturnType } from "../component-detail/use-list-navigation-single-selection-sortable.js";
import { UsePaginatedChildContext, UsePaginatedChildrenInfo, UsePaginatedChildrenParameters, UsePaginatedChildrenReturnType, UsePaginatedChildReturn } from "../component-detail/use-paginated-children.js";
import { UseSortableChildInfo } from "../component-detail/use-sortable-children.js";
import { UseStaggeredChildContext, UseStaggeredChildrenInfo, UseStaggeredChildrenParameters, UseStaggeredChildrenReturnType, UseStaggeredChildReturn } from "../component-detail/use-staggered-children.js";
import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { UseChildrenHaveFocusChildParameters, UseChildrenHaveFocusReturnType } from "../observers/use-children-have-focus.js";
import { UseHasCurrentFocusReturnType } from "../observers/use-has-current-focus.js";
import { UseManagedChildrenContext, UseManagedChildrenReturnType, UseManagedChildReturnType } from "../preact-extensions/use-managed-children.js";
type OmitStrong<T, K extends keyof T> = Omit<T, K>;
export interface UseCompleteListNavigationChildInfo<ChildElement extends Element> extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>, UsePaginatedChildrenInfo<ChildElement>, UseStaggeredChildrenInfo<ChildElement> {
}
export interface UseCompleteListNavigationParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends Pick<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>, "singleSelectionParameters"> {
    linearNavigationParameters: OmitStrong<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["linearNavigationParameters"], "getHighestIndex" | "isValid">;
    typeaheadNavigationParameters: OmitStrong<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["typeaheadNavigationParameters"], "isValid">;
    rearrangeableChildrenParameters: OmitStrong<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["rearrangeableChildrenParameters"], "onRearranged">;
    sortableChildrenParameters: UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["sortableChildrenParameters"];
    rovingTabIndexParameters: OmitStrong<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["rovingTabIndexParameters"], "initiallyTabbedIndex">;
    paginatedChildrenParameters: Pick<UsePaginatedChildrenParameters<ChildElement, M>, "paginatedChildrenParameters">["paginatedChildrenParameters"];
    staggeredChildrenParameters: Pick<UseStaggeredChildrenParameters<ChildElement, M>, "staggeredChildrenParameters">["staggeredChildrenParameters"];
}
export interface UseCompleteListNavigationReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends Pick<UsePaginatedChildrenReturnType, "paginatedChildrenReturn">, Pick<UseStaggeredChildrenReturnType, "staggeredChildrenReturn">, Pick<UseListNavigationSingleSelectionSortableReturnType<ParentElement, ChildElement, M>, "rovingTabIndexReturn" | "singleSelectionReturn" | "linearNavigationReturn" | "typeaheadNavigationReturn" | "rearrangeableChildrenReturn" | "sortableChildrenReturn"> {
    props: h.JSX.HTMLAttributes<ParentElement>;
    context: CompleteListNavigationContext<ParentElement, ChildElement, M>;
    managedChildrenReturn: UseManagedChildrenReturnType<M>["managedChildrenReturn"];
    childrenHaveFocusReturn: UseChildrenHaveFocusReturnType<ChildElement>["childrenHaveFocusReturn"];
}
export interface CompleteListNavigationContext<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends UseManagedChildrenContext<M>, UsePaginatedChildContext, UseStaggeredChildContext, Pick<UseChildrenHaveFocusReturnType<ChildElement>, "childrenHaveFocusChildContext">, Pick<UseTypeaheadNavigationChildParameters<ChildElement>, "typeaheadNavigationChildContext">, Pick<UseListNavigationSingleSelectionSortableReturnType<ParentElement, ChildElement, M>, "singleSelectionContext" | "rovingTabIndexChildContext" | "typeaheadNavigationChildContext"> {
    childrenHaveFocusChildContext: UseChildrenHaveFocusChildParameters<ChildElement>["childrenHaveFocusChildContext"];
}
/**
 * All the list-related hooks combined into one giant hook that encapsulates everything.
 *
 * Unlike most others, this hook assume's it's the final one--the "outermost" hook in the component--so it uses `useManagedChildren` and wraps everything up nicely,
 * combining event handlers that are used in multiple sub-hooks, collecting all the necessary context-related data, and merging all known DOM props together.
 *
 *
 *
 * @returns
 */
export declare function useCompleteListNavigation<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ linearNavigationParameters, rearrangeableChildrenParameters, sortableChildrenParameters, typeaheadNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, paginatedChildrenParameters, staggeredChildrenParameters, ...completeListNavigationParameters }: UseCompleteListNavigationParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>;
export interface UseCompleteListNavigationChildParameters<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>, ExtraOmits extends keyof M> {
    context: CompleteListNavigationContext<any, ChildElement, M>;
    singleSelectionChildParameters: UseListNavigationSingleSelectionSortableChildParameters<ChildElement>["singleSelectionChildParameters"];
    textContentParameters: OmitStrong<UseListNavigationSingleSelectionSortableChildParameters<ChildElement>["textContentParameters"], "hidden">;
    completeListNavigationChildParameters: OmitStrong<M, keyof UseCompleteListNavigationChildInfo<ChildElement> | ExtraOmits> & Pick<M, "focusSelf">;
    rovingTabIndexChildParameters: UseListNavigationSingleSelectionSortableChildParameters<ChildElement>["rovingTabIndexChildParameters"];
    managedChildParameters: UseListNavigationSingleSelectionSortableChildParameters<ChildElement>["managedChildParameters"];
    sortableChildParameters: Pick<UseSortableChildInfo, "getSortValue">;
}
export interface UseCompleteListNavigationChildReturnType<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends Pick<UseListNavigationSingleSelectionSortableChildReturnType<ChildElement>, "singleSelectionChildReturn" | "rovingTabIndexChildReturn" | "pressParameters">, UseRefElementReturnType<ChildElement> {
    hasCurrentFocusReturn: UseHasCurrentFocusReturnType<ChildElement>["hasCurrentFocusReturn"];
    managedChildReturn: UseManagedChildReturnType<M>["managedChildReturn"];
    props: h.JSX.HTMLAttributes<ChildElement>;
    paginatedChildReturn: UsePaginatedChildReturn<ChildElement>["paginatedChildReturn"];
    staggeredChildReturn: UseStaggeredChildReturn<ChildElement>["staggeredChildReturn"];
}
export declare function useCompleteListNavigationChild<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>, ExtraOmits extends Exclude<keyof M, keyof UseListNavigationSingleSelectionSortableChildInfo<ChildElement>>>({ completeListNavigationChildParameters: { focusSelf, ...completeListNavigationChildParameters }, singleSelectionChildParameters, rovingTabIndexChildParameters: { hidden }, managedChildParameters, textContentParameters, context: { childrenHaveFocusChildContext, managedChildContext, rovingTabIndexChildContext, singleSelectionContext, typeaheadNavigationChildContext, paginatedChildContext, staggeredChildContext }, sortableChildParameters: { getSortValue }, ..._void }: UseCompleteListNavigationChildParameters<ChildElement, M, ExtraOmits>): UseCompleteListNavigationChildReturnType<ChildElement, M>;
export {};
//# sourceMappingURL=use-list-navigation-complete.d.ts.map