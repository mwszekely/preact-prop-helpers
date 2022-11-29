
import { h } from "preact";
import { useCallback } from "preact/hooks";
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



export interface UseSingleSelectionParameters<ChildElement extends Element, R extends h.JSX.TargetedFocusEvent<ChildElement>> {
    managedChildrenReturn: Pick<UseManagedChildrenReturnType<SelectableChildInfo<ChildElement>>["managedChildrenReturn"], "getChildren">;
    rovingTabIndexReturn: Pick<UseRovingTabIndexReturnType<ChildElement, R>["rovingTabIndexReturn"], "setTabbableIndex">
    singleSelectionParameters: {
        /**
         * This is imperative, as opposed to declarative, 
         * to save on re-rendering the parent whenever the selected index changes.
         */
        initiallySelectedIndex: number | null;
        /**
         * In general, this should only be `null` when single selection is entirely disabled.
         * 
         * In either case, **MUST** be stable!!
         */
        onSelectedIndexChange: null | OnPassiveStateChange<number | null, R>;

    }
}

export interface UseSingleSelectionChildParameters<E extends Element, R extends h.JSX.TargetedFocusEvent<E>> {
    //managedChildParameters: Pick<UseManagedChildParameters<SelectableChildInfo<E>, never>["managedChildParameters"], "index" | "disabled">;
    singleSelectionContext: UseSingleSelectionReturnType<E, R>["singleSelectionContext"];
    singleSelectionChildParameters: {
        selectionMode: "focus" | "activation" | "disabled";
        ariaPropName: `aria-${"pressed" | "selected" | "checked"}` | null;
    } & Pick<SelectableChildInfo<E>, "disabled">;
    managedChildParameters: Pick<SelectableChildInfo<E>, "index">;
}

export interface UseSingleSelectionChildReturnType<E extends Element, R extends h.JSX.TargetedFocusEvent<E>> extends UseChildrenHaveFocusChildReturnType<E, R> {
    singleSelectionChildReturn: {
        // These two are already available as managedChild info,
        // but we're keeping them because RTI does the same thing, and it's convenient.
        selected: boolean,
        getSelected(): boolean;
        // Used to programmatically set this as the selected element;
        // it requests the parent to actually change the numeric index to this one's.
        setThisOneSelected: (event: h.JSX.TargetedEvent<E, Event>) => void;
        propsUnstable: h.JSX.HTMLAttributes<E>;
    }
    //refElementParameters: Required<Pick<UseRefElementParameters<E>["refElementParameters"], "onElementChange">>;
    managedChildParameters: Pick<SelectableChildInfo<E>, "setLocalSelected">;
    //managedChildParameters: Pick<UseManagedChildParameters<SelectableChildInfo<E>, never>["managedChildParameters"], "selected" | "setSelected" | "getSelected">;
    pressParameters: Pick<UsePressParameters<E>["pressParameters"], "onPressSync">;
}

//export interface UseSingleSelectionChildReturnTypeWithHooks<E extends Element> extends UseSingleSelectionChildReturnTypeInfo<E> {}

export interface UseSingleSelectionReturnType<ChildElement extends Element, R  extends h.JSX.TargetedFocusEvent<ChildElement>> {
    singleSelectionReturn: {
        setSelectedIndex: PassiveStateUpdater<number | null, R>;
        getSelectedIndex(): number | null;
    }
    singleSelectionContext: { setSelectedIndex: PassiveStateUpdater<number | null, R>; getSelectedIndex(): number | null; }
    childrenHaveFocusParameters: Pick<UseChildrenHaveFocusParameters<ChildElement, R>["childrenHaveFocusParameters"], "onCompositeFocusChange">
}



//export type UseSingleSelectionChild<E extends Element> = (a: UseSingleSelectionChildParameters<E>) => UseSingleSelectionChildReturnTypeWithHooks<E>;

export function useSingleSelection<ChildElement extends Element, R extends h.JSX.TargetedFocusEvent<ChildElement>>({
    managedChildrenReturn: { getChildren },
    rovingTabIndexReturn: { setTabbableIndex },
    singleSelectionParameters: { onSelectedIndexChange, initiallySelectedIndex }
}: UseSingleSelectionParameters<ChildElement, R>): UseSingleSelectionReturnType<ChildElement, R> {

    useEnsureStability("useSingleSelection", onSelectedIndexChange);



    const getSelectedAt = useCallback((m: SelectableChildInfo<ChildElement>) => { return m.getSelected(); }, []);
    const setSelectedAt = useCallback((m: SelectableChildInfo<ChildElement>, t: boolean) => {
        if (m.hidden) {
            console.assert(false);
        }
        m.setLocalSelected(t);
    }, []);
    const isSelectedValid = useCallback((m: SelectableChildInfo<ChildElement>) => { return !m.hidden; }, []);

    const {
        changeIndex: setSelectedIndex,
        getCurrentIndex: getSelectedIndex
    } = useChildrenFlag<SelectableChildInfo<ChildElement>, R>({
        getChildren,
        onIndexChange: onSelectedIndexChange,
        initialIndex: initiallySelectedIndex,
        getAt: getSelectedAt,
        setAt: setSelectedAt,
        isValid: isSelectedValid,
        closestFit: false
    });
    const singleSelectionReturn = useStableObject({
        getSelectedIndex,
        setSelectedIndex
    })
    return {
        singleSelectionReturn,
        singleSelectionContext: singleSelectionReturn,
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


export function useSingleSelectionChild<ChildElement extends Element, R  extends h.JSX.TargetedFocusEvent<ChildElement>>(args: UseSingleSelectionChildParameters<ChildElement, R>): UseSingleSelectionChildReturnType<ChildElement, R> {
    const {

        singleSelectionContext: { getSelectedIndex, setSelectedIndex: parentSetSelectedIndex },
        singleSelectionChildParameters: { ariaPropName, selectionMode, disabled },
        managedChildParameters: { index }
    } = args;

    useEnsureStability("useSingleSelectionChild", getSelectedIndex, parentSetSelectedIndex);
    const getDisabled = useStableGetter(disabled);

    const [selected, setSelected, getSelected] = useState(getSelectedIndex() == index);

    const getIndex = useStableGetter(index);

    const onCurrentFocusedInnerChanged = useStableCallback<OnPassiveStateChange<boolean, R>>((focused, _prev, e) => {
        if (selectionMode == 'focus' && focused) {
            parentSetSelectedIndex(getIndex(), e);
        }
    });

    const onPressSync = useStableCallback(((e: h.JSX.TargetedEvent<ChildElement>) => {
        if (!disabled)
            parentSetSelectedIndex(getIndex(), e as  R);
    }));

    return {
        //managedChildParameters: { selected, setSelected, getSelected, },
        managedChildParameters: { setLocalSelected: setSelected },
        singleSelectionChildReturn: {
            selected,
            setThisOneSelected: useCallback((event) => {
                console.assert(!getDisabled());
                parentSetSelectedIndex(getIndex(), event as R);
            }, []),
            getSelected,
            propsUnstable: ariaPropName == null ? {} : { [ariaPropName as keyof h.JSX.HTMLAttributes<any>]: (selected ?? false).toString() }
        },
        pressParameters: { onPressSync },
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged }
    }
}

