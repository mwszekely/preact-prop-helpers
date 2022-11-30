
import { h } from "preact";
import { useCallback, useEffect } from "preact/hooks";
import { UsePressParameters } from "../component-use/use-press";
import { UseChildrenHaveFocusChildReturnType, UseChildrenHaveFocusParameters } from "../observers/use-children-have-focus";
import { useChildrenFlag, UseManagedChildrenReturnType } from "../preact-extensions/use-child-manager";
import { OnPassiveStateChange, PassiveStateUpdater, useEnsureStability } from "../preact-extensions/use-passive-state";
import { UseRovingTabIndexChildInfo, UseRovingTabIndexReturnType } from "./use-roving-tabindex";
//import { usePress, UsePressReturnType } from "./use-press";
import { useStableCallback } from "../preact-extensions/use-stable-callback";
import { useStableGetter, useStableObject } from "../preact-extensions/use-stable-getter";
import { useState } from "../preact-extensions/use-state";

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
    setLocalSelected(selected: boolean): void;

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
        //selectedIndex: number | null | undefined;
        /**
         * Called when a child is selected (via a press or other method).
         * 
         * `singleSelectionReturn` returns a function with the same name that can be plugged in here
         * to make this component imperative, or you can use `useEffect` to set some state
         * on your end that does something else.
         * 
         * In general, this should only be `null` when single selection is entirely disabled.
         * 
         * In any case, **MUST** be stable!!
         */
        setSelectedIndex: null | PassiveStateUpdater<number | null, Event>;

    }
}

export interface UseSingleSelectionChildParameters<E extends Element> {
    //managedChildParameters: Pick<UseManagedChildParameters<SelectableChildInfo<E>, never>["managedChildParameters"], "index" | "disabled">;
    singleSelectionContext: UseSingleSelectionReturnType<E>["singleSelectionContext"];
    singleSelectionChildParameters: {
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
        // Used to programmatically set this as the selected element;
        // it requests the parent to actually change the numeric index to this one's.
        setThisOneSelected: (event: Event) => void;
        propsUnstable: h.JSX.HTMLAttributes<E>;
    }
    //refElementParameters: Required<Pick<UseRefElementParameters<E>["refElementParameters"], "onElementChange">>;
    managedChildParameters: Pick<SelectableChildInfo<E>, "setLocalSelected">;
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
        setSelectedIndex: PassiveStateUpdater<number | null, Event>;
        getSelectedIndex(): number | null;
    }
    singleSelectionContext: { setSelectedIndex: PassiveStateUpdater<number | null, Event> | null; getSelectedIndex(): number | null; }
    childrenHaveFocusParameters: Pick<UseChildrenHaveFocusParameters<ChildElement>["childrenHaveFocusParameters"], "onCompositeFocusChange">
}



//export type UseSingleSelectionChild<E extends Element> = (a: UseSingleSelectionChildParameters<E>) => UseSingleSelectionChildReturnTypeWithHooks<E>;

export function useSingleSelection<ChildElement extends Element>({
    managedChildrenReturn: { getChildren },
    rovingTabIndexReturn: { setTabbableIndex },
    singleSelectionParameters: { setSelectedIndex: setSelectedIndexExternal, initiallySelectedIndex }
}: UseSingleSelectionParameters<ChildElement>): UseSingleSelectionReturnType<ChildElement> {
    type R = Event;//h.JSX.TargetedEvent<ChildElement>;
    useEnsureStability("useSingleSelection", setSelectedIndexExternal);

    const getSelectedAt = useCallback((m: SelectableChildInfo<ChildElement>) => { return m.getSelected(); }, []);
    const setSelectedAt = useCallback((m: SelectableChildInfo<ChildElement>, t: boolean) => {
        if (m.hidden) {
            console.assert(false);
        }
        m.setLocalSelected(t);
    }, []);
    const isSelectedValid = useCallback((m: SelectableChildInfo<ChildElement>) => { return !m.hidden; }, []);

    const {
        changeIndex: setSelectedIndexInternal,
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
            setSelectedIndex: setSelectedIndexInternal
        }),
        singleSelectionContext: useStableObject({
            getSelectedIndex,
            setSelectedIndex: setSelectedIndexExternal
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

        singleSelectionContext: { getSelectedIndex, setSelectedIndex: setSelectedIndexExternal },
        singleSelectionChildParameters: { ariaPropName, selectionMode, disabled },
        managedChildParameters: { index }
    } = args;

    useEnsureStability("useSingleSelectionChild", getSelectedIndex, setSelectedIndexExternal);
    const getDisabled = useStableGetter(disabled);

    const [selected, setSelected, getSelected] = useState(getSelectedIndex() == index);

   // const getIndex = useStableGetter(index);

    const onCurrentFocusedInnerChanged = useStableCallback<OnPassiveStateChange<boolean, R>>((focused, _prev, e) => {
        if (selectionMode == 'focus' && focused) {
            setSelectedIndexExternal?.(index, e);
        }
    });

    const onPressSync = useStableCallback(((e: Event) => {
        if (!disabled)
            setSelectedIndexExternal?.(index, e as R);
    }));

    return {
        //managedChildParameters: { selected, setSelected, getSelected, },
        managedChildParameters: { setLocalSelected: setSelected },
        singleSelectionChildReturn: {
            selected,
            setThisOneSelected: useStableCallback((event) => {
                console.assert(!getDisabled());
                setSelectedIndexExternal?.(index, event as R);
            }),
            getSelected,
            propsUnstable: ariaPropName == null ? {} : { [ariaPropName as keyof h.JSX.HTMLAttributes<any>]: (selected ?? false).toString() }
        },
        pressParameters: { onPressSync },
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged }
    }
}



export interface UseSingleSelectionDeclarativeParameters {
    singleSelectionDeclarativeParameters: { selectedIndex: number | null }
    singleSelectionReturn: Pick<UseSingleSelectionReturnType<any>["singleSelectionReturn"], "setSelectedIndex">;
}

export type MakeSingleSelectionDeclarativeParameters<P> = Omit<P, "singleSelectionParameters"> & UseSingleSelectionDeclarativeParameters;
export type MakeSingleSelectionDeclarativeReturnType<R> = Omit<R, "singleSelectionReturn">;

/**
 * Let's face it, declarative is nicer to use than imperative, so this is a shortcut.
 */
export function useSingleSelectionDeclarative({ singleSelectionReturn: { setSelectedIndex: setSelectedIndexInternal }, singleSelectionDeclarativeParameters: { selectedIndex } }: UseSingleSelectionDeclarativeParameters) {
    useEffect(() => {
        setSelectedIndexInternal(selectedIndex);
    }, [selectedIndex]);
}


