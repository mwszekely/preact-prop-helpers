import "blocking-elements";
import { DocumentWithBlockingElements } from "blocking-elements";
import { useLayoutEffect } from "preact/hooks";
import "wicg-inert";
import { useActiveElement } from "../observers/use-active-element";
import { returnNull, usePassiveState } from "../preact-extensions/use-passive-state";
import { useStableCallback } from "../preact-extensions/use-stable-callback";
import { getDocument } from "./use-document-class";

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

    const getDocument = useStableCallback(() => (getTarget()?.ownerDocument ?? globalThis.document));
    useActiveElement({
        activeElementParameters: {
            getDocument,
            onLastActiveElementChange: useStableCallback((e: Element) => {
                if (e) {
                    if (enabled)
                        setLastActiveWhenOpen(e as HTMLElement);
                    else
                        setLastActiveWhenClosed(e as HTMLElement);
                }
            })
        }
    })

    const [getTop, setTop] = usePassiveState<HTMLElement | null, never>(null, returnNull);
    const [getLastActiveWhenClosed, setLastActiveWhenClosed] = usePassiveState<HTMLElement | null, never>(null, returnNull);
    const [getLastActiveWhenOpen, setLastActiveWhenOpen] = usePassiveState<HTMLElement | null, never>(null, returnNull);

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

                setTop(target as Element as HTMLElement);
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

    return { getTop, getLastActiveWhenClosed, getLastActiveWhenOpen }
}

export function getTopElement() {
    return blockingElements().top;
}


