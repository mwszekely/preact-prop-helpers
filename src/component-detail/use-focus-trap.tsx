import { isFocusable, isTabbable } from "tabbable";
import { useBlockingElement } from "../dom-helpers/use-blocking-element.js";
import { PropNames_RefElementReturn_getElement, UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { assertEmptyObject } from "../util/assert.js";
import { useEffect } from "../util/lib.js";
import { ElementProps } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
import { useTagProps } from "../util/use-tag-props.js";



const P = `PropNames.FocusTrapParameters`;
const R = `PropNames.FocusTrapReturn`;

export const PropNames_FocusTrapParameters_trapActive = `${P}.trapActive`;
export const PropNames_FocusTrapParameters_onlyMoveFocus = `${P}.onlyMoveFocus`;
export const PropNames_FocusTrapParameters_focusPopup = `${P}.focusPopup`;
export const PropNames_FocusTrapParameters_focusOpener = `${P}.focusOpener`;
export const PropNames_FocusTrapReturn_pressing = `${R}.pressing`;


export interface UseFocusTrapParametersSelf<SourceElement extends Element | null, PopupElement extends Element> {
    /**
     * Whether or not the focus trap is currently active (or, when used as part of a larger component, whether it is activatable)
     */
    "PropNames.FocusTrapParameters.trapActive": boolean;

    /**
     * If true, focus is not trapped but only moved to the new element. 
     */
    "PropNames.FocusTrapParameters.onlyMoveFocus": boolean;


    /**
     * This function is called to find where focus should be sent when the dialog (or menu, popup, etc.) opens.
     * 
     * @remarks This **cannot be done deterministically** across all possible scenarios because this is about what makes the most sense as a human.
     * 
     * For example, if it's a confirmation dialog about deleting something, *it's best to send focus to the "cancel" button*,
     * but there's no way to programmatically know both a) that should be done and b) how to do it.
     * 
     * Ideally this function is specified *manually* for every dialog you create.
     * 
     * If you really, really, ***genuinely*** cannot determine what should be done in your use case,
     * as a very very last resort, use `findFirstFocusable`, and then if nothing's found focus the body.  
     * 
     * Just please, please make sure that whatever that first focusable is **isn't** a destructive action, at the very least. 
     * 
     * @nonstable
     */
    "PropNames.FocusTrapParameters.focusPopup"(e: PopupElement, findFirstFocusable: () => HTMLOrSVGElement | null): void;

    /**
     * When the focus trap has deactivated, focus must be sent back to the element that opened it.
     * 
     * @remarks This is tracked for you; by default, just call `lastFocused?.focus()`, but you can also override this behavior
     * and just do whatever you want with any element. 
     * 
     * @param lastFocused - The element that was focused before the modal was opened
     * 
     * @nonstable
     */
    "PropNames.FocusTrapParameters.focusOpener"(lastFocused: SourceElement | null): void;
}

export interface UseFocusTrapParameters<SourceElement extends Element | null, PopupElement extends Element> extends
    UseFocusTrapParametersSelf<SourceElement, PopupElement>,
    Pick<UseRefElementReturnType<NonNullable<PopupElement>>, typeof PropNames_RefElementReturn_getElement> {
}

export interface UseFocusTrapReturnType<E extends Element> {
    props: ElementProps<E>;
}

/**
 * Allows you to move focus to an isolated area of the page, restore it when finished, and **optionally trap it there** so that you can't tab out of it.
 * 
 * @remarks By default, this implements a focus trap using the Blocking Elements...uh...[proposal](https://github.com/whatwg/html/issues/897)? 
 * Not that it really looks like it's going anywhere, but until something better comes along, [the polyfill](#https://github.com/PolymerLabs/blocking-elements) has been working pretty great.
 * 
 * @compositeParams
 */
export const useFocusTrap = monitored(function useFocusTrap<SourceElement extends Element | null, PopupElement extends Element>({
    "PropNames.FocusTrapParameters.focusOpener": focusOpenerUnstable,
    "PropNames.FocusTrapParameters.focusPopup": focusSelfUnstable,
    "PropNames.FocusTrapParameters.trapActive": trapActive,
    "PropNames.FocusTrapParameters.onlyMoveFocus": onlyMoveFocus,
    "PropNames.RefElementReturn.getElement": getElement,
    ...void2
}: UseFocusTrapParameters<SourceElement, PopupElement>): UseFocusTrapReturnType<PopupElement> {
    const focusSelf = useStableCallback(focusSelfUnstable);
    const focusOpener = useStableCallback(focusOpenerUnstable);

    useEffect(() => {
        if (trapActive) {
            let top = getTop();
            const lastFocusedInThisComponent = getLastActiveWhenOpen();

            if (false && lastFocusedInThisComponent && lastFocusedInThisComponent?.isConnected) {
                focusSelf(lastFocusedInThisComponent as any as PopupElement, () => (lastFocusedInThisComponent as HTMLElement));
            }
            else {
                top ??= getElement() as unknown as HTMLElement;
                console.assert(!!top);
                if (top)
                    focusSelf(top as any as PopupElement, () => findFirstFocusable(top! as HTMLElement));
            }
        }
        else {
            const lastActive = getLastActiveWhenClosed();
            let currentFocus = document.activeElement;

            // Restore focus to whatever caused this trap to trigger,
            // but only if it wasn't caused by explicitly focusing something else 
            // (generally if `onlyMoveFocus` is true)
            let top = getElement();
            if (currentFocus == document.body || currentFocus == null || top == currentFocus || top?.contains(currentFocus)) {
                if (lastActive)
                    focusOpener(lastActive as any as SourceElement);
            }
        }
    }, [trapActive]);

    const {
        "PropNames.BlockingElementReturn.getTarget": getTarget,
        "PropNames.BlockingElementReturn.getTop": getTop,
        "PropNames.BlockingElementReturn.getLastActiveWhenClosed": getLastActiveWhenClosed,
        "PropNames.BlockingElementReturn.getLastActiveWhenOpen": getLastActiveWhenOpen,
        "PropNames.ActiveElementParameters.onLastActiveElementChange": onLastActiveElementChange,
        ...void1
    } = useBlockingElement({
        "PropNames.BlockingElementParameters.enabled": trapActive && !onlyMoveFocus,
        "PropNames.BlockingElementParameters.getTarget": getElement
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);

    return {
        props: useTagProps({ "aria-modal": trapActive ? "true" : undefined } as ElementProps<PopupElement>, "data-focus-trap")
    };
})

/**
 * Returns the first focusable element contained within the given node, or null if none are found.
 */
export function findFirstFocusable<T extends Node>(element: T): T | null {
    return findFirstCondition<T>(element, node => node instanceof Element && isFocusable(node));
}

/**
 * Returns the first tabbable element contained within the given node, or null if none are found.
 */
export function findFirstTabbable<T extends Node>(element: T): T | null {
    return findFirstCondition<T>(element, node => node instanceof Element && isTabbable(node));
}

function findFirstCondition<T extends Node>(element: T, filter: (node: Node) => boolean): T | null {
    if (element && filter(element))
        return element;

    console.assert(!!element);
    element ??= document.body as Node as T;
    const treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => (filter(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP) })
    const firstFocusable = treeWalker.firstChild() as T | null;
    return firstFocusable;
}
