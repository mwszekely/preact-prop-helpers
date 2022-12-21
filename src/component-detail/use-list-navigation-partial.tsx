import { assertEmptyObject } from "../preact-extensions/use-managed-children";
import { useLinearNavigation, UseLinearNavigationParameters, UseLinearNavigationReturnType } from "./use-linear-navigation";
import { useRovingTabIndex, useRovingTabIndexChild, UseRovingTabIndexChildInfo, UseRovingTabIndexChildParameters, UseRovingTabIndexChildReturnType, UseRovingTabIndexParameters, UseRovingTabIndexReturnType } from "./use-roving-tabindex";
import { useTypeaheadNavigation, useTypeaheadNavigationChild, UseTypeaheadNavigationChildParameters, UseTypeaheadNavigationChildReturnType, UseTypeaheadNavigationParameters, UseTypeaheadNavigationReturnType } from "./use-typeahead-navigation";


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
export type NavigateToIndex = (i: number | null, fromUserInteraction: boolean) => void;





// *** Parameters (list, list-single, list-child, list-single-child)
export interface UseListNavigationParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>> extends
    UseRovingTabIndexParameters<ChildElement, M>,
    Omit<UseTypeaheadNavigationParameters<ChildElement>, "rovingTabIndexReturn">,
    Omit<UseLinearNavigationParameters<ParentOrChildElement, ChildElement>, "rovingTabIndexReturn"> {
}

export interface UseListNavigationChildParameters<ChildElement extends Element> extends UseRovingTabIndexChildParameters<ChildElement>, UseTypeaheadNavigationChildParameters<ChildElement> {
    //managedChildParameters: UseRovingTabIndexChildParameters<ChildElement>["managedChildParameters"] & UseTypeaheadNavigationChildParameters<ChildElement>["managedChildParameters"];
}


export interface UseListNavigationReturnType<ParentOrChildElement extends Element, ChildElement extends Element> extends UseRovingTabIndexReturnType<ChildElement>, UseLinearNavigationReturnType<ParentOrChildElement>, UseTypeaheadNavigationReturnType<ParentOrChildElement> { }
export interface UseListNavigationChildReturnType<ChildElement extends Element> extends UseRovingTabIndexChildReturnType<ChildElement>, UseTypeaheadNavigationChildReturnType { }
export type UseListNavigationChild<ChildElement extends Element> = (a: UseListNavigationChildParameters<ChildElement>) => UseListNavigationChildReturnType<ChildElement>;



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
}: UseListNavigationParameters<ParentOrChildElement, ChildElement, M>): UseListNavigationReturnType<ParentOrChildElement, ChildElement> {

    const rtir = useRovingTabIndex<ChildElement, M>({ managedChildrenReturn, rovingTabIndexParameters });
    const { rovingTabIndexReturn } = rtir;
    const tnr = useTypeaheadNavigation<ParentOrChildElement, ChildElement>({ rovingTabIndexReturn, typeaheadNavigationParameters, });
    const lnr = useLinearNavigation<ParentOrChildElement, ChildElement>({ rovingTabIndexReturn, linearNavigationParameters, });

    assertEmptyObject(_void1);

    return {
        ...lnr,
        ...tnr,
        ...rtir
    }
}

export function useListNavigationChild<ChildElement extends Element>({
    rovingTabIndexChildParameters,
    rovingTabIndexChildContext,
    typeaheadNavigationChildContext,
    //typeaheadNavigationChildParameters,
    managedChildParameters,
    refElementReturn,
    textContentParameters,
    ..._void2
}: UseListNavigationChildParameters<ChildElement>): UseListNavigationChildReturnType<ChildElement> {

    const rticr = useRovingTabIndexChild<ChildElement>({ rovingTabIndexChildContext, rovingTabIndexChildParameters, managedChildParameters });
    const { textContentReturn } = useTypeaheadNavigationChild<ChildElement>({ refElementReturn, typeaheadNavigationChildContext, managedChildParameters, textContentParameters });

    assertEmptyObject(_void2);
//    assertEmptyObject(_void5);

    return {
        textContentReturn,
        ...rticr
    }
}