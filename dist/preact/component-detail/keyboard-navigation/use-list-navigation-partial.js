import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { $refElementReturn } from "../../dom-helpers/use-ref-element.js";
import { $index, $managedChildrenParameters, $managedChildrenReturn } from "../../preact-extensions/use-managed-children.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { monitored } from "../../util/use-call-count.js";
import { $paginatedChildrenParameters } from "../processed-children/use-paginated-children.js";
import { $rearrangeableChildrenReturn } from "../processed-children/use-rearrangeable-children.js";
import { $linearNavigationParameters, $linearNavigationReturn, useLinearNavigation } from "./use-linear-navigation.js";
import { $untabbable, $rovingTabIndexParameters, $rovingTabIndexReturn, useRovingTabIndex, useRovingTabIndexChild } from "./use-roving-tabindex.js";
import { $typeaheadNavigationParameters, $typeaheadNavigationReturn, useTypeaheadNavigation, useTypeaheadNavigationChild } from "./use-typeahead-navigation.js";
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
export const useListNavigation = monitored(function useListNavigation({ [$linearNavigationParameters]: linearNavigationParameters, [$typeaheadNavigationParameters]: typeaheadNavigationParameters, [$rovingTabIndexParameters]: rovingTabIndexParameters, [$managedChildrenReturn]: managedChildrenReturn, [$refElementReturn]: refElementReturn, [$paginatedChildrenParameters]: paginatedChildrenParameters, [$rearrangeableChildrenReturn]: rearrangeableChildrenReturn, ...void1 }) {
    const { props: propsRTI, [$rovingTabIndexReturn]: rovingTabIndexReturn, [$managedChildrenParameters]: managedChildrenParameters, context: contextRovingTabIndex, ...void2 } = useRovingTabIndex({ [$managedChildrenReturn]: managedChildrenReturn, [$rovingTabIndexParameters]: rovingTabIndexParameters, [$refElementReturn]: refElementReturn });
    const { propsStable: propsStableTN, [$typeaheadNavigationReturn]: typeaheadNavigationReturn, context: contextTypeahead, ...void3 } = useTypeaheadNavigation({ [$rovingTabIndexReturn]: rovingTabIndexReturn, [$typeaheadNavigationParameters]: typeaheadNavigationParameters, });
    const { propsStable: propsStableLN, [$linearNavigationReturn]: linearNavigationReturn, ...void4 } = useLinearNavigation({ [$rovingTabIndexReturn]: rovingTabIndexReturn, [$linearNavigationParameters]: linearNavigationParameters, [$paginatedChildrenParameters]: paginatedChildrenParameters, [$rearrangeableChildrenReturn]: rearrangeableChildrenReturn });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    // Merge the props while keeping them stable
    // (TODO: We run this merge logic every render but only need the first render's result because it's stable)
    //const p = useMergedProps<ParentOrChildElement>(propsStableTN, propsStableLN);
    //const {propsStable} = useRef<ElementProps<ParentOrChildElement>>(p)
    return {
        [$managedChildrenParameters]: managedChildrenParameters,
        [$rovingTabIndexReturn]: rovingTabIndexReturn,
        [$typeaheadNavigationReturn]: typeaheadNavigationReturn,
        context: useMemoObject({
            ...contextRovingTabIndex,
            ...contextTypeahead
        }),
        [$linearNavigationReturn]: linearNavigationReturn,
        props: useMergedProps(propsStableLN, propsStableTN, propsRTI)
    };
});
/**
 * @compositeParams
 */
export const useListNavigationChild = monitored(function useListNavigationChild({ info: { [$index]: index, [$untabbable]: untabbable, ...void1 }, context, [$refElementReturn]: refElementReturn, ...void2 }) {
    const { props, ...rticr } = useRovingTabIndexChild({ context, info: { [$index]: index, [$untabbable]: untabbable }, [$refElementReturn]: refElementReturn });
    const { ...tncr } = useTypeaheadNavigationChild({ context, info: { [$index]: index } });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return {
        props,
        ...tncr,
        ...rticr
    };
});
//# sourceMappingURL=use-list-navigation-partial.js.map