import { StateUpdater, useCallback, useLayoutEffect, useRef } from "preact/hooks";
import { debounceRendering, OnPassiveStateChange, useEnsureStability, usePassiveState } from "./use-passive-state";
import { useStableCallback } from "./use-stable-callback";
import { useStableObject } from "./use-stable-getter";

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

    managedChildParameters: {
        getChildren(): ManagedChildren<M>;
        managedChildrenArray: InternalChildInfo<M>;
        remoteULEChildMounted: (index: M["index"], mounted: boolean) => void;
        remoteULEChildChanged: (index: M["index"]) => (() => void);
    }
}


/**
 * Does nothing at runtime -- type checking only.
 * 
 * Throws a (Typescript compiler) error if the passed object is anything but the empty object {}.
 * 
 * Use this to ensure that your spread operators work correctly and cover all cases.
 * 
 * @param _a The remaining spread parameters of a given object that you expect to be empty (because you properly accounted for all the properties that exist in it, and want to ensure it stays that way)
 */
export function assertEmptyObject<T extends {}>(_a: [keyof T] extends [never] ? T : `Unhandled keys in this rest spread object!`): void { }



/**
 * Information that children and parents use to communicate with each other.
 * 
 * * `index` refers to which child this is.
 * * `flags` are quick-and-easy getters and setters that you can optionally use
 * * `subInfo` is anything used by a derived hook. `useRovingTabIndex`, for example, needs to know how to focus an arbitrary child, so the child populates `info` with an object containing a method called `focusSelf`.
 */
export interface ManagedChildInfo<T extends string | number> {
    index: T;
    //flags: Partial<Record<K, ChildFlagOperations>>;
    //subInfo: MCSubInfo;
}



export type OnChildrenMountChange<T extends string | number> = ((mounted: Set<T>, unmounted: Set<T>) => void);
export type OnAfterChildLayoutEffect<T extends string | number> = ((causers: Iterable<T>) => void);

interface MCP<T extends number | string> {
    /**
     * Runs after one or more children have updated their information (index, etc.).
     * 
     * Only one will run per tick, just like layoutEffect, but it isn't
     * *guaranteed* to have actually been a change.
     */
    onAfterChildLayoutEffect?: null | undefined | OnAfterChildLayoutEffect<T>;

    /**
     * Same as the above, but only for mount/unmount (or when a child changes its index)
     */
    onChildrenMountChange?: null | undefined | OnChildrenMountChange<T>;
}

export interface UseManagedChildrenParameters<M extends ManagedChildInfo<any>> {
    managedChildrenParameters: MCP<M["index"]>;
}

// MCSubInfo contains the entirety of the saved data for this child.  All of it. Even types the user will never be able to pass in because they're internally derived.
// SubbestInfo refers to the actual parameters the user passes in that could be totally unrelated. 
export interface UseManagedChildParameters<M extends ManagedChildInfo<any>> {
    managedChildParameters: M;
    managedChildContext: UseManagedChildrenContext<M>;
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

    managedChildContext: UseManagedChildrenContext<M>;
}

export interface UseManagedChildReturnType<M extends ManagedChildInfo<any>> {
    managedChildReturn: {
        getChildren(): ManagedChildren<M>;
    }
};

export type UseManagedChild<M extends ManagedChildInfo<any>> = (a: UseManagedChildParameters<M>) => UseManagedChildReturnType<M>;






/**
 * Abstraction over the managed children
 */
export interface ManagedChildren<M extends ManagedChildInfo<any>> {
    /** STABLE */
    getAt(index: M["index"]): M | undefined;
    /** STABLE */
    getHighestIndex(): number;
    /** STABLE */
    forEach: (f: (child: M) => void) => void;

    /** **UNSTABLE**, also internal-use only, also TODO need a workaround for this for sortable children */
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
    type IndexType = M["index"];
    type Info = M;

    const { managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange }, ...rest } = parentParameters;
    assertEmptyObject(rest);

    useEnsureStability("useManagedChildren", onAfterChildLayoutEffect, onChildrenMountChange);

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
    const forEachChild = useCallback((f: (child: Info) => void) => {
        for (const child of managedChildrenArray.current.arr) {
            if (child)
                f(child);
        }
        for (const field in managedChildrenArray.current.rec) {
            const child: Info | undefined = managedChildrenArray.current.rec[field as keyof Record<IndexType, Info>];
            if (child)
                f(child);
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
            debounceRendering(() => {
                onAfterChildLayoutEffect?.(remoteULEChildChangedCausers.current);
                remoteULEChildChangedCausers.current.clear();
            });
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
            debounceRendering(() => {
                onChildrenMountChange?.(hasRemoteULEChildMounted.current!.mounts, hasRemoteULEChildMounted.current!.unmounts)
                hasRemoteULEChildMounted.current = null;
            });
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
            return managedChildrenArray.current.arr.slice();
        }, [])
    });

    const getChildren = useCallback(() => managedChildren, []);

    return {
        managedChildContext: useStableObject({
            managedChildParameters: useStableObject({
                managedChildrenArray: managedChildrenArray.current,
                remoteULEChildMounted,
                remoteULEChildChanged,
                getChildren
            })
        }),
        managedChildrenReturn: { getChildren }
    }
}




export function useManagedChild<M extends ManagedChildInfo<number | string>>(info: UseManagedChildParameters<M>): UseManagedChildReturnType<M> {
    type IndexType = M["index"];

    const { managedChildParameters: { index }, managedChildContext: { managedChildParameters: { getChildren, managedChildrenArray, remoteULEChildMounted, remoteULEChildChanged } } } = info;
    // Any time our child props change, make that information available
    // the parent if they need it.
    // The parent can listen for all updates and only act on the ones it cares about,
    // and multiple children updating in the same tick will all be sent at once.
    useLayoutEffect(() => {
        // Insert this information in-place
        if (typeof index == "number") {
            managedChildrenArray.arr[index as number] = { ...info.managedChildParameters };
        }
        else {
            managedChildrenArray.rec[index as IndexType] = { ...info.managedChildParameters };
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
        managedChildReturn: { getChildren }
    }
}


export interface UseChildrenFlagParameters<M extends ManagedChildInfo<any>> {

    /**
     * Which child is considered active on mount.
     * 
     * After mount, change the current active child with `changeIndex`.
     */
    initialIndex: number | null | undefined;

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
    onIndexChange: null | OnPassiveStateChange<number | null>;

    setAt(index: M, value: boolean): void;
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



export interface UseChildrenFlagReturnType {
    /** **STABLE** */
    changeIndex: (arg: Parameters<StateUpdater<number | null>>[0]) => number | null;
    /** 
     * **STABLE**
     * 
     * Call this whenever a child mounts/unmounts, or whenever calling a child's isValid() would change
     *  */
    reevaluateClosestFit: () => void;
    /** **STABLE** */
    getCurrentIndex: () => number | null;
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
export function useChildrenFlag<M extends ManagedChildInfo<number>>({ getChildren, initialIndex, closestFit, onIndexChange, getAt, setAt, isValid, }: UseChildrenFlagParameters<M>): UseChildrenFlagReturnType {
    useEnsureStability("useChildrenFlag", onIndexChange, getAt, setAt, isValid);

    const [getCurrentIndex, setCurrentIndex] = usePassiveState<null | number>(onIndexChange, useCallback(() => (initialIndex ?? (null)), []));

    const [getRequestedIndex, setRequestedIndex] = usePassiveState<null | number>(null, useCallback(() => (initialIndex ?? (null)), []));

    //    const getFitNullToZero = useStableGetter(fitNullToZero);

    // Shared between onChildrenMountChange and changeIndex, not public (but could be I guess)
    const getClosestFit = useCallback((requestedIndex: number) => {
        const children = getChildren();
        let closestDistance = Infinity;
        let closestIndex: number | null = null;
        children.forEach(child => {

            if (isValid(child)) {
                const newDistance = Math.abs(child.index - requestedIndex);
                if (newDistance < closestDistance || (newDistance == closestDistance && child.index < requestedIndex)) {
                    closestDistance = newDistance;
                    closestIndex = child.index;
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
            if (currentChild)
                setAt(currentChild, false);

            const closestFitIndex = getClosestFit(requestedIndex);
            setCurrentIndex(closestFitIndex);
            if (closestFitIndex != null) {
                const closestFitChild = children.getAt(closestFitIndex)!;
                console.assert(closestFitChild != null, "Internal logic???");
                setAt(closestFitChild, true);
            }

        }
    });




    const changeIndex = useCallback((arg: Parameters<StateUpdater<number | null>>[0]) => {
        const children = getChildren();
        const requestedIndex = arg instanceof Function ? arg(getRequestedIndex()) : arg;
        //if (requestedIndex == null && getFitNullToZero())
        //    requestedIndex = 0;

        setRequestedIndex(requestedIndex);
        const currentIndex = getCurrentIndex();
        if (currentIndex == requestedIndex)
            return requestedIndex;

        let newMatchingChild = (requestedIndex == null ? null : children.getAt(requestedIndex));
        const oldMatchingChild = (currentIndex == null ? null : children.getAt(currentIndex));
        if (requestedIndex == null) {
            // Easy case
            setCurrentIndex(null);
            if (oldMatchingChild)
                setAt(oldMatchingChild, false);
            return null;
        }
        else {
            if (newMatchingChild && isValid(newMatchingChild)) {
                setCurrentIndex(requestedIndex);
                if (oldMatchingChild)
                    setAt(oldMatchingChild, false);
                setAt(newMatchingChild, true);
                return requestedIndex;
            }
            else {
                const closestFitIndex = getClosestFit(requestedIndex);
                setCurrentIndex(closestFitIndex);
                if (closestFitIndex != null) {
                    newMatchingChild = children.getAt(closestFitIndex)!;
                    console.assert(newMatchingChild != null, "Internal logic???");
                    if (oldMatchingChild)
                        setAt(oldMatchingChild, false);
                    setAt(newMatchingChild, true);
                    return closestFitIndex;
                }
                else {
                    if (oldMatchingChild)
                        setAt(oldMatchingChild, false);
                    return null;
                }
            }
        }
    }, []);

    // Run once, on mount
    useLayoutEffect(() => {
        onIndexChange?.(initialIndex ?? null, undefined);
    }, [])

    return { changeIndex, reevaluateClosestFit, getCurrentIndex };
}

