/** Opposite of NonNullable */
export type Nullable<T = null> = null | undefined | T;
/** Like `Required`, but also makes types `NonNullable` besides just required. */
export type RequiredN<T> = {
    [P in keyof T]-?: NonNullable<T[P]>;
};
/** Like Omit, but with type completion */
export type OmitStrong<T, K extends keyof T> = Omit<T, K>;
/** "**Pick**, then **omit**". Given an object, omits everything but the given props in the given sub-object, including other sub-objects. */
export type TargetedOmit<T, K extends keyof T, L extends keyof T[K]> = {
    [M in K]: OmitStrong<T[K], L>;
};
/**
 * "**Pick**, then **pick** again". Given an object, omits everything but the given props in the given sub-object, including other sub-objects.
 *
 * @remarks This is particularly useful for the kind of off-brand parameter inheritence that things like grid navigation have going.
 */
export type TargetedPick<T, K extends keyof T, L extends keyof T[K]> = {
    [M in K]: Pick<T[K], L>;
};
/** Combines two interfaces in a way that leaves them still able to be extended (via class, another interface, etc.) */
export type ExtendMerge<A, B> = {
    [K in (keyof A) | (keyof B)]: K extends keyof A ? (K extends keyof B ? (A[K] & B[K]) : A[K]) : K extends keyof B ? B[K] : unknown;
};
/** These are all the event mappings that are shared between Preact/React */
export declare const EventMapping: {
    readonly abort: "onAbort";
    readonly animationend: "onAnimationEnd";
    readonly animationstart: "onAnimationStart";
    readonly animationiteration: "onAnimationIteration";
    readonly beforeinput: "onBeforeInput";
    readonly blur: "onBlur";
    readonly canplay: "onCanPlay";
    readonly canplaythrough: "onCanPlayThrough";
    readonly change: "onChange";
    readonly click: "onClick";
    readonly compositionend: "onCompositionEnd";
    readonly compositionstart: "onCompositionStart";
    readonly compositionupdate: "onCompositionUpdate";
    readonly contextmenu: "onContextMenu";
    readonly cut: "onCut";
    readonly drag: "onDrag";
    readonly dragend: "onDragEnd";
    readonly dragenter: "onDragEnter";
    readonly dragleave: "onDragLeave";
    readonly dragover: "onDragOver";
    readonly dragstart: "onDragStart";
    readonly drop: "onDrop";
    readonly durationchange: "onDurationChange";
    readonly emptied: "onEmptied";
    readonly ended: "onEnded";
    readonly error: "onError";
    readonly focus: "onFocus";
    readonly gotpointercapture: "onGotPointerCapture";
    readonly input: "onInput";
    readonly invalid: "onInvalid";
    readonly keydown: "onKeyDown";
    readonly keypress: "onKeyPress";
    readonly keyup: "onKeyUp";
    readonly load: "onLoad";
    readonly loadeddata: "onLoadedData";
    readonly loadedmetadata: "onLoadedMetadata";
    readonly loadstart: "onLoadStart";
    readonly lostpointercapture: "onLostPointerCapture";
    readonly mousedown: "onMouseDown";
    readonly mouseenter: "onMouseEnter";
    readonly mouseleave: "onMouseLeave";
    readonly mousemove: "onMouseMove";
    readonly mouseout: "onMouseOut";
    readonly mouseover: "onMouseOver";
    readonly mouseup: "onMouseUp";
    readonly paste: "onPaste";
    readonly pause: "onPause";
    readonly play: "onPlay";
    readonly playing: "onPlaying";
    readonly pointercancel: "onPointerCancel";
    readonly pointerdown: "onPointerDown";
    readonly pointerenter: "onPointerEnter";
    readonly pointerleave: "onPointerLeave";
    readonly pointermove: "onPointerMove";
    readonly pointerout: "onPointerOut";
    readonly pointerover: "onPointerOver";
    readonly pointerup: "onPointerUp";
    readonly progress: "onProgress";
    readonly reset: "onReset";
    readonly scroll: "onScroll";
    readonly seeked: "onSeeked";
    readonly seeking: "onSeeking";
    readonly select: "onSelect";
    readonly stalled: "onStalled";
    readonly submit: "onSubmit";
    readonly suspend: "onSuspend";
    readonly timeupdate: "onTimeUpdate";
    readonly touchcancel: "onTouchCancel";
    readonly touchend: "onTouchEnd";
    readonly touchmove: "onTouchMove";
    readonly touchstart: "onTouchStart";
    readonly transitionend: "onTransitionEnd";
    readonly volumechange: "onVolumeChange";
    readonly waiting: "onWaiting";
    readonly wheel: "onWheel";
    readonly fullscreenchange: never;
    readonly animationcancel: never;
    readonly auxclick: never;
    readonly cancel: never;
    readonly close: never;
    readonly copy: never;
    readonly cuechange: never;
    readonly fullscreenerror: never;
    readonly ratechange: never;
    readonly resize: never;
    readonly scrollend: never;
    readonly securitypolicyviolation: never;
    readonly selectionchange: never;
    readonly selectstart: never;
    readonly slotchange: never;
    readonly transitioncancel: never;
    readonly transitionrun: never;
    readonly transitionstart: never;
    readonly webkitanimationend: never;
    readonly webkitanimationiteration: never;
    readonly webkitanimationstart: never;
    readonly webkittransitionend: never;
};
//# sourceMappingURL=lib-shared.d.ts.map