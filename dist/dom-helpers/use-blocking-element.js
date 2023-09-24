import "blocking-elements";
import "wicg-inert";
import { PropNames_ActiveElementParameters_onLastActiveElementChange } from "../observers/use-active-element.js";
import { returnNull, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { assertEmptyObject } from "../util/assert.js";
import { useLayoutEffect } from "../util/lib.js";
import { monitored } from "../util/use-call-count.js";
import { getDocument } from "./use-document-class.js";
const P = `PropNames.BlockingElementParameters`;
const R = `PropNames.BlockingElementReturn`;
export const PropNames_BlockingElementParameters_enabled = `${P}.enabled`;
export const PropNames_BlockingElementParameters_getTarget = `${P}.getTarget`;
export const PropNames_BlockingElementReturn_getTop = `${R}.getTop`;
export const PropNames_BlockingElementReturn_getTarget = `${R}.getTarget`;
export const PropNames_BlockingElementReturn_getLastActiveWhenClosed = `${R}.getLastActiveWhenClosed`;
export const PropNames_BlockingElementReturn_getLastActiveWhenOpen = `${R}.getLastActiveWhenOpen`;
function blockingElements() { return getDocument().$blockingElements; }
/**
 * Allows an element to trap focus by applying the "inert" attribute to all sibling, aunt, and uncle nodes.
 *
 * @remarks Automatically handles consecutive calls with a loosely applied stack operation
 * (specifically via `blockingElements`, with a small polyfill because I'm not sure how long
 * it'll take to find its way into the spec, if ever)
 *
 * @param target
 */
export const useBlockingElement = monitored(function useBlockingElement({ [PropNames_BlockingElementParameters_enabled]: enabled, [PropNames_BlockingElementParameters_getTarget]: getTarget, ...void2 }) {
    assertEmptyObject(void2);
    const stableGetTarget = useStableCallback(getTarget);
    const [getTop, setTop] = usePassiveState(null, returnNull);
    const [getLastActiveWhenClosed, setLastActiveWhenClosed] = usePassiveState(null, returnNull);
    const [getLastActiveWhenOpen, setLastActiveWhenOpen] = usePassiveState(null, returnNull);
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
                blockingElements().push(target);
                setTop(target);
                return () => {
                    blockingElements().remove(target);
                };
            }
            catch (ex) {
                // Well, semi-silently.
                console.error(ex);
            }
        }
    }, [enabled]);
    return {
        [PropNames_BlockingElementReturn_getTop]: getTop,
        [PropNames_BlockingElementReturn_getTarget]: getTarget,
        [PropNames_BlockingElementReturn_getLastActiveWhenOpen]: getLastActiveWhenOpen,
        [PropNames_BlockingElementReturn_getLastActiveWhenClosed]: getLastActiveWhenClosed,
        [PropNames_ActiveElementParameters_onLastActiveElementChange]: useStableCallback((e, prev, reason) => {
            if (e) {
                if (enabled)
                    setLastActiveWhenOpen(e, reason);
                else
                    setLastActiveWhenClosed(e, reason);
            }
        })
    };
});
export function getTopElement() {
    return blockingElements().top;
}
//# sourceMappingURL=use-blocking-element.js.map