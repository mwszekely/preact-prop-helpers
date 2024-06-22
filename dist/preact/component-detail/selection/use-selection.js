import { $pressParameters, $onPressSync } from "../../component-use/use-press.js";
import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { $onCompositeFocusChange, $childrenHaveFocusParameters, $childrenHaveFocusReturn } from "../../observers/use-children-have-focus.js";
import { $hasCurrentFocusParameters, $onCurrentFocusedInnerChanged } from "../../observers/use-has-current-focus.js";
import { $index, $managedChildrenReturn } from "../../preact-extensions/use-managed-children.js";
import { useStableMergedCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { $untabbable, $rovingTabIndexReturn } from "../keyboard-navigation/use-roving-tabindex.js";
import { $getMultiSelected, $getMultiSelectionDisabled, $setSelectedFromParent, $multiSelectionChildParameters, $multiSelectionChildReturn, $multiSelectionParameters, $multiSelectionReturn, useMultiSelection, useMultiSelectionChild, useMultiSelectionChildDeclarative } from "./use-multi-selection.js";
import { $getSingleSelected, $setLocalSingleSelected, $singleSelected, $singleSelectionChildParameters, $singleSelectionChildReturn, $singleSelectionParameters, $singleSelectionReturn, useSingleSelection, useSingleSelectionChild, useSingleSelectionDeclarative } from "./use-single-selection.js";
/**
 * Allows the children of this component to be selected, either with a `singleSelectedIndex` prop on the parent, or via each child's individual `multiSelected` prop.
 *
 * @remarks Single-selection and multi-selection are not mutually exclusive, though the cases where you would want both are uncommon.
 *
 * Most of the time, you'll want to pick and choose one mode to work with:
 *
 * ```md-literal
 * * Single-selection is controlled by the parent -- it receives a `singleSelectedIndex` parameter that represents the currently selected child and handles all the logic related to coordinating the deselection of the old child.
 * * Multi-selection is controlled by each individual child -- they have a `multiSelected` parameter that can be optionally reported back to the parent (so it can show the % of all children selected, or similar)
 * ```
 *
 * @see {@link useSingleSelection}
 * @see {@link useMultiSelection}
 *
 * @compositeParams
 *
 * @hasChild {@link useSelectionChild}
 */
export function useSelection({ [$managedChildrenReturn]: managedChildrenReturn, [$multiSelectionParameters]: multiSelectionParameters, [$childrenHaveFocusReturn]: childrenHaveFocusReturn, [$rovingTabIndexReturn]: rovingTabIndexReturn, [$singleSelectionParameters]: singleSelectionParameters }) {
    const { [$childrenHaveFocusParameters]: { [$onCompositeFocusChange]: ocfc1, ...void3 }, context: contextSS, [$singleSelectionReturn]: singleSelectionReturn, ...void1 } = useSingleSelection({ [$managedChildrenReturn]: managedChildrenReturn, [$rovingTabIndexReturn]: rovingTabIndexReturn, [$singleSelectionParameters]: singleSelectionParameters });
    const { [$childrenHaveFocusParameters]: { [$onCompositeFocusChange]: ocfc2, ...void4 }, context: contextMS, [$multiSelectionReturn]: multiSelectionReturn, propsStable, ...void2 } = useMultiSelection({ [$managedChildrenReturn]: managedChildrenReturn, [$multiSelectionParameters]: multiSelectionParameters, [$childrenHaveFocusReturn]: childrenHaveFocusReturn });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    return {
        propsStable,
        [$childrenHaveFocusParameters]: { [$onCompositeFocusChange]: useStableMergedCallback(ocfc1, ocfc2) },
        context: useMemoObject({ ...contextSS, ...contextMS }),
        [$multiSelectionReturn]: multiSelectionReturn,
        [$singleSelectionReturn]: singleSelectionReturn
    };
}
/**
 *
 * @compositeParams
 */
export function useSelectionChild({ context, info: { [$index]: index, [$untabbable]: untabbable, ...void2 }, [$singleSelectionChildParameters]: singleSelectionChildParameters, [$multiSelectionChildParameters]: multiSelectionChildParameters, ...void3 }) {
    const { props: p1, [$hasCurrentFocusParameters]: { [$onCurrentFocusedInnerChanged]: ocfic1 }, [$pressParameters]: { [$onPressSync]: opc1 }, info: { [$getSingleSelected]: getSingleSelected, [$setLocalSingleSelected]: setLocalSingleSelected, [$singleSelected]: singleSelected, ...void1 }, [$singleSelectionChildReturn]: singleSelectionChildReturn, } = useSingleSelectionChild({ context, info: { [$index]: index, [$untabbable]: untabbable }, [$singleSelectionChildParameters]: singleSelectionChildParameters });
    const { props: p2, [$hasCurrentFocusParameters]: { [$onCurrentFocusedInnerChanged]: ocfic2 }, [$pressParameters]: { [$onPressSync]: opc2 }, [$multiSelectionChildReturn]: multiSelectionChildReturn, info: { [$getMultiSelected]: getMultiSelected, [$setSelectedFromParent]: setSelectedFromParent, [$getMultiSelectionDisabled]: getMultiSelectionDisabled, ...void5 }, ...void4 } = useMultiSelectionChild({ context, info: { [$index]: index }, [$multiSelectionChildParameters]: multiSelectionChildParameters });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    return {
        [$hasCurrentFocusParameters]: { [$onCurrentFocusedInnerChanged]: useStableMergedCallback(ocfic1, ocfic2) },
        info: {
            [$getMultiSelected]: getMultiSelected,
            [$setSelectedFromParent]: setSelectedFromParent,
            [$getSingleSelected]: getSingleSelected,
            [$setLocalSingleSelected]: setLocalSingleSelected,
            [$singleSelected]: singleSelected,
            [$getMultiSelectionDisabled]: getMultiSelectionDisabled,
        },
        [$multiSelectionChildReturn]: multiSelectionChildReturn,
        [$pressParameters]: { [$onPressSync]: useStableMergedCallback(opc1, opc2) },
        props: useMergedProps(p1, p2),
        [$singleSelectionChildReturn]: singleSelectionChildReturn
    };
}
export function useSelectionDeclarative(args) {
    return useSingleSelectionDeclarative(args);
}
export function useSelectionChildDeclarative(args) {
    return useMultiSelectionChildDeclarative(args);
}
//# sourceMappingURL=use-selection.js.map