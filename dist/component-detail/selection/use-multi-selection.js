import { PropNames_PressParameters_onPressSync } from "../../component-use/use-press.js";
import { useGlobalHandler } from "../../dom-helpers/use-event-handler.js";
import { PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange, PropNames_ChildrenHaveFocusReturn_getAnyFocused } from "../../observers/use-children-have-focus.js";
import { PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged } from "../../observers/use-has-current-focus.js";
import { PropNames_ManagedChildrenReturn_getChildren } from "../../preact-extensions/use-managed-children.js";
import { returnFalse, returnTrue } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject, useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { useState } from "../../preact-extensions/use-state.js";
import { assertEmptyObject } from "../../util/assert.js";
import { enhanceEvent } from "../../util/event.js";
import { focus } from "../../util/focus.js";
import { useCallback, useEffect, useLayoutEffect, useRef } from "../../util/lib.js";
const P1 = `PropNames.MultiSelectionParameters`;
const P2 = `PropNames.MultiSelectionChildParameters`;
const R1 = `PropNames.MultiSelectionReturn`;
const R2 = `PropNames.MultiSelectionChildReturn`;
export const PropNames_MultiSelectionParameters_onSelectionChange = `${P1}.onSelectionChange`;
export const PropNames_MultiSelectionParameters_multiSelectionMode = `${P1}.multiSelectionMode`;
export const PropNames_MultiSelectionParameters_multiSelectionAriaPropName = `${P1}.multiSelectionAriaPropName`;
export const PropNames_MultiSelectionReturn_changeMultiSelectedIndex = `${R1}.changeMultiSelectedIndex`;
export const PropNames_MultiSelectionReturn_getMultiSelectedIndex = `${R1}.getMultiSelectedIndex`;
export const PropNames_MultiSelectionChildParameters_onMultiSelectChange = `${P2}.onMultiSelectChange`;
export const PropNames_MultiSelectionChildParameters_initiallyMultiSelected = `${P2}.initiallyMultiSelected`;
export const PropNames_MultiSelectionChildParameters_multiSelectionDisabled = `${P2}.multiSelectionDisabled`;
export const PropNames_MultiSelectionChildParameters_multiSelected = `${P2}.multiSelected`;
export const PropNames_MultiSelectionChildReturn_changeMultiSelected = `${R2}.changeMultiSelected`;
export const PropNames_MultiSelectionChildReturn_multiSelected = `${R2}.multiSelected`;
export const PropNames_MultiSelectionChildReturn_getMultiSelected = `${R2}.getMultiSelected`;
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
export function useMultiSelection({ [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused, [PropNames_ManagedChildrenReturn_getChildren]: getChildren, [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName, [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode, [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange, ...void2 }) {
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
                [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName,
                [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
                changeAllChildren,
                getCtrlKeyDown: useCallback(() => ctrlKeyHeld.current, []),
                getShiftKeyDown: useCallback(() => shiftKeyHeld.current, []),
                getAnyFocused
            })
        }),
        [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: onCompositeFocusChange,
        props: useMemoObject({})
    };
}
/**
 *
 * @compositeParams
 */
export function useMultiSelectionChild({ info: { index, ...void4 }, [PropNames_MultiSelectionChildParameters_initiallyMultiSelected]: initiallyMultiSelected, [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: multiSelectionDisabled, [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: onMultiSelectChange, context: { multiSelectionContext: { notifyParentOfChildSelectChange, [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName, [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode, doContiguousSelection, changeAllChildren, getCtrlKeyDown, getShiftKeyDown, getAnyFocused, ...void5 }, ...void3 }, ...void2 }) {
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
        [PropNames_MultiSelectionChildReturn_changeMultiSelected]: changeMultiSelected,
        [PropNames_MultiSelectionChildReturn_multiSelected]: localSelected,
        [PropNames_MultiSelectionChildReturn_getMultiSelected]: getLocalSelected,
        [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
        [PropNames_PressParameters_onPressSync]: onPressSync,
        [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged,
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
export function useMultiSelectionChildDeclarative({ [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: onMultiSelectChange, [PropNames_MultiSelectionChildParameters_multiSelected]: multiSelected, [PropNames_MultiSelectionChildReturn_changeMultiSelected]: changeMultiSelected, ...void1 }) {
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
        [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: omsc,
        info: { setSelectedFromParent }
    };
}
//# sourceMappingURL=use-multi-selection.js.map