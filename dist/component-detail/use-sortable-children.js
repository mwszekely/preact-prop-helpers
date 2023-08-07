import { useForceUpdate } from "../preact-extensions/use-force-update.js";
import { useEnsureStability } from "../preact-extensions/use-passive-state.js";
import { useStableGetter } from "../preact-extensions/use-stable-getter.js";
import { createElement, useCallback, useRef } from "../util/lib.js";
import { monitorCallCount } from "../util/use-call-count.js";
// TODO: This actually pulls in a lot of lodash for, like, one questionably-useful import.
import { shuffle as lodashShuffle } from "lodash-es";
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
export function useRearrangeableChildren({ rearrangeableChildrenParameters: { getIndex, onRearranged }, managedChildrenReturn: { getChildren } }) {
    monitorCallCount(useRearrangeableChildren);
    useEnsureStability("useRearrangeableChildren", getIndex);
    // These are used to keep track of a mapping between unsorted index <---> sorted index.
    // These are needed for navigation with the arrow keys.
    const mangleMap = useRef(new Map());
    const demangleMap = useRef(new Map());
    const indexMangler = useCallback((n) => (mangleMap.current.get(n) ?? n), []);
    const indexDemangler = useCallback((n) => (demangleMap.current.get(n) ?? n), []);
    const onRearrangedGetter = useStableGetter(onRearranged);
    //const { setTabbableIndex } = rovingTabIndexReturn;
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
    //const [getForceUpdate, setForceUpdate] = usePassiveState<null | (() => void)>(null, returnNull);
    //const [getForceUpdate, setForceUpdate] = usePassiveState<null | (() => void), never>(null, returnNull);
    const forceUpdateRef = useRef(null);
    const rearrange = useCallback((originalRows, sortedRows) => {
        mangleMap.current.clear();
        demangleMap.current.clear();
        // Update our sorted <--> unsorted indices map 
        // and rerender the whole table, basically
        for (let indexAsSorted = 0; indexAsSorted < sortedRows.length; ++indexAsSorted) {
            if (sortedRows[indexAsSorted]) {
                const indexAsUnsorted = sortedRows[indexAsSorted].index;
                mangleMap.current.set(indexAsUnsorted, indexAsSorted);
                demangleMap.current.set(indexAsSorted, indexAsUnsorted);
            }
        }
        onRearrangedGetter()?.();
        forceUpdateRef.current?.();
    }, []);
    const useRearrangedChildren = useCallback(function useRearrangedChildren(children) {
        monitorCallCount(useRearrangedChildren);
        console.assert(Array.isArray(children));
        const forceUpdate = useForceUpdate();
        console.assert(forceUpdateRef.current == null || forceUpdateRef.current == forceUpdate);
        forceUpdateRef.current = forceUpdate; // TODO: Mutation during render? I mean, not really -- it's always the same value...right?
        return children
            .slice()
            .map(child => ({ child, mangledIndex: indexMangler(getIndex(child)), demangledIndex: getIndex(child) }))
            .sort((lhs, rhs) => { return lhs.mangledIndex - rhs.mangledIndex; })
            .map(({ child, mangledIndex, demangledIndex }) => {
            return createElement(child.type, { ...child.props, key: demangledIndex, "data-mangled-index": mangledIndex, "data-demangled-index": demangledIndex });
        });
    }, []);
    const toJsonArray = useCallback((transform) => {
        const managedRows = getChildren();
        return managedRows._arraySlice().map(child => {
            if (transform)
                return (transform(child));
            else
                return child.getSortValue();
        });
    }, []);
    return {
        rearrangeableChildrenReturn: {
            indexMangler,
            indexDemangler,
            //mangleMap,
            //demangleMap,
            rearrange,
            shuffle,
            reverse,
            useRearrangedChildren,
            toJsonArray
        }
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
export function useSortableChildren({ rearrangeableChildrenParameters, sortableChildrenParameters: { compare: userCompare }, managedChildrenReturn: { getChildren } }) {
    monitorCallCount(useSortableChildren);
    const getCompare = useStableGetter(userCompare ?? defaultCompare);
    const { rearrangeableChildrenReturn } = useRearrangeableChildren({ rearrangeableChildrenParameters, managedChildrenReturn: { getChildren } });
    const { rearrange } = rearrangeableChildrenReturn;
    // The actual sort function.
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
    return {
        sortableChildrenReturn: { sort },
        rearrangeableChildrenReturn
    };
}
export function defaultCompare(lhs, rhs) {
    return compare1(lhs?.getSortValue(), rhs?.getSortValue());
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
//# sourceMappingURL=use-sortable-children.js.map