import { Ref } from "preact";
import { useCallback, useRef } from "preact/hooks";
import { useLayoutEffect } from "./use-layout-effect";
import { useRefElement, UseRefElementProps, UseRefElementPropsParameters, UseRefElementPropsReturnType, UseRefElementReturnType } from "./use-ref-element";
import { useState } from "./use-state";


//export const IndexPending = Symbol("index-pending");

export interface ManagedChildInfo<T extends number | string> {

    /**
     * A key used to uniquely identify the child amongst its siblings.
     * The indices do not *necessarily* need to be sequential (especially
     * in the case of string indices), but other hooks that depend
     * on `useManagedChild` may specifically want sequentially-ordered
     * indices (e.g. `useLinearNavigation`)
     */
    index: T;
}

export interface UseManagedChildReturnType<E extends EventTarget> {
    element: E | null;
    getElement(): E | null;
    useManagedChildProps: UseRefElementProps<E>;
}

export type UsedManagedChild<I extends ManagedChildInfo<any>> = <E extends EventTarget>(info: I) => UseManagedChildReturnType<E>;
//export type UseManagedChildProps<E extends EventTarget> = <P extends UseManagedChildPropsParameters<E>>(props: P) => UseManagedChildPropsReturnType<E, P>;
//export type UseManagedChildPropsParameters<E extends EventTarget> = UseRefElementPropsParameters<E>;
//export type UseManagedChildPropsReturnType<E extends EventTarget, P extends UseManagedChildPropsParameters<E>> = void;


export interface UseChildManagerReturnType<I extends ManagedChildInfo<any>> {
    /**
     * A hook that must be called by every child component that
     * is to be managed by this one. The argument to the hook
     * is just the bag of properties to pass to the parent,
     * including the child's index.
     */
    useManagedChild: UsedManagedChild<I>;

    /**
     * An array of all currently managed children,
     * or rather the information they provided
     * the parent.
     */
    managedChildren: I[];

    indicesByElement: Map<EventTarget, I extends ManagedChildInfo<infer K> ? K : string | number>
}

/**
 * Allows a parent component to access information about certain
 * child components once they have rendered.
 * 
 * This hook is slightly more complicated in that it returns both a
 * prop-modifying hook, but also a hook that each child will need
 * to use: `useManagedChild`.  It's stable across renders, so just 
 * toss it into a `Context` so the children can have access to it.
 * This function registers the child with the parent and provides
 * it with any requested information, but doesn't do anything else
 * until it unmounts and retracts that information.
 */
export function useChildManager<I extends ManagedChildInfo<any>>(): UseChildManagerReturnType<I> {

    // This is blindly updated any time a child mounts or unmounts itself.
    // Used to make sure that any time the array of managed children updates,
    // we also re-render.
    const [childUpdateIndex, setChildUpdateIndex] = useState(0);
    const managedChildren = useRef<I[]>([]);
    const indicesByElement = useRef<Map<EventTarget, I extends ManagedChildInfo<infer K> ? K : string | number>>(new Map());

    const useManagedChild: UsedManagedChild<I> = useCallback(<ChildType extends EventTarget>(info: I) => {
        const { element, getElement, useRefElementProps } = useRefElement<ChildType>();


        // As soon as the component mounts, notify the parent and request a rerender.
        useLayoutEffect(([prevElement, prevIndex], changes) => {
            if (element) {
                indicesByElement.current.set(element, info.index);
                if (managedChildren.current[info.index] != undefined) {
                    console.assert(info.index == undefined, "Two children with the same index were added, which may result in unexpected behavior.");
                    debugger;   // Intentional
                }

                setChildUpdateIndex(c => ++c);
                managedChildren.current[info.index] = { ...info };

                return () => {
                    setChildUpdateIndex(c => ++c);
                    delete managedChildren.current[info.index];
                    indicesByElement.current.delete(element);
                }
            }
        }, [element, info.index]);

        // Any time our child props change, make that information available generally.
        // *Don't re-render*, otherwise we'd be stuck in an
        // infinite loop every time an anonymous function is passed.
        // It comes in from the props so the child was already updated by it --
        // we don't need the parent to re-render every single child any time
        // "onClick" updates or whatever.  The relevant child already knows,
        // and that's what matters.
        useLayoutEffect(() => {
            if (managedChildren.current[info.index] != undefined)
                managedChildren.current[info.index] = { ...info };
        }, [...Object.entries(info).flat()]);

        return { element, getElement, useManagedChildProps: useRefElementProps }
    }, []);


    return {
        useManagedChild,
        managedChildren: managedChildren.current,
        indicesByElement: indicesByElement.current
    }
}
