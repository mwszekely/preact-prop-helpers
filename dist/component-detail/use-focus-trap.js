import { isFocusable, isTabbable } from "tabbable";
import { useBlockingElement } from "../dom-helpers/use-blocking-element.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { assertEmptyObject } from "../util/assert.js";
import { useEffect } from "../util/lib.js";
import { monitored } from "../util/use-call-count.js";
import { useTagProps } from "../util/use-tag-props.js";
const P = `PropNames.FocusTrapParameters`;
const R = `PropNames.FocusTrapReturn`;
export const PropNames_FocusTrapParameters_trapActive = `${P}.trapActive`;
export const PropNames_FocusTrapParameters_onlyMoveFocus = `${P}.onlyMoveFocus`;
export const PropNames_FocusTrapParameters_focusPopup = `${P}.focusPopup`;
export const PropNames_FocusTrapParameters_focusOpener = `${P}.focusOpener`;
export const PropNames_FocusTrapReturn_pressing = `${R}.pressing`;
/**
 * Allows you to move focus to an isolated area of the page, restore it when finished, and **optionally trap it there** so that you can't tab out of it.
 *
 * @remarks By default, this implements a focus trap using the Blocking Elements...uh...[proposal](https://github.com/whatwg/html/issues/897)?
 * Not that it really looks like it's going anywhere, but until something better comes along, [the polyfill](#https://github.com/PolymerLabs/blocking-elements) has been working pretty great.
 *
 * @compositeParams
 */
export const useFocusTrap = monitored(function useFocusTrap({ "PropNames.FocusTrapParameters.focusOpener": focusOpenerUnstable, "PropNames.FocusTrapParameters.focusPopup": focusSelfUnstable, "PropNames.FocusTrapParameters.trapActive": trapActive, "PropNames.FocusTrapParameters.onlyMoveFocus": onlyMoveFocus, "PropNames.RefElementReturn.getElement": getElement, ...void2 }) {
    const focusSelf = useStableCallback(focusSelfUnstable);
    const focusOpener = useStableCallback(focusOpenerUnstable);
    useEffect(() => {
        if (trapActive) {
            let top = getTop();
            const lastFocusedInThisComponent = getLastActiveWhenOpen();
            if (false && lastFocusedInThisComponent && lastFocusedInThisComponent?.isConnected) {
                focusSelf(lastFocusedInThisComponent, () => lastFocusedInThisComponent);
            }
            else {
                top ??= getElement();
                console.assert(!!top);
                if (top)
                    focusSelf(top, () => findFirstFocusable(top));
            }
        }
        else {
            const lastActive = getLastActiveWhenClosed();
            let currentFocus = document.activeElement;
            // Restore focus to whatever caused this trap to trigger,
            // but only if it wasn't caused by explicitly focusing something else 
            // (generally if `onlyMoveFocus` is true)
            let top = getElement();
            if (currentFocus == document.body || currentFocus == null || top == currentFocus || top?.contains(currentFocus)) {
                if (lastActive)
                    focusOpener(lastActive);
            }
        }
    }, [trapActive]);
    const { "PropNames.BlockingElementReturn.getTarget": getTarget, "PropNames.BlockingElementReturn.getTop": getTop, "PropNames.BlockingElementReturn.getLastActiveWhenClosed": getLastActiveWhenClosed, "PropNames.BlockingElementReturn.getLastActiveWhenOpen": getLastActiveWhenOpen, "PropNames.ActiveElementParameters.onLastActiveElementChange": onLastActiveElementChange, ...void1 } = useBlockingElement({
        "PropNames.BlockingElementParameters.enabled": trapActive && !onlyMoveFocus,
        "PropNames.BlockingElementParameters.getTarget": getElement
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return {
        props: useTagProps({ "aria-modal": trapActive ? "true" : undefined }, "data-focus-trap")
    };
});
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
    if (element && filter(element))
        return element;
    console.assert(!!element);
    element ??= document.body;
    const treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => (filter(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP) });
    const firstFocusable = treeWalker.firstChild();
    return firstFocusable;
}
//# sourceMappingURL=use-focus-trap.js.map