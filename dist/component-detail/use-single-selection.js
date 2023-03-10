import { noop } from "lodash-es";
import { useCallback, useEffect } from "preact/hooks";
import { useChildrenFlag } from "../preact-extensions/use-managed-children.js";
import { useEnsureStability } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useStableGetter, useStableObject } from "../preact-extensions/use-stable-getter.js";
import { useState } from "../preact-extensions/use-state.js";
import { monitorCallCount } from "../util/use-call-count.js";
export function useSingleSelection({ managedChildrenReturn: { getChildren }, rovingTabIndexReturn: { setTabbableIndex }, singleSelectionParameters: { onSelectedIndexChange: onSelectedIndexChange_U, initiallySelectedIndex } }) {
    monitorCallCount(useSingleSelection);
    const onSelectedIndexChange = useStableCallback(onSelectedIndexChange_U ?? noop);
    const getSelectedAt = useCallback((m) => { return m.getSelected(); }, []);
    const setSelectedAt = useCallback((m, t, newSelectedIndex, prevSelectedIndex) => {
        if (m.hidden) {
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
    const isSelectedValid = useCallback((m) => { return !m.hidden; }, []);
    const { changeIndex: changeSelectedIndex, getCurrentIndex: getSelectedIndex } = useChildrenFlag({
        getChildren,
        onIndexChange: null,
        initialIndex: initiallySelectedIndex,
        getAt: getSelectedAt,
        setAt: setSelectedAt,
        isValid: isSelectedValid,
        closestFit: false
    });
    return {
        singleSelectionReturn: useStableObject({
            getSelectedIndex,
            changeSelectedIndex
        }),
        context: useStableObject({
            singleSelectionContext: useStableObject({
                getSelectedIndex,
                onSelectedIndexChange: onSelectedIndexChange
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
export function useSingleSelectionChild(args) {
    monitorCallCount(useSingleSelectionChild);
    const { context: { singleSelectionContext: { getSelectedIndex, onSelectedIndexChange } }, singleSelectionChildParameters: { ariaPropName, selectionMode, disabled }, managedChildParameters: { index } } = args;
    useEnsureStability("useSingleSelectionChild", getSelectedIndex, onSelectedIndexChange);
    const getDisabled = useStableGetter(disabled);
    const [localSelected, setLocalSelected, getLocalSelected] = useState(getSelectedIndex() == index);
    const [direction, setDirection, getDirection] = useState(getSelectedIndex() == null ? null : (getSelectedIndex() - index));
    const onCurrentFocusedInnerChanged = useStableCallback((focused, _prev, e) => {
        if (selectionMode == 'focus' && focused) {
            onSelectedIndexChange?.(index, e);
        }
    });
    const propParts = ariaPropName?.split("-") ?? [];
    return {
        managedChildParameters: {
            setLocalSelected: useStableCallback((selected, direction) => {
                setLocalSelected(selected);
                setDirection(direction);
            })
        },
        singleSelectionChildReturn: {
            selected: localSelected,
            // This is the thing that's passed to onPress or onClick or whatever
            setThisOneSelected: useStableCallback((event) => {
                console.assert(!getDisabled());
                if (selectionMode == "disabled")
                    return;
                if (!disabled)
                    onSelectedIndexChange?.(index, event);
            }),
            getSelectedOffset: getDirection,
            selectedOffset: direction,
            getSelected: getLocalSelected
        },
        props: ariaPropName == null || selectionMode == "disabled" ? {} : {
            [`${propParts[0]}-${propParts[1]}`]: (localSelected ? (propParts[1] == "current" ? `${propParts[2]}` : `true`) : "false")
        },
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged }
    };
}
/**
 * Let's face it, declarative is nicer to use than imperative, so this is a shortcut.
 */
export function useSingleSelectionDeclarative({ singleSelectionReturn: { changeSelectedIndex }, singleSelectionDeclarativeParameters: { selectedIndex } }) {
    useEffect(() => {
        changeSelectedIndex(selectedIndex);
    }, [selectedIndex]);
}
//# sourceMappingURL=use-single-selection.js.map