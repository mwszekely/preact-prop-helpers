import { h, options, PreactConsumer, Ref, RefCallback, RefObject } from "preact";
import { Dispatch, Inputs, StateUpdater as SU, useCallback as ucb } from "preact/hooks";
import type { JSX } from "preact/jsx-runtime";
import { getEventMapping as gem } from "./lib-shared.js";


export { cloneElement, createContext, createElement, Fragment, type ComponentChildren, type ComponentType, type Context } from "preact";
export type { Ref, RefCallback, RenderableProps, RefObject } from "preact";
export { createPortal, forwardRef, memo, useEffectEvent } from "preact/compat";
export { useContext, useDebugValue, useEffect, useId, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState } from "preact/hooks";
export type { EffectCallback, Inputs, Reducer } from "preact/hooks";
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


// @ts-expect-error (Capitalizing these results in errors with at least grid navigation...but I don't know why?)
export const onfocusin = "onfocusin" satisfies keyof ElementProps<keyof JSX.IntrinsicElements>;
// @ts-expect-error
export const onfocusout = "onfocusout" satisfies keyof ElementProps<keyof JSX.IntrinsicElements>;

/*type OmitNever<T> = { [K in keyof T as T[K] extends never ? never : K]: T[K] };

type ExtractAndUnwrapRefElement<K extends keyof JSX.IntrinsicElements, E extends EventTarget> = Exclude<(Exclude<Pick<JSX.IntrinsicElements[K], "ref">["ref"], null | undefined> extends Ref<infer V> ? V : unknown), E>;
//type FooHelper<E extends EventTarget> = { [K in keyof JSX.IntrinsicElements]: Exclude<(Exclude<Pick<JSX.IntrinsicElements[K], "ref">["ref"], null | undefined> extends Ref<infer V> ? V : unknown), E> };
type NeverizeIntrinsicElements<E extends EventTarget> = { [K in keyof JSX.IntrinsicElements]: [ExtractAndUnwrapRefElement<K, E>] extends [never] ? E : never };

type ElementToTag<E extends EventTarget> = keyof OmitNever<NeverizeIntrinsicElements<E>>;
type Bar = ElementToTag<HTMLInputElement>;
type Bar2 = ElementToTag<HTMLOListElement>;
type Bar3 = ElementToTag<HTMLDivElement>;

export type ElementProps<E extends EventTarget> = Partial<preact.HTMLAttributes & JSX.IntrinsicElements[ElementToTag<E>]>;
type Bar4 = ElementProps<HTMLOListElement>;*/

export type ElementProps<Tag extends keyof JSX.IntrinsicElements> = Pick<JSX.IntrinsicElements, Tag>[Tag];

export type TagToElement<Tag extends keyof JSX.IntrinsicElements> = (Exclude<Pick<ElementProps<Tag>, "ref">["ref"], null | undefined> extends Ref<infer K>? K : never) & HTMLElement;
//export type TagToElement<Tag extends keyof JSX.IntrinsicElements> = HTMLElementTagNameMap[Tag];

//export type ElementProps<Tag extends keyof JSX.IntrinsicElements> = Pick<JSX.IntrinsicElements, Tag>[Tag];
//export type ElementProps<E extends EventTarget> = preact.HTMLAttributes<E>;
export type EventTypeByTag<Tag extends keyof JSX.IntrinsicElements, E extends Event> = preact.TargetedEvent<TagToElement<Tag>, E>;
export type FocusEventTypeByTag<Tag extends keyof JSX.IntrinsicElements> = preact.TargetedFocusEvent<TagToElement<Tag>>;
export type KeyboardEventTypeByTag<Tag extends keyof JSX.IntrinsicElements> = preact.TargetedKeyboardEvent<TagToElement<Tag>>;
export type MouseEventTypeByTag<Tag extends keyof JSX.IntrinsicElements> = preact.TargetedMouseEvent<TagToElement<Tag>>;
export type TouchEventTypeByTag<Tag extends keyof JSX.IntrinsicElements> = preact.TargetedTouchEvent<TagToElement<Tag>>;
export type PointerEventTypeByTag<Tag extends keyof JSX.IntrinsicElements> = preact.TargetedPointerEvent<TagToElement<Tag>>;
export type CompositionEventTypeByTag<Tag extends keyof JSX.IntrinsicElements> = preact.TargetedCompositionEvent<TagToElement<Tag>>;
export type DragEventTypeByTag<Tag extends keyof JSX.IntrinsicElements> = preact.TargetedDragEvent<TagToElement<Tag>>;
export type CSSProperties = preact.CSSProperties;
export type VNode = JSX.Element;



export function getEventMapping(): { [K in keyof HTMLElementEventMap]: (keyof JSX.IntrinsicElements["div"] & `on${string}`) } {
    return {
        beforetoggle: null!,
        beforematch: null!,
        pointerrawupdate: null!,
        dblclick: "onDblClick",
        focusin: "onFocusIn",
        focusout: "onFocusOut",
        formdata: "onFormData",
        toggle: "onToggle",
        contextlost: null!,
        contextrestored: null!,
        ...gem()
    };
}