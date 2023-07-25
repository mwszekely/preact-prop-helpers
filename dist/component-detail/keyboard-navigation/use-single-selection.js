import { noop } from "lodash-es";
import { useChildrenFlag } from "../../preact-extensions/use-managed-children.js";
import { useEnsureStability } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { useState } from "../../preact-extensions/use-state.js";
import { assertEmptyObject } from "../../util/assert.js";
import { enhanceEvent } from "../../util/event.js";
import { useCallback, useEffect } from "../../util/lib.js";
import { monitorCallCount } from "../../util/use-call-count.js";
import { useTagProps } from "../../util/use-tag-props.js";
/**
 * Allows a single child among all children to be the "selected" child (which can be different from the "focused" child).
 *
 * @remarks If you need multi-select instead of single-select and you're using this hook (e.g. as part of {@link useCompleteListNavigation}), you can disable the single-selection behavior either by setting the selected index to `null` or.
 *
 * @hasChild {@link useSingleSelectionChild}
 *
 * @compositeParams
 */
export function useSingleSelection({ managedChildrenReturn: { getChildren, ...void1 }, rovingTabIndexReturn: { setTabbableIndex, ...void2 }, singleSelectionParameters: { onSelectedIndexChange: onSelectedIndexChange_U, initiallySelectedIndex, ariaPropName, selectionMode, ...void3 }, ...void4 }) {
    monitorCallCount(useSingleSelection);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    const onSelectedIndexChange = useStableCallback(onSelectedIndexChange_U ?? noop);
    const getSelectedAt = useCallback((m) => { return m.getSelected(); }, []);
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
        m.setLocalSelected(t, direction);
    }, []);
    const isSelectedValid = useCallback((m) => { return !m.unselectable; }, []);
    const { changeIndex: changeSelectedIndex, getCurrentIndex: getSelectedIndex } = useChildrenFlag({
        getChildren,
        onIndexChange: null,
        initialIndex: initiallySelectedIndex,
        getAt: getSelectedAt,
        setAt: setSelectedAt,
        isValid: isSelectedValid,
        closestFit: false,
        onClosestFit: null
    });
    return {
        singleSelectionReturn: useMemoObject({
            getSelectedIndex,
            changeSelectedIndex
        }),
        context: useMemoObject({
            singleSelectionContext: useMemoObject({
                getSelectedIndex,
                onSelectedIndexChange: onSelectedIndexChange,
                ariaPropName,
                selectionMode
            }),
        }),
        childrenHaveFocusParameters: {
            onCompositeFocusChange: useStableCallback((anyFocused, prev, reason) => {
                if (!anyFocused) {
                    const selectedIndex = getSelectedIndex();
                    if (selectedIndex != null)
                        setTabbableIndex(selectedIndex, reason, false);
                }
            })
        }
    };
}
/**
 *
 *
 * @compositeParams
 */
export function useSingleSelectionChild({ context: { singleSelectionContext: { getSelectedIndex, onSelectedIndexChange, ariaPropName, selectionMode, ...void1 }, ...void2 }, info: { index, unselectable, ...void3 }, ...void4 }) {
    monitorCallCount(useSingleSelectionChild);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    useEnsureStability("useSingleSelectionChild", getSelectedIndex, onSelectedIndexChange);
    //const getUnselectable = useStableGetter(unselectable);
    const [localSelected, setLocalSelected, getLocalSelected] = useState(getSelectedIndex() == index);
    const [direction, setDirection, getDirection] = useState(getSelectedIndex() == null ? null : (getSelectedIndex() - index));
    const onCurrentFocusedInnerChanged = useStableCallback((focused, _prev, e) => {
        if (selectionMode == 'focus' && focused && !unselectable) {
            onSelectedIndexChange?.(enhanceEvent(e, { selectedIndex: index }));
        }
    });
    const onPressSync = useStableCallback((e) => {
        if (selectionMode == 'activation' && !unselectable)
            onSelectedIndexChange?.(enhanceEvent(e, { selectedIndex: index }));
    });
    const propParts = ariaPropName?.split("-") ?? [];
    return {
        info: {
            setLocalSelected: useStableCallback((selected, direction) => {
                setLocalSelected(selected);
                setDirection(direction);
            }),
            getSelected: getLocalSelected,
            selected: localSelected,
        },
        singleSelectionChildReturn: {
            selected: localSelected,
            getSelected: getLocalSelected,
            selectedOffset: direction,
            getSelectedOffset: getDirection,
        },
        props: useTagProps(ariaPropName == null || selectionMode == "disabled" ? {} : {
            [`${propParts[0]}-${propParts[1]}`]: (localSelected ? (propParts[1] == "current" ? `${propParts[2]}` : `true`) : "false")
        }, "data-single-selection-child"),
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged },
        pressParameters: { onPressSync: onSelectedIndexChange ? onPressSync : null }
    };
}
/**
 * Let's face it, declarative is nicer to use than imperative, so this is a shortcut.
 */
export function useSingleSelectionDeclarative({ singleSelectionReturn: { changeSelectedIndex }, singleSelectionDeclarativeParameters: { selectedIndex, onSelectedIndexChange } }) {
    useEffect(() => {
        changeSelectedIndex(selectedIndex);
    }, [selectedIndex]);
    return { singleSelectionParameters: { onSelectedIndexChange } };
}
//# sourceMappingURL=use-single-selection.js.map