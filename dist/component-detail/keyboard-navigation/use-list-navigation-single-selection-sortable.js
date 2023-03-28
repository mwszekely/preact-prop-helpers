import { assertEmptyObject } from "../../util/assert.js";
import { monitorCallCount } from "../../util/use-call-count.js";
import { useListNavigationSingleSelection, useListNavigationSingleSelectionChild } from "./use-list-navigation-single-selection.js";
import { useSortableChildren } from "./use-sortable-children.js";
/**
 * We're just gluing together the single selection list navigation and sortable children hooks,
 * since they're so commonly paired together.
 *
 * There could also be one that's just list nav + sortable, but single selection can be disregarded by setting `selectedIndex` to `null` anyway.
 */
const _dummy = 0;
export function useListNavigationSingleSelectionSortable({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, managedChildrenReturn, rearrangeableChildrenParameters, sortableChildrenParameters, ...void3 }) {
    monitorCallCount(useListNavigationSingleSelectionSortable);
    const { rearrangeableChildrenReturn, sortableChildrenReturn, ...void1 } = useSortableChildren({ rearrangeableChildrenParameters, sortableChildrenParameters, managedChildrenReturn });
    const { indexDemangler, indexMangler } = rearrangeableChildrenReturn;
    const { propsStable, context, ...restLN } = useListNavigationSingleSelection({ linearNavigationParameters: { ...linearNavigationParameters, indexDemangler, indexMangler }, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, managedChildrenReturn });
    assertEmptyObject(void1);
    assertEmptyObject(void3);
    return {
        context,
        propsStable,
        rearrangeableChildrenReturn,
        sortableChildrenReturn,
        ...restLN
    };
}
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