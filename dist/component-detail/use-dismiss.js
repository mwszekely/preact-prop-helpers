import { useRefElement } from "../dom-helpers/use-ref-element.js";
import { useActiveElement } from "../observers/use-active-element.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { assertEmptyObject } from "../util/assert.js";
import { monitored } from "../util/use-call-count.js";
import { useBackdropDismiss } from "./dismissal/use-backdrop-dismiss.js";
import { useEscapeDismiss } from "./dismissal/use-escape-dismiss.js";
import { useLostFocusDismiss } from "./dismissal/use-lost-focus-dismiss.js";
const P = `PropNames.DismissParameters`;
const R = `PropNames.DismissReturn`;
export const PropNames_DismissParameters_dismissActive = `${P}.dismissActive`;
export const PropNames_DismissParameters_onDismiss = `${P}.onDismiss`;
export const PropNames_DismissReturn_getElementSource = `${R}.getElementSource`;
export const PropNames_DismissReturn_getElementPopup = `${R}.getElementPopup`;
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
export const useDismiss = monitored(function useDismiss({ "PropNames.DismissParameters.dismissActive": dismissActive, "PropNames.DismissParameters.onDismiss": onDismiss, "PropNames.BackdropDismissParameters.dismissBackdropActive": dismissBackdropActive, "PropNames.BackdropDismissParameters.onDismissBackdrop": onDismissBackdrop, "PropNames.EscapeDismissParameters.dismissEscapeActive": dismissEscapeActive, "PropNames.EscapeDismissParameters.onDismissEscape": onDismissEscape, "PropNames.EscapeDismissParameters.parentDepth": parentDepth, "PropNames.LostFocusDismissParameters.dismissLostFocusActive": dismissLostFocusActive, "PropNames.LostFocusDismissParameters.onDismissLostFocus": onDismissLostFocus, "PropNames.ActiveElementParameters.getDocument": getDocument, "PropNames.ActiveElementParameters.onActiveElementChange": onActiveElementChange, "PropNames.ActiveElementParameters.onLastActiveElementChange": onLastActiveElementChange1, "PropNames.ActiveElementParameters.onWindowFocusedChange": onWindowFocusedChange, ...void4 }) {
    const { props: propsStableSource, "PropNames.RefElementReturn.getElement": getElementSource } = useRefElement({});
    const { props: propsStablePopup, "PropNames.RefElementReturn.getElement": getElementPopup } = useRefElement({});
    const void8 = useBackdropDismiss({
        "PropNames.BackdropDismissParameters.dismissBackdropActive": (dismissBackdropActive && dismissActive),
        "PropNames.BackdropDismissParameters.onDismissBackdrop": useStableCallback((e) => {
            onDismissBackdrop?.(e);
            onDismiss(e, "backdrop");
        }),
        "PropNames.RefElementReturn.getElement": getElementPopup,
    });
    const void9 = useEscapeDismiss({
        "PropNames.RefElementReturn.getElement": getElementPopup,
        "PropNames.EscapeDismissParameters.dismissEscapeActive": (dismissEscapeActive && dismissActive),
        "PropNames.EscapeDismissParameters.getDocument": getDocument,
        "PropNames.EscapeDismissParameters.parentDepth": parentDepth,
        "PropNames.EscapeDismissParameters.onDismissEscape": useStableCallback((e) => {
            onDismissEscape?.(e);
            onDismiss(e, "escape");
        }),
    });
    const { "PropNames.ActiveElementParameters.onLastActiveElementChange": onLastActiveElementChange2, ...void1 } = useLostFocusDismiss({
        "PropNames.LostFocusDismissParameters.dismissLostFocusActive": (dismissLostFocusActive && dismissActive),
        "PropNames.LostFocusDismissParameters.onDismissLostFocus": useStableCallback((e) => {
            onDismissLostFocus?.(e);
            onDismiss(e, "lost-focus");
        }),
        "PropNames.LostFocusDismissParameters.getElementPopup": getElementPopup,
        "PropNames.LostFocusDismissParameters.getElementSource": getElementSource
    });
    const activeElementReturn = useActiveElement({
        "PropNames.ActiveElementParameters.onLastActiveElementChange": useStableCallback((a, b, r) => {
            onLastActiveElementChange2?.(a, b, r);
            onLastActiveElementChange1?.(a, b, r);
        }),
        "PropNames.ActiveElementParameters.onActiveElementChange": onActiveElementChange,
        "PropNames.ActiveElementParameters.onWindowFocusedChange": onWindowFocusedChange,
        "PropNames.ActiveElementParameters.getDocument": getDocument
    });
    assertEmptyObject(void1);
    assertEmptyObject(void4);
    assertEmptyObject(void8);
    assertEmptyObject(void9);
    return {
        ...activeElementReturn,
        "PropNames.DismissReturn.getElementSource": getElementSource,
        "PropNames.DismissReturn.getElementPopup": getElementPopup,
        propsStableSource: propsStableSource,
        propsStablePopup: propsStablePopup,
    };
});
//# sourceMappingURL=use-dismiss.js.map