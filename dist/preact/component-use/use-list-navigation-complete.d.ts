import { $getHighestIndex, $getLowestIndex, $isValidForLinearNavigation, $linearNavigationParameters } from "../component-detail/keyboard-navigation/use-linear-navigation.js";
import { $focusSelfChild, $untabbable, $untabbableBehavior, RovingTabIndexChildContext, $rovingTabIndexContext, $rovingTabIndexParameters } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { $isValidForTypeaheadNavigation, UseTypeaheadNavigationContext, $typeaheadNavigationContext, $typeaheadNavigationParameters } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { $childCount, UsePaginatedChildrenParameters, UsePaginatedChildrenReturnType, $paginatedChildrenParameters } from "../component-detail/processed-children/use-paginated-children.js";
import { UseProcessedChildContext, UseProcessedChildInfo, UseProcessedChildrenContext, UseProcessedChildrenParameters, UseProcessedChildrenReturnType } from "../component-detail/processed-children/use-processed-children.js";
import { $children, $indexDemangler, $indexMangler, UseRearrangeableChildrenReturnType, $rearrangeableChildrenParameters, $rearrangeableChildrenReturn } from "../component-detail/processed-children/use-rearrangeable-children.js";
import { UseStaggeredChildrenReturnType, $staggeredChildrenParameters } from "../component-detail/processed-children/use-staggered-children.js";
import { $initiallyMultiSelected, $multiSelected, $onMultiSelectChange, $onMultiSelectedChange, $changeMultiSelected, $multiSelectionChildDeclarativeParameters, $multiSelectionChildParameters, $multiSelectionChildReturn, $multiSelectionContext, $multiSelectionParameters, $multiSelectionReturn } from "../component-detail/selection/use-multi-selection.js";
import { MakeSelectionDeclarativeChildParameters, MakeSelectionDeclarativeParameters, UseSelectionChildParameters, UseSelectionContext, UseSelectionParameters } from "../component-detail/selection/use-selection.js";
import { $initiallySingleSelectedIndex, $onSingleSelectedIndexChange, $changeSingleSelectedIndex, $singleSelectionChildParameters, $singleSelectionChildReturn, $singleSelectionContext, $singleSelectionDeclarativeParameters, $singleSelectionParameters, $singleSelectionReturn } from "../component-detail/selection/use-single-selection.js";
import { UseListNavigationSelectionChildInfo, UseListNavigationSelectionChildInfoKeysParameters, UseListNavigationSelectionChildParameters, UseListNavigationSelectionChildReturnType, UseListNavigationSelectionParameters, UseListNavigationSelectionReturnType } from "../component-detail/use-list-navigation-selection.js";
import { UseRefElementParameters, UseRefElementReturnType, $refElementParameters, $refElementReturn } from "../dom-helpers/use-ref-element.js";
import { $getText, $onTextContentChange, $textContentParameters, $textContentReturn, UseTextContentParameters, UseTextContentReturnType } from "../dom-helpers/use-text-content.js";
import { UseChildrenHaveFocusContext, UseChildrenHaveFocusReturnType, $childrenHaveFocusChildContext, $childrenHaveFocusParameters, $childrenHaveFocusReturn } from "../observers/use-children-have-focus.js";
import { $hasCurrentFocusParameters, $onCurrentFocusedChanged, $onCurrentFocusedInnerChanged, UseHasCurrentFocusParameters, UseHasCurrentFocusReturnType } from "../observers/use-has-current-focus.js";
import { $index, ManagedChildInfo, UseGenericChildParameters, UseManagedChildReturnType, UseManagedChildrenContext, UseManagedChildrenReturnType, $managedChildContext, $managedChildrenParameters, $managedChildrenReturn } from "../preact-extensions/use-managed-children.js";
import { TargetedOmit, TargetedPick } from "../util/lib.js";
import { ElementProps, OmitStrong } from "../util/types.js";
import { $excludeSpace, $onPressSync, $pressParameters, UsePressParameters } from "./use-press.js";
export interface UseCompleteListNavigationChildInfo<ChildElement extends Element> extends UseListNavigationSelectionChildInfo<ChildElement>, ManagedChildInfo<number> {
}
export interface UseCompleteListNavigationChildrenInfo<ChildElement extends Element> extends UseProcessedChildInfo<ChildElement>, ManagedChildInfo<number> {
}
export interface UseCompleteListNavigationParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends Pick<UseListNavigationSelectionParameters<ParentElement, ChildElement, M>, typeof $singleSelectionParameters | typeof $multiSelectionParameters>, TargetedOmit<Pick<UsePaginatedChildrenParameters<ChildElement>, typeof $paginatedChildrenParameters>, typeof $paginatedChildrenParameters, typeof $childCount>, Pick<UseRefElementParameters<ParentElement>, typeof $refElementParameters>, TargetedOmit<UseListNavigationSelectionParameters<ParentElement, ChildElement, M>, typeof $linearNavigationParameters, typeof $getLowestIndex | typeof $getHighestIndex | typeof $isValidForLinearNavigation>, TargetedOmit<UseListNavigationSelectionParameters<ParentElement, ChildElement, M>, typeof $typeaheadNavigationParameters, typeof $isValidForTypeaheadNavigation>, TargetedOmit<UseListNavigationSelectionParameters<ParentElement, ChildElement, M>, typeof $rovingTabIndexParameters, typeof $untabbableBehavior> {
}
export interface UseCompleteListNavigationReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends OmitStrong<UseRefElementReturnType<ParentElement>, "propsStable">, TargetedOmit<UseProcessedChildrenReturnType<any, any>, typeof $rearrangeableChildrenReturn, typeof $indexDemangler | typeof $indexMangler | typeof $children>, Pick<UseProcessedChildrenReturnType<any, any>, never>, Pick<UseManagedChildrenReturnType<M>, typeof $managedChildrenReturn>, Pick<UseChildrenHaveFocusReturnType<ChildElement>, typeof $childrenHaveFocusReturn>, OmitStrong<UseListNavigationSelectionReturnType<ParentElement, ChildElement>, "context" | typeof $childrenHaveFocusParameters | typeof $managedChildrenParameters> {
    props: ElementProps<ParentElement>;
    contextChildren: CompleteListNavigationContext<ChildElement, M>;
    contextProcessing: UseProcessedChildrenContext;
}
export interface CompleteListNavigationContext<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends UseChildrenHaveFocusContext<ChildElement>, UseTypeaheadNavigationContext, UseSelectionContext, UseManagedChildrenContext<M>, RovingTabIndexChildContext {
}
export interface UseCompleteListNavigationChildrenParameters<TabbableChildElement extends Element, M extends UseCompleteListNavigationChildrenInfo<TabbableChildElement>> extends OmitStrong<UseProcessedChildrenParameters<TabbableChildElement, M>, never> {
}
export interface UseCompleteListNavigationChildrenReturnType<TabbableChildElement extends Element, M extends UseCompleteListNavigationChildrenInfo<TabbableChildElement>> extends OmitStrong<UseRearrangeableChildrenReturnType<M>, never>, OmitStrong<UsePaginatedChildrenReturnType, "context">, OmitStrong<UseStaggeredChildrenReturnType, "context"> {
    context: UseProcessedChildContext<TabbableChildElement, M>;
}
export type UseCompleteListNavigationChildInfoKeysParameters<M extends UseCompleteListNavigationChildInfo<any>> = Exclude<keyof M, keyof UseCompleteListNavigationChildInfo<any>> | UseListNavigationSelectionChildInfoKeysParameters | typeof $focusSelfChild;
export interface UseCompleteListNavigationChildParameters<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends UseGenericChildParameters<CompleteListNavigationContext<ChildElement, M>, Pick<M, UseCompleteListNavigationChildInfoKeysParameters<M>>>, OmitStrong<UseListNavigationSelectionChildParameters<ChildElement, M>, "context" | "info" | typeof $refElementReturn>, Pick<UseRefElementParameters<ChildElement>, typeof $refElementParameters>, Pick<UseTextContentParameters<ChildElement>, typeof $textContentParameters>, Pick<UseHasCurrentFocusParameters<ChildElement>, typeof $hasCurrentFocusParameters> {
}
export interface UseCompleteListNavigationChildReturnType<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends OmitStrong<UseListNavigationSelectionChildReturnType<ChildElement, M>, "info" | "propsChild" | "propsTabbable" | typeof $hasCurrentFocusParameters | typeof $pressParameters | typeof $textContentParameters>, OmitStrong<UseRefElementReturnType<ChildElement>, "propsStable">, Pick<UseTextContentReturnType, typeof $textContentReturn>, UseHasCurrentFocusReturnType<ChildElement>, UseManagedChildReturnType<M>, TargetedPick<UsePressParameters<any>, typeof $pressParameters, typeof $onPressSync | typeof $excludeSpace> {
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
export declare const useCompleteListNavigation: <ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ [$linearNavigationParameters]: linearNavigationParameters, [$typeaheadNavigationParameters]: typeaheadNavigationParameters, [$rovingTabIndexParameters]: rovingTabIndexParameters, [$singleSelectionParameters]: singleSelectionParameters, [$multiSelectionParameters]: multiSelectionParameters, [$refElementParameters]: refElementParameters, [$paginatedChildrenParameters]: paginatedChildrenParameters, ...void1 }: UseCompleteListNavigationParameters<ParentElement, ChildElement, M>) => UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>;
/**
 * Helper for `useCompleteListNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 *
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize
 */
export declare const useCompleteListNavigationChildren: <TabbableChildElement extends Element, M extends UseCompleteListNavigationChildrenInfo<TabbableChildElement>>({ context, [$rearrangeableChildrenParameters]: rearrangeableChildrenParameters, [$paginatedChildrenParameters]: paginatedChildrenParameters, [$staggeredChildrenParameters]: staggeredChildrenParameters, [$managedChildrenParameters]: managedChildrenParameters }: UseCompleteListNavigationChildrenParameters<TabbableChildElement, M>) => UseCompleteListNavigationChildrenReturnType<TabbableChildElement, M>;
/**
 *
 * @compositeParams
 */
export declare const useCompleteListNavigationChild: <ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ info: { [$index]: index, [$focusSelfChild]: focusSelf, [$untabbable]: untabbable, ...customUserInfo }, [$textContentParameters]: { [$getText]: getText, [$onTextContentChange]: otcc1, ...void10 }, [$refElementParameters]: refElementParameters, [$hasCurrentFocusParameters]: { [$onCurrentFocusedChanged]: onCurrentFocusedChanged, [$onCurrentFocusedInnerChanged]: ocfic3, ...void7 }, [$singleSelectionChildParameters]: singleSelectionChildParameters, [$multiSelectionChildParameters]: multiSelectionChildParameters, context: { [$managedChildContext]: managedChildContext, [$rovingTabIndexContext]: rovingTabIndexContext, [$singleSelectionContext]: singleSelectionContext, [$multiSelectionContext]: multiSelectionContext, [$typeaheadNavigationContext]: typeaheadNavigationContext, [$childrenHaveFocusChildContext]: childrenHaveFocusChildContext, ...void5 }, ...void1 }: UseCompleteListNavigationChildParameters<ChildElement, M>) => UseCompleteListNavigationChildReturnType<ChildElement, M>;
export interface UseCompleteListNavigationDeclarativeParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends OmitStrong<MakeSelectionDeclarativeParameters<UseCompleteListNavigationParameters<ParentElement, ChildElement, M>>, typeof $singleSelectionParameters | typeof $singleSelectionReturn>, TargetedOmit<UseSelectionParameters<ParentElement, ChildElement, M>, typeof $singleSelectionParameters, typeof $initiallySingleSelectedIndex | typeof $onSingleSelectedIndexChange> {
}
export interface UseCompleteListNavigationDeclarativeReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends TargetedOmit<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, typeof $singleSelectionReturn, typeof $changeSingleSelectedIndex>, TargetedOmit<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, typeof $multiSelectionReturn, never>, OmitStrong<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, typeof $singleSelectionReturn | typeof $multiSelectionReturn> {
}
export interface UseCompleteListNavigationChildDeclarativeParameters<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends OmitStrong<MakeSelectionDeclarativeChildParameters<UseCompleteListNavigationChildParameters<ChildElement, M>>, typeof $multiSelectionChildParameters | typeof $multiSelectionChildReturn>, TargetedOmit<UseSelectionChildParameters<ChildElement, M>, typeof $multiSelectionChildParameters, typeof $initiallyMultiSelected | typeof $onMultiSelectChange> {
}
export interface UseCompleteListNavigationChildDeclarativeReturnType<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends TargetedOmit<UseCompleteListNavigationChildReturnType<ChildElement, M>, typeof $singleSelectionChildReturn, never>, TargetedOmit<UseCompleteListNavigationChildReturnType<ChildElement, M>, typeof $multiSelectionChildReturn, typeof $changeMultiSelected>, OmitStrong<UseCompleteListNavigationChildReturnType<ChildElement, M>, typeof $singleSelectionChildReturn | typeof $multiSelectionChildReturn> {
}
export declare function useCompleteListNavigationDeclarative<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ [$singleSelectionParameters]: singleSelectionParameters, [$singleSelectionDeclarativeParameters]: singleSelectionDeclarativeParameters, ...rest }: UseCompleteListNavigationDeclarativeParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationDeclarativeReturnType<ParentElement, ChildElement, M>;
export declare function useCompleteListNavigationChildDeclarative<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ [$multiSelectionChildParameters]: multiSelectionChildParameters, [$multiSelectionChildDeclarativeParameters]: { [$multiSelected]: multiSelected, [$onMultiSelectedChange]: onMultiSelectedChange }, info: i1, ...rest }: UseCompleteListNavigationChildDeclarativeParameters<ChildElement, M>): UseCompleteListNavigationChildDeclarativeReturnType<ChildElement, M>;
//# sourceMappingURL=use-list-navigation-complete.d.ts.map