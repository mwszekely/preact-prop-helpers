import { UseRefElementReturnTypeSelf } from "../../dom-helpers/use-ref-element.js";
import { UseActiveElementParameters } from "../../observers/use-active-element.js";
import { FocusEventType, Nullable } from "../../util/types.js";
export declare const PropNames_LostFocusDismissParameters_dismissLostFocusActive = "PropNames.LostFocusDismissParameters.dismissLostFocusActive";
export declare const PropNames_LostFocusDismissParameters_onDismissLostFocus = "PropNames.LostFocusDismissParameters.onDismissLostFocus";
export declare const PropNames_LostFocusDismissParameters_getElementSource = "PropNames.LostFocusDismissParameters.getElementSource";
export declare const PropNames_LostFocusDismissParameters_getElementPopup = "PropNames.LostFocusDismissParameters.getElementPopup";
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
}
export interface UseLostFocusDismissParameters<SourceElement extends Element | null, PopupElement extends Element, B extends boolean> extends UseLostFocusDismissParametersSelf<SourceElement, PopupElement, B> {
}
export interface UseLostFocusDismissReturnType<_SourceElement extends Element | null, _PopupElement extends Element> extends Pick<UseActiveElementParameters, "PropNames.ActiveElementParameters.onLastActiveElementChange"> {
}
/**
 * Invokes a callback when focus travels outside of the component's element.
 *
 * @remarks TODO: This is not intended for recursive structures, like dialogs that open dialogs, or menus that open menus, but does properly handle, e.g., the fact that a menu's menubutton having focus still counts as the menu having focus.
 *
 * @compositeParams
 */
export declare const useLostFocusDismiss: <SourceElement extends Element | null, PopupElement extends Element, B extends boolean>({ "PropNames.LostFocusDismissParameters.getElementSource": getElementSource, "PropNames.LostFocusDismissParameters.getElementPopup": getElementPopup, "PropNames.LostFocusDismissParameters.dismissLostFocusActive": open, "PropNames.LostFocusDismissParameters.onDismissLostFocus": onClose, ..._void1 }: UseLostFocusDismissParameters<SourceElement, PopupElement, B>) => UseLostFocusDismissReturnType<SourceElement, PopupElement>;
//# sourceMappingURL=use-lost-focus-dismiss.d.ts.map