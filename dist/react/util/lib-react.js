//// @ts-expect-error
export { cloneElement, createContext, createElement, forwardRef, Fragment, memo, useCallback, useContext, useDebugValue, useEffect, useId, useImperativeHandle, useInsertionEffect, useLayoutEffect, useMemo, useReducer, useRef, useState } from "react";
import { getEventMapping as gem } from "./lib-shared.js";
//// @ts-expect-error
export { createPortal } from "react-dom";
export { identity, noop } from "./lib-shared.js";
export function debounceRendering(f) {
    // TODO?
    return queueMicrotask(f);
    //(options.debounceRendering ?? queueMicrotask)(f);
}
export const onfocusin = "onFocus";
export const onfocusout = "onBlur";
export function getEventMapping() {
    return {
        beforetoggle: null,
        dblclick: "onDoubleClick",
        focusin: "onFocus",
        focusout: "onBlur",
        formdata: null,
        toggle: "onToggle",
        contextlost: null,
        contextrestored: null,
        beforematch: null,
        pointerrawupdate: null,
        ...gem(),
    };
}
//# sourceMappingURL=lib-react.js.map