import { DismissListenerTypes, UseDismissParameters, UseDismissReturnType } from "../component-detail/use-dismiss.js";
import { UseFocusTrapParameters } from "../component-detail/use-focus-trap.js";
import { ElementProps } from "../util/types.js";
export interface UseModalParameters<Listeners extends DismissListenerTypes> extends UseDismissParameters<Listeners>, Pick<UseFocusTrapParameters<any, any>, "focusTrapParameters"> {
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
 * @compositeParams
 */
export declare function useModal<Listeners extends DismissListenerTypes, FocusContainerElement extends Element | null, SourceElement extends Element | null, PopupElement extends Element>({ dismissParameters, escapeDismissParameters, focusTrapParameters: { trapActive, ...focusTrapParameters } }: UseModalParameters<Listeners>): UseModalReturnType<FocusContainerElement, SourceElement, PopupElement>;
//# sourceMappingURL=use-modal.d.ts.map