import { useDismiss } from "../component-detail/use-dismiss.js";
import { useFocusTrap } from "../component-detail/use-focus-trap.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
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
    const { open } = dismissParameters;
    //const { getWindow } = escapeDismissParameters;
    //const getDocument = useCallback(() => { return getWindow().document; }, [getWindow]);
    const { refElementPopupReturn, refElementSourceReturn } = useDismiss({ dismissParameters, escapeDismissParameters });
    const { focusTrapReturn, refElementReturn } = useFocusTrap({
        focusTrapParameters: { trapActive: open && trapActive, ...focusTrapParameters },
        refElementParameters: {}
    });
    const { propsStable: pp1 } = refElementPopupReturn;
    const { propsStable: ps2 } = refElementSourceReturn;
    const { propsUnstable: pp3 } = focusTrapReturn;
    const { propsStable: pp4 } = refElementReturn;
    return {
        propsPopup: pp1,
        propsFocusContainer: useMergedProps(pp3, pp4),
        propsSource: ps2,
        refElementPopupReturn,
        refElementSourceReturn,
        focusTrapReturn,
    };
}
//# sourceMappingURL=use-modal.js.map