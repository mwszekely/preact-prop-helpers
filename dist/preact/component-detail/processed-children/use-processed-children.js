import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { $refElementParameters } from "../../dom-helpers/use-ref-element.js";
import { $childrenHaveFocusReturn } from "../../observers/use-children-have-focus.js";
import { $getChildren, $index, $managedChildContext, $managedChildReturn, $managedChildrenParameters, $managedChildrenReturn, useManagedChild, useManagedChildren } from "../../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { monitored } from "../../util/use-call-count.js";
import { $rovingTabIndexReturn } from "../keyboard-navigation/use-roving-tabindex.js";
import { $setChildCountIfPaginated, $setPaginationVisible, $childCount, $paginationMax, $paginationMin, $refreshPagination, $paginatedChildContext, $paginatedChildReturn, $paginatedChildrenParameters, $paginatedChildrenReturn, usePaginatedChild, usePaginatedChildren } from "./use-paginated-children.js";
import { $children, $onRearranged, $rearrangeableChildrenParameters, $rearrangeableChildrenReturn, useRearrangeableChildren } from "./use-rearrangeable-children.js";
import { $getStaggeredVisible, $setStaggeredVisible, $staggered, $staggeredChildContext, $staggeredChildReturn, $staggeredChildrenParameters, $staggeredChildrenReturn, useStaggeredChild, useStaggeredChildren } from "./use-staggered-children.js";
export const $processedChildrenContext = Symbol();
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
export const useProcessedChildren = monitored(function useProcessedChildren({ [$rearrangeableChildrenParameters]: { [$onRearranged]: onRearranged, [$children]: childrenUnsorted, ...rearrangeableChildrenParameters }, [$paginatedChildrenParameters]: paginatedChildrenParameters, [$staggeredChildrenParameters]: staggeredChildrenParameters, context, [$managedChildrenParameters]: managedChildrenParameters }) {
    const childCount = childrenUnsorted.length;
    const { [$paginationMax]: paginationMax, [$paginationMin]: paginationMin } = paginatedChildrenParameters;
    const { [$staggered]: staggered } = staggeredChildrenParameters;
    const { context: { [$managedChildContext]: managedChildContext }, [$managedChildrenReturn]: managedChildrenReturn } = useManagedChildren({ [$managedChildrenParameters]: managedChildrenParameters });
    const { [$rearrangeableChildrenReturn]: rearrangeableChildrenReturn } = useRearrangeableChildren({
        [$rearrangeableChildrenParameters]: {
            [$onRearranged]: useStableCallback(() => { refreshPagination(paginationMin, paginationMax); onRearranged?.(); }),
            [$children]: childrenUnsorted,
            ...rearrangeableChildrenParameters,
        },
        [$managedChildrenReturn]: managedChildrenReturn,
        context
    });
    const { [$paginatedChildrenReturn]: paginatedChildrenReturn, [$paginatedChildrenReturn]: { [$refreshPagination]: refreshPagination }, context: { [$paginatedChildContext]: paginatedChildContext } } = usePaginatedChildren({
        [$managedChildrenReturn]: { [$getChildren]: useStableCallback(() => managedChildContext[$getChildren]()) },
        [$rovingTabIndexReturn]: context[$processedChildrenContext],
        [$childrenHaveFocusReturn]: context[$processedChildrenContext],
        [$paginatedChildrenParameters]: { [$paginationMax]: paginationMax, [$paginationMin]: paginationMin, [$childCount]: childCount },
        [$rearrangeableChildrenReturn]: rearrangeableChildrenReturn,
    });
    const { context: { [$staggeredChildContext]: staggeredChildContext }, [$staggeredChildrenReturn]: staggeredChildrenReturn } = useStaggeredChildren({
        [$managedChildrenReturn]: { [$getChildren]: useStableCallback(() => managedChildContext[$getChildren]()) },
        [$staggeredChildrenParameters]: { [$staggered]: staggered, [$childCount]: childCount },
        //refElementReturn: { getElement: context.processedChildrenContext.getElement }
    });
    return {
        [$rearrangeableChildrenReturn]: rearrangeableChildrenReturn,
        [$staggeredChildrenReturn]: staggeredChildrenReturn,
        [$paginatedChildrenReturn]: paginatedChildrenReturn,
        context: useMemoObject({
            [$staggeredChildContext]: staggeredChildContext,
            [$paginatedChildContext]: paginatedChildContext,
            [$managedChildContext]: managedChildContext
        })
    };
});
export const useProcessedChild = monitored(function useProcessedChild({ context, info: { [$index]: index, ...uinfo }, }) {
    const { [$paginatedChildContext]: paginatedChildContext, [$staggeredChildContext]: staggeredChildContext } = context;
    const { info: { [$setChildCountIfPaginated]: setChildCountIfPaginated, [$setPaginationVisible]: setPaginationVisible }, [$paginatedChildReturn]: paginatedChildReturn, props: propsPaginated } = usePaginatedChild({ context: { [$paginatedChildContext]: paginatedChildContext }, info: { index } });
    const { info: { [$setStaggeredVisible]: setStaggeredVisible, [$getStaggeredVisible]: getStaggeredVisible }, [$staggeredChildReturn]: staggeredChildReturn, props: propsStaggered, [$refElementParameters]: refElementParameters } = useStaggeredChild({ context: { [$staggeredChildContext]: staggeredChildContext }, info: { [$index]: index } });
    const { [$managedChildReturn]: managedChildReturn } = useManagedChild({
        context,
        info: {
            [$index]: index,
            [$setChildCountIfPaginated]: setChildCountIfPaginated,
            [$setPaginationVisible]: setPaginationVisible,
            [$setStaggeredVisible]: setStaggeredVisible,
            [$getStaggeredVisible]: getStaggeredVisible,
            ...uinfo
        }
    });
    const propsRet = useMergedProps(propsStaggered, propsPaginated);
    return {
        props: propsRet,
        [$managedChildReturn]: managedChildReturn,
        [$paginatedChildReturn]: paginatedChildReturn,
        [$staggeredChildReturn]: staggeredChildReturn,
        [$refElementParameters]: refElementParameters
    };
});
//# sourceMappingURL=use-processed-children.js.map