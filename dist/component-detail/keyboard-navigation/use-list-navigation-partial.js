import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { useRef } from "../../util/lib.js";
import { monitorCallCount } from "../../util/use-call-count.js";
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
 * In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
 * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any text for typeahead to focus the next item that matches.
 */
export function useListNavigation({ linearNavigationParameters, typeaheadNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, refElementReturn, ...void1 }) {
    monitorCallCount(useListNavigation);
    const { context: { rovingTabIndexContext }, managedChildrenParameters, rovingTabIndexReturn, props: propsRTI, ...void2 } = useRovingTabIndex({ managedChildrenReturn, rovingTabIndexParameters, refElementReturn });
    const { context: { typeaheadNavigationContext }, propsStable: propsStableTN, typeaheadNavigationReturn, ...void3 } = useTypeaheadNavigation({ rovingTabIndexReturn, typeaheadNavigationParameters, });
    const { propsStable: propsStableLN, linearNavigationReturn, ...void4 } = useLinearNavigation({ rovingTabIndexReturn, linearNavigationParameters, });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    // Merge the props while keeping them stable
    // (TODO: We run this merge logic every render but only need the first render's result because it's stable)
    const p = useMergedProps(propsStableTN, propsStableLN);
    const propsStable = useRef(p);
    return {
        managedChildrenParameters,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
        context: useMemoObject({
            rovingTabIndexContext,
            typeaheadNavigationContext
        }),
        linearNavigationReturn,
        propsStableParentOrChild: propsStable.current,
        propsParent: propsRTI
    };
}
export function useListNavigationChild({ info, context, refElementReturn, textContentParameters, ...void2 }) {
    monitorCallCount(useListNavigationChild);
    const { props, ...rticr } = useRovingTabIndexChild({ context, info, refElementReturn });
    const { ...tncr } = useTypeaheadNavigationChild({ refElementReturn, textContentParameters, context, info });
    assertEmptyObject(void2);
    return {
        props,
        ...tncr,
        ...rticr
    };
}
//# sourceMappingURL=use-list-navigation-partial.js.map