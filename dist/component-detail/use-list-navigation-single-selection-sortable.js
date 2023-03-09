import { assertEmptyObject } from "../util/assert.js";
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
    const { rearrangeableChildrenReturn, sortableChildrenReturn, ...void1 } = useSortableChildren({ rearrangeableChildrenParameters, sortableChildrenParameters });
    const { indexDemangler, indexMangler } = rearrangeableChildrenReturn;
    const { propsStable, childrenHaveFocusParameters, context, linearNavigationReturn, managedChildrenParameters, rovingTabIndexReturn, singleSelectionReturn, typeaheadNavigationReturn, ...void2 } = useListNavigationSingleSelection({ linearNavigationParameters: { ...linearNavigationParameters, indexDemangler, indexMangler }, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, managedChildrenReturn });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return {
        context,
        propsStable,
        childrenHaveFocusParameters,
        linearNavigationReturn,
        managedChildrenParameters,
        rearrangeableChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        sortableChildrenReturn,
        typeaheadNavigationReturn
    };
}
export function useListNavigationSingleSelectionSortableChild({ managedChildParameters: { index, ..._void5 }, rovingTabIndexChildParameters, singleSelectionChildParameters, context, refElementReturn, textContentParameters, ..._void1 }) {
    const lnsscr = useListNavigationSingleSelectionChild({
        managedChildParameters: { index },
        rovingTabIndexChildParameters,
        singleSelectionChildParameters,
        context,
        refElementReturn,
        textContentParameters
    });
    assertEmptyObject(_void1);
    assertEmptyObject(_void5);
    return { ...lnsscr };
}
//# sourceMappingURL=use-list-navigation-single-selection-sortable.js.map