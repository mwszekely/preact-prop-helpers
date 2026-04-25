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
        const indexFromOriginalToRepositioned = useCallback((n) => (mangler.map(n, "original", "repositioned") ?? n), []);
        const indexFromRepositionedToOriginal = useCallback((n) => (mangler.map(n, "repositioned", "original") ?? n), []);
        const context = useMemoObject({
            processedIndexManglerContext: useMemoObject({
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
    map(index, from, to) {
        if (index == undefined)
            return undefined;
        switch (from) {
            case 'repositioned': {
                switch (to) {
                    case 'repositioned': return index;
                    case 'original': return this._repositionedToOriginal.get(index);
                }
            }
            case 'original': {
                switch (to) {
                    case 'original': return index;
                    case 'repositioned': return this._originalToRepositioned.get(index);
                }
            }
        }
    }
    _originalChildren = [];
    sortedChildren = [];
    _originalToRepositioned = new Map();
    _repositionedToOriginal = new Map();
    setChildren(children) {
        this._originalToRepositioned.clear();
        this._repositionedToOriginal.clear();
        this._originalChildren = children.slice();
        this.sortedChildren = [];
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
        let rawChildIndexIn = 0; // The index to the input and output
        let sortedChildIndexIn = 0; // The index to the *sorted* (not repositioned) child array
        // This is a kind of, like, splice/zip of the two arrays, while setting the mappings between them.
        // It's kind of hard to follow--wish you could put, like, hand-drawn, diagrams in comments.
        while (true) {
            if (rawChildIndexIn >= children.length)
                break;
            if (sortedChildIndexIn >= sortedChildrenWithoutNulls.length)
                break;
            // This value doesn't directly correspond to either an original or a repositioned index.
            // We could have 2 children at indices [100, 101], remember.
            const childOriginal = children[rawChildIndexIn];
            const indexRepositioned = childOriginal == null ? undefined : this.getIndex(childOriginal);
            if (indexRepositioned == null) {
                // This was a hole in the original array, so just copy it over directly to its original spot.
                this.sortedChildren[rawChildIndexIn] = childOriginal;
                // Then move onto the next child.
                ++rawChildIndexIn;
            }
            else {
                // This is a known, managed child. Find all its mappings and recreate it with a new key.
                // Skip over all the nulls that get sorted to the front of the array
                // (scary while-in-while only happens once because of this)
                while (sortedChildIndexIn < sortedChildrenWithoutNulls.length && sortedChildrenWithoutNulls[sortedChildIndexIn].indexOriginal == null) {
                    ++sortedChildIndexIn;
                }
                // This line should never happen because the nulls get sorted to the front
                // and for us to have gotten here in the first place there must have been at least one non-null child.
                if (sortedChildrenWithoutNulls[sortedChildIndexIn].indexOriginal == null) {
                    /* eslint-disable no-debugger */
                    debugger;
                    break;
                }
                let rawChildIndexOut = sortedChildIndexIn;
                const childAtRepositionedSpot = sortedChildrenWithoutNulls[rawChildIndexOut];
                // This is indexOriginal, despite us getting it from childAtRepositionedSpot.indexOriginal.
                // The reason is because we're writing to the OUTPUT array now, so our
                // terminology is suddenly relevant to that.
                const indexOriginal = childAtRepositionedSpot.indexOriginal;
                this._originalToRepositioned.set(indexRepositioned, indexOriginal);
                this._repositionedToOriginal.set(indexOriginal, indexRepositioned);
                this.sortedChildren[rawChildIndexIn] = createElement(childAtRepositionedSpot.vnode.type, {
                    ...childAtRepositionedSpot.vnode.props,
                    indexOriginal: indexOriginal,
                    indexRepositioned: indexRepositioned,
                    key: indexRepositioned
                });
                ++rawChildIndexIn;
                ++sortedChildIndexIn;
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