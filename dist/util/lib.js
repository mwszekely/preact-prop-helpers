export { Fragment, cloneElement, createContext, createElement } from "preact";
export { createPortal, forwardRef, memo } from "preact/compat";
export { useCallback, useContext, useDebugValue, useEffect, useId, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState } from "preact/hooks";
import { options } from "preact";
export function debounceRendering(f) {
    (options.debounceRendering ?? queueMicrotask)(f);
}
//# sourceMappingURL=lib.js.map