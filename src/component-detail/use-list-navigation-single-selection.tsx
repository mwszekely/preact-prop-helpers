import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useStableObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { ExtendMerge, OmitStrong } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { useListNavigation, useListNavigationChild, UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType } from "./use-list-navigation-partial.js";
import { SelectableChildInfo, useSingleSelection, useSingleSelectionChild, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnType, UseSingleSelectionContext, UseSingleSelectionParameters, UseSingleSelectionReturnType } from "./use-single-selection.js";

export interface UseListNavigationSingleSelectionChildInfo<TabbableChildElement extends Element> extends UseListNavigationChildInfo<TabbableChildElement>, SelectableChildInfo<TabbableChildElement> { }
export interface UseListNavigationSingleSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends ExtendMerge<UseListNavigationParameters<ParentOrChildElement, ChildElement, M>, OmitStrong<UseSingleSelectionParameters<ChildElement>, "rovingTabIndexReturn">> { }
export interface UseListNavigationSingleSelectionReturnType<ParentOrChildElement extends Element, ChildElement extends Element> extends ExtendMerge<UseListNavigationReturnType<ParentOrChildElement, ChildElement>, UseSingleSelectionReturnType<ChildElement>> { }
export interface UseListNavigationSingleSelectionChildContext<ParentOrChildElement extends Element, ChildElement extends Element> extends UseListNavigationContext<ParentOrChildElement, ChildElement>, UseSingleSelectionContext<ChildElement> { }
export interface UseListNavigationSingleSelectionChildParameters<ChildElement extends Element> extends ExtendMerge<UseListNavigationChildParameters<ChildElement>, UseSingleSelectionChildParameters<ChildElement>> { }
export interface UseListNavigationSingleSelectionChildReturnType<ChildElement extends Element> extends UseListNavigationChildReturnType<ChildElement>, UseSingleSelectionChildReturnType<ChildElement> { }

export function useListNavigationSingleSelection<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>>({
    linearNavigationParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    singleSelectionParameters,
    managedChildrenReturn,
    ..._void3
}: UseListNavigationSingleSelectionParameters<ParentOrChildElement, ChildElement, M>): UseListNavigationSingleSelectionReturnType<ParentOrChildElement, ChildElement> {
    monitorCallCount(useListNavigationSingleSelection);
    const { context: contextLN, propsStable, rovingTabIndexReturn, ...retLN } = useListNavigation<ParentOrChildElement, ChildElement, M>({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, managedChildrenReturn });
    const { context: contextSS, ...retSS } = useSingleSelection<ChildElement>({ rovingTabIndexReturn, managedChildrenReturn, singleSelectionParameters });

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


export function useListNavigationSingleSelectionChild<ChildElement extends Element>({
    managedChildParameters: { index, ...void5 },
    rovingTabIndexChildParameters,
    singleSelectionChildParameters,
    context,
    refElementReturn,
    textContentParameters,
    ...void1
}: UseListNavigationSingleSelectionChildParameters<ChildElement>): UseListNavigationSingleSelectionChildReturnType<ChildElement> {
    monitorCallCount(useListNavigationSingleSelectionChild);

    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void3 },
        managedChildParameters: { setLocalSelected, ...void4 },
        singleSelectionChildReturn,
        props: propsSS,
        ...void9
    } = useSingleSelectionChild<ChildElement>({
        managedChildParameters: { index },
        singleSelectionChildParameters,
        context
    });

    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void6 },
        pressParameters,
        rovingTabIndexChildReturn,
        textContentReturn,
        props: propsLN,
        ...void8
    } = useListNavigationChild<ChildElement>({
        managedChildParameters: { index },
        rovingTabIndexChildParameters,
        context,
        refElementReturn,
        textContentParameters
    });

    assertEmptyObject(void1);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
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
        managedChildParameters: { setLocalSelected },
        rovingTabIndexChildReturn,
        singleSelectionChildReturn,
        textContentReturn,
        props: useMergedProps(propsLN, propsSS),
    }
}
