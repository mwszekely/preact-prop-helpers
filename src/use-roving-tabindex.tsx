import { h } from "preact";
import { StateUpdater, useCallback, useEffect, useRef } from "preact/hooks";
import { useStableGetter } from "./use-stable-getter";
import { ChildFlagOperations, ManagedChildOmits, ManagedChildrenOmits, OnChildrenMountChange, useChildrenFlag, UseManagedChildParameters, useManagedChildren, UseManagedChildrenParameters, UseManagedChildrenReturnTypeInfo } from "./use-child-manager";
import { useHasFocus } from "./use-has-focus";
import { useMergedProps } from "./use-merged-props";
import { returnZero, usePassiveState } from "./use-passive-state";
import { useStableCallback } from "./use-stable-callback";
import { useState } from "./use-state";

//export type UseRovingTabIndexChildInfo<K extends string, I extends RovingTabIndexChildInfoBase<K>> = Required<I> & FlaggableChildInfo<"tabbable"> & {
//};

export type OnTabbableIndexChange = (tabbableIndex: number | null) => void;

export interface UseRovingTabIndexSubInfo<E extends Element, C> {
    /**
     * By default, tabbing through this component will cause the referenced element to be focused.
     * 
     * You can override this behavior to do something different if you'd like.
     */
    focusSelf(): void;

    blurSelf(): void;

    getElement(): E | null;

    hidden: boolean;

    subInfo: C;
}

interface RTIP {
    // Called during an effect after the component has rendered itself in a tabbable state
    onTabbableRender?: (index: number) => void;

    onTabbableIndexChange?: OnTabbableIndexChange;

    onTabbedInTo?: () => void;
    onTabbedOutOf?: () => void;

    initialIndex?: number;
}
export type RovingTabIndexParametersOmits = keyof RTIP;
export interface UseRovingTabIndexParameters<RtiOmits extends RovingTabIndexParametersOmits, McOmits extends ManagedChildrenOmits> extends UseManagedChildrenParameters<number, McOmits> {
    rovingTabIndex: Omit<RTIP, RtiOmits>;
}

export interface UseRovingTabIndexReturnTypeInfo {
    rovingTabIndex: {
        /** **STABLE** */
        setTabbableIndex: (updater: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => void;
        /** **STABLE** */
        getTabbableIndex: () => number | null;
        /** **STABLE** */
        focusSelf: () => void;
    }
}

export interface UseRovingTabIndexReturnTypeWithHooks<ChildElement extends Element, RtiSubInfo, ExtraFlagKeys extends string> extends
    UseManagedChildrenReturnTypeInfo<number, UseRovingTabIndexSubInfo<ChildElement, RtiSubInfo>, ExtraFlagKeys | "tabbable">,
    UseRovingTabIndexReturnTypeInfo
//Omit<UseManagedChildrenReturnType<number, UseRovingTabIndexSubInfo<ChildElement, RtiSubInfo>, ExtraFlagKeys | "tabbable">, "useManagedChild"> 
{
    /** **STABLE** */
    useRovingTabIndexChild: UseRovingTabIndexChild<ChildElement, RtiSubInfo, ExtraFlagKeys>;
}

//interface MCCP<RtiSubInfo, ExtraFlagKeys extends string> extends Omit<ManagedChildInfo<number, UseRovingTabIndexSubInfo<any, RtiSubInfo>, ExtraFlagKeys | "tabbable">, "subInfo"> {}

export type RovingTabIndexChildOmits = keyof UseRovingTabIndexSubInfo<any, any>;

export interface UseRovingTabIndexChildParameters<RtiSubInfo, ExtraFlagKeys extends string, RticOmits extends RovingTabIndexChildOmits, McOmits extends ManagedChildOmits, SubbestInfo> extends
    UseManagedChildParameters<number, UseRovingTabIndexSubInfo<any, RtiSubInfo>, ExtraFlagKeys | "tabbable", McOmits | "subInfo"> {
    rovingTabIndex: Omit<Partial<Omit<UseRovingTabIndexSubInfo<any, any>, "getElement" | "subInfo">>, RticOmits>;
    subInfo: SubbestInfo;
}

export type UseRovingTabIndexChild<ChildElement extends Element, RtiSubInfo, ExtraFlagKeys extends string> = (a: UseRovingTabIndexChildParameters<RtiSubInfo, ExtraFlagKeys, never, never, RtiSubInfo>) => UseRovingTabIndexChildReturnType<ChildElement>;

export interface UseRovingTabIndexChildReturnType<ChildElement extends Element> {
    /** *Unstable* */
    useRovingTabIndexChildProps: (props: h.JSX.HTMLAttributes<ChildElement>) => h.JSX.HTMLAttributes<ChildElement>;
    rovingTabIndex: {
        tabbable: boolean;
        /** **STABLE** */
        getTabbable(): boolean;
        /** **STABLE** */
        getElement(): ChildElement | null;
    }
}


/**
 * Implements a roving tabindex system where only one "focusable"
 * component in a set is able to receive a tab focus. *Which*
 * of those elements receives focus is determined by you, but it's
 * recommended to offload that logic then to another hook, like
 * `useLinearNavigation`, which lets you change the tabbable
 * element with the arrow keys, `useTypeaheadNavigation`, which
 * lets you change the tabbable index with typeahead, or
 * `useListNavigation` if you just want everything bundled together.
 * 
 * Note that the child hook returned by this function must be used
 * by every child that uses this roving tabindex logic.  The
 * prop-modifying hook *that* hook returns should then be used
 * on the child's element, as well as any other elements you'd like
 * to be explicitly made untabbable too.
 * 
 * `shouldFocusOnChange` should return true if focus is 
 * contained within whatever element contains the roving tab index.
 * Generally as simple as the following:
 * ```
 * const [focusedInner, setFocusedInner] = useState(false);
 * const { useHasFocusProps } = useHasFocus<ParentElement>({ setFocusedInner });
 * const focusOnChange = (focusedInner != false);
 * ```
 * It's not included here because `useRovingTabIndex` doesn't know 
 * anything about the container element, only children elements.
 * And just as well! Children should be allowed at the root, 
 * regardless of if it's the whole app or just a given component.
 */
export function useRovingTabIndex<ChildElement extends Element, RtiSubInfo, ExtraFlagKeys extends string>(parentParameters: UseRovingTabIndexParameters<never, never>): UseRovingTabIndexReturnTypeWithHooks<ChildElement, RtiSubInfo, ExtraFlagKeys> {

    let { rovingTabIndex: { initialIndex, onTabbedInTo, onTabbedOutOf, onTabbableRender, onTabbableIndexChange }, managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange } } = parentParameters;

    initialIndex ??= 0;
    const stableOnTabbableRender = useStableCallback(onTabbableRender ?? (() => { }));
    const [_getAnyFocused, setAnyFocused] = usePassiveState<number>(useStableCallback((newCount: number, oldCount: number | undefined) => {
        if (oldCount == 0 && newCount > 0) {
            onTabbedInTo?.();
        }

        if (newCount == 0 && (oldCount ?? 0) > 0) {
            onTabbedOutOf?.();
        }
    }), returnZero);

    // Keep track of three things related to the currently tabbable element's index:
    // What it is, and whether, when we render this component and it's changed, to also focus the element that was made tabbable.
    const [getTabbableIndex, setTabbableIndex2] = usePassiveState<number | null>(onTabbableIndexChange, useCallback(() => { return initialIndex ?? 0 }, []));
    const setTabbableIndex = useCallback((updater: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => {
        setTabbableIndex2((prevIndex) => {
            let nextIndex = prevIndex;

            if (typeof updater === "function")
                nextIndex = updater(prevIndex ?? null);
            else
                nextIndex = updater;

            nextIndex = changeIndex(nextIndex);

            if (prevIndex != nextIndex) {
                const nextChild = nextIndex == null ? null : parentReturnType.managedChildren.children.getAt(nextIndex);
                const prevChild = prevIndex == null ? null : parentReturnType.managedChildren.children.getAt(prevIndex);

                if (prevChild != null)
                    prevChild.subInfo.blurSelf();

                if (nextChild != null && fromUserInteraction)
                    nextChild.subInfo.focusSelf();

            }

            return nextIndex;
        });

    }, []);

    // Any time the tabbable index changes,
    // notify the previous child that it's no longer tabbable,
    // and notify the next child that is allowed to be tabbed to.
    const parentReturnType = useManagedChildren<number, UseRovingTabIndexSubInfo<ChildElement, RtiSubInfo>, ExtraFlagKeys | "tabbable">({
        managedChildren: {
            onAfterChildLayoutEffect,
            onChildrenMountChange: useStableCallback<OnChildrenMountChange<number>>((mounted, unmounted) => { onChildrenMountChange?.(mounted, unmounted); reevaluateClosestFit(); }),
        },
    });

    const { useManagedChild } = parentReturnType;

    const { changeIndex, reevaluateClosestFit } = useChildrenFlag<UseRovingTabIndexSubInfo<ChildElement, RtiSubInfo>, ExtraFlagKeys | "tabbable">({ initialIndex, children: parentReturnType.managedChildren.children, closestFit: true, key: "tabbable" });

    const useRovingTabIndexChild = useCallback<UseRovingTabIndexChild<ChildElement, RtiSubInfo, ExtraFlagKeys>>((childParameters) => {

        const { subInfo, managedChild: { index, flags }, rovingTabIndex: { hidden, blurSelf: blurSelfOverride, focusSelf: focusSelfOverride } } = childParameters;

        useEffect(() => {
            reevaluateClosestFit();
        }, [!!hidden])


        const bsOverride = useStableGetter(blurSelfOverride);
        const fsOverride = useStableGetter(focusSelfOverride);
        const focusSelf = useCallback(() => {
            const fs = fsOverride();
            if (fs) {
                console.log(`useRovingTabIndexChild[${index}].focusSelf (override)`);
                fs();
            }
            else {
                console.log(`useRovingTabIndexChild[${index}].focusSelf (default)`);
                const element = getElement() as (Element & Partial<HTMLElement>);
                if (element)
                    element.focus?.();
            }
        }, []);
        const blurSelf = useCallback(() => {
            const bs = bsOverride();
            if (bs) {
                console.log(`useRovingTabIndexChild[${index}].blurSelf (override)`);
                bs();
            }
            else {
                console.log(`useRovingTabIndexChild[${index}].blurSelf (default)`);
                const element = getElement() as (Element & Partial<HTMLElement>);
                if (element)
                    element.blur?.();
            }
        }, []);

        const onFocusedInnerChanged = useStableCallback((focused: boolean) => {
            setAnyFocused(prev => (focused ? ((prev ?? 0) + 1) : ((prev ?? 0) - 1)));
            if (focused) {
                console.log(`Child ${index} has been focused and will set itself as the tabbable child`);
                setTabbableIndex(index, true);
            }
        });
        const { getElement, useHasFocusProps } = useHasFocus<ChildElement>({ onFocusedInnerChanged });

        const [tabbable, setTabbable, getTabbable] = useState(false);
        const tabbableFlags = useRef<ChildFlagOperations>({ get: getTabbable, set: setTabbable, isValid: useStableCallback(() => !hidden) });

        const _: void = useManagedChild({
            managedChild: {
                index,
                flags: { ...flags, tabbable: tabbableFlags.current } as Partial<Record<ExtraFlagKeys | "tabbable", ChildFlagOperations>>,
                subInfo: {
                    blurSelf,
                    focusSelf,
                    getElement,
                    hidden: !!hidden,
                    subInfo
                }
            }
        });
        useEffect(() => {
            if (tabbable)
                stableOnTabbableRender(index);
        }, [tabbable, index])
        function useRovingTabIndexChildProps(props: h.JSX.HTMLAttributes<ChildElement>): h.JSX.HTMLAttributes<ChildElement> {
            console.assert(props.tabIndex == null);
            return useMergedProps<ChildElement>(useHasFocusProps({ tabIndex: tabbable ? 0 : -1 }), props);
        }

        return {
            useRovingTabIndexChildProps,
            rovingTabIndex: {
                getElement,
                tabbable,
                getTabbable
            }
        }
    }, [/* Must remain stable */]);

    const focusSelf = useCallback(() => {
        console.log(`useRovingTabIndex.focusSelf`);
        const index = getTabbableIndex();
        if (index != null)
            parentReturnType.managedChildren.children.getAt(index)?.subInfo.focusSelf?.();
        else
            setTabbableIndex(null, true);
    }, []);

    return {
        useRovingTabIndexChild,
        managedChildren: { children: parentReturnType.managedChildren.children },
        rovingTabIndex: {
            setTabbableIndex,
            getTabbableIndex,
            focusSelf,
        }
    };
}

/*function test() {
    const { children, focusSelf, getTabbableIndex, setTabbableIndex, useRovingTabIndexChild, } = useRovingTabIndex<HTMLDivElement, { "foo": "bar" }, "flag2">({ managedChildren: {}, rovingTabIndex: {} });
    const { } = useRovingTabIndexChild({ managedChildren: { index: 0, flags: {} }, rti: { info3: { foo: "bar" } } });
}*/
