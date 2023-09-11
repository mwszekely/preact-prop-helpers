
import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { assertEmptyObject } from "../../util/assert.js";
import { OmitStrong } from "../../util/types.js";
import { monitored } from "../../util/use-call-count.js";
import { UseSortableChildInfo, UseSortableChildrenParameters, UseSortableChildrenReturnType, useSortableChildren } from "../use-sortable-children.js";
import { UseListNavigationSelectionChildContext, UseListNavigationSelectionChildInfo, UseListNavigationSelectionChildInfoKeysParameters, UseListNavigationSelectionChildInfoKeysReturnType, UseListNavigationSelectionChildParameters, UseListNavigationSelectionChildReturnType, UseListNavigationSelectionParameters, UseListNavigationSelectionReturnType, useListNavigationSelection, useListNavigationSelectionChild } from "./use-list-navigation-selection.js";

/**
 * We're just gluing together the  selection list navigation and sortable children hooks,
 * since they're so commonly paired together.
 * 
 * There could also be one that's just list nav + sortable, but  selection can be disregarded by setting `selectedIndex` to `null` anyway.
 */
const _dummy = 0;

export type UseListNavigationSelectionSortableChildInfoKeysParameters = UseListNavigationSelectionChildInfoKeysParameters;
export type UseListNavigationSelectionSortableChildInfoKeysReturnType = UseListNavigationSelectionChildInfoKeysReturnType;

export type UseListNavigationSelectionSortableChildContext = UseListNavigationSelectionChildContext;

export interface UseListNavigationSelectionSortableChildInfo<TabbableChildElement extends Element> extends
    UseListNavigationSelectionChildInfo<TabbableChildElement>,
    UseSortableChildInfo {

}
export interface UseListNavigationSelectionSortableParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSelectionSortableChildInfo<ChildElement>> extends
    OmitStrong<UseListNavigationSelectionParameters<ParentOrChildElement, ChildElement, M>, "rearrangeableChildrenReturn" | "managedChildrenReturn">,
    UseSortableChildrenParameters<M> {

}
export interface UseListNavigationSelectionSortableReturnType<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSelectionSortableChildInfo<ChildElement>> extends
    UseListNavigationSelectionReturnType<ParentOrChildElement, ChildElement>,
    UseSortableChildrenReturnType<M> {

}

export interface UseListNavigationSelectionSortableChildParameters<ChildElement extends Element, M extends UseListNavigationSelectionSortableChildInfo<ChildElement>> extends
    UseGenericChildParameters<UseListNavigationSelectionSortableChildContext, Pick<UseListNavigationSelectionSortableChildInfo<ChildElement>, UseListNavigationSelectionSortableChildInfoKeysParameters>>,
    UseListNavigationSelectionChildParameters<ChildElement, M> {

}
export interface UseListNavigationSelectionSortableChildReturnType<ChildElement extends Element, M extends UseListNavigationSelectionSortableChildInfo<ChildElement>> extends
    UseListNavigationSelectionChildReturnType<ChildElement, M> {

}

/**
 * Combines {@link useListNavigation}, {@link useSelection}, and {@link useSortableChildren}.
 * 
 * @remarks This is a separate hook because {@link useSortableChildren} imposes unique requirements to the structure of your `children`.
 * 
 * @hasChild {@link useListNavigationSelectionSortableChild}
 * 
 * @compositeParams
 */
export const useListNavigationSelectionSortable = monitored(function useListNavigationSelectionSortable<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSelectionSortableChildInfo<ChildElement>>({
    linearNavigationParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    singleSelectionParameters,
    multiSelectionParameters,
    managedChildrenReturn,
    rearrangeableChildrenParameters,
    sortableChildrenParameters,
    refElementReturn,
    paginatedChildrenParameters,
    childrenHaveFocusReturn,
    ...void3
}: UseListNavigationSelectionSortableParameters<ParentOrChildElement, ChildElement, M>): UseListNavigationSelectionSortableReturnType<ParentOrChildElement, ChildElement, M> {
    const { rearrangeableChildrenReturn, sortableChildrenReturn, ...void1 } = useSortableChildren<M>({ rearrangeableChildrenParameters, sortableChildrenParameters, managedChildrenReturn });
    const { props, context, ...restLN } = useListNavigationSelection<ParentOrChildElement, ChildElement>({ childrenHaveFocusReturn, linearNavigationParameters, rearrangeableChildrenReturn, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters });

    assertEmptyObject(void1);
    assertEmptyObject(void3);

    return {
        context,
        props,
        rearrangeableChildrenReturn,
        sortableChildrenReturn,
        ...restLN
    }
})


/**
 * @compositeParams
 */
export const useListNavigationSelectionSortableChild = monitored(function useListNavigationSelectionSortableChild<ChildElement extends Element>({
    info,
    context,
    refElementReturn,
    textContentParameters,
    singleSelectionChildParameters,
    multiSelectionChildParameters,
    ...void1
}: UseListNavigationSelectionSortableChildParameters<ChildElement, UseListNavigationSelectionSortableChildInfo<ChildElement>>): UseListNavigationSelectionSortableChildReturnType<ChildElement, UseListNavigationSelectionSortableChildInfo<ChildElement>> {
    assertEmptyObject(void1);

    return useListNavigationSelectionChild<ChildElement>({
        info,
        context,
        refElementReturn,
        textContentParameters,
        singleSelectionChildParameters,
        multiSelectionChildParameters
    });
})
