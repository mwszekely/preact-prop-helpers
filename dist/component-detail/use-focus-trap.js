import { useEffect } from "preact/hooks";
import { isFocusable, isTabbable } from "tabbable";
import { useBlockingElement } from "../dom-helpers/use-blocking-element.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
//const elementsToRestoreFocusTo = new Map<Element | null, (Node & HTMLOrSVGElement)>();
export function useFocusTrap({ focusTrapParameters: { onlyMoveFocus, trapActive, focusPopup: focusSelfUnstable, focusOpener: focusOpenerUnstable }, refElementReturn }) {
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
                top ??= refElementReturn.getElement();
                console.assert(!!top);
                if (top)
                    focusSelf(top, () => findFirstFocusable(top));
            }
        }
        else {
            const lastActive = getLastActiveWhenClosed();
            if (lastActive)
                focusOpener(lastActive);
        }
    }, [trapActive]);
    const { getElement } = refElementReturn;
    const { getTop, getLastActiveWhenClosed, getLastActiveWhenOpen } = useBlockingElement(trapActive && !onlyMoveFocus, getElement);
    return {
        props: { "aria-modal": trapActive ? "true" : undefined },
        focusTrapReturn: {}
    };
}
/**
 * Returns the first focusable element contained within the given node, or null if none are found.
 * @param element
 * @returns
 */
export function findFirstFocusable(element) {
    return findFirstCondition(element, node => node instanceof Element && isFocusable(node));
}
/**
 * Returns the first tabbable element contained within the given node, or null if none are found.
 * @param element
 * @returns
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