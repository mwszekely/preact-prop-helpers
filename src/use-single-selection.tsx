
import { h } from "preact";
import { StateUpdater, useCallback } from "preact/hooks";
import { OnPassiveStateChange, PassiveStateUpdater, useEnsureStability } from "use-passive-state";
import { UsePressParameters } from "use-press";
import { UseRovingTabIndexChildInfo, UseRovingTabIndexReturnTypeInfo } from "use-roving-tabindex";
import { useChildrenFlag, UseManagedChildParameters, UseManagedChildrenReturnTypeInfo } from "./use-child-manager";
import { UseChildrenHaveFocusChildReturnType, UseChildrenHaveFocusParameters } from "./use-children-have-focus";
//import { usePress, UsePressReturnType } from "./use-press";
import { useStableCallback } from "./use-stable-callback";
import { useStableGetter } from "./use-stable-getter";
import { useState } from "./use-state";

/** Anything that's selectable must be tabbable, so we DO use rovingtabindex instead of just managedchildren */
export interface SelectableChildInfo<E extends Element> extends UseRovingTabIndexChildInfo<E> {
    selected: boolean;
    getSelected(): boolean;
    setSelected: StateUpdater<boolean>;
    hidden: boolean;
}



export interface UseSingleSelectionParameters<ChildElement extends Element, M extends SelectableChildInfo<ChildElement>> {
    managedChildrenReturn: Pick<UseManagedChildrenReturnTypeInfo<M>["managedChildrenReturn"], "getChildren">;
    rovingTabIndexReturn: Pick<UseRovingTabIndexReturnTypeInfo<ChildElement, any>["rovingTabIndexReturn"], "setTabbableIndex">
    singleSelectionParameters: {
        initiallySelectedIndex: number | null;
        onSelectedIndexChange: OnPassiveStateChange<number | null>;

    }
}

export interface UseSingleSelectionChildParameters<E extends Element> {
    managedChildParameters: UseManagedChildParameters<SelectableChildInfo<E>, "selected" | "setSelected" | "getSelected">["managedChildParameters"];
    singleSelectionReturn: Pick<UseSingleSelectionReturnTypeInfo["singleSelectionReturn"], "getSelectedIndex" | "setSelectedIndex">;
    singleSelectionChildParameters: {
        selectionMode: "focus" | "activation" | "disabled";
        ariaPropName: `aria-${"pressed" | "selected" | "checked"}` | null;
    }
}

export interface UseSingleSelectionChildReturnTypeInfo<E extends Element> extends UseChildrenHaveFocusChildReturnType<E> {
    singleSelectionChildReturn: {
        selected: boolean,
        getSelected(): boolean;
        propsUnstable: h.JSX.HTMLAttributes<E>;
    }
    //refElementParameters: Required<Pick<UseRefElementParameters<E>["refElementParameters"], "onElementChange">>;
    managedChildParameters: UseManagedChildParameters<SelectableChildInfo<E>, never>["managedChildParameters"];
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

export function useSingleSelection<ChildElement extends Element, M extends SelectableChildInfo<ChildElement>>({
    managedChildrenReturn: { getChildren },
    rovingTabIndexReturn: { setTabbableIndex },
    singleSelectionParameters: { onSelectedIndexChange, initiallySelectedIndex }
}: UseSingleSelectionParameters<ChildElement, M>): UseSingleSelectionReturnTypeWithHooks {

    useEnsureStability("useSingleSelection", onSelectedIndexChange);




    const getSelectedAt = useCallback((m: M) => { return m.getSelected(); }, []);
    const setSelectedAt = useCallback((m: M, t: boolean) => { m.setSelected(t); }, []);
    const isSelectedValid = useCallback((m: M) => { return !m.hidden; }, []);

    const {
        changeIndex: setSelectedIndex,
        getCurrentIndex: getSelectedIndex
    } = useChildrenFlag<M>({
        getChildren,
        onIndexChange: onSelectedIndexChange,
        initialIndex: initiallySelectedIndex,
        getAt: getSelectedAt,
        setAt: setSelectedAt,
        isValid: isSelectedValid,
        closestFit: false
    });

    return {
        singleSelectionReturn: {
            getSelectedIndex,
            setSelectedIndex
        },
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
        managedChildParameters,
        singleSelectionReturn: { getSelectedIndex, setSelectedIndex },
        singleSelectionChildParameters: { ariaPropName, selectionMode },
    } = args;

    const [selected, setSelected, getSelected] = useState(getSelectedIndex() == args.managedChildParameters.index);

    //const selectedRef = useRef<ChildFlagOperations>({ get: getIsSelected, set: setIsSelected, isValid: returnTrue });
    //const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: olfic2 }, refElementParameters: { onElementChange } } = useChildrenHaveFocusChild();

    const getIndex = useStableGetter(managedChildParameters.index);

    return {
        managedChildParameters: {
            selected,
            setSelected,
            getSelected,

            ...managedChildParameters
        },
        singleSelectionChildReturn: {
            selected,
            getSelected,
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

    /*return {
        managedChildParameters: {
            focusSelf,
            getSelected,
            hidden,
            index,
            selected,
            setSelected,
            getElement,
            setTabbable,
        },
        singleSelectionChildReturn: {
            selected: isSelected,
            getSelected: getIsSelected,
            propsUnstable: { [ariaPropName as keyof h.JSX.HTMLAttributes<any>]: (isSelected ?? false).toString() }
        },
        pressParameters: { onPressSync: ((e) => { stableOnChange(getIndex(), e); }) },
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: useStableCallback((focused: boolean, prev: boolean | undefined) => {
                olfic2?.(focused, prev);
                if (selectionMode == 'focus' && focused) {
                    stableOnChange(getIndex(), { target: getElement()!, currentTarget: getElement()! });
                }
            }),
        },
        refElementParameters: {
            onElementChange
        }
    };*/
}

