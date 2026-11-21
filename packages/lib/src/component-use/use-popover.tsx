import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { useRefElement } from "../dom-helpers/use-ref-element.js";
import { ElementProps, EventTypeByTag, JSX, useCallback, useEffect } from "../util/lib.js";
import { useRandomId, UseRandomIdParameters } from "./use-random-id.js";

export interface UsePopoverParametersSelf<TagSource extends keyof JSX.IntrinsicElements, TagPopover extends keyof JSX.IntrinsicElements> {
    /**
     * Corresponds to the `popover` attribute.
     * 
     * * "auto": The popover will be toggled as its invoker is clicked (tapped, etc.). Interacting with things outside the popover will close it. Other "auto" popovers will be closed when this one is opened (except for nested popovers)
     * * "hint": Same as "auto", but will only dismiss other "hint" popovers and leave "auto" popovers alone.
     * * "manual": The popover will only be shown/hidden when the `open` parameter here changes, or when `showPopover()`/`hidePopover()` are called from the hook return.
     */
    type: "auto" | "hint" | "manual",

    /**
     * If true, the popover cannot be opened, and if open, will immediately close.
     */
    disabled: boolean,

    /**
     * Allows for declarative control over the popover's open state.
     * 
     * You can also imperatively control it via the hook return's `showPopover()`/`hidePopover()` functions.
     */
    open: boolean | null,

    /**
     * Called as a response to the `beforetoggle` event. 
     * Can be used to keep track of the open state via a call to `setState`. 
     * 
     * The event can be cancelled only when the popover is opening, not closing. Cancelling in response to a change in the `open` prop will likely lead to a state desync.
     * 
     * @param opening 
     * @param e 
     * @returns 
     */
    onToggleChange: (opening: boolean, e: EventTypeByTag<TagPopover, ToggleEvent>) => void
}

export interface UsePopoverParameters<TagSource extends keyof JSX.IntrinsicElements, TagPopover extends keyof JSX.IntrinsicElements> extends
    UseRandomIdParameters {
    popoverParameters: UsePopoverParametersSelf<TagSource, TagPopover>,
}


export interface UsePopoverReturnTypeSelf<TagSource extends keyof JSX.IntrinsicElements, TagPopover extends keyof JSX.IntrinsicElements> {
    showPopover(): void;
    hidePopover(): void;
}

export interface UsePopoverReturnType<TagSource extends keyof JSX.IntrinsicElements, TagPopover extends keyof JSX.IntrinsicElements> {
    propsSource: ElementProps<TagSource>,
    propsPopover: ElementProps<TagPopover>,
    popoverReturn: UsePopoverReturnTypeSelf<TagSource, TagPopover>
}

/**
 * Creates a popover and associates an element with it.
 * 
 * If `type="manual"`, you can either control the state declaratively via the `open` prop, or manually via the returned `showPopover`/`hidePopover` functions.
 * 
 * Among other things, ensures you don't need to remember whether to attach event handles to the popover or the invoker (it's always the popover, by the way).
 * 
 * @compositeParams
 */
export function usePopover<TagSource extends keyof JSX.IntrinsicElements, TagPopover extends keyof JSX.IntrinsicElements>({
    popoverParameters,
    randomIdParameters,
}: UsePopoverParameters<TagSource, TagPopover>): UsePopoverReturnType<TagSource, TagPopover> {
    const onBeforeToggle = useCallback((e: EventTypeByTag<TagPopover, ToggleEvent>) => {
        if (popoverParameters.disabled && e.newState == "open") {
            e.preventDefault();
        }
        else if (e.newState != e.oldState) {
            popoverParameters.onToggleChange(e.newState == "open", e);
        }
    }, [popoverParameters.disabled, popoverParameters.onToggleChange]);


    const { propsStable, refElementReturn } = useRefElement<TagPopover>({ refElementParameters: {} })
    const hidePopover = useCallback(() => { refElementReturn.getElement()?.hidePopover() }, []);
    const showPopover = useCallback(() => { refElementReturn.getElement()?.showPopover() }, []);

    const { propsReferencer, propsSource: popoverIdProps, randomIdReturn } = useRandomId<TagSource, TagPopover>({ randomIdParameters });
    const popoverId = randomIdReturn.id;
    const propsSource = useMergedProps<TagSource>(propsReferencer, { popoverTarget: popoverId });
    const propsPopover = useMergedProps<TagPopover>(popoverIdProps, propsStable, { onBeforeToggle, popover: popoverParameters.type });

    useEffect(() => {
        if (popoverParameters.open === true) {
            showPopover();
        }
        else if (popoverParameters.open === false) {
            hidePopover();
        }
    }, [popoverParameters.open])

    useEffect(() => {
        if (popoverParameters.disabled) {
            hidePopover();
        }
    }, [popoverParameters.disabled, hidePopover]);

    return {
        propsSource,
        propsPopover,
        popoverReturn: {
            hidePopover,
            showPopover,
        },
    }
}
