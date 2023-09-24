import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { PropNames_RefElementParameters_onElementChange, PropNames_RefElementReturn_getElement } from "../../dom-helpers/use-ref-element.js";
import { PropNames_ChildrenHaveFocusReturn_getAnyFocused } from "../../observers/use-children-have-focus.js";
import { PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect, PropNames_ManagedChildrenParameters_onChildrenCountChange, PropNames_ManagedChildrenParameters_onChildrenMountChange, PropNames_ManagedChildrenReturn_getChildren, useManagedChild, useManagedChildren } from "../../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { monitored } from "../../util/use-call-count.js";
import { PropNames_RovingTabIndexReturn_getTabbableIndex, PropNames_RovingTabIndexReturn_setTabbableIndex } from "../keyboard-navigation/use-roving-tabindex.js";
import { PropNames_PaginatedParameters_childCount, PropNames_PaginatedParameters_paginationMax, PropNames_PaginatedParameters_paginationMin, PropNames_PaginatedReturn_refreshPagination, usePaginatedChild, usePaginatedChildren } from "./use-paginated-children.js";
import { PropNames_RearrangeableParameters_adjust, PropNames_RearrangeableParameters_children, PropNames_RearrangeableParameters_compare, PropNames_RearrangeableParameters_getIndex, PropNames_RearrangeableParameters_onRearranged, PropNames_RearrangeableReturn_indexDemangler, useRearrangeableChildren } from "./use-rearrangeable-children.js";
import { PropNames_StaggeredParameters_childCount, PropNames_StaggeredParameters_staggered, useStaggeredChild, useStaggeredChildren } from "./use-staggered-children.js";
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
export const useProcessedChildren = monitored(function useProcessedChildren({ [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused, [PropNames_ManagedChildrenReturn_getChildren]: getChildren, [PropNames_PaginatedParameters_paginationMax]: paginationMax, [PropNames_PaginatedParameters_paginationMin]: paginationMin, [PropNames_StaggeredParameters_staggered]: staggered, [PropNames_RearrangeableParameters_adjust]: adjust, [PropNames_RearrangeableParameters_onRearranged]: onRearranged, [PropNames_RearrangeableParameters_children]: childrenUnsorted, [PropNames_RearrangeableParameters_compare]: compare, [PropNames_RearrangeableParameters_getIndex]: getIndex, [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex, [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex, [PropNames_RefElementReturn_getElement]: getElement, [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect, [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange, [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange, context, ...void4 }) {
    const childCount = childrenUnsorted.length;
    const { context: { managedChildContext }, ...managedChildrenReturn } = useManagedChildren({
        [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect,
        [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange,
        [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange
    });
    const { ...rearrangeableChildrenReturn } = useRearrangeableChildren({
        [PropNames_RearrangeableParameters_adjust]: adjust,
        [PropNames_RearrangeableParameters_onRearranged]: useStableCallback(() => { refreshPagination(paginationMin, paginationMax); onRearranged?.(); }),
        [PropNames_RearrangeableParameters_children]: childrenUnsorted,
        [PropNames_RearrangeableParameters_compare]: compare,
        [PropNames_RearrangeableParameters_getIndex]: getIndex,
        ...managedChildrenReturn,
        context
    });
    const indexDemangler = rearrangeableChildrenReturn[PropNames_RearrangeableReturn_indexDemangler];
    const { context: { paginatedChildContext }, ...paginatedChildrenReturn } = usePaginatedChildren({
        [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused,
        [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
        [PropNames_PaginatedParameters_childCount]: childCount,
        [PropNames_PaginatedParameters_paginationMax]: paginationMax,
        [PropNames_PaginatedParameters_paginationMin]: paginationMin,
        [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
        [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex,
        [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
    });
    const refreshPagination = paginatedChildrenReturn[PropNames_PaginatedReturn_refreshPagination];
    const { context: { staggeredChildContext }, ...staggeredChildrenReturn } = useStaggeredChildren({
        [PropNames_ManagedChildrenReturn_getChildren]: managedChildrenReturn[PropNames_ManagedChildrenReturn_getChildren],
        [PropNames_StaggeredParameters_childCount]: childCount,
        [PropNames_StaggeredParameters_staggered]: staggered,
        [PropNames_RefElementReturn_getElement]: getElement,
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
    const { info: { setStaggeredVisible, getStaggeredVisible }, props: propsStaggered, [PropNames_RefElementParameters_onElementChange]: onElementChange, ...staggeredChildReturn } = useStaggeredChild({ context: { staggeredChildContext }, info: { index } });
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
        [PropNames_RefElementParameters_onElementChange]: onElementChange,
    };
});
//# sourceMappingURL=use-processed-children.js.map