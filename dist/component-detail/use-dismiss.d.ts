import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { UseActiveElementParameters } from "../observers/use-active-element.js";
import { EnhancedEventHandler } from "../util/event.js";
import { ElementProps, Nullable } from "../util/types.js";
export interface UseEscapeDismissParameters<PopupElement extends Element> {
    refElementPopupReturn: Pick<UseRefElementReturnType<PopupElement>["refElementReturn"], "getElement">;
    escapeDismissParameters: {
        /**
         * Called when the component is dismissed.
         *
         * Presumably you'll set some state that changes `open` to false during this, otherwise it's not a soft dismiss, but you can do whatever you want I guess.
         */
        onClose: EnhancedEventHandler<KeyboardEvent, {
            reason: "escape" | "lost-focus";
        }>;
        /**
         * Whether the surface controlled by the `Escape` key is currently open.
         * Can also be `false` to force the `Escape` key to do nothing.
         */
        open: boolean;
        /**
         * The escape key event handler is attached onto the window, so we need to know which window.
         */
        getWindow(): Window;
        /**
         * Get this from context somewhere, and increment it in that context.
         *
         * If multiple instances of Preact are on the page, tree depth is used as a tiebreaker
         */
        parentDepth: number;
    };
}
/**
 * Adds event handlers for a modal-like soft-dismiss interaction.
 *
 * That is, any clicks or taps outside of the given component,
 * or any time the Escape key is pressed within the component,
 * (with various browser oddities regarding clicks on blank or inert areas handled)
 * the component will request to close itself.
 *
 * Of course, if you don't do anything in the `onClose` function,
 * it won't be a soft dismiss anymore.
 *
 * Handles events for pressing the `Escape` key to close the any currently open dialogs, tooltips, menus, popups, etc.
 *
 * One press of the `Escape` key is guaranteed to only call `onClose` for *only one* component, and it is called on the component deepest in the DOM tree, differentiated by passing context information between parent and child.
 *
 * @returns
 */
export declare function useEscapeDismiss<PopupElement extends Element>({ escapeDismissParameters: { onClose, open, getWindow: unstableGetWindow, parentDepth, ...void1 }, refElementPopupReturn: { getElement, ...void2 } }: UseEscapeDismissParameters<PopupElement>): void;
export interface UseLostFocusDismissParameters<SourceElement extends Element | null, PopupElement extends Element> {
    lostFocusDismiss: {
        open: boolean;
        onClose(): void;
    };
    refElementSourceReturn: Nullable<Pick<UseRefElementReturnType<NonNullable<SourceElement>>["refElementReturn"], "getElement">>;
    refElementPopupReturn: Pick<UseRefElementReturnType<PopupElement>["refElementReturn"], "getElement">;
}
export interface UseLostFocusDismissReturnType<_SourceElement extends Element | null, _PopupElement extends Element> {
    activeElementParameters: Pick<UseActiveElementParameters["activeElementParameters"], "onLastActiveElementChange">;
}
/**
 * Handles events for dismiss events for things like popup menus or transient dialogs -- things where moving focus to a new area of the page means this component should close itself.
 *
 * @returns
 */
export declare function useLostFocusDismiss<SourceElement extends Element | null, PopupElement extends Element>({ refElementPopupReturn: { getElement: getPopupElement, ...void3 }, refElementSourceReturn, lostFocusDismiss: { open, onClose }, ...void1 }: UseLostFocusDismissParameters<SourceElement, PopupElement>): UseLostFocusDismissReturnType<SourceElement, PopupElement>;
export interface UseBackdropDismissParameters<PopupElement extends Element> {
    backdropDismissParameters: {
        open: boolean;
        onClose: EnhancedEventHandler<MouseEvent, {
            reason: "escape" | "lost-focus";
        }>;
    };
    refElementPopupReturn: Pick<UseRefElementReturnType<PopupElement>["refElementReturn"], "getElement">;
}
/**
 * Handles events for a backdrop on a modal dialog -- the kind where the user expects the modal to close when they click/tap outside of it.
 */
export declare function useBackdropDismiss<PopupElement extends Element>({ backdropDismissParameters: { open, onClose: onCloseUnstable, ...void1 }, refElementPopupReturn: { getElement, ...void3 }, ...void2 }: UseBackdropDismissParameters<PopupElement>): void;
export type DismissListenerTypes = "backdrop" | "lost-focus" | "escape";
export interface UseDismissParameters<Listeners extends DismissListenerTypes> {
    dismissParameters: {
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
    };
    escapeDismissParameters: Pick<UseEscapeDismissParameters<any>["escapeDismissParameters"], "getWindow" | "parentDepth">;
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
 * Combines all the methods of dismissing a modal-ish or popup-ish component into one combined hook.
 *
 * This is similar to the "complete" series of list/grid navigation, in that it's the "outermost" hook of its type.
 */
export declare function useDismiss<Listeners extends DismissListenerTypes, SourceElement extends Element | null, PopupElement extends Element>({ dismissParameters: { open: globalOpen, onClose: globalOnClose, closeOnBackdrop, closeOnEscape, closeOnLostFocus }, escapeDismissParameters: { getWindow, parentDepth } }: UseDismissParameters<Listeners>): UseDismissReturnType<SourceElement, PopupElement>;
//# sourceMappingURL=use-dismiss.d.ts.map