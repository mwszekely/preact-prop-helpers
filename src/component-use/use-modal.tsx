import { PropNames_BackdropDismissParameters_dismissBackdropActive, PropNames_BackdropDismissParameters_onDismissBackdrop } from "../component-detail/dismissal/use-backdrop-dismiss.js";
import { PropNames_EscapeDismissParameters_dismissEscapeActive, PropNames_EscapeDismissParameters_onDismissEscape, PropNames_EscapeDismissParameters_parentDepth } from "../component-detail/dismissal/use-escape-dismiss.js";
import { PropNames_LostFocusDismissParameters_dismissLostFocusActive, PropNames_LostFocusDismissParameters_onDismissLostFocus } from "../component-detail/dismissal/use-lost-focus-dismiss.js";
import { DismissListenerTypes, PropNames_DismissParameters_dismissActive, PropNames_DismissParameters_onDismiss, UseDismissParameters, UseDismissReturnType, useDismiss } from "../component-detail/use-dismiss.js";
import { PropNames_FocusTrapParameters_focusOpener, PropNames_FocusTrapParameters_focusPopup, PropNames_FocusTrapParameters_onlyMoveFocus, PropNames_FocusTrapParameters_trapActive, UseFocusTrapParameters, useFocusTrap } from "../component-detail/use-focus-trap.js";
import { PropNames_RefElementParameters_onElementChange, PropNames_RefElementParameters_onMount, PropNames_RefElementParameters_onUnmount, PropNames_RefElementReturn_getElement, UseRefElementParameters, useRefElement } from "../dom-helpers/use-ref-element.js";
import { PropNames_ActiveElementParameters_getDocument, PropNames_ActiveElementParameters_onActiveElementChange, PropNames_ActiveElementParameters_onLastActiveElementChange, PropNames_ActiveElementParameters_onWindowFocusedChange } from "../observers/use-active-element.js";
import { assertEmptyObject } from "../util/assert.js";
import { ElementProps, OmitStrong } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";

const P = `PropNames.ModalParameters`;
const R = `PropNames.ModalReturn`;

export const PropNames_ModalParameters_active = `${P}.active`;


export interface UseModalParametersSelf {
    /**
     * When `false`, all dismissal/focus trapping behavior is disabled. When `true`, they're allowed via their individual parameters.
     */
    [PropNames_ModalParameters_active]: boolean;
}
export interface UseModalParameters<Listeners extends DismissListenerTypes> extends
    UseModalParametersSelf,
    UseDismissParameters<Listeners>,
    UseRefElementParameters<any>,
    OmitStrong<UseFocusTrapParameters<any, any>, typeof PropNames_RefElementReturn_getElement> {
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
    [PropNames_DismissParameters_dismissActive]: dismissActive, 
    [PropNames_DismissParameters_onDismiss]: onDismiss,
    [PropNames_EscapeDismissParameters_dismissEscapeActive]: dismissEscapeActive,
    [PropNames_EscapeDismissParameters_onDismissEscape]: onDismissEscape,
    [PropNames_EscapeDismissParameters_parentDepth]: parentDepth,
    [PropNames_ActiveElementParameters_getDocument]: getDocument,
    [PropNames_ActiveElementParameters_onActiveElementChange]: onActiveElementChange,
    [PropNames_ActiveElementParameters_onLastActiveElementChange]: onLastActiveElementChange,
    [PropNames_ActiveElementParameters_onWindowFocusedChange]: onWindowFocusedChange,
    [PropNames_BackdropDismissParameters_dismissBackdropActive]: dismissBackdropActive,
    [PropNames_BackdropDismissParameters_onDismissBackdrop]: onDismissBackdrop,
    [PropNames_LostFocusDismissParameters_dismissLostFocusActive]: dismissLostFocusActive,
    [PropNames_LostFocusDismissParameters_onDismissLostFocus]: onDismissLostFocus,
    [PropNames_RefElementParameters_onElementChange]: onElementChange,
    [PropNames_RefElementParameters_onMount]: onMount,
    [PropNames_RefElementParameters_onUnmount]: onUnmount,
    [PropNames_ModalParameters_active]: modalActive,
    [PropNames_FocusTrapParameters_trapActive]: trapActive,
    [PropNames_FocusTrapParameters_onlyMoveFocus]: onlyMoveFocus,
    [PropNames_FocusTrapParameters_focusPopup]: focusPopup,
    [PropNames_FocusTrapParameters_focusOpener]: focusOpener,
    ...void1
}: UseModalParameters<Listeners>): UseModalReturnType<FocusContainerElement, SourceElement, PopupElement> {
    const dismissReturn = useDismiss<Listeners, SourceElement, PopupElement>({
        [PropNames_DismissParameters_dismissActive]: dismissActive && modalActive,
        [PropNames_DismissParameters_onDismiss]: onDismiss,
        [PropNames_EscapeDismissParameters_dismissEscapeActive]: dismissEscapeActive,
        [PropNames_EscapeDismissParameters_onDismissEscape]: onDismissEscape,
        [PropNames_EscapeDismissParameters_parentDepth]: parentDepth,
        [PropNames_ActiveElementParameters_getDocument]: getDocument,
        [PropNames_ActiveElementParameters_onActiveElementChange]: onActiveElementChange,
        [PropNames_ActiveElementParameters_onLastActiveElementChange]: onLastActiveElementChange,
        [PropNames_ActiveElementParameters_onWindowFocusedChange]: onWindowFocusedChange,
        [PropNames_BackdropDismissParameters_dismissBackdropActive]: dismissBackdropActive,
        [PropNames_BackdropDismissParameters_onDismissBackdrop]: onDismissBackdrop,
        [PropNames_LostFocusDismissParameters_dismissLostFocusActive]: dismissLostFocusActive,
        [PropNames_LostFocusDismissParameters_onDismissLostFocus]: onDismissLostFocus,
    });

    const {
        [PropNames_RefElementReturn_getElement]: getElement,
        props: propsStable,
        ...void2
    } = useRefElement<NonNullable<FocusContainerElement>>({
        [PropNames_RefElementParameters_onElementChange]: onElementChange,
        [PropNames_RefElementParameters_onMount]: onMount,
        [PropNames_RefElementParameters_onUnmount]: onUnmount,
    })

    const { props, ...void3 } = useFocusTrap<SourceElement, NonNullable<FocusContainerElement>>({
        [PropNames_FocusTrapParameters_trapActive]: trapActive && modalActive,
        [PropNames_FocusTrapParameters_focusOpener]: focusOpener,
        [PropNames_FocusTrapParameters_focusPopup]: focusPopup,
        [PropNames_FocusTrapParameters_onlyMoveFocus]: onlyMoveFocus,
        [PropNames_RefElementReturn_getElement]: getElement
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);

    return {
        ...dismissReturn,
        propsFocusContainer: [propsStable, props],
    }
})
