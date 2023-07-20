import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { TargetedPick } from "../util/lib.js";
import { ElementProps } from "../util/types.js";
export interface UseFocusTrapParametersSelf<SourceElement extends Element | null, PopupElement extends Element> {
    /**
     * Whether or not the focus trap is currently active (or, when used as part of a larger component, whether it is activatable)
     */
    trapActive: boolean;
    /**
     * If true, focus is not trapped but only moved to the new element.
     */
    onlyMoveFocus: boolean;
    /**
     * This function is called to find where focus should be sent when the dialog (or menu, popup, etc.) opens.
     *
     * @remarks This **cannot be done deterministically** across all possible scenarios because this is about what makes the most sense as a human.
     *
     * For example, if it's a confirmation dialog about deleting something, *it's best to send focus to the "cancel" button*,
     * but there's no way to programatically know both a) that should be done and b) how to do it.
     *
     * Ideally this function is specified *manually* for every dialog you create.
     *
     * If you really, really, ***genuinely*** cannot determine what should be done in your use case,
     * as a very very last resort, use `findFirstFocusable`, and then if nothing's found focus the body.
     *
     * Just please, please make sure that whatever that first focusable is **isn't** a destructive action, at the very least.
     */
    focusPopup(e: PopupElement, findFirstFocusable: () => HTMLOrSVGElement | null): void;
    /**
     * When the focus trap has deactivated, focus must be sent back to the element that opened it.
     *
     * @remarks This is tracked for you; by default, just call `lastFocused?.focus()`, but you can also override this behavior
     * and just do whatever you want with any element.
     *
     * @param lastFocused - The element that was focused before the modal was opened
     */
    focusOpener(lastFocused: SourceElement | null): void;
}
export interface UseFocusTrapParameters<SourceElement extends Element | null, PopupElement extends Element> extends TargetedPick<UseRefElementReturnType<NonNullable<PopupElement>>, "refElementReturn", "getElement"> {
    focusTrapParameters: UseFocusTrapParametersSelf<SourceElement, PopupElement>;
}
export interface UseFocusTrapReturnType<E extends Element> {
    props: ElementProps<E>;
}
/**
 * Allows you to move focus to an isolated area of the page and restore it when finished.
 *
 * @remarks By default, this implements a focus trap using the
 *
 * @compositeParams
 */
export declare function useFocusTrap<SourceElement extends Element | null, PopupElement extends Element>({ focusTrapParameters: { onlyMoveFocus, trapActive, focusPopup: focusSelfUnstable, focusOpener: focusOpenerUnstable }, refElementReturn }: UseFocusTrapParameters<SourceElement, PopupElement>): UseFocusTrapReturnType<PopupElement>;
/**
 * Returns the first focusable element contained within the given node, or null if none are found.
 */
export declare function findFirstFocusable<T extends Node>(element: T): T | null;
/**
 * Returns the first tabbable element contained within the given node, or null if none are found.
 */
export declare function findFirstTabbable<T extends Node>(element: T): T | null;
//# sourceMappingURL=use-focus-trap.d.ts.map