import { h } from "preact";
import { DismissListenerTypes, useDismiss, UseDismissParameters, UseDismissReturnType } from "../component-detail/use-dismiss.js";
import { useFocusTrap, UseFocusTrapParameters, UseFocusTrapReturnType } from "../component-detail/use-focus-trap.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { useRefElement } from "../dom-helpers/use-ref-element.js";

export interface UseModalParameters<Listeners extends DismissListenerTypes> extends UseDismissParameters<Listeners> {
    focusTrapParameters: UseFocusTrapParameters<any, any>["focusTrapParameters"];
}

export interface UseModalReturnType<FocusContainerElement extends Element | null, SourceElement extends Element | null, PopupElement extends Element> extends UseDismissReturnType<SourceElement, PopupElement> {
    propsFocusContainer: h.JSX.HTMLAttributes<NonNullable<FocusContainerElement>>;
    focusTrapReturn: UseFocusTrapReturnType<NonNullable<FocusContainerElement>>["focusTrapReturn"];
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
    const { refElementPopupReturn, refElementSourceReturn, propsStablePopup, propsStableSource } = useDismiss<Listeners, SourceElement, PopupElement>({ dismissParameters, escapeDismissParameters });
    const { propsStable, refElementReturn } = useRefElement<NonNullable<FocusContainerElement>>({})
    const { focusTrapReturn, props } = useFocusTrap<SourceElement, NonNullable<FocusContainerElement>>({
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
    }
}
