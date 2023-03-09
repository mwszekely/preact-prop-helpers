import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { assertEmptyObject } from "../util/assert.js";
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
export function useGridNavigationSingleSelectionRow({ managedChildParameters, singleSelectionChildParameters, singleSelectionContext, gridNavigationRowContext, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexChildContext, rovingTabIndexChildParameters, rovingTabIndexParameters, textContentParameters, typeaheadNavigationChildContext, typeaheadNavigationParameters, ..._void1 }) {
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ..._void3 }, ...ssr } = useSingleSelectionChild({ managedChildParameters, singleSelectionChildParameters, singleSelectionContext });
    const { rowAsChildOfGridReturn: { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ..._void2 }, ...rowAsChildOfGridReturn }, rowAsParentOfCellsReturn } = useGridNavigationRow({ gridNavigationRowContext, linearNavigationParameters, managedChildParameters, managedChildrenReturn, refElementReturn, rovingTabIndexChildContext, rovingTabIndexChildParameters, rovingTabIndexParameters, textContentParameters, typeaheadNavigationChildContext, typeaheadNavigationParameters });
    const onCurrentFocusedInnerChanged = useStableCallback((focused, prevFocused, e) => { ocfic1?.(focused, prevFocused, e); ocfic2?.(focused, prevFocused, e); });
    assertEmptyObject(_void1);
    assertEmptyObject(_void2);
    assertEmptyObject(_void3);
    return {
        rowAsChildOfGridReturn: {
            hasCurrentFocusParameters: { onCurrentFocusedInnerChanged },
            ...ssr,
            ...rowAsChildOfGridReturn
        },
        rowAsParentOfCellsReturn
    };
}
// EZ
export function useGridNavigationSingleSelectionCell(p) {
    return useGridNavigationCell(p);
}
//# sourceMappingURL=use-grid-navigation-single-selection.js.map