import { VNode } from "preact";
import { MutableRef } from "preact/hooks";
import { ManagedChildInfo, ManagedChildren } from "../preact-extensions/use-managed-children.js";
export type GetIndex<P> = (row: VNode<P>) => (number | null | undefined);
export type GetValid = (index: number) => boolean;
export type GetHighestChildIndex = () => number;
export type Compare<M extends ManagedChildInfo<number>> = (lhs: M, rhs: M) => number;
/**
 * All of these functions **MUST** be stable across renders.
 */
export interface UseRearrangeableChildrenParameters {
    /**
     * Must return, e.g., the row index of this child
     * (Usually just an `index` prop)
     */
    rearrangeableChildrenParameters: {
        /**
         * This must return the index of this child relative to all its sortable siblings.
         *
         * In general, this corresponds to the `index` prop, so something like `vnode => vnode.props.index` is what you're usually looking for.
         */
        getIndex: GetIndex<any>;
        onRearranged: null | (() => void);
    };
}
/**
 * All of these functions **MUST** be stable across renders.
 */
export interface UseSortableChildrenParameters<M extends ManagedChildInfo<number>> extends UseRearrangeableChildrenParameters {
    sortableChildrenParameters: {
        /**
         * Controls how values compare against each other when `sort` is called.
         *
         * If null, a default sort is used that assumes `getSortValue` returns a value that works well with the `-` operator (so, like, a number, string, `Date`, `null`, etc.)
         *
         * @param lhs
         * @param rhs
         */
        compare: null | Compare<M>;
    };
}
export interface UseRearrangeableChildrenReturnType<M extends ManagedChildInfo<number>> {
    rearrangeableChildrenReturn: {
        /**
         * Pass an array of not-sorted child information to this function
         * and the children will re-arrange themselves to match.
         *
         * **STABLE**
         *
         *
         */
        rearrange: (rowsInOrder: M[]) => void;
        /** **STABLE** */
        shuffle: (managedRows: ManagedChildren<M>) => Promise<void> | void;
        /**
         * **STABLE**
         *
         * This function takes a component's original `index` prop and outputs a new index that represents its re-arranged position.
         * In conjunction with `indexDemangler`, this can be used to perform math on indices (incrementing, decrementing, etc.)
         *
         * E.G. to decrement a component's index "c": indexDemangler(indexMangler(c) - 1)
         */
        indexMangler: (n: number) => number;
        /** **STABLE** */
        indexDemangler: (n: number) => number;
        /** **STABLE** */
        mangleMap: MutableRef<Map<number, number>>;
        /** **STABLE** */
        demangleMap: MutableRef<Map<number, number>>;
        /**
         * **STABLE**
         *
         * Call this on your props (that contain the children to sort!!) to allow them to be sortable.
         *
         */
        useRearrangedChildren: (children: VNode[]) => VNode[];
        toJsonArray(managedRows: ManagedChildren<M>, transform?: (info: M) => object): object;
    };
}
export interface UseSortableChildrenReturnType<M extends ManagedChildInfo<number>> extends UseRearrangeableChildrenReturnType<M> {
    sortableChildrenReturn: {
        /** **STABLE** */
        sort: (managedRows: ManagedChildren<M>, direction: "ascending" | "descending") => Promise<void> | void;
    };
}
export interface UseSortableChildInfo extends ManagedChildInfo<number> {
    getSortValue(): unknown;
}
/**
 * Hook that allows for the **direct descendant** children of this component to be re-ordered and sorted.
 *
 * *This is **separate** from "managed" children, which can be any level of child needed! Sortable/rearrangeable children must be **direct descendants** of the parent that uses this hook!*
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
 */
export declare function useRearrangeableChildren<M extends UseSortableChildInfo>({ rearrangeableChildrenParameters: { getIndex, onRearranged } }: UseRearrangeableChildrenParameters): UseRearrangeableChildrenReturnType<M>;
/**
 * Hook that allows for the **direct descendant** children of this component to be re-ordered and sorted.
 *
 * *This is **separate** from "managed" children, which can be any level of child needed! Sortable/rearrangeable children must be **direct descendants** of the parent that uses this hook!*
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
 */
export declare function useSortableChildren<M extends UseSortableChildInfo>({ rearrangeableChildrenParameters, sortableChildrenParameters: { compare: userCompare } }: UseSortableChildrenParameters<M>): UseSortableChildrenReturnType<M>;
export declare function defaultCompare(lhs: UseSortableChildInfo | undefined, rhs: UseSortableChildInfo | undefined): number;
//# sourceMappingURL=use-sortable-children.d.ts.map