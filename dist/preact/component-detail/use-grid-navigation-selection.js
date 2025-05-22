import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { useStableMergedCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { useMonitoring } from "../util/use-call-count.js";
import { useGridNavigation, useGridNavigationCell, useGridNavigationRow } from "./keyboard-navigation/use-grid-navigation-partial.js";
import { useSelection, useSelectionChild } from "./selection/use-selection.js";
/**
 * List navigation gets  selection, so grid navigation does too.
 *
 * Any given row of the grid can be selected, akin to it being a  select list but with options that can be left/right arrowed to.
 *
 * Highly recommended to make the `selectionMode` *not* be `"focus"`, but it's up to you, ultimately.
 */
const _dummy = 0;
/**
 * Combines {@link useGridNavigation} and {@link useSelection}.
 *
 * @remarks The -selection behavior is optional, if you decide you need multi-selection instead within the same component.
 *
 * @hasChild {@link useGridNavigationSelectionRow}
 * @hasChild {@link useGridNavigationSelectionCell}
 *
 * @compositeParams
 */
export function useGridNavigationSelection({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, refElementReturn, paginatedChildrenParameters, processedIndexManglerReturn, childrenHaveFocusReturn, ...void2 }) {
    return useMonitoring(function useGridNavigationSelection() {
        const { context: { gridNavigationRowContext, rovingTabIndexContext, typeaheadNavigationContext }, linearNavigationReturn, managedChildrenParameters, props, rovingTabIndexReturn, typeaheadNavigationReturn, } = useGridNavigation({
            gridNavigationParameters,
            linearNavigationParameters,
            managedChildrenReturn,
            rovingTabIndexParameters: { ...rovingTabIndexParameters, initiallyTabbedIndex: singleSelectionParameters.initiallySingleSelectedIndex || 0 },
            typeaheadNavigationParameters,
            paginatedChildrenParameters,
            processedIndexManglerReturn,
            refElementReturn
        });
        const { childrenHaveFocusParameters, context: { singleSelectionContext, multiSelectionContext }, multiSelectionReturn, propsStable, singleSelectionReturn, ...void1 } = useSelection({
            managedChildrenReturn,
            rovingTabIndexReturn,
            singleSelectionParameters,
            multiSelectionParameters,
            childrenHaveFocusReturn
        });
        assertEmptyObject(void1);
        assertEmptyObject(void2);
        return {
            context: useMemoObject({
                gridNavigationRowContext,
                rovingTabIndexContext,
                singleSelectionContext,
                multiSelectionContext,
                typeaheadNavigationContext
            }),
            childrenHaveFocusParameters,
            linearNavigationReturn,
            managedChildrenParameters,
            props: useMergedProps(props, propsStable),
            rovingTabIndexReturn,
            singleSelectionReturn,
            multiSelectionReturn,
            typeaheadNavigationReturn
        };
    });
}
/**
 * @compositeParams
 */
export function useGridNavigationSelectionRow({ info: mcp1, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, typeaheadNavigationParameters, context, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
    return useMonitoring(function useGridNavigationSelectionRow() {
        const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void6 }, info: { getSingleSelected, setLocalSingleSelected, singleSelected, getMultiSelected, setSelectedFromParent, getMultiSelectionDisabled, ...void8 }, props: propsSelection, selectionChildReturn, singleSelectionChildReturn, multiSelectionChildReturn, ...void2 } = useSelectionChild({ info: mcp1, context, singleSelectionChildParameters, multiSelectionChildParameters });
        const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void7 }, info: { focusSelf, getLocallyTabbable, setLocallyTabbable, ...void9 }, props: propsGridNavigation, linearNavigationReturn, managedChildrenParameters, pressParameters: { excludeSpace, ...void5 }, rovingTabIndexChildReturn, rovingTabIndexReturn, textContentParameters, typeaheadNavigationReturn, context: contextGridNavigation, ...void3 } = useGridNavigationRow({ context, linearNavigationParameters, info: mcp1, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, typeaheadNavigationParameters });
        assertEmptyObject(void1);
        assertEmptyObject(void2);
        assertEmptyObject(void3);
        assertEmptyObject(void5);
        assertEmptyObject(void6);
        assertEmptyObject(void7);
        assertEmptyObject(void8);
        assertEmptyObject(void9);
        return {
            context: contextGridNavigation,
            linearNavigationReturn,
            info: {
                getLocallyTabbable,
                getSingleSelected,
                singleSelected,
                setLocallyTabbable,
                setLocalSingleSelected,
                focusSelf,
                getMultiSelected,
                setSelectedFromParent,
                getMultiSelectionDisabled
            },
            managedChildrenParameters,
            pressParameters: { excludeSpace },
            selectionChildReturn,
            hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: useStableMergedCallback(ocfic1, ocfic2) },
            props: useMergedProps(propsGridNavigation, propsSelection),
            rovingTabIndexChildReturn,
            rovingTabIndexReturn,
            singleSelectionChildReturn,
            multiSelectionChildReturn,
            textContentParameters,
            typeaheadNavigationReturn
        };
    });
}
/**
 * @compositeParams
 */
export function useGridNavigationSelectionCell(p) {
    return useMonitoring(function useGridNavigationSelectionCell() {
        return useGridNavigationCell(p);
    });
}
//# sourceMappingURL=use-grid-navigation-selection.js.map