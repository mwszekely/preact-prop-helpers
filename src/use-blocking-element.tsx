
import "wicg-inert";
import "blocking-elements";
import { useLayoutEffect, useRef } from "preact/hooks";
import { isFocusable } from "tabbable";
import { BlockingElements } from "blocking-elements";

const blockingElements = (document as any).$blockingElements as BlockingElements;

/**
 * Allows an element to trap focus by applying the "inert" attribute to all sibling, aunt, and uncle nodes.
 * 
 * Automatically handles consecutive calls with a loosely applied stack operation 
 * (specifically via `blockingElements`, with a small polyfill because I'm not sure how long
 * it'll take to find its way into the spec, if ever)
 * @param target 
 */
export function useBlockingElement<E extends Element>(target: E | null) {


    useLayoutEffect(() => {
        addFocusHandler();
        return () => removeFocusHandler();
    }, []);

    useLayoutEffect(() => {
        if (target) {

            // Save the currently focused element
            // to whatever's currently at the top of the stack
            elementsToRestoreFocusTo.set(blockingElements.top, lastFocusedElement ?? document.body);
            blockingElements.push(target as Element as HTMLElement);
            let rafHandle = requestAnimationFrame(() => {
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
                elementsToRestoreFocusTo.get(blockingElements.top)?.focus();
                rafHandle = 0;
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

const elementsToRestoreFocusTo = new Map<Element | null, (Node & HTMLOrSVGElement)>();
let lastFocusedElement: (Node & HTMLOrSVGElement) = document.body;
let handlerCount = 0;
function addFocusHandler() {
    if (handlerCount === 0) {
        document.addEventListener("focus", focusHandler, { capture: true })
    }
    ++handlerCount;
}

function removeFocusHandler() {
    --handlerCount;
    if (handlerCount === 0) {
        document.removeEventListener("focus", focusHandler, { capture: true });
    }
}

function focusHandler(e: FocusEvent) {
    let focusedElement = e.target;
    if (focusedElement instanceof Node && document.body != focusedElement && document.body.contains(focusedElement)) {
        lastFocusedElement = focusedElement as (Node & HTMLOrSVGElement);
    }
}




