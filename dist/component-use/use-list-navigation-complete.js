import { useProcessedChildren } from "../component-detail/processed-children/use-processed-children.js";
import { useCreateProcessedChildrenContext } from "../component-detail/processed-children/use-rearrangeable-children.js";
import { useSelectionChildDeclarative, useSelectionDeclarative } from "../component-detail/selection/use-selection.js";
import { useListNavigationSelection, useListNavigationSelectionChild } from "../component-detail/use-list-navigation-selection.js";
import { useRefElement } from "../dom-helpers/use-ref-element.js";
import { useChildrenHaveFocus, useChildrenHaveFocusChild } from "../observers/use-children-have-focus.js";
import { useHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { useManagedChild, useManagedChildren } from "../preact-extensions/use-managed-children.js";
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
export const useCompleteListNavigation = monitored(function useCompleteListNavigation({ "PropNames.RefElementParameters.onElementChange": onElementChange, "PropNames.RefElementParameters.onMount": onMount, "PropNames.RefElementParameters.onUnmount": onUnmount, "PropNames.LinearNavigationParameters.arrowKeyDirection": arrowKeyDirection, "PropNames.LinearNavigationParameters.disableHomeEndKeys": disableHomeEndKeys, "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd, "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart, "PropNames.LinearNavigationParameters.onNavigateLinear": onNavigateLinear, "PropNames.LinearNavigationParameters.pageNavigationSize": pageNavigationSize, "PropNames.MultiSelectionParameters.multiSelectionAriaPropName": multiSelectionAriaPropName, "PropNames.MultiSelectionParameters.multiSelectionMode": multiSelectionMode, "PropNames.MultiSelectionParameters.onSelectionChange": onSelectionChange, "PropNames.PaginatedParameters.paginationMax": paginationMax, "PropNames.PaginatedParameters.paginationMin": paginationMin, "PropNames.RovingTabIndexParameters.focusSelfParent": focusSelfParent, "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex, "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange, "PropNames.RovingTabIndexParameters.untabbable": untabbable, "PropNames.SingleSelectionParameters.initiallySingleSelectedIndex": initiallySingleSelectedIndex, "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": onSingleSelectedIndexChange, "PropNames.SingleSelectionParameters.singleSelectionAriaPropName": singleSelectionAriaPropName, "PropNames.SingleSelectionParameters.singleSelectionMode": singleSelectionMode, "PropNames.TypeaheadNavigationParameters.collator": collator, "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead, "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead, "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout, "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect, "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange, "PropNames.ManagedChildrenParameters.onChildrenMountChange": ocmc1, "PropNames.StaggeredParameters.staggered": staggered, ...void4 }) {
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
    const { props: propsRef, "PropNames.RefElementReturn.getElement": getElement, ...void3 } = useRefElement({
        "PropNames.RefElementParameters.onElementChange": onElementChange,
        "PropNames.RefElementParameters.onMount": onMount,
        "PropNames.RefElementParameters.onUnmount": onUnmount
    });
    // Grab the information from the array of children we may or may not render.
    // (see useProcessedChildren -- it send this information to us if it's used.)
    // These are all stable functions, except for `contextPreprocessing`, which is how it sends things to us.
    const { context: contextProcessing, "PropNames.RearrangeableReturn.indexDemangler": indexDemangler, "PropNames.RearrangeableReturn.indexMangler": indexMangler, "PropNames.RearrangeableReturn.rearrange": rearrange, "PropNames.RearrangeableReturn.reverse": reverse, "PropNames.RearrangeableReturn.shuffle": shuffle, "PropNames.RearrangeableReturn.sort": sort, ...void1 } = useCreateProcessedChildrenContext();
    const { context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext }, props, "PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange": ocfc2, "PropNames.RovingTabIndexReturn.focusSelf": focusSelf, "PropNames.RovingTabIndexReturn.getTabbableIndex": getTabbableIndex, "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex, "PropNames.SingleSelectionReturn.changeSingleSelectedIndex": changeSingleSelectedIndex, "PropNames.SingleSelectionReturn.getSingleSelectedIndex": getSingleSelectedIndex, "PropNames.TypeaheadNavigationReturn.getCurrentTypeahead": getCurrentTypeahead, "PropNames.TypeaheadNavigationReturn.typeaheadStatus": typeaheadStatus, "PropNames.ManagedChildrenParameters.onChildrenMountChange": ocmc2, ...void2 } = useListNavigationSelection({
        "PropNames.ChildrenHaveFocusReturn.getAnyFocused": useStableCallback(() => getAnyFocused()),
        "PropNames.LinearNavigationParameters.arrowKeyDirection": arrowKeyDirection,
        "PropNames.LinearNavigationParameters.disableHomeEndKeys": disableHomeEndKeys,
        "PropNames.LinearNavigationParameters.isValidForLinearNavigation": isValidForNavigation,
        "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd,
        "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart,
        "PropNames.LinearNavigationParameters.onNavigateLinear": onNavigateLinear,
        "PropNames.LinearNavigationParameters.pageNavigationSize": pageNavigationSize,
        "PropNames.MultiSelectionParameters.multiSelectionAriaPropName": multiSelectionAriaPropName,
        "PropNames.MultiSelectionParameters.multiSelectionMode": multiSelectionMode,
        "PropNames.MultiSelectionParameters.onSelectionChange": onSelectionChange,
        "PropNames.PaginatedParameters.paginationMax": paginationMax,
        "PropNames.PaginatedParameters.paginationMin": paginationMin,
        "PropNames.RovingTabIndexParameters.focusSelfParent": focusSelfParent,
        "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex,
        "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange,
        "PropNames.RovingTabIndexParameters.untabbable": untabbable,
        "PropNames.RovingTabIndexParameters.untabbableBehavior": "focus-parent",
        "PropNames.SingleSelectionParameters.initiallySingleSelectedIndex": initiallySingleSelectedIndex,
        "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": onSingleSelectedIndexChange,
        "PropNames.SingleSelectionParameters.singleSelectionAriaPropName": singleSelectionAriaPropName,
        "PropNames.SingleSelectionParameters.singleSelectionMode": singleSelectionMode,
        "PropNames.TypeaheadNavigationParameters.collator": collator,
        "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation": isValidForNavigation,
        "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead,
        "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead,
        "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout,
        "PropNames.LinearNavigationParameters.getHighestIndex": getHighestIndex,
        "PropNames.LinearNavigationParameters.getLowestIndex": getLowestIndex,
        "PropNames.ManagedChildrenReturn.getChildren": getChildren,
        "PropNames.RearrangeableReturn.indexDemangler": indexDemangler,
        "PropNames.RearrangeableReturn.indexMangler": indexMangler,
        "PropNames.RefElementReturn.getElement": getElement,
    });
    const { context: { childrenHaveFocusChildContext }, "PropNames.ChildrenHaveFocusReturn.getAnyFocused": getAnyFocused, ...void5 } = useChildrenHaveFocus({
        "PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange": useStableCallback((...a) => { ocfc2?.(...a); }),
    });
    const { "PropNames.ManagedChildrenReturn.getChildren": getChildren2, context: managedChildRTIContext, ...void6 } = useManagedChildren({
        "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect,
        "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange,
        "PropNames.ManagedChildrenParameters.onChildrenMountChange": useStableCallback((...a) => { ocmc1?.(...a); ocmc2?.(...a); })
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
        "PropNames.ChildrenHaveFocusReturn.getAnyFocused": getAnyFocused,
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.RovingTabIndexReturn.getTabbableIndex": getTabbableIndex,
        "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex,
        "PropNames.PaginatedParameters.paginationMin": paginationMin,
        "PropNames.PaginatedParameters.paginationMax": paginationMax,
        "PropNames.StaggeredParameters.staggered": staggered,
        "PropNames.ManagedChildrenReturn.getChildren": getChildren
    });
    return {
        contextChildren,
        contextProcessing: useMemoObject({
            processedChildrenContext,
            ...contextProcessing
        }),
        props: [...props, propsRef],
        "PropNames.RearrangeableReturn.indexMangler": indexMangler,
        "PropNames.RearrangeableReturn.indexDemangler": indexDemangler,
        "PropNames.RearrangeableReturn.sort": sort,
        "PropNames.RearrangeableReturn.shuffle": shuffle,
        "PropNames.RearrangeableReturn.rearrange": rearrange,
        "PropNames.RearrangeableReturn.reverse": reverse,
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.ManagedChildrenReturn.getChildren": getChildren,
        "PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange": useStableCallback((...a) => { ocfc2?.(...a); }),
        "PropNames.ManagedChildrenParameters.onChildrenMountChange": useStableCallback((...a) => { ocmc1?.(...a); ocmc2?.(...a); }),
        "PropNames.RovingTabIndexReturn.focusSelf": focusSelf,
        "PropNames.RovingTabIndexReturn.getTabbableIndex": getTabbableIndex,
        "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex,
        "PropNames.SingleSelectionReturn.changeSingleSelectedIndex": changeSingleSelectedIndex,
        "PropNames.SingleSelectionReturn.getSingleSelectedIndex": getSingleSelectedIndex,
        "PropNames.TypeaheadNavigationReturn.getCurrentTypeahead": getCurrentTypeahead,
        "PropNames.TypeaheadNavigationReturn.typeaheadStatus": typeaheadStatus
    };
});
/**
 * Helper for `useCompleteListNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 *
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize
 */
export const useCompleteListNavigationChildren = monitored(function useCompleteListNavigationChildren({ context, "PropNames.PaginatedParameters.paginationMax": paginationMax, "PropNames.PaginatedParameters.paginationMin": paginationMin, "PropNames.RearrangeableParameters.adjust": adjust, "PropNames.RearrangeableParameters.children": children, "PropNames.RearrangeableParameters.compare": compare, "PropNames.RearrangeableParameters.getIndex": getIndex, "PropNames.RearrangeableParameters.onRearranged": onRearranged, "PropNames.StaggeredParameters.staggered": staggered, "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect, "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange, "PropNames.ManagedChildrenParameters.onChildrenMountChange": onChildrenMountChange, ...void1 }) {
    const { context: contextRPS, ...retPC } = useProcessedChildren({
        "PropNames.RefElementReturn.getElement": context.processedChildrenContext["PropNames.RefElementReturn.getElement"],
        "PropNames.ChildrenHaveFocusReturn.getAnyFocused": context.processedChildrenContext["PropNames.ChildrenHaveFocusReturn.getAnyFocused"],
        "PropNames.ManagedChildrenReturn.getChildren": context.processedChildrenContext["PropNames.ManagedChildrenReturn.getChildren"],
        "PropNames.PaginatedParameters.paginationMax": paginationMax,
        "PropNames.PaginatedParameters.paginationMin": paginationMin,
        "PropNames.RearrangeableParameters.adjust": adjust,
        "PropNames.RearrangeableParameters.children": children,
        "PropNames.RearrangeableParameters.compare": compare,
        "PropNames.RearrangeableParameters.getIndex": getIndex,
        "PropNames.RearrangeableParameters.onRearranged": onRearranged,
        "PropNames.RovingTabIndexReturn.getTabbableIndex": context.processedChildrenContext["PropNames.RovingTabIndexReturn.getTabbableIndex"],
        "PropNames.RovingTabIndexReturn.setTabbableIndex": context.processedChildrenContext["PropNames.RovingTabIndexReturn.setTabbableIndex"],
        "PropNames.StaggeredParameters.staggered": staggered,
        "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect,
        "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange,
        "PropNames.ManagedChildrenParameters.onChildrenMountChange": onChildrenMountChange,
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
"PropNames.HasCurrentFocusParameters.onCurrentFocusedChanged": onCurrentFocusedChanged, "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic3, "PropNames.MultiSelectionChildParameters.initiallyMultiSelected": initiallyMultiSelected, "PropNames.MultiSelectionChildParameters.multiSelectionDisabled": multiSelectionDisabled, "PropNames.MultiSelectionChildParameters.onMultiSelectChange": onMultiSelectChange, "PropNames.SingleSelectionChildParameters.singleSelectionDisabled": singleSelectionDisabled, "PropNames.TextContentParameters.getText": getText, "PropNames.RefElementParameters.onElementChange": onElementChange, "PropNames.RefElementParameters.onMount": onMount, "PropNames.RefElementParameters.onUnmount": onUnmount, 
//textContentParameters,
//refElementParameters,
//hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged: ocfic3, ...void7 },
//singleSelectionChildParameters,
//multiSelectionChildParameters,
context: { managedChildContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext, childrenHaveFocusChildContext, ...void5 }, ...void1 }) {
    const { props: propsStable, ...retRE } = useRefElement({
        "PropNames.RefElementParameters.onElementChange": onElementChange,
        "PropNames.RefElementParameters.onMount": onMount,
        "PropNames.RefElementParameters.onUnmount": onUnmount
    });
    const { "PropNames.RefElementReturn.getElement": getElement } = retRE;
    const { info: infoFromListNav, propsChild, propsTabbable, ...retLN } = useListNavigationSelectionChild({
        info: { index, untabbable },
        context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext },
        "PropNames.MultiSelectionChildParameters.initiallyMultiSelected": initiallyMultiSelected,
        "PropNames.MultiSelectionChildParameters.multiSelectionDisabled": multiSelectionDisabled,
        "PropNames.MultiSelectionChildParameters.onMultiSelectChange": onMultiSelectChange,
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.SingleSelectionChildParameters.singleSelectionDisabled": singleSelectionDisabled,
        "PropNames.TextContentParameters.getText": getText
    });
    const allStandardInfo = {
        index,
        focusSelf,
        getElement: getElement,
        untabbable,
        ...infoFromListNav,
    };
    const retMC = useManagedChild({ context: { managedChildContext }, info: { ...allStandardInfo, ...customUserInfo } });
    const { "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic1 } = retLN;
    const { "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic2 } = useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext } });
    const { props: props2, ...retHCF } = useHasCurrentFocus({
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": useStableCallback((focused, prev, e) => {
            ocfic1?.(focused, prev, e);
            ocfic2?.(focused, prev, e);
            ocfic3?.(focused, prev, e);
        }),
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedChanged": onCurrentFocusedChanged,
        "PropNames.RefElementReturn.getElement": getElement
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
export function useCompleteListNavigationDeclarative({ "PropNames.SingleSelectionParameters.singleSelectedIndex": singleSelectedIndex, "PropNames.LinearNavigationParameters.arrowKeyDirection": arrowKeyDirection, "PropNames.LinearNavigationParameters.disableHomeEndKeys": disableHomeEndKeys, "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd, "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart, "PropNames.LinearNavigationParameters.onNavigateLinear": onNavigateLinear, "PropNames.LinearNavigationParameters.pageNavigationSize": pageNavigationSize, "PropNames.MultiSelectionParameters.multiSelectionAriaPropName": multiSelectionAriaPropName, "PropNames.MultiSelectionParameters.multiSelectionMode": multiSelectionMode, "PropNames.MultiSelectionParameters.onSelectionChange": onSelectionChange, "PropNames.PaginatedParameters.paginationMax": paginationMax, "PropNames.PaginatedParameters.paginationMin": paginationMin, "PropNames.RovingTabIndexParameters.focusSelfParent": focusSelfParent, "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex, "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange, "PropNames.RovingTabIndexParameters.untabbable": untabbable, "PropNames.SingleSelectionParameters.singleSelectionAriaPropName": singleSelectionAriaPropName, "PropNames.SingleSelectionParameters.singleSelectionMode": singleSelectionMode, "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": ossici, "PropNames.TypeaheadNavigationParameters.collator": collator, "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead, "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead, "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout, "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect, "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange, "PropNames.ManagedChildrenParameters.onChildrenMountChange": onChildrenMountChange, "PropNames.RefElementParameters.onElementChange": onElementChange, "PropNames.RefElementParameters.onMount": onMount, "PropNames.RefElementParameters.onUnmount": onUnmount, "PropNames.StaggeredParameters.staggered": staggered, ...rest }) {
    const retLN = useCompleteListNavigation({
        "PropNames.SingleSelectionParameters.initiallySingleSelectedIndex": singleSelectedIndex,
        "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": useStableCallback((...e) => ossicd?.(...e)),
        "PropNames.LinearNavigationParameters.arrowKeyDirection": arrowKeyDirection,
        "PropNames.LinearNavigationParameters.disableHomeEndKeys": disableHomeEndKeys,
        "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd,
        "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart,
        "PropNames.LinearNavigationParameters.onNavigateLinear": onNavigateLinear,
        "PropNames.LinearNavigationParameters.pageNavigationSize": pageNavigationSize,
        "PropNames.MultiSelectionParameters.multiSelectionAriaPropName": multiSelectionAriaPropName,
        "PropNames.MultiSelectionParameters.multiSelectionMode": multiSelectionMode,
        "PropNames.MultiSelectionParameters.onSelectionChange": onSelectionChange,
        "PropNames.PaginatedParameters.paginationMax": paginationMax,
        "PropNames.PaginatedParameters.paginationMin": paginationMin,
        "PropNames.RovingTabIndexParameters.focusSelfParent": focusSelfParent,
        "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex,
        "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange,
        "PropNames.RovingTabIndexParameters.untabbable": untabbable,
        "PropNames.SingleSelectionParameters.singleSelectionAriaPropName": singleSelectionAriaPropName,
        "PropNames.SingleSelectionParameters.singleSelectionMode": singleSelectionMode,
        "PropNames.TypeaheadNavigationParameters.collator": collator,
        "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead,
        "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead,
        "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout,
        "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect,
        "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange,
        "PropNames.ManagedChildrenParameters.onChildrenMountChange": onChildrenMountChange,
        "PropNames.RefElementParameters.onElementChange": onElementChange,
        "PropNames.RefElementParameters.onMount": onMount,
        "PropNames.RefElementParameters.onUnmount": onUnmount,
        "PropNames.StaggeredParameters.staggered": staggered
    });
    const { "PropNames.SingleSelectionReturn.changeSingleSelectedIndex": changeSingleSelectedIndex, } = retLN;
    const { "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": ossicd } = useSelectionDeclarative({
        "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": ossici,
        "PropNames.SingleSelectionParameters.singleSelectedIndex": singleSelectedIndex,
        "PropNames.SingleSelectionReturn.changeSingleSelectedIndex": changeSingleSelectedIndex
    });
    return retLN;
}
export function useCompleteListNavigationChildDeclarative({ "PropNames.MultiSelectionChildParameters.multiSelected": multiSelected, context, info: uinfo, "PropNames.HasCurrentFocusParameters.onCurrentFocusedChanged": onCurrentFocusedChanged, "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": onCurrentFocusedInnerChanged, "PropNames.MultiSelectionChildParameters.onMultiSelectChange": omsci, "PropNames.MultiSelectionChildParameters.multiSelectionDisabled": multiSelectionDisabled, "PropNames.SingleSelectionChildParameters.singleSelectionDisabled": singleSelectionDisabled, "PropNames.TextContentParameters.getText": getText, "PropNames.RefElementParameters.onElementChange": onElementChange, "PropNames.RefElementParameters.onMount": onMount, "PropNames.RefElementParameters.onUnmount": onUnmount, ...void1 }) {
    const ret = useCompleteListNavigationChild({
        context,
        info: uinfo,
        "PropNames.MultiSelectionChildParameters.initiallyMultiSelected": multiSelected,
        "PropNames.MultiSelectionChildParameters.onMultiSelectChange": useStableCallback((e) => { omscd(e); }),
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedChanged": onCurrentFocusedChanged,
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": onCurrentFocusedInnerChanged,
        "PropNames.MultiSelectionChildParameters.multiSelectionDisabled": multiSelectionDisabled,
        "PropNames.SingleSelectionChildParameters.singleSelectionDisabled": singleSelectionDisabled,
        "PropNames.TextContentParameters.getText": getText,
        "PropNames.RefElementParameters.onElementChange": onElementChange,
        "PropNames.RefElementParameters.onMount": onMount,
        "PropNames.RefElementParameters.onUnmount": onUnmount,
    });
    const { "PropNames.MultiSelectionChildReturn.changeMultiSelected": changeMultiSelected } = ret;
    const { "PropNames.MultiSelectionChildParameters.onMultiSelectChange": omscd, info, ...void2 } = useSelectionChildDeclarative({
        "PropNames.MultiSelectionChildParameters.multiSelected": multiSelected,
        "PropNames.MultiSelectionChildParameters.onMultiSelectChange": omsci,
        "PropNames.MultiSelectionChildReturn.changeMultiSelected": changeMultiSelected,
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return ret;
}
//# sourceMappingURL=use-list-navigation-complete.js.map