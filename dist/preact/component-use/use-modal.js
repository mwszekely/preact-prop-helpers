import { $dismissBackdropActive, $onDismissBackdrop, $backdropDismissParameters } from "../component-detail/dismissal/use-backdrop-dismiss.js";
import { $dismissEscapeActive, $onDismissEscape, $parentDepth, $escapeDismissParameters } from "../component-detail/dismissal/use-escape-dismiss.js";
import { $dismissLostFocusActive, $onDismissLostFocus, $lostFocusDismissParameters } from "../component-detail/dismissal/use-lost-focus-dismiss.js";
import { $dismissActive, $onDismiss, useDismiss, $dismissParameters } from "../component-detail/use-dismiss.js";
import { $trapActive, useFocusTrap, $focusTrapParameters } from "../component-detail/use-focus-trap.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { $onElementChange, $onMount, $onUnmount, useRefElement, $refElementParameters, $refElementReturn } from "../dom-helpers/use-ref-element.js";
import { $activeElementParameters, $onActiveElementChange, $onLastActiveElementChange, $onWindowFocusedChange, $getDocument } from "../observers/use-active-element.js";
import { assertEmptyObject } from "../util/assert.js";
import { monitored } from "../util/use-call-count.js";
export const $modalParameters = Symbol();
export const $active = Symbol();
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
export const useModal = monitored(function useModal({ [$dismissParameters]: { [$dismissActive]: dismissActive, [$onDismiss]: onDismiss, ...void2 }, [$escapeDismissParameters]: { [$dismissEscapeActive]: dismissEscapeActive, [$onDismissEscape]: onDismissEscape, [$parentDepth]: parentDepth, ...void3 }, [$focusTrapParameters]: { [$trapActive]: trapActive, ...focusTrapParameters }, [$activeElementParameters]: { [$getDocument]: getDocument, [$onActiveElementChange]: onActiveElementChange, [$onLastActiveElementChange]: onLastActiveElementChange, [$onWindowFocusedChange]: onWindowFocusedChange, ...void4 }, [$backdropDismissParameters]: { [$dismissBackdropActive]: dismissBackdropActive, [$onDismissBackdrop]: onDismissBackdrop, ...void5 }, [$lostFocusDismissParameters]: { [$dismissLostFocusActive]: dismissLostFocusActive, [$onDismissLostFocus]: onDismissLostFocus, ...void6 }, [$refElementParameters]: { [$onElementChange]: onElementChange, [$onMount]: onMount, [$onUnmount]: onUnmount, ...void7 }, [$modalParameters]: { [$active]: modalActive, ...void8 }, ...void1 }) {
    const { refElementPopupReturn, refElementSourceReturn, propsStablePopup, propsStableSource } = useDismiss({
        [$dismissParameters]: { [$dismissActive]: dismissActive && modalActive, [$onDismiss]: onDismiss },
        [$escapeDismissParameters]: { [$dismissEscapeActive]: dismissEscapeActive, [$onDismissEscape]: onDismissEscape, [$parentDepth]: parentDepth },
        [$activeElementParameters]: { [$getDocument]: getDocument, [$onActiveElementChange]: onActiveElementChange, [$onLastActiveElementChange]: onLastActiveElementChange, [$onWindowFocusedChange]: onWindowFocusedChange },
        [$backdropDismissParameters]: { [$dismissBackdropActive]: dismissBackdropActive, [$onDismissBackdrop]: onDismissBackdrop },
        [$lostFocusDismissParameters]: { [$dismissLostFocusActive]: dismissLostFocusActive, [$onDismissLostFocus]: onDismissLostFocus },
    });
    const { propsStable, [$refElementReturn]: refElementReturn } = useRefElement({ [$refElementParameters]: { [$onElementChange]: onElementChange, [$onMount]: onMount, [$onUnmount]: onUnmount } });
    const { props } = useFocusTrap({
        [$focusTrapParameters]: { [$trapActive]: trapActive && modalActive, ...focusTrapParameters },
        [$activeElementParameters]: { [$getDocument]: getDocument, [$onActiveElementChange]: onActiveElementChange, [$onLastActiveElementChange]: onLastActiveElementChange, [$onWindowFocusedChange]: onWindowFocusedChange },
        [$refElementReturn]: refElementReturn
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