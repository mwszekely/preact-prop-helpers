import { h } from "preact";
import { StateUpdater, useCallback, useEffect, useRef } from "preact/hooks";
import { useStableGetter } from "use-stable-getter";
import { ChildFlagOperations, ManagedChildInfo, ManagedChildren, OnChildrenMountChange, useChildrenFlag, useManagedChildren, UseManagedChildrenParameters } from "./use-child-manager";
import { useHasFocus } from "./use-has-focus";
import { useMergedProps } from "./use-merged-props";
import { returnTrue, returnZero, usePassiveState } from "./use-passive-state";
import { useStableCallback } from "./use-stable-callback";
import { useState } from "./use-state";

//export type UseRovingTabIndexChildInfo<K extends string, I extends RovingTabIndexChildInfoBase<K>> = Required<I> & FlaggableChildInfo<"tabbable"> & {
//};


export interface UseRovingTabIndexParameters<C, K extends string> extends UseManagedChildrenParameters<number, C, K> {
    rovingTabIndex: {
        // Called during an effect after the component has rendered itself in a tabbable state
        onTabbableRender?: (index: number) => void;

        onTabbableIndexChange?: (tabbableIndex: number | null) => void;

        onTabbedInTo?: () => void;
        onTabbedOutOf?: () => void;

        initiallyFocusable?: number;
    }
}

export interface RTI<E extends Element, C> {
    /**
     * By default, tabbing through this component will cause the referenced element to be focused.
     * 
     * You can override this behavior to do something different if you'd like.
     */
    focusSelf(): void;

    blurSelf(): void;

    getElement(): E | null;

    info3: C;
}


export interface UseRovingTabIndexChildParameters<C, K extends string> {
    managedChildren: Omit<ManagedChildInfo<number, C, K>, "info">;
    rti: Partial<Omit<RTI<any, C>, "getElement">> & Pick<RTI<any, C>, "info3">;
    //info3: C;
    //flags: Partial<Record<K, ChildFlagOperations>>;
};
export type UseRovingTabIndexChild<ChildElement extends HTMLElement | SVGElement, C, K extends string> = (a: UseRovingTabIndexChildParameters<C, K>) => {
    /** *Unstable* */
    useRovingTabIndexChildProps: (props: h.JSX.HTMLAttributes<ChildElement>) => h.JSX.HTMLAttributes<ChildElement>;
    tabbable: boolean;
    /** **STABLE** */
    getElement(): ChildElement | null;
}

export interface UseRovingTabIndexReturnType<ChildElement extends HTMLElement | SVGElement, C, K extends string> {
    /** **STABLE** */
    useRovingTabIndexChild: UseRovingTabIndexChild<ChildElement, C, K>;
    /** **STABLE** */
    setTabbableIndex: (updater: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => void;
    /** **STABLE** */
    getTabbableIndex: () => number | null;
    /** **STABLE** */
    children: ManagedChildren<number, RTI<ChildElement, C>, K>;
    /** **STABLE** */
    focusSelf: () => void;
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
export function useRovingTabIndex<ChildElement extends HTMLElement | SVGElement, C, K extends string>({ managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange: onChildrenMountChangeUser }, rovingTabIndex: { onTabbableIndexChange, onTabbableRender, onTabbedInTo: onAnyFocusIn, onTabbedOutOf: onAnyFocusOut, initiallyFocusable: initialIndex } }: UseRovingTabIndexParameters<C, K>): UseRovingTabIndexReturnType<ChildElement, C, K> {
    //type I2 = ManagedChildInfo<number, RTI<ChildElement, C, K | "tabbable">>;

    initialIndex ??= 0;
    const stableOnTabbableRender = useStableCallback(onTabbableRender ?? (() => { }));
    const [_getAnyFocused, setAnyFocused] = usePassiveState<number>(useStableCallback((newCount: number, oldCount: number | undefined) => {
        if (oldCount == 0 && newCount > 0) {
            onAnyFocusIn?.();
        }

        if (newCount == 0 && (oldCount ?? 0) > 0) {
            onAnyFocusOut?.();
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

            nextIndex ??= 0;
            nextIndex = changeIndex(nextIndex);

            if (prevIndex != nextIndex) {
                const nextChild = nextIndex == null ? null : children.getAt(nextIndex);
                const prevChild = prevIndex == null ? null : children.getAt(prevIndex);
                if (nextChild != null && fromUserInteraction)
                    nextChild.info.focusSelf();

                if (prevChild != null)
                    prevChild.info.blurSelf();

            }

            return nextIndex;
        });

    }, []);

    // Any time the tabbable index changes,
    // notify the previous child that it's no longer tabbable,
    // and notify the next child that is allowed to be tabbed to.
    const { children, useManagedChild } = useManagedChildren<number, RTI<ChildElement, C>, K | "tabbable">({
        managedChildren: {
            onAfterChildLayoutEffect,
            onChildrenMountChange: useStableCallback<OnChildrenMountChange<number>>((mounted, unmounted) => { onChildrenMountChangeUser?.(mounted, unmounted); onChildrenMountChange(mounted, unmounted); }),
        },
    });

    const { changeIndex, onChildrenMountChange } = useChildrenFlag<RTI<ChildElement, C>, K | "tabbable">({ initialIndex, children, closestFit: true, key: "tabbable", fitNullToZero: true });

    const useRovingTabIndexChild = useCallback<UseRovingTabIndexChild<ChildElement, C, K>>(({ managedChildren: { flags, index }, rti: { blurSelf: blurSelfOverride, focusSelf: focusSelfOverride, info3 } }: UseRovingTabIndexChildParameters<C, K>) => {


        const bsOverride = useStableGetter(blurSelfOverride);
        const fsOverride = useStableGetter(focusSelfOverride);
        const focusSelf = useCallback(() => {
            const fs = fsOverride();
            if (fs) {
                fs();
            }
            else {
                const element = getElement();
                if (element)
                    element.focus();
            }
        }, []);
        const blurSelf = useCallback(() => {
            const bs = bsOverride();
            if (bs) {
                bs();
            }
            else {
                const element = getElement();
                if (element)
                    element.blur();
            }
        }, []);

        const onFocusedInnerChanged = useStableCallback((focused: boolean) => {
            setAnyFocused(prev => (focused ? ((prev ?? 0) + 1) : ((prev ?? 0) - 1)));
            if (focused)
                setTabbableIndex(index, true);
        });
        const { getElement, useHasFocusProps } = useHasFocus<ChildElement>({ onFocusedInnerChanged });

        const [tabbable, setTabbable, getTabbable] = useState(false);
        const tabbableFlags = useRef<ChildFlagOperations>({ get: getTabbable, set: setTabbable, isValid: returnTrue });

        const _: void = useManagedChild({
            managedChild: {
                index,
                flags: { tabbable: tabbableFlags.current, ...flags } as Partial<Record<K | "tabbable", ChildFlagOperations>>,
                info: {
                    blurSelf,
                    focusSelf,
                    getElement,
                    info3
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
            getElement,
            tabbable
        }
    }, [/* Must remain stable */]);

    const focusSelf = useCallback(() => {
        const index = getTabbableIndex();
        if (index != null)
            children.getAt(index)?.info.focusSelf?.();
        else
            setTabbableIndex(0, true);
    }, []);

    return {
        useRovingTabIndexChild,
        setTabbableIndex,
        getTabbableIndex,
        focusSelf,
        children
    };
}

function test() {
    const { children, focusSelf, getTabbableIndex, setTabbableIndex, useRovingTabIndexChild, } = useRovingTabIndex<HTMLDivElement, { "foo": "bar" }, "flag2">({ managedChildren: {}, rovingTabIndex: {} });
    const { } = useRovingTabIndexChild({ managedChildren: { index: 0, flags: {} }, rti: { info3: { foo: "bar" } } });
}
