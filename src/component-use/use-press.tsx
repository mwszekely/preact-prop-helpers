import { noop } from "lodash-es";
import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { OnPassiveStateChange, returnFalse, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useState } from "../preact-extensions/use-state.js";
import { useTimeout } from "../timing/use-timeout.js";
import { useCallback } from "../util/lib.js";
import { ElementProps, FocusEventType, KeyboardEventType, MouseEventType, Nullable, PointerEventType, TouchEventType } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";

export type PressEventReason<E extends EventTarget> = MouseEventType<E> | KeyboardEventType<E> | TouchEventType<E> | PointerEventType<E>;
export type PressChangeEventReason<E extends EventTarget> = MouseEventType<E> | KeyboardEventType<E> | TouchEventType<E> | PointerEventType<E> | FocusEventType<E>;

export interface UsePressParameters<E extends EventTarget> {
    refElementReturn: Required<Pick<UseRefElementReturnType<E>["refElementReturn"], "getElement">>;
    pressParameters: {
        onPressingChange?: Nullable<OnPassiveStateChange<boolean, PressChangeEventReason<E>>>;

        /**
         * What should happen when this widget has been "pressed".
         * 
         * This must be a sync event handler; async handlers must be taken care of externally.
         * 
         * Setting to `null` or `undefined` effectively disables the press event handler.
         */
        onPressSync: Nullable<((e: PressEventReason<E>) => void)>;

        /** Pass a function that returns `true` to prevent the spacebar from contributing to press events */
        excludeSpace?(): boolean;
        /** Pass a function that returns `true` to prevent the enter key from contributing to press events */
        excludeEnter?(): boolean;
        /** Pass a function that returns `true` to prevent the pointer (mouse, touch, etc.) from contributing to press events */
        excludePointer?(): boolean;

        /**
         * Ensures that when a button is pressed it properly receives focus (even on iOS Safari).
         * 
         * Generally, this should just be `e => e.focus()`
         * @param element - The element that is (presumably) about to receive focus
         */
        focusSelf(element: E): void;

        /**
         * If `true`, holding down the `Enter` key will repeatedly fire press events as each sequential repeated keyboard event happens.
         */
        allowRepeatPresses?: Nullable<boolean>;

        /**
         * After this number of milliseconds have passed pressing down but not up, the returned `longPress` value will be set to `true`
         * and the user's actions will not fire an actual press event.
         */
        longPressThreshold?: Nullable<number>;
    }
}

export interface UsePressReturnType<E extends Element> {
    pressReturn: {


        /** 
         * Sort of like when the CSS `:active` pseudo-element would apply,
         * but specifically for presses only, so it's a more accurate reflection
         * of what will happen for the user. Useful for styling mostly.
         */
        pressing: boolean;
        getIsPressing(): boolean;
        /**
         * Similar to pseudoActive, but for if the button as been pressed down for a determined length of time.
         */
        longPress: boolean | null;
    }

    props: ElementProps<E>;
}

function supportsPointerEvents() {
    return ("onpointerup" in window);
}

/**
 * Adds the necessary event handlers to create a "press"-like event for
 * any element, whether it's a native &lt;button&gt; or regular &lt;div&gt;,
 * and allows for a "long press" that can be used to, 
 * e.g., show a tooltip *instead* of activating a press.
 * 
 * Notably, the following cases are covered:
 * * The target element is properly focused, even on iOS Safari (*especially* on iOS Safari)
 * * Double-clicks won't select text, it just presses the button twice.
 * * Text selection that happens to end/start with this element won't invoke a press.
 * * The `enter` key immediately invokes a press (by default just once until pressed again), while the `space` key invokes it when released, if focus hasn't moved away from the button.
 * * Haptic feedback (on, like, the one browser combination that supports it &mdash; this can be disabled app-wide with `setButtonVibrate`)
 * 
 * In addition, returns a "more accurate" CSS `active` and `hover`; more accurate
 * in that `hover` won't mess up mobile devices that see `hover` and mess up your click events,
 * and in that `active` accurately displays when a press would occur or not.
 * 
 */
export function usePress<E extends Element>(args: UsePressParameters<E>): UsePressReturnType<E> {
    monitorCallCount(usePress);

    const {
        refElementReturn: { getElement },
        pressParameters: { focusSelf, onPressSync, allowRepeatPresses, longPressThreshold, excludeEnter: ee, excludePointer: ep, excludeSpace: es, onPressingChange: opc }
    } = args;


    const excludeEnter = useStableCallback(ee ?? returnFalse);
    const excludeSpace = useStableCallback(es ?? returnFalse);
    const excludePointer = useStableCallback(ep ?? returnFalse);
    const onPressingChange = useStableCallback(opc ?? noop);

    const [getIsPressing, setIsPressing] = usePassiveState<boolean, PressChangeEventReason<E>>(onPressingChange, returnFalse);
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

    // All our checking for pointerdown and up doesn't mean anything if it's
    // a programmatic onClick event, which could come from any non-user source.
    // We want to handle those just like GUI clicks, but we don't want to double-up on press events.
    // So if we handle a press from pointerup, we ignore any subsequent click events, at least for a tick.
    const [getJustHandled, setJustHandled] = usePassiveState<boolean, PressEventReason<E>>(useStableCallback((justHandled, _p, reason) => {
        if (justHandled) {
            const h = setTimeout(() => {
                setJustHandled(false, reason);
            }, 1);
            return clearTimeout(h);
        }
    }), returnFalse);

    const [longPress, setLongPress] = useState(null as boolean | null);
    const [waitingForSpaceUp, setWaitingForSpaceUp, getWaitingForSpaceUp] = useState(false);
    const [pointerDownStartedHere, setPointerDownStartedHere, getPointerDownStartedHere] = useState(false);
    const [hovering, setHovering, getHovering] = useState(false);
    const onTouchStart = useCallback((e: TouchEventType<E>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsPressing(true, e);
        setPointerDownStartedHere(true);
        setHovering(true);
        setLongPress(false);

        const element = getElement();
        if (element)
            focusSelf(element);
    }, []);
    const onTouchMove = useCallback((e: TouchEventType<E>) => {
        e.preventDefault();
        e.stopPropagation();
        const element = getElement();
        const touch = e.touches[0];
        // Be as generous as possible with touch events by checking all four corners of the radius too
        const offsets = [
            [0, 0] as const,
            [-touch.radiusX, -touch.radiusY] as const,
            [+touch.radiusX, -touch.radiusY] as const,
            [-touch.radiusX, +touch.radiusY] as const,
            [+touch.radiusX, +touch.radiusY] as const
        ] as const;
        let hoveringAtAnyPoint = false;
        for (const [x, y] of offsets) {
            const elementAtTouch = document.elementFromPoint((touch?.clientX ?? 0) + x, (touch?.clientY ?? 0) + y);
            hoveringAtAnyPoint ||= (element?.contains(elementAtTouch) ?? false)
        }
        setIsPressing(hoveringAtAnyPoint && getPointerDownStartedHere(), e);
        setHovering(hoveringAtAnyPoint);
    }, []);
    const onTouchEnd = useCallback((e: TouchEventType<E>) => {
        e.preventDefault();
        e.stopPropagation();
        const hovering = getHovering();
        const pointerDownStartedHere = getPointerDownStartedHere();

        setJustHandled(true);
        if (pointerDownStartedHere && hovering) {
            handlePress(e);
        }
        setWaitingForSpaceUp(false);
        setHovering(false);
        setPointerDownStartedHere(false);
        setIsPressing(false, e);
    }, []);

    const onPointerDown = useCallback((e: PointerEventType<E>) => {
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
    }, []);
    const onPointerMove = useStableCallback((e: PointerEventType<E>) => {
        let listeningForPress = getPointerDownStartedHere();
        // If we're hovering over this element and not holding down the mouse button (or whatever other primary button)
        // then we're definitely not in a press anymore (if we could we'd just wait for onPointerUp, but it could happen outside this element)
        if (!(e.buttons & 1))
            setPointerDownStartedHere(listeningForPress = false);


        if (listeningForPress) {
            const element = getElement();
            // Note: elementFromPoint starts reasonably expensive on a decent computer when on the order of 500 or so elements,
            // so we only test for hovering while actively attempting to detect a press
            const elementAtPointer = document.elementFromPoint(e.clientX, e.clientY);
            const hovering = element == elementAtPointer || element?.contains(elementAtPointer) || false;
            setHovering(hovering);
            setIsPressing(hovering && getPointerDownStartedHere(), e);
        }

    })
    const onPointerUp = useCallback((e: PointerEventType<E>) => {
        const hovering = getHovering();
        const pointerDownStartedHere = getPointerDownStartedHere();

        if (!excludePointer()) {
            setJustHandled(true);
            if (pointerDownStartedHere && hovering) {
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
    const onPointerEnter = useCallback((_e: PointerEventType<E>) => {
        setHovering(true);
    }, [])
    const onPointerLeave = useCallback((_e: PointerEventType<E>) => {
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
    })


    const handlePress = useStableCallback<NonNullable<typeof onPressSync>>((e) => {
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
                focusSelf(element as EventTarget as E);

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


    const onKeyDown = useStableCallback((e: KeyboardEventType<E>) => {
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
    })

    const onKeyUp = useStableCallback((e: KeyboardEventType<E>) => {
        const waitingForSpaceUp = getWaitingForSpaceUp();
        if (waitingForSpaceUp && e.key == " " && !excludeSpace()) {
            handlePress(e);
            setIsPressing(false, e);
        }
    })

    const onClick = useStableCallback((e: MouseEventType<E>) => {
        const element = getElement();
        if (onPressSync) {
            e.preventDefault();

            if (e.detail > 1) {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }
            else {
                // Listen for "programmatic" click events.
                if (
                    // Ignore the click events that were *just* handled with pointerup
                    getJustHandled() == false &&
                    // Ignore stray click events that were't fired SPECIFICALLY on this element
                    e.target == element &&
                    // Ignore click events that were fired on a radio that just became checked
                    // (Whenever the `checked` property is changed, all browsers fire a `click` event, no matter the reason for the change,
                    // but since everything's declarative and *we* were the reason for the change, 
                    // this will always be a duplicate event related to whatever we just did.)
                    element?.tagName == 'input' && (element as Element as HTMLInputElement).type == 'radio' && (element as Element as HTMLInputElement).checked
                ) {
                    // Intentional, for now. Programmatic clicks shouldn't happen in most cases.
                    // TODO: Remove this when I'm confident stray clicks won't be handled.
                    /* eslint-disable no-debugger */
                    debugger;
                    console.log("onclick was fired and will be handled as it doesn't look like it came from a pointer event", e);

                    setIsPressing(true, e);
                    requestAnimationFrame(() => {
                        setIsPressing(false, e);
                        handlePress(e);
                    });
                    handlePress(e);
                }
            }
        }
    });


    const onFocusOut = useStableCallback((e: FocusEventType<E>) => {
        setWaitingForSpaceUp(false);
        setIsPressing(false, e);
    })


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
            onTouchEnd: !hasPressEvent ? undefined : (!p ? onTouchEnd : undefined),
            onPointerDown: !hasPressEvent ? undefined : (p ? onPointerDown : undefined),
            onPointerCancel: !hasPressEvent ? undefined : (p ? onPointerDown : undefined),
            onPointerMove: !pointerDownStartedHere || !hasPressEvent ? undefined : (p ? onPointerMove : undefined),
            onPointerUp: !hasPressEvent ? undefined : (p ? onPointerUp : undefined),
            onPointerEnter: !hasPressEvent ? undefined : (p ? onPointerEnter : undefined),
            onPointerLeave: !hasPressEvent ? undefined : (p ? onPointerLeave : undefined),
            onfocusout: onFocusOut,
            onClick
        },
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
function _nodeSelectedTextLength(element: EventTarget | null | undefined) {
    if (element && element instanceof Node) {
        const selection = window.getSelection();

        for (let i = 0; i < (selection?.rangeCount ?? 0); ++i) {
            const range = selection!.getRangeAt(i)!;
            if (element.contains(range.endContainer) && !selection?.isCollapsed) {
                return selection!.toString().length;
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
export function setPressVibrate(func: () => void) {
    pulse = func;
}
