import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { useManagedChild, useManagedChildren } from "../../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { useMonitoring } from "../../util/use-call-count.js";
import { usePaginatedChild, usePaginatedChildren } from "./use-paginated-children.js";
import { useRearrangeableChild, useRearrangeableChildren } from "./use-rearrangeable-children.js";
import { useStaggeredChild, useStaggeredChildren } from "./use-staggered-children.js";
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
 * @hasChild {@link useProcessedChild}
 *
 * @compositeParams
 */
export function useProcessedChildren({ rearrangeableChildrenParameters, paginatedChildrenParameters, staggeredChildrenParameters, context, managedChildrenParameters, processedIndexManglerParameters }) {
    return useMonitoring(function useProcessedChildren() {
        const childCount = rearrangeableChildrenParameters.children.length;
        const { paginationMax, paginationMin } = paginatedChildrenParameters;
        const { staggered } = staggeredChildrenParameters;
        const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters, });
        const rp = useStableCallback(() => {
            refreshPagination(paginationMin, paginationMax);
        });
        const { processedIndexManglerContext: { indexDemangler, indexMangler } } = context;
        const { rearrangeableChildrenReturn, context: { rearrangeableChildrenContext }, } = useRearrangeableChildren({
            context,
            processedIndexManglerParameters,
            rearrangeableChildrenParameters,
            managedChildrenReturn
        });
        const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, context: { paginatedChildContext } } = usePaginatedChildren({
            managedChildrenReturn: { getChildren: useStableCallback(() => managedChildContext.getChildren()) },
            rovingTabIndexReturn: context.processedChildrenContext,
            childrenHaveFocusReturn: context.processedChildrenContext,
            paginatedChildrenParameters: { paginationMax, paginationMin, childCount },
            processedIndexManglerReturn: { indexDemangler, indexMangler }
        });
        const { context: { staggeredChildContext }, staggeredChildrenReturn } = useStaggeredChildren({
            managedChildrenReturn: { getChildren: useStableCallback(() => managedChildContext.getChildren()) },
            staggeredChildrenParameters: { staggered, childCount },
            //refElementReturn: { getElement: context.processedChildrenContext.getElement }
        });
        return {
            rearrangeableChildrenReturn,
            staggeredChildrenReturn,
            paginatedChildrenReturn,
            context: useMemoObject({
                staggeredChildContext,
                paginatedChildContext,
                managedChildContext,
                rearrangeableChildrenContext
            })
        };
    });
}
;
/**
 * @compositeParams
 */
export function useProcessedChild({ context, info: { index, getElement, ...uinfo }, rearrangeableChildParameters, ...void1 }) {
    return useMonitoring(function useProcessedChild() {
        const { paginatedChildContext, staggeredChildContext } = context;
        const { info: { updateFLIPAnimation } } = useRearrangeableChild({
            context,
            info: { getElement, index },
            rearrangeableChildParameters
        });
        const { info: { setChildCountIfPaginated, setPaginationVisible }, paginatedChildReturn, props: propsPaginated } = usePaginatedChild({ context: { paginatedChildContext }, info: { index } });
        const { info: { setStaggeredVisible, getStaggeredVisible }, staggeredChildReturn, props: propsStaggered, refElementParameters } = useStaggeredChild({ context: { staggeredChildContext }, info: { index } });
        const { managedChildReturn } = useManagedChild({
            context,
            info: {
                index,
                setChildCountIfPaginated,
                setPaginationVisible,
                setStaggeredVisible,
                getStaggeredVisible,
                updateFLIPAnimation,
                getElement,
                ...uinfo
            }
        });
        assertEmptyObject(void1);
        const propsRet = useMergedProps(propsStaggered, propsPaginated);
        return {
            props: propsRet,
            managedChildReturn,
            paginatedChildReturn,
            staggeredChildReturn,
            refElementParameters
        };
    });
}
//# sourceMappingURL=use-processed-children.js.map