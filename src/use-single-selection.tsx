
import { h } from "preact";
import { StateUpdater, useCallback, useLayoutEffect, useRef } from "preact/hooks";
import { ChildFlagOperations, ManagedChildren, useChildrenFlag, UseManagedChildParameters } from "./use-child-manager";
import { useChildrenHaveFocus, UseChildrenHaveFocusParameters, UseHasFocusParameters } from "./use-has-focus";
import { usePress } from "./use-press";
import { useStableCallback } from "./use-stable-callback";
import { useStableGetter } from "./use-stable-getter";
import { useState } from "./use-state";



interface SSP<E extends Element, C, K extends string> {
    selectedIndex: number | null;
    setSelectedIndex: (newIndex: number, event: { target: E, currentTarget: E } | h.JSX.TargetedEvent<E>) => void;
    selectionMode: "focus" | "activation";

    setTabbableIndex(tabbableIndex: number, fromUserInteraction: boolean): void;
    children: ManagedChildren<number, C, K | "selected">;
}
export type SingleSelectionOmits = keyof SSP<any, any, any>;


export interface UseSingleSelectionParameters<ChildElement extends Element, C, K extends string, SSOmits extends SingleSelectionOmits> {
    singleSelection: Omit<SSP<ChildElement, C, K>, SSOmits>;
    childrenHaveFocus: Partial<UseChildrenHaveFocusParameters["childrenHaveFocus"]>;
}

export interface UseSingleSelectionChildParameters<E extends Element, C, K extends string> {
    singleSelection: { unselectable: boolean; ariaPropName: `aria-${"pressed" | "selected" | "checked"}` | null; };
    hasFocus: UseHasFocusParameters<E>;
    managedChild: UseManagedChildParameters<number, C, K | "selected", never, any>["managedChild"];
}

export interface UseSingleSelectionChildReturnTypeInfo<E extends Element, C, K extends string> {
    flags: { selected: ChildFlagOperations }
    singleSelection: { selected: boolean, getSelected(): boolean; }
}

export interface UseSingleSelectionChildReturnTypeWithHooks<E extends Element, C, K extends string> extends UseSingleSelectionChildReturnTypeInfo<E, C, K> {
    useSingleSelectionChildProps(props: h.JSX.HTMLAttributes<E>): h.JSX.HTMLAttributes<E>;
}

export interface UseSingleSelectionReturnTypeInfo<ChildElement extends Element, LsSubInfo, ExtraFlagKeys extends string> {
    changeSelectedIndex: StateUpdater<number | null>;
    getSelectedIndex(): number | null;
}

export interface UseSingleSelectionReturnTypeWithHooks<ParentOrChildElement extends Element, ChildElement extends Element, C, K extends string> extends
    UseSingleSelectionReturnTypeInfo<ChildElement, C, K | "selected"> {
    /** **STABLE** */
    useSingleSelectionChild: UseSingleSelectionChild<ChildElement, C, K | "selected">;
}


export type UseSingleSelectionChild<E extends Element, C, K extends string> = (a: UseSingleSelectionChildParameters<E, C, K>) => UseSingleSelectionChildReturnTypeWithHooks<E, C, K>;

export function useSingleSelection<ParentOrChildElement extends Element, ChildElement extends Element, C, K extends string>({
    singleSelection: { selectedIndex, selectionMode, setSelectedIndex, children, setTabbableIndex },
    childrenHaveFocus: { onAllLostFocus, onAnyGainedFocus }
}: UseSingleSelectionParameters<ChildElement, C, K, never>): UseSingleSelectionReturnTypeWithHooks<ParentOrChildElement, ChildElement, C, K> {

    const { useChildrenHaveFocusChild } = useChildrenHaveFocus<undefined, never>({
        childrenHaveFocus: {
            onAllLostFocus: useStableCallback(() => {
                onAllLostFocus?.();
                if (selectedIndex != null)
                    setTabbableIndex(selectedIndex, false);
            }),
            onAnyGainedFocus
        }, managedChildren: {
            onAfterChildLayoutEffect: null,
            onChildrenMountChange: null
        }
    });

    const stableOnChange = useStableCallback(setSelectedIndex);

    const {
        changeIndex: changeSelectedIndex,
        getCurrentIndex: getSelectedIndex
    } = useChildrenFlag<C, K | "selected">({
        children: children,
        initialIndex: selectedIndex,
        key: "selected",
        closestFit: false
    });

    useLayoutEffect(() => {
        changeSelectedIndex(selectedIndex);
    }, [selectedIndex]);

    return {
        getSelectedIndex,
        changeSelectedIndex,
        useSingleSelectionChild: useCallback<UseSingleSelectionChild<ChildElement, C, K | "selected">>(({ managedChild: { index, flags }, hasFocus: { onFocusedInnerChanged, ...hasFocus }, singleSelection: { unselectable, ariaPropName } }) => {
            const [isSelected, setIsSelected, getIsSelected] = useState(getSelectedIndex() == index);
            const selectedRef = useRef<ChildFlagOperations>({ get: getIsSelected, set: setIsSelected, isValid: useStableCallback(() => !unselectable) });
            const { useChildrenHaveFocusChildProps, getElement } = useChildrenHaveFocusChild({
                onFocusedInnerChanged: useStableCallback((focused: boolean, prev: boolean | undefined) => {
                    onFocusedInnerChanged?.(focused, prev);
                    if (selectionMode == 'focus' && focused) {
                        stableOnChange(getIndex(), { target: getElement()!, currentTarget: getElement()! });
                    }
                }),
                ...hasFocus,
                managedChild: { index },
                subInfo: undefined
            });

            const getIndex = useStableGetter(index);

            const usePressProps = usePress<ChildElement>({ onClickSync: (e) => { stableOnChange(getIndex(), e); }, exclude: {}, hasFocus });

            return {
                flags: { ...flags, selected: selectedRef.current },
                useSingleSelectionChildProps: (props: h.JSX.HTMLAttributes<ChildElement>) => {

                    if (ariaPropName)
                        props[ariaPropName as keyof h.JSX.HTMLAttributes<any>] = (isSelected ?? false).toString();

                    return usePressProps(useChildrenHaveFocusChildProps(props))
                },
                singleSelection: { selected: isSelected, getSelected: getIsSelected }
            };
        }, [selectionMode]),
    }
}

