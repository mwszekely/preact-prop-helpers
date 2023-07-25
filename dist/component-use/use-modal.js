import { useDismiss } from "../component-detail/use-dismiss.js";
import { useFocusTrap } from "../component-detail/use-focus-trap.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { useRefElement } from "../dom-helpers/use-ref-element.js";
import { assertEmptyObject } from "../util/assert.js";
import { monitorCallCount } from "../util/use-call-count.js";
/**
 * Combines dismissal hooks and focus trap hooks into one.
 * Use for dialogs, menus, etc.  Anything that can be dismissed and might trap focus, basically.
 *
 * @remarks Another in the "complete" series, alongside list/grid navigation and dismissal itself.
 *
 * @compositeParams
 */
export function useModal({ dismissParameters, escapeDismissParameters, focusTrapParameters: { trapActive, ...focusTrapParameters }, activeElementParameters, ...void1 }) {
    monitorCallCount(useModal);
    const { open } = dismissParameters;
    const { refElementPopupReturn, refElementSourceReturn, propsStablePopup, propsStableSource } = useDismiss({
        dismissParameters,
        escapeDismissParameters,
        activeElementParameters
    });
    const { propsStable, refElementReturn } = useRefElement({});
    const { props } = useFocusTrap({
        focusTrapParameters: { trapActive: open && trapActive, ...focusTrapParameters },
        activeElementParameters,
        refElementReturn
    });
    assertEmptyObject(void1);
    return {
        propsFocusContainer: useMergedProps(propsStable, props),
        refElementPopupReturn,
        refElementSourceReturn,
        propsStablePopup,
        propsStableSource
    };
}
//# sourceMappingURL=use-modal.js.map