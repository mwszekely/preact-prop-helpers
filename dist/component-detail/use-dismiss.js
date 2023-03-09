import { useCallback, useEffect } from "preact/hooks";
import { useGlobalHandler } from "../dom-helpers/use-event-handler.js";
import { useRefElement } from "../dom-helpers/use-ref-element.js";
import { useActiveElement } from "../observers/use-active-element.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useStableGetter } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
/**
 * In general, each soft dismiss hook takes an `open` and an `onClose` prop.
 *
 * `open` in all cases referes to both whether or not the controlled surface is currently being shown,
 * but also whether that particular method of soft dismiss is enabled or not.
 *
 * E.G. If `escape` key dismissing is disabled, just have `open` false at all times for `escapeDismissParameters`.
 */
const _dummy = 0;
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
export function useEscapeDismiss({ escapeDismissParameters: { onClose, open, getWindow: unstableGetWindow, parentDepth, ...void1 }, refElementPopupReturn: { getElement, ...void2 } }) {
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
                const onClose2 = () => { stableOnClose("escape"); };
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
                        let _deepestElement = null;
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
/**
 * Handles events for dismiss events for things like popup menus or transient dialogs -- things where moving focus to a new area of the page means this component should close itself.
 *
 * @param param0
 * @returns
 */
export function useLostFocusDismiss({ refElementPopupReturn: { getElement: getPopupElement, ...void3 }, refElementSourceReturn, lostFocusDismiss: { open, onClose }, ...void1 }) {
    const { getElement: getSourceElement, ...void2 } = (refElementSourceReturn ?? {});
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    const stableOnClose = useStableCallback(onClose);
    const getOpen = useStableGetter(open);
    const onLastActiveElementChange = useCallback((newElement, _prevElement, _e) => {
        const open = getOpen();
        const sourceElement = getSourceElement?.();
        const popupElement = getPopupElement();
        if (!(sourceElement?.contains(newElement) || popupElement?.contains(newElement))) {
            if (open)
                stableOnClose();
        }
    }, [getSourceElement]);
    return { activeElementParameters: { onLastActiveElementChange } };
}
/**
 * Handles events for a backdrop on a modal dialog -- the kind where the user expects the modal to close when they click/tap outside of it.
 *
 * @param param0
 */
export function useBackdropDismiss({ backdropDismissParameters: { open, onClose: onCloseUnstable, ...void1 }, refElementPopupReturn: { getElement, ...void3 }, ...void2 }) {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    const getOpen = useStableGetter(open);
    const onClose = useStableCallback(onCloseUnstable);
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
            onClose();
        }
    }, []);
    useGlobalHandler(window, "mousedown", open ? onBackdropClick : null, { capture: true });
    useGlobalHandler(window, "touchstart", open ? onBackdropClick : null, { capture: true });
}
/**
 * Combines all the methods of dismissing a modal-ish or popup-ish component into one combined hook.
 *
 * This is similar to the "complete" series of list/grid navigation, in that it's the "outermost" hook of its type.
 */
export function useDismiss({ dismissParameters: { open: globalOpen, onClose: globalOnClose, closeOnBackdrop, closeOnEscape, closeOnLostFocus }, escapeDismissParameters: { getWindow, parentDepth } }) {
    const { refElementReturn: refElementSourceReturn, propsStable: propsStableSource } = useRefElement({ refElementParameters: {} });
    const { refElementReturn: refElementPopupReturn, propsStable: propsStablePopup } = useRefElement({ refElementParameters: {} });
    const onCloseBackdrop = useCallback(() => { return globalOnClose?.("backdrop"); }, [globalOnClose]);
    const onCloseEscape = useCallback(() => { return globalOnClose?.("escape"); }, [globalOnClose]);
    const onCloseFocus = useCallback(() => { return globalOnClose?.("lost-focus"); }, [globalOnClose]);
    const _v1 = useBackdropDismiss({ backdropDismissParameters: { onClose: onCloseBackdrop, open: (closeOnBackdrop && globalOpen) }, refElementPopupReturn });
    const _v2 = useEscapeDismiss({ escapeDismissParameters: { getWindow, onClose: onCloseEscape, open: (closeOnEscape && globalOpen), parentDepth }, refElementPopupReturn });
    const { activeElementParameters } = useLostFocusDismiss({ lostFocusDismiss: { onClose: onCloseFocus, open: (closeOnLostFocus && globalOpen) }, refElementPopupReturn, refElementSourceReturn });
    const getDocument = useCallback(() => {
        return getWindow().document;
    }, [getWindow]);
    const { activeElementReturn: { getActiveElement: _getActiveElement, getLastActiveElement: _getLastActiveElement, getWindowFocused: _getWindowFocused } } = useActiveElement({ activeElementParameters: { ...activeElementParameters, getWindow, getDocument } });
    return {
        refElementSourceReturn,
        refElementPopupReturn,
        propsStableSource,
        propsStablePopup
    };
}
//# sourceMappingURL=use-dismiss.js.map