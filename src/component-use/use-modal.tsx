import { DismissListenerTypes, useDismiss, UseDismissParameters, UseDismissReturnType } from "../component-detail/use-dismiss.js";
import { useFocusTrap, UseFocusTrapParameters } from "../component-detail/use-focus-trap.js";
import { useRefElement, UseRefElementParameters } from "../dom-helpers/use-ref-element.js";
import { assertEmptyObject } from "../util/assert.js";
import { ElementProps, OmitStrong, PropNames } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";

declare module "../util/types.js" { interface PropNames { ModalParameters: typeof PNames } }
declare module "../util/types.js" { interface PropNames { ModalReturn: typeof RNames } }

const P = `PropNames.ModalParameters`;
const R = `PropNames.ModalReturn`;

export const PNames = {
    active: `${P}.active`
} as const;

export const RNames = {
} as const;

PropNames.ModalParameters ??= PNames;
PropNames.ModalReturn ??= RNames;

export interface UseModalParametersSelf {
    /**
     * When `false`, all dismissal/focus trapping behavior is disabled. When `true`, they're allowed via their individual parameters.
     */
    [PropNames.ModalParameters.active]: boolean;
}
export interface UseModalParameters<Listeners extends DismissListenerTypes> extends
    UseModalParametersSelf,
    UseDismissParameters<Listeners>,
    UseRefElementParameters<any>,
    OmitStrong<UseFocusTrapParameters<any, any>, (typeof PropNames)["RefElementReturn"]["getElement"]> {
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
export const useModal = monitored(function useModal<Listeners extends DismissListenerTypes, FocusContainerElement extends Element | null, SourceElement extends Element | null, PopupElement extends Element>({
    [PropNames.DismissParameters.dismissActive]: dismissActive, [PropNames.DismissParameters.onDismiss]: onDismiss,
    [PropNames.EscapeDismissParameters.dismissEscapeActive]: dismissEscapeActive,
    [PropNames.EscapeDismissParameters.onDismissEscape]: onDismissEscape,
    [PropNames.EscapeDismissParameters.parentDepth]: parentDepth,
    [PropNames.ActiveElementParameters.getDocument]: getDocument,
    [PropNames.ActiveElementParameters.onActiveElementChange]: onActiveElementChange,
    [PropNames.ActiveElementParameters.onLastActiveElementChange]: onLastActiveElementChange,
    [PropNames.ActiveElementParameters.onWindowFocusedChange]: onWindowFocusedChange,
    [PropNames.BackdropDismissParameters.dismissBackdropActive]: dismissBackdropActive,
    [PropNames.BackdropDismissParameters.onDismissBackdrop]: onDismissBackdrop,
    [PropNames.LostFocusDismissParameters.dismissLostFocusActive]: dismissLostFocusActive,
    [PropNames.LostFocusDismissParameters.onDismissLostFocus]: onDismissLostFocus,
    [PropNames.RefElementParameters.onElementChange]: onElementChange,
    [PropNames.RefElementParameters.onMount]: onMount,
    [PropNames.RefElementParameters.onUnmount]: onUnmount,
    [PropNames.ModalParameters.active]: modalActive,
    [PropNames.FocusTrapParameters.trapActive]: trapActive,
    [PropNames.FocusTrapParameters.onlyMoveFocus]: onlyMoveFocus,
    [PropNames.FocusTrapParameters.focusPopup]: focusPopup,
    [PropNames.FocusTrapParameters.focusOpener]: focusOpener,
    ...void1
}: UseModalParameters<Listeners>): UseModalReturnType<FocusContainerElement, SourceElement, PopupElement> {
    const dismissReturn = useDismiss<Listeners, SourceElement, PopupElement>({
        [PropNames.DismissParameters.dismissActive]: dismissActive && modalActive,
        [PropNames.DismissParameters.onDismiss]: onDismiss,
        [PropNames.EscapeDismissParameters.dismissEscapeActive]: dismissEscapeActive,
        [PropNames.EscapeDismissParameters.onDismissEscape]: onDismissEscape,
        [PropNames.EscapeDismissParameters.parentDepth]: parentDepth,
        [PropNames.ActiveElementParameters.getDocument]: getDocument,
        [PropNames.ActiveElementParameters.onActiveElementChange]: onActiveElementChange,
        [PropNames.ActiveElementParameters.onLastActiveElementChange]: onLastActiveElementChange,
        [PropNames.ActiveElementParameters.onWindowFocusedChange]: onWindowFocusedChange,
        [PropNames.BackdropDismissParameters.dismissBackdropActive]: dismissBackdropActive,
        [PropNames.BackdropDismissParameters.onDismissBackdrop]: onDismissBackdrop,
        [PropNames.LostFocusDismissParameters.dismissLostFocusActive]: dismissLostFocusActive,
        [PropNames.LostFocusDismissParameters.onDismissLostFocus]: onDismissLostFocus,
    });

    const {
        [PropNames.RefElementReturn.getElement]: getElement,
        props: propsStable,
        ...void2
    } = useRefElement<NonNullable<FocusContainerElement>>({
        [PropNames.RefElementParameters.onElementChange]: onElementChange,
        [PropNames.RefElementParameters.onMount]: onMount,
        [PropNames.RefElementParameters.onUnmount]: onUnmount,
    })

    const { props, ...void3 } = useFocusTrap<SourceElement, NonNullable<FocusContainerElement>>({
        [PropNames.FocusTrapParameters.trapActive]: trapActive && modalActive,
        [PropNames.FocusTrapParameters.focusOpener]: focusOpener,
        [PropNames.FocusTrapParameters.focusPopup]: focusPopup,
        [PropNames.FocusTrapParameters.onlyMoveFocus]: onlyMoveFocus,
        [PropNames.RefElementReturn.getElement]: getElement
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);

    return {
        ...dismissReturn,
        propsFocusContainer: [propsStable, props],
    }
})
