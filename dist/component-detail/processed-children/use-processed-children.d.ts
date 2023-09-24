import { UseRefElementReturnTypeSelf } from "../../dom-helpers/use-ref-element.js";
import { UseChildrenHaveFocusReturnTypeSelf } from "../../observers/use-children-have-focus.js";
import { UseGenericChildParameters, UseManagedChildParameters, UseManagedChildReturnType, UseManagedChildrenContext, UseManagedChildrenParameters, UseManagedChildrenParametersSelf, UseManagedChildrenReturnTypeSelf } from "../../preact-extensions/use-managed-children.js";
import { OmitStrong } from "../../util/lib.js";
import { PropNames } from "../../util/types.js";
import { UseRovingTabIndexReturnTypeSelf } from "../keyboard-navigation/use-roving-tabindex.js";
import { UsePaginatedChildContext, UsePaginatedChildParameters, UsePaginatedChildReturnType, UsePaginatedChildrenInfo, UsePaginatedChildrenParameters, UsePaginatedChildrenParametersSelf, UsePaginatedChildrenReturnType } from "./use-paginated-children.js";
import { UseRearrangeableChildInfo, UseRearrangeableChildrenParameters, UseRearrangeableChildrenReturnType, UseRearrangedChildrenContext } from "./use-rearrangeable-children.js";
import { UseStaggeredChildContext, UseStaggeredChildReturnType, UseStaggeredChildrenInfo, UseStaggeredChildrenParameters, UseStaggeredChildrenParametersSelf, UseStaggeredChildrenReturnType } from "./use-staggered-children.js";
export interface UseProcessedChildrenReturnType<TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement>> extends OmitStrong<UseRearrangeableChildrenReturnType<M>, never>, OmitStrong<UseStaggeredChildrenReturnType, never>, OmitStrong<UsePaginatedChildrenReturnType, never> {
    context: UseProcessedChildContext<TabbableChildElement, M>;
}
export type UseProcessedChildInfoKeysParameters = "index";
export type UseProcessedChildInfoKeysReturnType = "setLocallyTabbable" | "getLocallyTabbable";
export interface UseProcessedChildParameters<TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement>> extends UseGenericChildParameters<UseProcessedChildContext<TabbableChildElement, M>, Pick<M, UseProcessedChildInfoKeysParameters>>, Pick<UsePaginatedChildParameters, never>, Pick<UseManagedChildParameters<M>, never> {
}
export interface UseProcessedChildContext<TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement>> extends UsePaginatedChildContext, UseStaggeredChildContext, UseManagedChildrenContext<M> {
}
export interface UseProcessedChildReturnType<TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement>> extends OmitStrong<UsePaginatedChildReturnType<TabbableChildElement>, "info">, OmitStrong<UseStaggeredChildReturnType<TabbableChildElement>, "info" | "props">, Pick<UseManagedChildReturnType<M>, typeof PropNames.ManagedChildReturn.getChildren> {
}
export interface UseProcessedChildInfo<TabbableChildElement extends Element> extends UseRearrangeableChildInfo, UsePaginatedChildrenInfo<TabbableChildElement>, UseStaggeredChildrenInfo {
}
export interface UseProcessedChildrenContext extends UseRearrangedChildrenContext {
    processedChildrenContext: Pick<UseRovingTabIndexReturnTypeSelf, typeof PropNames.RovingTabIndexReturn.getTabbableIndex | typeof PropNames.RovingTabIndexReturn.setTabbableIndex> & Pick<UseChildrenHaveFocusReturnTypeSelf, typeof PropNames.ChildrenHaveFocusReturn.getAnyFocused> & OmitStrong<UsePaginatedChildrenParametersSelf, typeof PropNames.PaginatedParameters.childCount> & OmitStrong<UseStaggeredChildrenParametersSelf, typeof PropNames.StaggeredParameters.childCount> & Pick<UseManagedChildrenReturnTypeSelf<any>, typeof PropNames.ManagedChildrenReturn.getChildren> & Pick<UseRefElementReturnTypeSelf<any>, typeof PropNames.RefElementReturn.getElement>;
}
/**
 * All of these functions **MUST** be stable across renders.
 */
export interface UseProcessedChildrenParameters<TabbableChildElement extends Element, M extends UseRearrangeableChildInfo> extends OmitStrong<UseRearrangeableChildrenParameters<M>, typeof PropNames.ManagedChildrenReturn.getChildren>, OmitStrong<UseStaggeredChildrenParameters, typeof PropNames.StaggeredParameters.childCount | keyof UseManagedChildrenReturnTypeSelf<M>>, Pick<UseManagedChildrenParameters<M>, keyof UseManagedChildrenParametersSelf<M>>, OmitStrong<UsePaginatedChildrenParameters<TabbableChildElement>, typeof PropNames.PaginatedParameters.childCount | typeof PropNames.RearrangeableReturn.indexDemangler> {
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
export declare const useProcessedChildren: <TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement>>({ [PropNames.ChildrenHaveFocusReturn.getAnyFocused]: getAnyFocused, [PropNames.ManagedChildrenReturn.getChildren]: getChildren, [PropNames.PaginatedParameters.paginationMax]: paginationMax, [PropNames.PaginatedParameters.paginationMin]: paginationMin, [PropNames.StaggeredParameters.staggered]: staggered, [PropNames.RearrangeableParameters.adjust]: adjust, [PropNames.RearrangeableParameters.onRearranged]: onRearranged, [PropNames.RearrangeableParameters.children]: childrenUnsorted, [PropNames.RearrangeableParameters.compare]: compare, [PropNames.RearrangeableParameters.getIndex]: getIndex, [PropNames.RovingTabIndexReturn.getTabbableIndex]: getTabbableIndex, [PropNames.RovingTabIndexReturn.setTabbableIndex]: setTabbableIndex, [PropNames.RefElementReturn.getElement]: getElement, [PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect]: onAfterChildLayoutEffect, [PropNames.ManagedChildrenParameters.onChildrenCountChange]: onChildrenCountChange, [PropNames.ManagedChildrenParameters.onChildrenMountChange]: onChildrenMountChange, context, ...void4 }: UseProcessedChildrenParameters<TabbableChildElement, M>) => UseProcessedChildrenReturnType<TabbableChildElement, M>;
export declare const useProcessedChild: <TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement> = UseProcessedChildInfo<TabbableChildElement>>({ context, info: { index, ...uinfo }, }: UseProcessedChildParameters<TabbableChildElement, M>) => UseProcessedChildReturnType<TabbableChildElement, M>;
//# sourceMappingURL=use-processed-children.d.ts.map