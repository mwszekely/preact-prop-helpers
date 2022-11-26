import lodashShuffle from "lodash-es/shuffle";
import { h, VNode } from "preact";
import { MutableRef, useCallback, useLayoutEffect, useRef } from "preact/hooks";
import { useMergedProps } from "../dom-helpers/use-merged-props";
import { ManagedChildInfo, ManagedChildren } from "../preact-extensions/use-child-manager";
import { useForceUpdate } from "../preact-extensions/use-force-update";
import { returnNull, usePassiveState } from "../preact-extensions/use-passive-state";
import { useStableGetter } from "../preact-extensions/use-stable-getter";

export type GetIndex<P> = (row: VNode<P>) => (number | null | undefined);
export type GetValid = (index: number) => boolean;
export type GetHighestChildIndex = () => number;
export type Compare<M extends ManagedChildInfo<number>> = (lhs: M, rhs: M) => number;

/**
 * All of these functions **MUST** be stable across renders.
 */
export interface UseRearrangeableChildrenParameters {

    /**
     * Must return, e.g., the row index of this child
     * (Usually just an `index` prop)
     */
    rearrangeableChildrenParameters: {
        /**
         * This must return the index of this child relative to all its sortable siblings.
         * 
         * In general, this corresponds to the `index` prop, so something like `vnode => vnode.props.index` is what you're usually looking for.
         */
        getIndex: GetIndex<any>;

        /** 
         * Using rearrangeable children means we need to be able to override arrow key navigation,
         * which also means that, somewhere down the road, we need to know which children are arrow-key-able,
         * just like in normal linear navigation.
         * 
         * 
         * PSYCHE!! LinearNavigation should be the one to deal with index manglers and demanglers, and now it does.
         */
        //getValid: GetValid;
        // getHighestChildIndex: GetHighestChildIndex;
    }
}

/**
 * All of these functions **MUST** be stable across renders.
 */
export interface UseSortableChildrenParameters<M extends ManagedChildInfo<number>> extends UseRearrangeableChildrenParameters {
    sortableChildrenParameters: {
        /**
         * Controls how values compare against each other when `sort` is called.
         * 
         * If null, then sorting is disabled (manual rearrangement is still fine, but calling `sort()` will do nothing).
         * 
         * @param lhs 
         * @param rhs 
         */
        compare: null | Compare<M>;
    }
}


export interface UseRearrangeableChildrenReturnType<ParentElement extends Element, M extends ManagedChildInfo<number>> {
    //linearNavigationParameters: Pick<UseLinearNavigationParameters["linearNavigationParameters"], "navigateRelative" | "navigateAbsolute">;

    rearrangeableChildrenReturn: {

        /**
         * Pass an array of not-sorted child information to this function
         * and the children will re-arrange themselves to match.
         *  
         * **STABLE**
         *  
         * 
         */
        rearrange: (rowsInOrder: M[]) => void;

        /** **STABLE** */
        shuffle: (managedRows: ManagedChildren<M>) => Promise<void> | void;

        /** 
         * **STABLE**
         *
         * This function takes a component's original `index` prop and outputs a new index that represents its re-arranged position.
         * In conjunction with `indexDemangler`, this can be used to perform math on indices (incrementing, decrementing, etc.)
         *  
         * E.G. to decrement a component's index "c": indexDemangler(indexMangler(c) - 1)
         */
        indexMangler: (n: number) => number;
        /** **STABLE** */
        indexDemangler: (n: number) => number;
        /** **STABLE** */
        mangleMap: MutableRef<Map<number, number>>;
        /** **STABLE** */
        demangleMap: MutableRef<Map<number, number>>;

        /** 
         * **STABLE**
         * 
         * Call this on your props (that contain the children to sort!!) to allow them to be sortable.
         * 
         */
        useRearrangeableProps: (props: h.JSX.HTMLAttributes<ParentElement>) => h.JSX.HTMLAttributes<ParentElement>;
    }
}


export interface UseSortableChildrenReturnType<ParentElement extends Element, M extends ManagedChildInfo<number>> extends UseRearrangeableChildrenReturnType<ParentElement, M> {
    sortableChildrenReturn: {
        /** **STABLE** */
        sort: (managedRows: ManagedChildren<M>, direction: "ascending" | "descending") => Promise<void> | void;
    }
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
export function useRearrangeableChildren<ParentElement extends Element, M extends ManagedChildInfo<number>>({
    rearrangeableChildrenParameters: { getIndex }
}: UseRearrangeableChildrenParameters): UseRearrangeableChildrenReturnType<ParentElement, M> {

    // These are used to keep track of a mapping between unsorted index <---> sorted index.
    // These are needed for navigation with the arrow keys.
    const mangleMap = useRef(new Map<number, number>());
    const demangleMap = useRef(new Map<number, number>());
    const indexMangler = useCallback((n: number) => (mangleMap.current.get(n) ?? n), []);
    const indexDemangler = useCallback((n: number) => (demangleMap.current.get(n) ?? n), []);
    //const { setTabbableIndex } = rovingTabIndexReturn;



    const shuffle = useCallback((managedRows: ManagedChildren<M>): Promise<void> | void => {
        const shuffledRows = lodashShuffle(managedRows.arraySlice())
        return rearrange(shuffledRows);
    }, [/* Must remain stable */]);


    // The sort function needs to be able to update whoever has all the sortable children.
    // Because that might not be the consumer of *this* hook directly (e.g. a table uses
    // this hook, but it's tbody that actually needs updating), we need to remotely
    // get and set a forceUpdate function.
    //const [getForceUpdate, setForceUpdate] = usePassiveState<null | (() => void)>(null, returnNull);
    const [getForceUpdate, setForceUpdate] = usePassiveState<null | (() => void)>(null, returnNull);

    const rearrange = useCallback((sortedRows: M[]) => {

        mangleMap.current.clear();
        demangleMap.current.clear();

        // Update our sorted <--> unsorted indices map 
        // and rerender the whole table, basically
        for (let indexAsSorted = 0; indexAsSorted < sortedRows.length; ++indexAsSorted) {
            const indexAsUnsorted = sortedRows[indexAsSorted].index;

            mangleMap.current.set(indexAsUnsorted, indexAsSorted);
            demangleMap.current.set(indexAsSorted, indexAsUnsorted);
        }


        getForceUpdate()?.();
    }, []);

    const useRearrangeableProps = useCallback(({ children, ...props }: h.JSX.HTMLAttributes<ParentElement>) => {
        console.assert(Array.isArray(children));

        const forceUpdate = useForceUpdate();
        useLayoutEffect(() => { setForceUpdate(_prev => forceUpdate); }, [forceUpdate])

        return (useMergedProps<ParentElement>({
            children:
                (children as VNode<any>[])
                    .slice()
                    .map(child => ({ child, mangledIndex: indexMangler(getIndex(child)!), demangledIndex: getIndex(child) }))
                    .sort((lhs, rhs) => { return lhs.mangledIndex - rhs.mangledIndex })
                    .map(({ child, mangledIndex, demangledIndex }) => {
                        return h(child.type as any, { ...child.props, key: demangledIndex, "data-mangled-index": mangledIndex, "data-unmangled-index": demangledIndex });
                    })
        }, props));
    }, []);

    return {
        //linearNavigationParameters: { navigateAbsolute, navigateRelative },
        rearrangeableChildrenReturn: { indexMangler, indexDemangler, mangleMap, demangleMap, rearrange, shuffle, useRearrangeableProps, }
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
export function useSortableChildren<ParentElement extends Element, M extends ManagedChildInfo<number>>({
    rearrangeableChildrenParameters,
    sortableChildrenParameters: { compare: userCompare }
}: UseSortableChildrenParameters<M>): UseSortableChildrenReturnType<ParentElement, M> {

    const getCompare = useStableGetter(userCompare);

    const { rearrangeableChildrenReturn } = useRearrangeableChildren<ParentElement, M>({ rearrangeableChildrenParameters });
    const { rearrange } = rearrangeableChildrenReturn;
    // The actual sort function.
    const sort = useCallback((managedRows: ManagedChildren<M>, direction: "ascending" | "descending"): Promise<void> | void => {
        const compare = getCompare();

        const sortedRows = compare? managedRows.arraySlice().sort((lhsRow, rhsRow) => {

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

function defaultCompare(lhs: string | number | boolean | Date | null | undefined, rhs: string | number | boolean | Date | null | undefined) {
    return compare1(lhs, rhs);

    function compare3(lhs: string | number, rhs: string | number) {

        // Coerce strings to numbers if they seem to stay the same when serialized
        if (`${+lhs}` === lhs)
            lhs = +lhs;
        if (`${+rhs}` === rhs)
            rhs = +rhs;

        // At this point, if either argument is a string, turn the other one into one too
        if (typeof lhs === "string")
            rhs = `${rhs}`;
        if (typeof rhs === "string")
            lhs = `${lhs}`;

        console.assert(typeof lhs === typeof rhs);

        if (typeof lhs === "string")
            return lhs.localeCompare(rhs as string);
        if (typeof lhs === "number")
            return +lhs - +rhs;

        return 0;
    }
    function compare2(lhs: string | number | boolean | Date, rhs: string | number | boolean | Date) {
        if (typeof lhs === "boolean" || lhs instanceof Date)
            lhs = +lhs;
        if (typeof rhs === "boolean" || rhs instanceof Date)
            rhs = +rhs;
        return compare3(lhs, rhs);
    }
    function compare1(lhs: string | number | boolean | Date | null | undefined, rhs: string | number | boolean | Date | null | undefined) {
        if (lhs == null && rhs == null) {
            // They're both null
            return 0;
        }
        else if (lhs == null || rhs == null) {
            // One of the two is null -- easy case
            return lhs != null ? 1 : -1
        }
        return compare2(lhs, rhs);
    }
}
