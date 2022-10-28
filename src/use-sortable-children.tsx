import * as _ from "lodash";
import { h, VNode } from "preact";
import { MutableRef, useCallback, useLayoutEffect, useRef } from "preact/hooks";
import { ManagedChildInfo, ManagedChildren } from "./use-child-manager";
import { useForceUpdate } from "./use-force-update";
import { useMergedProps } from "./use-merged-props";
import { returnNull, usePassiveState } from "./use-passive-state";
import lodashShuffle from "lodash-es/shuffle";
import { UseLinearNavigationParameters } from "./use-keyboard-navigation";

export type GetIndex<P> = (row: VNode<P>) => (number | null | undefined);
export type GetValid = (index: number) => boolean;
export type GetHighestChildIndex = () => number;
export type Compare<V> = (lhs: V, rhs: V) => number;

/**
 * All of these functions **MUST** be stable across renders.
 */
export interface UseRearrangeableChildrenParameters {

    /**
     * Must return, e.g., the row index of this child
     * (Usually just an `index` prop)
     */
    rearrangeableChildrenParameters: {
        getIndex: GetIndex<any>;

        /** 
         * Using rearrangeable children means we need to be able to override arrow key navigation,
         * which also means that, somewhere down the road, we need to know which children are arrow-key-able,
         * just like in normal linear navigation.
         */
        getValid: GetValid;
        getHighestChildIndex: GetHighestChildIndex;
    }
}

/**
 * All of these functions **MUST** be stable across renders.
 */
export interface UseSortableChildrenParameters<M extends ManagedChildInfo<number>> extends UseRearrangeableChildrenParameters {
    sortableChildrenParameters: {
        /**
         * Controls how values compare against each other.
         * @param lhs 
         * @param rhs 
         */
        compare: Compare<M>;
    }
}


export interface UseRearrangeableChildrenReturnType<ParentElement extends Element, M extends ManagedChildInfo<number>> {
    linearNavigationParameters: Pick<UseLinearNavigationParameters["linearNavigationParameters"], "navigateRelative" | "navigateAbsolute">;

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
    rearrangeableChildrenParameters: { getIndex, getValid, getHighestChildIndex }
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

    const navigateAbsolute = useCallback((i: number | null) => {
        if (i != null) {
            const nextIndex = tryNavigateToIndex({
                highestChildIndex: getHighestChildIndex(),
                isValid: getValid,
                target: i,
                searchDirection: 1,
                indexMangler: indexMangler,
                indexDemangler: indexDemangler
            });
            return (i == null ? null : nextIndex);
        }
        else {
            return null;
        }
    }, []);
    const navigateRelative = useCallback((original: number, offset: number) => {
        return tryNavigateToIndex({
            target: indexDemangler(indexMangler(original) + offset),
            highestChildIndex: getHighestChildIndex(),
            isValid: getValid,
            searchDirection: (Math.sign(offset) || 1) as 1 | -1,
            indexMangler: indexMangler,
            indexDemangler: indexDemangler
        });
    }, []);

    // The sort function needs to be able to update whoever has all the sortable children.
    // Because that might not be the consumer of *this* hook directly (e.g. a table uses
    // this hook, but it's tbody that actually needs updating), we need to remotely
    // get and set a forceUpdate function.
    //const [getForceUpdate, setForceUpdate] = usePassiveState<null | (() => void)>(null, returnNull);
    const [getForceUpdate, setForceUpdate] = usePassiveState<null | (() => void)>(null, returnNull);

    const rearrange = useCallback((sortedRows: M[]) => {

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
        linearNavigationParameters: { navigateAbsolute, navigateRelative },
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

    const compare = (userCompare ?? defaultCompare);

    const { linearNavigationParameters, rearrangeableChildrenReturn } = useRearrangeableChildren<ParentElement, M>({ rearrangeableChildrenParameters });
    const { rearrange } = rearrangeableChildrenReturn;
    // The actual sort function.
    const sort = useCallback((managedRows: ManagedChildren<M>, direction: "ascending" | "descending"): Promise<void> | void => {

        const sortedRows = managedRows.arraySlice().sort((lhsRow, rhsRow) => {

            const lhsValue = lhsRow;
            const rhsValue = rhsRow;
            const result = compare(lhsValue, rhsValue);
            if (direction[0] == "d")
                return -result;
            return result;

        });

        return rearrange(sortedRows);

    }, [ /* Must remain stable */]);

    return {
        linearNavigationParameters,
        sortableChildrenReturn: { sort },
        rearrangeableChildrenReturn
    };
}


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



export interface TryNavigateToIndexParameters {
    //children: ManagedChildren<number, unknown, K>;
    highestChildIndex: number; // [0, n], not [0, n)
    isValid(index: number): boolean;

    //default: number;
    target: number;
    searchDirection: 1 | -1;
    indexMangler: (n: number) => number;
    indexDemangler: (n: number) => number;
}

export function tryNavigateToIndex({ isValid, highestChildIndex: upper, searchDirection, indexDemangler, indexMangler, target }: TryNavigateToIndexParameters) {
    //const upper = children.getHighestIndex();
    const lower = 0;

    if (searchDirection === -1) {
        while (target >= lower && !isValid(target))
            target = indexDemangler(indexMangler(target) - 1);

        return target < lower ? indexDemangler(lower) : target;
    }
    else if (searchDirection === 1) {
        while (target <= upper && !isValid(target))
            target = indexDemangler(indexMangler(target) + 1);

        return target > upper ? indexDemangler(upper) : target;
    }
    else {
        return lower;
    }
}



