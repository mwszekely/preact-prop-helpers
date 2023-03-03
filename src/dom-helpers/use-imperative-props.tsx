import { h } from "preact";
import { useCallback, useRef } from "preact/hooks";
import { useMergedProps } from "./use-merged-props.js";
import { useRefElement, UseRefElementParameters, UseRefElementReturnType } from "./use-ref-element.js";

export type SetChildren = ((children: string | null) => void);
export type SetClass = (cls: string, enabled: boolean) => void;
export type SetStyle = <T extends (keyof CSSStyleDeclaration) & string>(prop: T, value: h.JSX.CSSProperties[T] | null) => void;
export type SetAttribute<T extends Element> = <K extends keyof h.JSX.HTMLAttributes<T>>(prop: K, value: h.JSX.HTMLAttributes<T>[K] | null) => void;
export type SetEventHandler = <K extends keyof HTMLElementEventMap>(type: K, listener: null | ((this: HTMLElement, ev: HTMLElementEventMap[K]) => void), options: AddEventListenerOptions) => void;

export interface ImperativeHandle<T extends Element> {
    setClass: SetClass;
    setStyle: SetStyle;
    setAttribute: SetAttribute<T>;
    setChildren: SetChildren;
    setEventHandler: SetEventHandler;
}

export interface UseImperativePropsParameters<E extends Element> {
    refElementReturn: Pick<UseRefElementReturnType<E>["refElementReturn"], "getElement">;
}

export function useImperativeProps<E extends Element>({ refElementReturn: { getElement } }: UseImperativePropsParameters<E>) {
    const currentImperativeProps = useRef<{ className: Set<string>, style: h.JSX.CSSProperties, children: string | null, others: h.JSX.HTMLAttributes<E> }>({ className: new Set(), style: {}, children: null, others: {} });



    const setClass = useCallback<SetClass>((cls, enabled) => {
        if (currentImperativeProps.current.className.has(cls) == !enabled) {
            getElement()?.classList[enabled ? "add" : "remove"](cls);
            currentImperativeProps.current.className[enabled ? "add" : "delete"](cls);
        }
    }, []);

    const setStyle = useCallback<SetStyle>((prop, value) => {
        const element = (getElement() as Element as HTMLElement | undefined);
        if (element) {
            if (currentImperativeProps.current.style[prop] != value) {
                currentImperativeProps.current.style[prop] = value;
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

    const setAttribute = useCallback<SetAttribute<E>>((prop, value) => {
        if (value != null) {
            currentImperativeProps.current.others[prop] = value;
            getElement()?.setAttribute(prop, value);
        }
        else {
            delete currentImperativeProps.current.others[prop];
            getElement()?.removeAttribute(prop);
        }
    }, []);

    const setEventHandler = useCallback<SetEventHandler>((type, handler, options) => {
        const element = (getElement() as Element as HTMLElement | undefined);
        const mappedKey = EventMapping[type] as keyof h.JSX.HTMLAttributes<E>;
        if (element) {
            if (handler) {
                element.addEventListener(type, handler, options);
                currentImperativeProps.current.others[mappedKey] = handler;
            }
            else if (currentImperativeProps.current.others[mappedKey]) {
                element.removeEventListener(type, currentImperativeProps.current.others[mappedKey], options);
                currentImperativeProps.current.others[mappedKey] = undefined;
            }
        }
    }, [])

    return {
        imperativeHandle: useRef<ImperativeHandle<E>>({
            setClass,
            setStyle,
            setAttribute,
            setEventHandler,
            setChildren
        }).current,
        propsUnstable: useMergedProps<E>(
            { className: [...currentImperativeProps.current.className].join(" "), style: currentImperativeProps.current.style },
            currentImperativeProps.current.others
        )

    }
}



const EventMapping: Partial<{ [K in keyof HTMLElementEventMap]: (keyof h.JSX.HTMLAttributes<any> & `on${string}`) }> = {
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
    dblclick: "onDblClick",
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
    focusin: "onfocusin",
    focusout: "onfocusout",
    formdata: "onFormData",
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
    toggle: "onToggle",
    touchcancel: "onTouchCancel",
    touchend: "onTouchEnd",
    touchmove: "onTouchMove",
    touchstart: "onTouchStart",
    transitionend: "onTransitionEnd",
    volumechange: "onVolumeChange",
    waiting: "onWaiting",
    wheel: "onWheel"
}
