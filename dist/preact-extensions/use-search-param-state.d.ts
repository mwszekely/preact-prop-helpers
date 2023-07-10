import { OmitStrong } from "../util/types.js";
import { OnPassiveStateChange } from "./use-passive-state.js";
export type OnParamValueChanged<T> = OnPassiveStateChange<T, never>;
export type SetParamWithHistory<T> = (value: T | ((prevValue: T) => T), reason?: "push" | "replace") => void;
/**
 * All types allowed by `useSearchParamState`.
 *
 * Use module augmentation to add new properties to this object that `useSearchParamState` will correctly understand:
 *
 * ````
 * declare module 'preact-prop-helpers' {
 *     interface SearchParamStates {
 *         numberState: number;
 *         stringState: string;
 *     }
 * }
 * ````
 */
export interface SearchParamStates {
}
export interface UseSearchParamStateParameters<Key extends keyof SearchParamStates, T = SearchParamStates[Key]> {
    key: Key;
    /** If there is no value in the URL for this state, then `initialValue` will be used instead. */
    initialValue: T;
    /**
     * How is the user's history modified when the state changes if not otherwise specified?
     * "`replace`" is recommended unless you *really* have a good reason to clog up the back button.
     */
    defaultReason?: "push" | "replace";
    onValueChange?: OnParamValueChanged<T> | null | undefined;
    stringToValue: ((value: string | null) => T | null);
    valueToString?: ((value: T | null) => (string | null)) | undefined;
}
/**
 * Provides access to the requested Search Param's value
 *
 * Note that while this function is like usePassiveState (itself like useState and useEffect combined),
 * the `setState` return function is, due to browser limitations, not synchronous, but that's
 * like most calls to `setState` anyway I guess?
 *
 * @param paramKey The name of the URL search parameter to reference
 * @param type The type of data encode/decode (`"string"` | `"boolean"` | `"number"` | `"bigint"`)
 * @param onParamValueChanged Will be called any time the requested Search Parameter's value changes.
 */
export declare function useSearchParamState<Key extends keyof SearchParamStates>({ key: paramKey, defaultReason, stringToValue, initialValue, onValueChange, valueToString }: UseSearchParamStateParameters<Key, SearchParamStates[Key]>): readonly [() => SearchParamStates[Key], SetParamWithHistory<SearchParamStates[Key]>];
export declare function useSearchParamStateDeclarative<Key extends keyof SearchParamStates>({ key, defaultReason, stringToValue, initialValue, valueToString }: OmitStrong<UseSearchParamStateParameters<Key, SearchParamStates[Key]>, "onValueChange">): readonly [SearchParamStates[Key], SetParamWithHistory<SearchParamStates[Key]>, () => SearchParamStates[Key]];
//# sourceMappingURL=use-search-param-state.d.ts.map