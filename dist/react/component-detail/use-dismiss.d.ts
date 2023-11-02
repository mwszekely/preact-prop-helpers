import { UseRefElement } from "../dom-helpers/use-ref-element.js";
import { UseActiveElement } from "../observers/use-active-element.js";
import { ElementProps, EventType } from "../util/lib.js";
import { GenericHook, Parameter, StandardDepsOmit, StandardDepsPick, StandardDepsRename } from "../util/types.js";
import { UseBackdropDismiss } from "./dismissal/use-backdrop-dismiss.js";
import { UseEscapeDismiss } from "./dismissal/use-escape-dismiss.js";
import { UseLostFocusDismiss } from "./dismissal/use-lost-focus-dismiss.js";
export type DismissListenerTypes = "backdrop" | "lost-focus" | "escape";
export interface UseDismissParametersSelf<Listeners extends DismissListenerTypes> {
    /**
     * Controls all dismiss behaviors at once.
     *
     * @remarks When this is `true`, any of the dismiss behaviors are able to be triggered.
     * When this is `false`, no dismiss behaviors are able to be triggered.
     */
    dismissActive: boolean;
    /**
     * Called any time the user has requested the component be dismissed for the given reason.
     *
     * @remarks You can choose to ignore a reason if you want, but it's better to set `closeOn${reason}` to `false` instead.
     *
     * @nonstable
     */
    onDismiss: (e: EventType<any, any>, reason: Listeners) => void;
}
export type UseDismiss<SourceElement extends Element | null, PopupElement extends Element, Listeners extends DismissListenerTypes> = GenericHook<"dismiss", UseDismissParametersSelf<Listeners>, [
    StandardDepsPick<"params", UseEscapeDismiss<PopupElement, Listeners extends "escape" ? true : false>, "escapeDismissParameters", "omit", "getDocument">,
    StandardDepsOmit<"params", UseBackdropDismiss<PopupElement, Listeners extends "backdrop" ? true : false>, "refElementPopupReturn">,
    StandardDepsOmit<"params", UseLostFocusDismiss<SourceElement, PopupElement, Listeners extends "lost-focus" ? true : false>, "refElementPopupReturn" | "refElementSourceReturn">,
    StandardDepsPick<"params", UseActiveElement>
], never, [
    StandardDepsRename<StandardDepsPick<"return", UseRefElement<NonNullable<SourceElement>>>, "refElementReturn", "refElementSourceReturn">,
    StandardDepsRename<StandardDepsPick<"return", UseRefElement<NonNullable<PopupElement>>>, "refElementReturn", "refElementPopupReturn">,
    {
        propsStableSource: ElementProps<NonNullable<SourceElement>>;
        propsStablePopup: ElementProps<NonNullable<PopupElement>>;
    }
]>;
/**
 * Combines all the methods a user can implicitly dismiss a popup component. See {@link useModal} for a hook that's ready-to-use for dialogs and menus.
 *
 * @compositeParams
 */
export declare const useDismiss: <Listeners extends DismissListenerTypes, SourceElement extends Element | null, PopupElement extends Element>({ dismissParameters: { dismissActive, onDismiss, ...void3 }, backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop, ...void6 }, lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus, ...void7 }, escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth, ...void2 }, activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange: olaec1, onWindowFocusedChange, ...void5 }, ...void4 }: {
    dismissParameters: UseDismissParametersSelf<Listeners>;
} & StandardDepsPick<"params", UseEscapeDismiss<PopupElement, Listeners extends "escape" ? true : false>, "escapeDismissParameters", "omit", "getDocument"> & StandardDepsOmit<"params", UseBackdropDismiss<PopupElement, Listeners extends "backdrop" ? true : false>, "refElementPopupReturn"> & StandardDepsOmit<"params", UseLostFocusDismiss<SourceElement, PopupElement, Listeners extends "lost-focus" ? true : false>, "refElementPopupReturn" | "refElementSourceReturn"> & StandardDepsPick<"params", UseActiveElement>) => {} & StandardDepsRename<StandardDepsPick<"return", UseRefElement<NonNullable<SourceElement>>>, "refElementReturn", "refElementSourceReturn"> & StandardDepsRename<StandardDepsPick<"return", UseRefElement<NonNullable<PopupElement>>>, "refElementReturn", "refElementPopupReturn"> & {
    propsStableSource: ElementProps<NonNullable<SourceElement>>;
    propsStablePopup: ElementProps<NonNullable<PopupElement>>;
};
//# sourceMappingURL=use-dismiss.d.ts.map