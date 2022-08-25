import { StateUpdater, useCallback, useRef } from "preact/hooks";
import { useLayoutEffect } from "./use-layout-effect";
import { OnPassiveStateChange, returnFalse, returnNull, useEnsureStability, usePassiveState } from "./use-passive-state";
import { useStableCallback } from "./use-stable-callback";
import { useStableGetter } from "./use-stable-getter";
import { useState } from "./use-state";

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

export interface ManagedChildInfoBase<T extends string | number> {
    index: T
}

export type UseManagedChild<I extends ManagedChildInfoBase<string | number>> = (a: { info: ManagedChildInfoNeeded<I> }) => void;

export type ManagedChildInfoNeeded<I extends ManagedChildInfoBase<string | number>> = I & {}


export interface UseManagedChildrenReturnType<I extends ManagedChildInfoBase<string | number>> {
    /**
     * A hook that must be called by every child component that
     * is to be managed by this one. The argument to the hook
     * is just the bag of properties to pass to the parent,
     * including the child's index.
     */
    useManagedChild: UseManagedChild<I>;
    /**
     * Returns information about the child that rendered itself with the requested key.
     * 
     * **Stable, but cannot be called during render!**
     */
    children: ManagedChildren<I>;
}



export interface ManagedChildren<I extends ManagedChildInfoBase<string | number>> {
    getAt(index: I["index"]): I | undefined;
    //getSize(): number;
    getHighestIndex(): number;
    forEach: (f: (child: I) => void) => void;
    sliceSort: (compare: (lhs: I, rhs: I) => number) => I[];
}


export interface UseManagedChildrenParameters<I extends { index?: any }> {
    /**
     * Runs after one or more children have updated their information (index, etc.).
     * 
     * Only one will run per tick, just like layoutEffect, but it isn't
     * *guaranteed* to have actually been a change.
     */
    onAfterChildLayoutEffect?: null | undefined | ((causers: Iterable<I["index"]>) => void);

    /**
     * Same as the above, but only for mount/unmount (or when a child changes its index)
     */
    onChildrenMountChange?: null | undefined | ((mounted: Set<I["index"]>, unmounted: Set<I["index"]>) => void);
}

//export type UseManagedChildParameters<I extends {}> = { info: I };

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
export function useManagedChildren<I3 extends {}>({ onAfterChildLayoutEffect, onChildrenMountChange }: UseManagedChildrenParameters<I3 & ManagedChildInfoBase<string | number>>): UseManagedChildrenReturnType<I3 & ManagedChildInfoBase<string | number>> {
    type I = I3 & ManagedChildInfoBase<string | number>;

    useEnsureStability("useManagedChildren", onAfterChildLayoutEffect, onChildrenMountChange);

    const getHighestIndex = useCallback((): number => {
        return managedChildrenArray.current.arr.length - 1;
    }, []);

    // All the information we have about our children is stored in this **stable** array.
    // Any mutations to this array **DO NOT** trigger any sort of a re-render.
    const managedChildrenArray = useRef<{ arr: Array<I>; rec: Partial<Record<I["index"], I>>; }>({ arr: [], rec: {} });

    // For indirect access to each child
    // Compare getManagedChildInfo
    // TODO: The primary use for this is flaggable closest fits
    // which need to search all children for that closest fit.
    // It would be nice if there was something better for that.
    const forEachChild = useCallback((f: (child: I) => void) => {
        for (const child of managedChildrenArray.current.arr) { f(child); }
        for (const field in managedChildrenArray.current.rec) {
            const child: I | undefined = managedChildrenArray.current.rec[field as keyof Record<I["index"], I>];
            if (child)
                f(child);
        }
    }, [])

    // Retrieves the information associated with the child with the given index.
    // `undefined` if not child there, or it's unmounted.
    const getManagedChildInfo = useCallback<UseManagedChildrenReturnType<I>["children"]["getAt"]>((index: I["index"]) => {
        if (typeof index == "number")
            return managedChildrenArray.current.arr[index as number]!;
        else
            return managedChildrenArray.current.rec[index as I["index"]]!;
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
    const hasRemoteULEChildMounted = useRef<{ mounts: Set<I["index"]>, unmounts: Set<I["index"]> } | null>(null);
    const remoteULEChildChangedCausers = useRef(new Set<I["index"]>());
    const remoteULEChildChanged = useCallback((index: I["index"]) => {

        if (remoteULEChildChangedCausers.current.size == 0) {
            queueMicrotask(() => {
                onAfterChildLayoutEffect?.(remoteULEChildChangedCausers.current);
                remoteULEChildChangedCausers.current.clear();
            });
        }

        remoteULEChildChangedCausers.current.add(index);

        return () => { };

    }, [/* Must remain stable */]);

    const remoteULEChildMounted = useCallback((index: I["index"], mounted: boolean) => {
        if (!hasRemoteULEChildMounted.current) {
            hasRemoteULEChildMounted.current = {
                mounts: new Set(),
                unmounts: new Set(),
            };
            queueMicrotask(() => {
                onChildrenMountChange?.(hasRemoteULEChildMounted.current!.mounts, hasRemoteULEChildMounted.current!.unmounts)
                hasRemoteULEChildMounted.current = null;
            });
        }

        if (!mounted) {
            if (typeof index == "number")
                delete managedChildrenArray.current.arr[index as number];
            else
                delete managedChildrenArray.current.rec[index as I["index"]];
        }

        hasRemoteULEChildMounted.current[mounted ? "mounts" : "unmounts"].add(index);
    }, [/* Must remain stable */]);


    const useManagedChild: UseManagedChild<I> = useCallback(({ info }: { info: ManagedChildInfoNeeded<I> }) => {
        // Any time our child props change, make that information available
        // the parent if they need it.
        // The parent can listen for all updates and only act on the ones it cares about,
        // and multiple children updating in the same tick will all be sent at once.
        useLayoutEffect(() => {
            // Insert this information in-place
            if (typeof info.index == "number")
                managedChildrenArray.current.arr[info.index as number] = { ...info } as unknown as I;
            else
                managedChildrenArray.current.rec[info.index as I["index"]] = { ...info } as unknown as I;
            return remoteULEChildChanged(info.index as I["index"]);
        }, [...Object.entries(info).flat()]);

        // When we mount, notify the parent via queueMicrotask
        // (every child does this, so everything's coordinated to only queue a single microtask per tick)
        // Do the same on unmount.
        // Note: It's important that this comes AFTER remoteULEChildChanged
        // so that remoteULEChildMounted has access to all the info on mount.
        useLayoutEffect(() => {
            return remoteULEChildMounted?.(info.index as I["index"], true);
        }, [info.index]);
    }, [/* Must remain stable */]);


    const managedChildren = useRef<ManagedChildren<I>>({
        ...{ _: managedChildrenArray.current } as {}, forEach: forEachChild, getAt: getManagedChildInfo, getHighestIndex: getHighestIndex, sliceSort: (compare) => {
            return managedChildrenArray.current.arr.slice().sort(compare);
        }
    });

    return {
        useManagedChild,
        children: managedChildren.current
    }
}


export interface UseChildrenFlagParameters<K extends string, I extends FlaggableChildInfoBase<K>> {

    /**
     * Which child is considered active on mount.
     * 
     * After mount, change the current active child with `changeIndex`.
     */
    initialIndex: I["index"] | null | undefined;

    /**
     * When provided, if the given activatedIndex doesn't map onto any
     * provided child (either because it's too large or that child
     * doesn't exist), the closest child to the given activatedIndex
     * will have its flag set instead.
     * 
     * Use with caution, and consider how a child having its flag set
     * while the parent thinks it shouldn't be could cause issues.
     */
    closestFit?: boolean;

    children: ManagedChildren<I>;

    /**
     * Called whenever a new index is selected.
     * 
     * Notably, the value can be different than what was called with changeIndex()
     * if the requested index didn't exist or was hidden.
     */
    onIndexChange?: OnPassiveStateChange<I["index"] | null>;

    /**
     * When children have multiple flags, the `key` parameter controls which flag we're checking.
     * 
     * This can be anything you want, but must not change.
     */
    key: K;

    fitNullToZero?: boolean;
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


export interface FlaggableChildInfoBase<K extends string> extends ManagedChildInfoBase<number> {
    flags: Partial<Record<K, ChildFlagOperations>>
}

export interface UseChildrenFlagReturnType<K extends string, I extends FlaggableChildInfoBase<K>> {
    /** **STABLE** */
    changeIndex: (arg: Parameters<StateUpdater<number | null>>[0]) => number | null;
    /** **STABLE** */
    onChildrenMountChange: (mounted: Set<I["index"]>, unmounted: Set<I["index"]>) => void;
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
 * 
 * @param param0 
 * @returns 
 */
export function useChildrenFlag<K extends string, I extends FlaggableChildInfoBase<K>>({ children, initialIndex, closestFit, onIndexChange, key, fitNullToZero }: UseChildrenFlagParameters<K, I>): UseChildrenFlagReturnType<K, I> {
    useEnsureStability("useChildrenFlag", closestFit, onIndexChange, key);

    const [getCurrentIndex, setCurrentIndex] = usePassiveState<null | number>(onIndexChange, useCallback(() => (initialIndex ?? (fitNullToZero ? 0 : null)), []));

    const [getRequestedIndex, setRequestedIndex] = usePassiveState<null | number>(null, useCallback(() => (initialIndex ?? (fitNullToZero ? 0 : null)), []));

    const getFitNullToZero = useStableGetter(fitNullToZero);

    // Shared between onChildrenMountChange and changeIndex, not public (but could be I guess)
    const getClosestFit = useCallback((requestedIndex: number) => {
        let closestDistance = Infinity;
        let closestIndex: number | null = null;
        children.forEach(child => {
            if (child.flags[key]!.isValid()) {
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
    const onChildrenMountChange = useStableCallback<NonNullable<UseManagedChildrenParameters<I>["onChildrenMountChange"]>>((mounted, unmounted) => {
        const requestedIndex = getRequestedIndex();
        const currentIndex = getCurrentIndex();
        const currentChild = currentIndex == null ? null : children.getAt(currentIndex);

        // We've not actually selected our requested selection.
        // Maybe one of the children that just mounted has it?
        if (currentIndex != requestedIndex && requestedIndex != null) {
            if (mounted.has(requestedIndex)) {
                currentChild?.flags[key]!.set(false);
                children.getAt(requestedIndex)?.flags[key]!.set(true);
            }
        }
        else if (currentIndex != null && unmounted.has(currentIndex)) {
            // Whatever's currently selected has must unmounted.
            currentChild?.flags[key]!.set(false);
            if (!closestFit || requestedIndex == null) {
                // If we're not in best-fit mode, or there's no index being actively requested,
                // then our currently activated child unmounting just means we, to be safe,
                // request it to de-select itself.
            }
            else {
                // If we're in best-fit mode, then try to find another
                // child to select.
                const closestFitIndex = getClosestFit(requestedIndex);
                if (closestFitIndex != null) {
                    const closestFitChild = children.getAt(closestFitIndex)!;
                    console.assert(closestFitChild != null, "Internal logic???");
                    closestFitChild.flags[key]!.set(true);
                }
            }
        }

    });


    const changeIndex = useCallback((arg: Parameters<StateUpdater<number | null>>[0]) => {
        console.log(`${key}: changeIndex(${arg})`);
        let requestedIndex = arg instanceof Function ? arg(getRequestedIndex()) : arg;
        if (requestedIndex == null && getFitNullToZero())
            requestedIndex = 0;

        setRequestedIndex(requestedIndex);
        const currentIndex = getCurrentIndex();
        if (currentIndex == requestedIndex)
            return requestedIndex;

        let newMatchingChild = (requestedIndex == null ? null : children.getAt(requestedIndex));
        const oldMatchingChild = (currentIndex == null ? null : children.getAt(currentIndex));
        if (requestedIndex == null) {
            // Easy case
            console.log(`${key}: Setting #${currentIndex} to false (null)`);
            setCurrentIndex(null);
            oldMatchingChild?.flags[key]!.set(false);
            return null;
        }
        else {
            if (newMatchingChild && newMatchingChild.flags[key]!.isValid()) {
                console.log(`${key}: Setting #${currentIndex} to false and #${requestedIndex} to true`);
                setCurrentIndex(requestedIndex);
                oldMatchingChild?.flags[key]!.set(false);
                newMatchingChild.flags[key]!.set(true);
                return requestedIndex;
            }
            else {
                const closestFitIndex = getClosestFit(requestedIndex);
                setCurrentIndex(closestFitIndex);
                if (closestFitIndex != null) {
                    newMatchingChild = children.getAt(closestFitIndex)!;
                    console.assert(newMatchingChild != null, "Internal logic???");
                    console.log(`${key}: Setting #${currentIndex} to false and #${closestFitIndex} to true (closest fit)`);
                    oldMatchingChild?.flags[key]!.set(false);
                    newMatchingChild.flags[key]!.set(true);
                    return closestFitIndex;
                }
                else {
                    oldMatchingChild?.flags[key]!.set(false);
                    return null;
                }
            }
        }
    }, []);

    useLayoutEffect(() => {
        if (initialIndex != null)
            children.getAt(initialIndex)?.flags[key]?.set(true);
    }, [])

    return { changeIndex, onChildrenMountChange, getCurrentIndex };
}
