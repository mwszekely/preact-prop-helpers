import { DismissListenerTypes, useDismiss, UseDismiss } from "../component-detail/use-dismiss.js";
import { useFocusTrap, UseFocusTrap } from "../component-detail/use-focus-trap.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { UseRefElement, useRefElement } from "../dom-helpers/use-ref-element.js";
import { assertEmptyObject } from "../util/assert.js";
import { ElementProps } from "../util/lib.js";
import { GenericHook, Parameter, StandardDepsOmit, StandardDepsPick } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";

export interface UseModalParametersSelf {
    /**
     * When `false`, all dismissal/focus trapping behavior is disabled. When `true`, they're allowed via their individual parameters.
     */
    active: boolean;
}

export type UseModal<FocusContainerElement extends Element | null, SourceElement extends Element | null, PopupElement extends Element, Listeners extends DismissListenerTypes> = GenericHook<
    "modal", 
    UseModalParametersSelf, [
        StandardDepsPick<"params", UseDismiss<SourceElement, PopupElement, Listeners>>,
        StandardDepsPick<"params", UseRefElement<any>>,
        StandardDepsOmit<"params", UseFocusTrap<any, any>,  "refElementReturn">
    ],
    never, [
        StandardDepsPick<"return", UseDismiss<SourceElement, PopupElement, Listeners>>,
        {
            propsFocusContainer: ElementProps<NonNullable<FocusContainerElement>>;
            propsStablePopup: ElementProps<NonNullable<PopupElement>>;
            propsStableSource: ElementProps<NonNullable<SourceElement>>;
        }
    ]
>;

/*
export interface UseModalParameters<Listeners extends DismissListenerTypes> extends
    UseDismissParameters<Listeners>,
    UseRefElementParameters<any>,
    OmitStrong<UseFocusTrapParameters<any, any>, "refElementReturn"> {
    modalParameters: UseModalParametersSelf;
}

export interface UseModalReturnType<FocusContainerElement extends Element | null, SourceElement extends Element | null, PopupElement extends Element> extends UseDismissReturnType<SourceElement, PopupElement> {
    propsFocusContainer: ElementProps<NonNullable<FocusContainerElement>>;
}
*/
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
export const useModal = monitored(function useModal<Listeners extends DismissListenerTypes, FocusContainerElement extends Element | null, SourceElement extends Element | null, PopupElement extends Element>({
    dismissParameters: { dismissActive, onDismiss, ...void2 },
    escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth, ...void3 },
    focusTrapParameters: { trapActive, ...focusTrapParameters },
    activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, ...void4 },
    backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop, ...void5 },
    lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus, ...void6 },
    refElementParameters: { onElementChange, onMount, onUnmount, ...void7 },
    modalParameters: { active: modalActive, ...void8 },
    ...void1
}: Parameter<UseModal<FocusContainerElement, SourceElement, PopupElement, Listeners>>): ReturnType<UseModal<FocusContainerElement, SourceElement, PopupElement, Listeners>> {
    const { refElementPopupReturn, refElementSourceReturn, propsStablePopup, propsStableSource } = useDismiss<Listeners, SourceElement, PopupElement>({
        dismissParameters: { dismissActive: dismissActive && modalActive, onDismiss },
        escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth },
        activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange },
        backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop },
        lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus },
    });
    const { propsStable, refElementReturn } = useRefElement<NonNullable<FocusContainerElement>>({ refElementParameters: { onElementChange, onMount, onUnmount } })
    const { props } = useFocusTrap<SourceElement, NonNullable<FocusContainerElement>>({
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
        refElementPopupReturn,
        refElementSourceReturn,
        propsFocusContainer: useMergedProps(propsStable, props),
        propsStablePopup,
        propsStableSource
    }
})
