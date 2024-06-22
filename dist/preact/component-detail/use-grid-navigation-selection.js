import { $pressParameters, $onPressSync, $excludeSpace } from "../component-use/use-press.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { $refElementReturn } from "../dom-helpers/use-ref-element.js";
import { $textContentParameters } from "../dom-helpers/use-text-content.js";
import { $childrenHaveFocusParameters, $childrenHaveFocusReturn } from "../observers/use-children-have-focus.js";
import { $hasCurrentFocusParameters, $onCurrentFocusedInnerChanged } from "../observers/use-has-current-focus.js";
import { $managedChildrenParameters, $managedChildrenReturn } from "../preact-extensions/use-managed-children.js";
import { useStableMergedCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { monitored } from "../util/use-call-count.js";
import { $gridNavigationParameters, $gridNavigationRowContext, useGridNavigation, useGridNavigationCell, useGridNavigationRow } from "./keyboard-navigation/use-grid-navigation-partial.js";
import { $linearNavigationParameters, $linearNavigationReturn } from "./keyboard-navigation/use-linear-navigation.js";
import { $focusSelfChild, $getLocallyTabbable, $setLocallyTabbable, $initiallyTabbedIndex, $rovingTabIndexChildReturn, $rovingTabIndexContext, $rovingTabIndexParameters, $rovingTabIndexReturn } from "./keyboard-navigation/use-roving-tabindex.js";
import { $typeaheadNavigationContext, $typeaheadNavigationParameters, $typeaheadNavigationReturn } from "./keyboard-navigation/use-typeahead-navigation.js";
import { $paginatedChildrenParameters } from "./processed-children/use-paginated-children.js";
import { $rearrangeableChildrenReturn } from "./processed-children/use-rearrangeable-children.js";
import { $getMultiSelected, $getMultiSelectionDisabled, $setSelectedFromParent, $multiSelectionChildParameters, $multiSelectionChildReturn, $multiSelectionContext, $multiSelectionParameters, $multiSelectionReturn } from "./selection/use-multi-selection.js";
import { useSelection, useSelectionChild } from "./selection/use-selection.js";
import { $getSingleSelected, $setLocalSingleSelected, $singleSelected, $initiallySingleSelectedIndex, $singleSelectionChildParameters, $singleSelectionChildReturn, $singleSelectionContext, $singleSelectionParameters, $singleSelectionReturn } from "./selection/use-single-selection.js";
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
export const useGridNavigationSelection = monitored(function useGridNavigationSelection({ [$gridNavigationParameters]: gridNavigationParameters, [$linearNavigationParameters]: linearNavigationParameters, [$rovingTabIndexParameters]: rovingTabIndexParameters, [$managedChildrenReturn]: managedChildrenReturn, [$typeaheadNavigationParameters]: typeaheadNavigationParameters, [$singleSelectionParameters]: singleSelectionParameters, [$multiSelectionParameters]: multiSelectionParameters, [$refElementReturn]: refElementReturn, [$paginatedChildrenParameters]: paginatedChildrenParameters, [$rearrangeableChildrenReturn]: rearrangeableChildrenReturn, [$childrenHaveFocusReturn]: childrenHaveFocusReturn, ...void2 }) {
    const { context: { [$gridNavigationRowContext]: gridNavigationRowContext, [$rovingTabIndexContext]: rovingTabIndexContext, [$typeaheadNavigationContext]: typeaheadNavigationContext }, [$linearNavigationReturn]: linearNavigationReturn, [$managedChildrenParameters]: managedChildrenParameters, props, [$rovingTabIndexReturn]: rovingTabIndexReturn, [$typeaheadNavigationReturn]: typeaheadNavigationReturn, } = useGridNavigation({
        [$gridNavigationParameters]: gridNavigationParameters,
        [$linearNavigationParameters]: linearNavigationParameters,
        [$managedChildrenReturn]: managedChildrenReturn,
        [$rovingTabIndexParameters]: { ...rovingTabIndexParameters, [$initiallyTabbedIndex]: singleSelectionParameters[$initiallySingleSelectedIndex] || 0 },
        [$typeaheadNavigationParameters]: typeaheadNavigationParameters,
        [$paginatedChildrenParameters]: paginatedChildrenParameters,
        [$rearrangeableChildrenReturn]: rearrangeableChildrenReturn,
        [$refElementReturn]: refElementReturn
    });
    const { [$childrenHaveFocusParameters]: childrenHaveFocusParameters, context: { [$singleSelectionContext]: singleSelectionContext, [$multiSelectionContext]: multiSelectionContext }, [$multiSelectionReturn]: multiSelectionReturn, propsStable, [$singleSelectionReturn]: singleSelectionReturn, ...void1 } = useSelection({
        [$managedChildrenReturn]: managedChildrenReturn,
        [$rovingTabIndexReturn]: rovingTabIndexReturn,
        [$singleSelectionParameters]: singleSelectionParameters,
        [$multiSelectionParameters]: multiSelectionParameters,
        [$childrenHaveFocusReturn]: childrenHaveFocusReturn
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return {
        context: useMemoObject({
            [$gridNavigationRowContext]: gridNavigationRowContext,
            [$rovingTabIndexContext]: rovingTabIndexContext,
            [$singleSelectionContext]: singleSelectionContext,
            [$multiSelectionContext]: multiSelectionContext,
            [$typeaheadNavigationContext]: typeaheadNavigationContext
        }),
        [$childrenHaveFocusParameters]: childrenHaveFocusParameters,
        [$linearNavigationReturn]: linearNavigationReturn,
        [$managedChildrenParameters]: managedChildrenParameters,
        props: useMergedProps(props, propsStable),
        [$rovingTabIndexReturn]: rovingTabIndexReturn,
        [$singleSelectionReturn]: singleSelectionReturn,
        [$multiSelectionReturn]: multiSelectionReturn,
        [$typeaheadNavigationReturn]: typeaheadNavigationReturn
    };
});
/**
 * @compositeParams
 */
export const useGridNavigationSelectionRow = monitored(function useGridNavigationSelectionRow({ info: mcp1, [$linearNavigationParameters]: linearNavigationParameters, [$managedChildrenReturn]: managedChildrenReturn, [$refElementReturn]: refElementReturn, [$rovingTabIndexParameters]: rovingTabIndexParameters, [$typeaheadNavigationParameters]: typeaheadNavigationParameters, context, [$singleSelectionChildParameters]: singleSelectionChildParameters, [$multiSelectionChildParameters]: multiSelectionChildParameters, ...void1 }) {
    const { [$hasCurrentFocusParameters]: { [$onCurrentFocusedInnerChanged]: ocfic1, ...void6 }, info: { [$getSingleSelected]: getSingleSelected, [$setLocalSingleSelected]: setLocalSingleSelected, [$singleSelected]: singleSelected, [$getMultiSelected]: getMultiSelected, [$setSelectedFromParent]: setSelectedFromParent, [$getMultiSelectionDisabled]: getMultiSelectionDisabled, ...void8 }, props: propsSelection, [$singleSelectionChildReturn]: singleSelectionChildReturn, [$multiSelectionChildReturn]: multiSelectionChildReturn, [$pressParameters]: { [$onPressSync]: onPressSync, ...void4 }, ...void2 } = useSelectionChild({ info: mcp1, context, [$singleSelectionChildParameters]: singleSelectionChildParameters, [$multiSelectionChildParameters]: multiSelectionChildParameters });
    const { [$hasCurrentFocusParameters]: { [$onCurrentFocusedInnerChanged]: ocfic2, ...void7 }, info: { [$focusSelfChild]: focusSelf, [$getLocallyTabbable]: getLocallyTabbable, [$setLocallyTabbable]: setLocallyTabbable, ...void9 }, props: propsGridNavigation, [$linearNavigationReturn]: linearNavigationReturn, [$managedChildrenParameters]: managedChildrenParameters, [$pressParameters]: { [$excludeSpace]: excludeSpace, ...void5 }, [$rovingTabIndexChildReturn]: rovingTabIndexChildReturn, [$rovingTabIndexReturn]: rovingTabIndexReturn, [$textContentParameters]: textContentParameters, [$typeaheadNavigationReturn]: typeaheadNavigationReturn, context: contextGridNavigation, ...void3 } = useGridNavigationRow({ context, [$linearNavigationParameters]: linearNavigationParameters, info: mcp1, [$managedChildrenReturn]: managedChildrenReturn, [$refElementReturn]: refElementReturn, [$rovingTabIndexParameters]: rovingTabIndexParameters, [$typeaheadNavigationParameters]: typeaheadNavigationParameters });
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
        context: contextGridNavigation,
        props: useMergedProps(propsGridNavigation, propsSelection),
        info: {
            [$getLocallyTabbable]: getLocallyTabbable,
            [$getSingleSelected]: getSingleSelected,
            [$singleSelected]: singleSelected,
            [$setLocallyTabbable]: setLocallyTabbable,
            [$setLocalSingleSelected]: setLocalSingleSelected,
            [$focusSelfChild]: focusSelf,
            [$getMultiSelected]: getMultiSelected,
            [$setSelectedFromParent]: setSelectedFromParent,
            [$getMultiSelectionDisabled]: getMultiSelectionDisabled
        },
        [$linearNavigationReturn]: linearNavigationReturn,
        [$managedChildrenParameters]: managedChildrenParameters,
        [$pressParameters]: { [$onPressSync]: onPressSync, [$excludeSpace]: excludeSpace },
        [$hasCurrentFocusParameters]: { [$onCurrentFocusedInnerChanged]: useStableMergedCallback(ocfic1, ocfic2) },
        [$rovingTabIndexChildReturn]: rovingTabIndexChildReturn,
        [$rovingTabIndexReturn]: rovingTabIndexReturn,
        [$singleSelectionChildReturn]: singleSelectionChildReturn,
        [$multiSelectionChildReturn]: multiSelectionChildReturn,
        [$textContentParameters]: textContentParameters,
        [$typeaheadNavigationReturn]: typeaheadNavigationReturn
    };
});
/**
 * @compositeParams
 */
export const useGridNavigationSelectionCell = monitored(function useGridNavigationSelectionCell(p) {
    return useGridNavigationCell(p);
});
//# sourceMappingURL=use-grid-navigation-selection.js.map