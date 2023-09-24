import { PropNames_PressParameters_excludeSpace, PropNames_PressParameters_onPressSync } from "../component-use/use-press.js";
import { PropNames_RefElementReturn_getElement } from "../dom-helpers/use-ref-element.js";
import { PropNames_TextContentParameters_getText } from "../dom-helpers/use-text-content.js";
import { PropNames_ChildrenHaveFocusReturn_getAnyFocused } from "../observers/use-children-have-focus.js";
import { PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged } from "../observers/use-has-current-focus.js";
import { PropNames_ManagedChildrenReturn_getChildren } from "../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { monitored } from "../util/use-call-count.js";
import { PropNames_LinearNavigationParameters_arrowKeyDirection, PropNames_LinearNavigationParameters_disableHomeEndKeys, PropNames_LinearNavigationParameters_getHighestIndex, PropNames_LinearNavigationParameters_getLowestIndex, PropNames_LinearNavigationParameters_isValidForLinearNavigation, PropNames_LinearNavigationParameters_navigatePastEnd, PropNames_LinearNavigationParameters_navigatePastStart, PropNames_LinearNavigationParameters_onNavigateLinear, PropNames_LinearNavigationParameters_pageNavigationSize } from "./keyboard-navigation/use-linear-navigation.js";
import { useListNavigation, useListNavigationChild } from "./keyboard-navigation/use-list-navigation-partial.js";
import { PropNames_RovingTabIndexParameters_focusSelfParent, PropNames_RovingTabIndexParameters_initiallyTabbedIndex, PropNames_RovingTabIndexParameters_onTabbableIndexChange, PropNames_RovingTabIndexParameters_untabbable, PropNames_RovingTabIndexParameters_untabbableBehavior, PropNames_RovingTabIndexReturn_setTabbableIndex } from "./keyboard-navigation/use-roving-tabindex.js";
import { PropNames_TypeaheadNavigationParameters_collator, PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation, PropNames_TypeaheadNavigationParameters_noTypeahead, PropNames_TypeaheadNavigationParameters_onNavigateTypeahead, PropNames_TypeaheadNavigationParameters_typeaheadTimeout } from "./keyboard-navigation/use-typeahead-navigation.js";
import { PropNames_PaginatedParameters_paginationMax, PropNames_PaginatedParameters_paginationMin } from "./processed-children/use-paginated-children.js";
import { PropNames_RearrangeableReturn_indexDemangler, PropNames_RearrangeableReturn_indexMangler } from "./processed-children/use-rearrangeable-children.js";
import { PropNames_MultiSelectionChildParameters_initiallyMultiSelected, PropNames_MultiSelectionChildParameters_multiSelectionDisabled, PropNames_MultiSelectionChildParameters_onMultiSelectChange, PropNames_MultiSelectionParameters_multiSelectionAriaPropName, PropNames_MultiSelectionParameters_multiSelectionMode, PropNames_MultiSelectionParameters_onSelectionChange } from "./selection/use-multi-selection.js";
import { useSelection, useSelectionChild } from "./selection/use-selection.js";
import { PropNames_SingleSelectionChildParameters_singleSelectionDisabled, PropNames_SingleSelectionParameters_initiallySingleSelectedIndex, PropNames_SingleSelectionParameters_onSingleSelectedIndexChange, PropNames_SingleSelectionParameters_singleSelectionAriaPropName, PropNames_SingleSelectionParameters_singleSelectionMode } from "./selection/use-single-selection.js";
/**
 * Combines {@link useListNavigation} and {@link useSelection}.
 *
 * @remarks The -selection behavior is optional, if you decide you need multi-selection instead within the same component.
 *
 * @hasChild {@link useListNavigationSelectionChild}
 *
 * @compositeParams
 */
export const useListNavigationSelection = monitored(function useListNavigationSelection({ [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused, [PropNames_LinearNavigationParameters_arrowKeyDirection]: arrowKeyDirection, [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys, [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex, [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex, [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation, [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd, [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart, [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear, [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize, [PropNames_ManagedChildrenReturn_getChildren]: getChildren, 
//[PropNames_RovingTabIndexReturn_setTabbableIndex]: sti2,
[PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName, [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode, [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange, [PropNames_PaginatedParameters_paginationMax]: paginationMax, [PropNames_PaginatedParameters_paginationMin]: paginationMin, [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler, [PropNames_RearrangeableReturn_indexMangler]: indexMangler, [PropNames_RefElementReturn_getElement]: getElement, [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent, [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange, [PropNames_RovingTabIndexParameters_untabbable]: untabbable, [PropNames_RovingTabIndexParameters_untabbableBehavior]: untabbableBehavior, [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex, [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: initiallySingleSelectedIndex, [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange, [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName, [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode, [PropNames_TypeaheadNavigationParameters_collator]: collator, [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation, [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead, [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead, [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout, ...void3 }) {
    const { context: contextSS, props: propsStable, ...retSS } = useSelection({
        [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused,
        [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
        [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName,
        [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
        [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange,
        [PropNames_RovingTabIndexReturn_setTabbableIndex]: useStableCallback((...args) => { sti1(...args); }),
        [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: initiallySingleSelectedIndex,
        [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange,
        [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName,
        [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode
    });
    const { context: contextLN, props, ...retLN } = useListNavigation({
        [PropNames_LinearNavigationParameters_arrowKeyDirection]: arrowKeyDirection,
        [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys,
        [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex,
        [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex,
        [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation,
        [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
        [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
        [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear,
        [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize,
        [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
        [PropNames_PaginatedParameters_paginationMax]: paginationMax,
        [PropNames_PaginatedParameters_paginationMin]: paginationMin,
        [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
        [PropNames_RearrangeableReturn_indexMangler]: indexMangler,
        [PropNames_RefElementReturn_getElement]: getElement,
        [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent,
        [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallySingleSelectedIndex ?? initiallyTabbedIndex,
        [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange,
        [PropNames_RovingTabIndexParameters_untabbable]: untabbable,
        [PropNames_RovingTabIndexParameters_untabbableBehavior]: untabbableBehavior,
        [PropNames_TypeaheadNavigationParameters_collator]: collator,
        [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation,
        [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead,
        [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead,
        [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout,
    });
    const { [PropNames_RovingTabIndexReturn_setTabbableIndex]: sti1 } = retLN;
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
export const useListNavigationSelectionChild = monitored(function useListNavigationSelectionChild({ info: { index, untabbable, ...void2 }, context, [PropNames_MultiSelectionChildParameters_initiallyMultiSelected]: initiallyMultiSelected, [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: multiSelectionDisabled, [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: onMultiSelectChange, [PropNames_RefElementReturn_getElement]: getElement, [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled, [PropNames_TextContentParameters_getText]: getText, ...void1 }) {
    const { info: infoSS, props: propsSS, [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: ocfic2, [PropNames_PressParameters_onPressSync]: onPressSync, ...retSS } = useSelectionChild({
        info: { index, untabbable },
        context,
        [PropNames_MultiSelectionChildParameters_initiallyMultiSelected]: initiallyMultiSelected,
        [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: multiSelectionDisabled,
        [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: onMultiSelectChange,
        [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled,
    });
    const { props: propsLN, info: infoLN, [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: ocfic1, [PropNames_PressParameters_excludeSpace]: excludeSpace, ...retLN } = useListNavigationChild({
        info: { index, untabbable },
        context,
        [PropNames_RefElementReturn_getElement]: getElement,
        [PropNames_TextContentParameters_getText]: getText
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return {
        [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: useStableCallback((focused, previouslyFocused, e) => {
            ocfic1?.(focused, previouslyFocused, e);
            ocfic2?.(focused, previouslyFocused, e);
        }),
        [PropNames_PressParameters_excludeSpace]: excludeSpace,
        [PropNames_PressParameters_onPressSync]: onPressSync,
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