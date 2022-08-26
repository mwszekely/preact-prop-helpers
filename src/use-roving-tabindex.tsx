import { h } from "preact";
import { StateUpdater, useCallback, useEffect, useRef } from "preact/hooks";
import { useStableGetter } from "use-stable-getter";
import { ChildFlagOperations, ManagedChildInfoBase, FlaggableChildInfoBase, ManagedChildren, useChildrenFlag, UseChildrenFlagParameters, useManagedChildren, UseManagedChildrenParameters, ManagedChildInfoNeeded } from "./use-child-manager";
import { useHasFocus } from "./use-has-focus";
import { useMergedProps } from "./use-merged-props";
import { returnTrue, returnZero, usePassiveState } from "./use-passive-state";
import { useStableCallback } from "./use-stable-callback";
import { useState } from "./use-state";

//export type UseRovingTabIndexChildInfo<K extends string, I extends RovingTabIndexChildInfoBase<K>> = Required<I> & FlaggableChildInfo<"tabbable"> & {
//};

export interface UseRovingTabIndexParameters<K extends string, I extends ManagedChildInfoBase<number>> extends UseManagedChildrenParameters<I, never>, UseChildrenFlagParameters<K, I, "children" | "key" | "closestFit" | "fitNullToZero" | "onIndexChange"> {
    rovingTabIndex: {
        // Called during an effect after the component has rendered itself in a tabbable state
        onTabbableRender?: (index: number) => void;

        onTabbableIndexChange?: (tabbableIndex: number | null) => void;

        onTabbedInTo?: () => void;
        onTabbedOutOf?: () => void;
    }
}

interface RTI {
    /**
     * By default, tabbing through this component will cause the referenced element to be focused.
     * 
     * You can override this behavior to do something different if you'd like.
     */
    focusSelf(): void;

    blurSelf(): void;

    getElement(): void;
}

export interface RovingTabIndexChildInfoBase<K extends string, Omits extends keyof RTI> extends ManagedChildInfoBase<number> {
    rovingTabIndex: Omit<RTI, Omits>;
    flaggableChildren: Omit<FlaggableChildInfoBase<K | "tabbable">, "flags">;
}

//export type UseRovingTabIndexChildParametersBase<K extends string, I2 extends Partial<Pick<RovingTabIndexChildInfoBase<K>, "focusSelf" | "blurSelf">>> = UseManagedChildParameters<Omit<I2, "focusSelf" | "blurSelf" | "getElement"> & Partial<Pick<I2, "focusSelf" | "blurSelf">>>;
/*export interface RovingTabIndexChildInfoNeeded<K extends string, Omits extends keyof RTI> extends ManagedChildInfoNeeded<number> {
    rovingTabIndex: Omit<RTI, Omits>;
    flaggableChildren: FlaggableChildInfoBase<K | "tabbable">;
}*/

export type UseRovingTabIndexChild<ChildElement extends HTMLElement | SVGElement, K extends string> = (a: { info: RovingTabIndexChildInfoNeeded<never> }) => {
    /** *Unstable* */
    useRovingTabIndexChildProps: (props: h.JSX.HTMLAttributes<ChildElement>) => h.JSX.HTMLAttributes<ChildElement>;
    tabbable: boolean;
    /** **STABLE** */
    getElement(): ChildElement | null;
}

export interface UseRovingTabIndexReturnType<ChildElement extends HTMLElement | SVGElement, K extends string, I2 extends RovingTabIndexChildInfoBase> {
    /** **STABLE** */
    useRovingTabIndexChild: UseRovingTabIndexChild<ChildElement>;
    /** **STABLE** */
    setTabbableIndex: (updater: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => void;
    /** **STABLE** */
    getTabbableIndex: () => number | null;
    /** **STABLE** */
    children: ManagedChildren<I2>;
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
export function useRovingTabIndex<ChildElement extends HTMLElement | SVGElement, K extends string, I2 extends RovingTabIndexChildInfoBase<K>>({ managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange: onChildrenMountChangeUser }, rovingTabIndex: { onTabbableIndexChange, onTabbableRender, onTabbedInTo: onAnyFocusIn, onTabbedOutOf: onAnyFocusOut }, flaggableChildren: { initialIndex } }: UseRovingTabIndexParameters<K, I2>): UseRovingTabIndexReturnType<ChildElement, K, I2> {
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
    const [getTabbableIndex, setTabbableIndex2] = usePassiveState<number | null>(onTabbableIndexChange, useCallback(() => { return initialIndex! }, []));
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
                    nextChild.focusSelf!();

                if (prevChild != null)
                    prevChild.blurSelf!();

            }

            return nextIndex;
        });

    }, []);

    // Any time the tabbable index changes,
    // notify the previous child that it's no longer tabbable,
    // and notify the next child that is allowed to be tabbed to.
    const { children, useManagedChild } = useManagedChildren<I2>({
        managedChildren: {
            onAfterChildLayoutEffect,
            onChildrenMountChange: useStableCallback<NonNullable<typeof onChildrenMountChangeUser>>((mounted, unmounted) => { onChildrenMountChangeUser?.(mounted, unmounted); onChildrenMountChange(mounted, unmounted); }),
        },
    });

    const { changeIndex, onChildrenMountChange } = useChildrenFlag<"tabbable", I2>({ flaggableChildren: { initialIndex, children, closestFit: true, key: "tabbable", fitNullToZero: true } });

    const useRovingTabIndexChild = useCallback<UseRovingTabIndexChild<ChildElement>>(({ info: { index, rovingTabIndex: { blurSelf: blurSelfOverride, focusSelf: focusSelfOverride } } }) => {
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
            info: {
                ...(restInfo as I2),
                index,
                flags: {
                    tabbable: tabbableFlags.current,
                    ...flags
                },
                blurSelf,
                focusSelf,
                getElement
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
            children.getAt(index)?.focusSelf?.();
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
