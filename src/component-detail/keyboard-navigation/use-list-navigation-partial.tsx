import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { UseRefElement } from "../../dom-helpers/use-ref-element.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { GenericHook, Parameter, StandardDepsContext, StandardDepsInfo, StandardDepsOmit, StandardDepsPick, StandardDepsProps } from "../../util/types.js";
import { monitored } from "../../util/use-call-count.js";
import { UseLinearNavigation, useLinearNavigation } from "./use-linear-navigation.js";
import { RovingTabIndexChildContext, UseRovingTabIndex, UseRovingTabIndexChild, UseRovingTabIndexChildInfo, UseRovingTabIndexChildInfoKeysParameters, UseRovingTabIndexChildInfoKeysReturnType, useRovingTabIndex, useRovingTabIndexChild } from "./use-roving-tabindex.js";
import { UseTypeaheadNavigation, UseTypeaheadNavigationChild, UseTypeaheadNavigationChildContext, UseTypeaheadNavigationChildInfo, UseTypeaheadNavigationChildInfoKeysParameters, UseTypeaheadNavigationChildInfoKeysReturnType, useTypeaheadNavigation, useTypeaheadNavigationChild } from "./use-typeahead-navigation.js";

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




export interface UseListNavigationChildInfo<TabbableChildElement extends Element> extends UseRovingTabIndexChildInfo<TabbableChildElement>, UseTypeaheadNavigationChildInfo<TabbableChildElement> { }

export type UseListNavigation<ParentOrChildElement extends Element, ChildElement extends Element> = GenericHook<
    "listNavigation", 
    never, [
        StandardDepsPick<"params", UseRovingTabIndex<ParentOrChildElement, ChildElement>>,
        StandardDepsOmit<"params", UseTypeaheadNavigation<ParentOrChildElement, ChildElement>, "rovingTabIndexReturn">,
        StandardDepsOmit<"params", UseLinearNavigation<ParentOrChildElement, ChildElement>, "rovingTabIndexReturn">
    ],
    never, [
        StandardDepsPick<"return", UseRovingTabIndex<ParentOrChildElement, ChildElement>>,
        StandardDepsPick<"return", UseTypeaheadNavigation<ParentOrChildElement, ChildElement>>,
        StandardDepsPick<"return", UseLinearNavigation<ParentOrChildElement, ChildElement>>,
        StandardDepsContext<UseListNavigationChildContext>,
        StandardDepsProps<ParentOrChildElement>
    ]
>;

export type UseListNavigationChild<ChildElement extends Element> = GenericHook<
    "listNavigationChild", 
    never, [
        StandardDepsInfo<UseListNavigationChildInfo<ChildElement>, UseListNavigationChildInfoKeysParameters>,
        StandardDepsContext<UseListNavigationChildContext>,
        StandardDepsPick<"return", UseRefElement<ChildElement>, "refElementReturn", "pick", "getElement">
    ],
    never, [
        StandardDepsInfo<UseListNavigationChildInfo<ChildElement>, UseListNavigationChildInfoKeysReturnType>,
        StandardDepsProps<ChildElement>,
        StandardDepsPick<"return", UseTypeaheadNavigationChild<ChildElement>>,
        StandardDepsPick<"return", UseRovingTabIndexChild<ChildElement>>
    ]
>;

/** {@link useListNavigationChild} requires the same `info` that {@link useRovingTabIndexChild} and {@link useTypeaheadNavigationChild} do (there is no `useLinearNavigationChild`) */
export type UseListNavigationChildInfoKeysParameters = UseRovingTabIndexChildInfoKeysParameters | UseTypeaheadNavigationChildInfoKeysParameters;
export type UseListNavigationChildInfoKeysReturnType = UseRovingTabIndexChildInfoKeysReturnType | UseTypeaheadNavigationChildInfoKeysReturnType;

export interface UseListNavigationChildContext extends RovingTabIndexChildContext, UseTypeaheadNavigationChildContext { }


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
export const useListNavigation = monitored(function useListNavigation<ParentElement extends Element, ChildElement extends Element>({
    linearNavigationParameters,
    typeaheadNavigationParameters,
    rovingTabIndexParameters,
    managedChildrenReturn,
    refElementReturn,
    paginatedChildrenParameters,
    rearrangeableChildrenReturn,
    ...void1
}: Parameter<UseListNavigation<ParentElement, ChildElement>>): ReturnType<UseListNavigation<ParentElement, ChildElement>> {
    const { props: propsRTI, rovingTabIndexReturn, managedChildrenParameters, context: contextRovingTabIndex, ...void2 } = useRovingTabIndex<ParentElement, ChildElement>({ managedChildrenReturn, rovingTabIndexParameters, refElementReturn });
    const { propsStable: propsStableTN, typeaheadNavigationReturn, context: contextTypeahead, ...void3 } = useTypeaheadNavigation<ParentElement, ChildElement>({ rovingTabIndexReturn, typeaheadNavigationParameters, });
    const { propsStable: propsStableLN, linearNavigationReturn, ...void4 } = useLinearNavigation<ParentElement, ChildElement>({ rovingTabIndexReturn, linearNavigationParameters, paginatedChildrenParameters, rearrangeableChildrenReturn });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);

    return {
        managedChildrenParameters,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
        context: useMemoObject<UseListNavigationChildContext>({
            ...contextRovingTabIndex,
            ...contextTypeahead
        }),
        linearNavigationReturn,
        props: useMergedProps(propsStableLN, propsStableTN, propsRTI)
    }
})

/**
 * @compositeParams
 */
export const useListNavigationChild = monitored(function useListNavigationChild<ChildElement extends Element>({
    info: { index, untabbable, ...void1 },
    context,
    refElementReturn,
    ...void2
}: Parameter<UseListNavigationChild<ChildElement>>): ReturnType<UseListNavigationChild<ChildElement>> {
    const { props, hasCurrentFocusParameters, info, rovingTabIndexChildReturn, ...rticr } = useRovingTabIndexChild<ChildElement>({ context, info: { index, untabbable }, refElementReturn });
    const { pressParameters, textContentParameters, ...tncr } = useTypeaheadNavigationChild<ChildElement>({ context, info: { index } });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(tncr);
    assertEmptyObject(rticr);

    return {
        info,
        props,
        hasCurrentFocusParameters,
        rovingTabIndexChildReturn,
        pressParameters,
        textContentParameters,
        ...tncr,
        ...rticr
    }
})