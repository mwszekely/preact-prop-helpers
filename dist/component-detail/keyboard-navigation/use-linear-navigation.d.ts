import { ManagedChildInfo } from "../../preact-extensions/use-managed-children.js";
import { ElementProps, KeyboardEventType, Nullable } from "../../util/types.js";
import { UseRovingTabIndexChildInfo, UseRovingTabIndexReturnType } from "./use-roving-tabindex.js";
export interface LinearNavigationResult {
    valueUnmangled: number | null;
    status: "normal" | "past-start" | "past-end";
}
export interface UseLinearNavigationReturnType<ParentOrChildElement extends Element> {
    linearNavigationReturn: {};
    propsStable: ElementProps<ParentOrChildElement>;
}
export interface UseLinearNavigationChildInfo<ChildElement extends Element> extends ManagedChildInfo<number> {
}
/** Arguments passed to the parent `useLinearNavigation` */
export interface UseLinearNavigationParameters<ParentOrChildElement extends Element, ChildElement extends Element, _M extends UseLinearNavigationChildInfo<ChildElement>> {
    rovingTabIndexReturn: Pick<UseRovingTabIndexReturnType<ParentOrChildElement, ChildElement, UseRovingTabIndexChildInfo<ChildElement>>["rovingTabIndexReturn"], "getTabbableIndex" | "setTabbableIndex">;
    linearNavigationParameters: {
        onNavigateLinear: Nullable<(newIndex: number | null, event: KeyboardEventType<ChildElement>) => void>;
        /**
         * Must return true if the given child can be navigated to.
         *
         * Generally corresponds to a `hidden` or `disabled` prop.
         * @param i
         */
        isValid(i: number): boolean;
        /**
         * Controls how many elements are skipped over when page up/down are pressed.
         *
         * * When 0: Page Up/Down are disabled
         * * When >= 1: Page Up/Down moves that number of elements up or down
         * * When 0 < x < 1, Page Up/Down moves by that percentage of all elements, or of 100 elements, whichever is higher. In other words, 0.1 jumps by 10 elements when there are fewer then 100 elements, and 20 elements when there are 200 elements.
         */
        pageNavigationSize: number;
        /**
         * What happens when `up` is pressed on the first valid child?
         *
         * * "wrap": The focus is sent down to the last child
         * * "passthrough": Nothing happens, **and the event is allowed to propagate**.
         * * A function:
         */
        navigatePastStart: "passthrough" | "wrap" | (() => void);
        /**
         * What happens when `down` is pressed on the last valid child?
         */
        navigatePastEnd: "passthrough" | "wrap" | (() => void);
        /**
         * Turn a sorted `index` into its original, unsorted `index`. Use `identity` if you don't care.
         *
         * This is what allows our linear keyboard navigation to still work if the children are re-ordered
         * (i.e. how when reverse-sorted, pressing `down` moves from item #9 to item #8).
         */
        indexMangler: (n: number) => number;
        /**
         * Turn an unsorted `index` into its visual display `index`. Use `identity` if you don't care.
         */
        indexDemangler: (n: number) => number;
        /**
         * From `useManagedChildren`
         */
        getHighestIndex(): number;
        /**
         * Controls which arrow keys are used to navigate through the component.
         * Not relative to the writing mode -- these are the literal keys that need to be pressed.
         *
         * Use "either" to allow navigation in either direction.
         *
         * Use "none" to disallow navigation with the arrow keys in any direction.
         */
        arrowKeyDirection: "horizontal" | "vertical" | "either" | "none";
        /**
         * If set to true, navigation with the home & end keys will
         * be disabled, but navigation with the arrow keys will be
         * unaffected.
         */
        disableHomeEndKeys: boolean;
    };
}
/**
 * When used in tandem with `useRovingTabIndex`, allows control of
 * the tabbable index with the arrow keys.
 *
 * @see useListNavigation, which packages everything up together.
 */
export declare function useLinearNavigation<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseLinearNavigationChildInfo<ChildElement>>({ rovingTabIndexReturn, linearNavigationParameters }: UseLinearNavigationParameters<ParentOrChildElement, ChildElement, M>): UseLinearNavigationReturnType<ParentOrChildElement>;
export interface TryNavigateToIndexParameters {
    highestChildIndex: number;
    isValid(index: number): boolean;
    targetUnmangled: number;
    searchDirection: 1 | -1;
    indexMangler: (n: number) => number;
    indexDemangler: (n: number) => number;
}
export declare function tryNavigateToIndex({ isValid, highestChildIndex, searchDirection, indexDemangler, indexMangler, targetUnmangled }: TryNavigateToIndexParameters): LinearNavigationResult;
//# sourceMappingURL=use-linear-navigation.d.ts.map