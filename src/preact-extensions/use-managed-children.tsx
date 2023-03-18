import { useCallback, useLayoutEffect, useRef } from "preact/hooks";
import { assertEmptyObject } from "../util/assert.js";
import { OmitStrong } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { OnPassiveStateChange, PassiveStateUpdater, debounceRendering, useEnsureStability, usePassiveState } from "./use-passive-state.js";
import { useStableCallback } from "./use-stable-callback.js";
import { useStableObject } from "./use-stable-getter.js";

/**
 * Reminder of order of execution:
 * 
 * * (tree mounts)
 * * Parent renders
 * * Children render
 * * Children receive ref (if applicable)
 * * Parent receives ref (if applicable)
 * * Children run effects
 * * Parent runs effects
 * 
 * * (tree unmounts)
 * * Parent runs effect-cleanup
 * * Parent deletes ref (if applicable)
 * * Child runs effect-cleanup
 * * Child deletes ref (if applicable)
 * 
 * Two things to note here:
 * * Rendering starts at the root,  but effects and refs start at the leaves.
 * * refs are *usually* called before effects, but only when that HTMLElement renders. Basically just a reminder that a component can be mounted without it existing in the DOM.
 */
const _comments = void (0);

export interface UseManagedChildrenContext<M extends ManagedChildInfo<any>> {
    //managedChildrenReturn: UseManagedChildrenReturnType<M>["managedChildrenReturn"]

    managedChildContext: {
        getChildren(): ManagedChildren<M>;
        managedChildrenArray: InternalChildInfo<M>;
        remoteULEChildMounted: (index: M["index"], mounted: boolean) => void;
        remoteULEChildChanged: (index: M["index"]) => (() => void);
    }
}



/**
 * Information that children and parents use to communicate with each other.
 * 
 * Other hooks will inherit from this to provide more complicated behavior.
 */
export interface ManagedChildInfo<T extends string | number> {
    index: T;
}



export type OnChildrenMountChange<T extends string | number> = ((mounted: Set<T>, unmounted: Set<T>) => void);
export type OnAfterChildLayoutEffect<T extends string | number> = ((causers: Iterable<T>) => void);


export interface UseManagedChildrenParameters<M extends ManagedChildInfo<any>> {
    managedChildrenParameters: {
        /**
         * Runs after one or more children have updated their information (index, etc.).
         * 
         * Only one will run per tick, just like layoutEffect, but it isn't
         * *guaranteed* to have actually been a change.
         * 
         * TODO: This ended up not being needed by anything. Is it necessary? Does it cost anything?
         */
        onAfterChildLayoutEffect?: null | undefined | OnAfterChildLayoutEffect<M["index"]>;

        /**
         * Same as the above, but only for mount/unmount (or when a child changes its index)
         */
        onChildrenMountChange?: null | undefined | OnChildrenMountChange<M["index"]>;

        onChildrenCountChange?: null | undefined | ((count: number) => void);
    }
}


export interface UseManagedChildParameters<M extends ManagedChildInfo<any>> {
    /**
     * In general, this shouldn't be null, but for convenience's sake you are allowed to, which disables all behavior, and also means `getChildren` will be `undefined`!
     */
    context: UseManagedChildrenContext<M> | null;

    /**
     * The exact data that's available from the parent/each sibling element via `getAt` or the other methods on `ManagedChildren`.
     */
    info: M;
}


export interface UseManagedChildrenReturnType<M extends ManagedChildInfo<any>> {
    /**
     * Returns information about the child that rendered itself with the requested key.
     * 
     * **STABLE** (even though it's not a function, the identity of this object never changes)
     */
    managedChildrenReturn: {
        /** 
         * ***STABLE***
         *
         * Note that **both** `getChildren` and the `ManagedChildren` object it returns are stable!
         * 
         * This is a getter instead of an object because when function calls happen out of order it's easier to just have always been passing and return getters everywhere 
         */
        getChildren(): ManagedChildren<M>;

    };

    context: UseManagedChildrenContext<M>;
}

export interface UseManagedChildReturnType<M extends ManagedChildInfo<any>> {
    managedChildReturn: {
        getChildren(): ManagedChildren<M>;
    }
}


/**
 * Abstraction over the managed children
 */
export interface ManagedChildren<M extends ManagedChildInfo<any>> {
    /** STABLE */
    getAt(index: M["index"]): M | undefined;
    /** STABLE */
    getHighestIndex(): number;
    /** STABLE */
    forEach: (f: (child: M) => void) => void | "break";

    /**
     * **UNSTABLE**, 
     * also internal-use only, 
     * also TODO need a workaround for this for sortable children,
     * or at least properly name it.
     * 
     * WHAT THIS DOES:
     * 
     * This function takes the children, slices the array containing them, 
     * and, *crutially*, fills in any holes in the array with a pseudo-child that just contains an index.
     * 
     * This behavior, to be clear, is only necessary for sorting and rearranging because
     * sorting and rearranging require knowing perfectly which index maps to which.
     * We don't need any other missing information in the array besides the missing index.
     * */
    arraySlice: () => M[];
}

interface InternalChildInfo<M extends ManagedChildInfo<string | number>> {
    arr: Array<M>;
    rec: Partial<Record<M["index"], M>>;
    highestIndex: number;
    lowestIndex: number;
}

/**
 * Allows a parent component to access information about certain
 * child components once they have rendered.
 * 
 * This hook is designed to be lightweight, in that the parent keeps no state
 * and runs no effects.  Each child *does* run an effect, but with no state
 * changes unless you explicitly request them.
 * 
 * 
 */
export function useManagedChildren<M extends ManagedChildInfo<string | number>>(parentParameters: UseManagedChildrenParameters<M>): UseManagedChildrenReturnType<M> {
    monitorCallCount(useManagedChildren);

    type IndexType = M["index"];
    type Info = M;

    const { managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange }, ...rest } = parentParameters;
    assertEmptyObject(rest);

    useEnsureStability("useManagedChildren", onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange);

    //const [getMountCount, setMountCount] = usePassiveState(onChildrenCountChange, returnZero, runImmediately);

    const getHighestIndex = useCallback((): number => {
        return managedChildrenArray.current.highestIndex;
    }, []);

    // All the information we have about our children is stored in this **stable** array.
    // Any mutations to this array **DO NOT** trigger any sort of a re-render.
    const managedChildrenArray = useRef<InternalChildInfo<M>>({ arr: [], rec: {}, highestIndex: 0, lowestIndex: 0 });

    // For indirect access to each child
    // Compare getManagedChildInfo
    // TODO: The primary use for this is flaggable closest fits
    // which needs to search all children for that closest fit.
    // It would be nice if there was something better for that.
    const forEachChild = useCallback((f: (child: Info) => (void | "break")) => {
        for (const child of managedChildrenArray.current.arr) {
            if (child) {
                if (f(child) == 'break')
                    return;
            }
        }
        for (const field in managedChildrenArray.current.rec) {
            const child: Info | undefined = managedChildrenArray.current.rec[field as keyof Record<IndexType, Info>];
            if (child)
                if (f(child) == 'break')
                    return;
        }
    }, [])

    // Retrieves the information associated with the child with the given index.
    // `undefined` if not child there, or it's unmounted.
    const getManagedChildInfo = useCallback<ManagedChildren<M>["getAt"]>((index: IndexType) => {
        if (typeof index == "number")
            return managedChildrenArray.current.arr[index as number]!;
        else
            return managedChildrenArray.current.rec[index as IndexType]!;
    }, [])

    // tl;dr this is a way to have run useLayoutEffect once after all N children
    // have mounted and run *their* useLayoutEffect, but also *without* re-rendering
    // ourselves because of having a `childCount` state or anything similar.
    //
    // When the child count ref updates, we want the parent to also run an effect
    // to maybe do something with all these children that just mounted.
    // The easiest way would be useEffect(..., [childCount]) but
    // that would require us having a childCount state, then calling
    // setChildCount and re-rendering every time children mount
    // (only one re-render at a time unless children are staggered, but still)
    // 
    // As an alternate solution, any time a child uses ULE on mount, it queues a microtask
    // to emulate running ULE on the parent. Only the first child will actually queue
    // the microtask (by checking hasRemoteULE first) so that the "effect" only
    // runs once. When it's done, hasRemoteULE is reset so it can run again if
    // more children mount/unmount.
    const hasRemoteULEChildMounted = useRef<{ mounts: Set<IndexType>, unmounts: Set<IndexType> } | null>(null);
    const remoteULEChildChangedCausers = useRef(new Set<IndexType>());
    const remoteULEChildChanged = useCallback((index: IndexType) => {

        if (remoteULEChildChangedCausers.current.size == 0) {
            if (onAfterChildLayoutEffect != null) {
                debounceRendering(() => {
                    onAfterChildLayoutEffect?.(remoteULEChildChangedCausers.current);
                    remoteULEChildChangedCausers.current.clear();
                });
            }
        }

        remoteULEChildChangedCausers.current.add(index);

        return () => { };

    }, [/* Must remain stable */]);

    const remoteULEChildMounted = useCallback((index: IndexType, mounted: boolean): void => {
        if (!hasRemoteULEChildMounted.current) {
            hasRemoteULEChildMounted.current = {
                mounts: new Set(),
                unmounts: new Set(),
            };
            if (onChildrenCountChange || onChildrenMountChange) {
                debounceRendering(() => {
                    onChildrenMountChange?.(hasRemoteULEChildMounted.current!.mounts, hasRemoteULEChildMounted.current!.unmounts);
                    onChildrenCountChange?.(getChildren().getHighestIndex() + 1);
                    hasRemoteULEChildMounted.current = null;
                });
            }
        }

        if (mounted) {
            if (typeof index == "number")
                managedChildrenArray.current.highestIndex = Math.max(managedChildrenArray.current.highestIndex, index);
        }
        else {
            if (typeof index == "number") {
                delete managedChildrenArray.current.arr[index as number];
                let shave = 0;
                while (shave <= managedChildrenArray.current.arr.length && managedChildrenArray.current.arr[managedChildrenArray.current.arr.length - 1 - shave] === undefined) {
                    ++shave;
                }
                managedChildrenArray.current.arr.splice(managedChildrenArray.current.arr.length - shave, shave);
            }
            else
                delete managedChildrenArray.current.rec[index as IndexType];

            if (typeof index == "number")
                managedChildrenArray.current.highestIndex = managedChildrenArray.current.arr.length - 1;
        }

        hasRemoteULEChildMounted.current[mounted ? "mounts" : "unmounts"].add(index);
    }, [/* Must remain stable */]);


    const managedChildren = useStableObject<ManagedChildren<M>>({
        ...{ _: managedChildrenArray.current } as {},
        forEach: forEachChild,
        getAt: getManagedChildInfo,
        getHighestIndex: getHighestIndex,
        arraySlice: useCallback(() => {
            let ret = managedChildrenArray.current.arr.slice();
            const max = getHighestIndex();
            for (let i = 0; i <= max; ++i) {
                if (ret[i] == null)
                    ret[i] = { index: i } as M;
            }
            return ret;
        }, [])
    });

    const getChildren = useCallback(() => managedChildren, []);

    return {
        context: useStableObject({
            managedChildContext: useStableObject({
                managedChildrenArray: managedChildrenArray.current,
                remoteULEChildMounted,
                remoteULEChildChanged,
                getChildren
            })
        }),
        managedChildrenReturn: { getChildren }
    }
}




export function useManagedChild<M extends ManagedChildInfo<number | string>>({ context, info }: UseManagedChildParameters<M>): UseManagedChildReturnType<M> {
    monitorCallCount(useManagedChild);

    type IndexType = M["index"];

    const { managedChildContext: { getChildren, managedChildrenArray, remoteULEChildMounted, remoteULEChildChanged } } = (context ?? { managedChildContext: {} });
    const index = info.index;
    // Any time our child props change, make that information available
    // the parent if they need it.
    // The parent can listen for all updates and only act on the ones it cares about,
    // and multiple children updating in the same tick will all be sent at once.
    useLayoutEffect(() => {
        if (managedChildrenArray == null || remoteULEChildChanged == null) return;

        // Insert this information in-place
        if (typeof index == "number") {
            managedChildrenArray.arr[index as number] = { ...info };
        }
        else {
            managedChildrenArray.rec[index as IndexType] = { ...info };
        }
        return remoteULEChildChanged(index as IndexType);
    }, [...Object.entries(info).flat(9)]);  // 9 is infinity, right? Sure. Unrelated: TODO.

    // When we mount, notify the parent via queueMicrotask
    // (every child does this, so everything's coordinated to only queue a single microtask per tick)
    // Do the same on unmount.
    // Note: It's important that this comes AFTER remoteULEChildChanged
    // so that remoteULEChildMounted has access to all the info on mount.
    useLayoutEffect(() => {
        remoteULEChildMounted?.(index as IndexType, true);
        return () => remoteULEChildMounted?.(index as IndexType, false);
    }, [index]);

    return {
        managedChildReturn: { getChildren: getChildren! }
    }
}


export interface UseChildrenFlagParameters<M extends ManagedChildInfo<any>, R> {

    /**
     * Which child is considered active on mount.
     * 
     * After mount, change the current active child with `changeIndex`.
     */
    initialIndex: M["index"] | null | undefined;

    /**
     * When provided, if the given activatedIndex doesn't map onto any
     * provided child (either because it's too large or that child
     * doesn't exist), the closest child to the given activatedIndex
     * will have its flag set instead.
     * 
     * Use with caution, and consider how a child having its flag set
     * while the parent thinks it shouldn't be could cause issues.
     */
    closestFit: boolean;

    getChildren(): ManagedChildren<M>;


    /**
     * Called whenever a new index is selected.
     * 
     * Notably, the value can be different than what was called with changeIndex()
     * if the requested index didn't exist or was hidden.
     */
    onIndexChange: null | OnPassiveStateChange<M["index"] | null, R>;

    setAt(index: M, value: boolean, newSelectedIndex: M["index"] | null, prevSelectedIndex: M["index"] | null): void;
    getAt(index: M): boolean;
    isValid(index: M): boolean;
}


export interface ChildFlagOperations {

    /**
     * Must return whether the current child is active
     */
    get: () => boolean;
    /**
     * The child must set itself as active/inactive, whatever that entails.
     * This could be as simple as a setState function.
     */
    set: (active: boolean) => void;
    /**
     * Must return true if this child is a valid candidate to be flagged, and false if not.
     * Most children should return true. Returning false is only useful to mark a child as "invalid" in some way.
     * Removing a child from the list does effectively the same thing, but this lets you keep the child around.
     */
    isValid(): boolean;
}



export interface UseChildrenFlagReturnType<M extends ManagedChildInfo<any>, R> {
    /** 
     * **STABLE**
     * 
     * Manually changes the current index that is (focused/selected/tabbable/whatever).
     * 
     * The parent can use this to notify each relevant child of what it must do in order to make this change happen.
     * 
     * The returned value will be the new index that will be used. If `closestFit` is false, it will always be the same as what you passed in.
     */
    changeIndex: PassiveStateUpdater<M["index"] | null, R>;
    /** 
     * **STABLE**
     * 
     * Call this whenever a child mounts/unmounts, or whenever calling a child's isValid() would change
     *  */
    reevaluateClosestFit: () => void;
    /** **STABLE** */
    getCurrentIndex: () => M["index"] | null;
}

/**
 * An extension to useManagedChildren that handles the following common case:
 * 1. You have a bunch of children
 * 2. At any given time, only 1 of them is "selected", "activated", "focusable", whatever (or 0 of them, that's cool too, just 0 or 1 though).
 * 3. The parent has control over who is "selected" via a numerical index.
 * 
 * This hook allows for much easier control over selection management.
 * 
 * Note that because you may want to use multiple flags with the same children, this hook *does not* use `useManagedChildren`!
 * You need to pass it the existing children, and you must pass your invocation of `useManagedChildren` the returned `onChildrenMountChange` handler!
 * 
 * Also because of that, the types of this function are rather odd.  It's better to start off using a hook that already uses a flag, such as `useRovingTabIndex`, as an example.
 * 
 * 
 * @param param0 
 * @returns 
 */
export function useChildrenFlag<M extends ManagedChildInfo<number | string>, R>({ getChildren, initialIndex, closestFit, onIndexChange, getAt, setAt, isValid, }: UseChildrenFlagParameters<M, R>): UseChildrenFlagReturnType<M, R> {
    useEnsureStability("useChildrenFlag", onIndexChange, getAt, setAt, isValid);

    // TODO (maybe?): Even if there is an initial index, it's not set until mount. Is that fine?
    const [getCurrentIndex, setCurrentIndex] = usePassiveState<null | M["index"], R>(onIndexChange);

    const [getRequestedIndex, setRequestedIndex] = usePassiveState<null | M["index"], R>(null);

    // Shared between onChildrenMountChange and changeIndex, not public
    // Only called when `closestFit` is false, naturally.
    const getClosestFit = useCallback((requestedIndex: number) => {
        const children = getChildren();
        let closestDistance = Infinity;
        let closestIndex: number | null = null;
        children.forEach(child => {

            if (child != null && isValid(child)) {
                console.assert(typeof child.index == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
                const newDistance = Math.abs((child.index as number) - requestedIndex);
                if (newDistance < closestDistance || (newDistance == closestDistance && (child.index as number) < requestedIndex)) {
                    closestDistance = newDistance;
                    closestIndex = (child.index as number);
                }
            }
        });
        return closestIndex;
    }, [/* Must remain stable! */]);

    // Any time a child mounts/unmounts, we need to double-check to see if that affects 
    // the "currently selected" (or whatever) index.  The two cases we're looking for:
    // 1. The currently selected child unmounted
    // 2. A child mounted, and it mounts with the index we're looking for
    const reevaluateClosestFit = useStableCallback(() => {
        const children = getChildren();
        const requestedIndex = getRequestedIndex();
        const currentIndex = getCurrentIndex();
        const currentChild = currentIndex == null ? null : children.getAt(currentIndex);

        if (requestedIndex != null && closestFit && (requestedIndex != currentIndex || currentChild == null || !isValid(currentChild))) {
            console.assert(typeof requestedIndex == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");

            const closestFitIndex = getClosestFit(requestedIndex as number);
            setCurrentIndex(closestFitIndex, undefined!);
            if (currentChild)
                setAt(currentChild, false, closestFitIndex, currentIndex);
            if (closestFitIndex != null) {
                const closestFitChild = children.getAt(closestFitIndex)!;
                console.assert(closestFitChild != null, "Internal logic???");
                setAt(closestFitChild, true, closestFitIndex, currentIndex);
            }

        }
    });




    const changeIndex = useCallback<PassiveStateUpdater<M["index"] | null, R>>((arg: Parameters<PassiveStateUpdater<M["index"] | null, R>>[0], reason: Parameters<PassiveStateUpdater<M["index"] | null, R>>[1]) => {
        const children = getChildren();
        const requestedIndex = (arg instanceof Function ? arg(getRequestedIndex()) : arg) as M["index"];

        setRequestedIndex(requestedIndex, reason as R);
        const currentIndex = getCurrentIndex();
        if (currentIndex == requestedIndex)
            return requestedIndex;

        let newMatchingChild = (requestedIndex == null ? null : children.getAt(requestedIndex));
        const oldMatchingChild = (currentIndex == null ? null : children.getAt(currentIndex));
        if (requestedIndex == null) {
            // Easy case
            setCurrentIndex(null, reason as R);
            if (oldMatchingChild)
                setAt(oldMatchingChild, false, requestedIndex, currentIndex);
            return null;
        }
        else {
            const childIsValid = (newMatchingChild && isValid(newMatchingChild));
            if (childIsValid || !closestFit) {
                setCurrentIndex(requestedIndex, reason as R);
                if (oldMatchingChild)
                    setAt(oldMatchingChild, false, requestedIndex, currentIndex);
                if (newMatchingChild)
                    setAt(newMatchingChild, true, requestedIndex, currentIndex);

                return requestedIndex;
            }
            else {
                console.assert(typeof requestedIndex == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");

                const closestFitIndex = getClosestFit(requestedIndex as number);
                setCurrentIndex(closestFitIndex, reason as R);
                if (closestFitIndex != null) {
                    newMatchingChild = children.getAt(closestFitIndex)!;
                    console.assert(newMatchingChild != null, "Internal logic???");
                    if (oldMatchingChild)
                        setAt(oldMatchingChild, false, closestFitIndex, currentIndex);
                    setAt(newMatchingChild, true, closestFitIndex, currentIndex);
                    return closestFitIndex;
                }
                else {
                    if (oldMatchingChild)
                        setAt(oldMatchingChild, false, closestFitIndex, currentIndex);
                    return null;
                }
            }
        }
    }, []);

    // Run once, on mount
    useLayoutEffect(() => {
        changeIndex(initialIndex ?? null, undefined);
    }, [])

    return { changeIndex, reevaluateClosestFit, getCurrentIndex };
}

