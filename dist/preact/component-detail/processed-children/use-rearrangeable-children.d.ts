import { ManagedChildInfo, UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { Nullable, TargetedPick } from "../../util/lib.js";
import { OmitStrong, VNode } from "../../util/types.js";
export interface UseRearrangedChildrenContextSelf {
    provideManglers(args: Pick<UseRearrangeableChildrenReturnTypeSelf<any>, "indexDemangler" | "indexMangler" | "reverse" | "shuffle" | "sort">): void;
}
/**
 * Unusually, this context is not passed from parent to child,
 * but from parent to a different parent.
 */
export interface UseRearrangedChildrenContext {
    rearrangeableChildrenContext: UseRearrangedChildrenContextSelf;
}
/**
 * A parent can call this to provide useRearrangeableChildren with the `context` it expects.
 *
 * @returns
 */
export declare function useCreateProcessedChildrenContext(): OmitStrong<UseRearrangeableChildrenReturnTypeSelf<any>, "children"> & {
    context: UseRearrangedChildrenContext;
};
export interface UseRearrangeableChildInfo extends ManagedChildInfo<number> {
}
export type GetIndex = (row: VNode) => (number | null | undefined);
export type GetValid = (index: number) => boolean;
export type GetHighestChildIndex = () => number;
export type Compare<T extends unknown> = (lhs: T, rhs: T) => number;
export interface UseRearrangeableChildrenParametersSelf {
    /**
     * Controls how values from `getSortValueAt` compare against each other when `sort` is called. By default, simply does `lhs - rhs`.
     *
     * If null, the default order of children is used as given.
     *
     * @param lhs - The first value to compare
     * @param rhs - The second value to compare
     */
    compare: Nullable<Compare<unknown>>;
    /**
     * For a given index, return a value that represents how that child should be sorted relative to other children with the `compare` function.
     *
     * Anything can be returned, as long as the `compare` function you pass can also handle it. E.G. return a string, then have `compare` call `localeCompare` or something.
     *
     * This is called **during** render, so it cannot be wrapped with `useStableCallback`.
     *
     * @stable
     */
    getSortValueAt(index: number): unknown;
    /**
     * Because this hook needs to re-render each child with a new `key` prop,
     * it may be useful to apply a transformation before that step completes.
     *
     * @default `identity`
     */
    adjust: Nullable<(input: VNode, data: {
        mangledIndex: number | null;
        demangledIndex: number | null;
    }) => VNode | null>;
    /**
     * This must return the index of this child relative to all its sortable siblings from its `VNode`.
     *
     * @remarks In general, this corresponds to the `index` prop, so something like `vnode => vnode.props.index` is what you're usually looking for.
     * But if you rename `index` to something else in your component, you'll need to account for that with `getIndex`.
     *
     * @stable
     */
    getIndex: GetIndex;
    /**
     * Called after the children have been rearranged.
     */
    onRearranged: Nullable<((phase: 'render' | 'async') => void)>;
    /**
     * The children to sort.
     */
    children: (VNode | null)[];
}
/**
 * All of these functions **MUST** be stable across renders.
 */
export interface UseRearrangeableChildrenParameters<M extends UseRearrangeableChildInfo> extends TargetedPick<UseManagedChildrenReturnType<M>, "managedChildrenReturn", "getChildren"> {
    rearrangeableChildrenParameters: UseRearrangeableChildrenParametersSelf;
    context: UseRearrangedChildrenContext;
}
export interface UseRearrangeableChildrenReturnType<M extends UseRearrangeableChildInfo> {
    rearrangeableChildrenReturn: UseRearrangeableChildrenReturnTypeSelf<M>;
}
export interface UseRearrangeableChildrenReturnTypeSelf<M extends UseRearrangeableChildInfo> {
    /**
     * Pass an array of not-sorted child information to this function
     * and the children will re-arrange themselves to match.
     *
     * @remarks This is only needed if you are implementing your own sort/reordering algorithm, just call this at the end when you're ready.
     *
     * @stable
     */
    rearrange: (phase: 'render' | 'async', originalRows: M["index"][], rowsInOrder: M["index"][]) => void;
    /**
     * Arranges the children in a random order.
     *
     * @stable
     */
    shuffle: () => Promise<void> | void;
    /**
     * Reverses the order of the children
     *
     * @stable
     */
    reverse: () => Promise<void> | void;
    /**
     * @stable
     *
     * This function takes a component's original `index` prop and outputs a new index that represents its re-arranged position.
     * In conjunction with `indexDemangler`, this can be used to perform math on indices (incrementing, decrementing, etc.)
     *
     * E.G. to decrement a component's index "c": indexDemangler(indexMangler(c) - 1)
     */
    indexMangler: (n: number) => number;
    /** @stable */
    indexDemangler: (n: number) => number;
    /**
     * The transformed (i.e. rearranged) children to render.
     */
    children: (VNode | null)[];
    /**
     * @stable
     *
     * Call to rearrange the children in ascending or descending order according to `compare`.
     *
     * Note: `descending` simply inverts the value returned by `compare`.
     *
     */
    sort: (direction: "ascending" | "descending") => void;
}
export interface UseRearrangeableChildParameters<_M extends UseRearrangeableChildInfo> {
}
/**
 * Hook that allows for the **direct descendant** children of this component to be re-ordered and sorted.
 *
 * @remarks *This is **separate** from "managed" children, which can be any level of child needed! Sortable/rearrangeable children must be **direct descendants** of the parent that uses this hook!*
 *
 * It's recommended to use this in conjunction with `useListNavigation`; it takes the same `indexMangler` and `indexDemangler`
 * functions that this hook returns. `useListNavigation` does not directly use this hook because, as mentioned,
 * this hook imposes serious restrictions on child structure, while `useListNavigation` allows anything.
 *
 * Besides the prop-modifying hook that's returned, the `sort` function that's returned will
 * sort all children according to their value from the `getValue` argument you pass in.
 *
 * If you want to perform some re-ordering operation that's *not* a sort, you can manually
 * re-map each child's position using `mangleMap` and `demangleMap`, which convert between
 * sorted and unsorted index positions.
 *
 * Again, unlike some other hooks, **these children must be direct descendants**. This is because
 * the prop-modifying hook inspects the given children, then re-creates them with new `key`s.
 * Because keys are given special treatment and a child has no way of modifying its own key
 * there's no other time or place this can happen other than exactly within the parent component's render function.
 *
 * @compositeParams
 */
export declare const useRearrangeableChildren: <M extends UseRearrangeableChildInfo>({ rearrangeableChildrenParameters: { getIndex, getSortValueAt, onRearranged, children, adjust, compare }, managedChildrenReturn: { getChildren }, context: { rearrangeableChildrenContext: { provideManglers } } }: UseRearrangeableChildrenParameters<M>) => UseRearrangeableChildrenReturnType<M>;
export declare const useRearrangeableChild: <M extends UseRearrangeableChildInfo>({}: UseRearrangeableChildParameters<M>) => {};
//# sourceMappingURL=use-rearrangeable-children.d.ts.map