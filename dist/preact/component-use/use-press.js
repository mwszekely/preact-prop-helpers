import { noop } from "lodash-es";
import { useAsyncHandler } from "../dom-helpers/use-async-handler.js";
import { returnFalse, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useState } from "../preact-extensions/use-state.js";
import { useTimeout } from "../timing/use-timeout.js";
import { getDocument, getWindow } from "../util/get-window.js";
import { onfocusout, useCallback } from "../util/lib.js";
import { useMonitoring } from "../util/use-call-count.js";
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
export function usePress(args) {
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
                            if (getHovering()) {
                                // Okay, I guess the browser decided the click event is happening *now*,
                                // just after pointerdown but before pointerup, sure.
                                // Nothing to do here, though, but maybe TODO
                                // because I think this only happens on Firefox mobile? Maybe?
                            }
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
export function usePressAsync({ asyncHandlerParameters: { debounce, throttle, asyncHandler }, pressParameters, refElementReturn }) {
    const asyncHandlerReturn = useAsyncHandler({ asyncHandler, capture: noop, debounce, throttle });
    const { pressReturn, props } = usePress({ pressParameters: { onPressSync: asyncHandlerReturn.syncHandler, ...pressParameters }, refElementReturn });
    return {
        asyncHandlerReturn,
        pressReturn,
        props
    };
}
/**
 * selection.containsNode doesn't account for selection.isCollapsed,
 * so here's a workaround for that.
 *
 * We also only look for the selection end to only catch the
 * essence of a non-existent "SelectionStop" event.
 *
 * @param element
 * @returns
 */
function _nodeSelectedTextLength(element) {
    const window = getWindow(element);
    if (window && element && element instanceof Node) {
        const selection = window.getSelection();
        for (let i = 0; i < (selection?.rangeCount ?? 0); ++i) {
            const range = selection.getRangeAt(i);
            if (element.contains(range.endContainer) && !selection?.isCollapsed) {
                return selection.toString().length;
            }
        }
    }
    return 0;
}
let pulse = (("vibrate" in navigator) && (navigator.vibrate instanceof Function)) ? (() => navigator.vibrate(10)) : (() => { });
/**
 * This function can be used to enable/disable button vibration pulses on an app-wide scale.
 *
 *
 * @param func - The function to run when a button is tapped. (Default is `() => navigator.vibrate(10)` in browsers that support it, a noop otherwise)
 */
export function setPressVibrate(func) {
    pulse = func;
}
//# sourceMappingURL=use-press.js.map