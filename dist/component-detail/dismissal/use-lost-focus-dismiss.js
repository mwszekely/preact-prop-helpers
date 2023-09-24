import { PropNames_ActiveElementParameters_onLastActiveElementChange } from "../../observers/use-active-element.js";
import { useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { useCallback } from "../../util/lib.js";
import { monitored } from "../../util/use-call-count.js";
const P = `PropNames.LostFocusDismissParameters`;
const R = `PropNames.LostFocusDismissReturn`;
export const PropNames_LostFocusDismissParameters_dismissLostFocusActive = `${P}.dismissLostFocusActive`;
export const PropNames_LostFocusDismissParameters_onDismissLostFocus = `${P}.onDismissLostFocus`;
export const PropNames_LostFocusDismissParameters_getElementSource = `${P}.getElementSource`;
export const PropNames_LostFocusDismissParameters_getElementPopup = `${P}.getElementPopup`;
;
/**
 * Invokes a callback when focus travels outside of the component's element.
 *
 * @remarks TODO: This is not intended for recursive structures, like dialogs that open dialogs, or menus that open menus, but does properly handle, e.g., the fact that a menu's menubutton having focus still counts as the menu having focus.
 *
 * @compositeParams
 */
export const useLostFocusDismiss = monitored(function useLostFocusDismiss({ [PropNames_LostFocusDismissParameters_getElementSource]: getElementSource, [PropNames_LostFocusDismissParameters_getElementPopup]: getElementPopup, [PropNames_LostFocusDismissParameters_dismissLostFocusActive]: open, [PropNames_LostFocusDismissParameters_onDismissLostFocus]: onClose, ..._void1 }) {
    assertEmptyObject(_void1);
    const stableOnClose = useStableGetter(onClose);
    const getOpen = useStableGetter(open);
    const onLastActiveElementChange = useCallback((newElement, _prevElement, e) => {
        const open = getOpen();
        const sourceElement = getElementSource?.();
        const popupElement = getElementPopup();
        if (!(sourceElement?.contains(newElement) || popupElement?.contains(newElement))) {
            if (open) {
                console.assert(e != null);
                stableOnClose()?.(e);
            }
        }
    }, [getElementSource]);
    return {
        [PropNames_ActiveElementParameters_onLastActiveElementChange]: onLastActiveElementChange
    };
});
//# sourceMappingURL=use-lost-focus-dismiss.js.map