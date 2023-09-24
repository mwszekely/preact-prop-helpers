import { useGlobalHandler } from "../../dom-helpers/use-event-handler.js";
import { PropNames_RefElementReturn_getElement } from "../../dom-helpers/use-ref-element.js";
import { useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { useCallback } from "../../util/lib.js";
import { monitored } from "../../util/use-call-count.js";
const P = `PropNames.BackdropDismissParameters`;
const R = `PropNames.BackdropDismissReturn`;
export const PropNames_BackdropDismissParameters_dismissBackdropActive = `${P}.dismissBackdropActive`;
export const PropNames_BackdropDismissParameters_onDismissBackdrop = `${P}.onDismissBackdrop`;
/**
 * Handles events for a backdrop on a modal dialog -- the kind where the user expects the modal to close when they click/tap outside of it.
 *
 * @compositeParams
 */
export const useBackdropDismiss = monitored(function useBackdropDismiss({ [PropNames_BackdropDismissParameters_dismissBackdropActive]: open, [PropNames_BackdropDismissParameters_onDismissBackdrop]: onCloseUnstable, [PropNames_RefElementReturn_getElement]: getElement, ..._void2 }) {
    assertEmptyObject(_void2);
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
    useGlobalHandler(window, "mousedown", open ? onBackdropClick : null, { capture: true });
    useGlobalHandler(window, "touchstart", open ? onBackdropClick : null, { capture: true });
});
//# sourceMappingURL=use-backdrop-dismiss.js.map