import { isTabbable } from "tabbable";
import { getBuildMode } from "./mode.js";
import { generateStack } from "./stack.js";

/**
 * If you want a single place to put a debugger for tracking focus,
 * here:
 */
export function focus(e: Element | null) {
    if (getBuildMode() === 'development' && (window as any).LOG_FOCUS_CHANGES === true) {
        console.log(`Focus changed to ${(e?.tagName || "").toLowerCase().padStart(6)}:`, e);
        console.log(generateStack());
    }
    (e as HTMLElement)?.focus?.();
}

/**
 * When an element unmounts, default HTML behavior is to just send focus to the body, which is wildly unhelpful. It means you lose your place in the keyboard tab order.
 * 
 * If you still have access to the element that's unmounting, or perhaps its parent from beforehand, this will find the next suitable element to send focus to instead of the body.
 * 
 * **Important**: This function is linear on the number of DOM nodes in your document, so it's not particularly fast. Only call it once when you need its value, not every time tab focus changed or something.
 * 
 * @param unmountingElement 
 * @returns 
 */
export function findBackupFocus(unmountingElement: Element | null | undefined): HTMLElement {
    if (unmountingElement == null)
        return (globalThis.document.body);
        
    let document = unmountingElement.ownerDocument;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);

    let node = walker.firstChild();
    let bestCandidateBefore: HTMLElement | null = null;
    let bestCandidateAfter: HTMLElement | null = null;
    let w = false;

    while (node) {
        let pos = node.compareDocumentPosition(unmountingElement);
        if (pos & Node.DOCUMENT_POSITION_DISCONNECTED) {
            if (!w)
                console.warn("Can't focus anything near a disconnected element");
            w = true;
        }

        if (pos & Node.DOCUMENT_POSITION_PRECEDING) {
            // The unmounting element is before this element we're treewalking.
            // That means the next tabbable element we find is the candidate we really want.
            if (node instanceof Element) {
                if (isTabbable(node)) {
                    bestCandidateAfter = node as HTMLElement;
                    break;
                }
            }
        }
        else if (pos & Node.DOCUMENT_POSITION_FOLLOWING) {
            // The unmounting element is after this element we're treewalking.
            // That means the we're getting closer and closer.
            // If this element is tabbable, then it's even closer than any other tabbable element we've saved up to this point.
            if (node instanceof Element) {
                if (isTabbable(node)) {
                    bestCandidateBefore = node as HTMLElement;
                }
            }
        }

        node = walker.nextNode();
    }

    return bestCandidateAfter ?? bestCandidateBefore ?? document.body;
}
