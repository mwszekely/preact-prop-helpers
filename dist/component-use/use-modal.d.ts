import { DismissListenerTypes, UseDismissParameters, UseDismissReturnType } from "../component-detail/use-dismiss.js";
import { UseFocusTrapParameters, UseFocusTrapReturnType } from "../component-detail/use-focus-trap.js";
import { ElementProps } from "../util/types.js";
export interface UseModalParameters<Listeners extends DismissListenerTypes> extends UseDismissParameters<Listeners> {
    focusTrapParameters: UseFocusTrapParameters<any, any>["focusTrapParameters"];
}
export interface UseModalReturnType<FocusContainerElement extends Element | null, SourceElement extends Element | null, PopupElement extends Element> extends UseDismissReturnType<SourceElement, PopupElement> {
    propsFocusContainer: ElementProps<NonNullable<FocusContainerElement>>;
    focusTrapReturn: UseFocusTrapReturnType<NonNullable<FocusContainerElement>>["focusTrapReturn"];
}
/**
 * Combines dismissal hooks and focus trap hooks into one.
 *
 * Another in the "complete" series, alongside list/grid navigation and dismissal itself.
 *
 * Use for dialogs, menus, etc.  Anything that can be dismissed and might trap focus, basically.
 *
 * @returns
 */
export declare function useModal<Listeners extends DismissListenerTypes, FocusContainerElement extends Element | null, SourceElement extends Element | null, PopupElement extends Element>({ dismissParameters, escapeDismissParameters, focusTrapParameters: { trapActive, ...focusTrapParameters } }: UseModalParameters<Listeners>): UseModalReturnType<FocusContainerElement, SourceElement, PopupElement>;
//# sourceMappingURL=use-modal.d.ts.map