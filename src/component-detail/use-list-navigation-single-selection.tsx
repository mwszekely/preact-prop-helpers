import { assertEmptyObject } from "../preact-extensions/use-child-manager";
import { useListNavigation, useListNavigationChild, UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationParameters, UseListNavigationReturnType } from "./use-list-navigation-partial";
import { SelectableChildInfo, useSingleSelection, useSingleSelectionChild, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnTypeInfo, UseSingleSelectionParameters, UseSingleSelectionReturnType } from "./use-single-selection";
import { useStableCallback } from "../preact-extensions/use-stable-callback";

/**
 * We're just gluing together the list navigation and single selection hooks,
 * since they're so commonly paired together. Also see the one that includes sorting.
 */
const _dummy = 0;

export interface UseListNavigationSingleSelectionChildInfo<TabbableChildElement extends Element> extends UseListNavigationChildInfo<TabbableChildElement>, SelectableChildInfo<TabbableChildElement> { }


export interface UseListNavigationSingleSelectionParameters<ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends
    UseListNavigationParameters<ChildElement, M>,
    Omit<UseSingleSelectionParameters<ChildElement>, "rovingTabIndexReturn"> {
    managedChildrenReturn: UseListNavigationParameters<ChildElement, M>["managedChildrenReturn"] & UseSingleSelectionParameters<ChildElement>["managedChildrenReturn"];
}

export interface UseListNavigationSingleSelectionReturnType<ParentOrChildElement extends Element, ChildElement extends Element> extends UseListNavigationReturnType<ParentOrChildElement, ChildElement>, UseSingleSelectionReturnType<ChildElement> { }

export function useListNavigationSingleSelection<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>>({
    linearNavigationParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    singleSelectionParameters,
    managedChildrenReturn,
    ..._void3
}: UseListNavigationSingleSelectionParameters<ChildElement, M>): UseListNavigationSingleSelectionReturnType<ParentOrChildElement, ChildElement> {
    const lnr = useListNavigation<ParentOrChildElement, ChildElement, M>({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, managedChildrenReturn });
    const { rovingTabIndexReturn } = lnr;
    const ssr = useSingleSelection<ChildElement>({ rovingTabIndexReturn, managedChildrenReturn, singleSelectionParameters });

    assertEmptyObject(_void3);

    return {
        ...ssr,
        ...lnr,
    }
}

export interface UseListNavigationSingleSelectionChildParameters<ChildElement extends Element> extends UseListNavigationChildParameters<ChildElement>, UseSingleSelectionChildParameters<ChildElement> {
    managedChildParameters: UseListNavigationChildParameters<ChildElement>["managedChildParameters"] & UseSingleSelectionChildParameters<ChildElement>["managedChildParameters"];
}

export interface UseListNavigationSingleSelectionChildReturnType<ChildElement extends Element> extends UseListNavigationChildReturnType<ChildElement>, UseSingleSelectionChildReturnTypeInfo<ChildElement> { }

export function useListNavigationSingleSelectionChild<ChildElement extends Element>({
    managedChildParameters: { index, ..._void5 },
    rovingTabIndexChildParameters: { hidden, ...void7 },
    singleSelectionChildParameters,
    singleSelectionContext,
    rovingTabIndexChildContext,
    typeaheadNavigationChildContext,
    refElementReturn,
    textContentParameters,
    ..._void1
}: UseListNavigationSingleSelectionChildParameters<ChildElement>): UseListNavigationSingleSelectionChildReturnType<ChildElement> {

    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ..._void3 },
        ...sscr
    } = useSingleSelectionChild<ChildElement>({
        managedChildParameters: { index },
        singleSelectionChildParameters,
        singleSelectionContext
    });

    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ..._void6 },
        ...lncr
    } = useListNavigationChild<ChildElement>({
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden },
        rovingTabIndexChildContext,
        typeaheadNavigationChildContext,
        refElementReturn,
        textContentParameters
    });

    assertEmptyObject(_void1);
    assertEmptyObject(_void3);
    assertEmptyObject(_void5);
    assertEmptyObject(_void6);
    assertEmptyObject(void7);

    return {
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: useStableCallback((focused, previouslyFocused, e) => {
                ocfic1?.(focused, previouslyFocused, e);
                ocfic2?.(focused, previouslyFocused, e);
            })
        },
        ...sscr,
        ...lncr
    }
}
