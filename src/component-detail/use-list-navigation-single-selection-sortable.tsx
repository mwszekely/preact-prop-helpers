import { assertEmptyObject } from "../util/assert.js";
import { OmitTargeted } from "../util/types.js";
import { useListNavigationSingleSelection, useListNavigationSingleSelectionChild, UseListNavigationSingleSelectionChildInfo, UseListNavigationSingleSelectionChildParameters, UseListNavigationSingleSelectionChildReturnType, UseListNavigationSingleSelectionParameters, UseListNavigationSingleSelectionReturnType } from "./use-list-navigation-single-selection.js";
import { UseSortableChildInfo, useSortableChildren, UseSortableChildrenParameters, UseSortableChildrenReturnType } from "./use-sortable-children.js";

/**
 * We're just gluing together the single selection list navigation and sortable children hooks,
 * since they're so commonly paired together.
 * 
 * There could also be one that's just list nav + sortable, but single selection can be disregarded by setting `selectedIndex` to `null` anyway.
 */
const _dummy = 0;

export interface UseListNavigationSingleSelectionSortableChildInfo<TabbableChildElement extends Element> extends UseListNavigationSingleSelectionChildInfo<TabbableChildElement>, UseSortableChildInfo { }
export interface UseListNavigationSingleSelectionSortableParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends OmitTargeted<UseListNavigationSingleSelectionParameters<ParentOrChildElement, ChildElement, M>, "linearNavigationParameters", "indexDemangler" | "indexMangler">, UseSortableChildrenParameters<M> { }
export interface UseListNavigationSingleSelectionSortableReturnType<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>> extends UseListNavigationSingleSelectionReturnType<ParentOrChildElement, ChildElement>, UseSortableChildrenReturnType<M> { }
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
    const scr = useSortableChildren<M>({ rearrangeableChildrenParameters, sortableChildrenParameters });
    const { rearrangeableChildrenReturn: { indexDemangler, indexMangler } } = scr;
    const { propsStable, ...lnssr } = useListNavigationSingleSelection<ParentOrChildElement, ChildElement, M>({ linearNavigationParameters: { ...linearNavigationParameters, indexDemangler, indexMangler }, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, managedChildrenReturn });
    assertEmptyObject(_void3);

    return { propsStable, ...lnssr, ...scr }
}


export function useListNavigationSingleSelectionSortableChild<ChildElement extends Element>({
    managedChildParameters: { index, ..._void5 },
    rovingTabIndexChildParameters,
    singleSelectionChildParameters,
    singleSelectionContext,
    rovingTabIndexChildContext,
    typeaheadNavigationChildContext,
    refElementReturn,
    textContentParameters,
    ..._void1
}: UseListNavigationSingleSelectionSortableChildParameters<ChildElement>): UseListNavigationSingleSelectionSortableChildReturnType<ChildElement> {

    const lnsscr = useListNavigationSingleSelectionChild<ChildElement>({
        managedChildParameters: { index },
        rovingTabIndexChildParameters,
        singleSelectionChildParameters,
        singleSelectionContext,
        rovingTabIndexChildContext,
        typeaheadNavigationChildContext,
        refElementReturn,
        textContentParameters
    })

    assertEmptyObject(_void1);
    assertEmptyObject(_void5);

    return { ...lnsscr }
}
