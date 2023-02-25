import { shuffle as lodashShuffle } from "lodash-es";
import { h } from "preact";
import { useCallback, useLayoutEffect, useRef } from "preact/hooks";
import { useForceUpdate } from "../preact-extensions/use-force-update.js";
import { returnNull, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableGetter } from "../preact-extensions/use-stable-getter.js";
/**
 * Hook that allows for the **direct descendant** children of this component to be re-ordered and sorted.
 *
 * *This is **separate** from "managed" children, which can be any level of child needed! Sortable/rearrangeable children must be **direct descendants** of the parent that uses this hook!*
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
 */
export function useRearrangeableChildren({ rearrangeableChildrenParameters: { getIndex, onRearranged } }) {
    // These are used to keep track of a mapping between unsorted index <---> sorted index.
    // These are needed for navigation with the arrow keys.
    const mangleMap = useRef(new Map());
    const demangleMap = useRef(new Map());
    const indexMangler = useCallback((n) => (mangleMap.current.get(n) ?? n), []);
    const indexDemangler = useCallback((n) => (demangleMap.current.get(n) ?? n), []);
    const onRearrangedGetter = useStableGetter(onRearranged);
    //const { setTabbableIndex } = rovingTabIndexReturn;
    const shuffle = useCallback((managedRows) => {
        const shuffledRows = lodashShuffle(managedRows.arraySlice());
        return rearrange(shuffledRows);
    }, [ /* Must remain stable */]);
    // The sort function needs to be able to update whoever has all the sortable children.
    // Because that might not be the consumer of *this* hook directly (e.g. a table uses
    // this hook, but it's tbody that actually needs updating), we need to remotely
    // get and set a forceUpdate function.
    //const [getForceUpdate, setForceUpdate] = usePassiveState<null | (() => void)>(null, returnNull);
    const [getForceUpdate, setForceUpdate] = usePassiveState(null, returnNull);
    const rearrange = useCallback((sortedRows) => {
        mangleMap.current.clear();
        demangleMap.current.clear();
        // Update our sorted <--> unsorted indices map 
        // and rerender the whole table, basically
        for (let indexAsSorted = 0; indexAsSorted < sortedRows.length; ++indexAsSorted) {
            const indexAsUnsorted = sortedRows[indexAsSorted].index;
            mangleMap.current.set(indexAsUnsorted, indexAsSorted);
            demangleMap.current.set(indexAsSorted, indexAsUnsorted);
        }
        onRearrangedGetter()?.();
        getForceUpdate()?.();
    }, []);
    const useRearrangedChildren = useCallback((children) => {
        console.assert(Array.isArray(children));
        const forceUpdate = useForceUpdate();
        useLayoutEffect(() => { setForceUpdate(_prev => forceUpdate); }, [forceUpdate]);
        return children
            .slice()
            .map(child => ({ child, mangledIndex: indexMangler(getIndex(child)), demangledIndex: getIndex(child) }))
            .sort((lhs, rhs) => { return lhs.mangledIndex - rhs.mangledIndex; })
            .map(({ child, mangledIndex, demangledIndex }) => {
            return h(child.type, { ...child.props, key: demangledIndex, "data-mangled-index": mangledIndex, "data-unmangled-index": demangledIndex });
        });
    }, []);
    const toJsonArray = useCallback((managedRows, transform) => {
        return managedRows.arraySlice().map(child => {
            if (transform)
                return (transform(child));
            else
                return child.getSortValue();
        });
    }, []);
    return {
        //linearNavigationParameters: { navigateAbsolute, navigateRelative },
        rearrangeableChildrenReturn: {
            indexMangler,
            indexDemangler,
            mangleMap,
            demangleMap,
            rearrange,
            shuffle,
            useRearrangedChildren,
            toJsonArray
        }
    };
}
/**
 * Hook that allows for the **direct descendant** children of this component to be re-ordered and sorted.
 *
 * *This is **separate** from "managed" children, which can be any level of child needed! Sortable/rearrangeable children must be **direct descendants** of the parent that uses this hook!*
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
 */
export function useSortableChildren({ rearrangeableChildrenParameters, sortableChildrenParameters: { compare: userCompare } }) {
    const getCompare = useStableGetter(userCompare ?? defaultCompare);
    const { rearrangeableChildrenReturn } = useRearrangeableChildren({ rearrangeableChildrenParameters });
    const { rearrange } = rearrangeableChildrenReturn;
    // The actual sort function.
    const sort = useCallback((managedRows, direction) => {
        const compare = getCompare();
        const sortedRows = compare ? managedRows.arraySlice().sort((lhsRow, rhsRow) => {
            const lhsValue = lhsRow;
            const rhsValue = rhsRow;
            const result = compare(lhsValue, rhsValue);
            if (direction[0] == "d")
                return -result;
            return result;
        }) : managedRows.arraySlice();
        return rearrange(sortedRows);
    }, [ /* Must remain stable */]);
    return {
        sortableChildrenReturn: { sort },
        rearrangeableChildrenReturn
    };
}
/*export interface UseGroupedSortableChildrenParameters<M extends GroupedSortedChildInfo> {
    managedChildrenReturn: UseManagedChildrenReturnType<M>["managedChildrenReturn"]
}

export interface UseGroupedSortableChildren {
    linearNavigationParameters: Pick<UseLinearNavigationParameters["linearNavigationParameters"], "indexDemangler" | "indexMangler">
}*/
/**
 * It's common enough to have, e.g., a list with multiple sortable groups, a table where the body is sorted independently of the head, etc...
 *
 * A sortable group assumes that the parent (which also calls this hook) handles list navigation (or similar),
 * and that each group element (which can also be the list parent, if there are NO groups) handles sorting (or similar).
 */
/*export function useGroupedSortableChildren<M extends GroupedSortedChildInfo>({ managedChildrenReturn: { getChildren } }: UseGroupedSortableChildrenParameters<M>): UseGroupedSortableChildren {
    const allIndexManglers = useRef<Map<number, (i: number) => number>>(new Map());
    const allIndexDemanglers = useRef<Map<number, (i: number) => number>>(new Map());
    const indexMangler = useCallback((i: number): number => {
        const child = getChildren().getAt(i);
        if (child) {
            let indexManglerForThisLocation = allIndexManglers.current.get(child.locationIndex);
            return (indexManglerForThisLocation ?? identity)(i);
        }
        return identity(i);
    }, []);
    const indexDemangler = useCallback((i: number): number => {
        const child = getChildren().getAt(i);
        if (child) {
            let indexDemanglerForThisLocation = allIndexDemanglers.current.get(child.locationIndex);
            return (indexDemanglerForThisLocation ?? identity)(i);
        }
        return identity(i);
    }, []);


    return {
        linearNavigationParameters: {
            indexMangler,
            indexDemangler
        }
    }
}*/
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