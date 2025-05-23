import { useGlobalHandler } from "../../dom-helpers/use-event-handler.js";
import { useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { getWindow } from "../../util/get-window.js";
import { useCallback } from "../../util/lib.js";
import { useMonitoring } from "../../util/use-call-count.js";
/**
 * Handles events for a backdrop on a modal dialog -- the kind where the user expects the modal to close when they click/tap outside of it.
 *
 * @compositeParams
 */
export function useBackdropDismiss({ backdropDismissParameters: { dismissBackdropActive: open, onDismissBackdrop: onCloseUnstable, ...void1 }, refElementPopupReturn: { getElement, ...void3 }, ...void2 }) {
    return useMonitoring(function useBackdropDismiss() {
        assertEmptyObject(void1);
        assertEmptyObject(void2);
        assertEmptyObject(void3);
        const getOpen = useStableGetter(open);
        const onClose = useStableGetter(onCloseUnstable);
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
                onClose()?.(e);
            }
        }, []);
        useGlobalHandler(getWindow(), "mousedown", open ? onBackdropClick : null, { capture: true });
        useGlobalHandler(getWindow(), "touchstart", open ? onBackdropClick : null, { capture: true });
    });
}
//# sourceMappingURL=use-backdrop-dismiss.js.map