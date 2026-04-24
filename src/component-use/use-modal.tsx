import { DismissListenerTypes, useDismiss, UseDismissParameters, UseDismissReturnType } from "../component-detail/use-dismiss.js";
import { UseRefElementParameters } from "../dom-helpers/use-ref-element.js";
import { assertEmptyObject } from "../util/assert.js";
import { useMonitoring } from "../util/use-call-count.js";

export interface UseModalParametersSelf {
    /**
     * When `false`, all dismissal/focus trapping behavior is disabled. When `true`, they're allowed via their individual parameters.
     */
    active: boolean;
}
export interface UseModalParameters<Listeners extends DismissListenerTypes> extends
    UseDismissParameters<Listeners>,
    UseRefElementParameters<any> {
    modalParameters: UseModalParametersSelf;
}

export interface UseModalReturnType<FocusContainerElement extends Element | null, SourceElement extends Element | null, PopupElement extends Element> extends UseDismissReturnType<SourceElement, PopupElement> {
    //propsFocusContainer: ElementProps<NonNullable<FocusContainerElement>>;
}

/**
 * Combines dismissal hooks and focus trap hooks into one. 
 * Use for dialogs, menus, etc.  Anything that can be dismissed and might trap focus, basically.
 * 
 * @remarks Another in the "complete" series, alongside list/grid navigation and dismissal itself. 
 * 
 * TODO: HTML dialogs and popovers FINALLY make this 100% obsolete. It's no longer being maintained. Remove ASAP.
 * 
 * @compositeParams
 */
export function useModal<Listeners extends DismissListenerTypes, FocusContainerElement extends Element | null, SourceElement extends Element | null, PopupElement extends Element>({
    dismissParameters: { dismissActive, onDismiss, ...void2 },
    escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth, ...void3 },
    activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, ...void4 },
    backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop, ...void5 },
    lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus, ...void6 },
    refElementParameters: { onElementChange, onMount, onUnmount, ...void7 },
    modalParameters: { active: modalActive, ...void8 },
    ...void1
}: UseModalParameters<Listeners>): UseModalReturnType<FocusContainerElement, SourceElement, PopupElement> {
    return useMonitoring(function useModal(): UseModalReturnType<FocusContainerElement, SourceElement, PopupElement> {
        const { refElementPopupReturn, refElementSourceReturn, propsStablePopup, propsStableSource } = useDismiss<Listeners, SourceElement, PopupElement>({
            dismissParameters: { dismissActive: dismissActive && modalActive, onDismiss },
            escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth },
            activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange },
            backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop },
            lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus },
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
            propsStablePopup,
            propsStableSource
        }
    });
}
