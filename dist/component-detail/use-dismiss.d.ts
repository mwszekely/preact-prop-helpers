import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { TargetedPick } from "../util/lib.js";
import { ElementProps } from "../util/types.js";
import { UseEscapeDismissParameters } from "./dismissal/use-escape-dismiss.js";
export type DismissListenerTypes = "backdrop" | "lost-focus" | "escape";
export interface UseDismissParametersSelf<Listeners extends DismissListenerTypes> {
    /**
     * Whether or not this component is currently open/showing itself, as opposed to hidden/closed.
     * Event handlers are only attached when this is `true`.
     */
    open: boolean;
    /**
     * Called any time the user has requested the component be dismissed for the given reason.
     *
     * You can choose to ignore a reason if you want, but it's better to set `closeOn${reason}` to `false` instead.
     */
    onClose: (reason: Listeners) => void;
    /**
     * If `true`, then this component closes when a click is detected anywhere not within the component
     * (determined by being in a different branch of the DOM)
     */
    closeOnBackdrop: Listeners extends "backdrop" ? true : false;
    /**
     * If `true`, then this component closes when the Escape key is pressed, and no deeper component
     * is listening for that same Escape press (i.e. only one Escape dismiss happens per key press)
     */
    closeOnEscape: Listeners extends "escape" ? true : false;
    /**
     * If `true`, then this component closes whenever focus is sent to an element not contained by this one
     * (using the same rules as `closeOnBackdrop`)
     */
    closeOnLostFocus: Listeners extends "lost-focus" ? true : false;
}
export interface UseDismissParameters<Listeners extends DismissListenerTypes> extends TargetedPick<UseEscapeDismissParameters<any>, "escapeDismissParameters", "getWindow" | "parentDepth"> {
    dismissParameters: UseDismissParametersSelf<Listeners>;
}
export interface UseDismissReturnType<SourceElement extends Element | null, PopupElement extends Element> {
    /**
     * If this dismissible component has a specific element that caused it to appear (a button, for example),
     * provide it with these props.
     *
     * * REQUIRED for things like menus that pop up from a button and for whom losing focus counts as requesting closure.
     * * OPTIONAL for things like dialogs that can appear out of nowhere and for whom losing focus is actively impossible (due to focus traps).
     */
    refElementSourceReturn: UseRefElementReturnType<NonNullable<SourceElement>>["refElementReturn"];
    /**
     * This one's always required though
     */
    refElementPopupReturn: UseRefElementReturnType<PopupElement>["refElementReturn"];
    propsStableSource: ElementProps<NonNullable<SourceElement>>;
    propsStablePopup: ElementProps<NonNullable<PopupElement>>;
}
/**
 * Combines all the methods a user can implicitly dismiss a popup component. See {@link @useModal} for a hook that's ready-to-use for dialogs and menus.
 *
 * @compositeParams
 */
export declare function useDismiss<Listeners extends DismissListenerTypes, SourceElement extends Element | null, PopupElement extends Element>({ dismissParameters: { open: globalOpen, onClose: globalOnClose, closeOnBackdrop, closeOnEscape, closeOnLostFocus }, escapeDismissParameters: { getWindow, parentDepth } }: UseDismissParameters<Listeners>): UseDismissReturnType<SourceElement, PopupElement>;
//# sourceMappingURL=use-dismiss.d.ts.map