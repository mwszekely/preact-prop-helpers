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

export interface UseListNavigationSingleSelectionReturnType<ParentOrChildElement extends Element, ChildElement extends Element> extends UseListNavigationReturnType<ParentOrChildElement, ChildElement>, UseSingleSelectionReturnType { }

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
    managedChildParameters: { hidden, index, disabled, ..._void5 },
    singleSelectionChildParameters,
    singleSelectionContext,
    typeaheadNavigationChildParameters,
    rovingTabIndexChildContext,
    typeaheadNavigationChildContext,
    ..._void1
}: UseListNavigationSingleSelectionChildParameters<ChildElement>): UseListNavigationSingleSelectionChildReturnType<ChildElement> {

    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ..._void3 },
        ...sscr
    } = useSingleSelectionChild<ChildElement>({
        managedChildParameters: { index, disabled },
        singleSelectionChildParameters,
        singleSelectionContext
    });

    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ..._void6 },
        ...lncr
    } = useListNavigationChild<ChildElement>({
        managedChildParameters: { hidden, index },
        typeaheadNavigationChildParameters,
        rovingTabIndexChildContext,
        typeaheadNavigationChildContext
    });

    assertEmptyObject(_void1);
    assertEmptyObject(_void3);
    assertEmptyObject(_void5);
    assertEmptyObject(_void6);

    const onCurrentFocusedInnerChanged = useStableCallback<NonNullable<typeof ocfic1>>((focused, previouslyFocused) => {
        ocfic1?.(focused, previouslyFocused);
        ocfic2?.(focused, previouslyFocused);
    });

    return {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged },
        ...sscr,
        ...lncr
    }
}
