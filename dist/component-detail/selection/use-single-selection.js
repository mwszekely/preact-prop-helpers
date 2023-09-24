import { noop } from "lodash-es";
import { PropNames_PressParameters_onPressSync } from "../../component-use/use-press.js";
import { PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange } from "../../observers/use-children-have-focus.js";
import { PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged } from "../../observers/use-has-current-focus.js";
import { PropNames_ManagedChildrenReturn_getChildren, useChildrenFlag } from "../../preact-extensions/use-managed-children.js";
import { useEnsureStability } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { useState } from "../../preact-extensions/use-state.js";
import { assertEmptyObject } from "../../util/assert.js";
import { enhanceEvent } from "../../util/event.js";
import { focus } from "../../util/focus.js";
import { useCallback, useEffect, useRef } from "../../util/lib.js";
import { monitored } from "../../util/use-call-count.js";
import { useTagProps } from "../../util/use-tag-props.js";
import { PropNames_RovingTabIndexReturn_setTabbableIndex } from "../keyboard-navigation/use-roving-tabindex.js";
const P1 = `PropNames.SingleSelectionParameters`;
const P2 = `PropNames.SingleSelectionChildParameters`;
const R1 = `PropNames.SingleSelectionReturn`;
const R2 = `PropNames.SingleSelectionChildReturn`;
export const PropNames_SingleSelectionParameters_initiallySingleSelectedIndex = `${P1}.initiallySingleSelectedIndex`;
export const PropNames_SingleSelectionParameters_onSingleSelectedIndexChange = `${P1}.onSingleSelectedIndexChange`;
export const PropNames_SingleSelectionParameters_singleSelectionMode = `${P1}.singleSelectionMode`;
export const PropNames_SingleSelectionParameters_singleSelectionAriaPropName = `${P1}.singleSelectionAriaPropName`;
export const PropNames_SingleSelectionParameters_singleSelectedIndex = `${P1}.singleSelectedIndex`;
export const PropNames_SingleSelectionReturn_changeSingleSelectedIndex = `${R1}.changeSingleSelectedIndex`;
export const PropNames_SingleSelectionReturn_getSingleSelectedIndex = `${R1}.getSingleSelectedIndex`;
export const PropNames_SingleSelectionChildParameters_singleSelectionDisabled = `${P1}.singleSelectionDisabled`;
export const PropNames_SingleSelectionChildReturn_singleSelected = `${R1}.singleSelected`;
export const PropNames_SingleSelectionChildReturn_getSingleSelected = `${R1}.getSingleSelected`;
export const PropNames_SingleSelectionChildReturn_singleSelectedOffset = `${R1}.singleSelectedOffset`;
export const PropNames_SingleSelectionChildReturn_singleSelectionMode = `${R1}.singleSelectionMode`;
export const PropNames_SingleSelectionChildReturn_getSingleSelectedOffset = `${R1}.getSingleSelectedOffset`;
/**
 * Allows a single child among all children to be the "selected" child (which can be different from the "focused" child).
 *
 * @remarks If you need multi-select instead of single-select and you're using this hook (e.g. as part of {@link useCompleteListNavigation}), you can disable the single-selection behavior either by setting the selected index to `null` or.
 *
 * @hasChild {@link useSingleSelectionChild}
 *
 * @compositeParams
 */
export const useSingleSelection = monitored(function useSingleSelection({ 
//   managedChildrenReturn: { getChildren, ...void1 },
//   rovingTabIndexReturn: { setTabbableIndex, ...void2 },
//   singleSelectionParameters: { onSingleSelectedIndexChange: onSelectedIndexChange_U, initiallySingleSelectedIndex, singleSelectionAriaPropName, singleSelectionMode, ...void3 },
[PropNames_ManagedChildrenReturn_getChildren]: getChildren, [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex, [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSelectedIndexChange_U, [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: initiallySingleSelectedIndex, [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName, [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode, ...void4 }) {
    assertEmptyObject(void4);
    const onSingleSelectedIndexChange = useStableCallback(onSelectedIndexChange_U ?? noop);
    const getSelectedAt = useCallback((m) => { return m.getSingleSelected(); }, []);
    const setSelectedAt = useCallback((m, t, newSelectedIndex, prevSelectedIndex) => {
        if (m.untabbable) {
            console.assert(false);
        }
        const directionComparison = (newSelectedIndex == m.index ? prevSelectedIndex : newSelectedIndex);
        const direction = (directionComparison == null ? null : (m.index - directionComparison));
        if (newSelectedIndex == null)
            console.assert(t == false);
        if (t)
            console.assert(newSelectedIndex === m.index);
        m.setLocalSingleSelected(t, direction);
    }, []);
    const isSelectedValid = useCallback((m) => { return !m.untabbable; }, []);
    const { changeIndex: changeSingleSelectedIndex, getCurrentIndex: getSingleSelectedIndex } = useChildrenFlag({
        getChildren,
        onIndexChange: null,
        initialIndex: initiallySingleSelectedIndex,
        getAt: getSelectedAt,
        setAt: setSelectedAt,
        isValid: isSelectedValid,
        closestFit: false,
        onClosestFit: null
    });
    return {
        [PropNames_SingleSelectionReturn_getSingleSelectedIndex]: getSingleSelectedIndex,
        [PropNames_SingleSelectionReturn_changeSingleSelectedIndex]: changeSingleSelectedIndex,
        context: useMemoObject({
            singleSelectionContext: useMemoObject({
                getSingleSelectedIndex,
                [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange,
                [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName,
                [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode
            }),
        }),
        [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: useStableCallback((anyFocused, prev, reason) => {
            if (!anyFocused) {
                const selectedIndex = getSingleSelectedIndex();
                if (selectedIndex != null)
                    setTabbableIndex(selectedIndex, reason, false);
            }
        })
    };
});
/**
 *
 *
 * @compositeParams
 */
export const useSingleSelectionChild = monitored(function useSingleSelectionChild({ 
//singleSelectionChildParameters: { singleSelectionDisabled, ...void5 },
[PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled, context: { singleSelectionContext: { getSingleSelectedIndex, [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange, [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: ariaPropName, [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode, ...void1 }, ...void2 }, info: { index, untabbable, ...void3 }, ...void4 }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    useEnsureStability("useSingleSelectionChild", getSingleSelectedIndex, onSingleSelectedIndexChange);
    const [localSelected, setLocalSelected, getLocalSelected] = useState(getSingleSelectedIndex() == index);
    const [direction, setDirection, getDirection] = useState(getSingleSelectedIndex() == null ? null : (getSingleSelectedIndex() - index));
    const onCurrentFocusedInnerChanged = useStableCallback((focused, _prev, e) => {
        if (!singleSelectionDisabled && singleSelectionMode == 'focus' && focused && !untabbable) {
            onSingleSelectedIndexChange(enhanceEvent(e, { selectedIndex: index }));
        }
    });
    const onPressSync = useStableCallback((e) => {
        // We allow press events for selectionMode == 'focus' because
        // press generally causes a focus anyway (except when it doesn't, iOS Safari...)
        if (!singleSelectionDisabled && !untabbable) {
            if (singleSelectionMode == 'activation')
                onSingleSelectedIndexChange(enhanceEvent(e, { selectedIndex: index }));
        }
        else {
            focus(e.currentTarget);
        }
    });
    const propParts = ariaPropName?.split("-") ?? [];
    return {
        info: {
            setLocalSingleSelected: useStableCallback((selected, direction) => {
                setLocalSelected(selected);
                setDirection(direction);
            }),
            getSingleSelected: getLocalSelected,
            singleSelected: localSelected,
        },
        // singleSelectionChildReturn: {
        [PropNames_SingleSelectionChildReturn_singleSelected]: localSelected,
        [PropNames_SingleSelectionChildReturn_getSingleSelected]: getLocalSelected,
        [PropNames_SingleSelectionChildReturn_singleSelectedOffset]: direction,
        [PropNames_SingleSelectionChildReturn_singleSelectionMode]: singleSelectionMode,
        [PropNames_SingleSelectionChildReturn_getSingleSelectedOffset]: getDirection,
        //},
        props: useTagProps(ariaPropName == null || singleSelectionMode == "disabled" ? {} : {
            [`${propParts[0]}-${propParts[1]}`]: (localSelected ? (propParts[1] == "current" ? `${propParts[2]}` : `true`) : "false")
        }, "data-single-selection-child"),
        [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged,
        [PropNames_PressParameters_onPressSync]: onPressSync
    };
});
/**
 * Let's face it, declarative is nicer to use than imperative, so this is a shortcut.
 */
export function useSingleSelectionDeclarative({ [PropNames_SingleSelectionReturn_changeSingleSelectedIndex]: changeSingleSelectedIndex, [PropNames_SingleSelectionParameters_singleSelectedIndex]: singleSelectedIndex, [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange }) {
    let s = (singleSelectedIndex ?? null);
    let reasonRef = useRef(undefined);
    useEffect(() => { changeSingleSelectedIndex(s, reasonRef.current); }, [s]);
    const osic = useCallback((e) => {
        reasonRef.current = e;
        return onSingleSelectedIndexChange?.(e);
    }, [onSingleSelectedIndexChange]);
    return {
        [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: osic
    }; //satisfies Pick<UseSingleSelectionParameters<ParentOrChildElement, ChildElement, UseSingleSelectionChildInfo<ChildElement>>[typeof PropNames_SingleSelectionParameters_onSingleSelectedIndexChange], typeof PropNames_SingleSelectionParameters_onSingleSelectedIndexChange> }
}
//# sourceMappingURL=use-single-selection.js.map