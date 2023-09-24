import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { monitored } from "../util/use-call-count.js";
import { useGridNavigation, useGridNavigationCell, useGridNavigationRow } from "./keyboard-navigation/use-grid-navigation-partial.js";
import { useSelection, useSelectionChild } from "./selection/use-selection.js";
/**
 * List navigation gets  selection, so grid navigation does too.
 *
 * Any given row of the grid can be selected, akin to it being a  select list but with options that can be left/right arrowed to.
 *
 * Highly recommended to make the `selectionMode` *not* be `"focus"`, but it's up to you, ultimately.
 */
const _dummy = 0;
/**
 * Combines {@link useGridNavigation} and {@link useSelection}.
 *
 * @remarks The -selection behavior is optional, if you decide you need multi-selection instead within the same component.
 *
 * @hasChild {@link useGridNavigationSelectionRow}
 * @hasChild {@link useGridNavigationSelectionCell}
 *
 * @compositeParams
 */
export const useGridNavigationSelection = monitored(function useGridNavigationSelection({ 
// Both
"PropNames.ManagedChildrenReturn.getChildren": getChildren, 
// Grid navigation
"PropNames.GridNavigationParameters.initiallyTabbableColumn": initiallyTabbableColumn, "PropNames.GridNavigationParameters.onTabbableColumnChange": onTabbableColumnChange, "PropNames.LinearNavigationParameters.disableHomeEndKeys": disableHomeEndKeys, "PropNames.LinearNavigationParameters.getHighestIndex": getHighestIndex, "PropNames.LinearNavigationParameters.getLowestIndex": getLowestIndex, "PropNames.LinearNavigationParameters.isValidForLinearNavigation": isValidForLinearNavigation, "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd, "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart, "PropNames.LinearNavigationParameters.onNavigateLinear": onNavigateLinear, "PropNames.LinearNavigationParameters.pageNavigationSize": pageNavigationSize, "PropNames.PaginatedParameters.paginationMax": paginationMax, "PropNames.PaginatedParameters.paginationMin": paginationMin, "PropNames.RearrangeableReturn.indexDemangler": indexDemangler, "PropNames.RearrangeableReturn.indexMangler": indexMangler, "PropNames.RefElementReturn.getElement": getElement, "PropNames.RovingTabIndexParameters.focusSelfParent": focusSelfParent, "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex, "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange, "PropNames.RovingTabIndexParameters.untabbable": untabbable, "PropNames.RovingTabIndexParameters.untabbableBehavior": untabbableBehavior, "PropNames.TypeaheadNavigationParameters.collator": collator, "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation": isValidForTypeaheadNavigation, "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead, "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead, "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout, 
// Selection
"PropNames.ChildrenHaveFocusReturn.getAnyFocused": getAnyFocused, "PropNames.MultiSelectionParameters.multiSelectionAriaPropName": multiSelectionAriaPropName, "PropNames.MultiSelectionParameters.multiSelectionMode": multiSelectionMode, "PropNames.MultiSelectionParameters.onSelectionChange": onSelectionChange, "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex, "PropNames.SingleSelectionParameters.initiallySingleSelectedIndex": initiallySingleSelectedIndex, "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": onSingleSelectedIndexChange, "PropNames.SingleSelectionParameters.singleSelectionAriaPropName": singleSelectionAriaPropName, "PropNames.SingleSelectionParameters.singleSelectionMode": singleSelectionMode, ...void2 }) {
    const { context: { gridNavigationRowContext, rovingTabIndexContext, typeaheadNavigationContext }, props: propsGN, ...retGN } = useGridNavigation({
        "PropNames.GridNavigationParameters.initiallyTabbableColumn": initiallyTabbableColumn,
        "PropNames.GridNavigationParameters.onTabbableColumnChange": onTabbableColumnChange,
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
        "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex,
        "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange,
        "PropNames.RovingTabIndexParameters.untabbable": untabbable,
        "PropNames.RovingTabIndexParameters.untabbableBehavior": untabbableBehavior,
        "PropNames.TypeaheadNavigationParameters.collator": collator,
        "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation": isValidForTypeaheadNavigation,
        "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead,
        "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead,
        "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout
        //rovingTabIndexParameters: { ...rovingTabIndexParameters, initiallyTabbedIndex: singleSelectionParameters.initiallySingleSelectedIndex || 0 },
    });
    const { context: { singleSelectionContext, multiSelectionContext }, props: propsSS, ...retSS } = useSelection({
        "PropNames.ChildrenHaveFocusReturn.getAnyFocused": getAnyFocused,
        "PropNames.ManagedChildrenReturn.getChildren": getChildren,
        "PropNames.MultiSelectionParameters.multiSelectionAriaPropName": multiSelectionAriaPropName,
        "PropNames.MultiSelectionParameters.multiSelectionMode": multiSelectionMode,
        "PropNames.MultiSelectionParameters.onSelectionChange": onSelectionChange,
        "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex,
        "PropNames.SingleSelectionParameters.initiallySingleSelectedIndex": initiallySingleSelectedIndex,
        "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": onSingleSelectedIndexChange,
        "PropNames.SingleSelectionParameters.singleSelectionAriaPropName": singleSelectionAriaPropName,
        "PropNames.SingleSelectionParameters.singleSelectionMode": singleSelectionMode
    });
    assertEmptyObject(void2);
    return {
        context: useMemoObject({
            gridNavigationRowContext,
            rovingTabIndexContext,
            singleSelectionContext,
            multiSelectionContext,
            typeaheadNavigationContext
        }),
        props: [...propsGN, propsSS],
        ...retGN,
        ...retSS
    };
});
/**
 * @compositeParams
 */
export const useGridNavigationSelectionRow = monitored(function useGridNavigationSelectionRow({ info: mcp1, context, "PropNames.LinearNavigationParameters.getHighestIndex": getHighestIndex, "PropNames.LinearNavigationParameters.getLowestIndex": getLowestIndex, "PropNames.LinearNavigationParameters.isValidForLinearNavigation": isValidForLinearNavigation, "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd, "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart, "PropNames.ManagedChildrenReturn.getChildren": getChildren, "PropNames.RefElementReturn.getElement": getElement, "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex, "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange, "PropNames.RovingTabIndexParameters.untabbable": untabbable, "PropNames.TextContentParameters.getText": getText, "PropNames.TypeaheadNavigationParameters.collator": collator, "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation": isValidForTypeaheadNavigation, "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead, "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead, "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout, "PropNames.MultiSelectionChildParameters.initiallyMultiSelected": initiallyMultiSelected, "PropNames.MultiSelectionChildParameters.multiSelectionDisabled": multiSelectionDisabled, "PropNames.MultiSelectionChildParameters.onMultiSelectChange": onMultiSelectChange, "PropNames.SingleSelectionChildParameters.singleSelectionDisabled": singleSelectionDisabled, ...void1 }) {
    const { info: { getSingleSelected, setLocalSingleSelected, singleSelected, getMultiSelected, setSelectedFromParent, getMultiSelectionDisabled, ...void8 }, props: propsSelection, "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic2, ...retSS } = useSelectionChild({
        info: mcp1,
        context,
        "PropNames.MultiSelectionChildParameters.initiallyMultiSelected": initiallyMultiSelected,
        "PropNames.MultiSelectionChildParameters.multiSelectionDisabled": multiSelectionDisabled,
        "PropNames.MultiSelectionChildParameters.onMultiSelectChange": onMultiSelectChange,
        "PropNames.SingleSelectionChildParameters.singleSelectionDisabled": singleSelectionDisabled
    });
    const { info: { focusSelf, getLocallyTabbable, setLocallyTabbable, ...void9 }, props: propsGridNavigation, context: contextGridNavigation, "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic1, "PropNames.ManagedChildrenParameters.onChildrenMountChange": onChildrenMountChange, ...retGN } = useGridNavigationRow({
        context,
        info: mcp1,
        "PropNames.LinearNavigationParameters.getHighestIndex": getHighestIndex,
        "PropNames.LinearNavigationParameters.getLowestIndex": getLowestIndex,
        "PropNames.LinearNavigationParameters.isValidForLinearNavigation": isValidForLinearNavigation,
        "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd,
        "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart,
        "PropNames.ManagedChildrenReturn.getChildren": getChildren,
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex,
        "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange,
        "PropNames.RovingTabIndexParameters.untabbable": untabbable,
        "PropNames.TextContentParameters.getText": getText,
        "PropNames.TypeaheadNavigationParameters.collator": collator,
        "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation": isValidForTypeaheadNavigation,
        "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead,
        "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead,
        "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout,
    });
    assertEmptyObject(void1);
    assertEmptyObject(void8);
    assertEmptyObject(void9);
    return {
        props: [...propsGridNavigation, ...propsSelection],
        context: contextGridNavigation,
        info: {
            getLocallyTabbable,
            getSingleSelected,
            singleSelected,
            setLocallyTabbable,
            setLocalSingleSelected,
            focusSelf,
            getMultiSelected,
            setSelectedFromParent,
            getMultiSelectionDisabled
        },
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": useStableCallback((hasFocus, hadFocus, reason) => { ocfic1?.(hasFocus, hadFocus, reason); ocfic2?.(hasFocus, hadFocus, reason); }),
        "PropNames.ManagedChildrenParameters.onChildrenMountChange": onChildrenMountChange,
        ...retGN,
        ...retSS,
    };
});
/**
 * @compositeParams
 */
export const useGridNavigationSelectionCell = monitored(function useGridNavigationSelectionCell(p) {
    return useGridNavigationCell(p);
});
//# sourceMappingURL=use-grid-navigation-selection.js.map