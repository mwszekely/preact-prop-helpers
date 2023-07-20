import { UseRefElementReturnType } from "../../dom-helpers/use-ref-element.js";
import { UseActiveElementParameters } from "../../observers/use-active-element.js";
import { OnPassiveStateChange } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { EnhancedEventHandler, enhanceEvent } from "../../util/event.js";
import { TargetedPick, useCallback } from "../../util/lib.js";
import { FocusEventType, Nullable } from "../../util/types.js";
import { monitorCallCount } from "../../util/use-call-count.js";

export interface UseLostFocusDismissParametersSelf {

    /**
     * Called when the component is dismissed by losing focus
     */
    onDismiss: EnhancedEventHandler<FocusEventType<any>, { reason: "lost-focus" }>;

    /** 
     * When `true`, `onDismiss` is eligible to be called. When `false`, it will not be called.
     */
    active: boolean;
};

export interface UseLostFocusDismissParameters<SourceElement extends Element | null, PopupElement extends Element> {
    lostFocusDismissParameters: UseLostFocusDismissParametersSelf;
    refElementSourceReturn: Nullable<Pick<UseRefElementReturnType<NonNullable<SourceElement>>["refElementReturn"], "getElement">>;
    refElementPopupReturn: Pick<UseRefElementReturnType<PopupElement>["refElementReturn"], "getElement">;
}

export interface UseLostFocusDismissReturnType<_SourceElement extends Element | null, _PopupElement extends Element> extends TargetedPick<UseActiveElementParameters, "activeElementParameters", "onLastActiveElementChange"> {
}

/**
 * Invokes a callback when focus travels outside of the component's element.
 * 
 * @remarks TODO: This is not intended for recursive structures, like dialogs that open dialogs, or menus that open menus, but does properly handle, e.g., the fact that a menu's menubutton having focus still counts as the menu having focus.
 * 
 * @compositeParams 
 */
export function useLostFocusDismiss<SourceElement extends Element | null, PopupElement extends Element>({ refElementPopupReturn: { getElement: getPopupElement, ...void3 }, refElementSourceReturn, lostFocusDismissParameters: { active: open, onDismiss: onClose, ...void4 }, ...void1 }: UseLostFocusDismissParameters<SourceElement, PopupElement>): UseLostFocusDismissReturnType<SourceElement, PopupElement> {
    monitorCallCount(useLostFocusDismiss);
    const { getElement: getSourceElement, ...void2 } = (refElementSourceReturn ?? {});

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);


    const stableOnClose = useStableCallback(onClose);
    const getOpen = useStableGetter(open);
    const onLastActiveElementChange = useCallback<OnPassiveStateChange<Element | null, FocusEventType<any>>>((newElement, _prevElement, e) => {
        const open = getOpen();
        const sourceElement = getSourceElement?.();
        const popupElement = getPopupElement();
        if (!(sourceElement?.contains(newElement) || popupElement?.contains(newElement))) {
            if (open)
                stableOnClose(enhanceEvent(e as FocusEventType<any>, { reason: "lost-focus" }));
        }
    }, [getSourceElement]);

    return { activeElementParameters: { onLastActiveElementChange } }
}
