import { UseManagedChildrenReturnType } from "../preact-extensions/use-managed-children.js";
import { ElementProps } from "../util/types.js";
import { UseRovingTabIndexChildInfo } from "./keyboard-navigation/use-roving-tabindex.js";
export interface UseStaggeredChildrenInfo<E extends Element> extends Pick<UseRovingTabIndexChildInfo<E>, "index"> {
    setStaggeredVisible(visible: boolean): void;
}
export interface UseStaggeredChildrenParametersSelf {
    staggered: boolean;
}
export interface UseStaggeredChildrenParameters<E extends Element, M extends UseStaggeredChildrenInfo<E>> extends Pick<UseManagedChildrenReturnType<M>, "managedChildrenReturn"> {
    staggeredChildrenParameters: UseStaggeredChildrenParametersSelf;
}
export interface UseStaggeredChildContextSelf {
    parentIsStaggered: boolean;
    childCallsThisToTellTheParentToMountTheNextOne(index: number): void;
    childCallsThisToTellTheParentTheHighestIndex(index: number): void;
    getDefaultStaggeredVisible(i: number): boolean;
}
export interface UseStaggeredChildContext {
    staggeredChildContext: UseStaggeredChildContextSelf;
}
export interface UseStaggeredChildrenReturnType {
    staggeredChildrenReturn: UseStaggeredChildrenReturnTypeSelf;
    context: UseStaggeredChildContext;
}
export interface UseStaggeredChildrenReturnTypeSelf {
    stillStaggering: boolean;
}
export interface UseStaggeredChildParameters {
    info: {
        index: number;
    };
    context: UseStaggeredChildContext;
}
export interface UseStaggeredChildReturnTypeSelf {
    /** Whether the parent has indicated that all of its children, including this one, are staggered. */
    parentIsStaggered: boolean;
    /**
     * If this is true, you should delay showing *your* children or running other heavy logic until this becomes false.
     *
     * Can be as simple as `<div>{hideBecauseStaggered? null : children}</div>`
     */
    hideBecauseStaggered: boolean;
}
export interface UseStaggeredChildReturnType<ChildElement extends Element> {
    props: ElementProps<ChildElement>;
    staggeredChildReturn: UseStaggeredChildReturnTypeSelf;
    info: Pick<UseStaggeredChildrenInfo<ChildElement>, "setStaggeredVisible">;
}
/**
 * Allows children to each wait until the previous has finished rendering before itself rendering. E.G. Child #3 waits until #2 renders. #2 waits until #1 renders, etc.
 *
 * @remarks Note that the child itself will still render, but you can delay rendering *its* children, or
 * delay other complicated or heavy logic, until the child is no longer staggered.
 *
 * @compositeParams
 *
 * @hasChild {@link useStaggeredChild}
 */
export declare function useStaggeredChildren<E extends Element, M extends UseStaggeredChildrenInfo<E>>({ managedChildrenReturn: { getChildren }, staggeredChildrenParameters: { staggered } }: UseStaggeredChildrenParameters<E, M>): UseStaggeredChildrenReturnType;
/**
 * Child hook for {@link useStaggeredChildren}.
 *
 * @remarks When a child is staggered, it still renders itself (i.e. it calls this hook, so it's rendering),
 * so check `hideBecauseStaggered` and, if it's true, avoid doing any heavy logic and render with `display: none`.
 *
 * @compositeParams
 */
export declare function useStaggeredChild<ChildElement extends Element>({ info: { index }, context: { staggeredChildContext: { parentIsStaggered, childCallsThisToTellTheParentTheHighestIndex, getDefaultStaggeredVisible, childCallsThisToTellTheParentToMountTheNextOne } } }: UseStaggeredChildParameters): UseStaggeredChildReturnType<ChildElement>;
//# sourceMappingURL=use-staggered-children.d.ts.map