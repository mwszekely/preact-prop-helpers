import { identity } from "../component-detail/keyboard-navigation/use-linear-navigation.js";
import { assertEmptyObject } from "../util/assert.js";
import { debounceRendering, useCallback, useEffect, useLayoutEffect, useRef } from "../util/lib.js";
import { monitored } from "../util/use-call-count.js";
import { useEnsureStability, usePassiveState } from "./use-passive-state.js";
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
export const useManagedChildren = /*@__PURE__*/ monitored(function useManagedChildren(parentParameters) {
    const { managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange }, ...rest } = parentParameters;
    assertEmptyObject(rest);
    useEnsureStability("useManagedChildren", onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange);
    const getHighestIndex = useCallback(() => { return managedChildrenArray.current.highestIndex; }, []);
    const getLowestIndex = useCallback(() => { return managedChildrenArray.current.lowestIndex; }, []);
    // All the information we have about our children is stored in this **stable** array.
    // Any mutations to this array **DO NOT** trigger any sort of a re-render.
    const managedChildrenArray = useRef({ arr: [], rec: {}, highestIndex: 0, lowestIndex: 0 });
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
        for (const field in managedChildrenArray.current.rec) {
            const child = managedChildrenArray.current.rec[field];
            if (child)
                if (f(child) == 'break')
                    return;
        }
    }, []);
    // Retrieves the information associated with the child with the given index.
    // `undefined` if not child there, or it's unmounted.
    const getManagedChildInfo = useCallback((index) => {
        if (typeof index == "number")
            return managedChildrenArray.current.arr[index];
        else
            return managedChildrenArray.current.rec[index];
    }, []);
    const shrinkwrapHandle = useRef(null);
    // When we unmount children, we'd like to reduce the array length accordingly.
    // We do this a tick after useEffect to wait for all the child dust to settle, 
    // because this is not critical work; it's just for memory optimization.
    // Honestly, it might even be better to delete this? TODO, I guess.
    const scheduleShrinkwrap = useCallback(() => {
        if (shrinkwrapHandle.current != null)
            clearTimeout(shrinkwrapHandle.current);
        shrinkwrapHandle.current = setTimeout(() => {
            let shave = 0;
            while (shave <= managedChildrenArray.current.arr.length && managedChildrenArray.current.arr[managedChildrenArray.current.arr.length - 1 - shave] == undefined) {
                ++shave;
            }
            managedChildrenArray.current.arr.splice(managedChildrenArray.current.arr.length - shave, shave);
            managedChildrenArray.current.highestIndex = managedChildrenArray.current.arr.length - 1;
            shrinkwrapHandle.current = null;
            // TODO: length automatically adjusts to give us the highest index,
            // but there's no corresponding property to get the lowest index when it changes...
            // managedChildrenArray.current.lowestIndex = managedChildrenArray.current.arr.length - 1;
        }, 1);
    }, []);
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
        if (!hasRemoteULEChildMounted.current) {
            hasRemoteULEChildMounted.current = {
                mounts: new Set(),
                unmounts: new Set(),
                mountInfos: new Map()
            };
            debounceRendering(() => {
                const { mounts, unmounts } = hasRemoteULEChildMounted.current;
                const unmountsThatDidntMount = unmounts.difference(mounts);
                for (const index of mounts) {
                    if (typeof index == "number") {
                        managedChildrenArray.current.highestIndex = Math.max(managedChildrenArray.current.highestIndex, index);
                        managedChildrenArray.current.lowestIndex = Math.min(managedChildrenArray.current.lowestIndex, index);
                    }
                }
                for (const index of unmountsThatDidntMount) {
                    if (typeof index == "number")
                        delete managedChildrenArray.current.arr[index];
                    else
                        delete managedChildrenArray.current.rec[index];
                }
                if (onChildrenCountChange || onChildrenMountChange) {
                    onChildrenMountChange?.(hasRemoteULEChildMounted.current.mounts, hasRemoteULEChildMounted.current.unmounts);
                    onChildrenCountChange?.(getChildren().getHighestIndex() + 1);
                    hasRemoteULEChildMounted.current = null;
                }
            });
        }
        hasRemoteULEChildMounted?.current?.[mounted ? "mounts" : "unmounts"]?.add?.(index);
    }, [ /* Must remain stable */]);
    useEffect(() => {
        scheduleShrinkwrap();
    }, []);
    const managedChildren = useMemoObject({
        ...{ _: managedChildrenArray.current },
        forEach: forEachChild,
        getAt: getManagedChildInfo,
        getHighestIndex: getHighestIndex,
        getLowestIndex: getLowestIndex,
        _arraySlice: useCallback(() => {
            let ret = managedChildrenArray.current.arr.slice();
            const max = getHighestIndex();
            for (let i = 0; i <= max; ++i) {
                if (ret[i] == null)
                    ret[i] = { index: i };
            }
            return ret;
        }, [])
    });
    const getChildren = useCallback(() => managedChildren, []);
    return {
        context: useMemoObject({
            managedChildContext: useMemoObject({
                managedChildrenArray: managedChildrenArray.current,
                remoteULEChildMounted,
                //remoteULEChildChanged,
                getChildren
            })
        }),
        managedChildrenReturn: { getChildren }
    };
});
/**
 * @compositeParams
 */
export const useManagedChild = /*@__PURE__*/ monitored(function useManagedChild({ context, info }) {
    const { managedChildContext: { getChildren, managedChildrenArray, remoteULEChildMounted } } = (context ?? { managedChildContext: {} });
    const index = info.index;
    // Any time our child props change, make that information available
    // the parent if they need it.
    // The parent can listen for all updates and only act on the ones it cares about,
    // and multiple children updating in the same tick will all be sent at once.
    useLayoutEffect(() => {
        if (managedChildrenArray == null)
            return;
        // Insert this information in-place
        if (typeof index == "number") {
            managedChildrenArray.arr[index] = { ...info };
        }
        else {
            managedChildrenArray.rec[index] = { ...info };
        }
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
    // When we mount, and **after other children have unmounted via uLE),
    // ask the parent to add our info to the list of children.
    //
    // The order is important (we need to delete all unmounts *before* adding any mounts)
    // but TODO the use of useLayoutEffect + useEffect to achieve this isn't really semantically correct.
    // Plus we've gone from scheduling 1 effect to 2.
    //useEffect(() => {
    //}, [index]);
    return {
        managedChildReturn: { getChildren: getChildren }
    };
});
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
 */
export function useChildrenFlag({ getChildren, indexDemangler, initialIndex, closestFit, onClosestFit, onIndexChange, getAt, setAt, isValid }) {
    useEnsureStability("useChildrenFlag", onIndexChange, getAt, setAt, isValid, indexDemangler);
    indexDemangler ??= identity;
    // TODO (maybe?): Even if there is an initial index, it's not set until mount. Is that fine?
    const [getCurrentIndex, setCurrentIndex] = usePassiveState(onIndexChange, undefined);
    const [getRequestedIndex, setRequestedIndex] = usePassiveState(null, undefined, { skipMountInitialization: true });
    // Shared between onChildrenMountChange and changeIndex, not public
    // Only called when `closestFit` is false, naturally.
    const getClosestFit = useCallback((requestedIndex) => {
        const children = getChildren();
        let closestDistance = Infinity;
        let closestIndex = null;
        children.forEach(child => {
            if (child != null && isValid(child)) {
                console.assert(typeof child.index == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
                const newDistance = Math.abs(child.index - requestedIndex);
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
        const children = getChildren();
        const requestedIndex = indexDemangler(getRequestedIndex());
        const currentIndex = indexDemangler(getCurrentIndex());
        const currentChild = currentIndex == null ? null : children.getAt(currentIndex);
        if (requestedIndex != null && closestFit && (requestedIndex != currentIndex || currentChild == null || !isValid(currentChild))) {
            console.assert(typeof requestedIndex == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
            const closestFitIndex = getClosestFit(requestedIndex);
            setCurrentIndex(closestFitIndex, reason);
            if (currentChild) {
                setAt(currentChild, false, closestFitIndex, currentIndex);
            }
            if (closestFitIndex != null) {
                const closestFitChild = children.getAt(closestFitIndex);
                console.assert(closestFitChild != null, "Internal logic???");
                setAt(closestFitChild, true, closestFitIndex, currentIndex);
                onClosestFit(closestFitIndex);
            }
            else {
                onClosestFit(null);
            }
        }
    });
    const reasonRef = useRef(undefined);
    const changeIndex = useCallback((arg, reason) => {
        const children = getChildren();
        const requestedIndex = (arg instanceof Function ? arg(getRequestedIndex()) : arg);
        reasonRef.current = reason;
        setRequestedIndex(requestedIndex, reason);
        const currentIndex = getCurrentIndex();
        if (currentIndex == requestedIndex)
            return requestedIndex;
        let newMatchingChild = (requestedIndex == null ? null : children.getAt(requestedIndex));
        const oldMatchingChild = (currentIndex == null ? null : children.getAt(currentIndex));
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
                    newMatchingChild = children.getAt(closestFitIndex);
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