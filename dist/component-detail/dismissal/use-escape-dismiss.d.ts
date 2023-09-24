import { UseRefElementReturnType } from "../../dom-helpers/use-ref-element.js";
import { KeyboardEventType, Nullable } from "../../util/lib.js";
import { PropNames } from "../../util/types.js";
declare module "../../util/types.js" {
    interface PropNames {
        EscapeDismissParameters: typeof PNames;
    }
}
declare module "../../util/types.js" {
    interface PropNames {
        EscapeDismissReturn: typeof RNames;
    }
}
export declare const PNames: {
    readonly dismissEscapeActive: "PropNames.EscapeDismissParameters.dismissEscapeActive";
    readonly onDismissEscape: "PropNames.EscapeDismissParameters.onDismissEscape";
    readonly getDocument: "PropNames.EscapeDismissParameters.getDocument";
    readonly parentDepth: "PropNames.EscapeDismissParameters.parentDepth";
};
export declare const RNames: {};
export interface UseEscapeDismissParametersSelf<B extends boolean> {
    /**
     * Called when the component is dismissed by pressing the `Escape` key.
     *
     * @nonstable
     */
    [PropNames.EscapeDismissParameters.onDismissEscape]: Nullable<(e: KeyboardEventType<any>) => void>;
    /**
     * When `true`, `onDismiss` is eligible to be called. When `false`, it will not be called.
     */
    [PropNames.EscapeDismissParameters.dismissEscapeActive]: B | false;
    /**
     * The escape key event handler is attached onto the window, so we need to know which window.
     *
     * @remarks The returned `Document` should not change throughout the lifetime of the component (i.e. the element in question must not switch to another window via some means, which might not even be possible).
     *
     * @nonstable
     */
    [PropNames.EscapeDismissParameters.getDocument](): Document;
    /**
     * Get this from context somewhere, and increment it in that context.
     *
     * If multiple instances of Preact are on the page, tree depth is used as a tiebreaker
     */
    [PropNames.EscapeDismissParameters.parentDepth]: number;
}
export interface UseEscapeDismissParameters<PopupElement extends Element, B extends boolean> extends UseEscapeDismissParametersSelf<B>, Pick<UseRefElementReturnType<PopupElement>, (typeof PropNames)["RefElementReturn"]["getElement"]> {
}
/**
 * Invokes a callback when the `Escape` key is pressed on the topmost component (a max of one invocation per `Escape` press)
 *
 * @remarks One press of the `Escape` key is guaranteed to only call `onDismiss` for *only one* component, and it is called on the component deepest in the DOM tree.
 *
 * TODO: Instead of being deepest in the DOM tree (which is usually fine), it should probably be related to what order something was made `active`.
 *
 * @compositeParams
 */
export declare const useEscapeDismiss: <PopupElement extends Element, B extends boolean>({ [PropNames.EscapeDismissParameters.onDismissEscape]: onClose, [PropNames.EscapeDismissParameters.dismissEscapeActive]: open, [PropNames.EscapeDismissParameters.getDocument]: unstableGetDocument, [PropNames.EscapeDismissParameters.parentDepth]: parentDepth, [PropNames.RefElementReturn.getElement]: getElement, ..._void1 }: UseEscapeDismissParameters<PopupElement, B>) => void;
//# sourceMappingURL=use-escape-dismiss.d.ts.map