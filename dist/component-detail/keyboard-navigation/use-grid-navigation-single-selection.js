import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { monitorCallCount } from "../../util/use-call-count.js";
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
export function useGridNavigationSingleSelection({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, typeaheadNavigationParameters, singleSelectionParameters, refElementReturn, ...void2 }) {
    monitorCallCount(useGridNavigationSingleSelection);
    const { context: { gridNavigationRowContext, rovingTabIndexContext, typeaheadNavigationContext }, linearNavigationReturn, managedChildrenParameters, propsParent, propsStableParentOrChild, rovingTabIndexReturn, typeaheadNavigationReturn, } = useGridNavigation({
        gridNavigationParameters,
        linearNavigationParameters,
        managedChildrenReturn,
        rovingTabIndexParameters,
        typeaheadNavigationParameters,
        refElementReturn
    });
    const { childrenHaveFocusParameters, context: { singleSelectionContext }, singleSelectionReturn, } = useSingleSelection({
        managedChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionParameters
    });
    assertEmptyObject(void2);
    return {
        context: useMemoObject({
            gridNavigationRowContext,
            rovingTabIndexContext,
            singleSelectionContext,
            typeaheadNavigationContext
        }),
        childrenHaveFocusParameters,
        linearNavigationReturn,
        managedChildrenParameters,
        propsParent,
        propsStableParentOrChild,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn
    };
}
export function useGridNavigationSingleSelectionRow({ info: mcp1, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, typeaheadNavigationContext }, ...void1 }) {
    monitorCallCount(useGridNavigationSingleSelectionRow);
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 }, info: mcp2, props: propsSS, singleSelectionChildReturn, ...void2 } = useSingleSelectionChild({ info: mcp1, context: { singleSelectionContext } });
    const { context, gridNavigationRowParameters, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 }, linearNavigationReturn, managedChildrenParameters, pressParameters: { excludeSpace }, props: propsGN, rovingTabIndexChildReturn, rovingTabIndexReturn, textContentReturn, typeaheadNavigationReturn, info: mcp3, ...void3 } = useGridNavigationRow({ context: { gridNavigationRowContext, rovingTabIndexContext, typeaheadNavigationContext }, linearNavigationParameters, info: mcp1, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return {
        context,
        gridNavigationRowParameters,
        linearNavigationReturn,
        info: { ...mcp2, ...mcp3 },
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
    monitorCallCount(useGridNavigationSingleSelectionCell);
    return useGridNavigationCell(p);
}
//# sourceMappingURL=use-grid-navigation-single-selection.js.map