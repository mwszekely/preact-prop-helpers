import { useUrl } from "../observers/use-url.js";
import { getDocument, getWindow } from "../util/get-window.js";
import { useCallback, useEffect, useRef } from "../util/lib.js";
import { runImmediately, usePassiveState } from "./use-passive-state.js";
import { useStableCallback } from "./use-stable-callback.js";
import { useState } from "./use-state.js";
export const SearchParamStates = undefined; // Needed for the isolatedModules flag?
function parseParam(url, paramKey, fromString) {
    const window = getWindow();
    if (paramKey == undefined)
        return paramKey ?? undefined;
    url ??= new URL(window?.location?.toString() ?? "");
    let value = url.searchParams.get(paramKey);
    let ret = fromString(value) ?? undefined;
    return ret;
}
function unparseParam(params, paramKey, value, ts2) {
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
/**
 * Provides access to the requested Search Param's value
 *
 * @remarks Note that while this function is like usePassiveState (itself like useState and useEffect combined),
 * the `setState` return function is, due to browser limitations, not synchronous, but that's
 * like most calls to `setState` anyway I guess?
 *
 * {@include } {@link UseSearchParamStateParameters}
 *
 * {@include } {@link SearchParamStates}
 *
 * @param paramKey - The name of the URL search parameter to reference
 * @param type - The type of data encode/decode (`"string"` | `"boolean"` | `"number"` | `"bigint"`)
 * @param onParamValueChanged - Will be called any time the requested Search Parameter's value changes.
 */
export function useSearchParamState({ key: paramKey, defaultReason, stringToValue, initialValue, onValueChange, valueToString }) {
    //fromString ??= JSON.parse;
    //toString ??= JSON.stringify;
    valueToString ??= (value) => `${value}`;
    defaultReason ??= "replace";
    const getInitialValue = useStableCallback(() => (parseParam(new URL(getWindow()?.location?.toString() || ""), paramKey, stringToValue) ?? initialValue));
    useEffect(() => {
        setParamWithHistory(getInitialValue(), "replace");
    }, []);
    // We keep a local copy of our current Search Param value
    // because changing it is actually an asynchronous operation
    // and we can't know when it ends aside from just "did the URL change or not"
    // so we might as well keep this state around locally to compensate.
    const savedParamValue = useRef(parseParam(null, paramKey, stringToValue) ?? initialValue);
    const [_getSavedParamValue, setSavedParamValue] = usePassiveState(onValueChange, useStableCallback(() => {
        return savedParamValue.current = (parseParam(null, paramKey, stringToValue) ?? getInitialValue());
    }), { debounceRendering: runImmediately, skipMountInitialization: true });
    const setParamWithHistory = useStableCallback((newValueOrUpdater, reason) => {
        const document = getDocument();
        const window = getWindow();
        if (document && window) {
            let prevValue = parseParam(null, paramKey, stringToValue) ?? getInitialValue();
            let nextValue = (typeof newValueOrUpdater == "function" ? newValueOrUpdater(prevValue) : newValueOrUpdater);
            let newParams = new URLSearchParams((new URL(window.location.toString()).searchParams));
            unparseParam(newParams, paramKey, nextValue, valueToString);
            let nextUrl = new URL(window.location.toString());
            nextUrl.search = prettyPrintParams(newParams);
            reason ??= defaultReason ?? "replace";
            history[`${reason}State`]({}, document.title, nextUrl);
            setUrl(nextUrl.toString(), reason);
            setSavedParamValue(nextValue);
        }
    });
    // Any time the URL changes, it means the Search Param we care about might have changed.
    // Parse it out and save it.
    const [, setUrl] = useUrl(useStableCallback(_url => {
        const newParam = parseParam(null, paramKey, stringToValue) ?? getInitialValue();
        setSavedParamValue(newParam);
    }));
    // Ensure we can call getValue during render--it's fine.
    return [useCallback(() => { return savedParamValue.current; }, []), setParamWithHistory];
}
export function useSearchParamStateDeclarative({ key, defaultReason, stringToValue, initialValue, valueToString }) {
    const [value, setLocalCopy] = useState(parseParam(null, key, stringToValue) ?? initialValue);
    const [getValue, setValue] = useSearchParamState({
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