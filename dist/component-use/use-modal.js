import { useDismiss } from "../component-detail/use-dismiss.js";
import { useFocusTrap } from "../component-detail/use-focus-trap.js";
import { useRefElement } from "../dom-helpers/use-ref-element.js";
import { assertEmptyObject } from "../util/assert.js";
import { PropNames } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
const P = `PropNames.ModalParameters`;
const R = `PropNames.ModalReturn`;
export const PNames = {
    active: `${P}.active`
};
export const RNames = {};
PropNames.ModalParameters ??= PNames;
PropNames.ModalReturn ??= RNames;
/**
 * Combines dismissal hooks and focus trap hooks into one.
 * Use for dialogs, menus, etc.  Anything that can be dismissed and might trap focus, basically.
 *
 * @remarks Another in the "complete" series, alongside list/grid navigation and dismissal itself.
 *
 * TODO: The HTML &lt;dialog&gt; element is a thing now, and it can be modal or nonmodal, just like this hook. Hmm...
 *
 * @compositeParams
 */
export const useModal = monitored(function useModal({ [PropNames.DismissParameters.dismissActive]: dismissActive, [PropNames.DismissParameters.onDismiss]: onDismiss, [PropNames.EscapeDismissParameters.dismissEscapeActive]: dismissEscapeActive, [PropNames.EscapeDismissParameters.onDismissEscape]: onDismissEscape, [PropNames.EscapeDismissParameters.parentDepth]: parentDepth, [PropNames.ActiveElementParameters.getDocument]: getDocument, [PropNames.ActiveElementParameters.onActiveElementChange]: onActiveElementChange, [PropNames.ActiveElementParameters.onLastActiveElementChange]: onLastActiveElementChange, [PropNames.ActiveElementParameters.onWindowFocusedChange]: onWindowFocusedChange, [PropNames.BackdropDismissParameters.dismissBackdropActive]: dismissBackdropActive, [PropNames.BackdropDismissParameters.onDismissBackdrop]: onDismissBackdrop, [PropNames.LostFocusDismissParameters.dismissLostFocusActive]: dismissLostFocusActive, [PropNames.LostFocusDismissParameters.onDismissLostFocus]: onDismissLostFocus, [PropNames.RefElementParameters.onElementChange]: onElementChange, [PropNames.RefElementParameters.onMount]: onMount, [PropNames.RefElementParameters.onUnmount]: onUnmount, [PropNames.ModalParameters.active]: modalActive, [PropNames.FocusTrapParameters.trapActive]: trapActive, [PropNames.FocusTrapParameters.onlyMoveFocus]: onlyMoveFocus, [PropNames.FocusTrapParameters.focusPopup]: focusPopup, [PropNames.FocusTrapParameters.focusOpener]: focusOpener, ...void1 }) {
    const dismissReturn = useDismiss({
        [PropNames.DismissParameters.dismissActive]: dismissActive && modalActive,
        [PropNames.DismissParameters.onDismiss]: onDismiss,
        [PropNames.EscapeDismissParameters.dismissEscapeActive]: dismissEscapeActive,
        [PropNames.EscapeDismissParameters.onDismissEscape]: onDismissEscape,
        [PropNames.EscapeDismissParameters.parentDepth]: parentDepth,
        [PropNames.ActiveElementParameters.getDocument]: getDocument,
        [PropNames.ActiveElementParameters.onActiveElementChange]: onActiveElementChange,
        [PropNames.ActiveElementParameters.onLastActiveElementChange]: onLastActiveElementChange,
        [PropNames.ActiveElementParameters.onWindowFocusedChange]: onWindowFocusedChange,
        [PropNames.BackdropDismissParameters.dismissBackdropActive]: dismissBackdropActive,
        [PropNames.BackdropDismissParameters.onDismissBackdrop]: onDismissBackdrop,
        [PropNames.LostFocusDismissParameters.dismissLostFocusActive]: dismissLostFocusActive,
        [PropNames.LostFocusDismissParameters.onDismissLostFocus]: onDismissLostFocus,
    });
    const { [PropNames.RefElementReturn.getElement]: getElement, props: propsStable, ...void2 } = useRefElement({
        [PropNames.RefElementParameters.onElementChange]: onElementChange,
        [PropNames.RefElementParameters.onMount]: onMount,
        [PropNames.RefElementParameters.onUnmount]: onUnmount,
    });
    const { props, ...void3 } = useFocusTrap({
        [PropNames.FocusTrapParameters.trapActive]: trapActive && modalActive,
        [PropNames.FocusTrapParameters.focusOpener]: focusOpener,
        [PropNames.FocusTrapParameters.focusPopup]: focusPopup,
        [PropNames.FocusTrapParameters.onlyMoveFocus]: onlyMoveFocus,
        [PropNames.RefElementReturn.getElement]: getElement
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return {
        ...dismissReturn,
        propsFocusContainer: [propsStable, props],
    };
});
//# sourceMappingURL=use-modal.js.map