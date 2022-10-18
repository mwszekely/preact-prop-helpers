
import { h } from "preact";
import { StateUpdater, useCallback, useLayoutEffect, useRef } from "preact/hooks";
import { returnTrue } from "use-passive-state";
import { UsePressParameters } from "use-press";
import { ChildFlagOperations, ManagedChildOmits, ManagedChildren, useChildrenFlag, UseManagedChildParameters } from "./use-child-manager";
import { useChildrenHaveFocus, UseChildrenHaveFocusChildReturnType } from "./use-children-have-focus";
//import { usePress, UsePressReturnType } from "./use-press";
import { UseRefElementParameters, UseRefElementReturnType } from "./use-ref-element";
import { useStableCallback } from "./use-stable-callback";
import { useStableGetter } from "./use-stable-getter";
import { useState } from "./use-state";



interface SSP<E extends Element, C, K extends string> {
    selectedIndex: number | null;
    setSelectedIndex: (newIndex: number, event: { target: E, currentTarget: E } | h.JSX.TargetedEvent<E>) => void;

    setTabbableIndex(tabbableIndex: number, fromUserInteraction: boolean): void;
    children: ManagedChildren<number, C, K | "selected">;
}
interface SSCP<_E extends Element> {
    //unselectable: boolean;
    selectionMode: "focus" | "activation" | "disabled";
    ariaPropName: `aria-${"pressed" | "selected" | "checked"}` | null;
    //focusSelf(e: E): void;
    //getElement(): E | null;
}

export type SingleSelectionChildOmits = keyof SSCP<any>;

export type SingleSelectionOmits = keyof SSP<any, any, any>;


export interface UseSingleSelectionParameters<ChildElement extends Element, C, K extends string, SSOmits extends SingleSelectionOmits> {
    singleSelectionParameters: Omit<SSP<ChildElement, C, K | "selected">, SSOmits>;
}

export interface UseSingleSelectionChildParameters<E extends Element, C, K extends string, Omits extends SingleSelectionChildOmits, McOmits extends ManagedChildOmits, SubbestInfo>
    extends
    Omit<UseManagedChildParameters<number, C, K, McOmits, SubbestInfo>, "subInfo" | "flags"> {
    refElementReturn: Required<Pick<UseRefElementReturnType<E>["refElementReturn"], "getElement">>;
    singleSelectionChildParameters: Omit<SSCP<E>, Omits>;
}

export interface UseSingleSelectionChildReturnTypeInfo<E extends Element> extends UseChildrenHaveFocusChildReturnType<E> {
    singleSelectionChildReturn: {
        selected: boolean,
        getSelected(): boolean;
        propsUnstable: h.JSX.HTMLAttributes<E>;
    }
    refElementParameters: Required<Pick<UseRefElementParameters<E>["refElementParameters"], "onElementChange">>;
    managedChildParameters: UseManagedChildParameters<number, any, "selected", "index" | "subInfo", unknown>["managedChildParameters"];
    pressParameters: Pick<UsePressParameters<E, never>["pressParameters"], "onPressSync">;
}

export interface UseSingleSelectionChildReturnTypeWithHooks<E extends Element> extends UseSingleSelectionChildReturnTypeInfo<E> {
}

export interface UseSingleSelectionReturnTypeInfo {
    singleSelectionReturn: {
        changeSelectedIndex: StateUpdater<number | null>;
        getSelectedIndex(): number | null;
    }
}

export interface UseSingleSelectionReturnTypeWithHooks<ChildElement extends Element, C, K extends string> extends
    UseSingleSelectionReturnTypeInfo {
    /** **STABLE** */
    useSingleSelectionChild: UseSingleSelectionChild<ChildElement, C, K | "selected">;
}


export type UseSingleSelectionChild<E extends Element, C, K extends string> = (a: UseSingleSelectionChildParameters<E, C, K, never, never, C>) => UseSingleSelectionChildReturnTypeWithHooks<E>;

export function useSingleSelection<ChildElement extends Element, C, K extends string>({
    singleSelectionParameters: { selectedIndex, setSelectedIndex, children, setTabbableIndex }
}: UseSingleSelectionParameters<ChildElement, C, K, never>): UseSingleSelectionReturnTypeWithHooks<ChildElement, C, K> {

    const { useChildrenHaveFocusChild } = useChildrenHaveFocus({
        childrenHaveFocusParameters: {
            onAllLostFocus: useStableCallback(() => {
                //onAllLostFocus?.();
                if (selectedIndex != null)
                    setTabbableIndex(selectedIndex, false);
            }),
            onAnyGainedFocus: null
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
        singleSelectionReturn: {
            getSelectedIndex,
            changeSelectedIndex
        },
        useSingleSelectionChild: useCallback<UseSingleSelectionChild<ChildElement, C, K | "selected">>((args): UseSingleSelectionChildReturnTypeWithHooks<ChildElement> => {
            const {
                managedChildParameters: { index },
                refElementReturn,
                singleSelectionChildParameters: { selectionMode, ariaPropName },
            } = args;
            const { getElement } = refElementReturn;
            const [isSelected, setIsSelected, getIsSelected] = useState(getSelectedIndex() == index);
            const selectedRef = useRef<ChildFlagOperations>({ get: getIsSelected, set: setIsSelected, isValid: returnTrue });
            const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: olfic2 }, refElementParameters: { onElementChange } } = useChildrenHaveFocusChild();

            const getIndex = useStableGetter(index);

           /* const { pressReturn } = usePress<ChildElement>({
                refElementReturn,
                pressParameters: {
                    onClickSync: unselectable ? null : ((e) => { stableOnChange(getIndex(), e); }),
                    exclude: {},
                    focusSelf,
                },
            });*/

            return {
                singleSelectionChildReturn: {
                    selected: isSelected,
                    getSelected: getIsSelected,
                    propsUnstable: { [ariaPropName as keyof h.JSX.HTMLAttributes<any>]: (isSelected ?? false).toString() }
                },
                managedChildParameters: { flags: { selected: selectedRef.current } },
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
            };
        }, []),
    }
}

