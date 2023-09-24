import { useGlobalHandler } from "../../dom-helpers/use-event-handler.js";
import { returnFalse, returnTrue } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject, useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { useState } from "../../preact-extensions/use-state.js";
import { assertEmptyObject } from "../../util/assert.js";
import { enhanceEvent } from "../../util/event.js";
import { focus } from "../../util/focus.js";
import { useCallback, useEffect, useLayoutEffect, useRef } from "../../util/lib.js";
import { PropNames } from "../../util/types.js";
const P1 = `PropNames.MultiSelectionParameters`;
const P2 = `PropNames.MultiSelectionChildParameters`;
const R1 = `PropNames.MultiSelectionReturn`;
const R2 = `PropNames.MultiSelectionChildReturn`;
export const P1Names = {
    onSelectionChange: `${P1}.onSelectionChange`,
    multiSelectionMode: `${P1}.multiSelectionMode`,
    multiSelectionAriaPropName: `${P1}.multiSelectionAriaPropName`
};
export const R1Names = {
    changeMultiSelectedIndex: `${R1}.changeMultiSelectedIndex`,
    getMultiSelectedIndex: `${R1}.getMultiSelectedIndex`
};
export const P2Names = {
    onMultiSelectChange: `${P2}.onMultiSelectChange`,
    initiallyMultiSelected: `${P2}.initiallyMultiSelected`,
    multiSelectionDisabled: `${P2}.multiSelectionDisabled`,
    multiSelected: `${P2}.multiSelected`,
    //onMultiSelectedChange: `${P2}.onMultiSelectedChange`
};
export const R2Names = {
    changeMultiSelected: `${R2}.changeMultiSelected`,
    multiSelected: `${R2}.multiSelected`,
    getMultiSelected: `${R2}.getMultiSelected`
};
PropNames.MultiSelectionParameters ??= P1Names;
PropNames.MultiSelectionReturn ??= R1Names;
PropNames.MultiSelectionChildParameters ??= P2Names;
PropNames.MultiSelectionChildReturn ??= R2Names;
/**
 * Allows a parent to track the changes made to multi-selection children.
 *
 * @remarks Beyond just giving each child the ability to track its own selected state, the parent can change all children at once.
 * Pressing <kbd>Ctrl</kbd>+<kbd>A</kbd> will select all children, for example.
 *
 * This is not exclusive with {@link useSingleSelection}, you can use both at once if you have a use case for it.
 *
 * @compositeParams
 *
 * @hasChild {@link useMultiSelectionChild}
 */
export function useMultiSelection({ [PropNames.ChildrenHaveFocusReturn.getAnyFocused]: getAnyFocused, [PropNames.ManagedChildrenReturn.getChildren]: getChildren, [PropNames.MultiSelectionParameters.multiSelectionAriaPropName]: multiSelectionAriaPropName, [PropNames.MultiSelectionParameters.multiSelectionMode]: multiSelectionMode, [PropNames.MultiSelectionParameters.onSelectionChange]: onSelectionChange, ...void2 }) {
    // By having both we get the total number of children for free, even if there are holes in the array.
    // TODO: useManagedChildren should do that by default??
    const selectedIndices = useRef(new Set());
    const unselectedIndices = useRef(new Set());
    assertEmptyObject(void2);
    const startOfShiftSelect = useRef(null);
    // Why these are needed:
    // When in focus mode, there's no way to determine whether these keys are held down during the focus event.
    // That's all. Wow.
    let shiftKeyHeld = useRef(false);
    let ctrlKeyHeld = useRef(false);
    // When a child changes selection state, it calls this function.
    const notifyParentOfChildSelectChange = useStableCallback((event, index, selected, previous) => {
        console.assert(selected != previous);
        if (selected == undefined) {
            // This child is unmounting itself.
            if (previous === true) {
                console.assert(selectedIndices.current.has(index), `The selected child at index ${index} is unmounting itself, but the parent was unaware of it being selected.`);
                selectedIndices.current.delete(index);
            }
            else if (previous === false) {
                console.assert(unselectedIndices.current.has(index), `The selected child at index ${index} is unmounting itself, but the parent was unaware of it being selected.`);
                unselectedIndices.current.delete(index);
            }
            else {
                console.assert(false, `The child at index ${index} was not selected or unselected but a secret third thing: ${selected}`);
            }
        }
        else if (selected) {
            if (previous != undefined) {
                console.assert(unselectedIndices.current.has(index), `The multi-select child at index ${index} changed to selected even though it was not unselected before, somehow.`);
                unselectedIndices.current.delete(index);
            }
            console.assert(!selectedIndices.current.has(index), `The multi-select child at index ${index} changed to selected even though there is already a selected child with that index.`);
            selectedIndices.current.add(index);
            startOfShiftSelect.current = index;
        }
        else {
            if (previous != undefined) {
                console.assert(selectedIndices.current.has(index), `The multi-select child at index ${index} changed to unselected even though it was not selected before, somehow.`);
                selectedIndices.current.delete(index);
            }
            console.assert(!unselectedIndices.current.has(index), `The multi-select child at index ${index} was marked as unselected even though there is already an unselected child with that index.`);
            unselectedIndices.current.add(index);
        }
        const childCount = (selectedIndices.current.size + unselectedIndices.current.size);
        const selectedPercent = (childCount == 0 ? 0 : (selectedIndices.current.size / (childCount)));
        console.assert(selectedPercent >= 0 && selectedPercent <= 1);
        onSelectionChange?.(enhanceEvent(event, { selectedPercent, selectedIndices: selectedIndices.current }));
    });
    const changeAllChildren = useStableCallback((event, shouldBeSelected) => {
        getChildren().forEach(child => {
            if (!child.getMultiSelectionDisabled()) {
                child.setSelectedFromParent(event, shouldBeSelected(child.index));
            }
        });
    });
    const doContiguousSelection = useStableCallback((event, endIndex) => {
        let originalEnd = endIndex;
        let temp = 0;
        let startIndex = startOfShiftSelect.current || 0; // TODO: Is || 0 correct here? Probably, right?
        if (startIndex <= endIndex) {
            // Never include the child that started this contiguous selection, only the children beyond it.
            ++startIndex;
        }
        else {
            // Never include the child that started(/ended) this contiguous selection, only the children beyond it.
            --startIndex;
            temp = endIndex;
            endIndex = startIndex;
            startIndex = temp;
        }
        console.assert(startIndex <= endIndex);
        if (startIndex <= endIndex) {
            changeAllChildren(event, (childIndex) => {
                if (childIndex >= startIndex && childIndex <= endIndex) {
                    // If this child is within the range, toggle it.
                    return !getChildren().getAt(childIndex)?.getMultiSelected();
                }
                else {
                    return !!getChildren().getAt(childIndex)?.getMultiSelected();
                }
            });
        }
        startOfShiftSelect.current = originalEnd;
    });
    const onCompositeFocusChange = useStableCallback((anyFocused, prevAnyFocused, event) => {
        if (!anyFocused) {
            ctrlKeyHeld.current = shiftKeyHeld.current = false;
        }
    });
    let nextCtrlAIsUndo = useRef(false);
    useGlobalHandler(document, "keydown", useStableCallback((e) => {
        shiftKeyHeld.current = (e.shiftKey || e.key == 'Shift');
        ctrlKeyHeld.current = (e.ctrlKey || e.key == 'Control');
        // Only do CTRL+A handling if the control is focused
        if (getAnyFocused()) {
            // Listen for CTRL+A
            if (e.code == "KeyA" && e.ctrlKey && !e.repeat) {
                // Only perform this logic if multi-selection is enabled
                if (multiSelectionMode != "disabled") {
                    changeAllChildren(e, !nextCtrlAIsUndo.current ? returnTrue : returnFalse);
                    e.preventDefault();
                    e.stopPropagation();
                    // TODO: This should update in more places
                    nextCtrlAIsUndo.current = !nextCtrlAIsUndo.current;
                }
            }
        }
    }), { capture: true });
    useGlobalHandler(document, "keyup", (e) => {
        if (e.key == 'Shift')
            shiftKeyHeld.current = false;
        if (e.key == 'Control')
            ctrlKeyHeld.current = false;
    }, { passive: true, capture: true });
    return {
        context: useMemoObject({
            multiSelectionContext: useMemoObject({
                doContiguousSelection,
                notifyParentOfChildSelectChange,
                [PropNames.MultiSelectionParameters.multiSelectionAriaPropName]: multiSelectionAriaPropName,
                [PropNames.MultiSelectionParameters.multiSelectionMode]: multiSelectionMode,
                changeAllChildren,
                getCtrlKeyDown: useCallback(() => ctrlKeyHeld.current, []),
                getShiftKeyDown: useCallback(() => shiftKeyHeld.current, []),
                getAnyFocused
            })
        }),
        [PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange]: onCompositeFocusChange,
        props: useMemoObject({})
    };
}
/**
 *
 * @compositeParams
 */
export function useMultiSelectionChild({ info: { index, ...void4 }, [PropNames.MultiSelectionChildParameters.initiallyMultiSelected]: initiallyMultiSelected, [PropNames.MultiSelectionChildParameters.multiSelectionDisabled]: multiSelectionDisabled, [PropNames.MultiSelectionChildParameters.onMultiSelectChange]: onMultiSelectChange, context: { multiSelectionContext: { notifyParentOfChildSelectChange, [PropNames.MultiSelectionParameters.multiSelectionAriaPropName]: multiSelectionAriaPropName, [PropNames.MultiSelectionParameters.multiSelectionMode]: multiSelectionMode, doContiguousSelection, changeAllChildren, getCtrlKeyDown, getShiftKeyDown, getAnyFocused, ...void5 }, ...void3 }, ...void2 }) {
    // When we're in focus-selection mode, focusing any child deselects everything and selects JUST that child.
    // But that's really annoying for when you tab into the component, so it's only enabled when you're navigating WITHIN the component
    // (e.g. we only do that "reset everything" selection stuff when the component already had focus and that focus simply moved to a different child)
    // The exception is press events, because a click can come from anywhere, focusing a child even if focus is elsewhere (or the window doesn't even have focus!)
    // So when a press event happens during focus-selection mode, we disable the disabling with this flag.
    const pressFreebie = useRef(false);
    const onPressSync = (e) => {
        if (!multiSelectionDisabled) {
            if (multiSelectionMode == "activation") {
                if (e.shiftKey) {
                    doContiguousSelection(e, index);
                }
                else {
                    onMultiSelectChange?.(enhanceEvent(e, { multiSelected: !getLocalSelected() }));
                }
            }
            else {
                if (e.ctrlKey) {
                    onMultiSelectChange?.(enhanceEvent(e, { multiSelected: !getLocalSelected() }));
                }
                else {
                    pressFreebie.current = true;
                    focus(e.currentTarget);
                    onCurrentFocusedInnerChanged(true, false, e);
                }
            }
        }
    };
    const [localSelected, setLocalSelected, getLocalSelected] = useState(initiallyMultiSelected ?? false);
    const changeMultiSelected = useStableCallback((e, selected) => {
        console.assert(selected != null);
        console.assert(!multiSelectionDisabled);
        console.assert(multiSelectIsEnabled);
        // We're selected now (because someone told us we are, this hook doesn't call this function directly)
        //
        // So update our own internal state so we can re-render with the correct props,
        // and also notify the parent (in case the parent is listening for changes in some way)
        let prevSelected = getLocalSelected();
        if (prevSelected != selected) {
            setLocalSelected(selected);
            notifyParentOfChildSelectChange(e, index, selected, prevSelected);
        }
    });
    const multiSelectIsEnabled = (multiSelectionMode != 'disabled');
    useLayoutEffect(() => {
        if (multiSelectIsEnabled) {
            notifyParentOfChildSelectChange(null, index, getLocalSelected(), undefined);
            return () => notifyParentOfChildSelectChange(null, index, undefined, getLocalSelected());
        }
    }, [index, multiSelectIsEnabled]);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    const onCurrentFocusedInnerChanged = useStableCallback((focused, prev, event) => {
        if (focused) {
            if (multiSelectionMode == "focus") {
                let any = getAnyFocused();
                console.log("any focused: ", any);
                // Wow, it's the worst selection mode.
                const subSelectionMode = (getShiftKeyDown() ? "toggle" : getCtrlKeyDown() ? "skip" : "set");
                let newIndex = index;
                switch (subSelectionMode) {
                    case "set":
                        if (any || pressFreebie.current) {
                            changeAllChildren(event, index => (index == newIndex));
                        }
                        break;
                    case "toggle":
                        doContiguousSelection(event, index);
                        //onMultiSelectChange?.(enhanceEvent(event, { multiSelected: !localSelected }));
                        //doContiguousSelection
                        //setSelectedFromParent(event!, getLocalSelected())
                        break;
                    case "skip":
                        debugger;
                        break;
                }
                /*if (getShiftKeyDown()) {
                    onMultiSelectChange?.(enhanceEvent(event, { multiSelected: !localSelected }));
                }
                else {
                    changeAllChildren(event!, i => (i == index));
                }*/
            }
        }
        pressFreebie.current = false;
    });
    const setSelectedFromParent = useStableCallback((event, multiSelected) => {
        console.assert(onMultiSelectChange != null);
        onMultiSelectChange?.(enhanceEvent(event, { multiSelected }));
    });
    return {
        [PropNames.MultiSelectionChildReturn.changeMultiSelected]: changeMultiSelected,
        [PropNames.MultiSelectionChildReturn.multiSelected]: localSelected,
        [PropNames.MultiSelectionChildReturn.getMultiSelected]: getLocalSelected,
        [PropNames.MultiSelectionParameters.multiSelectionMode]: multiSelectionMode,
        [PropNames.PressParameters.onPressSync]: onPressSync,
        [PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged,
        props: { [multiSelectionAriaPropName || "aria-selected"]: multiSelectionMode == "disabled" ? undefined : (localSelected ? "true" : "false") },
        info: {
            getMultiSelected: getLocalSelected,
            setSelectedFromParent,
            getMultiSelectionDisabled: useStableGetter(multiSelectionDisabled)
        }
    };
}
/**
 *
 * @compositeParams
 */
export function useMultiSelectionChildDeclarative({ [PropNames.MultiSelectionChildParameters.onMultiSelectChange]: onMultiSelectChange, [PropNames.MultiSelectionChildParameters.multiSelected]: multiSelected, [PropNames.MultiSelectionChildReturn.changeMultiSelected]: changeMultiSelected, ...void1 }) {
    let s = (multiSelected || false);
    let reasonRef = useRef(undefined);
    useEffect(() => {
        changeMultiSelected(reasonRef.current, s);
    }, [s]);
    const omsc = useStableCallback((e) => {
        reasonRef.current = e;
        return onMultiSelectChange?.(e);
    });
    const setSelectedFromParent = useStableCallback((event, multiSelected) => {
        onMultiSelectChange?.(enhanceEvent(event, { multiSelected }));
    });
    assertEmptyObject(void1);
    return {
        [PropNames.MultiSelectionChildParameters.onMultiSelectChange]: omsc,
        info: { setSelectedFromParent }
    };
}
//# sourceMappingURL=use-multi-selection.js.map