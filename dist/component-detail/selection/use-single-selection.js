import { noop } from "lodash-es";
import { useChildrenFlag } from "../../preact-extensions/use-managed-children.js";
import { useEnsureStability } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { useState } from "../../preact-extensions/use-state.js";
import { assertEmptyObject } from "../../util/assert.js";
import { enhanceEvent } from "../../util/event.js";
import { focus } from "../../util/focus.js";
import { useCallback, useEffect, useRef } from "../../util/lib.js";
import { PropNames } from "../../util/types.js";
import { monitored } from "../../util/use-call-count.js";
import { useTagProps } from "../../util/use-tag-props.js";
const P1 = `PropNames.SingleSelectionParameters`;
const P2 = `PropNames.SingleSelectionChildParameters`;
const R1 = `PropNames.SingleSelectionReturn`;
const R2 = `PropNames.SingleSelectionChildReturn`;
export const P1Names = {
    initiallySingleSelectedIndex: `${P1}.initiallySingleSelectedIndex`,
    onSingleSelectedIndexChange: `${P1}.onSingleSelectedIndexChange`,
    singleSelectionMode: `${P1}.singleSelectionMode`,
    singleSelectionAriaPropName: `${P1}.singleSelectionAriaPropName`,
    singleSelectedIndex: `${P1}.singleSelectedIndex`,
};
export const R1Names = {
    changeSingleSelectedIndex: `${R1}.changeSingleSelectedIndex`,
    getSingleSelectedIndex: `${R1}.getSingleSelectedIndex`
};
export const P2Names = {
    singleSelectionDisabled: `${P2}.singleSelectionDisabled`
};
export const R2Names = {
    singleSelected: `${R2}.singleSelected`,
    getSingleSelected: `${R2}.getSingleSelected`,
    singleSelectedOffset: `${R2}.singleSelectedOffset`,
    singleSelectionMode: `${R2}.singleSelectionMode`,
    getSingleSelectedOffset: `${R2}.getSingleSelectedOffset`
};
PropNames.SingleSelectionParameters ??= P1Names;
PropNames.SingleSelectionReturn ??= R1Names;
PropNames.SingleSelectionChildParameters ??= P2Names;
PropNames.SingleSelectionChildReturn ??= R2Names;
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
[PropNames.ManagedChildrenReturn.getChildren]: getChildren, [PropNames.RovingTabIndexReturn.setTabbableIndex]: setTabbableIndex, [PropNames.SingleSelectionParameters.onSingleSelectedIndexChange]: onSelectedIndexChange_U, [PropNames.SingleSelectionParameters.initiallySingleSelectedIndex]: initiallySingleSelectedIndex, [PropNames.SingleSelectionParameters.singleSelectionAriaPropName]: singleSelectionAriaPropName, [PropNames.SingleSelectionParameters.singleSelectionMode]: singleSelectionMode, ...void4 }) {
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
        [PropNames.SingleSelectionReturn.getSingleSelectedIndex]: getSingleSelectedIndex,
        [PropNames.SingleSelectionReturn.changeSingleSelectedIndex]: changeSingleSelectedIndex,
        context: useMemoObject({
            singleSelectionContext: useMemoObject({
                getSingleSelectedIndex,
                [PropNames.SingleSelectionParameters.onSingleSelectedIndexChange]: onSingleSelectedIndexChange,
                [PropNames.SingleSelectionParameters.singleSelectionAriaPropName]: singleSelectionAriaPropName,
                [PropNames.SingleSelectionParameters.singleSelectionMode]: singleSelectionMode
            }),
        }),
        [PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange]: useStableCallback((anyFocused, prev, reason) => {
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
[PropNames.SingleSelectionChildParameters.singleSelectionDisabled]: singleSelectionDisabled, context: { singleSelectionContext: { getSingleSelectedIndex, [PropNames.SingleSelectionParameters.onSingleSelectedIndexChange]: onSingleSelectedIndexChange, [PropNames.SingleSelectionParameters.singleSelectionAriaPropName]: ariaPropName, [PropNames.SingleSelectionParameters.singleSelectionMode]: singleSelectionMode, ...void1 }, ...void2 }, info: { index, untabbable, ...void3 }, ...void4 }) {
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
        [PropNames.SingleSelectionChildReturn.singleSelected]: localSelected,
        [PropNames.SingleSelectionChildReturn.getSingleSelected]: getLocalSelected,
        [PropNames.SingleSelectionChildReturn.singleSelectedOffset]: direction,
        [PropNames.SingleSelectionChildReturn.singleSelectionMode]: singleSelectionMode,
        [PropNames.SingleSelectionChildReturn.getSingleSelectedOffset]: getDirection,
        //},
        props: useTagProps(ariaPropName == null || singleSelectionMode == "disabled" ? {} : {
            [`${propParts[0]}-${propParts[1]}`]: (localSelected ? (propParts[1] == "current" ? `${propParts[2]}` : `true`) : "false")
        }, "data-single-selection-child"),
        [PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged,
        [PropNames.PressParameters.onPressSync]: onPressSync
    };
});
/**
 * Let's face it, declarative is nicer to use than imperative, so this is a shortcut.
 */
export function useSingleSelectionDeclarative({ [PropNames.SingleSelectionReturn.changeSingleSelectedIndex]: changeSingleSelectedIndex, [PropNames.SingleSelectionParameters.singleSelectedIndex]: singleSelectedIndex, [PropNames.SingleSelectionParameters.onSingleSelectedIndexChange]: onSingleSelectedIndexChange }) {
    let s = (singleSelectedIndex ?? null);
    let reasonRef = useRef(undefined);
    useEffect(() => { changeSingleSelectedIndex(s, reasonRef.current); }, [s]);
    const osic = useCallback((e) => {
        reasonRef.current = e;
        return onSingleSelectedIndexChange?.(e);
    }, [onSingleSelectedIndexChange]);
    return {
        [PropNames.SingleSelectionParameters.onSingleSelectedIndexChange]: osic
    }; //satisfies Pick<UseSingleSelectionParameters<ParentOrChildElement, ChildElement, UseSingleSelectionChildInfo<ChildElement>>[typeof PropNames.SingleSelectionParameters.onSingleSelectedIndexChange], typeof PropNames.SingleSelectionParameters.onSingleSelectedIndexChange> }
}
//# sourceMappingURL=use-single-selection.js.map