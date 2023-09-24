export { Fragment, cloneElement, createContext, createElement, forwardRef, memo, useInsertionEffect as useBeforeLayoutEffect, useCallback, useContext, useDebugValue, useEffect, useId, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState } from "react";
export type { Dispatch, EffectCallback, DependencyList as Inputs, JSX, MutableRefObject as MutableRef, PropsWithChildren, PropsWithRef, Reducer, Ref, RefCallback, SetStateAction } from "react";
export { createPortal } from "react-dom";
export { type ExtendMerge, type Nullable, type OmitStrong, type TargetedOmit, type TargetedPick } from "./lib-shared.js";
export type RenderableProps<P> = PropsWithChildren<PropsWithRef<P>>;
export type StateUpdater<T> = Dispatch<SetStateAction<T>>;
export declare function debounceRendering(f: () => void): void;
export declare const onfocusin = "onFocus";
export declare const onfocusout = "onBlur";
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
export declare const EventMapping: {
    [K in keyof HTMLElementEventMap]: (keyof JSX.IntrinsicElements["div"] & `on${string}`);
};
//# sourceMappingURL=lib-react.d.ts.map