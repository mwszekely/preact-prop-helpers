import { UseRefElement } from "../../dom-helpers/use-ref-element.js";
import { UseManagedChildren } from "../../preact-extensions/use-managed-children.js";
import { Parameter, StandardDepsContext, StandardDepsInfo, StandardDepsPick, StandardDepsProps, StandardHook } from "../../util/types.js";
import { UseRovingTabIndexChildInfo } from "../keyboard-navigation/use-roving-tabindex.js";
export interface UseStaggeredChildrenInfo extends Pick<UseRovingTabIndexChildInfo<any>, "index"> {
    setStaggeredVisible(visible: boolean): void;
    getStaggeredVisible(): boolean;
}
export interface UseStaggeredChildrenParametersSelf {
    /**
     * If true, each child will delay rendering itself until the one before it has.
     */
    staggered: boolean;
    childCount: number | null;
}
export type UseStaggeredChildren = StandardHook<"staggeredChildren", UseStaggeredChildrenParametersSelf, [
    StandardDepsPick<"return", UseManagedChildren<UseStaggeredChildrenInfo>, "managedChildrenReturn", "pick", "getChildren">
], UseStaggeredChildrenReturnTypeSelf, [
    StandardDepsContext<UseStaggeredChildContext>
]>;
export type UseStaggeredChild<E extends Element> = StandardHook<"staggeredChild", never, [
    StandardDepsInfo<UseStaggeredChildrenInfo, "index">,
    StandardDepsContext<UseStaggeredChildContext>
], UseStaggeredChildReturnTypeSelf, [
    StandardDepsPick<"params", UseRefElement<E>, "refElementParameters", "pick", "onElementChange">,
    StandardDepsInfo<UseStaggeredChildrenInfo, "getStaggeredVisible" | "setStaggeredVisible">,
    StandardDepsProps<E>
]>;
export interface UseStaggeredChildContextSelf {
    parentIsStaggered: boolean;
    childCallsThisToTellTheParentToMountTheNextOne(index: number): void;
    getDefaultStaggeredVisible(i: number): boolean;
    getIntersectionObserver(): IntersectionObserver | null;
    setElementToIndexMap(index: number, element: any): void;
}
export interface UseStaggeredChildContext {
    staggeredChildContext: UseStaggeredChildContextSelf;
}
export interface UseStaggeredChildrenReturnTypeSelf {
    /**
     * Whether any children are still waiting to show themselves because of the staggering behavior
     */
    stillStaggering: boolean;
}
export interface UseStaggeredChildReturnTypeSelf {
    /**
     * Whether the parent has indicated that all of its children, including this one, are staggered.
     */
    parentIsStaggered: boolean;
    /**
     * If this is true, you should delay showing *your* children or running other heavy logic until this becomes false.
     * Can be as simple as `<div>{hideBecauseStaggered? null : children}</div>`
     */
    hideBecauseStaggered: boolean;
    /**
     * Call this when the child mounts during useEffect (i.e. something like `useEffect(childUseEffect, [childUseEffect])`).
     *
     * This is generally passed to an inner child, if this is the outer child.
     */
    childUseEffect(): void;
}
/**
 * Allows children to each wait until the previous has finished rendering before itself rendering.
 * E.G. Child #3 waits until #2 renders. #2 waits until #1 renders, etc.
 *
 * @remarks If a child appears on-screen for 100ms then it will be forcibly displayed.
 *
 * When using the child hook, it's highly recommended to separate out any heavy logic into
 * a separate component that won't be rendered until it's de-staggered into visibility.
 *
 * @compositeParams
 *
 * @hasChild {@link useStaggeredChild}
 */
export declare const useStaggeredChildren: ({ managedChildrenReturn: { getChildren }, staggeredChildrenParameters: { staggered, childCount }, ...void1 }: Parameter<UseStaggeredChildren>) => ReturnType<UseStaggeredChildren>;
/**
 * Child hook for {@link useStaggeredChildren}.
 *
 * @remarks When a child is staggered, it still renders itself (i.e. it calls this hook, so it's rendering),
 * so check `hideBecauseStaggered` and, if it's true, avoid doing any heavy logic. Ideally that kind of heavy
 * logic/CSS will be in a sub-child that can be either rendered or not depending on `hideBecauseStaggered`.
 *
 * @compositeParams
 */
export declare const useStaggeredChild: <E extends Element>({ info: { index }, context: { staggeredChildContext: { parentIsStaggered, getDefaultStaggeredVisible, childCallsThisToTellTheParentToMountTheNextOne, getIntersectionObserver, setElementToIndexMap } } }: {} & StandardDepsInfo<UseStaggeredChildrenInfo, "index"> & StandardDepsContext<UseStaggeredChildContext, "staggeredChildContext">) => {
    staggeredChildReturn: UseStaggeredChildReturnTypeSelf;
} & StandardDepsPick<"params", UseRefElement<E>, "refElementParameters", "pick", "onElementChange"> & StandardDepsInfo<UseStaggeredChildrenInfo, "setStaggeredVisible" | "getStaggeredVisible"> & StandardDepsProps<E>;
//# sourceMappingURL=use-staggered-children.d.ts.map