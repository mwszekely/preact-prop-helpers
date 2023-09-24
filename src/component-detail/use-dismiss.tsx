import { useRefElement } from "../dom-helpers/use-ref-element.js";
import { UseActiveElementParameters, UseActiveElementReturnType, useActiveElement } from "../observers/use-active-element.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { assertEmptyObject } from "../util/assert.js";
import { ElementProps, EventType, OmitStrong, PropNames } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
import { UseBackdropDismissParameters, useBackdropDismiss } from "./dismissal/use-backdrop-dismiss.js";
import { UseEscapeDismissParameters, useEscapeDismiss } from "./dismissal/use-escape-dismiss.js";
import { UseLostFocusDismissParameters, UseLostFocusDismissReturnType, useLostFocusDismiss } from "./dismissal/use-lost-focus-dismiss.js";


declare module "../util/types.js" { interface PropNames { DismissParameters: typeof PNames } }
declare module "../util/types.js" { interface PropNames { DismissReturn: typeof RNames } }

const P = `PropNames.DismissParameters`;
const R = `PropNames.DismissReturn`;

export const PNames = {
    dismissActive: `${P}.dismissActive`,
    onDismiss: `${P}.onDismiss`
} as const;

export const RNames = {
    getElementSource: `${R}.getElementSource`,
    getElementPopup: `${R}.getElementPopup`,
} as const;

PropNames.DismissParameters ??=  PNames;
PropNames.DismissReturn ??=  RNames;

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

export interface UseDismissParameters<Listeners extends DismissListenerTypes> extends
    UseDismissParametersSelf<Listeners>,
    OmitStrong<UseEscapeDismissParameters<any, Listeners extends "escape" ? true : false>, (typeof PropNames)["EscapeDismissParameters"]["getDocument"] | (typeof PropNames)["RefElementReturn"]["getElement"]>,
    OmitStrong<UseBackdropDismissParameters<any, Listeners extends "backdrop" ? true : false>, (typeof PropNames)["RefElementReturn"]["getElement"]>,
    OmitStrong<UseLostFocusDismissParameters<any, any, Listeners extends "lost-focus" ? true : false>, (typeof PropNames)["LostFocusDismissParameters"]["getElementSource"] | (typeof PropNames)["LostFocusDismissParameters"]["getElementPopup"]>,
    UseActiveElementParameters {
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
export const useDismiss = monitored(function useDismiss<Listeners extends DismissListenerTypes, SourceElement extends Element | null, PopupElement extends Element>({ [PropNames.DismissParameters.dismissActive]: dismissActive,
    [PropNames.DismissParameters.onDismiss]: onDismiss,
    [PropNames.BackdropDismissParameters.dismissBackdropActive]: dismissBackdropActive,
    [PropNames.BackdropDismissParameters.onDismissBackdrop]: onDismissBackdrop,
    [PropNames.EscapeDismissParameters.dismissEscapeActive]: dismissEscapeActive,
    [PropNames.EscapeDismissParameters.onDismissEscape]: onDismissEscape,
    [PropNames.EscapeDismissParameters.parentDepth]: parentDepth,
    [PropNames.LostFocusDismissParameters.dismissLostFocusActive]: dismissLostFocusActive,
    [PropNames.LostFocusDismissParameters.onDismissLostFocus]: onDismissLostFocus,
    [PropNames.ActiveElementParameters.getDocument]: getDocument,
    [PropNames.ActiveElementParameters.onActiveElementChange]: onActiveElementChange,
    [PropNames.ActiveElementParameters.onLastActiveElementChange]: onLastActiveElementChange1,
    [PropNames.ActiveElementParameters.onWindowFocusedChange]: onWindowFocusedChange,
    ...void4
}: UseDismissParameters<Listeners>): UseDismissReturnType<SourceElement, PopupElement> {

    const { props: propsStableSource, [PropNames.RefElementReturn.getElement]: getElementSource } = useRefElement<NonNullable<SourceElement>>({});
    const { props: propsStablePopup, [PropNames.RefElementReturn.getElement]: getElementPopup } = useRefElement<PopupElement>({});

    const void8 = useBackdropDismiss<PopupElement, Listeners extends "backdrop" ? true : false>({
        [PropNames.BackdropDismissParameters.dismissBackdropActive]: (dismissBackdropActive && dismissActive) as false,
        [PropNames.BackdropDismissParameters.onDismissBackdrop]: useStableCallback((e) => {
            onDismissBackdrop?.(e);
            onDismiss(e, "backdrop" as Listeners);
        }),
        [PropNames.RefElementReturn.getElement]: getElementPopup,
    });
    const void9 = useEscapeDismiss<PopupElement, Listeners extends "escape" ? true : false>({
        [PropNames.RefElementReturn.getElement]: getElementPopup,
        [PropNames.EscapeDismissParameters.dismissEscapeActive]: (dismissEscapeActive && dismissActive) as false,
        [PropNames.EscapeDismissParameters.getDocument]: getDocument,
        [PropNames.EscapeDismissParameters.parentDepth]: parentDepth,
        [PropNames.EscapeDismissParameters.onDismissEscape]: useStableCallback((e) => {
            onDismissEscape?.(e);
            onDismiss(e, "escape" as Listeners);
        }),
    });
    const {
        [PropNames.ActiveElementParameters.onLastActiveElementChange]: onLastActiveElementChange2,
        ...void1
    } = useLostFocusDismiss<SourceElement, PopupElement, Listeners extends "lost-focus" ? true : false>({
        [PropNames.LostFocusDismissParameters.dismissLostFocusActive]: (dismissLostFocusActive && dismissActive) as false,
        [PropNames.LostFocusDismissParameters.onDismissLostFocus]: useStableCallback((e) => {
            onDismissLostFocus?.(e);
            onDismiss(e, "lost-focus" as Listeners);
        }),
        [PropNames.LostFocusDismissParameters.getElementPopup]: getElementPopup,
        [PropNames.LostFocusDismissParameters.getElementSource]: getElementSource
    });


    const activeElementReturn = useActiveElement({
        [PropNames.ActiveElementParameters.onLastActiveElementChange]: useStableCallback((a, b, r) => {
            onLastActiveElementChange2?.(a, b, r);
            onLastActiveElementChange1?.(a, b, r);
        }),
        [PropNames.ActiveElementParameters.onActiveElementChange]: onActiveElementChange,
        [PropNames.ActiveElementParameters.onWindowFocusedChange]: onWindowFocusedChange,
        [PropNames.ActiveElementParameters.getDocument]: getDocument
    });

    assertEmptyObject(void1);
    assertEmptyObject(void4);
    assertEmptyObject(void8);
    assertEmptyObject(void9);

    return {
        ...activeElementReturn,
        [PropNames.DismissReturn.getElementSource]: getElementSource, 
        [PropNames.DismissReturn.getElementPopup]: getElementPopup,
        propsStableSource: propsStableSource,
        propsStablePopup: propsStablePopup,

    }
})
