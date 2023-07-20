import { UseRefElementReturnType } from "../../dom-helpers/use-ref-element.js";
import { EnhancedEventHandler } from "../../util/event.js";
export interface UseBackdropDismissParametersSelf {
    /**
     * When `true`, `onDismiss` is eligible to be called. When `false`, it will not be called.
     */
    active: boolean;
    /**
     * Called when the component is dismissed by clicking outside of the element.
     */
    onDismiss: EnhancedEventHandler<MouseEvent, {
        reason: "backdrop";
    }>;
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
export declare function useBackdropDismiss<PopupElement extends Element>({ backdropDismissParameters: { active: open, onDismiss: onCloseUnstable, ...void1 }, refElementPopupReturn: { getElement, ...void3 }, ...void2 }: UseBackdropDismissParameters<PopupElement>): void;
//# sourceMappingURL=use-backdrop-dismiss.d.ts.map