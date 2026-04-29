
import { OriginalIndex, UseProcessedIndexManglerReturnTypeSelf } from "../component-detail/processed-children/use-processed-index-mangler.js";
import { assertEmptyObject } from "../util/assert.js";
import { PriorityQueue } from "../util/heap.js";
import { identity } from "../util/lib-shared.js";
import { debounceRendering, useCallback, useLayoutEffect, useRef } from "../util/lib.js";
import { Nullable } from "../util/types.js";
import { useMonitoring } from "../util/use-call-count.js";
import { OnPassiveStateChange, PassiveStateUpdater, runImmediately, useEnsureStability, usePassiveState } from "./use-passive-state.js";
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

export interface UseManagedChildrenContextSelf<M extends ManagedChildInfo> extends ManagedChildren2<M> {
    managedChildrenArray: InternalChildInfo<M>;
    remoteULEChildMounted: (index: OriginalIndex, mounted: boolean) => void;
    //updateMinMax(index: OriginalIndex, mounted: boolean): void;
}

export interface UseManagedChildrenContext<M extends ManagedChildInfo> {
    managedChildContext: UseManagedChildrenContextSelf<M>
}



/**
 * Information that children and parents use to communicate with each other.
 * 
 * Other hooks will inherit from this to provide more complicated behavior.
 */
export interface ManagedChildInfo {
    /**
     * A unique value representing this child.
     * 
     * The index must be a **non-negative integer** for virtually all hooks. 
     * Gaps between indices are allowed, but keep them reasonable
     * (probably avoid gaps larger than 100 spaces, for example). 
     */
    index: number;
}



export type OnChildrenMountChange<T extends string | number> = ((mounted: Set<T>, unmounted: Set<T>) => void);
export type OnAfterChildLayoutEffect<T extends string | number> = ((causers: Iterable<T>) => void);

export interface UseManagedChildrenParametersSelf<M extends ManagedChildInfo> {
    /**
     * Runs after one or more children have updated their information (index, etc.).
     * 
     * Only one will run per tick, just like layoutEffect, but it isn't
     * *guaranteed* to have actually been a change.
     * 
     * TODO: This ended up not being needed by anything. Is it necessary? Does it cost anything?
     * 
     * @stable
     */
    onAfterChildLayoutEffect?: Nullable<OnAfterChildLayoutEffect<OriginalIndex>>;

    /**
     * Same as the above, but only for mount/unmount (or when a child changes its index)
     * 
     * @stable
     */
    onChildrenMountChange?: Nullable<OnChildrenMountChange<OriginalIndex>>;

    /**
     * 
     * @stable
     */
    onChildrenCountChange?: Nullable<((count: number) => void)>;
}

export interface UseManagedChildrenParameters<M extends ManagedChildInfo> {
    managedChildrenParameters: UseManagedChildrenParametersSelf<M>;
}

/**
 * Basically all `use*Child` functions contain the same two parameters, plus the extras:
 * 
 * `context` and `info`
 * 
 * This provides them both, then you provide all the other `use*Parameters` members.
 */
export interface UseGenericChildParameters<C extends {} | null, M extends {}> {
    context: C;
    info: M;
}

/**
 * Note: Child parameter types should not inherit from this unless they actually call `useManagedChild`.
 * 
 * E.G. `UseRovingTabIndexChildParameters` won't extend this, even though it has `info` and `context` parameters.
 * They look similar, should there be a GenericChildParameters type that provides those?
 */
export interface UseManagedChildParameters<M extends ManagedChildInfo> extends UseGenericChildParameters<UseManagedChildrenContext<M> | null, M> {
    /**
     * In general, this shouldn't be null, but for convenience's sake you are allowed to, which disables all behavior, and also means `getChildren` will be `undefined`!
     */
    context: UseManagedChildrenContext<M> | null;

    /**
     * The exact data that's available from the parent/each sibling element via `getAt` or the other methods on `ManagedChildren`.
     */
    info: M;
}

export interface UseManagedChildrenReturnTypeSelf<M extends ManagedChildInfo> extends ManagedChildren2<M> {

}

export interface UseManagedChildrenReturnType<M extends ManagedChildInfo> {
    /**
     * Returns information about the child that rendered itself with the requested key.
     * 
     * **Everything about this object is stable**. E.G. `managedChildrenReturn` itself, `managedChildrenReturn.getChildren`,
     * `managedChildrenReturn.getChildren()`, and `managedChildrenReturn.getChildren().getAt`, are all stable.
     * 
     * @stable
     */
    managedChildrenReturn: UseManagedChildrenReturnTypeSelf<M>;

    context: UseManagedChildrenContext<M>;
}

export interface UseManagedChildReturnTypeSelf<M extends ManagedChildInfo> extends ManagedChildren2<M> {

}


export interface UseManagedChildReturnType<M extends ManagedChildInfo> {
    managedChildReturn: UseManagedChildReturnTypeSelf<M>;
}


/**
 * Abstraction over the managed children
 * 
 * TODO: Get rid of this thing and put all these functions in `UseManagedChildReturnTypeSelf` directly, jeez
 */
interface ManagedChildren2<M extends ManagedChildInfo> {
    /** 
     * Returns the `info` of the child at the specified (original, non-repositioned) index.
     * 
     * @remarks This is the same as what's passed to `useManagedChild`.
     * 
     * @stable
     */
    getChildAt(originalIndex: OriginalIndex): M | undefined;

    /** 
     * Returns the highest number corresponding to a child. Inclusive. It's `while (i <= highest)`.
     * 
     * @stable
     */
    getHighestChildIndex(): OriginalIndex;

    /**
     * Returns the lowest number corresponding to a child, often 0. Inclusive, but hopefully that wasn't in question.
     *  
     * @stable
     */
    getLowestChildIndex(): OriginalIndex;

    /**
     * Executes a callback on every existing child.
     *  
     * @stable
     */
    forEachChild: (f: (child: M) => void) => void | "break";
}

/**
 * TODO: Probably remove this.
 * 
 * It's been reduced to nothing but the array of child info
 * after multiple refactorings.
 */
interface InternalChildInfo<M extends ManagedChildInfo> {
    arr: Array<M>;
}

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
export function useManagedChildren<M extends ManagedChildInfo>(parentParameters: UseManagedChildrenParameters<M>): UseManagedChildrenReturnType<M> {
    return useMonitoring(function useManagedChildren(): UseManagedChildrenReturnType<M> {

        type Info = M;

        const { managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange }, ...rest } = parentParameters;
        assertEmptyObject(rest);

        useEnsureStability("useManagedChildren", onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange);

        /**
         * We need to keep track of the highest and lowest index of all mounted children.
         * 
         * Our requirements:
         * 1. Must be able to mount a child of arbitrary index
         * 2. Must be able to unmount a child of arbitrary index
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
         * 
         * 1. If the removed child ISN'T the highest index (which
         *    we would know, because getting that is O(1)), then
         *    we add it to a `Set` that tracks the indices that
         *    haven't been "processed" yet. 
         * 
         *    This is O(log n) for one child, and O(n log n) for 
         *    N children, satisfying our requirements for this case.
         * 
         * 2. If the removed child IS the highest index, pop it
         *    off the heap. Then we see if the NEWLY highest 
         *    index exists in that "to-be-processed" `Set` of child 
         *    indices. If it is, pop that one from the heap too
         *    and repeat until the highest index is no longer in 
         *    that `Set`.
         * 
         *    This is O(log n) + O(log n) for one child, satisfying 
         *    our requirements for this case as well.
         */
        const indexTracking = useRef({
            highestIndexPriorityQueue: new PriorityQueue<number>((lhs, rhs): boolean => lhs > rhs),
            highIndicesNotYetRemoved: new Set(),
            lowestIndexPriorityQueue: new PriorityQueue<number>((lhs, rhs): boolean => lhs < rhs),
            lowIndicesNotYetRemoved: new Set()
        });

        const getHighestChildIndex = useCallback((): OriginalIndex => {
            return indexTracking.current.highestIndexPriorityQueue.peek() as OriginalIndex;
        }, []);
        const getLowestChildIndex = useCallback((): OriginalIndex => {
            return indexTracking.current.lowestIndexPriorityQueue.peek() as OriginalIndex;
        }, []);
        const updateMinMax = useCallback((index: number, mounted: boolean) => {
            if (mounted) {
                indexTracking.current.highestIndexPriorityQueue.push(index);
                indexTracking.current.lowestIndexPriorityQueue.push(index);
            }
            else {
                
                if (index != getHighestChildIndex()) {
                    indexTracking.current.highIndicesNotYetRemoved.add(index);
                }
                else {
                    indexTracking.current.highestIndexPriorityQueue.pop();
                    while (indexTracking.current.highestIndexPriorityQueue.size() > 0 && indexTracking.current.highIndicesNotYetRemoved.has(indexTracking.current.highestIndexPriorityQueue.peek())) {
                        indexTracking.current.highIndicesNotYetRemoved.delete(indexTracking.current.highestIndexPriorityQueue.pop());
                    }
                }


                if (index != getLowestChildIndex()) {
                    indexTracking.current.lowIndicesNotYetRemoved.add(index);
                }
                else {
                    indexTracking.current.lowestIndexPriorityQueue.pop();
                    while (indexTracking.current.lowestIndexPriorityQueue.size() > 0 && indexTracking.current.lowIndicesNotYetRemoved.has(indexTracking.current.lowestIndexPriorityQueue.peek())) {
                        indexTracking.current.lowIndicesNotYetRemoved.delete(indexTracking.current.lowestIndexPriorityQueue.pop());
                    }
                }
            }
        }, [])

        // All the information we have about our children is stored in this **stable** array.
        // Any mutations to this array **DO NOT** trigger any sort of a re-render.
        const managedChildrenArray = useRef<InternalChildInfo<M>>({ arr: [] });

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
        }, [])

        // Retrieves the information associated with the child with the given index.
        // `undefined` if not child there, or it's unmounted.
        const getManagedChildInfo = useCallback<UseManagedChildrenReturnTypeSelf<M>["getChildAt"]>((index: OriginalIndex) => {
            return managedChildrenArray.current.arr[index as number]!;
        }, []);


        /**
         * Children call `remoteULEChildMounted` when they mount/unmount.
         * 
         * When they do, we queue a microtask that waits for *all* of them to mount,
         * and then fire any callbacks that look for changes in mounted children.
         */
        const hasRemoteULEChildMounted = useRef<{ mounts: Set<OriginalIndex>, unmounts: Set<OriginalIndex>, mountInfos: Map<OriginalIndex, M> } | null>(null);
        const remoteULEChildMounted = useCallback((index: OriginalIndex, mounted: boolean): void => {
            // While the callbacks are debounced by a microtick,
            // we can update the min/max indices immediately.
            updateMinMax(index, mounted);

            // Only queue the microtask once.
            // All mounted children will share this same microtask.
            if (!hasRemoteULEChildMounted.current) {
                hasRemoteULEChildMounted.current = {
                    mounts: new Set(),
                    unmounts: new Set(),
                    mountInfos: new Map()
                };
                debounceRendering(() => {
                    const { mounts, unmounts } = hasRemoteULEChildMounted.current!;
                    const unmountsThatDidntMount = unmounts.difference(mounts);


                    for (const index of unmountsThatDidntMount) {
                        delete managedChildrenArray.current.arr[index as number];
                    }

                    if (onChildrenCountChange || onChildrenMountChange) {
                        onChildrenMountChange?.(hasRemoteULEChildMounted.current!.mounts, hasRemoteULEChildMounted.current!.unmounts);
                        onChildrenCountChange?.(getHighestChildIndex() + 1);
                    }
                        
                    // Reset the microtask tracker to allow us to
                    // do this again the next time children mount/unmount.
                    hasRemoteULEChildMounted.current = null;
                });
            }

            hasRemoteULEChildMounted?.current?.[mounted ? "mounts" : "unmounts"]?.add?.(index);
        }, [/* Must remain stable */]);


        return {
            context: useMemoObject({
                managedChildContext: useMemoObject({
                    managedChildrenArray: managedChildrenArray.current,
                    remoteULEChildMounted,
                    forEachChild,
                    getChildAt: getManagedChildInfo,
                    getHighestChildIndex,
                    getLowestChildIndex,
                    updateMinMax
                })
            }),
            managedChildrenReturn: {
                forEachChild,
                getChildAt: getManagedChildInfo,
                getHighestChildIndex,
                getLowestChildIndex,
            }
        }
    });
}



/**
 * @compositeParams
 */
export function useManagedChild<M extends ManagedChildInfo>({ context, info }: UseManagedChildParameters<M>): UseManagedChildReturnType<M> {
    return useMonitoring(function useManagedChild(): UseManagedChildReturnType<M> {

        const {
            managedChildContext: {
                forEachChild,
                getChildAt,
                getHighestChildIndex,
                getLowestChildIndex,
                managedChildrenArray,
                remoteULEChildMounted
            }
        } = (context! ?? { managedChildContext: {} });


        const index = info.index as OriginalIndex;
        // Any time our child props change, make that information available
        // the parent if they need it.
        // The parent can listen for all updates and only act on the ones it cares about,
        // and multiple children updating in the same tick will all be sent at once.
        useLayoutEffect(() => {
            if (managedChildrenArray == null) return;
            managedChildrenArray.arr[index as number] = { ...info };
        });

        // When we mount, notify the parent via queueMicrotask
        // (every child does this, so everything's coordinated to only queue a single microtask per tick)
        // Do the same on unmount.
        // Note: It's important that this comes AFTER remoteULEChildChanged
        // so that remoteULEChildMounted has access to all the info on mount.

        // When we unmount, ask the parent to remove our info from the list of children.
        useLayoutEffect(() => {
            remoteULEChildMounted?.(index as OriginalIndex, true);
            return () => remoteULEChildMounted?.(index as OriginalIndex, false);
        }, [index]);



        return {
            managedChildReturn: {
                forEachChild,
                getChildAt,
                getHighestChildIndex,
                getLowestChildIndex
            }
        }
    });
}


export interface UseChildrenFlagParameters<M extends ManagedChildInfo, R> extends
    Pick<UseProcessedIndexManglerReturnTypeSelf, "indexFromOriginalToRepositioned" | "indexFromRepositionedToOriginal">,
    Pick<ManagedChildren2<M>, "getChildAt" | "forEachChild"> {

    /**
     * Which child is considered active on mount.
     * 
     * After mount, change the current active child with `changeIndex`.
     */
    initialIndex: OriginalIndex | null | undefined;

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

    onClosestFit: ((newFit: OriginalIndex | null) => void) | null;


    /**
     * Called whenever a new index is selected.
     * 
     * Notably, the value can be different than what was called with changeIndex()
     * if the requested index didn't exist or was hidden.
     * 
     * @stable
     */
    onIndexChange: null | OnPassiveStateChange<OriginalIndex | null, R>;

    /** @stable */
    setAt(index: M, value: boolean, newSelectedIndex: OriginalIndex | null, prevSelectedIndex: OriginalIndex | null): void;
    /** @stable */
    getAt(index: M): boolean;

    /** Must be at least quasi-stable (always stable, doesn't need to be called during render) @stable */
    isValid(index: M): boolean;
}

export interface UseChildrenFlagReturnType<M extends ManagedChildInfo, R> {
    /** 
     * @stable
     * 
     * Manually changes the current index that is (focused/selected/tabbable/whatever).
     * 
     * The parent can use this to notify each relevant child of what it must do in order to make this change happen.
     * 
     * The returned value will be the new index that will be used. If `closestFit` is false, it will always be the same as what you passed in.
     */
    changeIndex: PassiveStateUpdater<OriginalIndex | null, R>;
    /** 
     * @stable
     * 
     * Call this whenever a child mounts/unmounts, or whenever calling a child's isValid() would change
     */
    reevaluateClosestFit: (reason: R) => void;
    /** @stable */
    getCurrentIndex: () => OriginalIndex | null;
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
export function useChildrenFlag<M extends ManagedChildInfo, R>({ getChildAt, forEachChild, indexFromRepositionedToOriginal, indexFromOriginalToRepositioned, initialIndex, closestFit, onClosestFit, onIndexChange, getAt, setAt, isValid }: UseChildrenFlagParameters<M, R>): UseChildrenFlagReturnType<M, R> {
    initialIndex ??= null;
    useEnsureStability("useChildrenFlag", onIndexChange, getAt, setAt, isValid, indexFromRepositionedToOriginal, indexFromOriginalToRepositioned);

    indexFromRepositionedToOriginal ??= identity as any;
    indexFromOriginalToRepositioned ??= identity as any;

    // TODO: useCallback instead of useStableGetter is intentional here, but is it sound?
    const [getCurrentIndex, setCurrentIndex] = usePassiveState<null | OriginalIndex, R>(onIndexChange, useCallback(() => initialIndex as OriginalIndex, []), { debounceRendering: runImmediately });

    const [getRequestedIndex, setRequestedIndex] = usePassiveState<null | OriginalIndex, R>(null, undefined, { debounceRendering: runImmediately, initialization: "delay" });

    // Shared between onChildrenMountChange and changeIndex, not public
    // Only called when `closestFit` is false, naturally.
    const getClosestFit = useCallback((requestedIndex: OriginalIndex): OriginalIndex => {
        let closestDistance = Infinity;
        let closestIndex: number | null = null;
        forEachChild(child => {

            if (child != null && isValid(child)) {
                console.assert(typeof child.index == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
                const newDistance = Math.abs(indexFromOriginalToRepositioned(child.index as OriginalIndex) - indexFromOriginalToRepositioned(requestedIndex));
                if (newDistance < closestDistance || (newDistance == closestDistance && (child.index as OriginalIndex) < requestedIndex)) {
                    closestDistance = newDistance;
                    closestIndex = (child.index as number);
                }
            }
        });
        return closestIndex! as OriginalIndex;
    }, [/* Must remain stable! */]);

    if (closestFit) {
        console.assert(onClosestFit != null, "When closestFit is used, onClosestFit must be provided")
    }

    // Any time a child mounts/unmounts, we need to double-check to see if that affects 
    // the "currently selected" (or whatever) index.  The two cases we're looking for:
    // 1. The currently selected child unmounted
    // 2. A child mounted, and it mounts with the index we're looking for
    const reevaluateClosestFit = useStableCallback((reason: R | undefined) => {

        // These indices are relative to the *original* child array.
        const requestedIndexOriginal = (getRequestedIndex()!);
        const currentIndexOriginal = (getCurrentIndex()!);

        const requestedIndexRepositioned = indexFromOriginalToRepositioned(requestedIndexOriginal);
        const currentIndexRepositioned = indexFromOriginalToRepositioned(currentIndexOriginal);

        const currentChild = requestedIndexOriginal == null ? null : getChildAt(requestedIndexOriginal);

        if (requestedIndexRepositioned != null && closestFit && (requestedIndexRepositioned != currentIndexRepositioned || currentChild == null || !isValid(currentChild))) {

            console.assert(typeof requestedIndexRepositioned == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");

            const closestFitIndexOriginal = getClosestFit(requestedIndexOriginal);
            setCurrentIndex(closestFitIndexOriginal, reason!);
            if (currentChild) {
                setAt(currentChild, false, closestFitIndexOriginal, currentIndexOriginal);
            }
            if (closestFitIndexOriginal != null) {
                const closestFitChild = getChildAt(closestFitIndexOriginal)!;
                console.assert(closestFitChild != null, "Internal logic???");
                setAt(closestFitChild, true, closestFitIndexOriginal, currentIndexOriginal);
                onClosestFit!(closestFitIndexOriginal);
            }
            else {
                onClosestFit!(null);
            }
        }
    });


    const reasonRef = useRef<R | undefined>(undefined);

    const changeIndex = useCallback<PassiveStateUpdater<OriginalIndex | null, R>>((arg: Parameters<PassiveStateUpdater<OriginalIndex | null, R>>[0], reason: Parameters<PassiveStateUpdater<OriginalIndex | null, R>>[1]) => {

        const requestedIndex = (arg instanceof Function ? arg(getRequestedIndex()) : arg) as OriginalIndex;
        reasonRef.current = reason;
        setRequestedIndex(requestedIndex, reason as never);
        const currentIndex = getCurrentIndex();
        if (currentIndex == requestedIndex)
            return requestedIndex;

        let newMatchingChild = (requestedIndex == null ? null : getChildAt(requestedIndex));
        const oldMatchingChild = (currentIndex == null ? null : getChildAt(currentIndex));
        if (requestedIndex == null) {
            // Easy case
            setCurrentIndex(null, reason as never);
            if (oldMatchingChild)
                setAt(oldMatchingChild, false, requestedIndex, currentIndex);
            return null;
        }
        else {
            const childIsValid = (newMatchingChild && isValid(newMatchingChild));
            if (childIsValid || !closestFit) {
                setCurrentIndex(requestedIndex, reason as never);
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
                setCurrentIndex(closestFitIndex, reason as never);
                if (closestFitIndex != null) {
                    newMatchingChild = getChildAt(closestFitIndex)!;
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
        changeIndex(initialIndex ?? null as (OriginalIndex | null), reasonRef.current!);
    }, [])

    return { changeIndex, reevaluateClosestFit, getCurrentIndex };
}

