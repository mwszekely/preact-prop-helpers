import { UseRefElementReturnType } from "../../dom-helpers/use-ref-element.js";
import { MouseEventType, Nullable } from "../../util/lib.js";
export interface UseBackdropDismissParametersSelf<B extends boolean> {
    /**
     * When `true`, `onDismiss` is eligible to be called. When `false`, it will not be called.
     */
    dismissBackdropActive: B | false;
    /**
     * Called when the component is dismissed by clicking outside of the element.
     *
     * @nonstable
     */
    onDismissBackdrop: Nullable<(e: MouseEventType<any>) => void>;
}
export interface UseBackdropDismissParameters<PopupElement extends Element, B extends boolean> {
    backdropDismissParameters: UseBackdropDismissParametersSelf<B>;
    refElementPopupReturn: Pick<UseRefElementReturnType<PopupElement>["refElementReturn"], "getElement">;
}
/**
 * Handles events for a backdrop on a modal dialog -- the kind where the user expects the modal to close when they click/tap outside of it.
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useBackdropDismiss<PopupElement extends Element, B extends boolean>({ backdropDismissParameters: { dismissBackdropActive: open, onDismissBackdrop: onCloseUnstable, ...void1 }, refElementPopupReturn: { getElement, ...void3 }, ...void2 }: UseBackdropDismissParameters<PopupElement, B>): void;
//# sourceMappingURL=use-backdrop-dismiss.d.ts.map