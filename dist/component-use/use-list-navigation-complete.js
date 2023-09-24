import { PropNames_LinearNavigationParameters_arrowKeyDirection, PropNames_LinearNavigationParameters_disableHomeEndKeys, PropNames_LinearNavigationParameters_getHighestIndex, PropNames_LinearNavigationParameters_getLowestIndex, PropNames_LinearNavigationParameters_isValidForLinearNavigation, PropNames_LinearNavigationParameters_navigatePastEnd, PropNames_LinearNavigationParameters_navigatePastStart, PropNames_LinearNavigationParameters_onNavigateLinear, PropNames_LinearNavigationParameters_pageNavigationSize } from "../component-detail/keyboard-navigation/use-linear-navigation.js";
import { PropNames_RovingTabIndexParameters_focusSelfParent, PropNames_RovingTabIndexParameters_initiallyTabbedIndex, PropNames_RovingTabIndexParameters_onTabbableIndexChange, PropNames_RovingTabIndexParameters_untabbable, PropNames_RovingTabIndexParameters_untabbableBehavior, PropNames_RovingTabIndexReturn_focusSelf, PropNames_RovingTabIndexReturn_getTabbableIndex, PropNames_RovingTabIndexReturn_setTabbableIndex } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { PropNames_TypeaheadNavigationParameters_collator, PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation, PropNames_TypeaheadNavigationParameters_noTypeahead, PropNames_TypeaheadNavigationParameters_onNavigateTypeahead, PropNames_TypeaheadNavigationParameters_typeaheadTimeout, PropNames_TypeaheadNavigationReturn_getCurrentTypeahead, PropNames_TypeaheadNavigationReturn_typeaheadStatus } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { PropNames_PaginatedParameters_paginationMax, PropNames_PaginatedParameters_paginationMin } from "../component-detail/processed-children/use-paginated-children.js";
import { useProcessedChildren } from "../component-detail/processed-children/use-processed-children.js";
import { PropNames_RearrangeableParameters_adjust, PropNames_RearrangeableParameters_children, PropNames_RearrangeableParameters_compare, PropNames_RearrangeableParameters_getIndex, PropNames_RearrangeableParameters_onRearranged, PropNames_RearrangeableReturn_indexDemangler, PropNames_RearrangeableReturn_indexMangler, PropNames_RearrangeableReturn_rearrange, PropNames_RearrangeableReturn_reverse, PropNames_RearrangeableReturn_shuffle, PropNames_RearrangeableReturn_sort, useCreateProcessedChildrenContext } from "../component-detail/processed-children/use-rearrangeable-children.js";
import { PropNames_StaggeredParameters_staggered } from "../component-detail/processed-children/use-staggered-children.js";
import { PropNames_MultiSelectionChildParameters_initiallyMultiSelected, PropNames_MultiSelectionChildParameters_multiSelected, PropNames_MultiSelectionChildParameters_multiSelectionDisabled, PropNames_MultiSelectionChildParameters_onMultiSelectChange, PropNames_MultiSelectionChildReturn_changeMultiSelected, PropNames_MultiSelectionParameters_multiSelectionAriaPropName, PropNames_MultiSelectionParameters_multiSelectionMode, PropNames_MultiSelectionParameters_onSelectionChange } from "../component-detail/selection/use-multi-selection.js";
import { useSelectionChildDeclarative, useSelectionDeclarative } from "../component-detail/selection/use-selection.js";
import { PropNames_SingleSelectionChildParameters_singleSelectionDisabled, PropNames_SingleSelectionParameters_initiallySingleSelectedIndex, PropNames_SingleSelectionParameters_onSingleSelectedIndexChange, PropNames_SingleSelectionParameters_singleSelectedIndex, PropNames_SingleSelectionParameters_singleSelectionAriaPropName, PropNames_SingleSelectionParameters_singleSelectionMode, PropNames_SingleSelectionReturn_changeSingleSelectedIndex, PropNames_SingleSelectionReturn_getSingleSelectedIndex } from "../component-detail/selection/use-single-selection.js";
import { useListNavigationSelection, useListNavigationSelectionChild } from "../component-detail/use-list-navigation-selection.js";
import { PropNames_RefElementParameters_onElementChange, PropNames_RefElementParameters_onMount, PropNames_RefElementParameters_onUnmount, PropNames_RefElementReturn_getElement, useRefElement } from "../dom-helpers/use-ref-element.js";
import { PropNames_TextContentParameters_getText } from "../dom-helpers/use-text-content.js";
import { PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange, PropNames_ChildrenHaveFocusReturn_getAnyFocused, useChildrenHaveFocus, useChildrenHaveFocusChild } from "../observers/use-children-have-focus.js";
import { PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged, PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged, useHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect, PropNames_ManagedChildrenParameters_onChildrenCountChange, PropNames_ManagedChildrenParameters_onChildrenMountChange, PropNames_ManagedChildrenReturn_getChildren, useManagedChild, useManagedChildren } from "../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { useCallback } from "../util/lib.js";
import { monitored } from "../util/use-call-count.js";
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
export const useCompleteListNavigation = monitored(function useCompleteListNavigation({ [PropNames_RefElementParameters_onElementChange]: onElementChange, [PropNames_RefElementParameters_onMount]: onMount, [PropNames_RefElementParameters_onUnmount]: onUnmount, [PropNames_LinearNavigationParameters_arrowKeyDirection]: arrowKeyDirection, [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys, [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd, [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart, [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear, [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize, [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName, [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode, [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange, [PropNames_PaginatedParameters_paginationMax]: paginationMax, [PropNames_PaginatedParameters_paginationMin]: paginationMin, [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent, [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex, [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange, [PropNames_RovingTabIndexParameters_untabbable]: untabbable, [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: initiallySingleSelectedIndex, [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange, [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName, [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode, [PropNames_TypeaheadNavigationParameters_collator]: collator, [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead, [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead, [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout, [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect, [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange, [PropNames_ManagedChildrenParameters_onChildrenMountChange]: ocmc1, [PropNames_StaggeredParameters_staggered]: staggered, ...void4 }) {
    const getChildren = useCallback(() => getChildren2(), []);
    const getLowestIndex = useCallback(() => getChildren().getLowestIndex(), []);
    const getHighestIndex = useCallback(() => getChildren().getHighestIndex(), []);
    const isValidForNavigation = useCallback((i) => {
        const child = getChildren().getAt(i);
        if (!child)
            return false;
        if (child.untabbable)
            return false;
        return true;
    }, []);
    const { props: propsRef, [PropNames_RefElementReturn_getElement]: getElement, ...void3 } = useRefElement({
        [PropNames_RefElementParameters_onElementChange]: onElementChange,
        [PropNames_RefElementParameters_onMount]: onMount,
        [PropNames_RefElementParameters_onUnmount]: onUnmount
    });
    // Grab the information from the array of children we may or may not render.
    // (see useProcessedChildren -- it send this information to us if it's used.)
    // These are all stable functions, except for `contextPreprocessing`, which is how it sends things to us.
    const { context: contextProcessing, [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler, [PropNames_RearrangeableReturn_indexMangler]: indexMangler, [PropNames_RearrangeableReturn_rearrange]: rearrange, [PropNames_RearrangeableReturn_reverse]: reverse, [PropNames_RearrangeableReturn_shuffle]: shuffle, [PropNames_RearrangeableReturn_sort]: sort, ...void1 } = useCreateProcessedChildrenContext();
    const { context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext }, props, [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: ocfc2, [PropNames_RovingTabIndexReturn_focusSelf]: focusSelf, [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex, [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex, [PropNames_SingleSelectionReturn_changeSingleSelectedIndex]: changeSingleSelectedIndex, [PropNames_SingleSelectionReturn_getSingleSelectedIndex]: getSingleSelectedIndex, [PropNames_TypeaheadNavigationReturn_getCurrentTypeahead]: getCurrentTypeahead, [PropNames_TypeaheadNavigationReturn_typeaheadStatus]: typeaheadStatus, [PropNames_ManagedChildrenParameters_onChildrenMountChange]: ocmc2, ...void2 } = useListNavigationSelection({
        [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: useStableCallback(() => getAnyFocused()),
        [PropNames_LinearNavigationParameters_arrowKeyDirection]: arrowKeyDirection,
        [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys,
        [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForNavigation,
        [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
        [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
        [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear,
        [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize,
        [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName,
        [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
        [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange,
        [PropNames_PaginatedParameters_paginationMax]: paginationMax,
        [PropNames_PaginatedParameters_paginationMin]: paginationMin,
        [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent,
        [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex,
        [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange,
        [PropNames_RovingTabIndexParameters_untabbable]: untabbable,
        [PropNames_RovingTabIndexParameters_untabbableBehavior]: "focus-parent",
        [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: initiallySingleSelectedIndex,
        [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange,
        [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName,
        [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode,
        [PropNames_TypeaheadNavigationParameters_collator]: collator,
        [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForNavigation,
        [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead,
        [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead,
        [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout,
        [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex,
        [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex,
        [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
        [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
        [PropNames_RearrangeableReturn_indexMangler]: indexMangler,
        [PropNames_RefElementReturn_getElement]: getElement,
    });
    const { context: { childrenHaveFocusChildContext }, [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused, ...void5 } = useChildrenHaveFocus({
        [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: useStableCallback((...a) => { ocfc2?.(...a); }),
    });
    const { [PropNames_ManagedChildrenReturn_getChildren]: getChildren2, context: managedChildRTIContext, ...void6 } = useManagedChildren({
        [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect,
        [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange,
        [PropNames_ManagedChildrenParameters_onChildrenMountChange]: useStableCallback((...a) => { ocmc1?.(...a); ocmc2?.(...a); })
    });
    const contextChildren = useMemoObject({
        childrenHaveFocusChildContext,
        rovingTabIndexContext,
        singleSelectionContext,
        multiSelectionContext,
        typeaheadNavigationContext,
        ...managedChildRTIContext,
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    const processedChildrenContext = useMemoObject({
        [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused,
        [PropNames_RefElementReturn_getElement]: getElement,
        [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex,
        [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
        [PropNames_PaginatedParameters_paginationMin]: paginationMin,
        [PropNames_PaginatedParameters_paginationMax]: paginationMax,
        [PropNames_StaggeredParameters_staggered]: staggered,
        [PropNames_ManagedChildrenReturn_getChildren]: getChildren
    });
    return {
        contextChildren,
        contextProcessing: useMemoObject({
            processedChildrenContext,
            ...contextProcessing
        }),
        props: [...props, propsRef],
        [PropNames_RearrangeableReturn_indexMangler]: indexMangler,
        [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
        [PropNames_RearrangeableReturn_sort]: sort,
        [PropNames_RearrangeableReturn_shuffle]: shuffle,
        [PropNames_RearrangeableReturn_rearrange]: rearrange,
        [PropNames_RearrangeableReturn_reverse]: reverse,
        [PropNames_RefElementReturn_getElement]: getElement,
        [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
        [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: useStableCallback((...a) => { ocfc2?.(...a); }),
        [PropNames_ManagedChildrenParameters_onChildrenMountChange]: useStableCallback((...a) => { ocmc1?.(...a); ocmc2?.(...a); }),
        [PropNames_RovingTabIndexReturn_focusSelf]: focusSelf,
        [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex,
        [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
        [PropNames_SingleSelectionReturn_changeSingleSelectedIndex]: changeSingleSelectedIndex,
        [PropNames_SingleSelectionReturn_getSingleSelectedIndex]: getSingleSelectedIndex,
        [PropNames_TypeaheadNavigationReturn_getCurrentTypeahead]: getCurrentTypeahead,
        [PropNames_TypeaheadNavigationReturn_typeaheadStatus]: typeaheadStatus
    };
});
/**
 * Helper for `useCompleteListNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 *
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize
 */
export const useCompleteListNavigationChildren = monitored(function useCompleteListNavigationChildren({ context, [PropNames_PaginatedParameters_paginationMax]: paginationMax, [PropNames_PaginatedParameters_paginationMin]: paginationMin, [PropNames_RearrangeableParameters_adjust]: adjust, [PropNames_RearrangeableParameters_children]: children, [PropNames_RearrangeableParameters_compare]: compare, [PropNames_RearrangeableParameters_getIndex]: getIndex, [PropNames_RearrangeableParameters_onRearranged]: onRearranged, [PropNames_StaggeredParameters_staggered]: staggered, [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect, [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange, [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange, ...void1 }) {
    const { context: contextRPS, ...retPC } = useProcessedChildren({
        [PropNames_RefElementReturn_getElement]: context.processedChildrenContext[PropNames_RefElementReturn_getElement],
        [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: context.processedChildrenContext[PropNames_ChildrenHaveFocusReturn_getAnyFocused],
        [PropNames_ManagedChildrenReturn_getChildren]: context.processedChildrenContext[PropNames_ManagedChildrenReturn_getChildren],
        [PropNames_PaginatedParameters_paginationMax]: paginationMax,
        [PropNames_PaginatedParameters_paginationMin]: paginationMin,
        [PropNames_RearrangeableParameters_adjust]: adjust,
        [PropNames_RearrangeableParameters_children]: children,
        [PropNames_RearrangeableParameters_compare]: compare,
        [PropNames_RearrangeableParameters_getIndex]: getIndex,
        [PropNames_RearrangeableParameters_onRearranged]: onRearranged,
        [PropNames_RovingTabIndexReturn_getTabbableIndex]: context.processedChildrenContext[PropNames_RovingTabIndexReturn_getTabbableIndex],
        [PropNames_RovingTabIndexReturn_setTabbableIndex]: context.processedChildrenContext[PropNames_RovingTabIndexReturn_setTabbableIndex],
        [PropNames_StaggeredParameters_staggered]: staggered,
        [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect,
        [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange,
        [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange,
        context,
    });
    return {
        context: contextRPS,
        ...retPC
    };
});
/**
 *
 * @compositeParams
 */
export const useCompleteListNavigationChild = monitored(function useCompleteListNavigationChild({ info: { index, focusSelf, untabbable, ...customUserInfo }, // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
[PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged]: onCurrentFocusedChanged, [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: ocfic3, [PropNames_MultiSelectionChildParameters_initiallyMultiSelected]: initiallyMultiSelected, [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: multiSelectionDisabled, [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: onMultiSelectChange, [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled, [PropNames_TextContentParameters_getText]: getText, [PropNames_RefElementParameters_onElementChange]: onElementChange, [PropNames_RefElementParameters_onMount]: onMount, [PropNames_RefElementParameters_onUnmount]: onUnmount, 
//textContentParameters,
//refElementParameters,
//hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged: ocfic3, ...void7 },
//singleSelectionChildParameters,
//multiSelectionChildParameters,
context: { managedChildContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext, childrenHaveFocusChildContext, ...void5 }, ...void1 }) {
    const { props: propsStable, ...retRE } = useRefElement({
        [PropNames_RefElementParameters_onElementChange]: onElementChange,
        [PropNames_RefElementParameters_onMount]: onMount,
        [PropNames_RefElementParameters_onUnmount]: onUnmount
    });
    const { [PropNames_RefElementReturn_getElement]: getElement } = retRE;
    const { info: infoFromListNav, propsChild, propsTabbable, ...retLN } = useListNavigationSelectionChild({
        info: { index, untabbable },
        context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext },
        [PropNames_MultiSelectionChildParameters_initiallyMultiSelected]: initiallyMultiSelected,
        [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: multiSelectionDisabled,
        [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: onMultiSelectChange,
        [PropNames_RefElementReturn_getElement]: getElement,
        [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled,
        [PropNames_TextContentParameters_getText]: getText
    });
    const allStandardInfo = {
        index,
        focusSelf,
        getElement: getElement,
        untabbable,
        ...infoFromListNav,
    };
    const retMC = useManagedChild({ context: { managedChildContext }, info: { ...allStandardInfo, ...customUserInfo } });
    const { [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: ocfic1 } = retLN;
    const { [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: ocfic2 } = useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext } });
    const { props: props2, ...retHCF } = useHasCurrentFocus({
        [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: useStableCallback((focused, prev, e) => {
            ocfic1?.(focused, prev, e);
            ocfic2?.(focused, prev, e);
            ocfic3?.(focused, prev, e);
        }),
        [PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged]: onCurrentFocusedChanged,
        [PropNames_RefElementReturn_getElement]: getElement
    });
    const props = [
        propsStable,
        props2,
        ...propsChild
    ];
    assertEmptyObject(void1);
    assertEmptyObject(void5);
    return {
        propsChild: props,
        propsTabbable: propsTabbable,
        ...retHCF,
        ...retLN,
        ...retRE,
        ...retMC
    };
});
export function useCompleteListNavigationDeclarative({ [PropNames_SingleSelectionParameters_singleSelectedIndex]: singleSelectedIndex, [PropNames_LinearNavigationParameters_arrowKeyDirection]: arrowKeyDirection, [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys, [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd, [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart, [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear, [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize, [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName, [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode, [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange, [PropNames_PaginatedParameters_paginationMax]: paginationMax, [PropNames_PaginatedParameters_paginationMin]: paginationMin, [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent, [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex, [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange, [PropNames_RovingTabIndexParameters_untabbable]: untabbable, [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName, [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode, [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: ossici, [PropNames_TypeaheadNavigationParameters_collator]: collator, [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead, [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead, [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout, [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect, [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange, [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange, [PropNames_RefElementParameters_onElementChange]: onElementChange, [PropNames_RefElementParameters_onMount]: onMount, [PropNames_RefElementParameters_onUnmount]: onUnmount, [PropNames_StaggeredParameters_staggered]: staggered, ...rest }) {
    const retLN = useCompleteListNavigation({
        [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: singleSelectedIndex,
        [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: useStableCallback((...e) => ossicd?.(...e)),
        [PropNames_LinearNavigationParameters_arrowKeyDirection]: arrowKeyDirection,
        [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys,
        [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
        [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
        [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear,
        [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize,
        [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName,
        [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
        [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange,
        [PropNames_PaginatedParameters_paginationMax]: paginationMax,
        [PropNames_PaginatedParameters_paginationMin]: paginationMin,
        [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent,
        [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex,
        [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange,
        [PropNames_RovingTabIndexParameters_untabbable]: untabbable,
        [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName,
        [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode,
        [PropNames_TypeaheadNavigationParameters_collator]: collator,
        [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead,
        [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead,
        [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout,
        [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect,
        [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange,
        [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange,
        [PropNames_RefElementParameters_onElementChange]: onElementChange,
        [PropNames_RefElementParameters_onMount]: onMount,
        [PropNames_RefElementParameters_onUnmount]: onUnmount,
        [PropNames_StaggeredParameters_staggered]: staggered
    });
    const { [PropNames_SingleSelectionReturn_changeSingleSelectedIndex]: changeSingleSelectedIndex, } = retLN;
    const { [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: ossicd } = useSelectionDeclarative({
        [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: ossici,
        [PropNames_SingleSelectionParameters_singleSelectedIndex]: singleSelectedIndex,
        [PropNames_SingleSelectionReturn_changeSingleSelectedIndex]: changeSingleSelectedIndex
    });
    return retLN;
}
export function useCompleteListNavigationChildDeclarative({ [PropNames_MultiSelectionChildParameters_multiSelected]: multiSelected, context, info: uinfo, [PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged]: onCurrentFocusedChanged, [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged, 
//[PropNames_MultiSelectionChildParameters_initiallyMultiSelected]: initiallyMultiSelected,
[PropNames_MultiSelectionChildParameters_onMultiSelectChange]: omsci, [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: multiSelectionDisabled, [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled, [PropNames_TextContentParameters_getText]: getText, [PropNames_RefElementParameters_onElementChange]: onElementChange, [PropNames_RefElementParameters_onMount]: onMount, [PropNames_RefElementParameters_onUnmount]: onUnmount, ...void1 }) {
    const ret = useCompleteListNavigationChild({
        context,
        info: uinfo,
        [PropNames_MultiSelectionChildParameters_initiallyMultiSelected]: multiSelected,
        [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: useStableCallback((e) => { omscd(e); }),
        [PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged]: onCurrentFocusedChanged,
        [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged,
        [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: multiSelectionDisabled,
        [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled,
        [PropNames_TextContentParameters_getText]: getText,
        [PropNames_RefElementParameters_onElementChange]: onElementChange,
        [PropNames_RefElementParameters_onMount]: onMount,
        [PropNames_RefElementParameters_onUnmount]: onUnmount,
    });
    const { [PropNames_MultiSelectionChildReturn_changeMultiSelected]: changeMultiSelected } = ret;
    const { [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: omscd, info, ...void2 } = useSelectionChildDeclarative({
        [PropNames_MultiSelectionChildParameters_multiSelected]: multiSelected,
        [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: omsci,
        [PropNames_MultiSelectionChildReturn_changeMultiSelected]: changeMultiSelected,
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return ret;
}
//# sourceMappingURL=use-list-navigation-complete.js.map