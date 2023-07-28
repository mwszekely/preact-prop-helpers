import { assertEmptyObject } from "../../util/assert.js";
import { monitorCallCount } from "../../util/use-call-count.js";
import { useSortableChildren } from "../use-sortable-children.js";
import { useListNavigationSingleSelection, useListNavigationSingleSelectionChild } from "./use-list-navigation-single-selection.js";
/**
 * We're just gluing together the single selection list navigation and sortable children hooks,
 * since they're so commonly paired together.
 *
 * There could also be one that's just list nav + sortable, but single selection can be disregarded by setting `selectedIndex` to `null` anyway.
 */
const _dummy = 0;
/**
 * Combines {@link useListNavigation}, {@link useSingleSelection}, and {@link useSortableChildren}.
 *
 * @remarks This is a separate hook because {@link useSortableChildren} imposes unique requirements to the structure of your `children`.
 *
 * @hasChild {@link useListNavigationSingleSelectionSortableChild}
 *
 * @compositeParams
 */
export function useListNavigationSingleSelectionSortable({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, managedChildrenReturn, rearrangeableChildrenParameters, sortableChildrenParameters, refElementReturn, paginatedChildrenParameters, ...void3 }) {
    monitorCallCount(useListNavigationSingleSelectionSortable);
    const { rearrangeableChildrenReturn, sortableChildrenReturn, ...void1 } = useSortableChildren({ rearrangeableChildrenParameters, sortableChildrenParameters, managedChildrenReturn });
    const { propsParent, propsStableParentOrChild, context, ...restLN } = useListNavigationSingleSelection({ linearNavigationParameters, rearrangeableChildrenReturn, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters });
    assertEmptyObject(void1);
    assertEmptyObject(void3);
    return {
        context,
        propsParent,
        propsStableParentOrChild,
        rearrangeableChildrenReturn,
        sortableChildrenReturn,
        ...restLN
    };
}
/**
 * @compositeParams
 */
export function useListNavigationSingleSelectionSortableChild({ info, context, refElementReturn, textContentParameters, ...void1 }) {
    monitorCallCount(useListNavigationSingleSelectionSortableChild);
    assertEmptyObject(void1);
    return useListNavigationSingleSelectionChild({
        info,
        context,
        refElementReturn,
        textContentParameters,
    });
}
//# sourceMappingURL=use-list-navigation-single-selection-sortable.js.map