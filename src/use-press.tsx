import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { UseRefElementReturnType } from "use-ref-element";
import { useGlobalHandler } from "./use-event-handler";
import { useForceUpdate } from "./use-force-update";
import { useStableCallback } from "./use-stable-callback";
import { useState } from "./use-state";

interface PP<E extends Node> {
    /**
     * What should happen when this widget has been "pressed".
     * 
     * This must be a sync event handler; async handlers must be taken care of externally.
     */
    onPressSync: ((e: h.JSX.TargetedEvent<E>) => void) | null | undefined;
    exclude: undefined | { click?: "exclude" | undefined, space?: "exclude" | undefined, enter?: "exclude" | undefined };
    focusSelf(element: E): void;
    onPseudoActiveStart(): void;
    onPseudoActiveStop(): void;
}

export type UsePressParametersOmits = keyof PP<any>;

export interface UsePressParameters<E extends Node, PPOmits extends UsePressParametersOmits> {
    refElementReturn: Required<Pick<UseRefElementReturnType<E>["refElementReturn"], "getElement">>;
    pressParameters: Omit<PP<E>, PPOmits>;
}

export interface UsePressReturnType<E extends Element> {
    pressReturn: {
        propsStable: h.JSX.HTMLAttributes<E>;
    }
}

/**
 * Adds the necessary event handlers to create a "press"-like event for
 * any element, whether it's a native <BUTTON> or regular <DIV>.
 * 
 * Notably, the following cases are covered:
 * * The target element is properly focused, even on iOS Safari (*especially* on iOS Safari)
 * * Double-clicks won't select text. 
 * * Conversely, manually selecting text won't invoke a press.
 * * Keyboard events &mdash; `enter` immediately invokes the handler, while `space` invokes it on keyup.
 * * Haptic feedback (on, like, the one browser combination that supports it &mdash; this can be disabled app-wide with `setButtonVibrate`)
 * 
 * In addition, when the CSS `:active` pseudo-class would apply to a normal button
 * (i.e. when holding the spacebar or during mousedown), `{ "data-pseudo-active": "true" }`
 * is added to the props.  You can either let it pass through and style it through new CSS,
 * or inspect the returned props for it and add e.g. an `.active` class for existing CSS
 * 
 * @param onClickSync 
 * @param exclude Whether the polyfill shouldn't apply (can specify for specific interactions)
 */
export function usePress<E extends Element>(args: UsePressParameters<E, never>): UsePressReturnType<E> {
    const {
        refElementReturn: { getElement },
        pressParameters: { exclude, focusSelf, onPressSync, onPseudoActiveStart, onPseudoActiveStop }
    } = args;

    const stableOnPseudoActiveStart = useStableCallback(onPseudoActiveStart);
    const stableOnPseudoActiveStop = useStableCallback(onPseudoActiveStop);

    // A button can be activated in multiple ways, so on the off chance
    // that multiple are triggered at once, we only *actually* register
    // a press once all of our "on" signals have turned back to "off".
    // We approximate this by just incrementing when active, and
    // decrementing when deactivated.
    //
    // As an emergency failsafe, when the element loses focus,
    // this is reset back to 0.
    const [activeDuringRender, setActive, getActive] = useState(0);
    const forceUpdate = useForceUpdate();

    //const { getElement } = refElementReturn;

    // If we the current text selection changes to include this element
    // DURING e.g. a mousedown, then we don't want the mouseup to "count", as it were,
    // because its only purpose was selecting text, not clicking buttons.
    //
    // To catch this, any time the text selection includes us while in the middle
    // of a click, this flag is set, which cancels the activation of a press.
    // The flag is reset any time the selection is empty or the button is
    // no longer active.
    const [textSelectedDuringActivationStartTime, setTextSelectedDuringActivationStartTime] = useState<Date | null>(null);
    const pseudoActive = (activeDuringRender && (textSelectedDuringActivationStartTime == null));
    useEffect(() => { if (pseudoActive) { stableOnPseudoActiveStart(); } else { stableOnPseudoActiveStop(); } return () => { if (pseudoActive) stableOnPseudoActiveStop(); } }, [pseudoActive])

    useGlobalHandler(document, "selectionchange", _ => {
        setTextSelectedDuringActivationStartTime(prev => nodeSelectedTextLength(getElement()) == 0 ? null : prev != null ? prev : new Date());
    });

    useEffect(() => {
        if (activeDuringRender == 0)
            setTextSelectedDuringActivationStartTime(null);

    }, [activeDuringRender == 0]);

    const onActiveStart = useStableCallback<NonNullable<typeof onPressSync>>((_) => {
        setActive(a => ++a);
    });

    const onActiveStop = useStableCallback<NonNullable<typeof onPressSync>>((e) => {
        setActive(a => Math.max(0, --a));

        const currentTime = new Date();
        const timeDifference = (textSelectedDuringActivationStartTime == null ? null : +currentTime - +textSelectedDuringActivationStartTime);
        const charactersSelected = nodeSelectedTextLength(getElement())

        // If we're selecting text (heuristically determined by selecting for longer than 1/4 a second, or more than 2 characters)
        // then this isn't a press event.
        // TODO: This should measure glyphs instead of characters.
        if (charactersSelected > 1 || ((timeDifference ?? 0) > 250 && charactersSelected >= 1)) {
            e.preventDefault();
            return;
        }

        let active = getActive();   // We query if we're active *after* calling setState because we count a press iff we're now at 0.
        if (active <= 0) {
            handlePress(e);
            forceUpdate();  // TODO: Remove when issue resolved https://github.com/preactjs/preact/issues/3731
        }
    });

    const handlePress = useStableCallback<NonNullable<typeof onPressSync>>((e) => {
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
            if (element && "focus" in (element as EventTarget as HTMLElement))
                focusSelf(element as EventTarget as E);
            //(element as EventTarget as HTMLElement | null)?.focus();

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

    const onMouseDown = useStableCallback((e: h.JSX.TargetedMouseEvent<E>) => {
        if (onPressSync && !excludes("click", exclude)) {
            // Stop double clicks from selecting text in an component that's *supposed* to be acting like a button,
            // but also don't prevent the user from selecting that text manually if they really want to
            // (which user-select: none would do, but cancelling a double click on mouseDown doesn't)
            if (e.detail > 1) {
                e.preventDefault();
            }


            if (e.button === 0) {
                onActiveStart(e);
            }
        }
    })
    const onMouseUp = useStableCallback((e: h.JSX.TargetedMouseEvent<E>) => {
        if (onPressSync && !excludes("click", exclude)) {
            if (e.button === 0 && getActive() > 0) {
                onActiveStop(e);
            }
        }
    });


    const onMouseLeave = useStableCallback(() => {
        if (onPressSync && !excludes("click", exclude)) {
            setActive(0);
        }
    });

    const onKeyDown = useStableCallback((e: h.JSX.TargetedKeyboardEvent<E>) => {
        if (onPressSync) {
            if (e.key == " " && !excludes("space", exclude)) {
                // We don't actually activate it on a space keydown
                // but we do preventDefault to stop the page from scrolling.
                onActiveStart(e);
                e.preventDefault();
            }

            if (e.key == "Enter" && !excludes("enter", exclude)) {
                e.preventDefault();
                onActiveStart(e);
                onActiveStop(e);
            }
        }
    })

    const onKeyUp = useStableCallback((e: h.JSX.TargetedKeyboardEvent<E>) => {
        if (onPressSync && e.key == " " && !excludes("space", exclude))
            onActiveStop(e);
    })

    const onClick = useStableCallback((e: h.JSX.TargetedMouseEvent<E>) => {
        if (onPressSync) {
            e.preventDefault();
            if (e.detail > 1) {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }
        }
    });

    const onFocusOut = useStableCallback((_e: h.JSX.TargetedFocusEvent<E>) => {
        setActive(0);
    })


    const propsStable2 = useRef<h.JSX.HTMLAttributes<E>>({
        onKeyDown,
        onKeyUp,
        onMouseDown,
        onMouseUp,
        onMouseLeave,
        onClick,
        onfocusout: onFocusOut
    });

    return {
        pressReturn: {
            propsStable: propsStable2.current,
            /*propsUnstable: {
                style: (textSelectedDuringActivationStartTime != null) ? { cursor: "text" } : undefined,
                ...{ "data-pseudo-active": pseudoActive ? "true" : undefined } as {}
            },*/
        }
    };
}




/**
 * selection.containsNode doesn't account for selection.isCollapsed,
 * so here's a workaround for that.
 * 
 * We also only look for the selection end to only catch the 
 * essense of a non-existant "selectionstop" event.
 * 
 * @param element 
 * @returns 
 */
function nodeSelectedTextLength(element: EventTarget | null | undefined) {
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
 * @param func The function to run when a button is tapped.
 * (Default is `() => navigator.vibrate(10)` in browsers that support it, a noop otherwise)
 */
export function setPressVibrate(func: () => void) {
    pulse = func;
}



function excludes(target: "click" | "space" | "enter", exclude: undefined | { click?: "exclude" | undefined, space?: "exclude" | undefined, enter?: "exclude" | undefined }) {
    if (exclude?.[target])
        return true;

    return false;
}
