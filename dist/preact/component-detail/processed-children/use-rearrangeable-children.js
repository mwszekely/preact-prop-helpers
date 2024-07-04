import { useForceUpdate } from "../../preact-extensions/use-force-update.js";
import { useEnsureStability } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { createElement, useCallback, useLayoutEffect, useRef } from "../../util/lib.js";
import { monitored } from "../../util/use-call-count.js";
// TODO: This actually pulls in a lot of lodash for, like, one questionably-useful import.
import { identity, shuffle as lodashShuffle, noop } from "lodash-es";
/**
 * A parent can call this to provide useRearrangeableChildren with the `context` it expects.
 *
 * @returns
 */
export function useCreateProcessedChildrenContext() {
    const sortRef = useRef(null);
    const shuffleRef = useRef(null);
    const reverseRef = useRef(null);
    const rearrangeRef = useRef(null);
    const indexManglerRef = useRef(null);
    const indexDemanglerRef = useRef(null);
    const indexMangler = useStableCallback((i) => { return (indexManglerRef.current ?? identity)(i); }, []);
    const indexDemangler = useStableCallback((i) => { return (indexDemanglerRef.current ?? identity)(i); }, []);
    const sort = useStableCallback((i) => { return (sortRef.current ?? identity)(i); }, []);
    const shuffle = useStableCallback(() => { return (shuffleRef.current ?? identity)(); }, []);
    const reverse = useStableCallback(() => { return (reverseRef.current ?? identity)(); }, []);
    const rearrange = useStableCallback((original, ordered) => { (rearrangeRef.current ?? noop)(original, ordered); }, []);
    const provideManglers = useStableCallback(({ indexDemangler, indexMangler, reverse, shuffle, sort }) => {
        indexManglerRef.current = indexMangler;
        indexDemanglerRef.current = indexDemangler;
        reverseRef.current = reverse;
        shuffleRef.current = shuffle;
        sortRef.current = sort;
    });
    const rearrangeableChildrenContext = useMemoObject({ provideManglers });
    const context = useMemoObject({ rearrangeableChildrenContext });
    return {
        context,
        indexDemangler,
        indexMangler,
        rearrange,
        reverse,
        shuffle,
        sort
    };
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
export const useRearrangeableChildren = /*@__PURE__*/ monitored(function useRearrangeableChildren({ rearrangeableChildrenParameters: { getIndex, getSortValueAt, onRearranged, children, adjust, compare }, managedChildrenReturn: { getChildren }, context: { rearrangeableChildrenContext: { provideManglers } } }) {
    useEnsureStability("useRearrangeableChildren", getIndex, getSortValueAt, compare, onRearranged);
    compare ??= defaultCompare;
    // These are used to keep track of a mapping between unsorted index <---> sorted index.
    // These are needed for navigation with the arrow keys.
    const mangleMap = useRef(null);
    const demangleMap = useRef(null);
    const indexMangler = useCallback((n) => (mangleMap.current.get(n) ?? n), []);
    const indexDemangler = useCallback((n) => (demangleMap.current.get(n) ?? n), []);
    const shuffle = useCallback(() => {
        const managedRows = getChildren();
        const originalRows = managedRows._arraySlice().map(row => row.index);
        const shuffledRows = lodashShuffle(originalRows);
        return rearrange('async', originalRows, shuffledRows);
    }, [ /* Must remain stable */]);
    const reverse = useCallback(() => {
        const managedRows = getChildren();
        const originalRows = managedRows._arraySlice().map(row => row.index);
        const reversedRows = originalRows.slice().reverse();
        return rearrange('async', originalRows, reversedRows);
    }, [ /* Must remain stable */]);
    // The sort function needs to be able to update whoever has all the sortable children.
    // Because that might not be the consumer of *this* hook directly (e.g. a table uses
    // this hook, but it's tbody that actually needs updating), we need to remotely
    // get and set a forceUpdate function.
    const forceUpdateRef = useRef(null);
    const rearrange = useCallback((phase, originalRows, sortedRows) => {
        mangleMap.current.clear();
        demangleMap.current.clear();
        // Update our sorted <--> unsorted indices map 
        // and rerender the whole table, basically
        for (let indexAsSorted = 0; indexAsSorted < sortedRows.length; ++indexAsSorted) {
            const indexAsUnsorted = sortedRows[indexAsSorted];
            if (indexAsUnsorted != undefined) {
                mangleMap.current.set(indexAsUnsorted, indexAsSorted);
                demangleMap.current.set(indexAsSorted, indexAsUnsorted);
            }
        }
        onRearranged?.(phase);
        forceUpdateRef.current?.();
    }, []);
    const sort = useCallback((direction) => {
        const managedRows = getChildren();
        const originalRows = managedRows._arraySlice().map(child => child.index);
        const sortedRows = originalRows.sort((lhsRow, rhsRow) => {
            const lhsValue = getSortValueAt(lhsRow);
            const rhsValue = getSortValueAt(rhsRow);
            const result = compare(lhsValue, rhsValue);
            if (direction[0] == "d")
                return -result;
            return result;
        });
        return rearrange('async', originalRows, sortedRows);
    }, [ /* Must remain stable */]);
    console.assert(Array.isArray(children));
    const forceUpdate = useForceUpdate();
    console.assert(forceUpdateRef.current == null || forceUpdateRef.current == forceUpdate);
    forceUpdateRef.current = forceUpdate; // TODO: Mutation during render? I mean, not really -- it's always the same value...right?
    if (mangleMap.current == null) {
        mangleMap.current = new Map();
        demangleMap.current = new Map();
        const unmanagedRows = children;
        const originalRows = children.slice().map(child => {
            if (child) {
                return getIndex(child) ?? undefined;
            }
            return undefined;
        });
        const sortedRows = originalRows.sort((lhsIndex, rhsIndex) => {
            const lhsValue = lhsIndex == undefined ? undefined : getSortValueAt(lhsIndex);
            const rhsValue = rhsIndex == undefined ? undefined : getSortValueAt(rhsIndex);
            const result = compare(lhsValue, rhsValue);
            return result;
        });
        rearrange('render', originalRows, sortedRows);
    }
    // TODO: Right now, we rearrange the children based on the value of `mangleMap`.
    // But `mangleMap`
    let childrenInOrder = children
        .slice()
        .map(child => {
        if (process.env.NODE_ENV === 'development' && child) {
            console.assert(getIndex(child) != null, `getIndex(vnode) must return its 0-based numeric index (e.g. its \`index\` prop)`);
        }
        const mangledIndex = ((child == null ? null : indexMangler(getIndex(child))) ?? null);
        const demangledIndex = ((child == null ? null : getIndex(child))) ?? null;
        return ({
            child,
            sort: mangledIndex ?? -1,
            mangledIndex,
            demangledIndex
        });
    })
        .sort((lhs, rhs) => (lhs.sort - rhs.sort))
        .map(({ child, mangledIndex, demangledIndex }) => {
        if (child)
            return ((adjust || identity)(createElement(child.type, { ...child.props, key: demangledIndex }), { mangledIndex, demangledIndex })) ?? null;
        return null;
    });
    // The parent useListNavigation uses these for various reasons.
    // If it called useRearrangeableChildren directly, it would have this information,
    // but we're one level deeper in the tree, so once we mount we need to give it to them.
    useLayoutEffect(() => {
        provideManglers({
            indexDemangler,
            indexMangler,
            reverse,
            shuffle,
            sort
        });
    }, []);
    return {
        rearrangeableChildrenReturn: {
            indexMangler,
            indexDemangler,
            rearrange,
            shuffle,
            reverse,
            sort,
            children: childrenInOrder
        }
    };
});
export const useRearrangeableChild = /*@__PURE__*/ monitored(function useRearrangeableChild({}) {
    return {};
});
function defaultCompare(lhs, rhs) {
    if (lhs == null || rhs == null) {
        if (lhs == null)
            return -1;
        if (rhs == null)
            return 1;
    }
    return lhs - rhs;
}
//# sourceMappingURL=use-rearrangeable-children.js.map