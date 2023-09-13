import { ComponentChildren } from "preact";
import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { ManagedChildren, UseGenericChildParameters, UseManagedChildParameters, UseManagedChildReturnType, UseManagedChildrenContext, useManagedChild, useManagedChildren } from "../../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { ElementProps, OmitStrong, TargetedOmit, VNode, useLayoutEffect } from "../../util/lib.js";
import { monitored } from "../../util/use-call-count.js";
import { UsePaginatedChildContext, UsePaginatedChildParameters, UsePaginatedChildReturnType, UsePaginatedChildrenInfo, UsePaginatedChildrenParameters, UsePaginatedChildrenReturnType, usePaginatedChild, usePaginatedChildren } from "./use-paginated-children.js";
import { UseRearrangeableChildInfo, UseRearrangeableChildrenParameters, UseRearrangeableChildrenReturnType, UseRearrangeableChildrenReturnTypeSelf, useRearrangeableChildren2 } from "./use-rearrangeable-children.js";
import { UseStaggeredChildContext, UseStaggeredChildParameters, UseStaggeredChildReturnType, UseStaggeredChildrenInfo, UseStaggeredChildrenParameters, UseStaggeredChildrenReturnType, useStaggeredChild, useStaggeredChildren } from "./use-staggered-children.js";

export interface UseListChildrenReturnTypeSelf {
    children: VNode;

}

export interface WeirdUseListContextSelf {
    provideManglers(args: Pick<UseRearrangeableChildrenReturnTypeSelf<any>, "indexDemangler" | "indexMangler" | "reverse" | "shuffle" | "sort">): void;
}

export interface UseListChildrenReturnType<TabbableChildElement extends Element, M extends UseListChildInfo<TabbableChildElement>> extends
    OmitStrong<UseRearrangeableChildrenReturnType<M>, never>,
    OmitStrong<UseStaggeredChildrenReturnType, never>,
    OmitStrong<UsePaginatedChildrenReturnType, never> {
    listChildrenReturn: UseListChildrenReturnTypeSelf;
    context: NormalListChildContext<TabbableChildElement, M>;
}

export interface WeirdUseListChildContext {
    listContext: WeirdUseListContextSelf;
}

// These are the info parameters required by useRovingTabIndexChild specifically
export type UseListChildInfoKeysParameters = "index";
// These are the info parameters provided by useRovingTabIndexChild specifically
export type UseListChildInfoKeysReturnType = "setLocallyTabbable" | "getLocallyTabbable";

export interface UseListChildParameters<TabbableChildElement extends Element, M extends UseListChildInfo<TabbableChildElement>> extends
    UseGenericChildParameters<NormalListChildContext<TabbableChildElement, M>, Pick<UseListChildInfo<TabbableChildElement>, UseListChildInfoKeysParameters>>,
    Pick<UsePaginatedChildParameters, never>,
    Pick<UseStaggeredChildParameters, "refElementReturn">,
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
    context: WeirdUseListChildContext;
}

/**
 * Hook that allows for optimization (staggering, pagination) and rearranging (sorting, shuffling, etc.) of large arrays of children.
 * 
 * @remarks This is separate from `useManagedChildren`, but takes advantage of its flexibility, especially with its
 * allowing for "holes" of missing children, to prevent all children from rendering at once on mount.
 * 
 * Staggering and pagination exists because no matter how well optimized your CSS and Javascript for each child is,
 * eventually some number of children will cause jank when mounting them all at once. Considering that maybe 1% of them
 * will actually be visible at first within the screen, with the other 99% wasting time doing things off-screen, it makes
 * sense to only show what's necessary at first, and delay as much as possible.
 * 
 * If you're loading a dynamic list of data, where you don't know the length in advance 
 * (but that it could be more than, say, 30 - 50 at any point), 
 * this is all but essential for a good user experience.
 * 
 * * 100 children without staggering/pagination is "start to feel jank on mobile"
 * * 1000 children without staggering/pagination is "start to feel jank on desktop"
 * * 10000 children staggered/paginated is "start to feel jank on desktop"
 * * 100000 children is "you're probably out of memory"
 * 
 * <br />
 * 
 * Additionally, this hook allows for reorganization of its children. A default `sort` and `shuffle` are provided,
 * but you can implement any arbitrary reordering.
 * 
 * <br />
 * 
 * The main limitation of this hook is that, unlike hooks that use/derive from `useManagedChildren` 
 * (in which children can arbitrarily be anywhere descendant in the tree), children here ***must***
 * be in a single, sequential array (gaps are still fine).
 * 
 * This is separate from `useListNavigation` and friends for performance reasons -- if a child is
 * hidden because it's paginated out or not staggered in yet, then we want to avoid running the normal
 * child list logic (which is as fast as possible, but still only so fast).
 * 
 * Similarly, it can be useful for the children to be in a separate component for performance reasons, which
 * is another reason to separate this logic from `useListNavigation`.
 * 
 * Finally, `useListNavigation` imposes no requirements on how your children are laid out in the DOM, but
 * this hook **requires** all children be in one contiguous array.
 * 
 * @compositeParams
 * 
 * @hasChild {@link useListChild}
 */
export const useListChildren = monitored(function useListChildren<ParentElement extends Element, TabbableChildElement extends Element>({
    rearrangeableChildrenParameters: { onRearranged, ...rearrangeableChildrenParameters },
    listChildrenParameters: { children },
    paginatedChildrenParameters,
    refElementReturn,
    rovingTabIndexReturn,
    staggeredChildrenParameters,
    context: { listContext: { provideManglers } }
}: UseListChildrenParameters<ParentElement, TabbableChildElement, UseListChildInfo<TabbableChildElement>>): UseListChildrenReturnType<TabbableChildElement, UseListChildInfo<TabbableChildElement>> {
    type M = UseListChildInfo<TabbableChildElement>;

    //const [childCount, setChildCount] = useState<null | number>(null);
    const childCount = children.length;
    const { paginationMax, paginationMin } = paginatedChildrenParameters;
    const { staggered } = staggeredChildrenParameters;

    const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren<M>({
        managedChildrenParameters: {
        }
    })

    const { rearrangeableChildrenReturn } = useRearrangeableChildren2<M>({ rearrangeableChildrenParameters: { onRearranged: useStableCallback(() => { refreshPagination(paginationMin, paginationMax); onRearranged?.(); }), ...rearrangeableChildrenParameters, }, managedChildrenReturn });
    const { useRearrangedChildren } = rearrangeableChildrenReturn;

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

    // The parent useListNavigation uses these for various reasons.
    // If it called useRearrangeableChildren directly, it would have this information,
    // but we're one level deeper in the tree, so once we mount we need to give it to them.
    useLayoutEffect(() => {
        provideManglers({
            indexDemangler: rearrangeableChildrenReturn.indexDemangler,
            indexMangler: rearrangeableChildrenReturn.indexMangler,
            reverse: rearrangeableChildrenReturn.reverse,
            shuffle: rearrangeableChildrenReturn.shuffle,
            sort: rearrangeableChildrenReturn.sort
        })
    }, [])

    return {
        listChildrenReturn: {
            children: <>{useRearrangedChildren(children)}</>
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
    listChildParameters: { children: childrenIn },
    refElementReturn: { getElement },
}: UseListChildParameters<TabbableChildElement, UseListChildInfo<TabbableChildElement>>): UseListChildReturnType<TabbableChildElement, UseListChildInfo<TabbableChildElement>> {
    type M = UseListChildInfo<TabbableChildElement>;

    const { paginatedChildContext, staggeredChildContext } = context;
    const { info: { setChildCountIfPaginated, setPaginationVisible }, paginatedChildReturn, props: propsPaginated } = usePaginatedChild<TabbableChildElement>({ context: { paginatedChildContext }, info: { index } });
    const { info: { setStaggeredVisible, getStaggeredVisible }, staggeredChildReturn, props: propsStaggered } = useStaggeredChild<TabbableChildElement>({ context: { staggeredChildContext }, info: { index }, refElementReturn: { getElement } });
    const { managedChildReturn } = useManagedChild<M>({
        context,
        info: {
            index,
            setChildCountIfPaginated,
            setPaginationVisible,
            setStaggeredVisible,
            getStaggeredVisible
        }
    });
    const { hideBecausePaginated } = paginatedChildReturn;
    const { hideBecauseStaggered } = staggeredChildReturn;


    let children: ElementProps<any>["children"] = childrenIn;


    let hiding = (hideBecausePaginated || hideBecauseStaggered)

    if (hiding) {
        children = null;
    }

    const propsRet = useMergedProps<TabbableChildElement>(propsStaggered, propsPaginated);
    
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
