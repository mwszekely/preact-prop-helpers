import { ManagedChildInfo, UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { Nullable, TargetedPick, VNode } from "../../util/types.js";
import { UseProcessedIndexManglerContext, UseProcessedIndexManglerParameters } from "./use-processed-index-mangler.js";
export interface UseRearrangedChildrenContextSelf {
    _unused: undefined;
}
/**
 * Unusually, this context is not passed from parent to child,
 * but from parent to a different parent.
 */
export interface UseRearrangedChildrenContext extends UseProcessedIndexManglerContext {
}
/**
 * A parent can call this to provide useRearrangeableChildren with the `context` it expects.
 *
 * @returns
 */
type RearrangeableChildPositionInfo = Pick<DOMRectReadOnly, "left" | "top" | "width" | "height">;
export interface UseRearrangeableChildInfo<ChildElement extends Element> extends ManagedChildInfo<number> {
    getElement(): ChildElement | null;
    /**
     * This notifies the child of the position that it is currently in,
     * so that the next time it renders itself, it can use that for a FLIP animation
     */
    updateFLIPAnimation(originalPosition: RearrangeableChildPositionInfo): void;
}
export type GetValid = (index: number) => boolean;
export type GetHighestChildIndex = () => number;
export interface UseRearrangeableChildrenParametersSelf {
    /**
     * The children to rearrange.
     */
    children: (VNode | null)[];
}
/**
 * All of these functions **MUST** be stable across renders.
 */
export interface UseRearrangeableChildrenParameters<ChildElement extends Element, M extends UseRearrangeableChildInfo<ChildElement>> extends UseProcessedIndexManglerParameters, TargetedPick<UseManagedChildrenReturnType<M>, "managedChildrenReturn", "getChildren"> {
    rearrangeableChildrenParameters: UseRearrangeableChildrenParametersSelf;
    context: UseRearrangedChildrenContext;
}
export interface UseRearrangeableChildrenReturnType {
    rearrangeableChildrenReturn: UseRearrangeableChildrenReturnTypeSelf;
    context: UseRearrangeableChildrenContext;
}
export interface UseRearrangeableChildrenContext {
    rearrangeableChildrenContext: UseRearrangeableChildrenContextSelf;
}
export interface UseRearrangeableChildrenContextSelf {
    getFLIPStart(index: number): RearrangeableChildPositionInfo | undefined;
}
export interface UseRearrangeableChildrenReturnTypeSelf {
    refresh(): void;
    /**
     * Pass an array of not-sorted child information to this function
     * and the children will re-arrange themselves to match.
     *
     * @remarks This is only needed if you are implementing your own sort/reordering algorithm, just call this at the end when you're ready.
     *
     * @stable
     */
    /**
     * Arranges the children in a random order.
     *
     * @stable
     */
    /**
     * Reverses the order of the children
     *
     * @stable
     */
    /**
     * @stable
     *
     * This function takes a component's original `index` prop and outputs a new index that represents its re-arranged position.
     * In conjunction with `indexDemangler`, this can be used to perform math on indices (incrementing, decrementing, etc.)
     *
     * E.G. to decrement a component's index "c": indexDemangler(indexMangler(c) - 1)
     */
    /** @stable */
    /**
     * The transformed (i.e. rearranged) children to render.
     */
    children: (VNode | null)[];
}
export interface UseRearrangeableChildParameters<ChildElement extends Element> {
    info: Pick<UseRearrangeableChildInfo<ChildElement>, "getElement" | "index">;
    rearrangeableChildParameters: UseRearrangeableChildParametersSelf;
    context: UseRearrangeableChildrenContext;
}
export interface UseRearrangeableChildParametersSelf {
    cssProperty: Nullable<'translate' | 'transform'>;
    duration: Nullable<string>;
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
export declare const useRearrangeableChildren: <ChildElement extends Element, M extends UseRearrangeableChildInfo<ChildElement>>({ rearrangeableChildrenParameters: { children: childrenIn }, processedIndexManglerParameters: { getIndex, getSortValueAt }, managedChildrenReturn: { getChildren: getManagedChildren }, context: { processedIndexManglerContext: { mangler } } }: UseRearrangeableChildrenParameters<ChildElement, M>) => UseRearrangeableChildrenReturnType;
export interface UseRearrangeableChildReturnType<ChildElement extends Element> {
    info: Pick<UseRearrangeableChildInfo<ChildElement>, "updateFLIPAnimation">;
}
export declare const useRearrangeableChild: <ChildElement extends Element, M extends UseRearrangeableChildInfo<ChildElement>>({ context, info: { getElement, index }, rearrangeableChildParameters: { cssProperty, duration } }: UseRearrangeableChildParameters<ChildElement>) => UseRearrangeableChildReturnType<ChildElement>;
export {};
//# sourceMappingURL=use-rearrangeable-children.d.ts.map