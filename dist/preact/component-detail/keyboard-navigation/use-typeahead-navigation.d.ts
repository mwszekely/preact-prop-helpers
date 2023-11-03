import { UsePress } from "../../component-use/use-press.js";
import { UseTextContent } from "../../dom-helpers/use-text-content.js";
import { KeyboardEventType } from "../../util/lib.js";
import { Nullable, Parameter, StandardDepsContext, StandardDepsInfo, StandardDepsPick, StandardDepsPropsStable, StandardHook } from "../../util/types.js";
import { UseRovingTabIndex, UseRovingTabIndexChildInfo } from "./use-roving-tabindex.js";
export interface UseTypeaheadNavigationReturnTypeSelf {
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
}
export interface UseTypeaheadNavigationChildContextSelf {
    /**
     * Stable, but don't call during render.
     *
     * @stable
     */
    excludeSpace: () => boolean;
    sortedTypeaheadInfo: Array<TypeaheadInfo>;
    insertingComparator: (lhs: string | null, rhs: TypeaheadInfo) => number;
}
export interface UseTypeaheadNavigationParametersSelf<TabbableChildElement extends Element> {
    /**
     * **Optional**
     *
     * Called any time the currently tabbable index changes as a result of a typeahead-related keypress
     *
     * @nonstable
     */
    onNavigateTypeahead: Nullable<(newIndex: number | null, event: KeyboardEventType<TabbableChildElement>) => void>;
    /**
     * Must return true if the given child can be navigated to.
     *
     * Generally corresponds to a `hidden` or `disabled` prop.
     * @param index - Which child to query
     *
     * @nonstable
     */
    isValidForTypeaheadNavigation(index: number): boolean;
    /**
     * A collator to use when comparing.
     * If not provided, simply uses `localeCompare` after transforming each to lowercase, which will, at best, work okay in English.
     *
     * @nonstable
     */
    collator: Nullable<Intl.Collator>;
    /**
     * If true, no typeahead-related processing will occur, effectively disabling this invocation of `useTypeaheadNavigation` altogether.
     */
    noTypeahead: boolean;
    /**
     * How long after the user's last typeahead-related keypress does it take for the system to reset?
     */
    typeaheadTimeout: number;
}
export interface UseTypeaheadNavigationChildContext {
    typeaheadNavigationContext: UseTypeaheadNavigationChildContextSelf;
}
export interface UseTypeaheadNavigationChildInfo<TabbableChildElement extends Element> extends Pick<UseRovingTabIndexChildInfo<TabbableChildElement>, "index"> {
}
export type UseTypeaheadNavigationChildInfoKeysParameters = "index";
export type UseTypeaheadNavigationChildInfoKeysReturnType = never;
export type UseTypeaheadNavigation<ParentOrChildElement extends Element, ChildElement extends Element> = StandardHook<"typeaheadNavigation", UseTypeaheadNavigationParametersSelf<ChildElement>, [
    StandardDepsPick<"return", UseRovingTabIndex<ParentOrChildElement, ChildElement>, "rovingTabIndexReturn", "pick", "getTabbableIndex" | "setTabbableIndex">
], UseTypeaheadNavigationReturnTypeSelf, [
    StandardDepsPropsStable<ParentOrChildElement>,
    StandardDepsContext<UseTypeaheadNavigationChildContext, "typeaheadNavigationContext">
]>;
export type UseTypeaheadNavigationChild<E extends Element> = StandardHook<"typeaheadNavigationChild", never, [
    StandardDepsContext<UseTypeaheadNavigationChildContext, "typeaheadNavigationContext">,
    StandardDepsInfo<UseTypeaheadNavigationChildInfo<E>, UseTypeaheadNavigationChildInfoKeysParameters>
], never, [
    StandardDepsPick<"params", UseTextContent<E>, "textContentParameters", "pick", "onTextContentChange">,
    StandardDepsPick<"params", UsePress<E>, "pressParameters", "pick", "excludeSpace">
]>;
interface TypeaheadInfo {
    text: string | null;
    unsortedIndex: number;
}
/**
 * Allows for the selection of a managed child by typing the given text associated with it.
 *
 * @see useListNavigation, which packages everything up together.
 *
 * @hasChild {@link useTypeaheadNavigationChild}
 *
 * @compositeParams
 */
export declare const useTypeaheadNavigation: <ParentOrChildElement extends Element, ChildElement extends Element>({ typeaheadNavigationParameters: { collator, typeaheadTimeout, noTypeahead, isValidForTypeaheadNavigation, onNavigateTypeahead, ...void3 }, rovingTabIndexReturn: { getTabbableIndex: getIndex, setTabbableIndex: setIndex, ...void1 }, ...void2 }: {
    typeaheadNavigationParameters: UseTypeaheadNavigationParametersSelf<ChildElement>;
} & StandardDepsPick<"return", UseRovingTabIndex<ParentOrChildElement, ChildElement>, "rovingTabIndexReturn", "pick", "setTabbableIndex" | "getTabbableIndex">) => {
    typeaheadNavigationReturn: UseTypeaheadNavigationReturnTypeSelf;
} & StandardDepsPropsStable<ParentOrChildElement> & StandardDepsContext<UseTypeaheadNavigationChildContext, "typeaheadNavigationContext">;
/**
 *
 * @compositeParams
 */
export declare const useTypeaheadNavigationChild: <ChildElement extends Element>({ info: { index, ...void1 }, context: { typeaheadNavigationContext: { sortedTypeaheadInfo, insertingComparator, excludeSpace, ...void2 } }, ...void4 }: {} & StandardDepsContext<UseTypeaheadNavigationChildContext, "typeaheadNavigationContext"> & StandardDepsInfo<UseTypeaheadNavigationChildInfo<ChildElement>, "index">) => {} & StandardDepsPick<"params", UseTextContent<ChildElement>, "textContentParameters", "pick", "onTextContentChange"> & StandardDepsPick<"params", UsePress<ChildElement>, "pressParameters", "pick", "excludeSpace">;
/**
 * Your usual binary search implementation.
 *
 * It's used here to quickly find a good spot to start searching for our next typeahead candidate.
 * @param array - The array to search through
 * @param wanted - The value you'd like to find
 * @param comparator - Compares `wanted` with the current value in `array`
 * @returns A non-negative value if `wanted` was found, and a negative number if not.
 * The absolute value of this number, minus one, is where `wanted` *would* be found if it *was* in `array`
 */
export declare function binarySearch<T, U, F extends (lhs: U, rhs: T) => number>(array: T[], wanted: U, comparator: F): number;
export {};
//# sourceMappingURL=use-typeahead-navigation.d.ts.map