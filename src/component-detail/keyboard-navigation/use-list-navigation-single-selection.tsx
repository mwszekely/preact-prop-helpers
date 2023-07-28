import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { ElementProps, ExtendMerge, OmitStrong } from "../../util/types.js";
import { monitorCallCount } from "../../util/use-call-count.js";
import { UseSingleSelectionChildInfo, UseSingleSelectionChildInfoKeysParameters, UseSingleSelectionChildInfoKeysReturnType, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnType, UseSingleSelectionContext, UseSingleSelectionParameters, UseSingleSelectionReturnType, useSingleSelection, useSingleSelectionChild } from "../use-single-selection.js";
import { UseListNavigationChildInfo, UseListNavigationChildInfoKeysParameters, UseListNavigationChildInfoKeysReturnType, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType, useListNavigation, useListNavigationChild } from "./use-list-navigation-partial.js";

export interface UseListNavigationSingleSelectionChildInfo<TabbableChildElement extends Element> extends UseListNavigationChildInfo<TabbableChildElement>, UseSingleSelectionChildInfo<TabbableChildElement> { }
export interface UseListNavigationSingleSelectionChildContext extends UseListNavigationContext, UseSingleSelectionContext { }

export interface UseListNavigationSingleSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends ExtendMerge<UseListNavigationParameters<ParentOrChildElement, ChildElement, M>, OmitStrong<UseSingleSelectionParameters<ParentOrChildElement, ChildElement>, "rovingTabIndexReturn">> { }
export interface UseListNavigationSingleSelectionReturnType<ParentOrChildElement extends Element, ChildElement extends Element> extends ExtendMerge<UseListNavigationReturnType<ParentOrChildElement, ChildElement>, UseSingleSelectionReturnType<ChildElement>> {
    context: UseListNavigationSingleSelectionChildContext;
}

export type UseListNavigationSingleSelectionChildInfoKeysParameters = UseListNavigationChildInfoKeysParameters | UseSingleSelectionChildInfoKeysParameters;
export type UseListNavigationSingleSelectionChildInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType | UseSingleSelectionChildInfoKeysReturnType;

export interface UseListNavigationSingleSelectionChildParameters<ChildElement extends Element> extends
    UseGenericChildParameters<UseListNavigationSingleSelectionChildContext, Pick<UseListNavigationSingleSelectionChildInfo<ChildElement>, UseListNavigationSingleSelectionChildInfoKeysParameters>>,
    OmitStrong<UseListNavigationChildParameters<ChildElement>, "context" | "info">,
    OmitStrong<UseSingleSelectionChildParameters<ChildElement>, "context" | "info"> {
}

export interface UseListNavigationSingleSelectionChildReturnType<ChildElement extends Element> extends OmitStrong<ExtendMerge<UseListNavigationChildReturnType<ChildElement>, UseSingleSelectionChildReturnType<ChildElement>>, "props"> {
    propsTabbable: ElementProps<any>;
    propsChild: ElementProps<any>;
}

/**
 * Combines {@link useListNavigation} and {@link useSingleSelection}.
 * 
 * @remarks The single-selection behavior is optional, if you decide you need multi-selection instead within the same component.
 * 
 * @hasChild {@link useListNavigationSingleSelectionChild}
 * 
 * @compositeParams
 */
export function useListNavigationSingleSelection<ParentOrChildElement extends Element, ChildElement extends Element>({
    linearNavigationParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    singleSelectionParameters,
    managedChildrenReturn,
    refElementReturn,
    paginatedChildrenParameters,
    rearrangeableChildrenReturn,
    ...void3
}: UseListNavigationSingleSelectionParameters<ParentOrChildElement, ChildElement, UseListNavigationSingleSelectionChildInfo<ChildElement>>): UseListNavigationSingleSelectionReturnType<ParentOrChildElement, ChildElement> {
    monitorCallCount(useListNavigationSingleSelection);
    const { context: contextLN, propsParent, propsStableParentOrChild, rovingTabIndexReturn, ...retLN } = useListNavigation<ParentOrChildElement, ChildElement>({ linearNavigationParameters, rovingTabIndexParameters, paginatedChildrenParameters, typeaheadNavigationParameters, managedChildrenReturn, refElementReturn, rearrangeableChildrenReturn });
    const { context: contextSS, ...retSS } = useSingleSelection<ParentOrChildElement, ChildElement>({ rovingTabIndexReturn, managedChildrenReturn, singleSelectionParameters });

    assertEmptyObject(void3);

    return {
        rovingTabIndexReturn,
        ...retSS,
        ...retLN,
        context: useMemoObject({
            ...contextLN,
            ...contextSS
        }),
        propsStableParentOrChild: propsStableParentOrChild,
        propsParent: propsParent,
    }
}

/**
 * @compositeParams
 */
export function useListNavigationSingleSelectionChild<ChildElement extends Element>({
    info: { index, untabbable, unselectable, ...void2 },
    context,
    refElementReturn,
    textContentParameters,
    ...void1
}: UseListNavigationSingleSelectionChildParameters<ChildElement>): UseListNavigationSingleSelectionChildReturnType<ChildElement> {
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
    } = useListNavigationChild<ChildElement>({
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
