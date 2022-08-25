import { h, VNode } from "preact";
import { useCallback, useLayoutEffect, useRef } from "preact/hooks";
import { ManagedChildren } from "./use-child-manager";
import { useForceUpdate } from "./use-force-update";
import { useMergedProps } from "./use-merged-props";
import { returnNull, usePassiveState } from "./use-passive-state";

/**
 * All of these functions **MUST** be stable across renders.
 */
export interface UseSortableChildrenParameters<T extends { index: number }, G extends any[]> { 

    /**
     * Must return, e.g., the row index of this child
     * (Usually just an `index` prop)
     */
    getIndex(row: T): (number | null | undefined);

    /**
     * Must return the value this child uses RE: sorting.
     * If you don't care about sorting (you just use 
     * your ownarbitrary reordering), this will never
     * be used, so it can return anything.
     * @param row 
     * @param args 
     */
    getValue(row: T, ...args: G): unknown;

    /**
     * Controls how values compare against each other.
     * @param lhs 
     * @param rhs 
     */
    compare?(lhs: unknown, rhs: unknown): number;
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
export function useSortableChildren<T extends { index: number }, G extends any[], S extends Element>({ getIndex, getValue, compare: userCompare }: UseSortableChildrenParameters<T, G>) {

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


    // The actual sort function.
    const sort = useCallback((managedRows: ManagedChildren<T>, direction: "ascending" | "descending", ...args: G): Promise<void> | void => {
        
        const sortedRows = managedRows.sliceSort((lhsRow, rhsRow) => {

            const lhsValue = getValue(lhsRow, ...args) as any;
            const rhsValue = getValue(rhsRow, ...args) as any;
            const result = compare(lhsValue, rhsValue) // lhsRow.getManagedCells()?.[column]?.value, rhsRow.getManagedCells()?.[column]?.value);
            if (direction[0] == "d")
                return -result;
            return result;

        });

        // Update our sorted <--> unsorted indices map 
        // and rerender the whole table, basically
        for (let indexAsSorted = 0; indexAsSorted < sortedRows.length; ++indexAsSorted) {
            const indexAsUnsorted = sortedRows[indexAsSorted].index;

            mangleMap.current.set(indexAsSorted, indexAsUnsorted);
            demangleMap.current.set(indexAsUnsorted, indexAsSorted);
        }

        getForceUpdate()?.();

    }, [ /* Must remain stable */]);

    const useSortableProps = useCallback(<P extends Omit<h.JSX.HTMLAttributes<S>, "children"> & { children?: VNode<any>[] }>({ children, ...props }: P) => {

        const forceUpdate = useForceUpdate();
        useLayoutEffect(() => { setForceUpdate(_prev => forceUpdate); }, [forceUpdate])

        return (useMergedProps<S>({
            role: "rowgroup",
            children: (children as VNode<T>[]).slice().sort((lhs, rhs) => {

                return (
                    (demangleMap.current.get(getIndex(lhs.props)!) ?? getIndex(lhs.props) ?? 0) -
                    (demangleMap.current.get(getIndex(rhs.props)!) ?? getIndex(rhs.props) ?? 0)
                )
            }).map(child => h(child.type as any, { ...child.props, key: getIndex(child.props) }))
        }, props));
    }, []);

    return { useSortableProps, sort, indexMangler, indexDemangler, mangleMap, demangleMap }
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
