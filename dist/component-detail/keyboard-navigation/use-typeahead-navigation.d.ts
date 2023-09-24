import { UsePressParameters } from "../../component-use/use-press.js";
import { UseRefElementReturnType } from "../../dom-helpers/use-ref-element.js";
import { UseTextContentParameters, UseTextContentReturnType } from "../../dom-helpers/use-text-content.js";
import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { ElementProps, KeyboardEventType, Nullable, PropNames } from "../../util/types.js";
import { UseRovingTabIndexChildInfo, UseRovingTabIndexReturnType } from "./use-roving-tabindex.js";
declare module "../../util/types.js" {
    interface PropNames {
        TypeaheadNavigationParameters: typeof P1Names;
    }
}
declare module "../../util/types.js" {
    interface PropNames {
        TypeaheadNavigationReturn: typeof R1Names;
    }
}
declare module "../../util/types.js" {
    interface PropNames {
        TypeaheadNavigationChildParameters: typeof P2Names;
    }
}
declare module "../../util/types.js" {
    interface PropNames {
        TypeaheadNavigationChildReturn: typeof R2Names;
    }
}
export declare const P1Names: {
    readonly onNavigateTypeahead: "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead";
    readonly isValidForTypeaheadNavigation: "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation";
    readonly collator: "PropNames.TypeaheadNavigationParameters.collator";
    readonly noTypeahead: "PropNames.TypeaheadNavigationParameters.noTypeahead";
    readonly typeaheadTimeout: "PropNames.TypeaheadNavigationParameters.typeaheadTimeout";
};
export declare const R1Names: {
    readonly getCurrentTypeahead: "PropNames.TypeaheadNavigationReturn.getCurrentTypeahead";
    readonly typeaheadStatus: "PropNames.TypeaheadNavigationReturn.typeaheadStatus";
};
export declare const P2Names: {};
export declare const R2Names: {
    readonly tabbable: "PropNames.TypeaheadNavigationChildReturn.tabbable";
    readonly getTabbable: "PropNames.TypeaheadNavigationChildReturn.getTabbable";
};
export interface UseTypeaheadNavigationReturnTypeSelf {
    /** Returns the string currently typed by the user. Stable, but cannot be called during render. */
    [PropNames.TypeaheadNavigationReturn.getCurrentTypeahead](): string | null;
    /**
     * What the current status of the user's input is:
     *
     * * `"none"`: Typeahead is not in progress; the user has not typed anything (or has not for the given timeout period).
     * * `"valid"`: The string the user has typed so far corresponds to at least one child
     * * `"invalid"`: The string the user has typed so does not correspond to any child
     */
    [PropNames.TypeaheadNavigationReturn.typeaheadStatus]: "invalid" | "valid" | "none";
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
    [PropNames.TypeaheadNavigationParameters.onNavigateTypeahead]: Nullable<(newIndex: number | null, event: KeyboardEventType<TabbableChildElement>) => void>;
    /**
     * Must return true if the given child can be navigated to.
     *
     * Generally corresponds to a `hidden` or `disabled` prop.
     * @param index - Which child to query
     *
     * @nonstable
     */
    [PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation](index: number): boolean;
    /**
     * A collator to use when comparing.
     * If not provided, simply uses `localeCompare` after transforming each to lowercase, which will, at best, work okay in English.
     *
     * @nonstable
     */
    [PropNames.TypeaheadNavigationParameters.collator]: Nullable<Intl.Collator>;
    /**
     * If true, no typeahead-related processing will occur, effectively disabling this invocation of `useTypeaheadNavigation` altogether.
     */
    [PropNames.TypeaheadNavigationParameters.noTypeahead]: boolean;
    /**
     * How long after the user's last typeahead-related keypress does it take for the system to reset?
     */
    [PropNames.TypeaheadNavigationParameters.typeaheadTimeout]: number;
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
export interface UseTypeaheadNavigationParameters<TabbableChildElement extends Element> extends UseTypeaheadNavigationParametersSelf<TabbableChildElement>, Pick<UseRovingTabIndexReturnType<any, TabbableChildElement>, (typeof PropNames)["RovingTabIndexReturn"]["getTabbableIndex"] | (typeof PropNames)["RovingTabIndexReturn"]["setTabbableIndex"]> {
}
export type UseTypeaheadNavigationChildInfoKeysParameters = "index";
export type UseTypeaheadNavigationChildInfoKeysReturnType = never;
/** Arguments passed to the child `useTypeaheadNavigationChild` */
export interface UseTypeaheadNavigationChildParameters<ChildElement extends Element> extends UseGenericChildParameters<UseTypeaheadNavigationContext, Pick<UseTypeaheadNavigationChildInfo<ChildElement>, UseTypeaheadNavigationChildInfoKeysParameters>>, Pick<UseTextContentParameters<ChildElement>, (typeof PropNames)["TextContentParameters"]["getText"]>, Pick<UseRefElementReturnType<ChildElement>, (typeof PropNames)["RefElementReturn"]["getElement"]> {
}
export interface UseTypeaheadNavigationChildReturnType extends UseTextContentReturnType, Pick<UsePressParameters<any>, (typeof PropNames)["PressParameters"]["excludeSpace"]> {
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
export declare const useTypeaheadNavigation: <ParentOrChildElement extends Element, ChildElement extends Element>({ [PropNames.RovingTabIndexReturn.getTabbableIndex]: getIndex, [PropNames.RovingTabIndexReturn.setTabbableIndex]: setIndex, [PropNames.TypeaheadNavigationParameters.collator]: collator, [PropNames.TypeaheadNavigationParameters.onNavigateTypeahead]: onNavigateTypeahead, [PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation, [PropNames.TypeaheadNavigationParameters.noTypeahead]: noTypeahead, [PropNames.TypeaheadNavigationParameters.typeaheadTimeout]: typeaheadTimeout, ..._void1 }: UseTypeaheadNavigationParameters<ChildElement>) => UseTypeaheadNavigationReturnType<ParentOrChildElement>;
/**
 *
 * @compositeParams
 */
export declare const useTypeaheadNavigationChild: <ChildElement extends Element>({ info: { index, ..._void1 }, [PropNames.TextContentParameters.getText]: getText, [PropNames.RefElementReturn.getElement]: getElement, context: { typeaheadNavigationContext: { sortedTypeaheadInfo, insertingComparator, excludeSpace, ..._void2 } }, ..._void3 }: UseTypeaheadNavigationChildParameters<ChildElement>) => UseTypeaheadNavigationChildReturnType;
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