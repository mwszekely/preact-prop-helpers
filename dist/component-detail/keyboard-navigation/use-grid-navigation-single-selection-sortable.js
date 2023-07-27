import { assertEmptyObject } from "../../util/assert.js";
import { useCallback } from "../../util/lib.js";
import { monitorCallCount } from "../../util/use-call-count.js";
import { useGridNavigationSingleSelection, useGridNavigationSingleSelectionCell, useGridNavigationSingleSelectionRow } from "./use-grid-navigation-single-selection.js";
import { useSortableChildren } from "./use-sortable-children.js";
/**
 * Like list navigation single selection sortable etc. etc. etc.
 *
 * The combinations are getting a bit silly but I swear this is the last one.
 */
const _dummy = 0;
/**
 * Combines {@link useGridNavigation}, {@link useSingleSelection}, and {@link useSortableChildren}.
 *
 * @remarks This is a separate hook because {@link useSortableChildren} imposes unique requirements to the structure of your `children`.
 *
 * @hasChild {@link useGridNavigationSingleSelectionSortableRow}
 *
 * @compositeParams
 */
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
/**
 * Besides just overriding `focusSelf` for `useRovingTabIndex`, this also overrides `getSortValue` to return the sort value of the current cell.
 *
 * @compositeParams
 */
export function useGridNavigationSingleSelectionSortableRow({ context: ctxIncoming, info: { index, unselectable, untabbable, ...void2 }, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, ...void1 }) {
    monitorCallCount(useGridNavigationSingleSelectionSortableRow);
    const getSortValue = useCallback(() => {
        let rows = managedChildrenReturn.getChildren();
        let columnIndex = ctxIncoming.gridNavigationRowContext.getTabbableColumn() || 0;
        let cell = rows.getAt(columnIndex);
        return cell?.getSortValue();
    }, []);
    const { info: { getLocallyTabbable, getSelected, selected, setLocalSelected, setLocallyTabbable, focusSelf, ...void4 }, context: ctxOutgoing, hasCurrentFocusParameters, linearNavigationReturn, managedChildrenParameters, pressParameters, props, rovingTabIndexChildReturn, rovingTabIndexReturn, singleSelectionChildReturn, textContentReturn, typeaheadNavigationReturn, ...void3 } = useGridNavigationSingleSelectionRow({
        context: ctxIncoming,
        info: { index, unselectable, untabbable },
        linearNavigationParameters,
        managedChildrenReturn,
        refElementReturn,
        rovingTabIndexParameters,
        textContentParameters,
        typeaheadNavigationParameters
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    return {
        info: { getLocallyTabbable, getSelected, selected, setLocallyTabbable, setLocalSelected, getSortValue, focusSelf },
        context: ctxOutgoing,
        hasCurrentFocusParameters,
        linearNavigationReturn,
        managedChildrenParameters,
        pressParameters,
        props,
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        textContentReturn,
        typeaheadNavigationReturn
    };
}
/**
 * @compositeParams
 */
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