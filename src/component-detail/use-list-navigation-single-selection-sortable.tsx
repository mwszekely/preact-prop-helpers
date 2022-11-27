import { useListNavigationSingleSelection, useListNavigationSingleSelectionChild, UseListNavigationSingleSelectionChildInfo, UseListNavigationSingleSelectionChildReturnType, UseListNavigationSingleSelectionParameters, UseListNavigationSingleSelectionReturnType } from "./use-list-navigation-single-selection";
import { UseSortableChildInfo, useSortableChildren, UseSortableChildrenParameters, UseSortableChildrenReturnType } from "./use-sortable-children";
import { assertEmptyObject } from "../preact-extensions/use-child-manager";
import { UseListNavigationSingleSelectionChildParameters } from "./use-list-navigation-single-selection";

/**
 * We're just gluing together the single selection list navigation and sortable children hooks,
 * since they're so commonly paired together.
 * 
 * There could also be one that's just list nav + sortable, but single selection can be disregarded by setting `selectedIndex` to `null` anyway.
 */
const _dummy = 0;

export interface UseListNavigationSingleSelectionSortableChildInfo<TabbableChildElement extends Element> extends UseListNavigationSingleSelectionChildInfo<TabbableChildElement>, UseSortableChildInfo {}
export interface UseListNavigationSingleSelectionSortableParameters<_ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends Omit<UseListNavigationSingleSelectionParameters<ChildElement, M>, "linearNavigationParameters">, UseSortableChildrenParameters<M> {
    linearNavigationParameters: Omit<UseListNavigationSingleSelectionParameters<ChildElement, M>["linearNavigationParameters"], "indexDemangler" | "indexMangler">
}
export interface UseListNavigationSingleSelectionSortableReturnType<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>> extends UseListNavigationSingleSelectionReturnType<ParentOrChildElement, ChildElement>, Omit<UseSortableChildrenReturnType<ParentOrChildElement, M>, "linearNavigationParameters"> { }
export interface UseListNavigationSingleSelectionSortableChildParameters<ChildElement extends Element> extends UseListNavigationSingleSelectionChildParameters<ChildElement> { }
export interface UseListNavigationSingleSelectionSortableChildReturnType<ChildElement extends Element> extends UseListNavigationSingleSelectionChildReturnType<ChildElement> { }

export function useListNavigationSingleSelectionSortable<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>>({
    linearNavigationParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    singleSelectionParameters,
    managedChildrenReturn,
    rearrangeableChildrenParameters,
    sortableChildrenParameters,
    ..._void3
}: UseListNavigationSingleSelectionSortableParameters<ParentOrChildElement, ChildElement, M>): UseListNavigationSingleSelectionSortableReturnType<ParentOrChildElement, ChildElement, M> {
    const scr = useSortableChildren<ParentOrChildElement, M>({ rearrangeableChildrenParameters, sortableChildrenParameters });
    const { rearrangeableChildrenReturn: { indexDemangler, indexMangler } } = scr;
    const lnssr = useListNavigationSingleSelection<ParentOrChildElement, ChildElement, M>({ linearNavigationParameters: { ...linearNavigationParameters, indexDemangler, indexMangler }, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, managedChildrenReturn });
    assertEmptyObject(_void3);

    return { ...lnssr, ...scr }
}


export function useListNavigationSingleSelectionSortableChild<ChildElement extends Element>({
    managedChildParameters: { index, ..._void5 },
    rovingTabIndexChildParameters,
    singleSelectionChildParameters,
    singleSelectionContext,
    typeaheadNavigationChildParameters,
    rovingTabIndexChildContext,
    typeaheadNavigationChildContext,
    ..._void1
}: UseListNavigationSingleSelectionSortableChildParameters<ChildElement>): UseListNavigationSingleSelectionSortableChildReturnType<ChildElement> {

    const lnsscr = useListNavigationSingleSelectionChild<ChildElement>({
        managedChildParameters: { index },
        rovingTabIndexChildParameters,
        singleSelectionChildParameters,
        singleSelectionContext,
        typeaheadNavigationChildParameters,
        rovingTabIndexChildContext,
        typeaheadNavigationChildContext
    })

    assertEmptyObject(_void1);
    assertEmptyObject(_void5);

    return { ...lnsscr }
}
