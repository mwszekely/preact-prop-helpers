
import { useCallback, useEffect, useLayoutEffect, useRef } from "preact/hooks";
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

function parseParam<Key extends keyof SearchParamStates, T = SearchParamStates[Key]>(url: URL | null | undefined, paramKey: Key | null, fromString: ((value: string | null) => T | null)): T | undefined {
    if (paramKey == undefined)
        return paramKey ?? undefined;

    url ??= new URL(window.location.toString());
    let value = url.searchParams.get(paramKey);
    let ret = fromString(value) ?? undefined;
    return ret;
}

function unparseParam<Key extends keyof SearchParamStates, T = SearchParamStates[Key]>(params: URLSearchParams, paramKey: Key | null, value: T, ts2: ((value: T | null) => (string | null))) {
    if (paramKey == null)
        return;

    const type = typeof value;
    if (value == null) {
        params.delete(paramKey);
    }
    else if (type === "boolean") {
        if (value === true) {
            params.set(paramKey, "");
        }
        else {
            params.set(paramKey, "false");
        }
    }
    else {
        params.set(paramKey, `${ts2(value ?? null)}`);
    }
}

export interface UseSearchParamStateParameters<Key extends keyof SearchParamStates, T = SearchParamStates[Key]> {
    key: Key;
    initialValue: T;
    defaultReason?: "push" | "replace";
    onValueChange?: OnParamValueChanged<T> | null | undefined;
    stringToValue: ((value: string | null) => T | null);
    // Can't just be named `toString`...
    valueToString?: ((value: T | null) => (string | null)) | undefined;
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
export function useSearchParamState<Key extends keyof SearchParamStates>({ key: paramKey, defaultReason, stringToValue, initialValue, onValueChange, valueToString }: UseSearchParamStateParameters<Key, SearchParamStates[Key]>) {
    type T = SearchParamStates[Key];
    //fromString ??= JSON.parse;
    //toString ??= JSON.stringify;
    valueToString ??= (value) => `${value}`;
    defaultReason ??= "replace";

    const getInitialValue = useStableCallback(() => (parseParam(new URL(window.location.toString()), paramKey, stringToValue) ?? initialValue))


    useEffect(() => {
        setParamWithHistory(getInitialValue(), "replace");
    }, [])

    // We keep a local copy of our current Search Param value
    // because changing it is actually an asyncronous operation
    // and we can't know when it ends aside from just "did the URL change or not"
    // so we might as well keep this state around locally to compensate.
    const savedParamValue = useRef(initialValue);
    const [getSavedParamValue, setSavedParamValue] = usePassiveState<T, never>(onValueChange, useStableCallback(() => {
        return savedParamValue.current = (parseParam<Key, T>(null, paramKey, stringToValue) ?? getInitialValue());
    }), runImmediately);
    const setParamWithHistory = useStableCallback<SetParamWithHistory<T>>((newValueOrUpdater, reason?: "push" | "replace") => {
        let prevValue: T = parseParam<Key, T>(null, paramKey, stringToValue) ?? getInitialValue();
        let nextValue: T = (typeof newValueOrUpdater == "function" ? (newValueOrUpdater as Function)(prevValue) : newValueOrUpdater);

        let newParams = new URLSearchParams((new URL(window.location.toString()).searchParams));
        unparseParam<Key, T>(newParams, paramKey, nextValue as T, valueToString!);
        let nextUrl = new URL(window.location.toString());
        nextUrl.search = prettyPrintParams(newParams);
        reason ??= defaultReason ?? "replace";
        history[`${reason}State`]({}, document.title, nextUrl);
        setUrl(nextUrl.toString(), reason);
        setSavedParamValue(nextValue);
    });


    // Any time the URL changes, it means the Search Param we care about might have changed.
    // Parse it out and save it.
    const [, setUrl] = useUrl(useStableCallback(url => {
        const newParam = parseParam<Key, T>(null, paramKey, stringToValue) ?? getInitialValue();
        setSavedParamValue(newParam);
    }));

    // Ensure we can call getValue during render--it's fine.
    return [useCallback(() => { return savedParamValue.current; }, []), setParamWithHistory] as const;
}

export function useSearchParamStateDeclarative<Key extends keyof SearchParamStates>({ key, defaultReason, stringToValue, initialValue, valueToString }: OmitStrong<UseSearchParamStateParameters<Key, SearchParamStates[Key]>, "onValueChange">) {
    const [value, setLocalCopy] = useState<SearchParamStates[Key]>(parseParam<Key>(null, key, stringToValue)! ?? initialValue);
    const [getValue, setValue] = useSearchParamState<Key>({
        key,
        stringToValue,
        initialValue,
        defaultReason,
        onValueChange: setLocalCopy,
        valueToString
    });


    /*useLayoutEffect(() => {
        const p = parseParam(null, key, stringToValue);
        setValue(p!);
    }, [])*/

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
