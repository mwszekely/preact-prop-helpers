import { DismissListenerTypes, UseDismissParameters, UseDismissReturnType } from "../component-detail/use-dismiss.js";
import { UseFocusTrapParameters } from "../component-detail/use-focus-trap.js";
import { UseRefElementParameters } from "../dom-helpers/use-ref-element.js";
import { ElementProps, OmitStrong, PropNames } from "../util/types.js";
declare module "../util/types.js" {
    interface PropNames {
        ModalParameters: typeof PNames;
    }
}
declare module "../util/types.js" {
    interface PropNames {
        ModalReturn: typeof RNames;
    }
}
export declare const PNames: {
    readonly active: "PropNames.ModalParameters.active";
};
export declare const RNames: {};
export interface UseModalParametersSelf {
    /**
     * When `false`, all dismissal/focus trapping behavior is disabled. When `true`, they're allowed via their individual parameters.
     */
    [PropNames.ModalParameters.active]: boolean;
}
export interface UseModalParameters<Listeners extends DismissListenerTypes> extends UseModalParametersSelf, UseDismissParameters<Listeners>, UseRefElementParameters<any>, OmitStrong<UseFocusTrapParameters<any, any>, (typeof PropNames)["RefElementReturn"]["getElement"]> {
}
export interface UseModalReturnType<FocusContainerElement extends Element | null, SourceElement extends Element | null, PopupElement extends Element> extends UseDismissReturnType<SourceElement, PopupElement> {
    propsFocusContainer: ElementProps<NonNullable<FocusContainerElement>>[];
}
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
export declare const useModal: <Listeners extends DismissListenerTypes, FocusContainerElement extends Element | null, SourceElement extends Element | null, PopupElement extends Element>({ [PropNames.DismissParameters.dismissActive]: dismissActive, [PropNames.DismissParameters.onDismiss]: onDismiss, [PropNames.EscapeDismissParameters.dismissEscapeActive]: dismissEscapeActive, [PropNames.EscapeDismissParameters.onDismissEscape]: onDismissEscape, [PropNames.EscapeDismissParameters.parentDepth]: parentDepth, [PropNames.ActiveElementParameters.getDocument]: getDocument, [PropNames.ActiveElementParameters.onActiveElementChange]: onActiveElementChange, [PropNames.ActiveElementParameters.onLastActiveElementChange]: onLastActiveElementChange, [PropNames.ActiveElementParameters.onWindowFocusedChange]: onWindowFocusedChange, [PropNames.BackdropDismissParameters.dismissBackdropActive]: dismissBackdropActive, [PropNames.BackdropDismissParameters.onDismissBackdrop]: onDismissBackdrop, [PropNames.LostFocusDismissParameters.dismissLostFocusActive]: dismissLostFocusActive, [PropNames.LostFocusDismissParameters.onDismissLostFocus]: onDismissLostFocus, [PropNames.RefElementParameters.onElementChange]: onElementChange, [PropNames.RefElementParameters.onMount]: onMount, [PropNames.RefElementParameters.onUnmount]: onUnmount, [PropNames.ModalParameters.active]: modalActive, [PropNames.FocusTrapParameters.trapActive]: trapActive, [PropNames.FocusTrapParameters.onlyMoveFocus]: onlyMoveFocus, [PropNames.FocusTrapParameters.focusPopup]: focusPopup, [PropNames.FocusTrapParameters.focusOpener]: focusOpener, ...void1 }: UseModalParameters<Listeners>) => UseModalReturnType<FocusContainerElement, SourceElement, PopupElement>;
//# sourceMappingURL=use-modal.d.ts.map