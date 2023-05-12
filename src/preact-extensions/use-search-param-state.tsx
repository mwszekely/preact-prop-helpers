
import { useCallback, useLayoutEffect, useRef } from "preact/hooks";
import { useUrl } from "../observers/use-url.js";
import { OmitStrong } from "../util/types.js";
import { OnPassiveStateChange, runImmediately, usePassiveState } from "./use-passive-state.js";
import { useStableCallback } from "./use-stable-callback.js";
import { useState } from "./use-state.js";

export type OnParamValueChanged<T> = OnPassiveStateChange<T, never>;
export type SetParamWithHistory<T> = (value: T | ((prevValue: T) => T), reason?: "push" | "replace") => void;

/* eslint-disable @typescript-eslint/no-empty-interface */
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
export interface SearchParamStates { }

function parseParam<Key extends keyof SearchParamStates, T = SearchParamStates[Key]>(url: URL | null | undefined, paramKey: Key | null, fromString: ((value: string) => T | null) = JSON.parse): T | undefined {
    if (paramKey == undefined)
        return paramKey ?? undefined;

    url ??= new URL(window.location.toString());
    let value = url.searchParams.get(paramKey);
    if (value == undefined)
        return value ?? undefined;
    return fromString(value) ?? undefined;
}

function unparseParam<Key extends keyof SearchParamStates, T = SearchParamStates[Key]>(params: URLSearchParams, paramKey: Key | null, value: T, toString: ((value: T | null) => (string | null)) = JSON.stringify) {
    if (paramKey == null)
        return;

    const type = typeof value;
    if (type === "boolean") {
        if (value === true) {
            params.set(paramKey, "");
        }
        else {
            params.delete(paramKey);
        }
    }
    else {
        params.set(paramKey, `${toString(value)}`);
    }
}

export interface UseSearchParamStateParameters<Key extends keyof SearchParamStates, T = SearchParamStates[Key]> {
    key: Key;
    initialValue: T;
    defaultReason?: "push" | "replace";
    onValueChange?: OnParamValueChanged<T> | null | undefined;
    fromString: ((value: string) => T | null);
    toString?: ((value: T | null) => (string | null)) | undefined;
}

/**
 * Provides access to the requested Search Param's value
 * 
 * Note that while this function is like usePassiveState (itself like useState and useEffect combined),
 * the `setState` return function is, due to browser limitations, not syncronous, but that's
 * like most calls to `setState` anyway I guess?
 * 
 * @param paramKey The name of the URL search parameter to reference 
 * @param type The type of data encode/decode (`"string"` | `"boolean"` | `"number"` | `"bigint"`)
 * @param onParamValueChanged Will be called any time the requested Search Parameter's value changes.
 */
export function useSearchParamState<Key extends keyof SearchParamStates>({ key: paramKey, defaultReason, fromString, initialValue, onValueChange, toString }: UseSearchParamStateParameters<Key, SearchParamStates[Key]>) {
    type T = SearchParamStates[Key];
    //fromString ??= JSON.parse;
    //toString ??= JSON.stringify;
    toString ??= (value) => `${value}`;
    defaultReason ??= "replace";

    // We keep a local copy of our current Search Param value
    // because changing it is actually an asyncronous operation
    // and we can't know when it ends aside from just "did the URL change or not"
    // so we might as well keep this state around locally to compensate.
    const savedParamValue = useRef(initialValue);
    const [getSavedParamValue, setSavedParamValue] = usePassiveState<T, never>(onValueChange, useStableCallback(() => {
        return savedParamValue.current = (parseParam<Key, T>(null, paramKey, fromString) ?? initialValue);
    }), runImmediately);
    const setParamWithHistory = useStableCallback<SetParamWithHistory<T>>((newValueOrUpdater, reason?: "push" | "replace") => {
        let prevValue: T = parseParam<Key, T>(null, paramKey, fromString) ?? initialValue;
        let nextValue: T = (typeof newValueOrUpdater == "function" ? (newValueOrUpdater as Function)(prevValue) : newValueOrUpdater);

        let newParams = new URLSearchParams((new URL(window.location.toString()).searchParams));
        unparseParam<Key, T>(newParams, paramKey, nextValue as T, toString);
        let nextUrl = new URL(window.location.toString());
        nextUrl.search = prettyPrintParams(newParams);
        history[`${reason ?? defaultReason ?? "replace"}State`]({}, document.title, nextUrl);
        setUrl(nextUrl.toString());
        setSavedParamValue(nextValue);
    });


    // Any time the URL changes, it means the Search Param we care about might have changed.
    // Parse it out and save it.
    const [, setUrl] = useUrl(useStableCallback(url => {
        const newParam = parseParam<Key, T>(null, paramKey, fromString) ?? initialValue;
        setSavedParamValue(newParam);
    }));

    // Ensure we can call getValue during render--it's fine.
    return [useCallback(() => { return savedParamValue.current; }, []), setParamWithHistory] as const;
}

export function useSearchParamStateDeclarative<Key extends keyof SearchParamStates>({ key, defaultReason, fromString, initialValue, toString }: OmitStrong<UseSearchParamStateParameters<Key, SearchParamStates[Key]>, "onValueChange">) {
    const [value, setValue, getValue] = useState<SearchParamStates[Key]>(parseParam<Key>(null, key, fromString) ?? initialValue);
    useSearchParamState<Key>({
        key,
        fromString,
        initialValue,
        defaultReason,
        onValueChange: setValue,
        toString
    });


    useLayoutEffect(() => {
        const p = parseParam(null, key, fromString);
        setValue(p!);
    }, [])

    return [value, setValue, getValue] as const;

}

function prettyPrintParams(params: URLSearchParams) {
    const paramArray = [...params.entries()].filter((key, value) => value != null);
    if (paramArray.length == 0)
        return "";


    let queryString = paramArray.map(([key, value]) => {
        if (value === "" || (value as any) === true)
            return `${encodeURIComponent(key)}`;
        else
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }).join("&");

    return `?${queryString}`;

}
