


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
export type ExtendMerge<A, B> = { [K in (keyof A) | (keyof B)]: K extends keyof A? (K extends keyof B? (A[K] & B[K]) : A[K]) : K extends keyof B? B[K] : unknown }




/** These are all the event mappings that are shared between Preact/React */
export const EventMapping = {
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

    
    fullscreenchange: null!,
    animationcancel: null!,
    auxclick: null!,
    cancel: null!,
    close: null!,
    copy: null!,
    cuechange: null!,
    fullscreenerror: null!,
    ratechange: null!,
    resize: null!,
    securitypolicyviolation: null!,
    selectionchange: null!,
    selectstart: null!,
    slotchange: null!,
    transitioncancel: null!,
    transitionrun: null!,
    transitionstart: null!,
    webkitanimationend: null!,
    webkitanimationiteration: null!,
    webkitanimationstart: null!,
    webkittransitionend: null!,
} as const;
 