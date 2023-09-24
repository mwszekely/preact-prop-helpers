import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { useMultiSelection, useMultiSelectionChild, useMultiSelectionChildDeclarative } from "./use-multi-selection.js";
import { useSingleSelection, useSingleSelectionChild, useSingleSelectionDeclarative } from "./use-single-selection.js";
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
export function useSelection(args) {
    const { "PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange": ocfc1, context: contextSS, ...singleSelectionReturn } = useSingleSelection(args);
    const { "PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange": ocfc2, context: contextMS, props: propsStable, ...multiSelectionReturn } = useMultiSelection(args);
    return {
        ...multiSelectionReturn,
        ...singleSelectionReturn,
        "PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange": useStableCallback((...a) => { ocfc1(...a); ocfc2(...a); }),
        props: propsStable,
        context: useMemoObject({ ...contextSS, ...contextMS }),
    };
}
/**
 *
 * @compositeParams
 */
export function useSelectionChild({ context, info: { index, untabbable, ...void2 }, ...args }) {
    const { props: p1, info: { getSingleSelected, setLocalSingleSelected, singleSelected, ...void1 }, "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic1, "PropNames.PressParameters.onPressSync": opc1, ...singleSelectionChildReturn } = useSingleSelectionChild({
        context,
        info: { index, untabbable },
        ...args
    });
    const { props: p2, "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic2, "PropNames.PressParameters.onPressSync": opc2, info: { getMultiSelected, setSelectedFromParent, getMultiSelectionDisabled, ...void5 }, ...multiSelectionChildReturn } = useMultiSelectionChild({
        context,
        info: { index },
        ...args
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void5);
    return {
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": useStableCallback((...a) => { ocfic1(...a); ocfic2(...a); }),
        info: {
            getMultiSelected,
            setSelectedFromParent,
            getSingleSelected,
            setLocalSingleSelected,
            singleSelected,
            getMultiSelectionDisabled,
        },
        ...multiSelectionChildReturn,
        ...singleSelectionChildReturn,
        "PropNames.PressParameters.onPressSync": useStableCallback((...a) => { opc1(...a); opc2(...a); }),
        props: [p1, p2],
    };
}
export function useSelectionDeclarative(args) {
    return useSingleSelectionDeclarative(args);
}
export function useSelectionChildDeclarative(args) {
    return useMultiSelectionChildDeclarative(args);
}
//# sourceMappingURL=use-selection.js.map