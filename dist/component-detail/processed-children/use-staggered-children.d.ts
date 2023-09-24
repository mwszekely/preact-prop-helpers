import { PropNames_RefElementParameters_onElementChange, PropNames_RefElementReturn_getElement, UseRefElementParameters, UseRefElementReturnType } from "../../dom-helpers/use-ref-element.js";
import { PropNames_ManagedChildrenReturn_getChildren, UseGenericChildParameters, UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { ElementProps, OmitStrong } from "../../util/types.js";
import { UseRovingTabIndexChildInfo } from "../keyboard-navigation/use-roving-tabindex.js";
export declare const PropNames_StaggeredParameters_staggered = "PropNames.StaggeredParameters.staggered";
export declare const PropNames_StaggeredParameters_childCount = "PropNames.StaggeredParameters.childCount";
export declare const PropNames_StaggeredParameters_untabbable = "PropNames.StaggeredParameters.untabbable";
export declare const PropNames_StaggeredParameters_untabbableBehavior = "PropNames.StaggeredParameters.untabbableBehavior";
export declare const PropNames_StaggeredParameters_onTabbableIndexChange = "PropNames.StaggeredParameters.onTabbableIndexChange";
export declare const PropNames_StaggeredReturn_stillStaggering = "PropNames.StaggeredReturn.stillStaggering";
export declare const PropNames_StaggeredChildReturn_parentIsStaggered = "PropNames.StaggeredChildReturn.parentIsStaggered";
export declare const PropNames_StaggeredChildReturn_hideBecauseStaggered = "PropNames.StaggeredChildReturn.hideBecauseStaggered";
export declare const PropNames_StaggeredChildReturn_childUseEffect = "PropNames.StaggeredChildReturn.childUseEffect";
export interface UseStaggeredChildrenInfo extends Pick<UseRovingTabIndexChildInfo<any>, "index"> {
    setStaggeredVisible(visible: boolean): void;
    getStaggeredVisible(): boolean;
}
export interface UseStaggeredChildrenParametersSelf {
    /**
     * If true, each child will delay rendering itself until the one before it has.
     */
    [PropNames_StaggeredParameters_staggered]: boolean;
    [PropNames_StaggeredParameters_childCount]: number | null;
}
export interface UseStaggeredChildrenParameters extends UseStaggeredChildrenParametersSelf, Pick<UseManagedChildrenReturnType<UseStaggeredChildrenInfo>, typeof PropNames_ManagedChildrenReturn_getChildren>, Pick<UseRefElementReturnType<any>, typeof PropNames_RefElementReturn_getElement> {
}
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
export interface UseStaggeredChildrenReturnType extends UseStaggeredChildrenReturnTypeSelf {
    context: UseStaggeredChildContext;
}
export interface UseStaggeredChildrenReturnTypeSelf {
    /**
     * Whether any children are still waiting to show themselves because of the staggering behavior
     */
    [PropNames_StaggeredReturn_stillStaggering]: boolean;
}
export interface UseStaggeredChildParameters extends UseGenericChildParameters<UseStaggeredChildContext, Pick<UseStaggeredChildrenInfo, "index">> {
}
export interface UseStaggeredChildReturnTypeSelf {
    /**
     * Whether the parent has indicated that all of its children, including this one, are staggered.
     */
    [PropNames_StaggeredChildReturn_parentIsStaggered]: boolean;
    /**
     * If this is true, you should delay showing *your* children or running other heavy logic until this becomes false.
     * Can be as simple as `<div>{hideBecauseStaggered? null : children}</div>`
     */
    [PropNames_StaggeredChildReturn_hideBecauseStaggered]: boolean;
    /**
     * Call this when the child mounts during useEffect (i.e. something like `useEffect(childUseEffect, [childUseEffect])`).
     *
     * This is generally passed to an inner child, if this is the outer child.
     */
    [PropNames_StaggeredChildReturn_childUseEffect](): void;
}
export interface UseStaggeredChildReturnType<ChildElement extends Element> extends UseStaggeredChildReturnTypeSelf, Pick<UseRefElementParameters<ChildElement>, typeof PropNames_RefElementParameters_onElementChange> {
    props: ElementProps<ChildElement>;
    info: OmitStrong<UseStaggeredChildrenInfo, "index">;
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
export declare const useStaggeredChildren: ({ [PropNames_ManagedChildrenReturn_getChildren]: getChildren, [PropNames_StaggeredParameters_childCount]: childCount, [PropNames_StaggeredParameters_staggered]: staggered, [PropNames_RefElementReturn_getElement]: getElement, }: UseStaggeredChildrenParameters) => UseStaggeredChildrenReturnType;
/**
 * Child hook for {@link useStaggeredChildren}.
 *
 * @remarks When a child is staggered, it still renders itself (i.e. it calls this hook, so it's rendering),
 * so check `hideBecauseStaggered` and, if it's true, avoid doing any heavy logic. Ideally that kind of heavy
 * logic/CSS will be in a sub-child that can be either rendered or not depending on `hideBecauseStaggered`.
 *
 * @compositeParams
 */
export declare const useStaggeredChild: <ChildElement extends Element>({ info: { index }, context: { staggeredChildContext: { parentIsStaggered, getDefaultStaggeredVisible, childCallsThisToTellTheParentToMountTheNextOne, getIntersectionObserver, setElementToIndexMap } } }: UseStaggeredChildParameters) => UseStaggeredChildReturnType<ChildElement>;
//# sourceMappingURL=use-staggered-children.d.ts.map