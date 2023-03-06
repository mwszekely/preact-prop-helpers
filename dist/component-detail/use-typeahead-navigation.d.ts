import { UsePressParameters } from "../component-use/use-press.js";
import { h } from "preact";
import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { UseTextContentParameters, UseTextContentReturnType } from "../dom-helpers/use-text-content.js";
import { UseRovingTabIndexChildParameters, UseRovingTabIndexReturnType } from "./use-roving-tabindex.js";
export interface UseTypeaheadNavigationReturnType<ParentOrChildElement extends Element> {
    typeaheadNavigationReturn: {
        getCurrentTypeahead(): string | null;
        typeaheadStatus: "invalid" | "valid" | "none";
        propsStable: h.JSX.HTMLAttributes<ParentOrChildElement>;
    };
    typeaheadNavigationChildContext: UseTypeaheadNavigationContext;
}
export interface UseTypeaheadNavigationContext {
    typeaheadNavigationChildParameters: {
        excludeSpace: () => boolean;
        sortedTypeaheadInfo: Array<TypeaheadInfo>;
        insertingComparator: (lhs: string | null, rhs: TypeaheadInfo) => number;
    };
}
export interface UseTypeaheadNavigationParameters<TabbableChildElement extends Element> {
    typeaheadNavigationParameters: {
        /**
         * Must return true if the given child can be navigated to.
         *
         * Generally corresponds to a `hidden` or `disabled` prop.
         * @param i
         */
        isValid(i: number): boolean;
        /**
         * A collator to use when comparing. If not provided, simply uses `localeCompare` after transforming each to lowercase, which will, at best, work okay in English.
         */
        collator: null | Intl.Collator;
        noTypeahead: boolean;
        typeaheadTimeout: number;
    };
    rovingTabIndexReturn: Pick<UseRovingTabIndexReturnType<TabbableChildElement>["rovingTabIndexReturn"], "getTabbableIndex" | "setTabbableIndex">;
}
/** Arguments passed to the child `useTypeaheadNavigationChild` */
export interface UseTypeaheadNavigationChildParameters<ChildElement extends Element> {
    managedChildParameters: Pick<UseRovingTabIndexChildParameters<ChildElement>["managedChildParameters"], "index">;
    textContentParameters: Pick<UseTextContentParameters<ChildElement>["textContentParameters"], "getText" | "hidden">;
    refElementReturn: Pick<UseRefElementReturnType<ChildElement>["refElementReturn"], "getElement">;
    typeaheadNavigationChildContext: UseTypeaheadNavigationContext;
}
export interface UseTypeaheadNavigationChildReturnType extends UseTextContentReturnType {
    pressParameters: Pick<UsePressParameters<any>["pressParameters"], "excludeSpace">;
}
interface TypeaheadInfo {
    text: string | null;
    unsortedIndex: number;
}
/**
 * Allows for the selection of a managed child by typing the given text associated with it.
 *
 * @see useListNavigation, which packages everything up together.
 */
export declare function useTypeaheadNavigation<ParentOrChildElement extends Element, ChildElement extends Element>({ typeaheadNavigationParameters: { collator, typeaheadTimeout, noTypeahead, isValid, ..._void3 }, rovingTabIndexReturn: { getTabbableIndex: getIndex, setTabbableIndex: setIndex, ..._void1 }, ..._void2 }: UseTypeaheadNavigationParameters<ChildElement>): UseTypeaheadNavigationReturnType<ParentOrChildElement>;
export declare function useTypeaheadNavigationChild<ChildElement extends Element>({ managedChildParameters: { index, ...void1 }, textContentParameters: { getText, hidden, ...void5 }, typeaheadNavigationChildContext: { typeaheadNavigationChildParameters: { sortedTypeaheadInfo, insertingComparator, excludeSpace, ...void2 } }, refElementReturn: { getElement, ...void3 }, ...void4 }: UseTypeaheadNavigationChildParameters<ChildElement>): UseTypeaheadNavigationChildReturnType;
/**
 * Your usual binary search implementation.
 *
 * It's used here to quickly find a good spot to start searching for our next typeahead candidate.
 * @param array The array to search through
 * @param wanted The value you'd like to find
 * @param comparator Compares `wanted` with the current value in `array`
 * @returns A non-negative value if `wanted` was found, and a negative number if not.
 * The absolute value of this number, minus one, is where `wanted` *would* be found if it *was* in `array`
 */
export declare function binarySearch<T, U, F extends (lhs: U, rhs: T) => number>(array: T[], wanted: U, comparator: F): number;
export {};
//# sourceMappingURL=use-typeahead-navigation.d.ts.map