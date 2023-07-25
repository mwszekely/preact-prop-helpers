import { UseRefElementReturnType } from "../../dom-helpers/use-ref-element.js";
import { EnhancedEventHandler } from "../../util/event.js";
export interface UseEscapeDismissParametersSelf {
    /**
     * Called when the component is dismissed by pressing the `Escape` key.
     *
     * @nonstable
     */
    onDismiss: EnhancedEventHandler<KeyboardEvent, {
        reason: "escape";
    }>;
    /**
     * When `true`, `onDismiss` is eligible to be called. When `false`, it will not be called.
     */
    active: boolean;
    /**
     * The escape key event handler is attached onto the window, so we need to know which window.
     *
     * @remarks The returned `Document` should not change throughout the lifetime of the component (i.e. the element in question must not switch to another window via some means, which might not even be possible).
     *
     * @nonstable
     */
    getDocument(): Document;
    /**
     * Get this from context somewhere, and increment it in that context.
     *
     * If multiple instances of Preact are on the page, tree depth is used as a tiebreaker
     */
    parentDepth: number;
}
export interface UseEscapeDismissParameters<PopupElement extends Element> {
    refElementPopupReturn: Pick<UseRefElementReturnType<PopupElement>["refElementReturn"], "getElement">;
    escapeDismissParameters: UseEscapeDismissParametersSelf;
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
export declare function useEscapeDismiss<PopupElement extends Element>({ escapeDismissParameters: { onDismiss: onClose, active: open, getDocument: unstableGetDocument, parentDepth, ...void1 }, refElementPopupReturn: { getElement, ...void2 } }: UseEscapeDismissParameters<PopupElement>): void;
//# sourceMappingURL=use-escape-dismiss.d.ts.map