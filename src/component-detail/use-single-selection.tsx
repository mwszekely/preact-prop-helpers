
import { h } from "preact";
import { useCallback } from "preact/hooks";
import { UsePressParameters } from "../component-use/use-press";
import { UseChildrenHaveFocusChildReturnType, UseChildrenHaveFocusParameters } from "../observers/use-children-have-focus";
import { useChildrenFlag, UseManagedChildParameters, UseManagedChildrenReturnType } from "../preact-extensions/use-child-manager";
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
    setSelected(selected: boolean): void;

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
        initiallySelectedIndex: number | null;
        /**
         * In general, this should only be `null` when single selection is entirely disabled.
         * 
         * In either case, **MUST** be stable!!
         */
        onSelectedIndexChange: null | OnPassiveStateChange<number | null>;

    }
}

export interface UseSingleSelectionChildParameters<E extends Element> {
    //managedChildParameters: Pick<UseManagedChildParameters<SelectableChildInfo<E>, never>["managedChildParameters"], "index" | "disabled">;
    singleSelectionContext: UseSingleSelectionReturnType["singleSelectionContext"];
    singleSelectionChildParameters: {
        selectionMode: "focus" | "activation" | "disabled";
        ariaPropName: `aria-${"pressed" | "selected" | "checked"}` | null;
    } & Pick<SelectableChildInfo<E>, "disabled">;
    managedChildParameters: Pick<SelectableChildInfo<E>, "index">;
}

export interface UseSingleSelectionChildReturnTypeInfo<E extends Element> extends UseChildrenHaveFocusChildReturnType<E> {
    singleSelectionChildReturn: {
        // These two are already available as managedChild info,
        // but we're keeping them because RTI does the same thing, and it's convenient.
        selected: boolean,
        getSelected(): boolean;
        // Used to programmatically set this as the selected element;
        // it requests the parent to actually change the numeric index to this one's.
        setSelected: (selected: boolean) => void;
        propsUnstable: h.JSX.HTMLAttributes<E>;
    }
    //refElementParameters: Required<Pick<UseRefElementParameters<E>["refElementParameters"], "onElementChange">>;
    //managedChildParameters: Pick<UseManagedChildParameters<SelectableChildInfo<E>, never>["managedChildParameters"], "selected" | "setSelected" | "getSelected">;
    pressParameters: Pick<UsePressParameters<E>["pressParameters"], "onPressSync">;
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

        singleSelectionContext: { getSelectedIndex, setSelectedIndex },
        singleSelectionChildParameters: { ariaPropName, selectionMode, disabled },
        managedChildParameters: { index }
    } = args;

    useEnsureStability("useSingleSelectionChild", getSelectedIndex, setSelectedIndex);
    const getDisabled = useStableGetter(disabled);

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
        //managedChildParameters: { selected, setSelected, getSelected, },
        singleSelectionChildReturn: {
            selected,
            setSelected: useCallback((selected: boolean) => {
                console.assert(!getDisabled());
                if (selected)
                    setSelectedIndex(getIndex());
            }, []),
            getSelected,
            propsUnstable: ariaPropName == null ? {} : { [ariaPropName as keyof h.JSX.HTMLAttributes<any>]: (selected ?? false).toString() }
        },
        pressParameters: { onPressSync },
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged }
    }
}

