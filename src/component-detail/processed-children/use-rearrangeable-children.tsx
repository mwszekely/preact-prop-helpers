
import { useForceUpdate } from "../../preact-extensions/use-force-update.js";
import { ManagedChildInfo, UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { useEnsureStability } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject, useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { Nullable, TargetedPick, createElement, useCallback, useLayoutEffect, useRef } from "../../util/lib.js";
import { OmitStrong, VNode } from "../../util/types.js";
import { monitored } from "../../util/use-call-count.js";

// TODO: This actually pulls in a lot of lodash for, like, one questionably-useful import.
import { identity, shuffle as lodashShuffle, noop } from "lodash-es";






export interface UseRearrangedChildrenContextSelf {
    provideManglers(args: Pick<UseRearrangeableChildrenReturnTypeSelf<any>, "indexDemangler" | "indexMangler" | "reverse" | "shuffle" | "sort">): void;
}

/**
 * Unusually, this context is not passed from parent to child,
 * but from parent to a different parent.
 */
export interface UseRearrangedChildrenContext {
    rearrangeableChildrenContext: UseRearrangedChildrenContextSelf;
}


/**
 * A parent can call this to provide useRearrangeableChildren with the `context` it expects.
 * 
 * @returns 
 */
export function useCreateProcessedChildrenContext(): OmitStrong<UseRearrangeableChildrenReturnTypeSelf<any>, "children"> & { context: UseRearrangedChildrenContext } {
    const sortRef = useRef<null | UseRearrangeableChildrenReturnTypeSelf<any>["sort"]>(null);
    const shuffleRef = useRef<null | UseRearrangeableChildrenReturnTypeSelf<any>["shuffle"]>(null);
    const reverseRef = useRef<null | UseRearrangeableChildrenReturnTypeSelf<any>["reverse"]>(null);
    const rearrangeRef = useRef<null | UseRearrangeableChildrenReturnTypeSelf<any>["rearrange"]>(null);
    const indexManglerRef = useRef<null | ((n: number) => number)>(null);
    const indexDemanglerRef = useRef<null | ((n: number) => number)>(null);
    const indexMangler = useStableCallback((i: number) => { return (indexManglerRef.current ?? identity)(i)! }, []);
    const indexDemangler = useStableCallback((i: number) => { return (indexDemanglerRef.current ?? identity)(i)! }, []);
    const sort = useStableCallback<(typeof sortRef)["current"]>((i) => { return (sortRef.current ?? identity)(i)! }, []);
    const shuffle = useStableCallback<(typeof shuffleRef)["current"]>(() => { return (shuffleRef.current ?? identity)()! }, []);
    const reverse = useStableCallback<(typeof reverseRef)["current"]>(() => { return (reverseRef.current ?? identity)()! }, []);
    const rearrange = useStableCallback<(typeof rearrangeRef)["current"]>((original, ordered) => { (rearrangeRef.current ?? noop)(original, ordered)! }, []);
    const provideManglers = useStableCallback<UseRearrangedChildrenContextSelf["provideManglers"]>(({ indexDemangler, indexMangler, reverse, shuffle, sort }) => {
        indexManglerRef.current = indexMangler;
        indexDemanglerRef.current = indexDemangler;
        reverseRef.current = reverse;
        shuffleRef.current = shuffle;
        sortRef.current = sort;
    });
    
    const rearrangeableChildrenContext = useMemoObject<UseRearrangedChildrenContextSelf>({ provideManglers });
    const context = useMemoObject<UseRearrangedChildrenContext>({ rearrangeableChildrenContext });

    return {
        context,
        indexDemangler,
        indexMangler,
        rearrange,
        reverse,
        shuffle,
        sort
    }
}





export interface UseRearrangeableChildInfo extends ManagedChildInfo<number> { }

export type GetIndex = (row: VNode) => (number | null | undefined);
export type GetValid = (index: number) => boolean;
export type GetHighestChildIndex = () => number;
export type Compare<M extends UseRearrangeableChildInfo> = (lhs: M, rhs: M) => number;

export interface UseRearrangeableChildrenParametersSelf<M extends UseRearrangeableChildInfo> {
    /**
     * Controls how values compare against each other when `sort` is called.
     * 
     * If null, a default sort is used that assumes `getSortValue` returns a value that works well with the `-` operator (so, like, a number, string, `Date`, `null`, etc.)
     * 
     * @param lhs - The first value to compare
     * @param rhs - The second value to compare
     */
    compare: Nullable<Compare<M>>;


    /**
     * Because this hook needs to re-render each child with a new `key` prop,
     * it may be useful to apply a transformation before that step completes.
     * 
     * @default `identity`
     */
    adjust: Nullable<(input: VNode, data: { mangledIndex: number | null, demangledIndex: number | null }) => VNode | null>;

    /**
     * This must return the index of this child relative to all its sortable siblings from its `VNode`.
     * 
     * @remarks In general, this corresponds to the `index` prop, so something like `vnode => vnode.props.index` is what you're usually looking for.
     * 
     * @stable
     */
    getIndex: GetIndex;


    /**
     * Called after the children have been rearranged.
     */
    onRearranged: Nullable<(() => void)>;

    /**
     * The children to sort.
     */
    children: (VNode | null)[];
}

/**
 * All of these functions **MUST** be stable across renders.
 */
export interface UseRearrangeableChildrenParameters<M extends UseRearrangeableChildInfo> extends TargetedPick<UseManagedChildrenReturnType<M>, "managedChildrenReturn", "getChildren"> {
    rearrangeableChildrenParameters: UseRearrangeableChildrenParametersSelf<M>;
    context: UseRearrangedChildrenContext;
}


export interface UseRearrangeableChildrenReturnType<M extends UseRearrangeableChildInfo> {
    rearrangeableChildrenReturn: UseRearrangeableChildrenReturnTypeSelf<M>;
}

export interface UseRearrangeableChildrenReturnTypeSelf<M extends UseRearrangeableChildInfo> {

    /**
     * Pass an array of not-sorted child information to this function
     * and the children will re-arrange themselves to match.
     * 
     * @remarks This is only needed if you are implementing your own sort/reordering algorithm, just call this at the end when you're ready.
     *  
     * @stable
     */
    rearrange: (originalRows: M[], rowsInOrder: M[]) => void;

    /** 
     * Arranges the children in a random order.
     * 
     * @stable 
     */
    shuffle: () => Promise<void> | void;

    /** 
     * Reverses the order of the children
     * 
     * @stable 
     */
    reverse: () => Promise<void> | void;

    /** 
     * @stable
     *
     * This function takes a component's original `index` prop and outputs a new index that represents its re-arranged position.
     * In conjunction with `indexDemangler`, this can be used to perform math on indices (incrementing, decrementing, etc.)
     *  
     * E.G. to decrement a component's index "c": indexDemangler(indexMangler(c) - 1)
     */
    indexMangler: (n: number) => number;
    /** @stable */
    indexDemangler: (n: number) => number;

    /**
     * The transformed (i.e. rearranged) children to render.
     */
    children: (VNode | null)[];

    /** 
     * @stable
     * 
     * Call to rearrange the children in ascending or descending order according to `compare`.
     * 
     */
    sort: (direction: "ascending" | "descending") => Promise<void> | void;

    /**
     * Returns an array of each cell's `getSortValue()` result.
     */
    //toJsonArray(transform?: (info: M) => object): object;

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
export const useRearrangeableChildren = monitored(function useRearrangeableChildren<M extends UseRearrangeableChildInfo>({
    rearrangeableChildrenParameters: { getIndex, onRearranged, compare: userCompare, children, adjust },
    managedChildrenReturn: { getChildren },
    context: { rearrangeableChildrenContext: { provideManglers } }
}: UseRearrangeableChildrenParameters<M>): UseRearrangeableChildrenReturnType<M> {
    useEnsureStability("useRearrangeableChildren", getIndex);

    // These are used to keep track of a mapping between unsorted index <---> sorted index.
    // These are needed for navigation with the arrow keys.
    const mangleMap = useRef(new Map<number, number>());
    const demangleMap = useRef(new Map<number, number>());
    const indexMangler = useCallback((n: number) => (mangleMap.current.get(n) ?? n), []);
    const indexDemangler = useCallback((n: number) => (demangleMap.current.get(n) ?? n), []);
    const onRearrangedGetter = useStableGetter(onRearranged);

    const shuffle = useCallback((): Promise<void> | void => {
        const managedRows = getChildren();
        const originalRows = managedRows._arraySlice();
        const shuffledRows = lodashShuffle(originalRows);
        return rearrange(originalRows, shuffledRows);
    }, [/* Must remain stable */]);

    const reverse = useCallback((): Promise<void> | void => {
        const managedRows = getChildren();
        const originalRows = managedRows._arraySlice();
        const reversedRows = managedRows._arraySlice().reverse();
        return rearrange(originalRows, reversedRows);
    }, [/* Must remain stable */]);


    // The sort function needs to be able to update whoever has all the sortable children.
    // Because that might not be the consumer of *this* hook directly (e.g. a table uses
    // this hook, but it's tbody that actually needs updating), we need to remotely
    // get and set a forceUpdate function.
    const forceUpdateRef = useRef<null | (() => void)>(null);

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
        forceUpdateRef.current?.();
    }, []);

    // The actual sort function.
    const getCompare = useStableGetter<Compare<M>>(userCompare ?? defaultCompare);
    const sort = useCallback((direction: "ascending" | "descending"): Promise<void> | void => {
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
    forceUpdateRef.current = forceUpdate;    // TODO: Mutation during render? I mean, not really -- it's always the same value...right?

    let sorted = children
        .slice()
        .map(child => {
            if (process.env.NODE_ENV === 'development' && child) {
                console.assert(getIndex(child) != null, `getIndex(vnode) must return its 0-based numeric index (e.g. its \`index\` prop)`);
            }
            const mangledIndex = ((child == null ? null : indexMangler(getIndex(child)!)) ?? null);
            const demangledIndex = ((child == null ? null : getIndex(child))) ?? null;
            return ({
                child,
                sort: mangledIndex ?? -1,
                mangledIndex,
                demangledIndex
            })
        }
        )
        .sort((lhs, rhs) => (lhs.sort - rhs.sort))
        .map(({ child, mangledIndex, demangledIndex }) => {
            // "data-mangled-index": mangledIndex, "data-demangled-index": demangledIndex
            if (child)
                return ((adjust || identity)(createElement(child.type as any, { ...child.props, key: demangledIndex }), { mangledIndex, demangledIndex })) ?? null
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
        })
    }, [])

    return {
        rearrangeableChildrenReturn: {
            indexMangler,
            indexDemangler,
            rearrange,
            shuffle,
            reverse,
            sort,
            children: sorted
        }
    };
})


function defaultCompare(lhs: UseRearrangeableChildInfo | undefined, rhs: UseRearrangeableChildInfo | undefined) {
    return compare1(lhs?.index, rhs?.index);    // TODO: This used to have getSortValue() for a better default, but was also kind of redundant with defaultCompare being overrideable?

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
