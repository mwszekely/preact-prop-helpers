import { createElement, type JSX, type RenderableProps } from "preact";
import { forwardRef, memo } from "preact/compat";
import { useCallback, useImperativeHandle, useRef } from "preact/hooks";
import { CSSProperties, ElementProps, Ref } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { useMergedProps } from "./use-merged-props.js";
import { useRefElement, UseRefElementReturnType } from "./use-ref-element.js";

export type SetChildren = ((children: string | null) => void);
export type GetClass = (cls: string) => boolean;
export type SetClass = (cls: string, enabled: boolean) => void;
export type SetStyle = <T extends (keyof CSSStyleDeclaration) & string>(prop: T, value: CSSProperties[T] | null) => void;
export type GetAttribute<T extends Element> = <K extends keyof ElementProps<T>>(prop: K) => ElementProps<T>[K];
export type SetAttribute<T extends Element> = <K extends keyof ElementProps<T>>(prop: K, value: ElementProps<T>[K] | null) => void;
export type SetEventHandler = <K extends keyof HTMLElementEventMap>(type: K, listener: null | ((this: HTMLElement, ev: HTMLElementEventMap[K]) => void), options: AddEventListenerOptions) => void;
export type DangerouslySetInnerHTML = (html: string) => void;
export type DangerouslyAppendHTML = (html: string) => Element;

export interface ImperativeHandle<T extends Element> {
    hasClass: GetClass;
    setClass: SetClass;
    setStyle: SetStyle;
    getAttribute: GetAttribute<T>;
    setAttribute: SetAttribute<T>;
    setChildren: SetChildren;
    dangerouslySetInnerHTML: DangerouslySetInnerHTML;
    dangerouslyAppendHTML: DangerouslyAppendHTML;
    setEventHandler: SetEventHandler;
}

export interface UseImperativePropsParameters<E extends Element> {
    refElementReturn: Pick<UseRefElementReturnType<E>["refElementReturn"], "getElement">;
}

export interface ImperativeElementProps<T extends keyof HTMLElementTagNameMap> extends ElementProps<HTMLElementTagNameMap[T]> {
    tag: T;
    handle: Ref<ImperativeHandle<HTMLElementTagNameMap[T]>>;
}

let templateElement: HTMLTemplateElement | null = null;

function htmlToElement(parent: Element, html: string) {
    const document = parent.ownerDocument;
    templateElement ??= document.createElement("template");
    templateElement.innerHTML = html.trim();   // TODO: Trim ensures whitespace doesn't add anything, but with a better explanation of why
    return templateElement.content.firstChild! as Element;
}

/**
 * Easy access to an HTMLElement that can be controlled imperatively.
 * 
 * The HTMLElement rendered is controlled by the `tag` prop (e.g. "span", "div").
 * 
 * The `handle` prop should be e.g. `useRef<ImperativeHandle<HTMLDivElement>>(null)`
 */
export const ImperativeElement = memo(forwardRef(ImperativeElementU)) as typeof ImperativeElementU;

export function useImperativeProps<E extends Element>({ refElementReturn: { getElement } }: UseImperativePropsParameters<E>) {
    monitorCallCount(useImperativeProps);

    const currentImperativeProps = useRef<{ className: Set<string>, style: CSSProperties, children: string | null, html: string | null, others: ElementProps<E> }>({ className: new Set(), style: {}, children: null, html: null, others: {} });


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
            currentImperativeProps.current.html = null;
            e.textContent = children;
        }
    }, []);

    const dangerouslySetInnerHTML = useCallback<DangerouslySetInnerHTML>((children: string) => {
        let e = getElement();
        if (e && currentImperativeProps.current.html != children) {
            currentImperativeProps.current.html = children;
            currentImperativeProps.current.children = null;
            e.innerHTML = children;
        }
    }, []);

    const dangerouslyAppendHTML = useCallback<DangerouslyAppendHTML>((children: string) => {
        let e = getElement();
        if (e && children) {
            const newChild = htmlToElement(e, children);
            console.assert((newChild && newChild instanceof Node));
            if (newChild && newChild instanceof Node) {
                e.appendChild(newChild);
                return newChild;
            }
        }
        return null!;
    }, [])

    const getAttribute = useCallback<GetAttribute<E>>((prop) => {
        return currentImperativeProps.current.others[prop];
    }, []);

    const setAttribute = useCallback<SetAttribute<E>>((prop, value) => {
        if (value != null) {
            if (getAttribute(prop) != value) {
                currentImperativeProps.current.others[prop] = value;
                getElement()?.setAttribute(prop, value);
            }
        }
        else {
            if (getAttribute(prop) != undefined) {
                delete currentImperativeProps.current.others[prop];
                getElement()?.removeAttribute(prop);
            }
        }
    }, []);

    const setEventHandler = useCallback<SetEventHandler>((type, handler, options) => {
        const element = (getElement() as Element as HTMLElement | undefined);
        const mappedKey = EventMapping[type] as keyof ElementProps<E>;
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
            hasClass,
            setClass,
            setStyle,
            getAttribute,
            setAttribute,
            setEventHandler,
            setChildren,
            dangerouslySetInnerHTML,
            dangerouslyAppendHTML
        }).current,
        props: useMergedProps<E>(
            { className: [...currentImperativeProps.current.className].join(" "), style: currentImperativeProps.current.style },
            currentImperativeProps.current.others
        )

    }
}

function ImperativeElementU<T extends keyof HTMLElementTagNameMap>({ tag: Tag, handle, ...props }: RenderableProps<ImperativeElementProps<T>>, ref: Ref<HTMLElementTagNameMap[T]>) {
    const { propsStable, refElementReturn } = useRefElement<HTMLElementTagNameMap[T]>({ refElementParameters: {} })
    const { props: iprops, imperativeHandle } = useImperativeProps<HTMLElementTagNameMap[T]>({ refElementReturn });
    useImperativeHandle(handle, () => imperativeHandle);
    return (createElement(Tag, useMergedProps(propsStable, iprops, props, { ref })));
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
