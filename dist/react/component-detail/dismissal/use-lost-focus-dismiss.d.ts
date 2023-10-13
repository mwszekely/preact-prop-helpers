import { UseRefElementReturnType } from "../../dom-helpers/use-ref-element.js";
import { UseActiveElementParameters } from "../../observers/use-active-element.js";
import { TargetedPick } from "../../util/lib.js";
import { FocusEventType, Nullable } from "../../util/types.js";
export interface UseLostFocusDismissParametersSelf<B extends boolean> {
    /**
     * Called when the component is dismissed by losing focus
     *
     * @nonstable
     */
    onDismissLostFocus: Nullable<(e: FocusEventType<any>) => void>;
    /**
     * When `true`, `onDismiss` is eligible to be called. When `false`, it will not be called.
     */
    dismissLostFocusActive: B | false;
}
export interface UseLostFocusDismissParameters<SourceElement extends Element | null, PopupElement extends Element, B extends boolean> {
    lostFocusDismissParameters: UseLostFocusDismissParametersSelf<B>;
    refElementSourceReturn: Nullable<Pick<UseRefElementReturnType<NonNullable<SourceElement>>["refElementReturn"], "getElement">>;
    refElementPopupReturn: Pick<UseRefElementReturnType<PopupElement>["refElementReturn"], "getElement">;
}
export interface UseLostFocusDismissReturnType<_SourceElement extends Element | null, _PopupElement extends Element> extends TargetedPick<UseActiveElementParameters, "activeElementParameters", "onLastActiveElementChange"> {
}
/**
 * Invokes a callback when focus travels outside of the component's element.
 *
 * @remarks TODO: This is not intended for recursive structures, like dialogs that open dialogs, or menus that open menus, but does properly handle, e.g., the fact that a menu's menubutton having focus still counts as the menu having focus.
 *
 * @compositeParams
 */
export declare const useLostFocusDismiss: <SourceElement extends Element | null, PopupElement extends Element, B extends boolean>({ refElementPopupReturn: { getElement: getPopupElement, ...void3 }, refElementSourceReturn, lostFocusDismissParameters: { dismissLostFocusActive: open, onDismissLostFocus: onClose, ...void4 }, ...void1 }: UseLostFocusDismissParameters<SourceElement, PopupElement, B>) => UseLostFocusDismissReturnType<SourceElement, PopupElement>;
//# sourceMappingURL=use-lost-focus-dismiss.d.ts.map