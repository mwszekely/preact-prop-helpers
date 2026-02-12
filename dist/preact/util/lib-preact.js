import { options } from "preact";
import { useCallback as ucb } from "preact/hooks";
import { EventMapping as em } from "./lib-shared.js";
export { cloneElement, createContext, createElement, Fragment } from "preact";
export { createPortal, forwardRef, memo } from "preact/compat";
export { useContext, useDebugValue, useEffect, useId, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState } from "preact/hooks";
// Patch the type (only the type) of useCallback to allow for nullable functions
export const useCallback = ucb;
// In React, this is useInsertionEffect
export { useBeforeLayoutEffect } from "./use-before-layout-effect.js";
export function debounceRendering(f) {
    (options.debounceRendering ?? queueMicrotask)(f);
}
// @ts-expect-error (These are correct, I don't know why the types are wrong all of a sudden...?)
export const onfocusin = "onfocusin";
// @ts-expect-error (Capitalizing these results in errors with at least grid navigation)
export const onfocusout = "onfocusout";
export const EventMapping = {
    beforetoggle: null,
    dblclick: "onDblClick",
    focusin: "onFocusIn",
    focusout: "onFocusOut",
    formdata: "onFormData",
    toggle: "onToggle",
    contextlost: null,
    contextrestored: null,
    ...em
};
//# sourceMappingURL=lib-preact.js.map