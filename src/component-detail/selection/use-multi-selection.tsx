
import { useGlobalHandler } from "../../dom-helpers/use-event-handler.js";
import { UseChildrenHaveFocusParameters, UseChildrenHaveFocusReturnType } from "../../observers/use-children-have-focus.js";
import { UseHasCurrentFocusParameters } from "../../observers/use-has-current-focus.js";
import { UseGenericChildParameters, UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { OnPassiveStateChange, returnFalse, returnTrue } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject, useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { useState } from "../../preact-extensions/use-state.js";
import { assertEmptyObject } from "../../util/assert.js";
import { EnhancedEventHandler, TargetedEnhancedEvent, enhanceEvent } from "../../util/event.js";
import { focus } from "../../util/focus.js";
import { getDocument } from "../../util/get-window.js";
import { useCallback, useLayoutEffect, useRef } from "../../util/lib.js";
import { ElementProps, EventTypeByTag, FocusEventTypeByTag, KeyboardEventTypeByTag, Nullable, OmitStrong, TargetedOmit, TargetedPick, JSX } from "../../util/types.js";
import { useMonitoring } from "../../util/use-call-count.js";
import { UseRovingTabIndexChildInfo } from "../keyboard-navigation/use-roving-tabindex.js";

/**
 * 
 * General reminder on event order of operations:
 * 
 * 1. The API consumer wires up a button's onClick handler to `firePressSelectionEvent`.
 * 2. The child calls its own `onMultiSelectChange` handler.
 * 3. The API consumer passes a callback to `onMultiSelectChange` that
 *  a. Calls `changeMultiSelected`
 *  b. Probably calls setState for local bookkeeping.
 * 4. `changeMultiSelected` re-renders the child with the new selected status
 */
const DUMMY = 0;


export type MultiSelectChildChangeHandler<Tag extends keyof JSX.IntrinsicElements> = EnhancedEventHandler<EventTypeByTag<Tag, Event>, { multiSelected: boolean; }>;
export type MultiSelectChildChangeEvent<Tag extends keyof JSX.IntrinsicElements> = TargetedEnhancedEvent<EventTypeByTag<Tag, Event>, { multiSelected: boolean; }>;

export type MultiSelectionChangeEvent = TargetedEnhancedEvent<EventTypeByTag<any, any>, { selectedPercent: number; selectedIndices: Set<number>; }>;

export interface UseMultiSelectionContextSelf extends Pick<UseMultiSelectionParametersSelf, "multiSelectionAriaPropName" | "multiSelectionMode"> {
    notifyParentOfChildSelectChange(event: EventTypeByTag<any, any>, childIndex: number, selected: boolean | undefined, previous: boolean | undefined): void;
    /**
     * When the user presses Shift+Space or Ctrl+Space (depending on selectionMode),
     * all the items since the last selected item are toggled,
     * so the child in question needs to be able to track that.
     */
    doContiguousSelection(event: EventTypeByTag<any, any>, endIndex: number): void;

    /**
     * Mostly used for when focus-mode selects something (because by default it deselects everything else)
     */
    changeAllChildren: (event: EventTypeByTag<any, any>, shouldBeSelected: (index: number) => boolean) => void;

    getCtrlKeyDown(): boolean;
    getShiftKeyDown(): boolean;

    getAnyFocused(): boolean;
}
export interface UseMultiSelectionContext {
    multiSelectionContext: UseMultiSelectionContextSelf;
}

export interface UseMultiSelectionChildInfo<Tag extends keyof JSX.IntrinsicElements> extends UseRovingTabIndexChildInfo<Tag> {
    /**
     * When the parent changes all children (generally because of CTRL+A, focus-selection mode, etc.)
     * it needs to change all the child checkboxes at once.
     * It calls this function to do so.
     * 
     * TODO: This should be a promise because
     * 1) It might take time for a child to change its state
     * 2) It might be impossible for a child to change itself, which is neatly represented as a rejected promise.
     * 
     * But that propagates all the way to linear navigation, which is sync... 
     * (and for good reasons, cause navigation shouldn't be slowed down by sending data to a server or something)
     */
    setSelectedFromParent(event: EventTypeByTag<any, any>, selected: boolean): void;

    getMultiSelected(): boolean;

    getMultiSelectionDisabled(): boolean;
}

export interface UseMultiSelectionParameters<M extends UseMultiSelectionChildInfo<any>> extends
    TargetedPick<UseChildrenHaveFocusReturnType<any>, "childrenHaveFocusReturn", "getAnyFocused">,
    TargetedPick<UseManagedChildrenReturnType<M>, "managedChildrenReturn", "getChildren"> {
    multiSelectionParameters: UseMultiSelectionParametersSelf;
}

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface UseMultiSelectionReturnTypeSelf { }

export interface UseMultiSelectionReturnType<ParentElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements> extends
    TargetedPick<UseChildrenHaveFocusParameters<ChildElementTag>, "childrenHaveFocusParameters", "onCompositeFocusChange"> {
    context: UseMultiSelectionContext;
    multiSelectionReturn: UseMultiSelectionReturnTypeSelf;
    propsStable: ElementProps<ParentElementTag>
}

export type UseMultiSelectionChildInfoKeysParameters = "index";
export type UseMultiSelectionChildInfoKeysReturnType = "setSelectedFromParent" | "getMultiSelected" | "getMultiSelectionDisabled";

export interface UseMultiSelectionParametersSelf {
    onSelectionChange: Nullable<(e: MultiSelectionChangeEvent) => void>;


    /**
     * What causes a child to become selected? 
     * 
     * @remarks **`"focus"`** is **strongly** discouraged, even though it behaves like a native HTML element (e.g. like `<select size=10>`).
     * 
     * Notably, in `"focus"` mode, it can be difficult to tell the difference between multi-select and single-select unless you already know that this is a multi-select control.
     * 
     * Keyboard controls in `"activation"` mode don't differ strongly from the usual conventions of "navigate to a thing, press Space to activate it".
     * However, because the `"focus"` mode controls are extremely unintuitive, all controls are documented here:
     * 
     * ```md-literal
     * 
     * * In either mode, navigation/selection has the usual keyboard controls (arrow keys, space/enter, page up/down, home/end, mouse clicks, pointer events, etc.)
     * * In either mode, <kbd>Ctrl</kbd>+<kbd>A</kbd> will select all items.
     * * In either mode, holding <kbd>Shift</kbd> while changing selection will extend the current selection to include the new item and any items in between.
     * * Exclusive to `"focus"` mode:
     *     * Navigating to a new item will automatically select it.
     *         * To navigate **without** selecting a new item, hold <kbd>Ctrl</kbd>.
     *             * Any item navigated to in this way can be selected by pressing <kbd>Space</kbd>/<kbd>Enter</kbd> as usual, but...
     *     * Selecting a new item (whether via navigation or pressing <kbd>Space</kbd> or <kbd>Enter</kbd>) will **deselect all other items** unless <kbd>Ctrl</kbd> is held.
     * ```
     */
    multiSelectionMode: "focus" | "activation" | "disabled";

    /**
     * What property will be used to mark this item as selected.
     * 
     * TODO: No compelling use-case for aria-current in multi-select? Just in case: | `current-${"page" | "step" | "date" | "time" | "location" | "true"}`
     */
    multiSelectionAriaPropName: Nullable<`aria-${"pressed" | "selected" | "checked"}`>;
}
export interface UseMultiSelectionChildParameters<Tag extends keyof JSX.IntrinsicElements, M extends UseMultiSelectionChildInfo<Tag>> extends
    UseGenericChildParameters<UseMultiSelectionContext, Pick<M, UseMultiSelectionChildInfoKeysParameters>> {

    multiSelectionChildParameters: UseMultiSelectionChildParametersSelf<Tag>;
    context: UseMultiSelectionContext;
}
export interface UseMultiSelectionChildParametersSelf<Tag extends keyof JSX.IntrinsicElements> {
    /** 
     * Called when the child is requesting to change whether it's selected or not (generally because the user clicked it)
     * 
     * @remarks To comply with the child's request, you should either:
     * 
     * ```md-literal
     * * Change the `selected` parameter to true (probably by calling `setState` somewhere) if this is declaratively controlled (most cases).
     * * Call `changeSelected`, if this is imperatively controlled.
     * ```
     */
    onMultiSelectChange: Nullable<(e: MultiSelectChildChangeEvent<Tag>) => void>;

    initiallyMultiSelected: boolean | null;




    /** When true, this child cannot be selected via multi-select, either by focusing it or by clicking it. */
    multiSelectionDisabled: boolean;
}

export interface UseMultiSelectionChildReturnType<Tag extends keyof JSX.IntrinsicElements, M extends UseMultiSelectionChildInfo<Tag>> extends
    TargetedPick<UseHasCurrentFocusParameters<Tag>, "hasCurrentFocusParameters", "onCurrentFocusedInnerChanged"> {
    multiSelectionChildReturn: UseMultiSelectionChildReturnTypeSelf;
    props: ElementProps<Tag>;
    info: Pick<M, UseMultiSelectionChildInfoKeysReturnType>;
}

export interface UseMultiSelectionChildReturnTypeSelf extends Pick<Required<UseMultiSelectionContextSelf>, "multiSelectionMode"> {
    /**
     * @stable
     */
    changeMultiSelected(event: EventTypeByTag<any, any>, selected: boolean): void;

    /**
     * Indicates that this child is selected, according to itself.
     */
    multiSelected: boolean;

    /**
     * @stable
     */
    getMultiSelected(): boolean;

    /** 
     * When the parent's `multiSelectionMode` is "activation", 
     * then the consumer is responsible for calling this function 
     * when whatever you define as "activation" occurs. Generally, 
     * this is a click or press event (from `usePress`). 
     * 
     * Calling this function will indirectly call 
     * `onMultiSelectChange`, which is generally hooked up to
     * `changeMultiSelected`.
     * 
     * This is not necessary in the "focus" selection mode, though
     * it's not recommended to use "focus" mode for multi-selection
     * anyway.
     */
    firePressSelectionEvent: (e: Event) => void;
}

/**
 * Allows a parent to track the changes made to multi-selection children.
 * 
 * @remarks Beyond just giving each child the ability to track its own selected state, the parent can change all children at once. 
 * Pressing <kbd>Ctrl</kbd>+<kbd>A</kbd> will select all children, for example.
 * 
 * This is not exclusive with {@link useSingleSelection}, you can use both at once if you have a use case for it.
 * 
 * @hasChild {@link useMultiSelectionChild}
 * 
 * @compositeParams
 */
export function useMultiSelection<ParentOrChildElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements>({
    multiSelectionParameters: { onSelectionChange, multiSelectionAriaPropName, multiSelectionMode, ...void3 },
    managedChildrenReturn: { getChildren, ...void1 },
    childrenHaveFocusReturn: { getAnyFocused, ...void4 },
    ...void2
}: UseMultiSelectionParameters<UseMultiSelectionChildInfo<any>>): UseMultiSelectionReturnType<ParentOrChildElementTag, ChildElementTag> {
    return useMonitoring(function useMultiSelection(): UseMultiSelectionReturnType<ParentOrChildElementTag, ChildElementTag> {
        ;
        // By having both we get the total number of children for free, even if there are holes in the array.
        // TODO: useManagedChildren should do that by default??
        const selectedIndices = useRef(new Set<number>());
        const unselectedIndices = useRef(new Set<number>());

        assertEmptyObject(void1);
        assertEmptyObject(void2);
        assertEmptyObject(void3);
        assertEmptyObject(void4);

        const startOfShiftSelect = useRef<number | null>(null);

        // Why these are needed:
        // When in focus mode, there's no way to determine whether these keys are held down during the focus event.
        // That's all. Wow.
        let shiftKeyHeld = useRef(false);
        let ctrlKeyHeld = useRef(false);

        // When a child changes selection state, it calls this function.
        const notifyParentOfChildSelectChange = useStableCallback((event: EventTypeByTag<any, any>, index: number, selected: boolean | undefined, previous: boolean | undefined) => {
            console.assert(selected != previous);

            // The commented-out asserts are don't work for rearranged children,
            // and are staying for now as a reminder of that, because it is a bit weird.
            if (selected == undefined) {
                // This child is unmounting itself.
                if (previous === true) {
                    //console.assert(selectedIndices.current.has(index), `The selected child at index ${index} is unmounting itself, but the parent was unaware of it being selected.`);
                    selectedIndices.current.delete(index);
                }
                else if (previous === false) {
                    //console.assert(unselectedIndices.current.has(index), `The selected child at index ${index} is unmounting itself, but the parent was unaware of it being selected.`);
                    unselectedIndices.current.delete(index);
                }
                else {
                    //console.assert(false, `The child at index ${index} was not selected or unselected but a secret third thing: ${selected}`);
                }
            }
            else if (selected) {
                if (previous != undefined) {
                    //console.assert(unselectedIndices.current.has(index), `The multi-select child at index ${index} changed to selected even though it was not unselected before, somehow.`);
                    unselectedIndices.current.delete(index);
                }
                //console.assert(!selectedIndices.current.has(index), `The multi-select child at index ${index} changed to selected even though there is already a selected child with that index.`)
                selectedIndices.current.add(index);
                startOfShiftSelect.current = index;
            }
            else {
                if (previous != undefined) {
                    //console.assert(selectedIndices.current.has(index), `The multi-select child at index ${index} changed to unselected even though it was not selected before, somehow.`);
                    selectedIndices.current.delete(index);
                }
                //console.assert(!unselectedIndices.current.has(index), `The multi-select child at index ${index} was marked as unselected even though there is already an unselected child with that index.`)
                unselectedIndices.current.add(index);
            }

            const childCount = (selectedIndices.current.size + unselectedIndices.current.size);
            const selectedPercent = (childCount == 0 ? 0 : (selectedIndices.current.size / (childCount)));
            console.assert(selectedPercent >= 0 && selectedPercent <= 1);

            onSelectionChange?.(enhanceEvent(event, { selectedPercent, selectedIndices: selectedIndices.current }));
        });

        const changeAllChildren = useStableCallback((event: EventTypeByTag<any, any>, shouldBeSelected: (index: number) => boolean) => {
            getChildren().forEach(child => {
                if (!child.getMultiSelectionDisabled()) {
                    child.setSelectedFromParent(event, shouldBeSelected(child.index));
                }
            })
        });

        const doContiguousSelection = useStableCallback((event: KeyboardEventTypeByTag<any>, endIndex: number) => {
            let originalEnd = endIndex;

            let temp = 0;
            let startIndex = startOfShiftSelect.current || 0;   // TODO: Is || 0 correct here? Probably, right?
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

        const onCompositeFocusChange = useStableCallback<OnPassiveStateChange<boolean, FocusEventTypeByTag<ChildElementTag> | undefined>>((anyFocused, _prevAnyFocused, _event) => {
            if (!anyFocused) {
                ctrlKeyHeld.current = shiftKeyHeld.current = false;
            }
        });

        let nextCtrlAIsUndo = useRef(false);

        useGlobalHandler(getDocument(), "keydown", useStableCallback((e: KeyboardEvent) => {
            shiftKeyHeld.current = (e.shiftKey || e.key == 'Shift');
            ctrlKeyHeld.current = (e.ctrlKey || e.key == 'Control');
            // Only do CTRL+A handling if the control is focused
            if (getAnyFocused()) {
                // Listen for CTRL+A
                if (e.code == "KeyA" && e.ctrlKey && !e.repeat) {
                    // Only perform this logic if multi-selection is enabled
                    if (multiSelectionMode != "disabled") {
                        changeAllChildren(e as any, !nextCtrlAIsUndo.current ? returnTrue : returnFalse);
                        e.preventDefault();
                        e.stopPropagation();

                        // TODO: This should update in more places
                        nextCtrlAIsUndo.current = !nextCtrlAIsUndo.current;
                    }
                }
            }
        }), { capture: true });

        useGlobalHandler(getDocument(), "keyup", (e: KeyboardEvent) => {
            if (e.key == 'Shift')
                shiftKeyHeld.current = false;
            if (e.key == 'Control')
                ctrlKeyHeld.current = false;
        }, { passive: true, capture: true });

        return {
            context: useMemoObject({
                multiSelectionContext: useMemoObject<UseMultiSelectionContextSelf>({
                    doContiguousSelection,
                    notifyParentOfChildSelectChange,
                    multiSelectionAriaPropName,
                    multiSelectionMode,
                    changeAllChildren,
                    getCtrlKeyDown: useCallback(() => ctrlKeyHeld.current, []),
                    getShiftKeyDown: useCallback(() => shiftKeyHeld.current, []),
                    getAnyFocused
                })
            }),
            childrenHaveFocusParameters: { onCompositeFocusChange },
            multiSelectionReturn: {},
            propsStable: useMemoObject({}) as ElementProps<ParentOrChildElementTag>
        }
    });
}

/**
 * 
 * @compositeParams
 */
export function useMultiSelectionChild<Tag extends keyof JSX.IntrinsicElements>({
    info: { index, ...void4 },
    multiSelectionChildParameters: {
        initiallyMultiSelected,
        onMultiSelectChange,
        multiSelectionDisabled,
        ...void1
    },
    context: {
        multiSelectionContext: {
            notifyParentOfChildSelectChange,
            multiSelectionAriaPropName,
            multiSelectionMode,
            doContiguousSelection,
            changeAllChildren,
            getCtrlKeyDown,
            getShiftKeyDown,
            getAnyFocused,
            ...void5
        },
        ...void3
    },
    ...void2
}: UseMultiSelectionChildParameters<Tag, UseMultiSelectionChildInfo<Tag>>): UseMultiSelectionChildReturnType<Tag, UseMultiSelectionChildInfo<Tag>> {
    return useMonitoring(function useMultiSelectionChild(): UseMultiSelectionChildReturnType<Tag, UseMultiSelectionChildInfo<Tag>> {
        // When we're in focus-selection mode, focusing any child deselects everything and selects JUST that child.
        // But that's really annoying for when you tab into the component, so it's only enabled when you're navigating WITHIN the component
        // (e.g. we only do that "reset everything" selection stuff when the component already had focus and that focus simply moved to a different child)
        // The exception is press events, because a click can come from anywhere, focusing a child even if focus is elsewhere (or the window doesn't even have focus!)
        // So when a press event happens during focus-selection mode, we disable the disabling with this flag.
        const pressFreebie = useRef(false);


        const firePressSelectionEvent = (e: Event) => {
            if (!multiSelectionDisabled) {
                if (multiSelectionMode == "activation") {
                    if ((e as KeyboardEvent).shiftKey) {
                        doContiguousSelection(e as any, index);
                    }
                    else {
                        onMultiSelectChange?.(enhanceEvent(e as any, { multiSelected: !getLocalSelected() }));
                    }
                }
                else {
                    if ((e as KeyboardEvent).ctrlKey) {
                        onMultiSelectChange?.(enhanceEvent(e as any, { multiSelected: !getLocalSelected() }));
                    }
                    else {
                        pressFreebie.current = true;
                        focus(e.currentTarget as any);
                        onCurrentFocusedInnerChanged(true, false, e as any);
                    }
                }
            }
        };

        const [localSelected, setLocalSelected, getLocalSelected] = useState(initiallyMultiSelected ?? false);

        const changeMultiSelected = useStableCallback((e: EventTypeByTag<any, any>, selected: boolean) => {
            console.assert(selected != null);
            if (selected)
                console.assert(!multiSelectionDisabled);
            else
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
                notifyParentOfChildSelectChange(null!, index, getLocalSelected(), undefined);
                return () => notifyParentOfChildSelectChange(null!, index, undefined, getLocalSelected());
            }
        }, [index, multiSelectIsEnabled])

        assertEmptyObject(void1);
        assertEmptyObject(void2);
        assertEmptyObject(void3);
        assertEmptyObject(void4);
        assertEmptyObject(void5);
        const onCurrentFocusedInnerChanged = useStableCallback<OnPassiveStateChange<boolean, FocusEventTypeByTag<any> | undefined>>((focused, prev, event) => {
            if (focused) {
                if (multiSelectionMode == "focus") {
                    let any = getAnyFocused();

                    // Wow, it's the worst selection mode.
                    const subSelectionMode = (getShiftKeyDown() ? "toggle" : getCtrlKeyDown() ? "skip" : "set");
                    let newIndex = index;

                    switch (subSelectionMode) {
                        case "set":
                            if (any || pressFreebie.current) {
                                changeAllChildren(event!, index => (index == newIndex));
                            }
                            break;
                        case "toggle":
                            doContiguousSelection(event!, index);
                            break;
                        case "skip":
                            /* eslint-disable no-debugger */
                            debugger;
                            break;
                    }
                }
            }
            pressFreebie.current = false;
        });

        const setSelectedFromParent = useStableCallback((event: EventTypeByTag<any, any>, multiSelected: boolean) => {
            console.assert(onMultiSelectChange != null);
            onMultiSelectChange?.(enhanceEvent(event, { multiSelected }) as any);
        })

        return {
            multiSelectionChildReturn: {
                changeMultiSelected,
                multiSelected: localSelected,
                getMultiSelected: getLocalSelected,
                multiSelectionMode,
                firePressSelectionEvent
            },
            hasCurrentFocusParameters: {
                onCurrentFocusedInnerChanged
            },
            props: { [multiSelectionAriaPropName || "aria-selected"]: multiSelectionMode == "disabled" ? undefined : (localSelected ? "true" : "false") } as {} as ElementProps<Tag>,
            info: {
                getMultiSelected: getLocalSelected,
                setSelectedFromParent,
                getMultiSelectionDisabled: useStableGetter(multiSelectionDisabled)
            }
        }
    });
}

export interface UseMultiSelectionChildDeclarativeReturnType<Tag extends keyof JSX.IntrinsicElements, M extends UseMultiSelectionChildInfo<Tag>> extends
    TargetedPick<UseMultiSelectionChildParameters<Tag, M>, "multiSelectionChildParameters", "onMultiSelectChange"> {
    info: Pick<M, "setSelectedFromParent">;
}

export interface UseMultiSelectionChildDeclarativeParameters<Tag extends keyof JSX.IntrinsicElements, M extends UseMultiSelectionChildInfo<Tag>> extends
    TargetedPick<UseMultiSelectionChildReturnType<Tag, M>, "multiSelectionChildReturn", "changeMultiSelected"> {
    multiSelectionChildDeclarativeParameters: {
        multiSelected: boolean | null;
        onMultiSelectedChange: Nullable<(e: MultiSelectChildChangeEvent<Tag>) => void>;
    }
}


export type MakeMultiSelectionChildDeclarativeParameters<P extends UseMultiSelectionChildParameters<any, any>> = OmitStrong<P, "multiSelectionChildParameters"> & UseMultiSelectionChildDeclarativeParameters<any, any> & TargetedPick<UseMultiSelectionChildParameters<any, any>, "multiSelectionChildParameters", "multiSelectionDisabled">;
export type MakeMultiSelectionChildDeclarativeReturnType<R extends UseMultiSelectionChildReturnType<any, any>> = OmitStrong<R, "multiSelectionChildReturn"> & TargetedOmit<UseMultiSelectionChildReturnType<any, any>, "multiSelectionChildReturn", "changeMultiSelected">;

/**
 * 
 * @compositeParams
 * 
 * #__NO_SIDE_EFFECTS__
 */
export function useMultiSelectionChildDeclarative<Tag extends keyof JSX.IntrinsicElements>({
    multiSelectionChildDeclarativeParameters: { onMultiSelectedChange, multiSelected, ...void3 },
    multiSelectionChildReturn: { changeMultiSelected, ...void2 },
    ...void1
}: UseMultiSelectionChildDeclarativeParameters<Tag, UseMultiSelectionChildInfo<Tag>>): UseMultiSelectionChildDeclarativeReturnType<Tag, UseMultiSelectionChildInfo<Tag>> {
    let reasonRef = useRef<MultiSelectChildChangeEvent<Tag> | undefined>(undefined);
    useLayoutEffect(() => {
        if (multiSelected != null)
            changeMultiSelected(reasonRef.current!, multiSelected);
    }, [multiSelected]);

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);

    return {
        multiSelectionChildParameters: {
            onMultiSelectChange: useStableCallback((e) => {
                reasonRef.current = e;
                return onMultiSelectedChange?.(e);
            })
        },
        info: {
            setSelectedFromParent: useStableCallback((event: EventTypeByTag<any, any>, multiSelected: boolean) => {
                onMultiSelectedChange?.(enhanceEvent(event, { multiSelected }) as MultiSelectChildChangeEvent<Tag>);
            })
        }
    }
}
