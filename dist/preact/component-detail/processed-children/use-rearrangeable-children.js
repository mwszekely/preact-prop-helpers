import { useForceUpdate } from "../../preact-extensions/use-force-update.js";
import { $index, $getChildren, $managedChildrenReturn } from "../../preact-extensions/use-managed-children.js";
import { useEnsureStability } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject, useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { createElement, useCallback, useLayoutEffect, useRef } from "../../util/lib.js";
import { monitored } from "../../util/use-call-count.js";
// TODO: This actually pulls in a lot of lodash for, like, one questionably-useful import.
import { identity, shuffle as lodashShuffle, noop } from "lodash-es";
export const $rearrangeableChildrenContext = Symbol();
export const $rearrangeableChildrenParameters = Symbol();
export const $rearrangeableChildrenReturn = Symbol();
export const $compare = Symbol();
export const $adjust = Symbol();
export const $getIndex = Symbol();
export const $onRearranged = Symbol();
export const $children = Symbol();
export const $rearrange = Symbol();
export const $shuffle = Symbol();
export const $reverse = Symbol();
export const $indexMangler = Symbol();
export const $indexDemangler = Symbol();
export const $sort = Symbol();
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
    const provideManglers = useStableCallback(({ [$indexDemangler]: indexDemangler, [$indexMangler]: indexMangler, [$reverse]: reverse, [$shuffle]: shuffle, [$sort]: sort }) => {
        indexManglerRef.current = indexMangler;
        indexDemanglerRef.current = indexDemangler;
        reverseRef.current = reverse;
        shuffleRef.current = shuffle;
        sortRef.current = sort;
    });
    const rearrangeableChildrenContext = useMemoObject({ provideManglers });
    const context = useMemoObject({ [$rearrangeableChildrenContext]: rearrangeableChildrenContext });
    return {
        context,
        [$indexDemangler]: indexDemangler,
        [$indexMangler]: indexMangler,
        [$rearrange]: rearrange,
        [$reverse]: reverse,
        [$shuffle]: shuffle,
        [$sort]: sort
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
export const useRearrangeableChildren = monitored(function useRearrangeableChildren({ [$rearrangeableChildrenParameters]: { [$getIndex]: getIndex, [$onRearranged]: onRearranged, [$compare]: userCompare, [$children]: children, [$adjust]: adjust }, [$managedChildrenReturn]: { [$getChildren]: getChildren }, context: { [$rearrangeableChildrenContext]: { provideManglers } } }) {
    useEnsureStability("useRearrangeableChildren", getIndex);
    // These are used to keep track of a mapping between unsorted index <---> sorted index.
    // These are needed for navigation with the arrow keys.
    const mangleMap = useRef(new Map());
    const demangleMap = useRef(new Map());
    const indexMangler = useCallback((n) => (mangleMap.current.get(n) ?? n), []);
    const indexDemangler = useCallback((n) => (demangleMap.current.get(n) ?? n), []);
    const onRearrangedGetter = useStableGetter(onRearranged);
    const shuffle = useCallback(() => {
        const managedRows = getChildren();
        const originalRows = managedRows._arraySlice();
        const shuffledRows = lodashShuffle(originalRows);
        return rearrange(originalRows, shuffledRows);
    }, [ /* Must remain stable */]);
    const reverse = useCallback(() => {
        const managedRows = getChildren();
        const originalRows = managedRows._arraySlice();
        const reversedRows = managedRows._arraySlice().reverse();
        return rearrange(originalRows, reversedRows);
    }, [ /* Must remain stable */]);
    // The sort function needs to be able to update whoever has all the sortable children.
    // Because that might not be the consumer of *this* hook directly (e.g. a table uses
    // this hook, but it's tbody that actually needs updating), we need to remotely
    // get and set a forceUpdate function.
    const forceUpdateRef = useRef(null);
    const rearrange = useCallback((originalRows, sortedRows) => {
        mangleMap.current.clear();
        demangleMap.current.clear();
        // Update our sorted <--> unsorted indices map 
        // and rerender the whole table, basically
        for (let indexAsSorted = 0; indexAsSorted < sortedRows.length; ++indexAsSorted) {
            if (sortedRows[indexAsSorted]) {
                const indexAsUnsorted = sortedRows[indexAsSorted][$index];
                mangleMap.current.set(indexAsUnsorted, indexAsSorted);
                demangleMap.current.set(indexAsSorted, indexAsUnsorted);
            }
        }
        onRearrangedGetter()?.();
        forceUpdateRef.current?.();
    }, []);
    // The actual sort function.
    const getCompare = useStableGetter(userCompare ?? defaultCompare);
    const sort = useCallback((direction) => {
        const managedRows = getChildren();
        const compare = getCompare();
        const originalRows = managedRows._arraySlice();
        const sortedRows = compare ? originalRows.sort((lhsRow, rhsRow) => {
            const lhsValue = lhsRow;
            const rhsValue = rhsRow;
            const result = compare(lhsValue, rhsValue);
            if (direction[0] == "d")
                return -result;
            return result;
        }) : managedRows._arraySlice();
        return rearrange(originalRows, sortedRows);
    }, [ /* Must remain stable */]);
    console.assert(Array.isArray(children));
    const forceUpdate = useForceUpdate();
    console.assert(forceUpdateRef.current == null || forceUpdateRef.current == forceUpdate);
    forceUpdateRef.current = forceUpdate; // TODO: Mutation during render? I mean, not really -- it's always the same value...right?
    let sorted = children
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
        // "data-mangled-index": mangledIndex, "data-demangled-index": demangledIndex
        if (child)
            return ((adjust || identity)(createElement(child.type, { ...child.props, key: demangledIndex }), { mangledIndex, demangledIndex })) ?? null;
        return null;
    });
    // The parent useListNavigation uses these for various reasons.
    // If it called useRearrangeableChildren directly, it would have this information,
    // but we're one level deeper in the tree, so once we mount we need to give it to them.
    useLayoutEffect(() => {
        provideManglers({
            [$indexDemangler]: indexDemangler,
            [$indexMangler]: indexMangler,
            [$reverse]: reverse,
            [$shuffle]: shuffle,
            [$sort]: sort
        });
    }, []);
    return {
        [$rearrangeableChildrenReturn]: {
            [$indexMangler]: indexMangler,
            [$indexDemangler]: indexDemangler,
            [$rearrange]: rearrange,
            [$shuffle]: shuffle,
            [$reverse]: reverse,
            [$sort]: sort,
            [$children]: sorted
        }
    };
});
function defaultCompare(lhs, rhs) {
    return compare1(lhs?.[$index], rhs?.[$index]); // TODO: This used to have getSortValue() for a better default, but was also kind of redundant with defaultCompare being overrideable?
    function compare1(lhs, rhs) {
        if (lhs == null || rhs == null) {
            if (lhs == null)
                return -1;
            if (rhs == null)
                return 1;
        }
        return lhs - rhs;
    }
}
//# sourceMappingURL=use-rearrangeable-children.js.map