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
export const useCompleteListNavigation = monitored(function useCompleteListNavigation({ "PropNames.ManagedChildrenParameters.onChildrenMountChange": ocmc2, ...args }) {
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
    const { props: propsRef, "PropNames.RefElementReturn.getElement": getElement, ...void3 } = useRefElement(args);
    // Grab the information from the array of children we may or may not render.
    // (see useProcessedChildren -- it send this information to us if it's used.)
    // These are all stable functions, except for `contextPreprocessing`, which is how it sends things to us.
    const { context: contextProcessing, "PropNames.RearrangeableReturn.indexDemangler": indexDemangler, "PropNames.RearrangeableReturn.indexMangler": indexMangler, "PropNames.RearrangeableReturn.rearrange": rearrange, "PropNames.RearrangeableReturn.reverse": reverse, "PropNames.RearrangeableReturn.shuffle": shuffle, "PropNames.RearrangeableReturn.sort": sort, ...void1 } = useCreateProcessedChildrenContext();
    const { context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext }, props, "PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange": ocfc2, "PropNames.ManagedChildrenParameters.onChildrenMountChange": ocmc1, ...retLNS } = useListNavigationSelection({
        "PropNames.ChildrenHaveFocusReturn.getAnyFocused": useStableCallback(() => getAnyFocused()),
        "PropNames.RovingTabIndexParameters.untabbableBehavior": "focus-parent",
        "PropNames.LinearNavigationParameters.isValidForLinearNavigation": isValidForNavigation,
        "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation": isValidForNavigation,
        "PropNames.LinearNavigationParameters.getHighestIndex": getHighestIndex,
        "PropNames.LinearNavigationParameters.getLowestIndex": getLowestIndex,
        "PropNames.ManagedChildrenReturn.getChildren": getChildren,
        "PropNames.RearrangeableReturn.indexDemangler": indexDemangler,
        "PropNames.RearrangeableReturn.indexMangler": indexMangler,
        "PropNames.RefElementReturn.getElement": getElement,
        ...args,
    });
    const { context: { childrenHaveFocusChildContext }, "PropNames.ChildrenHaveFocusReturn.getAnyFocused": getAnyFocused, ...void5 } = useChildrenHaveFocus({
        "PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange": useStableCallback((...a) => { ocfc2?.(...a); }),
    });
    const { "PropNames.ManagedChildrenReturn.getChildren": getChildren2, context: managedChildRTIContext, ...void6 } = useManagedChildren(args);
    const contextChildren = useMemoObject({
        childrenHaveFocusChildContext,
        rovingTabIndexContext,
        singleSelectionContext,
        multiSelectionContext,
        typeaheadNavigationContext,
        ...managedChildRTIContext,
    });
    assertEmptyObject(void1);
    assertEmptyObject(void3);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    const processedChildrenContext = useMemoObject({
        "PropNames.ChildrenHaveFocusReturn.getAnyFocused": getAnyFocused,
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.RovingTabIndexReturn.getTabbableIndex": retLNS["PropNames.RovingTabIndexReturn.getTabbableIndex"],
        "PropNames.RovingTabIndexReturn.setTabbableIndex": retLNS["PropNames.RovingTabIndexReturn.setTabbableIndex"],
        "PropNames.PaginatedParameters.paginationMin": args["PropNames.PaginatedParameters.paginationMin"],
        "PropNames.PaginatedParameters.paginationMax": args["PropNames.PaginatedParameters.paginationMax"],
        "PropNames.StaggeredParameters.staggered": args["PropNames.StaggeredParameters.staggered"],
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
        ...retLNS
    };
});
/**
 * Helper for `useCompleteListNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 *
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize
 */
export const useCompleteListNavigationChildren = monitored(function useCompleteListNavigationChildren({ context, ...args }) {
    const { context: contextRPS, ...retPC } = useProcessedChildren({
        ...context.processedChildrenContext,
        context,
        ...args,
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
export const useCompleteListNavigationChild = monitored(function useCompleteListNavigationChild({ info: { index, focusSelf, untabbable, ...customUserInfo }, context, "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic3, ...args }) {
    const { props: propsStable, ...retRE } = useRefElement(args);
    const { "PropNames.RefElementReturn.getElement": getElement } = retRE;
    const { info: infoFromListNav, propsChild, propsTabbable, ...retLN } = useListNavigationSelectionChild({
        info: { index, untabbable },
        context,
        "PropNames.RefElementReturn.getElement": getElement,
        ...args
    });
    const allStandardInfo = {
        index,
        focusSelf,
        untabbable,
        getElement,
        ...infoFromListNav,
    };
    const retMC = useManagedChild({ context, info: { ...allStandardInfo, ...customUserInfo } });
    const { "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic1 } = retLN;
    const { "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic2 } = useChildrenHaveFocusChild({ context });
    const { props: props2, ...retHCF } = useHasCurrentFocus({
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": useStableCallback((focused, prev, e) => {
            ocfic1?.(focused, prev, e);
            ocfic2?.(focused, prev, e);
            ocfic3?.(focused, prev, e);
        }),
        "PropNames.RefElementReturn.getElement": getElement,
        ...args
    });
    const props = [
        propsStable,
        props2,
        ...propsChild
    ];
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