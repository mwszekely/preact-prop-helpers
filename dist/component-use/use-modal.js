import { useDismiss } from "../component-detail/use-dismiss.js";
import { useFocusTrap } from "../component-detail/use-focus-trap.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { useRefElement } from "../dom-helpers/use-ref-element.js";
import { monitorCallCount } from "../util/use-call-count.js";
/**
 * Combines dismissal hooks and focus trap hooks into one.
 *
 * Another in the "complete" series, alongside list/grid navigation and dismissal itself.
 *
 * Use for dialogs, menus, etc.  Anything that can be dismissed and might trap focus, basically.
 *
 * @param param0
 * @returns
 */
export function useModal({ dismissParameters, escapeDismissParameters, focusTrapParameters: { trapActive, ...focusTrapParameters } }) {
    monitorCallCount(useModal);
    const { open } = dismissParameters;
    const { refElementPopupReturn, refElementSourceReturn, propsStablePopup, propsStableSource } = useDismiss({ dismissParameters, escapeDismissParameters });
    const { propsStable, refElementReturn } = useRefElement({});
    const { focusTrapReturn, props } = useFocusTrap({
        focusTrapParameters: { trapActive: open && trapActive, ...focusTrapParameters },
        refElementReturn
    });
    return {
        propsFocusContainer: useMergedProps(propsStable, props),
        refElementPopupReturn,
        refElementSourceReturn,
        focusTrapReturn,
        propsStablePopup,
        propsStableSource
    };
}
//# sourceMappingURL=use-modal.js.map