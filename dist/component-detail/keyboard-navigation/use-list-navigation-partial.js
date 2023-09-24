import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { monitored } from "../../util/use-call-count.js";
import { useLinearNavigation } from "./use-linear-navigation.js";
import { useRovingTabIndex, useRovingTabIndexChild } from "./use-roving-tabindex.js";
import { useTypeaheadNavigation, useTypeaheadNavigationChild } from "./use-typeahead-navigation.js";
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
export const useListNavigation = monitored(function useListNavigation({ "PropNames.LinearNavigationParameters.arrowKeyDirection": arrowKeyDirection, "PropNames.LinearNavigationParameters.disableHomeEndKeys": disableHomeEndKeys, "PropNames.LinearNavigationParameters.getHighestIndex": getHighestIndex, "PropNames.LinearNavigationParameters.getLowestIndex": getLowestIndex, "PropNames.LinearNavigationParameters.isValidForLinearNavigation": isValidForLinearNavigation, "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd, "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart, "PropNames.LinearNavigationParameters.onNavigateLinear": onNavigateLinear, "PropNames.LinearNavigationParameters.pageNavigationSize": pageNavigationSize, "PropNames.ManagedChildrenReturn.getChildren": getChildren, "PropNames.PaginatedParameters.paginationMax": paginationMax, "PropNames.PaginatedParameters.paginationMin": paginationMin, "PropNames.RearrangeableReturn.indexDemangler": indexDemangler, "PropNames.RearrangeableReturn.indexMangler": indexMangler, "PropNames.RovingTabIndexParameters.focusSelfParent": focusSelfParent, "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex, "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange, "PropNames.RovingTabIndexParameters.untabbable": untabbable, "PropNames.RovingTabIndexParameters.untabbableBehavior": untabbableBehavior, "PropNames.TypeaheadNavigationParameters.collator": collator, "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation": isValidForTypeaheadNavigation, "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead, "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead, "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout, "PropNames.RefElementReturn.getElement": getElement, ...void1 }) {
    const { props: propsRTI, context: contextRovingTabIndex, ...rovingTabIndexReturn } = useRovingTabIndex({
        "PropNames.ManagedChildrenReturn.getChildren": getChildren,
        "PropNames.RovingTabIndexParameters.focusSelfParent": focusSelfParent,
        "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex,
        "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange,
        "PropNames.RovingTabIndexParameters.untabbable": untabbable,
        "PropNames.RovingTabIndexParameters.untabbableBehavior": untabbableBehavior,
        "PropNames.RefElementReturn.getElement": getElement
    });
    const { "PropNames.RovingTabIndexReturn.getTabbableIndex": getTabbableIndex, "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex } = rovingTabIndexReturn;
    const { props: propsStableTN, context: contextTypeahead, ...typeaheadNavigationReturn } = useTypeaheadNavigation({
        "PropNames.RovingTabIndexReturn.getTabbableIndex": getTabbableIndex,
        "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex,
        "PropNames.TypeaheadNavigationParameters.collator": collator,
        "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation": isValidForTypeaheadNavigation,
        "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead,
        "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead,
        "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout,
    });
    const { props: propsStableLN, ...linearNavigationReturn } = useLinearNavigation({
        "PropNames.LinearNavigationParameters.arrowKeyDirection": arrowKeyDirection,
        "PropNames.LinearNavigationParameters.disableHomeEndKeys": disableHomeEndKeys,
        "PropNames.LinearNavigationParameters.getHighestIndex": getHighestIndex,
        "PropNames.LinearNavigationParameters.getLowestIndex": getLowestIndex,
        "PropNames.LinearNavigationParameters.isValidForLinearNavigation": isValidForLinearNavigation,
        "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd,
        "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart,
        "PropNames.LinearNavigationParameters.onNavigateLinear": onNavigateLinear,
        "PropNames.LinearNavigationParameters.pageNavigationSize": pageNavigationSize,
        "PropNames.PaginatedParameters.paginationMax": paginationMax,
        "PropNames.PaginatedParameters.paginationMin": paginationMin,
        "PropNames.RearrangeableReturn.indexDemangler": indexDemangler,
        "PropNames.RearrangeableReturn.indexMangler": indexMangler,
        "PropNames.RovingTabIndexReturn.getTabbableIndex": getTabbableIndex,
        "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex
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
export const useListNavigationChild = monitored(function useListNavigationChild({ info: { index, untabbable, ...void1 }, context, "PropNames.RefElementReturn.getElement": getElement, "PropNames.TextContentParameters.getText": getText, ...void2 }) {
    const { info, props, ...rovingTabIndexChildReturn } = useRovingTabIndexChild({
        context,
        info: { index, untabbable },
        "PropNames.RefElementReturn.getElement": getElement
    });
    const { ...typeaheadNavigationChildReturn } = useTypeaheadNavigationChild({
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.TextContentParameters.getText": getText,
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