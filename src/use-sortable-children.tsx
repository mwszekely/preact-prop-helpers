import * as _ from "lodash";
import { h, VNode } from "preact";
import { MutableRef, useCallback, useLayoutEffect, useRef } from "preact/hooks";
import { ManagedChildInfo, ManagedChildren } from "./use-child-manager";
import { useForceUpdate } from "./use-force-update";
import { useMergedProps } from "./use-merged-props";
import { returnNull, usePassiveState } from "./use-passive-state";
import lodashShuffle from "lodash-es/shuffle";

export type GetIndex<C, K extends string> = (row: ManagedChildInfo<number, C, K>) => (number | null | undefined);
export type GetValue<C, K extends string, G extends any[], V> = (row: ManagedChildInfo<number, C, K>, ...args: G) => V;
export type Compare<V> = (lhs: V, rhs: V) => number;

/**
 * All of these functions **MUST** be stable across renders.
 */
export interface UseSortableChildrenParameters<C, K extends string, G extends any[], V> {

    /**
     * Must return, e.g., the row index of this child
     * (Usually just an `index` prop)
     */
    getIndex: GetIndex<C, K>;

    /**
     * Must return the value this child uses RE: sorting.
     * If you don't care about sorting (you just use 
     * your ownarbitrary reordering), this will never
     * be used, so it can return anything.
     * @param row 
     * @param args 
     */
    getValue: GetValue<C, K, G, V>;

    /**
     * Controls how values compare against each other.
     * @param lhs 
     * @param rhs 
     */
    compare: Compare<V>;
}

/**
 * Hook that allows for the **direct descendant** children of this component to be re-ordered and sorted.
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
export function useSortableChildren<C, K extends string, G extends any[], V, S extends Element>({ getIndex, getValue, compare: userCompare }: UseSortableChildrenParameters<C, K, G, V>): UsesortableChildrenReturnType<C, K, G, S> {

    const compare = (userCompare ?? defaultCompare)

    // These are used to keep track of a mapping between unsorted index <---> sorted index.
    // These are needed for navigation with the arrow keys.
    const mangleMap = useRef(new Map<number, number>());
    const demangleMap = useRef(new Map<number, number>());
    const indexMangler = useCallback((n: number) => (mangleMap.current.get(n) ?? n), []);
    const indexDemangler = useCallback((n: number) => (demangleMap.current.get(n) ?? n), []);

    // The sort function needs to be able to update whoever has all the sortable children.
    // Because that might not be the consumer of *this* hook directly (e.g. a table uses
    // this hook, but it's tbody that actually needs updating), we need to remotely
    // get and set a forceUpdate function.
    const [getForceUpdate, setForceUpdate] = usePassiveState<null | (() => void)>(null, returnNull);

    const rearrange = useCallback((sortedRows: ManagedChildInfo<number, C, K>[]) => {

        // Update our sorted <--> unsorted indices map 
        // and rerender the whole table, basically
        for (let indexAsSorted = 0; indexAsSorted < sortedRows.length; ++indexAsSorted) {
            const indexAsUnsorted = sortedRows[indexAsSorted].index;

            mangleMap.current.set(indexAsUnsorted, indexAsSorted);
            demangleMap.current.set(indexAsSorted, indexAsUnsorted);
            console.log(`info.index is ${indexAsUnsorted} and is being remapped to ${indexAsSorted}`);
        }


        getForceUpdate()?.();
    }, []);

    // The actual sort function.
    const sort = useCallback((managedRows: ManagedChildren<number, C, K>, direction: "ascending" | "descending", ...args: G): Promise<void> | void => {

        const sortedRows = managedRows.arraySlice().sort((lhsRow, rhsRow) => {

            const lhsValue = getValue(lhsRow, ...args) as any;
            const rhsValue = getValue(rhsRow, ...args) as any;
            const result = compare(lhsValue, rhsValue) // lhsRow.getManagedCells()?.[column]?.value, rhsRow.getManagedCells()?.[column]?.value);
            if (direction[0] == "d")
                return -result;
            return result;

        });

        return rearrange(sortedRows);

    }, [ /* Must remain stable */]);

    const shuffle = useCallback((managedRows: ManagedChildren<number, C, K>): Promise<void> | void => {
        const shuffledRows = lodashShuffle(managedRows.arraySlice())
        return rearrange(shuffledRows);
    }, [/* Must remain stable */]);

    const useSortableProps = useCallback(({ children, ...props }: Omit<h.JSX.HTMLAttributes<S>, "children"> & { children?: VNode<any>[] }) => {

        const forceUpdate = useForceUpdate();
        useLayoutEffect(() => { setForceUpdate(_prev => forceUpdate); }, [forceUpdate])

        return (useMergedProps<S>({
            children: (children as VNode<ManagedChildInfo<number, C, K>>[]).slice().map(child => ({ child, mangledIndex: indexMangler(getIndex(child.props!)!), demangledIndex: getIndex(child.props) })).sort((lhs, rhs) => { return lhs.mangledIndex - rhs.mangledIndex }).map(({ child, mangledIndex, demangledIndex }) => {
                return h(child.type as any, { ...child.props, key: demangledIndex, "data-mangled-index": mangledIndex, "data-unmangled-index": demangledIndex });
            })
            /*.sort((lhs, rhs) => {

                return (
                    (demangleMap.current.get(getIndex(lhs.props)!) ?? getIndex(lhs.props) ?? 0) -
                    (demangleMap.current.get(getIndex(rhs.props)!) ?? getIndex(rhs.props) ?? 0)
                )
            }).map(child => h(child.type as any, { ...child.props, key: getIndex(child.props) }))*/
        }, props));
    }, []);

    return { useSortableProps, sort, indexMangler, indexDemangler, mangleMap, demangleMap, rearrange, shuffle };
}

export interface UsesortableChildrenReturnType<C, K extends string, G extends any[], S extends Element> {
    /** **STABLE** */
    useSortableProps: (props: Omit<h.JSX.HTMLAttributes<S>, "children"> & { children?: VNode<any>[] | undefined; }) => h.JSX.HTMLAttributes<S>;
    /** **STABLE** */
    sort: (managedRows: ManagedChildren<number, C, K>, direction: "ascending" | "descending", ...args: G) => Promise<void> | void;
    /** **STABLE** */
    shuffle: (managedRows: ManagedChildren<number, C, K>) => Promise<void> | void;
    /**
     * If you don't want to sort the children, but do something more specific,
     * you can pass an array of not-sorted child information to this function
     * and the children will re-arrange themselves to match.
     *  
     * (`sort` uses this internally)
     *  
     * **STABLE**
     *  
     * */
    rearrange: (rowsInOrder: ManagedChildInfo<number, C, K>[]) => void;
    /** **STABLE** */
    indexMangler: (n: number) => number;
    /** **STABLE** */
    indexDemangler: (n: number) => number;
    /** **STABLE** */
    mangleMap: MutableRef<Map<number, number>>;
    /** **STABLE** */
    demangleMap: MutableRef<Map<number, number>>;
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
