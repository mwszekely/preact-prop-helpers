import { h } from "preact";
import { StateUpdater, useCallback, useEffect, useRef } from "preact/hooks";
import { ManagedChildInfo, useChildFlag, useChildManager, UseChildManagerReturnType } from "./use-child-manager";
import { MergedProps, useMergedProps } from "./use-merged-props";
import { UseRefElementPropsReturnType } from "./use-ref-element";
import { useStableGetter } from "./use-stable-getter";
import { useState } from "./use-state";

export type OmitStrong<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;



/** Return type of `useRovingTabIndex` */
export interface UseRovingTabIndexReturnType<I extends UseRovingTabIndexChildInfo> extends OmitStrong<UseChildManagerReturnType<I>, "useManagedChild"> {
    useRovingTabIndexChild: UseRovingTabIndexChild<I>;
    childCount: number;

    // Focuses whatever is the currently tabbable element
    focusCurrent: null | (() => void);
}

/** Return type of `useRovingTabIndexChild` */
export interface UseRovingTabIndexChildReturnType<ChildElement extends Element> {
    useRovingTabIndexChildProps: UseRovingTabIndexChildProps<ChildElement>;
    useRovingTabIndexSiblingProps: UseRovingTabIndexSiblingProps<ChildElement>;
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

export type UseRovingTabIndexChildParameters<I extends UseRovingTabIndexChildInfo> = OmitStrong<I, "setTabbable" | "getTabbable" | "rerenderAndFocus">;

/** Arguments passed to the child 'useRovingTabIndexChild` */
export interface UseRovingTabIndexChildInfo extends ManagedChildInfo<number> {
    setTabbable(tabbable: boolean): void;
    getTabbable(): boolean | null;
    rerenderAndFocus(): void;
}



//export type UseRovingTabIndexChildParameters<I extends RovingTabIndexChildInfo> = OmitStrong<I, "setTabbable" | "getTabbable" | "rerenderAndFocus">;

/** Type of the child's sub-hook */
export type UseRovingTabIndexChild<I extends UseRovingTabIndexChildInfo> = <ChildElement extends Element>(props: I) => UseRovingTabIndexChildReturnType<ChildElement>;

export type UseRovingTabIndexChildPropsParameters<ChildElement extends Element> = h.JSX.HTMLAttributes<ChildElement>;
export type UseRovingTabIndexSiblingPropsParameters<ChildElement extends Element> = h.JSX.HTMLAttributes<ChildElement>;

/** Return type of the child `useRovingTabIndexChildProps` */
export type UseRovingTabIndexChildPropsReturnType<ChildElement extends Element, P extends h.JSX.HTMLAttributes<ChildElement>> = MergedProps<ChildElement, UseRefElementPropsReturnType<ChildElement, { tabIndex: number; }>, OmitStrong<P, "tabIndex">>;
export type UseRovingTabIndexSiblingPropsReturnType<ChildElement extends Element, P extends h.JSX.HTMLAttributes<ChildElement>> = P; //MergedProps<ChildElement, { tabIndex: number; }, OmitStrong<P, "tabIndex">>;

export type UseRovingTabIndexChildProps<ChildElement extends Element> = <P extends UseRovingTabIndexChildPropsParameters<ChildElement>>(props: P) => UseRovingTabIndexChildPropsReturnType<ChildElement, P>
export type UseRovingTabIndexSiblingProps<ChildElement extends Element> = <P extends UseRovingTabIndexSiblingPropsParameters<ChildElement>>(props: P) => UseRovingTabIndexSiblingPropsReturnType<ChildElement, P>

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

    const [rerenderAndFocus, setRerenderAndFocus] = useState<(() => void) | null>(null);
    const getShouldFocusOnChange = useStableGetter(foc);

    const getTabbableIndex = useStableGetter(tabbableIndex);
    const prevTabbable = useRef(-Infinity);

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
    })

    const focusSelf = useCallback(() => {
        if (tabbableIndex != null)
            managedChildren[tabbableIndex].setTabbable(true);
    }, [tabbableIndex]);

    const useRovingTabIndexChild = useCallback<UseRovingTabIndexChild<I>>(<ChildElement extends Element>(info: UseRovingTabIndexChildParameters<I>): UseRovingTabIndexChildReturnType<ChildElement> => {

        //const [rrafIndex, setRrafIndex] = useState(1);
        //const rerenderAndFocus = useCallback(() => { setRrafIndex(i => ++i) }, []);
        const [tabbable, setTabbable, getTabbable] = useState<boolean | null>(null);


        let newInfo = {
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
        }, [tabbable]);

        function useRovingTabIndexSiblingProps<P extends UseRovingTabIndexSiblingPropsParameters<any>>({ tabIndex, ...props }: P): UseRovingTabIndexSiblingPropsReturnType<any, P> {

            if (tabIndex == null) {
                if (tabbable)
                    tabIndex = 0;
                else
                    tabIndex = -1;
            }

            return useMergedProps<Element>()({ tabIndex }, props) as P;
        }


        function useRovingTabIndexChildProps<P extends UseRovingTabIndexChildPropsParameters<ChildElement>>({ tabIndex, ...props }: P): UseRovingTabIndexChildPropsReturnType<ChildElement, P> {


            if (tabIndex == null) {
                if (tabbable)
                    tabIndex = 0;
                else
                    tabIndex = -1;
            }

            return useMergedProps<ChildElement>()(useManagedChildProps({ tabIndex }), props);
        };

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
        focusCurrent: rerenderAndFocus,

        ...rest
    }
}
