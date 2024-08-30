
import { useEnsureStability } from "../../preact-extensions/use-passive-state.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { Nullable, createElement, useCallback, useMemo } from "../../util/lib.js";
import { VNode } from "../../util/types.js";

type RCMT = 'mangled' | 'demangled';
export type Compare<T extends unknown> = (lhs: T, rhs: T) => number;
export type GetIndex = (row: VNode) => (number | undefined);

export interface UseProcessedIndexManglerParametersSelf {
    /**
     * The sorted children to render.
     */
    //children: (VNode | null)[];

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

export interface UseProcessedIndexManglerReturnTypeSelf extends UseProcessedIndexManglerContextSelf { }


export function useProcessedIndexMangler({ processedIndexManglerParameters: { getIndex, getSortValueAt: getSortValue, compare } }: UseProcessedIndexManglerParameters): UseProcessedIndexManglerReturnType {
    useEnsureStability("useProcessedIndexMangler", getIndex, getSortValue);

    const mangler = useMemo(() => new ProcessedIndexMangler(getIndex, getSortValue, compare ?? defaultCompare), [getIndex, getSortValue]);

    const indexDemangler = useCallback((n: number) => (mangler.map(n, "mangled", "demangled") ?? n), []);
    const indexMangler = useCallback((n: number) => (mangler.map(n, "demangled", "mangled") ?? n), []);

    const context = useMemoObject<UseProcessedIndexManglerContext>({
        processedIndexManglerContext: useMemoObject<UseProcessedIndexManglerContextSelf>({
            mangler,
            indexDemangler,
            indexMangler
        })
    });



    return {
        processedIndexManglerReturn: {
            mangler,
            indexMangler,
            indexDemangler
        },
        context
    }

}

export class ProcessedIndexMangler {
    constructor(private getIndex: (vnode: VNode) => (number | undefined), private getSortValue: (index: number) => unknown, private compare: Compare<unknown>) { }

    map(index: number | undefined, from: RCMT, to: RCMT): number | undefined {
        if (index == undefined)
            return undefined;

        switch (from) {
            /*case 'processed': {
                //let unmangledIndex = this.getIndex(this._originalChildren[index]);
                switch (to) {
                    case 'processed': return index;
                    case 'demangled': return this._processedToDemangled.get(index); //return unmangledIndex;
                    case 'mangled': return this._processedToMangled.get(index); //return unmangledIndex == undefined ? undefined : this._unmangledToMangled.get(unmangledIndex);
                }
            }*/
            case 'demangled': {
                switch (to) {
                    case 'demangled': return index;
                    case 'mangled': return this._demangledToMangled.get(index);
                    //case 'processed': return this._demangledToProcessed.get(index);
                }
            }
            case 'mangled': {
                switch (to) {
                    case 'mangled': return index;
                    case 'demangled': return this._mangledToDemangled.get(index);
                    //case 'processed': return this._mangledToProcessed.get(index);
                }
            }
        }
    }

    private _originalChildren: (VNode | null)[] = [];
    public sortedChildren: (VNode | null)[] = [];
    private _mangledToDemangled = new Map<number, number>();
    private _demangledToMangled = new Map<number, number>();
    //private _demangledToProcessed = new Map<number, number>();
    //private _mangledToProcessed = new Map<number, number>();
    //private _processedToDemangled = new Map<number, number>();
    //private _processedToMangled = new Map<number, number>();

    setChildren(children: (VNode | null)[]) {
        this._mangledToDemangled.clear();
        this._demangledToMangled.clear();
        //this._processedToDemangled.clear();
        //this._processedToMangled.clear();
        //this._demangledToProcessed.clear();
        //this._mangledToProcessed.clear();

        this._originalChildren = children.slice();
        this.sortedChildren = [];

        let sortedChildrenWithoutNulls = this._originalChildren.slice().map((vnode, processedIndex) => {
            const unmangledIndex = vnode == null ? undefined : this.getIndex(vnode);
            const sortValue = unmangledIndex == null ? null : this.getSortValue(unmangledIndex);
            return {
                vnode,
                unmangledIndex,
                sortValue,
                processedIndex
            };
        }).toSorted((lhs, rhs) => this.compare((lhs.sortValue), (rhs.sortValue)));

        let i = 0;  // processedOriginalIndex, also the index to the output array
        let j = 0;  // processedSortedIndex

        // This is a kind of, like, splice/zip of the two arrays, while setting the mappings between them.
        // It's kind of hard to follow--wish you could put, like, hand-drawn, diagrams in comments.
        while (true) {
            if (i >= children.length)
                break;
            if (j >= sortedChildrenWithoutNulls.length)
                break;

            let processedOriginalIndex = i;
            const originalChild = children[processedOriginalIndex];
            const originalIndex = originalChild == null ? undefined : this.getIndex(originalChild);


            if (originalIndex == null) {
                // This was a hole in the original array, so just copy it over directly to its original spot.
                this.sortedChildren[i] = originalChild;
                // Then move onto the next child.
                ++i;
            }
            else {
                // This is a known, managed child. Find all its mappings and recreate it with a new key.

                // To find the sortedChild this originalChild matches, first make sure we skip over holes in the sorted array
                // (This should only happen once, the first time, because they're usually sorted to the front)
                while (j < sortedChildrenWithoutNulls.length && sortedChildrenWithoutNulls[j].unmangledIndex == null) {
                    ++j;
                }

                // This line should never happen
                if (sortedChildrenWithoutNulls[j].unmangledIndex == null) {
                    /* eslint-disable no-debugger */
                    debugger;
                    break;
                }


                let processedSortedIndex = j;
                const sortedChild = sortedChildrenWithoutNulls[processedSortedIndex];
                const sortedIndex = sortedChild.unmangledIndex!;


                this._mangledToDemangled.set(originalIndex, sortedIndex);
                this._demangledToMangled.set(sortedIndex, originalIndex);
                //this._processedToMangled.set(processedOriginalIndex, sortedIndex);
                //this._processedToDemangled.set(processedOriginalIndex, originalIndex);
                //this._mangledToProcessed.set(sortedIndex, processedOriginalIndex);
                //this._demangledToProcessed.set(originalIndex, processedOriginalIndex);
                this.sortedChildren[i] = createElement(sortedChild.vnode!.type as any, { 
                    ...sortedChild.vnode!.props, 
                    mangledIndex: sortedIndex, 
                    demangledIndex: originalIndex, 
                    key: originalIndex 
                }); //sortedChild.vnode;

                ++i;
                ++j;
            }

        }
        return this.sortedChildren;
    }

}


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