import { UseRefElementReturnType } from "../../dom-helpers/use-ref-element.js";
import { UseActiveElementParameters } from "../../observers/use-active-element.js";
import { EnhancedEventHandler } from "../../util/event.js";
import { TargetedPick } from "../../util/lib.js";
import { FocusEventType, Nullable } from "../../util/types.js";
export interface UseLostFocusDismissParametersSelf {
    /**
     * Called when the component is dismissed by losing focus
     */
    onDismiss: EnhancedEventHandler<FocusEventType<any>, {
        reason: "lost-focus";
    }>;
    /**
     * When `true`, `onDismiss` is eligible to be called. When `false`, it will not be called.
     */
    active: boolean;
}
export interface UseLostFocusDismissParameters<SourceElement extends Element | null, PopupElement extends Element> {
    lostFocusDismissParameters: UseLostFocusDismissParametersSelf;
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
export declare function useLostFocusDismiss<SourceElement extends Element | null, PopupElement extends Element>({ refElementPopupReturn: { getElement: getPopupElement, ...void3 }, refElementSourceReturn, lostFocusDismissParameters: { active: open, onDismiss: onClose, ...void4 }, ...void1 }: UseLostFocusDismissParameters<SourceElement, PopupElement>): UseLostFocusDismissReturnType<SourceElement, PopupElement>;
//# sourceMappingURL=use-lost-focus-dismiss.d.ts.map