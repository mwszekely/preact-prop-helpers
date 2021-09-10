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

type InfoToKey<I extends ManagedChildInfo<any>> = I["index"];
type ManagedChildren<T extends number | string, I extends ManagedChildInfo<T>> = T extends string ? Record<string, I> : I[];

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
     * 
     * The index that the child provided is where it is located in this structure. For numeric IDs, this is just an array, with each object at that location in the array.
     * 
     * This is generally just an array, though it can be a Record instead if string IDs are used instead of numeric IDs.
     */
    managedChildren: ManagedChildren<InfoToKey<I>, I>;

    /**
     * Separate from `managedChildren`, this keeps track of all mounted children in the order that they mounted.
     * `getMountIndex` will return the index into this array given the child's index.
     *  
     * When unmounted, its entry becomes null.
     * 
     * This and `managedChildren` will always have the same contents, but likely in a different order and in different locations.
     */
    mountedChildren: (null | I)[];

    /**
     * Returns the current number of children being managed 
     * (specifically the number of children that have mounted *and* are still mounted.).
     * 
     * For most array-like child structures with numeric IDs, this will match up with `managedChildren.length`.
     */
    childCount: number;

    /**
     * The total number of children that have been mounted, regardless of if they've since unmounted themselves.
     */
    totalChildrenMounted: number;

    /**
     * The total number of children that have unmounted -- this is 0 until at least some time after `totalChildrenMounted` is >0.
     */
    totalChildrenUnounted: number;

    /**
     * Returns in what position this child mounted. If this is the most recently mounted child, it will return a value equal to `totalChildrenMounted` - 1.
     * 
     * **On the child side, cannot be used inside useLayoutEffect** (On the parent side it's fine at any point).  If multiple children are mounted on the same frame, their mount indices relative to each other will be arbitrary but consistent (assuming Preact's is).
     */
    getMountIndex(index: InfoToKey<I>): number;

    /**
     * Given the Element that the child mounts as, returns its `index` prop.
     */
    indicesByElement: Map<EventTarget, InfoToKey<I>>
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
    type K = (I extends ManagedChildInfo<infer K2> ? K2 : string | number);

    // This is blindly updated any time a child mounts or unmounts itself.
    // Used to make sure that any time the array of managed children updates,
    // we also re-render.
    const [childUpdateIndex, setChildUpdateIndex] = useState(0);
    const [totalChildrenMounted, setTotalChildrenMounted, getTotalChildrenMounted] = useState(0);
    const [totalChildrenUnounted, setTotalChildrenUnounted, getTotalChildrenUnounted] = useState(0);
    const childrenCurrentlyMounted = totalChildrenMounted - totalChildrenUnounted;
    const managedChildren = useRef<ManagedChildren<InfoToKey<I>, I>>([] as any as ManagedChildren<InfoToKey<I>, I> /** TODO: Any problems caused by using an array when it should be an object? */);
    const mountedChildren = useRef<(null | I)[]>([]);
    const mountOrder = useRef<Map<K, number>>(new Map());
    const indicesByElement = useRef<Map<EventTarget, K>>(new Map());

    const getMountIndex = useCallback((index: K) => { return mountOrder.current.get(index)!; }, []);

    const useManagedChild: UsedManagedChild<I> = useCallback(<ChildType extends EventTarget>(info: I) => {
        const { element, getElement, useRefElementProps } = useRefElement<ChildType>();

        useLayoutEffect(() => {
            let index = getTotalChildrenMounted();
            mountOrder.current.set(info.index, index);
            mountedChildren.current[index] = info;
            setTotalChildrenMounted(t => ++t);
            return () => { mountOrder.current.delete(info.index); mountedChildren.current[index] = null; setTotalChildrenUnounted(t => ++t); };
        }, [info.index]);

        // As soon as the component mounts, notify the parent and request a rerender.
        useLayoutEffect(([prevElement, prevIndex], changes) => {
            if (element) {
                indicesByElement.current.set(element, info.index);
                if (managedChildren.current[info.index as keyof ManagedChildren<InfoToKey<I>, I>] != undefined) {
                    console.assert(info.index == undefined, "Two children with the same index were added, which may result in unexpected behavior.");
                    debugger;   // Intentional
                }

                setChildUpdateIndex(c => ++c);
                managedChildren.current[info.index as keyof ManagedChildren<InfoToKey<I>, I>] = { ...info } as any;

                return () => {
                    setChildUpdateIndex(c => ++c);
                    delete managedChildren.current[info.index as keyof ManagedChildren<InfoToKey<I>, I>];
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
            if (managedChildren.current[info.index as keyof ManagedChildren<InfoToKey<I>, I>] != undefined)
                managedChildren.current[info.index as keyof ManagedChildren<InfoToKey<I>, I>] = { ...info } as any;
        }, [...Object.entries(info).flat()]);

        return { element, getElement, useManagedChildProps: useRefElementProps }
    }, []);


    return {
        useManagedChild,
        childCount: childrenCurrentlyMounted,
        managedChildren: managedChildren.current,
        mountedChildren: mountedChildren.current,
        indicesByElement: indicesByElement.current,
        totalChildrenMounted,
        totalChildrenUnounted,
        getMountIndex
    }
}
