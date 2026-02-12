import { options } from "preact";
import { Dispatch, Inputs, StateUpdater as SU, useCallback as ucb } from "preact/hooks";
import type { JSX } from "preact/jsx-runtime";
import { EventMapping as em } from "./lib-shared.js";


export { cloneElement, createContext, createElement, Fragment, type ComponentChildren, type ComponentType, type Context } from "preact";
export type { Ref, RefCallback, RenderableProps } from "preact";
export { createPortal, forwardRef, memo } from "preact/compat";
export { useContext, useDebugValue, useEffect, useId, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState } from "preact/hooks";
export type { EffectCallback, Inputs, MutableRef, Reducer } from "preact/hooks";
export type { JSX } from "preact/jsx-runtime";
export type { ExtendMerge, Nullable, OmitStrong, TargetedOmit, TargetedPick } from "./lib-shared.js";


// Patch the type (only the type) of useCallback to allow for nullable functions
export const useCallback = ucb as <T extends Function | null | undefined>(callback: NonNullable<T>, inputs: Inputs) => NonNullable<T>;


export type StateUpdater<T> = Dispatch<SU<T>>;

// In React, this is useInsertionEffect
export { useBeforeLayoutEffect } from "./use-before-layout-effect.js";

export function debounceRendering(f: () => void) {
    (options.debounceRendering ?? queueMicrotask)(f);
}


// @ts-expect-error (These are correct, I don't know why the types are wrong all of a sudden...?)
export const onfocusin = "onfocusin" satisfies keyof ElementProps<any>;
// @ts-expect-error (Capitalizing these results in errors with at least grid navigation)
export const onfocusout = "onfocusout" satisfies keyof ElementProps<any>;

export type ElementProps<E extends EventTarget> = preact.HTMLAttributes<E>;
export type EventType<T extends EventTarget, E extends Event> = preact.TargetedEvent<T, E>;
export type FocusEventType<E extends EventTarget> = preact.TargetedFocusEvent<E>;
export type KeyboardEventType<E extends EventTarget> = preact.TargetedKeyboardEvent<E>;
export type MouseEventType<E extends EventTarget> = preact.TargetedMouseEvent<E>;
export type TouchEventType<E extends EventTarget> = preact.TargetedTouchEvent<E>;
export type PointerEventType<E extends EventTarget> = preact.TargetedPointerEvent<E>;
export type CompositionEventType<E extends EventTarget> = preact.TargetedCompositionEvent<E>;
export type DragEventType<E extends EventTarget> = preact.TargetedDragEvent<E>;
export type CSSProperties = preact.CSSProperties;
export type VNode = JSX.Element;



export const EventMapping: { [K in keyof HTMLElementEventMap]: (keyof JSX.IntrinsicElements["div"] & `on${string}`) } = {
    beforetoggle: null!,
    dblclick: "onDblClick",
    focusin: "onFocusIn",
    focusout: "onFocusOut",
    formdata: "onFormData",
    toggle: "onToggle",
    contextlost: null!,
    contextrestored: null!,
    ...em
}