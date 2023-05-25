import { UseListNavigationSingleSelectionSortableChildInfo, UseListNavigationSingleSelectionSortableChildParameters, UseListNavigationSingleSelectionSortableChildReturnType, UseListNavigationSingleSelectionSortableParameters, UseListNavigationSingleSelectionSortableReturnType } from "../component-detail/keyboard-navigation/use-list-navigation-single-selection-sortable.js";
import { RovingTabIndexChildContext, UseRovingTabIndexChildParameters } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { MakeSingleSelectionDeclarativeParameters, UseSingleSelectionChildParameters, UseSingleSelectionContext, UseSingleSelectionParameters } from "../component-detail/keyboard-navigation/use-single-selection.js";
import { UseSortableChildInfo } from "../component-detail/keyboard-navigation/use-sortable-children.js";
import { UseTypeaheadNavigationContext } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { UsePaginatedChildContext, UsePaginatedChildrenInfo, UsePaginatedChildrenParameters, UsePaginatedChildrenReturnType, UsePaginatedChildReturn } from "../component-detail/use-paginated-children.js";
import { UseStaggeredChildContext, UseStaggeredChildrenInfo, UseStaggeredChildrenParameters, UseStaggeredChildrenReturnType, UseStaggeredChildReturn } from "../component-detail/use-staggered-children.js";
import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { UseChildrenHaveFocusContext, UseChildrenHaveFocusReturnType } from "../observers/use-children-have-focus.js";
import { UseHasCurrentFocusReturnType } from "../observers/use-has-current-focus.js";
import { UseManagedChildrenContext, UseManagedChildrenReturnType, UseManagedChildReturnType } from "../preact-extensions/use-managed-children.js";
import { ElementProps, ExtendMerge, OmitStrong, OmitTargeted, PickTargeted } from "../util/types.js";
import { UsePressParameters, UsePressReturnType } from "./use-press.js";
export interface UseCompleteListNavigationChildInfo<ChildElement extends Element> extends ExtendMerge<UseListNavigationSingleSelectionSortableChildInfo<ChildElement>, ExtendMerge<UsePaginatedChildrenInfo<ChildElement>, UseStaggeredChildrenInfo<ChildElement>>> {
}
export interface UseCompleteListNavigationParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends Pick<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>, "singleSelectionParameters">, PickTargeted<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>, "linearNavigationParameters", "getHighestIndex" | "isValid"> {
    linearNavigationParameters: OmitStrong<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["linearNavigationParameters"], "getHighestIndex" | "isValid">;
    typeaheadNavigationParameters: OmitStrong<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["typeaheadNavigationParameters"], "isValid">;
    rearrangeableChildrenParameters: OmitStrong<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["rearrangeableChildrenParameters"], "onRearranged">;
    sortableChildrenParameters: UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["sortableChildrenParameters"];
    rovingTabIndexParameters: OmitStrong<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["rovingTabIndexParameters"], "initiallyTabbedIndex">;
    paginatedChildrenParameters: Pick<UsePaginatedChildrenParameters<ParentElement, ChildElement, M>, "paginatedChildrenParameters">["paginatedChildrenParameters"];
    staggeredChildrenParameters: Pick<UseStaggeredChildrenParameters<ChildElement, M>, "staggeredChildrenParameters">["staggeredChildrenParameters"];
}
export interface UseCompleteListNavigationReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends Pick<UsePaginatedChildrenReturnType, "paginatedChildrenReturn">, Pick<UseStaggeredChildrenReturnType, "staggeredChildrenReturn">, OmitStrong<UseListNavigationSingleSelectionSortableReturnType<ParentElement, ChildElement, M>, "propsStableParentOrChild" | "propsParent" | "context" | "childrenHaveFocusParameters" | "managedChildrenParameters"> {
    props: ElementProps<ParentElement>;
    context: CompleteListNavigationContext<ParentElement, ChildElement, M>;
    managedChildrenReturn: UseManagedChildrenReturnType<M>["managedChildrenReturn"];
    childrenHaveFocusReturn: UseChildrenHaveFocusReturnType<ChildElement>["childrenHaveFocusReturn"];
}
export interface CompleteListNavigationContext<_ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends UseManagedChildrenContext<M>, UsePaginatedChildContext, UseStaggeredChildContext, UseChildrenHaveFocusContext<ChildElement>, UseTypeaheadNavigationContext, UseSingleSelectionContext, RovingTabIndexChildContext {
}
export interface UseCompleteListNavigationChildParameters<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> {
    context: CompleteListNavigationContext<any, ChildElement, M>;
    /**
     * **NOTE**: Unusually, the press parameters are entirely optional.
     *
     * Pass `null` as the entire `pressParameters` object to disable default press behavior entirely.
     */
    pressParameters: OmitStrong<UsePressParameters<any>["pressParameters"], "excludeSpace"> | null;
    textContentParameters: OmitStrong<UseListNavigationSingleSelectionSortableChildParameters<ChildElement, M>["textContentParameters"], never>;
    info: Omit<M, Exclude<keyof UseCompleteListNavigationChildInfo<ChildElement>, "index" | "focusSelf" | "untabbable" | "unselectable">>;
    sortableChildParameters: Pick<UseSortableChildInfo, "getSortValue">;
    rovingTabIndexParameters: UseRovingTabIndexChildParameters<any, any>["rovingTabIndexParameters"];
    singleSelectionParameters: UseSingleSelectionChildParameters<any, any>["singleSelectionParameters"];
}
export interface UseCompleteListNavigationChildReturnType<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends Pick<UsePressReturnType<any>, "pressReturn">, Pick<UseListNavigationSingleSelectionSortableChildReturnType<ChildElement, M>, "textContentReturn" | "rovingTabIndexChildReturn" | "singleSelectionChildReturn">, OmitStrong<UseRefElementReturnType<ChildElement>, "propsStable"> {
    hasCurrentFocusReturn: UseHasCurrentFocusReturnType<ChildElement>["hasCurrentFocusReturn"];
    managedChildReturn: UseManagedChildReturnType<M>["managedChildReturn"];
    props: ElementProps<ChildElement>;
    /**
     * Spread these props onto whatever element is the "clickable" part of this list item.
     *
     * **Optional**, as it's entirely possible that this list item isn't selected with a simple press but some more complicated process, like in a grid list.
     *
     * */
    propsPressStable: ElementProps<any>;
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
export declare function useCompleteListNavigationChild<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ info, textContentParameters, context: { childrenHaveFocusChildContext, managedChildContext, rovingTabIndexContext, paginatedChildContext, staggeredChildContext, singleSelectionContext, typeaheadNavigationContext }, sortableChildParameters, pressParameters, rovingTabIndexParameters, singleSelectionParameters, ...void1 }: UseCompleteListNavigationChildParameters<ChildElement, M>): UseCompleteListNavigationChildReturnType<ChildElement, M>;
export interface UseCompleteListNavigationDeclarativeParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends OmitStrong<MakeSingleSelectionDeclarativeParameters<UseCompleteListNavigationParameters<ParentElement, ChildElement, M>>, "singleSelectionParameters" | "singleSelectionReturn"> {
    singleSelectionParameters: OmitStrong<UseSingleSelectionParameters<ParentElement, ChildElement, M>["singleSelectionParameters"], "initiallySelectedIndex" | "onSelectedIndexChange">;
}
export interface UseCompleteListNavigationDeclarativeReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends OmitTargeted<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, "singleSelectionReturn", "changeSelectedIndex"> {
}
export declare function useCompleteListNavigationDeclarative<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ linearNavigationParameters, paginatedChildrenParameters, rearrangeableChildrenParameters, rovingTabIndexParameters, singleSelectionDeclarativeParameters, sortableChildrenParameters, staggeredChildrenParameters, typeaheadNavigationParameters, singleSelectionParameters }: UseCompleteListNavigationDeclarativeParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationDeclarativeReturnType<ParentElement, ChildElement, M>;
//# sourceMappingURL=use-list-navigation-complete.d.ts.map