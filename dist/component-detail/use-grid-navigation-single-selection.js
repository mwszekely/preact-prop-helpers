import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useStableObject } from "../preact-extensions/use-stable-getter.js";
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
    const { context: { gridNavigationRowContext, rovingTabIndexContext, typeaheadNavigationContext }, linearNavigationReturn, managedChildrenParameters, propsStable, rovingTabIndexReturn, typeaheadNavigationReturn, } = useGridNavigation({
        gridNavigationParameters,
        linearNavigationParameters,
        managedChildrenReturn,
        rovingTabIndexParameters,
        typeaheadNavigationParameters
    });
    const { childrenHaveFocusParameters, context: { singleSelectionContext }, singleSelectionReturn } = useSingleSelection({
        managedChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionParameters
    });
    assertEmptyObject(_void2);
    return {
        context: useStableObject({
            gridNavigationRowContext,
            rovingTabIndexContext,
            singleSelectionContext,
            typeaheadNavigationContext
        }),
        childrenHaveFocusParameters,
        linearNavigationReturn,
        managedChildrenParameters,
        propsStable,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn
    };
}
export function useGridNavigationSingleSelectionRow({ managedChildParameters: mcp1, singleSelectionChildParameters, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexChildParameters, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, typeaheadNavigationContext }, ..._void1 }) {
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 }, managedChildParameters: mcp2, props: propsSS, singleSelectionChildReturn } = useSingleSelectionChild({ managedChildParameters: mcp1, singleSelectionChildParameters, context: { singleSelectionContext } });
    const { context, gridNavigationRowParameters, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 }, linearNavigationReturn, managedChildrenParameters, pressParameters: { excludeSpace }, props: propsGN, rovingTabIndexChildReturn, rovingTabIndexReturn, textContentReturn, typeaheadNavigationReturn } = useGridNavigationRow({ context: { gridNavigationRowContext, rovingTabIndexContext, typeaheadNavigationContext }, linearNavigationParameters, managedChildParameters: mcp1, managedChildrenReturn, refElementReturn, rovingTabIndexChildParameters, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters });
    assertEmptyObject(_void1);
    return {
        context,
        gridNavigationRowParameters,
        linearNavigationReturn,
        managedChildParameters: mcp2,
        managedChildrenParameters,
        pressParameters: { excludeSpace },
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: useStableCallback((hasFocus, hadFocus) => { ocfic1?.(hasFocus, hadFocus); ocfic2?.(hasFocus, hadFocus); }) },
        props: useMergedProps(propsGN, propsSS),
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        textContentReturn,
        typeaheadNavigationReturn
    };
}
// EZ
export function useGridNavigationSingleSelectionCell(p) {
    return useGridNavigationCell(p);
}
//# sourceMappingURL=use-grid-navigation-single-selection.js.map