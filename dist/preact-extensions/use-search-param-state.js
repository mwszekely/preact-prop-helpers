import { useCallback, useLayoutEffect, useRef } from "preact/hooks";
import { useUrl } from "../observers/use-url.js";
import { runImmediately, usePassiveState } from "./use-passive-state.js";
import { useStableCallback } from "./use-stable-callback.js";
import { useState } from "./use-state.js";
function parseParam(url, paramKey, fromString = JSON.parse) {
    if (paramKey == undefined)
        return paramKey ?? undefined;
    url ??= new URL(window.location.toString());
    let value = url.searchParams.get(paramKey);
    if (value == undefined)
        return value ?? undefined;
    return fromString(value) ?? undefined;
}
function unparseParam(params, paramKey, value, toString = JSON.stringify) {
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
export function useSearchParamState({ key: paramKey, defaultReason, fromString, initialValue, onValueChange, toString }) {
    //fromString ??= JSON.parse;
    //toString ??= JSON.stringify;
    toString ??= (value) => `${value}`;
    defaultReason ??= "replace";
    // We keep a local copy of our current Search Param value
    // because changing it is actually an asyncronous operation
    // and we can't know when it ends aside from just "did the URL change or not"
    // so we might as well keep this state around locally to compensate.
    const savedParamValue = useRef(initialValue);
    const [getSavedParamValue, setSavedParamValue] = usePassiveState(onValueChange, useStableCallback(() => {
        return savedParamValue.current = (parseParam(null, paramKey, fromString) ?? initialValue);
    }), runImmediately);
    const setParamWithHistory = useStableCallback((newValueOrUpdater, reason) => {
        let prevValue = parseParam(null, paramKey, fromString) ?? initialValue;
        let nextValue = (typeof newValueOrUpdater == "function" ? newValueOrUpdater(prevValue) : newValueOrUpdater);
        let newParams = new URLSearchParams((new URL(window.location.toString()).searchParams));
        unparseParam(newParams, paramKey, nextValue, toString);
        let nextUrl = new URL(window.location.toString());
        nextUrl.search = prettyPrintParams(newParams);
        history[`${reason ?? defaultReason ?? "replace"}State`]({}, document.title, nextUrl);
        setUrl(nextUrl.toString());
        setSavedParamValue(nextValue);
    });
    // Any time the URL changes, it means the Search Param we care about might have changed.
    // Parse it out and save it.
    const [, setUrl] = useUrl(useStableCallback(url => {
        const newParam = parseParam(null, paramKey, fromString) ?? initialValue;
        setSavedParamValue(newParam);
    }));
    // Ensure we can call getValue during render--it's fine.
    return [useCallback(() => { return savedParamValue.current; }, []), setParamWithHistory];
}
export function useSearchParamStateDeclarative({ key, defaultReason, fromString, initialValue, toString }) {
    const [value, setValue, getValue] = useState(parseParam(null, key, fromString) ?? initialValue);
    useSearchParamState({
        key,
        fromString,
        initialValue,
        defaultReason,
        onValueChange: setValue,
        toString
    });
    useLayoutEffect(() => {
        const p = parseParam(null, key, fromString);
        setValue(p);
    }, []);
    return [value, setValue, getValue];
}
function prettyPrintParams(params) {
    const paramArray = [...params.entries()].filter((key, value) => value != null);
    if (paramArray.length == 0)
        return "";
    let queryString = paramArray.map(([key, value]) => {
        if (value === "" || value === true)
            return `${encodeURIComponent(key)}`;
        else
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }).join("&");
    return `?${queryString}`;
}
//# sourceMappingURL=use-search-param-state.js.map