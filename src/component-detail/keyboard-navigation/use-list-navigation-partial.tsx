import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { ElementProps, JSX, OmitStrong, TargetedPick } from "../../util/types.js";
import { useMonitoring } from "../../util/use-call-count.js";
import { UseProcessedIndexManglerReturnType } from "../processed-children/use-processed-index-mangler.js";
import { UseLinearNavigationParameters, UseLinearNavigationReturnType, useLinearNavigation } from "./use-linear-navigation.js";
import { RovingTabIndexChildContext, UseRovingTabIndexChildInfo, UseRovingTabIndexChildInfoKeysParameters, UseRovingTabIndexChildInfoKeysReturnType, UseRovingTabIndexChildParameters, UseRovingTabIndexChildReturnType, UseRovingTabIndexParameters, UseRovingTabIndexReturnType, useRovingTabIndex, useRovingTabIndexChild } from "./use-roving-tabindex.js";
import { UseTypeaheadNavigationChildInfo, UseTypeaheadNavigationChildInfoKeysParameters, UseTypeaheadNavigationChildInfoKeysReturnType, UseTypeaheadNavigationChildParameters, UseTypeaheadNavigationChildReturnType, UseTypeaheadNavigationContext, UseTypeaheadNavigationParameters, UseTypeaheadNavigationReturnType, useTypeaheadNavigation, useTypeaheadNavigationChild } from "./use-typeahead-navigation.js";

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




export interface UseListNavigationChildInfo<TabbableChildElementTag extends keyof JSX.IntrinsicElements> extends UseRovingTabIndexChildInfo<TabbableChildElementTag>, UseTypeaheadNavigationChildInfo<TabbableChildElementTag> { }

export interface UseListNavigationParameters<ParentOrChildElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseListNavigationChildInfo<ChildElementTag>> extends
    OmitStrong<UseRovingTabIndexParameters<ParentOrChildElementTag, ChildElementTag, M>, "processedIndexManglerReturn">,
    OmitStrong<UseTypeaheadNavigationParameters<ChildElementTag>, "rovingTabIndexReturn">,
    OmitStrong<UseLinearNavigationParameters<ParentOrChildElementTag, ChildElementTag>, "rovingTabIndexReturn">,
    TargetedPick<UseProcessedIndexManglerReturnType, "processedIndexManglerReturn", "indexDemangler" | "indexMangler"> { }

export interface UseListNavigationReturnType<ParentOrChildElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements> extends
    OmitStrong<UseRovingTabIndexReturnType<ParentOrChildElementTag, ChildElementTag>, "props">,
    OmitStrong<UseTypeaheadNavigationReturnType<ParentOrChildElementTag>, "propsStable">,
    OmitStrong<UseLinearNavigationReturnType<ParentOrChildElementTag>, "propsStable"> {
    props: ElementProps<ParentOrChildElementTag>;
    context: UseListNavigationContext;
}

/** {@link useListNavigationChild} requires the same `info` that {@link useRovingTabIndexChild} and {@link useTypeaheadNavigationChild} do (there is no `useLinearNavigationChild`) */
export type UseListNavigationChildInfoKeysParameters = UseRovingTabIndexChildInfoKeysParameters | UseTypeaheadNavigationChildInfoKeysParameters;
export type UseListNavigationChildInfoKeysReturnType = UseRovingTabIndexChildInfoKeysReturnType | UseTypeaheadNavigationChildInfoKeysReturnType;

export interface UseListNavigationChildParameters<ChildElementTag extends keyof JSX.IntrinsicElements> extends
    UseGenericChildParameters<UseListNavigationContext, Pick<UseListNavigationChildInfo<ChildElementTag>, UseRovingTabIndexChildInfoKeysParameters | UseTypeaheadNavigationChildInfoKeysParameters>>,
    OmitStrong<UseRovingTabIndexChildParameters<ChildElementTag>, "info" | "context">,
    OmitStrong<UseTypeaheadNavigationChildParameters<ChildElementTag>, "info" | "context"> {
}
export interface UseListNavigationContext extends RovingTabIndexChildContext, UseTypeaheadNavigationContext { }
export interface UseListNavigationChildReturnType<ChildElementTag extends keyof JSX.IntrinsicElements> extends
    UseRovingTabIndexChildReturnType<ChildElementTag>,
    UseTypeaheadNavigationChildReturnType {
    info: Pick<UseListNavigationChildInfo<ChildElementTag>, UseListNavigationChildInfoKeysReturnType>;
}



/**
 * Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.
 * 
 * @remarks In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
 * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any text for typeahead to focus the next item that matches.
 * 
 * @hasChild {@link useListNavigationChild}
 * 
 * @compositeParams
 */
export function useListNavigation<ParentOrChildElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements>({
    linearNavigationParameters,
    typeaheadNavigationParameters,
    rovingTabIndexParameters,
    managedChildrenReturn,
    refElementReturn,
    paginatedChildrenParameters,
    processedIndexManglerReturn,
    ...void1
}: UseListNavigationParameters<ParentOrChildElementTag, ChildElementTag, UseListNavigationChildInfo<ChildElementTag>>): UseListNavigationReturnType<ParentOrChildElementTag, ChildElementTag> {
    return useMonitoring(function useListNavigation(): UseListNavigationReturnType<ParentOrChildElementTag, ChildElementTag> {
        const { props: propsRTI, rovingTabIndexReturn, managedChildrenParameters, context: contextRovingTabIndex, ...void2 } = useRovingTabIndex<ParentOrChildElementTag, ChildElementTag>({ managedChildrenReturn, rovingTabIndexParameters, refElementReturn, processedIndexManglerReturn });
        const { propsStable: propsStableTN, typeaheadNavigationReturn, context: contextTypeahead, ...void3 } = useTypeaheadNavigation<ParentOrChildElementTag, ChildElementTag>({ rovingTabIndexReturn, typeaheadNavigationParameters, });
        const { propsStable: propsStableLN, linearNavigationReturn, ...void4 } = useLinearNavigation<ParentOrChildElementTag, ChildElementTag>({ rovingTabIndexReturn, linearNavigationParameters, paginatedChildrenParameters, processedIndexManglerReturn });

        assertEmptyObject(void1);
        assertEmptyObject(void2);
        assertEmptyObject(void3);
        assertEmptyObject(void4);

        // Merge the props while keeping them stable
        // (TODO: We run this merge logic every render but only need the first render's result because it's stable)
        //const p = useMergedProps(propsStableTN, propsStableLN);
        //const {propsStable} = useRef<ElementProps<ParentOrChildElement>>(p)

        return {
            managedChildrenParameters,
            rovingTabIndexReturn,
            typeaheadNavigationReturn,
            context: useMemoObject({
                ...contextRovingTabIndex,
                ...contextTypeahead
            }),
            linearNavigationReturn,
            props: useMergedProps(propsStableLN, propsStableTN, propsRTI)
        }
    });
}

/**
 * @compositeParams
 */
export function useListNavigationChild<ChildElementTag extends keyof JSX.IntrinsicElements>({
    info: { index, untabbable, ...void1 },
    context,
    refElementReturn,
    ...void2
}: UseListNavigationChildParameters<ChildElementTag>): UseListNavigationChildReturnType<ChildElementTag> {
    return useMonitoring(function useListNavigationChild(): UseListNavigationChildReturnType<ChildElementTag> {
        const { props, ...rticr } = useRovingTabIndexChild<ChildElementTag>({ context, info: { index, untabbable }, refElementReturn });
        const { ...tncr } = useTypeaheadNavigationChild<ChildElementTag>({ context, info: { index } });

        assertEmptyObject(void1);
        assertEmptyObject(void2);

        return {
            props,
            ...tncr,
            ...rticr
        }
    });
}