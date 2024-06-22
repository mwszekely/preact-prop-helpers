import { $dismissBackdropActive, $onDismissBackdrop, $backdropDismissParameters } from "../component-detail/dismissal/use-backdrop-dismiss.js";
import { $dismissEscapeActive, $onDismissEscape, $parentDepth, $escapeDismissParameters } from "../component-detail/dismissal/use-escape-dismiss.js";
import { $dismissLostFocusActive, $onDismissLostFocus, $lostFocusDismissParameters } from "../component-detail/dismissal/use-lost-focus-dismiss.js";
import { DismissListenerTypes, $dismissActive, $onDismiss, UseDismissParameters, UseDismissReturnType, $dismissParameters } from "../component-detail/use-dismiss.js";
import { $trapActive, UseFocusTrapParameters, $focusTrapParameters } from "../component-detail/use-focus-trap.js";
import { $onElementChange, $onMount, $onUnmount, UseRefElementParameters, $refElementParameters, $refElementReturn } from "../dom-helpers/use-ref-element.js";
import { $activeElementParameters, $onActiveElementChange, $onLastActiveElementChange, $onWindowFocusedChange, $getDocument } from "../observers/use-active-element.js";
import { ElementProps, OmitStrong } from "../util/types.js";
export declare const $modalParameters: unique symbol;
export declare const $active: unique symbol;
export interface UseModalParametersSelf {
    /**
     * When `false`, all dismissal/focus trapping behavior is disabled. When `true`, they're allowed via their individual parameters.
     */
    [$active]: boolean;
}
export interface UseModalParameters<Listeners extends DismissListenerTypes> extends UseDismissParameters<Listeners>, UseRefElementParameters<any>, OmitStrong<UseFocusTrapParameters<any, any>, typeof $refElementReturn> {
    [$modalParameters]: UseModalParametersSelf;
}
export interface UseModalReturnType<FocusContainerElement extends Element | null, SourceElement extends Element | null, PopupElement extends Element> extends UseDismissReturnType<SourceElement, PopupElement> {
    propsFocusContainer: ElementProps<NonNullable<FocusContainerElement>>;
}
/**
 * Combines dismissal hooks and focus trap hooks into one.
 * Use for dialogs, menus, etc.  Anything that can be dismissed and might trap focus, basically.
 *
 * @remarks Another in the "complete" series, alongside list/grid navigation and dismissal itself.
 *
 * TODO: The HTML &lt;dialog&gt; element is a thing now, and it can be modal or nonmodal, just like this hook. Hmm...
 *
 * @compositeParams
 */
export declare const useModal: <Listeners extends DismissListenerTypes, FocusContainerElement extends Element | null, SourceElement extends Element | null, PopupElement extends Element>({ [$dismissParameters]: { [$dismissActive]: dismissActive, [$onDismiss]: onDismiss, ...void2 }, [$escapeDismissParameters]: { [$dismissEscapeActive]: dismissEscapeActive, [$onDismissEscape]: onDismissEscape, [$parentDepth]: parentDepth, ...void3 }, [$focusTrapParameters]: { [$trapActive]: trapActive, ...focusTrapParameters }, [$activeElementParameters]: { [$getDocument]: getDocument, [$onActiveElementChange]: onActiveElementChange, [$onLastActiveElementChange]: onLastActiveElementChange, [$onWindowFocusedChange]: onWindowFocusedChange, ...void4 }, [$backdropDismissParameters]: { [$dismissBackdropActive]: dismissBackdropActive, [$onDismissBackdrop]: onDismissBackdrop, ...void5 }, [$lostFocusDismissParameters]: { [$dismissLostFocusActive]: dismissLostFocusActive, [$onDismissLostFocus]: onDismissLostFocus, ...void6 }, [$refElementParameters]: { [$onElementChange]: onElementChange, [$onMount]: onMount, [$onUnmount]: onUnmount, ...void7 }, [$modalParameters]: { [$active]: modalActive, ...void8 }, ...void1 }: UseModalParameters<Listeners>) => UseModalReturnType<FocusContainerElement, SourceElement, PopupElement>;
//# sourceMappingURL=use-modal.d.ts.map