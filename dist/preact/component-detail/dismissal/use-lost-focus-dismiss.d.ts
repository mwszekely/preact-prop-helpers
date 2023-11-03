import { UseRefElement } from "../../dom-helpers/use-ref-element.js";
import { UseActiveElement } from "../../observers/use-active-element.js";
import { FocusEventType } from "../../util/lib.js";
import { Nullable, Parameter, StandardDepsPick, StandardDepsRename, StandardHook } from "../../util/types.js";
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
export type UseLostFocusDismiss<SourceElement extends Element | null, PopupElement extends Element, B extends boolean> = StandardHook<"lostFocusDismiss", UseLostFocusDismissParametersSelf<B>, [
    StandardDepsRename<StandardDepsPick<"return", UseRefElement<NonNullable<SourceElement>>, "refElementReturn", "pick", "getElement">, "refElementReturn", "refElementSourceReturn">,
    StandardDepsRename<StandardDepsPick<"return", UseRefElement<PopupElement>, "refElementReturn", "pick", "getElement">, "refElementReturn", "refElementPopupReturn">
], never, [StandardDepsPick<"params", UseActiveElement, "activeElementParameters", "pick", "onLastActiveElementChange">]>;
/**
 * Invokes a callback when focus travels outside of the component's element.
 *
 * @remarks TODO: This is not intended for recursive structures, like dialogs that open dialogs, or menus that open menus, but does properly handle, e.g., the fact that a menu's menubutton having focus still counts as the menu having focus.
 *
 * @compositeParams
 */
export declare const useLostFocusDismiss: <SourceElement extends Element | null, PopupElement extends Element, B extends boolean>({ refElementPopupReturn: { getElement: getPopupElement, ...void3 }, refElementSourceReturn, lostFocusDismissParameters: { dismissLostFocusActive: open, onDismissLostFocus: onClose, ...void4 }, ...void1 }: {
    lostFocusDismissParameters: UseLostFocusDismissParametersSelf<B>;
} & StandardDepsRename<StandardDepsPick<"return", UseRefElement<NonNullable<SourceElement>>, "refElementReturn", "pick", "getElement">, "refElementReturn", "refElementSourceReturn"> & StandardDepsRename<StandardDepsPick<"return", UseRefElement<PopupElement>, "refElementReturn", "pick", "getElement">, "refElementReturn", "refElementPopupReturn">) => {} & StandardDepsPick<"params", UseActiveElement, "activeElementParameters", "pick", "onLastActiveElementChange">;
//# sourceMappingURL=use-lost-focus-dismiss.d.ts.map