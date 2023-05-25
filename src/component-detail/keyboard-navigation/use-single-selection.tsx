
import { noop } from "lodash-es";
import { useCallback, useEffect } from "preact/hooks";
import { UseChildrenHaveFocusChildReturnType, UseChildrenHaveFocusParameters } from "../../observers/use-children-have-focus.js";
import { UseManagedChildrenReturnType, useChildrenFlag } from "../../preact-extensions/use-managed-children.js";
import { OnPassiveStateChange, PassiveStateUpdater, useEnsureStability } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useStableGetter, useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { useState } from "../../preact-extensions/use-state.js";
import { ElementProps } from "../../util/types.js";
import { monitorCallCount } from "../../util/use-call-count.js";
import { UseRovingTabIndexChildInfo, UseRovingTabIndexReturnType } from "./use-roving-tabindex.js";
import { EnhancedEventHandler, TargetedEnhancedEvent, enhanceEvent } from "../../util/event.js";


/** Anything that's selectable must be tabbable, so we DO use rovingtabindex instead of just managedchildren */
export interface UseSingleSelectionChildInfo<E extends Element> extends UseRovingTabIndexChildInfo<E> {
    selected: boolean;
    getSelected(): boolean;
    /**
     * The parent calls this to change the child's local state.
     * 
     * When the `selectedIndex` changes, the relevant children's `setLocalSelected` are called (max of 2).
     * 
     * @param selected This is the selected child (out of all of them)
     * @param direction How far to the `selectedIndex` this child is
     */
    setLocalSelected(selected: boolean, direction: number | null): void;

    /**
     * This is similar to `untabbable` for `useRovingTabIndex`, but for selection.
     * 
     * Disables selecting this child. Being `untabbable` must imply being `unselectable`, but you can of course have something that's unselectable but not untabbable.
     */
    unselectable: boolean;
}

//export interface UseSingleSelectionChildInfo<ChildElement extends Element> extends UseRovingTabIndexChildInfo<ChildElement> {}

export type SelectedIndexChangeHandler = EnhancedEventHandler<Event, { selectedIndex: number }>;
export type SelectedIndexChangeEvent = TargetedEnhancedEvent<Event, { selectedIndex: number }>;

export interface UseSingleSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseSingleSelectionChildInfo<ChildElement>> {
    managedChildrenReturn: Pick<UseManagedChildrenReturnType<UseSingleSelectionChildInfo<ChildElement>>["managedChildrenReturn"], "getChildren">;
    rovingTabIndexReturn: Pick<UseRovingTabIndexReturnType<ParentOrChildElement, ChildElement, M>["rovingTabIndexReturn"], "setTabbableIndex">
    singleSelectionParameters: {
        /**
         * This is imperative, as opposed to declarative, 
         * to save on re-rendering the parent whenever the selected index changes.
         */
        initiallySelectedIndex: number | null;

        /**
         * Called when a child is selected (via a press or other method).
         * 
         * If this component is declaratively controlled (with e.g. `useSingleSelectionDeclarative`),
         * then you should use this to `setState` somewhere that'll change your `selectedIndex`.
         * 
         * If this component is imperatively controlled, then you should hook this up to the
         * returned `changeSelectedIndex` function to have the desired change occur.
         * 
         * In general, this should only be `null` when single selection is entirely disabled.
         */
        onSelectedIndexChange: null | SelectedIndexChangeHandler; // ((index: number | null, reason: Event | undefined) => void);


        selectionMode: "focus" | "activation" | "disabled";

        /**
         * What property will be used to mark this item as selected.
         * 
         * **IMPORTANT**: The `aria-current` options should be used with caution as they are semantically very different from the usual selection cases.
         */
        ariaPropName: `aria-${"pressed" | "selected" | "checked" | `current-${"page" | "step" | "date" | "time" | "location" | "true"}`}` | null;

    }
}

export type UseSingleSelectionChildInfoKeys = "index" | "unselectable";

export interface UseSingleSelectionChildParameters<E extends Element, M extends UseSingleSelectionChildInfo<E>> {
    context: UseSingleSelectionContext;
    info: Pick<UseSingleSelectionChildInfo<E>, UseSingleSelectionChildInfoKeys>;
    singleSelectionParameters: Pick<UseSingleSelectionParameters<any, E, M>["singleSelectionParameters"], "ariaPropName" | "selectionMode">;
}

export interface UseSingleSelectionChildReturnType<E extends Element> extends UseChildrenHaveFocusChildReturnType<E> {
    props: ElementProps<E>;

    info: Pick<UseSingleSelectionChildInfo<E>, "getSelected" | "setLocalSelected" | "selected">;

    singleSelectionChildReturn: {
        // These two are already available as managedChild info,
        // but we're keeping them because RTI does the same thing, and it's convenient.
        selected: boolean,
        getSelected(): boolean;

        /**
         * Any time `selected` changes to or from being visible, this will represent the direction and magnitude of the change.
         * 
         * It will never be zero; when `selected` is `true`, then this will be the most recently-used offset.
         * 
         * This useful for things like animations or transitions.
         */
        selectedOffset: number | null;
        getSelectedOffset: () => (number | null);

        // Used to programmatically set this as the selected element;
        // it requests the parent to actually change the numeric index to this one's.
        setThisOneSelected: (event: Event) => void;
    }
}

export interface UseSingleSelectionReturnType<ChildElement extends Element, M extends UseSingleSelectionChildInfo<ChildElement>> {
    singleSelectionReturn: {
        /**
         * A function that, when called, internally updates the selected index to the one you provide,
         * and tells the relevant children that they are/are not selected.
         * 
         * If you are creating an imperative component, this is what how you can force the value to change in response to something.
         * 
         * If you are creating a declarative component, this is what you call in `useEffect` when your `selectedIndex` changes.
         */
        changeSelectedIndex: PassiveStateUpdater<number | null, Event>;
        getSelectedIndex(): number | null;
    }
    context: UseSingleSelectionContext;
    childrenHaveFocusParameters: Pick<UseChildrenHaveFocusParameters<ChildElement>["childrenHaveFocusParameters"], "onCompositeFocusChange">
}

export interface UseSingleSelectionContext {
    singleSelectionContext: {
        onSelectedIndexChange: UseSingleSelectionParameters<any, any, any>["singleSelectionParameters"]["onSelectedIndexChange"];
        getSelectedIndex(): number | null;
    }
}


export function useSingleSelection<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseSingleSelectionChildInfo<ChildElement>>({
    managedChildrenReturn: { getChildren },
    rovingTabIndexReturn: { setTabbableIndex },
    singleSelectionParameters: { onSelectedIndexChange: onSelectedIndexChange_U, initiallySelectedIndex, ariaPropName, selectionMode }
}: UseSingleSelectionParameters<ParentOrChildElement, ChildElement, M>): UseSingleSelectionReturnType<ChildElement, M> {
    monitorCallCount(useSingleSelection);

    type R = Event;
    const onSelectedIndexChange = useStableCallback(onSelectedIndexChange_U ?? noop);

    const getSelectedAt = useCallback((m: UseSingleSelectionChildInfo<ChildElement>) => { return m.getSelected(); }, []);
    const setSelectedAt = useCallback((m: UseSingleSelectionChildInfo<ChildElement>, t: boolean, newSelectedIndex: number | null, prevSelectedIndex: number | null) => {
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
    const isSelectedValid = useCallback((m: UseSingleSelectionChildInfo<ChildElement>) => { return !m.unselectable; }, []);

    const {
        changeIndex: changeSelectedIndex,
        getCurrentIndex: getSelectedIndex
    } = useChildrenFlag<UseSingleSelectionChildInfo<ChildElement>, R>({
        getChildren,
        onIndexChange: null,
        initialIndex: initiallySelectedIndex,
        getAt: getSelectedAt,
        setAt: setSelectedAt,
        isValid: isSelectedValid,
        closestFit: false
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
    }
}


export function useSingleSelectionChild<ChildElement extends Element, M extends UseSingleSelectionChildInfo<ChildElement>>(args: UseSingleSelectionChildParameters<ChildElement, M>): UseSingleSelectionChildReturnType<ChildElement> {
    monitorCallCount(useSingleSelectionChild);
    type R = Event;
    const {
        context: { singleSelectionContext: { getSelectedIndex, onSelectedIndexChange } },
        info: { index, unselectable },
        singleSelectionParameters: { ariaPropName, selectionMode },
    } = args;

    useEnsureStability("useSingleSelectionChild", getSelectedIndex, onSelectedIndexChange);
    const getUnselectable = useStableGetter(unselectable);

    const [localSelected, setLocalSelected, getLocalSelected] = useState(getSelectedIndex() == index);
    const [direction, setDirection, getDirection] = useState(getSelectedIndex() == null ? null : (getSelectedIndex()! - index));

    const onCurrentFocusedInnerChanged = useStableCallback<OnPassiveStateChange<boolean, R>>((focused, _prev, e) => {
        if (selectionMode == 'focus' && focused) {
            onSelectedIndexChange?.(enhanceEvent(e!, { selectedIndex: index }));
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
            setThisOneSelected: useStableCallback((event) => {
                console.assert(!getUnselectable());
                if (selectionMode == "disabled")
                    return;
                if (!unselectable)
                    onSelectedIndexChange?.(enhanceEvent(event, { selectedIndex: index }));
            }),
            getSelectedOffset: getDirection,
            selectedOffset: direction,
            getSelected: getLocalSelected
        },
        props: ariaPropName == null || selectionMode == "disabled" ? {} : {
            [`${propParts[0]}-${propParts[1]}`]: (localSelected ? (propParts[1] == "current" ? `${propParts[2]}` : `true`) : "false")
        },
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged }
    }
}



export interface UseSingleSelectionDeclarativeParameters {
    singleSelectionDeclarativeParameters: { selectedIndex: number | null, onSelectedIndexChange: null | EnhancedEventHandler<Event, { selectedIndex: number }> }
    singleSelectionReturn: Pick<UseSingleSelectionReturnType<any, any>["singleSelectionReturn"], "changeSelectedIndex">;
}

export type MakeSingleSelectionDeclarativeParameters<P> = Omit<P, "singleSelectionParameters"> & UseSingleSelectionDeclarativeParameters & { singleSelectionParameters: Pick<UseSingleSelectionParameters<any, any, any>["singleSelectionParameters"], "ariaPropName" | "selectionMode"> };
export type MakeSingleSelectionDeclarativeReturnType<R> = Omit<R, "singleSelectionReturn">;

/**
 * Let's face it, declarative is nicer to use than imperative, so this is a shortcut.
 */
export function useSingleSelectionDeclarative<ParentOrChildElement extends Element, ChildElement extends Element, _M extends UseSingleSelectionChildInfo<ChildElement>>({ singleSelectionReturn: { changeSelectedIndex }, singleSelectionDeclarativeParameters: { selectedIndex, onSelectedIndexChange } }: UseSingleSelectionDeclarativeParameters) {
    useEffect(() => {
        changeSelectedIndex(selectedIndex);
    }, [selectedIndex]);

    return { singleSelectionParameters: { onSelectedIndexChange } satisfies Pick<UseSingleSelectionParameters<ParentOrChildElement, ChildElement, any>["singleSelectionParameters"], "onSelectedIndexChange"> }
}


