import { PropNames_RefElementReturn_getElement, useRefElement } from "../dom-helpers/use-ref-element.js";
import { PropNames_ActiveElementParameters_getDocument, PropNames_ActiveElementParameters_onActiveElementChange, PropNames_ActiveElementParameters_onLastActiveElementChange, PropNames_ActiveElementParameters_onWindowFocusedChange, UseActiveElementParameters, UseActiveElementReturnType, useActiveElement } from "../observers/use-active-element.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { assertEmptyObject } from "../util/assert.js";
import { ElementProps, EventType, OmitStrong } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
import { PropNames_BackdropDismissParameters_dismissBackdropActive, PropNames_BackdropDismissParameters_onDismissBackdrop, UseBackdropDismissParameters, useBackdropDismiss } from "./dismissal/use-backdrop-dismiss.js";
import { PropNames_EscapeDismissParameters_dismissEscapeActive, PropNames_EscapeDismissParameters_getDocument, PropNames_EscapeDismissParameters_onDismissEscape, PropNames_EscapeDismissParameters_parentDepth, UseEscapeDismissParameters, useEscapeDismiss } from "./dismissal/use-escape-dismiss.js";
import { PropNames_LostFocusDismissParameters_dismissLostFocusActive, PropNames_LostFocusDismissParameters_getElementPopup, PropNames_LostFocusDismissParameters_getElementSource, PropNames_LostFocusDismissParameters_onDismissLostFocus, UseLostFocusDismissParameters, UseLostFocusDismissReturnType, useLostFocusDismiss } from "./dismissal/use-lost-focus-dismiss.js";

const P = `PropNames.DismissParameters`;
const R = `PropNames.DismissReturn`;

export const PropNames_DismissParameters_dismissActive = `${P}.dismissActive`;
export const PropNames_DismissParameters_onDismiss = `${P}.onDismiss`;
export const PropNames_DismissReturn_getElementSource = `${R}.getElementSource`;
export const PropNames_DismissReturn_getElementPopup = `${R}.getElementPopup`;


/**
 * In general, each soft dismiss hook takes an `open` and an `onClose` prop.
 * 
 * `open` in all cases refers to both whether or not the controlled surface is currently being shown,
 * but also whether that particular method of soft dismiss is enabled or not.
 * 
 * E.G. If `escape` key dismissing is disabled, just have `open` false at all times for `escapeDismissParameters`.
 */
const _dummy = 0;


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

export interface UseDismissParameters<Listeners extends DismissListenerTypes> extends
    UseDismissParametersSelf<Listeners>,
    OmitStrong<UseEscapeDismissParameters<any, Listeners extends "escape" ? true : false>, typeof PropNames_EscapeDismissParameters_getDocument | typeof PropNames_RefElementReturn_getElement>,
    OmitStrong<UseBackdropDismissParameters<any, Listeners extends "backdrop" ? true : false>, typeof PropNames_RefElementReturn_getElement>,
    OmitStrong<UseLostFocusDismissParameters<any, any, Listeners extends "lost-focus" ? true : false>, typeof PropNames_LostFocusDismissParameters_getElementSource | typeof PropNames_LostFocusDismissParameters_getElementPopup>,
    UseActiveElementParameters {
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
    //refElementSourceReturn: UseRefElementReturnType<NonNullable<SourceElement>>["refElementReturn"];

    /**
     * This one's always required though
     */
    //refElementPopupReturn: UseRefElementReturnType<PopupElement>["refElementReturn"];

    propsStableSource: ElementProps<NonNullable<SourceElement>>;
    propsStablePopup: ElementProps<NonNullable<PopupElement>>;

}

/**
 * Combines all the methods a user can implicitly dismiss a popup component. See {@link useModal} for a hook that's ready-to-use for dialogs and menus.
 * 
 * @compositeParams
 */
export const useDismiss = monitored(function useDismiss<Listeners extends DismissListenerTypes, SourceElement extends Element | null, PopupElement extends Element>({ [PropNames_DismissParameters_dismissActive]: dismissActive,
    [PropNames_DismissParameters_onDismiss]: onDismiss,
    [PropNames_BackdropDismissParameters_dismissBackdropActive]: dismissBackdropActive,
    [PropNames_BackdropDismissParameters_onDismissBackdrop]: onDismissBackdrop,
    [PropNames_EscapeDismissParameters_dismissEscapeActive]: dismissEscapeActive,
    [PropNames_EscapeDismissParameters_onDismissEscape]: onDismissEscape,
    [PropNames_EscapeDismissParameters_parentDepth]: parentDepth,
    [PropNames_LostFocusDismissParameters_dismissLostFocusActive]: dismissLostFocusActive,
    [PropNames_LostFocusDismissParameters_onDismissLostFocus]: onDismissLostFocus,
    [PropNames_ActiveElementParameters_getDocument]: getDocument,
    [PropNames_ActiveElementParameters_onActiveElementChange]: onActiveElementChange,
    [PropNames_ActiveElementParameters_onLastActiveElementChange]: onLastActiveElementChange1,
    [PropNames_ActiveElementParameters_onWindowFocusedChange]: onWindowFocusedChange,
    ...void4
}: UseDismissParameters<Listeners>): UseDismissReturnType<SourceElement, PopupElement> {

    const { props: propsStableSource, [PropNames_RefElementReturn_getElement]: getElementSource } = useRefElement<NonNullable<SourceElement>>({});
    const { props: propsStablePopup, [PropNames_RefElementReturn_getElement]: getElementPopup } = useRefElement<PopupElement>({});

    const void8 = useBackdropDismiss<PopupElement, Listeners extends "backdrop" ? true : false>({
        [PropNames_BackdropDismissParameters_dismissBackdropActive]: (dismissBackdropActive && dismissActive) as false,
        [PropNames_BackdropDismissParameters_onDismissBackdrop]: useStableCallback((e) => {
            onDismissBackdrop?.(e);
            onDismiss(e, "backdrop" as Listeners);
        }),
        [PropNames_RefElementReturn_getElement]: getElementPopup,
    });
    const void9 = useEscapeDismiss<PopupElement, Listeners extends "escape" ? true : false>({
        [PropNames_RefElementReturn_getElement]: getElementPopup,
        [PropNames_EscapeDismissParameters_dismissEscapeActive]: (dismissEscapeActive && dismissActive) as false,
        [PropNames_EscapeDismissParameters_getDocument]: getDocument,
        [PropNames_EscapeDismissParameters_parentDepth]: parentDepth,
        [PropNames_EscapeDismissParameters_onDismissEscape]: useStableCallback((e) => {
            onDismissEscape?.(e);
            onDismiss(e, "escape" as Listeners);
        }),
    });
    const {
        [PropNames_ActiveElementParameters_onLastActiveElementChange]: onLastActiveElementChange2,
        ...void1
    } = useLostFocusDismiss<SourceElement, PopupElement, Listeners extends "lost-focus" ? true : false>({
        [PropNames_LostFocusDismissParameters_dismissLostFocusActive]: (dismissLostFocusActive && dismissActive) as false,
        [PropNames_LostFocusDismissParameters_onDismissLostFocus]: useStableCallback((e) => {
            onDismissLostFocus?.(e);
            onDismiss(e, "lost-focus" as Listeners);
        }),
        [PropNames_LostFocusDismissParameters_getElementPopup]: getElementPopup,
        [PropNames_LostFocusDismissParameters_getElementSource]: getElementSource
    });


    const activeElementReturn = useActiveElement({
        [PropNames_ActiveElementParameters_onLastActiveElementChange]: useStableCallback((a, b, r) => {
            onLastActiveElementChange2?.(a, b, r);
            onLastActiveElementChange1?.(a, b, r);
        }),
        [PropNames_ActiveElementParameters_onActiveElementChange]: onActiveElementChange,
        [PropNames_ActiveElementParameters_onWindowFocusedChange]: onWindowFocusedChange,
        [PropNames_ActiveElementParameters_getDocument]: getDocument
    });

    assertEmptyObject(void1);
    assertEmptyObject(void4);
    assertEmptyObject(void8);
    assertEmptyObject(void9);

    return {
        ...activeElementReturn,
        [PropNames_DismissReturn_getElementSource]: getElementSource, 
        [PropNames_DismissReturn_getElementPopup]: getElementPopup,
        propsStableSource: propsStableSource,
        propsStablePopup: propsStablePopup,

    }
})
