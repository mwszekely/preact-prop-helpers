import { useCallback } from "preact/hooks";
import { DismissListenerTypes, useDismiss, UseDismissParameters } from "./use-dismiss";
import { useFocusTrap, UseFocusTrapParameters } from "./use-focus-trap";
import { useMergedProps } from "./use-merged-props";

export interface UseModalParameters<Listeners extends DismissListenerTypes> extends UseDismissParameters<Listeners> {
    focusTrapParameters: Omit<UseFocusTrapParameters<any, any>["focusTrapParameters"], "trapActive">
}

/**
 * Combines dismissal hooks and focus trap hooks into one.
 * 
 * Another in the "complete" series, alongside list/grid navigation and dismissal itself.
 * @param param0 
 * @returns 
 */
export function useModal<Listeners extends DismissListenerTypes, SourceElement extends Element, PopupElement extends Element>({
    dismissParameters,
    escapeDismissParameters,
    focusTrapParameters
}: UseModalParameters<Listeners>) {
    const { getWindow } = escapeDismissParameters;
    const getDocument = useCallback(() => { return getWindow().document; }, [getWindow]);
    const { refElementPopupReturn, refElementSourceReturn, dismissReturn: { propsPopupStable, propsSourceStable } } = useDismiss<Listeners, SourceElement, PopupElement>({ dismissParameters, escapeDismissParameters });
    const { focusTrapReturn: { propsUnstable }, refElementReturn: { propsStable } } = useFocusTrap<SourceElement, PopupElement>({
        activeElementParameters: { getDocument },
        focusTrapParameters: { trapActive: dismissParameters.closeOnLostFocus && dismissParameters.open, ...focusTrapParameters },
        refElementParameters: {}
    });

    return {
        refElementPopupReturn,
        refElementSourceReturn,
        modalReturn: {
            propsPopupStable: useMergedProps(propsPopupStable, propsUnstable, propsStable),
            propsSourceStable
        }
    }
}
