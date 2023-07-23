export { Fragment, cloneElement, createContext, createElement, forwardRef, memo, useInsertionEffect as useBeforeLayoutEffect, useCallback, useContext, useDebugValue, useEffect, useId, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState } from "react";
export type { Dispatch, EffectCallback, DependencyList as Inputs, JSX, MutableRefObject as MutableRef, PropsWithChildren, PropsWithRef, Reducer, Ref, RefCallback, SetStateAction } from "react";
export { createPortal } from "react-dom";
import { EventMapping as em } from "./lib-shared.js";

export type RenderableProps<P> = PropsWithChildren<PropsWithRef<P>>;

export type StateUpdater<T> = Dispatch<SetStateAction<T>>;

export function debounceRendering(f: () => void) {
    // TODO?
    return queueMicrotask(f);
    //(options.debounceRendering ?? queueMicrotask)(f);
}

export const onfocusin = "onFocus" satisfies keyof ElementProps<any>;
export const onfocusout = "onBlur" satisfies keyof ElementProps<any>;

/** Opposite of NonNullable */
export type Nullable<T = null> = null | undefined | T;
/** Like Omit, but with type completion */
export type OmitStrong<T, K extends keyof T> = Omit<T, K>;

/** "**Pick**, then **omit**". Given an object, omits everything but the given props in the given sub-object, including other sub-objects. */
export type TargetedOmit<T, K extends keyof T, L extends keyof T[K]> = { [M in K]: OmitStrong<T[K], L> };
/** 
 * "**Pick**, then **pick** again". Given an object, omits everything but the given props in the given sub-object, including other sub-objects.
 * 
 * @remarks This is particularly useful for the kind of off-brand parameter inheritence that things like grid navigation have going.
 */
export type TargetedPick<T, K extends keyof T, L extends keyof T[K]> = { [M in K]: Pick<T[K], L> };
/** Combines two interfaces in a way that leaves them still able to be extended (via class, another interface, etc.) */
export type ExtendMerge<A, B> = { [K in (keyof A) | (keyof B)]: K extends keyof A ? (K extends keyof B ? (A[K] & B[K]) : A[K]) : K extends keyof B ? B[K] : unknown }

import { CompositionEvent, Dispatch, DragEvent, FocusEvent, HTMLProps as HTMLAttributes, KeyboardEvent, MouseEvent, PointerEvent, PropsWithChildren, PropsWithRef, SetStateAction, SyntheticEvent, TouchEvent, CSSProperties as react_CSSProperties } from "react";

export type ElementProps<E extends EventTarget> = PropsWithRef<HTMLAttributes<E>>;
export type EventType<T extends EventTarget, E extends Event> = SyntheticEvent<T, E>;
export type FocusEventType<E extends EventTarget> = FocusEvent<E>;
export type KeyboardEventType<E extends EventTarget> = KeyboardEvent<E>;
export type MouseEventType<E extends EventTarget> = MouseEvent<E>;
export type TouchEventType<E extends EventTarget> = TouchEvent<E>;
export type PointerEventType<E extends EventTarget> = PointerEvent<E>;
export type CompositionEventType<E extends EventTarget> = CompositionEvent<E>;
export type DragEventType<E extends EventTarget> = DragEvent<E>;
export type CSSProperties = react_CSSProperties;
export type VNode = JSX.Element;


export const EventMapping: { [K in keyof HTMLElementEventMap]: (keyof JSX.IntrinsicElements["div"] & `on${string}`) } = {
    dblclick: "onDoubleClick",
    focusin: "onFocus",
    focusout: "onBlur",
    formdata: null!,
    toggle: null!,
    ...em,
}