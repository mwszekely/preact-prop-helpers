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

    /**
     * A set containing every index that has unmounted but not ever re-mounted itself.
     * 
     * In a numeric, linear list, this would represent either holes in the list, or spaces after the end of the list.
     */
    deletedIndices: Set<InfoToKey<I>>;
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
    type K = InfoToKey<I>

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
    const deletedIndices = useRef<Set<K>>(new Set<K>());

    // Used to keep track of indices that have "over-mounted" and by how much.
    // We need this so that we don't erase saved information when a component
    // "overmounts" over another which then, correctly, switches *itself* to something else.
    // In general, this should only happen when components are swapping between indices.
    // By the time they're done, this map should be all 0s again, at which point
    // it's okay to actually run the unmount code.
    // 
    // TODO: throw a console.assert somewhere to make up for the lost 
    // "are you sure you want to overwrite this child's index!" assertion.
    // Namely, is this map all 0s when the parent element re-renders? 
    // Probably not because of setChildUpdateIndex
    const overmountCount = useRef(new Map<K, number>());

    const getMountIndex = useCallback((index: K) => { return mountOrder.current.get(index)!; }, []);

    const useManagedChild: UsedManagedChild<I> = useCallback(<ChildType extends EventTarget>(info: I) => {
        const { element, getElement, useRefElementProps } = useRefElement<ChildType>();

        useLayoutEffect(() => {
            let index = getTotalChildrenMounted();
            mountOrder.current.set(info.index, index);
            mountedChildren.current[index] = info;
            setTotalChildrenMounted(t => ++t);
            return () => {
                mountOrder.current.delete(info.index);
                mountedChildren.current[index] = null;
                setTotalChildrenUnounted(t => ++t);

            };
        }, [info.index]);

        // As soon as the component mounts, notify the parent and request a rerender.
        useLayoutEffect(([prevElement, prevIndex], changes) => {
            if (element) {
                indicesByElement.current.set(element, info.index);
                deletedIndices.current.delete(info.index);
                if (managedChildren.current[info.index as keyof ManagedChildren<InfoToKey<I>, I>] != undefined) {
                    overmountCount.current.set(info.index, (overmountCount.current.get(info.index) ?? 0) + 1);
                }

                setChildUpdateIndex(c => ++c);
                managedChildren.current[info.index as keyof ManagedChildren<InfoToKey<I>, I>] = { ...info } as any;

                return () => {
                    setChildUpdateIndex(c => ++c);
                    if ((overmountCount.current.get(info.index) ?? 0) > 0) {
                        overmountCount.current.set(info.index, (overmountCount.current.get(info.index) ?? 0) - 1);
                    }
                    else {
                        delete managedChildren.current[info.index as keyof ManagedChildren<InfoToKey<I>, I>];
                        deletedIndices.current.add(info.index);

                        if (typeof info.index === "number") {
                            while (managedChildren.current.length && (managedChildren.current as I[])[(managedChildren.current as I[]).length - 1] === undefined)
                                (managedChildren.current as I[]).length -= 1;
                        }
                        indicesByElement.current.delete(element);
                    }
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
        getMountIndex,
        deletedIndices: deletedIndices.current
    }
}


/**
 * Helper function for letting children know when they are or are not the
 * current selected/expanded/focused/whatever child.
 * 
 * Automatically handles when children are mounted & unmounted and such.
 * 
 * @param activatedIndex What index the current selected (etc.) child is
 * @param length How many children exist (as managedChildren.length)
 * @param setFlag A function that probably looks like (i, flag) => managedChildren[i].setActive(flag)
 */
export function useChildFlag(activatedIndex: number | null | undefined, length: number, setFlag: (i: number, set: boolean) => void) {

    const [prevActivatedIndex, setPrevActivatedIndex, getPrevActivatedIndex] = useState<number | null>(null);
    const [prevChildCount, setPrevChildCount, getPrevChildCount] = useState(length);

    // Any time the number of components changes,
    // reset any initial, possibly incorrect state they might have had, just in case.
    useLayoutEffect(() => {
        const direction = Math.sign(length - getPrevChildCount());
        if (direction !== 0) {
            for (let i = getPrevChildCount() ?? 0; i != length; i += direction) {
                setFlag(i, i === activatedIndex);
            }
            setPrevChildCount(length);
        }


        const prevActivatedIndex = getPrevActivatedIndex();
        if (prevActivatedIndex != null && length > 0 && prevActivatedIndex >= length) {
            // The number of children shrank below whatever the currently selected component was.
            // Change the index to the last one still mounted.
            setFlag(length - 1, true);
            // (No need to unset any of them since they already unmounted themselves)
            // (Also no way to unset them anyway for the same reason)
        }
    }, [setFlag, activatedIndex, length])

    useLayoutEffect(() => {

        // Deactivate the previously activated component
        const prevActivatedIndex = getPrevActivatedIndex();
        if (prevActivatedIndex != activatedIndex) {
            if (prevActivatedIndex != null && prevActivatedIndex >= 0 && prevActivatedIndex < length)
                setFlag(prevActivatedIndex, false);
        }

        // Activate the current component
        if (activatedIndex != null && activatedIndex >= 0 && activatedIndex < length) {
            setFlag(activatedIndex, true);
            setPrevActivatedIndex(activatedIndex);
        }

    }, [setFlag, activatedIndex, length]);

}

