
import { useEnsureStability } from "../../preact-extensions/use-passive-state.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { Nullable, createElement, useCallback, useMemo } from "../../util/lib.js";
import { VNode } from "../../util/types.js";
import { useMonitoring } from "../../util/use-call-count.js";

type RCMT = 'mangled' | 'demangled';
export type Compare<T extends unknown> = (lhs: T, rhs: T) => number;
export type GetIndex = (row: VNode) => (number | undefined);

export interface UseProcessedIndexManglerParametersSelf {

    /**
     * Given a VNode, returns the index for that child.
     * 
     * In general, this is simply `vnode => vnode.props.index`. If you 
     * want to call the `index` prop something different, like `row`
     * or something, provide that function here.
     * 
     * @stable
     */
    getIndex: GetIndex;

    /**
     * Function that returns the sort value for a given child.
     * 
     * The sort value is what is used when rearranging children; children
     * are sorted by whatever this returns relative to the `compare` function.
     * 
     * This can return any arbitrary value; it's assumed that `compare` knows
     * what to do with whatever's returned.
     * 
     * @stable
     */
    getSortValueAt: (index: number) => unknown;

    /**
     * Compares the values returned by `getSortValueAt`. 
     * 
     * Should return -1, 0, or 1.
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
     * A common shortcut function that transforms a sorted index to an unsorted index.
     */
    indexDemangler: (index: number) => number;

    /**
     * A common shortcut function that transforms an unsorted index to a sorted index.
     */
    indexMangler: (index: number) => number;
}

export interface UseProcessedIndexManglerReturnTypeSelf extends UseProcessedIndexManglerContextSelf { }

/**
 * ...how to explain this one.
 * 
 * When we rearrange children, we need to have mappings from "original position" to "new position" and vice-versa
 * because children often need to be able to answer questions like "which sibling is VISUALLY above/below me right now"
 * for things like keyboard navigation.
 * 
 * In this library, this process is called "index mangling" and "index demangling".
 * 
 * When you have a component like `<Row index={5} />`, 5 is the "unmangled" index. It represents the index
 * that the child programmatically was assigned.
 * 
 * When child rows are sorted, that `<Row index={5} />` child might end up being repositioned to the
 * spot where the `<Row index={23} />` child was. We'd call 23 its "mangled" index.
 * 
 * When the user presses the Down arrow key to navigate away from `<Row index={5} />`, we *mangle* its
 * index to get 23, add 1 to get 24, then *demangle* 24 to get some new index, which is where the
 * user would want to navigate to.
 * 
 * @compositeParams
 */
export function useProcessedIndexMangler({ processedIndexManglerParameters: { getIndex, getSortValueAt: getSortValue, compare } }: UseProcessedIndexManglerParameters): UseProcessedIndexManglerReturnType {
    return useMonitoring(function useProcessedIndexMangler(): UseProcessedIndexManglerReturnType {
        useEnsureStability("useProcessedIndexMangler", getIndex, getSortValue, compare);

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
    });
}

export class ProcessedIndexMangler {
    constructor(private getIndex: (vnode: VNode) => (number | undefined), private getSortValue: (index: number) => unknown, private compare: Compare<unknown>) { }

    map(index: number | undefined, from: RCMT, to: RCMT): number | undefined {
        if (index == undefined)
            return undefined;

        switch (from) {
            case 'demangled': {
                switch (to) {
                    case 'demangled': return index;
                    case 'mangled': return this._demangledToMangled.get(index);
                }
            }
            case 'mangled': {
                switch (to) {
                    case 'mangled': return index;
                    case 'demangled': return this._mangledToDemangled.get(index);
                }
            }
        }
    }

    private _originalChildren: (VNode | null)[] = [];
    public sortedChildren: (VNode | null)[] = [];
    private _mangledToDemangled = new Map<number, number>();
    private _demangledToMangled = new Map<number, number>();

    setChildren(children: (VNode | null)[]) {
        this._mangledToDemangled.clear();
        this._demangledToMangled.clear();

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

                this.sortedChildren[i] = createElement(sortedChild.vnode!.type as any, {
                    ...sortedChild.vnode!.props,
                    mangledIndex: sortedIndex,
                    demangledIndex: originalIndex,
                    key: originalIndex
                });

                ++i;
                ++j;
            }

        }
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