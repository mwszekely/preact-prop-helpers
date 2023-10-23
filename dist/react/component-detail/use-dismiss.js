import { useRefElement } from "../dom-helpers/use-ref-element.js";
import { useActiveElement } from "../observers/use-active-element.js";
import { useStableCallback, useStableMergedCallback } from "../preact-extensions/use-stable-callback.js";
import { assertEmptyObject } from "../util/assert.js";
import { monitored } from "../util/use-call-count.js";
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
export const useDismiss = monitored(function useDismiss({ dismissParameters: { dismissActive, onDismiss, ...void3 }, backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop, ...void6 }, lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus, ...void7 }, escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth, ...void2 }, activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange: olaec1, onWindowFocusedChange, ...void5 }, ...void4 }) {
    const { refElementReturn: refElementSourceReturn, propsStable: propsStableSource } = useRefElement({ refElementParameters: {} });
    const { refElementReturn: refElementPopupReturn, propsStable: propsStablePopup } = useRefElement({ refElementParameters: {} });
    //const onCloseBackdrop = useCallback(() => { return globalOnClose?.("backdrop" as Listeners); }, [globalOnClose]);
    //const onCloseEscape = useCallback(() => { return globalOnClose?.("escape" as Listeners); }, [globalOnClose]);
    //const onCloseFocus = useCallback(() => { return globalOnClose?.("lost-focus" as Listeners); }, [globalOnClose]);
    const void8 = useBackdropDismiss({
        refElementPopupReturn,
        backdropDismissParameters: {
            dismissBackdropActive: (dismissBackdropActive && dismissActive),
            onDismissBackdrop: useStableCallback((e) => {
                onDismissBackdrop?.(e);
                onDismiss(e, "backdrop");
            }),
        },
    });
    const void9 = useEscapeDismiss({
        refElementPopupReturn,
        escapeDismissParameters: {
            dismissEscapeActive: (dismissEscapeActive && dismissActive),
            getDocument,
            onDismissEscape: useStableCallback((e) => {
                onDismissEscape?.(e);
                onDismiss(e, "escape");
            }),
            parentDepth,
        },
    });
    const { activeElementParameters: { onLastActiveElementChange: olaec2, ...void1 } } = useLostFocusDismiss({
        lostFocusDismissParameters: {
            dismissLostFocusActive: (dismissLostFocusActive && dismissActive),
            onDismissLostFocus: useStableCallback((e) => {
                onDismissLostFocus?.(e);
                onDismiss(e, "lost-focus");
            }),
        },
        refElementPopupReturn,
        refElementSourceReturn
    });
    const { activeElementReturn: { getActiveElement: _getActiveElement, getLastActiveElement: _getLastActiveElement, getWindowFocused: _getWindowFocused } } = useActiveElement({
        activeElementParameters: {
            onLastActiveElementChange: useStableMergedCallback(olaec2, olaec1),
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
    assertEmptyObject(void6);
    assertEmptyObject(void7);
    assertEmptyObject(void8);
    assertEmptyObject(void9);
    return {
        refElementSourceReturn,
        refElementPopupReturn,
        propsStableSource: propsStableSource,
        propsStablePopup: propsStablePopup
    };
});
//# sourceMappingURL=use-dismiss.js.map