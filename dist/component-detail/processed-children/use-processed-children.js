import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { useManagedChild, useManagedChildren } from "../../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { PropNames } from "../../util/types.js";
import { monitored } from "../../util/use-call-count.js";
import { usePaginatedChild, usePaginatedChildren } from "./use-paginated-children.js";
import { useRearrangeableChildren } from "./use-rearrangeable-children.js";
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
 * @compositeParams
 *
 * @hasChild {@link useProcessedChild}
 */
export const useProcessedChildren = monitored(function useProcessedChildren({ [PropNames.ChildrenHaveFocusReturn.getAnyFocused]: getAnyFocused, [PropNames.ManagedChildrenReturn.getChildren]: getChildren, [PropNames.PaginatedParameters.paginationMax]: paginationMax, [PropNames.PaginatedParameters.paginationMin]: paginationMin, [PropNames.StaggeredParameters.staggered]: staggered, [PropNames.RearrangeableParameters.adjust]: adjust, [PropNames.RearrangeableParameters.onRearranged]: onRearranged, [PropNames.RearrangeableParameters.children]: childrenUnsorted, [PropNames.RearrangeableParameters.compare]: compare, [PropNames.RearrangeableParameters.getIndex]: getIndex, [PropNames.RovingTabIndexReturn.getTabbableIndex]: getTabbableIndex, [PropNames.RovingTabIndexReturn.setTabbableIndex]: setTabbableIndex, [PropNames.RefElementReturn.getElement]: getElement, [PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect]: onAfterChildLayoutEffect, [PropNames.ManagedChildrenParameters.onChildrenCountChange]: onChildrenCountChange, [PropNames.ManagedChildrenParameters.onChildrenMountChange]: onChildrenMountChange, context, ...void4 }) {
    const childCount = childrenUnsorted.length;
    const { context: { managedChildContext }, ...managedChildrenReturn } = useManagedChildren({
        [PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect]: onAfterChildLayoutEffect,
        [PropNames.ManagedChildrenParameters.onChildrenCountChange]: onChildrenCountChange,
        [PropNames.ManagedChildrenParameters.onChildrenMountChange]: onChildrenMountChange
    });
    const { ...rearrangeableChildrenReturn } = useRearrangeableChildren({
        [PropNames.RearrangeableParameters.adjust]: adjust,
        [PropNames.RearrangeableParameters.onRearranged]: useStableCallback(() => { refreshPagination(paginationMin, paginationMax); onRearranged?.(); }),
        [PropNames.RearrangeableParameters.children]: childrenUnsorted,
        [PropNames.RearrangeableParameters.compare]: compare,
        [PropNames.RearrangeableParameters.getIndex]: getIndex,
        ...managedChildrenReturn,
        context
    });
    const indexDemangler = rearrangeableChildrenReturn[PropNames.RearrangeableReturn.indexDemangler];
    const { context: { paginatedChildContext }, ...paginatedChildrenReturn } = usePaginatedChildren({
        [PropNames.ChildrenHaveFocusReturn.getAnyFocused]: getAnyFocused,
        [PropNames.ManagedChildrenReturn.getChildren]: getChildren,
        [PropNames.PaginatedParameters.childCount]: childCount,
        [PropNames.PaginatedParameters.paginationMax]: paginationMax,
        [PropNames.PaginatedParameters.paginationMin]: paginationMin,
        [PropNames.RearrangeableReturn.indexDemangler]: indexDemangler,
        [PropNames.RovingTabIndexReturn.getTabbableIndex]: getTabbableIndex,
        [PropNames.RovingTabIndexReturn.setTabbableIndex]: setTabbableIndex,
    });
    const refreshPagination = paginatedChildrenReturn[PropNames.PaginatedReturn.refreshPagination];
    const { context: { staggeredChildContext }, ...staggeredChildrenReturn } = useStaggeredChildren({
        [PropNames.ManagedChildrenReturn.getChildren]: managedChildrenReturn[PropNames.ManagedChildrenReturn.getChildren],
        [PropNames.StaggeredParameters.childCount]: childCount,
        [PropNames.StaggeredParameters.staggered]: staggered,
        [PropNames.RefElementReturn.getElement]: getElement,
    });
    assertEmptyObject(void4);
    return {
        ...paginatedChildrenReturn,
        ...rearrangeableChildrenReturn,
        ...staggeredChildrenReturn,
        context: useMemoObject({
            staggeredChildContext,
            paginatedChildContext,
            managedChildContext
        })
    };
});
export const useProcessedChild = monitored(function useProcessedChild({ context, info: { index, ...uinfo }, }) {
    const { paginatedChildContext, staggeredChildContext } = context;
    const { info: { setChildCountIfPaginated, setPaginationVisible }, props: propsPaginated, ...paginatedChildReturn } = usePaginatedChild({ context: { paginatedChildContext }, info: { index } });
    const { info: { setStaggeredVisible, getStaggeredVisible }, props: propsStaggered, [PropNames.RefElementParameters.onElementChange]: onElementChange, ...staggeredChildReturn } = useStaggeredChild({ context: { staggeredChildContext }, info: { index } });
    const { ...managedChildReturn } = useManagedChild({
        context,
        info: {
            index,
            setChildCountIfPaginated,
            setPaginationVisible,
            setStaggeredVisible,
            getStaggeredVisible,
            ...uinfo
        }
    });
    const propsRet = useMergedProps(propsStaggered, propsPaginated);
    return {
        props: propsRet,
        ...managedChildReturn,
        ...paginatedChildReturn,
        ...staggeredChildReturn,
        [PropNames.RefElementParameters.onElementChange]: onElementChange,
    };
});
//# sourceMappingURL=use-processed-children.js.map