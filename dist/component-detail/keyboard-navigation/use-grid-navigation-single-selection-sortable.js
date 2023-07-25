import { assertEmptyObject } from "../../util/assert.js";
import { monitorCallCount } from "../../util/use-call-count.js";
import { useGridNavigationSingleSelection, useGridNavigationSingleSelectionCell, useGridNavigationSingleSelectionRow } from "./use-grid-navigation-single-selection.js";
import { useSortableChildren } from "./use-sortable-children.js";
/**
 * Like list navigation single selection sortable etc. etc. etc.
 *
 * The combinations are getting a bit silly but I swear this is the last one.
 */
const _dummy = 0;
export function useGridNavigationSingleSelectionSortable({ rearrangeableChildrenParameters, sortableChildrenParameters, linearNavigationParameters, managedChildrenReturn, gridNavigationParameters, paginatedChildrenParameters, refElementReturn, rovingTabIndexParameters, singleSelectionParameters, typeaheadNavigationParameters, ...void1 }) {
    monitorCallCount(useGridNavigationSingleSelectionSortable);
    const { ...scr } = useSortableChildren({ rearrangeableChildrenParameters, sortableChildrenParameters, managedChildrenReturn });
    const { rearrangeableChildrenReturn: { indexDemangler, indexMangler } } = scr;
    const gnr = useGridNavigationSingleSelection({
        linearNavigationParameters: { indexDemangler, indexMangler, ...linearNavigationParameters },
        managedChildrenReturn,
        gridNavigationParameters,
        paginatedChildrenParameters,
        refElementReturn,
        rovingTabIndexParameters,
        singleSelectionParameters,
        typeaheadNavigationParameters
    });
    assertEmptyObject(void1);
    return { ...gnr, ...scr, };
}
export function useGridNavigationSingleSelectionSortableRow({ context, info: { index, unselectable, untabbable, ...void2 }, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, ...void1 }) {
    monitorCallCount(useGridNavigationSingleSelectionSortableRow);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return useGridNavigationSingleSelectionRow({
        context,
        info: { index, unselectable, untabbable },
        linearNavigationParameters,
        managedChildrenReturn,
        refElementReturn,
        rovingTabIndexParameters,
        textContentParameters,
        typeaheadNavigationParameters
    });
}
// EZ
export function useGridNavigationSingleSelectionSortableCell({ context, gridNavigationCellParameters, info: { index, untabbable, ...void2 }, refElementReturn, textContentParameters, ...void1 }) {
    monitorCallCount(useGridNavigationSingleSelectionSortableCell);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return useGridNavigationSingleSelectionCell({
        context,
        info: { index, untabbable },
        gridNavigationCellParameters,
        refElementReturn,
        textContentParameters,
    });
}
//# sourceMappingURL=use-grid-navigation-single-selection-sortable.js.map