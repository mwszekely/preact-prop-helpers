import { Nullable, createElement } from "../../util/lib.js";
import { VNode } from "../../util/types.js";
type RCMT = 'mangled' | 'demangled';
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
     * A common shortcut function that transforms a sorted index to an unsorted index.
     */
    indexDemangler: (index: number) => number;
    /**
     * A common shortcut function that transforms an unsorted index to a sorted index.
     */
    indexMangler: (index: number) => number;
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
    map(index: number | undefined, from: RCMT, to: RCMT): number | undefined;
    private _originalChildren;
    sortedChildren: (VNode | null)[];
    private _mangledToDemangled;
    private _demangledToMangled;
    setChildren(children: (VNode | null)[]): (createElement.JSX.Element | null)[];
}
/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function defaultCompare(lhs: unknown | undefined, rhs: unknown | undefined): 0 | 1 | -1;
export {};
//# sourceMappingURL=use-processed-index-mangler.d.ts.map