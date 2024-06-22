import { noop } from "lodash-es";
import { $onPressSync, $pressParameters } from "../../component-use/use-press.js";
import { $onCompositeFocusChange, $childrenHaveFocusParameters } from "../../observers/use-children-have-focus.js";
import { $index, $getChildren, $managedChildrenReturn, useChildrenFlag } from "../../preact-extensions/use-managed-children.js";
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
import { $untabbable, $setTabbableIndex, $rovingTabIndexReturn } from "../keyboard-navigation/use-roving-tabindex.js";
import { $hasCurrentFocusParameters, $onCurrentFocusedInnerChanged } from "../../observers/use-has-current-focus.js";
export const $singleSelectionParameters = Symbol();
export const $singleSelectionDeclarativeParameters = Symbol();
export const $singleSelectionReturn = Symbol();
export const $singleSelectionContext = Symbol();
export const $singleSelectionChildReturn = Symbol();
export const $singleSelectionChildParameters = Symbol();
export const $initiallySingleSelectedIndex = Symbol();
export const $onSingleSelectedIndexChange = Symbol();
export const $singleSelectionMode = Symbol();
export const $singleSelectionAriaPropName = Symbol();
export const $singleSelectionDisabled = Symbol();
export const $singleSelectedIndex = Symbol();
export const $changeSingleSelectedIndex = Symbol();
export const $getSingleSelectedIndex = Symbol();
export const $singleSelected = Symbol();
export const $getSingleSelected = Symbol();
export const $singleSelectedOffset = Symbol();
export const $getSingleSelectedOffset = Symbol();
export const $setLocalSingleSelected = Symbol();
/**
 * Allows a single child among all children to be the "selected" child (which can be different from the "focused" child).
 *
 * @remarks If you need multi-select instead of single-select and you're using this hook (e.g. as part of {@link useCompleteListNavigation}), you can disable the single-selection behavior either by setting the selected index to `null` or.
 *
 * @hasChild {@link useSingleSelectionChild}
 *
 * @compositeParams
 */
export const useSingleSelection = monitored(function useSingleSelection({ [$managedChildrenReturn]: { [$getChildren]: getChildren, ...void1 }, [$rovingTabIndexReturn]: { [$setTabbableIndex]: setTabbableIndex, ...void2 }, [$singleSelectionParameters]: { [$onSingleSelectedIndexChange]: onSelectedIndexChange_U, [$initiallySingleSelectedIndex]: initiallySingleSelectedIndex, [$singleSelectionAriaPropName]: singleSelectionAriaPropName, [$singleSelectionMode]: singleSelectionMode, ...void3 }, ...void4 }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    const onSingleSelectedIndexChange = useStableCallback(onSelectedIndexChange_U ?? noop);
    const getSelectedAt = useCallback((m) => { return m[$getSingleSelected](); }, []);
    const setSelectedAt = useCallback((m, t, newSelectedIndex, prevSelectedIndex) => {
        if (m[$untabbable]) {
            console.assert(false);
        }
        const directionComparison = (newSelectedIndex == m[$index] ? prevSelectedIndex : newSelectedIndex);
        const direction = (directionComparison == null ? null : (m[$index] - directionComparison));
        if (newSelectedIndex == null)
            console.assert(t == false);
        if (t)
            console.assert(newSelectedIndex === m[$index]);
        m[$setLocalSingleSelected](t, direction);
    }, []);
    const isSelectedValid = useCallback((m) => { return !m[$untabbable]; }, []);
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
        [$singleSelectionReturn]: useMemoObject({
            [$getSingleSelectedIndex]: getSingleSelectedIndex,
            [$changeSingleSelectedIndex]: changeSingleSelectedIndex
        }),
        context: useMemoObject({
            [$singleSelectionContext]: useMemoObject({
                [$getSingleSelectedIndex]: getSingleSelectedIndex,
                [$onSingleSelectedIndexChange]: onSingleSelectedIndexChange,
                [$singleSelectionAriaPropName]: singleSelectionAriaPropName,
                [$singleSelectionMode]: singleSelectionMode
            }),
        }),
        [$childrenHaveFocusParameters]: {
            [$onCompositeFocusChange]: useStableCallback((anyFocused, prev, reason) => {
                if (!anyFocused) {
                    const selectedIndex = getSingleSelectedIndex();
                    if (selectedIndex != null)
                        setTabbableIndex(selectedIndex, reason, false);
                }
            })
        }
    };
});
/**
 *
 *
 * @compositeParams
 */
export const useSingleSelectionChild = monitored(function useSingleSelectionChild({ [$singleSelectionChildParameters]: { [$singleSelectionDisabled]: singleSelectionDisabled, ...void5 }, context: { [$singleSelectionContext]: { [$getSingleSelectedIndex]: getSingleSelectedIndex, [$onSingleSelectedIndexChange]: onSingleSelectedIndexChange, [$singleSelectionAriaPropName]: ariaPropName, [$singleSelectionMode]: singleSelectionMode, ...void1 }, ...void2 }, info: { [$index]: index, [$untabbable]: untabbable, ...void3 }, ...void4 }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
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
            [$setLocalSingleSelected]: useStableCallback((selected, direction) => {
                setLocalSelected(selected);
                setDirection(direction);
            }),
            [$getSingleSelected]: getLocalSelected,
            [$singleSelected]: localSelected,
        },
        [$singleSelectionChildReturn]: {
            [$singleSelected]: localSelected,
            [$getSingleSelected]: getLocalSelected,
            [$singleSelectedOffset]: direction,
            [$singleSelectionMode]: singleSelectionMode,
            [$getSingleSelectedOffset]: getDirection
        },
        props: useTagProps(ariaPropName == null || singleSelectionMode == "disabled" ? {} : {
            [`${propParts[0]}-${propParts[1]}`]: (localSelected ? (propParts[1] == "current" ? `${propParts[2]}` : `true`) : "false")
        }, "data-single-selection-child"),
        [$hasCurrentFocusParameters]: { [$onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged },
        [$pressParameters]: { [$onPressSync]: onPressSync }
    };
});
/**
 * Let's face it, declarative is nicer to use than imperative, so this is a shortcut.
 */
export function useSingleSelectionDeclarative({ [$singleSelectionReturn]: { [$changeSingleSelectedIndex]: changeSingleSelectedIndex }, [$singleSelectionDeclarativeParameters]: { [$singleSelectedIndex]: singleSelectedIndex, [$onSingleSelectedIndexChange]: onSingleSelectedIndexChange } }) {
    let s = (singleSelectedIndex ?? null);
    let reasonRef = useRef(undefined);
    useEffect(() => { changeSingleSelectedIndex(s, reasonRef.current); }, [s]);
    const osic = useCallback((e) => {
        reasonRef.current = e;
        return onSingleSelectedIndexChange?.(e);
    }, [onSingleSelectedIndexChange]);
    return { [$singleSelectionParameters]: { [$onSingleSelectedIndexChange]: osic } };
}
//# sourceMappingURL=use-single-selection.js.map