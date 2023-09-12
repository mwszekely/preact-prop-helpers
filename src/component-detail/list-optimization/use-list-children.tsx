import { ComponentChildren } from "preact";
import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { ManagedChildren, UseGenericChildParameters, UseManagedChildParameters, UseManagedChildReturnType, UseManagedChildrenContext, useManagedChild, useManagedChildren } from "../../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject, useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { ElementProps, Nullable, OmitStrong, TargetedOmit, TargetedPick, VNode, memo, useCallback, useLayoutEffect } from "../../util/lib.js";
import { monitored } from "../../util/use-call-count.js";
import { UsePaginatedChildContext, UsePaginatedChildParameters, UsePaginatedChildReturnType, UsePaginatedChildrenInfo, UsePaginatedChildrenParameters, UsePaginatedChildrenReturnType, usePaginatedChild, usePaginatedChildren } from "./use-paginated-children.js";
import { Compare, UseRearrangeableChildInfo, UseRearrangeableChildrenParameters, UseRearrangeableChildrenReturnType, UseRearrangeableChildrenReturnTypeSelf, useRearrangeableChildren2 } from "./use-rearrangeable-children.js";
import { UseStaggeredChildContext, UseStaggeredChildParameters, UseStaggeredChildReturnType, UseStaggeredChildrenInfo, UseStaggeredChildrenParameters, UseStaggeredChildrenReturnType, useStaggeredChild, useStaggeredChildren } from "./use-staggered-children.js";

export interface UseListChildrenReturnTypeSelf {
    /** 
     * @stable
     * 
     * Call to rearrange the children in ascending or descending order.
     * 
     */
    sort: (direction: "ascending" | "descending") => Promise<void> | void;

    children: VNode;

}

export interface WeirdUseListContextSelf {
    provideManglers(args: Pick<UseRearrangeableChildrenReturnTypeSelf<any>, "indexDemangler" | "indexMangler" | "reverse" | "shuffle"> & Pick<UseListChildrenReturnTypeSelf, "sort">): void;
}

export interface UseListChildrenReturnType<TabbableChildElement extends Element, M extends UseListChildInfo<TabbableChildElement>> extends
    OmitStrong<UseRearrangeableChildrenReturnType<M>, never>,
    OmitStrong<UseStaggeredChildrenReturnType, never>,
    OmitStrong<UsePaginatedChildrenReturnType, never> {
    listChildrenReturn: UseListChildrenReturnTypeSelf;
    context: NormalListChildContext<TabbableChildElement, M>;
}

export interface WeirdUseListChildContext<M extends UseRearrangeableChildInfo> extends UsePaginatedChildContext, UseStaggeredChildContext, UseManagedChildrenContext<M> {
    listContext: WeirdUseListContextSelf;
}

// These are the info parameters required by useRovingTabIndexChild specifically
export type UseListChildInfoKeysParameters = "index";
// These are the info parameters provided by useRovingTabIndexChild specifically
export type UseListChildInfoKeysReturnType = "setLocallyTabbable" | "getLocallyTabbable";

export interface UseListChildParameters<TabbableChildElement extends Element, M extends UseListChildInfo<TabbableChildElement>> extends
    UseGenericChildParameters<NormalListChildContext<TabbableChildElement, M>, Pick<UseListChildInfo<TabbableChildElement>, UseListChildInfoKeysParameters>>,
    Pick<UsePaginatedChildParameters, never>,
    Pick<UseStaggeredChildParameters, never>,
    Pick<UseManagedChildParameters<M>, never> {
    listChildParameters: UseListChildParametersSelf;
}

export interface UseListChildParametersSelf {
    children: ElementProps<any>["children"];
}

export interface NormalListChildContext<TabbableChildElement extends Element, M extends UseListChildInfo<TabbableChildElement>> extends UsePaginatedChildContext, UseStaggeredChildContext, UseManagedChildrenContext<M> { }

export interface UseListChildReturnType<TabbableChildElement extends Element, M extends UseListChildInfo<TabbableChildElement>> extends
    Pick<UsePaginatedChildReturnType<TabbableChildElement>, "paginatedChildReturn" | "props">,
    Pick<UseStaggeredChildReturnType<TabbableChildElement>, "staggeredChildReturn">,
    Pick<UseManagedChildReturnType<M>, "managedChildReturn"> {
    listChildReturn: UseListChildReturnTypeSelf;
}

export interface UseListChildReturnTypeSelf {
    children: ComponentChildren | null;
}

export interface UseListChildInfo<TabbableChildElement extends Element> extends UseRearrangeableChildInfo, UsePaginatedChildrenInfo<TabbableChildElement>, UseStaggeredChildrenInfo {
    // getSortValue(): unknown;
}


export interface UseListChildrenParametersSelf<M extends UseRearrangeableChildInfo> {
    /**
     * Controls how values compare against each other when `sort` is called.
     * 
     * If null, a default sort is used that assumes `getSortValue` returns a value that works well with the `-` operator (so, like, a number, string, `Date`, `null`, etc.)
     * 
     * @param lhs - The first value to compare
     * @param rhs - The second value to compare
     */
    compare: Nullable<Compare<M>>;

    children: VNode[];
}

/**
 * All of these functions **MUST** be stable across renders.
 */
export interface UseListChildrenParameters<ParentElement extends Element, TabbableChildElement extends Element, M extends UseRearrangeableChildInfo> extends
    OmitStrong<UseRearrangeableChildrenParameters<M>, "managedChildrenReturn">,
    OmitStrong<UseStaggeredChildrenParameters, "managedChildrenReturn" | "staggeredChildrenParameters">,
    TargetedOmit<UseStaggeredChildrenParameters, "staggeredChildrenParameters", "childCount">,
    Pick<UsePaginatedChildrenParameters<ParentElement, TabbableChildElement>, "refElementReturn" | "rovingTabIndexReturn">,
    TargetedOmit<UsePaginatedChildrenParameters<ParentElement, TabbableChildElement>, "paginatedChildrenParameters", "childCount"> {
    listChildrenParameters: UseListChildrenParametersSelf<M>;
    context: TargetedPick<WeirdUseListChildContext<M>, "listContext", "provideManglers">;
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
export const useListChildren = monitored(function useListChildren<ParentElement extends Element, TabbableChildElement extends Element>({
    rearrangeableChildrenParameters,
    listChildrenParameters: { children, compare: userCompare },
    paginatedChildrenParameters,
    refElementReturn,
    rovingTabIndexReturn,
    staggeredChildrenParameters,
    context: { listContext: { provideManglers } }
}: UseListChildrenParameters<ParentElement, TabbableChildElement, UseListChildInfo<TabbableChildElement>>): UseListChildrenReturnType<TabbableChildElement, UseListChildInfo<TabbableChildElement>> {
    type M = UseListChildInfo<TabbableChildElement>;

    const getCompare = useStableGetter<Compare<M>>(userCompare ?? defaultCompare);
    //const [childCount, setChildCount] = useState<null | number>(null);
    const childCount = children.length;
    const { paginationMax, paginationMin } = paginatedChildrenParameters;
    const { staggered } = staggeredChildrenParameters;

    const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren<M>({
        managedChildrenParameters: {
            /*onChildrenCountChange: useStableCallback((count: number) => {
               if (paginationMax != null || paginationMin != null || staggered) {
                   debugger;
                   setChildCount(count);
                   const min = (paginationMin ?? 0);
                   const max = (paginationMax ?? count);
                   for (let i = min; i < max; ++i) {
                       getChildren().getAt(i)?.setChildCountIfPaginated(count);
                   }
               }
               else {
                   // TODO: Make this debug only.
                   setChildCount(null);
               }
           }),*/
        }
    })

    const { rearrangeableChildrenReturn } = useRearrangeableChildren2<M>({ rearrangeableChildrenParameters, managedChildrenReturn });
    const { rearrange, useRearrangedChildren } = rearrangeableChildrenReturn;
    const { getChildren } = managedChildrenReturn;

    // The actual sort function.
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

    const {
        paginatedChildrenReturn,
        paginatedChildrenReturn: { refreshPagination },
        context: { paginatedChildContext }
    }: UsePaginatedChildrenReturnType = usePaginatedChildren<ParentElement, TabbableChildElement, M>({
        refElementReturn,
        managedChildrenReturn: { getChildren: useStableCallback(() => managedChildContext.getChildren()) },
        rovingTabIndexReturn,
        paginatedChildrenParameters: { paginationMax, paginationMin, childCount },
        rearrangeableChildrenReturn,
    });

    const {
        context: { staggeredChildContext },
        staggeredChildrenReturn
    }: UseStaggeredChildrenReturnType = useStaggeredChildren({
        managedChildrenReturn: { getChildren: useStableCallback((): ManagedChildren<M> => managedChildContext.getChildren()) },
        staggeredChildrenParameters: { staggered, childCount }
    });

    useLayoutEffect(() => {
        provideManglers({
            indexDemangler: rearrangeableChildrenReturn.indexDemangler,
            indexMangler: rearrangeableChildrenReturn.indexMangler,
            reverse: rearrangeableChildrenReturn.reverse,
            shuffle: rearrangeableChildrenReturn.shuffle,
            sort
        })
    }, [])

    return {
        listChildrenReturn: {
            sort,
            children: <RC useRearrangedChildren={useRearrangedChildren}>{children}</RC>
        },
        rearrangeableChildrenReturn,
        staggeredChildrenReturn,
        paginatedChildrenReturn,
        context: useMemoObject<NormalListChildContext<TabbableChildElement, M>>({
            staggeredChildContext,
            paginatedChildContext,
            managedChildContext
        })
    };
});

export const useListChild = monitored(function useListChild<TabbableChildElement extends Element>({
    context,
    info: { index },
    listChildParameters: { children: childrenIn }
}: UseListChildParameters<TabbableChildElement, UseListChildInfo<TabbableChildElement>>): UseListChildReturnType<TabbableChildElement, UseListChildInfo<TabbableChildElement>> {
    type M = UseListChildInfo<TabbableChildElement>;

    const { paginatedChildContext, staggeredChildContext } = context;
    const { info: { setChildCountIfPaginated, setPaginationVisible }, paginatedChildReturn, props: propsPaginated } = usePaginatedChild<TabbableChildElement>({ context: { paginatedChildContext }, info: { index } });
    const { info: { setStaggeredVisible }, staggeredChildReturn, props: propsStaggered } = useStaggeredChild<TabbableChildElement>({ context: { staggeredChildContext }, info: { index } });
    const { managedChildReturn } = useManagedChild<M>({
        context,
        info: {
            index,
            setChildCountIfPaginated,
            setPaginationVisible,
            setStaggeredVisible
        }
    });
    const { hideBecausePaginated } = paginatedChildReturn;
    const { hideBecauseStaggered } = staggeredChildReturn;


    let children: ElementProps<any>["children"] = childrenIn;

    const propsRet = useMergedProps<TabbableChildElement>(propsStaggered, propsPaginated);

    if (hideBecausePaginated || hideBecauseStaggered)
        children = null;

    return {
        props: propsRet,
        managedChildReturn,
        paginatedChildReturn,
        staggeredChildReturn,
        listChildReturn: {
            children
        }
    }
})

const RC = memo(({ children, useRearrangedChildren }: { children: VNode[], useRearrangedChildren: UseRearrangeableChildrenReturnTypeSelf<any>["useRearrangedChildren"] }) => {
    return (
        <>
            {useRearrangedChildren(children)}
        </>
    )
});

/*
const CTX = createContext<UsePaginatedChildContext & UseStaggeredChildContext & UseManagedChildrenContext<UseListChildInfo<any>>>(null!);

const PSC = memo(({ index, children }: { children: VNode, index: number }) => {
    const context = useContext(CTX);
    const { paginatedChildContext, staggeredChildContext } = context;
    const { info: { setChildCountIfPaginated, setPaginationVisible }, paginatedChildReturn, props: propsPaginated } = usePaginatedChild({ context: { paginatedChildContext }, info: { index } });
    const { info: { setStaggeredVisible }, staggeredChildReturn, props: propsStaggered } = useStaggeredChild({ context: { staggeredChildContext }, info: { index } });
    const { } = useManagedChild<UseListChildInfo<any>>({
        context,
        info: {
            index,
            setChildCountIfPaginated,
            setPaginationVisible,
            setStaggeredVisible
        }
    });
    const { hideBecausePaginated } = paginatedChildReturn;
    const { hideBecauseStaggered } = staggeredChildReturn;

    if (hideBecausePaginated || hideBecauseStaggered)
        return null;

    return (usePropsOnChildren(children, useMergedProps(propsStaggered, propsPaginated), undefined));
})
*/

function defaultCompare<TabbableChildElement extends Element>(lhs: UseListChildInfo<TabbableChildElement> | undefined, rhs: UseListChildInfo<TabbableChildElement> | undefined) {
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
