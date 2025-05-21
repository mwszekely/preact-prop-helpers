import { useRef, useCallback, useLayoutEffect, useInsertionEffect, useMemo, useEffect, createElement, Fragment, useState as useState$1, useId, memo, forwardRef, useImperativeHandle, cloneElement, createContext, useContext } from 'react';
export { Fragment, cloneElement, createContext, createElement, forwardRef, memo, useInsertionEffect as useBeforeLayoutEffect, useCallback, useContext, useDebugValue, useEffect, useId, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState as useStateBasic } from 'react';
import { createPortal } from 'react-dom';
export { createPortal } from 'react-dom';
import { identity, noop, debounce } from 'lodash-es';
export { identity } from 'lodash-es';
import { isTabbable, isFocusable } from 'tabbable';
import { clsx } from 'clsx';

/** These are all the event mappings that are shared between Preact/React */
const EventMapping$1 = {
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
    fullscreenchange: null,
    animationcancel: null,
    auxclick: null,
    cancel: null,
    close: null,
    copy: null,
    cuechange: null,
    fullscreenerror: null,
    ratechange: null,
    resize: null,
    scrollend: null,
    securitypolicyviolation: null,
    selectionchange: null,
    selectstart: null,
    slotchange: null,
    transitioncancel: null,
    transitionrun: null,
    transitionstart: null,
    webkitanimationend: null,
    webkitanimationiteration: null,
    webkitanimationstart: null,
    webkittransitionend: null,
};

function debounceRendering(f) {
    // TODO?
    return queueMicrotask(f);
    //(options.debounceRendering ?? queueMicrotask)(f);
}
const onfocusin = "onFocus";
const onfocusout = "onBlur";
const EventMapping = {
    beforetoggle: null,
    dblclick: "onDoubleClick",
    focusin: "onFocus",
    focusout: "onBlur",
    formdata: null,
    toggle: null,
    contextlost: null,
    contextrestored: null,
    ...EventMapping$1,
};

/**
 * Debug hook. Given a value or set of values, emits a console error if any of them change from one render to the next.
 *
 * @remarks Eventually, when useEvent lands, we hopefully won't need this.
 */
function useEnsureStability(parentHookName, ...values) {
    if (process.env.NODE_ENV !== 'development')
        return;
    const helperToEnsureStability = useRef([]);
    const shownError = useRef([]);
    useHelper(values.length, -1);
    values.forEach(useHelper);
    return;
    function useHelper(value, i) {
        const index = i + 1;
        // Make sure that the provided functions are perfectly stable across renders
        if (helperToEnsureStability.current[index] === undefined)
            helperToEnsureStability.current[index] = value;
        if (helperToEnsureStability.current[index] != value) {
            if (!shownError.current[index]) {
                /* eslint-disable no-debugger */
                debugger;
                console.error(`The hook ${parentHookName} requires some or all of its arguments remain stable across each render; please check the ${i}-indexed argument (${i >= 0 ? JSON.stringify(values[i]) : "the number of supposedly stable elements"}).`);
                shownError.current[index] = true;
            }
        }
    }
}
/**
 * Similar to `useState`, but for values that aren't "render-important" &ndash; updates don't cause a re-render and so the value shouldn't be used during render (though it certainly can, at least by re-rendering again).
 *
 * @remarks To compensate for this, you should pass a `useEffect`-esque callback that is run whenever the value changes.  Just like `useEffect`, this callback can return a cleanup function that's run before the value changes.  If you would like to re-render when the value changes (or, say, when the value meets some criteria), this is where you'll want to put in a call to a `setState` function.
 *
 * To summarize, it's like a `useState`-`useEffect` mashup:
 *
 * 1. It's like `useState`, except this version of `setState` doesn't re-render the whole component
 * 2. It's like `useState`, except you can run a function when the value changes that optionally returns a cleanup function
 * 3. It's like `useEffect`, except you trigger the effect function "remotely" instead of it running after rendering
 * 4. It's like `useEffect`, except the single "dependency" is based on your calls to `setState`
 *
 * Note that while calling `setState` doesn't cause any re-renders, you can do that within your `onChange` function, called whenever the value changes via that `setState`.
 *
 * {@include } {@link OnPassiveStateChange}
 *
 * @param onChange - The "effect" function to run when the value changes. Effectively the same as `useEffect`'s "effect" function.  MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.
 * @param getInitialValue - If provided, the effect will be invoked once with this value on mount. MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.
 * @param customDebounceRendering - By default, changes to passive state are delayed by one tick so that we only check for changes in a similar way to Preact. You can override this to, for example, always run immediately instead.
 * @returns
 */
function usePassiveState(onChange, getInitialValue, { debounceRendering: customDebounceRendering, skipMountInitialization } = { debounceRendering, skipMountInitialization: false }) {
    skipMountInitialization ??= false;
    useEnsureStability("usePassiveState", skipMountInitialization);
    //let [id, ,getId] = useState(() => generateRandomId());
    const valueRef = useRef(Unset$2);
    const reasonRef = useRef(Unset$2);
    const warningRef = useRef(false);
    const dependencyToCompareAgainst = useRef(Unset$2);
    const cleanupCallbackRef = useRef(undefined);
    // Make sure that the provided functions are perfectly stable across renders
    useEnsureStability("usePassiveState", onChange, getInitialValue, customDebounceRendering);
    // Shared between "dependency changed" and "component unmounted".
    const onShouldCleanUp = useCallback(() => {
        const cleanupCallback = cleanupCallbackRef.current;
        if (cleanupCallback)
            cleanupCallback();
    }, []);
    // There are a couple places where we'd like to use our initial
    // value in place of having no value at all yet.
    // This is the shared code for that, used on mount and whenever
    // getValue is called.
    const tryEnsureValue = useCallback(() => {
        if (valueRef.current === Unset$2 && getInitialValue != undefined) {
            try {
                const initialValue = getInitialValue();
                valueRef.current = initialValue;
                cleanupCallbackRef.current = (onChange?.(initialValue, undefined, undefined) ?? undefined);
            }
            catch (ex) {
                // Exceptions are intentional to allow bailout (without exposing the Unset symbol)
            }
        }
    }, [ /* getInitialValue and onChange intentionally omitted */]);
    const getValue = useCallback(() => {
        if (warningRef.current)
            console.warn("During onChange, prefer using the (value, prevValue) arguments instead of getValue -- it's ambiguous as to if you're asking for the old or new value at this point in time for this component.");
        // The first time we call getValue, if we haven't been given a value yet,
        // (and we were given an initial value to use)
        // return the initial value instead of nothing.
        if (valueRef.current === Unset$2)
            tryEnsureValue();
        return (valueRef.current === Unset$2 ? undefined : valueRef.current);
    }, []);
    if (!skipMountInitialization) {
        // TODO: Very, very few instances require initializing on mount.
        // Grid navigation needs it (for reasons I haven't investigated and do not recall, but is related to a row's 0th cell sometimes erroneously entering the tab order)
        // so it's the default until all use cases are thoroughly exhausted.
        // But in general, we probably don't need so many invocations of `use(Layout!!)Effect`.
        // Also it is safe to wrap this hook in an `if` because 
        // `skipMountInitialization` can't change throughout the lifetime of the component, 
        // so the RoH aren't violated.
        useLayoutEffect(() => {
            // Make sure we've run our effect at least once on mount.
            // (If we have an initial value, of course)
            tryEnsureValue();
        }, []);
    }
    // The actual code the user calls to (possibly) run a new effect.
    const setValue = useCallback((arg, reason) => {
        // Regardless of anything else, figure out what our next value is about to be.
        const nextValue = (arg instanceof Function ? arg(valueRef.current === Unset$2 ? undefined : valueRef.current) : arg);
        //let id = getId();
        //console.log((nextValue !== valueRef.current? "" : "NOT ") + "Scheduling effect ", id, " with value ", nextValue);
        if ( /*dependencyToCompareAgainst.current === Unset &&*/nextValue !== valueRef.current) {
            // This is the first request to change this value.
            // Evaluate the request immediately, then queue up the onChange function
            // Save our current value so that we can compare against it later
            // (if we flip back to this state, then we won't send the onChange function)
            dependencyToCompareAgainst.current = valueRef.current;
            // It's important to update this here (as well as below) in case customDebounceRendering invokes this immediately
            valueRef.current = nextValue;
            reasonRef.current = reason;
            // Schedule the actual check and invocation of onChange later to let effects settle
            (customDebounceRendering ?? debounceRendering)(() => {
                const nextReason = reasonRef.current;
                const nextDep = valueRef.current;
                const prevDep = dependencyToCompareAgainst.current;
                //let id = getId();
                //console.log(((dependencyToCompareAgainst.current != valueRef.current)? "" : "NOT ") + "Running effect ", id, " with value ", nextDep);
                if (dependencyToCompareAgainst.current != valueRef.current) {
                    // TODO: This needs to happen here in order to make recursive onChanges work
                    // but it feels better to have it happen after onChange...
                    valueRef.current = dependencyToCompareAgainst.current = Unset$2;
                    warningRef.current = true;
                    try {
                        // Call any registered cleanup function
                        onShouldCleanUp();
                        valueRef.current = nextDep; // Needs to happen before onChange in case onChange is recursive (e.g. focusing causing a focus causing a focus)
                        cleanupCallbackRef.current = (onChange?.(nextDep, prevDep === Unset$2 ? undefined : prevDep, nextReason) ?? undefined);
                    }
                    finally {
                        // Allow the user to normally call getValue again
                        warningRef.current = false;
                    }
                }
                // We've finished with everything, so mark us as being on a clean slate again.
                dependencyToCompareAgainst.current = Unset$2;
            });
        }
        // Update the value immediately.
        // This will be checked against prevDep to see if we should actually call onChange
        //valueRef.current = nextValue;
    }, []);
    return [getValue, setValue];
}
const Unset$2 = Symbol();
// Easy constants for getInitialValue
function returnTrue() { return true; }
function returnFalse() { return false; }
function returnNull() { return null; }
function returnUndefined() { return undefined; }
function returnZero() { return 0; }
/**
 * An alternative to use for `customDebounceRendering` that causes `usePassiveState` to run changes without waiting a tick.
 */
function runImmediately(f) { f(); }

// Get/set the value of process?.env?.NODE_ENV delicately (also fun fact @rollup/plugin-replace works in comments!)
// (i.e. in a way that doesn't throw an error)
globalThis["process"] ??= {};
globalThis["process"]["env"] ??= {};
globalThis["process"]["env"]["NODE_ENV"] = process.env.NODE_ENV;
// The above statement looks redundant, but it ensures that manual
// reads to `process.env.NODE_ENV` work regardless of if the bundler 
// replaces `process.env.NODE_ENV` with the string `"development"` or not.

// TODO: This shouldn't be in every build, I don't think it's in core-js? I think?
// And it's extremely small anyway and basically does nothing.
globalThis.requestIdleCallback ??= (callback) => {
    return setTimeout(() => { callback({ didTimeout: false, timeRemaining: () => { return 0; }, }); }, 5);
};
let timeoutHandle = null;
let i = 0;
/**
 * Adds a function to your browser's Performance tab, under "markers", so you can watch the call stack more clearly than random interval sampling (only if process.env.NODE_ENV is "development").
 *
 * @remarks Some of the more basic hooks, like `setState`, do not call `useMonitoring` at all.
 * They are so small that their duration generally rounds down to 0 (or epsilon), so using
 * this function usually makes no sense on them. The performance monitoring takes more time
 * than the function itself.
 */
const useMonitoring = ((process.env.NODE_ENV === 'development' && globalThis._monitor_call_duration) ? useMonitoringImpl : dontUseMonitoringImpl);
/**
 *
 */
function dontUseMonitoringImpl(t) {
    return t();
}
/**
 *
 */
function useMonitoringImpl(hook) {
    let h = hook;
    if (process.env.NODE_ENV === 'development' && globalThis._monitor_call_duration) {
        h = (function (...args) {
            const r = useRef(++i);
            monitorCallCount(h);
            const start = performance.mark(`${h.name}-start-${r.current}`);
            const ret = hook(...args);
            const end = performance.mark(`${h.name}-end-${r.current}`);
            performance.measure(h.name, start.name, end.name);
            return ret;
        });
    }
    return h();
}
/**
 * When called inside a hook, monitors each call of that hook and prints the results to a table once things settle.
 *
 * @remarks Re-renders and such are all collected together when the table is printed to the console with `requestIdleCallback`.
 */
function monitorCallCount(hook) {
    if (process.env.NODE_ENV !== 'development')
        return;
    const name = hook.name;
    if (filterAll || filters.has(name))
        return;
    console.assert(name.length > 0);
    globalThis._hookCallCount ??= { callCounts: {} };
    globalThis._hookCallCount.callCounts[name] ??= { moment: 0, total: 0 };
    globalThis._hookCallCount.callCounts[name].moment += 1;
    globalThis._hookCallCount.callCounts[name].total += 1;
    if (timeoutHandle == null) {
        timeoutHandle = requestIdleCallback(() => {
            //console.log((window as WindowWithHookCallCount)._hookCallCount.callCountsMoment);
            //(window as WindowWithHookCallCount)._hookCallCount.callCountsMoment = {};
            const o = Object.entries(globalThis._hookCallCount.callCounts)
                .map(([hook, counts]) => { return { Hook: hook || "?", Now: counts?.moment || 0, Total: counts?.total || 0 }; })
                .filter(({ Now }) => { return !!Now; })
                .sort(({ Now: lhsM }, { Now: rhsM }) => {
                if (!lhsM && !rhsM)
                    return 0;
                lhsM ||= Infinity;
                rhsM ||= Infinity;
                return lhsM - rhsM;
            });
            console.table(o, ['Hook', 'Now', 'Total']);
            Object.entries(globalThis._hookCallCount.callCounts).forEach(([, counts]) => { counts.moment = 0; });
            timeoutHandle = null;
        });
    }
}
let filterAll = false;
const filters = new Set();
/**
 *
 */
function hideCallCount(hook) {
    filterAll = (hook === "all");
    if (hook != "all")
        filters.add(hook.name);
}

const Unset$1 = Symbol("unset");
/**
 * Given an input value, returns a constant getter function that can be used
 * inside of `useEffect` and friends without including it in the dependency array.
 *
 * @remarks This uses `options.diffed` in order to run before everything, even
 * ref assignment. This means this getter is safe to use anywhere ***except the render phase***.
 */
function useStableGetter(value) {
    return useMonitoring(function useStableGetter() {
        const ref = useRef(Unset$1);
        useInsertionEffect((() => { ref.current = value; }), [value]);
        return useCallback(() => {
            if (ref.current === Unset$1) {
                throw new Error('Value retrieved from useStableGetter() cannot be called during render.');
            }
            return ref.current;
        }, []);
    });
}
/**
 * Like useMemo, but checks objects (shallowly)
 *
 * @param t
 * @returns
 */
function useMemoObject(t) {
    return useMemo(() => { return t; }, Object.values(t));
}

function isStableGetter(obj) {
    return false;
}
function setIsStableGetter(obj) {
    return obj;
}
/**
 * Alternate useCallback() which always returns the same (wrapped) function reference
 * so that it can be excluded from the dependency arrays of `useEffect` and friends.
 *
 * @remarks In general, just pass the function you want to be stable (but you can't use it during render,
 * so be careful!).  Alternatively, if you need a stable callback that **can** be used
 * during render, pass an empty dependency array and it'll act like `useCallback` with an
 * empty dependency array, but with the associated stable typing. In this case, you ***must*** ensure that it
 * truly has no dependencies/only stable dependencies!!
 */
function useStableCallback(fn, noDeps) {
    return useMonitoring(function useStableCallback() {
        useEnsureStability("useStableCallback", noDeps == null, noDeps?.length, isStableGetter());
        if (isStableGetter())
            return fn;
        if (noDeps == null) {
            const currentCallbackGetter = useStableGetter(fn);
            return setIsStableGetter(useCallback(((...args) => {
                return currentCallbackGetter()(...args);
            }), []));
        }
        else {
            console.assert(noDeps.length === 0);
            return setIsStableGetter(useCallback(fn, []));
        }
    });
}
/**
 * #__NO_SIDE_EFFECTS__
 */
function useStableMergedCallback(...fns) {
    return useMonitoring(function useStableMergedCallback() {
        return useStableCallback((...args) => {
            for (let i = 0; i < fns.length; ++i) {
                fns[i]?.(...args);
            }
        });
    });
}

/**
 * Allows attaching an event handler to any *non-Preact* element, and removing it when the component using the hook unmounts. The callback does not need to be stable across renders.
 *
 * @remarks `"mode"` controls if there's one handler that calls all your functions (default), or one handler added per function (`"single"`).
 *
 * The default, `"grouped"`, is faster when you have, say, a button component, used hundreds of times on a page, that each installs a global event handler.
 *
 * @param target - A *non-Preact* node to attach the event to.
 */
function useGlobalHandler(target, type, handler, options, mode) {
    return useMonitoring(function useGlobalHandler() {
        mode ||= "grouped";
        useEnsureStability("useGlobalHandler", target, mode);
        if (!target)
            return;
        if (mode === "grouped") {
            // Note to self: The typing doesn't improve even if this is split up into a sub-function.
            // No matter what, it seems impossible to get the handler's event object typed perfectly.
            // It seems like it's guaranteed to always be a union of all available types.
            // Again, no matter what combination of sub- or sub-sub-functions used.
            useGlobalHandlerGrouped(target, type, handler, options);
        }
        else {
            useGlobalHandlerSingle(target, type, handler, options);
        }
    });
}
let mapThing = new Map();
function doMapThing(op, target, type, handler, options) {
    if (handler) {
        const optionsKey = JSON.stringify(options);
        const byType = mapThing.get(target) || new Map();
        const byOptions = (byType.get(type) || new Map());
        const info = byOptions.get(optionsKey) || { listener: null, listeners: new Set() };
        op(info, handler);
        byOptions.set(optionsKey, info);
        byType.set(type, byOptions);
        mapThing.set(target, byType);
    }
}
function addToMapThing(target, type, handler, options) {
    doMapThing((info, h) => {
        info.listeners.add(h);
        if (info.listener == null)
            target.addEventListener(type, info.listener = e => info.listeners.forEach(fn => fn(e)), options);
    }, target, type, handler, options);
}
function removeFromMapThing(target, type, handler, options) {
    doMapThing((info, h) => {
        info.listeners.delete(h);
        if (info.listener == null)
            target.removeEventListener(type, info.listener = e => info.listeners.forEach(fn => fn(e)), options);
    }, target, type, handler, options);
}
/**
 * This is way faster for large numbers of event handlers.
 *
 * For example, if every button listens for a global click, or something,
 * it would be nice if it was efficient at least.
 */
function useGlobalHandlerGrouped(target, type, handler, options) {
    let stableHandler = useStableCallback(handler ?? (() => { }));
    if (handler == null)
        stableHandler = null;
    useEffect(() => {
        if (stableHandler) {
            addToMapThing(target, type, stableHandler, options);
            return () => removeFromMapThing(target, type, stableHandler, options);
        }
    }, [target, type, stableHandler]);
}
function useGlobalHandlerSingle(target, type, handler, options) {
    let stableHandler = useStableCallback(handler ?? (() => { }));
    if (handler == null)
        stableHandler = null;
    useEffect(() => {
        if (stableHandler) {
            target.addEventListener(type, stableHandler, options);
            return () => target.removeEventListener(type, stableHandler, options);
        }
    }, [target, type, stableHandler]);
}

/**
 * Throws a (Typescript compiler) error if the passed object is anything but the empty object `{\}` or `void`.
 *
 * **Does nothing at runtime -- type checking only.**
 *
 * Use this to ensure that your spread operators work correctly and cover all cases.
 *
 * @param _a - The remaining spread parameters of a given object that you expect to be empty (because you properly accounted for all the properties that exist in it, and want to ensure it stays that way)
 */
function assertEmptyObject(_a) { }

// eslint-disable-next-line no-restricted-globals
function getWindow(element) { return (typeof window == "undefined") ? undefined : (element?.ownerDocument?.defaultView ?? globalThis ?? {}); }
// eslint-disable-next-line no-restricted-globals
function getDocument(element) { return (typeof window == "undefined") ? undefined : (element?.ownerDocument ?? getWindow()?.document) ?? undefined; }

/**
 * Handles events for a backdrop on a modal dialog -- the kind where the user expects the modal to close when they click/tap outside of it.
 *
 * @compositeParams
 */
function useBackdropDismiss({ backdropDismissParameters: { dismissBackdropActive: open, onDismissBackdrop: onCloseUnstable, ...void1 }, refElementPopupReturn: { getElement, ...void3 }, ...void2 }) {
    return useMonitoring(function useBackdropDismiss() {
        const getOpen = useStableGetter(open);
        const onClose = useStableGetter(onCloseUnstable);
        const onBackdropClick = useCallback(function onBackdropClick(e) {
            if (!getOpen())
                return;
            // Basically, "was this event fired on an element not contained by the modal?"
            // There are multiple ways browser react to "interacting with nothing", and this takes care of everything.
            let element = getElement();
            let foundInsideClick = false;
            if (e.target && element && element.contains(e.target)) {
                foundInsideClick = true;
            }
            if (!foundInsideClick) {
                onClose()?.(e);
            }
        }, []);
        useGlobalHandler(getWindow(), "mousedown", open ? onBackdropClick : null, { capture: true });
        useGlobalHandler(getWindow(), "touchstart", open ? onBackdropClick : null, { capture: true });
    });
}

/**
 * Quick and easy way to add extra information to an event that was fired.
 *
 * For example, "this was a click event, but it has information about what list item was pressed too."
 *
 * Get that extra information from the [EventDetail] symbol.
 */
const EventDetail = Symbol("event-detail");
function getEventDetail(e) { return e[EventDetail]; }
function enhanceEvent(e, detail) {
    const event = (e ?? {});
    event[EventDetail] ??= {};
    Object.assign(event[EventDetail], detail);
    return event;
}

const MagicWindowKey = ("__preact-prop-helpers-escape-key-dismiss__");
function getElementDepth(element) {
    let depth = 0;
    let parent = element.parentElement;
    while (parent) {
        depth += 1;
        parent = parent.parentElement;
    }
    return depth;
}
/**
 * Invokes a callback when the `Escape` key is pressed on the topmost component (a max of one invocation per `Escape` press)
 *
 * @remarks One press of the `Escape` key is guaranteed to only call `onDismiss` for *only one* component, and it is called on the component deepest in the DOM tree.
 *
 * TODO: Instead of being deepest in the DOM tree (which is usually fine), it should probably be related to what order something was made `active`.
 *
 * @compositeParams
 */
function useEscapeDismiss({ escapeDismissParameters: { onDismissEscape: onClose, dismissEscapeActive: open, getDocument: unstableGetDocument, parentDepth, ...void1 }, refElementPopupReturn: { getElement, ...void2 } }) {
    return useMonitoring(function useEscapeDismiss() {
        const stableOnClose = useStableGetter(onClose);
        const getDocument = useStableCallback(unstableGetDocument);
        const getDepth = useStableGetter(parentDepth + 1);
        // When this component opens, add an event listener that finds the deepest open soft dismiss element to actually dismiss.
        // Only opened components will add event handlers, and will remove them once closed.
        // The reason this is so complicated is because:
        // 1. We must only close one soft dismiss component at a time.  If there's a tooltip in a popup, the tooltip must be dismissed.
        // 2. `keydown` events don't just work on arbitrary elements, for our purposes they must be from the `window`. So we can't rely on normal capturing or bubbling behavior on the element itself.
        // 3. Event handlers added to the `window` via `addEventHandler` are called in the order of registration, which is completely at odds with #1.
        //
        // So all soft dismiss components listen for a keydown of Escape, 
        // then the first one to do so will wait for a microtask, 
        // then find the deepest element in the document tree to dismiss of all of those components currently open.
        useEffect(() => {
            const document = getDocument();
            const window = document.defaultView;
            window[MagicWindowKey] ??= { microtaskQueued: false, elementQueue: new Map() };
            const info = window[MagicWindowKey];
            if (open) {
                window.addEventListener("keydown", handler, { capture: true });
                return () => {
                    const element = getElement();
                    if (element && info.elementQueue)
                        info.elementQueue.delete(element);
                    window.removeEventListener("keydown", handler, { capture: true });
                };
            }
            function handler(e) {
                if (e.key == "Escape") {
                    // We don't know which of the currently active soft dismisses will actually do something,
                    // but ONE of them definitely will,
                    // so we stop propagation to child nodes, but not to everyone on the window (stopImmediatePropagation).
                    e.preventDefault();
                    e.stopPropagation();
                    // This is what at least one of the elements will call
                    const onClose2 = () => { stableOnClose()?.(enhanceEvent(e, { reason: "escape" })); };
                    const element = getElement();
                    if (element) {
                        const treeDepth = getElementDepth(element);
                        const depth = getDepth();
                        info.elementQueue.set(element, { depth, onClose: onClose2, treeDepth });
                    }
                    if (!info.microtaskQueued) {
                        info.microtaskQueued = true;
                        setTimeout(() => {
                            const { elementQueue } = info;
                            info.microtaskQueued = false;
                            info.elementQueue = new Map();
                            let deepestDepth = -Infinity;
                            let deepestTreeDepth = -Infinity;
                            let deepestOnClose = null;
                            for (const [element, { depth, onClose, treeDepth }] of elementQueue) {
                                let tieBroken = false;
                                if (depth == deepestDepth) {
                                    if (treeDepth > deepestTreeDepth) {
                                        tieBroken = true;
                                    }
                                }
                                if (depth > deepestDepth || (depth == deepestDepth && tieBroken)) {
                                    deepestDepth = depth;
                                    deepestTreeDepth = treeDepth;
                                    deepestOnClose = onClose;
                                }
                            }
                            deepestOnClose?.();
                        }, 0);
                    }
                }
            }
        }, [open]);
    });
}

/**
 * Invokes a callback when focus travels outside of the component's element.
 *
 * @remarks TODO: This is not intended for recursive structures, like dialogs that open dialogs, or menus that open menus, but does properly handle, e.g., the fact that a menu's menubutton having focus still counts as the menu having focus.
 *
 * @compositeParams
 */
function useLostFocusDismiss({ refElementPopupReturn: { getElement: getPopupElement, ...void3 }, refElementSourceReturn, lostFocusDismissParameters: { dismissLostFocusActive: open, onDismissLostFocus: onClose, ...void4 }, ...void1 }) {
    return useMonitoring(function useLostFocusDismiss() {
        const { getElement: getSourceElement, ...void2 } = (refElementSourceReturn ?? {});
        const stableOnClose = useStableGetter(onClose);
        const getOpen = useStableGetter(open);
        const onLastActiveElementChange = useCallback((newElement, _prevElement, e) => {
            const open = getOpen();
            const sourceElement = getSourceElement?.();
            const popupElement = getPopupElement();
            if (!(sourceElement?.contains(newElement) || popupElement?.contains(newElement))) {
                if (open) {
                    console.assert(e != null);
                    stableOnClose()?.(e);
                }
            }
        }, [getSourceElement]);
        return { activeElementParameters: { onLastActiveElementChange } };
    });
}

/**
 * Combines two `children`.
 *
 * @remarks This is fairly trivial and not even technically a hook, as it doesn't use any other hooks, but is this way for consistency.
 *
 * TODO: This could accept a variable number of arguments to be consistent with useMergedProps, but I feel like it might be a performance hit.
 */
function useMergedChildren(lhs, rhs) {
    if (lhs == null && rhs == null) {
        return undefined;
    }
    else if (lhs == null) {
        return rhs;
    }
    else if (rhs == null) {
        return lhs;
    }
    else {
        return createElement(Fragment, {}, lhs, rhs);
    }
}

/**
 * Merged the `class` and `className` properties of two sets of props into a single string.
 *
 * @remarks Duplicate classes are removed (order doesn't matter anyway).
 */
function useMergedClasses(...classes) {
    // Note: For the sake of forward compatibility, this function is labelled as
    // a hook, but as it uses no other hooks it technically isn't one.
    let classesSet = new Set();
    for (let c of classes) {
        if (typeof c == "string" && c.trim())
            classesSet.add(c);
    }
    if (classesSet.size) {
        return Array.from(classesSet).join(" ");
    }
    else {
        return undefined;
    }
}

function processRef(instance, ref) {
    if (typeof ref === "function") {
        ref(instance);
    }
    else if (ref != null) {
        ref.current = instance;
    }
    else {
        /* eslint-disable no-debugger */
        debugger;
        console.assert(false, "Unknown ref type found that was neither a RefCallback nor a RefObject");
    }
}
/**
 * Combines two refs into one. This allows a component to both use its own ref *and* forward a ref that was given to it.
 *
 * @remarks Or just use {@link useMergedProps}
 */
function useMergedRefs(rhs, lhs) {
    // This *must* be stable in order to prevent repeated reset `null` calls after every render.
    const combined = useStableCallback(function combined(current) {
        processRef(current, lhs);
        processRef(current, rhs);
    });
    if (lhs == null && rhs == null) {
        return undefined;
    }
    else if (lhs == null) {
        if (process.env.NODE_ENV === 'development')
            console.assert(typeof rhs == "function" || "current" in rhs, "Unknown ref type found that was neither a RefCallback nor a RefObject");
        return rhs;
    }
    else if (rhs == null) {
        if (process.env.NODE_ENV === 'development')
            console.assert(typeof lhs == "function" || "current" in lhs, "Unknown ref type found that was neither a RefCallback nor a RefObject");
        return lhs;
    }
    else {
        return combined;
    }
}

function styleStringToObject(style) {
    // TODO: This sucks D:
    return Object.fromEntries(style.split(";").map(statement => statement.split(":")));
}
/**
 * Merges two style objects, returning the result.
 *
 * @param style - The user-given style prop for this component
 * @param obj - The CSS properties you want added to the user-given style
 * @returns A CSS object containing the properties of both objects.
 */
function useMergedStyles(lhs, rhs) {
    // Easy case, when there are no styles to merge return nothing.
    if (!lhs && !rhs)
        return undefined;
    if (typeof lhs != typeof rhs) {
        // Easy cases, when one is null and the other isn't.
        if (lhs && !rhs)
            return lhs;
        if (!lhs && rhs)
            return rhs;
        // They're both non-null but different types.
        // Convert the string type to an object bag type and run it again.
        if (lhs && rhs) {
            // (useMergedStyles isn't a true hook -- this isn't a violation)
            if (typeof lhs == "string")
                return useMergedStyles(styleStringToObject(lhs), rhs);
            if (typeof rhs == "string")
                return useMergedStyles(lhs, styleStringToObject(rhs));
        }
        // Logic???
        return undefined;
    }
    // They're both strings, just concatenate them.
    if (typeof lhs == "string") {
        return `${lhs};${rhs ?? ""}`;
    }
    // They're both objects, just merge them.
    return {
        ...(lhs ?? {}),
        ...(rhs ?? {})
    };
}

let log = console.warn;
/**
 * When `useMergedProps` encounters a conflict, the function passed here will be called.
 *
 * @defaultValue `console.warn`
 */
function enableLoggingPropConflicts(log2) {
    log = log2;
}
/**
 * Given two sets of props, merges them and returns the result.
 *
 * @remarks The hook is aware of and can intelligently merge `className`, `class`, `style`, `ref`, `children`, and all event handlers.
 *
 * If two sets of props both specify the same attribute, e.g. both specify two different `id`s, then an error will be printed to the console (customize this with {@link enableLoggingPropConflicts}), as this conflict needs to be arbitrated on by you.
 *
 * {@include } {@link enableLoggingPropConflicts}
 *
 * @see {@link useMergedRefs}
 * @see {@link useMergedStyles}
 * @see {@link useMergedClasses}
 * @see {@link useMergedChildren}
 *
 * @param allProps - A variadic number of props to merge into one
 *
 * @returns A single object with all the provided props merged into one.
 */
function useMergedProps(...allProps) {
    useEnsureStability("useMergedProps", allProps.length);
    let ret = {};
    for (let nextProps of allProps) {
        useMergedPropsHelper(ret, nextProps);
    }
    return ret;
}
const knowns = new Set(["children", "ref", "className", "class", "style"]);
function mergeUnknown(key, lhsValue, rhsValue) {
    if (typeof lhsValue === "function" || typeof rhsValue === "function") {
        // They're both functions that can be merged (or one's a function and the other's null).
        // Not an *easy* case, but a well-defined one.
        const merged = mergeFunctions(lhsValue, rhsValue);
        return merged;
    }
    else {
        // Uh...they're not both functions so we're here because one of them's null, right?
        if (lhsValue == null && rhsValue == null) {
            if (rhsValue === null && lhsValue === undefined)
                return rhsValue;
            else
                return lhsValue;
        }
        if (lhsValue == null)
            return rhsValue;
        else if (rhsValue == null)
            return lhsValue;
        else if (rhsValue == lhsValue) {
            // I mean, they're the same value at least
            // so we don't need to do anything.
            // Not really ideal though.
            return rhsValue;
        }
        else {
            // Ugh.
            // No good strategies here, just log it if requested
            log?.(`The prop "${key}" cannot simultaneously be the values ${lhsValue} and ${rhsValue}. One must be chosen outside of useMergedProps.`);
            return rhsValue;
        }
    }
}
/**
 * Helper function.
 *
 * This is one of the most commonly called functions in this and consumer libraries,
 * so it trades a bit of readability for speed (i.e. we don't decompose objects and just do regular property access, iterate with `for...in`, instead of `Object.entries`, etc.)
 */
function useMergedPropsHelper(target, mods) {
    target.ref = useMergedRefs(target.ref, mods.ref);
    target.style = useMergedStyles(target.style, mods.style);
    target.className = useMergedClasses(target["class"], target.className, mods["class"], mods.className);
    target.children = useMergedChildren(target.children, mods.children);
    if (target.ref === undefined)
        delete target.ref;
    if (target.style === undefined)
        delete target.style;
    if (target.className === undefined)
        delete target.className;
    if (target["class"] === undefined)
        delete target["class"];
    if (target.children === undefined)
        delete target.children;
    for (const rhsKeyU in mods) {
        const rhsKey = rhsKeyU;
        if (knowns.has(rhsKey))
            continue;
        target[rhsKey] = mergeUnknown(rhsKey, target[rhsKey], mods[rhsKey]);
    }
}
/**
 * #__NO_SIDE_EFFECTS__
 */
function mergeFunctions(lhs, rhs) {
    if (!lhs)
        return rhs;
    if (!rhs)
        return lhs;
    return (...args) => {
        const lv = lhs(...args);
        const rv = rhs(...args);
        if (lv instanceof Promise || rv instanceof Promise)
            return Promise.all([lv, rv]);
    };
}

function generateStack() {
    if (process.env.NODE_ENV === 'development' && globalThis._generate_setState_stacks) {
        try {
            throw new Error();
        }
        catch (e) {
            return e.stack;
        }
    }
    return undefined;
}
/**
 * Returns a function that retrieves the stack at the time this hook was called (in development mode only).
 *
 * @remarks The global variable `_generate_setState_stacks` must be true, or no stack will be generated.
 */
function useStack() {
    if (process.env.NODE_ENV === "development") {
        const stack = useMemo(generateStack, []);
        const getStack = useCallback(() => stack, []);
        return getStack;
    }
    else {
        return returnEmptyString;
    }
}
function returnEmptyString() { return ""; }

/**
 * If you want a single place to put a debugger for tracking focus,
 * here:
 */
function focus(e) {
    if (process.env.NODE_ENV === 'development' && globalThis.LOG_FOCUS_CHANGES === true) {
        console.log(`Focus changed to ${(e?.tagName || "").toLowerCase().padStart(6)}:`, e);
        console.log(generateStack());
    }
    e?.focus?.();
}
/**
 * When an element unmounts, default HTML behavior is to just send focus to the body, which is wildly unhelpful. It means you lose your place in the keyboard tab order.
 *
 * If you still have access to the element that's unmounting, or perhaps its parent from beforehand, this will find the next suitable element to send focus to instead of the body.
 *
 * **Important**: This function is linear on the number of DOM nodes in your document, so it's not particularly fast. Only call it once when you need its value, not every time tab focus changed or something.
 */
function findBackupFocus(unmountingElement) {
    if (unmountingElement == null)
        return (globalThis.document.body);
    let document = unmountingElement.ownerDocument;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
    let node = walker.firstChild();
    let bestCandidateBefore = null;
    let bestCandidateAfter = null;
    let w = false;
    while (node) {
        let pos = node.compareDocumentPosition(unmountingElement);
        if (pos & Node.DOCUMENT_POSITION_DISCONNECTED) {
            if (!w)
                console.warn("Can't focus anything near a disconnected element");
            w = true;
        }
        if (pos & Node.DOCUMENT_POSITION_PRECEDING) {
            // The unmounting element is before this element we're tree-walking.
            // That means the next tabbable element we find is the candidate we really want.
            if (node instanceof Element) {
                if (isTabbable(node)) {
                    bestCandidateAfter = node;
                    break;
                }
            }
        }
        else if (pos & Node.DOCUMENT_POSITION_FOLLOWING) {
            // The unmounting element is after this element we're tree-walking.
            // That means the we're getting closer and closer.
            // If this element is tabbable, then it's even closer than any other tabbable element we've saved up to this point.
            if (node instanceof Element) {
                if (isTabbable(node)) {
                    bestCandidateBefore = node;
                }
            }
        }
        node = walker.nextNode();
    }
    return bestCandidateAfter ?? bestCandidateBefore ?? document.body;
}

/**
 * Runs a function the specified number of milliseconds after the component renders.
 *
 * @remarks This is particularly useful to function as "useEffect on a delay".
 *
 * @remarks
 * {@include } {@link UseTimeoutParameters}
 */
function useTimeout({ timeout, callback, triggerIndex }) {
    return useMonitoring(function useTimeout() {
        const stableCallback = useStableCallback(() => { startTimeRef.current = null; callback(); });
        const getTimeout = useStableGetter(timeout);
        // Set any time we start timeout.
        // Unset any time the timeout completes
        const startTimeRef = useRef(null);
        const disabled = (timeout == null);
        // Any time the triggerIndex changes (including on mount)
        // restart the timeout.  The timeout does NOT reset
        // when the duration or callback changes, only triggerIndex.
        useEffect(() => {
            if (!disabled) {
                const timeout = getTimeout();
                console.assert(disabled == (timeout == null));
                if (timeout != null) {
                    startTimeRef.current = +(new Date());
                    const handle = setTimeout(stableCallback, timeout);
                    return () => clearTimeout(handle);
                }
            }
        }, [triggerIndex, disabled]);
        const getElapsedTime = useCallback(() => {
            return (+(new Date())) - (+(startTimeRef.current ?? new Date()));
        }, []);
        const getRemainingTime = useCallback(() => {
            const timeout = getTimeout();
            return timeout == null ? null : Math.max(0, timeout - getElapsedTime());
        }, []);
        return { getElapsedTime, getRemainingTime };
    });
}

let idIndex = 0;
/**
 * Debug function that yells at you if your forgot to use the props a hook returns.
 *
 * @remarks Like other debug hooks, only has any effect IFF there is a global variable called `process.env.NODE_ENV` and it contains the value `"development"`, AND there is a global variable called `_generate_useTagProps_tags` set to true, and stacks are only generated if `_generate_setState_stacks` is true..
 *
 * @param props - The props to return a modified copy of
 * @param tag - Should be unique
 * @returns A modified copy of the given props
 */
function useTagProps(props, tag) {
    if (process.env.NODE_ENV === 'development' && globalThis._generate_useTagProps_tags) {
        const [id] = useState$1(() => ++idIndex);
        const propsIdTag = `data-props-${tag}-${id}`;
        const getStack = useStack();
        // Don't have multiple tags of the same type on the same props, means a hook has been called twice!
        console.assert(!(props && typeof props == "object" && tag in props));
        useTimeout({
            callback: () => {
                const document = getDocument();
                if (document) {
                    let element = document.querySelectorAll(`[${propsIdTag}]`);
                    if (element.length != 1) {
                        console.error("A hook returned props that were not properly spread to any HTMLElement:");
                        console.log(getStack());
                        /* eslint-disable no-debugger */
                        debugger;
                    }
                }
            },
            timeout: 250,
            triggerIndex: tag
        });
        return useMemo(() => {
            return { ...props, [propsIdTag]: true /*, [tag as never]: true*/ };
        }, [props, tag]);
    }
    else {
        return props;
    }
}

/**
 * When used in tandem with `useRovingTabIndex`, allows control of
 * the tabbable index with the arrow keys, Page Up/Page Down, or Home/End.
 *
 * @remarks There is no child version of this hook. That being said, the props returned are stable and work equally well on the child as the parent. If you don't have a parent `HTMLElement`, you can still pass the returned props to each child individually.
 *
 * @see {@link useCompleteListNavigation}, which packages everything up together.
 *
 * @compositeParams
 */
function useLinearNavigation({ linearNavigationParameters: { getLowestIndex, getHighestIndex, isValidForLinearNavigation, navigatePastEnd, navigatePastStart, onNavigateLinear, arrowKeyDirection, disableHomeEndKeys, pageNavigationSize, ...void4 }, rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex, ...void5 }, paginatedChildrenParameters: { paginationMax, paginationMin, ...void2 }, processedIndexManglerReturn: { indexDemangler, indexMangler, ...void3 }, ...void1 }) {
    return useMonitoring(function useLinearNavigation() {
        let getPaginatedRange = useStableGetter(paginationMax == null || paginationMin == null ? null : paginationMax - paginationMin);
        useEnsureStability("useLinearNavigation", onNavigateLinear, isValidForLinearNavigation, indexDemangler, indexMangler);
        const navigateAbsolute = useCallback((requestedIndexMangled, searchDirection, e, fromUserInteraction, mode) => {
            const highestChildIndex = getHighestIndex();
            const lowestChildIndex = getLowestIndex();
            (getTabbableIndex() ?? 0);
            const targetDemangled = indexDemangler(requestedIndexMangled);
            const { status, valueDemangled } = tryNavigateToIndex({ isValid: isValidForLinearNavigation, lowestChildIndex, highestChildIndex, indexDemangler, indexMangler, searchDirection, targetDemangled });
            if (status == "past-end") {
                if (navigatePastEnd == "wrap") {
                    if (mode == "single")
                        navigateToFirst(e, fromUserInteraction);
                    else {
                        /* eslint-disable no-constant-condition */
                        // Uncomment to allow page up/down to wrap after hitting the top/bottom once.
                        // It works fine, the problem isn't that -- the problem is it just feels wrong. 
                        // Page Up/Down don't feel like they should wrap, even if normally requested. 
                        // That's the arrow keys' domain.
                        navigateToLast(e, fromUserInteraction);
                    }
                    return "stop";
                }
                else if (navigatePastEnd == "passthrough") {
                    return "passthrough";
                }
                else {
                    navigatePastEnd();
                    return "stop";
                }
            }
            else if (status == "past-start") {
                if (navigatePastStart == "wrap") {
                    if (mode == "single") {
                        navigateToLast(e, fromUserInteraction);
                    }
                    else {
                        /* eslint-disable no-constant-condition */
                        // See above. It works fine but just feels wrong to wrap on Page Up/Down.
                        navigateToFirst(e, fromUserInteraction);
                    }
                    return "stop";
                }
                else if (navigatePastStart == "passthrough") {
                    return "passthrough";
                }
                else {
                    navigatePastStart();
                    return "stop";
                }
            }
            else {
                setTabbableIndex(valueDemangled, e, fromUserInteraction);
                onNavigateLinear?.(valueDemangled, e);
                return "stop";
            }
        }, []);
        const navigateToFirst = useStableCallback((e, fromUserInteraction) => { return navigateAbsolute(getLowestIndex(), -1, e, fromUserInteraction, "single"); });
        const navigateToLast = useStableCallback((e, fromUserInteraction) => { return navigateAbsolute(getHighestIndex(), 1, e, fromUserInteraction, "single"); });
        const navigateRelative2 = useStableCallback((e, offset, fromUserInteraction, mode) => {
            getHighestIndex();
            const searchDirection = (Math.sign(offset) || 1);
            const original = (getTabbableIndex() ?? 0);
            /**
             * To get the target, we need to add (or subtract) 1 to our current value,
             * but it need to be relative to any sorting/rearranging that's happened.
             *
             * We mangle the index to get its "visual" position, add our offset,
             * and then demangle it to get the child that corresponds to the next child "visually".
             */
            const targetMangled = indexMangler(original) + offset;
            return navigateAbsolute(targetMangled, searchDirection, e, fromUserInteraction, mode);
        });
        const navigateToNext = useStableCallback((e, fromUserInteraction) => {
            return navigateRelative2(e, 1, fromUserInteraction, "single");
        });
        const navigateToPrev = useStableCallback((e, fromUserInteraction) => {
            return navigateRelative2(e, -1, fromUserInteraction, "single");
        });
        //const getDisableHomeEndKeys = useStableGetter(disableHomeEndKeys);
        //const getArrowKeyDirection = useStableGetter(arrowKeyDirection);
        //const getPageNavigationSize = useStableGetter(pageNavigationSize);
        const stableProps = useRef(useTagProps({
            onKeyDown: useStableCallback((e) => {
                // Not handled by typeahead (i.e. assume this is a keyboard shortcut)
                // TODO: ctrlKey was here too, but multi-selection uses that when in focus-selection mode.
                if (e.metaKey)
                    return;
                const allowsVerticalNavigation = (arrowKeyDirection == "vertical" || arrowKeyDirection == "either");
                const allowsHorizontalNavigation = (arrowKeyDirection == "horizontal" || arrowKeyDirection == "either");
                let childRange = (getHighestIndex() - getLowestIndex());
                let paginatedRange = getPaginatedRange() ?? childRange;
                let truePageNavigationSize = pageNavigationSize;
                if (truePageNavigationSize != null && truePageNavigationSize < 1) {
                    truePageNavigationSize = Math.round(truePageNavigationSize * Math.max(10, paginatedRange + 1));
                }
                let result = "passthrough";
                // Arrow keys only take effect for components oriented in that direction,
                // so we want to make sure we only listen for left/right or up/down when appropriate.
                let keyPressIsValidForOrientation = true;
                switch (e.key) {
                    case "ArrowUp":
                    case "ArrowDown":
                        keyPressIsValidForOrientation = (allowsVerticalNavigation);
                        break;
                    case "ArrowLeft":
                    case "ArrowRight":
                        keyPressIsValidForOrientation = (allowsHorizontalNavigation);
                        break;
                }
                if (keyPressIsValidForOrientation) {
                    switch (e.key) {
                        case "ArrowUp":
                        case "ArrowLeft":
                            result = navigateToPrev(e, true);
                            break;
                        case "ArrowDown":
                        case "ArrowRight":
                            result = navigateToNext(e, true);
                            break;
                        case "PageUp":
                        case "PageDown":
                            if (truePageNavigationSize == null)
                                break;
                            else if (truePageNavigationSize > 0)
                                result = navigateRelative2(e, truePageNavigationSize * (e.key.endsWith('n') ? 1 : -1), true, "page");
                            break;
                        case "Home":
                        case "End":
                            if (!disableHomeEndKeys) {
                                if (e.key.endsWith('e'))
                                    navigateToFirst(e, true);
                                else
                                    navigateToLast(e, true);
                                result = 'stop';
                            }
                            break;
                    }
                }
                if (result && result != 'passthrough') {
                    e.preventDefault();
                    e.stopPropagation();
                }
            })
        }, "data-linear-navigation"));
        return {
            linearNavigationReturn: {},
            propsStable: stableProps.current
        };
    });
}
/**
 * #__NO_SIDE_EFFECTS__
 */
function tryNavigateToIndex({ isValid, highestChildIndex, lowestChildIndex, searchDirection, indexDemangler, indexMangler, targetDemangled }) {
    if (searchDirection === -1) {
        let bestUpResult = undefined;
        bestUpResult = tryNavigateUp({ isValid, indexDemangler, indexMangler, targetDemangled, lowestChildIndex });
        bestUpResult ??= tryNavigateDown({ isValid, indexDemangler, indexMangler, targetDemangled, highestChildIndex });
        return bestUpResult || { valueDemangled: targetDemangled, status: "normal" };
    }
    else {
        let bestDownResult = undefined;
        bestDownResult = tryNavigateDown({ isValid, indexDemangler, indexMangler, targetDemangled, highestChildIndex });
        bestDownResult ??= tryNavigateUp({ isValid, indexDemangler, indexMangler, targetDemangled, lowestChildIndex });
        return bestDownResult || { valueDemangled: targetDemangled, status: "normal" };
    }
}
function tryNavigateUp({ isValid, indexDemangler, indexMangler, lowestChildIndex: lower, targetDemangled }) {
    while (targetDemangled >= lower && !isValid(targetDemangled)) {
        targetDemangled = indexDemangler(indexMangler(targetDemangled) - 1);
    }
    if (!isValid(targetDemangled)) {
        return undefined;
    }
    if (targetDemangled < lower) {
        return { valueDemangled: indexDemangler(lower), status: "past-start" };
    }
    else {
        return { valueDemangled: targetDemangled, status: "normal" };
    }
}
function tryNavigateDown({ isValid, indexDemangler, indexMangler, targetDemangled, highestChildIndex: upper }) {
    while (targetDemangled <= upper && !isValid(targetDemangled)) {
        targetDemangled = indexDemangler(indexMangler(targetDemangled) + 1);
    }
    if (!isValid(targetDemangled)) {
        return undefined;
    }
    if (targetDemangled > upper) {
        return { valueDemangled: indexDemangler(upper), status: "past-end" };
    }
    else {
        return { valueDemangled: targetDemangled, status: "normal" };
    }
}

/**
 * Allows a parent component to access information about certain
 * child components once they have rendered.
 *
 * @remarks This hook is designed to be lightweight, in that the parent keeps no state
 * and runs no effects.  Each child *does* run an effect, but with no state
 * changes unless you explicitly request them.
 *
 * {@include } {@link ManagedChildren}
 *
 * @hasChild {@link useManagedChild}
 *
 * @compositeParams
 */
function useManagedChildren(parentParameters) {
    return useMonitoring(function useManagedChildren() {
        const { managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange }, ...rest } = parentParameters;
        useEnsureStability("useManagedChildren", onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange);
        const getHighestIndex = useCallback(() => { return managedChildrenArray.current.highestIndex; }, []);
        const getLowestIndex = useCallback(() => { return managedChildrenArray.current.lowestIndex; }, []);
        const updateMinMax = useCallback((index) => {
            // The opposite of this is done during the "shrinkwrap" phase, which is debounced.
            managedChildrenArray.current.highestIndex = Math.max(index, managedChildrenArray.current.highestIndex);
            managedChildrenArray.current.lowestIndex = Math.min(index, managedChildrenArray.current.lowestIndex);
        }, []);
        // All the information we have about our children is stored in this **stable** array.
        // Any mutations to this array **DO NOT** trigger any sort of a re-render.
        const managedChildrenArray = useRef({ arr: [], rec: {}, highestIndex: 0, lowestIndex: 0 });
        // For indirect access to each child
        // Compare getManagedChildInfo
        // TODO: The primary use for this is flaggable closest fits
        // which needs to search all children for that closest fit.
        // It would be nice if there was something better for that.
        const forEachChild = useCallback((f) => {
            for (const child of managedChildrenArray.current.arr) {
                if (child) {
                    if (f(child) == 'break')
                        return;
                }
            }
            for (const field in managedChildrenArray.current.rec) {
                const child = managedChildrenArray.current.rec[field];
                if (child)
                    if (f(child) == 'break')
                        return;
            }
        }, []);
        // Retrieves the information associated with the child with the given index.
        // `undefined` if not child there, or it's unmounted.
        const getManagedChildInfo = useCallback((index) => {
            if (typeof index == "number")
                return managedChildrenArray.current.arr[index];
            else
                return managedChildrenArray.current.rec[index];
        }, []);
        const shrinkwrapHandle = useRef(null);
        // When we unmount children, we'd like to reduce the array length accordingly.
        // We do this a tick after useEffect to wait for all the child dust to settle, 
        // because this is not critical work; it's just for memory optimization.
        // Honestly, it might even be better to delete this? TODO, I guess.
        const scheduleShrinkwrap = useCallback(() => {
            if (shrinkwrapHandle.current != null)
                clearTimeout(shrinkwrapHandle.current);
            shrinkwrapHandle.current = setTimeout(() => {
                let shave = 0;
                while (shave <= managedChildrenArray.current.arr.length && managedChildrenArray.current.arr[managedChildrenArray.current.arr.length - 1 - shave] == undefined) {
                    ++shave;
                }
                managedChildrenArray.current.arr.splice(managedChildrenArray.current.arr.length - shave, shave);
                managedChildrenArray.current.highestIndex = managedChildrenArray.current.arr.length - 1;
                shrinkwrapHandle.current = null;
                // TODO: length automatically adjusts to give us the highest index,
                // but there's no corresponding property to get the lowest index when it changes...
                // managedChildrenArray.current.lowestIndex = managedChildrenArray.current.arr.length - 1;
            }, 1);
        }, []);
        // tl;dr this is a way to have run useLayoutEffect once after all N children
        // have mounted and run *their* useLayoutEffect, but also *without* re-rendering
        // ourselves because of having a `childCount` state or anything similar.
        //
        // When the child count ref updates, we want the parent to also run an effect
        // to maybe do something with all these children that just mounted.
        // The easiest way would be useEffect(..., [childCount]) but
        // that would require us having a childCount state, then calling
        // setChildCount and re-rendering every time children mount
        // (only one re-render at a time unless children are staggered, but still)
        // 
        // As an alternate solution, any time a child uses ULE on mount, it queues a microtask
        // to emulate running ULE on the parent. Only the first child will actually queue
        // the microtask (by checking hasRemoteULE first) so that the "effect" only
        // runs once. When it's done, hasRemoteULE is reset so it can run again if
        // more children mount/unmount.
        const hasRemoteULEChildMounted = useRef(null);
        const remoteULEChildMounted = useCallback((index, mounted) => {
            if (!hasRemoteULEChildMounted.current) {
                hasRemoteULEChildMounted.current = {
                    mounts: new Set(),
                    unmounts: new Set(),
                    mountInfos: new Map()
                };
                debounceRendering(() => {
                    const { mounts, unmounts } = hasRemoteULEChildMounted.current;
                    const unmountsThatDidntMount = unmounts.difference(mounts);
                    for (const index of mounts) {
                        if (typeof index == "number") {
                            managedChildrenArray.current.highestIndex = Math.max(managedChildrenArray.current.highestIndex, index);
                            managedChildrenArray.current.lowestIndex = Math.min(managedChildrenArray.current.lowestIndex, index);
                        }
                    }
                    for (const index of unmountsThatDidntMount) {
                        if (typeof index == "number")
                            delete managedChildrenArray.current.arr[index];
                        else
                            delete managedChildrenArray.current.rec[index];
                    }
                    if (onChildrenCountChange || onChildrenMountChange) {
                        onChildrenMountChange?.(hasRemoteULEChildMounted.current.mounts, hasRemoteULEChildMounted.current.unmounts);
                        onChildrenCountChange?.(getChildren().getHighestIndex() + 1);
                        hasRemoteULEChildMounted.current = null;
                    }
                });
            }
            hasRemoteULEChildMounted?.current?.[mounted ? "mounts" : "unmounts"]?.add?.(index);
        }, [ /* Must remain stable */]);
        useEffect(() => {
            scheduleShrinkwrap();
        }, []);
        const managedChildren = useMemoObject({
            ...{ _: managedChildrenArray.current },
            forEach: forEachChild,
            getAt: getManagedChildInfo,
            getHighestIndex: getHighestIndex,
            getLowestIndex: getLowestIndex,
            _arraySlice: useCallback(() => {
                let ret = managedChildrenArray.current.arr.slice();
                const max = getHighestIndex();
                for (let i = 0; i <= max; ++i) {
                    if (ret[i] == null)
                        ret[i] = { index: i };
                }
                return ret;
            }, [])
        });
        const getChildren = useCallback(() => managedChildren, []);
        return {
            context: useMemoObject({
                managedChildContext: useMemoObject({
                    managedChildrenArray: managedChildrenArray.current,
                    remoteULEChildMounted,
                    //remoteULEChildChanged,
                    getChildren,
                    updateMinMax
                })
            }),
            managedChildrenReturn: { getChildren }
        };
    });
}
/**
 * @compositeParams
 */
function useManagedChild({ context, info }) {
    return useMonitoring(function useManagedChild() {
        const { managedChildContext: { getChildren, managedChildrenArray, remoteULEChildMounted, updateMinMax } } = (context ?? { managedChildContext: {} });
        const index = info.index;
        // Any time our child props change, make that information available
        // the parent if they need it.
        // The parent can listen for all updates and only act on the ones it cares about,
        // and multiple children updating in the same tick will all be sent at once.
        useLayoutEffect(() => {
            if (managedChildrenArray == null)
                return;
            // Insert this information in-place
            if (typeof index == "number") {
                managedChildrenArray.arr[index] = { ...info };
                updateMinMax?.(index);
            }
            else {
                managedChildrenArray.rec[index] = { ...info };
            }
        });
        // When we mount, notify the parent via queueMicrotask
        // (every child does this, so everything's coordinated to only queue a single microtask per tick)
        // Do the same on unmount.
        // Note: It's important that this comes AFTER remoteULEChildChanged
        // so that remoteULEChildMounted has access to all the info on mount.
        // When we unmount, ask the parent to remove our info from the list of children.
        useLayoutEffect(() => {
            remoteULEChildMounted?.(index, true);
            return () => remoteULEChildMounted?.(index, false);
        }, [index]);
        // When we mount, and **after other children have unmounted via uLE),
        // ask the parent to add our info to the list of children.
        //
        // The order is important (we need to delete all unmounts *before* adding any mounts)
        // but TODO the use of useLayoutEffect + useEffect to achieve this isn't really semantically correct.
        // Plus we've gone from scheduling 1 effect to 2.
        //useEffect(() => {
        //}, [index]);
        return {
            managedChildReturn: { getChildren: getChildren }
        };
    });
}
/**
 * An extension to useManagedChildren that handles the following common case:
 * 1. You have a bunch of children
 * 2. At any given time, only 1 of them is "selected", "activated", "focusable", whatever (or 0 of them, that's cool too, just 0 or 1 though).
 * 3. The parent has control over who is "selected" via a numerical index.
 *
 * This hook allows for much easier control over selection management.
 *
 * Note that because you may want to use multiple flags with the same children, this hook *does not* use `useManagedChildren`!
 * You need to pass it the existing children, and you must pass your invocation of `useManagedChildren` the returned `onChildrenMountChange` handler!
 *
 * Also because of that, the types of this function are rather odd.  It's better to start off using a hook that already uses a flag, such as `useRovingTabIndex`, as an example.
 */
function useChildrenFlag({ getChildren, indexDemangler, initialIndex, closestFit, onClosestFit, onIndexChange, getAt, setAt, isValid }) {
    useEnsureStability("useChildrenFlag", onIndexChange, getAt, setAt, isValid, indexDemangler);
    indexDemangler ??= identity;
    // TODO (maybe?): Even if there is an initial index, it's not set until mount. Is that fine?
    const [getCurrentIndex, setCurrentIndex] = usePassiveState(onIndexChange, undefined);
    const [getRequestedIndex, setRequestedIndex] = usePassiveState(null, undefined, { skipMountInitialization: true });
    // Shared between onChildrenMountChange and changeIndex, not public
    // Only called when `closestFit` is false, naturally.
    const getClosestFit = useCallback((requestedIndex) => {
        const children = getChildren();
        let closestDistance = Infinity;
        let closestIndex = null;
        children.forEach(child => {
            if (child != null && isValid(child)) {
                console.assert(typeof child.index == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
                const newDistance = Math.abs(child.index - requestedIndex);
                if (newDistance < closestDistance || (newDistance == closestDistance && child.index < requestedIndex)) {
                    closestDistance = newDistance;
                    closestIndex = child.index;
                }
            }
        });
        return closestIndex;
    }, [ /* Must remain stable! */]);
    if (closestFit) {
        console.assert(onClosestFit != null, "When closestFit is used, onClosestFit must be provided");
    }
    // Any time a child mounts/unmounts, we need to double-check to see if that affects 
    // the "currently selected" (or whatever) index.  The two cases we're looking for:
    // 1. The currently selected child unmounted
    // 2. A child mounted, and it mounts with the index we're looking for
    const reevaluateClosestFit = useStableCallback((reason) => {
        const children = getChildren();
        const requestedIndex = indexDemangler(getRequestedIndex());
        const currentIndex = indexDemangler(getCurrentIndex());
        const currentChild = currentIndex == null ? null : children.getAt(currentIndex);
        if (requestedIndex != null && closestFit && (requestedIndex != currentIndex || currentChild == null || !isValid(currentChild))) {
            console.assert(typeof requestedIndex == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
            const closestFitIndex = getClosestFit(requestedIndex);
            setCurrentIndex(closestFitIndex, reason);
            if (currentChild) {
                setAt(currentChild, false, closestFitIndex, currentIndex);
            }
            if (closestFitIndex != null) {
                const closestFitChild = children.getAt(closestFitIndex);
                console.assert(closestFitChild != null, "Internal logic???");
                setAt(closestFitChild, true, closestFitIndex, currentIndex);
                onClosestFit(closestFitIndex);
            }
            else {
                onClosestFit(null);
            }
        }
    });
    const reasonRef = useRef(undefined);
    const changeIndex = useCallback((arg, reason) => {
        const children = getChildren();
        const requestedIndex = (arg instanceof Function ? arg(getRequestedIndex()) : arg);
        reasonRef.current = reason;
        setRequestedIndex(requestedIndex, reason);
        const currentIndex = getCurrentIndex();
        if (currentIndex == requestedIndex)
            return requestedIndex;
        let newMatchingChild = (requestedIndex == null ? null : children.getAt(requestedIndex));
        const oldMatchingChild = (currentIndex == null ? null : children.getAt(currentIndex));
        if (requestedIndex == null) {
            // Easy case
            setCurrentIndex(null, reason);
            if (oldMatchingChild)
                setAt(oldMatchingChild, false, requestedIndex, currentIndex);
            return null;
        }
        else {
            const childIsValid = (newMatchingChild && isValid(newMatchingChild));
            if (childIsValid || !closestFit) {
                setCurrentIndex(requestedIndex, reason);
                if (oldMatchingChild)
                    setAt(oldMatchingChild, false, requestedIndex, currentIndex);
                if (newMatchingChild)
                    setAt(newMatchingChild, true, requestedIndex, currentIndex);
                return requestedIndex;
            }
            else {
                console.assert(closestFit);
                console.assert(typeof requestedIndex == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
                const closestFitIndex = getClosestFit(requestedIndex);
                setCurrentIndex(closestFitIndex, reason);
                if (closestFitIndex != null) {
                    newMatchingChild = children.getAt(closestFitIndex);
                    console.assert(newMatchingChild != null, "Internal logic???");
                    if (oldMatchingChild)
                        setAt(oldMatchingChild, false, closestFitIndex, currentIndex);
                    setAt(newMatchingChild, true, closestFitIndex, currentIndex);
                    return closestFitIndex;
                }
                else {
                    if (oldMatchingChild)
                        setAt(oldMatchingChild, false, closestFitIndex, currentIndex);
                    return null;
                }
            }
        }
    }, []);
    // Run once, on mount
    useLayoutEffect(() => {
        changeIndex(initialIndex ?? null, reasonRef.current);
    }, []);
    return { changeIndex, reevaluateClosestFit, getCurrentIndex };
}

/**
 * Slightly enhanced version of `useState` that includes a getter that remains constant
 * (i.e. you can use it in `useEffect` and friends without it being a dependency).
 *
 * @remarks If `getBuildMode()` returns `"development"`, then any calls to `setState` will also
 * take the stack at the time the hook was called and save it to `window._setState_stack`.
 * Useful if you want to trace whose state is being updated.
 *
 * @param initialState - Same as the built-in `setState`'s
 */
function useState(initialState) {
    const getStack = useStack();
    // We keep both, but override the `setState` functionality
    const [state, setStateP] = useState$1(initialState);
    const ref = useRef(state);
    // Hijack the normal setter function 
    // to also set our ref to the new value
    const setState = useRef(value => {
        if (process.env.NODE_ENV === 'development') {
            globalThis._setState_stack = getStack();
        }
        if (typeof value === "function") {
            const callback = value;
            setStateP(prevValue => {
                const nextValue = callback(prevValue);
                if (ref.current !== nextValue) {
                    // put a breakpoint here if you want
                    ref.current = nextValue;
                }
                ref.current = nextValue;
                return nextValue;
            });
        }
        else {
            if (ref.current !== value) {
                // put a breakpoint here if you want
                ref.current = value;
            }
            ref.current = value;
            setStateP(value);
        }
    });
    const getState = useCallback(() => { return ref.current; }, []);
    return [state, setState.current, getState];
}

/**
 * Implements a roving tabindex system where only one "focusable"
 * component in a set is able to receive a tab focus.
 *
 * @remarks *Which* of those elements receives focus is determined by you,
 * but it's recommended to offload that logic then to another hook, like
 * `useLinearNavigation`, which lets you change the tabbable element with
 * the arrow keys, `useTypeaheadNavigation`, which lets you change the
 * tabbable index with typeahead, or `useListNavigation(Complete)` if you
 * just want everything bundled together.
 *
 *
 * @hasChild {@link useRovingTabIndexChild}
 *
 * @compositeParams
 *
 * @param args - {@link UseRovingTabIndexParameters}
 * @returns - {@link UseRovingTabIndexReturnType}
 */
function useRovingTabIndex({ managedChildrenReturn: { getChildren }, rovingTabIndexParameters: { focusSelfParent: focusSelfParentUnstable, untabbable, untabbableBehavior, initiallyTabbedIndex, onTabbableIndexChange }, refElementReturn: { getElement }, processedIndexManglerReturn: { indexDemangler }, ...void1 }) {
    return useMonitoring(function useRovingTabIndex() {
        const focusSelfParent = useStableCallback(focusSelfParentUnstable);
        untabbableBehavior ||= "focus-parent";
        const lastFocused = useRef(null);
        const getInitiallyTabbedIndex = useStableGetter(initiallyTabbedIndex);
        const getUntabbable = useStableGetter(untabbable);
        // Override the actual setter to include some extra logic related to avoiding hidden children, 
        // what to do when we're untabbable, what to do when we're tabbable but given `null`, etc.
        const setTabbableIndex = useStableCallback((updater, reason, fromUserInteraction) => {
            const children = getChildren();
            // Notify the relevant children that they should become tabbable/untabbable,
            // but also handle focus management when we changed due to user interaction
            return changeTabbableIndex(function returnModifiedTabbableIndex(prevIndex) {
                const document = getDocument();
                let nextIndex = ((typeof updater === "function") ? updater(prevIndex ?? null) : updater);
                const untabbable = getUntabbable();
                let parentElement = getElement();
                console.assert(!!parentElement);
                // Whether or not we're currently tabbable, make sure that when we switch from untabbable to tabbable,
                // that we know which index to switch back to.
                // TODO: Redundant with below?
                if (nextIndex != null)
                    setLastNonNullIndex(nextIndex, reason);
                // If we're untabbable, then any attempt to set a new index simply fails and sets it to `null`.
                if (untabbable) {
                    // Focus the parent, since it's what's in the tab order right now
                    // TODO: Replace this and the other focus(getElement())
                    // with a user-replaceable focusParent, like item.focusSelf?
                    //
                    // Also TODO: Should these take fromUserInteraction into consideration?
                    // Do we always move focus when we become untabbable?
                    if (document && !parentElement.contains(document.activeElement) && untabbableBehavior != 'leave-child-focused')
                        focusSelfParent(parentElement);
                    return null;
                }
                // If the requested index is hidden, then there's no need to focus any elements or run any extra logic.
                if (nextIndex == null) {
                    // Focus the parent (more to be polite)
                    // TODO: Find the next/prev element and focus that instead,
                    // doable with the `tabbable` library, but it doesn't have a next() function or anything,
                    // so that needs to be manually done with a TreeWalker or something?
                    if (document && !parentElement.contains(document.activeElement) && untabbableBehavior != 'leave-child-focused')
                        focusSelfParent(parentElement);
                    return null;
                }
                // If we've made a change, and it was because the user clicked on it or something,
                // then focus that element too
                if (document && prevIndex != nextIndex) {
                    const nextChild = children.getAt(nextIndex);
                    if (nextChild != null && fromUserInteraction) {
                        const element = nextChild.getElement();
                        if (element) {
                            if (document.activeElement == document.body || document.activeElement == null || !element.contains(document.activeElement)) {
                                nextChild.focusSelf(element);
                            }
                        }
                    }
                }
                // TODO: Redundant with above?
                if (nextIndex != null)
                    setLastNonNullIndex(nextIndex, reason);
                // Finally, return the value the user requested the index be set to.
                return nextIndex ?? 0;
            }, reason);
        });
        // When we switch from tabbable to non/tabbable, we really want to remember the last tabbable child.
        // So every time we change the index for any reason, record that change as a back up here that can be restored.
        const [getLastNonNullIndex, setLastNonNullIndex] = usePassiveState(null, useCallback(() => (initiallyTabbedIndex ?? 0), []));
        // Any time we switch to being untabbable, set the current tabbable index accordingly.
        useEffect(() => {
            const document = getDocument();
            let shouldFocusParentAfterwards = !!document && (getElement()?.contains(document.activeElement));
            if (untabbable)
                changeTabbableIndex(null, undefined);
            else {
                changeTabbableIndex(getLastNonNullIndex(), undefined);
            }
            if (shouldFocusParentAfterwards) {
                focusSelf(true);
            }
        }, [untabbable]);
        // TODO: This is jank, but necessary for onClosestFit.
        // There just needs to be a better focus management strategy in general to fix this.
        let avoidFocusingSelfOnMount = useRef(false);
        useEffect(() => {
            let handle = setTimeout(() => {
                handle = setTimeout(() => {
                    avoidFocusingSelfOnMount.current = true;
                }, 50);
            }, 50);
            return () => clearTimeout(handle);
        }, []);
        // Boilerplate related to notifying individual children when they become tabbable/untabbable
        const getTabbableAt = useCallback((child) => { return child.getLocallyTabbable(); }, []);
        const setTabbableAt = useCallback((child, t) => { if (child.index == 8)
            debugger; child.setLocallyTabbable(t); }, []);
        const isTabbableValid = useStableCallback((child) => { return !child.untabbable; });
        const { changeIndex: changeTabbableIndex, getCurrentIndex: getTabbableIndex, reevaluateClosestFit } = useChildrenFlag({
            initialIndex: initiallyTabbedIndex ?? (untabbable ? null : 0),
            onIndexChange: useStableCallback((n, p, r) => {
                // Ensure that changes to `untabbable` don't affect the user-provided onTabbableIndexChange
                if ((!(n == null && untabbable)))
                    onTabbableIndexChange?.(n, p, r);
            }),
            getChildren,
            closestFit: true,
            getAt: getTabbableAt,
            isValid: isTabbableValid,
            setAt: setTabbableAt,
            indexDemangler,
            onClosestFit: (index) => {
                const document = getDocument();
                // Whenever we change due to a closest-fit switch, make sure we don't lose focus to the body
                // TODO: This is slightly janky -- we want to only mess with the user's focus when this list (or whatever) is the current focus,
                // but by the time we know something like "all the children have unmounted",
                // we've lot the ability to know if any of them were focused, at least easily.
                // So we just check to see if focus was lost to the body and, if so, send it somewhere useful.
                // This is liable to break, probably with blockingElements or something.
                if (avoidFocusingSelfOnMount.current && document && (document.activeElement == null || document.activeElement == document.body)) {
                    let childElement = index == null ? null : getChildren().getAt(index)?.getElement();
                    if (index == null || childElement == null)
                        focus(findBackupFocus(getElement()));
                    else
                        getChildren().getAt(index)?.focusSelf(childElement);
                }
                avoidFocusingSelfOnMount.current = true;
            }
        });
        const focusSelf = useCallback((force, reason) => {
            const document = getDocument();
            const children = getChildren();
            let index = getTabbableIndex();
            const untabbable = getUntabbable();
            if (!untabbable) {
                // If we change from untabbable to tabbable, it's possible `index` might still be null.
                index ??= getInitiallyTabbedIndex() ?? children.getLowestIndex();
            }
            if (untabbable) {
                if (document && document.activeElement != getElement() && (force || untabbableBehavior != 'leave-child-focused')) {
                    focusSelfParent(getElement());
                }
            }
            else if (!untabbable && index != null) {
                const element = children.getAt(index)?.getElement();
                children.getAt(index)?.focusSelf?.(element);
            }
            else
                setTabbableIndex(null, reason, true);
        }, []);
        const rovingTabIndexContext = useMemoObject({
            setTabbableIndex,
            parentFocusSelf: focusSelf,
            getInitiallyTabbedIndex: useCallback(() => { return initiallyTabbedIndex ?? (untabbable ? null : 0); }, []),
            reevaluateClosestFit,
            untabbable,
            getUntabbableBehavior: useStableGetter(untabbableBehavior),
            giveParentFocusedElement: useCallback((e) => { lastFocused.current = e; }, [])
        });
        return {
            managedChildrenParameters: { onChildrenMountChange: useCallback(() => { reevaluateClosestFit(undefined); }, [reevaluateClosestFit]), },
            rovingTabIndexReturn: { setTabbableIndex, getTabbableIndex, focusSelf },
            context: useMemoObject({ rovingTabIndexContext }),
            props: useTagProps({
                // Note: Making this -1 instead of null is partially intentional --
                // it gives us time during useEffect to move focus back to the last focused element
                // (otherwise focus gets lost to the body, and useEffect thinks that it shouldn't
                // focus the child because focus wasn't within the list). 
                // It's also just consistent. 
                tabIndex: untabbable ? 0 : -1,
                // When a hidden child is clicked, some browsers focus the parent, just because it's got a role and a tabindex.
                onFocus: useStableCallback((e) => {
                    const parentElement = getElement();
                    console.assert(!!parentElement);
                    if (e.target == getElement()) {
                        if (!untabbable) {
                            focusSelf(false, e);
                        }
                    }
                })
            }, "data-roving-tab-index")
        };
    });
}
/**
 * @compositeParams
 *
 * @see {@link useRovingTabIndex}
 * @param args - {@link UseRovingTabIndexChildParameters}
 * @returns - {@link UseRovingTabIndexChildReturnType}
 */
function useRovingTabIndexChild({ info: { index, untabbable: iAmUntabbable, ...void2 }, context: { rovingTabIndexContext: { giveParentFocusedElement, untabbable: parentIsUntabbable, getUntabbableBehavior, reevaluateClosestFit, setTabbableIndex, getInitiallyTabbedIndex, parentFocusSelf } }, refElementReturn: { getElement }, ...void3 }) {
    return useMonitoring(function useRovingTabIndexChild() {
        const [tabbable, st, getTabbable] = useState(() => { return getInitiallyTabbedIndex() === index; });
        const HACK = useRef(iAmUntabbable);
        const HACK2 = useRef(index);
        HACK.current = iAmUntabbable;
        HACK2.current = index;
        const setTabbable = useCallback((t) => {
            if (typeof t === 'function') {
                return st(prev => {
                    const ret = t(prev);
                    if (ret && HACK.current) {
                        debugger;
                        console.error("setTabbable(true) called on a hidden child?");
                    }
                    //console.log(`setTabbable(${HACK2.current}, ${ret})`)
                    return ret;
                });
            }
            else {
                if (t && HACK.current) {
                    debugger;
                    console.error("setTabbable(true) called on a hidden child?");
                }
                const ret = st(t);
                //console.log(`setTabbable(${HACK2.current}, ${t})`);
                return ret;
            }
        }, []);
        useEffect(() => {
            if (tabbable) {
                giveParentFocusedElement(getElement());
            }
        }, [tabbable]);
        return {
            hasCurrentFocusParameters: {
                onCurrentFocusedInnerChanged: useStableCallback((focused, _prevFocused, e) => {
                    if (focused) {
                        const untabbableBehavior = getUntabbableBehavior();
                        if ((!parentIsUntabbable && !iAmUntabbable) || untabbableBehavior != "focus-parent")
                            setTabbableIndex(index, e, false);
                        else
                            parentFocusSelf(false);
                    }
                })
            },
            rovingTabIndexChildReturn: {
                tabbable,
                getTabbable,
            },
            info: { setLocallyTabbable: setTabbable, getLocallyTabbable: getTabbable },
            props: useTagProps({
                tabIndex: ((tabbable && !parentIsUntabbable) ? 0 : -1),
                inert: iAmUntabbable // This inert is to prevent the edge case of clicking a hidden item and it focusing itself
            }, "data-roving-tab-index-child"),
        };
    });
}

/**
 * Allows for the selection of a managed child by typing the given text associated with it.
 *
 * @see useListNavigation, which packages everything up together.
 *
 * @hasChild {@link useTypeaheadNavigationChild}
 *
 * @compositeParams
 */
function useTypeaheadNavigation({ typeaheadNavigationParameters: { collator, typeaheadTimeout, noTypeahead, isValidForTypeaheadNavigation, onNavigateTypeahead, ...void3 }, rovingTabIndexReturn: { getTabbableIndex: getIndex, setTabbableIndex: setIndex, ...void1 }, ...void2 }) {
    return useMonitoring(function useTypeaheadNavigation() {
        // For typeahead, keep track of what our current "search" string is (if we have one)
        // and also clear it every 1000 ms since the last time it changed.
        // Next, keep a mapping of typeahead values to indices for faster searching.
        // And, for the user's sake, let them know when their typeahead can't match anything anymore
        const [getCurrentTypeahead, setCurrentTypeahead] = usePassiveState(useStableCallback((currentTypeahead, prev, reason) => {
            const handle = setTimeout(() => { setCurrentTypeahead(null, undefined); setTypeaheadStatus("none"); }, typeaheadTimeout ?? 1000);
            updateBasedOnTypeaheadChange(currentTypeahead, reason);
            return () => clearTimeout(handle);
        }));
        //useTimeout({ timeout: typeaheadTimeout ?? 1000, callback: () => { setCurrentTypeahead(null); setInvalidTypeahead(null); }, triggerIndex: currentTypeahead });
        const sortedTypeaheadInfo = useRef([]);
        const [typeaheadStatus, setTypeaheadStatus] = useState("none");
        // Handle typeahead for input method editors as well
        // Essentially, when active, ignore further keys 
        // because we're waiting for a CompositionEnd event
        const [, setImeActive, getImeActive] = useState(false);
        // Because composition events fire *after* keydown events 
        // (but within the same task, which, TODO, could be browser-dependent),
        // we can use this to keep track of which event we're listening for on the first keydown.
        const [nextTypeaheadChar, setNextTypeaheadChar] = useState(null);
        useLayoutEffect(() => {
            if (nextTypeaheadChar !== null) {
                setCurrentTypeahead(typeahead => ((typeahead ?? "") + nextTypeaheadChar), undefined);
                setNextTypeaheadChar(null);
            }
        }, [nextTypeaheadChar]);
        const comparatorShared = useStableCallback((safeLhs, safeRhs) => {
            let compare;
            // For the purposes of typeahead, only compare a string of the same size as our currently typed string.
            // By normalizing them first, we ensure this byte-by-byte handling of raw character data works out okay.
            safeLhs = safeLhs.normalize("NFD");
            safeRhs = safeRhs.normalize("NFD");
            if (collator)
                compare = collator.compare(safeLhs, safeRhs);
            else
                compare = safeLhs.toLowerCase().localeCompare(safeRhs.toLowerCase() ?? "");
            return compare;
        });
        const insertingComparator = useStableCallback((lhs, rhs) => {
            if (typeof lhs === "string" && typeof rhs.text === "string") {
                return comparatorShared(lhs, rhs.text);
            }
            return lhs - rhs;
        });
        const typeaheadComparator = useStableCallback((lhs, rhs) => {
            if (typeof lhs === "string" && typeof rhs.text === "string") {
                // TODO: Doing this substring BEFORE normalization is, like, pretty not great?
                let trimmedRet = comparatorShared(lhs, rhs.text.substring(0, lhs.length));
                return trimmedRet;
            }
            return lhs - rhs;
        });
        const isDisabled = useStableGetter(noTypeahead);
        const propsStable = useRef(useTagProps({
            onKeyDown: useStableCallback((e) => {
                if (isDisabled())
                    return;
                const imeActive = getImeActive();
                const key = e.key;
                // Not handled by typeahead (i.e. assume this is a keyboard shortcut)
                if (e.ctrlKey || e.metaKey)
                    return;
                if (!imeActive && e.key === "Backspace") {
                    // Remove the last character in a way that doesn't split UTF-16 surrogates.
                    setCurrentTypeahead(t => t == null ? null : [...t].reverse().slice(1).reverse().join(""), e);
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
                // The key property represents the typed character OR the "named key attribute" of the key pressed.
                // There's no definite way to tell the difference, but for all intents and purposes
                // there are no one-character names, and there are no non-ASCII-alpha names.
                // Thus, any one-character or non-ASCII value for `key` is *almost certainly* a typed character.
                const isCharacterKey = (key.length === 1 || !/^[A-Za-z]/.test(key));
                if (isCharacterKey) {
                    if (key == " " && (getCurrentTypeahead() ?? "").trim().length == 0) ;
                    else {
                        e.preventDefault();
                        e.stopPropagation();
                        // Note: Won't be true for the first keydown
                        // but will be overwritten before useLayoutEffect is called
                        // to actually apply the change
                        if (!imeActive)
                            setNextTypeaheadChar(key);
                    }
                }
            }),
            onCompositionStart: useStableCallback((e) => {
                setNextTypeaheadChar(e.data);
                setImeActive(false);
            }),
            onCompositionEnd: useStableCallback((_e) => { setImeActive(true); }),
        }, "data-typeahead-navigation"));
        const excludeSpace = useStableCallback(() => { return typeaheadStatus != "none"; });
        return {
            context: useMemoObject({
                typeaheadNavigationContext: useMemoObject({
                    insertingComparator,
                    sortedTypeaheadInfo: sortedTypeaheadInfo.current,
                    excludeSpace
                }),
            }),
            typeaheadNavigationReturn: {
                getCurrentTypeahead,
                typeaheadStatus
            },
            propsStable: propsStable.current
        };
        function updateBasedOnTypeaheadChange(currentTypeahead, reason) {
            if (currentTypeahead && sortedTypeaheadInfo.current.length) {
                const sortedTypeaheadIndex = binarySearch(sortedTypeaheadInfo.current, currentTypeahead, typeaheadComparator);
                if (sortedTypeaheadIndex < 0) {
                    // The user has typed an entry that doesn't exist in the list
                    // (or more specifically "for which there is no entry that starts with that input")
                    setTypeaheadStatus("invalid");
                }
                else {
                    setTypeaheadStatus("valid");
                    /*
                      We know roughly where, in the sorted array of strings, our next typeahead location is.
                      But roughly isn't good enough if there are multiple matches.
                      To convert our sorted index to the unsorted index we need, we have to find the first
                      element that matches us *and* (if any such exist) is *after* our current selection.
        
                      In other words, the only way typeahead moves backwards relative to our current
                      position is if the only other option is behind us.
        
                      It's not specified in WAI-ARIA what to do in that case.  I suppose wrap back to the start?
                      Though there's also a case for just going upwards to the nearest to prevent jumpiness.
                      But if you're already doing typeahead on an unsorted list, like, jumpiness can't be avoided.
                      I dunno. Going back to the start is the simplest though.
        
                      Basically what this does: Starting from where we found ourselves after our binary search,
                      scan backwards and forwards through all adjacent entries that also compare equally so that
                      we can find the one whose `unsortedIndex` is the lowest amongst all other equal strings
                      (and also the lowest `unsortedIndex` yadda yadda except that it comes after us).
        
                      TODO: The binary search starts this off with a solid O(log n), but one-character
                      searches are, thanks to pigeonhole principal, eventually guaranteed to become
                      O(n*log n). This is annoying but probably not easily solvable? There could be an
                      exception for one-character strings, but that's just kicking the can down
                      the road. Maybe one or two characters would be good enough though.
                    */
                    // These are used to keep track of the candidates' positions in both our sorted array and the unsorted DOM.
                    let lowestUnsortedIndexAll = null;
                    let lowestSortedIndexAll = sortedTypeaheadIndex;
                    // These two are only set for elements that are ahead of us, but the principle's the same otherwise
                    let lowestUnsortedIndexNext = null;
                    let lowestSortedIndexNext = sortedTypeaheadIndex;
                    const updateBestFit = (unsortedIndex) => {
                        if (!isValidForTypeaheadNavigation(unsortedIndex))
                            return;
                        if (lowestUnsortedIndexAll == null || unsortedIndex < lowestUnsortedIndexAll) {
                            lowestUnsortedIndexAll = unsortedIndex;
                            lowestSortedIndexAll = i;
                        }
                        if ((lowestUnsortedIndexNext == null || unsortedIndex < lowestUnsortedIndexNext) && unsortedIndex > (getIndex() ?? -Infinity)) {
                            lowestUnsortedIndexNext = unsortedIndex;
                            lowestSortedIndexNext = i;
                        }
                    };
                    let i = sortedTypeaheadIndex;
                    while (i >= 0 && typeaheadComparator(currentTypeahead, sortedTypeaheadInfo.current[i]) == 0) {
                        updateBestFit(sortedTypeaheadInfo.current[i].unsortedIndex);
                        --i;
                    }
                    i = sortedTypeaheadIndex;
                    while (i < sortedTypeaheadInfo.current.length && typeaheadComparator(currentTypeahead, sortedTypeaheadInfo.current[i]) == 0) {
                        updateBestFit(sortedTypeaheadInfo.current[i].unsortedIndex);
                        ++i;
                    }
                    let toSet = null;
                    if (lowestUnsortedIndexNext !== null)
                        toSet = sortedTypeaheadInfo.current[lowestSortedIndexNext].unsortedIndex;
                    else if (lowestUnsortedIndexAll !== null)
                        toSet = sortedTypeaheadInfo.current[lowestSortedIndexAll].unsortedIndex;
                    if (toSet != null) {
                        setIndex(toSet, reason, true);
                        onNavigateTypeahead?.(toSet, reason);
                    }
                }
            }
        }
    });
}
/**
 *
 * @compositeParams
 */
function useTypeaheadNavigationChild({ info: { index, ...void1 }, 
//textContentReturn: { getTextContent, ...void5 },
context: { typeaheadNavigationContext: { sortedTypeaheadInfo, insertingComparator, excludeSpace, ...void2 } }, ...void4 }) {
    return useMonitoring(function useTypeaheadNavigationChild() {
        const onTextContentChange = useCallback((text) => {
            if (text) {
                // Find where to insert this item.
                // Because all index values should be unique, the returned sortedIndex
                // should always refer to a new location (i.e. be negative)   
                //
                // TODO: adding things on mount/unmount means that it's 
                // hard to make grid navigation typeahead work smoothly with tables -- 
                // every time we change columns, every row resorts itself, even though
                // each row should be able to just do that on mount.
                // 
                // We probably need to instead just sort on-demand, which is better for
                // performance anyway, but is tricky to code without major lag on the
                // first keystroke.
                //
                // Or we need to be able to support columns here, within typeahead?
                // Don't really like that idea (what if we want 3d navigation, woo-ooo-ooo).
                const sortedIndex = binarySearch(sortedTypeaheadInfo, text, insertingComparator);
                console.assert(sortedIndex < 0 || insertingComparator(sortedTypeaheadInfo[sortedIndex].text, { unsortedIndex: index, text }) == 0);
                if (sortedIndex < 0) {
                    sortedTypeaheadInfo.splice(-sortedIndex - 1, 0, { text, unsortedIndex: index });
                }
                else {
                    sortedTypeaheadInfo.splice(sortedIndex, 0, { text, unsortedIndex: index });
                }
                return () => {
                    // When unmounting, find where we were and remove ourselves.
                    // Again, we should always find ourselves because there should be no duplicate values if each index is unique.
                    const sortedIndex = binarySearch(sortedTypeaheadInfo, text, insertingComparator);
                    console.assert(sortedIndex < 0 || insertingComparator(sortedTypeaheadInfo[sortedIndex].text, { unsortedIndex: index, text }) == 0);
                    if (sortedIndex >= 0) {
                        sortedTypeaheadInfo.splice(sortedIndex, 1);
                    }
                };
            }
        }, []);
        return {
            textContentParameters: { onTextContentChange },
            pressParameters: { excludeSpace }
        };
    });
}
/**
 * Your usual binary search implementation.
 *
 * It's used here to quickly find a good spot to start searching for our next typeahead candidate.
 * @param array - The array to search through
 * @param wanted - The value you'd like to find
 * @param comparator - Compares `wanted` with the current value in `array`
 * @returns A non-negative value if `wanted` was found, and a negative number if not.
 * The absolute value of this number, minus one, is where `wanted` *would* be found if it *was* in `array`
 *
 * #__NO_SIDE_EFFECTS__
 */
function binarySearch(array, wanted, comparator) {
    let firstIndex = 0;
    let lastIndex = array.length - 1;
    while (firstIndex <= lastIndex) {
        const testIndex = (lastIndex + firstIndex) >> 1;
        const comparisonResult = comparator(wanted, array[testIndex]);
        if (comparisonResult > 0) {
            firstIndex = testIndex + 1;
        }
        else if (comparisonResult < 0) {
            lastIndex = testIndex - 1;
        }
        else {
            return testIndex;
        }
    }
    return -firstIndex - 1;
}

/**
 * Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.
 *
 * @remarks In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
 * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any text for typeahead to focus the next item that matches.
 *
 * @hasChild {@link useListNavigationChild}
 *
 * @compositeParams
 */
function useListNavigation({ linearNavigationParameters, typeaheadNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, processedIndexManglerReturn, ...void1 }) {
    return useMonitoring(function useListNavigation() {
        const { props: propsRTI, rovingTabIndexReturn, managedChildrenParameters, context: contextRovingTabIndex, ...void2 } = useRovingTabIndex({ managedChildrenReturn, rovingTabIndexParameters, refElementReturn, processedIndexManglerReturn });
        const { propsStable: propsStableTN, typeaheadNavigationReturn, context: contextTypeahead, ...void3 } = useTypeaheadNavigation({ rovingTabIndexReturn, typeaheadNavigationParameters, });
        const { propsStable: propsStableLN, linearNavigationReturn, ...void4 } = useLinearNavigation({ rovingTabIndexReturn, linearNavigationParameters, paginatedChildrenParameters, processedIndexManglerReturn });
        // Merge the props while keeping them stable
        // (TODO: We run this merge logic every render but only need the first render's result because it's stable)
        //const p = useMergedProps<ParentOrChildElement>(propsStableTN, propsStableLN);
        //const {propsStable} = useRef<ElementProps<ParentOrChildElement>>(p)
        return {
            managedChildrenParameters,
            rovingTabIndexReturn,
            typeaheadNavigationReturn,
            context: useMemoObject({
                ...contextRovingTabIndex,
                ...contextTypeahead
            }),
            linearNavigationReturn,
            props: useMergedProps(propsStableLN, propsStableTN, propsRTI)
        };
    });
}
/**
 * @compositeParams
 */
function useListNavigationChild({ info: { index, untabbable, ...void1 }, context, refElementReturn, ...void2 }) {
    return useMonitoring(function useListNavigationChild() {
        const { props, ...rticr } = useRovingTabIndexChild({ context, info: { index, untabbable }, refElementReturn });
        const { ...tncr } = useTypeaheadNavigationChild({ context, info: { index } });
        return {
            props,
            ...tncr,
            ...rticr
        };
    });
}

/**
 * Implements 2-dimensional grid-based keyboard navigation, similarly to {@link useListNavigation}.
 *
 * @remarks Due to the complexity of this hook, it is *highly* recommended to use {@link useCompleteGridNavigation} instead.
 * But if you do need to it's designed to work well with intellisense -- just keep plugging the holes until the errors stop and that's 95% of it right there.
 *
 * Some features and/or limitations of this hook:
 *
 * ```md-literal
 * * Like all other hooks (except sorting), the only DOM restriction is that the rows and cells are descendants of the grid as a whole **somewhere**.
 * * Rows are given priority over columns. Sorting/filtering happens by row, Page Up/Down, the Home/End keys, and typeahead affect the current row, etc.
 * * Cells can have a `colSpan` or be missing, and moving with the arrow keys will "remember" the correct column to be in as focus jumps around.
 * ```
 *
 * @hasChild {@link useGridNavigationRow}
 * @hasChild {@link useGridNavigationCell}
 *
 * @compositeParams
 */
function useGridNavigation({ gridNavigationParameters: { onTabbableColumnChange, initiallyTabbableColumn, ...void3 }, linearNavigationParameters, ...listNavigationParameters }) {
    return useMonitoring(function useGridNavigation() {
        const [getTabbableColumn, setTabbableColumn] = usePassiveState(onTabbableColumnChange, useStableCallback(() => {
            let t = (initiallyTabbableColumn ?? 0);
            return { actual: t, ideal: t };
        }));
        const { linearNavigationReturn, rovingTabIndexReturn, typeaheadNavigationReturn, managedChildrenParameters, context: { rovingTabIndexContext, typeaheadNavigationContext }, props, ...void1 } = useListNavigation({
            linearNavigationParameters: { arrowKeyDirection: "vertical", ...linearNavigationParameters },
            ...listNavigationParameters
        });
        const gridNavigationRowContext = useMemoObject({
            //rowIsUntabbableBecauseOfGrid: !!untabbable,
            setTabbableRow: rovingTabIndexReturn.setTabbableIndex,
            getTabbableColumn,
            setTabbableColumn
        });
        return {
            props,
            managedChildrenParameters,
            context: useMemoObject({
                gridNavigationRowContext,
                rovingTabIndexContext,
                typeaheadNavigationContext
            }),
            linearNavigationReturn,
            rovingTabIndexReturn,
            typeaheadNavigationReturn
        };
    });
}
/**
 * Child hook for {@link useGridNavigation}
 *
 * As a row, this hook is responsible for both being a **child** of list navigation, but also a **parent** of list navigation.
 * As such, this is one of the most complicated hooks here in terms of dependencies.
 *
 * @compositeParams
 */
function useGridNavigationRow({ 
// Stuff for the row as a child of the parent grid
info: { index, untabbable, ...void3 }, context: contextFromParent, 
// Stuff for the row as a parent of child cells
linearNavigationParameters, rovingTabIndexParameters: { untabbable: rowIsUntabbableAndSoAreCells, initiallyTabbedIndex, onTabbableIndexChange, ...void4 }, managedChildrenReturn, typeaheadNavigationParameters, 
// Both/neither
refElementReturn, ...void1 }) {
    return useMonitoring(function useGridNavigationRow() {
        const { getTabbableColumn, setTabbableColumn, setTabbableRow } = contextFromParent.gridNavigationRowContext;
        const getIndex = useStableCallback(() => { return index; });
        // When this row is focused from the parent's `useRovingTabIndex`,
        // instead of focusing the row element, this function focuses the appropriate cell element.
        const whenThisRowIsFocused = useStableCallback((e) => {
            const { getChildren } = managedChildrenReturn;
            if (contextFromParent.rovingTabIndexContext.untabbable) {
                // If the parent is untabbable, and this row was requested to focus itself (as part of parentFocusSelf),
                // then we focus the parent grid instead of the child cell.
                contextFromParent.rovingTabIndexContext.parentFocusSelf(true);
            }
            else {
                // If the parent is tabbable (normal behavior), 
                // then we focus the cell that should be focused in this row.
                let { ideal, actual: _actual } = (getTabbableColumn());
                let index = (ideal ?? 0);
                let child = getChildren().getAt(index);
                let lowestIndex = getChildren().getLowestIndex();
                let highestIndex = getChildren().getHighestIndex();
                while ((!child || child.untabbable) && index > lowestIndex) {
                    --index;
                    child = getChildren().getAt(index);
                }
                while ((!child || child.untabbable) && index <= highestIndex) {
                    ++index;
                    child = getChildren().getAt(index);
                }
                if (child) {
                    const e = child.getElement();
                    child.focusSelf(e);
                }
                else {
                    focus(e);
                }
            }
        }, []);
        const focusSelf = whenThisRowIsFocused;
        const { props: propsLNC, info: { getLocallyTabbable, setLocallyTabbable, ...void2 }, hasCurrentFocusParameters, pressParameters, rovingTabIndexChildReturn, textContentParameters, ...void6 } = useListNavigationChild({ info: { index, untabbable }, refElementReturn, context: contextFromParent });
        const allChildCellsAreUntabbable = !rovingTabIndexChildReturn.tabbable;
        //console.log(`Row ${index} is untabbable? ${allChildCellsAreUntabbable.toString()}`)
        const { props: propsLN, context: contextULN, linearNavigationReturn, managedChildrenParameters, rovingTabIndexReturn, typeaheadNavigationReturn, ...void5 } = useListNavigation({
            managedChildrenReturn,
            refElementReturn,
            typeaheadNavigationParameters,
            processedIndexManglerReturn: { indexDemangler: identity, indexMangler: identity },
            rovingTabIndexParameters: {
                untabbableBehavior: "leave-child-focused",
                focusSelfParent: whenThisRowIsFocused,
                untabbable: allChildCellsAreUntabbable || rowIsUntabbableAndSoAreCells,
                initiallyTabbedIndex,
                onTabbableIndexChange: useStableCallback((v, p, r) => {
                    setTabbableColumn(p => ({ ideal: p?.ideal ?? null, actual: p?.actual ?? null }), r);
                    onTabbableIndexChange?.(v, p, r);
                })
            },
            linearNavigationParameters: {
                onNavigateLinear: useStableCallback((next, event) => {
                    setTabbableColumn(prev => ({ ideal: next, actual: next }), event);
                }),
                disableHomeEndKeys: true,
                pageNavigationSize: 0,
                arrowKeyDirection: "horizontal",
                ...linearNavigationParameters
            },
            paginatedChildrenParameters: { paginationMin: null, paginationMax: null }
        });
        const { setTabbableIndex } = rovingTabIndexReturn;
        const gridNavigationCellContext = useMemoObject({
            //allChildCellsAreUntabbable,
            setTabbableRow,
            getRowIndex: getIndex,
            getTabbableColumn,
            setTabbableColumn,
            setTabbableCell: setTabbableIndex
        });
        // These will often have conflicting values, but we always use -1 for rows no matter what,
        // so instead of negotiating a resolution we can just give a straight answer.
        propsLN.tabIndex = propsLNC.tabIndex = -1;
        const props = useMergedProps(propsLN, propsLNC, {
            // Ensure that if the browser focuses the row for whatever reason, we transfer the focus to a child cell.
            onFocus: useStableCallback(e => whenThisRowIsFocused(e.currentTarget))
        });
        const contextToChildren = useMemoObject({
            gridNavigationCellContext,
            ...contextULN
        });
        return {
            context: contextToChildren,
            props: useTagProps(props, "data-use-grid-navigation-partial-row"),
            info: { focusSelf, getLocallyTabbable, setLocallyTabbable },
            hasCurrentFocusParameters,
            pressParameters,
            rovingTabIndexChildReturn,
            textContentParameters,
            linearNavigationReturn,
            managedChildrenParameters,
            rovingTabIndexReturn,
            typeaheadNavigationReturn
        };
    });
}
/**
 * Child hook for {@link useGridNavigationRow} (and {@link useGridNavigation}).
 *
 * @compositeParams
 */
function useGridNavigationCell({ context: { gridNavigationCellContext: { getRowIndex, setTabbableRow, getTabbableColumn: _getCurrentColumn, setTabbableColumn, setTabbableCell, ...void4 }, rovingTabIndexContext, typeaheadNavigationContext, ...void5 }, info: { index, untabbable, ...void7 }, refElementReturn, gridNavigationCellParameters: { colSpan, ...void6 }, ...void1 }) {
    return useMonitoring(function useGridNavigationCell() {
        colSpan ??= 1;
        const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 }, rovingTabIndexChildReturn, textContentParameters, pressParameters, props, info: infoLs, ...void2 } = useListNavigationChild({
            info: { index, untabbable },
            context: { rovingTabIndexContext, typeaheadNavigationContext },
            refElementReturn,
        });
        return {
            info: infoLs,
            props: useMergedProps(props, {
                onClick: (e) => {
                    setTabbableColumn(prev => {
                        return ({ ideal: index, actual: index });
                    }, e);
                }
            }),
            rovingTabIndexChildReturn,
            textContentParameters,
            pressParameters,
            hasCurrentFocusParameters: {
                onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e) => {
                    ocfic1?.(focused, prev, e);
                    if (focused) {
                        setTabbableRow(getRowIndex(), e, false);
                        setTabbableColumn(prev => {
                            return { actual: index ?? null, ideal: prev?.ideal ?? null };
                        }, e);
                        setTabbableCell((prev) => {
                            if (prev != null && (prev < index || prev > index + (colSpan))) {
                                return prev;
                            }
                            return index;
                        }, e, false);
                    }
                })
            },
        };
    });
}

/**
 * Allows children to stop themselves from rendering outside of a narrow range.
 *
 * @remarks Each child will still render itself, but it is aware of if it is within/outside of the pagination range, and simply return empty.
 *
 * @hasChild {@link usePaginatedChild}
 *
 * @compositeParams
 */
function usePaginatedChildren({ managedChildrenReturn: { getChildren }, paginatedChildrenParameters: { paginationMax, paginationMin, childCount }, rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex }, childrenHaveFocusReturn: { getAnyFocused }, processedIndexManglerReturn: { indexDemangler, indexMangler } }) {
    return useMonitoring(function usePaginatedChildren() {
        const parentIsPaginated = (paginationMin != null || paginationMax != null);
        const lastPagination = useRef({ paginationMax: null, paginationMin: null });
        const refreshPagination = useCallback((paginationMin, paginationMax) => {
            const childMax = (getChildren().getHighestIndex() + 1);
            const childMin = (getChildren().getLowestIndex());
            for (let i = childMin; i <= childMax; ++i) {
                const visible = (i >= (paginationMin ?? -Infinity) && i < (paginationMax ?? Infinity));
                getChildren().getAt(indexDemangler(i))?.setPaginationVisible(visible);
                if (visible && (paginationMax != null || paginationMin != null))
                    getChildren().getAt(indexDemangler(i))?.setChildCountIfPaginated(getChildren().getHighestIndex() + 1);
            }
        }, [ /* Must be empty */]);
        useEffect(() => {
            // At this point, the children have not yet updated themselves to match the pagination.
            // We need to tell them to update, but also handle where the focus is.
            // If a current list item is focused, then we need to move focus to a paginated one
            // but we can't do it until they all re-render...
            // TODO: Something better than setTimeout for this, please...
            let tabbableIndex = getTabbableIndex();
            if (tabbableIndex != null) {
                let shouldFocus = getAnyFocused() || false;
                setTimeout(() => {
                    if (paginationMin != null && tabbableIndex < paginationMin) {
                        setTabbableIndex(paginationMin, undefined, shouldFocus); // TODO: This isn't a user interaction, but we need to ensure the old element doesn't remain focused, yeesh.
                    }
                    else if (paginationMax != null && tabbableIndex >= paginationMax) {
                        let next = paginationMax - 1;
                        if (next == -1)
                            next = null;
                        setTabbableIndex(next, undefined, shouldFocus); // TODO: This isn't a user interaction, but we need to ensure the old element doesn't remain focused, yeesh.
                    }
                }, 1);
            }
            refreshPagination(paginationMin, paginationMax);
            lastPagination.current.paginationMax = paginationMax ?? null;
            lastPagination.current.paginationMin = paginationMin ?? null;
        }, [paginationMax, paginationMin]);
        const pmin = useRef(paginationMin);
        const pmax = useRef(paginationMax);
        pmin.current = paginationMin;
        pmax.current = paginationMax;
        const getDefaultPaginationVisible = useCallback((i) => { return (i >= (pmin.current ?? -Infinity) && i < (pmax.current ?? Infinity)); }, []);
        const paginatedChildContext = useMemo(() => ({
            parentIsPaginated,
            getDefaultPaginationVisible
        }), [parentIsPaginated]);
        const getPaginationMin = useStableGetter(paginationMin);
        const getPaginationMax = useStableGetter(paginationMax);
        useLayoutEffect(() => {
            const paginationMin = getPaginationMin();
            const paginationMax = getPaginationMax();
            const count = childCount ?? 0;
            if (paginationMax != null || paginationMin != null) {
                const min = (paginationMin ?? 0);
                const max = (paginationMax ?? count);
                for (let i = min; i < max; ++i) {
                    getChildren().getAt(i)?.setChildCountIfPaginated(count);
                }
            }
        }, [childCount]);
        return {
            context: useMemo(() => ({ paginatedChildContext }), [paginatedChildContext]),
            paginatedChildrenReturn: { refreshPagination }
        };
    });
}
/**
 * Child hook for {@link usePaginatedChildren}.
 *
 * @remarks When a child is paginated, it still renders itself (i.e. it calls this hook, so it's rendering),
 * so check `hideBecausePaginated` and, if it's true, avoid doing any heavy logic and render with `display: none`.
 *
 * @compositeParams
 */
function usePaginatedChild({ info: { index }, context: { paginatedChildContext: { parentIsPaginated, getDefaultPaginationVisible } } }) {
    return useMonitoring(function usePaginatedChild() {
        const [childCountIfPaginated, setChildCountIfPaginated] = useState(null);
        const [paginatedVisible, setPaginatedVisible] = useState(parentIsPaginated ? getDefaultPaginationVisible(index) : true);
        return {
            props: useTagProps(!parentIsPaginated ? {} : { "aria-setsize": childCountIfPaginated ?? undefined, "aria-posinset": (index + 1) }, "data-paginated-children-child"),
            paginatedChildReturn: { /*paginatedVisible,*/ parentIsPaginated, hideBecausePaginated: parentIsPaginated ? !paginatedVisible : false },
            info: {
                setPaginationVisible: setPaginatedVisible,
                setChildCountIfPaginated
            }
        };
    });
}

/**
 * Hook that allows for the **direct descendant** children of this component to be re-ordered and sorted.
 *
 * @remarks *This is **separate** from "managed" children, which can be any level of child needed! Sortable/rearrangeable children must be **direct descendants** of the parent that uses this hook!*
 *
 * It's recommended to use this in conjunction with `useListNavigation`; it takes the same `indexMangler` and `indexDemangler`
 * functions that this hook returns. `useListNavigation` does not directly use this hook because, as mentioned,
 * this hook imposes serious restrictions on child structure, while `useListNavigation` allows anything.
 *
 * Besides the prop-modifying hook that's returned, the `sort` function that's returned will
 * sort all children according to their value from the `getValue` argument you pass in.
 *
 * If you want to perform some re-ordering operation that's *not* a sort, you can manually
 * re-map each child's position using `mangleMap` and `demangleMap`, which convert between
 * sorted and unsorted index positions.
 *
 * Again, unlike some other hooks, **these children must be direct descendants**. This is because
 * the prop-modifying hook inspects the given children, then re-creates them with new `key`s.
 * Because keys are given special treatment and a child has no way of modifying its own key
 * there's no other time or place this can happen other than exactly within the parent component's render function.
 *
 * @compositeParams
 */
function useRearrangeableChildren({ rearrangeableChildrenParameters: { children: childrenIn }, processedIndexManglerParameters: { getIndex, getSortValueAt }, managedChildrenReturn: { getChildren: getManagedChildren }, context: { processedIndexManglerContext: { mangler } } }) {
    return useMonitoring(function useRearrangeableChildren() {
        useEnsureStability("useRearrangeableChildren", getIndex, getSortValueAt);
        const allChildPositions = useRef([]);
        const [refreshIndex, setRefreshIndex] = useState$1(0);
        const childrenOut = useMemo(() => {
            const rearrangedChildren = mangler.setChildren(childrenIn);
            for (const ch of rearrangedChildren) {
                const index = ch == null ? null : getIndex(ch);
                const mangledIndex = index == null ? null : mangler.map(index, "demangled", "mangled");
                index == null ? null : mangler.map(index, "mangled", "demangled");
                if (index != null && mangledIndex != null) {
                    const info = getManagedChildren().getAt(index);
                    const info2 = getManagedChildren().getAt(mangledIndex);
                    if (info && info2) {
                        const element = info2.getElement();
                        const rect = element?.getBoundingClientRect();
                        if (rect) {
                            // TODO: This still fires even if the index hasn't changed for this child.
                            // Find a way to bail out if this child's position hasn't changed
                            info2.updateFLIPAnimation(allChildPositions.current[mangledIndex] = { left: rect.left, top: rect.top, width: rect.width, height: rect.height });
                        }
                    }
                }
            }
            return rearrangedChildren;
        }, [childrenIn, refreshIndex]);
        const getFLIPStart = useCallback((index) => {
            return allChildPositions.current[index];
        }, []);
        return {
            rearrangeableChildrenReturn: {
                children: childrenOut,
                refresh: useStableCallback(() => { setRefreshIndex(p => ++p); }, [])
            },
            context: useMemoObject({
                rearrangeableChildrenContext: useMemoObject({ getFLIPStart })
            })
        };
    });
}
/**
 * @compositeParams
 */
function useRearrangeableChild({ context, info: { getElement, index }, rearrangeableChildParameters: { cssProperty, duration } }) {
    return useMonitoring(function useRearrangeableChild() {
        const { rearrangeableChildrenContext: { getFLIPStart } } = context;
        const getCssProperty = useStableGetter(cssProperty);
        const getDuration = useStableGetter(duration);
        // TODO: This ref doesn't work correctly? Or info.updateFLIPAnimation isn't update right? Not sure.
        // Either way, doing something like reversing twice results in it working right the first time,
        // but incorrect the second time around, because the position is from the wrong index.
        const flipStartPosition = useRef(undefined);
        const [animationIndex, setAnimationIndex] = useState$1(0);
        useLayoutEffect(() => {
            const duration = getDuration();
            const cssProperty = getCssProperty();
            if (cssProperty && animationIndex > 0) {
                const element = getElement();
                const first = getFLIPStart(index); //flipStartPosition.current;
                //const mid = element.getBoundingClientRect();
                //console.log(mid);
                // Forcibly end any previous transitions.
                // Otherwise, interruptions end up causing exponentially larger transforms.
                // Which, TODO, is definitely fixable.
                if (cssProperty === 'translate')
                    element.style.scale = element.style.translate = '';
                else if (cssProperty === 'transform')
                    element.style.transform = '';
                element.style.transition = 'none';
                const last = element.getBoundingClientRect();
                if (first && last) {
                    const dx = first.left - last.left;
                    const dy = first.top - last.top;
                    const dsx = first.width / last.width;
                    const dsy = first.height / last.height;
                    if (cssProperty === 'translate') {
                        element.style.translate = `${dx}px ${dy}px`;
                        element.style.scale = `${dsx} ${dsy}`;
                    }
                    else if (cssProperty === 'transform') {
                        element.style.transform = `translate(${dx}px, ${dy}px) scale(${dsx}, ${dsy})`;
                    }
                    element.style.transition = cssProperty === 'translate' ? 'translate 0s, scale 0s' : `transform 0s`;
                    requestAnimationFrame(() => {
                        if (cssProperty === 'translate')
                            element.style.scale = element.style.translate = '';
                        else if (cssProperty === 'transform')
                            element.style.transform = '';
                        element.style.transition = cssProperty === 'translate' ? `translate ${duration}, scale ${duration}` : `transform ${duration}`;
                    });
                }
            }
        }, [index, animationIndex]);
        const updateFLIPAnimation = useCallback((position) => {
            flipStartPosition.current = position;
            setAnimationIndex(p => ++p);
        }, []);
        return {
            info: { updateFLIPAnimation }
        };
    });
}

/**
 * Allows children to each wait until the previous has finished rendering before itself rendering.
 * E.G. Child #3 waits until #2 renders. #2 waits until #1 renders, etc.
 *
 * @remarks If a child appears on-screen for 100ms then it will be forcibly displayed.
 *
 * When using the child hook, it's highly recommended to separate out any heavy logic into
 * a separate component that won't be rendered until it's de-staggered into visibility.
 *
 * @hasChild {@link useStaggeredChild}
 *
 * @compositeParams
 */
function useStaggeredChildren({ managedChildrenReturn: { getChildren }, staggeredChildrenParameters: { staggered, childCount },
//refElementReturn: { getElement }
 }) {
    return useMonitoring(function useStaggeredChildren() {
        // TODO: Right now, staggering doesn't take into consideration reordering via indexMangler and indexDemangler.
        // This isn't a huge deal because the IntersectionObserver takes care of any holes, but it can look a bit odd
        // until they fill in.
        const [currentlyStaggering, setCurrentlyStaggering] = useState(staggered);
        // This is the highest index that we want to show, inclusive.
        const getTargetStaggerIndex = useStableGetter((childCount || 0) - 1);
        // By default, when a child mounts, we tell the next child to mount and simply repeat.
        // If a child is missing, however, it will break that chain.
        // To guard against that, we also wait for 50ms, and if it hasn't loaded by then, we just continue as if it did.
        const timeoutHandle = useRef(-1);
        const resetEmergencyTimeout = useCallback(() => {
            if (timeoutHandle.current != -1)
                clearTimeout(timeoutHandle.current);
            // We've gone this long without hearing the next child mount itself...
            // We need to continue.
            timeoutHandle.current = setTimeout(() => {
                // This is split up into two setTimeouts for timing reasons:
                // If it's taking a long time to render a child, it's possible that we'll
                // trip this emergency timeout even though the child renders itself perfectly fine.
                // Due to the way timeouts are ordered, we want to ensure this timeout runs AFTER
                // the component's effect timeout. So we just wait again for a short tick.
                timeoutHandle.current = setTimeout(() => {
                    timeoutHandle.current = -1;
                    let target = getTargetStaggerIndex();
                    setDisplayedStaggerIndex(prev => {
                        let next = Math.min(target || 0, (prev || 0) + 1);
                        while (next <= (getChildCount() || 0) && getChildren().getAt(next)?.getStaggeredVisible() == true)
                            ++next;
                        return next;
                    });
                }, 10);
            }, 100);
        }, [ /* Must be empty */]);
        // The target index is the index that we're "animating" to.
        // Each child simply sets this to the highest value ever seen.
        useEffect(() => {
            // Any time our target changes,
            // ensure our timeout is running, and start a new one if not
            if (timeoutHandle.current == -1) {
                resetEmergencyTimeout();
                // If there's no timeout running, then that also means we're not waiting for a child to mount.
                // So ask a child to mount and then wait for that child to mount.
                let current = getDisplayedStaggerIndex();
                let next = Math.min(childCount ?? 0, (current ?? 0) + 1);
                setDisplayedStaggerIndex(next);
            }
        }, [childCount]);
        const [getDisplayedStaggerIndex, setDisplayedStaggerIndex] = usePassiveState(useCallback((newIndex, prevIndex) => {
            if (newIndex == null || !s.current) {
                return;
            }
            setCurrentlyStaggering(newIndex < (getTargetStaggerIndex() ?? 0));
            // It's time to show the next child,
            // either because the current one finished mounting,
            // or because our emergency backup timeout fired.
            //
            // Either way, tell the next child to show itself.
            // Also make sure that anyone we skipped somehow show themselves as well.
            // (queueMicrotask prevents warnings if debounceRendering is immediate)
            queueMicrotask(() => {
                for (let i = (prevIndex ?? 0) - 1; i <= newIndex; ++i) {
                    getChildren().getAt(i)?.setStaggeredVisible(true);
                }
            });
            // Set a new emergency timeout
            resetEmergencyTimeout();
        }, [ /* Must be empty */]), returnNull);
        const parentIsStaggered = (!!staggered);
        const getChildCount = useStableGetter(childCount);
        const childCallsThisToTellTheParentToMountTheNextOne = useCallback((justMountedChildIndex) => {
            setDisplayedStaggerIndex(prevIndex => {
                let next = Math.min((getTargetStaggerIndex() ?? 0), // Don't go higher than the highest child
                1 + (Math.max(prevIndex ?? 0, justMountedChildIndex)) // Go one higher than the child that just mounted itself or any previously mounted child (TODO: Is that last bit working as intended?)
                );
                // Skip over any children that have already been made visible ahead
                // (through IntersectionObserver)
                while (next < (getChildCount() || 0) && getChildren().getAt(next)?.getStaggeredVisible()) {
                    ++next;
                }
                return next;
            });
        }, []);
        // TODO: Modification during render (but it's really, really hard to avoid here,
        // but also probably fine because parents render before children? Does that include suspense?)
        const s = useRef(parentIsStaggered);
        s.current = parentIsStaggered;
        const getDefaultStaggeredVisible = useCallback((i) => {
            if (s.current) {
                const staggerIndex = getDisplayedStaggerIndex();
                if (staggerIndex == null)
                    return false;
                return i < staggerIndex;
            }
            else {
                return true;
            }
        }, []);
        const intersectionObserver = useRef(null);
        const elementToIndex = useRef(new Map());
        const setElementToIndexMap = useCallback((index, element) => {
            elementToIndex.current.set(element, index);
        }, []);
        const getIntersectionObserver = useCallback(() => intersectionObserver.current, []);
        const staggeredChildContext = useMemo(() => ({
            parentIsStaggered,
            childCallsThisToTellTheParentToMountTheNextOne,
            getDefaultStaggeredVisible,
            getIntersectionObserver,
            setElementToIndexMap
        }), [parentIsStaggered]);
        useEffect(() => {
            const io = intersectionObserver.current = new IntersectionObserver((entries) => {
                for (let entry of entries) {
                    if (entry.isIntersecting) {
                        const index = elementToIndex.current.get(entry.target);
                        if (index != null) {
                            getChildren().getAt(index)?.setStaggeredVisible(true);
                        }
                    }
                }
            });
            return () => io.disconnect();
        }, []);
        return {
            staggeredChildrenReturn: { stillStaggering: currentlyStaggering },
            context: useMemo(() => ({
                staggeredChildContext
            }), [staggeredChildContext]),
        };
    });
}
/**
 * Child hook for {@link useStaggeredChildren}.
 *
 * @remarks When a child is staggered, it still renders itself (i.e. it calls this hook, so it's rendering),
 * so check `hideBecauseStaggered` and, if it's true, avoid doing any heavy logic. Ideally that kind of heavy
 * logic/CSS will be in a sub-child that can be either rendered or not depending on `hideBecauseStaggered`.
 *
 * @compositeParams
 */
function useStaggeredChild({ info: { index }, 
//refElementReturn: { getElement },
context: { staggeredChildContext: { parentIsStaggered, getDefaultStaggeredVisible, childCallsThisToTellTheParentToMountTheNextOne, getIntersectionObserver, setElementToIndexMap } } }) {
    return useMonitoring(function useStaggeredChild() {
        const [staggeredVisible, setStaggeredVisible, getStaggeredVisible] = useState(getDefaultStaggeredVisible(index));
        // Controls whether we ask the parent to start mounting children after us.
        // (We don't ask when the child becomes visible due to screen-scrolling,
        // only when it becomes visible because we were next in line to do so)
        const becauseScreen = useRef(false);
        usePassiveState(useStableCallback((next, _prev, _reason) => {
            if (staggeredVisible)
                return;
            if (next) {
                const io = getIntersectionObserver();
                io?.unobserve(e.current);
                setStaggeredVisible(true);
                becauseScreen.current = true;
            }
        }), returnFalse);
        // This isn't called during useEffect here, because we want to wait for the
        // "heavier processing" child to render, instead of us (the "ligher pre-processing" child).
        // So we return the effect we want to run and let the caller run it as appropriate.
        // (In theory this could be returned as, like, useStaggeredChildChild instead but I really don't wanna do that)
        const childUseEffect = useCallback(() => {
            if (!becauseScreen.current && (parentIsStaggered && staggeredVisible)) {
                if ((parentIsStaggered && staggeredVisible)) {
                    childCallsThisToTellTheParentToMountTheNextOne(index);
                }
                else if (!parentIsStaggered) {
                    // Ensure that if we mount unstaggered and change to staggered, we start at the end
                    childCallsThisToTellTheParentToMountTheNextOne(index);
                }
            }
        }, [index, (parentIsStaggered && staggeredVisible)]);
        // This is the element that the IntersectionObserver will watch.
        const e = useRef(null);
        return {
            props: useTagProps(!parentIsStaggered ? {} : { "aria-busy": (!staggeredVisible).toString() }, "data-staggered-children-child"),
            staggeredChildReturn: { parentIsStaggered, hideBecauseStaggered: parentIsStaggered ? !staggeredVisible : false, childUseEffect },
            info: { setStaggeredVisible, getStaggeredVisible },
            refElementParameters: {
                onElementChange: useStableCallback((element) => {
                    setElementToIndexMap(index, element);
                    e.current = (element || e.current);
                    const io = getIntersectionObserver();
                    if (e.current) {
                        io?.observe(e.current);
                    }
                    else {
                        io?.unobserve(e.current);
                    }
                })
            }
        };
    });
}

/**
 * Hook that allows for optimization (staggering, pagination) and rearranging (sorting, shuffling, etc.) of large arrays of children.
 *
 * @remarks This is separate from `useManagedChildren` (and its descendants, like `useListNavigation),
 * but takes advantage of its flexibility (especially with its allowing for "holes" of missing children)
 * to prevent all children from rendering at once on mount.
 *
 * Staggering and pagination exists because no matter how well optimized your CSS and Javascript for each child is,
 * eventually some number of children will cause jank when mounting them all at once. Considering that maybe 1% of them
 * will actually be visible at first within the screen, with the other 99% wasting time doing things off-screen, it makes
 * sense to only show what's necessary at first, and delay as much as possible.
 *
 * If you're loading a dynamic list of data, where you don't know the length in advance
 * (but that it could be more than, say, 30 - 50 at any point),
 * this is all but essential for a good user experience.
 *
 * * 100 children without staggering/pagination is "start to feel jank on mobile"
 * * 1000 children without staggering/pagination is "start to feel jank on desktop"
 * * 10000 children staggered/paginated is "start to feel jank on desktop"
 * * 100000 children is "you're probably out of memory"
 *
 * <br />
 *
 * Additionally, this hook allows for reorganization of its children. A default `sort` and `shuffle` are provided,
 * but you can implement any arbitrary reordering.
 *
 * <br />
 *
 * The main limitation of this hook is that, unlike hooks that use/derive from `useManagedChildren`
 * (in which children can arbitrarily be anywhere descendant in the tree), children here ***must***
 * be in a single, sequential array (gaps are still fine).
 *
 * This is separate from `useListNavigation` and friends for performance reasons -- if a child is
 * hidden because it's paginated out or not staggered in yet, then we want to avoid running the normal
 * child list logic (which is as fast as possible, but still only so fast).
 *
 * Similarly, it can be useful for the children to be in a separate component for performance reasons, which
 * is another reason to separate this logic from `useListNavigation`.
 *
 * Finally, `useListNavigation` imposes no requirements on how your children are laid out in the DOM, but
 * this hook **requires** all children be in one contiguous array.
 *
 * @hasChild {@link useProcessedChild}
 *
 * @compositeParams
 */
function useProcessedChildren({ rearrangeableChildrenParameters, paginatedChildrenParameters, staggeredChildrenParameters, context, managedChildrenParameters, processedIndexManglerParameters }) {
    return useMonitoring(function useProcessedChildren() {
        const childCount = rearrangeableChildrenParameters.children.length;
        const { paginationMax, paginationMin } = paginatedChildrenParameters;
        const { staggered } = staggeredChildrenParameters;
        const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters, });
        useStableCallback(() => {
            refreshPagination(paginationMin, paginationMax);
        });
        const { processedIndexManglerContext: { indexDemangler, indexMangler } } = context;
        const { rearrangeableChildrenReturn, context: { rearrangeableChildrenContext }, } = useRearrangeableChildren({
            context,
            processedIndexManglerParameters,
            rearrangeableChildrenParameters,
            managedChildrenReturn
        });
        const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, context: { paginatedChildContext } } = usePaginatedChildren({
            managedChildrenReturn: { getChildren: useStableCallback(() => managedChildContext.getChildren()) },
            rovingTabIndexReturn: context.processedChildrenContext,
            childrenHaveFocusReturn: context.processedChildrenContext,
            paginatedChildrenParameters: { paginationMax, paginationMin, childCount },
            processedIndexManglerReturn: { indexDemangler, indexMangler }
        });
        const { context: { staggeredChildContext }, staggeredChildrenReturn } = useStaggeredChildren({
            managedChildrenReturn: { getChildren: useStableCallback(() => managedChildContext.getChildren()) },
            staggeredChildrenParameters: { staggered, childCount },
            //refElementReturn: { getElement: context.processedChildrenContext.getElement }
        });
        return {
            rearrangeableChildrenReturn,
            staggeredChildrenReturn,
            paginatedChildrenReturn,
            context: useMemoObject({
                staggeredChildContext,
                paginatedChildContext,
                managedChildContext,
                rearrangeableChildrenContext
            })
        };
    });
}
/**
 * @compositeParams
 */
function useProcessedChild({ context, info: { index, getElement, ...uinfo }, rearrangeableChildParameters, ...void1 }) {
    return useMonitoring(function useProcessedChild() {
        const { paginatedChildContext, staggeredChildContext } = context;
        const { info: { updateFLIPAnimation } } = useRearrangeableChild({
            context,
            info: { getElement, index },
            rearrangeableChildParameters
        });
        const { info: { setChildCountIfPaginated, setPaginationVisible }, paginatedChildReturn, props: propsPaginated } = usePaginatedChild({ context: { paginatedChildContext }, info: { index } });
        const { info: { setStaggeredVisible, getStaggeredVisible }, staggeredChildReturn, props: propsStaggered, refElementParameters } = useStaggeredChild({ context: { staggeredChildContext }, info: { index } });
        const { managedChildReturn } = useManagedChild({
            context,
            info: {
                index,
                setChildCountIfPaginated,
                setPaginationVisible,
                setStaggeredVisible,
                getStaggeredVisible,
                updateFLIPAnimation,
                getElement,
                ...uinfo
            }
        });
        const propsRet = useMergedProps(propsStaggered, propsPaginated);
        return {
            props: propsRet,
            managedChildReturn,
            paginatedChildReturn,
            staggeredChildReturn,
            refElementParameters
        };
    });
}

/**
 * @compositeParams
 */
function useProcessedIndexMangler({ processedIndexManglerParameters: { getIndex, getSortValueAt: getSortValue, compare } }) {
    return useMonitoring(function useProcessedIndexMangler() {
        useEnsureStability("useProcessedIndexMangler", getIndex, getSortValue);
        const mangler = useMemo(() => new ProcessedIndexMangler(getIndex, getSortValue, compare ?? defaultCompare), [getIndex, getSortValue]);
        const indexDemangler = useCallback((n) => (mangler.map(n, "mangled", "demangled") ?? n), []);
        const indexMangler = useCallback((n) => (mangler.map(n, "demangled", "mangled") ?? n), []);
        const context = useMemoObject({
            processedIndexManglerContext: useMemoObject({
                mangler,
                indexDemangler,
                indexMangler
            })
        });
        return {
            processedIndexManglerReturn: {
                mangler,
                indexMangler,
                indexDemangler
            },
            context
        };
    });
}
class ProcessedIndexMangler {
    getIndex;
    getSortValue;
    compare;
    constructor(getIndex, getSortValue, compare) {
        this.getIndex = getIndex;
        this.getSortValue = getSortValue;
        this.compare = compare;
    }
    map(index, from, to) {
        if (index == undefined)
            return undefined;
        switch (from) {
            /*case 'processed': {
                //let unmangledIndex = this.getIndex(this._originalChildren[index]);
                switch (to) {
                    case 'processed': return index;
                    case 'demangled': return this._processedToDemangled.get(index); //return unmangledIndex;
                    case 'mangled': return this._processedToMangled.get(index); //return unmangledIndex == undefined ? undefined : this._unmangledToMangled.get(unmangledIndex);
                }
            }*/
            case 'demangled': {
                switch (to) {
                    case 'demangled': return index;
                    case 'mangled': return this._demangledToMangled.get(index);
                    //case 'processed': return this._demangledToProcessed.get(index);
                }
            }
            case 'mangled': {
                switch (to) {
                    case 'mangled': return index;
                    case 'demangled': return this._mangledToDemangled.get(index);
                    //case 'processed': return this._mangledToProcessed.get(index);
                }
            }
        }
    }
    _originalChildren = [];
    sortedChildren = [];
    _mangledToDemangled = new Map();
    _demangledToMangled = new Map();
    //private _demangledToProcessed = new Map<number, number>();
    //private _mangledToProcessed = new Map<number, number>();
    //private _processedToDemangled = new Map<number, number>();
    //private _processedToMangled = new Map<number, number>();
    setChildren(children) {
        this._mangledToDemangled.clear();
        this._demangledToMangled.clear();
        //this._processedToDemangled.clear();
        //this._processedToMangled.clear();
        //this._demangledToProcessed.clear();
        //this._mangledToProcessed.clear();
        this._originalChildren = children.slice();
        this.sortedChildren = [];
        let sortedChildrenWithoutNulls = this._originalChildren.slice().map((vnode, processedIndex) => {
            const unmangledIndex = vnode == null ? undefined : this.getIndex(vnode);
            const sortValue = unmangledIndex == null ? null : this.getSortValue(unmangledIndex);
            return {
                vnode,
                unmangledIndex,
                sortValue,
                processedIndex
            };
        }).toSorted((lhs, rhs) => this.compare((lhs.sortValue), (rhs.sortValue)));
        let i = 0; // processedOriginalIndex, also the index to the output array
        let j = 0; // processedSortedIndex
        // This is a kind of, like, splice/zip of the two arrays, while setting the mappings between them.
        // It's kind of hard to follow--wish you could put, like, hand-drawn, diagrams in comments.
        while (true) {
            if (i >= children.length)
                break;
            if (j >= sortedChildrenWithoutNulls.length)
                break;
            let processedOriginalIndex = i;
            const originalChild = children[processedOriginalIndex];
            const originalIndex = originalChild == null ? undefined : this.getIndex(originalChild);
            if (originalIndex == null) {
                // This was a hole in the original array, so just copy it over directly to its original spot.
                this.sortedChildren[i] = originalChild;
                // Then move onto the next child.
                ++i;
            }
            else {
                // This is a known, managed child. Find all its mappings and recreate it with a new key.
                // To find the sortedChild this originalChild matches, first make sure we skip over holes in the sorted array
                // (This should only happen once, the first time, because they're usually sorted to the front)
                while (j < sortedChildrenWithoutNulls.length && sortedChildrenWithoutNulls[j].unmangledIndex == null) {
                    ++j;
                }
                // This line should never happen
                if (sortedChildrenWithoutNulls[j].unmangledIndex == null) {
                    /* eslint-disable no-debugger */
                    debugger;
                    break;
                }
                let processedSortedIndex = j;
                const sortedChild = sortedChildrenWithoutNulls[processedSortedIndex];
                const sortedIndex = sortedChild.unmangledIndex;
                this._mangledToDemangled.set(originalIndex, sortedIndex);
                this._demangledToMangled.set(sortedIndex, originalIndex);
                //this._processedToMangled.set(processedOriginalIndex, sortedIndex);
                //this._processedToDemangled.set(processedOriginalIndex, originalIndex);
                //this._mangledToProcessed.set(sortedIndex, processedOriginalIndex);
                //this._demangledToProcessed.set(originalIndex, processedOriginalIndex);
                this.sortedChildren[i] = createElement(sortedChild.vnode.type, {
                    ...sortedChild.vnode.props,
                    mangledIndex: sortedIndex,
                    demangledIndex: originalIndex,
                    key: originalIndex
                }); //sortedChild.vnode;
                ++i;
                ++j;
            }
        }
        return this.sortedChildren;
    }
}
/**
 * #__NO_SIDE_EFFECTS__
 */
function defaultCompare(lhs, rhs) {
    if (lhs == null || rhs == null) {
        if (lhs == null)
            return -1;
        if (rhs == null)
            return 1;
    }
    // Note: Unlike lhs - rhs, this works with bare strings.
    return lhs > rhs ? 1 : lhs < rhs ? -1 : 0;
}

/**
 * Allows a parent to track the changes made to multi-selection children.
 *
 * @remarks Beyond just giving each child the ability to track its own selected state, the parent can change all children at once.
 * Pressing <kbd>Ctrl</kbd>+<kbd>A</kbd> will select all children, for example.
 *
 * This is not exclusive with {@link useSingleSelection}, you can use both at once if you have a use case for it.
 *
 * @hasChild {@link useMultiSelectionChild}
 *
 * @compositeParams
 */
function useMultiSelection({ multiSelectionParameters: { onSelectionChange, multiSelectionAriaPropName, multiSelectionMode, ...void3 }, managedChildrenReturn: { getChildren, ...void1 }, childrenHaveFocusReturn: { getAnyFocused, ...void4 }, ...void2 }) {
    return useMonitoring(function useMultiSelection() {
        // By having both we get the total number of children for free, even if there are holes in the array.
        // TODO: useManagedChildren should do that by default??
        const selectedIndices = useRef(new Set());
        const unselectedIndices = useRef(new Set());
        const startOfShiftSelect = useRef(null);
        // Why these are needed:
        // When in focus mode, there's no way to determine whether these keys are held down during the focus event.
        // That's all. Wow.
        let shiftKeyHeld = useRef(false);
        let ctrlKeyHeld = useRef(false);
        // When a child changes selection state, it calls this function.
        const notifyParentOfChildSelectChange = useStableCallback((event, index, selected, previous) => {
            console.assert(selected != previous);
            if (selected == undefined) {
                // This child is unmounting itself.
                if (previous === true) {
                    console.assert(selectedIndices.current.has(index), `The selected child at index ${index} is unmounting itself, but the parent was unaware of it being selected.`);
                    selectedIndices.current.delete(index);
                }
                else if (previous === false) {
                    console.assert(unselectedIndices.current.has(index), `The selected child at index ${index} is unmounting itself, but the parent was unaware of it being selected.`);
                    unselectedIndices.current.delete(index);
                }
                else {
                    console.assert(false, `The child at index ${index} was not selected or unselected but a secret third thing: ${selected}`);
                }
            }
            else if (selected) {
                if (previous != undefined) {
                    console.assert(unselectedIndices.current.has(index), `The multi-select child at index ${index} changed to selected even though it was not unselected before, somehow.`);
                    unselectedIndices.current.delete(index);
                }
                console.assert(!selectedIndices.current.has(index), `The multi-select child at index ${index} changed to selected even though there is already a selected child with that index.`);
                selectedIndices.current.add(index);
                startOfShiftSelect.current = index;
            }
            else {
                if (previous != undefined) {
                    console.assert(selectedIndices.current.has(index), `The multi-select child at index ${index} changed to unselected even though it was not selected before, somehow.`);
                    selectedIndices.current.delete(index);
                }
                console.assert(!unselectedIndices.current.has(index), `The multi-select child at index ${index} was marked as unselected even though there is already an unselected child with that index.`);
                unselectedIndices.current.add(index);
            }
            const childCount = (selectedIndices.current.size + unselectedIndices.current.size);
            const selectedPercent = (childCount == 0 ? 0 : (selectedIndices.current.size / (childCount)));
            console.assert(selectedPercent >= 0 && selectedPercent <= 1);
            onSelectionChange?.(enhanceEvent(event, { selectedPercent, selectedIndices: selectedIndices.current }));
        });
        const changeAllChildren = useStableCallback((event, shouldBeSelected) => {
            getChildren().forEach(child => {
                if (!child.getMultiSelectionDisabled()) {
                    child.setSelectedFromParent(event, shouldBeSelected(child.index));
                }
            });
        });
        const doContiguousSelection = useStableCallback((event, endIndex) => {
            let originalEnd = endIndex;
            let temp = 0;
            let startIndex = startOfShiftSelect.current || 0; // TODO: Is || 0 correct here? Probably, right?
            if (startIndex <= endIndex) {
                // Never include the child that started this contiguous selection, only the children beyond it.
                ++startIndex;
            }
            else {
                // Never include the child that started(/ended) this contiguous selection, only the children beyond it.
                --startIndex;
                temp = endIndex;
                endIndex = startIndex;
                startIndex = temp;
            }
            console.assert(startIndex <= endIndex);
            if (startIndex <= endIndex) {
                changeAllChildren(event, (childIndex) => {
                    if (childIndex >= startIndex && childIndex <= endIndex) {
                        // If this child is within the range, toggle it.
                        return !getChildren().getAt(childIndex)?.getMultiSelected();
                    }
                    else {
                        return !!getChildren().getAt(childIndex)?.getMultiSelected();
                    }
                });
            }
            startOfShiftSelect.current = originalEnd;
        });
        const onCompositeFocusChange = useStableCallback((anyFocused, _prevAnyFocused, _event) => {
            if (!anyFocused) {
                ctrlKeyHeld.current = shiftKeyHeld.current = false;
            }
        });
        let nextCtrlAIsUndo = useRef(false);
        useGlobalHandler(getDocument(), "keydown", useStableCallback((e) => {
            shiftKeyHeld.current = (e.shiftKey || e.key == 'Shift');
            ctrlKeyHeld.current = (e.ctrlKey || e.key == 'Control');
            // Only do CTRL+A handling if the control is focused
            if (getAnyFocused()) {
                // Listen for CTRL+A
                if (e.code == "KeyA" && e.ctrlKey && !e.repeat) {
                    // Only perform this logic if multi-selection is enabled
                    if (multiSelectionMode != "disabled") {
                        changeAllChildren(e, !nextCtrlAIsUndo.current ? returnTrue : returnFalse);
                        e.preventDefault();
                        e.stopPropagation();
                        // TODO: This should update in more places
                        nextCtrlAIsUndo.current = !nextCtrlAIsUndo.current;
                    }
                }
            }
        }), { capture: true });
        useGlobalHandler(getDocument(), "keyup", (e) => {
            if (e.key == 'Shift')
                shiftKeyHeld.current = false;
            if (e.key == 'Control')
                ctrlKeyHeld.current = false;
        }, { passive: true, capture: true });
        return {
            context: useMemoObject({
                multiSelectionContext: useMemoObject({
                    doContiguousSelection,
                    notifyParentOfChildSelectChange,
                    multiSelectionAriaPropName,
                    multiSelectionMode,
                    changeAllChildren,
                    getCtrlKeyDown: useCallback(() => ctrlKeyHeld.current, []),
                    getShiftKeyDown: useCallback(() => shiftKeyHeld.current, []),
                    getAnyFocused
                })
            }),
            childrenHaveFocusParameters: { onCompositeFocusChange },
            multiSelectionReturn: {},
            propsStable: useMemoObject({})
        };
    });
}
/**
 *
 * @compositeParams
 */
function useMultiSelectionChild({ info: { index, ...void4 }, multiSelectionChildParameters: { initiallyMultiSelected, onMultiSelectChange, multiSelectionDisabled, ...void1 }, context: { multiSelectionContext: { notifyParentOfChildSelectChange, multiSelectionAriaPropName, multiSelectionMode, doContiguousSelection, changeAllChildren, getCtrlKeyDown, getShiftKeyDown, getAnyFocused, ...void5 }, ...void3 }, ...void2 }) {
    return useMonitoring(function useMultiSelectionChild() {
        // When we're in focus-selection mode, focusing any child deselects everything and selects JUST that child.
        // But that's really annoying for when you tab into the component, so it's only enabled when you're navigating WITHIN the component
        // (e.g. we only do that "reset everything" selection stuff when the component already had focus and that focus simply moved to a different child)
        // The exception is press events, because a click can come from anywhere, focusing a child even if focus is elsewhere (or the window doesn't even have focus!)
        // So when a press event happens during focus-selection mode, we disable the disabling with this flag.
        const pressFreebie = useRef(false);
        const onPressSync = (e) => {
            if (!multiSelectionDisabled) {
                if (multiSelectionMode == "activation") {
                    if (e.shiftKey) {
                        doContiguousSelection(e, index);
                    }
                    else {
                        onMultiSelectChange?.(enhanceEvent(e, { multiSelected: !getLocalSelected() }));
                    }
                }
                else {
                    if (e.ctrlKey) {
                        onMultiSelectChange?.(enhanceEvent(e, { multiSelected: !getLocalSelected() }));
                    }
                    else {
                        pressFreebie.current = true;
                        focus(e.currentTarget);
                        onCurrentFocusedInnerChanged(true, false, e);
                    }
                }
            }
        };
        const [localSelected, setLocalSelected, getLocalSelected] = useState(initiallyMultiSelected ?? false);
        const changeMultiSelected = useStableCallback((e, selected) => {
            console.assert(selected != null);
            console.assert(!multiSelectionDisabled);
            console.assert(multiSelectIsEnabled);
            // We're selected now (because someone told us we are, this hook doesn't call this function directly)
            //
            // So update our own internal state so we can re-render with the correct props,
            // and also notify the parent (in case the parent is listening for changes in some way)
            let prevSelected = getLocalSelected();
            if (prevSelected != selected) {
                setLocalSelected(selected);
                notifyParentOfChildSelectChange(e, index, selected, prevSelected);
            }
        });
        const multiSelectIsEnabled = (multiSelectionMode != 'disabled');
        useLayoutEffect(() => {
            if (multiSelectIsEnabled) {
                notifyParentOfChildSelectChange(null, index, getLocalSelected(), undefined);
                return () => notifyParentOfChildSelectChange(null, index, undefined, getLocalSelected());
            }
        }, [index, multiSelectIsEnabled]);
        const onCurrentFocusedInnerChanged = useStableCallback((focused, prev, event) => {
            if (focused) {
                if (multiSelectionMode == "focus") {
                    let any = getAnyFocused();
                    // Wow, it's the worst selection mode.
                    const subSelectionMode = (getShiftKeyDown() ? "toggle" : getCtrlKeyDown() ? "skip" : "set");
                    let newIndex = index;
                    switch (subSelectionMode) {
                        case "set":
                            if (any || pressFreebie.current) {
                                changeAllChildren(event, index => (index == newIndex));
                            }
                            break;
                        case "toggle":
                            doContiguousSelection(event, index);
                            break;
                        case "skip":
                            /* eslint-disable no-debugger */
                            debugger;
                            break;
                    }
                }
            }
            pressFreebie.current = false;
        });
        const setSelectedFromParent = useStableCallback((event, multiSelected) => {
            console.assert(onMultiSelectChange != null);
            onMultiSelectChange?.(enhanceEvent(event, { multiSelected }));
        });
        return {
            multiSelectionChildReturn: {
                changeMultiSelected,
                multiSelected: localSelected,
                getMultiSelected: getLocalSelected,
                multiSelectionMode
            },
            pressParameters: {
                onPressSync
            },
            hasCurrentFocusParameters: {
                onCurrentFocusedInnerChanged
            },
            props: { [multiSelectionAriaPropName || "aria-selected"]: multiSelectionMode == "disabled" ? undefined : (localSelected ? "true" : "false") },
            info: {
                getMultiSelected: getLocalSelected,
                setSelectedFromParent,
                getMultiSelectionDisabled: useStableGetter(multiSelectionDisabled)
            }
        };
    });
}
/**
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
function useMultiSelectionChildDeclarative({ multiSelectionChildDeclarativeParameters: { onMultiSelectedChange, multiSelected, ...void3 }, multiSelectionChildReturn: { changeMultiSelected, ...void2 }, ...void1 }) {
    let reasonRef = useRef(undefined);
    useEffect(() => {
        if (multiSelected != null)
            changeMultiSelected(reasonRef.current, multiSelected);
    }, [multiSelected]);
    const omsc = useStableCallback((e) => {
        reasonRef.current = e;
        return onMultiSelectedChange?.(e);
    });
    const setSelectedFromParent = useStableCallback((event, multiSelected) => {
        onMultiSelectedChange?.(enhanceEvent(event, { multiSelected }));
    });
    return {
        multiSelectionChildParameters: {
            onMultiSelectChange: omsc
        },
        info: { setSelectedFromParent }
    };
}

/**
 * Allows a single child among all children to be the "selected" child (which can be different from the "focused" child).
 *
 * @remarks If you need multi-select instead of single-select and you're using this hook (e.g. as part of {@link useCompleteListNavigation}), you can disable the single-selection behavior either by setting the selected index to `null` or.
 *
 * @hasChild {@link useSingleSelectionChild}
 *
 * @compositeParams
 */
function useSingleSelection({ managedChildrenReturn: { getChildren, ...void1 }, rovingTabIndexReturn: { setTabbableIndex, ...void2 }, singleSelectionParameters: { onSingleSelectedIndexChange: onSelectedIndexChange_U, initiallySingleSelectedIndex, singleSelectionAriaPropName, singleSelectionMode, ...void3 }, ...void4 }) {
    return useMonitoring(function useSingleSelection() {
        const onSingleSelectedIndexChange = useStableCallback(onSelectedIndexChange_U ?? noop);
        const getSelectedAt = useCallback((m) => { return m.getSingleSelected(); }, []);
        const setSelectedAt = useCallback((m, t, newSelectedIndex, prevSelectedIndex) => {
            if (m.untabbable) {
                console.assert(false);
            }
            const directionComparison = (newSelectedIndex == m.index ? prevSelectedIndex : newSelectedIndex);
            const direction = (directionComparison == null ? null : (m.index - directionComparison));
            if (newSelectedIndex == null)
                console.assert(t == false);
            if (t)
                console.assert(newSelectedIndex === m.index);
            m.setLocalSingleSelected(t, direction);
        }, []);
        const isSelectedValid = useCallback((m) => { return !m.untabbable; }, []);
        const { changeIndex: changeSingleSelectedIndex, getCurrentIndex: getSingleSelectedIndex } = useChildrenFlag({
            getChildren,
            onIndexChange: null,
            initialIndex: initiallySingleSelectedIndex,
            getAt: getSelectedAt,
            setAt: setSelectedAt,
            isValid: isSelectedValid,
            closestFit: false,
            onClosestFit: null,
            indexDemangler: null
        });
        return {
            singleSelectionReturn: useMemoObject({
                getSingleSelectedIndex,
                changeSingleSelectedIndex
            }),
            context: useMemoObject({
                singleSelectionContext: useMemoObject({
                    getSingleSelectedIndex,
                    onSingleSelectedIndexChange,
                    singleSelectionAriaPropName,
                    singleSelectionMode
                }),
            }),
            childrenHaveFocusParameters: {
                onCompositeFocusChange: useStableCallback((anyFocused, prev, reason) => {
                    if (!anyFocused) {
                        const selectedIndex = getSingleSelectedIndex();
                        if (selectedIndex != null)
                            setTabbableIndex(selectedIndex, reason, false);
                    }
                })
            }
        };
    });
}
/**
 *
 *
 * @compositeParams
 */
function useSingleSelectionChild({ singleSelectionChildParameters: { singleSelectionDisabled, ...void5 }, context: { singleSelectionContext: { getSingleSelectedIndex, onSingleSelectedIndexChange, singleSelectionAriaPropName: ariaPropName, singleSelectionMode, ...void1 }, ...void2 }, info: { index, untabbable, ...void3 }, ...void4 }) {
    return useMonitoring(function useSingleSelectionChild() {
        useEnsureStability("useSingleSelectionChild", getSingleSelectedIndex, onSingleSelectedIndexChange);
        const [localSelected, setLocalSelected, getLocalSelected] = useState(getSingleSelectedIndex() == index);
        const [direction, setDirection, getDirection] = useState(getSingleSelectedIndex() == null ? null : (getSingleSelectedIndex() - index));
        const onCurrentFocusedInnerChanged = useStableCallback((focused, _prev, e) => {
            if (!singleSelectionDisabled && singleSelectionMode == 'focus' && focused && !untabbable) {
                onSingleSelectedIndexChange(enhanceEvent(e, { selectedIndex: index }));
            }
        });
        const onPressSync = useStableCallback((e) => {
            // We allow press events for selectionMode == 'focus' because
            // press generally causes a focus anyway (except when it doesn't, iOS Safari...)
            if (!singleSelectionDisabled && !untabbable) {
                if (singleSelectionMode == 'activation')
                    onSingleSelectedIndexChange(enhanceEvent(e, { selectedIndex: index }));
            }
            else {
                focus(e.currentTarget);
            }
        });
        const propParts = ariaPropName?.split("-") ?? [];
        return {
            info: {
                setLocalSingleSelected: useStableCallback((selected, direction) => {
                    setLocalSelected(selected);
                    setDirection(direction);
                }),
                getSingleSelected: getLocalSelected,
                singleSelected: localSelected,
            },
            singleSelectionChildReturn: {
                singleSelected: localSelected,
                getSingleSelected: getLocalSelected,
                singleSelectedOffset: direction,
                singleSelectionMode,
                getSingleSelectedOffset: getDirection
            },
            props: useTagProps(ariaPropName == null || singleSelectionMode == "disabled" ? {} : {
                [`${propParts[0]}-${propParts[1]}`]: (localSelected ? (propParts[1] == "current" ? `${propParts[2]}` : `true`) : "false")
            }, "data-single-selection-child"),
            hasCurrentFocusParameters: { onCurrentFocusedInnerChanged },
            pressParameters: { onPressSync }
        };
    });
}
/**
 * Let's face it, declarative is nicer to use than imperative, so this is a shortcut.
 */
function useSingleSelectionDeclarative({ singleSelectionReturn: { changeSingleSelectedIndex }, singleSelectionDeclarativeParameters: { singleSelectedIndex, onSingleSelectedIndexChange } }) {
    let s = (singleSelectedIndex ?? null);
    let reasonRef = useRef(undefined);
    useEffect(() => { changeSingleSelectedIndex(s, reasonRef.current); }, [s]);
    const osic = useCallback((e) => {
        reasonRef.current = e;
        return onSingleSelectedIndexChange?.(e);
    }, [onSingleSelectedIndexChange]);
    return { singleSelectionParameters: { onSingleSelectedIndexChange: osic } };
}

/**
 * Allows the children of this component to be selected, either with a `singleSelectedIndex` prop on the parent, or via each child's individual `multiSelected` prop.
 *
 * @remarks Single-selection and multi-selection are not mutually exclusive, though the cases where you would want both are uncommon.
 *
 * Most of the time, you'll want to pick and choose one mode to work with:
 *
 * ```md-literal
 * * Single-selection is controlled by the parent -- it receives a `singleSelectedIndex` parameter that represents the currently selected child and handles all the logic related to coordinating the deselection of the old child.
 * * Multi-selection is controlled by each individual child -- they have a `multiSelected` parameter that can be optionally reported back to the parent (so it can show the % of all children selected, or similar)
 * ```
 *
 * @see {@link useSingleSelection}
 * @see {@link useMultiSelection}
 *
 * @hasChild {@link useSelectionChild}
 *
 * @compositeParams
 */
function useSelection({ managedChildrenReturn, multiSelectionParameters, childrenHaveFocusReturn, rovingTabIndexReturn, singleSelectionParameters }) {
    const { childrenHaveFocusParameters: { onCompositeFocusChange: ocfc1, ...void3 }, context: contextSS, singleSelectionReturn, ...void1 } = useSingleSelection({ managedChildrenReturn, rovingTabIndexReturn, singleSelectionParameters });
    const { childrenHaveFocusParameters: { onCompositeFocusChange: ocfc2, ...void4 }, context: contextMS, multiSelectionReturn, propsStable, ...void2 } = useMultiSelection({ managedChildrenReturn, multiSelectionParameters, childrenHaveFocusReturn });
    return {
        propsStable,
        childrenHaveFocusParameters: { onCompositeFocusChange: useStableMergedCallback(ocfc1, ocfc2) },
        context: useMemoObject({ ...contextSS, ...contextMS }),
        multiSelectionReturn,
        singleSelectionReturn
    };
}
/**
 *
 * @compositeParams
 */
function useSelectionChild({ context, info: { index, untabbable, ...void2 }, singleSelectionChildParameters, multiSelectionChildParameters, ...void3 }) {
    const { props: p1, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 }, pressParameters: { onPressSync: opc1 }, info: { getSingleSelected, setLocalSingleSelected, singleSelected, ...void1 }, singleSelectionChildReturn, } = useSingleSelectionChild({ context, info: { index, untabbable }, singleSelectionChildParameters });
    const { props: p2, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 }, pressParameters: { onPressSync: opc2 }, multiSelectionChildReturn, info: { getMultiSelected, setSelectedFromParent, getMultiSelectionDisabled, ...void5 }, ...void4 } = useMultiSelectionChild({ context, info: { index }, multiSelectionChildParameters });
    return {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: useStableMergedCallback(ocfic1, ocfic2) },
        info: {
            getMultiSelected,
            setSelectedFromParent,
            getSingleSelected,
            setLocalSingleSelected,
            singleSelected,
            getMultiSelectionDisabled,
        },
        multiSelectionChildReturn,
        pressParameters: { onPressSync: useStableMergedCallback(opc1, opc2) },
        props: useMergedProps(p1, p2),
        singleSelectionChildReturn
    };
}
/**
 * @compositeParams
 */
function useSelectionDeclarative(args) {
    return useSingleSelectionDeclarative(args);
}
/**
 * @compositeParams
 */
function useSelectionChildDeclarative(args) {
    return useMultiSelectionChildDeclarative(args);
}

/**
 * Access the `HTMLElement` rendered by this hook/these props, either as soon as it's available (as a callback), or whenever you need it (as a getter function).
 *
 * @remarks
 *
 * This hook, like many others, works with either `useState` or {@link usePassiveState}. Why use one over the other?
 *
 * ```md-literal
 * * `useState` is familiar and easy to use, but calling `setState` causes a re-render, which you might not need/want
 * * `usePassiveState` is faster and more scalable, but its state can't be accessed during render and it's more complex.
 * ```
 *
 * Suppose we want to call the `HTMLElement`'s `doSomethingFunny` method as soon as the element has been created:
 *
 * @example
 * Easiest way to use (but setElement causes an extra re-render when it's called...)
 * ```typescript
 * const [element, setElement] = useState<HTMLButtonElement | null>(null);
 * const { propsStable } = useRefElement({ onElementChange: setElement });
 * useEffect(() => {
 *     element.doSomethingFunny();
 * }, [element])
 * ```
 *
 * @example
 * Fastest (but slightly more verbose)
 * ```typescript
 * // The code in useEffect is moved into this callback, but runs at the same time
 * const onElementChange = useCallback(element => element.doSomethingFunny(), []);
 * const [getElement, setElement] = usePassiveState<HTMLButtonElement | null>(onElementChange, returnNull);
 * const { propsStable } = useRefElement({ onElementChange: setElement });
 * ```
 *
 * @compositeParams
 */
function useRefElement(args) {
    return useMonitoring(function useRefElement() {
        const nonElementWarn = useRef(false);
        if (nonElementWarn.current) {
            nonElementWarn.current = false;
            // There are two of these to catch the problem in the two most useful areas --
            // when it initially happens, and also in the component stack.
            console.assert(false, `useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead.`);
        }
        const { onElementChange, onMount, onUnmount } = (args.refElementParameters || {});
        useEnsureStability("useRefElement", onElementChange, onMount, onUnmount);
        // Called (indirectly) by the ref that the element receives.
        const handler = useCallback((e, prevValue) => {
            if (!(e == null || e instanceof Element)) {
                console.assert(e == null || e instanceof Element, `useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead.`);
                nonElementWarn.current = true;
            }
            const cleanup = onElementChange?.(e, prevValue);
            if (prevValue)
                onUnmount?.(prevValue);
            if (e)
                onMount?.(e);
            return cleanup;
        }, []);
        // Let us store the actual (reference to) the element we capture
        const [getElement, setElement] = usePassiveState(handler, returnNull, { debounceRendering: runImmediately, skipMountInitialization: true });
        const propsStable = useRef(useTagProps({ ref: setElement }, "data-use-ref-element"));
        // Return both the element and the hook that modifies 
        // the props and allows us to actually find the element
        return {
            propsStable: propsStable.current,
            refElementReturn: {
                getElement,
            }
        };
    });
}

function add(map, key, value) {
    var _a;
    let set = (_a = map.get(key)) !== null && _a !== void 0 ? _a : new Set();
    set.add(value);
    map.set(key, set);
    return map;
}
/**
 * Removes this `value` from the `Set` associated with `key`. Does not remove the `Set` itself, even if it becomes empty.
 */
function del(map, key, value) {
    var _a;
    let set = (_a = map.get(key)) !== null && _a !== void 0 ? _a : new Set();
    let ret = set.delete(value);
    map.set(key, set);
    return ret;
}
function has$1(map, key, value) {
    var _a, _b;
    return (_b = (_a = map.get(key)) === null || _a === void 0 ? void 0 : _a.has(value)) !== null && _b !== void 0 ? _b : false;
}

var mapOfSets = /*#__PURE__*/Object.freeze({
    __proto__: null,
    add: add,
    delete: del,
    has: has$1
});

const activeElementUpdaters = new Map();
const lastActiveElementUpdaters = new Map();
const windowFocusedUpdaters = new Map();
const windowsFocusedUpdaters = new Map();
// The focusin and focusout events often fire synchronously in the middle of running code.
// E.G. calling element.focus() can cause a focusin event handler to immediately interrupt that code.
// For the purpose of improving stability, we debounce all focus events to the next microtask.
function forEachUpdater(window, map, value, reason) {
    const updaters = map.get(window);
    if (updaters) {
        for (const updater of updaters) {
            const { lastSent, send } = updater;
            if (value !== lastSent) {
                send(value, reason);
                updater.lastSent = value;
            }
        }
    }
}
function focusout(e) {
    const window = e.target.ownerDocument.defaultView;
    if (e.relatedTarget == null) {
        forEachUpdater(window, activeElementUpdaters, null, e);
    }
}
function focusin(e) {
    const window = e.target.ownerDocument.defaultView;
    const currentlyFocusedElement = e.target;
    forEachUpdater(window, activeElementUpdaters, currentlyFocusedElement, e);
    forEachUpdater(window, lastActiveElementUpdaters, currentlyFocusedElement, e);
}
function windowFocus(e) {
    const window = (e.target instanceof Window ? e.target : e.currentTarget instanceof Window ? e.currentTarget : e.target.ownerDocument.defaultView);
    windowsFocusedUpdaters.set(window, true);
    forEachUpdater(window, windowFocusedUpdaters, true, e);
}
function windowBlur(e) {
    const window = (e.target instanceof Window ? e.target : e.currentTarget instanceof Window ? e.currentTarget : e.target.ownerDocument.defaultView);
    windowsFocusedUpdaters.set(window, false);
    forEachUpdater(window, windowFocusedUpdaters, false, e);
}
/**
 * Allows you to inspect which element in the `document` currently has focus, which was most recently focused if none are currently, and whether or not the window has focus
 *
 * @remarks The document's body receiving focus, like it does when you click on an empty area, is counted as no element having focus for all intents and purposes
 *
 * This is a passive hook, so by default it returns getter functions that report this information but the component will not re-render by default when the active element changes.
 *
 * If you need the component to re-render when the active element changes, use the `on*Change` arguments to set some state on your end.
 *
 * @compositeParams
 */
function useActiveElement({ activeElementParameters: { onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getDocument } }) {
    return useMonitoring(function useActiveElement() {
        useEnsureStability("useActiveElement", onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getDocument);
        useEffect(() => {
            const document = getDocument();
            const window = (document?.defaultView);
            if ((activeElementUpdaters.get(window)?.size ?? 0) === 0) {
                document?.addEventListener("focusin", focusin, { passive: true });
                document?.addEventListener("focusout", focusout, { passive: true });
                window?.addEventListener("focus", windowFocus, { passive: true });
                window?.addEventListener("blur", windowBlur, { passive: true });
            }
            const laeu = { send: setActiveElement, lastSent: undefined };
            const llaeu = { send: setLastActiveElement, lastSent: undefined };
            const lwfu = { send: setWindowFocused, lastSent: undefined };
            mapOfSets.add(activeElementUpdaters, window, laeu);
            mapOfSets.add(lastActiveElementUpdaters, window, llaeu);
            mapOfSets.add(windowFocusedUpdaters, window, lwfu);
            return () => {
                mapOfSets.delete(activeElementUpdaters, window, laeu);
                mapOfSets.delete(lastActiveElementUpdaters, window, llaeu);
                mapOfSets.delete(windowFocusedUpdaters, window, lwfu);
                if (activeElementUpdaters.size === 0) {
                    document?.removeEventListener("focusin", focusin);
                    document?.removeEventListener("focusout", focusout);
                    window?.removeEventListener("focus", windowFocus);
                    window?.removeEventListener("blur", windowBlur);
                }
            };
        }, []);
        const [getActiveElement, setActiveElement] = usePassiveState(onActiveElementChange, returnNull, { debounceRendering: runImmediately, skipMountInitialization: true });
        const [getLastActiveElement, setLastActiveElement] = usePassiveState(onLastActiveElementChange, returnNull, { debounceRendering: runImmediately, skipMountInitialization: true });
        const [getWindowFocused, setWindowFocused] = usePassiveState(onWindowFocusedChange, returnTrue, { debounceRendering: runImmediately, skipMountInitialization: true });
        return { activeElementReturn: { getActiveElement, getLastActiveElement, getWindowFocused } };
    });
}

/**
 * Combines all the methods a user can implicitly dismiss a popup component. See {@link useModal} for a hook that's ready-to-use for dialogs and menus.
 *
 * @compositeParams
 */
function useDismiss({ dismissParameters: { dismissActive, onDismiss, ...void3 }, backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop, ...void6 }, lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus, ...void7 }, escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth, ...void2 }, activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange: olaec1, onWindowFocusedChange, ...void5 }, ...void4 }) {
    return useMonitoring(function useDismiss() {
        const { refElementReturn: refElementSourceReturn, propsStable: propsStableSource } = useRefElement({ refElementParameters: {} });
        const { refElementReturn: refElementPopupReturn, propsStable: propsStablePopup } = useRefElement({ refElementParameters: {} });
        //const onCloseBackdrop = useCallback(() => { return globalOnClose?.("backdrop" as Listeners); }, [globalOnClose]);
        //const onCloseEscape = useCallback(() => { return globalOnClose?.("escape" as Listeners); }, [globalOnClose]);
        //const onCloseFocus = useCallback(() => { return globalOnClose?.("lost-focus" as Listeners); }, [globalOnClose]);
        useBackdropDismiss({
            refElementPopupReturn,
            backdropDismissParameters: {
                dismissBackdropActive: (dismissBackdropActive && dismissActive),
                onDismissBackdrop: useStableCallback((e) => {
                    onDismissBackdrop?.(e);
                    onDismiss(e, "backdrop");
                }),
            },
        });
        useEscapeDismiss({
            refElementPopupReturn,
            escapeDismissParameters: {
                dismissEscapeActive: (dismissEscapeActive && dismissActive),
                getDocument,
                onDismissEscape: useStableCallback((e) => {
                    onDismissEscape?.(e);
                    onDismiss(e, "escape");
                }),
                parentDepth,
            },
        });
        const { activeElementParameters: { onLastActiveElementChange: olaec2, ...void1 } } = useLostFocusDismiss({
            lostFocusDismissParameters: {
                dismissLostFocusActive: (dismissLostFocusActive && dismissActive),
                onDismissLostFocus: useStableCallback((e) => {
                    onDismissLostFocus?.(e);
                    onDismiss(e, "lost-focus");
                }),
            },
            refElementPopupReturn,
            refElementSourceReturn
        });
        useActiveElement({
            activeElementParameters: {
                onLastActiveElementChange: useStableMergedCallback(olaec2, olaec1),
                onActiveElementChange,
                onWindowFocusedChange,
                getDocument
            }
        });
        return {
            refElementSourceReturn,
            refElementPopupReturn,
            propsStableSource: propsStableSource,
            propsStablePopup: propsStablePopup
        };
    });
}

let be;
(async () => {
    if (typeof window !== 'undefined') {
        let d = !!globalThis.document;
        globalThis.document ??= {};
        /// @ts-expect-error
        await import('wicg-inert');
        await import('blocking-elements');
        be = document.$blockingElements;
        if (!d)
            delete globalThis.document;
    }
})();
function blockingElements() { return be; }

/**
 * Allows an element to trap focus by applying the "inert" attribute to all sibling, aunt, and uncle nodes.
 *
 * @remarks Automatically handles consecutive calls with a loosely applied stack operation
 * (specifically via `blockingElements`, with a small polyfill because I'm not sure how long
 * it'll take to find its way into the spec, if ever)
 *
 * @param target
 */
function useBlockingElement({ activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, ...void3 }, blockingElementParameters: { enabled, getTarget, ...void1 }, ...void2 }) {
    return useMonitoring(function useBlockingElement() {
        const stableGetTarget = useStableCallback(getTarget);
        //const getDocument = useStableCallback(() => (getTarget()?.ownerDocument ?? globalThis.document));
        useActiveElement({
            activeElementParameters: {
                getDocument,
                onActiveElementChange,
                onWindowFocusedChange,
                onLastActiveElementChange: useStableCallback((e, prev, reason) => {
                    onLastActiveElementChange?.(e, prev, reason);
                    if (e) {
                        if (enabled)
                            setLastActiveWhenOpen(e, reason);
                        else
                            setLastActiveWhenClosed(e, reason);
                    }
                })
            }
        });
        const [getTop, setTop] = usePassiveState(null, returnNull);
        const [getLastActiveWhenClosed, setLastActiveWhenClosed] = usePassiveState(null, returnNull);
        const [getLastActiveWhenOpen, setLastActiveWhenOpen] = usePassiveState(null, returnNull);
        /**
         * Push/pop the element from the blockingElements stack.
         */
        useLayoutEffect(() => {
            const target = stableGetTarget();
            if (enabled) {
                // Sometimes blockingElements will fail if, for example,
                // the target element isn't connected to document.body.
                // This is rare, but it's better to fail silently with weird tabbing behavior
                // than to crash the entire application.
                try {
                    blockingElements().push(target);
                    setTop(target);
                    return () => {
                        blockingElements().remove(target);
                    };
                }
                catch (ex) {
                    // Well, semi-silently.
                    console.error(ex);
                }
            }
        }, [enabled]);
        return { getTop, getLastActiveWhenClosed, getLastActiveWhenOpen };
    });
}
function getTopElement() {
    return blockingElements().top;
}

/**
 * Allows you to move focus to an isolated area of the page, restore it when finished, and **optionally trap it there** so that you can't tab out of it.
 *
 * @remarks By default, this implements a focus trap using the Blocking Elements...uh...[proposal](https://github.com/whatwg/html/issues/897)?
 * Not that it really looks like it's going anywhere, but until something better comes along, [the polyfill](#https://github.com/PolymerLabs/blocking-elements) has been working pretty great.
 *
 * @compositeParams
 */
function useFocusTrap({ focusTrapParameters: { onlyMoveFocus, trapActive, focusPopup: focusSelfUnstable, focusOpener: focusOpenerUnstable }, activeElementParameters, refElementReturn }) {
    return useMonitoring(function useFocusTrap() {
        const focusSelf = useStableCallback(focusSelfUnstable);
        const focusOpener = useStableCallback(focusOpenerUnstable);
        useEffect(() => {
            const document = getDocument();
            if (trapActive) {
                let top = getTop();
                getLastActiveWhenOpen();
                {
                    top ??= refElementReturn.getElement();
                    console.assert(!!top);
                    if (top)
                        focusSelf(top, () => findFirstFocusable(top));
                }
            }
            else {
                const lastActive = getLastActiveWhenClosed();
                let currentFocus = document?.activeElement;
                // Restore focus to whatever caused this trap to trigger,
                // but only if it wasn't caused by explicitly focusing something else 
                // (generally if `onlyMoveFocus` is true)
                let top = refElementReturn.getElement();
                if (document && (currentFocus == document.body || currentFocus == null || top == currentFocus || top?.contains(currentFocus))) {
                    if (lastActive)
                        focusOpener(lastActive);
                }
            }
        }, [trapActive]);
        const { getElement } = refElementReturn;
        const { getTop, getLastActiveWhenClosed, getLastActiveWhenOpen } = useBlockingElement({
            activeElementParameters,
            blockingElementParameters: {
                enabled: trapActive && !onlyMoveFocus,
                getTarget: getElement
            }
        });
        return {
            props: useTagProps({ "aria-modal": trapActive ? "true" : undefined }, "data-focus-trap")
        };
    });
}
/**
 * Returns the first focusable element contained within the given node, or null if none are found.
 */
function findFirstFocusable(element) {
    return findFirstCondition(element, node => node instanceof Element && isFocusable(node));
}
/**
 * Returns the first tabbable element contained within the given node, or null if none are found.
 */
function findFirstTabbable(element) {
    return findFirstCondition(element, node => node instanceof Element && isTabbable(node));
}
function findFirstCondition(element, filter) {
    const document = getDocument(element);
    if (!document)
        return null;
    if (element && filter(element))
        return element;
    console.assert(!!element);
    element ??= document?.body;
    const treeWalker = document?.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => (filter(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP) });
    const firstFocusable = treeWalker.firstChild();
    return firstFocusable;
}

/**
 * Combines {@link useGridNavigation} and {@link useSelection}.
 *
 * @remarks The -selection behavior is optional, if you decide you need multi-selection instead within the same component.
 *
 * @hasChild {@link useGridNavigationSelectionRow}
 * @hasChild {@link useGridNavigationSelectionCell}
 *
 * @compositeParams
 */
function useGridNavigationSelection({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, refElementReturn, paginatedChildrenParameters, processedIndexManglerReturn, childrenHaveFocusReturn, ...void2 }) {
    return useMonitoring(function useGridNavigationSelection() {
        const { context: { gridNavigationRowContext, rovingTabIndexContext, typeaheadNavigationContext }, linearNavigationReturn, managedChildrenParameters, props, rovingTabIndexReturn, typeaheadNavigationReturn, } = useGridNavigation({
            gridNavigationParameters,
            linearNavigationParameters,
            managedChildrenReturn,
            rovingTabIndexParameters: { ...rovingTabIndexParameters, initiallyTabbedIndex: singleSelectionParameters.initiallySingleSelectedIndex || 0 },
            typeaheadNavigationParameters,
            paginatedChildrenParameters,
            processedIndexManglerReturn,
            refElementReturn
        });
        const { childrenHaveFocusParameters, context: { singleSelectionContext, multiSelectionContext }, multiSelectionReturn, propsStable, singleSelectionReturn, ...void1 } = useSelection({
            managedChildrenReturn,
            rovingTabIndexReturn,
            singleSelectionParameters,
            multiSelectionParameters,
            childrenHaveFocusReturn
        });
        return {
            context: useMemoObject({
                gridNavigationRowContext,
                rovingTabIndexContext,
                singleSelectionContext,
                multiSelectionContext,
                typeaheadNavigationContext
            }),
            childrenHaveFocusParameters,
            linearNavigationReturn,
            managedChildrenParameters,
            props: useMergedProps(props, propsStable),
            rovingTabIndexReturn,
            singleSelectionReturn,
            multiSelectionReturn,
            typeaheadNavigationReturn
        };
    });
}
/**
 * @compositeParams
 */
function useGridNavigationSelectionRow({ info: mcp1, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, typeaheadNavigationParameters, context, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
    return useMonitoring(function useGridNavigationSelectionRow() {
        const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void6 }, info: { getSingleSelected, setLocalSingleSelected, singleSelected, getMultiSelected, setSelectedFromParent, getMultiSelectionDisabled, ...void8 }, props: propsSelection, singleSelectionChildReturn, multiSelectionChildReturn, pressParameters: { onPressSync, ...void4 }, ...void2 } = useSelectionChild({ info: mcp1, context, singleSelectionChildParameters, multiSelectionChildParameters });
        const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void7 }, info: { focusSelf, getLocallyTabbable, setLocallyTabbable, ...void9 }, props: propsGridNavigation, linearNavigationReturn, managedChildrenParameters, pressParameters: { excludeSpace, ...void5 }, rovingTabIndexChildReturn, rovingTabIndexReturn, textContentParameters, typeaheadNavigationReturn, context: contextGridNavigation, ...void3 } = useGridNavigationRow({ context, linearNavigationParameters, info: mcp1, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, typeaheadNavigationParameters });
        return {
            context: contextGridNavigation,
            linearNavigationReturn,
            info: {
                getLocallyTabbable,
                getSingleSelected,
                singleSelected,
                setLocallyTabbable,
                setLocalSingleSelected,
                focusSelf,
                getMultiSelected,
                setSelectedFromParent,
                getMultiSelectionDisabled
            },
            managedChildrenParameters,
            pressParameters: { onPressSync, excludeSpace },
            hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: useStableMergedCallback(ocfic1, ocfic2) },
            props: useMergedProps(propsGridNavigation, propsSelection),
            rovingTabIndexChildReturn,
            rovingTabIndexReturn,
            singleSelectionChildReturn,
            multiSelectionChildReturn,
            textContentParameters,
            typeaheadNavigationReturn
        };
    });
}
/**
 * @compositeParams
 */
function useGridNavigationSelectionCell(p) {
    return useMonitoring(function useGridNavigationSelectionCell() {
        return useGridNavigationCell(p);
    });
}

/**
 * Combines {@link useListNavigation} and {@link useSelection}.
 *
 * @remarks The -selection behavior is optional, if you decide you need multi-selection instead within the same component.
 *
 * @hasChild {@link useListNavigationSelectionChild}
 *
 * @compositeParams
 */
function useListNavigationSelection({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, processedIndexManglerReturn, childrenHaveFocusReturn, ...void3 }) {
    return useMonitoring(function useListNavigationSelection() {
        const { context: contextSS, propsStable, ...retSS } = useSelection({
            childrenHaveFocusReturn,
            rovingTabIndexReturn: { setTabbableIndex: useStableCallback((...a) => { rovingTabIndexReturn.setTabbableIndex(...a); }) },
            managedChildrenReturn,
            singleSelectionParameters,
            multiSelectionParameters
        });
        const { context: contextLN, props, rovingTabIndexReturn, ...retLN } = useListNavigation({
            rovingTabIndexParameters: { ...rovingTabIndexParameters, initiallyTabbedIndex: singleSelectionParameters.initiallySingleSelectedIndex || 0 },
            linearNavigationParameters,
            paginatedChildrenParameters,
            typeaheadNavigationParameters,
            managedChildrenReturn,
            refElementReturn,
            processedIndexManglerReturn
        });
        return {
            rovingTabIndexReturn,
            ...retSS,
            ...retLN,
            context: useMemoObject({
                ...contextLN,
                ...contextSS
            }),
            props: useMergedProps(props, propsStable)
        };
    });
}
/**
 * @compositeParams
 */
function useListNavigationSelectionChild({ info: { index, untabbable, ...void2 }, context, refElementReturn, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
    return useMonitoring(function useListNavigationSelectionChild() {
        const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void3 }, info: infoSS, multiSelectionChildReturn, singleSelectionChildReturn, props: propsSS, pressParameters: { onPressSync }, ...void9 } = useSelectionChild({
            info: { index, untabbable },
            context,
            multiSelectionChildParameters,
            singleSelectionChildParameters
        });
        const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void6 }, pressParameters: { excludeSpace }, rovingTabIndexChildReturn, textContentParameters, props: propsLN, info: infoLN, ...void8 } = useListNavigationChild({
            info: { index, untabbable },
            context,
            refElementReturn,
        });
        return {
            hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: useStableMergedCallback(ocfic1, ocfic2) },
            pressParameters: { onPressSync, excludeSpace },
            info: { ...infoSS, ...infoLN },
            rovingTabIndexChildReturn,
            multiSelectionChildReturn,
            singleSelectionChildReturn,
            textContentParameters,
            propsChild: propsSS,
            propsTabbable: propsLN
        };
    });
}

/**
 * Allows examining the rendered component's text content whenever it renders and reacting to changes.
 *
 * @compositeParams
 */
function useTextContent({ refElementReturn: { getElement }, textContentParameters: { getText, onTextContentChange } }) {
    return useMonitoring(function useTextContent() {
        const [getTextContent, setTextContent] = usePassiveState(onTextContentChange, returnNull, { debounceRendering: runImmediately, skipMountInitialization: true });
        useEffect(() => {
            const element = getElement();
            if (element) {
                const textContent = getText(element);
                if (textContent) {
                    setTextContent(textContent);
                }
            }
        });
        return { textContentReturn: { getTextContent } };
    });
}

/**
 * Allows a composite component (such as a radio group or listbox) to listen
 * for an "overall focusin/out" event; this hook lets you know when focus has
 * moved in/out of this grouping of children EVEN IF there is no actual parent DOM element.
 *
 * @remarks I.E. you can use this without needing a parent `<div>` to listen for a `focusout` event.
 *
 * @hasChild {@link useChildrenHaveFocusChild}
 *
 * @compositeParams
 */
function useChildrenHaveFocus(args) {
    return useMonitoring(function useChildrenHaveFocus() {
        const { childrenHaveFocusParameters: { onCompositeFocusChange } } = args;
        const [getAnyFocused, setAnyFocused] = usePassiveState(onCompositeFocusChange, returnFalse, { debounceRendering: runImmediately, skipMountInitialization: true });
        const [_getFocusCount, setFocusCount] = usePassiveState(useStableCallback((anyFocused, anyPreviouslyFocused, e) => {
            console.assert(anyFocused >= 0 && anyFocused <= 1);
            setAnyFocused(!!(anyFocused && !anyPreviouslyFocused), e);
        }), returnZero, { debounceRendering: setTimeout, skipMountInitialization: true }); // setTimeout is used for the debounce to be somewhat generous with timing, and to guard against the default being able to be runImmediately...
        return {
            childrenHaveFocusReturn: { getAnyFocused },
            context: useMemoObject({ childrenHaveFocusChildContext: useMemoObject({ setFocusCount }) }),
        };
    });
}
/**
 * @compositeParams
 */
function useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext: { setFocusCount } } }) {
    return useMonitoring(function useChildrenHaveFocusChild() {
        return {
            hasCurrentFocusParameters: {
                onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e) => {
                    if (focused) {
                        setFocusCount(p => (p ?? 0) + 1, e);
                    }
                    else if (!focused && prev) {
                        setFocusCount(p => (p ?? 0) - 1, e);
                    }
                }),
            }
        };
    });
}

/**
 * Allows monitoring whether the rendered element is or is not focused directly (i.e. would satisfy `:focus`).
 *
 * @see {@link useHasLastFocus}, in which even if the `body` is clicked it's not considered a loss in focus.
 *
 * @compositeParams
 */
function useHasCurrentFocus(args) {
    return useMonitoring(function useHasCurrentFocus() {
        const { hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged }, refElementReturn: { getElement } } = args;
        useEnsureStability("useHasCurrentFocus", onCurrentFocusedChanged, onCurrentFocusedInnerChanged, getElement);
        const [getFocused, setFocused] = usePassiveState(onCurrentFocusedChanged, returnFalse, { debounceRendering: runImmediately, skipMountInitialization: true });
        const [getFocusedInner, setFocusedInner] = usePassiveState(onCurrentFocusedInnerChanged, returnFalse, { debounceRendering: runImmediately, skipMountInitialization: true });
        const onFocusIn = useCallback((e) => {
            setFocusedInner(true, e);
            setFocused(e.target == getElement(), e);
        }, []);
        const onFocusOut = useCallback((e) => {
            // Even if we're focusOut-ing to another inner element,
            // that'll be caught during onFocusIn,
            // so just set everything to false and let that revert things back to true if necessary.
            setFocusedInner(false, e);
            setFocused(false, e);
        }, []);
        useEffect(() => {
            return () => {
                setFocused(false, undefined);
                setFocusedInner(false, undefined);
            };
        }, []);
        const propsStable = useRef({
            [onfocusin]: onFocusIn,
            [onfocusout]: onFocusOut
        });
        return {
            hasCurrentFocusReturn: {
                propsStable: propsStable.current,
                getCurrentFocused: getFocused,
                getCurrentFocusedInner: getFocusedInner,
            }
        };
    });
}

/**
 * Combines all the grid- (&amp; list-) related hooks into one giant hook that accomplishes everything.
 *
 * @hasChild {@link useCompleteGridNavigationRow}
 * @hasChild {@link useCompleteGridNavigationCell}
 *
 * @compositeParams
 */
function useCompleteGridNavigation({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, typeaheadNavigationParameters, paginatedChildrenParameters, refElementParameters, gridNavigationCompleteParameters: { getSortColumn, getSortValueAt: gsva }, processedIndexManglerParameters: { compare, getIndex }, ...void1 }) {
    return useMonitoring(function useCompleteGridNavigation() {
        useEnsureStability("useCompleteGridNavigation", getSortColumn, gsva);
        const getSortValueAt = useCallback((index) => {
            const row = index;
            const column = getSortColumn == undefined ? undefined : getSortColumn();
            return gsva(row, column);
        }, [gsva, getSortColumn]);
        const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
        const getLowestChildIndex = useCallback(() => getChildren().getLowestIndex(), []);
        const getHighestChildIndex = useCallback(() => getChildren().getHighestIndex(), []);
        const isValidForNavigation = useCallback((i) => {
            const child = getChildren().getAt(i);
            if (child == null)
                return false;
            if (child.untabbable)
                return false;
            return true;
        }, []);
        const { refElementReturn, propsStable, ...void2 } = useRefElement({ refElementParameters });
        const { context: { processedIndexManglerContext }, processedIndexManglerReturn } = useProcessedIndexMangler({
            processedIndexManglerParameters: {
                compare,
                getIndex,
                getSortValueAt
            }
        });
        const { indexDemangler, indexMangler } = processedIndexManglerReturn;
        // Grab the information from the array of children we may or may not render.
        // (see useProcessedChildren -- it send this information to us if it's used.)
        // These are all stable functions, except for `contextPreprocessing`, which is how it sends things to us.
        //const { context: { rearrangeableChildrenContext, ...void4 }, indexDemangler, indexMangler, rearrange, reverse, shuffle, sort } = useCreateProcessedChildrenContext();
        const getAnyFocused = useStableCallback(() => childrenHaveFocusReturn.getAnyFocused());
        const { childrenHaveFocusParameters, managedChildrenParameters, context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext }, props, rovingTabIndexReturn, linearNavigationReturn, singleSelectionReturn, multiSelectionReturn, typeaheadNavigationReturn, ...void3 } = useGridNavigationSelection({
            gridNavigationParameters,
            singleSelectionParameters,
            multiSelectionParameters,
            paginatedChildrenParameters,
            refElementReturn,
            linearNavigationParameters: { getLowestIndex: getLowestChildIndex, getHighestIndex: getHighestChildIndex, isValidForLinearNavigation: isValidForNavigation, ...linearNavigationParameters },
            managedChildrenReturn: { getChildren },
            rovingTabIndexParameters: { untabbableBehavior: "focus-parent", ...rovingTabIndexParameters },
            typeaheadNavigationParameters: { isValidForTypeaheadNavigation: isValidForNavigation, ...typeaheadNavigationParameters },
            childrenHaveFocusReturn: { getAnyFocused },
            processedIndexManglerReturn: { indexDemangler, indexMangler }
        });
        const refreshRows = useRef(() => { });
        const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
        const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
        const { getTabbableIndex, setTabbableIndex } = rovingTabIndexReturn;
        const processedChildrenContext = useMemoObject({ getTabbableIndex, setTabbableIndex, getAnyFocused, getElement: refElementReturn.getElement });
        /*const c2 = useMemoObject<UseProcessedChildrenContext>({
            processedChildrenContext,
            rearrangeableChildrenContext,
        });*/
        const context = useMemoObject({
            singleSelectionContext,
            multiSelectionContext,
            managedChildContext,
            rovingTabIndexContext,
            typeaheadNavigationContext,
            childrenHaveFocusChildContext,
            gridNavigationRowContext,
            processedChildrenContext,
            processedIndexManglerContext,
            completeGridNavigationContext: useMemoObject({ compare, getIndex, getSortValueAt, provideParentWithRefreshRows: useCallback((e) => { refreshRows.current = e; }, []) })
        });
        return {
            context,
            props: useMergedProps(props, propsStable),
            refElementReturn,
            managedChildrenReturn,
            rovingTabIndexReturn,
            childrenHaveFocusReturn,
            linearNavigationReturn,
            singleSelectionReturn,
            multiSelectionReturn,
            typeaheadNavigationReturn,
            rearrangeableChildrenReturn: { refresh: useCallback(() => refreshRows.current(), []) },
            //completeGridNavigationReturn: { refreshRows }
        };
    });
}
/**
 * Helper for `useCompleteGridNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 *
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize
 *
 * @compositeParams
 */
function useCompleteGridNavigationRows({ context, paginatedChildrenParameters, staggeredChildrenParameters, managedChildrenParameters, rearrangeableChildrenParameters, ...void1 }) {
    return useMonitoring(function useCompleteGridNavigationRows() {
        const { completeGridNavigationContext: { compare, getIndex, getSortValueAt, provideParentWithRefreshRows } } = context;
        const { context: contextRPS, paginatedChildrenReturn, rearrangeableChildrenReturn, staggeredChildrenReturn, } = useProcessedChildren({
            paginatedChildrenParameters,
            processedIndexManglerParameters: { compare, getIndex, getSortValueAt },
            staggeredChildrenParameters,
            managedChildrenParameters,
            rearrangeableChildrenParameters,
            context,
        });
        useLayoutEffect(() => {
            provideParentWithRefreshRows(() => {
                rearrangeableChildrenReturn.refresh();
            });
        }, []);
        return {
            context: contextRPS,
            paginatedChildrenReturn,
            rearrangeableChildrenReturn,
            staggeredChildrenReturn
        };
    });
}
/**
 * @compositeParams
 */
function useCompleteGridNavigationRowOuter({ context, info: { index, ...uinfo }, refElementParameters: { onElementChange: oec1, onMount, onUnmount }, rearrangeableChildParameters }) {
    return useMonitoring(function useCompleteGridNavigationRowOuter() {
        const { propsStable, refElementReturn } = useRefElement({
            refElementParameters: {
                onElementChange: useStableCallback((...a) => { oec1?.(...a); oec2?.(...a); }),
                onMount,
                onUnmount
            }
        });
        const { props, ...processedChildReturn } = useProcessedChild({
            context,
            info: { ...uinfo, index, getElement: refElementReturn.getElement },
            rearrangeableChildParameters,
        });
        const { refElementParameters: { onElementChange: oec2 } } = processedChildReturn;
        return {
            ...processedChildReturn,
            props: useMergedProps(props, propsStable),
            refElementReturn,
            hide: processedChildReturn.paginatedChildReturn.hideBecausePaginated || processedChildReturn.staggeredChildReturn.hideBecauseStaggered
        };
    });
}
/**
 * @compositeParams
 */
function useCompleteGridNavigationRow({ info: { index, untabbable, ...customUserInfo }, context: contextIncomingForRowAsChildOfTable, textContentParameters: { getText, onTextContentChange: otcc1 }, linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, hasCurrentFocusParameters: { onCurrentFocusedChanged: ocfc1, onCurrentFocusedInnerChanged: ocfic3, ...void5 }, singleSelectionChildParameters, multiSelectionChildParameters, refElementParameters, ...void1 }) {
    return useMonitoring(function useCompleteGridNavigationRow() {
        // TODO: customUserInfo may contain setSelectedFromParent from the declarative version of this hook.
        // This is a bit of an edge case and should probably be handled more concretely.
        // Create some helper functions
        const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
        const getHighestChildIndex = useCallback(() => getChildren().getHighestIndex(), []);
        const getLowestChildIndex = useCallback(() => getChildren().getLowestIndex(), []);
        const isValidForNavigation = useCallback((i) => {
            const child = getChildren().getAt(i);
            if (child == null)
                return false;
            if (child.untabbable)
                return false;
            return true;
        }, []);
        // Someone somewhere needs useRefElement, no shock there
        const { refElementReturn, propsStable, ...void6 } = useRefElement({ refElementParameters });
        // Enormous bag of parameters for useGridNavigationRow
        const parameters = {
            rovingTabIndexParameters,
            typeaheadNavigationParameters: { isValidForTypeaheadNavigation: isValidForNavigation, ...typeaheadNavigationParameters },
            linearNavigationParameters: { isValidForLinearNavigation: isValidForNavigation, getHighestIndex: getHighestChildIndex, getLowestIndex: getLowestChildIndex, ...linearNavigationParameters },
            managedChildrenReturn: { getChildren },
            refElementReturn,
            context: contextIncomingForRowAsChildOfTable,
            info: { index, untabbable },
            //textContentReturn: { getTextContent: useStableCallback(() => textContentReturn.getTextContent()) },
            singleSelectionChildParameters,
            multiSelectionChildParameters
        };
        // Actually call useGridNavigationRow,
        // and get an enormous bag of return values
        const { linearNavigationReturn, managedChildrenParameters, pressParameters, rovingTabIndexChildReturn, rovingTabIndexReturn, singleSelectionChildReturn, multiSelectionChildReturn, textContentParameters: { onTextContentChange: otcc2 }, typeaheadNavigationReturn, context: contextGNR, info: infoRowReturn, props: p3, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 }, ...void2 } = useGridNavigationSelectionRow(parameters);
        const { textContentReturn, ...void7 } = useTextContent({ refElementReturn, textContentParameters: { getText, onTextContentChange: useStableMergedCallback(otcc1, otcc2) } });
        // This is all the info the parent needs about us, the row
        // (NOT the info the cells provide to us, the row)
        const completeInfo = {
            getElement: refElementReturn.getElement,
            index,
            untabbable,
            ...infoRowReturn,
        };
        // Call both `useManagedChildren` and `useManagedChild` with their appropriate parameters.
        const { context: contextMC, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
        const { managedChildReturn, ...void4 } = useManagedChild({ context: contextIncomingForRowAsChildOfTable, info: { ...completeInfo, ...customUserInfo } });
        const context = useMemoObject({
            ...contextGNR,
            ...contextMC,
        });
        const { hasCurrentFocusReturn } = useHasCurrentFocus({
            refElementReturn,
            hasCurrentFocusParameters: {
                onCurrentFocusedChanged: ocfc1,
                onCurrentFocusedInnerChanged: useStableMergedCallback(ocfic1, ocfic3),
            }
        });
        const props = useMergedProps(propsStable, p3, hasCurrentFocusReturn.propsStable);
        return {
            pressParameters,
            hasCurrentFocusReturn,
            managedChildrenReturn,
            context,
            textContentReturn,
            managedChildReturn,
            linearNavigationReturn,
            rovingTabIndexChildReturn,
            rovingTabIndexReturn,
            singleSelectionChildReturn,
            multiSelectionChildReturn,
            typeaheadNavigationReturn,
            refElementReturn,
            props,
        };
    });
}
/**
 * @compositeParams
 */
function useCompleteGridNavigationCell({ gridNavigationCellParameters, context, textContentParameters: { getText, onTextContentChange: otcc1, ...void4 }, info: { focusSelf, index, untabbable, ...customUserInfo }, ...void1 }) {
    return useMonitoring(function useCompleteGridNavigationCell() {
        const { refElementReturn, propsStable } = useRefElement({ refElementParameters: {} });
        const { hasCurrentFocusParameters, rovingTabIndexChildReturn, textContentParameters: { onTextContentChange: otcc2 }, pressParameters: { excludeSpace: es1 }, props: propsRti, info: info2, ...void2 } = useGridNavigationSelectionCell({
            gridNavigationCellParameters,
            info: { index, untabbable },
            context,
            refElementReturn,
            //textContentReturn: { getTextContent: useStableCallback((): string | null => textContentReturn.getTextContent()) },
        });
        const { textContentReturn, ...void3 } = useTextContent({ refElementReturn, textContentParameters: { getText, onTextContentChange: useStableMergedCallback(otcc1, otcc2) } });
        const { hasCurrentFocusReturn } = useHasCurrentFocus({
            hasCurrentFocusParameters: {
                onCurrentFocusedChanged: null,
                ...hasCurrentFocusParameters
            },
            refElementReturn
        });
        const baseInfo = {
            getElement: refElementReturn.getElement,
            getLocallyTabbable: rovingTabIndexChildReturn.getTabbable,
            setLocallyTabbable: info2.setLocallyTabbable,
            focusSelf,
            index,
            untabbable
        };
        const { managedChildReturn } = useManagedChild({ context, info: { ...baseInfo, ...customUserInfo } });
        const props = useMergedProps(propsStable, propsRti, hasCurrentFocusReturn.propsStable);
        return {
            props,
            refElementReturn,
            rovingTabIndexChildReturn,
            pressParameters: { excludeSpace: useStableCallback(() => (es1?.() || false)) },
            hasCurrentFocusReturn,
            managedChildReturn,
            textContentReturn
        };
    });
}
/**
 * @compositeParams
 */
function useCompleteGridNavigationDeclarative({ singleSelectionDeclarativeParameters, singleSelectionParameters, ...normalGridNavParameters }) {
    const ret2 = useCompleteGridNavigation({
        singleSelectionParameters: {
            initiallySingleSelectedIndex: singleSelectionDeclarativeParameters.singleSelectedIndex,
            onSingleSelectedIndexChange: useStableCallback((...e) => onSingleSelectedIndexChange?.(...e)),
            ...singleSelectionParameters
        },
        ...normalGridNavParameters
    });
    const { singleSelectionParameters: { onSingleSelectedIndexChange } } = useSelectionDeclarative({
        singleSelectionDeclarativeParameters,
        singleSelectionReturn: ret2.singleSelectionReturn
    });
    return ret2;
}
/**
 * @compositeParams
 */
function useCompleteGridNavigationRowDeclarative({ multiSelectionChildParameters: { multiSelectionDisabled, ...multiSelectionChildParameters }, multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange, ...multiSelectionChildDeclarativeParameters }, info, ...p }) {
    const { info: { setSelectedFromParent }, multiSelectionChildParameters: { onMultiSelectChange } } = useSelectionChildDeclarative({
        multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange, ...multiSelectionChildDeclarativeParameters },
        multiSelectionChildReturn: { changeMultiSelected: useStableCallback((...e) => { changeMultiSelected(...e); }) }
    });
    const r1 = useCompleteGridNavigationRow({
        info: { ...info, setSelectedFromParent },
        multiSelectionChildParameters: {
            ...multiSelectionChildParameters,
            initiallyMultiSelected: multiSelected,
            multiSelectionDisabled,
            onMultiSelectChange: useStableCallback((e) => { onMultiSelectChange?.(e); })
        },
        ...p
    });
    const { multiSelectionChildReturn: { changeMultiSelected } } = r1;
    return r1;
}

/**
 * All the list-related hooks combined into one large hook that encapsulates everything.
 *
 * @remarks Unlike most others, this hook assume's it's the final one--the "outermost" hook in the component--so it uses `useManagedChildren` and wraps everything up nicely,
 * combining event handlers that are used in multiple sub-hooks, collecting all the necessary context-related data, and merging all known DOM props together.
 *
 * @hasChild {@link useCompleteListNavigationChild}
 *
 * @compositeParams
 */
function useCompleteListNavigation({ linearNavigationParameters, typeaheadNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, paginatedChildrenParameters, 
//staggeredChildrenParameters,
refElementParameters, processedIndexManglerParameters, ...void1 }) {
    return useMonitoring(function useCompleteListNavigation() {
        const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
        const getLowestIndex = useCallback(() => getChildren().getLowestIndex(), []);
        const getHighestIndex = useCallback(() => getChildren().getHighestIndex(), []);
        const isValidForNavigation = useCallback((i) => {
            const child = getChildren().getAt(i);
            if (!child)
                return false;
            if (child.untabbable)
                return false;
            return true;
        }, []);
        const { propsStable: propsRef, refElementReturn } = useRefElement({ refElementParameters });
        const { context: { processedIndexManglerContext }, processedIndexManglerReturn: { indexDemangler, indexMangler, mangler } } = useProcessedIndexMangler({ processedIndexManglerParameters });
        const { childrenHaveFocusParameters, managedChildrenParameters: { onChildrenMountChange, ...mcp1 }, context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext }, linearNavigationReturn, rovingTabIndexReturn, singleSelectionReturn, multiSelectionReturn, typeaheadNavigationReturn, props, ...void2 } = useListNavigationSelection({
            managedChildrenReturn: { getChildren },
            linearNavigationParameters: { getLowestIndex, getHighestIndex, isValidForLinearNavigation: isValidForNavigation, ...linearNavigationParameters },
            typeaheadNavigationParameters: { isValidForTypeaheadNavigation: isValidForNavigation, ...typeaheadNavigationParameters },
            rovingTabIndexParameters: { untabbableBehavior: "focus-parent", ...rovingTabIndexParameters },
            singleSelectionParameters,
            multiSelectionParameters,
            paginatedChildrenParameters,
            refElementReturn,
            childrenHaveFocusReturn: { getAnyFocused: useStableCallback(() => childrenHaveFocusReturn.getAnyFocused()) },
            processedIndexManglerReturn: { indexDemangler, indexMangler }
        });
        const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
        const mcr = useManagedChildren({
            managedChildrenParameters: {
                onChildrenMountChange,
                ...mcp1
            }
        });
        const { context: { managedChildContext: managedChildRTIContext }, managedChildrenReturn } = mcr;
        const { getTabbableIndex, setTabbableIndex } = rovingTabIndexReturn;
        const { getAnyFocused } = childrenHaveFocusReturn;
        // => <= <=>
        const processedChildrenContext = useMemoObject({ getTabbableIndex, setTabbableIndex, getAnyFocused });
        const refreshRows = useRef(() => { });
        const { getSortValueAt, compare, getIndex } = processedIndexManglerParameters;
        const context = useMemoObject({
            childrenHaveFocusChildContext,
            rovingTabIndexContext,
            singleSelectionContext,
            multiSelectionContext,
            typeaheadNavigationContext,
            managedChildContext: managedChildRTIContext,
            processedChildrenContext,
            listNavigationCompleteContext: useMemoObject({ getSortValueAt, compare, getIndex, provideParentWithRefreshRows: useCallback((e) => { refreshRows.current = e; }, []) }),
            processedIndexManglerContext,
        });
        return {
            context,
            props: useMergedProps(props, propsRef),
            managedChildrenReturn,
            linearNavigationReturn,
            rovingTabIndexReturn,
            singleSelectionReturn,
            multiSelectionReturn,
            typeaheadNavigationReturn,
            childrenHaveFocusReturn,
            refElementReturn,
            rearrangeableChildrenReturn: { refresh: useCallback(() => refreshRows.current(), []) }
        };
    });
}
/**
 * Helper for `useCompleteListNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 *
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize
 *
 * @compositeParams
 */
function useCompleteListNavigationChildren({ context, paginatedChildrenParameters, staggeredChildrenParameters, managedChildrenParameters, rearrangeableChildrenParameters, ...void1 }) {
    return useMonitoring(function useCompleteListNavigationChildren() {
        const { listNavigationCompleteContext: { getSortValueAt, compare, getIndex, provideParentWithRefreshRows } } = context;
        const { context: contextRPS, paginatedChildrenReturn, rearrangeableChildrenReturn, staggeredChildrenReturn, } = useProcessedChildren({
            paginatedChildrenParameters,
            processedIndexManglerParameters: { getSortValueAt, compare, getIndex },
            rearrangeableChildrenParameters,
            staggeredChildrenParameters,
            managedChildrenParameters,
            context,
        });
        useLayoutEffect(() => {
            provideParentWithRefreshRows(() => {
                rearrangeableChildrenReturn.refresh();
            });
        }, []);
        return {
            context: contextRPS,
            paginatedChildrenReturn,
            rearrangeableChildrenReturn,
            staggeredChildrenReturn
        };
    });
}
/**
 * @compositeParams
 */
function useCompleteListNavigationChildOuter({ context, info: { index, ...uinfo }, refElementParameters: { onElementChange: oec1, onMount, onUnmount }, rearrangeableChildParameters }) {
    return useMonitoring(function useCompleteListNavigationChildOuter() {
        const { propsStable, refElementReturn } = useRefElement({
            refElementParameters: {
                onElementChange: useStableCallback((...a) => { oec1?.(...a); oec2?.(...a); }),
                onMount,
                onUnmount
            }
        });
        const { getElement } = refElementReturn;
        const { props, ...processedChildReturn } = useProcessedChild({
            context,
            info: { index, getElement, ...uinfo },
            rearrangeableChildParameters
        });
        const { refElementParameters: { onElementChange: oec2 } } = processedChildReturn;
        return {
            ...processedChildReturn,
            props: useMergedProps(props, propsStable),
            refElementReturn,
            hide: processedChildReturn.paginatedChildReturn.hideBecausePaginated || processedChildReturn.staggeredChildReturn.hideBecauseStaggered
        };
    });
}
/**
 *
 * @compositeParams
 */
function useCompleteListNavigationChild({ info: { index, focusSelf, untabbable, ...customUserInfo }, // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
textContentParameters: { getText, onTextContentChange: otcc1, ...void10 }, refElementParameters, hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged: ocfic3, ...void7 }, singleSelectionChildParameters, multiSelectionChildParameters, context: { managedChildContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext, childrenHaveFocusChildContext, processedChildrenContext, processedIndexManglerContext, listNavigationCompleteContext, ...void5 }, ...void1 }) {
    return useMonitoring(function useCompleteListNavigationChild() {
        const { refElementReturn, propsStable, ...void6 } = useRefElement({ refElementParameters });
        const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 }, pressParameters: { excludeSpace, onPressSync, ...void2 }, textContentParameters: { onTextContentChange: otcc2, ...void8 }, singleSelectionChildReturn, multiSelectionChildReturn, info: infoFromListNav, rovingTabIndexChildReturn, propsChild, propsTabbable, ...void4 } = useListNavigationSelectionChild({
            info: { index, untabbable },
            context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext },
            singleSelectionChildParameters,
            multiSelectionChildParameters,
            refElementReturn
        });
        const { textContentReturn, ...void9 } = useTextContent({ refElementReturn, textContentParameters: { getText, onTextContentChange: useStableMergedCallback(otcc1, otcc2) } });
        const allStandardInfo = {
            index,
            focusSelf,
            getElement: refElementReturn.getElement,
            untabbable,
            ...infoFromListNav,
        };
        const { managedChildReturn } = useManagedChild({ context: { managedChildContext }, info: { ...allStandardInfo, ...customUserInfo } });
        const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 } } = useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext } });
        const onCurrentFocusedInnerChanged = useStableMergedCallback(ocfic1, ocfic2, ocfic3);
        const { hasCurrentFocusReturn } = useHasCurrentFocus({
            hasCurrentFocusParameters: {
                onCurrentFocusedInnerChanged,
                onCurrentFocusedChanged
            },
            refElementReturn
        });
        const props = useMergedProps(propsStable, hasCurrentFocusReturn.propsStable, propsChild);
        return {
            propsChild: props,
            propsTabbable,
            pressParameters: {
                onPressSync,
                excludeSpace
            },
            textContentReturn,
            refElementReturn,
            singleSelectionChildReturn,
            multiSelectionChildReturn,
            hasCurrentFocusReturn,
            managedChildReturn,
            rovingTabIndexChildReturn
        };
    });
}
/**
 * @compositeParams
 */
function useCompleteListNavigationDeclarative({ singleSelectionParameters, singleSelectionDeclarativeParameters, ...rest }) {
    const ret = useCompleteListNavigation({
        singleSelectionParameters: {
            initiallySingleSelectedIndex: singleSelectionDeclarativeParameters.singleSelectedIndex,
            // Needs to be a (stable) callback because of declaration order
            onSingleSelectedIndexChange: useStableCallback((...e) => onSingleSelectedIndexChange?.(...e)),
            ...singleSelectionParameters
        },
        ...rest
    });
    const { singleSelectionParameters: { onSingleSelectedIndexChange, ...void3 }, ...void2 } = useSelectionDeclarative({ singleSelectionDeclarativeParameters, singleSelectionReturn: ret.singleSelectionReturn });
    const { singleSelectionReturn: { getSingleSelectedIndex }, ...ret2 } = ret;
    return { ...ret2, singleSelectionReturn: { getSingleSelectedIndex } };
}
/**
 * #__NO_SIDE_EFFECTS__
 */
function useCompleteListNavigationChildDeclarative({ multiSelectionChildParameters, multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange }, info: i1, ...rest }) {
    const { multiSelectionChildParameters: { onMultiSelectChange }, info: i2, ...void2 } = useSelectionChildDeclarative({
        multiSelectionChildDeclarativeParameters: { onMultiSelectedChange, multiSelected },
        multiSelectionChildReturn: {
            changeMultiSelected: useStableCallback((...args) => { ret.multiSelectionChildReturn.changeMultiSelected(...args); })
        }
    });
    const ret = useCompleteListNavigationChild({
        multiSelectionChildParameters: {
            initiallyMultiSelected: multiSelected,
            onMultiSelectChange: useStableCallback((e) => { onMultiSelectChange(e); }),
            ...multiSelectionChildParameters
        },
        info: { ...i1, ...i2 },
        ...rest
    });
    const { multiSelectionChildReturn, ...ret2 } = ret;
    return { ...ret2, multiSelectionChildReturn };
}

/**
 * Combines dismissal hooks and focus trap hooks into one.
 * Use for dialogs, menus, etc.  Anything that can be dismissed and might trap focus, basically.
 *
 * @remarks Another in the "complete" series, alongside list/grid navigation and dismissal itself.
 *
 * TODO: The HTML &lt;dialog&gt; element is a thing now, and it can be modal or nonmodal, just like this hook. Hmm...
 *
 * @compositeParams
 */
function useModal({ dismissParameters: { dismissActive, onDismiss, ...void2 }, escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth, ...void3 }, focusTrapParameters: { trapActive, ...focusTrapParameters }, activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, ...void4 }, backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop, ...void5 }, lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus, ...void6 }, refElementParameters: { onElementChange, onMount, onUnmount, ...void7 }, modalParameters: { active: modalActive, ...void8 }, ...void1 }) {
    return useMonitoring(function useModal() {
        const { refElementPopupReturn, refElementSourceReturn, propsStablePopup, propsStableSource } = useDismiss({
            dismissParameters: { dismissActive: dismissActive && modalActive, onDismiss },
            escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth },
            activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange },
            backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop },
            lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus },
        });
        const { propsStable, refElementReturn } = useRefElement({ refElementParameters: { onElementChange, onMount, onUnmount } });
        const { props } = useFocusTrap({
            focusTrapParameters: { trapActive: trapActive && modalActive, ...focusTrapParameters },
            activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange },
            refElementReturn
        });
        return {
            propsFocusContainer: useMergedProps(propsStable, props),
            refElementPopupReturn,
            refElementSourceReturn,
            propsStablePopup,
            propsStableSource
        };
    });
}

function isPromise(p) {
    return p instanceof Promise;
}
const Unset = Symbol("Unset");
/**
 * lodash-ish function that's like debounce + (throttle w/ async handling) combined.
 *
 * Requires a lot of callbacks to meaningfully turn a red function into a blue one, but you *can* do it!
 * Note that part of this is emulating the fact that the sync handler cannot have a return value,
 * so you'll need to use `setResolve` and the other related functions to do that in whatever way works for your specific scenario.
 *
 * The comments are numbered in approximate execution order for your reading pleasure (1 is near the bottom).
 */
function asyncToSync({ asyncInput, onInvoke, onInvoked, onFinally: onFinallyAny, onReject, onResolve, onHasError, onHasResult, onError, onReturnValue, capture, onAsyncDebounce, onSyncDebounce, onPending, throttle, wait }) {
    let pending = false;
    let syncDebouncing = false;
    let asyncDebouncing = false;
    let currentCapture = Unset;
    const onFinally = () => {
        // 8. This is run at the end of every invocation of the async handler,
        // whether it completed or not, and whether it was async or not.
        onFinallyAny?.();
        onPending?.(pending = false);
        let nothingElseToDo = (!asyncDebouncing);
        onAsyncDebounce?.(asyncDebouncing = false);
        if (nothingElseToDo) ;
        else {
            // 9b. Another request to run the async handler came in while we were running this one.
            // Instead of stopping, we're just going to immediately run again using the arguments that were given to us most recently.
            // We also clear that flag, because we're handling it now. It'll be set again if the handler is called again while *this* one is running
            console.assert(currentCapture !== Unset);
            if (currentCapture != Unset) {
                onSyncDebounce?.(syncDebouncing = true);
                syncDebounced();
            }
        }
    };
    const sync = (...args) => {
        // 5. We're finally running the async version of the function, so notify the caller that the return value is pending.
        // And because the fact that we're here means the debounce/throttle period is over, we can clear that flag too.
        onPending?.(pending = true);
        console.assert(syncDebouncing == false);
        onHasError?.(null);
        onHasResult?.(null);
        let promiseOrReturn;
        let hadSyncError = false;
        try {
            // 6. Run the function we were given.
            // Because it may be sync, or it may throw before returning, we must still wrap it in a try/catch...
            // Also important is that we preserve the async-ness (or lack thereof) on the original input function.
            onInvoke?.();
            promiseOrReturn = asyncInput(...args);
            onHasError?.(false);
        }
        catch (ex) {
            hadSyncError = true;
            onError?.(ex);
            onInvoked?.("throw");
        }
        // 7. Either end immediately, or schedule to end when completed.
        if (isPromise(promiseOrReturn)) {
            onInvoked?.("async");
            promiseOrReturn
                .then(r => { onResolve?.(); onHasResult?.(true); onReturnValue?.(r); return r; })
                .catch(e => { onReject?.(); onHasError?.(true); onError?.(e); return e; })
                .finally(onFinally);
        }
        else {
            onInvoked?.("sync");
            if (!hadSyncError) {
                onResolve?.();
                onHasResult?.(true);
                onHasError?.(false);
            }
            else {
                onReject?.();
                onHasResult?.(false);
                onHasError?.(true);
            }
            onReturnValue?.(promiseOrReturn);
            onPending?.(pending = false);
            onFinally();
        }
    };
    // lodash uses "in" instead of checking for `undefined`...
    const lodashOptions = {
        leading: !wait,
        trailing: true
    };
    if (throttle) {
        if (wait == null || (wait < throttle))
            wait = throttle;
        lodashOptions.maxWait = throttle;
    }
    const syncDebounced = debounce(() => {
        // 3. Instead of calling the sync version of our function directly, we allow it to be throttled/debounced (above)
        // and now that we're done throttling/debouncing, notify anyone who cares of this fact (below).
        onSyncDebounce?.(syncDebouncing = false);
        if (!pending) {
            // 4a. If this is the first invocation, or if we're not still waiting for a previous invocation to finish its async call,
            // then we can just go ahead and run the debounced version of our function.
            console.assert(currentCapture != Unset);
            sync(...currentCapture);
        }
        else {
            // 4b. If we were called while still waiting for the (or a) previous invocation to finish,
            // then we'll need to delay this one. When that previous invocation finishes, it'll check
            // to see if it needs to run again, and it will use these new captured arguments from step 2.
            onAsyncDebounce?.(asyncDebouncing = true);
        }
    }, wait || undefined, lodashOptions);
    return {
        syncOutput: (...args) => {
            // 1. Someone just called the sync version of our async function.
            // 2. We capture the arguments in a way that won't become stale if/when the function is called with a (possibly seconds-long) delay (e.g. event.currentTarget.value on an <input> element).
            currentCapture = capture?.(...args) ?? [];
            onSyncDebounce?.(syncDebouncing = true);
            syncDebounced();
        },
        flushSyncDebounce: () => {
            syncDebounced.flush();
        },
        cancelSyncDebounce: () => {
            syncDebounced.cancel();
        }
    };
}

function identityCapture(...t) { return t; }
const AsyncFunction = ((async function () { }).constructor);
/**
 * Given an async function, returns a function that's suitable for non-async APIs,
 * along with other information about the current run's status.
 *
 * @see {@link useAsyncHandler} for a version that's specialized for DOM event handlers.
 *
 * @remarks When called multiple times in quick succession, (i.e. before the handler has finished),
 * this works like Lodash's `throttle` function with the `wait` option always
 * set to however long the handler takes to complete. A second call to the sync function will be
 * throttled until the first call has finished. The return value of the function is the result
 * of the previous invocation, or `undefined` on the first call.
 *
 * The handler is only ever delayed if one is currently running, so, e.g. for iOS touch events the
 * first call happens in the same event handler (which means things like calls to `element.focus()`
 * will work as intended, since that fails when the event is "split up")
 *
 * Finally, because the sync handler may be invoked on a delay, any property references on the arguments
 * provided might be stale by the time it's actually invoked (e.g. accessing `event.currentTarget.checked`
 * is not stable across time because it's a "live" value -- you almost always want the value that it
 * had at the original time the handler was called). The `capture` option allows you to save that kind of
 * dynamic data at the time it runs; the `AP` and `SP` type parameters likewise control
 * the parameters the async handler and sync handler expect respectively.
 *
 * {@include } {@link UseAsyncParameters}
 *
 * @param asyncHandler - The async function to make sync
 * @param options - @see {@link UseAsyncParameters}
 */
function useAsync(asyncHandler, options) {
    return useMonitoring(function useAsync() {
        // Things related to current execution
        // Because we can both return and throw undefined, 
        // we need separate state to track their existence too.
        //
        // We keep, like, a *lot* of render-state, but it only ever triggers a re-render
        // when we start/stop an async action.
        const [pending, setPending, _getPending] = useState(false);
        const [result, setResult, _getResult] = useState(undefined);
        const [error, setError, _getError] = useState(undefined);
        const [hasError, setHasError, _getHasError] = useState(false);
        const [hasResult, setHasResult, _getHasResult] = useState(false);
        const [asyncDebouncing, setAsyncDebouncing] = useState(false);
        const [syncDebouncing, setSyncDebouncing] = useState(false);
        const [invocationResult, setInvocationResult] = useState(asyncHandler instanceof AsyncFunction ? "async" : null);
        // Keep track of this for the caller's sake -- we don't really care.
        const [runCount, setRunCount] = useState(0);
        const [settleCount, setSettleCount] = useState(0);
        const [resolveCount, setResolveCount] = useState(0);
        const [rejectCount, setRejectCount] = useState(0);
        const incrementCallCount = useCallback(() => { setRunCount(c => c + 1); }, []);
        const incrementResolveCount = useCallback(() => { setResolveCount(c => c + 1); }, []);
        const incrementRejectCount = useCallback(() => { setRejectCount(c => c + 1); }, []);
        const incrementFinallyCount = useCallback(() => { setSettleCount(c => c + 1); }, []);
        /* eslint-disable prefer-const */
        let { throttle, debounce, capture: captureUnstable } = (options ?? {});
        const captureStable = useStableCallback(captureUnstable ?? identityCapture);
        const asyncHandlerStable = useStableCallback(asyncHandler ?? identity);
        const { flushSyncDebounce, syncOutput, cancelSyncDebounce } = useMemo(() => {
            return asyncToSync({
                asyncInput: asyncHandlerStable,
                capture: captureStable,
                onAsyncDebounce: setAsyncDebouncing,
                onError: setError,
                onPending: setPending,
                onReturnValue: setResult,
                onSyncDebounce: setSyncDebouncing,
                onHasError: setHasError,
                onHasResult: setHasResult,
                onInvoked: setInvocationResult,
                onInvoke: incrementCallCount,
                onFinally: incrementFinallyCount,
                onReject: incrementRejectCount,
                onResolve: incrementResolveCount,
                throttle: options?.throttle ?? undefined,
                wait: options?.debounce ?? undefined
            });
        }, [throttle, debounce]);
        useEffect(() => {
            return () => cancelSyncDebounce();
        }, [cancelSyncDebounce]);
        return {
            syncHandler: syncOutput,
            pending,
            result,
            error,
            hasError: hasError || false,
            hasResult: hasResult || false,
            resolveCount,
            rejectCount,
            settleCount,
            debouncingAsync: asyncDebouncing,
            debouncingSync: syncDebouncing,
            invocationResult,
            callCount: runCount,
            flushDebouncedPromise: flushSyncDebounce
        };
    });
}

/**
 * Given an asynchronous event handler, returns a synchronous one that works on the DOM,
 * along with some other information related to the current state.
 * Does not modify any props.
 *
 * @remarks Note that because the handler you provide may be called with a delay, and
 * because the `value` of, e.g., an `<input>` element will likely have changed by the
 * time the delay is over, a `capture` function is necessary in order to
 * save the relevant information from the DOM at call-time. Any other simple event data,
 * like `mouseX` or `shiftKey` can stay on the event itself and don't
 * need to be captured &ndash; it's never stale.
 *
 * The handler is automatically throttled to only run one at a time.
 * If the handler is called, and then before it finishes, is called again,
 * it will be put on hold until the current one finishes, at which point
 * the second one will run.  If the handler is called a third time before
 * the first has finished, it will *replace* the second, so only the most
 * recently called iteration of the handler will run.
 *
 *
 * You may optionally *also* specify debounce and throttle parameters that wait until the
 * synchronous handler has not been called for the specified number of
 * milliseconds, at which point we *actually* run the asynchronous handler
 * according to the logic in the previous paragraph. This is in
 * *addition* to throttling the handler, and does not replace that behavior.
 *
 *
 * @example
 * General use
 * ```tsx
 * const asyncHandler = async (value: number, e: Event) => {
 *     [...] // Ex. send to a server and setState when done
 * };
 * const {
 *     // A sync version of asyncHandler
 *     syncHandler,
 *     // True while the handler is running
 *     pending,
 *     // The error thrown, if any
 *     error,
 *     // Show this value while the operation's pending
 *     currentCapture,
 *     // And others, see `UseAsyncHandlerReturnType`
 *     ...rest
 * } = useAsyncHandler<HTMLInputElement>()({
 *     asyncHandler,
 *     // Pass in the capture function that saves event data
 *     // from being stale.
 *     capture: e => {
 *         // `capture` can have side-effects because
 *         // it's called exactly once per invocation
 *         e.preventDefault();
 *
 *         // Save this value so that it's never stale
 *         return e.currentTarget.valueAsNumber;
 *     }
 * });
 *
 * const onInput = pending? null : syncHandler;
 * ```
 *
 * {@include } {@link UseAsyncHandlerParameters}
 *
 * @see useAsync A more general version of this hook that can work with any type of handler, not just DOM event handlers.
 */
function useAsyncHandler({ asyncHandler, capture: originalCapture, ...restAsyncOptions }) {
    return useMonitoring(function useAsyncHandler() {
        // We need to differentiate between "nothing captured yet" and "`undefined` was captured"
        const [currentCapture, setCurrentCapture, getCurrentCapture] = useState(undefined);
        const [hasCapture, setHasCapture] = useState(false);
        // Wrap around the normal `useAsync` `capture` function to also
        // keep track of the last value the user actually input.
        // 
        // Without this there's no way to re-render the control with
        // it being both controlled and also having the "correct" value,
        // and at any rate also protects against sudden exceptions reverting
        // your change out from under you.
        const capture = useStableCallback((e) => {
            const captured = originalCapture(e);
            setCurrentCapture(captured);
            setHasCapture(true);
            return [captured, e];
        });
        return {
            getCurrentCapture,
            currentCapture,
            hasCapture,
            ...useAsync(asyncHandler, { capture, ...restAsyncOptions })
        };
    });
}

function pressLog(...args) {
    if (globalThis.__log_press_events)
        console.log(...args);
}
function supportsPointerEvents() {
    return ("onpointerup" in globalThis);
}
// All our checking for pointerdown and up doesn't mean anything if it's
// a programmatic onClick event, which could come from any non-user source.
// We want to handle those just like GUI clicks, but we don't want to double-up on press events.
// So if we handle a press from pointerup, we ignore any subsequent click events, at least for a tick.
//
// Also, this is global to handle the following situation:
// A button is tapped
// Some heavy rendering-logic is done and the page jumps around
// Now there's a new button underneath the user's finger
// And it receives a click event just cause.
// ...at the end of the day, globals are the best way to coordinate this simple state between disparate components.
// But TODO because it doesn't work well it this library is used multiple times on the same page.
let justHandledManualClickEvent = false;
let manualClickTimeout1 = null;
let manualClickTimeout2 = null;
function onHandledManualClickEvent() {
    pressLog("manual-click");
    justHandledManualClickEvent = true;
    if (manualClickTimeout1 != null)
        clearTimeout(manualClickTimeout1);
    if (manualClickTimeout2 != null)
        clearTimeout(manualClickTimeout2);
    // The timeout is somewhat generous here because when the "emulated" click event finally comes along
    // (i.e. after all the pointer events have finished) it will also clear this. 
    // This is mostly as a backup safety net.
    manualClickTimeout1 = setTimeout(() => {
        pressLog("manual-click halfway");
        // This is split into two halves for task-ordering reasons.
        // Namely we'd like one of these to be scheduled **after** some amount of heavy work was scheduled
        // Because the task queue is FIFO at **scheduling** time, not at the **scheduled** time.
        manualClickTimeout2 = setTimeout(() => {
            pressLog("manual-click clear");
            justHandledManualClickEvent = false;
        }, 50);
    }, 200);
}
getDocument()?.addEventListener?.("click", (e) => {
    if (justHandledManualClickEvent) {
        justHandledManualClickEvent = false;
        manualClickTimeout1 != null && clearTimeout(manualClickTimeout1);
        manualClickTimeout2 != null && clearTimeout(manualClickTimeout2);
        e.preventDefault();
        e.stopPropagation();
    }
}, { capture: true });
/**
 * Adds the necessary event handlers to create a "press"-like event for
 * any element, whether it's a native &lt;button&gt; or regular &lt;div&gt;,
 * and allows for a "long press" that can be used to,
 * e.g., show a tooltip *instead* of activating a press.
 *
 * @remarks
 * Notably, the following cases are covered:
 * ```md-literal
 * * The target element is properly focused, even on iOS Safari (*especially* on iOS Safari)
 * * Double-clicks won't select text, it just presses the button twice.
 * * Text selection that happens to end/start with this element won't invoke a press.
 * * The `enter` key immediately invokes a press (by default just once until pressed again), while the `space` key invokes it when released, if focus hasn't moved away from the button.
 * * Haptic feedback (on, like, the one browser combination that supports it &mdash; this can be disabled app-wide with `setButtonVibrate`)
 * ```
 *
 * In addition, returns a "more accurate" CSS `active` and `hover`; more accurate
 * in that `hover` won't mess up mobile devices that see `hover` and mess up your click events,
 * and in that `active` accurately displays when a press would occur or not.
 *
 * {@include } {@link setPressVibrate}
 *
 * @compositeParams
 */
function usePress(args) {
    return useMonitoring(function usePress() {
        const { refElementReturn: { getElement }, pressParameters: { focusSelf, onPressSync, allowRepeatPresses, longPressThreshold, excludeEnter: ee, excludePointer: ep, excludeSpace: es, onPressingChange: opc } } = args;
        const excludeEnter = useStableCallback(ee ?? returnFalse);
        const excludeSpace = useStableCallback(es ?? returnFalse);
        const excludePointer = useStableCallback(ep ?? returnFalse);
        const onPressingChange = useStableCallback(opc ?? noop);
        const [getIsPressing, setIsPressing] = usePassiveState(onPressingChange, returnFalse);
        const hasPressEvent = (onPressSync != null);
        /**
         * Explanations:
         *
         * It would be nice to just use pointer events for everything,
         * but 2019 iOS devices can't run those, amazingly enough, and
         * that's still pretty recent. So we need to have backup touch
         * events.
         *
         * Why not just use click? Because at the very, very least,
         * we also need to be able to handle space and enter key presses,
         * and that needs to work regardless of if it's a <button> or not.
         *
         * Also, we do still use click, because programmatic clicks can come
         * from anything from ATs to automation scripts, and we don't want
         * to break those. But since we are listening for pointer/touch events,
         * and we can't prevent the subsequent click event from happening,
         * and we **don't want to duplicate press events**, we need to
         * ignore click events that happen in the same tick as a handled press event.
         *
         * When we do a pointermove/touchmove, we check to see if we're still hovering over the element
         * for more accurate "active"/hover detection.
         *
         * "But you have a pointerleave event, why check for hovering during pointermove?"
         *
         * Because for some reason, pointerleave (etc.) aren't fired until *after* pointerup, no matter what.
         *
         */
        const [longPress, setLongPress] = useState(null);
        const [waitingForSpaceUp, setWaitingForSpaceUp, getWaitingForSpaceUp] = useState(false);
        const [pointerDownStartedHere, setPointerDownStartedHere, getPointerDownStartedHere] = useState(false);
        const [hovering, setHovering, getHovering] = useState(false);
        const onTouchStart = useStableCallback((e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsPressing(true, e);
            setPointerDownStartedHere(true);
            setHovering(true);
            setLongPress(false);
            const element = getElement();
            if (element)
                focusSelf(element);
        });
        const onTouchMove = useCallback((e) => {
            pressLog("touchmove", e);
            e.preventDefault();
            e.stopPropagation();
            const element = getElement();
            const touch = e.touches[0];
            // Be as generous as possible with touch events by checking all four corners of the radius too
            const offsets = [
                [0, 0],
                [-touch.radiusX || 0, -touch.radiusY || 0],
                [+touch.radiusX || 0, -touch.radiusY || 0],
                [-touch.radiusX || 0, +touch.radiusY || 0],
                [+touch.radiusX || 0, +touch.radiusY || 0]
            ];
            let hoveringAtAnyPoint = false;
            for (const [x, y] of offsets) {
                const elementAtTouch = getDocument()?.elementFromPoint((touch?.clientX ?? 0) + x, (touch?.clientY ?? 0) + y);
                hoveringAtAnyPoint ||= !!elementAtTouch && (element?.contains(elementAtTouch) ?? false);
            }
            setIsPressing(hoveringAtAnyPoint && getPointerDownStartedHere(), e);
            setHovering(hoveringAtAnyPoint);
        }, []);
        const preventClickEventsOnIosSafari = useCallback((e) => {
            e.preventDefault();
            e.stopPropagation();
        }, []);
        const onTouchEnd = useCallback((e) => {
            pressLog("touchend", e);
            e.preventDefault();
            e.stopPropagation();
            const hovering = getHovering();
            const pointerDownStartedHere = getPointerDownStartedHere();
            if (pointerDownStartedHere && hovering) {
                onHandledManualClickEvent();
                handlePress(e);
            }
            setWaitingForSpaceUp(false);
            setHovering(false);
            setPointerDownStartedHere(false);
            setIsPressing(false, e);
        }, []);
        const onPointerDown = useStableCallback((e) => {
            pressLog("pointerdown", e);
            if (!excludePointer()) {
                if ((e.buttons & 1)) {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsPressing(true, e);
                    setPointerDownStartedHere(true);
                    setHovering(true);
                    setLongPress(false);
                    const element = getElement();
                    if (element)
                        focusSelf(element);
                }
            }
        });
        const onPointerMove = useStableCallback((e) => {
            pressLog("pointermove", e);
            let listeningForPress = getPointerDownStartedHere();
            // If we're hovering over this element and not holding down the mouse button (or whatever other primary button)
            // then we're definitely not in a press anymore (if we could we'd just wait for onPointerUp, but it could happen outside this element)
            if (!(e.buttons & 1))
                setPointerDownStartedHere(listeningForPress = false);
            if (listeningForPress) {
                const element = getElement();
                // Note: elementFromPoint starts reasonably expensive on a decent computer when on the order of 500 or so elements,
                // so we only test for hovering while actively attempting to detect a press
                const elementAtPointer = getDocument()?.elementFromPoint(e.clientX, e.clientY);
                const hovering = element == elementAtPointer || (!!elementAtPointer && element?.contains(elementAtPointer)) || false;
                setHovering(hovering);
                setIsPressing(hovering && getPointerDownStartedHere(), e);
            }
        });
        const onPointerUp = useCallback((e) => {
            pressLog("pointerup", e);
            const hovering = getHovering();
            const pointerDownStartedHere = getPointerDownStartedHere();
            if (!excludePointer()) {
                if (pointerDownStartedHere && hovering) {
                    onHandledManualClickEvent();
                    handlePress(e);
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
            setWaitingForSpaceUp(false);
            setHovering(false);
            setPointerDownStartedHere(false);
            setLongPress(false);
            setIsPressing(false, e);
        }, []);
        const onPointerEnter = useCallback((_e) => {
            pressLog("pointerenter", _e);
            setHovering(true);
        }, []);
        const onPointerLeave = useCallback((_e) => {
            pressLog("pointerleave", _e);
            setHovering(false);
            setLongPress(false);
        }, []);
        useTimeout({
            callback: () => {
                const element = getElement();
                setLongPress(pointerDownStartedHere && getHovering());
                if (element && pointerDownStartedHere && getHovering()) {
                    focusSelf(element);
                    if (longPressThreshold) {
                        setWaitingForSpaceUp(false);
                        setHovering(false);
                        setPointerDownStartedHere(false);
                    }
                }
            },
            timeout: longPressThreshold ?? null,
            triggerIndex: longPress ? true : (pointerDownStartedHere && getHovering())
        });
        const handlePress = useStableCallback((e) => {
            pressLog("handlepress", e);
            setWaitingForSpaceUp(false);
            setHovering(false);
            setPointerDownStartedHere(false);
            setLongPress(null);
            if (onPressSync) {
                // Note: The element is focused here because of iOS Safari.
                //
                // It's always iOS Safari.
                //
                // iOS Safari (tested on 12) downright refuses to allow 
                // elements to be manually focused UNLESS it happens within
                // an event handler like this.  It also doesn't focus
                // buttons by default when clicked, tapped, etc.
                //
                // If it becomes problematic that button-likes explicitly become
                // focused when they are pressed, then an alternative solution for
                // the question of "how do menu buttons keep their menus open"
                // and other focus-related nonsense needs to be figured out.
                //
                // For iOS Safari.
                //
                const element = getElement();
                if (element)
                    focusSelf(element);
                // Whatever the browser was going to do with this event,
                // forget it. We're turning it into a "press" event.
                e.preventDefault();
                // Also stop anyone else from listening to this event,
                // since we're explicitly handling it.
                // (Notably, this allows labels to wrap inputs, with them
                // both having press event handlers, without double-firing)
                e.stopPropagation();
                // Haptic feedback for this press event
                try {
                    // The default implementation doesn't throw,
                    // but we should guard against user implementations that could.
                    pulse();
                }
                finally {
                    // Actually call our handler.
                    onPressSync(e);
                }
            }
        });
        const onKeyDown = useStableCallback((e) => {
            pressLog("keydown", e);
            if (onPressSync) {
                if (e.key == " " && !excludeSpace()) {
                    // We don't actually activate it on a space keydown
                    // but we do preventDefault to stop the page from scrolling.
                    setWaitingForSpaceUp(true);
                    setIsPressing(true, e);
                    e.preventDefault();
                }
                if (e.key == "Enter" && !excludeEnter() && (!e.repeat || (allowRepeatPresses ?? false))) {
                    setIsPressing(true, e);
                    handlePress(e);
                    requestAnimationFrame(() => {
                        setIsPressing(false, e);
                    });
                }
            }
        });
        const onKeyUp = useStableCallback((e) => {
            pressLog("keyup", e);
            const waitingForSpaceUp = getWaitingForSpaceUp();
            if (waitingForSpaceUp && e.key == " " && !excludeSpace()) {
                handlePress(e);
                setIsPressing(false, e);
            }
        });
        const onClick = useStableCallback((e) => {
            pressLog("click", e);
            // We should rarely get here. Most of the events do `preventDefault` which stops click from being called,
            // but we can still get here if the actual `click()` member is called, for example, and we need to react appropriately.
            const element = getElement();
            if (onPressSync) {
                if (e.detail > 1) {
                    if ("stopImmediatePropagation" in e)
                        e.stopImmediatePropagation();
                    e.stopPropagation();
                }
                else {
                    // Listen for "programmatic" click events.
                    if (justHandledManualClickEvent) {
                        // This is probably the click event after the end of all the pointerdownupleavemoveenter soup.
                        // Clear the flag a little early.
                        justHandledManualClickEvent = false;
                    }
                    else {
                        console.assert(justHandledManualClickEvent == false, "Logic???");
                        // Ignore stray click events that were't fired ON OR WITHIN on this element
                        // ("on or within" because sometimes a button's got a label that's a different element than the button)
                        if ((e.target && element?.contains(e.target))) {
                            if (getHovering()) ;
                            else {
                                // Intentional, for now. Programmatic clicks shouldn't happen in most cases.
                                // TODO: Remove this when I'm confident stray clicks won't be handled.
                                /* eslint-disable no-debugger */
                                debugger;
                                console.log("onclick was fired and will be handled as it doesn't look like it came from a pointer event", e);
                                console.assert(justHandledManualClickEvent == false, "Logic???");
                            }
                            setIsPressing(true, e);
                            requestAnimationFrame(() => {
                                setIsPressing(false, e);
                            });
                            handlePress(e);
                        }
                    }
                }
            }
        });
        const onFocusOut = useStableCallback((e) => {
            pressLog("focusout", e);
            setWaitingForSpaceUp(false);
            setIsPressing(false, e);
        });
        const p = supportsPointerEvents();
        return {
            pressReturn: {
                pressing: ((pointerDownStartedHere && hovering) || waitingForSpaceUp || false),
                getIsPressing,
                longPress
            },
            props: {
                onKeyDown,
                onKeyUp,
                onTouchStart: !hasPressEvent ? undefined : (!p ? onTouchStart : undefined),
                onTouchCancel: !hasPressEvent ? undefined : (!p ? onTouchEnd : undefined),
                onTouchMove: !hasPressEvent ? undefined : (!p ? onTouchMove : undefined),
                onTouchEnd: !hasPressEvent ? undefined : (!p ? onTouchEnd : preventClickEventsOnIosSafari),
                onPointerDown: !hasPressEvent ? undefined : (p ? onPointerDown : undefined),
                onPointerCancel: !hasPressEvent ? undefined : (p ? onPointerDown : undefined),
                onPointerMove: !pointerDownStartedHere || !hasPressEvent ? undefined : (p ? onPointerMove : undefined),
                onPointerUp: !hasPressEvent ? undefined : (p ? onPointerUp : undefined),
                onPointerEnter: !hasPressEvent ? undefined : (p ? onPointerEnter : undefined),
                onPointerLeave: !hasPressEvent ? undefined : (p ? onPointerLeave : undefined),
                [onfocusout]: onFocusOut,
                onClick
            },
        };
    });
}
function usePressAsync({ asyncHandlerParameters: { debounce, throttle, asyncHandler }, pressParameters, refElementReturn }) {
    const asyncHandlerReturn = useAsyncHandler({ asyncHandler, capture: noop, debounce, throttle });
    const { pressReturn, props } = usePress({ pressParameters: { onPressSync: asyncHandlerReturn.syncHandler, ...pressParameters }, refElementReturn });
    return {
        asyncHandlerReturn,
        pressReturn,
        props
    };
}
let pulse = (("vibrate" in navigator) && (navigator.vibrate instanceof Function)) ? (() => navigator.vibrate(10)) : (() => { });
/**
 * This function can be used to enable/disable button vibration pulses on an app-wide scale.
 *
 *
 * @param func - The function to run when a button is tapped. (Default is `() => navigator.vibrate(10)` in browsers that support it, a noop otherwise)
 */
function setPressVibrate(func) {
    pulse = func;
}

/**
 * Besides just generating something for the `id` prop, also gives you the props to use on another element if you'd like (e.g. a label's `for`).
 *
 * @compositeParams
 */
function useRandomId({ randomIdParameters: { prefix, otherReferencerProp } }) {
    return useMonitoring(function useRandomId() {
        const id = (prefix + useId());
        useEnsureStability("useRandomId", prefix, id);
        const referencerElementProps = useRef(otherReferencerProp == null ? {} : { [otherReferencerProp]: id });
        const sourceElementProps = useRef({ id });
        useEnsureStability("useRandomIdReferencerElement", otherReferencerProp);
        return {
            propsReferencer: referencerElementProps.current,
            propsSource: sourceElementProps.current,
            randomIdReturn: {
                id: id
            }
        };
    });
}

/**
 * While `useRandomId` allows the referencer to use the source's ID, sometimes you also want the reverse too (e.g. I `aria-label` you, you `aria-controls` me. That sort of thing).
 *
 * @compositeParams
 */
function useRandomDualIds({ randomIdInputParameters, randomIdLabelParameters, }) {
    return useMonitoring(function useRandomDualIds() {
        const { randomIdReturn: randomIdInputReturn, propsReferencer: propsLabelAsReferencer, propsSource: propsInputAsSource } = useRandomId({ randomIdParameters: randomIdInputParameters });
        const { randomIdReturn: randomIdLabelReturn, propsReferencer: propsInputAsReferencer, propsSource: propsLabelAsSource } = useRandomId({ randomIdParameters: randomIdLabelParameters });
        return {
            propsLabel: useMergedProps(propsLabelAsReferencer, propsLabelAsSource),
            propsInput: useMergedProps(propsInputAsReferencer, propsInputAsSource),
            randomIdInputReturn,
            randomIdLabelReturn
        };
    });
}

/**
 * Allows adding/removing a CSS class to the `window`, `document`, or other global `HTMLElement`.
 *
 * @param className - The class (as a string) to be adding/removing
 * @param active - If `true`, the default, then the class is added to the element. If `false`, it's removed.
 * @param element - The element to affect. By default, it's the root `<html>` element
 */
function useDocumentClass(className, active, element) {
    return useMonitoring(function useDocumentClass() {
        element ??= getDocument()?.documentElement;
        className = clsx(className);
        useEffect(() => {
            if (element) {
                if (active !== false) {
                    element.classList.add(className);
                    return () => element.classList.remove(className);
                }
            }
        }, [className, active, element]);
    });
}

/**
 * Allows an element to start a drag operation.
 *
 * @remarks
 * {@include } {@link UseDraggableParameters}
 * {@include } {@link UseDraggableReturnType}
 */
function useDraggable({ effectAllowed, data, dragImage, dragImageXOffset, dragImageYOffset }) {
    return useMonitoring(function useDraggable() {
        const [dragging, setDragging, getDragging] = useState(false);
        const [lastDropEffect, setLastDropEffect, getLastDropEffect] = useState(null);
        const onDragStart = (e) => {
            //e.preventDefault();
            setDragging(true);
            if (e.dataTransfer) {
                e.dataTransfer.effectAllowed = (effectAllowed ?? "all");
                if (dragImage)
                    e.dataTransfer.setDragImage(dragImage, dragImageXOffset ?? 0, dragImageYOffset ?? 0);
                const entries = Object.entries(data);
                for (const [mimeType, data] of entries) {
                    e.dataTransfer.setData(mimeType, data);
                }
            }
        };
        const onDragEnd = (e) => {
            e.preventDefault();
            setDragging(false);
            if (e.dataTransfer) {
                if (e.dataTransfer.dropEffect != "none") {
                    setLastDropEffect(e.dataTransfer.dropEffect);
                }
                else {
                    setLastDropEffect(null);
                }
            }
        };
        // Return both the element and the hook that modifies 
        // the props and allows us to actually find the element
        const ret = {
            propsUnstable: {
                draggable: true,
                onDragStart,
                onDragEnd
            },
            dragging,
            getDragging,
            lastDropEffect,
            getLastDropEffect
        };
        return ret;
    });
}

class DroppableFileError extends Error {
    fileName;
    errorType;
    constructor(fileName, base) {
        super(base?.message ?? "An unspecified error occurred reading the file.");
        this.fileName = fileName;
        this.errorType = base?.name;
    }
}
/**
 * Allows an element to start a drag operation.
 *
 * @remarks
 * {@include } {@link UseDroppableParameters}
 * {@include } {@link UseDroppableReturnType}
 */
function useDroppable({ effect }) {
    return useMonitoring(function useDroppable() {
        const [filesForConsideration, setFilesForConsideration] = useState(null);
        const [stringsForConsideration, setStringsForConsideration] = useState(null);
        const [droppedFiles, setDroppedFiles] = useState(null);
        const [droppedStrings, setDroppedStrings] = useState(null);
        const [dropError, setDropError] = useState(undefined);
        // All the promises generated from the drop events.
        // Used to process multiple drop events in succession
        const dropPromisesRef = useRef([]);
        const [currentPromiseIndex, setCurrentPromiseIndex, getCurrentPromiseIndex] = useState(-1);
        const [promiseCount, setPromiseCount, getPromiseCount] = useState(0);
        // Any time we add a new promise, if there's no current promise running, we need to start one.
        // If there is one, then we don't need to do anything, since it runs the same check.
        useEffect(() => {
            const currentPromiseIndex = getCurrentPromiseIndex();
            const promiseCount = getPromiseCount();
            if (promiseCount > 0) {
                if ((currentPromiseIndex + 1) < promiseCount) {
                    setCurrentPromiseIndex(i => ++i);
                }
            }
        }, [promiseCount]);
        // Anytime our current promise changes,
        // wait for it to finish, then set our state to its result.
        // Finally, check to see if there are anymore promises.
        // If there are, then increase currentPromiseCount,
        // which will trigger this again.
        //
        // This shouldn't happen *often*, but maybe in the case of
        // individually dropping a bunch of large files or something.
        useEffect(() => {
            if (currentPromiseIndex >= 0) {
                const currentPromise = dropPromisesRef.current[currentPromiseIndex];
                currentPromise.then((info) => {
                    if (info !== null) {
                        const { files, strings } = info;
                        setDroppedFiles(files);
                        setDroppedStrings(strings);
                    }
                    // Now that we're done, are there more promises in the queue?
                    const currentPromiseIndex = getCurrentPromiseIndex();
                    const promiseCount = getPromiseCount();
                    if ((currentPromiseIndex + 1) < promiseCount) {
                        // Since this promise has started, more have been added.
                        // Run this effect again.
                        setCurrentPromiseIndex(i => ++i);
                    }
                });
            }
        }, [currentPromiseIndex]);
        // Handle collecting the current file metadata or MIME types.
        const onDragEnter = useStableCallback((e) => {
            e.preventDefault();
            if (e.dataTransfer) {
                // Is there a default? I can't find one anywhere.
                e.dataTransfer.dropEffect = (effect ?? "move");
                const newMimeTypes = new Set();
                const newFiles = new Array();
                for (const item of e.dataTransfer?.items ?? []) {
                    const { kind, type } = item;
                    if (kind === "string") {
                        newMimeTypes.add(type);
                    }
                    else if (kind === "file") {
                        newFiles.push({ type: item.type });
                    }
                }
                setFilesForConsideration(newFiles);
                setStringsForConsideration(newMimeTypes);
            }
        });
        // Handle resetting the current file metadata or MIME types
        const onDragLeave = useStableCallback((e) => {
            e.preventDefault();
            setFilesForConsideration(null);
            setStringsForConsideration(null);
        });
        // Boilerplate, I guess
        const onDragOver = useStableCallback((e) => {
            e.preventDefault();
        });
        // Handle getting the drop data asynchronously
        const onDrop = useStableCallback((e) => {
            e.preventDefault();
            setFilesForConsideration(null);
            setStringsForConsideration(null);
            const allPromises = new Array();
            const dropData = {};
            const dropFile = [];
            for (const item of e.dataTransfer?.items ?? []) {
                const { kind, type } = item;
                if (kind === "string") {
                    allPromises.push((new Promise((resolve, _reject) => item.getAsString(resolve))).then(str => dropData[type] = str));
                }
                else if (kind === "file") {
                    const file = item.getAsFile();
                    if (file) {
                        allPromises.push(new Promise((resolve, reject) => {
                            const reader = new FileReader();
                            reader.onload = (_) => {
                                resolve();
                                const data = reader.result;
                                dropFile.push({ data, name: file.name, type: file.type, size: data.byteLength, lastModified: file.lastModified });
                            };
                            reader.onerror = (_) => { reject(new DroppableFileError(file.name, reader.error)); };
                            reader.onabort = (_) => { reject(new DroppableFileError(file.name, reader.error)); };
                            reader.readAsArrayBuffer(file);
                        }));
                        dropFile.push();
                    }
                }
            }
            dropPromisesRef.current.push(Promise.all(allPromises).then(() => {
                setPromiseCount(i => ++i);
                setDropError(null);
                return {
                    strings: dropData,
                    files: dropFile
                };
            }).catch(ex => {
                /* eslint-disable no-debugger */
                debugger;
                setPromiseCount(i => ++i);
                setDropError(ex);
                return null;
            }));
        });
        const propsStable = useRef({ onDragEnter, onDragLeave, onDragOver, onDrop });
        return {
            propsStable: propsStable.current,
            filesForConsideration,
            stringsForConsideration,
            droppedFiles,
            droppedStrings,
            dropError
        };
    });
}

/**
 * Allows for hiding the scroll bar of the root HTML element
 * without shifting the layout of the page by adding a few pixels
 * of padding to the root element if necessary.
 *
 * @param hideScroll - Whether the scroll bar is hidden or not (i.e. `true` to hide the scroll bar, `false` to allow it to be visible)
 */
function useHideScroll(hideScroll) {
    return useMonitoring(function useHideScroll() {
        const [getScrollbarWidth, setScrollbarWidth] = usePassiveState(null);
        const [getScrollbarHeight, setScrollbarHeight] = usePassiveState(null);
        useEffect(() => {
            const document = getDocument();
            if (hideScroll && document) {
                // When scrolling is resumed, we'll need to restore the original scroll positions
                // so we need to keep this information around
                const originalScrollTop = document.documentElement.scrollTop;
                const originalScrollLeft = document.documentElement.scrollLeft;
                // Measure the width of the page (minus the scrollbar)
                const widthWithScrollBar = document.documentElement.scrollWidth;
                const heightWithScrollBar = document.documentElement.scrollHeight;
                // Apply a class that hides the scrollbar.
                document.documentElement.classList.add("document-scroll-hidden");
                // In case multiple things are locking scroll, keep track of how many are doing that
                // (just add 1 on enable, subtract 1 on disable)
                document.documentElement.dataset["scrollHiders"] = (+(document.documentElement.dataset["scrollHiders"] || "0") + 1).toString();
                // Measure the new width without a scrollbar 
                // so we can take the difference as the scrollbar width.
                const widthWithoutScrollBar = document.documentElement.scrollWidth;
                const heightWithoutScrollBar = document.documentElement.scrollHeight;
                let scrollbarWidth = (widthWithoutScrollBar - widthWithScrollBar);
                let scrollbarHeight = (heightWithoutScrollBar - heightWithScrollBar);
                // Failsafe -- if this measuring trick does something unexpected, just ignore it
                if (scrollbarWidth > 80)
                    scrollbarWidth = 0;
                if (scrollbarHeight > 80)
                    scrollbarHeight = 0;
                // Make our measurements available as CSS properties for general use
                document.documentElement.style.setProperty("--root-scrollbar-width", `${scrollbarWidth}px`);
                document.documentElement.style.setProperty("--root-scrollbar-height", `${scrollbarHeight}px`);
                document.documentElement.style.setProperty("--root-scrollstop-top", `${originalScrollTop}px`);
                document.documentElement.style.setProperty("--root-scrollstop-left", `${originalScrollLeft}px`);
                setScrollbarWidth(scrollbarWidth);
                setScrollbarHeight(scrollbarHeight);
                return () => {
                    // Undo all the things we just did
                    document.documentElement.dataset["scrollHiders"] = (+(document.documentElement.dataset["scrollHiders"] || "0") - 1).toString();
                    if (document.documentElement.dataset["scrollHiders"] == "0") {
                        // If we were the last scroll-locking thing to stop, then remove the class that stops scrolling.
                        document.documentElement.removeAttribute("data-scroll-hiders");
                        document.documentElement.classList.remove("document-scroll-hidden");
                        // Also, restore the original scroll position
                        // We do this by forcing the scroll behavior to not be smooth
                        // (it's instant if nothing is set to smooth, https://www.w3.org/TR/cssom-view/#scrolling),
                        // scrolling, then restoring the original scroll behavior 
                        // (which was probably already auto anyway, but just to be safe)
                        const originalScrollBehavior = document.documentElement.style.scrollBehavior;
                        document.documentElement.style.scrollBehavior = "auto";
                        document.documentElement.scrollTo({ top: originalScrollTop, left: originalScrollLeft, behavior: "auto" });
                        document.documentElement.style.scrollBehavior = originalScrollBehavior;
                    }
                };
            }
        }, [hideScroll]);
        return { getScrollbarWidth, getScrollbarHeight };
    });
}

let templateElement = null;
function htmlToElement(parent, html) {
    const document = parent.ownerDocument;
    templateElement ??= document.createElement("template");
    templateElement.innerHTML = html.trim(); // TODO: Trim ensures whitespace doesn't add anything, but with a better explanation of why
    return templateElement.content.firstChild;
}
/**
 * Easy access to an HTMLElement that can be controlled imperatively.
 *
 * The HTMLElement rendered is controlled by the `tag` prop (e.g. "span", "div").
 *
 * The `handle` prop should be e.g. `useRef<ImperativeHandle<HTMLDivElement>>(null)`
 */
const ImperativeElement = memo(forwardRef(ImperativeElementU));
/**
 * Allows controlling an element's `class`, `style`, etc. with functions like `setStyle` in addition to being reactive to incoming props.
 *
 * @remarks If the component is re-rendered after the element is modified in some way, those changes are remembered and included in the returned `props` that are meant to be spread to the element in question.
 *
 * This is extremely useful for integrating with 3rd party libraries that expect to be able to directly manipulate the DOM because it keeps everything syncced together.
 *
 * @compositeParams
 */
function useImperativeProps({ refElementReturn: { getElement } }) {
    return useMonitoring(function useImperativeProps() {
        const currentImperativeProps = useRef({ className: new Set(), style: {}, children: null, html: null, others: {} });
        const hasClass = useCallback((cls) => { return currentImperativeProps.current.className.has(cls); }, []);
        const setClass = useCallback((cls, enabled) => {
            if (hasClass(cls) == !enabled) {
                getElement()?.classList[enabled ? "add" : "remove"](cls);
                currentImperativeProps.current.className[enabled ? "add" : "delete"](cls);
            }
        }, []);
        const setStyle = useCallback((prop, value) => {
            const element = getElement();
            if (element) {
                if (currentImperativeProps.current.style[prop] != value) {
                    currentImperativeProps.current.style[prop] = value;
                    if (prop.startsWith("--")) {
                        if (value != null)
                            element.style.setProperty(prop, `${value}`);
                        else
                            element.style.removeProperty(prop);
                    }
                    else {
                        element.style[prop] = value ?? "";
                    }
                }
            }
        }, []);
        const setChildren = useCallback((children) => {
            let e = getElement();
            if (e && currentImperativeProps.current.children != children) {
                currentImperativeProps.current.children = children;
                currentImperativeProps.current.html = null;
                e.textContent = children;
            }
        }, []);
        const dangerouslySetInnerHTML = useCallback((children) => {
            let e = getElement();
            if (e && currentImperativeProps.current.html != children) {
                currentImperativeProps.current.children = null;
                currentImperativeProps.current.html = children;
                e.innerHTML = children;
            }
        }, []);
        const dangerouslyAppendHTML = useCallback((children) => {
            let e = getElement();
            if (e && children) {
                const newChild = htmlToElement(e, children);
                console.assert((newChild && newChild instanceof Node));
                if (newChild && newChild instanceof Node) {
                    currentImperativeProps.current.children = null;
                    currentImperativeProps.current.html ||= "";
                    currentImperativeProps.current.html += children;
                    e.appendChild(newChild);
                    return newChild;
                }
            }
            return null;
        }, []);
        const getAttribute = useCallback((prop) => {
            return currentImperativeProps.current.others[prop];
        }, []);
        const setAttribute = useCallback((prop, value) => {
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
        const setEventHandler = useCallback((type, handler, options) => {
            const element = getElement();
            const mappedKey = EventMapping[type];
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
        }, []);
        return {
            imperativePropsReturn: useRef({
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
            props: useMergedProps({ className: [...currentImperativeProps.current.className].join(" "), style: currentImperativeProps.current.style }, currentImperativeProps.current.html ? { dangerouslySetInnerHTML: { __html: currentImperativeProps.current.html } } : {}, { children: currentImperativeProps.current.children }, currentImperativeProps.current.others)
        };
    });
}
function ImperativeElementU({ tag: Tag, handle, ...props }, ref) {
    const { propsStable, refElementReturn } = useRefElement({ refElementParameters: {} });
    const { props: imperativeProps, imperativePropsReturn: imperativeHandle } = useImperativeProps({ refElementReturn });
    useImperativeHandle(handle, () => imperativeHandle);
    return (createElement(Tag, useMergedProps(propsStable, imperativeProps, props, { ref })));
}

const Table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
function base64(value) {
    return Table[value];
}
function random6Bits() {
    return Math.floor(Math.random() * 0b1000000);
}
function random64Bits() {
    return [random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits()];
}
/**
 * Returns a randomly-generated ID with an optional prefix.
 * Note that if the prefix is *explicitly* set to "", then
 * IDs that are not valid under HTML4 may be generated. Oh no.
 *
 *
 * (This is here, in this particular file, to avoid circular dependencies
 * because useBeforeLayoutEffect also needs random IDs for its own reasons)
 */
function generateRandomId(prefix) {
    return `${prefix ?? "id-"}${random64Bits().map(n => base64(n)).join("")}`;
}

/**
 * Very basic hook for a root-level component to use to allow any children within the whole app to push children to a portal somewhere.
 *
 * @remarks Returns the portal (as `children`, and functions to add, remove, or update a child to the portaled area)
 *
 * TODO: Can't push a child until after the very first `useLayoutEffect`
 *
 * {@include } {@link UsePortalChildrenParameters}
 */
function usePortalChildren({ target }) {
    return useMonitoring(function usePortalChildren() {
        const [pushChild, setPushChild] = useState(null);
        const [updateChild, setUpdateChild] = useState(null);
        const [removeChild, setRemoveChild] = useState(null);
        const pushChildStable = useStableCallback((child) => {
            return pushChild?.(child) ?? -1;
        });
        const updateChildStable = useStableCallback((index, child) => {
            return updateChild?.(index, child);
        });
        const removeChildStable = useStableCallback((index) => {
            return removeChild?.(index);
        });
        const element = useMemo(() => { return target == null ? null : typeof target == "string" ? getDocument()?.getElementById(target) : target; }, [target]);
        const children = !element ? null : createPortal(createElement(PortalChildren, { setPushChild, setUpdateChild, setRemoveChild }), element);
        return {
            children: children,
            pushChild: pushChildStable,
            updateChild: updateChildStable,
            removeChild: removeChildStable,
            portalElement: element ?? null
        };
    });
}
/**
 * Implementation
 */
function PortalChildren({ setPushChild, setUpdateChild, setRemoveChild }) {
    const [children, setChildren, getChildren] = useState([]);
    const pushChild = useCallback((child) => {
        const randomKey = generateRandomId();
        let index = getChildren().length;
        setChildren(prev => ([...prev, cloneElement(child, { key: randomKey, index })]));
        return index;
    }, []);
    const updateChild = useCallback((index, child) => {
        const key = getChildren()[index]?.key;
        console.assert(!!key);
        if (key) {
            setChildren(prev => {
                let newChildren = prev.slice();
                newChildren.splice(index, 1, cloneElement(child, { key: key, index }));
                return newChildren;
            });
            return index;
        }
    }, []);
    const removeChild = useCallback((index) => {
        const key = getChildren()[index]?.key;
        console.assert(!!key);
        if (key) {
            setChildren(prev => {
                let newChildren = prev.slice();
                newChildren.splice(index, 1);
                return newChildren;
            });
            return index;
        }
    }, []);
    useLayoutEffect(() => { setPushChild(_ => pushChild); }, [pushChild]);
    useLayoutEffect(() => { setUpdateChild(_ => updateChild); }, [updateChild]);
    useLayoutEffect(() => { setRemoveChild(_ => removeChild); }, [removeChild]);
    return (createElement(Fragment, {}, children));
}

/**
 * Measures an element, allowing you to react to its changes in size.
 *
 * @compositeParams
 */
function useElementSize({ elementSizeParameters: { getObserveBox, onSizeChange }, refElementParameters }) {
    return useMonitoring(function useElementSize() {
        const { onElementChange, onMount, onUnmount } = (refElementParameters || {});
        useEnsureStability("useElementSize", getObserveBox, onSizeChange, onElementChange, onMount, onUnmount);
        const [getSize, setSize] = usePassiveState(onSizeChange, returnNull, { debounceRendering: runImmediately, skipMountInitialization: true });
        const currentObserveBox = useRef(undefined);
        const needANewObserver = useCallback((element, observeBox) => {
            if (element) {
                const document = getDocument(element);
                const window = getWindow(element);
                const handleUpdate = (entries) => {
                    if (element.isConnected) {
                        const { clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop } = element;
                        setSize({ clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop }, entries);
                    }
                };
                if (window && ("ResizeObserver" in window)) {
                    const observer = new ResizeObserver((entries) => { handleUpdate(entries); });
                    observer.observe(element, { box: observeBox });
                    return () => observer.disconnect();
                }
                else {
                    document?.addEventListener("resize", handleUpdate, { passive: true });
                    return () => document?.removeEventListener("resize", handleUpdate);
                }
            }
        }, []);
        const { refElementReturn, ...rest } = useRefElement({
            refElementParameters: {
                onElementChange: useCallback((e, p, r) => { needANewObserver(e, getObserveBox?.()); onElementChange?.(e, p, r); }, []),
                onMount,
                onUnmount
            }
        });
        const { getElement } = refElementReturn;
        useEffect(() => {
            if (getObserveBox) {
                if (currentObserveBox.current !== getObserveBox())
                    needANewObserver(getElement(), getObserveBox());
            }
        });
        return {
            elementSizeReturn: { getSize },
            refElementReturn,
            ...rest
        };
    });
}

/**
 * Allows monitoring whichever element is/was focused most recently, regardless of if it's *currently* focused.
 *
 * @see {@link useHasCurrentFocus}, where clicking the `body` is considered losing focus.
 *
 * @compositeParams
 */
function useHasLastFocus(args) {
    return useMonitoring(function useHasLastFocus() {
        const { refElementReturn: { getElement }, activeElementParameters: { onLastActiveElementChange, ...activeElementParameters }, hasLastFocusParameters: { onLastFocusedChanged, onLastFocusedInnerChanged, ...void1 } } = args;
        useEnsureStability("useHasFocus", onLastFocusedChanged, onLastFocusedInnerChanged);
        const [getLastFocused, setLastFocused] = usePassiveState(onLastFocusedChanged, returnFalse, { debounceRendering: runImmediately, skipMountInitialization: true });
        const [getLastFocusedInner, setLastFocusedInner] = usePassiveState(onLastFocusedInnerChanged, returnFalse, { debounceRendering: runImmediately, skipMountInitialization: true });
        const { activeElementReturn } = useActiveElement({
            activeElementParameters: {
                onLastActiveElementChange: useCallback((lastActiveElement, prevLastActiveElement, e) => {
                    const selfElement = getElement();
                    const focused = (selfElement != null && (selfElement == lastActiveElement));
                    const focusedInner = (!!selfElement?.contains(lastActiveElement));
                    setLastFocused(focused, e);
                    setLastFocusedInner(focusedInner, e);
                    onLastActiveElementChange?.(lastActiveElement, prevLastActiveElement, e);
                }, []),
                ...activeElementParameters
            },
        });
        useEffect(() => {
            return () => {
                setLastFocused(false, undefined);
                setLastFocusedInner(false, undefined);
            };
        }, []);
        return {
            activeElementReturn,
            hasLastFocusReturn: {
                getLastFocused,
                getLastFocusedInner,
            }
        };
    });
}

function capitalize(str) {
    return (str[0].toUpperCase() + str.substring(1));
}
/**
 * Inspects the element's style and determines the logical direction that text flows.
 *
 * @remarks Certain CSS properties, like `block-size`, respect the current writing mode and text direction.
 * But `transform`, `clip`, etc. don't.
 *
 * This is provided so that CSS properties can consistently use those logical properties.
 *
 * See https://drafts.csswg.org/css-writing-modes/#logical-to-physical
 *
 * {@include } {@link UseLogicalDirectionParameters}
 *
 * @returns An object containing the following functions:
 * * `getLogicalDirection`: retrieves a `LogicalDirectionInfo` representing the current state of the element. (Function is constant between renders)
 * * `convertElementSize`: When used in conjunction with `useElementSize`, allows you to retrieve the logical size of an element instead of the physical size.
 * * `convertToLogicalOrientation`: Based on the current direction, converts "horizontal" or "vertical" to "inline" or "block".
 * * `convertToPhysicalOrientation`:  Based on the current direction, converts "inline" or "block" to "horizontal" or "vertical".
 */
function useLogicalDirection({ ...void1 }) {
    return useMonitoring(function useLogicalDirection() {
        //    useEnsureStability("useLogicalDirection", onLogicalDirectionChange);
        //const [getComputedStyles, setComputedStyles] = usePassiveState<CSSStyleDeclaration | null>(null, returnNull);
        // TODO: There's no way to refresh which writing mode we have once mounted.
        //   A. There's no way to watch for CSS style changes
        //   B. Calling getComputedStyle after every render for every element gets expensive fast and
        //   C. Is not necessary for most use cases that will never switch writing-mode within a single component
        //      (Those that do will need to mount and unmount the component that uses it)
        //
        // As a solution, here's a cheap workaround that checks when the element's size has changed,
        // and if so, tests if the writing mode has changed too.
        //
        // This will work for at least some number of cases, but a better solution is still needed.
        //const { useElementSizeProps } = useElementSize({ onSizeChange: useCallback(_ => onLogicalDirectionChange?.(getLogicalDirectionInfo()), []) })
        const getLogicalDirectionInfo = useCallback((computedStyles) => {
            if (computedStyles) {
                const w = computedStyles.writingMode;
                let d = computedStyles.direction;
                const t = computedStyles.textOrientation;
                if (t == "upright")
                    d = "ltr";
                return ({ ...WritingModes[w || "horizontal-tb"][d || "ltr"] });
            }
            return null;
        }, []);
        //const [getLogicalDirectionInfo, setLogicalDirectionInfo] = usePassiveState<LogicalDirectionInfo>(onLogicalDirectionChange);
        const convertToLogicalOrientation = useCallback((computedStyles, elementOrientation, direction) => {
            direction ??= getLogicalDirectionInfo(computedStyles);
            if (direction?.inlineOrientation === elementOrientation)
                return "inline";
            return "block";
        }, []);
        const convertToPhysicalSide = useCallback((computedStyles, side, direction) => {
            direction ??= getLogicalDirectionInfo(computedStyles);
            switch (side) {
                case "block-start":
                    return M[(direction?.blockDirection ?? "ttb")[0]];
                case "block-end":
                    return M[(direction?.blockDirection ?? "ttb")[2]];
                case "inline-start":
                    return M[(direction?.inlineDirection ?? "ltr")[0]];
                case "inline-end":
                    return M[(direction?.inlineDirection ?? "ltr")[2]];
            }
        }, []);
        const convertToLogicalSide = useCallback((computedStyles, side, direction) => {
            direction ??= getLogicalDirectionInfo(computedStyles);
            if (direction?.inlineOrientation === "vertical") {
                switch (side) {
                    case "top":
                        return direction.inlineDirection === "ttb" ? "inline-start" : "inline-end";
                    case "bottom":
                        return direction.inlineDirection === "btt" ? "inline-start" : "inline-end";
                    case "left":
                        return direction.blockDirection === "ltr" ? "block-start" : "block-end";
                    case "right":
                        return direction.blockDirection === "rtl" ? "block-start" : "block-end";
                }
            }
            else if (direction?.inlineOrientation === "horizontal") {
                switch (side) {
                    case "top":
                        return direction.blockDirection === "ttb" ? "block-start" : "block-end";
                    case "bottom":
                        return direction.blockDirection === "btt" ? "block-start" : "block-end";
                    case "left":
                        return direction.inlineDirection === "ltr" ? "inline-start" : "inline-end";
                    case "right":
                        return direction.inlineDirection === "rtl" ? "inline-start" : "inline-end";
                }
            }
            /* eslint-disable no-debugger */
            debugger;
            console.assert(false);
            return "inline-start";
        }, []);
        const convertToPhysicalOrientation = useCallback((computedStyles, elementOrientation, direction) => {
            direction ??= getLogicalDirectionInfo(computedStyles);
            if (elementOrientation == "inline") {
                if (direction?.inlineOrientation == "horizontal")
                    return "horizontal";
                return "vertical";
            }
            else {
                if (direction?.blockOrientation == "vertical")
                    return "vertical";
                return "horizontal";
            }
        }, []);
        const convertElementSize = useCallback((computedStyles, elementSize, direction) => {
            direction ??= getLogicalDirectionInfo(computedStyles);
            if (direction) {
                const { inlineSize, blockSize, inlineDirection, blockDirection } = direction;
                // Size is relatively simple
                const clientInlineSize = elementSize[`client${capitalize(inlineSize)}`];
                const clientBlockSize = elementSize[`client${capitalize(blockSize)}`];
                const offsetInlineSize = elementSize[`offset${capitalize(inlineSize)}`];
                const offsetBlockSize = elementSize[`offset${capitalize(blockSize)}`];
                const scrollInlineSize = elementSize[`scroll${capitalize(inlineSize)}`];
                const scrollBlockSize = elementSize[`scroll${capitalize(blockSize)}`];
                const f1 = getPhysicalLeftTop(inlineDirection);
                const f2 = getPhysicalRightBottom(inlineDirection);
                const f3 = getPhysicalLeftTop(blockDirection);
                const f4 = getPhysicalRightBottom(blockDirection);
                const clientInlineInset = elementSize[`client${capitalize(f1)}`] + (!f2 ? 0 : elementSize[`client${capitalize(f2)}`]);
                const scrollInlineInset = elementSize[`scroll${capitalize(f1)}`] + (!f2 ? 0 : elementSize[`scroll${capitalize(f2)}`]);
                const offsetInlineInset = elementSize[`offset${capitalize(f1)}`] == undefined ? undefined : (elementSize[`offset${capitalize(f1)}`] + (!f2 ? 0 : elementSize[`offset${capitalize(f2)}`]));
                const clientBlockInset = elementSize[`client${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`client${capitalize(f4)}`]);
                const scrollBlockInset = elementSize[`scroll${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`scroll${capitalize(f4)}`]);
                const offsetBlockInset = elementSize[`offset${capitalize(f3)}`] == undefined ? undefined : (elementSize[`offset${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`offset${capitalize(f4)}`]));
                return {
                    clientInlineSize,
                    scrollInlineSize,
                    offsetInlineSize,
                    clientBlockSize,
                    scrollBlockSize,
                    offsetBlockSize,
                    clientInlineInset,
                    scrollInlineInset,
                    offsetInlineInset,
                    clientBlockInset,
                    scrollBlockInset,
                    offsetBlockInset,
                };
            }
            return null;
        }, []);
        return {
            logicalDirectionReturn: {
                getLogicalDirectionInfo,
                convertToLogicalSize: convertElementSize,
                convertToLogicalOrientation,
                convertToPhysicalOrientation,
                convertToLogicalSide,
                convertToPhysicalSide
            }
        };
    });
}
// Position requires us to sometimes use one property (like `left`)
// or sometimes two (like `left` + `width`)
function getPhysicalLeftTop(dir) { if (dir === "ltr" || dir == "rtl")
    return "left"; return "top"; }
function getPhysicalRightBottom(dir) { if (dir === "rtl")
    return "width"; if (dir === "btt")
    return "height"; return null; }
// Helper for extracting info from "ltr", "ttb", etc.
const M = {
    t: "top",
    b: "bottom",
    l: "left",
    r: "right"
};
const HorizontalTbLtr = {
    inlineDirection: "ltr",
    blockDirection: "ttb",
    inlineOrientation: "horizontal",
    blockOrientation: "vertical",
    inlineSize: "width",
    blockSize: "height",
    leftRightDirection: "ltr",
    overUnderDirection: "ttb"
};
const HorizontalTbRtl = {
    ...HorizontalTbLtr,
    inlineDirection: "rtl",
};
const VerticalRlLtr = {
    inlineDirection: "ttb",
    blockDirection: "rtl",
    inlineOrientation: "vertical",
    blockOrientation: "horizontal",
    inlineSize: "height",
    blockSize: "width",
    leftRightDirection: "ttb",
    overUnderDirection: "rtl"
};
const VerticalRlRtl = {
    ...VerticalRlLtr,
    inlineDirection: "btt"
};
const SidewaysRlLtr = { ...VerticalRlLtr };
const SidewaysRlRtl = { ...VerticalRlRtl };
const VerticalLrLtr = {
    ...VerticalRlLtr,
    blockDirection: "ltr",
};
const VerticalLrRtl = {
    ...VerticalRlRtl,
    blockDirection: "ltr",
};
const SidewaysLtLtr = {
    ...VerticalLrLtr,
    inlineDirection: "btt",
    leftRightDirection: "btt",
    overUnderDirection: "ltr"
};
const SidewaysLtRtl = {
    ...SidewaysLtLtr,
    inlineDirection: "ttb"
};
const HorizontalTb = {
    ltr: HorizontalTbLtr,
    rtl: HorizontalTbRtl
};
const VerticalRl = {
    ltr: VerticalRlLtr,
    rtl: VerticalRlRtl
};
const VerticalLr = {
    ltr: VerticalLrLtr,
    rtl: VerticalLrRtl
};
const SidewaysRl = {
    ltr: SidewaysRlLtr,
    rtl: SidewaysRlRtl
};
const SidewaysLr = {
    ltr: SidewaysLtLtr,
    rtl: SidewaysLtRtl
};
const WritingModes = {
    "horizontal-tb": HorizontalTb,
    "vertical-lr": VerticalLr,
    "vertical-rl": VerticalRl,
    "sideways-lr": SidewaysLr,
    "sideways-rl": SidewaysRl
};

/**
 * Allows a component to use the boolean result of a media query as part of its render.
 *
 * @remarks **Note the return type** is ***not*** a boolean; it is an object that contains
 * a boolean and a stable getter.
 *
 * Please note that there is a re-render penalty incurred by using this hook -- it will
 * always cause any component that uses it to re-render one extra time on mount as it
 * stores the result of the media query. This can be mitigated with the `defaultGuess`
 * parameter -- if you guess correctly (`true`/`false`), then there's no penalty. Hooray.
 *
 * @param query - Must be in parens, e.g. `(max-width: 600px)`
 * @param defaultGuess - Optional. If you pass the same value that's measured after rendering, no re-render will occur.
 * @returns `UseMediaQueryReturnType`.
 */
function useMediaQuery(query, defaultGuess) {
    return useMonitoring(function useMediaQuery() {
        if (typeof window === "undefined") {
            const matches = defaultGuess || false;
            return {
                matches,
                getMatches: useCallback(() => matches, [matches])
            };
        }
        else {
            const queryList = useRef();
            // queryList.current ??= (query == null ? null : matchMedia(query))
            // This ^^^ is not done because it seems to cause reflows at inopportune moments.
            // Specifically on iOS Safari (tested on 12).
            // It's always iOS Safari.
            // At any rate it botches transitions that happen on a just-mounted component, somehow.
            const [matches, setMatches, getMatches] = useState(defaultGuess ?? null);
            console.assert(!query || query.startsWith("("));
            useLayoutEffect(() => {
                if (!query)
                    return;
                queryList.current = matchMedia(query);
                setMatches(queryList.current.matches || false);
                const handler = (e) => {
                    setMatches(e.matches);
                };
                queryList.current.addEventListener("change", handler, { passive: true });
                return () => queryList.current?.removeEventListener("change", handler);
            }, [query]);
            return {
                matches,
                getMatches
            };
        }
    });
}

/**
 * Effectively just a wrapper around a `MutationObserver`.
 *
 * @compositeParams
 */
function useMutationObserver({ refElementParameters, mutationObserverParameters: { attributeFilter, subtree, onChildList, characterDataOldValue, onCharacterData, onAttributes, attributeOldValue } }) {
    return useMonitoring(function useMutationObserver() {
        const { onElementChange, ...rest } = (refElementParameters || {});
        if (typeof attributeFilter === "string")
            attributeFilter = [attributeFilter];
        const attributeKey = attributeFilter?.join(";");
        const attributes = !!onAttributes;
        const characterData = !!onCharacterData;
        const childList = !!onChildList;
        const stableOnChildList = useStableCallback(onChildList ?? (() => { }));
        const stableOnCharacterData = useStableCallback(onCharacterData ?? (() => { }));
        const stableOnAttributes = useStableCallback(onAttributes ?? (() => { }));
        const [_getMo, setMo] = usePassiveState(useStableCallback(observer => {
            const element = getElement();
            if (element && observer && (!!attributeKey || !!characterData || !!childList)) {
                observer.observe(element, {
                    attributeFilter: attributeFilter,
                    attributeOldValue,
                    attributes,
                    characterData,
                    characterDataOldValue,
                    childList,
                    subtree
                });
                return () => observer.disconnect();
            }
        }), returnNull, { debounceRendering: runImmediately, skipMountInitialization: true });
        const onNeedMutationObserverReset = useCallback((element) => {
            if (element) {
                queueMicrotask(() => {
                    setMo(new MutationObserver((a) => {
                        for (const mutation of a) {
                            switch (mutation.type) {
                                case "childList":
                                    stableOnChildList(mutation);
                                    break;
                                case "attributes":
                                    stableOnAttributes(mutation);
                                    break;
                                case "characterData":
                                    stableOnCharacterData(mutation);
                                    break;
                            }
                        }
                    }));
                });
            }
        }, []);
        useEffect(() => {
            onNeedMutationObserverReset(getElement());
        }, [attributeKey, attributeOldValue, characterDataOldValue, subtree]);
        const { refElementReturn, propsStable } = useRefElement({
            refElementParameters: {
                onElementChange: useStableCallback((e, p, r) => { onElementChange?.(e, p, r); onNeedMutationObserverReset(e); }),
                ...rest
            }
        });
        const { getElement } = refElementReturn;
        return {
            refElementReturn,
            propsStable
        };
    });
}

/**
 * Allows you to inspect when the entire URL changes,
 * either because the hash changed or because the Back/Forward
 * browser buttons were pressed.
 *
 * @remarks If the URL is set programmatically
 * in a way that doesn't trigger either of those, like
 * `history.replaceState`, well, 🤷 there's no way to track that.
 * So beware of other libraries that modify page history out from under you.
 *
 * In general, you'll want to inspect a specific directory of
 * a path, or a specific query parameter value, not the
 * entire URL.
 */
function useUrl(onUrlChange) {
    return useMonitoring(function useUrl() {
        const [getUrl, setUrl] = usePassiveState(useStableCallback(onUrlChange), useCallback(() => getWindow()?.location?.toString() || "", []));
        useGlobalHandler(getWindow(), "hashchange", (e) => {
            setUrl(globalThis.location.toString(), e);
        });
        useGlobalHandler(getWindow(), "popstate", (e) => {
            // https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event#the_history_stack
            // TODO: If this assert never fires, it's *probably* fine??
            console.assert(getWindow()?.location?.toString() === getDocument()?.location?.toString());
            setUrl(globalThis.location.toString(), e);
        });
        return [getUrl, useCallback((newUrlOrSetter, action) => {
                const document = getDocument();
                if (document) {
                    if (typeof newUrlOrSetter == "function") {
                        setUrl(prev => {
                            let newUrl = newUrlOrSetter(prev);
                            history[`${action ?? "replace"}State`]({}, document.title, newUrl);
                            return newUrl;
                        }, undefined);
                    }
                    else {
                        history[`${action ?? "replace"}State`]({}, document.title, newUrlOrSetter);
                        setUrl(newUrlOrSetter, undefined);
                    }
                }
            }, [])];
    });
}

/**
 * Combines the semantics of `useAsync` and `useEffect`.
 *
 * @remarks More specifically, if an event would run again, but the previous async event is still running,
 * then we'll wait until it finishes to run the new effect.
 * And while waiting, further new effect runs will bump old ones off,
 * only remembering the most recent request.
 *
 * @returns All values from `useAsync`, except for `syncHandler`.
 */
function useAsyncEffect(effect, inputs, options) {
    useMonitoring(function useAsyncEffect() {
        const { syncHandler, ...rest } = useAsync(effect, { ...options, capture: null, debounce: null, throttle: null });
        useEffect(syncHandler, inputs);
        return rest;
    });
}

/**
 * Wrap the native `useEffect` to add arguments
 * that allow accessing the previous value as the first argument,
 * as well as the changes that caused the hook to be called as the second argument.
 *
 * @param effect - Same as the default
 * @param inputs - Same as the default
 * @param impl - You can choose whether to use `useEffect` or `useLayoutEffect` by
 * passing one of them as this argument. By default, it's `useEffect`.
 */
function useEffectDebug(effect, inputs, impl = useEffect) {
    return useMonitoring(function useEffectDebug() {
        const prevInputs = useRef(undefined);
        const effect2 = () => {
            const changes = [];
            if (inputs && prevInputs.current) {
                for (let i = 0; i < Math.max(prevInputs.current.length, inputs.length); ++i) {
                    if (prevInputs.current[i] != inputs[i])
                        changes[i] = { from: prevInputs.current[i], to: inputs[i] };
                }
            }
            const ret = effect(prevInputs.current, changes);
            prevInputs.current = inputs;
            return ret;
        };
        impl(effect2, inputs);
    });
}

/**
 * Returns a function that will, when called, force the component
 * that uses this hook to re-render itself.
 *
 * @remarks It's a bit smelly, so best to use sparingly.
 */
function useForceUpdate() {
    return useMonitoring(function useForceUpdate() {
        const [, set] = useState$1(0);
        return useRef(() => set(i => ++i)).current;
    });
}

/**
 * Wrap the native `useLayoutEffect` to add arguments
 * that allow accessing the previous value as the first argument,
 * as well as the changes that caused the hook to be called as the second argument.
 *
 * @param effect - Same as the built-in's
 * @param inputs - Same as the built-in's
 */
function useLayoutEffectDebug(effect, inputs) {
    return useMonitoring(function useLayoutEffectDebug() {
        return useEffectDebug(effect, inputs, useLayoutEffect);
    });
}

const PersistentStates = undefined; // Needed for the isolatedModules flag?
const defaultStorage = (typeof window === 'undefined' ? undefined : window.localStorage);
/**
 * #__NO_SIDE_EFFECTS__
 */
function getFromLocalStorage(key, converter = JSON.parse, storage = defaultStorage) {
    if (storage != null) {
        try {
            const item = storage.getItem(key);
            if (item == null)
                return null;
            return converter(item);
        }
        catch (e) {
            /* eslint-disable no-debugger */
            debugger;
            return null;
        }
    }
    return null;
}
function storeToLocalStorage(key, value, converter = JSON.stringify, storage = defaultStorage) {
    if (storage != null) {
        try {
            if (value == null)
                storage.removeItem(key);
            else
                storage.setItem(key, converter(value));
        }
        catch (e) {
            /* eslint-disable no-debugger */
            debugger;
        }
    }
}
/**
 * @remarks Use module augmentation to get the correct types for this function.
 *
 * ```typescript
 * declare module 'preact-prop-helpers' {
 *     interface PersistentStates {
 *         numberState: number;
 *         stringState: string;
 *     }
 * }
 * ```
 * @param key -
 * @param initialValue -
 * @param fromString -
 * @param toString -
 * @returns
 */
function usePersistentState(key, initialValue, fromString = JSON.parse, toString = JSON.stringify, storage = defaultStorage) {
    const [localCopy, setLocalCopy, getLocalCopy] = useState(() => ((key ? (getFromLocalStorage(key, fromString, storage)) : null) ?? initialValue));
    const getInitialValue = useStableGetter(initialValue);
    // Ensure that if our key changes, we also update `localCopy` to match.
    useLayoutEffect(() => {
        if (key) {
            const newCopy = getFromLocalStorage(key, fromString, storage);
            setLocalCopy(newCopy ?? getInitialValue());
        }
    }, [key, storage]);
    // Listen for changes to this storage in other browser tabs
    useGlobalHandler(getWindow(), "storage", useStableCallback((e) => {
        if (key && e.key === key && e.storageArea == storage) {
            const newValue = e.newValue;
            if (newValue != null)
                setLocalCopy(fromString(newValue));
            else
                setLocalCopy(initialValue);
        }
    }));
    const setValueWrapper = useStableCallback((valueOrSetter) => {
        const value = typeof valueOrSetter === "function" ? valueOrSetter(getLocalCopy()) : valueOrSetter;
        // Make sure this update is available immediately before the next render
        setLocalCopy(valueOrSetter);
        // Actually save the value to local storage.
        if (key) {
            storeToLocalStorage(key, value, toString, storage);
            if (typeof value == "object" && value instanceof Date) {
                console.assert(fromString != JSON.parse, "Dates (and other non-JSON types) must be given custom fromString and toString functions.");
            }
        }
    });
    const getValue = useStableCallback(() => {
        const trueValue = !key ? undefined : getFromLocalStorage(key, fromString, storage);
        return trueValue ?? localCopy;
    });
    return [localCopy, setValueWrapper, getValue];
}

var l;l={__e:function(n,l,u,t){for(var i,r,o;l=l.__;)if((i=l.__c)&&!i.__)try{if((r=i.constructor)&&null!=r.getDerivedStateFromError&&(i.setState(r.getDerivedStateFromError(n)),o=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),o=i.__d),o)return i.__E=i}catch(l){n=l;}throw n}},"function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout;

var f=0;function u(e,t,n,o,i,u){t||(t={});var a,c,l$1=t;"ref"in t&&(a=t.ref,delete t.ref);var p={type:e,props:l$1,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--f,__i:-1,__u:0,__source:i,__self:u};if("function"==typeof e&&(a=e.defaultProps))for(c in a)void 0===l$1[c]&&(l$1[c]=a[c]);return l.vnode&&l.vnode(p),p}

function childrenIsVnode(children) {
    if (children && children.type && children.props)
        return true;
    return false;
}
/**
 * Passes props onto another set of props' `children`.
 *
 * @details If `children` is a VNode (e.g. a `<div>` or a `<Component>`), then the props are spread to that.
 * Otherwise, a new element is created with the `Tag` parameter, which defaults to `"span"`
 *
 * @param children
 * @param props
 * @param ref
 * @param Tag
 * @returns
 */
function usePropsOnChildren(children, props, ref, Tag = 'span') {
    const c = (childrenIsVnode(children) ? children : u(Tag, { children: children }));
    return createElement(c.type, useMergedProps(c.props, { ref: c.ref }, props, { ref }));
}

const SearchParamStates = undefined; // Needed for the isolatedModules flag?
function parseParam(url, paramKey, fromString) {
    const window = getWindow();
    if (paramKey == undefined)
        return paramKey ?? undefined;
    url ??= new URL(window?.location?.toString() ?? "");
    let value = url.searchParams.get(paramKey);
    let ret = fromString(value) ?? undefined;
    return ret;
}
function unparseParam(params, paramKey, value, ts2) {
    if (paramKey == null)
        return;
    const type = typeof value;
    if (value == null) {
        params.delete(paramKey);
    }
    else if (type === "boolean") {
        if (value === true) {
            params.set(paramKey, "");
        }
        else {
            params.set(paramKey, "false");
        }
    }
    else {
        params.set(paramKey, `${ts2(value ?? null)}`);
    }
}
/**
 * Provides access to the requested Search Param's value
 *
 * @remarks Note that while this function is like usePassiveState (itself like useState and useEffect combined),
 * the `setState` return function is, due to browser limitations, not synchronous, but that's
 * like most calls to `setState` anyway I guess?
 *
 * {@include } {@link UseSearchParamStateParameters}
 *
 * {@include } {@link SearchParamStates}
 *
 * @param paramKey - The name of the URL search parameter to reference
 * @param type - The type of data encode/decode (`"string"` | `"boolean"` | `"number"` | `"bigint"`)
 * @param onParamValueChanged - Will be called any time the requested Search Parameter's value changes.
 */
function useSearchParamState({ key: paramKey, defaultReason, stringToValue, initialValue, onValueChange, valueToString }) {
    //fromString ??= JSON.parse;
    //toString ??= JSON.stringify;
    valueToString ??= (value) => `${value}`;
    defaultReason ??= "replace";
    const getInitialValue = useStableCallback(() => (parseParam(new URL(getWindow()?.location?.toString() || ""), paramKey, stringToValue) ?? initialValue));
    useEffect(() => {
        setParamWithHistory(getInitialValue(), "replace");
    }, []);
    // We keep a local copy of our current Search Param value
    // because changing it is actually an asynchronous operation
    // and we can't know when it ends aside from just "did the URL change or not"
    // so we might as well keep this state around locally to compensate.
    const savedParamValue = useRef(parseParam(null, paramKey, stringToValue) ?? initialValue);
    const [_getSavedParamValue, setSavedParamValue] = usePassiveState(onValueChange, useStableCallback(() => {
        return savedParamValue.current = (parseParam(null, paramKey, stringToValue) ?? getInitialValue());
    }), { debounceRendering: runImmediately, skipMountInitialization: true });
    const setParamWithHistory = useStableCallback((newValueOrUpdater, reason) => {
        const document = getDocument();
        const window = getWindow();
        if (document && window) {
            let prevValue = parseParam(null, paramKey, stringToValue) ?? getInitialValue();
            let nextValue = (typeof newValueOrUpdater == "function" ? newValueOrUpdater(prevValue) : newValueOrUpdater);
            let newParams = new URLSearchParams((new URL(window.location.toString()).searchParams));
            unparseParam(newParams, paramKey, nextValue, valueToString);
            let nextUrl = new URL(window.location.toString());
            nextUrl.search = prettyPrintParams(newParams);
            reason ??= defaultReason ?? "replace";
            history[`${reason}State`]({}, document.title, nextUrl);
            setUrl(nextUrl.toString(), reason);
            setSavedParamValue(nextValue);
        }
    });
    // Any time the URL changes, it means the Search Param we care about might have changed.
    // Parse it out and save it.
    const [, setUrl] = useUrl(useStableCallback(_url => {
        const newParam = parseParam(null, paramKey, stringToValue) ?? getInitialValue();
        setSavedParamValue(newParam);
    }));
    // Ensure we can call getValue during render--it's fine.
    return [useCallback(() => { return savedParamValue.current; }, []), setParamWithHistory];
}
/**
 *
 */
function useSearchParamStateDeclarative({ key, defaultReason, stringToValue, initialValue, valueToString }) {
    const [value, setLocalCopy] = useState(parseParam(null, key, stringToValue) ?? initialValue);
    const [getValue, setValue] = useSearchParamState({
        key,
        stringToValue,
        initialValue,
        defaultReason,
        onValueChange: setLocalCopy,
        valueToString
    });
    /*useLayoutEffect(() => {
        const p = parseParam(null, key, stringToValue);
        setValue(p!);
    }, [])*/
    return [value, setValue, getValue];
}
function prettyPrintParams(params) {
    const paramArray = [...params.entries()].filter((key, value) => value != null);
    if (paramArray.length == 0)
        return "";
    let queryString = paramArray.map(([key, value]) => {
        if (value === "" || value === true)
            return `${encodeURIComponent(key)}`;
        else
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }).join("&");
    return `?${queryString}`;
}

/**
 *
 */
function useWhatCausedRender(who, { props, state }) {
    const prevProps = useRef(undefined);
    const prevState = useRef(undefined);
    useEffect(() => {
        if (prevProps.current != undefined) {
            const propDifferences = describeDifferences(1, who + ".props", props, prevProps.current, 0);
            if (propDifferences.length)
                console.log(propDifferences);
        }
        if (prevState.current != undefined) {
            const stateDifferences = describeDifferences(10, who + ".state", state, prevState.current, 0);
            if (stateDifferences.length)
                console.log(stateDifferences);
        }
        prevProps.current = props;
        prevState.current = state;
    });
}
function describeDifferences(maxDepth, path, lhs, rhs, depth) {
    if (depth > maxDepth)
        return [];
    if (lhs === rhs)
        return [];
    if (typeof lhs != typeof rhs) {
        return [{ path, newValue: lhs, oldValue: rhs }];
    }
    if (typeof lhs == "number" || typeof lhs == "string" || typeof rhs == "boolean" || lhs == null || rhs == null) {
        if (lhs != rhs)
            return [{ path, newValue: lhs, oldValue: rhs }];
        else
            return [];
    }
    // If we're at our max depth, just count this different in and of itself as a difference -- don't recurse down to find why.
    if (lhs != rhs && depth == maxDepth) {
        return [{ path, newValue: lhs, oldValue: rhs }];
    }
    // We don't check for equality -- we just recurse down the property chain.
    const allKeys = new Set([...Object.keys(lhs ?? {}), ...Object.keys(rhs ?? {})]);
    return Array.from(allKeys).map(key => describeDifferences(maxDepth, path + "." + key, lhs[key], rhs[key], depth + 1)).flat();
}

const SharedAnimationFrameContext = createContext(null);
/**
 * When a bunch of unrelated components all use `requestAnimationFrame`,
 * yes, this actually is faster. I wish it wasn't. It's lame.
 */
function ProvideBatchedAnimationFrames({ children }) {
    const addCallback = useCallback((callbackToBeBatched, tag) => { allCallbacks.current.set(callbackToBeBatched, tag); }, []);
    const removeCallback = useCallback((callback) => { allCallbacks.current.delete(callback); }, []);
    const contextInfo = useRef(null);
    if (contextInfo.current == null)
        contextInfo.current = { addCallback, removeCallback };
    const allCallbacks = useRef(null);
    if (allCallbacks.current == null)
        allCallbacks.current = new Map();
    useEffect(() => {
        let handle = -1;
        function rafWithBatchedCallbacks(msSinceLast) {
            for (const [batchedRafCallback, tag] of allCallbacks.current) {
                batchedRafCallback(msSinceLast, tag);
            }
            handle = requestAnimationFrame(rafWithBatchedCallbacks);
        }
        handle = requestAnimationFrame(rafWithBatchedCallbacks);
        return () => cancelAnimationFrame(handle);
    }, []);
    return (createElement(SharedAnimationFrameContext.Provider, { value: contextInfo.current, children }));
}
/**
 * The callback you provide will start running every frame after the component mounts.
 *
 * @remarks Passing `null` is fine and simply stops the effect until you restart it by providing a non-null callback; it doesn't need to be stable.
 *
 * {@include } {@link UseAnimationFrameParameters}
 *
 * {@include } {@link ProvideBatchedAnimationFrames}
 */
function useAnimationFrame({ callback }) {
    return useMonitoring(function useAnimationFrame() {
        // Get a wrapper around the given callback that's stable
        const stableCallback = useStableCallback(callback ?? noop);
        const hasCallback = (callback != null);
        const sharedAnimationFrameContext = useContext(SharedAnimationFrameContext);
        useEffect(() => {
            if (sharedAnimationFrameContext) {
                if (hasCallback) {
                    sharedAnimationFrameContext.addCallback(stableCallback);
                }
                else {
                    sharedAnimationFrameContext.removeCallback(stableCallback);
                }
            }
            else {
                if (hasCallback) {
                    // Get a wrapper around the wrapper around the callback
                    // that also calls `requestAnimationFrame` again.
                    const rafCallback = (ms) => {
                        handle = requestAnimationFrame(rafCallback);
                        stableCallback(ms);
                    };
                    let handle = requestAnimationFrame(rafCallback);
                    return () => cancelAnimationFrame(handle);
                }
            }
        }, [sharedAnimationFrameContext, hasCallback]);
    });
}

/**
 * Runs a function every time the specified number of milliseconds elapses while the component is mounted.
 *
 * @remarks
 * {@include } {@link UseIntervalParameters}
 */
function useInterval({ interval, callback, noRisingEdge }) {
    return useMonitoring(function useInterval() {
        const enabled = (interval != null);
        // Get a wrapper around the given callback that's stable
        const stableCallback = useStableCallback(callback);
        const getInterval = useStableGetter(interval);
        useEffect(() => {
            const interval = getInterval();
            let lastDelayUsed = interval;
            if (!enabled)
                return;
            // Get a wrapper around the wrapper around the callback
            // that clears and resets the interval if it changes.
            const adjustableCallback = () => {
                stableCallback();
                const currentInterval = getInterval();
                if (currentInterval != lastDelayUsed) {
                    clearInterval(handle);
                    if (currentInterval != null)
                        handle = setInterval(adjustableCallback, lastDelayUsed = currentInterval);
                }
            };
            if (!noRisingEdge)
                adjustableCallback();
            let handle = setInterval(adjustableCallback, interval); // Interval is guaranteed non-null if enabled is true
            return () => clearInterval(handle);
        }, [enabled]);
    });
}

export { EventDetail, EventMapping, ImperativeElement, PersistentStates, ProvideBatchedAnimationFrames, SearchParamStates, assertEmptyObject, binarySearch, debounceRendering, defaultCompare, enableLoggingPropConflicts, enhanceEvent, findBackupFocus, findFirstFocusable, findFirstTabbable, focus, generateRandomId, generateStack, getDocument, getEventDetail, getFromLocalStorage, getTopElement, getWindow, hideCallCount, mergeFunctions, onfocusin, onfocusout, returnFalse, returnNull, returnTrue, returnUndefined, returnZero, runImmediately, setPressVibrate, storeToLocalStorage, tryNavigateToIndex, useActiveElement, useAnimationFrame, useAsync, useAsyncEffect, useAsyncHandler, useBackdropDismiss, useBlockingElement, useChildrenFlag, useChildrenHaveFocus, useChildrenHaveFocusChild, useCompleteGridNavigation, useCompleteGridNavigationCell, useCompleteGridNavigationDeclarative, useCompleteGridNavigationRow, useCompleteGridNavigationRowDeclarative, useCompleteGridNavigationRowOuter, useCompleteGridNavigationRows, useCompleteListNavigation, useCompleteListNavigationChild, useCompleteListNavigationChildDeclarative, useCompleteListNavigationChildOuter, useCompleteListNavigationChildren, useCompleteListNavigationDeclarative, useDismiss, useDocumentClass, useDraggable, useDroppable, useEffectDebug, useElementSize, useEnsureStability, useEscapeDismiss, useFocusTrap, useForceUpdate, useGlobalHandler, useGridNavigation, useGridNavigationCell, useGridNavigationRow, useGridNavigationSelection, useGridNavigationSelectionCell, useGridNavigationSelectionRow, useHasCurrentFocus, useHasLastFocus, useHideScroll, useImperativeProps, useInterval, useLayoutEffectDebug, useLinearNavigation, useListNavigation, useListNavigationChild, useListNavigationSelection, useListNavigationSelectionChild, useLogicalDirection, useLostFocusDismiss, useManagedChild, useManagedChildren, useMediaQuery, useMemoObject, useMergedChildren, useMergedClasses, useMergedProps, useMergedRefs, useMergedStyles, useModal, useMonitoring, useMultiSelection, useMultiSelectionChild, useMultiSelectionChildDeclarative, useMutationObserver, usePaginatedChild, usePaginatedChildren, usePassiveState, usePersistentState, usePortalChildren, usePress, usePressAsync, useProcessedChild, useProcessedChildren, useProcessedIndexMangler, usePropsOnChildren, useRandomDualIds, useRandomId, useRearrangeableChild, useRearrangeableChildren, useRefElement, useRovingTabIndex, useRovingTabIndexChild, useSearchParamState, useSearchParamStateDeclarative, useSelection, useSelectionChild, useSelectionChildDeclarative, useSelectionDeclarative, useSingleSelection, useSingleSelectionChild, useSingleSelectionDeclarative, useStableCallback, useStableGetter, useStableMergedCallback, useStack, useStaggeredChild, useStaggeredChildren, useState, useTextContent, useTimeout, useTypeaheadNavigation, useTypeaheadNavigationChild, useUrl, useWhatCausedRender };
//# sourceMappingURL=index.js.map
