import { PropNames_RefElementReturn_getElement, UseRefElementReturnTypeSelf } from "../../dom-helpers/use-ref-element.js";
import { PropNames_ActiveElementParameters_onLastActiveElementChange, UseActiveElementParameters } from "../../observers/use-active-element.js";
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
    [PropNames_LostFocusDismissParameters_onDismissLostFocus]: Nullable<(e: FocusEventType<any>) => void>;
    /**
     * When `true`, `onDismiss` is eligible to be called. When `false`, it will not be called.
     */
    [PropNames_LostFocusDismissParameters_dismissLostFocusActive]: B | false;
    [PropNames_LostFocusDismissParameters_getElementSource]: UseRefElementReturnTypeSelf<NonNullable<SourceElement>>[typeof PropNames_RefElementReturn_getElement];
    [PropNames_LostFocusDismissParameters_getElementPopup]: UseRefElementReturnTypeSelf<NonNullable<PopupElement>>[typeof PropNames_RefElementReturn_getElement];
}
export interface UseLostFocusDismissParameters<SourceElement extends Element | null, PopupElement extends Element, B extends boolean> extends UseLostFocusDismissParametersSelf<SourceElement, PopupElement, B> {
}
export interface UseLostFocusDismissReturnType<_SourceElement extends Element | null, _PopupElement extends Element> extends Pick<UseActiveElementParameters, typeof PropNames_ActiveElementParameters_onLastActiveElementChange> {
}
/**
 * Invokes a callback when focus travels outside of the component's element.
 *
 * @remarks TODO: This is not intended for recursive structures, like dialogs that open dialogs, or menus that open menus, but does properly handle, e.g., the fact that a menu's menubutton having focus still counts as the menu having focus.
 *
 * @compositeParams
 */
export declare const useLostFocusDismiss: <SourceElement extends Element | null, PopupElement extends Element, B extends boolean>({ [PropNames_LostFocusDismissParameters_getElementSource]: getElementSource, [PropNames_LostFocusDismissParameters_getElementPopup]: getElementPopup, [PropNames_LostFocusDismissParameters_dismissLostFocusActive]: open, [PropNames_LostFocusDismissParameters_onDismissLostFocus]: onClose, ..._void1 }: UseLostFocusDismissParameters<SourceElement, PopupElement, B>) => UseLostFocusDismissReturnType<SourceElement, PopupElement>;
//# sourceMappingURL=use-lost-focus-dismiss.d.ts.map