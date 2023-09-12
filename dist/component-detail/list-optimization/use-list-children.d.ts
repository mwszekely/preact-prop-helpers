import { UseManagedChildrenContext } from "../../preact-extensions/use-managed-children.js";
import { ExtendMerge, Nullable, OmitStrong, VNode } from "../../util/lib.js";
import { UsePaginatedChildContext, UsePaginatedChildrenInfo, UsePaginatedChildrenParameters, UsePaginatedChildrenReturnType } from "./use-paginated-children.js";
import { Compare, UseRearrangeableChildInfo, UseRearrangeableChildrenParameters, UseRearrangeableChildrenReturnType } from "./use-rearrangeable-children.js";
import { UseStaggeredChildContext, UseStaggeredChildrenInfo, UseStaggeredChildrenParameters, UseStaggeredChildrenReturnType } from "./use-staggered-children.js";
export interface UseListChildrenReturnTypeSelf {
    /**
     * @stable
     *
     * Call to rearrange the children in ascending or descending order.
     *
     */
    sort: (direction: "ascending" | "descending") => Promise<void> | void;
    children: VNode;
}
export interface UseListChildrenReturnType<M extends UseRearrangeableChildInfo> extends OmitStrong<UseRearrangeableChildrenReturnType<M>, never>, OmitStrong<UseStaggeredChildrenReturnType, never>, OmitStrong<UsePaginatedChildrenReturnType, never> {
    listChildrenReturn: UseListChildrenReturnTypeSelf;
    context: UsePaginatedChildContext & UseStaggeredChildContext & UseManagedChildrenContext<M>;
}
export interface UseListChildInfo<TabbableChildElement extends Element> extends UseRearrangeableChildInfo, UsePaginatedChildrenInfo<TabbableChildElement>, UseStaggeredChildrenInfo {
}
export interface UseListChildrenParametersSelf<M extends UseRearrangeableChildInfo> {
    /**
     * Controls how values compare against each other when `sort` is called.
     *
     * If null, a default sort is used that assumes `getSortValue` returns a value that works well with the `-` operator (so, like, a number, string, `Date`, `null`, etc.)
     *
     * @param lhs - The first value to compare
     * @param rhs - The second value to compare
     */
    compare: Nullable<Compare<M>>;
    children: VNode[];
}
/**
 * All of these functions **MUST** be stable across renders.
 */
export interface UseListChildrenParameters<ParentElement extends Element, TabbableChildElement extends Element, M extends UseRearrangeableChildInfo> extends OmitStrong<ExtendMerge<ExtendMerge<UseRearrangeableChildrenParameters<M>, UseStaggeredChildrenParameters>, UsePaginatedChildrenParameters<ParentElement, TabbableChildElement>>, "managedChildrenReturn" | "rearrangeableChildrenReturn"> {
    listChildrenParameters: UseListChildrenParametersSelf<M>;
    context: Pick<UseManagedChildrenContext<M>, "managedChildContext">;
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
export declare const useListChildren: <ParentElement extends Element, TabbableChildElement extends Element, M extends UseListChildInfo<TabbableChildElement>>({ rearrangeableChildrenParameters, listChildrenParameters: { children, compare: userCompare }, paginatedChildrenParameters, refElementReturn, rovingTabIndexReturn, staggeredChildrenParameters }: UseListChildrenParameters<ParentElement, TabbableChildElement, M>) => UseListChildrenReturnType<M>;
//# sourceMappingURL=use-list-children.d.ts.map