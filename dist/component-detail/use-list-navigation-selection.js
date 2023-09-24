import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { monitored } from "../util/use-call-count.js";
import { useListNavigation, useListNavigationChild } from "./keyboard-navigation/use-list-navigation-partial.js";
import { useSelection, useSelectionChild } from "./selection/use-selection.js";
/**
 * Combines {@link useListNavigation} and {@link useSelection}.
 *
 * @remarks The -selection behavior is optional, if you decide you need multi-selection instead within the same component.
 *
 * @hasChild {@link useListNavigationSelectionChild}
 *
 * @compositeParams
 */
export const useListNavigationSelection = monitored(function useListNavigationSelection({ "PropNames.ChildrenHaveFocusReturn.getAnyFocused": getAnyFocused, "PropNames.LinearNavigationParameters.arrowKeyDirection": arrowKeyDirection, "PropNames.LinearNavigationParameters.disableHomeEndKeys": disableHomeEndKeys, "PropNames.LinearNavigationParameters.getHighestIndex": getHighestIndex, "PropNames.LinearNavigationParameters.getLowestIndex": getLowestIndex, "PropNames.LinearNavigationParameters.isValidForLinearNavigation": isValidForLinearNavigation, "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd, "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart, "PropNames.LinearNavigationParameters.onNavigateLinear": onNavigateLinear, "PropNames.LinearNavigationParameters.pageNavigationSize": pageNavigationSize, "PropNames.ManagedChildrenReturn.getChildren": getChildren, 
//"PropNames.RovingTabIndexReturn.setTabbableIndex": sti2,
"PropNames.MultiSelectionParameters.multiSelectionAriaPropName": multiSelectionAriaPropName, "PropNames.MultiSelectionParameters.multiSelectionMode": multiSelectionMode, "PropNames.MultiSelectionParameters.onSelectionChange": onSelectionChange, "PropNames.PaginatedParameters.paginationMax": paginationMax, "PropNames.PaginatedParameters.paginationMin": paginationMin, "PropNames.RearrangeableReturn.indexDemangler": indexDemangler, "PropNames.RearrangeableReturn.indexMangler": indexMangler, "PropNames.RefElementReturn.getElement": getElement, "PropNames.RovingTabIndexParameters.focusSelfParent": focusSelfParent, "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange, "PropNames.RovingTabIndexParameters.untabbable": untabbable, "PropNames.RovingTabIndexParameters.untabbableBehavior": untabbableBehavior, "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex, "PropNames.SingleSelectionParameters.initiallySingleSelectedIndex": initiallySingleSelectedIndex, "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": onSingleSelectedIndexChange, "PropNames.SingleSelectionParameters.singleSelectionAriaPropName": singleSelectionAriaPropName, "PropNames.SingleSelectionParameters.singleSelectionMode": singleSelectionMode, "PropNames.TypeaheadNavigationParameters.collator": collator, "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation": isValidForTypeaheadNavigation, "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead, "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead, "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout, ...void3 }) {
    const { context: contextSS, props: propsStable, ...retSS } = useSelection({
        "PropNames.ChildrenHaveFocusReturn.getAnyFocused": getAnyFocused,
        "PropNames.ManagedChildrenReturn.getChildren": getChildren,
        "PropNames.MultiSelectionParameters.multiSelectionAriaPropName": multiSelectionAriaPropName,
        "PropNames.MultiSelectionParameters.multiSelectionMode": multiSelectionMode,
        "PropNames.MultiSelectionParameters.onSelectionChange": onSelectionChange,
        "PropNames.RovingTabIndexReturn.setTabbableIndex": useStableCallback((...args) => { sti1(...args); }),
        "PropNames.SingleSelectionParameters.initiallySingleSelectedIndex": initiallySingleSelectedIndex,
        "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": onSingleSelectedIndexChange,
        "PropNames.SingleSelectionParameters.singleSelectionAriaPropName": singleSelectionAriaPropName,
        "PropNames.SingleSelectionParameters.singleSelectionMode": singleSelectionMode
    });
    const { context: contextLN, props, ...retLN } = useListNavigation({
        "PropNames.LinearNavigationParameters.arrowKeyDirection": arrowKeyDirection,
        "PropNames.LinearNavigationParameters.disableHomeEndKeys": disableHomeEndKeys,
        "PropNames.LinearNavigationParameters.getHighestIndex": getHighestIndex,
        "PropNames.LinearNavigationParameters.getLowestIndex": getLowestIndex,
        "PropNames.LinearNavigationParameters.isValidForLinearNavigation": isValidForLinearNavigation,
        "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd,
        "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart,
        "PropNames.LinearNavigationParameters.onNavigateLinear": onNavigateLinear,
        "PropNames.LinearNavigationParameters.pageNavigationSize": pageNavigationSize,
        "PropNames.ManagedChildrenReturn.getChildren": getChildren,
        "PropNames.PaginatedParameters.paginationMax": paginationMax,
        "PropNames.PaginatedParameters.paginationMin": paginationMin,
        "PropNames.RearrangeableReturn.indexDemangler": indexDemangler,
        "PropNames.RearrangeableReturn.indexMangler": indexMangler,
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.RovingTabIndexParameters.focusSelfParent": focusSelfParent,
        "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallySingleSelectedIndex ?? initiallyTabbedIndex,
        "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange,
        "PropNames.RovingTabIndexParameters.untabbable": untabbable,
        "PropNames.RovingTabIndexParameters.untabbableBehavior": untabbableBehavior,
        "PropNames.TypeaheadNavigationParameters.collator": collator,
        "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation": isValidForTypeaheadNavigation,
        "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead,
        "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead,
        "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout,
    });
    const { "PropNames.RovingTabIndexReturn.setTabbableIndex": sti1 } = retLN;
    assertEmptyObject(void3);
    return {
        ...retSS,
        ...retLN,
        context: useMemoObject({
            ...contextLN,
            ...contextSS
        }),
        props: [...props, propsStable]
    };
});
/**
 * @compositeParams
 */
export const useListNavigationSelectionChild = monitored(function useListNavigationSelectionChild({ info: { index, untabbable, ...void2 }, context, "PropNames.MultiSelectionChildParameters.initiallyMultiSelected": initiallyMultiSelected, "PropNames.MultiSelectionChildParameters.multiSelectionDisabled": multiSelectionDisabled, "PropNames.MultiSelectionChildParameters.onMultiSelectChange": onMultiSelectChange, "PropNames.RefElementReturn.getElement": getElement, "PropNames.SingleSelectionChildParameters.singleSelectionDisabled": singleSelectionDisabled, "PropNames.TextContentParameters.getText": getText, ...void1 }) {
    const { info: infoSS, props: propsSS, "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic2, "PropNames.PressParameters.onPressSync": onPressSync, ...retSS } = useSelectionChild({
        info: { index, untabbable },
        context,
        "PropNames.MultiSelectionChildParameters.initiallyMultiSelected": initiallyMultiSelected,
        "PropNames.MultiSelectionChildParameters.multiSelectionDisabled": multiSelectionDisabled,
        "PropNames.MultiSelectionChildParameters.onMultiSelectChange": onMultiSelectChange,
        "PropNames.SingleSelectionChildParameters.singleSelectionDisabled": singleSelectionDisabled,
    });
    const { props: propsLN, info: infoLN, "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic1, "PropNames.PressParameters.excludeSpace": excludeSpace, ...retLN } = useListNavigationChild({
        info: { index, untabbable },
        context,
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.TextContentParameters.getText": getText
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return {
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": useStableCallback((focused, previouslyFocused, e) => {
            ocfic1?.(focused, previouslyFocused, e);
            ocfic2?.(focused, previouslyFocused, e);
        }),
        "PropNames.PressParameters.excludeSpace": excludeSpace,
        "PropNames.PressParameters.onPressSync": onPressSync,
        info: { ...infoSS, ...infoLN },
        ...retSS,
        ...retLN,
        propsChild: propsSS,
        propsTabbable: [propsLN],
        /*hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged
        },
        pressParameters: { onPressSync, excludeSpace },
        info: { ...infoSS, ...infoLN },
        rovingTabIndexChildReturn,
        multiSelectionChildReturn,
        singleSelectionChildReturn,
        textContentReturn,
        propsChild: propsSS,
        propsTabbable: propsLN*/
    };
});
//# sourceMappingURL=use-list-navigation-selection.js.map