import { UseRefElement } from "../../dom-helpers/use-ref-element.js";
import { UseActiveElement } from "../../observers/use-active-element.js";
import { OnPassiveStateChange } from "../../preact-extensions/use-passive-state.js";
import { useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { FocusEventType, useCallback } from "../../util/lib.js";
import { Nullable, Parameter, StandardDepsPick, StandardDepsRename, StandardHook } from "../../util/types.js";
import { monitored } from "../../util/use-call-count.js";

export interface UseLostFocusDismissParametersSelf<B extends boolean> {

    /**
     * Called when the component is dismissed by losing focus
     * 
     * @nonstable
     */
    onDismissLostFocus: Nullable<(e: FocusEventType<any>) => void>;

    /** 
     * When `true`, `onDismiss` is eligible to be called. When `false`, it will not be called.
     */
    dismissLostFocusActive: B | false;
}



export type UseLostFocusDismiss<SourceElement extends Element | null, PopupElement extends Element, B extends boolean> = StandardHook<
    "lostFocusDismiss", 
    UseLostFocusDismissParametersSelf<B>, [
        StandardDepsRename<StandardDepsPick<"return", UseRefElement<NonNullable<SourceElement>>, "refElementReturn", "pick", "getElement">, "refElementReturn", "refElementSourceReturn">,
        StandardDepsRename<StandardDepsPick<"return", UseRefElement<PopupElement>, "refElementReturn", "pick", "getElement">, "refElementReturn", "refElementPopupReturn">
    ],
    never, [StandardDepsPick<"params", UseActiveElement, "activeElementParameters", "pick", "onLastActiveElementChange">]
>;


/**
 * Invokes a callback when focus travels outside of the component's element.
 * 
 * @remarks TODO: This is not intended for recursive structures, like dialogs that open dialogs, or menus that open menus, but does properly handle, e.g., the fact that a menu's menubutton having focus still counts as the menu having focus.
 * 
 * @compositeParams 
 */
export const useLostFocusDismiss = monitored(function useLostFocusDismiss<SourceElement extends Element | null, PopupElement extends Element, B extends boolean>({
    refElementPopupReturn: { getElement: getPopupElement, ...void3 },
    refElementSourceReturn,
    lostFocusDismissParameters: {
        dismissLostFocusActive: open,
        onDismissLostFocus: onClose,
        ...void4
    },
    ...void1
}: Parameter<UseLostFocusDismiss<SourceElement, PopupElement, B>>): ReturnType<UseLostFocusDismiss<SourceElement, PopupElement, B>> {
    const { getElement: getSourceElement, ...void2 } = (refElementSourceReturn ?? {});

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);


    const stableOnClose = useStableGetter(onClose);
    const getOpen = useStableGetter(open);
    const onLastActiveElementChange = useCallback<OnPassiveStateChange<Element | null, FocusEventType<any>>>((newElement, _prevElement, e) => {
        const open = getOpen();
        const sourceElement = getSourceElement?.();
        const popupElement = getPopupElement();
        if (!(sourceElement?.contains(newElement) || popupElement?.contains(newElement))) {
            if (open) {
                console.assert(e != null);
                stableOnClose()?.(e!);
            }
        }
    }, [getSourceElement]);

    return { activeElementParameters: { onLastActiveElementChange } }
})
