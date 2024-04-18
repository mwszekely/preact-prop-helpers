export { Fragment, cloneElement, createContext, createElement, forwardRef, memo, useInsertionEffect as useBeforeLayoutEffect, useCallback, useContext, useDebugValue, useEffect, useId, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState } from "react";
export { createPortal } from "react-dom";
import { EventMapping as em } from "./lib-shared.js";
export function debounceRendering(f) {
    // TODO?
    return queueMicrotask(f);
    //(options.debounceRendering ?? queueMicrotask)(f);
}
export const onfocusin = "onFocus";
export const onfocusout = "onBlur";
export const EventMapping = {
    dblclick: "onDoubleClick",
    focusin: "onFocus",
    focusout: "onBlur",
    formdata: null,
    toggle: null,
    beforetoggle: null,
    ...em,
};
//# sourceMappingURL=lib-react.js.map