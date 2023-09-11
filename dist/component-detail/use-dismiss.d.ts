import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { UseActiveElementParameters } from "../observers/use-active-element.js";
import { ElementProps, EventType, TargetedOmit } from "../util/types.js";
import { UseBackdropDismissParameters } from "./dismissal/use-backdrop-dismiss.js";
import { UseEscapeDismissParameters } from "./dismissal/use-escape-dismiss.js";
import { UseLostFocusDismissParameters } from "./dismissal/use-lost-focus-dismiss.js";
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
export interface UseDismissParameters<Listeners extends DismissListenerTypes> extends TargetedOmit<UseEscapeDismissParameters<any, Listeners extends "escape" ? true : false>, "escapeDismissParameters", "getDocument">, TargetedOmit<UseBackdropDismissParameters<any, Listeners extends "backdrop" ? true : false>, "backdropDismissParameters", never>, TargetedOmit<UseLostFocusDismissParameters<any, any, Listeners extends "lost-focus" ? true : false>, "lostFocusDismissParameters", never>, UseActiveElementParameters {
    dismissParameters: UseDismissParametersSelf<Listeners>;
}
export interface UseDismissReturnType<SourceElement extends Element | null, PopupElement extends Element> {
    /**
     * If this dismissible component has a specific element that caused it to appear (a button, for example),
     * provide it with these props.
     *
     * * REQUIRED for things like menus that pop up from a button and for whom losing focus counts as requesting closure.
     * * OPTIONAL for things like dialogs that can appear out of nowhere and for whom losing focus is actively impossible (due to focus traps).
     */
    refElementSourceReturn: UseRefElementReturnType<NonNullable<SourceElement>>["refElementReturn"];
    /**
     * This one's always required though
     */
    refElementPopupReturn: UseRefElementReturnType<PopupElement>["refElementReturn"];
    propsStableSource: ElementProps<NonNullable<SourceElement>>;
    propsStablePopup: ElementProps<NonNullable<PopupElement>>;
}
/**
 * Combines all the methods a user can implicitly dismiss a popup component. See {@link useModal} for a hook that's ready-to-use for dialogs and menus.
 *
 * @compositeParams
 */
export declare const useDismiss: <Listeners extends DismissListenerTypes, SourceElement extends Element | null, PopupElement extends Element>({ dismissParameters: { dismissActive, onDismiss, ...void3 }, backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop, ...void6 }, lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus, ...void7 }, escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth, ...void2 }, activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange: olaec1, onWindowFocusedChange, ...void5 }, ...void4 }: UseDismissParameters<Listeners>) => UseDismissReturnType<SourceElement, PopupElement>;
//# sourceMappingURL=use-dismiss.d.ts.map