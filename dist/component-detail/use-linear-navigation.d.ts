import { h } from "preact";
import { UseRovingTabIndexReturnType } from "./use-roving-tabindex.js";
export interface LinearNavigationResult {
    value: number | null;
    status: "normal" | "past-start" | "past-end";
}
export interface UseLinearNavigationReturnType<ParentOrChildElement extends Element> {
    linearNavigationReturn: {
        propsStable: h.JSX.HTMLAttributes<ParentOrChildElement>;
    };
}
/** Default implementation with no sorting */
/** Default implementation with no sorting */
/** Arguments passed to the parent `useLinearNavigation` */
export interface UseLinearNavigationParameters<_ParentOrChildElement extends Element, ChildElement extends Element> {
    rovingTabIndexReturn: Pick<UseRovingTabIndexReturnType<ChildElement>["rovingTabIndexReturn"], "getTabbableIndex" | "setTabbableIndex">;
    linearNavigationParameters: {
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
        getHighestIndex(): number;
        /**
         * Controls which arrow keys are used to navigate through the component.
         * Not relative to the writing mode -- these are the literal keys that need to be pressed.
         *
         * Use "either" to allow navigation in either direction.
         *
         * Use "none" to disallow navigation with the arrow keys in any direction.
         */
        navigationDirection: "horizontal" | "vertical" | "either" | "none";
        /**
         * If set to true, navigation with the arrow keys will be
         * disabled, but navigation with the home & end keys will
         * be unaffected.
         */
        disableArrowKeys: boolean;
        /**
         * If set to true, navigation with the home & end keys will
         * be disabled, but navigation with the arrow keys will be
         * unaffected.
         */
        disableHomeEndKeys: boolean;
    };
}
/** Arguments passed to the child 'useLinearNavigationChild` */
/**
 * When used in tandem with `useRovingTabIndex`, allows control of
 * the tabbable index with the arrow keys.
 *
 * @see useListNavigation, which packages everything up together.
 */
export declare function useLinearNavigation<ParentOrChildElement extends Element, ChildElement extends Element>({ rovingTabIndexReturn, linearNavigationParameters }: UseLinearNavigationParameters<ParentOrChildElement, ChildElement>): UseLinearNavigationReturnType<ParentOrChildElement>;
export interface TryNavigateToIndexParameters {
    highestChildIndex: number;
    isValid(index: number): boolean;
    target: number;
    searchDirection: 1 | -1;
    indexMangler: (n: number) => number;
    indexDemangler: (n: number) => number;
}
export declare function tryNavigateToIndex({ isValid, highestChildIndex, searchDirection, indexDemangler, indexMangler, target }: TryNavigateToIndexParameters): LinearNavigationResult;
//# sourceMappingURL=use-linear-navigation.d.ts.map