import { PropNames_PressParameters_excludeSpace, UsePressParameters } from "../../component-use/use-press.js";
import { PropNames_RefElementReturn_getElement, UseRefElementReturnType } from "../../dom-helpers/use-ref-element.js";
import { PropNames_TextContentParameters_getText, UseTextContentParameters, UseTextContentReturnType } from "../../dom-helpers/use-text-content.js";
import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { ElementProps, KeyboardEventType, Nullable } from "../../util/types.js";
import { PropNames_RovingTabIndexReturn_getTabbableIndex, PropNames_RovingTabIndexReturn_setTabbableIndex, UseRovingTabIndexChildInfo, UseRovingTabIndexReturnType } from "./use-roving-tabindex.js";
export declare const PropNames_TypeaheadNavigationParameters_onNavigateTypeahead = "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead";
export declare const PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation = "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation";
export declare const PropNames_TypeaheadNavigationParameters_collator = "PropNames.TypeaheadNavigationParameters.collator";
export declare const PropNames_TypeaheadNavigationParameters_noTypeahead = "PropNames.TypeaheadNavigationParameters.noTypeahead";
export declare const PropNames_TypeaheadNavigationParameters_typeaheadTimeout = "PropNames.TypeaheadNavigationParameters.typeaheadTimeout";
export declare const PropNames_TypeaheadNavigationReturn_getCurrentTypeahead = "PropNames.TypeaheadNavigationReturn.getCurrentTypeahead";
export declare const PropNames_TypeaheadNavigationReturn_typeaheadStatus = "PropNames.TypeaheadNavigationReturn.typeaheadStatus";
export declare const PropNames_TypeaheadNavigationChildReturn_tabbable = "PropNames.TypeaheadNavigationChildReturn.tabbable";
export declare const PropNames_TypeaheadNavigationChildReturn_getTabbable = "PropNames.TypeaheadNavigationChildReturn.getTabbable";
export interface UseTypeaheadNavigationReturnTypeSelf {
    /** Returns the string currently typed by the user. Stable, but cannot be called during render. */
    [PropNames_TypeaheadNavigationReturn_getCurrentTypeahead](): string | null;
    /**
     * What the current status of the user's input is:
     *
     * * `"none"`: Typeahead is not in progress; the user has not typed anything (or has not for the given timeout period).
     * * `"valid"`: The string the user has typed so far corresponds to at least one child
     * * `"invalid"`: The string the user has typed so does not correspond to any child
     */
    [PropNames_TypeaheadNavigationReturn_typeaheadStatus]: "invalid" | "valid" | "none";
}
export interface UseTypeaheadNavigationContextSelf {
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
    [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: Nullable<(newIndex: number | null, event: KeyboardEventType<TabbableChildElement>) => void>;
    /**
     * Must return true if the given child can be navigated to.
     *
     * Generally corresponds to a `hidden` or `disabled` prop.
     * @param index - Which child to query
     *
     * @nonstable
     */
    [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation](index: number): boolean;
    /**
     * A collator to use when comparing.
     * If not provided, simply uses `localeCompare` after transforming each to lowercase, which will, at best, work okay in English.
     *
     * @nonstable
     */
    [PropNames_TypeaheadNavigationParameters_collator]: Nullable<Intl.Collator>;
    /**
     * If true, no typeahead-related processing will occur, effectively disabling this invocation of `useTypeaheadNavigation` altogether.
     */
    [PropNames_TypeaheadNavigationParameters_noTypeahead]: boolean;
    /**
     * How long after the user's last typeahead-related keypress does it take for the system to reset?
     */
    [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: number;
}
export interface UseTypeaheadNavigationReturnType<ParentOrChildElement extends Element> extends UseTypeaheadNavigationReturnTypeSelf {
    props: ElementProps<ParentOrChildElement>;
    context: UseTypeaheadNavigationContext;
}
export interface UseTypeaheadNavigationContext {
    typeaheadNavigationContext: UseTypeaheadNavigationContextSelf;
}
export interface UseTypeaheadNavigationChildInfo<TabbableChildElement extends Element> extends Pick<UseRovingTabIndexChildInfo<TabbableChildElement>, "index"> {
}
export interface UseTypeaheadNavigationParameters<TabbableChildElement extends Element> extends UseTypeaheadNavigationParametersSelf<TabbableChildElement>, Pick<UseRovingTabIndexReturnType<any, TabbableChildElement>, typeof PropNames_RovingTabIndexReturn_getTabbableIndex | typeof PropNames_RovingTabIndexReturn_setTabbableIndex> {
}
export type UseTypeaheadNavigationChildInfoKeysParameters = "index";
export type UseTypeaheadNavigationChildInfoKeysReturnType = never;
/** Arguments passed to the child `useTypeaheadNavigationChild` */
export interface UseTypeaheadNavigationChildParameters<ChildElement extends Element> extends UseGenericChildParameters<UseTypeaheadNavigationContext, Pick<UseTypeaheadNavigationChildInfo<ChildElement>, UseTypeaheadNavigationChildInfoKeysParameters>>, Pick<UseTextContentParameters<ChildElement>, typeof PropNames_TextContentParameters_getText>, Pick<UseRefElementReturnType<ChildElement>, typeof PropNames_RefElementReturn_getElement> {
}
export interface UseTypeaheadNavigationChildReturnType extends UseTextContentReturnType, Pick<UsePressParameters<any>, typeof PropNames_PressParameters_excludeSpace> {
}
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
export declare const useTypeaheadNavigation: <ParentOrChildElement extends Element, ChildElement extends Element>({ [PropNames_RovingTabIndexReturn_getTabbableIndex]: getIndex, [PropNames_RovingTabIndexReturn_setTabbableIndex]: setIndex, [PropNames_TypeaheadNavigationParameters_collator]: collator, [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead, [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation, [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead, [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout, ..._void1 }: UseTypeaheadNavigationParameters<ChildElement>) => UseTypeaheadNavigationReturnType<ParentOrChildElement>;
/**
 *
 * @compositeParams
 */
export declare const useTypeaheadNavigationChild: <ChildElement extends Element>({ info: { index, ..._void1 }, [PropNames_TextContentParameters_getText]: getText, [PropNames_RefElementReturn_getElement]: getElement, context: { typeaheadNavigationContext: { sortedTypeaheadInfo, insertingComparator, excludeSpace, ..._void2 } }, ..._void3 }: UseTypeaheadNavigationChildParameters<ChildElement>) => UseTypeaheadNavigationChildReturnType;
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