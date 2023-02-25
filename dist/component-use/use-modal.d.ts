import { h } from "preact";
import { DismissListenerTypes, UseDismissParameters, UseDismissReturnType } from "../component-detail/use-dismiss.js";
import { UseFocusTrapParameters, UseFocusTrapReturnType } from "../component-detail/use-focus-trap.js";
type OmitStrong<T, K extends keyof T> = Omit<T, K>;
export interface UseModalParameters<Listeners extends DismissListenerTypes> extends UseDismissParameters<Listeners> {
    focusTrapParameters: UseFocusTrapParameters<any, any>["focusTrapParameters"];
}
export interface UseModalReturnType<FocusContainerElement extends Element | null, SourceElement extends Element | null, PopupElement extends Element> extends UseDismissReturnType<SourceElement, PopupElement> {
    propsFocusContainer: h.JSX.HTMLAttributes<NonNullable<FocusContainerElement>>;
    propsPopup: h.JSX.HTMLAttributes<PopupElement>;
    propsSource: h.JSX.HTMLAttributes<NonNullable<SourceElement>>;
    focusTrapReturn: OmitStrong<UseFocusTrapReturnType<NonNullable<FocusContainerElement>>["focusTrapReturn"], "propsUnstable">;
}
/**
 * Combines dismissal hooks and focus trap hooks into one.
 *
 * Another in the "complete" series, alongside list/grid navigation and dismissal itself.
 *
 * Use for dialogs, menus, etc.  Anything that can be dismissed and might trap focus, basically.
 *
 * @param param0
 * @returns
 */
export declare function useModal<Listeners extends DismissListenerTypes, FocusContainerElement extends Element | null, SourceElement extends Element | null, PopupElement extends Element>({ dismissParameters, escapeDismissParameters, focusTrapParameters: { trapActive, ...focusTrapParameters } }: UseModalParameters<Listeners>): UseModalReturnType<FocusContainerElement, SourceElement, PopupElement>;
export {};
//# sourceMappingURL=use-modal.d.ts.map