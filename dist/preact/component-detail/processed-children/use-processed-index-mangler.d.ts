import { Nullable, createElement } from "../../util/lib.js";
import { VNode } from "../../util/types.js";
export type Compare<T extends unknown> = (lhs: T, rhs: T) => number;
export type GetIndex = (row: VNode) => (OriginalIndex | number | undefined);
/**
 * A tagged integer type used to represent **unsorted** indices.
 *
 * Things that operate strictly on a programmatic basis, like
 * rovingTabIndex, singleSelect, or anything involving
 * retrieving per-child data is going to use this directly.
 *
 * Feel free to freely cast a `number` to this when appropriate
 * (i.e. when you have a plain number that represents this concept).
 */
export type OriginalIndex = number & {
    _original: true;
};
/**
 * A tagged integer type used to represent **visual-order** indices.
 *
 * Things that operate strictly on children relative to their
 * post-sort position, like pagination, staggering, rearranging, etc.
 * are going to use this directly.
 *
 * Feel free to freely cast a `number` to this when appropriate
 * (i.e. when you have a plain number that represents this concept).
 *
 */
export type RepositionedIndex = number & {
    _repositioned: true;
};
export interface UseProcessedIndexManglerParametersSelf {
    /**
     * Returns the index of the given child's VNode.
     *
     * Generally, this is just vnode.props.index,
     * but if you want the index prop to be called
     * something else, you can specify that here.
     *
     * @stable
     */
    getIndex: GetIndex;
    /**
     * Returns the sort value for the given child's index.
     *
     * For an unsorted list, this could just be each child's index itself.
     *
     * @stable
     */
    getSortValueAt: (index: number) => unknown;
    /**
     * Compares the sort values returned by getSortValueAt.
     * If unspecified, a sensible default for numbers/strings is used.
     *
     * @stable
     */
    compare: Nullable<Compare<unknown>>;
}
export interface UseProcessedIndexManglerParameters {
    processedIndexManglerParameters: UseProcessedIndexManglerParametersSelf;
}
export interface UseProcessedIndexManglerReturnType {
    context: UseProcessedIndexManglerContext;
    processedIndexManglerReturn: UseProcessedIndexManglerReturnTypeSelf;
}
export interface UseProcessedIndexManglerContext {
    processedIndexManglerContext: UseProcessedIndexManglerContextSelf;
}
export interface UseProcessedIndexManglerContextSelf {
    /**
     * Returns the interface for transforming indices and children.
     */
    mangler: ProcessedIndexMangler;
    /**
     * Takes a child's "programmatic" index and turns it into its "visual" index.
     *
     * Shortcut for `mangler.map(n, "original", "repositioned")`
     */
    indexFromOriginalToRepositioned: (index: OriginalIndex) => RepositionedIndex;
    /**
     * Takes a child's "visual" index and turns it into its ""programmatic index.
     *
     * Shortcut for `mangler.map(n, "repositioned", "original")`
     */
    indexFromRepositionedToOriginal: (index: RepositionedIndex) => OriginalIndex;
}
export interface UseProcessedIndexManglerReturnTypeSelf extends UseProcessedIndexManglerContextSelf {
}
/**
 * Allows for tracking reordered children by their original index and repositioned index. This is referred to in various places as "index mangling" and "demangling".
 *
 * The values returned by this hook are used by others like `useLinearNavigation` and `useTypeaheadNavigation` so that they can work even when children are out of order.
 *
 * This hook, is separate from useRearrangeableChildren so that it can be included
 * as part of a parent component, e.g. a table (instead of the tbody).
 *
 * @compositeParams
 */
export declare function useProcessedIndexMangler({ processedIndexManglerParameters: { getIndex, getSortValueAt: getSortValue, compare } }: UseProcessedIndexManglerParameters): UseProcessedIndexManglerReturnType;
export declare class ProcessedIndexMangler {
    private getIndex;
    private getSortValue;
    private compare;
    constructor(getIndex: (vnode: VNode) => (OriginalIndex | undefined), getSortValue: (index: number) => unknown, compare: Compare<unknown>);
    /**
     * Converts between index types.
     *
     * An "original" index represents a child's "programmatic" index; the one it thinks it has no matter where it is.
     * A "repositioned" index represents a child's "visual" position in a re-ordered list. The child usually doesn't care about this, unless it is interacting with other elements and depends on their visual order.
     *
     * TODO: This is over-typed because it was originally going to also include
     * "array index" and "sorted array index" (i.e. what index into the literal
     * array of VNode children is this), but that hasn't been needed yet (and
     * *probably* won't ever?), so this should probably just be replaced with
     * the more basic `fromOriginalToRepositioned` (etc) functions.
     *
     * @param index
     * @param from
     * @param to
     * @returns
     */
    map(index: OriginalIndex, from: "original", to: "repositioned"): RepositionedIndex;
    map(index: RepositionedIndex, from: "repositioned", to: "original"): OriginalIndex;
    map(index: OriginalIndex, from: "original", to: "original"): OriginalIndex;
    map(index: RepositionedIndex, from: "repositioned", to: "repositioned"): RepositionedIndex;
    map(index: OriginalIndex | undefined, from: "original", to: "repositioned"): RepositionedIndex | undefined;
    map(index: RepositionedIndex | undefined, from: "repositioned", to: "original"): OriginalIndex | undefined;
    map(index: OriginalIndex | undefined, from: "original", to: "original"): OriginalIndex | undefined;
    map(index: RepositionedIndex | undefined, from: "repositioned", to: "repositioned"): RepositionedIndex | undefined;
    private _originalChildren;
    sortedChildren: (VNode | null)[];
    private _originalToRepositioned;
    private _repositionedToOriginal;
    setChildren(childrenInOriginalOrder: (VNode | null)[], reorderedIndexProp: string | null | undefined): (createElement.JSX.Element | null)[];
}
/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function defaultCompare(lhs: unknown | undefined, rhs: unknown | undefined): 0 | 1 | -1;
//# sourceMappingURL=use-processed-index-mangler.d.ts.map