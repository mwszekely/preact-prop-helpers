import { UseRefElement, useRefElement } from "../dom-helpers/use-ref-element.js";
import { UseActiveElement, useActiveElement } from "../observers/use-active-element.js";
import { useStableCallback, useStableMergedCallback } from "../preact-extensions/use-stable-callback.js";
import { assertEmptyObject } from "../util/assert.js";
import { ElementProps, EventType } from "../util/lib.js";
import { Parameter, StandardDepsOmit, StandardDepsPick, StandardDepsRename, StandardHook } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
import { UseBackdropDismiss, useBackdropDismiss } from "./dismissal/use-backdrop-dismiss.js";
import { UseEscapeDismiss, useEscapeDismiss } from "./dismissal/use-escape-dismiss.js";
import { UseLostFocusDismiss, useLostFocusDismiss } from "./dismissal/use-lost-focus-dismiss.js";

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
    dismissActive: boolean;

    /**
     * Called any time the user has requested the component be dismissed for the given reason.
     * 
     * @remarks You can choose to ignore a reason if you want, but it's better to set `closeOn${reason}` to `false` instead.
     * 
     * @nonstable
     */
    onDismiss: (e: EventType<any, any>, reason: Listeners) => void;

    /**
     * If `true`, then this component closes when a click is detected anywhere not within the component
     * (determined by being in a different branch of the DOM)
     */
    //closeOnBackdrop: Listeners extends "backdrop" ? true : false;

    /**
     * If `true`, then this component closes when the Escape key is pressed, and no deeper component
     * is listening for that same Escape press (i.e. only one Escape dismiss happens per key press)
     */
    //closeOnEscape: Listeners extends "escape" ? true : false;

    /**
     * If `true`, then this component closes whenever focus is sent to an element not contained by this one
     * (using the same rules as `closeOnBackdrop`)
     */
    //closeOnLostFocus: Listeners extends "lost-focus" ? true : false;
}

export type UseDismiss<SourceElement extends Element | null, PopupElement extends Element, Listeners extends DismissListenerTypes> = StandardHook<
    "dismiss", 
    UseDismissParametersSelf<Listeners>, [
        StandardDepsPick<"params", UseEscapeDismiss<PopupElement, Listeners extends "escape" ? true : false>, "escapeDismissParameters", "omit", "getDocument">,
        StandardDepsOmit<"params", UseBackdropDismiss<PopupElement, Listeners extends "backdrop" ? true : false>, "refElementPopupReturn">,
        StandardDepsOmit<"params", UseLostFocusDismiss<SourceElement, PopupElement, Listeners extends "lost-focus" ? true : false>, "refElementPopupReturn" | "refElementSourceReturn">,
        StandardDepsPick<"params", UseActiveElement>
    ],
    never, [
        StandardDepsRename<StandardDepsPick<"return", UseRefElement<NonNullable<SourceElement>>>, "refElementReturn", "refElementSourceReturn">,
        StandardDepsRename<StandardDepsPick<"return", UseRefElement<NonNullable<PopupElement>>>, "refElementReturn", "refElementPopupReturn">,
        { propsStableSource: ElementProps<NonNullable<SourceElement>>; propsStablePopup: ElementProps<NonNullable<PopupElement>> }
    ]
>;

/**
 * Combines all the methods a user can implicitly dismiss a popup component. See {@link useModal} for a hook that's ready-to-use for dialogs and menus.
 * 
 * @compositeParams
 */
export const useDismiss = monitored(function useDismiss<Listeners extends DismissListenerTypes, SourceElement extends Element | null, PopupElement extends Element>({
    dismissParameters: { dismissActive, onDismiss, ...void3 },
    backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop, ...void6 },
    lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus, ...void7 },
    escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth, ...void2 },
    activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange: olaec1, onWindowFocusedChange, ...void5 },
    ...void4
}: Parameter<UseDismiss<SourceElement, PopupElement, Listeners>>): ReturnType<UseDismiss<SourceElement, PopupElement, Listeners>> {
    const { refElementReturn: refElementSourceReturn, propsStable: propsStableSource } = useRefElement<NonNullable<SourceElement>>({ refElementParameters: {} });
    const { refElementReturn: refElementPopupReturn, propsStable: propsStablePopup } = useRefElement<PopupElement>({ refElementParameters: {} });

    const void8 = useBackdropDismiss<PopupElement, Listeners extends "backdrop" ? true : false>({
        refElementPopupReturn,
        backdropDismissParameters: {
            dismissBackdropActive: (dismissBackdropActive && dismissActive) as false,
            onDismissBackdrop: useStableCallback((e) => {
                onDismissBackdrop?.(e);
                onDismiss(e, "backdrop" as Listeners);

            }),
        },
    });
    const void9 = useEscapeDismiss<PopupElement, Listeners extends "escape" ? true : false>({
        refElementPopupReturn,
        escapeDismissParameters: {
            dismissEscapeActive: (dismissEscapeActive && dismissActive) as false,
            getDocument,
            onDismissEscape: useStableCallback((e) => {
                onDismissEscape?.(e);
                onDismiss(e, "escape" as Listeners);
            }),
            parentDepth,
        },
    });
    const {
        activeElementParameters: {
            onLastActiveElementChange: olaec2,
            ...void1
        }
    } = useLostFocusDismiss<SourceElement, PopupElement, Listeners extends "lost-focus" ? true : false>({
        lostFocusDismissParameters: {
            dismissLostFocusActive: (dismissLostFocusActive && dismissActive) as false,
            onDismissLostFocus: useStableCallback((e) => {
                onDismissLostFocus?.(e);
                onDismiss(e, "lost-focus" as Listeners);
            }),
        },
        refElementPopupReturn,
        refElementSourceReturn
    });


    const {
        activeElementReturn: {
            getActiveElement: _getActiveElement,
            getLastActiveElement: _getLastActiveElement,
            getWindowFocused: _getWindowFocused
        }
    } = useActiveElement({
        activeElementParameters: {
            onLastActiveElementChange: useStableMergedCallback(olaec2, olaec1),
            onActiveElementChange,
            onWindowFocusedChange,
            getDocument
        }
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    assertEmptyObject(void7);
    assertEmptyObject(void8);
    assertEmptyObject(void9);

    return {
        refElementSourceReturn,
        refElementPopupReturn,
        propsStableSource: propsStableSource,
        propsStablePopup: propsStablePopup
    }
})
