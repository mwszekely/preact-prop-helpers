import { UsePressParameters } from "../../component-use/use-press.js";
import { UseRefElementReturnType } from "../../dom-helpers/use-ref-element.js";
import { UseTextContentParameters, UseTextContentReturnType } from "../../dom-helpers/use-text-content.js";
import { ElementProps, KeyboardEventType, Nullable } from "../../util/types.js";
import { UseRovingTabIndexChildInfo, UseRovingTabIndexChildParameters, UseRovingTabIndexReturnType } from "./use-roving-tabindex.js";
export interface UseTypeaheadNavigationReturnType<ParentOrChildElement extends Element> {
    typeaheadNavigationReturn: {
        /** Returns the string currently typed by the user. Stable, but cannot be called during render. */
        getCurrentTypeahead(): string | null;
        /**
         * What the current status of the user's input is:
         *
         * * `"none"`: Typeahead is not in progress; the user has not typed anything (or has not for the given timeout period).
         * * `"valid"`: The string the user has typed so far corresponds to at least one child
         * * `"invalid"`: The string the user has typed so does not correspond to any child
         */
        typeaheadStatus: "invalid" | "valid" | "none";
    };
    propsStable: ElementProps<ParentOrChildElement>;
    context: UseTypeaheadNavigationContext;
}
export interface UseTypeaheadNavigationContext {
    typeaheadNavigationContext: {
        /** **STABLE** (Don't call during render) */
        excludeSpace: () => boolean;
        sortedTypeaheadInfo: Array<TypeaheadInfo>;
        insertingComparator: (lhs: string | null, rhs: TypeaheadInfo) => number;
    };
}
export interface UseTypeaheadNavigationChildInfo<TabbableChildElement extends Element> extends Pick<UseRovingTabIndexChildInfo<TabbableChildElement>, "index"> {
}
export interface UseTypeaheadNavigationParameters<TabbableChildElement extends Element, _M extends UseTypeaheadNavigationChildInfo<TabbableChildElement>> {
    typeaheadNavigationParameters: {
        /**
         * **Optional**
         *
         * Called any time the currently tabbable index changes as a result of a typeahead-related keypress
         *
         */
        onNavigateTypeahead: Nullable<(newIndex: number | null, event: KeyboardEventType<TabbableChildElement>) => void>;
        /**
         * Must return true if the given child can be navigated to.
         *
         * Generally corresponds to a `hidden` or `disabled` prop.
         * @param i
         */
        isValid(i: number): boolean;
        /**
         * A collator to use when comparing.
         * If not provided, simply uses `localeCompare` after transforming each to lowercase, which will, at best, work okay in English.
         */
        collator: null | Intl.Collator;
        /**
         * If true, no typeahead-related processing will occur, effectively disabling this invocation of `useTypeaheadNavigation` altogether.
         */
        noTypeahead: boolean;
        /**
         * How long after the user's last typeahead-related keypress does it take for the system to reset?
         */
        typeaheadTimeout: number;
    };
    rovingTabIndexReturn: Pick<UseRovingTabIndexReturnType<any, TabbableChildElement, any>["rovingTabIndexReturn"], "getTabbableIndex" | "setTabbableIndex">;
}
/** Arguments passed to the child `useTypeaheadNavigationChild` */
export interface UseTypeaheadNavigationChildParameters<ChildElement extends Element, _M extends UseTypeaheadNavigationChildInfo<ChildElement>> {
    info: Pick<UseRovingTabIndexChildParameters<ChildElement, UseRovingTabIndexChildInfo<ChildElement>>["info"], "index">;
    textContentParameters: Pick<UseTextContentParameters<ChildElement>["textContentParameters"], "getText">;
    refElementReturn: Pick<UseRefElementReturnType<ChildElement>["refElementReturn"], "getElement">;
    context: UseTypeaheadNavigationContext;
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
export declare function useTypeaheadNavigation<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseTypeaheadNavigationChildInfo<ChildElement>>({ typeaheadNavigationParameters: { collator, typeaheadTimeout, noTypeahead, isValid, onNavigateTypeahead, ...void3 }, rovingTabIndexReturn: { getTabbableIndex: getIndex, setTabbableIndex: setIndex, ...void1 }, ...void2 }: UseTypeaheadNavigationParameters<ChildElement, M>): UseTypeaheadNavigationReturnType<ParentOrChildElement>;
export declare function useTypeaheadNavigationChild<ChildElement extends Element, M extends UseTypeaheadNavigationChildInfo<ChildElement>>({ info: { index, ...void1 }, textContentParameters: { getText, ...void5 }, context: { typeaheadNavigationContext: { sortedTypeaheadInfo, insertingComparator, excludeSpace, ...void2 } }, refElementReturn: { getElement, ...void3 }, ...void4 }: UseTypeaheadNavigationChildParameters<ChildElement, M>): UseTypeaheadNavigationChildReturnType;
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