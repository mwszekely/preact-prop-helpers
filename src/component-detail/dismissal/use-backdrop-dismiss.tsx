import { useGlobalHandler } from "../../dom-helpers/use-event-handler.js";
import { PropNames_RefElementReturn_getElement, UseRefElementReturnType } from "../../dom-helpers/use-ref-element.js";
import { useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { MouseEventType, Nullable, useCallback } from "../../util/lib.js";
import { monitored } from "../../util/use-call-count.js";

const P = `PropNames.BackdropDismissParameters`;
const R = `PropNames.BackdropDismissReturn`;

export const PropNames_BackdropDismissParameters_dismissBackdropActive = `${P}.dismissBackdropActive`;
export const PropNames_BackdropDismissParameters_onDismissBackdrop = `${P}.onDismissBackdrop`;


export interface UseBackdropDismissParametersSelf<B extends boolean> {

    /** 
     * When `true`, `onDismiss` is eligible to be called. When `false`, it will not be called.
     */
    [PropNames_BackdropDismissParameters_dismissBackdropActive]: B | false;

    /**
     * Called when the component is dismissed by clicking outside of the element.
     * 
     * @nonstable
     */
    [PropNames_BackdropDismissParameters_onDismissBackdrop]: Nullable<(e: MouseEventType<any>) => void>;
}

export interface UseBackdropDismissParameters<PopupElement extends Element, B extends boolean> extends UseBackdropDismissParametersSelf<B>, Pick<UseRefElementReturnType<PopupElement>, typeof PropNames_RefElementReturn_getElement> { }

/**
 * Handles events for a backdrop on a modal dialog -- the kind where the user expects the modal to close when they click/tap outside of it.
 * 
 * @compositeParams
 */
export const useBackdropDismiss = monitored(function useBackdropDismiss<PopupElement extends Element, B extends boolean>({
    [PropNames_BackdropDismissParameters_dismissBackdropActive]: open,
    [PropNames_BackdropDismissParameters_onDismissBackdrop]: onCloseUnstable,
    [PropNames_RefElementReturn_getElement]: getElement,
    ..._void2
}: UseBackdropDismissParameters<PopupElement, B>): void {
    assertEmptyObject(_void2);
    const getOpen = useStableGetter(open);
    const onClose = useStableGetter(onCloseUnstable);

    const onBackdropClick = useCallback(function onBackdropClick(e: MouseEventType<any>) {
        if (!getOpen())
            return;


        // Basically, "was this event fired on an element not contained by the modal?"
        // There are multiple ways browser react to "interacting with nothing", and this takes care of everything.

        let element = getElement();

        let foundInsideClick = false;

        if (e.target && element && element.contains(e.target as Node)) {
            foundInsideClick = true;
        }

        if (!foundInsideClick) {
            onClose()?.(e);
        }
    }, []);

    useGlobalHandler(window, "mousedown", open ? onBackdropClick : null, { capture: true });
    useGlobalHandler(window, "touchstart", open ? onBackdropClick : null, { capture: true });
})