import { Context, h, Ref } from "preact";
import { useCallback, useRef } from "preact/hooks";
import { useRefElement, UseRefElementPropsReturnType } from "./use-ref-element";
import { useLayoutEffect } from "./use-layout-effect";
import { MergedProps, useMergedProps } from "./use-merged-props"
import { useState } from "./use-state";
import { useTimeout } from "./use-timeout";
import { useChildManager, ManagedChildInfo } from "./use-child-manager";
import { useStableGetter } from "./use-stable-getter";
import { useHasFocus, UseHasFocusPropsReturnType } from "./use-has-focus";




/** Return type of `useRovingTabIndex` */
export interface UseRovingTabIndexReturnType<ParentElement extends Element, I extends RovingTabIndexChildInfo<any>> {
    useRovingTabIndexProps: UseRovingTabIndexProps<ParentElement>;
    useRovingTabIndexChild: UseRovingTabIndexChild<I>;
    childCount: number;
    managedChildren: I[];

    // Focuses whatever is the currently tabbable element
    focusSelf(): void;

    /*roveToIndex: (index: number, focus?: "focus" | undefined) => void;
    roveToNext: (focus?: "focus" | undefined) => void;
    roveToPrev: (focus?: "focus" | undefined) => void;
    roveToStart: (focus?: "focus" | undefined) => void;
    roveToEnd: (focus?: "focus" | undefined) => void;*/
}

/** Return type of `useRovingTabIndexChild` */
export interface UseRovingTabIndexChildReturnType<ChildElement extends Element> {
    useRovingTabIndexChildProps: UseRovingTabIndexChildProps<ChildElement>;
    useRovingTabIndexSiblingProps: UseRovingTabIndexSiblingProps<ChildElement>;
    tabbable: boolean;
}



/** Arguments passed to the parent `useRovingTabIndex` */
export interface UseRovingTabIndexParameters<T extends (number | string)> {
    tabbableIndex: T;
    //focusOnChange: boolean;
}

/** Arguments passed to the child 'useRovingTabIndexChild` */
export interface RovingTabIndexChildInfo<T extends number | string> extends ManagedChildInfo<T> {
    setTabbable(tabbable: boolean, focus: "focus" | undefined): void;
}

/** Type of the parent's prop-modifying function */
export type UseRovingTabIndexProps<ParentElement extends Element> = <P extends h.JSX.HTMLAttributes<ParentElement>>(props: P) => MergedProps<ParentElement, UseHasFocusPropsReturnType<ParentElement, {}>, P>;

/** Type of the child's sub-hook */
export type UseRovingTabIndexChild<I extends RovingTabIndexChildInfo<any>> = <ChildElement extends Element>(props: Omit<I, "setTabbable">) => UseRovingTabIndexChildReturnType<ChildElement>;

/** Return type of the parent `useRovingTabIndexProps` */
export type UseRovingTabIndexPropsReturnType<ParentElement extends Element, P extends h.JSX.HTMLAttributes<ParentElement>> = MergedProps<ParentElement, UseRefElementPropsReturnType<ParentElement, { /*onKeyDown: (e: KeyboardEvent) => void;*/ }>, P>

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
 */
export function useRovingTabIndex<ParentElement extends Element, I extends RovingTabIndexChildInfo<any>>({ tabbableIndex }: UseRovingTabIndexParameters<I extends RovingTabIndexChildInfo<infer T> ? T : string | number>): UseRovingTabIndexReturnType<ParentElement, I> {

    const { focused, focusedInner, useHasFocusProps } = useHasFocus<ParentElement>();
    const getTabbableIndex = useStableGetter(tabbableIndex);

    // Keep track of three things related to the currently tabbable element's index:
    // What it is,
    // What it was the last time,
    // Whether, when we render this component and it's changed, to also focus the element that was made tabbable.
    // For this reason, boolean | null is semantically intentional, if technically unnecessary -- 
    // true or false imply a change just happened and that tabbableIndex != prevTabbable.current, and null implies no change.
    //const [tabbableIndex, setTabbableIndex, getTabbableIndex] = useState(0);
    const prevTabbable = useRef(-Infinity);

    // Call the hook that allows us to collect information from children who provide it
    const { managedChildren, useManagedChild } = useChildManager<I>();
    const childCount = managedChildren.length;

    // Doesn't do anything, but here because there's a pretty decent chance it might in the future.
    const useRovingTabIndexProps = useCallback(<P extends {}>(props: P) => useMergedProps<ParentElement>()(useHasFocusProps({}), props), []) as UseRovingTabIndexProps<ParentElement>;

    const focusOnChange = (focusedInner != false);

    // Any time the tabbable index changes,
    // notify the previous child that it's no longer tabbable,
    // and notify the next child that is allowed to be tabbed to.
    useLayoutEffect(() => {
        if (tabbableIndex != prevTabbable.current) {

            if (managedChildren[tabbableIndex]) {
                managedChildren[prevTabbable.current]?.setTabbable(false, undefined);
                managedChildren[tabbableIndex].setTabbable(true, focusOnChange? "focus" : undefined);
                prevTabbable.current = tabbableIndex;
            }
        }

    }, [tabbableIndex, focusOnChange]);

    const focusSelf = useCallback(() => {
        managedChildren[tabbableIndex].setTabbable(true, "focus");
     }, [tabbableIndex]);

    const useRovingTabIndexChild = useCallback<UseRovingTabIndexChild<I>>(<ChildElement extends Element>(info: Omit<I, "setTabbable">): UseRovingTabIndexChildReturnType<ChildElement> => {


        const setTabbable = useCallback((tabbable: boolean, shouldFocus: "focus" | undefined) => {
            setTabbable2(tabbable);
            if (tabbable && shouldFocus)
                setShouldFocus(!!shouldFocus);
        }, []);

        let newInfo = {
            ...info,
            setTabbable
        } as I;

        const { element, getElement, useManagedChildProps } = useManagedChild<ChildElement>(newInfo);
        const [tabbable, setTabbable2] = useState(getTabbableIndex() == info.index);
        const [shouldFocus, setShouldFocus] = useState(false);


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

            //const { element, useRefElementProps } = useRefElement<ChildElement>();

            useLayoutEffect(() => {
                if (element && shouldFocus && "focus" in (element as Element as (Element & HTMLOrSVGElement))) {
                    (element as Element as (Element & HTMLOrSVGElement)).focus();
                    setShouldFocus(false);
                }
            }, [element, shouldFocus])

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
        useRovingTabIndexProps,
        useRovingTabIndexChild,
        childCount,
        managedChildren,
        focusSelf
    }
}
