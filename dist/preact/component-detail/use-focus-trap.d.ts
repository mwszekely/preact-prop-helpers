import { UseBlockingElementParameters, $blockingElementParameters } from "../dom-helpers/use-blocking-element.js";
import { $getElement, UseRefElementReturnType, $refElementReturn } from "../dom-helpers/use-ref-element.js";
import { TargetedPick } from "../util/lib.js";
import { ElementProps, OmitStrong } from "../util/types.js";
import { $activeElementParameters } from "../observers/use-active-element.js";
export declare const $trapActive: unique symbol;
export declare const $onlyMoveFocus: unique symbol;
export declare const $focusPopup: unique symbol;
export declare const $focusOpener: unique symbol;
export declare const $focusTrapParameters: unique symbol;
export interface UseFocusTrapParametersSelf<SourceElement extends Element | null, PopupElement extends Element> {
    /**
     * Whether or not the focus trap is currently active (or, when used as part of a larger component, whether it is activatable)
     */
    [$trapActive]: boolean;
    /**
     * If true, focus is not trapped but only moved to the new element.
     */
    [$onlyMoveFocus]: boolean;
    /**
     * This function is called to find where focus should be sent when the dialog (or menu, popup, etc.) opens.
     *
     * @remarks This **cannot be done deterministically** across all possible scenarios because this is about what makes the most sense as a human.
     *
     * For example, if it's a confirmation dialog about deleting something, *it's best to send focus to the "cancel" button*,
     * but there's no way to programmatically know both a) that should be done and b) how to do it.
     *
     * Ideally this function is specified *manually* for every dialog you create.
     *
     * If you really, really, ***genuinely*** cannot determine what should be done in your use case,
     * as a very very last resort, use `findFirstFocusable`, and then if nothing's found focus the body.
     *
     * Just please, please make sure that whatever that first focusable is **isn't** a destructive action, at the very least.
     *
     * @nonstable
     */
    [$focusPopup](e: PopupElement, findFirstFocusable: () => HTMLOrSVGElement | null): void;
    /**
     * When the focus trap has deactivated, focus must be sent back to the element that opened it.
     *
     * @remarks This is tracked for you; by default, just call `lastFocused?.focus()`, but you can also override this behavior
     * and just do whatever you want with any element.
     *
     * @param lastFocused - The element that was focused before the modal was opened
     *
     * @nonstable
     */
    [$focusOpener](lastFocused: SourceElement | null): void;
}
export interface UseFocusTrapParameters<SourceElement extends Element | null, PopupElement extends Element> extends TargetedPick<UseRefElementReturnType<NonNullable<PopupElement>>, typeof $refElementReturn, typeof $getElement>, OmitStrong<UseBlockingElementParameters<NonNullable<SourceElement>>, typeof $blockingElementParameters> {
    [$focusTrapParameters]: UseFocusTrapParametersSelf<SourceElement, PopupElement>;
}
export interface UseFocusTrapReturnType<E extends Element> {
    props: ElementProps<E>;
}
/**
 * Allows you to move focus to an isolated area of the page, restore it when finished, and **optionally trap it there** so that you can't tab out of it.
 *
 * @remarks By default, this implements a focus trap using the Blocking Elements...uh...[proposal](https://github.com/whatwg/html/issues/897)?
 * Not that it really looks like it's going anywhere, but until something better comes along, [the polyfill](#https://github.com/PolymerLabs/blocking-elements) has been working pretty great.
 *
 * @compositeParams
 */
export declare const useFocusTrap: <SourceElement extends Element | null, PopupElement extends Element>({ [$focusTrapParameters]: { [$onlyMoveFocus]: onlyMoveFocus, [$trapActive]: trapActive, [$focusPopup]: focusSelfUnstable, [$focusOpener]: focusOpenerUnstable }, [$activeElementParameters]: activeElementParameters, [$refElementReturn]: refElementReturn }: UseFocusTrapParameters<SourceElement, PopupElement>) => UseFocusTrapReturnType<PopupElement>;
/**
 * Returns the first focusable element contained within the given node, or null if none are found.
 */
export declare function findFirstFocusable<T extends Node>(element: T): T | null;
/**
 * Returns the first tabbable element contained within the given node, or null if none are found.
 */
export declare function findFirstTabbable<T extends Node>(element: T): T | null;
//# sourceMappingURL=use-focus-trap.d.ts.map