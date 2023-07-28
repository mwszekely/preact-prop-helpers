import { identity } from "lodash-es";
import { TargetedPick } from "../../util/lib.js";
import { ElementProps, KeyboardEventType, Nullable } from "../../util/types.js";
import { UsePaginatedChildrenParameters } from "../use-paginated-children.js";
import { UseRearrangeableChildrenReturnType } from "../use-sortable-children.js";
import { UseRovingTabIndexReturnType } from "./use-roving-tabindex.js";
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
export interface UseLinearNavigationParameters<ParentOrChildElement extends Element, ChildElement extends Element> extends TargetedPick<UseRovingTabIndexReturnType<ParentOrChildElement, ChildElement>, "rovingTabIndexReturn", "getTabbableIndex" | "setTabbableIndex">, TargetedPick<UseRearrangeableChildrenReturnType<any>, "rearrangeableChildrenReturn", "indexMangler" | "indexDemangler">, TargetedPick<UsePaginatedChildrenParameters<ParentOrChildElement, ChildElement>, "paginatedChildrenParameters", "paginationMin" | "paginationMax"> {
    linearNavigationParameters: UseLinearNavigationParametersSelf<ChildElement>;
}
export interface UseLinearNavigationParametersSelf<ChildElement extends Element> {
    /**
     * Called when a navigation change as a result of an arrow/home/end/page up/page down key being pressed.
     *
     * @stable
     */
    onNavigateLinear: Nullable<(newIndex: number | null, event: KeyboardEventType<ChildElement>) => void>;
    /**
     * Must return true if the child at this index can be navigated to, e.g. `(i) => !getChildren(i)?.hidden`.
     *
     * @stable
     */
    isValidForLinearNavigation(i: number): boolean;
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
     * Controls which arrow keys are used to navigate through the component.
     *
     * @remarks Not relative to the writing mode -- these are the literal keys that need to be pressed.
     *
     * Use `"either"` to allow navigation in either direction.
     *
     * Use `"none"` to disallow navigation with the arrow keys in any direction.
     */
    arrowKeyDirection: "horizontal" | "vertical" | "either" | "none";
    /**
     * If set to true, navigation with the home & end keys will
     * be disabled, but navigation with the arrow keys will be
     * unaffected.
     */
    disableHomeEndKeys: boolean;
    /**
     * When children are sorted, reversed, or otherwise out of order, `indexMangler` is given the `index` of a child and must return its "visual" index -- what its `index` would be at that position.
     *
     * @remarks This is provided by {@link useRearrangeableChildren}.
     * If you use this hook as part of {@link useCompleteListNavigation} or {@link useCompleteGridNavigation}, then everything's already wired up and you don't need to worry about this.
     * Otherwise, it's recommended to simply use {@link lodash-es#identity} here.
     *
     * @stable
     */
    /**
     * @see {@link UseLinearNavigationParametersSelf.indexMangler}, which does the opposite of this.
     *
     * @stable
     */
    /**
     * From `useManagedChildren`. This can be higher than the *actual* highest index if you need it to be.
     *
     * @returns [0, n], not [0, n)
     *
     * @stable
     */
    getHighestIndex(): number;
    /**
     * From `useManagedChildren`. This can be lower than the *actual* lowest index if you need it to be.
     *
     * @see {@link UseLinearNavigationParametersSelf.getLowestIndex}
     *
     * @stable
     */
    getLowestIndex(): number;
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
export declare function useLinearNavigation<ParentOrChildElement extends Element, ChildElement extends Element>({ linearNavigationParameters: { getLowestIndex, getHighestIndex, isValidForLinearNavigation, navigatePastEnd, navigatePastStart, onNavigateLinear, arrowKeyDirection, disableHomeEndKeys, pageNavigationSize, ...void4 }, rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex, ...void5 }, paginatedChildrenParameters: { paginationMax, paginationMin, ...void2 }, rearrangeableChildrenReturn: { indexDemangler, indexMangler, ...void3 }, ...void1 }: UseLinearNavigationParameters<ParentOrChildElement, ChildElement>): UseLinearNavigationReturnType<ParentOrChildElement>;
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