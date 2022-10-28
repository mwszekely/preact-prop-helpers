import { h } from "preact";
import { useCallback, useEffect } from "preact/hooks";
import { useActiveElement, UseActiveElementParameters } from "./use-active-element";
import { assertEmptyObject } from "./use-child-manager";
import { useGlobalHandler } from "./use-event-handler";
import { OnPassiveStateChange } from "./use-passive-state";
import { useRefElement, UseRefElementReturnType } from "./use-ref-element";
import { useStableCallback } from "./use-stable-callback";
import { useStableGetter } from "./use-stable-getter";


export interface UseEscapeDismissParameters<SourceElement extends Element> {
    refElementReturn: Pick<UseRefElementReturnType<SourceElement>["refElementReturn"], "getElement">;
    escapeDismissParameters: {
        /**
         * Must be a function that returns all elements that count as "within" this component (just the parents of each, not all their children too).
         * 
         * Usually just a single element, but e.g. a Menu + MenuButton could have two.
         */
        //getElements: () => ((Element | null)[]);

        /**
         * Called when the component is dismissed.
         * 
         * Presumably you'll set some state that changes `open` to false during this, otherwise it's not a soft dismiss, but you can do whatever you want I guess.
         */
        onClose(reason: "escape" | "lost-focus"): void;

        open: boolean;

        /**
         * The escape key event handler is attached onto the window when 
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
 * **IMPORTANT**: `SourceElement` refers to the element that causes the soft dismiss surface to appear, NOT the soft dismiss surface itself!
 * 
 * @param param0 
 * @returns 
 */
export function useEscapeDismiss<SourceElement extends Element>({ escapeDismissParameters: { onClose, open, getWindow: unstableGetWindow, parentDepth, ...void1 }, refElementReturn: { getElement, ...void2 } }: UseEscapeDismissParameters<SourceElement>) {
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

        window.addEventListener("keydown", handler, { capture: true });

        return () => window.removeEventListener("keydown", handler, { capture: true });

        function handler(e: KeyboardEvent) {
            if (e.key == "Escape") {

                // We don't know which of the currently active soft dismisses will actually do something,
                // but ONE of them definitely will,
                // so we stop propagation to child nodes, but not to everyone on the window (stopImmediatePropagation).
                e.preventDefault();
                e.stopPropagation();



                // This is what at least one of the elements will call
                const onClose2 = () => { stableOnClose("escape"); };
                const element = getElement();
                if (element) {
                    const treeDepth = getElementDepth(element);
                    const depth = getDepth();
                    info.elementQueue.set(element, { depth, onClose: onClose2, treeDepth });
                }


                if (!info.microtaskQueued) {
                    info.microtaskQueued = true;
                    queueMicrotask(() => {

                        const { elementQueue } = info;
                        info.microtaskQueued = false;
                        info.elementQueue = new Map();

                        let deepestDepth = -Infinity;
                        let deepestTreeDepth = -Infinity;
                        let deepestElement: Element | null = null;
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
                                deepestElement = element;
                                deepestTreeDepth = treeDepth;
                                deepestOnClose = onClose;
                            }
                        }
                        deepestOnClose?.();
                    });
                }
            }
        }

    }, [open]);


}

export interface UseLostFocusDismissParameters<SourceElement extends Element, PopupElement extends Element> {
    lostFocusDismiss: { open: boolean, onClose(): void; };
    refElementSourceReturn: Pick<UseRefElementReturnType<SourceElement>["refElementReturn"], "getElement">;
    refElementPopupReturn: Pick<UseRefElementReturnType<PopupElement>["refElementReturn"], "getElement">;
}

export interface UseLostFocusDismissReturnType<SourceElement extends Element, PopupElement extends Element> {
    activeElementParameters: Pick<UseActiveElementParameters["activeElementParameters"], "onActiveElementChange">
}

/**
 * Handles events for dismiss events for things like popup menus or transient dialogs -- things where moving focus to a new area of the page means this component should close itself.
 * 
 * @param param0 
 * @returns 
 */
export function useLostFocusDismiss<SourceElement extends Element, PopupElement extends Element>({ refElementPopupReturn: { getElement: getPopupElement, ...void3 }, refElementSourceReturn: { getElement: getSourceElement, ...void2 }, lostFocusDismiss: { open, onClose }, ...void1 }: UseLostFocusDismissParameters<SourceElement, PopupElement>): UseLostFocusDismissReturnType<SourceElement, PopupElement> {

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);

    const stableOnClose = useStableCallback(onClose);
    const getOpen = useStableGetter(open);
    const onActiveElementChange = useCallback<OnPassiveStateChange<Element | null>>((newElement, prevElement) => {
        const open = getOpen();
        const sourceElement = getSourceElement();
        const popupElement = getPopupElement();
        if (!(sourceElement?.contains(newElement) || popupElement?.contains(newElement))) {
            if (open)
                stableOnClose();
        }
    }, []);

    return { activeElementParameters: { onActiveElementChange } }
}

/*
export interface UseSoftDismissParameters<SourceElement extends Element, PopupElement extends Element> extends UseLostFocusDismissParameters<SourceElement, PopupElement>, UseEscapeDismissParameters<SourceElement> { }

export function useSoftDismiss<SourceElement extends Element, PopupElement extends Element>({ escapeDismissParameters, lostFocusDismiss, refElementPopupReturn, refElementReturn, refElementSourceReturn, ..._void3 }: UseSoftDismissParameters<SourceElement, PopupElement>) {
    const { activeElementParameters, ...void2 } = useLostFocusDismiss({ lostFocusDismiss, refElementPopupReturn, refElementSourceReturn });
    const _void1: void = useEscapeDismiss({ escapeDismissParameters, refElementReturn });
}*/

export interface UseBackdropDismissParameters<PopupElement extends Element> {
    backdropDismiss: { open: boolean, onClose(): void; };
    refElementReturn: Pick<UseRefElementReturnType<PopupElement>["refElementReturn"], "getElement">;
}

/**
 * Handles events for a backdrop on a modal dialog -- the kind where the user expects the modal to close when they click/tap outside of it.
 * 
 * @param param0 
 */
export function useBackdropDismiss<PopupElement extends Element>({ backdropDismiss: {  open, onClose: onCloseUnstable, ...void1 }, refElementReturn: { getElement, ...void3 }, ...void2 }: UseBackdropDismissParameters<PopupElement>) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    const getOpen = useStableGetter(open);
    const onClose = useStableCallback(onCloseUnstable);

    const onBackdropClick = useCallback(function onBackdropClick(e: h.JSX.TargetedEvent<any>) {
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
            onClose();
        }
    }, []);

    useGlobalHandler(window, "mousedown", open ? onBackdropClick : null, { capture: true });
    useGlobalHandler(window, "touchstart", open ? onBackdropClick : null, { capture: true });
}
