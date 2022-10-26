
import { h } from "preact";
import { StateUpdater, useCallback } from "preact/hooks";
import { OnPassiveStateChange, PassiveStateUpdater, useEnsureStability } from "./use-passive-state";
import { UsePressParameters } from "./use-press";
import { UseRovingTabIndexChildInfo, UseRovingTabIndexReturnTypeInfo } from "./use-roving-tabindex";
import { useChildrenFlag, UseManagedChildParameters, UseManagedChildrenReturnTypeInfo } from "./use-child-manager";
import { UseChildrenHaveFocusChildReturnType, UseChildrenHaveFocusParameters } from "./use-children-have-focus";
//import { usePress, UsePressReturnType } from "./use-press";
import { useStableCallback } from "./use-stable-callback";
import { useStableGetter, useStableObject } from "./use-stable-getter";
import { useState } from "./use-state";
import { useMergedProps } from "use-merged-props";

/*
export function useSingleSelectionChildProps<E extends Element>(r: UseSingleSelectionChildReturnTypeInfo<E>, ...otherProps: h.JSX.HTMLAttributes<E>[]): h.JSX.HTMLAttributes<E>[] {
    return [r.singleSelectionChildReturn.propsUnstable, ...otherProps];
}*/

export interface UseSingleSelectionContext {
    singleSelectionReturn: UseSingleSelectionReturnTypeInfo["singleSelectionReturn"];
}

/** Anything that's selectable must be tabbable, so we DO use rovingtabindex instead of just managedchildren */
export interface SelectableChildInfo<E extends Element> extends UseRovingTabIndexChildInfo<E> {
    selected: boolean;
    getSelected(): boolean;
    setSelected: StateUpdater<boolean>;
    hidden: boolean;
}



export interface UseSingleSelectionParameters<ChildElement extends Element> {
    managedChildrenReturn: Pick<UseManagedChildrenReturnTypeInfo<SelectableChildInfo<ChildElement>>["managedChildrenReturn"], "getChildren">;
    rovingTabIndexReturn: Pick<UseRovingTabIndexReturnTypeInfo<ChildElement>["rovingTabIndexReturn"], "setTabbableIndex">
    singleSelectionParameters: {
        initiallySelectedIndex: number | null;
        onSelectedIndexChange: OnPassiveStateChange<number | null>;

    }
}

export interface UseSingleSelectionChildParameters<E extends Element> {
    managedChildParameters: Pick<UseManagedChildParameters<SelectableChildInfo<E>>["managedChildParameters"], "index">;
    singleSelectionReturn: Pick<UseSingleSelectionReturnTypeInfo["singleSelectionReturn"], "getSelectedIndex" | "setSelectedIndex">;
    singleSelectionChildParameters: {
        selectionMode: "focus" | "activation" | "disabled";
        ariaPropName: `aria-${"pressed" | "selected" | "checked"}` | null;
    }
}

export interface UseSingleSelectionChildReturnTypeInfo<E extends Element> extends UseChildrenHaveFocusChildReturnType<E> {
    singleSelectionChildReturn: {
        // These two are already available as managedChild info
        //selected: boolean,
        //getSelected(): boolean;
        propsUnstable: h.JSX.HTMLAttributes<E>;
    }
    //refElementParameters: Required<Pick<UseRefElementParameters<E>["refElementParameters"], "onElementChange">>;
    managedChildParameters: Pick<UseManagedChildParameters<SelectableChildInfo<E>>["managedChildParameters"], "selected" | "setSelected" | "getSelected">;
    pressParameters: Pick<UsePressParameters<E, never>["pressParameters"], "onPressSync">;
}

export interface UseSingleSelectionChildReturnTypeWithHooks<E extends Element> extends UseSingleSelectionChildReturnTypeInfo<E> {
}

export interface UseSingleSelectionReturnTypeInfo {
    singleSelectionReturn: {
        setSelectedIndex: PassiveStateUpdater<number | null>;
        getSelectedIndex(): number | null;
    }
    childrenHaveFocusParameters: Pick<UseChildrenHaveFocusParameters["childrenHaveFocusParameters"], "onCompositeFocusChange">
}

export interface UseSingleSelectionReturnTypeWithHooks extends UseSingleSelectionReturnTypeInfo {
    /** **STABLE** */
    //useSingleSelectionChild: UseSingleSelectionChild<ChildElement>;
}


export type UseSingleSelectionChild<E extends Element> = (a: UseSingleSelectionChildParameters<E>) => UseSingleSelectionChildReturnTypeWithHooks<E>;

export function useSingleSelection<ChildElement extends Element>({
    managedChildrenReturn: { getChildren },
    rovingTabIndexReturn: { setTabbableIndex },
    singleSelectionParameters: { onSelectedIndexChange, initiallySelectedIndex }
}: UseSingleSelectionParameters<ChildElement>): UseSingleSelectionReturnTypeWithHooks {

    useEnsureStability("useSingleSelection", onSelectedIndexChange);



    const getSelectedAt = useCallback((m: SelectableChildInfo<ChildElement>) => { return m.getSelected(); }, []);
    const setSelectedAt = useCallback((m: SelectableChildInfo<ChildElement>, t: boolean) => { m.setSelected(t); }, []);
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

    return {
        singleSelectionReturn: useStableObject({
            getSelectedIndex,
            setSelectedIndex
        }),
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
        managedChildParameters: { index },
        singleSelectionReturn: { getSelectedIndex, setSelectedIndex },
        singleSelectionChildParameters: { ariaPropName, selectionMode },
    } = args;

    const [selected, setSelected, getSelected] = useState(getSelectedIndex() == index);

    const getIndex = useStableGetter(index);

    return {
        managedChildParameters: {
            selected,
            setSelected,
            getSelected,
        },
        singleSelectionChildReturn: {
            propsUnstable: { [ariaPropName as keyof h.JSX.HTMLAttributes<any>]: (selected ?? false).toString() }
        },
        pressParameters: { onPressSync: ((_e) => { setSelectedIndex(getIndex()); }) },
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: useStableCallback((focused: boolean, _prev: boolean | undefined) => {
                if (selectionMode == 'focus' && focused) {
                    setSelectedIndex(getIndex());
                }
            }),
        }
    }
}

