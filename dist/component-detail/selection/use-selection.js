import { PropNames_PressParameters_onPressSync } from "../../component-use/use-press.js";
import { PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange, PropNames_ChildrenHaveFocusReturn_getAnyFocused } from "../../observers/use-children-have-focus.js";
import { PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged } from "../../observers/use-has-current-focus.js";
import { PropNames_ManagedChildrenReturn_getChildren } from "../../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { PropNames_RovingTabIndexReturn_setTabbableIndex } from "../keyboard-navigation/use-roving-tabindex.js";
import { PropNames_MultiSelectionChildParameters_initiallyMultiSelected, PropNames_MultiSelectionChildParameters_multiSelectionDisabled, PropNames_MultiSelectionChildParameters_onMultiSelectChange, PropNames_MultiSelectionParameters_multiSelectionAriaPropName, PropNames_MultiSelectionParameters_multiSelectionMode, PropNames_MultiSelectionParameters_onSelectionChange, useMultiSelection, useMultiSelectionChild, useMultiSelectionChildDeclarative } from "./use-multi-selection.js";
import { PropNames_SingleSelectionChildParameters_singleSelectionDisabled, PropNames_SingleSelectionParameters_initiallySingleSelectedIndex, PropNames_SingleSelectionParameters_onSingleSelectedIndexChange, PropNames_SingleSelectionParameters_singleSelectionAriaPropName, PropNames_SingleSelectionParameters_singleSelectionMode, useSingleSelection, useSingleSelectionChild, useSingleSelectionDeclarative } from "./use-single-selection.js";
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
export function useSelection({ [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused, [PropNames_ManagedChildrenReturn_getChildren]: getChildren, [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName, [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode, [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange, [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex, [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: initiallySingleSelectedIndex, [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange, [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName, [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode, ...void1 }) {
    const { [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: ocfc1, context: contextSS, ...singleSelectionReturn } = useSingleSelection({
        [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
        [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
        [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: initiallySingleSelectedIndex,
        [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange,
        [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName,
        [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode
    });
    const { [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: ocfc2, context: contextMS, props: propsStable, ...multiSelectionReturn } = useMultiSelection({
        [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused,
        [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
        [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName,
        [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
        [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange,
    });
    assertEmptyObject(void1);
    return {
        ...multiSelectionReturn,
        ...singleSelectionReturn,
        [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: useStableCallback((...a) => { ocfc1(...a); ocfc2(...a); }),
        props: propsStable,
        context: useMemoObject({ ...contextSS, ...contextMS }),
    };
}
/**
 *
 * @compositeParams
 */
export function useSelectionChild({ context, info: { index, untabbable, ...void2 }, [PropNames_MultiSelectionChildParameters_initiallyMultiSelected]: initiallyMultiSelected, [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: multiSelectionDisabled, [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: onMultiSelectChange, [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled, ...void3 }) {
    const { props: p1, info: { getSingleSelected, setLocalSingleSelected, singleSelected, ...void1 }, [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: ocfic1, [PropNames_PressParameters_onPressSync]: opc1, ...singleSelectionChildReturn } = useSingleSelectionChild({
        context,
        info: { index, untabbable },
        [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled
    });
    const { props: p2, [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: ocfic2, [PropNames_PressParameters_onPressSync]: opc2, info: { getMultiSelected, setSelectedFromParent, getMultiSelectionDisabled, ...void5 }, ...multiSelectionChildReturn } = useMultiSelectionChild({
        context,
        info: { index },
        [PropNames_MultiSelectionChildParameters_initiallyMultiSelected]: initiallyMultiSelected,
        [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: multiSelectionDisabled,
        [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: onMultiSelectChange,
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void5);
    return {
        [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: useStableCallback((...a) => { ocfic1(...a); ocfic2(...a); }),
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
        [PropNames_PressParameters_onPressSync]: useStableCallback((...a) => { opc1(...a); opc2(...a); }),
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