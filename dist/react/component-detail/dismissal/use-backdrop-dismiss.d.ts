import { UseRefElement } from "../../dom-helpers/use-ref-element.js";
import { MouseEventType } from "../../util/lib.js";
import { GenericHook, Nullable, Parameter, StandardDepsPick, StandardDepsRename } from "../../util/types.js";
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
export type UseBackdropDismiss<PopupElement extends Element, B extends boolean> = GenericHook<"backdropDismiss", UseBackdropDismissParametersSelf<B>, [
    StandardDepsRename<StandardDepsPick<"return", UseRefElement<PopupElement>, "refElementReturn", "pick", "getElement">, "refElementReturn", "refElementPopupReturn">
], never, []>;
/**
 * Handles events for a backdrop on a modal dialog -- the kind where the user expects the modal to close when they click/tap outside of it.
 *
 * @compositeParams
 */
export declare const useBackdropDismiss: <PopupElement extends Element, B extends boolean>({ backdropDismissParameters: { dismissBackdropActive: open, onDismissBackdrop: onCloseUnstable, ...void1 }, refElementPopupReturn: { getElement, ...void3 }, ...void2 }: {
    backdropDismissParameters: UseBackdropDismissParametersSelf<B>;
} & StandardDepsRename<StandardDepsPick<"return", UseRefElement<PopupElement>, "refElementReturn", "pick", "getElement">, "refElementReturn", "refElementPopupReturn">) => void;
//# sourceMappingURL=use-backdrop-dismiss.d.ts.map