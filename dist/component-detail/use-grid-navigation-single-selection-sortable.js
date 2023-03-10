import { monitorCallCount } from "../util/use-call-count.js";
import { useGridNavigationCell } from "./use-grid-navigation-partial.js";
import { useGridNavigationSingleSelection, useGridNavigationSingleSelectionRow } from "./use-grid-navigation-single-selection.js";
import { useSortableChildren } from "./use-sortable-children.js";
/**
 * Like list navigation single selection sortable etc. etc. etc.
 *
 * The combinations are getting a bit silly but I swear this is the last one.
 */
const _dummy = 0;
export function useGridNavigationSingleSelectionSortable({ rearrangeableChildrenParameters, sortableChildrenParameters, linearNavigationParameters, ...gridNavigationSingleSelectionParameters }) {
    monitorCallCount(useGridNavigationSingleSelectionSortable);
    const { ...scr } = useSortableChildren({ rearrangeableChildrenParameters, sortableChildrenParameters });
    const { rearrangeableChildrenReturn: { indexDemangler, indexMangler } } = scr;
    const gnr = useGridNavigationSingleSelection({
        linearNavigationParameters: { indexDemangler, indexMangler, ...linearNavigationParameters },
        ...gridNavigationSingleSelectionParameters
    });
    return { ...gnr, ...scr, };
}
export function useGridNavigationSingleSelectionSortableRow(p) {
    monitorCallCount(useGridNavigationSingleSelectionSortableRow);
    return useGridNavigationSingleSelectionRow(p);
}
// EZ
export function useGridNavigationSingleSelectionSortableCell(p) {
    monitorCallCount(useGridNavigationSingleSelectionSortableCell);
    return useGridNavigationCell(p);
}
//# sourceMappingURL=use-grid-navigation-single-selection-sortable.js.map