import { Nullable } from "../util/types.js";
import { OnPassiveStateChange, PassiveStateUpdater } from "./use-passive-state.js";
export interface UseManagedChildrenContextSelf<M extends ManagedChildInfo<any>> {
    getChildren(): ManagedChildren<M>;
    managedChildrenArray: InternalChildInfo<M>;
    remoteULEChildMounted: (index: M["index"], mounted: boolean) => void;
}
export interface UseManagedChildrenContext<M extends ManagedChildInfo<any>> {
    managedChildContext: UseManagedChildrenContextSelf<M>;
}
/**
 * Information that children and parents use to communicate with each other.
 *
 * Other hooks will inherit from this to provide more complicated behavior.
 */
export interface ManagedChildInfo<T extends string | number> {
    /**
     * A unique value representing this child.
     *
     * If a `number`, then it's like the index to an array. There can be holes/gaps, even negative numbers, but children are contiguous to a degree. There can be a child "before" or "after" this one.
     *
     * If a `string`, then it's like a key into an object. There's no well-relationship between children. You can access a known child or all children, but nothing in between.
     */
    index: T;
}
export type OnChildrenMountChange<T extends string | number> = ((mounted: Set<T>, unmounted: Set<T>) => void);
export type OnAfterChildLayoutEffect<T extends string | number> = ((causers: Iterable<T>) => void);
export interface UseManagedChildrenParametersSelf<M extends ManagedChildInfo<any>> {
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
    onAfterChildLayoutEffect?: Nullable<OnAfterChildLayoutEffect<M["index"]>>;
    /**
     * Same as the above, but only for mount/unmount (or when a child changes its index)
     *
     * @stable
     */
    onChildrenMountChange?: Nullable<OnChildrenMountChange<M["index"]>>;
    /**
     *
     * @stable
     */
    onChildrenCountChange?: Nullable<((count: number) => void)>;
}
export interface UseManagedChildrenParameters<M extends ManagedChildInfo<any>> {
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
export interface UseManagedChildParameters<M extends ManagedChildInfo<any>> extends UseGenericChildParameters<UseManagedChildrenContext<M> | null, M> {
    /**
     * In general, this shouldn't be null, but for convenience's sake you are allowed to, which disables all behavior, and also means `getChildren` will be `undefined`!
     */
    context: UseManagedChildrenContext<M> | null;
    /**
     * The exact data that's available from the parent/each sibling element via `getAt` or the other methods on `ManagedChildren`.
     */
    info: M;
}
export interface UseManagedChildrenReturnTypeSelf<M extends ManagedChildInfo<any>> {
    /**
     * @stable
     *
     * Note that **both** `getChildren` and the `ManagedChildren` object it returns are stable!
     *
     * This is a getter instead of an object because when function calls happen out of order it's easier to just have always been passing and return getters everywhere
     */
    getChildren(): ManagedChildren<M>;
}
export interface UseManagedChildrenReturnType<M extends ManagedChildInfo<any>> {
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
export interface UseManagedChildReturnTypeSelf<M extends ManagedChildInfo<any>> {
    /**
     * Returns a proxy to all the information each child rendered with. The function, returned object, and every function within it are all stable.
     *
     * @stable
     */
    getChildren(): ManagedChildren<M>;
}
export interface UseManagedChildReturnType<M extends ManagedChildInfo<any>> {
    managedChildReturn: UseManagedChildReturnTypeSelf<M>;
}
/**
 * Abstraction over the managed children
 */
export interface ManagedChildren<M extends ManagedChildInfo<any>> {
    /**
     * Returns the `info` of the child at the specified index.
     *
     * @remarks This is the same as what's passed to `useManagedChild`.
     *
     * @stable
     */
    getAt(index: M["index"]): M | undefined;
    /**
     * Returns the highest number corresponding to a child. Inclusive. It's `while (i <= highest)`.
     *
     * @stable
     */
    getHighestIndex(): number;
    /**
     * Returns the lowest number corresponding to a child, often 0. Inclusive, but hopefully that wasn't in question.
     *
     * @stable
     */
    getLowestIndex(): number;
    /**
     * Executes a callback on every existing child.
     *
     * @stable
     */
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
     * and, *crucially*, fills in any holes in the array with a pseudo-child that just contains an index.
     *
     * This behavior, to be clear, is only necessary for sorting and rearranging because
     * sorting and rearranging require knowing perfectly which index maps to which.
     * We don't need any other missing information in the array besides the missing index.
     *
     * @internal
     */
    _arraySlice: () => M[];
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
export declare const useManagedChildren: <M extends ManagedChildInfo<string | number>>(parentParameters: UseManagedChildrenParameters<M>) => UseManagedChildrenReturnType<M>;
/**
 * @compositeParams
 */
export declare const useManagedChild: <M extends ManagedChildInfo<string | number>>({ context, info }: UseManagedChildParameters<M>) => UseManagedChildReturnType<M>;
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
    onClosestFit: ((newFit: number | null) => void) | null;
    getChildren(): ManagedChildren<M>;
    /**
     * Called whenever a new index is selected.
     *
     * Notably, the value can be different than what was called with changeIndex()
     * if the requested index didn't exist or was hidden.
     *
     * @stable
     */
    onIndexChange: null | OnPassiveStateChange<M["index"] | null, R>;
    /** @stable */
    setAt(index: M, value: boolean, newSelectedIndex: M["index"] | null, prevSelectedIndex: M["index"] | null): void;
    /** @stable */
    getAt(index: M): boolean;
    /** Must be at least quasi-stable (always stable, doesn't need to be called during render) @stable */
    isValid(index: M): boolean;
}
export interface UseChildrenFlagReturnType<M extends ManagedChildInfo<any>, R> {
    /**
     * @stable
     *
     * Manually changes the current index that is (focused/selected/tabbable/whatever).
     *
     * The parent can use this to notify each relevant child of what it must do in order to make this change happen.
     *
     * The returned value will be the new index that will be used. If `closestFit` is false, it will always be the same as what you passed in.
     */
    changeIndex: PassiveStateUpdater<M["index"] | null, R>;
    /**
     * @stable
     *
     * Call this whenever a child mounts/unmounts, or whenever calling a child's isValid() would change
     */
    reevaluateClosestFit: (reason: R) => void;
    /** @stable */
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
 */
export declare function useChildrenFlag<M extends ManagedChildInfo<number | string>, R>({ getChildren, initialIndex, closestFit, onClosestFit, onIndexChange, getAt, setAt, isValid }: UseChildrenFlagParameters<M, R>): UseChildrenFlagReturnType<M, R>;
export {};
//# sourceMappingURL=use-managed-children.d.ts.map