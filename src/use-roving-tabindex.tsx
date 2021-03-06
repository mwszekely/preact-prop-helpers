import { h } from "preact";
import { useCallback, useEffect } from "preact/hooks";
import { ManagedChildInfo, useChildFlag, useChildManager, UseChildManagerReturnType } from "./use-child-manager";
import { useMergedProps } from "./use-merged-props";
import { useStableGetter } from "./use-stable-getter";
import { useState } from "./use-state";

/** Return type of `useRovingTabIndex` */
export interface UseRovingTabIndexReturnType<I extends UseRovingTabIndexChildInfo> extends Omit<UseChildManagerReturnType<I>, "useManagedChild"> {
    useRovingTabIndexChild: UseRovingTabIndexChild<I>;
    childCount: number;

    // Focuses whatever is the currently tabbable element
    focusCurrent: null | (() => void);
}

/** Return type of `useRovingTabIndexChild` */
export interface UseRovingTabIndexChildReturnType<ChildElement extends Element> {
    useRovingTabIndexChildProps: (props: h.JSX.HTMLAttributes<ChildElement>) => h.JSX.HTMLAttributes<ChildElement>;
    useRovingTabIndexSiblingProps: <SiblingElement extends Element>(props: h.JSX.HTMLAttributes<SiblingElement>) => h.JSX.HTMLAttributes<SiblingElement>;
    tabbable: boolean | null;
}



/** Arguments passed to the parent `useRovingTabIndex` */
export interface UseRovingTabIndexParameters {

    /**
     * `null` is special-use only to indicate that the entire component is disabled and not tabbable.
     */
    tabbableIndex: number | null;

    /**
     * Whenever the currently tabbable child changes, a decision needs to be made
     * about whether the keyboard focus should follow that change because the
     * user pressed Down in a vertical list, or alternatively if it was just
     * something completely unrelated on the other side of the page where we WOULDN'T
     * want to yank keyboard focus all the way back there.
     * 
     * In general, this should just be hooked up to a parent's "getFocusedInner"
     * function, so that we only focus on change when the component as a whole
     * has focus somewhere inside, but you can widen/narrow that if needed.
     */
    shouldFocusOnChange(): boolean;
}

export type UseRovingTabIndexChildParameters<I extends UseRovingTabIndexChildInfo> = Omit<I, "setTabbable" | "getTabbable" | "rerenderAndFocus">;

/** Arguments passed to the child 'useRovingTabIndexChild` */
export interface UseRovingTabIndexChildInfo extends ManagedChildInfo<number> {
    setTabbable(tabbable: boolean): void;
    getTabbable(): boolean | null;
    rerenderAndFocus(): void;
}



//export type UseRovingTabIndexChildParameters<I extends RovingTabIndexChildInfo> = Omit<I, "setTabbable" | "getTabbable" | "rerenderAndFocus">;

/** Type of the child's sub-hook */
export type UseRovingTabIndexChild<I extends UseRovingTabIndexChildInfo> = <ChildElement extends Element>(props: I) => UseRovingTabIndexChildReturnType<ChildElement>;

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
export function useRovingTabIndex<I extends UseRovingTabIndexChildInfo>({ shouldFocusOnChange: foc, tabbableIndex }: UseRovingTabIndexParameters): UseRovingTabIndexReturnType<I> {

    const getShouldFocusOnChange = useStableGetter(foc);

    const getTabbableIndex = useStableGetter(tabbableIndex);

    // Call the hook that allows us to collect information from children who provide it
    const { managedChildren, childCount, useManagedChild, indicesByElement, ...rest } = useChildManager<I>();

    // Any time the tabbable index changes,
    // notify the previous child that it's no longer tabbable,
    // and notify the next child that is allowed to be tabbed to.
    useChildFlag({
        activatedIndex: tabbableIndex,
        managedChildren,
        closestFit: true,
        setChildFlag: (index, tabbable) => {
            if (index != null)
                (managedChildren[index as keyof typeof managedChildren] as I)?.setTabbable(tabbable);
        },
        getChildFlag: (index) => (managedChildren[index]?.getTabbable() ?? null)
    });

    const useRovingTabIndexChild = useCallback<UseRovingTabIndexChild<I>>(<ChildElement extends Element>(info: UseRovingTabIndexChildParameters<I>): UseRovingTabIndexChildReturnType<ChildElement> => {

        const [rrafIndex, setRrafIndex] = useState(1);
        const rerenderAndFocus = useCallback(() => { setRrafIndex(i => ++i) }, []);
        const [tabbable, setTabbable, getTabbable] = useState<boolean | null>(null);


        const newInfo = {
            ...info,
            rerenderAndFocus,
            setTabbable: useCallback((tabbable: boolean) => { setTabbable(tabbable); }, []),
            getTabbable
        } as any as I;

        const { getElement, useManagedChildProps } = useManagedChild<ChildElement>(newInfo);

        useEffect(() => {
            const element = getElement();
            if (tabbable) {
                const shouldFocusOnChange = getShouldFocusOnChange()();
                if (shouldFocusOnChange && "focus" in (element as Element as (Element & HTMLOrSVGElement))) {
                    requestAnimationFrame(() => {
                        queueMicrotask(() => {
                            (element as Element as (Element & HTMLOrSVGElement)).focus();
                        });
                    });
                }
            }
        }, [tabbable, rrafIndex]);

        function useRovingTabIndexSiblingProps<SiblingElement extends Element>({ tabIndex, ...props }: h.JSX.HTMLAttributes<SiblingElement>): h.JSX.HTMLAttributes<SiblingElement> {

            if (tabIndex == null) {
                if (tabbable)
                    tabIndex = 0;
                else
                    tabIndex = -1;
            }

            return useMergedProps<SiblingElement>({ tabIndex }, props);
        }


        function useRovingTabIndexChildProps({ tabIndex, ...props }: h.JSX.HTMLAttributes<ChildElement>): h.JSX.HTMLAttributes<ChildElement> {


            if (tabIndex == null) {
                if (tabbable)
                    tabIndex = 0;
                else
                    tabIndex = -1;
            }

            return useMergedProps<ChildElement>(useManagedChildProps({ tabIndex }), props);
        }

        return {
            useRovingTabIndexChildProps,
            useRovingTabIndexSiblingProps,
            tabbable
        }
    }, [useManagedChild]);

    return {
        useRovingTabIndexChild,
        childCount,
        managedChildren,
        indicesByElement,
        focusCurrent: useCallback(() => {
            if (managedChildren[getTabbableIndex() ?? 0].getTabbable()) {
                managedChildren[getTabbableIndex() ?? 0]?.rerenderAndFocus();
            }
            else {
                // For whatever reason, the previously tabbable child
                // is no longer tabbable without us knowing about it.
                // Maybe it unmounted?
                // Either way, try to find the newly-selected child.

                // (I don't think this code path has ever been run)
                /* eslint-disable no-debugger */
                debugger;
                let i = getTabbableIndex() ?? 0;
                let j = i + 1;
                while (i >= 0) {
                    --i;
                    if (managedChildren[getTabbableIndex() ?? 0].getTabbable()) {
                        managedChildren[getTabbableIndex() ?? 0]?.rerenderAndFocus();
                        return;
                    }
                }
                while (j < managedChildren.length) {
                    ++j;
                    if (managedChildren[getTabbableIndex() ?? 0].getTabbable()) {
                        managedChildren[getTabbableIndex() ?? 0]?.rerenderAndFocus();
                        return;
                    }
                }
            }
        }, []),

        ...rest
    }
}
