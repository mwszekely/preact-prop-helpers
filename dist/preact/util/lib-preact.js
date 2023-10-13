export { Fragment, cloneElement, createContext, createElement } from "preact";
export { createPortal, forwardRef, memo } from "preact/compat";
export { useCallback, useContext, useDebugValue, useEffect, useId, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState } from "preact/hooks";
import { options } from "preact";
import { EventMapping as em } from "./lib-shared.js";
// In React, this is useInsertionEffect
export { useBeforeLayoutEffect } from "./use-before-layout-effect.js";
export function debounceRendering(f) {
    (options.debounceRendering ?? queueMicrotask)(f);
}
export const onfocusin = "onfocusin";
export const onfocusout = "onfocusout";
export const EventMapping = {
    dblclick: "onDblClick",
    focusin: "onfocusin",
    focusout: "onfocusout",
    formdata: "onFormData",
    toggle: "onToggle",
    ...em
};
//# sourceMappingURL=lib-preact.js.map