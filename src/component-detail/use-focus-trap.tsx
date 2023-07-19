import { isFocusable, isTabbable } from "tabbable";
import { useBlockingElement } from "../dom-helpers/use-blocking-element.js";
import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { TargetedPick, useEffect } from "../util/lib.js";
import { ElementProps } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";

export interface UseFocusTrapParametersSelf<SourceElement extends Element | null, PopupElement extends Element> {
    /**
     * Whether or not the focus trap is currently active (or, when used as part of a larger component, whether it is activatable)
     */
    trapActive: boolean;

    /**
     * If true, focus is not trapped but only moved to the new element. 
     */
    onlyMoveFocus: boolean;


    /**
     * When a modal popup opens, focus must be sent to the first element that makes sense.
     * 
     * For example, if it's a confirmation dialog about deleting something, it's best to send focus to the "cancel" button.
     * 
     * In other cases, it makes more sense to focus the dialog's title, first interactive element, etc.
     * 
     * This is highly subjective and *almost ALWAYS* more complicated than just "focus the whole dialog element itself",
     * because that only works if the dialog ***only contains text***, which is uncommon.
     * 
     * If you really, really, ***genuinely*** cannot determine what should be done in your use case,
     * first of all, keep trying, really,
     * then as a very last resort, use `findFirstFocusable`, and then if nothing's found focus the body.  
     * Just please, please make sure that whatever that first focusable is **isn't** a destructive action, at the very least. 
     */
    focusPopup(e: PopupElement, findFirstFocusable: () => HTMLOrSVGElement | null): void;

    /**
     * When the focus trap has deactivated, focus must be sent back to the element that opened it.
     * 
     * This is tracked for you; by default, just call `lastFocused?.focus()`, but you can also override this behavior
     * and just do whatever you want with any element.  
     * @param lastFocused - The element that was focused before the modal was opened
     */
    focusOpener(lastFocused: SourceElement | null): void;
}

export interface UseFocusTrapParameters<SourceElement extends Element | null, PopupElement extends Element> extends TargetedPick<UseRefElementReturnType<NonNullable<PopupElement>>, "refElementReturn", "getElement"> {
    focusTrapParameters: UseFocusTrapParametersSelf<SourceElement, PopupElement>;
}

export interface UseFocusTrapReturnType<E extends Element> {
    props: ElementProps<E>;
}

/**
 * @compositeParams
 */
export function useFocusTrap<SourceElement extends Element | null, PopupElement extends Element>({
    focusTrapParameters: { onlyMoveFocus, trapActive, focusPopup: focusSelfUnstable, focusOpener: focusOpenerUnstable },
    refElementReturn
}: UseFocusTrapParameters<SourceElement, PopupElement>): UseFocusTrapReturnType<PopupElement> {
    monitorCallCount(useFocusTrap);

    type E = PopupElement;

    const focusSelf = useStableCallback(focusSelfUnstable);
    const focusOpener = useStableCallback(focusOpenerUnstable);

    useEffect(() => {
        if (trapActive) {
            let top = getTop();
            const lastFocusedInThisComponent = getLastActiveWhenOpen();

            if (false && lastFocusedInThisComponent && lastFocusedInThisComponent?.isConnected) {
                focusSelf(lastFocusedInThisComponent as any as PopupElement, () => lastFocusedInThisComponent);
            }
            else {
                top ??= refElementReturn.getElement() as unknown as HTMLElement;
                console.assert(!!top);
                if (top)
                    focusSelf(top as any as PopupElement, () => findFirstFocusable(top!));
            }
        }
        else {
            const lastActive = getLastActiveWhenClosed();
            let currentFocus = document.activeElement;

            // Restore focus to whatever caused this trap to trigger,
            // but only if it wasn't caused by explicitly focusing something else 
            // (generally if `onlyMoveFocus` is true)
            let top = refElementReturn.getElement();
            if (currentFocus == document.body || currentFocus == null || top == currentFocus || top?.contains(currentFocus)) {
                if (lastActive)
                    focusOpener(lastActive as any as SourceElement);
            }
        }
    }, [trapActive]);

    const { getElement } = refElementReturn;

    const { getTop, getLastActiveWhenClosed, getLastActiveWhenOpen } = useBlockingElement(trapActive && !onlyMoveFocus, getElement);


    return {
        props: { "aria-modal": trapActive ? "true" : undefined } as ElementProps<E>
    };
}

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
