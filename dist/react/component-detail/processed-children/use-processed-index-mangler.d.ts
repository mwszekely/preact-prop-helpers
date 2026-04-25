import { Nullable, createElement } from "../../util/lib.js";
import { VNode } from "../../util/types.js";
type RCMT = 'original' | 'repositioned';
export type Compare<T extends unknown> = (lhs: T, rhs: T) => number;
export type GetIndex = (row: VNode) => (number | undefined);
export interface UseProcessedIndexManglerParametersSelf {
    /**
     * The sorted children to render.
     */
    getIndex: GetIndex;
    getSortValueAt: (index: number) => unknown;
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
    indexFromOriginalToRepositioned: (index: number) => number;
    /**
     * Takes a child's "visual" index and turns it into its ""programmatic index.
     *
     * Shortcut for `mangler.map(n, "repositioned", "original")`
     */
    indexFromRepositionedToOriginal: (index: number) => number;
}
export interface UseProcessedIndexManglerReturnTypeSelf extends UseProcessedIndexManglerContextSelf {
}
/**
 * @compositeParams
 */
export declare function useProcessedIndexMangler({ processedIndexManglerParameters: { getIndex, getSortValueAt: getSortValue, compare } }: UseProcessedIndexManglerParameters): UseProcessedIndexManglerReturnType;
export declare class ProcessedIndexMangler {
    private getIndex;
    private getSortValue;
    private compare;
    constructor(getIndex: (vnode: VNode) => (number | undefined), getSortValue: (index: number) => unknown, compare: Compare<unknown>);
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
    map(index: number | undefined, from: RCMT, to: RCMT): number | undefined;
    private _originalChildren;
    sortedChildren: (VNode | null)[];
    private _originalToRepositioned;
    private _repositionedToOriginal;
    setChildren(children: (VNode | null)[]): (createElement.JSX.Element | null)[];
}
/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function defaultCompare(lhs: unknown | undefined, rhs: unknown | undefined): 0 | 1 | -1;
export {};
//# sourceMappingURL=use-processed-index-mangler.d.ts.map