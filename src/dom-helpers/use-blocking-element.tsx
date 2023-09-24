import "blocking-elements";
import { DocumentWithBlockingElements } from "blocking-elements";
import "wicg-inert";

import { UseActiveElementParameters } from "../observers/use-active-element.js";
import { returnNull, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { assertEmptyObject } from "../util/assert.js";
import { FocusEventType, useLayoutEffect } from "../util/lib.js";
import { PropNames } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
import { getDocument } from "./use-document-class.js";

declare module "../util/types.js" { interface PropNames { BlockingElementParameters: typeof PNames } }
declare module "../util/types.js" { interface PropNames { BlockingElementReturn: typeof RNames } }

const P = `PropNames.BlockingElementParameters`;
const R = `PropNames.BlockingElementReturn`;

export const PNames = {
    enabled: `${P}.enabled`,
    getTarget: `${P}.getTarget`
} as const;

export const RNames = {
    getTop: `${R}.getTop`,
    getTarget: `${R}.getTarget`,
    getLastActiveWhenClosed: `${R}.getLastActiveWhenClosed`,
    getLastActiveWhenOpen: `${R}.getLastActiveWhenOpen`
} as const;

function blockingElements() { return (getDocument() as DocumentWithBlockingElements).$blockingElements }

export interface UseBlockingElementParametersSelf<E extends Element> {
    [PropNames.BlockingElementParameters.enabled]: boolean;
    [PropNames.BlockingElementParameters.getTarget](): (E | null)
}


export interface UseBlockingElementReturnTypeSelf<E extends Element> {
    [PropNames.BlockingElementReturn.getTarget](): (E | null);
    [PropNames.BlockingElementReturn.getTop](): Element | null;
    [PropNames.BlockingElementReturn.getLastActiveWhenClosed](): Element | null;
    [PropNames.BlockingElementReturn.getLastActiveWhenOpen](): Element | null;
}

export interface UseBlockingElementParameters<E extends Element> extends UseBlockingElementParametersSelf<E> { }
export interface UseBlockingElementReturnType<E extends Element> extends UseBlockingElementReturnTypeSelf<E>, Pick<UseActiveElementParameters, (typeof PropNames)["ActiveElementParameters"]["onLastActiveElementChange"]> { }

/**
 * Allows an element to trap focus by applying the "inert" attribute to all sibling, aunt, and uncle nodes.
 * 
 * @remarks Automatically handles consecutive calls with a loosely applied stack operation 
 * (specifically via `blockingElements`, with a small polyfill because I'm not sure how long
 * it'll take to find its way into the spec, if ever)
 * 
 * @param target 
 */
export const useBlockingElement = monitored(function useBlockingElement<E extends Element>({
    [PropNames.BlockingElementParameters.enabled]: enabled,
    [PropNames.BlockingElementParameters.getTarget]: getTarget,
    ...void2
}: UseBlockingElementParameters<E>): UseBlockingElementReturnType<E> {
    assertEmptyObject(void2);
    const stableGetTarget = useStableCallback(getTarget);

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

    return {
        [PropNames.BlockingElementReturn.getTop]: getTop,
        [PropNames.BlockingElementReturn.getTarget]: getTarget,
        [PropNames.BlockingElementReturn.getLastActiveWhenOpen]: getLastActiveWhenOpen,
        [PropNames.BlockingElementReturn.getLastActiveWhenClosed]: getLastActiveWhenClosed,
        [PropNames.ActiveElementParameters.onLastActiveElementChange]: useStableCallback((e, prev, reason) => {
            if (e) {
                if (enabled)
                    setLastActiveWhenOpen(e as HTMLElement, reason);
                else
                    setLastActiveWhenClosed(e as HTMLElement, reason);
            }
        })
    }
})

export function getTopElement() {
    return blockingElements().top;
}


