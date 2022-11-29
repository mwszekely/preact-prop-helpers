import { h } from "preact";
import { useEffect } from "preact/hooks";
import { isFocusable } from "tabbable";
import { useBlockingElement } from "../dom-helpers/use-blocking-element";
import { useRefElement, UseRefElementParameters, UseRefElementReturnType } from "../dom-helpers/use-ref-element";
import { useStableCallback } from "../preact-extensions/use-stable-callback";

export interface UseFocusTrapParameters<SourceElement extends Element | null, PopupElement extends Element> extends UseRefElementParameters<PopupElement> {
    focusTrapParameters: {
        /**
         * Whether or not the focus trap is currently active (or, when used as part of a larger component, whether it is activatable)
         */
        trapActive: boolean;


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
         * @param lastFocused 
         */
        focusOpener(lastFocused: SourceElement | null): void;
    }
}

export interface UseFocusTrapReturnType<E extends Element> extends UseRefElementReturnType<E> {
    focusTrapReturn: { propsUnstable: h.JSX.HTMLAttributes<E> }
}

//const elementsToRestoreFocusTo = new Map<Element | null, (Node & HTMLOrSVGElement)>();

export function useFocusTrap<SourceElement extends Element | null, PopupElement extends Element>({
    focusTrapParameters: { trapActive, focusPopup: focusSelfUnstable, focusOpener: focusOpenerUnstable },
    refElementParameters: { onElementChange, ...refElementParameters }
}: UseFocusTrapParameters<SourceElement, PopupElement>): UseFocusTrapReturnType<PopupElement> {

    type E = PopupElement;

    const focusSelf = useStableCallback(focusSelfUnstable);
    const focusOpener = useStableCallback(focusOpenerUnstable);

    useEffect(() => {
        if (trapActive) {
            const top = getTop();
            const lastFocusedInThisComponent = getLastActiveWhenOpen();
            
            if (false && lastFocusedInThisComponent && lastFocusedInThisComponent?.isConnected) {
                focusSelf(lastFocusedInThisComponent as any as PopupElement, () => lastFocusedInThisComponent);
            }
            else {
                console.assert(!!top);
                if (top)
                    focusSelf(top as any as PopupElement, () => findFirstFocusable(top));
            }
        }
        else {
            const lastActive = getLastActiveWhenClosed();
            if (lastActive)
                focusOpener(lastActive as any as SourceElement);
        }
    }, [trapActive])

    const { refElementReturn } = useRefElement<E>({
        refElementParameters: { onElementChange, ...refElementParameters }
    })
    const { getElement } = refElementReturn;

    const { getTop, getLastActiveWhenClosed, getLastActiveWhenOpen } = useBlockingElement(trapActive, getElement);


    return {
        refElementReturn,
        focusTrapReturn: { propsUnstable: { "aria-modal": trapActive ? "true" : undefined } as h.JSX.HTMLAttributes<E> }
    };
}

/**
 * Returns the first focusable element contained within the given node, or null if none are found.
 * @param element 
 * @returns 
 */
export function findFirstFocusable(element: Node) {
    const treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => (node instanceof Element && isFocusable(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP) })
    const firstFocusable = treeWalker.firstChild() as (Element & HTMLOrSVGElement) | null;
    return firstFocusable;
}

