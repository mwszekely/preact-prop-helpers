import { DismissListenerTypes, useDismiss, UseDismissParameters, UseDismissReturnType } from "../component-detail/use-dismiss.js";
import { useFocusTrap, UseFocusTrapParameters } from "../component-detail/use-focus-trap.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { useRefElement } from "../dom-helpers/use-ref-element.js";
import { ElementProps } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";

export interface UseModalParameters<Listeners extends DismissListenerTypes> extends UseDismissParameters<Listeners>, Pick<UseFocusTrapParameters<any, any>,"focusTrapParameters"> {}

export interface UseModalReturnType<FocusContainerElement extends Element | null, SourceElement extends Element | null, PopupElement extends Element> extends UseDismissReturnType<SourceElement, PopupElement> {
    propsFocusContainer: ElementProps<NonNullable<FocusContainerElement>>;
}

/**
 * Combines dismissal hooks and focus trap hooks into one. 
 * Use for dialogs, menus, etc.  Anything that can be dismissed and might trap focus, basically.
 * 
 * @remarks Another in the "complete" series, alongside list/grid navigation and dismissal itself. 
 * 
 * @compositeParams
 */
export function useModal<Listeners extends DismissListenerTypes, FocusContainerElement extends Element | null, SourceElement extends Element | null, PopupElement extends Element>({
    dismissParameters,
    escapeDismissParameters,
    focusTrapParameters: { trapActive, ...focusTrapParameters }
}: UseModalParameters<Listeners>): UseModalReturnType<FocusContainerElement, SourceElement, PopupElement> {
    monitorCallCount(useModal);

    const { open } = dismissParameters;
    const { refElementPopupReturn, refElementSourceReturn, propsStablePopup, propsStableSource } = useDismiss<Listeners, SourceElement, PopupElement>({ dismissParameters, escapeDismissParameters });
    const { propsStable, refElementReturn } = useRefElement<NonNullable<FocusContainerElement>>({})
    const { props } = useFocusTrap<SourceElement, NonNullable<FocusContainerElement>>({
        focusTrapParameters: { trapActive: open && trapActive, ...focusTrapParameters },
        refElementReturn
    });

    return {
        propsFocusContainer: useMergedProps(propsStable, props),
        refElementPopupReturn,
        refElementSourceReturn,
        propsStablePopup,
        propsStableSource
    }
}
