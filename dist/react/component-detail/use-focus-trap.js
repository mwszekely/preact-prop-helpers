import { isFocusable, isTabbable } from "tabbable";
import { useBlockingElement } from "../dom-helpers/use-blocking-element.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { getDocument } from "../util/get-window.js";
import { useEffect } from "../util/lib.js";
import { useMonitoring } from "../util/use-call-count.js";
import { useTagProps } from "../util/use-tag-props.js";
/**
 * Allows you to move focus to an isolated area of the page, restore it when finished, and **optionally trap it there** so that you can't tab out of it.
 *
 * @remarks By default, this implements a focus trap using the Blocking Elements...uh...[proposal](https://github.com/whatwg/html/issues/897)?
 * Not that it really looks like it's going anywhere, but until something better comes along, [the polyfill](#https://github.com/PolymerLabs/blocking-elements) has been working pretty great.
 *
 * @compositeParams
 */
export function useFocusTrap({ focusTrapParameters: { onlyMoveFocus, trapActive, focusPopup: focusSelfUnstable, focusOpener: focusOpenerUnstable }, activeElementParameters, refElementReturn }) {
    return useMonitoring(function useFocusTrap() {
        const focusSelf = useStableCallback(focusSelfUnstable);
        const focusOpener = useStableCallback(focusOpenerUnstable);
        useEffect(() => {
            const document = getDocument();
            if (trapActive) {
                let top = getTop();
                const lastFocusedInThisComponent = getLastActiveWhenOpen();
                if (false && lastFocusedInThisComponent && lastFocusedInThisComponent?.isConnected) {
                    focusSelf(lastFocusedInThisComponent, () => lastFocusedInThisComponent);
                }
                else {
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
export function findFirstFocusable(element) {
    return findFirstCondition(element, node => node instanceof Element && isFocusable(node));
}
/**
 * Returns the first tabbable element contained within the given node, or null if none are found.
 */
export function findFirstTabbable(element) {
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
//# sourceMappingURL=use-focus-trap.js.map