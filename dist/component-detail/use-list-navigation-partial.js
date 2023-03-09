import { useRef } from "preact/hooks";
import { assertEmptyObject } from "../util/assert.js";
import { useLinearNavigation } from "./use-linear-navigation.js";
import { useRovingTabIndex, useRovingTabIndexChild } from "./use-roving-tabindex.js";
import { useTypeaheadNavigation, useTypeaheadNavigationChild } from "./use-typeahead-navigation.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
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
export function useListNavigation({ linearNavigationParameters, typeaheadNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, ..._void1 }) {
    const { ...rtir } = useRovingTabIndex({ managedChildrenReturn, rovingTabIndexParameters });
    const { rovingTabIndexReturn } = rtir;
    const { propsStable: propsStableTN, ...tnr } = useTypeaheadNavigation({ rovingTabIndexReturn, typeaheadNavigationParameters, });
    const { propsStable: propsStableLN, ...lnr } = useLinearNavigation({ rovingTabIndexReturn, linearNavigationParameters, });
    assertEmptyObject(_void1);
    // Merge the props while keeping them stable
    // (TODO: We run this merge logic every render but only need the first render's result because it's stable)
    const p = useMergedProps(propsStableTN, propsStableLN);
    const propsStable = useRef(p);
    return {
        ...lnr,
        ...tnr,
        ...rtir,
        propsStable: propsStable.current
    };
}
export function useListNavigationChild({ rovingTabIndexChildParameters, rovingTabIndexChildContext, typeaheadNavigationChildContext, managedChildParameters, refElementReturn, textContentParameters, ..._void2 }) {
    const { props, ...rticr } = useRovingTabIndexChild({ rovingTabIndexChildContext, rovingTabIndexChildParameters, managedChildParameters });
    const { ...tncr } = useTypeaheadNavigationChild({ refElementReturn, typeaheadNavigationChildContext, managedChildParameters, textContentParameters });
    assertEmptyObject(_void2);
    return {
        props,
        ...tncr,
        ...rticr
    };
}
//# sourceMappingURL=use-list-navigation-partial.js.map