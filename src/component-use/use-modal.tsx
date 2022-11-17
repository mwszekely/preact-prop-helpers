import { useCallback } from "preact/hooks";
import { DismissListenerTypes, useDismiss, UseDismissParameters, UseDismissReturnType } from "./use-dismiss";
import { useFocusTrap, UseFocusTrapParameters, UseFocusTrapReturnType } from "../component-detail/use-focus-trap";
import { useMergedProps } from "../dom-helpers/use-merged-props";
import { h } from "preact";

export interface UseModalParameters<Listeners extends DismissListenerTypes> extends UseDismissParameters<Listeners> {
    focusTrapParameters: UseFocusTrapParameters<any, any>["focusTrapParameters"];
}

export interface UseModalReturnType<FocusContainerElement extends Element | null, SourceElement extends Element | null, PopupElement extends Element> extends UseDismissReturnType<SourceElement, PopupElement> {
    propsFocusContainer: h.JSX.HTMLAttributes<NonNullable<FocusContainerElement>>;
    propsPopup: h.JSX.HTMLAttributes<PopupElement>;
    propsSource: h.JSX.HTMLAttributes<NonNullable<SourceElement>>;
    focusTrapReturn: Omit<UseFocusTrapReturnType<NonNullable<FocusContainerElement>>["focusTrapReturn"], "propsUnstable">;
}

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
export function useModal<Listeners extends DismissListenerTypes, FocusContainerElement extends Element | null, SourceElement extends Element | null, PopupElement extends Element>({
    dismissParameters,
    escapeDismissParameters,
    focusTrapParameters: { trapActive, ...focusTrapParameters }
}: UseModalParameters<Listeners>): UseModalReturnType<FocusContainerElement, SourceElement, PopupElement> {
    const { open } = dismissParameters;
    const { getWindow } = escapeDismissParameters;
    const getDocument = useCallback(() => { return getWindow().document; }, [getWindow]);
    const { refElementPopupReturn, refElementSourceReturn } = useDismiss<Listeners, SourceElement, PopupElement>({ dismissParameters, escapeDismissParameters });
    const { focusTrapReturn, refElementReturn } = useFocusTrap<SourceElement, NonNullable<FocusContainerElement>>({
        activeElementParameters: { getDocument },
        focusTrapParameters: { trapActive: open && trapActive, ...focusTrapParameters },
        refElementParameters: {}
    });

    const { propsStable: pp1 } = refElementPopupReturn;
    const { propsStable: ps2 } = refElementSourceReturn;
    const { propsUnstable: pp3 } = focusTrapReturn;
    const { propsStable: pp4 } = refElementReturn

    return {
        propsPopup: pp1,
        propsFocusContainer: useMergedProps(pp3, pp4),
        propsSource: ps2,
        refElementPopupReturn,
        refElementSourceReturn,
        focusTrapReturn,
    }
}
