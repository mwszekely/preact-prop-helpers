import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { assertEmptyObject } from "../../util/assert.js";
import { useCallback } from "../../util/lib.js";
import { monitorCallCount } from "../../util/use-call-count.js";
import { useSortableChildren } from "../use-sortable-children.js";
import { useGridNavigationSelection, useGridNavigationSelectionCell, useGridNavigationSelectionRow } from "./use-grid-navigation-selection.js";
/**
 * Like list navigation  selection sortable etc. etc. etc.
 *
 * The combinations are getting a bit silly but I swear this is the last one.
 */
const _dummy = 0;
/**
 * Combines {@link useGridNavigation}, {@link useSelection}, and {@link useSortableChildren}.
 *
 * @remarks This is a separate hook because {@link useSortableChildren} imposes unique requirements to the structure of your `children`.
 *
 * @hasChild {@link useGridNavigationSelectionSortableRow}
 *
 * @compositeParams
 */
export function useGridNavigationSelectionSortable({ rearrangeableChildrenParameters, sortableChildrenParameters, linearNavigationParameters, managedChildrenReturn, gridNavigationParameters, paginatedChildrenParameters, refElementReturn, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, typeaheadNavigationParameters, childrenHaveFocusReturn, ...void1 }) {
    monitorCallCount(useGridNavigationSelectionSortable);
    const { rearrangeableChildrenReturn, sortableChildrenReturn } = useSortableChildren({ rearrangeableChildrenParameters, sortableChildrenParameters, managedChildrenReturn });
    const gnr = useGridNavigationSelection({
        rearrangeableChildrenReturn,
        linearNavigationParameters,
        managedChildrenReturn,
        gridNavigationParameters,
        paginatedChildrenParameters,
        refElementReturn,
        rovingTabIndexParameters,
        singleSelectionParameters,
        multiSelectionParameters,
        typeaheadNavigationParameters,
        childrenHaveFocusReturn
    });
    assertEmptyObject(void1);
    return {
        rearrangeableChildrenReturn,
        sortableChildrenReturn,
        ...gnr
    };
}
/**
 * Besides just overriding `focusSelf` for `useRovingTabIndex`, this also overrides `getSortValue` to return the sort value of the current cell.
 *
 * @compositeParams
 */
export function useGridNavigationSelectionSortableRow({ context: ctxIncoming, info: { index, untabbable, ...void2 }, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, gridNavigationSelectionSortableRowParameters: { getSortableColumnIndex: getSortableColumnIndexUnstable, ...void5 }, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
    monitorCallCount(useGridNavigationSelectionSortableRow);
    const getSortableColumnIndex = useStableCallback(getSortableColumnIndexUnstable);
    const getSortValue = useCallback(() => {
        let rows = managedChildrenReturn.getChildren();
        let columnIndex = getSortableColumnIndex() || 0;
        let cell = rows.getAt(columnIndex);
        return cell?.getSortValue();
    }, []);
    const { info: { getLocallyTabbable, getSingleSelected, getMultiSelected, setSelectedFromParent, singleSelected, setLocalSingleSelected, setLocallyTabbable, focusSelf, getMultiSelectionDisabled, ...void4 }, context: ctxOutgoing, hasCurrentFocusParameters, linearNavigationReturn, managedChildrenParameters, pressParameters, props, rovingTabIndexChildReturn, rovingTabIndexReturn, singleSelectionChildReturn, multiSelectionChildReturn, textContentReturn, typeaheadNavigationReturn, ...void3 } = useGridNavigationSelectionRow({
        context: ctxIncoming,
        info: { index, untabbable },
        linearNavigationParameters,
        managedChildrenReturn,
        refElementReturn,
        rovingTabIndexParameters,
        textContentParameters,
        typeaheadNavigationParameters,
        singleSelectionChildParameters,
        multiSelectionChildParameters
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    return {
        info: { getLocallyTabbable, getMultiSelected, setSelectedFromParent, getSingleSelected, getMultiSelectionDisabled, singleSelected, setLocallyTabbable, setLocalSingleSelected, getSortValue, focusSelf },
        context: ctxOutgoing,
        hasCurrentFocusParameters,
        linearNavigationReturn,
        managedChildrenParameters,
        pressParameters,
        props,
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        multiSelectionChildReturn,
        textContentReturn,
        typeaheadNavigationReturn
    };
}
/**
 * @compositeParams
 */
export function useGridNavigationSelectionSortableCell({ context, gridNavigationCellParameters, info: { index, untabbable, ...void2 }, refElementReturn, textContentParameters, ...void1 }) {
    monitorCallCount(useGridNavigationSelectionSortableCell);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return useGridNavigationSelectionCell({
        context,
        info: { index, untabbable },
        gridNavigationCellParameters,
        refElementReturn,
        textContentParameters,
    });
}
//# sourceMappingURL=use-grid-navigation-selection-sortable.js.map