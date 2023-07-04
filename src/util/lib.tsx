export { Fragment, cloneElement, createContext, createElement } from "preact";
export type { JSX, Ref, RefCallback, RefObject, RenderableProps } from "preact";
export { createPortal, forwardRef, memo } from "preact/compat";
export { useCallback, useContext, useDebugValue, useEffect, useId, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState } from "preact/hooks";
export type { CreateHandle, EffectCallback, Inputs, MutableRef, Reducer, StateUpdater } from "preact/hooks";
import type { JSX } from "preact";
import { options } from "preact";

export function debounceRendering(f: () => void) {
    (options.debounceRendering ?? queueMicrotask)(f);
}

/** Opposite of NonNullable */
export type Nullable<T = null> = null | undefined | T;
/** Like Omit, but with type completion */
export type OmitStrong<T, K extends keyof T> = Omit<T, K>;
/** Given an object, omits the given props in the given sub-object. All other types remain. */
export type OmitTargeted<T, K extends keyof T, L extends keyof T[K]> = OmitStrong<T, K> & { [M in K]: OmitStrong<T[K], L> };
/** Given an object, omits everything but the given props in the given sub-object, including other sub-objects. */
export type PickTargeted<T, K extends keyof T, L extends keyof T[K]> = { [M in K]: OmitStrong<T[K], L> };
/** Combines two interfaces in a way that leaves them still able to be extended (via class, another interface, etc.) */
export type ExtendMerge<A, B> = { [K in (keyof A) | (keyof B)]: K extends keyof A? (K extends keyof B? (A[K] & B[K]) : A[K]) : K extends keyof B? B[K] : unknown }

export type ElementProps<E extends EventTarget> = JSX.HTMLAttributes<E>;
export type EventType<T extends EventTarget, E extends Event> = JSX.TargetedEvent<T, E>;
export type FocusEventType<E extends EventTarget> = JSX.TargetedFocusEvent<E>;
export type KeyboardEventType<E extends EventTarget> = JSX.TargetedKeyboardEvent<E>;
export type MouseEventType<E extends EventTarget> = JSX.TargetedMouseEvent<E>;
export type TouchEventType<E extends EventTarget> = JSX.TargetedTouchEvent<E>;
export type PointerEventType<E extends EventTarget> = JSX.TargetedPointerEvent<E>;
export type CompositionEventType<E extends EventTarget> = JSX.TargetedCompositionEvent<E>;
export type CSSProperties = JSX.CSSProperties;
export type VNode = JSX.Element;