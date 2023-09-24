import { PropNames_RefElementReturn_getElement } from "../dom-helpers/use-ref-element.js";
import { PropNames_ActiveElementParameters_getDocument, PropNames_ActiveElementParameters_onActiveElementChange, PropNames_ActiveElementParameters_onLastActiveElementChange, PropNames_ActiveElementParameters_onWindowFocusedChange, UseActiveElementParameters, UseActiveElementReturnType } from "../observers/use-active-element.js";
import { ElementProps, EventType, OmitStrong } from "../util/types.js";
import { PropNames_BackdropDismissParameters_dismissBackdropActive, PropNames_BackdropDismissParameters_onDismissBackdrop, UseBackdropDismissParameters } from "./dismissal/use-backdrop-dismiss.js";
import { PropNames_EscapeDismissParameters_dismissEscapeActive, PropNames_EscapeDismissParameters_getDocument, PropNames_EscapeDismissParameters_onDismissEscape, PropNames_EscapeDismissParameters_parentDepth, UseEscapeDismissParameters } from "./dismissal/use-escape-dismiss.js";
import { PropNames_LostFocusDismissParameters_dismissLostFocusActive, PropNames_LostFocusDismissParameters_getElementPopup, PropNames_LostFocusDismissParameters_getElementSource, PropNames_LostFocusDismissParameters_onDismissLostFocus, UseLostFocusDismissParameters, UseLostFocusDismissReturnType } from "./dismissal/use-lost-focus-dismiss.js";
export declare const PropNames_DismissParameters_dismissActive = "PropNames.DismissParameters.dismissActive";
export declare const PropNames_DismissParameters_onDismiss = "PropNames.DismissParameters.onDismiss";
export declare const PropNames_DismissReturn_getElementSource = "PropNames.DismissReturn.getElementSource";
export declare const PropNames_DismissReturn_getElementPopup = "PropNames.DismissReturn.getElementPopup";
export type DismissListenerTypes = "backdrop" | "lost-focus" | "escape";
export interface UseDismissParametersSelf<Listeners extends DismissListenerTypes> {
    /**
     * Controls all dismiss behaviors at once.
     *
     * @remarks When this is `true`, any of the dismiss behaviors are able to be triggered.
     * When this is `false`, no dismiss behaviors are able to be triggered.
     */
    [PropNames_DismissParameters_dismissActive]: boolean;
    /**
     * Called any time the user has requested the component be dismissed for the given reason.
     *
     * @remarks You can choose to ignore a reason if you want, but it's better to set `closeOn${reason}` to `false` instead.
     *
     * @nonstable
     */
    [PropNames_DismissParameters_onDismiss]: (e: EventType<any, any>, reason: Listeners) => void;
}
export interface UseDismissParameters<Listeners extends DismissListenerTypes> extends UseDismissParametersSelf<Listeners>, OmitStrong<UseEscapeDismissParameters<any, Listeners extends "escape" ? true : false>, typeof PropNames_EscapeDismissParameters_getDocument | typeof PropNames_RefElementReturn_getElement>, OmitStrong<UseBackdropDismissParameters<any, Listeners extends "backdrop" ? true : false>, typeof PropNames_RefElementReturn_getElement>, OmitStrong<UseLostFocusDismissParameters<any, any, Listeners extends "lost-focus" ? true : false>, typeof PropNames_LostFocusDismissParameters_getElementSource | typeof PropNames_LostFocusDismissParameters_getElementPopup>, UseActiveElementParameters {
}
export interface UseDismissReturnTypeSelf<SourceElement extends Element | null, PopupElement extends Element> {
    [PropNames_DismissReturn_getElementSource](): SourceElement | null;
    [PropNames_DismissReturn_getElementPopup](): PopupElement | null;
}
export interface UseDismissReturnType<SourceElement extends Element | null, PopupElement extends Element> extends UseDismissReturnTypeSelf<SourceElement, PopupElement>, UseActiveElementReturnType, OmitStrong<UseLostFocusDismissReturnType<SourceElement, PopupElement>, typeof PropNames_ActiveElementParameters_onLastActiveElementChange> {
    /**
     * If this dismissible component has a specific element that caused it to appear (a button, for example),
     * provide it with these props.
     *
     * * REQUIRED for things like menus that pop up from a button and for whom losing focus counts as requesting closure.
     * * OPTIONAL for things like dialogs that can appear out of nowhere and for whom losing focus is actively impossible (due to focus traps).
     */
    /**
     * This one's always required though
     */
    propsStableSource: ElementProps<NonNullable<SourceElement>>;
    propsStablePopup: ElementProps<NonNullable<PopupElement>>;
}
/**
 * Combines all the methods a user can implicitly dismiss a popup component. See {@link useModal} for a hook that's ready-to-use for dialogs and menus.
 *
 * @compositeParams
 */
export declare const useDismiss: <Listeners extends DismissListenerTypes, SourceElement extends Element | null, PopupElement extends Element>({ [PropNames_DismissParameters_dismissActive]: dismissActive, [PropNames_DismissParameters_onDismiss]: onDismiss, [PropNames_BackdropDismissParameters_dismissBackdropActive]: dismissBackdropActive, [PropNames_BackdropDismissParameters_onDismissBackdrop]: onDismissBackdrop, [PropNames_EscapeDismissParameters_dismissEscapeActive]: dismissEscapeActive, [PropNames_EscapeDismissParameters_onDismissEscape]: onDismissEscape, [PropNames_EscapeDismissParameters_parentDepth]: parentDepth, [PropNames_LostFocusDismissParameters_dismissLostFocusActive]: dismissLostFocusActive, [PropNames_LostFocusDismissParameters_onDismissLostFocus]: onDismissLostFocus, [PropNames_ActiveElementParameters_getDocument]: getDocument, [PropNames_ActiveElementParameters_onActiveElementChange]: onActiveElementChange, [PropNames_ActiveElementParameters_onLastActiveElementChange]: onLastActiveElementChange1, [PropNames_ActiveElementParameters_onWindowFocusedChange]: onWindowFocusedChange, ...void4 }: UseDismissParameters<Listeners>) => UseDismissReturnType<SourceElement, PopupElement>;
//# sourceMappingURL=use-dismiss.d.ts.map