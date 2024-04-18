import { identity } from "lodash-es";
import { UseManagedChildrenReturnType } from "../../index.js";
import { TargetedPick } from "../../util/lib.js";
import { ElementProps, KeyboardEventType, Nullable } from "../../util/types.js";
import { UsePaginatedChildrenParameters } from "../processed-children/use-paginated-children.js";
import { UseRearrangeableChildrenReturnType } from "../processed-children/use-rearrangeable-children.js";
import { UseRovingTabIndexChildInfo, UseRovingTabIndexReturnType } from "./use-roving-tabindex.js";
export { identity };
export interface LinearNavigationResult {
    valueDemangled: number | null;
    status: "normal" | "past-start" | "past-end";
}
export interface UseLinearNavigationReturnTypeSelf {
}
export interface UseLinearNavigationReturnType<ParentOrChildElement extends Element> {
    linearNavigationReturn: UseLinearNavigationReturnTypeSelf;
    propsStable: ElementProps<ParentOrChildElement>;
}
/** Arguments passed to the parent `useLinearNavigation` */
export interface UseLinearNavigationParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseLinearNavigationChildInfo<ChildElement>> extends TargetedPick<UseRovingTabIndexReturnType<ParentOrChildElement, ChildElement>, "rovingTabIndexReturn", "getTabbableIndex" | "setTabbableIndex">, TargetedPick<UseRearrangeableChildrenReturnType<any>, "rearrangeableChildrenReturn", "indexMangler" | "indexDemangler">, TargetedPick<UsePaginatedChildrenParameters<ChildElement>, "paginatedChildrenParameters", "paginationMin" | "paginationMax">, TargetedPick<UseManagedChildrenReturnType<M>, "managedChildrenReturn", "getChildren"> {
    linearNavigationParameters: UseLinearNavigationParametersSelf<ChildElement>;
}
export interface UseLinearNavigationChildInfo<ChildElement extends Element> extends Pick<UseRovingTabIndexChildInfo<ChildElement>, "untabbable" | "index"> {
}
export interface UseLinearNavigationParametersSelf<ChildElement extends Element> {
    /**
     * Called when a navigation change as a result of an arrow/home/end/page up/page down key being pressed.
     *
     * @stable
     */
    onNavigateLinear: Nullable<(newIndex: number, event: KeyboardEventType<ChildElement>) => void>;
    /**
     * Controls how many elements are skipped over when page up/down are pressed.
     *
     * ```md-literal
     * * When 0 or null: Page Up/Down are disabled
     * * When &gt;= 1: Page Up/Down moves that number of elements up or down
     * * When 0 &lt; x &lt; 1, Page Up/Down moves by that percentage of all elements, or of 100 elements, whichever is higher. In other words, 0.1 jumps by 10 elements when there are fewer then 100 elements, and 20 elements when there are 200 elements.
     * ```
     */
    pageNavigationSize: Nullable<number>;
    /**
     * What happens when `up` is pressed on the first valid child?
     *
     * @remarks If it's `"wrap"`, the focus is sent down to the last child, and the event does not propagate.
     * If it's a function, it's is called, and the event does not propagate.
     * If it's `"passthrough"`, nothing happens, **and the event is allowed to propagate**.
     */
    navigatePastStart: "passthrough" | "wrap" | (() => void);
    /**
     * What happens when `down` is pressed on the last valid child?
     *
     * @see {@link UseLinearNavigationParametersSelf.navigatePastStart}
     */
    navigatePastEnd: "passthrough" | "wrap" | (() => void);
    /**
     * TODO: Add `"flow"` (for flex-wrapping components and such) to read the DOM layout of elements and guess where focus should move.
     *
     * Controls which arrow keys are used to navigate through the component.
     *
     * @remarks Not relative to the writing mode -- these are the *literal* keys that need to be pressed.
     *
     * Use `"either"` to allow navigation in either direction.
     *
     * Use `"none"` to disallow navigation with the arrow keys in any direction.
     *
     */
    arrowKeyDirection: "horizontal" | "vertical" | "either" | "none";
    /**
     * If set to true, navigation with the home & end keys will
     * be disabled, but navigation with the arrow keys will be
     * unaffected.
     */
    disableHomeEndKeys: boolean;
}
/**
 * When used in tandem with `useRovingTabIndex`, allows control of
 * the tabbable index with the arrow keys, Page Up/Page Down, or Home/End.
 *
 * @remarks There is no child version of this hook. That being said, the props returned are stable and work equally well on the child as the parent. If you don't have a parent `HTMLElement`, you can still pass the returned props to each child individually.
 *
 * @see {@link useCompleteListNavigation}, which packages everything up together.
 *
 * @compositeParams
 */
export declare const useLinearNavigation: <ParentOrChildElement extends Element, ChildElement extends Element>({ linearNavigationParameters: { navigatePastEnd, navigatePastStart, onNavigateLinear, arrowKeyDirection, disableHomeEndKeys, pageNavigationSize, ...void4 }, rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex, ...void5 }, paginatedChildrenParameters: { paginationMax, paginationMin, ...void2 }, rearrangeableChildrenReturn: { indexDemangler, indexMangler, ...void3 }, managedChildrenReturn: { getChildren, ...void6 }, ...void1 }: UseLinearNavigationParameters<ParentOrChildElement, ChildElement, UseLinearNavigationChildInfo<ChildElement>>) => UseLinearNavigationReturnType<ParentOrChildElement>;
export interface TryNavigateToIndexParameters {
    lowestChildIndex: number;
    highestChildIndex: number;
    isValid(index: number): boolean;
    targetDemangled: number;
    searchDirection: 1 | -1;
    indexMangler: (n: number) => number;
    indexDemangler: (n: number) => number;
}
export declare function tryNavigateToIndex({ isValid, highestChildIndex, lowestChildIndex, searchDirection, indexDemangler, indexMangler, targetDemangled }: TryNavigateToIndexParameters): LinearNavigationResult;
//# sourceMappingURL=use-linear-navigation.d.ts.map