import { PropNames_RefElementReturn_getElement, useRefElement } from "../dom-helpers/use-ref-element.js";
import { PropNames_ActiveElementParameters_getDocument, PropNames_ActiveElementParameters_onActiveElementChange, PropNames_ActiveElementParameters_onLastActiveElementChange, PropNames_ActiveElementParameters_onWindowFocusedChange, useActiveElement } from "../observers/use-active-element.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { assertEmptyObject } from "../util/assert.js";
import { monitored } from "../util/use-call-count.js";
import { PropNames_BackdropDismissParameters_dismissBackdropActive, PropNames_BackdropDismissParameters_onDismissBackdrop, useBackdropDismiss } from "./dismissal/use-backdrop-dismiss.js";
import { PropNames_EscapeDismissParameters_dismissEscapeActive, PropNames_EscapeDismissParameters_getDocument, PropNames_EscapeDismissParameters_onDismissEscape, PropNames_EscapeDismissParameters_parentDepth, useEscapeDismiss } from "./dismissal/use-escape-dismiss.js";
import { PropNames_LostFocusDismissParameters_dismissLostFocusActive, PropNames_LostFocusDismissParameters_getElementPopup, PropNames_LostFocusDismissParameters_getElementSource, PropNames_LostFocusDismissParameters_onDismissLostFocus, useLostFocusDismiss } from "./dismissal/use-lost-focus-dismiss.js";
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
export const useDismiss = monitored(function useDismiss({ [PropNames_DismissParameters_dismissActive]: dismissActive, [PropNames_DismissParameters_onDismiss]: onDismiss, [PropNames_BackdropDismissParameters_dismissBackdropActive]: dismissBackdropActive, [PropNames_BackdropDismissParameters_onDismissBackdrop]: onDismissBackdrop, [PropNames_EscapeDismissParameters_dismissEscapeActive]: dismissEscapeActive, [PropNames_EscapeDismissParameters_onDismissEscape]: onDismissEscape, [PropNames_EscapeDismissParameters_parentDepth]: parentDepth, [PropNames_LostFocusDismissParameters_dismissLostFocusActive]: dismissLostFocusActive, [PropNames_LostFocusDismissParameters_onDismissLostFocus]: onDismissLostFocus, [PropNames_ActiveElementParameters_getDocument]: getDocument, [PropNames_ActiveElementParameters_onActiveElementChange]: onActiveElementChange, [PropNames_ActiveElementParameters_onLastActiveElementChange]: onLastActiveElementChange1, [PropNames_ActiveElementParameters_onWindowFocusedChange]: onWindowFocusedChange, ...void4 }) {
    const { props: propsStableSource, [PropNames_RefElementReturn_getElement]: getElementSource } = useRefElement({});
    const { props: propsStablePopup, [PropNames_RefElementReturn_getElement]: getElementPopup } = useRefElement({});
    const void8 = useBackdropDismiss({
        [PropNames_BackdropDismissParameters_dismissBackdropActive]: (dismissBackdropActive && dismissActive),
        [PropNames_BackdropDismissParameters_onDismissBackdrop]: useStableCallback((e) => {
            onDismissBackdrop?.(e);
            onDismiss(e, "backdrop");
        }),
        [PropNames_RefElementReturn_getElement]: getElementPopup,
    });
    const void9 = useEscapeDismiss({
        [PropNames_RefElementReturn_getElement]: getElementPopup,
        [PropNames_EscapeDismissParameters_dismissEscapeActive]: (dismissEscapeActive && dismissActive),
        [PropNames_EscapeDismissParameters_getDocument]: getDocument,
        [PropNames_EscapeDismissParameters_parentDepth]: parentDepth,
        [PropNames_EscapeDismissParameters_onDismissEscape]: useStableCallback((e) => {
            onDismissEscape?.(e);
            onDismiss(e, "escape");
        }),
    });
    const { [PropNames_ActiveElementParameters_onLastActiveElementChange]: onLastActiveElementChange2, ...void1 } = useLostFocusDismiss({
        [PropNames_LostFocusDismissParameters_dismissLostFocusActive]: (dismissLostFocusActive && dismissActive),
        [PropNames_LostFocusDismissParameters_onDismissLostFocus]: useStableCallback((e) => {
            onDismissLostFocus?.(e);
            onDismiss(e, "lost-focus");
        }),
        [PropNames_LostFocusDismissParameters_getElementPopup]: getElementPopup,
        [PropNames_LostFocusDismissParameters_getElementSource]: getElementSource
    });
    const activeElementReturn = useActiveElement({
        [PropNames_ActiveElementParameters_onLastActiveElementChange]: useStableCallback((a, b, r) => {
            onLastActiveElementChange2?.(a, b, r);
            onLastActiveElementChange1?.(a, b, r);
        }),
        [PropNames_ActiveElementParameters_onActiveElementChange]: onActiveElementChange,
        [PropNames_ActiveElementParameters_onWindowFocusedChange]: onWindowFocusedChange,
        [PropNames_ActiveElementParameters_getDocument]: getDocument
    });
    assertEmptyObject(void1);
    assertEmptyObject(void4);
    assertEmptyObject(void8);
    assertEmptyObject(void9);
    return {
        ...activeElementReturn,
        [PropNames_DismissReturn_getElementSource]: getElementSource,
        [PropNames_DismissReturn_getElementPopup]: getElementPopup,
        propsStableSource: propsStableSource,
        propsStablePopup: propsStablePopup,
    };
});
//# sourceMappingURL=use-dismiss.js.map