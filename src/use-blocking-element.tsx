
import "wicg-inert";
import "blocking-elements";
import { useLayoutEffect, useRef } from "preact/hooks";
import { isFocusable } from "tabbable";
import { BlockingElements } from "blocking-elements";
import { useActiveElement } from "./use-active-element";

const blockingElements = (document as any).$blockingElements as BlockingElements;
const elementsToRestoreFocusTo = new Map<Element | null, (Node & HTMLOrSVGElement)>();

/**
 * Allows an element to trap focus by applying the "inert" attribute to all sibling, aunt, and uncle nodes.
 * 
 * Automatically handles consecutive calls with a loosely applied stack operation 
 * (specifically via `blockingElements`, with a small polyfill because I'm not sure how long
 * it'll take to find its way into the spec, if ever)
 * @param target 
 */
export function useBlockingElement<E extends Element>(target: E | null) {

    const { getActiveElement, getLastActiveElement } = useActiveElement();

    useLayoutEffect(() => {
        if (target) {

            // Save the currently focused element
            // to whatever's currently at the top of the stack
            elementsToRestoreFocusTo.set(blockingElements.top, getLastActiveElement() ?? document.body);
            blockingElements.push(target as Element as HTMLElement);
            let rafHandle = requestAnimationFrame(() => {
                // TODO: This extra queueMicrotask is needed for
                // ...reasons?
                queueMicrotask(() => {
                    findFirstFocusable(blockingElements.top!)?.focus();
                    rafHandle = 0;
                })
            })

            return () => {
                if (rafHandle)
                    cancelAnimationFrame(rafHandle);

                blockingElements.remove(target as Element as HTMLElement);
            };
        }
        else {

            // Restore the focus to the element
            // that has returned to the top of the stack
            let rafHandle = requestAnimationFrame(() => {
                queueMicrotask(() => {
                    elementsToRestoreFocusTo.get(blockingElements.top)?.focus();
                    rafHandle = 0;
                });
            });

            return () => {
                if (rafHandle)
                    cancelAnimationFrame(rafHandle);
            };
        }
    }, [target]);

}


function findFirstFocusable(element: Node) {
    // Now that the dialog is open, find the first focusable element
    const treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => (node instanceof Element && isFocusable(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP) })

    const firstFocusable = treeWalker.firstChild() as (Element & HTMLOrSVGElement) | null;

    return firstFocusable;
}




