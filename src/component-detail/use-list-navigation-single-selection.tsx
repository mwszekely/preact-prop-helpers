import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useStableObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { OmitStrong } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { useListNavigation, useListNavigationChild, UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType } from "./use-list-navigation-partial.js";
import { SelectableChildInfo, useSingleSelection, useSingleSelectionChild, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnType, UseSingleSelectionContext, UseSingleSelectionParameters, UseSingleSelectionReturnType } from "./use-single-selection.js";

export interface UseListNavigationSingleSelectionChildInfo<TabbableChildElement extends Element> extends UseListNavigationChildInfo<TabbableChildElement>, SelectableChildInfo<TabbableChildElement> { }

export interface UseListNavigationSingleSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends UseListNavigationParameters<ParentOrChildElement, ChildElement, M>, OmitStrong<UseSingleSelectionParameters<ChildElement>, "rovingTabIndexReturn"> {
    managedChildrenReturn: UseListNavigationParameters<ParentOrChildElement, ChildElement, M>["managedChildrenReturn"] & UseSingleSelectionParameters<ChildElement>["managedChildrenReturn"];
}

export interface UseListNavigationSingleSelectionReturnType<ParentOrChildElement extends Element, ChildElement extends Element> extends
    OmitStrong<UseListNavigationReturnType<ParentOrChildElement, ChildElement>, "context">,
    OmitStrong<UseSingleSelectionReturnType<ChildElement>, "context"> {
    context: UseListNavigationSingleSelectionChildContext<ParentOrChildElement, ChildElement>;
}

export interface UseListNavigationSingleSelectionChildContext<ParentOrChildElement extends Element, ChildElement extends Element> extends UseListNavigationContext<ParentOrChildElement, ChildElement>, UseSingleSelectionContext<ChildElement> {

}

export function useListNavigationSingleSelection<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>>({
    linearNavigationParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    singleSelectionParameters,
    managedChildrenReturn,
    ..._void3
}: UseListNavigationSingleSelectionParameters<ParentOrChildElement, ChildElement, M>): UseListNavigationSingleSelectionReturnType<ParentOrChildElement, ChildElement> {
    monitorCallCount(useListNavigationSingleSelection);
    const { context: { rovingTabIndexContext, typeaheadNavigationContext }, propsStable, rovingTabIndexReturn, typeaheadNavigationReturn, managedChildrenParameters, linearNavigationReturn, ...void1 } = useListNavigation<ParentOrChildElement, ChildElement, M>({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, managedChildrenReturn });
    const { context: { singleSelectionContext }, childrenHaveFocusParameters, singleSelectionReturn, ...void2 } = useSingleSelection<ChildElement>({ rovingTabIndexReturn, managedChildrenReturn, singleSelectionParameters });

    assertEmptyObject(_void3);
    assertEmptyObject(void1);
    assertEmptyObject(void2);

    return {
        childrenHaveFocusParameters,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn,
        linearNavigationReturn,
        managedChildrenParameters,
        context: useStableObject({
            rovingTabIndexContext,
            singleSelectionContext,
            typeaheadNavigationContext
        }),
        propsStable
    }
}

export interface UseListNavigationSingleSelectionChildParameters<ChildElement extends Element> extends
    OmitStrong<UseListNavigationChildParameters<ChildElement>, "context">,
    OmitStrong<UseSingleSelectionChildParameters<ChildElement>, "context"> {
    context: UseListNavigationSingleSelectionChildContext<Element, ChildElement>;
    managedChildParameters: UseListNavigationChildParameters<ChildElement>["managedChildParameters"] & UseSingleSelectionChildParameters<ChildElement>["managedChildParameters"];
}


export interface UseListNavigationSingleSelectionChildReturnType<ChildElement extends Element> extends UseListNavigationChildReturnType<ChildElement>, UseSingleSelectionChildReturnType<ChildElement> {}

export function useListNavigationSingleSelectionChild<ChildElement extends Element>({
    managedChildParameters: { index, ..._void5 },
    rovingTabIndexChildParameters: { hidden, ...void7 },
    singleSelectionChildParameters,
    context,
    refElementReturn,
    textContentParameters,
    ..._void1
}: UseListNavigationSingleSelectionChildParameters<ChildElement>): UseListNavigationSingleSelectionChildReturnType<ChildElement> {
    monitorCallCount(useListNavigationSingleSelectionChild);
    
    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ..._void3 },
        managedChildParameters,
        singleSelectionChildReturn,
        props: propsSS,
        ...void9
    } = useSingleSelectionChild<ChildElement>({
        managedChildParameters: { index },
        singleSelectionChildParameters,
        context
    });

    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ..._void6 },
        pressParameters,
        rovingTabIndexChildReturn,
        textContentReturn,
        props: propsLN,
        ...void8
    } = useListNavigationChild<ChildElement>({
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden },
        context,
        refElementReturn,
        textContentParameters
    });

    assertEmptyObject(_void1);
    assertEmptyObject(_void3);
    assertEmptyObject(_void5);
    assertEmptyObject(_void6);
    assertEmptyObject(void7);
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
        managedChildParameters,
        rovingTabIndexChildReturn,
        singleSelectionChildReturn,
        textContentReturn,
        props: useMergedProps(propsLN, propsSS),
    }
}
