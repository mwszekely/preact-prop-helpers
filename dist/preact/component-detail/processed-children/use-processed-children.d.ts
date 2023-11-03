import { UseRefElement } from "../../dom-helpers/use-ref-element.js";
import { UseChildrenHaveFocusReturnTypeSelf } from "../../observers/use-children-have-focus.js";
import { UseManagedChild, UseManagedChildContext, UseManagedChildren } from "../../preact-extensions/use-managed-children.js";
import { Parameter, StandardDepsContext, StandardDepsInfo, StandardDepsOmit, StandardDepsPick, StandardDepsProps, StandardHook } from "../../util/types.js";
import { UseRovingTabIndexReturnTypeSelf } from "../keyboard-navigation/use-roving-tabindex.js";
import { UsePaginatedChild, UsePaginatedChildContext, UsePaginatedChildren, UsePaginatedChildrenInfo } from "./use-paginated-children.js";
import { UseRearrangeableChildInfo, UseRearrangeableChildren, UseRearrangedChildrenContext } from "./use-rearrangeable-children.js";
import { UseStaggeredChild, UseStaggeredChildContext, UseStaggeredChildren, UseStaggeredChildrenInfo } from "./use-staggered-children.js";
export type UseProcessedChildren<TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement>> = StandardHook<"processedChildren", never, [
    StandardDepsContext<UseProcessedChildrenContext>,
    StandardDepsPick<"params", UseManagedChildren<M>>,
    StandardDepsOmit<"params", UseRearrangeableChildren<M>, "managedChildrenReturn">,
    StandardDepsOmit<"params", UseStaggeredChildren, "managedChildrenReturn", [
        StandardDepsPick<"params", UseStaggeredChildren, "staggeredChildrenParameters", "omit", "childCount">
    ]>,
    StandardDepsOmit<"params", UsePaginatedChildren<TabbableChildElement>, "paginatedChildrenParameters" | "rovingTabIndexReturn" | "managedChildrenReturn" | "rearrangeableChildrenReturn" | "childrenHaveFocusReturn", [
        StandardDepsPick<"params", UsePaginatedChildren<TabbableChildElement>, "paginatedChildrenParameters", "omit", "childCount">
    ]>
], never, [
    StandardDepsContext<UseProcessedChildContext<TabbableChildElement, M>>,
    StandardDepsPick<"return", UseManagedChildren<M>>,
    StandardDepsPick<"return", UseRearrangeableChildren<M>>,
    StandardDepsPick<"return", UseStaggeredChildren>,
    StandardDepsPick<"return", UsePaginatedChildren<TabbableChildElement>>
]>;
export type UseProcessedChild<TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement>> = StandardHook<"processedChild", never, [
    StandardDepsContext<UseProcessedChildContext<TabbableChildElement, M>>,
    StandardDepsInfo<UseProcessedChildInfo<TabbableChildElement>, UseProcessedChildInfoKeysParameters>
], never, [
    StandardDepsProps<TabbableChildElement>,
    StandardDepsPick<"params", UseRefElement<TabbableChildElement>, "refElementParameters", "pick", "onElementChange">,
    StandardDepsPick<"return", UseManagedChild<M>>,
    StandardDepsPick<"return", UsePaginatedChild<TabbableChildElement>>,
    StandardDepsPick<"return", UseStaggeredChild<TabbableChildElement>>
]>;
export type UseProcessedChildInfoKeysParameters = "index";
export type UseProcessedChildInfoKeysReturnType = "setLocallyTabbable" | "getLocallyTabbable";
export interface UseProcessedChildContext<TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement>> extends UsePaginatedChildContext, UseStaggeredChildContext, UseManagedChildContext<M> {
}
export interface UseProcessedChildInfo<TabbableChildElement extends Element> extends UseRearrangeableChildInfo, UsePaginatedChildrenInfo<TabbableChildElement>, UseStaggeredChildrenInfo {
}
export interface UseProcessedChildrenContext extends UseRearrangedChildrenContext {
    processedChildrenContext: Pick<UseRovingTabIndexReturnTypeSelf, "getTabbableIndex" | "setTabbableIndex"> & Pick<UseChildrenHaveFocusReturnTypeSelf, "getAnyFocused">;
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
export declare const useProcessedChildren: <TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement>>({ rearrangeableChildrenParameters: { onRearranged, children: childrenUnsorted, ...rearrangeableChildrenParameters }, paginatedChildrenParameters, staggeredChildrenParameters, context, managedChildrenParameters, ...void1 }: {} & StandardDepsContext<UseProcessedChildrenContext, keyof UseProcessedChildrenContext> & StandardDepsPick<"params", UseManagedChildren<M>> & StandardDepsOmit<"params", UseRearrangeableChildren<M>, "managedChildrenReturn"> & StandardDepsOmit<"params", UseStaggeredChildren, "managedChildrenReturn", [StandardDepsPick<"params", UseStaggeredChildren, "staggeredChildrenParameters", "omit", "childCount">]> & StandardDepsOmit<"params", UsePaginatedChildren<TabbableChildElement>, "childrenHaveFocusReturn" | "managedChildrenReturn" | "rovingTabIndexReturn" | "rearrangeableChildrenReturn" | "paginatedChildrenParameters", [StandardDepsPick<"params", UsePaginatedChildren<TabbableChildElement>, "paginatedChildrenParameters", "omit", "childCount">]>) => {} & StandardDepsContext<UseProcessedChildContext<TabbableChildElement, M>, keyof UseProcessedChildContext<TabbableChildElement_1, M_1>> & StandardDepsPick<"return", UseManagedChildren<M>> & StandardDepsPick<"return", UseRearrangeableChildren<M>> & StandardDepsPick<"return", UseStaggeredChildren> & StandardDepsPick<"return", UsePaginatedChildren<TabbableChildElement_1>>;
export declare const useProcessedChild: <TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement> = UseProcessedChildInfo<TabbableChildElement>>({ context, info: { index, ...uinfo }, ...void1 }: {} & StandardDepsContext<UseProcessedChildContext<TabbableChildElement, M>, keyof UseProcessedChildContext<TabbableChildElement_1, M_1>> & StandardDepsInfo<UseProcessedChildInfo<TabbableChildElement>, "index">) => {} & StandardDepsProps<TabbableChildElement> & StandardDepsPick<"params", UseRefElement<TabbableChildElement>, "refElementParameters", "pick", "onElementChange"> & StandardDepsPick<"return", UseManagedChild<M>> & StandardDepsPick<"return", UsePaginatedChild<TabbableChildElement>> & StandardDepsPick<"return", UseStaggeredChild<TabbableChildElement>>;
//# sourceMappingURL=use-processed-children.d.ts.map