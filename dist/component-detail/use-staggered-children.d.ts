import { h } from "preact";
import { UseManagedChildrenReturnType } from "../preact-extensions/use-managed-children.js";
import { UseRovingTabIndexChildInfo } from "./use-roving-tabindex.js";
export interface UseStaggeredChildrenInfo<E extends Element> extends UseRovingTabIndexChildInfo<E> {
    setParentIsStaggered(parentIsStaggered: boolean): void;
    setStaggeredVisible(visible: boolean): void;
}
export interface UseStaggeredChildrenParameters<E extends Element, M extends UseStaggeredChildrenInfo<E>> {
    managedChildrenReturn: UseManagedChildrenReturnType<M>["managedChildrenReturn"];
    staggeredChildrenParameters: {
        staggered: boolean;
    };
}
export interface UseStaggeredChildContext {
    staggeredChildContext: {
        childCallsThisToTellTheParentToMountTheNextOne(index: number): void;
        childCallsThisToTellTheParentTheHighestIndex(index: number): void;
        getDefaultStaggeredVisible(i: number): boolean;
        getDefaultIsStaggered(): boolean;
    };
}
export interface UseStaggeredChildrenReturnType {
    staggeredChildrenReturn: {
        stillStaggering: boolean;
    };
    context: UseStaggeredChildContext;
}
/**
 * Allows children to each wait until the previous has finished rendering before itself rendering.
 *
 * E.G. Child #3 waits until #2 renders. #2 waits until #1 renders, etc.
 *
 * Note that the child itself will still render, but you can delay rendering *its* children, or
 * delay other complicated or heavy logic, until the child is no longer staggered.
 */
export declare function useStaggeredChildren<E extends Element, M extends UseStaggeredChildrenInfo<E>>({ managedChildrenReturn: { getChildren }, staggeredChildrenParameters: { staggered } }: UseStaggeredChildrenParameters<E, M>): UseStaggeredChildrenReturnType;
export interface UseStaggeredChildParameters {
    managedChildParameters: {
        index: number;
    };
    context: UseStaggeredChildContext;
}
export interface UseStaggeredChildReturn<ChildElement extends Element> {
    props: h.JSX.HTMLAttributes<ChildElement>;
    staggeredChildReturn: {
        /** Whether the parent has indicated that all of its children, including this one, are staggered. */
        isStaggered: boolean;
        staggeredVisible: boolean;
        /**
         * If this is true, you should delay showing *your* children or running other heavy logic until this becomes false.
         *
         * Can be as simple as `<div>{hideBecauseStaggered? null : children}</div>`
         *  */
        hideBecauseStaggered: boolean;
    };
    managedChildParameters: Pick<UseStaggeredChildrenInfo<ChildElement>, "setParentIsStaggered" | "setStaggeredVisible">;
}
export declare function useStaggeredChild<ChildElement extends Element>({ managedChildParameters: { index }, context: { staggeredChildContext: { childCallsThisToTellTheParentTheHighestIndex, getDefaultIsStaggered, getDefaultStaggeredVisible, childCallsThisToTellTheParentToMountTheNextOne } } }: UseStaggeredChildParameters): UseStaggeredChildReturn<ChildElement>;
//# sourceMappingURL=use-staggered-children.d.ts.map