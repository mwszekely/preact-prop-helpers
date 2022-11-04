
import { h } from "preact";
import { StateUpdater, useCallback } from "preact/hooks";
import { OnPassiveStateChange, PassiveStateUpdater, useEnsureStability } from "./use-passive-state";
import { UsePressParameters } from "./use-press";
import { UseRovingTabIndexChildInfo, UseRovingTabIndexReturnType } from "./use-roving-tabindex";
import { useChildrenFlag, UseManagedChildParameters, UseManagedChildrenReturnType } from "./use-child-manager";
import { UseChildrenHaveFocusChildReturnType, UseChildrenHaveFocusParameters } from "./use-children-have-focus";
//import { usePress, UsePressReturnType } from "./use-press";
import { useStableCallback } from "./use-stable-callback";
import { useStableGetter, useStableObject } from "./use-stable-getter";
import { useState } from "./use-state";

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
    setSelected(selected: boolean): void;

    /**
     * This is similar to `hidden` for `useRovingTabIndex`, but for selection.
     * 
     * Disables selecting this child. Being `hidden` implies being `disabled`, but usually if it's `display: none` or whatever it already isn't receiving press events anyway. Still good to keep them aligned though.
     */
    disabled: boolean;
}



export interface UseSingleSelectionParameters<ChildElement extends Element> {
    managedChildrenReturn: Pick<UseManagedChildrenReturnType<SelectableChildInfo<ChildElement>>["managedChildrenReturn"], "getChildren">;
    rovingTabIndexReturn: Pick<UseRovingTabIndexReturnType<ChildElement>["rovingTabIndexReturn"], "setTabbableIndex">
    singleSelectionParameters: {
        initiallySelectedIndex: number | null;
        onSelectedIndexChange: OnPassiveStateChange<number | null>;

    }
}

export interface UseSingleSelectionChildParameters<E extends Element> {
    managedChildParameters: Pick<UseManagedChildParameters<SelectableChildInfo<E>>["managedChildParameters"], "index" | "disabled">;
    singleSelectionContext: UseSingleSelectionReturnType["singleSelectionContext"];
    singleSelectionChildParameters: {
        selectionMode: "focus" | "activation" | "disabled";
        ariaPropName: `aria-${"pressed" | "selected" | "checked"}` | null;
    }
}

export interface UseSingleSelectionChildReturnTypeInfo<E extends Element> extends UseChildrenHaveFocusChildReturnType<E> {
    singleSelectionChildReturn: {
        // These two are already available as managedChild info,
        // but we're keeping them because RTI does the same thing, and it's convenient.
        selected: boolean,
        getSelected(): boolean;
        // Used to programmatically set this as the selected element;
        // it requests the parent to actually change the numeric index to this one's.
        setSelected: () => void;
        propsUnstable: h.JSX.HTMLAttributes<E>;
    }
    //refElementParameters: Required<Pick<UseRefElementParameters<E>["refElementParameters"], "onElementChange">>;
    managedChildParameters: Pick<UseManagedChildParameters<SelectableChildInfo<E>>["managedChildParameters"], "selected" | "setSelected" | "getSelected">;
    pressParameters: Pick<UsePressParameters<E, never>["pressParameters"], "onPressSync">;
}

export interface UseSingleSelectionChildReturnTypeWithHooks<E extends Element> extends UseSingleSelectionChildReturnTypeInfo<E> {
}

export interface UseSingleSelectionReturnType {
    singleSelectionReturn: {
        setSelectedIndex: PassiveStateUpdater<number | null>;
        getSelectedIndex(): number | null;
    }
    singleSelectionContext: { setSelectedIndex: PassiveStateUpdater<number | null>; getSelectedIndex(): number | null; }
    childrenHaveFocusParameters: Pick<UseChildrenHaveFocusParameters["childrenHaveFocusParameters"], "onCompositeFocusChange">
}



export type UseSingleSelectionChild<E extends Element> = (a: UseSingleSelectionChildParameters<E>) => UseSingleSelectionChildReturnTypeWithHooks<E>;

export function useSingleSelection<ChildElement extends Element>({
    managedChildrenReturn: { getChildren },
    rovingTabIndexReturn: { setTabbableIndex },
    singleSelectionParameters: { onSelectedIndexChange, initiallySelectedIndex }
}: UseSingleSelectionParameters<ChildElement>): UseSingleSelectionReturnType {

    useEnsureStability("useSingleSelection", onSelectedIndexChange);



    const getSelectedAt = useCallback((m: SelectableChildInfo<ChildElement>) => { return m.getSelected(); }, []);
    const setSelectedAt = useCallback((m: SelectableChildInfo<ChildElement>, t: boolean) => {
        if (m.hidden) {
            console.assert(false);
        }
        m.setSelected(t);
    }, []);
    const isSelectedValid = useCallback((m: SelectableChildInfo<ChildElement>) => { return !m.hidden; }, []);

    const {
        changeIndex: setSelectedIndex,
        getCurrentIndex: getSelectedIndex
    } = useChildrenFlag<SelectableChildInfo<ChildElement>>({
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
            onCompositeFocusChange: useStableCallback((anyFocused: boolean) => {
                if (!anyFocused) {
                    const selectedIndex = getSelectedIndex();
                    if (selectedIndex != null)
                        setTabbableIndex(selectedIndex, false);
                }
            })
        }
    }
}


export function useSingleSelectionChild<ChildElement extends Element>(args: UseSingleSelectionChildParameters<ChildElement>): UseSingleSelectionChildReturnTypeWithHooks<ChildElement> {
    const {
        managedChildParameters: { index, disabled },
        singleSelectionContext: { getSelectedIndex, setSelectedIndex },
        singleSelectionChildParameters: { ariaPropName, selectionMode },
    } = args;

    const [selected, setSelected, getSelected] = useState(getSelectedIndex() == index);

    const getIndex = useStableGetter(index);

    const onCurrentFocusedInnerChanged = useStableCallback((focused: boolean, _prev: boolean | undefined) => {
        if (selectionMode == 'focus' && focused) {
            setSelectedIndex(getIndex());
        }
    });

    const onPressSync = useStableCallback((() => {
        if (!disabled)
            setSelectedIndex(getIndex());
    }));

    return {
        managedChildParameters: { selected, setSelected, getSelected, },
        singleSelectionChildReturn: { selected, setSelected: useCallback(() => { setSelectedIndex(getIndex()) }, []), getSelected, propsUnstable: { [ariaPropName as keyof h.JSX.HTMLAttributes<any>]: (selected ?? false).toString() } },
        pressParameters: { onPressSync },
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged }
    }
}

