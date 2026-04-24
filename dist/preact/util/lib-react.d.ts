export { cloneElement, createContext, createElement, forwardRef, Fragment, memo, useCallback, useContext, useDebugValue, useEffect, useId, useImperativeHandle, useInsertionEffect, useLayoutEffect, useMemo, useReducer, useRef, useState, type ComponentType } from "react";
export type { ReactNode as ComponentChildren, Context, Dispatch, EffectCallback, DependencyList as Inputs, JSX, MutableRefObject as MutableRef, PropsWithChildren, PropsWithRef, Reducer, Ref, RefCallback, SetStateAction } from "react";
import { JSX } from "react/jsx-runtime";
export { createPortal } from "react-dom";
export { identity, noop } from "./lib-shared.js";
export type { ExtendMerge, Nullable, OmitStrong, TargetedOmit, TargetedPick } from "./lib-shared.js";
export type RenderableProps<P> = PropsWithChildren<PropsWithRef<P>>;
export type StateUpdater<T> = Dispatch<SetStateAction<T>>;
export declare function debounceRendering(f: () => void): void;
export declare const onfocusin = "onFocus";
export declare const onfocusout = "onBlur";
import { CompositionEvent, Dispatch, DragEvent, FocusEvent, HTMLProps as HTMLAttributes, KeyboardEvent, MouseEvent, PointerEvent, PropsWithChildren, PropsWithRef, CSSProperties as react_CSSProperties, SetStateAction, SyntheticEvent, TouchEvent } from "react";
export type ElementProps0<E extends EventTarget> = PropsWithRef<HTMLAttributes<E>>;
export type ElementPropsAll<E extends EventTarget> = ElementProps0<E>;
/**
 * A bag of props. Usually these need to be spread to a DOM element.
 *
 * Note that typing-wise this only contains a `ref` prop, but in
 * reality it can contain any and all props. It's like this to
 * increase React/Preact compatibility between *slight* differences
 * in attribute types.
 */
export type ElementProps<E extends EventTarget> = Pick<ElementPropsAll<E>, "ref">;
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
export declare function getEventMapping(): {
    [K in keyof HTMLElementEventMap]: (keyof JSX.IntrinsicElements["div"] & `on${string}`);
};
//# sourceMappingURL=lib-react.d.ts.map