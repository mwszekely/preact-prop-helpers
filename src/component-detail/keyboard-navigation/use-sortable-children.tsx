import { shuffle as lodashShuffle } from "lodash-es";
import { createElement } from "preact";
import { useCallback, useLayoutEffect, useRef } from "preact/hooks";
import { useForceUpdate } from "../../preact-extensions/use-force-update.js";
import { ManagedChildInfo, UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { returnNull, useEnsureStability, usePassiveState } from "../../preact-extensions/use-passive-state.js";
import { useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { VNode } from "../../util/types.js";
import { monitorCallCount } from "../../util/use-call-count.js";



export type GetIndex = (row: VNode) => (number | null | undefined);
export type GetValid = (index: number) => boolean;
export type GetHighestChildIndex = () => number;
export type Compare<M extends UseRearrangeableChildInfo> = (lhs: M, rhs: M) => number;

/**
 * All of these functions **MUST** be stable across renders.
 */
export interface UseRearrangeableChildrenParameters<M extends UseRearrangeableChildInfo> {

    managedChildrenReturn: Pick<UseManagedChildrenReturnType<M>["managedChildrenReturn"], "getChildren">;

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
        getIndex: GetIndex;


        onRearranged: null | (() => void);
    }
}

/**
 * All of these functions **MUST** be stable across renders.
 */
export interface UseSortableChildrenParameters<M extends UseRearrangeableChildInfo> extends UseRearrangeableChildrenParameters<M> {
    sortableChildrenParameters: {
        /**
         * Controls how values compare against each other when `sort` is called.
         * 
         * If null, a default sort is used that assumes `getSortValue` returns a value that works well with the `-` operator (so, like, a number, string, `Date`, `null`, etc.)
         * 
         * @param lhs 
         * @param rhs 
         */
        compare: null | Compare<M>;
    }
}


export interface UseRearrangeableChildrenReturnType<M extends UseRearrangeableChildInfo> {

    rearrangeableChildrenReturn: {

        /**
         * Pass an array of not-sorted child information to this function
         * and the children will re-arrange themselves to match.
         *  
         * **STABLE**
         *  
         * 
         */
        rearrange: (originalRows: M[], rowsInOrder: M[]) => void;

        /** **STABLE** */
        shuffle: () => Promise<void> | void;

        /** **STABLE** */
        reverse: () => Promise<void> | void;

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
        //mangleMap: MutableRef<Map<number, number>>;
        /** **STABLE** */
        //demangleMap: MutableRef<Map<number, number>>;

        /** 
         * **STABLE**
         * 
         * Call this on your props (that contain the children to sort!!) to allow them to be sortable.
         * 
         */
        useRearrangedChildren: (children: VNode[]) => VNode[];

        toJsonArray(transform?: (info: M) => object): object;

    }
}


export interface UseSortableChildrenReturnType<M extends UseRearrangeableChildInfo> extends UseRearrangeableChildrenReturnType<M> {
    sortableChildrenReturn: {
        /** **STABLE** */
        sort: (direction: "ascending" | "descending") => Promise<void> | void;
    }
}

export interface UseRearrangeableChildInfo extends ManagedChildInfo<number> {}

export interface UseSortableChildInfo extends UseRearrangeableChildInfo {
    getSortValue(): unknown;
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
export function useRearrangeableChildren<M extends UseSortableChildInfo>({
    rearrangeableChildrenParameters: { getIndex, onRearranged },
    managedChildrenReturn: { getChildren }
}: UseRearrangeableChildrenParameters<M>): UseRearrangeableChildrenReturnType<M> {
    monitorCallCount(useRearrangeableChildren);

    useEnsureStability("useRearrangeableChildren", getIndex);

    // These are used to keep track of a mapping between unsorted index <---> sorted index.
    // These are needed for navigation with the arrow keys.
    const mangleMap = useRef(new Map<number, number>());
    const demangleMap = useRef(new Map<number, number>());
    const indexMangler = useCallback((n: number) => (mangleMap.current.get(n) ?? n), []);
    const indexDemangler = useCallback((n: number) => (demangleMap.current.get(n) ?? n), []);
    const onRearrangedGetter = useStableGetter(onRearranged);
    //const { setTabbableIndex } = rovingTabIndexReturn;



    const shuffle = useCallback((): Promise<void> | void => {
        const managedRows = getChildren();
        const originalRows = managedRows.arraySlice();
        const shuffledRows = lodashShuffle(originalRows);
        return rearrange(originalRows, shuffledRows);
    }, [/* Must remain stable */]);

    const reverse = useCallback((): Promise<void> | void => {
        const managedRows = getChildren();
        const originalRows = managedRows.arraySlice();
        const reversedRows = managedRows.arraySlice().reverse();
        return rearrange(originalRows, reversedRows);
    }, [/* Must remain stable */]);


    // The sort function needs to be able to update whoever has all the sortable children.
    // Because that might not be the consumer of *this* hook directly (e.g. a table uses
    // this hook, but it's tbody that actually needs updating), we need to remotely
    // get and set a forceUpdate function.
    //const [getForceUpdate, setForceUpdate] = usePassiveState<null | (() => void)>(null, returnNull);
    const [getForceUpdate, setForceUpdate] = usePassiveState<null | (() => void), never>(null, returnNull);

    const rearrange = useCallback((originalRows: M[], sortedRows: M[]) => {

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
        getForceUpdate()?.();
    }, []);

    const useRearrangedChildren = useCallback(function useRearrangedChildren(children: VNode[]) {
        monitorCallCount(useRearrangedChildren);

        console.assert(Array.isArray(children));

        const forceUpdate = useForceUpdate();
        useLayoutEffect(() => { setForceUpdate(_prev => forceUpdate); }, [forceUpdate])

        return (children as VNode[])
            .slice()
            .map(child => ({ child, mangledIndex: indexMangler(getIndex(child)!), demangledIndex: getIndex(child) }))
            .sort((lhs, rhs) => { return lhs.mangledIndex - rhs.mangledIndex })
            .map(({ child, mangledIndex, demangledIndex }) => {
                return createElement(child.type as any, { ...child.props, key: demangledIndex, "data-mangled-index": mangledIndex, "data-unmangled-index": demangledIndex });
            });
    }, []);

    const toJsonArray = useCallback((transform?: (info: M) => object) => {
        const managedRows = getChildren();
        return managedRows.arraySlice().map(child => {
            if (transform)
                return (transform(child));
            else
                return child.getSortValue();
        })
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
export function useSortableChildren<M extends UseSortableChildInfo>({
    rearrangeableChildrenParameters,
    sortableChildrenParameters: { compare: userCompare },
    managedChildrenReturn: { getChildren }
}: UseSortableChildrenParameters<M>): UseSortableChildrenReturnType<M> {
        monitorCallCount(useSortableChildren);

    const getCompare = useStableGetter<Compare<M>>(userCompare ?? defaultCompare);

    const { rearrangeableChildrenReturn } = useRearrangeableChildren<M>({ rearrangeableChildrenParameters, managedChildrenReturn: { getChildren } });
    const { rearrange } = rearrangeableChildrenReturn;
    // The actual sort function.
    const sort = useCallback((direction: "ascending" | "descending"): Promise<void> | void => {
        const managedRows = getChildren();
        const compare = getCompare();
        const originalRows = managedRows.arraySlice();

        const sortedRows = compare ? originalRows.sort((lhsRow, rhsRow) => {

            const lhsValue = lhsRow;
            const rhsValue = rhsRow;
            const result = compare(lhsValue, rhsValue);
            if (direction[0] == "d")
                return -result;
            return result;

        }) : managedRows.arraySlice();

        return rearrange(originalRows, sortedRows);

    }, [ /* Must remain stable */]);

    return {
        sortableChildrenReturn: { sort },
        rearrangeableChildrenReturn
    };
}

export function defaultCompare(lhs: UseSortableChildInfo | undefined, rhs: UseSortableChildInfo | undefined) {
    return compare1(lhs?.getSortValue(), rhs?.getSortValue());

    function compare1(lhs: unknown | undefined, rhs: unknown | undefined) {
        if (lhs == null || rhs == null) {
            if (lhs == null)
                return -1;
            if (rhs == null)
                return 1;
        }

        return (lhs as any) - (rhs as any);
    }
}
