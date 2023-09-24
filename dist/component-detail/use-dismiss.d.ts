import { UseActiveElementParameters, UseActiveElementReturnType } from "../observers/use-active-element.js";
import { ElementProps, EventType, OmitStrong, PropNames } from "../util/types.js";
import { UseBackdropDismissParameters } from "./dismissal/use-backdrop-dismiss.js";
import { UseEscapeDismissParameters } from "./dismissal/use-escape-dismiss.js";
import { UseLostFocusDismissParameters, UseLostFocusDismissReturnType } from "./dismissal/use-lost-focus-dismiss.js";
declare module "../util/types.js" {
    interface PropNames {
        DismissParameters: typeof PNames;
    }
}
declare module "../util/types.js" {
    interface PropNames {
        DismissReturn: typeof RNames;
    }
}
export declare const PNames: {
    readonly dismissActive: "PropNames.DismissParameters.dismissActive";
    readonly onDismiss: "PropNames.DismissParameters.onDismiss";
};
export declare const RNames: {
    readonly getElementSource: "PropNames.DismissReturn.getElementSource";
    readonly getElementPopup: "PropNames.DismissReturn.getElementPopup";
};
export type DismissListenerTypes = "backdrop" | "lost-focus" | "escape";
export interface UseDismissParametersSelf<Listeners extends DismissListenerTypes> {
    /**
     * Controls all dismiss behaviors at once.
     *
     * @remarks When this is `true`, any of the dismiss behaviors are able to be triggered.
     * When this is `false`, no dismiss behaviors are able to be triggered.
     */
    [PropNames.DismissParameters.dismissActive]: boolean;
    /**
     * Called any time the user has requested the component be dismissed for the given reason.
     *
     * @remarks You can choose to ignore a reason if you want, but it's better to set `closeOn${reason}` to `false` instead.
     *
     * @nonstable
     */
    [PropNames.DismissParameters.onDismiss]: (e: EventType<any, any>, reason: Listeners) => void;
}
export interface UseDismissParameters<Listeners extends DismissListenerTypes> extends UseDismissParametersSelf<Listeners>, OmitStrong<UseEscapeDismissParameters<any, Listeners extends "escape" ? true : false>, (typeof PropNames)["EscapeDismissParameters"]["getDocument"] | (typeof PropNames)["RefElementReturn"]["getElement"]>, OmitStrong<UseBackdropDismissParameters<any, Listeners extends "backdrop" ? true : false>, (typeof PropNames)["RefElementReturn"]["getElement"]>, OmitStrong<UseLostFocusDismissParameters<any, any, Listeners extends "lost-focus" ? true : false>, (typeof PropNames)["LostFocusDismissParameters"]["getElementSource"] | (typeof PropNames)["LostFocusDismissParameters"]["getElementPopup"]>, UseActiveElementParameters {
}
export interface UseDismissReturnTypeSelf<SourceElement extends Element | null, PopupElement extends Element> {
    [PropNames.DismissReturn.getElementSource](): SourceElement | null;
    [PropNames.DismissReturn.getElementPopup](): PopupElement | null;
}
export interface UseDismissReturnType<SourceElement extends Element | null, PopupElement extends Element> extends UseDismissReturnTypeSelf<SourceElement, PopupElement>, UseActiveElementReturnType, OmitStrong<UseLostFocusDismissReturnType<SourceElement, PopupElement>, (typeof PropNames)["ActiveElementParameters"]["onLastActiveElementChange"]> {
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
export declare const useDismiss: <Listeners extends DismissListenerTypes, SourceElement extends Element | null, PopupElement extends Element>({ [PropNames.DismissParameters.dismissActive]: dismissActive, [PropNames.DismissParameters.onDismiss]: onDismiss, [PropNames.BackdropDismissParameters.dismissBackdropActive]: dismissBackdropActive, [PropNames.BackdropDismissParameters.onDismissBackdrop]: onDismissBackdrop, [PropNames.EscapeDismissParameters.dismissEscapeActive]: dismissEscapeActive, [PropNames.EscapeDismissParameters.onDismissEscape]: onDismissEscape, [PropNames.EscapeDismissParameters.parentDepth]: parentDepth, [PropNames.LostFocusDismissParameters.dismissLostFocusActive]: dismissLostFocusActive, [PropNames.LostFocusDismissParameters.onDismissLostFocus]: onDismissLostFocus, [PropNames.ActiveElementParameters.getDocument]: getDocument, [PropNames.ActiveElementParameters.onActiveElementChange]: onActiveElementChange, [PropNames.ActiveElementParameters.onLastActiveElementChange]: onLastActiveElementChange1, [PropNames.ActiveElementParameters.onWindowFocusedChange]: onWindowFocusedChange, ...void4 }: UseDismissParameters<Listeners>) => UseDismissReturnType<SourceElement, PopupElement>;
//# sourceMappingURL=use-dismiss.d.ts.map