import { UseRefElementReturnTypeSelf } from "../../dom-helpers/use-ref-element.js";
import { UseActiveElementParameters } from "../../observers/use-active-element.js";
import { OnPassiveStateChange } from "../../preact-extensions/use-passive-state.js";
import { useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { useCallback } from "../../util/lib.js";
import { FocusEventType, Nullable } from "../../util/types.js";
import { monitored } from "../../util/use-call-count.js";

const P = `PropNames.LostFocusDismissParameters`;
const R = `PropNames.LostFocusDismissReturn`;

export const PropNames_LostFocusDismissParameters_dismissLostFocusActive = `${P}.dismissLostFocusActive`;
export const PropNames_LostFocusDismissParameters_onDismissLostFocus = `${P}.onDismissLostFocus`;
export const PropNames_LostFocusDismissParameters_getElementSource = `${P}.getElementSource`;
export const PropNames_LostFocusDismissParameters_getElementPopup = `${P}.getElementPopup`;



export interface UseLostFocusDismissParametersSelf<SourceElement extends Element | null, PopupElement extends Element, B extends boolean> {

    /**
     * Called when the component is dismissed by losing focus
     * 
     * @nonstable
     */
    "PropNames.LostFocusDismissParameters.onDismissLostFocus": Nullable<(e: FocusEventType<any>) => void>;

    /** 
     * When `true`, `onDismiss` is eligible to be called. When `false`, it will not be called.
     */
    "PropNames.LostFocusDismissParameters.dismissLostFocusActive": B | false;

    "PropNames.LostFocusDismissParameters.getElementSource": UseRefElementReturnTypeSelf<NonNullable<SourceElement>>["PropNames.RefElementReturn.getElement"];
    "PropNames.LostFocusDismissParameters.getElementPopup": UseRefElementReturnTypeSelf<NonNullable<PopupElement>>["PropNames.RefElementReturn.getElement"];
};

export interface UseLostFocusDismissParameters<SourceElement extends Element | null, PopupElement extends Element, B extends boolean> extends UseLostFocusDismissParametersSelf<SourceElement, PopupElement, B> { }

export interface UseLostFocusDismissReturnType<_SourceElement extends Element | null, _PopupElement extends Element> extends Pick<UseActiveElementParameters, "PropNames.ActiveElementParameters.onLastActiveElementChange"> { }

/**
 * Invokes a callback when focus travels outside of the component's element.
 * 
 * @remarks TODO: This is not intended for recursive structures, like dialogs that open dialogs, or menus that open menus, but does properly handle, e.g., the fact that a menu's menubutton having focus still counts as the menu having focus.
 * 
 * @compositeParams 
 */
export const useLostFocusDismiss = monitored(function useLostFocusDismiss<SourceElement extends Element | null, PopupElement extends Element, B extends boolean>({
    "PropNames.LostFocusDismissParameters.getElementSource": getElementSource,
    "PropNames.LostFocusDismissParameters.getElementPopup": getElementPopup,
    "PropNames.LostFocusDismissParameters.dismissLostFocusActive": open,
    "PropNames.LostFocusDismissParameters.onDismissLostFocus": onClose,
    ..._void1
}: UseLostFocusDismissParameters<SourceElement, PopupElement, B>): UseLostFocusDismissReturnType<SourceElement, PopupElement> {
    assertEmptyObject(_void1);


    const stableOnClose = useStableGetter(onClose);
    const getOpen = useStableGetter(open);
    const onLastActiveElementChange = useCallback<OnPassiveStateChange<Element | null, FocusEventType<any>>>((newElement, _prevElement, e) => {
        const open = getOpen();
        const sourceElement = getElementSource?.();
        const popupElement = getElementPopup();
        if (!(sourceElement?.contains(newElement) || popupElement?.contains(newElement))) {
            if (open) {
                console.assert(e != null);
                stableOnClose()?.(e!);
            }
        }
    }, [getElementSource]);

    return { 
        "PropNames.ActiveElementParameters.onLastActiveElementChange": onLastActiveElementChange
     }
})
