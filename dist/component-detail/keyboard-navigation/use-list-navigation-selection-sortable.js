import { assertEmptyObject } from "../../util/assert.js";
import { monitorCallCount } from "../../util/use-call-count.js";
import { useSortableChildren } from "../use-sortable-children.js";
import { useListNavigationSelection, useListNavigationSelectionChild } from "./use-list-navigation-selection.js";
/**
 * We're just gluing together the  selection list navigation and sortable children hooks,
 * since they're so commonly paired together.
 *
 * There could also be one that's just list nav + sortable, but  selection can be disregarded by setting `selectedIndex` to `null` anyway.
 */
const _dummy = 0;
/**
 * Combines {@link useListNavigation}, {@link useSelection}, and {@link useSortableChildren}.
 *
 * @remarks This is a separate hook because {@link useSortableChildren} imposes unique requirements to the structure of your `children`.
 *
 * @hasChild {@link useListNavigationSelectionSortableChild}
 *
 * @compositeParams
 */
export function useListNavigationSelectionSortable({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, managedChildrenReturn, rearrangeableChildrenParameters, sortableChildrenParameters, refElementReturn, paginatedChildrenParameters, childrenHaveFocusReturn, ...void3 }) {
    monitorCallCount(useListNavigationSelectionSortable);
    const { rearrangeableChildrenReturn, sortableChildrenReturn, rearrangedChildrenParameters, ...void1 } = useSortableChildren({ rearrangeableChildrenParameters, sortableChildrenParameters, managedChildrenReturn });
    const { props, context, ...restLN } = useListNavigationSelection({ childrenHaveFocusReturn, linearNavigationParameters, rearrangeableChildrenReturn, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters });
    assertEmptyObject(void1);
    assertEmptyObject(void3);
    return {
        context,
        props,
        rearrangeableChildrenReturn,
        sortableChildrenReturn,
        rearrangedChildrenParameters,
        ...restLN
    };
}
/**
 * @compositeParams
 */
export function useListNavigationSelectionSortableChild({ info, context, refElementReturn, textContentParameters, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
    monitorCallCount(useListNavigationSelectionSortableChild);
    assertEmptyObject(void1);
    return useListNavigationSelectionChild({
        info,
        context,
        refElementReturn,
        textContentParameters,
        singleSelectionChildParameters,
        multiSelectionChildParameters
    });
}
//# sourceMappingURL=use-list-navigation-selection-sortable.js.map