import { UseListNavigationSingleSelectionSortableChildInfo, UseListNavigationSingleSelectionSortableChildParameters, UseListNavigationSingleSelectionSortableChildReturnType, UseListNavigationSingleSelectionSortableParameters, UseListNavigationSingleSelectionSortableReturnType } from "../component-detail/keyboard-navigation/use-list-navigation-single-selection-sortable.js";
import { RovingTabIndexChildContext } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { MakeSingleSelectionDeclarativeParameters, UseSingleSelectionContext, UseSingleSelectionParameters } from "../component-detail/keyboard-navigation/use-single-selection.js";
import { UseTypeaheadNavigationContext } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { UsePaginatedChildContext, UsePaginatedChildrenInfo, UsePaginatedChildrenParameters, UsePaginatedChildrenReturnType, UsePaginatedChildReturn } from "../component-detail/use-paginated-children.js";
import { UseStaggeredChildContext, UseStaggeredChildrenInfo, UseStaggeredChildrenParameters, UseStaggeredChildrenReturnType, UseStaggeredChildReturn } from "../component-detail/use-staggered-children.js";
import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { UseChildrenHaveFocusContext, UseChildrenHaveFocusReturnType } from "../observers/use-children-have-focus.js";
import { UseHasCurrentFocusReturnType } from "../observers/use-has-current-focus.js";
import { UseManagedChildrenContext, UseManagedChildrenReturnType, UseManagedChildReturnType } from "../preact-extensions/use-managed-children.js";
import { TargetedOmit } from "../util/lib.js";
import { ElementProps, ExtendMerge, OmitStrong } from "../util/types.js";
import { UsePressParameters } from "./use-press.js";
export interface UseCompleteListNavigationChildInfo<ChildElement extends Element> extends ExtendMerge<UseListNavigationSingleSelectionSortableChildInfo<ChildElement>, ExtendMerge<UsePaginatedChildrenInfo<ChildElement>, UseStaggeredChildrenInfo<ChildElement>>> {
}
export interface UseCompleteListNavigationParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends Pick<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>, "singleSelectionParameters" | "sortableChildrenParameters">, Pick<UsePaginatedChildrenParameters<ParentElement, ChildElement, M>, "paginatedChildrenParameters">, Pick<UseStaggeredChildrenParameters<ChildElement, M>, "staggeredChildrenParameters">, TargetedOmit<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "isValid">, TargetedOmit<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>, "typeaheadNavigationParameters", "isValid">, TargetedOmit<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>, "rearrangeableChildrenParameters", "onRearranged">, TargetedOmit<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>, "rovingTabIndexParameters", "initiallyTabbedIndex" | "untabbableBehavior"> {
}
export interface UseCompleteListNavigationReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends Pick<UsePaginatedChildrenReturnType, "paginatedChildrenReturn">, Pick<UseStaggeredChildrenReturnType, "staggeredChildrenReturn">, Pick<UseManagedChildrenReturnType<M>, "managedChildrenReturn">, Pick<UseChildrenHaveFocusReturnType<ChildElement>, "childrenHaveFocusReturn">, OmitStrong<UseListNavigationSingleSelectionSortableReturnType<ParentElement, ChildElement, M>, "propsStableParentOrChild" | "propsParent" | "context" | "childrenHaveFocusParameters" | "managedChildrenParameters"> {
    props: ElementProps<ParentElement>;
    context: CompleteListNavigationContext<ParentElement, ChildElement, M>;
}
export interface CompleteListNavigationContext<_ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends UseManagedChildrenContext<M>, UsePaginatedChildContext, UseStaggeredChildContext, UseChildrenHaveFocusContext<ChildElement>, UseTypeaheadNavigationContext, UseSingleSelectionContext, RovingTabIndexChildContext {
}
export interface UseCompleteListNavigationChildParameters<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends Pick<UseListNavigationSingleSelectionSortableChildParameters<ChildElement, M>, "textContentParameters"> {
    context: CompleteListNavigationContext<any, ChildElement, M>;
    info: Omit<M, Exclude<keyof UseCompleteListNavigationChildInfo<ChildElement>, "getSortValue" | "index" | "focusSelf" | "untabbable" | "unselectable">>;
}
export interface UseCompleteListNavigationChildReturnType<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends Pick<UseListNavigationSingleSelectionSortableChildReturnType<ChildElement, M>, "textContentReturn" | "rovingTabIndexChildReturn" | "singleSelectionChildReturn">, OmitStrong<UseRefElementReturnType<ChildElement>, "propsStable"> {
    hasCurrentFocusReturn: UseHasCurrentFocusReturnType<ChildElement>["hasCurrentFocusReturn"];
    managedChildReturn: UseManagedChildReturnType<M>["managedChildReturn"];
    /**
     * These props should be passed to whichever element is tabbable.
     * This may be the same element as `propsChild`, in which case `useMergedProps` is recommended.
     *
     * @see propsChild
     */
    propsTabbable: ElementProps<any>;
    /**
     * These props should be passed to whichever element is considered the child element of the list (e.g. the `li` in an `ol`).
     * This may be the same element as `propsChild`, in which case `useMergedProps` is recommended.
     * But it may also be different, e.g. if that `li` contains an `input`.
     *
     * @see propsTabbable
     */
    propsChild: ElementProps<any>;
    /**
     * This hook does not include `usePress`, so when you call it for whatever element is responsible for selecting this child, pass it these parameters.
     */
    pressParameters: Pick<UsePressParameters<any>["pressParameters"], "onPressSync" | "excludeSpace">;
    paginatedChildReturn: UsePaginatedChildReturn<ChildElement>["paginatedChildReturn"];
    staggeredChildReturn: UseStaggeredChildReturn<ChildElement>["staggeredChildReturn"];
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
export declare function useCompleteListNavigationChild<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ info: { index, focusSelf, unselectable, untabbable, getSortValue, ...info }, // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
textContentParameters, context: { childrenHaveFocusChildContext, managedChildContext, rovingTabIndexContext, paginatedChildContext, staggeredChildContext, singleSelectionContext, typeaheadNavigationContext }, ...void1 }: UseCompleteListNavigationChildParameters<ChildElement, M>): UseCompleteListNavigationChildReturnType<ChildElement, M>;
export interface UseCompleteListNavigationDeclarativeParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends OmitStrong<MakeSingleSelectionDeclarativeParameters<UseCompleteListNavigationParameters<ParentElement, ChildElement, M>>, "singleSelectionParameters" | "singleSelectionReturn">, TargetedOmit<UseSingleSelectionParameters<ParentElement, ChildElement, M>, "singleSelectionParameters", "initiallySelectedIndex" | "onSelectedIndexChange"> {
}
export interface UseCompleteListNavigationDeclarativeReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends TargetedOmit<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, "singleSelectionReturn", "changeSelectedIndex">, OmitStrong<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, "singleSelectionReturn"> {
}
export declare function useCompleteListNavigationDeclarative<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ linearNavigationParameters, paginatedChildrenParameters, rearrangeableChildrenParameters, rovingTabIndexParameters, singleSelectionDeclarativeParameters, sortableChildrenParameters, staggeredChildrenParameters, typeaheadNavigationParameters, singleSelectionParameters }: UseCompleteListNavigationDeclarativeParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationDeclarativeReturnType<ParentElement, ChildElement, M>;
//# sourceMappingURL=use-list-navigation-complete.d.ts.map