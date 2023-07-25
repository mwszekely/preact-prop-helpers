import { useRefElement } from "../dom-helpers/use-ref-element.js";
import { useActiveElement } from "../observers/use-active-element.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { assertEmptyObject } from "../util/assert.js";
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
 * Combines all the methods a user can implicitly dismiss a popup component. See {@link useModal} for a hook that's ready-to-use for dialogs and menus.
 *
 * @compositeParams
 */
export function useDismiss({ dismissParameters: { open: globalOpen, onClose: globalOnClose, closeOnBackdrop, closeOnEscape, closeOnLostFocus, ...void3 }, escapeDismissParameters: { parentDepth, ...void2 }, activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange: olaec1, onWindowFocusedChange, ...void5 }, ...void4 }) {
    monitorCallCount(useDismiss);
    const { refElementReturn: refElementSourceReturn, propsStable: propsStableSource } = useRefElement({ refElementParameters: {} });
    const { refElementReturn: refElementPopupReturn, propsStable: propsStablePopup } = useRefElement({ refElementParameters: {} });
    const onCloseBackdrop = useCallback(() => { return globalOnClose?.("backdrop"); }, [globalOnClose]);
    const onCloseEscape = useCallback(() => { return globalOnClose?.("escape"); }, [globalOnClose]);
    const onCloseFocus = useCallback(() => { return globalOnClose?.("lost-focus"); }, [globalOnClose]);
    const _v1 = useBackdropDismiss({ backdropDismissParameters: { onDismiss: onCloseBackdrop, active: (closeOnBackdrop && globalOpen) }, refElementPopupReturn });
    const _v2 = useEscapeDismiss({ escapeDismissParameters: { getDocument, onDismiss: onCloseEscape, active: (closeOnEscape && globalOpen), parentDepth }, refElementPopupReturn });
    const { activeElementParameters: { onLastActiveElementChange: olaec2, ...void1 } } = useLostFocusDismiss({ lostFocusDismissParameters: { onDismiss: onCloseFocus, active: (closeOnLostFocus && globalOpen) }, refElementPopupReturn, refElementSourceReturn });
    const { activeElementReturn: { getActiveElement: _getActiveElement, getLastActiveElement: _getLastActiveElement, getWindowFocused: _getWindowFocused } } = useActiveElement({
        activeElementParameters: {
            onLastActiveElementChange: useStableCallback((a, b) => { olaec2?.(a, b); olaec1?.(a, b); }),
            onActiveElementChange,
            onWindowFocusedChange,
            getDocument
        }
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    return {
        refElementSourceReturn,
        refElementPopupReturn,
        propsStableSource: propsStableSource,
        propsStablePopup: propsStablePopup
    };
}
//# sourceMappingURL=use-dismiss.js.map