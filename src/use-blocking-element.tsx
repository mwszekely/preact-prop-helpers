import "wicg-inert";
import "blocking-elements";
import { DocumentWithBlockingElements } from "blocking-elements";
import { useLayoutEffect } from "preact/hooks";
import { getDocument } from "./use-document-class";
import { useStableCallback } from "./use-stable-callback";

function blockingElements() { return (getDocument() as DocumentWithBlockingElements).$blockingElements }
/**
 * Allows an element to trap focus by applying the "inert" attribute to all sibling, aunt, and uncle nodes.
 * 
 * Automatically handles consecutive calls with a loosely applied stack operation 
 * (specifically via `blockingElements`, with a small polyfill because I'm not sure how long
 * it'll take to find its way into the spec, if ever)
 * @param target 
 */
export function useBlockingElement<E extends Element>(enabled: boolean, getTarget: () => (E | null)) {

    const stableGetTarget = useStableCallback(getTarget);

    /**
     * Push/pop the element from the blockingElements stack.
     */
    useLayoutEffect(() => {
        const target = stableGetTarget();

        if (enabled) {
            // Sometimes blockingElements will fail if, for example,
            // the target element isn't connected to document.body.
            // This is rare, but it's better to fail silently with weird tabbing behavior
            // than to crash the entire application.
            try {
                blockingElements().push(target as Element as HTMLElement);
                return () => {
                    blockingElements().remove(target as Element as HTMLElement);
                };
            }
            catch (ex) {
                // Well, semi-silently.
                console.error(ex);
            }
        }
    }, [enabled]);
}

export function getTopElement() {
    return blockingElements().top;
}


