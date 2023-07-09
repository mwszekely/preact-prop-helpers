import { noop } from "lodash-es";
import { useChildrenFlag } from "../../preact-extensions/use-managed-children.js";
import { useEnsureStability } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject, useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { useState } from "../../preact-extensions/use-state.js";
import { enhanceEvent } from "../../util/event.js";
import { useCallback, useEffect } from "../../util/lib.js";
import { monitorCallCount } from "../../util/use-call-count.js";
export function useSingleSelection({ managedChildrenReturn: { getChildren }, rovingTabIndexReturn: { setTabbableIndex }, singleSelectionParameters: { onSelectedIndexChange: onSelectedIndexChange_U, initiallySelectedIndex, ariaPropName, selectionMode } }) {
    monitorCallCount(useSingleSelection);
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
export function useSingleSelectionChild(args) {
    monitorCallCount(useSingleSelectionChild);
    const { context: { singleSelectionContext: { getSelectedIndex, onSelectedIndexChange, ariaPropName, selectionMode } }, info: { index, unselectable }, } = args;
    useEnsureStability("useSingleSelectionChild", getSelectedIndex, onSelectedIndexChange);
    const getUnselectable = useStableGetter(unselectable);
    const [localSelected, setLocalSelected, getLocalSelected] = useState(getSelectedIndex() == index);
    const [direction, setDirection, getDirection] = useState(getSelectedIndex() == null ? null : (getSelectedIndex() - index));
    const onCurrentFocusedInnerChanged = useStableCallback((focused, _prev, e) => {
        if (selectionMode == 'focus' && focused) {
            onSelectedIndexChange?.(enhanceEvent(e, { selectedIndex: index }));
        }
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
            // This is the thing that's passed to onPress or onClick or whatever
            /*setThisOneSelected: useStableCallback((event) => {
                console.assert(!getUnselectable());
                if (selectionMode == "disabled")
                    return;
                if (!unselectable)
                    onSelectedIndexChange?.(enhanceEvent(event, { selectedIndex: index }));
            }),*/
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
export function useSingleSelectionDeclarative({ singleSelectionReturn: { changeSelectedIndex }, singleSelectionDeclarativeParameters: { selectedIndex, onSelectedIndexChange } }) {
    useEffect(() => {
        changeSelectedIndex(selectedIndex);
    }, [selectedIndex]);
    return { singleSelectionParameters: { onSelectedIndexChange } };
}
//# sourceMappingURL=use-single-selection.js.map