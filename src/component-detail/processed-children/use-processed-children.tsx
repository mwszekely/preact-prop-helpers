import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { UseChildrenHaveFocusReturnTypeSelf } from "../../observers/use-children-have-focus.js";
import { ManagedChildren, UseGenericChildParameters, UseManagedChildParameters, UseManagedChildReturnType, UseManagedChildrenContext, UseManagedChildrenParameters, useManagedChild, useManagedChildren } from "../../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { OmitStrong, TargetedOmit, useCallback } from "../../util/lib.js";
import { monitored } from "../../util/use-call-count.js";
import { UseRovingTabIndexReturnTypeSelf } from "../keyboard-navigation/use-roving-tabindex.js";
import { UsePaginatedChildContext, UsePaginatedChildParameters, UsePaginatedChildReturnType, UsePaginatedChildrenInfo, UsePaginatedChildrenParameters, UsePaginatedChildrenReturnType, usePaginatedChild, usePaginatedChildren } from "./use-paginated-children.js";
import { UseRearrangeableChildInfo, UseRearrangeableChildParameters, UseRearrangeableChildrenParameters, UseRearrangeableChildrenReturnType, UseRearrangedChildrenContext, useRearrangeableChildren } from "./use-rearrangeable-children.js";
import { UseStaggeredChildContext, UseStaggeredChildParameters, UseStaggeredChildReturnType, UseStaggeredChildrenInfo, UseStaggeredChildrenParameters, UseStaggeredChildrenReturnType, useStaggeredChild, useStaggeredChildren } from "./use-staggered-children.js";

export interface UseProcessedChildrenReturnType<TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement>> extends
    OmitStrong<UseRearrangeableChildrenReturnType<M>, never>,
    OmitStrong<UseStaggeredChildrenReturnType, never>,
    OmitStrong<UsePaginatedChildrenReturnType, never> {
    context: UseProcessedChildContext<TabbableChildElement, M>;
}

// These are the info parameters required by useRovingTabIndexChild specifically
export type UseProcessedChildInfoKeysParameters = "index";
// These are the info parameters provided by useRovingTabIndexChild specifically
export type UseProcessedChildInfoKeysReturnType = "setLocallyTabbable" | "getLocallyTabbable";

export interface UseProcessedChildParameters<TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement>> extends
    UseGenericChildParameters<UseProcessedChildContext<TabbableChildElement, M>, Pick<M, UseProcessedChildInfoKeysParameters>>,
    OmitStrong<UsePaginatedChildParameters, "info">,
    OmitStrong<UseStaggeredChildParameters<M>, "info">,
    OmitStrong<UseRearrangeableChildParameters<M>, never>,
    Pick<UseManagedChildParameters<M>, never> {
    context: UseProcessedChildContext<TabbableChildElement, M>;
    info: Pick<M, UseProcessedChildInfoKeysParameters>;
}

export interface UseProcessedChildContext<TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement>> extends
    UsePaginatedChildContext,
    UseStaggeredChildContext,
    UseManagedChildrenContext<M> { }

export interface UseProcessedChildReturnType<TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement>> extends
    OmitStrong<UsePaginatedChildReturnType<TabbableChildElement>, "info">,
    OmitStrong<UseStaggeredChildReturnType<TabbableChildElement>, "info" | "props">,
    Pick<UseManagedChildReturnType<M>, "managedChildReturn"> {
}

export interface UseProcessedChildInfo<TabbableChildElement extends Element> extends UseRearrangeableChildInfo, UsePaginatedChildrenInfo<TabbableChildElement>, UseStaggeredChildrenInfo {

}

export interface UseProcessedChildrenContextSelf extends Pick<UseRovingTabIndexReturnTypeSelf, "getTabbableIndex" | "setTabbableIndex">,
    Pick<UseChildrenHaveFocusReturnTypeSelf, "getAnyFocused"> { }

export interface UseProcessedChildrenContext extends UseRearrangedChildrenContext {
    processedChildrenContext: UseProcessedChildrenContextSelf;
}

/**
 * All of these functions **MUST** be stable across renders.
 */
export interface UseProcessedChildrenParameters<TabbableChildElement extends Element, M extends UseRearrangeableChildInfo> extends
    OmitStrong<UseRearrangeableChildrenParameters<M>, "managedChildrenReturn">,
    OmitStrong<UseStaggeredChildrenParameters, "managedChildrenReturn" | "staggeredChildrenParameters">,
    TargetedOmit<UseStaggeredChildrenParameters, "staggeredChildrenParameters", "childCount">,
    Pick<UseManagedChildrenParameters<M>, "managedChildrenParameters">,
    TargetedOmit<UsePaginatedChildrenParameters<TabbableChildElement>, "paginatedChildrenParameters", "childCount"> {
    context: UseProcessedChildrenContext;
}

/**
 * Hook that allows for optimization (staggering, pagination) and rearranging (sorting, shuffling, etc.) of large arrays of children.
 * 
 * @remarks This is separate from `useManagedChildren` (and its descendants, like `useListNavigation), 
 * but takes advantage of its flexibility (especially with its allowing for "holes" of missing children) 
 * to prevent all children from rendering at once on mount.
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
 * @hasChild {@link useProcessedChild}
 */
export const useProcessedChildren = monitored(function useProcessedChildren<TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement>>({
    rearrangeableChildrenParameters: { onRearranged, children: childrenUnsorted, ...rearrangeableChildrenParameters },
    paginatedChildrenParameters,
    staggeredChildrenParameters,
    context,
    managedChildrenParameters
}: UseProcessedChildrenParameters<TabbableChildElement, M>): UseProcessedChildrenReturnType<TabbableChildElement, M> {

    const childCount = childrenUnsorted.length;
    const { paginationMax, paginationMin } = paginatedChildrenParameters;
    const { staggered } = staggeredChildrenParameters;

    const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren<M>({ managedChildrenParameters, });

    const rp = useStableCallback(() => {
        refreshPagination(paginationMin, paginationMax);
    })

    const { rearrangeableChildrenReturn } = useRearrangeableChildren<M>({
        rearrangeableChildrenParameters: {
            onRearranged: useCallback((phase) => {
                // This kind of weird "phase" jank is to account for this oddity:
                // `refreshPagination` is auto-called on mount by usePaginatedChildren,
                // but needs to be called manually during other times. Also, due to
                // a circular dependency, it needs `useStableCallback`, so can't be
                // called during render anyway.
                if (phase != 'render') {
                    rp();
                }

                onRearranged?.(phase);
            }, []),
            children: childrenUnsorted,
            ...rearrangeableChildrenParameters,
        },
        managedChildrenReturn,
        context
    });

    const {
        paginatedChildrenReturn,
        paginatedChildrenReturn: { refreshPagination },
        context: { paginatedChildContext }
    }: UsePaginatedChildrenReturnType = usePaginatedChildren<TabbableChildElement>({
        managedChildrenReturn: { getChildren: useStableCallback(() => managedChildContext.getChildren()) },
        rovingTabIndexReturn: context.processedChildrenContext,
        childrenHaveFocusReturn: context.processedChildrenContext,
        paginatedChildrenParameters: { paginationMax, paginationMin, childCount },
        rearrangeableChildrenReturn,
    });

    const {
        context: { staggeredChildContext },
        staggeredChildrenReturn
    }: UseStaggeredChildrenReturnType = useStaggeredChildren({
        managedChildrenReturn: { getChildren: useStableCallback((): ManagedChildren<M> => managedChildContext.getChildren()) },
        staggeredChildrenParameters: { staggered, childCount },
        //refElementReturn: { getElement: context.processedChildrenContext.getElement }
    });

    return {
        rearrangeableChildrenReturn,
        staggeredChildrenReturn,
        paginatedChildrenReturn,
        context: useMemoObject<UseProcessedChildContext<TabbableChildElement, M>>({
            staggeredChildContext,
            paginatedChildContext,
            managedChildContext
        })
    };
});

export const useProcessedChild = monitored(function useProcessedChild<TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement> = UseProcessedChildInfo<TabbableChildElement>>({
    context,
    info: { index, ...uinfo },
    ...void1
}: UseProcessedChildParameters<TabbableChildElement, M>): UseProcessedChildReturnType<TabbableChildElement, M> {
    const { paginatedChildContext, staggeredChildContext } = context;
    const { info: { setChildCountIfPaginated, setPaginationVisible }, paginatedChildReturn, props: propsPaginated } = usePaginatedChild<TabbableChildElement>({ context: { paginatedChildContext }, info: { index } });
    const { info: { setStaggeredVisible, getStaggeredVisible }, staggeredChildReturn, props: propsStaggered, refElementParameters } = useStaggeredChild<TabbableChildElement, M>({ context: { staggeredChildContext }, info: { index } });
    const { managedChildReturn } = useManagedChild<M>({
        context,
        info: {
            index,
            setChildCountIfPaginated,
            setPaginationVisible,
            setStaggeredVisible,
            getStaggeredVisible,
            ...uinfo
        } as M
    });

    assertEmptyObject(void1);

    const propsRet = useMergedProps<TabbableChildElement>(propsStaggered, propsPaginated);

    return {
        props: propsRet,
        managedChildReturn,
        paginatedChildReturn,
        staggeredChildReturn,
        refElementParameters
    }
})
