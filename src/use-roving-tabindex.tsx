import { h } from "preact";
import { StateUpdater, useCallback, useEffect, useRef } from "preact/hooks";
import { UseHasCurrentFocusParameters } from "use-has-current-focus";
import { UseRefElementReturnType } from "use-ref-element";
import { ChildFlagOperations, ManagedChildOmits, ManagedChildrenOmits, OnChildrenMountChange, useChildrenFlag, UseManagedChildParameters, useManagedChildren, UseManagedChildrenParameters, UseManagedChildrenReturnTypeInfo } from "./use-child-manager";
import { useMergedProps } from "./use-merged-props";
import { usePassiveState } from "./use-passive-state";
import { useStableCallback } from "./use-stable-callback";
import { useStableGetter } from "./use-stable-getter";
import { useState } from "./use-state";

//export type UseRovingTabIndexChildInfo<K extends string, I extends RovingTabIndexChildInfoBase<K>> = Required<I> & FlaggableChildInfo<"tabbable"> & {
//};

export type OnTabbableIndexChange = (tabbableIndex: number | null) => void;

export interface UseRovingTabIndexSubInfo<E extends Element, RtiSubInfo> {
    /**
     * By default, tabbing through this component will cause the referenced element to be focused.
     * 
     * You can override this behavior to do something different if you'd like.
     */
    focusSelf(): void;

    getElement(): E | null;

    hidden: boolean;

    subInfo: RtiSubInfo;
}

interface RTIP {
    // Called during an effect after the component has rendered itself in a tabbable state
    onTabbableRender?: (index: number) => void;

    onTabbableIndexChange?: OnTabbableIndexChange;

    //onTabbedInTo?: () => void;
    //onTabbedOutOf?: () => void;

    initialIndex?: number;
}
export type RovingTabIndexParametersOmits = keyof RTIP;
export interface UseRovingTabIndexParameters<RtiOmits extends RovingTabIndexParametersOmits, McOmits extends ManagedChildrenOmits> extends UseManagedChildrenParameters<number, McOmits> {
    rovingTabIndexParameters: Omit<RTIP, RtiOmits>;
}

export interface UseRovingTabIndexReturnTypeInfo<RtiSubInfo, ExtraFlagKeys extends string> extends UseManagedChildrenReturnTypeInfo<number, RtiSubInfo, ExtraFlagKeys> {
    rovingTabIndexReturn: {
        /** **STABLE** */
        setTabbableIndex: (updater: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => void;
        /** **STABLE** */
        getTabbableIndex: () => number | null;
        /** **STABLE** */
        focusSelf: () => void;
    }
}

export interface UseRovingTabIndexReturnTypeWithHooks<ChildElement extends Element, RtiSubInfo, ExtraFlagKeys extends string> extends UseRovingTabIndexReturnTypeInfo<UseRovingTabIndexSubInfo<ChildElement, RtiSubInfo>, ExtraFlagKeys | "tabbable"> {
    /** **STABLE** */
    useRovingTabIndexChild: UseRovingTabIndexChild<ChildElement, RtiSubInfo, ExtraFlagKeys>;
}

export type RovingTabIndexChildOmits = keyof UseRovingTabIndexSubInfo<any, any>;

export interface UseRovingTabIndexChildParameters<ChildElement extends Element, RtiSubInfo, ExtraFlagKeys extends string, RticOmits extends RovingTabIndexChildOmits, McOmits extends ManagedChildOmits, SubbestInfo> extends
    UseManagedChildParameters<number, UseRovingTabIndexSubInfo<ChildElement, RtiSubInfo>, ExtraFlagKeys | "tabbable", McOmits | "subInfo", SubbestInfo> {
    refElementReturn: Required<Pick<UseRefElementReturnType<ChildElement>["refElementReturn"], "getElement">>;
    rovingTabIndexChildParameters: Omit<Partial<Omit<UseRovingTabIndexSubInfo<any, any>, "getElement" | "subInfo" | "focusSelf">>, RticOmits> & Omit<{ noModifyTabIndex: boolean, focusSelf(e: ChildElement): void; }, RticOmits>;
}

export type UseRovingTabIndexChild<ChildElement extends Element, RtiSubInfo, ExtraFlagKeys extends string> = (a: UseRovingTabIndexChildParameters<ChildElement, RtiSubInfo, ExtraFlagKeys, never, never, RtiSubInfo>) => UseRovingTabIndexChildReturnTypeWithHooks<ChildElement>;

export interface UseRovingTabIndexChildReturnTypeInfo<ChildElement extends Element> {
    hasCurrentFocusParameters: Required<Pick<UseHasCurrentFocusParameters<ChildElement>["hasCurrentFocusParameters"], "onCurrentFocusedInnerChanged">>;
    //onFocusedInnerChanged: (focused: boolean, _prevFocused: boolean | undefined) => void;
    rovingTabIndexChildReturn: {
        tabbable: boolean;
        /** **STABLE** */
        getTabbable(): boolean;
        propsUnstable: h.JSX.HTMLAttributes<ChildElement>;
    }
}
export interface UseRovingTabIndexChildReturnTypeWithHooks<ChildElement extends Element> extends UseRovingTabIndexChildReturnTypeInfo<ChildElement> {
    /** *Unstable* */
    //rovingTabIndexChildProps: h.JSX.HTMLAttributes<ChildElement>;
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

    let { managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange }, rovingTabIndexParameters: { initialIndex, onTabbableIndexChange, onTabbableRender } } = parentParameters;

    initialIndex ??= 0;
    const stableOnTabbableRender = useStableCallback(onTabbableRender ?? (() => { }));
    /*const [_getAnyFocused, setAnyFocused] = usePassiveState<number>(useStableCallback((newCount: number, oldCount: number | undefined) => {
        if (oldCount == 0 && newCount > 0) {
            onTabbedInTo?.();
        }

        if (newCount == 0 && (oldCount ?? 0) > 0) {
            onTabbedOutOf?.();
        }
    }), returnZero);*/

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
                const nextChild = nextIndex == null ? null : children.getAt(nextIndex);
                //const prevChild = prevIndex == null ? null : parentReturnType.managedChildren.children.getAt(prevIndex);

                //if (prevChild != null)
                //    prevChild.subInfo.blurSelf();

                if (nextChild != null && fromUserInteraction) {
                    const element = nextChild.subInfo.getElement();
                    if (element) {
                        if (document.activeElement == null || !element.contains(document.activeElement))
                            nextChild.subInfo.focusSelf();
                    }
                }

            }

            return nextIndex;
        });

    }, []);

    // Any time the tabbable index changes,
    // notify the previous child that it's no longer tabbable,
    // and notify the next child that is allowed to be tabbed to.
    const { managedChildrenReturn, useManagedChild } = useManagedChildren<number, UseRovingTabIndexSubInfo<ChildElement, RtiSubInfo>, ExtraFlagKeys | "tabbable">({
        managedChildrenParameters: {
            onAfterChildLayoutEffect,
            onChildrenMountChange: useStableCallback<OnChildrenMountChange<number>>((mounted, unmounted) => { onChildrenMountChange?.(mounted, unmounted); reevaluateClosestFit(); }),
        },
    });

    const { children } = managedChildrenReturn;

    const { changeIndex, reevaluateClosestFit } = useChildrenFlag<UseRovingTabIndexSubInfo<ChildElement, RtiSubInfo>, ExtraFlagKeys | "tabbable">({ initialIndex, children, closestFit: true, key: "tabbable" });

    const useRovingTabIndexChild = useCallback<UseRovingTabIndexChild<ChildElement, RtiSubInfo, ExtraFlagKeys>>((childParameters): UseRovingTabIndexChildReturnTypeWithHooks<ChildElement> => {

        const {
            managedChildParameters: { index, flags },
            rovingTabIndexChildParameters: { focusSelf: focusSelfOverride, noModifyTabIndex, hidden },
            refElementReturn: { getElement },
            //hasFocusParameters: { onFocusedInnerChanged, ...hasFocusParameters },
            subInfo
        } = childParameters;

        useEffect(() => {
            reevaluateClosestFit();
        }, [!!hidden])


        const stableFocusSelf = useStableCallback(focusSelfOverride);
        const focusSelf = useCallback(() => {
            const element = getElement();
            if (element) {
                if (document.activeElement == null || !element.contains(document.activeElement))
                    stableFocusSelf(element);
            }
        }, []);

        /*const { activeElementReturn, hasFocusReturn, refElementReturn } = useHasFocus<ChildElement>({
            activeElementParameters,
            hasFocusParameters: {
                ,
                ...hasFocusParameters
            },
            refElementParameters
        });*/
        //const { getElement } = refElementReturn;

        const [tabbable, setTabbable, getTabbable] = useState(false);
        const tabbableFlags = useRef<ChildFlagOperations>({ get: getTabbable, set: setTabbable, isValid: useStableCallback(() => !hidden) });

        const _: void = useManagedChild({
            managedChildParameters: {
                index,
                flags: { ...flags, tabbable: tabbableFlags.current } as Partial<Record<ExtraFlagKeys | "tabbable", ChildFlagOperations>>,
            },
            subInfo: {
                focusSelf,
                getElement,
                hidden: !!hidden,
                subInfo
            }
        });

        useEffect(() => {
            if (tabbable)
                stableOnTabbableRender(index);
        }, [tabbable, index]);

        //const rovingTabIndexChildProps = useMergedProps(refElementProps, { tabIndex: noModifyTabIndex ? undefined : (tabbable ? 0 : -1) })

        return {
            hasCurrentFocusParameters: {
                onCurrentFocusedInnerChanged: useStableCallback((focused: boolean, _prevFocused: boolean | undefined) => {
                    if (focused) {
                        setTabbableIndex(index, false);
                    }
                })
            },

            rovingTabIndexChildReturn: {
                propsUnstable: { tabIndex: noModifyTabIndex ? undefined : (tabbable ? 0 : -1) },
                tabbable,
                getTabbable

            }
        }
    }, [/* Must remain stable */]);

    const focusSelf = useCallback(() => {
        const index = getTabbableIndex();
        if (index != null)
            children.getAt(index)?.subInfo.focusSelf?.();
        else
            setTabbableIndex(null, true);
    }, []);

    return {
        useRovingTabIndexChild,
        managedChildrenReturn,
        rovingTabIndexReturn: {
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
