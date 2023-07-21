import { UseRefElementReturnType, useRefElement } from "../dom-helpers/use-ref-element.js";
import { useActiveElement } from "../observers/use-active-element.js";
import { TargetedPick, useCallback } from "../util/lib.js";
import { ElementProps } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { useBackdropDismiss } from "./dismissal/use-backdrop-dismiss.js";
import { UseEscapeDismissParameters, useEscapeDismiss } from "./dismissal/use-escape-dismiss.js";
import { useLostFocusDismiss } from "./dismissal/use-lost-focus-dismiss.js";

/**
 * In general, each soft dismiss hook takes an `open` and an `onClose` prop.
 * 
 * `open` in all cases refers to both whether or not the controlled surface is currently being shown,
 * but also whether that particular method of soft dismiss is enabled or not.
 * 
 * E.G. If `escape` key dismissing is disabled, just have `open` false at all times for `escapeDismissParameters`.
 */
const _dummy = 0;


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
     * 
     * @nonstable
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
 * Combines all the methods a user can implicitly dismiss a popup component. See {@link useModal} for a hook that's ready-to-use for dialogs and menus.
 * 
 * @compositeParams
 */
export function useDismiss<Listeners extends DismissListenerTypes, SourceElement extends Element | null, PopupElement extends Element>({ dismissParameters: { open: globalOpen, onClose: globalOnClose, closeOnBackdrop, closeOnEscape, closeOnLostFocus }, escapeDismissParameters: { getWindow, parentDepth } }: UseDismissParameters<Listeners>): UseDismissReturnType<SourceElement, PopupElement> {
    monitorCallCount(useDismiss);

    const { refElementReturn: refElementSourceReturn, propsStable: propsStableSource } = useRefElement<NonNullable<SourceElement>>({ refElementParameters: {} });
    const { refElementReturn: refElementPopupReturn, propsStable: propsStablePopup } = useRefElement<PopupElement>({ refElementParameters: {} });

    const onCloseBackdrop = useCallback(() => { return globalOnClose?.("backdrop" as Listeners); }, [globalOnClose]);
    const onCloseEscape = useCallback(() => { return globalOnClose?.("escape" as Listeners); }, [globalOnClose]);
    const onCloseFocus = useCallback(() => { return globalOnClose?.("lost-focus" as Listeners); }, [globalOnClose]);
    const _v1: void = useBackdropDismiss<PopupElement>({ backdropDismissParameters: { onDismiss: onCloseBackdrop, active: (closeOnBackdrop && globalOpen) }, refElementPopupReturn });
    const _v2: void = useEscapeDismiss<PopupElement>({ escapeDismissParameters: { getWindow, onDismiss: onCloseEscape, active: (closeOnEscape && globalOpen), parentDepth }, refElementPopupReturn });
    const { activeElementParameters } = useLostFocusDismiss<SourceElement, PopupElement>({ lostFocusDismissParameters: { onDismiss: onCloseFocus, active: (closeOnLostFocus && globalOpen) }, refElementPopupReturn, refElementSourceReturn });

    const getDocument = useCallback(() => {
        return getWindow().document;
    }, [getWindow])

    const {
        activeElementReturn: {
            getActiveElement: _getActiveElement,
            getLastActiveElement: _getLastActiveElement,
            getWindowFocused: _getWindowFocused
        }
    } = useActiveElement({ activeElementParameters: { ...activeElementParameters, getWindow, getDocument } });

    return {
        refElementSourceReturn,
        refElementPopupReturn,
        propsStableSource,
        propsStablePopup
    }
}
