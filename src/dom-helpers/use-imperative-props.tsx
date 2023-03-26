import { AllHTMLAttributes, CSSProperties, PropsWithChildren, Ref, createElement, forwardRef, memo, useCallback, useImperativeHandle, useRef } from "react";
import { ElementProps } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { useMergedProps } from "./use-merged-props.js";
import { UseRefElementReturnType, useRefElement } from "./use-ref-element.js";

export type SetChildren = ((children: string | null) => void);
export type GetClass = (cls: string) => boolean;
export type SetClass = (cls: string, enabled: boolean) => void;
export type SetStyle = <T extends (keyof CSSProperties) & (keyof CSSStyleDeclaration) & string>(prop: T, value: CSSProperties[T] | null) => void;
export type GetAttribute<T extends Element> = <K extends keyof JSX.IntrinsicAttributes>(prop: K) => ElementProps<T>[K & keyof ElementProps<T>];
export type SetAttribute<T extends Element> = <K extends keyof JSX.IntrinsicAttributes>(prop: K, value: ElementProps<T>[K & keyof ElementProps<T>] | null) => void;
export type SetEventHandler = <K extends keyof HTMLElementEventMap>(type: K, listener: null | ((this: HTMLElement, ev: HTMLElementEventMap[K]) => void), options: AddEventListenerOptions) => void;

export interface ImperativeHandle<T extends Element> {
    hasClass: GetClass;
    setClass: SetClass;
    setStyle: SetStyle;
    getAttribute: GetAttribute<T>;
    setAttribute: SetAttribute<T>;
    setChildren: SetChildren;
    setEventHandler: SetEventHandler;
}

export interface UseImperativePropsParameters<E extends Element> {
    refElementReturn: Pick<UseRefElementReturnType<E>["refElementReturn"], "getElement">;
}
type Get<T, K extends keyof T> = T[K];

export type ImperativeElementProps<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T] & {
    tag: T;
    handle: Ref<ImperativeHandle<HTMLElementTagNameMap[T & keyof HTMLElementTagNameMap]>>;
}

/**
 * Easy access to an HTMLElement that can be controlled imperatively.
 * 
 * The HTMLElement rendered is controlled by the `tag` prop (e.g. "span", "div").
 * 
 * The `handle` prop should be e.g. `useRef<ImperativeHandle<HTMLDivElement>>(null)`
 */
export const ImperativeElement = memo(forwardRef(ImperativeElementU));// as any as typeof ImperativeElementU;

export function useImperativeProps<E extends Element>({ refElementReturn: { getElement } }: UseImperativePropsParameters<E>) {
    monitorCallCount(useImperativeProps);

    const currentImperativeProps = useRef<{ className: Set<string>, style: CSSProperties, children: string | null, others: ElementProps<E> }>({ className: new Set(), style: {}, children: null, others: {} });


    const hasClass = useCallback<GetClass>((cls: string) => { return currentImperativeProps.current.className.has(cls); }, [])
    const setClass = useCallback<SetClass>((cls, enabled) => {
        if (hasClass(cls) == !enabled) {
            getElement()?.classList[enabled ? "add" : "remove"](cls);
            currentImperativeProps.current.className[enabled ? "add" : "delete"](cls);
        }
    }, []);

    const setStyle = useCallback<SetStyle>((prop, value) => {
        const element = (getElement() as Element as HTMLElement | undefined);
        if (element) {
            if (currentImperativeProps.current.style[prop] != value) {
                (currentImperativeProps.current.style as any)[prop] = value;
                if ((prop as string).startsWith("--")) {
                    if (value != null)
                        element.style.setProperty(prop, `${value}`);
                    else
                        element.style.removeProperty(prop);
                }
                else {
                    element.style[prop] = value ?? ("" as any);
                }
            }
        }
    }, []);

    const setChildren = useCallback<SetChildren>((children: string | null) => {
        let e = getElement();
        if (e && currentImperativeProps.current.children != children) {
            currentImperativeProps.current.children = children;
            e.textContent = children;
        }
    }, []);

    const getAttribute = useCallback<GetAttribute<E>>((prop) => {
        return currentImperativeProps.current.others[prop as never];
    }, []);

    const setAttribute = useCallback<SetAttribute<E>>((prop, value) => {
        if (value != null) {
            currentImperativeProps.current.others[prop as never] = value as never;
            getElement()?.setAttribute(prop, value as never);
        }
        else {
            delete currentImperativeProps.current.others[prop as never];
            getElement()?.removeAttribute(prop);
        }
    }, []);

    const setEventHandler = useCallback<SetEventHandler>((type, handler, options) => {
        const element = (getElement() as Element as HTMLElement | undefined);
        const mappedKey = EventMapping[type] as keyof ElementProps<E>;
        if (element) {
            if (handler) {
                element.addEventListener(type, handler, options);
                currentImperativeProps.current.others[mappedKey as never] = handler as never;
            }
            else if (currentImperativeProps.current.others[mappedKey as never]) {
                element.removeEventListener(type, currentImperativeProps.current.others[mappedKey as never], options);
                currentImperativeProps.current.others[mappedKey as never] = undefined as never;
            }
        }
    }, [])

    return {
        imperativeHandle: useRef<ImperativeHandle<E>>({
            hasClass,
            setClass,
            setStyle,
            getAttribute,
            setAttribute,
            setEventHandler,
            setChildren
        }).current,
        props: useMergedProps<E>(
            { className: [...currentImperativeProps.current.className].join(" "), style: currentImperativeProps.current.style },
            currentImperativeProps.current.others
        )

    }
}



function ImperativeElementU<T extends keyof HTMLElementTagNameMap>({ tag: Tag, handle, ...props }: PropsWithChildren<ImperativeElementProps<T>>, ref: Ref<HTMLElementTagNameMap[T]>) {
    const { propsStable, refElementReturn } = useRefElement<HTMLElementTagNameMap[T]>({ refElementParameters: {} })
    const { props: iprops, imperativeHandle } = useImperativeProps<HTMLElementTagNameMap[T]>({ refElementReturn });
    useImperativeHandle(handle, () => imperativeHandle);
    return (createElement(Tag, useMergedProps(propsStable, iprops, props as ElementProps<HTMLElementTagNameMap[T]>, { ref })));
}


const EventMapping: Partial<{ [K in keyof HTMLElementEventMap]: (keyof JSX.IntrinsicElements["div"] & `on${string}`) }> = {
    abort: "onAbort",
    animationend: "onAnimationEnd",
    animationstart: "onAnimationStart",
    animationiteration: "onAnimationIteration",
    beforeinput: "onBeforeInput",
    blur: "onBlur",
    canplay: "onCanPlay",
    canplaythrough: "onCanPlayThrough",
    change: "onChange",
    click: "onClick",
    compositionend: "onCompositionEnd",
    compositionstart: "onCompositionStart",
    compositionupdate: "onCompositionUpdate",
    contextmenu: "onContextMenu",
    cut: "onCut",
    dblclick: "onDoubleClick",
    drag: "onDrag",
    dragend: "onDragEnd",
    dragenter: "onDragEnter",
    dragleave: "onDragLeave",
    dragover: "onDragOver",
    dragstart: "onDragStart",
    drop: "onDrop",
    durationchange: "onDurationChange",
    emptied: "onEmptied",
    ended: "onEnded",
    error: "onError",
    focus: "onFocus",
    gotpointercapture: "onGotPointerCapture",
    input: "onInput",
    invalid: "onInvalid",
    keydown: "onKeyDown",
    keypress: "onKeyPress",
    keyup: "onKeyUp",
    load: "onLoad",
    loadeddata: "onLoadedData",
    loadedmetadata: "onLoadedMetadata",
    loadstart: "onLoadStart",
    lostpointercapture: "onLostPointerCapture",
    mousedown: "onMouseDown",
    mouseenter: "onMouseEnter",
    mouseleave: "onMouseLeave",
    mousemove: "onMouseMove",
    mouseout: "onMouseOut",
    mouseover: "onMouseOver",
    mouseup: "onMouseUp",
    paste: "onPaste",
    pause: "onPause",
    play: "onPlay",
    playing: "onPlaying",
    pointercancel: "onPointerCancel",
    pointerdown: "onPointerDown",
    pointerenter: "onPointerEnter",
    pointerleave: "onPointerLeave",
    pointermove: "onPointerMove",
    pointerout: "onPointerOut",
    pointerover: "onPointerOver",
    pointerup: "onPointerUp",
    progress: "onProgress",
    reset: "onReset",
    scroll: "onScroll",
    seeked: "onSeeked",
    seeking: "onSeeking",
    select: "onSelect",
    stalled: "onStalled",
    submit: "onSubmit",
    suspend: "onSuspend",
    timeupdate: "onTimeUpdate",
    touchcancel: "onTouchCancel",
    touchend: "onTouchEnd",
    touchmove: "onTouchMove",
    touchstart: "onTouchStart",
    transitionend: "onTransitionEnd",
    volumechange: "onVolumeChange",
    waiting: "onWaiting",
    wheel: "onWheel",
    resize: "onResize"
}
