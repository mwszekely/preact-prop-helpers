import { useGlobalHandler } from "../../dom-helpers/use-event-handler.js";
import { UseRefElementReturnType } from "../../dom-helpers/use-ref-element.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { EnhancedEventHandler, enhanceEvent } from "../../util/event.js";
import { useCallback } from "../../util/lib.js";
import { MouseEventType } from "../../util/types.js";
import { monitorCallCount } from "../../util/use-call-count.js";

export interface UseBackdropDismissParametersSelf {
    
    /** 
     * When `true`, `onDismiss` is eligible to be called. When `false`, it will not be called.
     */
    active: boolean;
    
    /**
     * Called when the component is dismissed by clicking outside of the element.
     * 
     * @nonstable
     */
    onDismiss: EnhancedEventHandler<MouseEvent, { reason: "backdrop" }>;
}

export interface UseBackdropDismissParameters<PopupElement extends Element> {
    backdropDismissParameters: UseBackdropDismissParametersSelf;
    refElementPopupReturn: Pick<UseRefElementReturnType<PopupElement>["refElementReturn"], "getElement">;
}

/**
 * Handles events for a backdrop on a modal dialog -- the kind where the user expects the modal to close when they click/tap outside of it.
 * 
 * @compositeParams
 */
export function useBackdropDismiss<PopupElement extends Element>({ backdropDismissParameters: { active: open, onDismiss: onCloseUnstable, ...void1 }, refElementPopupReturn: { getElement, ...void3 }, ...void2 }: UseBackdropDismissParameters<PopupElement>): void {
    monitorCallCount(useBackdropDismiss);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    const getOpen = useStableGetter(open);
    const onClose = useStableCallback(onCloseUnstable);

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
            onClose(enhanceEvent(e, { reason: "backdrop" }));
        }
    }, []);

    useGlobalHandler(window, "mousedown", open ? onBackdropClick : null, { capture: true });
    useGlobalHandler(window, "touchstart", open ? onBackdropClick : null, { capture: true });
}