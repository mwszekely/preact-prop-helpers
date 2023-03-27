import { useRef } from "preact/hooks";
import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { useStableObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { ElementProps, ExtendMerge, OmitStrong } from "../../util/types.js";
import { monitorCallCount } from "../../util/use-call-count.js";
import { useLinearNavigation, UseLinearNavigationParameters, UseLinearNavigationReturnType } from "./use-linear-navigation.js";
import { RovingTabIndexChildContext, useRovingTabIndex, useRovingTabIndexChild, UseRovingTabIndexChildInfo, UseRovingTabIndexChildParameters, UseRovingTabIndexChildReturnType, UseRovingTabIndexParameters, UseRovingTabIndexReturnType } from "./use-roving-tabindex.js";
import { useTypeaheadNavigation, useTypeaheadNavigationChild, UseTypeaheadNavigationChildParameters, UseTypeaheadNavigationChildReturnType, UseTypeaheadNavigationContext, UseTypeaheadNavigationParameters, UseTypeaheadNavigationReturnType } from "./use-typeahead-navigation.js";

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
const _dummy: any = null;




export interface UseListNavigationChildInfo<TabbableChildElement extends Element> extends UseRovingTabIndexChildInfo<TabbableChildElement> {
    _e?: TabbableChildElement;
}

/**
 * @param fromUserInteraction Whether the user interacted with this child as a means of navigating to it.  In that was the case, the child is also focused. Otherwise, focus moves as the browser determines.
 */
//export type NavigateToIndex = (i: number | null, fromUserInteraction: boolean) => void;

export interface UseListNavigationParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>> extends UseRovingTabIndexParameters<ChildElement, M>, OmitStrong<UseTypeaheadNavigationParameters<ChildElement, M>, "rovingTabIndexReturn">, OmitStrong<UseLinearNavigationParameters<ParentOrChildElement, ChildElement, M>, "rovingTabIndexReturn"> { }
export interface UseListNavigationReturnType<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>> extends
    OmitStrong<UseRovingTabIndexReturnType<ChildElement, M>, "managedChildrenParameters" | "context">,
    OmitStrong<UseTypeaheadNavigationReturnType<ParentOrChildElement>, "context">,
    UseLinearNavigationReturnType<ParentOrChildElement>,
    UseRovingTabIndexReturnType<ChildElement, M> {
    context: OmitStrong<UseListNavigationContext<ParentOrChildElement, ChildElement, M>, "managedChildContext">;
}

export interface UseListNavigationChildParameters<ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>> extends
    ExtendMerge<OmitStrong<UseRovingTabIndexChildParameters<ChildElement, M>, "context">,
    OmitStrong<UseTypeaheadNavigationChildParameters<ChildElement, M>, "context">> {
    context: OmitStrong<UseListNavigationContext<Element, ChildElement, M>, "managedChildContext">;
}
export interface UseListNavigationContext<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>> extends RovingTabIndexChildContext<ChildElement, M>, UseTypeaheadNavigationContext {
    _p?: ParentOrChildElement;
    _c?: ChildElement;
}
export interface UseListNavigationChildReturnType<ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>> extends UseRovingTabIndexChildReturnType<ChildElement, M>, UseTypeaheadNavigationChildReturnType { }



/**
 * Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.
 * 
 * In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
 * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any text for typeahead to focus the next item that matches.
 */
export function useListNavigation<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>>({
    linearNavigationParameters,
    typeaheadNavigationParameters,
    rovingTabIndexParameters,
    managedChildrenReturn,
    ..._void1
}: UseListNavigationParameters<ParentOrChildElement, ChildElement, M>): UseListNavigationReturnType<ParentOrChildElement, ChildElement, M> {
    monitorCallCount(useListNavigation);

    const { context: { rovingTabIndexContext }, managedChildrenParameters, rovingTabIndexReturn, ..._void2 } = useRovingTabIndex<ChildElement, M>({ managedChildrenReturn, rovingTabIndexParameters });
    const { context: { typeaheadNavigationContext }, propsStable: propsStableTN, typeaheadNavigationReturn, ..._void3 } = useTypeaheadNavigation<ParentOrChildElement, ChildElement, M>({ rovingTabIndexReturn, typeaheadNavigationParameters, });
    const { propsStable: propsStableLN, linearNavigationReturn, ..._void4 } = useLinearNavigation<ParentOrChildElement, ChildElement, M>({ rovingTabIndexReturn, linearNavigationParameters, });

    assertEmptyObject(_void1);
    assertEmptyObject(_void2);
    assertEmptyObject(_void3);
    assertEmptyObject(_void4);

    // Merge the props while keeping them stable
    // (TODO: We run this merge logic every render but only need the first render's result because it's stable)
    const p = useMergedProps<ParentOrChildElement>(propsStableTN, propsStableLN);
    const propsStable = useRef<ElementProps<ParentOrChildElement>>(p)

    return {
        managedChildrenParameters,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
        context: useStableObject({
            rovingTabIndexContext,
            typeaheadNavigationContext
        }),
        linearNavigationReturn,
        propsStable: propsStable.current
    }
}

export function useListNavigationChild<ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>>({
    rovingTabIndexChildParameters,
    info,
    context,
    refElementReturn,
    textContentParameters,
    ..._void2
}: UseListNavigationChildParameters<ChildElement, M>): UseListNavigationChildReturnType<ChildElement, M> {
    monitorCallCount(useListNavigationChild);

    const { props, ...rticr } = useRovingTabIndexChild<ChildElement, M>({ rovingTabIndexChildParameters, context, info });
    const { ...tncr } = useTypeaheadNavigationChild<ChildElement, M>({ refElementReturn, textContentParameters, context, info });

    assertEmptyObject(_void2);

    return {
        props,
        ...tncr,
        ...rticr
    }
}