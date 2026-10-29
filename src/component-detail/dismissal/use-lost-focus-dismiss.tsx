import { UseRefElementReturnType } from "../../dom-helpers/use-ref-element.js";
import { UseActiveElementParameters } from "../../observers/use-active-element.js";
import { OnPassiveStateChange } from "../../preact-extensions/use-passive-state.js";
import { useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { FocusEventTypeByTag, TargetedPick, useCallback } from "../../util/lib.js";
import { Nullable, JSX } from "../../util/types.js";
import { useMonitoring } from "../../util/use-call-count.js";

export interface UseLostFocusDismissParametersSelf<B extends boolean> {

    /**
     * Called when the component is dismissed by losing focus
     * 
     * @nonstable
     */
    onDismissLostFocus: Nullable<(e: FocusEventTypeByTag<any>) => void>;

    /** 
     * When `true`, `onDismiss` is eligible to be called. When `false`, it will not be called.
     */
    dismissLostFocusActive: B | false;
}

export interface UseLostFocusDismissParameters<SourceElementTag extends keyof JSX.IntrinsicElements | null, PopupElementTag extends keyof JSX.IntrinsicElements, B extends boolean> {
    lostFocusDismissParameters: UseLostFocusDismissParametersSelf<B>;
    refElementSourceReturn: Nullable<Pick<UseRefElementReturnType<NonNullable<SourceElementTag>>["refElementReturn"], "getElement">>;
    refElementPopupReturn: Pick<UseRefElementReturnType<PopupElementTag>["refElementReturn"], "getElement">;
}

export interface UseLostFocusDismissReturnType<_SourceElementTag extends keyof JSX.IntrinsicElements | null, _PopupElementTag extends keyof JSX.IntrinsicElements> extends TargetedPick<UseActiveElementParameters, "activeElementParameters", "onLastActiveElementChange"> {
}

/**
 * Invokes a callback when focus travels outside of the component's element.
 * 
 * @remarks TODO: This is not intended for recursive structures, like dialogs that open dialogs, or menus that open menus, but does properly handle, e.g., the fact that a menu's menubutton having focus still counts as the menu having focus.
 * 
 * @compositeParams 
 */
export function useLostFocusDismiss<SourceElementTag extends keyof JSX.IntrinsicElements | null, PopupElementTag extends keyof JSX.IntrinsicElements, B extends boolean>({
    refElementPopupReturn: { getElement: getPopupElement, ...void3 },
    refElementSourceReturn,
    lostFocusDismissParameters: {
        dismissLostFocusActive: open,
        onDismissLostFocus: onClose,
        ...void4
    },
    ...void1
}: UseLostFocusDismissParameters<SourceElementTag, PopupElementTag, B>): UseLostFocusDismissReturnType<SourceElementTag, PopupElementTag> {
    return useMonitoring(function useLostFocusDismiss(): UseLostFocusDismissReturnType<SourceElementTag, PopupElementTag> {
        const { getElement: getSourceElement, ...void2 } = (refElementSourceReturn ?? {});

        assertEmptyObject(void1);
        assertEmptyObject(void2);
        assertEmptyObject(void3);
        assertEmptyObject(void4);


        const stableOnClose = useStableGetter(onClose);
        const getOpen = useStableGetter(open);
        const onLastActiveElementChange = useCallback<OnPassiveStateChange<Element | null, FocusEvent>>((newElement, _prevElement, e) => {
            const open = getOpen();
            const sourceElement = getSourceElement?.() as HTMLElement | null | undefined;
            const popupElement = getPopupElement();
            if (!(sourceElement?.contains(newElement) || popupElement?.contains(newElement))) {
                if (open) {
                    console.assert(e != null);
                    stableOnClose()?.(e! as any);
                }
            }
        }, [getSourceElement]);

        return { activeElementParameters: { onLastActiveElementChange } };
    });
}
