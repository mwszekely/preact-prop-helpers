
import { useEnsureStability } from "../../preact-extensions/use-passive-state.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { Nullable, createElement, useCallback, useMemo } from "../../util/lib.js";
import { VNode } from "../../util/types.js";
import { useMonitoring } from "../../util/use-call-count.js";

type RCMT = 'original' | 'repositioned';
export type Compare<T extends unknown> = (lhs: T, rhs: T) => number;
export type GetIndex = (row: VNode) => (OriginalIndex | undefined);

export type OriginalIndex = number & { _original: true };
export type RepositionedIndex = number & { _repositioned: true };

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

export interface UseProcessedIndexManglerReturnTypeSelf extends UseProcessedIndexManglerContextSelf { }

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
export function useProcessedIndexMangler({ processedIndexManglerParameters: { getIndex, getSortValueAt: getSortValue, compare } }: UseProcessedIndexManglerParameters): UseProcessedIndexManglerReturnType {
    return useMonitoring(function useProcessedIndexMangler(): UseProcessedIndexManglerReturnType {
        useEnsureStability("useProcessedIndexMangler", getIndex, getSortValue);

        const mangler = useMemo(() => new ProcessedIndexMangler(getIndex as any, getSortValue, compare ?? defaultCompare), [getIndex, getSortValue]);

        const indexFromOriginalToRepositioned = useCallback((n: OriginalIndex): RepositionedIndex => (mangler.map(n, "original", "repositioned")!), []);
        const indexFromRepositionedToOriginal = useCallback((n: RepositionedIndex): OriginalIndex => (mangler.map(n, "repositioned", "original")!), []);

        const context = useMemoObject<UseProcessedIndexManglerContext>({
            processedIndexManglerContext: useMemoObject<UseProcessedIndexManglerContextSelf>({
                mangler,
                indexFromOriginalToRepositioned,
                indexFromRepositionedToOriginal
            })
        });



        return {
            processedIndexManglerReturn: {
                mangler,
                indexFromRepositionedToOriginal,
                indexFromOriginalToRepositioned
            },
            context
        }
    });
}

export class ProcessedIndexMangler {
    constructor(private getIndex: (vnode: VNode) => (OriginalIndex | undefined), private getSortValue: (index: number) => unknown, private compare: Compare<unknown>) { }

    /**
     * Converts between index types.
     * 
     * An "original" index represents a child's "programmatic" index; the one it thinks it has no matter where it is.
     * A "repositioned" index represents a child's "visual" position in a re-ordered list. The child usually doesn't care about this, unless it is interacting with other elements and depends on their visual order.
     * 
     * @param index 
     * @param from 
     * @param to 
     * @returns 
     */
    map(index: OriginalIndex | undefined, from: "original", to: "repositioned"): RepositionedIndex | undefined;
    map(index: RepositionedIndex | undefined, from: "repositioned", to: "original"): OriginalIndex | undefined;
    map(index: OriginalIndex | undefined, from: "original", to: "original"): OriginalIndex | undefined;
    map(index: RepositionedIndex | undefined, from: "repositioned", to: "repositioned"): RepositionedIndex | undefined;
    map(index: OriginalIndex | RepositionedIndex | undefined, from: RCMT, to: RCMT): OriginalIndex | RepositionedIndex | undefined {
        if (index == undefined)
            return undefined;

        // Note that we default to returning the original index if we don't find a mapping.
        // This is because non-managed children remain in their original positions in the array,
        // and if we don't have a mapping we need to assume it's just a non-managed child.
        switch (from) {
            case 'repositioned': {
                switch (to) {
                    case 'repositioned': return index;
                    case 'original': return this._repositionedToOriginal.get(index as RepositionedIndex) ?? index;
                }
            }
            case 'original': {
                switch (to) {
                    case 'original': return index;
                    case 'repositioned': return this._originalToRepositioned.get(index as OriginalIndex) ?? index;
                }
            }
        }
    }

    private _originalChildren: (VNode | null)[] = [];
    public sortedChildren: (VNode | null)[] = [];
    private _originalToRepositioned = new Map<OriginalIndex, RepositionedIndex>();
    private _repositionedToOriginal = new Map<RepositionedIndex, OriginalIndex>();

    setChildren(childrenInOriginalOrder: (VNode | null)[]) {
        this._originalToRepositioned.clear();
        this._repositionedToOriginal.clear();

        this._originalChildren = childrenInOriginalOrder.slice();
        this.sortedChildren = [];

        /**
         * Basic algorithm:
         * 
         * We need to find a mapping of original -> reordered.
         * 
         * Initially, children don't actually *know* what their reordered
         * index is, they only know their original index and their sort value.
         * 
         * So we need to iterate through all the original children,
         * determine where they'll end up, and assign that as their reordered index.
         * (And actually, we do this backwards -- by iterating the ORIGINAL children,
         * we find out what REORDERED child ends up in that ORIGINAL position)
         * 
         * Two things further complicate this:
         * 
         * 1. We have an array of children, but there can be gaps in their indices.
         *    E.G. children[0].index could be 30, children[1].index 35, etc.
         *    So we can't just sort and then zip. We need to be a bit more precise.
         * 
         * 2. Some children might not be managed by us.
         *    E.G. children[1] might just be a random <div>, and it shouldn't
         *    be affected by reordering, since it's not ours.
         * 
         * 
         * Ultimately, this is complex because we're tracking four vaguely-similar indices:
         * 1. Original child index
         * 2. Reordered child index
         * 3. Original child's index into the array of its siblings
         * 4. Reordered child's index into the array of its siblings
         */



        // Sort the original children array.
        // This is guaranteed to have the same LENGTH as the original child array,
        // but due to how sorting works, non-managed children will float to
        // the start of the array. This is accounted for later in the while loop.
        let sortedChildrenWithoutNulls = this._originalChildren.slice().map((vnode, processedIndex) => {
            const indexOriginal = vnode == null ? undefined : this.getIndex(vnode);
            const sortValue = indexOriginal == null ? null : this.getSortValue(indexOriginal);
            return {
                vnode,
                indexOriginal,
                sortValue,
                processedIndex
            };
        }).toSorted((lhs, rhs) => this.compare((lhs.sortValue), (rhs.sortValue)));


        // IMPORTANT:
        // These indices aren't original or repositioned indices.
        // They are *specifically* 0-based array indices.
        // If unorderedArrayIndex is 0, children[unorderedArrayIndex].index 
        // could well be, like, 25 or something.
        let unorderedArrayIndex = 0;
        let reorderedArrayIndex = 0;

        // First, before anything, skip over all the unmanaged children in the sorted array.
        // When we find them in the original array, we just copy them over unmodified,
        // and there isn't a trivial way to do this during the sort itself.
        while (reorderedArrayIndex < sortedChildrenWithoutNulls.length && sortedChildrenWithoutNulls[reorderedArrayIndex].indexOriginal == null) {
            ++reorderedArrayIndex;
        }

        // This is a kind of, like, splice/zip of the two arrays, while setting the mappings between them.
        // It's kind of hard to follow--wish you could put, like, hand-drawn, diagrams in comments.
        while (true) {
            if (unorderedArrayIndex >= this._originalChildren.length)
                break;
            if (reorderedArrayIndex >= sortedChildrenWithoutNulls.length)
                break;

            // Get the child at the array position we're working with.
            // This also turns our *array* index into an *original* index.
            const childOriginal = this._originalChildren[unorderedArrayIndex];
            const indexOriginal = childOriginal == null ? undefined : this.getIndex(childOriginal);


            if (indexOriginal == null) {
                // This was a spot in the original array where there was a non-managed child.
                // It gets copied to the same spot in the output array, since it can't be sorted.
                // A special exception where the output array is indexed by the input array's variable.
                this.sortedChildren[unorderedArrayIndex] = childOriginal;

                // Then move onto the next child.
                ++unorderedArrayIndex;
            }
            else {
                // This is a known, managed child.
                // We need to figure out its new index.


                // This line should never happen because the nulls get sorted to the front
                // and for us to have gotten here in the first place there must have been at least one non-null child.
                if (sortedChildrenWithoutNulls[reorderedArrayIndex].indexOriginal == null) {
                    /* eslint-disable no-debugger */
                    debugger;
                    break;
                }


                const childAtRepositionedSpot = sortedChildrenWithoutNulls[reorderedArrayIndex];

                const indexRepositioned = childAtRepositionedSpot.indexOriginal! as number as RepositionedIndex;



                // This one-statement block is weird! Read the comments carefully!
                {
                    // This looks incorrect at a first glance:
                    // Indexing the sorted array by the unsorted index?
                    // Why does indexOriginal := indexRepositioned and vice-versa?
                    this.sortedChildren[unorderedArrayIndex] = createElement(childAtRepositionedSpot.vnode!.type as any, {
                        ...childAtRepositionedSpot.vnode!.props,
                        indexOriginal: indexRepositioned,
                        indexRepositioned: indexOriginal,
                        key: indexRepositioned
                    });
                    // We do this because we are basically working **backwards**.
                    // By determining which reordered child this original child corresponds to,
                    // we've determined that the reordered child goes at the ARRAY POSITION of the original child.
                    // But we actually still don't technically know where the final ARRAY POSITION of the original child itself will be.
                    // That will come later when we get to that child.

                    this._repositionedToOriginal.set(indexOriginal as any, indexRepositioned as any);
                    this._originalToRepositioned.set(indexRepositioned as any, indexOriginal as any);
                }


                ++unorderedArrayIndex;
                ++reorderedArrayIndex;
            }

        }

        debugger;
        return this.sortedChildren;
    }

}

/**
 * #__NO_SIDE_EFFECTS__
 */
export function defaultCompare(lhs: unknown | undefined, rhs: unknown | undefined) {
    if (lhs == null || rhs == null) {
        if (lhs == null)
            return -1;
        if (rhs == null)
            return 1;
    }

    // Note: Unlike lhs - rhs, this works with bare strings.
    return lhs > rhs ? 1 : lhs < rhs ? -1 : 0;
}