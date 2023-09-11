import { UseListNavigationSelectionSortableChildInfo, UseListNavigationSelectionSortableChildInfoKeysParameters, UseListNavigationSelectionSortableChildParameters, UseListNavigationSelectionSortableChildReturnType, UseListNavigationSelectionSortableParameters, UseListNavigationSelectionSortableReturnType } from "../component-detail/keyboard-navigation/use-list-navigation-selection-sortable.js";
import { RovingTabIndexChildContext } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { UseTypeaheadNavigationContext } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { UsePaginatedChildContext, UsePaginatedChildrenInfo, UsePaginatedChildrenParameters, UsePaginatedChildrenReturnType, UsePaginatedChildReturnType } from "../component-detail/use-paginated-children.js";
import { MakeSelectionDeclarativeChildParameters, MakeSelectionDeclarativeParameters, UseSelectionChildParameters, UseSelectionContext, UseSelectionParameters } from "../component-detail/use-selection.js";
import { UseStaggeredChildContext, UseStaggeredChildrenInfo, UseStaggeredChildrenParameters, UseStaggeredChildrenReturnType, UseStaggeredChildReturnType } from "../component-detail/use-staggered-children.js";
import { UseRefElementParameters, UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { UseChildrenHaveFocusContext, UseChildrenHaveFocusReturnType } from "../observers/use-children-have-focus.js";
import { UseHasCurrentFocusParameters, UseHasCurrentFocusReturnType } from "../observers/use-has-current-focus.js";
import { ManagedChildInfo, UseGenericChildParameters, UseManagedChildrenContext, UseManagedChildrenReturnType, UseManagedChildReturnType } from "../preact-extensions/use-managed-children.js";
import { TargetedOmit, TargetedPick } from "../util/lib.js";
import { ElementProps, OmitStrong } from "../util/types.js";
import { UsePressParameters } from "./use-press.js";
export interface UseCompleteListNavigationChildInfo<ChildElement extends Element> extends UseListNavigationSelectionSortableChildInfo<ChildElement>, UsePaginatedChildrenInfo<ChildElement>, UseStaggeredChildrenInfo, ManagedChildInfo<number> {
}
export interface UseCompleteListNavigationParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends Pick<UseListNavigationSelectionSortableParameters<ParentElement, ChildElement, M>, "singleSelectionParameters" | "multiSelectionParameters" | "sortableChildrenParameters">, Pick<UsePaginatedChildrenParameters<ParentElement, ChildElement>, "paginatedChildrenParameters">, Pick<UseStaggeredChildrenParameters, "staggeredChildrenParameters">, Pick<UseRefElementParameters<ParentElement>, "refElementParameters">, TargetedOmit<UseListNavigationSelectionSortableParameters<ParentElement, ChildElement, M>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">, TargetedOmit<UseListNavigationSelectionSortableParameters<ParentElement, ChildElement, M>, "typeaheadNavigationParameters", "isValidForTypeaheadNavigation">, TargetedOmit<UseListNavigationSelectionSortableParameters<ParentElement, ChildElement, M>, "rearrangeableChildrenParameters", "onRearranged">, TargetedOmit<UseListNavigationSelectionSortableParameters<ParentElement, ChildElement, M>, "rovingTabIndexParameters", "untabbableBehavior"> {
}
export interface UseCompleteListNavigationReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends Pick<UsePaginatedChildrenReturnType, "paginatedChildrenReturn">, Pick<UseStaggeredChildrenReturnType, "staggeredChildrenReturn">, Pick<UseManagedChildrenReturnType<M>, "managedChildrenReturn">, Pick<UseChildrenHaveFocusReturnType<ChildElement>, "childrenHaveFocusReturn">, OmitStrong<UseListNavigationSelectionSortableReturnType<ParentElement, ChildElement, M>, "context" | "childrenHaveFocusParameters" | "managedChildrenParameters"> {
    props: ElementProps<ParentElement>;
    context: CompleteListNavigationContext<ChildElement, M>;
}
export interface CompleteListNavigationContext<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends UseManagedChildrenContext<M>, UsePaginatedChildContext, UseStaggeredChildContext, UseChildrenHaveFocusContext<ChildElement>, UseTypeaheadNavigationContext, UseSelectionContext, RovingTabIndexChildContext {
}
export type UseCompleteListNavigationChildInfoKeysParameters<M extends UseCompleteListNavigationChildInfo<any>> = Exclude<keyof M, keyof UseCompleteListNavigationChildInfo<any>> | UseListNavigationSelectionSortableChildInfoKeysParameters | "getSortValue" | "focusSelf";
export interface UseCompleteListNavigationChildParameters<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends UseGenericChildParameters<CompleteListNavigationContext<ChildElement, M>, Pick<M, UseCompleteListNavigationChildInfoKeysParameters<M>>>, OmitStrong<UseListNavigationSelectionSortableChildParameters<ChildElement, M>, "context" | "info" | "refElementReturn">, Pick<UseRefElementParameters<ChildElement>, "refElementParameters">, Pick<UseHasCurrentFocusParameters<ChildElement>, "hasCurrentFocusParameters"> {
}
export interface UseCompleteListNavigationChildReturnType<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends OmitStrong<UseListNavigationSelectionSortableChildReturnType<ChildElement, M>, "info" | "propsChild" | "propsTabbable" | "hasCurrentFocusParameters" | "pressParameters">, OmitStrong<UsePaginatedChildReturnType<ChildElement>, "info" | "props">, OmitStrong<UseStaggeredChildReturnType<ChildElement>, "info" | "props">, OmitStrong<UseRefElementReturnType<ChildElement>, "propsStable">, UseHasCurrentFocusReturnType<ChildElement>, UseManagedChildReturnType<M>, TargetedPick<UsePressParameters<any>, "pressParameters", "onPressSync" | "excludeSpace"> {
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
}
/**
 * All the list-related hooks combined into one large hook that encapsulates everything.
 *
 * @remarks Unlike most others, this hook assume's it's the final one--the "outermost" hook in the component--so it uses `useManagedChildren` and wraps everything up nicely,
 * combining event handlers that are used in multiple sub-hooks, collecting all the necessary context-related data, and merging all known DOM props together.
 *
 * @hasChild {@link useCompleteListNavigationChild}
 *
 * @compositeParams
 */
export declare const useCompleteListNavigation: <ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ linearNavigationParameters, rearrangeableChildrenParameters, sortableChildrenParameters, typeaheadNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, paginatedChildrenParameters, staggeredChildrenParameters, refElementParameters, ...void1 }: UseCompleteListNavigationParameters<ParentElement, ChildElement, M>) => UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>;
/**
 *
 * @compositeParams
 */
export declare const useCompleteListNavigationChild: <ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ info: { index, focusSelf, untabbable, getSortValue, ...customUserInfo }, textContentParameters, refElementParameters, hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged: ocfic3, ...void7 }, singleSelectionChildParameters, multiSelectionChildParameters, context: { managedChildContext, rovingTabIndexContext, paginatedChildContext, staggeredChildContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext, childrenHaveFocusChildContext, ...void5 }, ...void1 }: UseCompleteListNavigationChildParameters<ChildElement, M>) => UseCompleteListNavigationChildReturnType<ChildElement, M>;
export interface UseCompleteListNavigationDeclarativeParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends OmitStrong<MakeSelectionDeclarativeParameters<UseCompleteListNavigationParameters<ParentElement, ChildElement, M>>, "singleSelectionParameters" | "singleSelectionReturn">, TargetedOmit<UseSelectionParameters<ParentElement, ChildElement, M>, "singleSelectionParameters", "initiallySingleSelectedIndex" | "onSingleSelectedIndexChange"> {
}
export interface UseCompleteListNavigationDeclarativeReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends TargetedOmit<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, "singleSelectionReturn", "changeSingleSelectedIndex">, TargetedOmit<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, "multiSelectionReturn", never>, OmitStrong<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, "singleSelectionReturn" | "multiSelectionReturn"> {
}
export interface UseCompleteListNavigationChildDeclarativeParameters<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends OmitStrong<MakeSelectionDeclarativeChildParameters<UseCompleteListNavigationChildParameters<ChildElement, M>>, "multiSelectionChildParameters" | "multiSelectionChildReturn">, TargetedOmit<UseSelectionChildParameters<ChildElement, M>, "multiSelectionChildParameters", "initiallyMultiSelected" | "onMultiSelectChange"> {
}
export interface UseCompleteListNavigationChildDeclarativeReturnType<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends TargetedOmit<UseCompleteListNavigationChildReturnType<ChildElement, M>, "singleSelectionChildReturn", never>, TargetedOmit<UseCompleteListNavigationChildReturnType<ChildElement, M>, "multiSelectionChildReturn", "changeMultiSelected">, OmitStrong<UseCompleteListNavigationChildReturnType<ChildElement, M>, "singleSelectionChildReturn" | "multiSelectionChildReturn"> {
}
export declare function useCompleteListNavigationDeclarative<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ singleSelectionParameters, singleSelectionDeclarativeParameters, ...rest }: UseCompleteListNavigationDeclarativeParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationDeclarativeReturnType<ParentElement, ChildElement, M>;
export declare function useCompleteListNavigationChildDeclarative<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ multiSelectionChildParameters, multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange }, ...rest }: UseCompleteListNavigationChildDeclarativeParameters<ChildElement, M>): UseCompleteListNavigationChildDeclarativeReturnType<ChildElement, M>;
//# sourceMappingURL=use-list-navigation-complete.d.ts.map