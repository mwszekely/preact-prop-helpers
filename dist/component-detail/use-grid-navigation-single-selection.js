import { assertEmptyObject } from "../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useGridNavigation, useGridNavigationCell, useGridNavigationRow } from "./use-grid-navigation-partial.js";
import { useSingleSelection, useSingleSelectionChild } from "./use-single-selection.js";
/**
 * List navigation gets single selection, so grid navigation does too.
 *
 * Any given row of the grid can be selected, akin to it being a single select list but with options that can be left/right arrowed to.
 *
 * Highly recommended to make the `selectionMode` *not* be `"focus"`, but it's up to you, ultimately.
 */
const _dummy = 0;
export function useGridNavigationSingleSelection({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, typeaheadNavigationParameters, singleSelectionParameters, ..._void2 }) {
    const gnr = useGridNavigation({
        gridNavigationParameters,
        linearNavigationParameters,
        managedChildrenReturn,
        rovingTabIndexParameters,
        typeaheadNavigationParameters
    });
    const { rovingTabIndexReturn } = gnr;
    const ssr = useSingleSelection({
        managedChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionParameters
    });
    assertEmptyObject(_void2);
    return {
        ...gnr,
        ...ssr,
    };
}
export function useGridNavigationSingleSelectionRow({ rowAsChildOfGridParameters, rowAsParentOfCellsParameters, ..._void1 }) {
    const { managedChildParameters, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ..._void3 }, singleSelectionChildReturn } = useSingleSelectionChild(rowAsChildOfGridParameters);
    const { rowAsChildOfGridReturn: { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ..._void2 }, gridNavigationRowParameters, rovingTabIndexChildReturn, textContentReturn, pressParameters, ...void4 }, rowAsParentOfCellsReturn } = useGridNavigationRow({ rowAsChildOfGridParameters, rowAsParentOfCellsParameters });
    const onCurrentFocusedInnerChanged = useStableCallback((focused, prevFocused, e) => { ocfic1?.(focused, prevFocused, e); ocfic2?.(focused, prevFocused, e); });
    assertEmptyObject(_void1);
    assertEmptyObject(_void2);
    assertEmptyObject(_void3);
    assertEmptyObject(void4);
    return {
        rowAsChildOfGridReturn: {
            pressParameters,
            textContentReturn,
            managedChildParameters,
            hasCurrentFocusParameters: { onCurrentFocusedInnerChanged },
            gridNavigationRowParameters,
            rovingTabIndexChildReturn,
            singleSelectionChildReturn
        },
        rowAsParentOfCellsReturn
    };
}
// EZ
export function useGridNavigationSingleSelectionCell(p) {
    return useGridNavigationCell(p);
}
//# sourceMappingURL=use-grid-navigation-single-selection.js.map