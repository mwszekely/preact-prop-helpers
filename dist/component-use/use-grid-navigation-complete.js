import { useProcessedChildren } from "../component-detail/processed-children/use-processed-children.js";
import { useCreateProcessedChildrenContext } from "../component-detail/processed-children/use-rearrangeable-children.js";
import { useSelectionDeclarative } from "../component-detail/selection/use-selection.js";
import { useGridNavigationSelection, useGridNavigationSelectionCell, useGridNavigationSelectionRow } from "../component-detail/use-grid-navigation-selection.js";
import { useRefElement } from "../dom-helpers/use-ref-element.js";
import { useChildrenHaveFocus } from "../observers/use-children-have-focus.js";
import { useHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { useManagedChild, useManagedChildren } from "../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { useCallback } from "../util/lib.js";
import { monitored } from "../util/use-call-count.js";
/**
 * Combines all the grid- (&amp; list-) related hooks into one giant hook that accomplishes everything.
 *
 * @compositeParams
 *
 * @hasChild {@link useCompleteGridNavigationRow}
 * @hasChild {@link useCompleteGridNavigationCell}
 */
export const useCompleteGridNavigation = monitored(function useCompleteGridNavigation({ "PropNames.GridNavigationParameters.initiallyTabbableColumn": initiallyTabbableColumn, "PropNames.GridNavigationParameters.onTabbableColumnChange": onTabbableColumnChange, "PropNames.LinearNavigationParameters.disableHomeEndKeys": disableHomeEndKeys, "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd, "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart, "PropNames.LinearNavigationParameters.onNavigateLinear": onNavigateLinear, "PropNames.LinearNavigationParameters.pageNavigationSize": pageNavigationSize, "PropNames.MultiSelectionParameters.multiSelectionAriaPropName": multiSelectionAriaPropName, "PropNames.MultiSelectionParameters.multiSelectionMode": multiSelectionMode, "PropNames.MultiSelectionParameters.onSelectionChange": onSelectionChange, "PropNames.PaginatedParameters.paginationMax": paginationMax, "PropNames.PaginatedParameters.paginationMin": paginationMin, "PropNames.RovingTabIndexParameters.focusSelfParent": focusSelfParent, "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex, "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange, "PropNames.RovingTabIndexParameters.untabbable": untabbable, "PropNames.SingleSelectionParameters.initiallySingleSelectedIndex": initiallySingleSelectedIndex, "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": onSingleSelectedIndexChange, "PropNames.SingleSelectionParameters.singleSelectionAriaPropName": singleSelectionAriaPropName, "PropNames.SingleSelectionParameters.singleSelectionMode": singleSelectionMode, "PropNames.TypeaheadNavigationParameters.collator": collator, "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead, "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead, "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout, "PropNames.RefElementParameters.onElementChange": onElementChange, "PropNames.RefElementParameters.onMount": onMount, "PropNames.RefElementParameters.onUnmount": onUnmount, "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect, "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange, "PropNames.ManagedChildrenParameters.onChildrenMountChange": ocmc2, "PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange": ocfc1, "PropNames.StaggeredParameters.staggered": staggered, ...void1 }) {
    assertEmptyObject(void1);
    const getChildren = useCallback(() => getChildrenButItsDeclaredTooLateToBeUseful(), []);
    const getLowestChildIndex = useCallback(() => getChildren().getLowestIndex(), []);
    const getHighestChildIndex = useCallback(() => getChildren().getHighestIndex(), []);
    const isValidForNavigation = useCallback((i) => {
        const child = getChildren().getAt(i);
        if (child == null)
            return false;
        if (child.untabbable)
            return false;
        return true;
    }, []);
    const { props: propsStable, "PropNames.RefElementReturn.getElement": getElement, ...retRE } = useRefElement({
        "PropNames.RefElementParameters.onElementChange": onElementChange,
        "PropNames.RefElementParameters.onMount": onMount,
        "PropNames.RefElementParameters.onUnmount": onUnmount
    });
    // Grab the information from the array of children we may or may not render.
    // (see useProcessedChildren -- it send this information to us if it's used.)
    // These are all stable functions, except for `contextPreprocessing`, which is how it sends things to us.
    const { context: contextProcessing, "PropNames.RearrangeableReturn.indexDemangler": indexDemangler, "PropNames.RearrangeableReturn.indexMangler": indexMangler, "PropNames.RearrangeableReturn.rearrange": rearrange, "PropNames.RearrangeableReturn.reverse": reverse, "PropNames.RearrangeableReturn.shuffle": shuffle, "PropNames.RearrangeableReturn.sort": sort, ...retCPC } = useCreateProcessedChildrenContext();
    const getAnyFocused = useStableCallback(() => getAnyFocused2());
    const setTabbableIndex = useStableCallback((...a) => setTabbableIndex2(...a));
    const { context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext }, props, "PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange": ocfc2, "PropNames.RovingTabIndexReturn.getTabbableIndex": getTabbableIndex, "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex2, "PropNames.ManagedChildrenParameters.onChildrenMountChange": ocmc1, "PropNames.RovingTabIndexReturn.focusSelf": focusSelf, "PropNames.SingleSelectionReturn.changeSingleSelectedIndex": changeSingleSelectedIndex, "PropNames.SingleSelectionReturn.getSingleSelectedIndex": getSingleSelectedIndex, "PropNames.TypeaheadNavigationReturn.getCurrentTypeahead": getCurrentTypeahead, "PropNames.TypeaheadNavigationReturn.typeaheadStatus": typeaheadStatus, ...retGN } = useGridNavigationSelection({
        "PropNames.ChildrenHaveFocusReturn.getAnyFocused": getAnyFocused,
        "PropNames.RearrangeableReturn.indexDemangler": indexDemangler,
        "PropNames.RearrangeableReturn.indexMangler": indexMangler,
        "PropNames.ManagedChildrenReturn.getChildren": getChildren,
        "PropNames.GridNavigationParameters.initiallyTabbableColumn": initiallyTabbableColumn,
        "PropNames.GridNavigationParameters.onTabbableColumnChange": onTabbableColumnChange,
        "PropNames.LinearNavigationParameters.disableHomeEndKeys": disableHomeEndKeys,
        "PropNames.LinearNavigationParameters.getHighestIndex": getHighestChildIndex,
        "PropNames.LinearNavigationParameters.getLowestIndex": getLowestChildIndex,
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
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.RovingTabIndexParameters.focusSelfParent": focusSelfParent,
        "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex,
        "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange,
        "PropNames.RovingTabIndexParameters.untabbable": untabbable,
        "PropNames.RovingTabIndexParameters.untabbableBehavior": "focus-parent",
        "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex,
        "PropNames.SingleSelectionParameters.initiallySingleSelectedIndex": initiallySingleSelectedIndex,
        "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": onSingleSelectedIndexChange,
        "PropNames.SingleSelectionParameters.singleSelectionAriaPropName": singleSelectionAriaPropName,
        "PropNames.SingleSelectionParameters.singleSelectionMode": singleSelectionMode,
        "PropNames.TypeaheadNavigationParameters.collator": collator,
        "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation": isValidForNavigation,
        "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead,
        "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead,
        "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout,
    });
    //const { "PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange": onCompositeFocusChange } = retGN
    const onCompositeFocusChange = useStableCallback((...a) => { ocfc1?.(...a); ocfc2?.(...a); });
    const { context: { childrenHaveFocusChildContext }, "PropNames.ChildrenHaveFocusReturn.getAnyFocused": getAnyFocused2, ...retCHF } = useChildrenHaveFocus({
        "PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange": onCompositeFocusChange
    });
    const onChildrenMountChange = useStableCallback((...a) => { ocmc1?.(...a); ocmc2?.(...a); });
    const { context: { managedChildContext }, "PropNames.ManagedChildrenReturn.getChildren": getChildrenButItsDeclaredTooLateToBeUseful, ...retMC } = useManagedChildren({
        "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect,
        "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange,
        "PropNames.ManagedChildrenParameters.onChildrenMountChange": onChildrenMountChange
    });
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
    const c2 = useMemoObject({
        processedChildrenContext,
        ...contextProcessing
    });
    assertEmptyObject(void1);
    assertEmptyObject(retGN);
    assertEmptyObject(retCHF);
    assertEmptyObject(retRE);
    assertEmptyObject(retCPC);
    assertEmptyObject(retMC);
    const ret = {
        props: [...props, propsStable],
        contextProcessing: c2,
        contextChildren: useMemoObject({
            singleSelectionContext,
            multiSelectionContext,
            managedChildContext,
            rovingTabIndexContext,
            typeaheadNavigationContext,
            childrenHaveFocusChildContext,
            gridNavigationRowContext,
            contextProcessing: c2
        }),
        "PropNames.RearrangeableReturn.rearrange": rearrange,
        "PropNames.RearrangeableReturn.reverse": reverse,
        "PropNames.RearrangeableReturn.shuffle": shuffle,
        "PropNames.RearrangeableReturn.sort": sort,
        "PropNames.RovingTabIndexReturn.focusSelf": focusSelf,
        "PropNames.RovingTabIndexReturn.getTabbableIndex": getTabbableIndex,
        "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex,
        "PropNames.SingleSelectionReturn.changeSingleSelectedIndex": changeSingleSelectedIndex,
        "PropNames.SingleSelectionReturn.getSingleSelectedIndex": getSingleSelectedIndex,
        "PropNames.TypeaheadNavigationReturn.getCurrentTypeahead": getCurrentTypeahead,
        "PropNames.TypeaheadNavigationReturn.typeaheadStatus": typeaheadStatus,
        "PropNames.ChildrenHaveFocusReturn.getAnyFocused": getAnyFocused2,
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.ManagedChildrenReturn.getChildren": getChildren,
        ...retGN,
        ...retCHF,
        ...retRE,
        ...retCPC,
        ...retMC
    };
    return ret;
});
/**
 * Helper for `useCompleteGridNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 *
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize
 */
export const useCompleteGridNavigationRows = monitored(function useCompleteGridNavigationRows({ context, "PropNames.ChildrenHaveFocusReturn.getAnyFocused": getAnyFocused, "PropNames.ManagedChildrenReturn.getChildren": getChildren, "PropNames.PaginatedParameters.paginationMax": paginationMax, "PropNames.PaginatedParameters.paginationMin": paginationMin, "PropNames.RearrangeableParameters.adjust": adjust, "PropNames.RearrangeableParameters.children": childrin, "PropNames.RearrangeableParameters.compare": compare, "PropNames.RearrangeableParameters.getIndex": getIndex, "PropNames.RearrangeableParameters.onRearranged": onRearranged, "PropNames.RovingTabIndexReturn.getTabbableIndex": getTabbableIndex, "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex, "PropNames.StaggeredParameters.staggered": staggered, "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect, "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange, "PropNames.ManagedChildrenParameters.onChildrenMountChange": onChildrenMountChange, ...void1 }) {
    const { context: contextRPS, "PropNames.RearrangeableReturn.children": childout, "PropNames.PaginatedReturn.refreshPagination": refreshPagination, "PropNames.RearrangeableReturn.indexDemangler": indexDemangler, "PropNames.RearrangeableReturn.indexMangler": indexMangler, "PropNames.RearrangeableReturn.rearrange": rearrange, "PropNames.RearrangeableReturn.reverse": reverse, "PropNames.RearrangeableReturn.shuffle": shuffle, "PropNames.RearrangeableReturn.sort": sort, "PropNames.StaggeredReturn.stillStaggering": stillStaggering, ...retPC } = useProcessedChildren({
        "PropNames.ChildrenHaveFocusReturn.getAnyFocused": getAnyFocused,
        "PropNames.ManagedChildrenReturn.getChildren": getChildren,
        "PropNames.PaginatedParameters.paginationMax": paginationMax,
        "PropNames.PaginatedParameters.paginationMin": paginationMin,
        "PropNames.RearrangeableParameters.adjust": adjust,
        "PropNames.RearrangeableParameters.children": childrin,
        "PropNames.RearrangeableParameters.compare": compare,
        "PropNames.RearrangeableParameters.getIndex": getIndex,
        "PropNames.RearrangeableParameters.onRearranged": onRearranged,
        "PropNames.RefElementReturn.getElement": context.processedChildrenContext["PropNames.RefElementReturn.getElement"],
        "PropNames.RovingTabIndexReturn.getTabbableIndex": getTabbableIndex,
        "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex,
        "PropNames.StaggeredParameters.staggered": staggered,
        "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect,
        "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange,
        "PropNames.ManagedChildrenParameters.onChildrenMountChange": onChildrenMountChange,
        context,
    });
    assertEmptyObject(void1);
    return {
        context: contextRPS,
        "PropNames.RearrangeableReturn.children": childout,
        "PropNames.PaginatedReturn.refreshPagination": refreshPagination,
        "PropNames.RearrangeableReturn.indexDemangler": indexDemangler,
        "PropNames.RearrangeableReturn.indexMangler": indexMangler,
        "PropNames.RearrangeableReturn.rearrange": rearrange,
        "PropNames.RearrangeableReturn.reverse": reverse,
        "PropNames.RearrangeableReturn.shuffle": shuffle,
        "PropNames.RearrangeableReturn.sort": sort,
        "PropNames.StaggeredReturn.stillStaggering": stillStaggering,
        ...retPC
    };
});
/**
 * @compositeParams
 */
export const useCompleteGridNavigationRow = monitored(function useCompleteGridNavigationRow({ info: { index, untabbable, ...customUserInfo }, context: contextIncomingForRowAsChildOfTable, "PropNames.HasCurrentFocusParameters.onCurrentFocusedChanged": onCurrentFocusedChanged, "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic3, "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd, "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart, "PropNames.MultiSelectionChildParameters.initiallyMultiSelected": initiallyMultiSelected, "PropNames.MultiSelectionChildParameters.multiSelectionDisabled": multiSelectionDisabled, "PropNames.MultiSelectionChildParameters.onMultiSelectChange": onMultiSelectChange, "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex, "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange, "PropNames.SingleSelectionChildParameters.singleSelectionDisabled": singleSelectionDisabled, "PropNames.TextContentParameters.getText": getText, "PropNames.TypeaheadNavigationParameters.collator": collator, "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead, "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead, "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout, "PropNames.RefElementParameters.onElementChange": onElementChange, "PropNames.RefElementParameters.onMount": onMount, "PropNames.RefElementParameters.onUnmount": onUnmount, "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect, "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange, "PropNames.ManagedChildrenParameters.onChildrenMountChange": ocmc1, ...void1 }) {
    // Create some helper functions
    const getRows = useCallback(() => getRows2(), []);
    const getCells = useCallback(() => getCells2(), []);
    const getHighestChildIndex = useCallback(() => getRows().getHighestIndex(), []);
    const getLowestChildIndex = useCallback(() => getRows().getLowestIndex(), []);
    const isValidForNavigation = useCallback((i) => {
        const child = getRows().getAt(i);
        if (child == null)
            return false;
        if (child.untabbable)
            return false;
        return true;
    }, []);
    // Someone somewhere needs useRefElement, no shock there
    const { props: propsStable, "PropNames.RefElementReturn.getElement": getElement, ...retRE } = useRefElement({
        "PropNames.RefElementParameters.onElementChange": onElementChange,
        "PropNames.RefElementParameters.onMount": onMount,
        "PropNames.RefElementParameters.onUnmount": onUnmount
    });
    // Enormous bag of parameters for useGridNavigationRow
    const parameters = {
        context: contextIncomingForRowAsChildOfTable,
        info: { index, untabbable },
        "PropNames.LinearNavigationParameters.getHighestIndex": getHighestChildIndex,
        "PropNames.LinearNavigationParameters.getLowestIndex": getLowestChildIndex,
        "PropNames.LinearNavigationParameters.isValidForLinearNavigation": isValidForNavigation,
        "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation": isValidForNavigation,
        "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd,
        "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart,
        "PropNames.ManagedChildrenReturn.getChildren": getCells,
        "PropNames.MultiSelectionChildParameters.initiallyMultiSelected": initiallyMultiSelected,
        "PropNames.MultiSelectionChildParameters.multiSelectionDisabled": multiSelectionDisabled,
        "PropNames.MultiSelectionChildParameters.onMultiSelectChange": onMultiSelectChange,
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex,
        "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange,
        "PropNames.RovingTabIndexParameters.untabbable": untabbable,
        "PropNames.SingleSelectionChildParameters.singleSelectionDisabled": singleSelectionDisabled,
        "PropNames.TextContentParameters.getText": getText,
        "PropNames.TypeaheadNavigationParameters.collator": collator,
        "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead,
        "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead,
        "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout,
    };
    // Actually call useGridNavigationRow,
    // and get an enormous bag of return values
    const { context: contextGNR, info: infoRowReturn, props: p3, "PropNames.MultiSelectionParameters.multiSelectionMode": multiSelectionMode, "PropNames.PressParameters.excludeSpace": excludeSpace, "PropNames.PressParameters.onPressSync": onPressSync, "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic2, "PropNames.ManagedChildrenParameters.onChildrenMountChange": ocmc2, "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex, "PropNames.RovingTabIndexReturn.getTabbableIndex": getTabbableIndex, "PropNames.RovingTabIndexReturn.focusSelf": focusSelf, "PropNames.RovingTabIndexChildReturn.tabbable": tabbable, "PropNames.RovingTabIndexChildReturn.getTabbable": getTabbable, "PropNames.TextContentReturn.getTextContent": getTextContent, "PropNames.MultiSelectionChildReturn.getMultiSelected": getMultiSelected, "PropNames.TypeaheadNavigationReturn.getCurrentTypeahead": getCurrentTypeahead, "PropNames.TypeaheadNavigationReturn.typeaheadStatus": typeaheadStatus, "PropNames.SingleSelectionChildReturn.singleSelected": singleSelected, "PropNames.MultiSelectionChildReturn.multiSelected": multiSelected, "PropNames.SingleSelectionChildReturn.getSingleSelected": getSingleSelected, "PropNames.SingleSelectionChildReturn.singleSelectedOffset": singleSelectedOffset, "PropNames.SingleSelectionChildReturn.singleSelectionMode": singleSelectionMode, "PropNames.SingleSelectionChildReturn.getSingleSelectedOffset": getSingleSelectedOffset, "PropNames.MultiSelectionChildReturn.changeMultiSelected": changeMultiSelected, ...retGNS } = useGridNavigationSelectionRow(parameters);
    // This is all the info the parent needs about us, the row
    // (NOT the info the cells provide to us, the row)
    const completeInfo = {
        getElement,
        index,
        untabbable,
        ...infoRowReturn,
    };
    const onChildrenMountChange = useStableCallback((...a) => { ocmc1?.(...a); ocmc2?.(...a); });
    // Call both `useManagedChildren` and `useManagedChild` with their appropriate parameters.
    const { context: contextMC, "PropNames.ManagedChildrenReturn.getChildren": getCells2, ...retMC } = useManagedChildren({
        "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect,
        "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange,
        "PropNames.ManagedChildrenParameters.onChildrenMountChange": onChildrenMountChange
    });
    const { "PropNames.ManagedChildReturn.getChildren": getRows2, ...retMCC } = useManagedChild({
        context: contextIncomingForRowAsChildOfTable,
        info: { ...completeInfo, ...customUserInfo }
    });
    const onCurrentFocusedInnerChanged = useStableCallback((focused, prevFocused, reason) => {
        ocfic2?.(focused, prevFocused, reason);
        ocfic3?.(focused, prevFocused, reason);
    });
    const { props: p2, "PropNames.HasCurrentFocusReturn.getCurrentFocused": getCurrentFocused, "PropNames.HasCurrentFocusReturn.getCurrentFocusedInner": getCurrentFocusedInner, ...retHCF } = useHasCurrentFocus({
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedChanged": onCurrentFocusedChanged,
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": onCurrentFocusedInnerChanged
    });
    assertEmptyObject(void1);
    assertEmptyObject(retHCF);
    assertEmptyObject(retMCC);
    assertEmptyObject(retMC);
    assertEmptyObject(retGNS);
    const ret = {
        context: useMemoObject({
            ...contextGNR,
            ...contextMC,
        }),
        props: [
            propsStable,
            ...p3,
            p2
        ],
        "PropNames.HasCurrentFocusReturn.getCurrentFocused": getCurrentFocused,
        "PropNames.HasCurrentFocusReturn.getCurrentFocusedInner": getCurrentFocusedInner,
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": onCurrentFocusedInnerChanged,
        "PropNames.ManagedChildrenParameters.onChildrenMountChange": onChildrenMountChange,
        "PropNames.ManagedChildrenReturn.getChildren": getCells,
        "PropNames.ManagedChildReturn.getChildren": getRows,
        "PropNames.MultiSelectionParameters.multiSelectionMode": multiSelectionMode,
        "PropNames.PressParameters.excludeSpace": excludeSpace,
        "PropNames.PressParameters.onPressSync": onPressSync,
        "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex,
        "PropNames.RovingTabIndexReturn.getTabbableIndex": getTabbableIndex,
        "PropNames.RovingTabIndexReturn.focusSelf": focusSelf,
        "PropNames.RovingTabIndexChildReturn.tabbable": tabbable,
        "PropNames.RovingTabIndexChildReturn.getTabbable": getTabbable,
        "PropNames.TextContentReturn.getTextContent": getTextContent,
        "PropNames.MultiSelectionChildReturn.getMultiSelected": getMultiSelected,
        "PropNames.TypeaheadNavigationReturn.getCurrentTypeahead": getCurrentTypeahead,
        "PropNames.TypeaheadNavigationReturn.typeaheadStatus": typeaheadStatus,
        "PropNames.SingleSelectionChildReturn.singleSelected": singleSelected,
        "PropNames.MultiSelectionChildReturn.multiSelected": multiSelected,
        "PropNames.SingleSelectionChildReturn.getSingleSelected": getSingleSelected,
        "PropNames.SingleSelectionChildReturn.singleSelectedOffset": singleSelectedOffset,
        "PropNames.SingleSelectionChildReturn.singleSelectionMode": singleSelectionMode,
        "PropNames.SingleSelectionChildReturn.getSingleSelectedOffset": getSingleSelectedOffset,
        "PropNames.MultiSelectionChildReturn.changeMultiSelected": changeMultiSelected,
        ...retHCF,
        ...retGNS,
        ...retRE,
        ...retMCC
    };
    return ret;
});
/**
 * @compositeParams
 */
export const useCompleteGridNavigationCell = monitored(function useCompleteGridNavigationCell({ 
//gridNavigationCellParameters,
context, 
//textContentParameters,
info: { focusSelf, index, untabbable, ...customUserInfo }, "PropNames.RefElementParameters.onElementChange": onElementChange, "PropNames.RefElementParameters.onMount": onMount, "PropNames.RefElementParameters.onUnmount": onUnmount, "PropNames.GridNavigationCellParameters.colSpan": colSpan, "PropNames.RefElementReturn.getElement": getElement, "PropNames.TextContentParameters.getText": getText, "PropNames.HasCurrentFocusParameters.onCurrentFocusedChanged": onCurrentFocusedChanged, "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic2, ...void1 }) {
    const { props: propsStable, ...retRE } = useRefElement({
        "PropNames.RefElementParameters.onElementChange": onElementChange,
        "PropNames.RefElementParameters.onMount": onMount,
        "PropNames.RefElementParameters.onUnmount": onUnmount
    });
    const { "PropNames.PressParameters.excludeSpace": es1, "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic1, props: propsRti, info: info2, ...retGNS } = useGridNavigationSelectionCell({
        info: { index, untabbable },
        context,
        "PropNames.GridNavigationCellParameters.colSpan": colSpan,
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.TextContentParameters.getText": getText,
    });
    assertEmptyObject(void1);
    const onCurrentFocusedInnerChanged = useStableCallback((...a) => { ocfic1?.(...a); ocfic2?.(...a); });
    const { props: p1, ...retHCF } = useHasCurrentFocus({
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedChanged": onCurrentFocusedChanged,
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": onCurrentFocusedInnerChanged,
        "PropNames.RefElementReturn.getElement": getElement
    });
    const baseInfo = {
        getElement,
        getLocallyTabbable: retGNS["PropNames.RovingTabIndexChildReturn.getTabbable"],
        setLocallyTabbable: info2.setLocallyTabbable,
        focusSelf,
        index,
        untabbable
    };
    const { ...retMCR } = useManagedChild({ context, info: { ...baseInfo, ...customUserInfo } });
    return {
        props: [
            propsStable,
            propsRti,
            p1
        ],
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": onCurrentFocusedInnerChanged,
        "PropNames.PressParameters.excludeSpace": useStableCallback(() => (es1?.() || false)),
        ...retRE,
        ...retMCR,
        ...retHCF,
        ...retGNS,
    };
});
export function useCompleteGridNavigationDeclarative({ "PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange": onCompositeFocusChange, "PropNames.GridNavigationParameters.initiallyTabbableColumn": initiallyTabbableColumn, "PropNames.GridNavigationParameters.onTabbableColumnChange": onTabbableColumnChange, "PropNames.LinearNavigationParameters.disableHomeEndKeys": disableHomeEndKeys, "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd, "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart, "PropNames.LinearNavigationParameters.onNavigateLinear": onNavigateLinear, "PropNames.LinearNavigationParameters.pageNavigationSize": pageNavigationSize, "PropNames.MultiSelectionParameters.multiSelectionAriaPropName": multiSelectionAriaPropName, "PropNames.MultiSelectionParameters.multiSelectionMode": multiSelectionMode, "PropNames.MultiSelectionParameters.onSelectionChange": onSelectionChange, "PropNames.PaginatedParameters.paginationMax": paginationMax, "PropNames.PaginatedParameters.paginationMin": paginationMin, "PropNames.RovingTabIndexParameters.focusSelfParent": focusSelfParent, "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex, "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange, "PropNames.RovingTabIndexParameters.untabbable": untabbable, "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": ossici, "PropNames.SingleSelectionParameters.singleSelectedIndex": singleSelectedIndex, "PropNames.SingleSelectionParameters.singleSelectionAriaPropName": singleSelectionAriaPropName, "PropNames.SingleSelectionParameters.singleSelectionMode": singleSelectionMode, "PropNames.TypeaheadNavigationParameters.collator": collator, "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead, "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead, "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout, "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect, "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange, "PropNames.ManagedChildrenParameters.onChildrenMountChange": onChildrenMountChange, "PropNames.RefElementParameters.onElementChange": onElementChange, "PropNames.RefElementParameters.onMount": onMount, "PropNames.RefElementParameters.onUnmount": onUnmount, "PropNames.StaggeredParameters.staggered": staggered, ...normalGridNavParameters }) {
    const retLN = useCompleteGridNavigation({
        "PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange": onCompositeFocusChange,
        "PropNames.GridNavigationParameters.initiallyTabbableColumn": initiallyTabbableColumn,
        "PropNames.GridNavigationParameters.onTabbableColumnChange": onTabbableColumnChange,
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
        "PropNames.SingleSelectionParameters.initiallySingleSelectedIndex": singleSelectedIndex,
        "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": useStableCallback((...e) => ossicd?.(...e)),
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
//# sourceMappingURL=use-grid-navigation-complete.js.map