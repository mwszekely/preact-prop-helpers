/// @ts-expect-error
export { Fragment, cloneElement, createContext, createElement, forwardRef, useEffectEvent, memo, useInsertionEffect as useBeforeLayoutEffect, useCallback, useContext, useDebugValue, useEffect, useId, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState, type ComponentType } from "react";
/// @ts-expect-error
export type { ReactNode as ComponentChildren, Context, Dispatch, EffectCallback, DependencyList as Inputs, JSX, MutableRefObject as RefObject, PropsWithChildren, PropsWithRef, Reducer, Ref, RefCallback, SetStateAction } from "react";
import { JSX } from "react/jsx-runtime";
/// @ts-expect-error
import type { Ref } from "react";
import { getEventMapping as gem } from "./lib-shared.js";
export { createPortal } from "react-dom";
export type { ExtendMerge, Nullable, OmitStrong, TargetedOmit, TargetedPick } from "./lib-shared.js";

export type RenderableProps<P> = PropsWithChildren<PropsWithRef<P>>;

export type StateUpdater<T> = Dispatch<SetStateAction<T>>;

export function debounceRendering(f: () => void) {
    // TODO?
    return queueMicrotask(f);
    //(options.debounceRendering ?? queueMicrotask)(f);
}

export const onfocusin = "onFocus" satisfies keyof ElementProps<any>;
export const onfocusout = "onBlur" satisfies keyof ElementProps<any>;

/// @ts-expect-error
import { CompositionEvent, Dispatch, DragEvent, FocusEvent, HTMLProps as HTMLAttributes, KeyboardEvent, MouseEvent, PointerEvent, PropsWithChildren, PropsWithRef, SetStateAction, SyntheticEvent, TouchEvent, CSSProperties as react_CSSProperties } from "react";

export type ElementProps<Tag extends keyof JSX.IntrinsicElements> = Pick<JSX.IntrinsicElements, Tag>[Tag];
export type TagToElement<Tag extends keyof JSX.IntrinsicElements> = Exclude<ElementProps<Tag>["ref"], null | undefined> extends Ref<infer K>? K : never;
export type EventTypeByTag<Tag extends keyof JSX.IntrinsicElements, E extends Event> = SyntheticEvent<TagToElement<Tag>, E>;
export type FocusEventTypeByTag<Tag extends keyof JSX.IntrinsicElements> = FocusEvent<TagToElement<Tag>>;
export type KeyboardEventTypeByTag<Tag extends keyof JSX.IntrinsicElements> = KeyboardEvent<TagToElement<Tag>>;
export type MouseEventTypeByTag<Tag extends keyof JSX.IntrinsicElements> = MouseEvent<TagToElement<Tag>>;
export type TouchEventTypeByTag<Tag extends keyof JSX.IntrinsicElements> = TouchEvent<TagToElement<Tag>>;
export type PointerEventTypeByTag<Tag extends keyof JSX.IntrinsicElements> = PointerEvent<TagToElement<Tag>>;
export type CompositionEventTypeByTag<Tag extends keyof JSX.IntrinsicElements> = CompositionEvent<TagToElement<Tag>>;
export type DragEventTypeByTag<Tag extends keyof JSX.IntrinsicElements> = DragEvent<TagToElement<Tag>>;
export type CSSProperties = react_CSSProperties;
export type VNode = JSX.Element;


export function getEventMapping(): { [K in keyof HTMLElementEventMap]: (keyof JSX.IntrinsicElements["div"] & `on${string}`) } {
    return {
        beforetoggle: null!,
        beforematch: null!,
        pointerrawupdate: null!,
        dblclick: "onDoubleClick",
        focusin: "onFocus",
        focusout: "onBlur",
        formdata: null!,
        toggle: null!,
        contextlost: null!,
        contextrestored: null!,
        ...gem(),
    }
}