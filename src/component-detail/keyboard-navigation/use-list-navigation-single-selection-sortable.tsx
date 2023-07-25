import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { assertEmptyObject } from "../../util/assert.js";
import { OmitStrong, TargetedOmit } from "../../util/types.js";
import { monitorCallCount } from "../../util/use-call-count.js";
import { UseListNavigationSingleSelectionChildContext, UseListNavigationSingleSelectionChildInfo, UseListNavigationSingleSelectionChildInfoKeysParameters, UseListNavigationSingleSelectionChildInfoKeysReturnType, UseListNavigationSingleSelectionChildParameters, UseListNavigationSingleSelectionChildReturnType, UseListNavigationSingleSelectionParameters, UseListNavigationSingleSelectionReturnType, useListNavigationSingleSelection, useListNavigationSingleSelectionChild } from "./use-list-navigation-single-selection.js";
import { UseSortableChildInfo, UseSortableChildrenParameters, UseSortableChildrenReturnType, useSortableChildren } from "./use-sortable-children.js";

/**
 * We're just gluing together the single selection list navigation and sortable children hooks,
 * since they're so commonly paired together.
 * 
 * There could also be one that's just list nav + sortable, but single selection can be disregarded by setting `selectedIndex` to `null` anyway.
 */
const _dummy = 0;

export type UseListNavigationSingleSelectionSortableChildInfoKeysParameters = UseListNavigationSingleSelectionChildInfoKeysParameters;
export type UseListNavigationSingleSelectionSortableChildInfoKeysReturnType = UseListNavigationSingleSelectionChildInfoKeysReturnType;

export type UseListNavigationSingleSelectionSortableChildContext = UseListNavigationSingleSelectionChildContext;

export interface UseListNavigationSingleSelectionSortableChildInfo<TabbableChildElement extends Element> extends
    UseListNavigationSingleSelectionChildInfo<TabbableChildElement>,
    UseSortableChildInfo {

}
export interface UseListNavigationSingleSelectionSortableParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends
    OmitStrong<UseListNavigationSingleSelectionParameters<ParentOrChildElement, ChildElement, M>, "linearNavigationParameters" | "managedChildrenReturn">,
    TargetedOmit<UseListNavigationSingleSelectionParameters<ParentOrChildElement, ChildElement, M>, "linearNavigationParameters", "indexDemangler" | "indexMangler">,
    UseSortableChildrenParameters<M> {

}
export interface UseListNavigationSingleSelectionSortableReturnType<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>> extends
    UseListNavigationSingleSelectionReturnType<ParentOrChildElement, ChildElement, M>,
    UseSortableChildrenReturnType<M> {

}

export interface UseListNavigationSingleSelectionSortableChildParameters<ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>> extends
    UseGenericChildParameters<UseListNavigationSingleSelectionSortableChildContext, Pick<M, UseListNavigationSingleSelectionSortableChildInfoKeysParameters>>,
    UseListNavigationSingleSelectionChildParameters<ChildElement, M> {
        
}
export interface UseListNavigationSingleSelectionSortableChildReturnType<ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>> extends
    UseListNavigationSingleSelectionChildReturnType<ChildElement, M> {

}

export function useListNavigationSingleSelectionSortable<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>>({
    linearNavigationParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    singleSelectionParameters,
    managedChildrenReturn,
    rearrangeableChildrenParameters,
    sortableChildrenParameters,
    refElementReturn,
    paginatedChildrenParameters,
    ...void3
}: UseListNavigationSingleSelectionSortableParameters<ParentOrChildElement, ChildElement, M>): UseListNavigationSingleSelectionSortableReturnType<ParentOrChildElement, ChildElement, M> {
    monitorCallCount(useListNavigationSingleSelectionSortable);
    const { rearrangeableChildrenReturn, sortableChildrenReturn, ...void1 } = useSortableChildren<M>({ rearrangeableChildrenParameters, sortableChildrenParameters, managedChildrenReturn });
    const { indexDemangler, indexMangler } = rearrangeableChildrenReturn;
    const { propsParent, propsStableParentOrChild, context, ...restLN } = useListNavigationSingleSelection<ParentOrChildElement, ChildElement, M>({ linearNavigationParameters: { ...linearNavigationParameters, indexDemangler, indexMangler }, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters });

    assertEmptyObject(void1);
    assertEmptyObject(void3);

    return {
        context,
        propsParent,
        propsStableParentOrChild,
        rearrangeableChildrenReturn,
        sortableChildrenReturn,
        ...restLN
    }
}


export function useListNavigationSingleSelectionSortableChild<ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>>({
    info,
    context,
    refElementReturn,
    textContentParameters,
    ...void1
}: UseListNavigationSingleSelectionSortableChildParameters<ChildElement, M>): UseListNavigationSingleSelectionSortableChildReturnType<ChildElement, M> {
    monitorCallCount(useListNavigationSingleSelectionSortableChild);
    assertEmptyObject(void1);

    return useListNavigationSingleSelectionChild<ChildElement, M>({
        info,
        context,
        refElementReturn,
        textContentParameters,
    });
}
