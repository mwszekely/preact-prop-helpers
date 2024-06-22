import { useGlobalHandler } from "../../dom-helpers/use-event-handler.js";
import { $getElement, UseRefElementReturnType, $refElementReturn } from "../../dom-helpers/use-ref-element.js";
import { useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { getWindow } from "../../util/get-window.js";
import { MouseEventType, Nullable, useCallback } from "../../util/lib.js";
import { monitored } from "../../util/use-call-count.js";

export const $dismissBackdropActive = Symbol();
export const $onDismissBackdrop = Symbol();
export const $backdropDismissParameters = Symbol();
export const $refElementPopupReturn = Symbol();

export interface UseBackdropDismissParametersSelf<B extends boolean> {

    /** 
     * When `true`, `onDismiss` is eligible to be called. When `false`, it will not be called.
     */
    [$dismissBackdropActive]: B | false;

    /**
     * Called when the component is dismissed by clicking outside of the element.
     * 
     * @nonstable
     */
    [$onDismissBackdrop]: Nullable<(e: MouseEventType<any>) => void>;
}

export interface UseBackdropDismissParameters<PopupElement extends Element, B extends boolean> {
    [$backdropDismissParameters]: UseBackdropDismissParametersSelf<B>;
    [$refElementPopupReturn]: Pick<UseRefElementReturnType<PopupElement>[typeof $refElementReturn], typeof $getElement>;
}

/**
 * Handles events for a backdrop on a modal dialog -- the kind where the user expects the modal to close when they click/tap outside of it.
 * 
 * @compositeParams
 */
export const useBackdropDismiss = monitored(function useBackdropDismiss<PopupElement extends Element, B extends boolean>({ [$backdropDismissParameters]: { [$dismissBackdropActive]: open, [$onDismissBackdrop]: onCloseUnstable, ...void1 }, [$refElementPopupReturn]: { [$getElement]: getElement, ...void3 }, ...void2 }: UseBackdropDismissParameters<PopupElement, B>): void {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
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

    useGlobalHandler(getWindow(), "mousedown", open ? onBackdropClick : null, { capture: true });
    useGlobalHandler(getWindow(), "touchstart", open ? onBackdropClick : null, { capture: true });
})