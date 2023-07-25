import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { ElementProps, ExtendMerge, OmitStrong } from "../../util/types.js";
import { monitorCallCount } from "../../util/use-call-count.js";
import { UseListNavigationChildInfo, UseListNavigationChildInfoKeysParameters, UseListNavigationChildInfoKeysReturnType, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType, useListNavigation, useListNavigationChild } from "./use-list-navigation-partial.js";
import { UseSingleSelectionChildInfo, UseSingleSelectionChildInfoKeysParameters as UseSingleSelectionChildInfoParameterKeys, UseSingleSelectionChildInfoKeysReturnType as UseSingleSelectionChildInfoReturnKeys, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnType, UseSingleSelectionContext, UseSingleSelectionParameters, UseSingleSelectionReturnType, useSingleSelection, useSingleSelectionChild } from "./use-single-selection.js";

export interface UseListNavigationSingleSelectionChildInfo<TabbableChildElement extends Element> extends UseListNavigationChildInfo<TabbableChildElement>, UseSingleSelectionChildInfo<TabbableChildElement> { }
export interface UseListNavigationSingleSelectionChildContext extends UseListNavigationContext, UseSingleSelectionContext { }

export interface UseListNavigationSingleSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends ExtendMerge<UseListNavigationParameters<ParentOrChildElement, ChildElement, M>, OmitStrong<UseSingleSelectionParameters<ParentOrChildElement, ChildElement, M>, "rovingTabIndexReturn">> { }
export interface UseListNavigationSingleSelectionReturnType<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends ExtendMerge<UseListNavigationReturnType<ParentOrChildElement, ChildElement, M>, UseSingleSelectionReturnType<ChildElement>> {
    context: UseListNavigationSingleSelectionChildContext;
}

export type UseListNavigationSingleSelectionChildInfoKeysParameters = UseListNavigationChildInfoKeysParameters | UseSingleSelectionChildInfoParameterKeys;
export type UseListNavigationSingleSelectionChildInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType | UseSingleSelectionChildInfoReturnKeys;

export interface UseListNavigationSingleSelectionChildParameters<ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends
    UseGenericChildParameters<UseListNavigationSingleSelectionChildContext, Pick<M, UseListNavigationSingleSelectionChildInfoKeysParameters>>,
    OmitStrong<UseListNavigationChildParameters<ChildElement, M>, "context" | "info">,
    OmitStrong<UseSingleSelectionChildParameters<ChildElement>, "context" | "info"> {
}

export interface UseListNavigationSingleSelectionChildReturnType<ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends OmitStrong<ExtendMerge<UseListNavigationChildReturnType<ChildElement, M>, UseSingleSelectionChildReturnType<ChildElement>>, "props"> {
    propsTabbable: ElementProps<any>;
    propsChild: ElementProps<any>;
}

export function useListNavigationSingleSelection<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>>({
    linearNavigationParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    singleSelectionParameters,
    managedChildrenReturn,
    refElementReturn,
    paginatedChildrenParameters,
    ...void3
}: UseListNavigationSingleSelectionParameters<ParentOrChildElement, ChildElement, M>): UseListNavigationSingleSelectionReturnType<ParentOrChildElement, ChildElement, M> {
    monitorCallCount(useListNavigationSingleSelection);
    const { context: contextLN, propsParent, propsStableParentOrChild, rovingTabIndexReturn, ...retLN } = useListNavigation<ParentOrChildElement, ChildElement, M>({ linearNavigationParameters, rovingTabIndexParameters, paginatedChildrenParameters, typeaheadNavigationParameters, managedChildrenReturn, refElementReturn });
    const { context: contextSS, ...retSS } = useSingleSelection<ParentOrChildElement, ChildElement, M>({ rovingTabIndexReturn, managedChildrenReturn, singleSelectionParameters });

    assertEmptyObject(void3);

    return {
        rovingTabIndexReturn,
        ...retSS,
        ...retLN,
        context: useMemoObject({
            ...contextLN,
            ...contextSS
        }),
        propsParent,
        propsStableParentOrChild
    }
}


export function useListNavigationSingleSelectionChild<ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>>({
    info: { index, untabbable, unselectable, ...void2 },
    context,
    refElementReturn,
    textContentParameters,
    ...void1
}: UseListNavigationSingleSelectionChildParameters<ChildElement, M>): UseListNavigationSingleSelectionChildReturnType<ChildElement, M> {
    monitorCallCount(useListNavigationSingleSelectionChild);

    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void3 },
        info: infoSS,
        singleSelectionChildReturn,
        props: propsSS,
        pressParameters: { onPressSync },
        ...void9
    } = useSingleSelectionChild<ChildElement>({
        info: { index, unselectable },
        context,
    });

    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void6 },
        pressParameters: { excludeSpace },
        rovingTabIndexChildReturn,
        textContentReturn,
        props: propsLN,
        info: infoLN,
        ...void8
    } = useListNavigationChild<ChildElement, M>({
        info: { index, untabbable },
        context,
        refElementReturn,
        textContentParameters,
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void6);
    assertEmptyObject(void8);
    assertEmptyObject(void9);

    return {
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: useStableCallback((focused, previouslyFocused, e) => {
                ocfic1?.(focused, previouslyFocused, e);
                ocfic2?.(focused, previouslyFocused, e);
            })
        },
        pressParameters: { onPressSync, excludeSpace },
        info: { ...infoSS, ...infoLN },
        rovingTabIndexChildReturn,
        singleSelectionChildReturn,
        textContentReturn,
        propsChild: propsSS,
        propsTabbable: propsLN
    }
}
