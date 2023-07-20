import { useGlobalHandler } from "../../dom-helpers/use-event-handler.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { enhanceEvent } from "../../util/event.js";
import { useCallback } from "../../util/lib.js";
import { monitorCallCount } from "../../util/use-call-count.js";
/**
 * Handles events for a backdrop on a modal dialog -- the kind where the user expects the modal to close when they click/tap outside of it.
 *
 * @compositeParams
 */
export function useBackdropDismiss({ backdropDismissParameters: { active: open, onDismiss: onCloseUnstable, ...void1 }, refElementPopupReturn: { getElement, ...void3 }, ...void2 }) {
    monitorCallCount(useBackdropDismiss);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    const getOpen = useStableGetter(open);
    const onClose = useStableCallback(onCloseUnstable);
    const onBackdropClick = useCallback(function onBackdropClick(e) {
        if (!getOpen())
            return;
        // Basically, "was this event fired on an element not contained by the modal?"
        // There are multiple ways browser react to "interacting with nothing", and this takes care of everything.
        let element = getElement();
        let foundInsideClick = false;
        if (e.target && element && element.contains(e.target)) {
            foundInsideClick = true;
        }
        if (!foundInsideClick) {
            onClose(enhanceEvent(e, { reason: "backdrop" }));
        }
    }, []);
    useGlobalHandler(window, "mousedown", open ? onBackdropClick : null, { capture: true });
    useGlobalHandler(window, "touchstart", open ? onBackdropClick : null, { capture: true });
}
//# sourceMappingURL=use-backdrop-dismiss.js.map