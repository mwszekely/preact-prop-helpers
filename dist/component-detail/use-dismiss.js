import { useRefElement } from "../dom-helpers/use-ref-element.js";
import { useActiveElement } from "../observers/use-active-element.js";
import { useCallback } from "../util/lib.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { useBackdropDismiss } from "./dismissal/use-backdrop-dismiss.js";
import { useEscapeDismiss } from "./dismissal/use-escape-dismiss.js";
import { useLostFocusDismiss } from "./dismissal/use-lost-focus-dismiss.js";
/**
 * In general, each soft dismiss hook takes an `open` and an `onClose` prop.
 *
 * `open` in all cases refers to both whether or not the controlled surface is currently being shown,
 * but also whether that particular method of soft dismiss is enabled or not.
 *
 * E.G. If `escape` key dismissing is disabled, just have `open` false at all times for `escapeDismissParameters`.
 */
const _dummy = 0;
/**
 * Combines all the methods a user can implicitly dismiss a popup component. See {@link @useModal} for a hook that's ready-to-use for dialogs and menus.
 *
 * @compositeParams
 */
export function useDismiss({ dismissParameters: { open: globalOpen, onClose: globalOnClose, closeOnBackdrop, closeOnEscape, closeOnLostFocus }, escapeDismissParameters: { getWindow, parentDepth } }) {
    monitorCallCount(useDismiss);
    const { refElementReturn: refElementSourceReturn, propsStable: propsStableSource } = useRefElement({ refElementParameters: {} });
    const { refElementReturn: refElementPopupReturn, propsStable: propsStablePopup } = useRefElement({ refElementParameters: {} });
    const onCloseBackdrop = useCallback(() => { return globalOnClose?.("backdrop"); }, [globalOnClose]);
    const onCloseEscape = useCallback(() => { return globalOnClose?.("escape"); }, [globalOnClose]);
    const onCloseFocus = useCallback(() => { return globalOnClose?.("lost-focus"); }, [globalOnClose]);
    const _v1 = useBackdropDismiss({ backdropDismissParameters: { onDismiss: onCloseBackdrop, active: (closeOnBackdrop && globalOpen) }, refElementPopupReturn });
    const _v2 = useEscapeDismiss({ escapeDismissParameters: { getWindow, onDismiss: onCloseEscape, active: (closeOnEscape && globalOpen), parentDepth }, refElementPopupReturn });
    const { activeElementParameters } = useLostFocusDismiss({ lostFocusDismissParameters: { onDismiss: onCloseFocus, active: (closeOnLostFocus && globalOpen) }, refElementPopupReturn, refElementSourceReturn });
    const getDocument = useCallback(() => {
        return getWindow().document;
    }, [getWindow]);
    const { activeElementReturn: { getActiveElement: _getActiveElement, getLastActiveElement: _getLastActiveElement, getWindowFocused: _getWindowFocused } } = useActiveElement({ activeElementParameters: { ...activeElementParameters, getWindow, getDocument } });
    return {
        refElementSourceReturn,
        refElementPopupReturn,
        propsStableSource,
        propsStablePopup
    };
}
//# sourceMappingURL=use-dismiss.js.map