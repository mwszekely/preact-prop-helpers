import { h } from "preact";
import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
export interface UseFocusTrapParameters<SourceElement extends Element | null, PopupElement extends Element> {
    refElementReturn: Pick<UseRefElementReturnType<NonNullable<PopupElement>>["refElementReturn"], "getElement">;
    focusTrapParameters: {
        /**
         * Whether or not the focus trap is currently active (or, when used as part of a larger component, whether it is activatable)
         */
        trapActive: boolean;
        /**
         * If true, focus is not trapped but only moved to the new element.
         */
        onlyMoveFocus: boolean;
        /**
         * When a modal popup opens, focus must be sent to the first element that makes sense.
         *
         * For example, if it's a confirmation dialog about deleting something, it's best to send focus to the "cancel" button.
         *
         * In other cases, it makes more sense to focus the dialog's title, first interactive element, etc.
         *
         * This is highly subjective and *almost ALWAYS* more complicated than just "focus the whole dialog element itself",
         * because that only works if the dialog ***only contains text***, which is uncommon.
         *
         * If you really, really, ***genuinely*** cannot determine what should be done in your use case,
         * first of all, keep trying, really,
         * then as a very last resort, use `findFirstFocusable`, and then if nothing's found focus the body.
         * Just please, please make sure that whatever that first focusable is **isn't** a destructive action, at the very least.
         */
        focusPopup(e: PopupElement, findFirstFocusable: () => HTMLOrSVGElement | null): void;
        /**
         * When the focus trap has deactivated, focus must be sent back to the element that opened it.
         *
         * This is tracked for you; by default, just call `lastFocused?.focus()`, but you can also override this behavior
         * and just do whatever you want with any element.
         * @param lastFocused
         */
        focusOpener(lastFocused: SourceElement | null): void;
    };
}
export interface UseFocusTrapReturnType<E extends Element> {
    props: h.JSX.HTMLAttributes<E>;
    focusTrapReturn: {};
}
export declare function useFocusTrap<SourceElement extends Element | null, PopupElement extends Element>({ focusTrapParameters: { onlyMoveFocus, trapActive, focusPopup: focusSelfUnstable, focusOpener: focusOpenerUnstable }, refElementReturn }: UseFocusTrapParameters<SourceElement, PopupElement>): UseFocusTrapReturnType<PopupElement>;
/**
 * Returns the first focusable element contained within the given node, or null if none are found.
 * @param element
 * @returns
 */
export declare function findFirstFocusable<T extends Node>(element: T): T | null;
/**
 * Returns the first tabbable element contained within the given node, or null if none are found.
 * @param element
 * @returns
 */
export declare function findFirstTabbable<T extends Node>(element: T): T | null;
//# sourceMappingURL=use-focus-trap.d.ts.map