import { options } from "preact";
import { useCallback as ucb } from "preact/hooks";
import { getEventMapping as gem } from "./lib-shared.js";
export { cloneElement, createContext, createElement, Fragment } from "preact";
export { createPortal, forwardRef, memo, useInsertionEffect } from "preact/compat";
export { useContext, useDebugValue, useEffect, useId, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState } from "preact/hooks";
export { debugLog, identity, noop } from "./lib-shared.js";
// Patch the type (only the type) of useCallback to allow for nullable functions
export const useCallback = ucb;
export function debounceRendering(f) {
    (options.debounceRendering ?? queueMicrotask)(f);
}
// @ts-expect-error (These are correct, I don't know why the types are wrong all of a sudden...?)
export const onfocusin = "onfocusin";
// @ts-expect-error (Capitalizing these results in errors with at least grid navigation)
export const onfocusout = "onfocusout";
export function getEventMapping() {
    return {
        beforetoggle: null,
        dblclick: "onDblClick",
        focusin: "onFocusIn",
        focusout: "onFocusOut",
        formdata: "onFormData",
        toggle: "onToggle",
        ...gem()
    };
}
//# sourceMappingURL=lib-preact.js.map