import { RovingTabIndexChildContext } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { UseTypeaheadNavigationContext } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { UsePaginatedChildrenParametersSelf, UsePaginatedChildrenReturnType } from "../component-detail/processed-children/use-paginated-children.js";
import { UseProcessedChildContext, UseProcessedChildInfo, UseProcessedChildrenContext, UseProcessedChildrenParameters } from "../component-detail/processed-children/use-processed-children.js";
import { UseRearrangeableChildrenReturnType, UseRearrangeableChildrenReturnTypeSelf } from "../component-detail/processed-children/use-rearrangeable-children.js";
import { UseStaggeredChildrenParametersSelf, UseStaggeredChildrenReturnType } from "../component-detail/processed-children/use-staggered-children.js";
import { MakeSelectionDeclarativeChildParameters, MakeSelectionDeclarativeParameters, UseSelectionChildParameters, UseSelectionContext, UseSelectionParameters } from "../component-detail/selection/use-selection.js";
import { UseListNavigationSelectionChildInfo, UseListNavigationSelectionChildInfoKeysParameters, UseListNavigationSelectionChildParameters, UseListNavigationSelectionChildReturnType, UseListNavigationSelectionParameters, UseListNavigationSelectionReturnType } from "../component-detail/use-list-navigation-selection.js";
import { UseRefElementParameters, UseRefElementParametersSelf, UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { UseChildrenHaveFocusContext } from "../observers/use-children-have-focus.js";
import { UseHasCurrentFocusParametersSelf, UseHasCurrentFocusReturnType } from "../observers/use-has-current-focus.js";
import { ManagedChildInfo, UseGenericChildParameters, UseManagedChildReturnType, UseManagedChildrenContext, UseManagedChildrenParametersSelf, UseManagedChildrenReturnTypeSelf } from "../preact-extensions/use-managed-children.js";
import { ElementProps, OmitStrong } from "../util/types.js";
import { UsePressParameters } from "./use-press.js";
export interface UseCompleteListNavigationChildInfo<ChildElement extends Element> extends UseListNavigationSelectionChildInfo<ChildElement>, ManagedChildInfo<number> {
}
export interface UseCompleteListNavigationChildrenInfo<ChildElement extends Element> extends UseProcessedChildInfo<ChildElement>, ManagedChildInfo<number> {
}
type ListNavOmits = "PropNames.LinearNavigationParameters.getHighestIndex" | "PropNames.LinearNavigationParameters.getLowestIndex" | "PropNames.RearrangeableReturn.indexMangler" | "PropNames.RearrangeableReturn.indexDemangler" | "PropNames.RefElementReturn.getElement" | "PropNames.ChildrenHaveFocusReturn.getAnyFocused" | "PropNames.ManagedChildrenReturn.getChildren" | "PropNames.LinearNavigationParameters.isValidForLinearNavigation" | "PropNames.RovingTabIndexParameters.untabbableBehavior" | "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation";
export interface UseCompleteListNavigationParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends OmitStrong<UseListNavigationSelectionParameters<ParentElement, ChildElement, M>, ListNavOmits>, OmitStrong<UsePaginatedChildrenParametersSelf, "PropNames.PaginatedParameters.childCount">, OmitStrong<UseStaggeredChildrenParametersSelf, "PropNames.StaggeredParameters.childCount">, OmitStrong<UseRefElementParameters<ParentElement>, never>, OmitStrong<UseManagedChildrenParametersSelf<M>, never> {
}
export interface UseCompleteListNavigationReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends OmitStrong<UseListNavigationSelectionReturnType<ParentElement, ChildElement>, "props" | "context">, OmitStrong<UseRefElementReturnType<ParentElement>, "props">, OmitStrong<UseManagedChildrenReturnTypeSelf<M>, never>, OmitStrong<UseRearrangeableChildrenReturnTypeSelf<any>, "PropNames.RearrangeableReturn.children"> {
    props: ElementProps<ParentElement>[];
    contextChildren: CompleteListNavigationContext<ChildElement, M>;
    contextProcessing: UseProcessedChildrenContext;
}
export interface CompleteListNavigationContext<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends UseChildrenHaveFocusContext<ChildElement>, UseTypeaheadNavigationContext, UseSelectionContext, UseManagedChildrenContext<M>, RovingTabIndexChildContext {
}
export interface UseCompleteListNavigationChildrenParameters<TabbableChildElement extends Element, M extends UseCompleteListNavigationChildrenInfo<TabbableChildElement>> extends OmitStrong<UseProcessedChildrenParameters<TabbableChildElement, M>, "PropNames.RefElementReturn.getElement" | "PropNames.ChildrenHaveFocusReturn.getAnyFocused" | "PropNames.RovingTabIndexReturn.getTabbableIndex" | "PropNames.RovingTabIndexReturn.setTabbableIndex" | "PropNames.ManagedChildrenReturn.getChildren"> {
}
export interface UseCompleteListNavigationChildrenReturnType<TabbableChildElement extends Element, M extends UseCompleteListNavigationChildrenInfo<TabbableChildElement>> extends OmitStrong<UseRearrangeableChildrenReturnType<M>, never>, OmitStrong<UsePaginatedChildrenReturnType, "context">, OmitStrong<UseStaggeredChildrenReturnType, "context"> {
    context: UseProcessedChildContext<TabbableChildElement, M>;
}
export type UseCompleteListNavigationChildInfoKeysParameters<M extends UseCompleteListNavigationChildInfo<any>> = Exclude<keyof M, keyof UseCompleteListNavigationChildInfo<any>> | UseListNavigationSelectionChildInfoKeysParameters | "focusSelf";
export interface UseCompleteListNavigationChildParameters<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends UseGenericChildParameters<CompleteListNavigationContext<ChildElement, M>, Pick<M, UseCompleteListNavigationChildInfoKeysParameters<M>>>, OmitStrong<UseListNavigationSelectionChildParameters<ChildElement, M>, "context" | "info" | "PropNames.RefElementReturn.getElement">, UseRefElementParametersSelf<ChildElement>, UseHasCurrentFocusParametersSelf<ChildElement> {
}
export interface UseCompleteListNavigationChildReturnType<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends OmitStrong<UseListNavigationSelectionChildReturnType<ChildElement, M>, "info" | "propsChild" | "propsTabbable">, OmitStrong<UseRefElementReturnType<ChildElement>, "props">, OmitStrong<UseHasCurrentFocusReturnType<ChildElement>, "props">, UseManagedChildReturnType<M>, Pick<UsePressParameters<any>, "PropNames.PressParameters.onPressSync" | "PropNames.PressParameters.excludeSpace"> {
    /**
     * These props should be passed to whichever element is tabbable.
     * This may be the same element as `propsChild`, in which case `useMergedProps` is recommended.
     *
     * @see propsChild
     */
    propsTabbable: ElementProps<any>[];
    /**
     * These props should be passed to whichever element is considered the child element of the list (e.g. the `li` in an `ol`).
     * This may be the same element as `propsChild`, in which case `useMergedProps` is recommended.
     * But it may also be different, e.g. if that `li` contains an `input`.
     *
     * @see propsTabbable
     */
    propsChild: ElementProps<any>[];
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
export declare const useCompleteListNavigation: <ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ "PropNames.RefElementParameters.onElementChange": onElementChange, "PropNames.RefElementParameters.onMount": onMount, "PropNames.RefElementParameters.onUnmount": onUnmount, "PropNames.LinearNavigationParameters.arrowKeyDirection": arrowKeyDirection, "PropNames.LinearNavigationParameters.disableHomeEndKeys": disableHomeEndKeys, "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd, "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart, "PropNames.LinearNavigationParameters.onNavigateLinear": onNavigateLinear, "PropNames.LinearNavigationParameters.pageNavigationSize": pageNavigationSize, "PropNames.MultiSelectionParameters.multiSelectionAriaPropName": multiSelectionAriaPropName, "PropNames.MultiSelectionParameters.multiSelectionMode": multiSelectionMode, "PropNames.MultiSelectionParameters.onSelectionChange": onSelectionChange, "PropNames.PaginatedParameters.paginationMax": paginationMax, "PropNames.PaginatedParameters.paginationMin": paginationMin, "PropNames.RovingTabIndexParameters.focusSelfParent": focusSelfParent, "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex, "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange, "PropNames.RovingTabIndexParameters.untabbable": untabbable, "PropNames.SingleSelectionParameters.initiallySingleSelectedIndex": initiallySingleSelectedIndex, "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": onSingleSelectedIndexChange, "PropNames.SingleSelectionParameters.singleSelectionAriaPropName": singleSelectionAriaPropName, "PropNames.SingleSelectionParameters.singleSelectionMode": singleSelectionMode, "PropNames.TypeaheadNavigationParameters.collator": collator, "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead, "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead, "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout, "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect, "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange, "PropNames.ManagedChildrenParameters.onChildrenMountChange": ocmc1, "PropNames.StaggeredParameters.staggered": staggered, ...void4 }: UseCompleteListNavigationParameters<ParentElement, ChildElement, M>) => UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>;
/**
 * Helper for `useCompleteListNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 *
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize
 */
export declare const useCompleteListNavigationChildren: <TabbableChildElement extends Element, M extends UseCompleteListNavigationChildrenInfo<TabbableChildElement>>({ context, "PropNames.PaginatedParameters.paginationMax": paginationMax, "PropNames.PaginatedParameters.paginationMin": paginationMin, "PropNames.RearrangeableParameters.adjust": adjust, "PropNames.RearrangeableParameters.children": children, "PropNames.RearrangeableParameters.compare": compare, "PropNames.RearrangeableParameters.getIndex": getIndex, "PropNames.RearrangeableParameters.onRearranged": onRearranged, "PropNames.StaggeredParameters.staggered": staggered, "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect, "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange, "PropNames.ManagedChildrenParameters.onChildrenMountChange": onChildrenMountChange, ...void1 }: UseCompleteListNavigationChildrenParameters<TabbableChildElement, M>) => UseCompleteListNavigationChildrenReturnType<TabbableChildElement, M>;
/**
 *
 * @compositeParams
 */
export declare const useCompleteListNavigationChild: <ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ info: { index, focusSelf, untabbable, ...customUserInfo }, "PropNames.HasCurrentFocusParameters.onCurrentFocusedChanged": onCurrentFocusedChanged, "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic3, "PropNames.MultiSelectionChildParameters.initiallyMultiSelected": initiallyMultiSelected, "PropNames.MultiSelectionChildParameters.multiSelectionDisabled": multiSelectionDisabled, "PropNames.MultiSelectionChildParameters.onMultiSelectChange": onMultiSelectChange, "PropNames.SingleSelectionChildParameters.singleSelectionDisabled": singleSelectionDisabled, "PropNames.TextContentParameters.getText": getText, "PropNames.RefElementParameters.onElementChange": onElementChange, "PropNames.RefElementParameters.onMount": onMount, "PropNames.RefElementParameters.onUnmount": onUnmount, context: { managedChildContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext, childrenHaveFocusChildContext, ...void5 }, ...void1 }: UseCompleteListNavigationChildParameters<ChildElement, M>) => UseCompleteListNavigationChildReturnType<ChildElement, M>;
export interface UseCompleteListNavigationDeclarativeParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends OmitStrong<MakeSelectionDeclarativeParameters<UseCompleteListNavigationParameters<ParentElement, ChildElement, M>>, "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange" | "PropNames.SingleSelectionReturn.changeSingleSelectedIndex">, OmitStrong<UseSelectionParameters<ParentElement, ChildElement, M>, "PropNames.SingleSelectionParameters.initiallySingleSelectedIndex" | "PropNames.ChildrenHaveFocusReturn.getAnyFocused" | "PropNames.ManagedChildrenReturn.getChildren" | "PropNames.RovingTabIndexReturn.setTabbableIndex"> {
}
export interface UseCompleteListNavigationDeclarativeReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends OmitStrong<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, "PropNames.SingleSelectionReturn.changeSingleSelectedIndex">, OmitStrong<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, never> {
}
export interface UseCompleteListNavigationChildDeclarativeParameters<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends OmitStrong<MakeSelectionDeclarativeChildParameters<UseCompleteListNavigationChildParameters<ChildElement, M>>, "info" | "context" | "PropNames.MultiSelectionChildReturn.changeMultiSelected">, OmitStrong<UseSelectionChildParameters<ChildElement, M>, "info" | "context" | "PropNames.MultiSelectionChildParameters.initiallyMultiSelected" | "PropNames.MultiSelectionChildParameters.onMultiSelectChange"> {
    info: Pick<M, UseCompleteListNavigationChildInfoKeysParameters<M>>;
    context: CompleteListNavigationContext<ChildElement, M>;
}
export interface UseCompleteListNavigationChildDeclarativeReturnType<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends OmitStrong<UseCompleteListNavigationChildReturnType<ChildElement, M>, "PropNames.MultiSelectionChildReturn.changeMultiSelected"> {
}
export declare function useCompleteListNavigationDeclarative<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ "PropNames.SingleSelectionParameters.singleSelectedIndex": singleSelectedIndex, "PropNames.LinearNavigationParameters.arrowKeyDirection": arrowKeyDirection, "PropNames.LinearNavigationParameters.disableHomeEndKeys": disableHomeEndKeys, "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd, "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart, "PropNames.LinearNavigationParameters.onNavigateLinear": onNavigateLinear, "PropNames.LinearNavigationParameters.pageNavigationSize": pageNavigationSize, "PropNames.MultiSelectionParameters.multiSelectionAriaPropName": multiSelectionAriaPropName, "PropNames.MultiSelectionParameters.multiSelectionMode": multiSelectionMode, "PropNames.MultiSelectionParameters.onSelectionChange": onSelectionChange, "PropNames.PaginatedParameters.paginationMax": paginationMax, "PropNames.PaginatedParameters.paginationMin": paginationMin, "PropNames.RovingTabIndexParameters.focusSelfParent": focusSelfParent, "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex, "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange, "PropNames.RovingTabIndexParameters.untabbable": untabbable, "PropNames.SingleSelectionParameters.singleSelectionAriaPropName": singleSelectionAriaPropName, "PropNames.SingleSelectionParameters.singleSelectionMode": singleSelectionMode, "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": ossici, "PropNames.TypeaheadNavigationParameters.collator": collator, "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead, "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead, "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout, "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect, "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange, "PropNames.ManagedChildrenParameters.onChildrenMountChange": onChildrenMountChange, "PropNames.RefElementParameters.onElementChange": onElementChange, "PropNames.RefElementParameters.onMount": onMount, "PropNames.RefElementParameters.onUnmount": onUnmount, "PropNames.StaggeredParameters.staggered": staggered, ...rest }: UseCompleteListNavigationDeclarativeParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationDeclarativeReturnType<ParentElement, ChildElement, M>;
export declare function useCompleteListNavigationChildDeclarative<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ "PropNames.MultiSelectionChildParameters.multiSelected": multiSelected, context, info: uinfo, "PropNames.HasCurrentFocusParameters.onCurrentFocusedChanged": onCurrentFocusedChanged, "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": onCurrentFocusedInnerChanged, "PropNames.MultiSelectionChildParameters.onMultiSelectChange": omsci, "PropNames.MultiSelectionChildParameters.multiSelectionDisabled": multiSelectionDisabled, "PropNames.SingleSelectionChildParameters.singleSelectionDisabled": singleSelectionDisabled, "PropNames.TextContentParameters.getText": getText, "PropNames.RefElementParameters.onElementChange": onElementChange, "PropNames.RefElementParameters.onMount": onMount, "PropNames.RefElementParameters.onUnmount": onUnmount, ...void1 }: UseCompleteListNavigationChildDeclarativeParameters<ChildElement, M>): UseCompleteListNavigationChildDeclarativeReturnType<ChildElement, M>;
export {};
//# sourceMappingURL=use-list-navigation-complete.d.ts.map