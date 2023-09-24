import { PropNames_RefElementReturn_getElement } from "../../dom-helpers/use-ref-element.js";
import { PropNames_TextContentParameters_getText } from "../../dom-helpers/use-text-content.js";
import { PropNames_ManagedChildrenReturn_getChildren } from "../../preact-extensions/use-managed-children.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { monitored } from "../../util/use-call-count.js";
import { PropNames_PaginatedParameters_paginationMax, PropNames_PaginatedParameters_paginationMin } from "../processed-children/use-paginated-children.js";
import { PropNames_RearrangeableReturn_indexDemangler, PropNames_RearrangeableReturn_indexMangler } from "../processed-children/use-rearrangeable-children.js";
import { PropNames_LinearNavigationParameters_arrowKeyDirection, PropNames_LinearNavigationParameters_disableHomeEndKeys, PropNames_LinearNavigationParameters_getHighestIndex, PropNames_LinearNavigationParameters_getLowestIndex, PropNames_LinearNavigationParameters_isValidForLinearNavigation, PropNames_LinearNavigationParameters_navigatePastEnd, PropNames_LinearNavigationParameters_navigatePastStart, PropNames_LinearNavigationParameters_onNavigateLinear, PropNames_LinearNavigationParameters_pageNavigationSize, useLinearNavigation } from "./use-linear-navigation.js";
import { PropNames_RovingTabIndexParameters_focusSelfParent, PropNames_RovingTabIndexParameters_initiallyTabbedIndex, PropNames_RovingTabIndexParameters_onTabbableIndexChange, PropNames_RovingTabIndexParameters_untabbable, PropNames_RovingTabIndexParameters_untabbableBehavior, PropNames_RovingTabIndexReturn_getTabbableIndex, PropNames_RovingTabIndexReturn_setTabbableIndex, useRovingTabIndex, useRovingTabIndexChild } from "./use-roving-tabindex.js";
import { PropNames_TypeaheadNavigationParameters_collator, PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation, PropNames_TypeaheadNavigationParameters_noTypeahead, PropNames_TypeaheadNavigationParameters_onNavigateTypeahead, PropNames_TypeaheadNavigationParameters_typeaheadTimeout, useTypeaheadNavigation, useTypeaheadNavigationChild } from "./use-typeahead-navigation.js";
/**
 *
 * TODO: This table was scrapped when this was changed to just accept a collator directly,
 * but it's not bad for a collation crash course and I might use it again.
 * Even just as a "this is why it's important and good to use these things" thing.
 *
 * |Lang.|Target|User input|`base`|`accent`|`case`|`variant`|
 * |----|----|----|----|----|----|----|
 * |EN|Hi|Bye|❌|❌|❌|❌|
 * |EN|Hi|Hi|✅|✅|✅|✅|
 * |EN|Hi|Ｈｉ|✅|✅|✅|❌|
 * |EN|Hi|hi|✅|✅|❌|❌|
 * |EN|Hi|Hï|✅|❌|❌|❌|
 * |EN|å|aa|❌|❌|❌|❌|
 * |DA|å|aa|✅|✅|✅|❌|
 * |DA|å|AA|✅|✅|❌|❌|
 * |DA|å|Aa|✅|✅|❌|❌|
 * |DA|å|aA|❌|❌|❌|❌|
 * |EN|å|a|✅|✅|❌|❌|
 * |DA|å|a|✅|✅|❌|❌|
 * |JP|着|着|✅|✅|✅|✅|
 * |JP|カ|ｶ|✅|✅|✅|✅|
 * |JP|カ|か|✅|✅|✅|❌|
 * |JP|カ|ヵ|✅|✅|✅|❌|
 * |JP|カ|㋕|✅|✅|❌|❌|
 * |JP|カ|ガ|✅|❌|❌|❌|
 * |JP|カ|力|❌|❌|❌|❌|
 * |ZH|紅|红|❌|❌|❌|❌|
 *
 *
 * (Note to self: At some point, this file will probably be normalized
 * by somebody and 着 will turn back into 着.)
 *
 * Unrelated, but hey, this is fun: try highlighting the space between the two characters in VS Code,
 * or just typing a character in between them. What's up with this?
 * 着 着
 */
const _dummy = null;
/**
 * Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.
 *
 * @remarks In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
 * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any text for typeahead to focus the next item that matches.
 *
 * @compositeParams
 *
 * @hasChild {@link useListNavigationChild}
 */
export const useListNavigation = monitored(function useListNavigation({ [PropNames_LinearNavigationParameters_arrowKeyDirection]: arrowKeyDirection, [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys, [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex, [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex, [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation, [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd, [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart, [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear, [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize, [PropNames_ManagedChildrenReturn_getChildren]: getChildren, [PropNames_PaginatedParameters_paginationMax]: paginationMax, [PropNames_PaginatedParameters_paginationMin]: paginationMin, [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler, [PropNames_RearrangeableReturn_indexMangler]: indexMangler, [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent, [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex, [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange, [PropNames_RovingTabIndexParameters_untabbable]: untabbable, [PropNames_RovingTabIndexParameters_untabbableBehavior]: untabbableBehavior, [PropNames_TypeaheadNavigationParameters_collator]: collator, [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation, [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead, [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead, [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout, [PropNames_RefElementReturn_getElement]: getElement, ...void1 }) {
    const { props: propsRTI, context: contextRovingTabIndex, ...rovingTabIndexReturn } = useRovingTabIndex({
        [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
        [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent,
        [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex,
        [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange,
        [PropNames_RovingTabIndexParameters_untabbable]: untabbable,
        [PropNames_RovingTabIndexParameters_untabbableBehavior]: untabbableBehavior,
        [PropNames_RefElementReturn_getElement]: getElement
    });
    const { [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex, [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex } = rovingTabIndexReturn;
    const { props: propsStableTN, context: contextTypeahead, ...typeaheadNavigationReturn } = useTypeaheadNavigation({
        [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex,
        [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
        [PropNames_TypeaheadNavigationParameters_collator]: collator,
        [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation,
        [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead,
        [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead,
        [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout,
    });
    const { props: propsStableLN, ...linearNavigationReturn } = useLinearNavigation({
        [PropNames_LinearNavigationParameters_arrowKeyDirection]: arrowKeyDirection,
        [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys,
        [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex,
        [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex,
        [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation,
        [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
        [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
        [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear,
        [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize,
        [PropNames_PaginatedParameters_paginationMax]: paginationMax,
        [PropNames_PaginatedParameters_paginationMin]: paginationMin,
        [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
        [PropNames_RearrangeableReturn_indexMangler]: indexMangler,
        [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex,
        [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex
    });
    assertEmptyObject(void1);
    return {
        ...rovingTabIndexReturn,
        ...typeaheadNavigationReturn,
        ...linearNavigationReturn,
        context: useMemoObject({
            ...contextRovingTabIndex,
            ...contextTypeahead
        }),
        props: [propsStableLN, propsStableTN, ...propsRTI]
    };
});
/**
 * @compositeParams
 */
export const useListNavigationChild = monitored(function useListNavigationChild({ info: { index, untabbable, ...void1 }, context, [PropNames_RefElementReturn_getElement]: getElement, [PropNames_TextContentParameters_getText]: getText, ...void2 }) {
    const { info, props, ...rovingTabIndexChildReturn } = useRovingTabIndexChild({
        context,
        info: { index, untabbable },
        [PropNames_RefElementReturn_getElement]: getElement
    });
    const { ...typeaheadNavigationChildReturn } = useTypeaheadNavigationChild({
        [PropNames_RefElementReturn_getElement]: getElement,
        [PropNames_TextContentParameters_getText]: getText,
        context,
        info: { index }
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return {
        info,
        props,
        ...typeaheadNavigationChildReturn,
        ...rovingTabIndexChildReturn
    };
});
//# sourceMappingURL=use-list-navigation-partial.js.map