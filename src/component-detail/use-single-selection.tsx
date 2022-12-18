
import { h } from "preact";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { UsePressParameters } from "../component-use/use-press";
import { UseChildrenHaveFocusChildReturnType, UseChildrenHaveFocusParameters } from "../observers/use-children-have-focus";
import { useChildrenFlag, UseManagedChildrenReturnType } from "../preact-extensions/use-managed-children";
import { OnPassiveStateChange, PassiveStateUpdater, useEnsureStability } from "../preact-extensions/use-passive-state";
import { UseRovingTabIndexChildInfo, UseRovingTabIndexReturnType } from "./use-roving-tabindex";
//import { usePress, UsePressReturnType } from "./use-press";
import { useStableCallback } from "../preact-extensions/use-stable-callback";
import { useStableGetter, useStableObject } from "../preact-extensions/use-stable-getter";
import { useState } from "../preact-extensions/use-state";
import noop from "lodash-es/noop";

/*
export function useSingleSelectionChildProps<E extends Element>(r: UseSingleSelectionChildReturnTypeInfo<E>, ...otherProps: h.JSX.HTMLAttributes<E>[]): h.JSX.HTMLAttributes<E>[] {
    return [r.singleSelectionChildReturn.propsUnstable, ...otherProps];
}*/

/*
export interface UseSingleSelectionContext {
    singleSelectionReturn: UseSingleSelectionReturnTypeInfo["singleSelectionReturn"];
}*/

/** Anything that's selectable must be tabbable, so we DO use rovingtabindex instead of just managedchildren */
export interface SelectableChildInfo<E extends Element> extends UseRovingTabIndexChildInfo<E> {
    selected: boolean;
    getSelected(): boolean;
    /**
     * The parent calls this to change the child's local state.
     * 
     * When the `selectedIndex` changes, the relevant children's `setLocalSelected` are called (max of 2).
     * 
     * @param selected This is the selected child (out of all of them)
     * @param distance How far to the `selectedIndex` this child is
     */
    setLocalDirection(direction: number | null): void;

    /**
     * This is similar to `hidden` for `useRovingTabIndex`, but for selection.
     * 
     * Disables selecting this child. Being `hidden` must imply being `disabled`, but you can of course have something that's disabled (unselectable) but not hidden (untabbable).
     */
    disabled: boolean;
}



export interface UseSingleSelectionParameters<ChildElement extends Element> {
    managedChildrenReturn: Pick<UseManagedChildrenReturnType<SelectableChildInfo<ChildElement>>["managedChildrenReturn"], "getChildren">;
    rovingTabIndexReturn: Pick<UseRovingTabIndexReturnType<ChildElement>["rovingTabIndexReturn"], "setTabbableIndex">
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
        onSelectedIndexChange: null | ((index: number | null, reason: Event | undefined) => void);

    }
}

export interface UseSingleSelectionChildParameters<E extends Element> {
    //managedChildParameters: Pick<UseManagedChildParameters<SelectableChildInfo<E>, never>["managedChildParameters"], "index" | "disabled">;
    singleSelectionContext: UseSingleSelectionReturnType<E>["singleSelectionContext"];
    singleSelectionChildParameters: {
        //onDistanceChange: null | ((distance: number) => void);
        selectionMode: "focus" | "activation" | "disabled";
        ariaPropName: `aria-${"pressed" | "selected" | "checked"}` | null;
    } & Pick<SelectableChildInfo<E>, "disabled">;
    managedChildParameters: Pick<SelectableChildInfo<E>, "index">;
}

export interface UseSingleSelectionChildReturnType<E extends Element> extends UseChildrenHaveFocusChildReturnType<E> {
    singleSelectionChildReturn: {
        // These two are already available as managedChild info,
        // but we're keeping them because RTI does the same thing, and it's convenient.
        selected: boolean,
        getSelected(): boolean;

        /**
         * Any time `selected` changes to or from being visible, this will represent the direction and magnitude of the change.
         * 
         * It will never be zero; when `selected` is `true`, then this will be the most recently-used offset.
         */
        selectedOffset: number | null;
        getSelectedOffset: () => (number | null);
        /**
         * Returns the distance from this child to the selected child.
         * 
         * **Stable**, and can be called during render.
         */
        //getDistance(): number;
        // Used to programmatically set this as the selected element;
        // it requests the parent to actually change the numeric index to this one's.
        setThisOneSelected: (event: Event) => void;
        propsUnstable: h.JSX.HTMLAttributes<E>;
    }
    //refElementParameters: Required<Pick<UseRefElementParameters<E>["refElementParameters"], "onElementChange">>;
    managedChildParameters: Pick<SelectableChildInfo<E>, "setLocalDirection">;
    //managedChildParameters: Pick<UseManagedChildParameters<SelectableChildInfo<E>, never>["managedChildParameters"], "selected" | "setSelected" | "getSelected">;
    pressParameters: Pick<UsePressParameters<E>["pressParameters"], "onPressSync">;
}

//export interface UseSingleSelectionChildReturnTypeWithHooks<E extends Element> extends UseSingleSelectionChildReturnTypeInfo<E> {}

export interface UseSingleSelectionReturnType<ChildElement extends Element> {
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
    singleSelectionContext: {
        onSelectedIndexChange: UseSingleSelectionParameters<ChildElement>["singleSelectionParameters"]["onSelectedIndexChange"] //PassiveStateUpdater<number | null, Event> | null; 
        getSelectedIndex(): number | null;
    }
    childrenHaveFocusParameters: Pick<UseChildrenHaveFocusParameters<ChildElement>["childrenHaveFocusParameters"], "onCompositeFocusChange">
}



//export type UseSingleSelectionChild<E extends Element> = (a: UseSingleSelectionChildParameters<E>) => UseSingleSelectionChildReturnTypeWithHooks<E>;

export function useSingleSelection<ChildElement extends Element>({
    managedChildrenReturn: { getChildren },
    rovingTabIndexReturn: { setTabbableIndex },
    singleSelectionParameters: { onSelectedIndexChange: onSelectedIndexChange_U, initiallySelectedIndex }
}: UseSingleSelectionParameters<ChildElement>): UseSingleSelectionReturnType<ChildElement> {
    type R = Event;//h.JSX.TargetedEvent<ChildElement>;
    const onSelectedIndexChange = useStableCallback(onSelectedIndexChange_U ?? noop);
    //useEnsureStability("useSingleSelection", onSelectedIndexChange);

    const getSelectedAt = useCallback((m: SelectableChildInfo<ChildElement>) => { return m.getSelected(); }, []);
    const setSelectedAt = useCallback((m: SelectableChildInfo<ChildElement>, t: boolean, newSelectedIndex: number | null, prevSelectedIndex: number | null) => {
        if (m.hidden) {
            console.assert(false);
        }
        const directionComparison = (newSelectedIndex == m.index? prevSelectedIndex : newSelectedIndex);
        const direction = (directionComparison == null ? null : (m.index - directionComparison));
        if (newSelectedIndex == null)
            console.assert(t == false);
        if (t)
            console.assert(newSelectedIndex === m.index);

        m.setLocalDirection(direction);
    }, []);
    const isSelectedValid = useCallback((m: SelectableChildInfo<ChildElement>) => { return !m.hidden; }, []);

    const {
        changeIndex: changeSelectedIndex,
        getCurrentIndex: getSelectedIndex
    } = useChildrenFlag<SelectableChildInfo<ChildElement>, R>({
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
        singleSelectionContext: useStableObject({
            getSelectedIndex,
            onSelectedIndexChange: onSelectedIndexChange
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


export function useSingleSelectionChild<ChildElement extends Element>(args: UseSingleSelectionChildParameters<ChildElement>): UseSingleSelectionChildReturnType<ChildElement> {
    type R = Event;//h.JSX.TargetedEvent<ChildElement>;
    const {

        singleSelectionContext: { getSelectedIndex, onSelectedIndexChange },
        singleSelectionChildParameters: { ariaPropName, selectionMode, disabled },
        managedChildParameters: { index }
    } = args;

    //let lastRecordedDistance = useRef(0);
    useEnsureStability("useSingleSelectionChild", getSelectedIndex, onSelectedIndexChange);
    const getDisabled = useStableGetter(disabled);

    const [selected, setSelected, getSelected] = useState(getSelectedIndex() == index);
    const [direction, setDirection, getDirection] = useState(getSelectedIndex() == null? null : (getSelectedIndex()! - index));
    //const [selected, setSelected, getSelected] = useState(getSelectedIndex() == index);

    // const getIndex = useStableGetter(index);

    const onCurrentFocusedInnerChanged = useStableCallback<OnPassiveStateChange<boolean, R>>((focused, _prev, e) => {
        if (selectionMode == 'focus' && focused) {
            onSelectedIndexChange?.(index, e);
        }
    });

    const onPressSync = useStableCallback(((e: Event) => {
        if (selectionMode == "disabled")
            return;
        if (!disabled)
            onSelectedIndexChange?.(index, e as R);
    }));

    return {
        //managedChildParameters: { selected, setSelected, getSelected, },
        managedChildParameters: { setLocalDirection: useStableCallback((direction) => {
            if (direction == null) {
                setSelected(false);
                setDirection(null);
            }
            else if (direction == 0) {
                setSelected(true);
            }
            else {
                setSelected(false);
                setDirection(direction);
            }
        }) },
        singleSelectionChildReturn: {
            selected: (direction === 0),
            setThisOneSelected: useStableCallback((event) => {
                console.assert(!getDisabled());
                onSelectedIndexChange?.(index, event as R);
            }),
            getSelectedOffset: getDirection,
            selectedOffset: direction,
            getSelected,
            //getDistance: useCallback(() => { return lastRecordedDistance.current; }, []),
            propsUnstable: ariaPropName == null || selectionMode == "disabled" ? {} : { [ariaPropName as keyof h.JSX.HTMLAttributes<any>]: (selected ?? false).toString() }
        },
        pressParameters: { onPressSync },
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged }
    }
}



export interface UseSingleSelectionDeclarativeParameters {
    singleSelectionDeclarativeParameters: { selectedIndex: number | null }
    singleSelectionReturn: Pick<UseSingleSelectionReturnType<any>["singleSelectionReturn"], "changeSelectedIndex">;
}

export type MakeSingleSelectionDeclarativeParameters<P> = Omit<P, "singleSelectionParameters"> & UseSingleSelectionDeclarativeParameters;
export type MakeSingleSelectionDeclarativeReturnType<R> = Omit<R, "singleSelectionReturn">;

/**
 * Let's face it, declarative is nicer to use than imperative, so this is a shortcut.
 */
export function useSingleSelectionDeclarative({ singleSelectionReturn: { changeSelectedIndex }, singleSelectionDeclarativeParameters: { selectedIndex } }: UseSingleSelectionDeclarativeParameters) {
    useEffect(() => {
        changeSelectedIndex(selectedIndex);
    }, [selectedIndex]);
}


