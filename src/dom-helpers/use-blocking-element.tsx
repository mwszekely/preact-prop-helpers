import "blocking-elements";
import { DocumentWithBlockingElements } from "blocking-elements";
import "wicg-inert";

import { UseActiveElement, useActiveElement } from "../observers/use-active-element.js";
import { returnNull, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { assertEmptyObject } from "../util/assert.js";
import { FocusEventType, useLayoutEffect } from "../util/lib.js";
import { GenericHook, Parameter, StandardDepsPick } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
import { getDocument } from "./use-document-class.js";

function blockingElements() { return (getDocument() as DocumentWithBlockingElements).$blockingElements }

export interface UseBlockingElementParametersSelf {
    enabled: boolean;
    getTarget(): (Element | null)
}

export type UseBlockingElement = GenericHook<
    "blockingElement", 
    UseBlockingElementParametersSelf, [StandardDepsPick<"params", UseActiveElement>],
    never, [StandardDepsPick<"return", UseActiveElement>]
>;

/**
 * Allows an element to trap focus by applying the "inert" attribute to all sibling, aunt, and uncle nodes.
 * 
 * @remarks Automatically handles consecutive calls with a loosely applied stack operation 
 * (specifically via `blockingElements`, with a small polyfill because I'm not sure how long
 * it'll take to find its way into the spec, if ever)
 * 
 * @param target 
 */
export const useBlockingElement = monitored(function useBlockingElement({
    activeElementParameters: {
        getDocument,
        onActiveElementChange,
        onLastActiveElementChange,
        onWindowFocusedChange,
        ...void3
    },
    blockingElementParameters: {
        enabled,
        getTarget,
        ...void1
    },
    ...void2
}: Parameter<UseBlockingElement>) {

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);

    const stableGetTarget = useStableCallback(getTarget);

    //const getDocument = useStableCallback(() => (getTarget()?.ownerDocument ?? globalThis.document));
    useActiveElement({
        activeElementParameters: {
            getDocument,
            onActiveElementChange,
            onWindowFocusedChange,
            onLastActiveElementChange: useStableCallback((e, prev, reason) => {
                onLastActiveElementChange?.(e, prev, reason);

                if (e) {
                    if (enabled)
                        setLastActiveWhenOpen(e as HTMLElement, reason);
                    else
                        setLastActiveWhenClosed(e as HTMLElement, reason);
                }
            })
        }
    })

    const [getTop, setTop] = usePassiveState<HTMLElement | null, never>(null, returnNull);
    const [getLastActiveWhenClosed, setLastActiveWhenClosed] = usePassiveState<HTMLElement | null, FocusEventType<any>>(null, returnNull);
    const [getLastActiveWhenOpen, setLastActiveWhenOpen] = usePassiveState<HTMLElement | null, FocusEventType<any>>(null, returnNull);

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
})

export function getTopElement() {
    return blockingElements().top;
}


