import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { monitorCallCount } from "../../util/use-call-count.js";
import { useSingleSelection, useSingleSelectionChild } from "../use-single-selection.js";
import { useGridNavigation, useGridNavigationCell, useGridNavigationRow } from "./use-grid-navigation-partial.js";
/**
 * List navigation gets single selection, so grid navigation does too.
 *
 * Any given row of the grid can be selected, akin to it being a single select list but with options that can be left/right arrowed to.
 *
 * Highly recommended to make the `selectionMode` *not* be `"focus"`, but it's up to you, ultimately.
 */
const _dummy = 0;
/**
 * Combines {@link useGridNavigation} and {@link useSingleSelection}.
 *
 * @remarks The single-selection behavior is optional, if you decide you need multi-selection instead within the same component.
 *
 * @hasChild {@link useGridNavigationSingleSelectionRow}
 * @hasChild {@link useGridNavigationSingleSelectionCell}
 *
 * @compositeParams
 */
export function useGridNavigationSingleSelection({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, typeaheadNavigationParameters, singleSelectionParameters, refElementReturn, paginatedChildrenParameters, rearrangeableChildrenReturn, ...void2 }) {
    monitorCallCount(useGridNavigationSingleSelection);
    const { context: { gridNavigationRowContext, rovingTabIndexContext, typeaheadNavigationContext }, linearNavigationReturn, managedChildrenParameters, propsParent, propsStableParentOrChild, rovingTabIndexReturn, typeaheadNavigationReturn, } = useGridNavigation({
        gridNavigationParameters,
        linearNavigationParameters,
        managedChildrenReturn,
        rovingTabIndexParameters,
        typeaheadNavigationParameters,
        paginatedChildrenParameters,
        rearrangeableChildrenReturn,
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
/**
 * @compositeParams
 */
export function useGridNavigationSingleSelectionRow({ info: mcp1, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, context, ...void1 }) {
    monitorCallCount(useGridNavigationSingleSelectionRow);
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void6 }, info: { getSelected, selected, setLocalSelected, ...void8 }, props: propsSingleSelection, singleSelectionChildReturn, pressParameters: { onPressSync, ...void4 }, ...void2 } = useSingleSelectionChild({ info: mcp1, context });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void7 }, info: { focusSelf, getLocallyTabbable, setLocallyTabbable, ...void9 }, props: propsGridNavigation, linearNavigationReturn, managedChildrenParameters, pressParameters: { excludeSpace, ...void5 }, rovingTabIndexChildReturn, rovingTabIndexReturn, textContentReturn, typeaheadNavigationReturn, context: contextGridNavigation, ...void3 } = useGridNavigationRow({ context, linearNavigationParameters, info: mcp1, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    assertEmptyObject(void7);
    assertEmptyObject(void8);
    assertEmptyObject(void9);
    return {
        context: { ...contextGridNavigation, singleSelectionContext: context.singleSelectionContext },
        linearNavigationReturn,
        info: {
            getLocallyTabbable,
            getSelected,
            selected,
            setLocallyTabbable,
            setLocalSelected,
            focusSelf
        },
        managedChildrenParameters,
        pressParameters: { onPressSync, excludeSpace },
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: useStableCallback((hasFocus, hadFocus) => { ocfic1?.(hasFocus, hadFocus); ocfic2?.(hasFocus, hadFocus); }) },
        props: useMergedProps(propsGridNavigation, propsSingleSelection),
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
export function useGridNavigationSingleSelectionCell(p) {
    monitorCallCount(useGridNavigationSingleSelectionCell);
    return useGridNavigationCell(p);
}
//# sourceMappingURL=use-grid-navigation-single-selection.js.map