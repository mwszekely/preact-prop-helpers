export { Fragment, cloneElement, createContext, createElement } from "preact";
export type { JSX, Ref, RefCallback, RenderableProps } from "preact";
export { createPortal, forwardRef, memo } from "preact/compat";
export { useCallback, useContext, useDebugValue, useEffect, useId, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState } from "preact/hooks";
export type { EffectCallback, Inputs, MutableRef, Reducer, StateUpdater } from "preact/hooks";
export { ExtendMerge, Nullable, OmitStrong, TargetedOmit, TargetedPick } from "./lib-shared.js";
import type { JSX } from "preact";
import { options } from "preact";
import { EventMapping as em } from "./lib-shared.js";

// In React, this is useInsertionEffect
export { useBeforeLayoutEffect } from "./use-before-layout-effect.js";

export function debounceRendering(f: () => void) {
    (options.debounceRendering ?? queueMicrotask)(f);
}



export const onfocusin = "onfocusin" satisfies keyof ElementProps<any>;
export const onfocusout = "onfocusout" satisfies keyof ElementProps<any>;

export type ElementProps<E extends EventTarget> = JSX.HTMLAttributes<E>;
export type EventType<T extends EventTarget, E extends Event> = JSX.TargetedEvent<T, E>;
export type FocusEventType<E extends EventTarget> = JSX.TargetedFocusEvent<E>;
export type KeyboardEventType<E extends EventTarget> = JSX.TargetedKeyboardEvent<E>;
export type MouseEventType<E extends EventTarget> = JSX.TargetedMouseEvent<E>;
export type TouchEventType<E extends EventTarget> = JSX.TargetedTouchEvent<E>;
export type PointerEventType<E extends EventTarget> = JSX.TargetedPointerEvent<E>;
export type CompositionEventType<E extends EventTarget> = JSX.TargetedCompositionEvent<E>;
export type DragEventType<E extends EventTarget> = JSX.TargetedDragEvent<E>;
export type CSSProperties = JSX.CSSProperties;
export type VNode = JSX.Element;



export const EventMapping: { [K in keyof HTMLElementEventMap]: (keyof JSX.IntrinsicElements["div"] & `on${string}`) } = {
    dblclick: "onDblClick",
    focusin: "onfocusin",
    focusout: "onfocusout",
    formdata: "onFormData",
    toggle: "onToggle",
    ...em
}