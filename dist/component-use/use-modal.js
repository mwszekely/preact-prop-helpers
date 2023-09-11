import { useDismiss } from "../component-detail/use-dismiss.js";
import { useFocusTrap } from "../component-detail/use-focus-trap.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { useRefElement } from "../dom-helpers/use-ref-element.js";
import { assertEmptyObject } from "../util/assert.js";
import { monitored } from "../util/use-call-count.js";
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
export const useModal = monitored(function useModal({ dismissParameters: { dismissActive, onDismiss, ...void2 }, escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth, ...void3 }, focusTrapParameters: { trapActive, ...focusTrapParameters }, activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, ...void4 }, backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop, ...void5 }, lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus, ...void6 }, refElementParameters: { onElementChange, onMount, onUnmount, ...void7 }, modalParameters: { active: modalActive, ...void8 }, ...void1 }) {
    const { refElementPopupReturn, refElementSourceReturn, propsStablePopup, propsStableSource } = useDismiss({
        dismissParameters: { dismissActive: dismissActive && modalActive, onDismiss },
        escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth },
        activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange },
        backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop },
        lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus },
    });
    const { propsStable, refElementReturn } = useRefElement({ refElementParameters: { onElementChange, onMount, onUnmount } });
    const { props } = useFocusTrap({
        focusTrapParameters: { trapActive: trapActive && modalActive, ...focusTrapParameters },
        activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange },
        refElementReturn
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    assertEmptyObject(void7);
    assertEmptyObject(void8);
    return {
        propsFocusContainer: useMergedProps(propsStable, props),
        refElementPopupReturn,
        refElementSourceReturn,
        propsStablePopup,
        propsStableSource
    };
});
//# sourceMappingURL=use-modal.js.map