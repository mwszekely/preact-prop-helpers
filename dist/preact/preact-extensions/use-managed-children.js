import { assertEmptyObject } from "../util/assert.js";
import { PriorityQueue } from "../util/heap.js";
import { identity } from "../util/lib-shared.js";
import { debounceRendering, useCallback, useLayoutEffect, useRef } from "../util/lib.js";
import { useMonitoring } from "../util/use-call-count.js";
import { runImmediately, useEnsureStability, usePassiveState } from "./use-passive-state.js";
import { useStableCallback } from "./use-stable-callback.js";
import { useMemoObject } from "./use-stable-getter.js";
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
/**
 * Allows a parent component to access information about certain
 * child components once they have rendered.
 *
 * @remarks This hook is designed to be lightweight, in that the parent keeps no state
 * and runs no effects.  Each child *does* run an effect, but with no state
 * changes unless you explicitly request them.
 *
 * {@include } {@link ManagedChildren}
 *
 * @hasChild {@link useManagedChild}
 *
 * @compositeParams
 */
export function useManagedChildren(parentParameters) {
    return useMonitoring(function useManagedChildren() {
        const { managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange }, ...rest } = parentParameters;
        assertEmptyObject(rest);
        useEnsureStability("useManagedChildren", onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange);
        //const [,,getHighestIndexQueue] = useState(() => new PriorityQueue<number>((lhs, rhs) => (lhs > rhs))); 
        //const [,,getLowestIndexQueue] = useState(() => new PriorityQueue<number>((lhs, rhs) => (lhs < rhs))); 
        /**
         * We need to keep track of the highest and lowest index of all mounted children.
         *
         * Our requirements:
         * 1. Must be able to mounting a child of arbitrary index
         * 2. Must be able to unmounting a child of arbitrary index
         * 3. Getting the highest index must be O(1).
         *
         * And none of these can be quadratic when mounting or
         * unmounting N children, putting an implicit bound of
         * O(log n) on mounting/unmounting (insertion/removal).
         *
         * This is a tricky set of requirements. We can satisfy
         * #1 and #3 with a heap, but #2, arbitrary removal,
         * is trickier.
         *
         * When we unmount a child, to satisfy both #2 and #3,
         * we do the following:
         * 1. If the removed child IS the highest index, just
         *    remove it from the heap. Pretty simple. Go to step 3.
         * 2. If the removed child ISN'T the highest index,
         *    add it to a set that tracks the indices that
         *    haven't been "processed" yet.
         * 3. After removing a child that WAS the highest index,
         *    see if the NEXT highest index (which we already know,
         *    because it's O(1) for a heap) exists in that "to-be-
         *    processed" set of child indices. If it is, remove
         *    that one from the heap as well and repeat.
         *
         *    This is O(1) + O(log n) + O(log n), meaning
         *    that removing N children is just O(n*log n)
         */
        const indexTracking = useRef({
            highestIndexPriorityQueue: new PriorityQueue((lhs, rhs) => lhs > rhs),
            highIndicesNotYetRemoved: new Set(),
            lowestIndexPriorityQueue: new PriorityQueue((lhs, rhs) => lhs < rhs),
            lowIndicesNotYetRemoved: new Set()
        });
        const getHighestIndex = useCallback(() => {
            return indexTracking.current.highestIndexPriorityQueue.peek();
        }, []);
        const getLowestIndex = useCallback(() => {
            return indexTracking.current.lowestIndexPriorityQueue.peek();
        }, []);
        const updateMinMax = useCallback((index, mounted) => {
            if (mounted) {
                indexTracking.current.highestIndexPriorityQueue.push(index);
                indexTracking.current.lowestIndexPriorityQueue.push(index);
            }
            else {
                if (index != getHighestIndex()) {
                    indexTracking.current.highIndicesNotYetRemoved.add(index);
                }
                else {
                    indexTracking.current.highestIndexPriorityQueue.pop();
                    while (indexTracking.current.highestIndexPriorityQueue.size() > 0 && indexTracking.current.highIndicesNotYetRemoved.has(indexTracking.current.highestIndexPriorityQueue.peek())) {
                        indexTracking.current.highIndicesNotYetRemoved.delete(indexTracking.current.highestIndexPriorityQueue.pop());
                    }
                }
                if (index != getLowestIndex()) {
                    indexTracking.current.lowIndicesNotYetRemoved.add(index);
                }
                else {
                    indexTracking.current.lowestIndexPriorityQueue.pop();
                    while (indexTracking.current.lowestIndexPriorityQueue.size() > 0 && indexTracking.current.lowIndicesNotYetRemoved.has(indexTracking.current.lowestIndexPriorityQueue.peek())) {
                        indexTracking.current.lowIndicesNotYetRemoved.delete(indexTracking.current.lowestIndexPriorityQueue.pop());
                    }
                }
            }
        }, []);
        // All the information we have about our children is stored in this **stable** array.
        // Any mutations to this array **DO NOT** trigger any sort of a re-render.
        const managedChildrenArray = useRef({ arr: [] });
        // For indirect access to each child
        // Compare getManagedChildInfo
        // TODO: The primary use for this is flaggable closest fits
        // which needs to search all children for that closest fit.
        // It would be nice if there was something better for that.
        const forEachChild = useCallback((f) => {
            for (const child of managedChildrenArray.current.arr) {
                if (child) {
                    if (f(child) == 'break')
                        return;
                }
            }
        }, []);
        // Retrieves the information associated with the child with the given index.
        // `undefined` if not child there, or it's unmounted.
        const getManagedChildInfo = useCallback((index) => {
            return managedChildrenArray.current.arr[index];
        }, []);
        //const shrinkwrapHandle = useRef(null as null | number);
        // When we unmount children, we'd like to reduce the array length accordingly.
        // We do this a tick after useEffect to wait for all the child dust to settle, 
        // because this is not critical work; it's just for memory optimization.
        // Honestly, it might even be better to delete this? TODO, I guess.
        /*const scheduleShrinkwrap = useCallback(() => {
            if (shrinkwrapHandle.current != null)
                clearTimeout(shrinkwrapHandle.current);

            shrinkwrapHandle.current = setTimeout(() => {

                let shave = 0;
                while (shave <= managedChildrenArray.current.arr.length && managedChildrenArray.current.arr[managedChildrenArray.current.arr.length - 1 - shave] == undefined) {
                    ++shave;
                }
                managedChildrenArray.current.arr.splice(managedChildrenArray.current.arr.length - shave, shave);


                //managedChildrenArray.current.highestIndex = managedChildrenArray.current.arr.length - 1 as OriginalIndex;
                ensureSortedIndexQueue();
                const indexOfIndexToRemove = -binarySearch(indexQueue.current.indicesSorted, Number.MAX_VALUE, (lhs, rhs) => lhs - rhs) + 1;

                getHighestIndexQueue().push(index);
                getLowestIndexQueue().(index);

                shrinkwrapHandle.current = null;

                // TODO: length automatically adjusts to give us the highest index,
                // but there's no corresponding property to get the lowest index when it changes...
                // managedChildrenArray.current.lowestIndex = managedChildrenArray.current.arr.length - 1;
            }, 1);

        }, []);*/
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
        const hasRemoteULEChildMounted = useRef(null);
        const remoteULEChildMounted = useCallback((index, mounted) => {
            updateMinMax(index, mounted);
            if (!hasRemoteULEChildMounted.current) {
                hasRemoteULEChildMounted.current = {
                    mounts: new Set(),
                    unmounts: new Set(),
                    mountInfos: new Map()
                };
                debounceRendering(() => {
                    const { mounts, unmounts } = hasRemoteULEChildMounted.current;
                    const unmountsThatDidntMount = unmounts.difference(mounts);
                    for (const index of unmountsThatDidntMount) {
                        delete managedChildrenArray.current.arr[index];
                    }
                    if (onChildrenCountChange || onChildrenMountChange) {
                        onChildrenMountChange?.(hasRemoteULEChildMounted.current.mounts, hasRemoteULEChildMounted.current.unmounts);
                        onChildrenCountChange?.(getHighestIndex() + 1);
                        hasRemoteULEChildMounted.current = null;
                    }
                });
            }
            hasRemoteULEChildMounted?.current?.[mounted ? "mounts" : "unmounts"]?.add?.(index);
        }, [ /* Must remain stable */]);
        return {
            context: useMemoObject({
                managedChildContext: useMemoObject({
                    managedChildrenArray: managedChildrenArray.current,
                    remoteULEChildMounted,
                    forEachChild,
                    getChildAt: getManagedChildInfo,
                    getHighestChildIndex: getHighestIndex,
                    getLowestChildIndex: getLowestIndex,
                    updateMinMax
                })
            }),
            managedChildrenReturn: {
                forEachChild,
                getChildAt: getManagedChildInfo,
                getHighestChildIndex: getHighestIndex,
                getLowestChildIndex: getLowestIndex,
            }
        };
    });
}
/**
 * @compositeParams
 */
export function useManagedChild({ context, info }) {
    return useMonitoring(function useManagedChild() {
        const { managedChildContext: { forEachChild, getChildAt, getHighestChildIndex, getLowestChildIndex, managedChildrenArray, remoteULEChildMounted } } = (context ?? { managedChildContext: {} });
        const index = info.index;
        // Any time our child props change, make that information available
        // the parent if they need it.
        // The parent can listen for all updates and only act on the ones it cares about,
        // and multiple children updating in the same tick will all be sent at once.
        useLayoutEffect(() => {
            if (managedChildrenArray == null)
                return;
            managedChildrenArray.arr[index] = { ...info };
        });
        // When we mount, notify the parent via queueMicrotask
        // (every child does this, so everything's coordinated to only queue a single microtask per tick)
        // Do the same on unmount.
        // Note: It's important that this comes AFTER remoteULEChildChanged
        // so that remoteULEChildMounted has access to all the info on mount.
        // When we unmount, ask the parent to remove our info from the list of children.
        useLayoutEffect(() => {
            remoteULEChildMounted?.(index, true);
            return () => remoteULEChildMounted?.(index, false);
        }, [index]);
        return {
            managedChildReturn: {
                forEachChild,
                getChildAt,
                getHighestChildIndex,
                getLowestChildIndex
            }
        };
    });
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
 */
export function useChildrenFlag({ getChildAt, forEachChild, indexFromRepositionedToOriginal, indexFromOriginalToRepositioned, initialIndex, closestFit, onClosestFit, onIndexChange, getAt, setAt, isValid }) {
    initialIndex ??= null;
    useEnsureStability("useChildrenFlag", onIndexChange, getAt, setAt, isValid, indexFromRepositionedToOriginal, indexFromOriginalToRepositioned);
    indexFromRepositionedToOriginal ??= identity;
    indexFromOriginalToRepositioned ??= identity;
    // TODO: useCallback instead of useStableGetter is intentional here, but is it sound?
    const [getCurrentIndex, setCurrentIndex] = usePassiveState(onIndexChange, useCallback(() => initialIndex, []), { debounceRendering: runImmediately });
    const [getRequestedIndex, setRequestedIndex] = usePassiveState(null, undefined, { debounceRendering: runImmediately, initialization: "delay" });
    // Shared between onChildrenMountChange and changeIndex, not public
    // Only called when `closestFit` is false, naturally.
    const getClosestFit = useCallback((requestedIndex) => {
        let closestDistance = Infinity;
        let closestIndex = null;
        forEachChild(child => {
            if (child != null && isValid(child)) {
                console.assert(typeof child.index == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
                const newDistance = Math.abs(indexFromOriginalToRepositioned(child.index) - indexFromOriginalToRepositioned(requestedIndex));
                if (newDistance < closestDistance || (newDistance == closestDistance && child.index < requestedIndex)) {
                    closestDistance = newDistance;
                    closestIndex = child.index;
                }
            }
        });
        return closestIndex;
    }, [ /* Must remain stable! */]);
    if (closestFit) {
        console.assert(onClosestFit != null, "When closestFit is used, onClosestFit must be provided");
    }
    // Any time a child mounts/unmounts, we need to double-check to see if that affects 
    // the "currently selected" (or whatever) index.  The two cases we're looking for:
    // 1. The currently selected child unmounted
    // 2. A child mounted, and it mounts with the index we're looking for
    const reevaluateClosestFit = useStableCallback((reason) => {
        // These indices are relative to the *original* child array.
        const requestedIndexOriginal = (getRequestedIndex());
        const currentIndexOriginal = (getCurrentIndex());
        const requestedIndexRepositioned = indexFromOriginalToRepositioned(requestedIndexOriginal);
        const currentIndexRepositioned = indexFromOriginalToRepositioned(currentIndexOriginal);
        const currentChild = requestedIndexOriginal == null ? null : getChildAt(requestedIndexOriginal);
        if (requestedIndexRepositioned != null && closestFit && (requestedIndexRepositioned != currentIndexRepositioned || currentChild == null || !isValid(currentChild))) {
            console.assert(typeof requestedIndexRepositioned == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
            const closestFitIndexOriginal = getClosestFit(requestedIndexOriginal);
            setCurrentIndex(closestFitIndexOriginal, reason);
            if (currentChild) {
                setAt(currentChild, false, closestFitIndexOriginal, currentIndexOriginal);
            }
            if (closestFitIndexOriginal != null) {
                const closestFitChild = getChildAt(closestFitIndexOriginal);
                console.assert(closestFitChild != null, "Internal logic???");
                setAt(closestFitChild, true, closestFitIndexOriginal, currentIndexOriginal);
                onClosestFit(closestFitIndexOriginal);
            }
            else {
                onClosestFit(null);
            }
        }
    });
    const reasonRef = useRef(undefined);
    const changeIndex = useCallback((arg, reason) => {
        const requestedIndex = (arg instanceof Function ? arg(getRequestedIndex()) : arg);
        reasonRef.current = reason;
        setRequestedIndex(requestedIndex, reason);
        const currentIndex = getCurrentIndex();
        if (currentIndex == requestedIndex)
            return requestedIndex;
        let newMatchingChild = (requestedIndex == null ? null : getChildAt(requestedIndex));
        const oldMatchingChild = (currentIndex == null ? null : getChildAt(currentIndex));
        if (requestedIndex == null) {
            // Easy case
            setCurrentIndex(null, reason);
            if (oldMatchingChild)
                setAt(oldMatchingChild, false, requestedIndex, currentIndex);
            return null;
        }
        else {
            const childIsValid = (newMatchingChild && isValid(newMatchingChild));
            if (childIsValid || !closestFit) {
                setCurrentIndex(requestedIndex, reason);
                if (oldMatchingChild)
                    setAt(oldMatchingChild, false, requestedIndex, currentIndex);
                if (newMatchingChild)
                    setAt(newMatchingChild, true, requestedIndex, currentIndex);
                return requestedIndex;
            }
            else {
                console.assert(closestFit);
                console.assert(typeof requestedIndex == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
                const closestFitIndex = getClosestFit(requestedIndex);
                setCurrentIndex(closestFitIndex, reason);
                if (closestFitIndex != null) {
                    newMatchingChild = getChildAt(closestFitIndex);
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
        changeIndex(initialIndex ?? null, reasonRef.current);
    }, []);
    return { changeIndex, reevaluateClosestFit, getCurrentIndex };
}
//# sourceMappingURL=use-managed-children.js.map