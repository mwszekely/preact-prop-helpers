import { OnPassiveStateChange, PassiveStateUpdater } from "./use-passive-state.js";
export interface UseManagedChildrenContext<M extends ManagedChildInfo<any>> {
    managedChildContext: {
        getChildren(): ManagedChildren<M>;
        managedChildrenArray: InternalChildInfo<M>;
        remoteULEChildMounted: (index: M["index"], mounted: boolean) => void;
        remoteULEChildChanged: (index: M["index"]) => (() => void);
    };
}
/**
 * Information that children and parents use to communicate with each other.
 *
 * * `index` refers to which child this is.
 * * `flags` are quick-and-easy getters and setters that you can optionally use
 * * `subInfo` is anything used by a derived hook. `useRovingTabIndex`, for example, needs to know how to focus an arbitrary child, so the child populates `info` with an object containing a method called `focusSelf`.
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
        onChildCountChange?: null | undefined | ((count: number) => void);
    };
}
export interface UseManagedChildParameters<M extends ManagedChildInfo<any>> {
    managedChildParameters: Pick<M, "index">;
    /**
     * In general, this shouldn't be null, but for convenience's sake you are allowed to, which disables all behavior, and also means `getChildren` will be `undefined`!
     */
    context: UseManagedChildrenContext<M> | null;
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
    };
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
    forEach: (f: (child: M) => void) => void;
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
export declare function useManagedChildren<M extends ManagedChildInfo<string | number>>(parentParameters: UseManagedChildrenParameters<M>): UseManagedChildrenReturnType<M>;
export declare function useManagedChild<M extends ManagedChildInfo<number | string>>(info: UseManagedChildParameters<M>, managedChildParameters: M): UseManagedChildReturnType<M>;
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
export declare function useChildrenFlag<M extends ManagedChildInfo<number | string>, R>({ getChildren, initialIndex, closestFit, onIndexChange, getAt, setAt, isValid, }: UseChildrenFlagParameters<M, R>): UseChildrenFlagReturnType<M, R>;
export {};
//# sourceMappingURL=use-managed-children.d.ts.map