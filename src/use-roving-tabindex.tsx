import { Context, h, Ref } from "preact";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { useRefElement, UseRefElementPropsReturnType } from "./use-ref-element";
import { useLayoutEffect } from "./use-layout-effect";
import { MergedProps, useMergedProps } from "./use-merged-props"
import { useState } from "./use-state";
import { useTimeout } from "./use-timeout";
import { useChildManager, ManagedChildInfo, UseChildManagerReturnType, useChildFlag } from "./use-child-manager";
import { useStableGetter } from "./use-stable-getter";
import { useActiveElement } from "use-active-element";




/** Return type of `useRovingTabIndex` */
export interface UseRovingTabIndexReturnType<I extends RovingTabIndexChildInfo> extends Omit<UseChildManagerReturnType<I>, "useManagedChild"> {
    useRovingTabIndexChild: UseRovingTabIndexChild<I>;
    childCount: number;

    // Focuses whatever is the currently tabbable element
    focusCurrent: null | (() => void);
}

/** Return type of `useRovingTabIndexChild` */
export interface UseRovingTabIndexChildReturnType<ChildElement extends Element> {
    useRovingTabIndexChildProps: UseRovingTabIndexChildProps<ChildElement>;
    useRovingTabIndexSiblingProps: UseRovingTabIndexSiblingProps<ChildElement>;
    tabbable: boolean;
}



/** Arguments passed to the parent `useRovingTabIndex` */
export interface UseRovingTabIndexParameters {

    /**
     * `null` is special-use only to indicate that the entire component is disabled and not tabbable.
     */
    tabbableIndex: number | null;
    shouldFocusOnChange(): boolean;
}

/** Arguments passed to the child 'useRovingTabIndexChild` */
export interface RovingTabIndexChildInfo extends ManagedChildInfo<number> {
    setTabbable(tabbable: boolean): void;
    rerenderAndFocus(): void;
}

export type UseRovingTabIndexChildParameters<I extends RovingTabIndexChildInfo> = Omit<I, "setTabbable" | "rerenderAndFocus">;

/** Type of the child's sub-hook */
export type UseRovingTabIndexChild<I extends RovingTabIndexChildInfo> = <ChildElement extends Element>(props: UseRovingTabIndexChildParameters<I>) => UseRovingTabIndexChildReturnType<ChildElement>;

export type UseRovingTabIndexChildPropsParameters<ChildElement extends Element> = h.JSX.HTMLAttributes<ChildElement>;
export type UseRovingTabIndexSiblingPropsParameters<ChildElement extends Element> = h.JSX.HTMLAttributes<ChildElement>;

/** Return type of the child `useRovingTabIndexChildProps` */
export type UseRovingTabIndexChildPropsReturnType<ChildElement extends Element, P extends h.JSX.HTMLAttributes<ChildElement>> = MergedProps<ChildElement, UseRefElementPropsReturnType<ChildElement, { tabIndex: number; }>, Omit<P, "tabIndex">>;
export type UseRovingTabIndexSiblingPropsReturnType<ChildElement extends Element, P extends h.JSX.HTMLAttributes<ChildElement>> = P; //MergedProps<ChildElement, { tabIndex: number; }, Omit<P, "tabIndex">>;

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
 * `focusOnChange` should be set to true if focus is 
 * contained within whatever element contains the roving tab index.
 * Generally as simple as the following:
 * ```
 * const { focused, focusedInner, useHasFocusProps } = useHasFocus<ParentElement>();
 * const focusOnChange = (focusedInner != false);
 * ```
 * It's not included here because `useRovingTabIndex` doesn't know 
 * anything about the container element, only children elements.
 * And just as well! Children should be allowed at the root, 
 * regardless of if it's the whole app or just a given component.
 */
export function useRovingTabIndex<I extends RovingTabIndexChildInfo>({ shouldFocusOnChange: foc, tabbableIndex }: UseRovingTabIndexParameters): UseRovingTabIndexReturnType<I> {

    const [rerenderAndFocus, setRerenderAndFocus] = useState<(() => void) | null>(null);
    const getShouldFocusOnChange = useStableGetter(foc);

    const getTabbableIndex = useStableGetter(tabbableIndex);
    const prevTabbable = useRef(-Infinity);

    // Call the hook that allows us to collect information from children who provide it
    const { managedChildren, childCount, useManagedChild, indicesByElement, ...rest } = useChildManager<I>();

    // Any time the tabbable index changes,
    // notify the previous child that it's no longer tabbable,
    // and notify the next child that is allowed to be tabbed to.
    useChildFlag(tabbableIndex, childCount, (index, tabbable) => {
        if (index != null)
            (managedChildren[index as keyof typeof managedChildren] as I)?.setTabbable(tabbable);
    })

    const focusSelf = useCallback(() => {
        if (tabbableIndex != null)
            managedChildren[tabbableIndex].setTabbable(true);
    }, [tabbableIndex]);

    const useRovingTabIndexChild = useCallback<UseRovingTabIndexChild<I>>(<ChildElement extends Element>(info: UseRovingTabIndexChildParameters<I>): UseRovingTabIndexChildReturnType<ChildElement> => {

        const [rrafIndex, setRrafIndex] = useState(1);
        const rerenderAndFocus = useCallback(() => { setRrafIndex(i => ++i) }, [])


        let newInfo = {
            ...info,
            rerenderAndFocus,
            setTabbable: useCallback((tabbable: boolean) => { setTabbable(tabbable); }, [])
        } as any as I;

        const { element, getElement, useManagedChildProps } = useManagedChild<ChildElement>(newInfo);

        // TODO: Using getTabbableIndex during render phase on mount
        const [tabbable, setTabbable] = useState(getTabbableIndex() == info.index);

        useEffect(() => {
            if (element && tabbable) {
                setRerenderAndFocus(_ => rerenderAndFocus);
                const shouldFocusOnChange = getShouldFocusOnChange();
                if (shouldFocusOnChange() && "focus" in (element as Element as (Element & HTMLOrSVGElement))) {
                    requestAnimationFrame(() => {
                        queueMicrotask(() => {
                            (element as Element as (Element & HTMLOrSVGElement)).focus();
                        });
                    });
                }
            }
        }, [element, tabbable, rrafIndex]);

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
