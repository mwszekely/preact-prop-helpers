import { identity } from "lodash-es";
import { ElementProps, KeyboardEventType, Nullable, PropNames } from "../../util/types.js";
import { UsePaginatedChildrenParametersSelf } from "../processed-children/use-paginated-children.js";
import { UseRearrangeableChildrenReturnTypeSelf } from "../processed-children/use-rearrangeable-children.js";
import { UseRovingTabIndexReturnType } from "./use-roving-tabindex.js";
export { identity };
declare module "../../util/types.js" {
    interface PropNames {
        LinearNavigationParameters: typeof P1Names;
    }
}
declare module "../../util/types.js" {
    interface PropNames {
        LinearNavigationReturn: typeof R1Names;
    }
}
declare module "../../util/types.js" {
    interface PropNames {
        LinearNavigationChildParameters: typeof P2Names;
    }
}
declare module "../../util/types.js" {
    interface PropNames {
        LinearNavigationChildReturn: typeof R2Names;
    }
}
export declare const P1Names: {
    readonly onNavigateLinear: "PropNames.LinearNavigationParameters.onNavigateLinear";
    readonly isValidForLinearNavigation: "PropNames.LinearNavigationParameters.isValidForLinearNavigation";
    readonly pageNavigationSize: "PropNames.LinearNavigationParameters.pageNavigationSize";
    readonly navigatePastStart: "PropNames.LinearNavigationParameters.navigatePastStart";
    readonly navigatePastEnd: "PropNames.LinearNavigationParameters.navigatePastEnd";
    readonly arrowKeyDirection: "PropNames.LinearNavigationParameters.arrowKeyDirection";
    readonly disableHomeEndKeys: "PropNames.LinearNavigationParameters.disableHomeEndKeys";
    readonly getHighestIndex: "PropNames.LinearNavigationParameters.getHighestIndex";
    readonly getLowestIndex: "PropNames.LinearNavigationParameters.getLowestIndex";
};
export declare const R1Names: {
    readonly setTabbableIndex: "PropNames.LinearNavigationReturn.setTabbableIndex";
};
export declare const P2Names: {};
export declare const R2Names: {
    readonly tabbable: "PropNames.LinearNavigationChildReturn.tabbable";
};
export interface LinearNavigationResult {
    valueDemangled: number | null;
    status: "normal" | "past-start" | "past-end";
}
export interface UseLinearNavigationReturnTypeSelf {
}
export interface UseLinearNavigationReturnType<ParentOrChildElement extends Element> extends UseLinearNavigationReturnTypeSelf {
    props: ElementProps<ParentOrChildElement>;
}
/** Arguments passed to the parent `useLinearNavigation` */
export interface UseLinearNavigationParameters<ParentOrChildElement extends Element, ChildElement extends Element> extends UseLinearNavigationParametersSelf<ChildElement>, Pick<UseRovingTabIndexReturnType<ParentOrChildElement, ChildElement>, (typeof PropNames)["RovingTabIndexReturn"]["getTabbableIndex"] | (typeof PropNames)["RovingTabIndexReturn"]["setTabbableIndex"]>, Pick<UseRearrangeableChildrenReturnTypeSelf<any>, typeof PropNames.RearrangeableReturn.indexMangler | typeof PropNames.RearrangeableReturn.indexDemangler>, Pick<UsePaginatedChildrenParametersSelf, typeof PropNames.PaginatedParameters.paginationMin | typeof PropNames.PaginatedParameters.paginationMax> {
}
export interface UseLinearNavigationParametersSelf<ChildElement extends Element> {
    /**
     * Called when a navigation change as a result of an arrow/home/end/page up/page down key being pressed.
     *
     * @stable
     */
    [PropNames.LinearNavigationParameters.onNavigateLinear]: Nullable<(newIndex: number, event: KeyboardEventType<ChildElement>) => void>;
    /**
     * Must return true if the child at this index can be navigated to, e.g. `(i) => !getChildren(i)?.hidden`.
     *
     * @stable
     */
    [PropNames.LinearNavigationParameters.isValidForLinearNavigation](i: number): boolean;
    /**
     * Controls how many elements are skipped over when page up/down are pressed.
     *
     * ```md-literal
     * * When 0 or null: Page Up/Down are disabled
     * * When &gt;= 1: Page Up/Down moves that number of elements up or down
     * * When 0 &lt; x &lt; 1, Page Up/Down moves by that percentage of all elements, or of 100 elements, whichever is higher. In other words, 0.1 jumps by 10 elements when there are fewer then 100 elements, and 20 elements when there are 200 elements.
     * ```
     */
    [PropNames.LinearNavigationParameters.pageNavigationSize]: Nullable<number>;
    /**
     * What happens when `up` is pressed on the first valid child?
     *
     * @remarks If it's `"wrap"`, the focus is sent down to the last child, and the event does not propagate.
     * If it's a function, it's is called, and the event does not propagate.
     * If it's `"passthrough"`, nothing happens, **and the event is allowed to propagate**.
     */
    [PropNames.LinearNavigationParameters.navigatePastStart]: "passthrough" | "wrap" | (() => void);
    /**
     * What happens when `down` is pressed on the last valid child?
     *
     * @see {@link UseLinearNavigationParametersSelf.navigatePastStart}
     */
    [PropNames.LinearNavigationParameters.navigatePastEnd]: "passthrough" | "wrap" | (() => void);
    /**
     * Controls which arrow keys are used to navigate through the component.
     *
     * @remarks Not relative to the writing mode -- these are the literal keys that need to be pressed.
     *
     * Use `"either"` to allow navigation in either direction.
     *
     * Use `"none"` to disallow navigation with the arrow keys in any direction.
     */
    [PropNames.LinearNavigationParameters.arrowKeyDirection]: "horizontal" | "vertical" | "either" | "none";
    /**
     * If set to true, navigation with the home & end keys will
     * be disabled, but navigation with the arrow keys will be
     * unaffected.
     */
    [PropNames.LinearNavigationParameters.disableHomeEndKeys]: boolean;
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
    [PropNames.LinearNavigationParameters.getHighestIndex](): number;
    /**
     * From `useManagedChildren`. This can be lower than the *actual* lowest index if you need it to be.
     *
     * @see {@link UseLinearNavigationParametersSelf.getLowestIndex}
     *
     * @stable
     */
    [PropNames.LinearNavigationParameters.getLowestIndex](): number;
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
export declare const useLinearNavigation: <ParentOrChildElement extends Element, ChildElement extends Element>({ [PropNames.LinearNavigationParameters.getLowestIndex]: getLowestIndex, [PropNames.LinearNavigationParameters.getHighestIndex]: getHighestIndex, [PropNames.LinearNavigationParameters.isValidForLinearNavigation]: isValidForLinearNavigation, [PropNames.LinearNavigationParameters.navigatePastEnd]: navigatePastEnd, [PropNames.LinearNavigationParameters.navigatePastStart]: navigatePastStart, [PropNames.LinearNavigationParameters.onNavigateLinear]: onNavigateLinear, [PropNames.LinearNavigationParameters.arrowKeyDirection]: arrowKeyDirection, [PropNames.LinearNavigationParameters.disableHomeEndKeys]: disableHomeEndKeys, [PropNames.LinearNavigationParameters.pageNavigationSize]: pageNavigationSize, [PropNames.RovingTabIndexReturn.getTabbableIndex]: getTabbableIndex, [PropNames.RovingTabIndexReturn.setTabbableIndex]: setTabbableIndex, [PropNames.PaginatedParameters.paginationMin]: paginationMin, [PropNames.PaginatedParameters.paginationMax]: paginationMax, [PropNames.RearrangeableReturn.indexMangler]: indexMangler, [PropNames.RearrangeableReturn.indexDemangler]: indexDemangler, ...void1 }: UseLinearNavigationParameters<ParentOrChildElement, ChildElement>) => UseLinearNavigationReturnType<ParentOrChildElement>;
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