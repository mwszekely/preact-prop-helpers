import { DismissListenerTypes, UseDismiss } from "../component-detail/use-dismiss.js";
import { UseFocusTrap } from "../component-detail/use-focus-trap.js";
import { UseRefElement } from "../dom-helpers/use-ref-element.js";
import { ElementProps } from "../util/lib.js";
import { Parameter, StandardDepsOmit, StandardDepsPick, StandardHook } from "../util/types.js";
export interface UseModalParametersSelf {
    /**
     * When `false`, all dismissal/focus trapping behavior is disabled. When `true`, they're allowed via their individual parameters.
     */
    active: boolean;
}
export type UseModal<FocusContainerElement extends Element | null, SourceElement extends Element | null, PopupElement extends Element, Listeners extends DismissListenerTypes> = StandardHook<"modal", UseModalParametersSelf, [
    StandardDepsPick<"params", UseDismiss<SourceElement, PopupElement, Listeners>>,
    StandardDepsPick<"params", UseRefElement<any>>,
    StandardDepsOmit<"params", UseFocusTrap<any, any>, "refElementReturn">
], never, [
    StandardDepsPick<"return", UseDismiss<SourceElement, PopupElement, Listeners>>,
    {
        propsFocusContainer: ElementProps<NonNullable<FocusContainerElement>>;
        propsStablePopup: ElementProps<NonNullable<PopupElement>>;
        propsStableSource: ElementProps<NonNullable<SourceElement>>;
    }
]>;
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
export declare const useModal: <Listeners extends DismissListenerTypes, FocusContainerElement extends Element | null, SourceElement extends Element | null, PopupElement extends Element>({ dismissParameters: { dismissActive, onDismiss, ...void2 }, escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth, ...void3 }, focusTrapParameters: { trapActive, ...focusTrapParameters }, activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, ...void4 }, backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop, ...void5 }, lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus, ...void6 }, refElementParameters: { onElementChange, onMount, onUnmount, ...void7 }, modalParameters: { active: modalActive, ...void8 }, ...void1 }: {
    modalParameters: UseModalParametersSelf;
} & StandardDepsPick<"params", UseDismiss<SourceElement, PopupElement, Listeners>> & StandardDepsPick<"params", UseRefElement<any>> & StandardDepsOmit<"params", UseFocusTrap<any, any>, "refElementReturn">) => {} & StandardDepsPick<"return", UseDismiss<SourceElement, PopupElement, Listeners>> & {
    propsFocusContainer: ElementProps<NonNullable<FocusContainerElement>>;
    propsStablePopup: ElementProps<NonNullable<PopupElement>>;
    propsStableSource: ElementProps<NonNullable<SourceElement>>;
};
//# sourceMappingURL=use-modal.d.ts.map