import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useStableObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { ExtendMerge, OmitStrong } from "../../util/types.js";
import { monitorCallCount } from "../../util/use-call-count.js";
import { UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType, useListNavigation, useListNavigationChild } from "./use-list-navigation-partial.js";
import { UseSingleSelectionChildInfo, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnType, UseSingleSelectionContext, UseSingleSelectionParameters, UseSingleSelectionReturnType, useSingleSelection, useSingleSelectionChild } from "./use-single-selection.js";

export interface UseListNavigationSingleSelectionChildInfo<TabbableChildElement extends Element> extends UseListNavigationChildInfo<TabbableChildElement>, UseSingleSelectionChildInfo<TabbableChildElement> { }
export interface UseListNavigationSingleSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends ExtendMerge<UseListNavigationParameters<ParentOrChildElement, ChildElement, M>, OmitStrong<UseSingleSelectionParameters<ChildElement, M>, "rovingTabIndexReturn">> { }
export interface UseListNavigationSingleSelectionReturnType<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends ExtendMerge<UseListNavigationReturnType<ParentOrChildElement, ChildElement, M>, UseSingleSelectionReturnType<ChildElement, M>> { }
export interface UseListNavigationSingleSelectionChildContext<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends UseListNavigationContext<ParentOrChildElement, ChildElement, M>, UseSingleSelectionContext<ChildElement, M> { }
export interface UseListNavigationSingleSelectionChildParameters<ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends ExtendMerge<UseListNavigationChildParameters<ChildElement, M>, UseSingleSelectionChildParameters<ChildElement, M>> { }
export interface UseListNavigationSingleSelectionChildReturnType<ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends ExtendMerge<UseListNavigationChildReturnType<ChildElement, M>, UseSingleSelectionChildReturnType<ChildElement>> { }

export function useListNavigationSingleSelection<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>>({
    linearNavigationParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    singleSelectionParameters,
    managedChildrenReturn,
    ..._void3
}: UseListNavigationSingleSelectionParameters<ParentOrChildElement, ChildElement, M>): UseListNavigationSingleSelectionReturnType<ParentOrChildElement, ChildElement, M> {
    monitorCallCount(useListNavigationSingleSelection);
    const { context: contextLN, propsStable, rovingTabIndexReturn, ...retLN } = useListNavigation<ParentOrChildElement, ChildElement, M>({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, managedChildrenReturn });
    const { context: contextSS, ...retSS } = useSingleSelection<ChildElement, M>({ rovingTabIndexReturn, managedChildrenReturn, singleSelectionParameters });

    assertEmptyObject(_void3);

    return {
        rovingTabIndexReturn,
        ...retSS,
        ...retLN,
        context: useStableObject({
            ...contextLN,
            ...contextSS
        }),
        propsStable
    }
}


export function useListNavigationSingleSelectionChild<ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>>({
    info: { index, ...void5 },
    rovingTabIndexChildParameters,
    singleSelectionChildParameters,
    context,
    refElementReturn,
    textContentParameters,
    info,
    ...void1
}: UseListNavigationSingleSelectionChildParameters<ChildElement, M>): UseListNavigationSingleSelectionChildReturnType<ChildElement, M> {
    monitorCallCount(useListNavigationSingleSelectionChild);

    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void3 },
        info: info3,
        singleSelectionChildReturn,
        props: propsSS,
        ...void9
    } = useSingleSelectionChild<ChildElement, M>({
        info: { index },
        singleSelectionChildParameters,
        context
    });

    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void6 },
        pressParameters,
        rovingTabIndexChildReturn,
        textContentReturn,
        props: propsLN,
        info: info2,
        ...void8
    } = useListNavigationChild<ChildElement, M>({
        info: { index },
        rovingTabIndexChildParameters,
        context,
        refElementReturn,
        textContentParameters
    });

    assertEmptyObject(void1);
    assertEmptyObject(void3);
    assertEmptyObject(void5);
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
        pressParameters,
        info: { ...info3, ...info2 },
        rovingTabIndexChildReturn,
        singleSelectionChildReturn,
        textContentReturn,
        props: useMergedProps(propsLN, propsSS),
    }
}
