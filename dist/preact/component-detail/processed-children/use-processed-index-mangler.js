import { useEnsureStability } from "../../preact-extensions/use-passive-state.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { createElement, useCallback, useMemo } from "../../util/lib.js";
import { useMonitoring } from "../../util/use-call-count.js";
/**
 * @compositeParams
 */
export function useProcessedIndexMangler({ processedIndexManglerParameters: { getIndex, getSortValueAt: getSortValue, compare } }) {
    return useMonitoring(function useProcessedIndexMangler() {
        useEnsureStability("useProcessedIndexMangler", getIndex, getSortValue);
        const mangler = useMemo(() => new ProcessedIndexMangler(getIndex, getSortValue, compare ?? defaultCompare), [getIndex, getSortValue]);
        const indexDemangler = useCallback((n) => (mangler.map(n, "mangled", "demangled") ?? n), []);
        const indexMangler = useCallback((n) => (mangler.map(n, "demangled", "mangled") ?? n), []);
        const context = useMemoObject({
            processedIndexManglerContext: useMemoObject({
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
        };
    });
}
export class ProcessedIndexMangler {
    getIndex;
    getSortValue;
    compare;
    constructor(getIndex, getSortValue, compare) {
        this.getIndex = getIndex;
        this.getSortValue = getSortValue;
        this.compare = compare;
    }
    map(index, from, to) {
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
    _originalChildren = [];
    sortedChildren = [];
    _mangledToDemangled = new Map();
    _demangledToMangled = new Map();
    //private _demangledToProcessed = new Map<number, number>();
    //private _mangledToProcessed = new Map<number, number>();
    //private _processedToDemangled = new Map<number, number>();
    //private _processedToMangled = new Map<number, number>();
    setChildren(children) {
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
        let i = 0; // processedOriginalIndex, also the index to the output array
        let j = 0; // processedSortedIndex
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
                const sortedIndex = sortedChild.unmangledIndex;
                this._mangledToDemangled.set(originalIndex, sortedIndex);
                this._demangledToMangled.set(sortedIndex, originalIndex);
                //this._processedToMangled.set(processedOriginalIndex, sortedIndex);
                //this._processedToDemangled.set(processedOriginalIndex, originalIndex);
                //this._mangledToProcessed.set(sortedIndex, processedOriginalIndex);
                //this._demangledToProcessed.set(originalIndex, processedOriginalIndex);
                this.sortedChildren[i] = createElement(sortedChild.vnode.type, {
                    ...sortedChild.vnode.props,
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
/**
 * #__NO_SIDE_EFFECTS__
 */
export function defaultCompare(lhs, rhs) {
    if (lhs == null || rhs == null) {
        if (lhs == null)
            return -1;
        if (rhs == null)
            return 1;
    }
    // Note: Unlike lhs - rhs, this works with bare strings.
    return lhs > rhs ? 1 : lhs < rhs ? -1 : 0;
}
//# sourceMappingURL=use-processed-index-mangler.js.map