import { UseRefElementReturnType } from "../../dom-helpers/use-ref-element.js";
import { MouseEventType, Nullable } from "../../util/lib.js";
import { PropNames } from "../../util/types.js";
declare module "../../util/types.js" {
    interface PropNames {
        BackdropDismissParameters: typeof PNames;
    }
}
declare module "../../util/types.js" {
    interface PropNames {
        BackdropDismissReturn: typeof RNames;
    }
}
export declare const PNames: {
    readonly dismissBackdropActive: "PropNames.BackdropDismissParameters.dismissBackdropActive";
    readonly onDismissBackdrop: "PropNames.BackdropDismissParameters.onDismissBackdrop";
};
export declare const RNames: {};
export interface UseBackdropDismissParametersSelf<B extends boolean> {
    /**
     * When `true`, `onDismiss` is eligible to be called. When `false`, it will not be called.
     */
    [PropNames.BackdropDismissParameters.dismissBackdropActive]: B | false;
    /**
     * Called when the component is dismissed by clicking outside of the element.
     *
     * @nonstable
     */
    [PropNames.BackdropDismissParameters.onDismissBackdrop]: Nullable<(e: MouseEventType<any>) => void>;
}
export interface UseBackdropDismissParameters<PopupElement extends Element, B extends boolean> extends UseBackdropDismissParametersSelf<B>, Pick<UseRefElementReturnType<PopupElement>, (typeof PropNames)["RefElementReturn"]["getElement"]> {
}
/**
 * Handles events for a backdrop on a modal dialog -- the kind where the user expects the modal to close when they click/tap outside of it.
 *
 * @compositeParams
 */
export declare const useBackdropDismiss: <PopupElement extends Element, B extends boolean>({ [PropNames.BackdropDismissParameters.dismissBackdropActive]: open, [PropNames.BackdropDismissParameters.onDismissBackdrop]: onCloseUnstable, [PropNames.RefElementReturn.getElement]: getElement, ..._void2 }: UseBackdropDismissParameters<PopupElement, B>) => void;
//# sourceMappingURL=use-backdrop-dismiss.d.ts.map