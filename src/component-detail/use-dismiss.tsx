import { useCallback, useEffect } from "preact/hooks";
import { useGlobalHandler } from "../dom-helpers/use-event-handler.js";
import { UseRefElementReturnType, useRefElement } from "../dom-helpers/use-ref-element.js";
import { UseActiveElementParameters, useActiveElement } from "../observers/use-active-element.js";
import { OnPassiveStateChange } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useStableGetter } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { EnhancedEventHandler, enhanceEvent } from "../util/event.js";
import { ElementProps, FocusEventType, MouseEventType, Nullable } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";

/**
 * In general, each soft dismiss hook takes an `open` and an `onClose` prop.
 * 
 * `open` in all cases referes to both whether or not the controlled surface is currently being shown,
 * but also whether that particular method of soft dismiss is enabled or not.
 * 
 * E.G. If `escape` key dismissing is disabled, just have `open` false at all times for `escapeDismissParameters`.
 */
const _dummy = 0;

export interface UseEscapeDismissParameters<PopupElement extends Element> {
    refElementPopupReturn: Pick<UseRefElementReturnType<PopupElement>["refElementReturn"], "getElement">;
    escapeDismissParameters: {

        /**
         * Called when the component is dismissed.
         * 
         * Presumably you'll set some state that changes `open` to false during this, otherwise it's not a soft dismiss, but you can do whatever you want I guess.
         */
        onClose: EnhancedEventHandler<KeyboardEvent, { reason: "escape" | "lost-focus"}>;

        /** 
         * Whether the surface controlled by the `Escape` key is currently open. 
         * Can also be `false` to force the `Escape` key to do nothing.
         */
        open: boolean;

        /**
         * The escape key event handler is attached onto the window, so we need to know which window.
         */
        getWindow(): Window;

        /**
         * Get this from context somewhere, and increment it in that context.
         * 
         * If multiple instances of Preact are on the page, tree depth is used as a tiebreaker
         */
        parentDepth: number;
    }
}


const MagicWindowKey = ("__preact-prop-helpers-escape-key-dismiss__") as keyof Window;
interface WindowEscapeKeyInfo {
    microtaskQueued: boolean;
    elementQueue: Map<Element, { onClose: () => void, depth: number, treeDepth: number }>;//(Element | null)[];
}

function getElementDepth(element: Element) {
    let depth = 0;
    let parent = element.parentElement;
    while (parent) {
        depth += 1;
        parent = parent.parentElement;
    }

    return depth;
}

/**
 * Adds event handlers for a modal-like soft-dismiss interaction.
 * 
 * That is, any clicks or taps outside of the given component, 
 * or any time the Escape key is pressed within the component,
 * (with various browser oddities regarding clicks on blank or inert areas handled)
 * the component will request to close itself.
 * 
 * Of course, if you don't do anything in the `onClose` function,
 * it won't be a soft dismiss anymore.
 * 
 * Handles events for pressing the `Escape` key to close the any currently open dialogs, tooltips, menus, popups, etc.
 * 
 * One press of the `Escape` key is guaranteed to only call `onClose` for *only one* component, and it is called on the component deepest in the DOM tree, differentiated by passing context information between parent and child.
 * 
 * @param param0 
 * @returns 
 */
export function useEscapeDismiss<PopupElement extends Element>({ escapeDismissParameters: { onClose, open, getWindow: unstableGetWindow, parentDepth, ...void1 }, refElementPopupReturn: { getElement, ...void2 } }: UseEscapeDismissParameters<PopupElement>): void {
    monitorCallCount(useEscapeDismiss);
    assertEmptyObject(void1);
    assertEmptyObject(void2);

    const stableOnClose = useStableCallback(onClose);
    const getWindow = useStableCallback(unstableGetWindow);
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
        const window = getWindow();
        (window as any)[MagicWindowKey] ??= ({ microtaskQueued: false, elementQueue: new Map() } as WindowEscapeKeyInfo)
        const info = window[MagicWindowKey] as WindowEscapeKeyInfo;

        if (open) {
            window.addEventListener("keydown", handler, { capture: true });

            return () => {
                const element = getElement();
                if (element && info.elementQueue)
                    info.elementQueue.delete(element);
                window.removeEventListener("keydown", handler, { capture: true });
            };
        }




        function handler(e: KeyboardEvent) {
            if (e.key == "Escape") {

                // We don't know which of the currently active soft dismisses will actually do something,
                // but ONE of them definitely will,
                // so we stop propagation to child nodes, but not to everyone on the window (stopImmediatePropagation).
                e.preventDefault();
                e.stopPropagation();



                // This is what at least one of the elements will call
                const onClose2 = () => { stableOnClose(enhanceEvent(e, { reason: "escape" })); };
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
                        let _deepestElement: Element | null = null;
                        let deepestOnClose: (() => void) | null = null;

                        for (const [element, { depth, onClose, treeDepth }] of elementQueue) {
                            let tieBroken = false;
                            if (depth == deepestDepth) {
                                if (treeDepth > deepestTreeDepth) {
                                    tieBroken = true;
                                }
                            }

                            if (depth > deepestDepth || (depth == deepestDepth && tieBroken)) {
                                deepestDepth = depth;
                                _deepestElement = element;
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
}

export interface UseLostFocusDismissParameters<SourceElement extends Element | null, PopupElement extends Element> {
    lostFocusDismiss: { open: boolean, onClose(): void; };
    refElementSourceReturn: Nullable<Pick<UseRefElementReturnType<NonNullable<SourceElement>>["refElementReturn"], "getElement">>;
    refElementPopupReturn: Pick<UseRefElementReturnType<PopupElement>["refElementReturn"], "getElement">;
}

export interface UseLostFocusDismissReturnType<_SourceElement extends Element | null, _PopupElement extends Element> {
    activeElementParameters: Pick<UseActiveElementParameters["activeElementParameters"], "onLastActiveElementChange">
}

/**
 * Handles events for dismiss events for things like popup menus or transient dialogs -- things where moving focus to a new area of the page means this component should close itself.
 * 
 * @param param0 
 * @returns 
 */
export function useLostFocusDismiss<SourceElement extends Element | null, PopupElement extends Element>({ refElementPopupReturn: { getElement: getPopupElement, ...void3 }, refElementSourceReturn, lostFocusDismiss: { open, onClose }, ...void1 }: UseLostFocusDismissParameters<SourceElement, PopupElement>): UseLostFocusDismissReturnType<SourceElement, PopupElement> {
    monitorCallCount(useLostFocusDismiss);
    const { getElement: getSourceElement, ...void2 } = (refElementSourceReturn ?? {});

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);


    const stableOnClose = useStableCallback(onClose);
    const getOpen = useStableGetter(open);
    const onLastActiveElementChange = useCallback<OnPassiveStateChange<Element | null, FocusEventType<any>>>((newElement, _prevElement, _e) => {
        const open = getOpen();
        const sourceElement = getSourceElement?.();
        const popupElement = getPopupElement();
        if (!(sourceElement?.contains(newElement) || popupElement?.contains(newElement))) {
            if (open)
                stableOnClose();
        }
    }, [getSourceElement]);

    return { activeElementParameters: { onLastActiveElementChange } }
}

export interface UseBackdropDismissParameters<PopupElement extends Element> {
    backdropDismissParameters: { open: boolean, onClose: EnhancedEventHandler<MouseEvent, { reason: "escape" | "lost-focus" }>; };
    refElementPopupReturn: Pick<UseRefElementReturnType<PopupElement>["refElementReturn"], "getElement">;
}

/**
 * Handles events for a backdrop on a modal dialog -- the kind where the user expects the modal to close when they click/tap outside of it.
 * 
 * @param param0 
 */
export function useBackdropDismiss<PopupElement extends Element>({ backdropDismissParameters: { open, onClose: onCloseUnstable, ...void1 }, refElementPopupReturn: { getElement, ...void3 }, ...void2 }: UseBackdropDismissParameters<PopupElement>): void {
    monitorCallCount(useBackdropDismiss);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    const getOpen = useStableGetter(open);
    const onClose = useStableCallback(onCloseUnstable);

    const onBackdropClick = useCallback(function onBackdropClick(e: MouseEventType<any>) {
        if (!getOpen())
            return;


        // Basically, "was this event fired on an element not contained by the modal?"
        // There are multiple ways browser react to "interacting with nothing", and this takes care of everything.

        let element = getElement();

        let foundInsideClick = false;

        if (e.target && element && element.contains(e.target as Node)) {
            foundInsideClick = true;
        }

        if (!foundInsideClick) {
            onClose(enhanceEvent(e, { reason: "escape" }));
        }
    }, []);

    useGlobalHandler(window, "mousedown", open ? onBackdropClick : null, { capture: true });
    useGlobalHandler(window, "touchstart", open ? onBackdropClick : null, { capture: true });
}

export type DismissListenerTypes = "backdrop" | "lost-focus" | "escape";

export interface UseDismissParameters<Listeners extends DismissListenerTypes> {
    dismissParameters: {

        /** 
         * Whether or not this component is currently open/showing itself, as opposed to hidden/closed.
         * Event handlers are only attached when this is `true`.
         */
        open: boolean;

        /**
         * Called any time the user has requested the component be dismissed for the given reason.
         * 
         * You can choose to ignore a reason if you want, but it's better to set `closeOn${reason}` to `false` instead.
         */
        onClose: (reason: Listeners) => void;

        /**
         * If `true`, then this component closes when a click is detected anywhere not within the component
         * (determined by being in a different branch of the DOM)
         */
        closeOnBackdrop: Listeners extends "backdrop" ? true : false;

        /**
         * If `true`, then this component closes when the Escape key is pressed, and no deeper component
         * is listening for that same Escape press (i.e. only one Escape dismiss happens per key press)
         */
        closeOnEscape: Listeners extends "escape" ? true : false;

        /**
         * If `true`, then this component closes whenever focus is sent to an element not contained by this one
         * (using the same rules as `closeOnBackdrop`)
         */
        closeOnLostFocus: Listeners extends "lost-focus" ? true : false;
    }
    escapeDismissParameters: Pick<UseEscapeDismissParameters<any>["escapeDismissParameters"], "getWindow" | "parentDepth">;
}

export interface UseDismissReturnType<SourceElement extends Element | null, PopupElement extends Element> {
    /**
     * If this dismissable component has a specific element that caused it to appear (a button, for example),
     * provide it with these props.
     * 
     * * REQUIRED for things like menus that pop up from a button and for whom losing focus counts as requesting closure. 
     * * OPTIONAL for things like dialogs that can appear out of nowhere and for whom losing focus is actively impossible (due to focus traps).
     */
    refElementSourceReturn: UseRefElementReturnType<NonNullable<SourceElement>>["refElementReturn"];

    /**
     * This one's always required though
     */
    refElementPopupReturn: UseRefElementReturnType<PopupElement>["refElementReturn"];

    propsStableSource: ElementProps<NonNullable<SourceElement>>;
    propsStablePopup: ElementProps<NonNullable<PopupElement>>;

}

/**
 * Combines all the methods of dismissing a modal-ish or popup-ish component into one combined hook.
 * 
 * This is similar to the "complete" series of list/grid navigation, in that it's the "outermost" hook of its type.
 */
export function useDismiss<Listeners extends DismissListenerTypes, SourceElement extends Element | null, PopupElement extends Element>({ dismissParameters: { open: globalOpen, onClose: globalOnClose, closeOnBackdrop, closeOnEscape, closeOnLostFocus }, escapeDismissParameters: { getWindow, parentDepth } }: UseDismissParameters<Listeners>): UseDismissReturnType<SourceElement, PopupElement> {
    monitorCallCount(useDismiss);
    
    const { refElementReturn: refElementSourceReturn, propsStable: propsStableSource } = useRefElement<NonNullable<SourceElement>>({ refElementParameters: {} });
    const { refElementReturn: refElementPopupReturn, propsStable: propsStablePopup } = useRefElement<PopupElement>({ refElementParameters: {} });

    const onCloseBackdrop = useCallback(() => { return globalOnClose?.("backdrop" as Listeners); }, [globalOnClose]);
    const onCloseEscape = useCallback(() => { return globalOnClose?.("escape" as Listeners); }, [globalOnClose]);
    const onCloseFocus = useCallback(() => { return globalOnClose?.("lost-focus" as Listeners); }, [globalOnClose]);
    const _v1: void = useBackdropDismiss<PopupElement>({ backdropDismissParameters: { onClose: onCloseBackdrop, open: (closeOnBackdrop && globalOpen) }, refElementPopupReturn });
    const _v2: void = useEscapeDismiss<PopupElement>({ escapeDismissParameters: { getWindow, onClose: onCloseEscape, open: (closeOnEscape && globalOpen), parentDepth }, refElementPopupReturn });
    const { activeElementParameters } = useLostFocusDismiss<SourceElement, PopupElement>({ lostFocusDismiss: { onClose: onCloseFocus, open: (closeOnLostFocus && globalOpen) }, refElementPopupReturn, refElementSourceReturn });

    const getDocument = useCallback(() => {
        return getWindow().document;
    }, [getWindow])

    const {
        activeElementReturn: {
            getActiveElement: _getActiveElement,
            getLastActiveElement: _getLastActiveElement,
            getWindowFocused: _getWindowFocused
        }
    } = useActiveElement({ activeElementParameters: { ...activeElementParameters, getWindow, getDocument } });

    return {
        refElementSourceReturn,
        refElementPopupReturn,
        propsStableSource,
        propsStablePopup
    }
}
