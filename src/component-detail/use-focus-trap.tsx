import { h } from "preact";
import { useCallback, useLayoutEffect } from "preact/hooks";
import { isFocusable } from "tabbable";
import { useActiveElement, UseActiveElementParameters, UseActiveElementReturnType } from "../observers/use-active-element";
import { getTopElement, useBlockingElement } from "../dom-helpers/use-blocking-element";
import { getDocument } from "../dom-helpers/use-document-class";
import { useRefElement, UseRefElementParameters, UseRefElementReturnType } from "../dom-helpers/use-ref-element";
import { useStableCallback } from "../preact-extensions/use-stable-callback";

export interface UseFocusTrapParameters<SourceElement extends Element, PopupElement extends Element> extends UseRefElementParameters<PopupElement>, UseActiveElementParameters {
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
        focusSelf(e: PopupElement): void;

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

export interface UseFocusTrapReturnType<E extends Element> extends UseRefElementReturnType<E>, UseActiveElementReturnType {
    focusTrapReturn: { propsUnstable: h.JSX.HTMLAttributes<E> }
}

const elementsToRestoreFocusTo = new Map<Element | null, (Node & HTMLOrSVGElement)>();

export function useFocusTrap<SourceElement extends Element, PopupElement extends Element>({
    focusTrapParameters: { trapActive, focusSelf: focusSelfUnstable, focusOpener: focusOpenerUnstable },
    activeElementParameters,
    refElementParameters: { onElementChange, ...refElementParameters }
}: UseFocusTrapParameters<SourceElement, PopupElement>): UseFocusTrapReturnType<PopupElement> {

    type E = PopupElement;

    const focusSelf = useStableCallback(focusSelfUnstable);
    const focusOpener = useStableCallback(focusOpenerUnstable);

    const handleActiveChange = useCallback((trapActive: boolean, element: E | null) => {
        if (trapActive && element) {

            let rafHandle = requestAnimationFrame(() => {
                // TODO: This extra queueMicrotask is needed for
                // ...reasons?
                queueMicrotask(() => {
                    focusSelf(element);
                    //findFirstFocusable(element)?.focus();
                    rafHandle = 0;
                })
            })

            return () => {
                if (rafHandle)
                    cancelAnimationFrame(rafHandle);
            };
        }
        else if (element) {

            // Restore the focus to the element
            // that has returned to the top of the stack
            let rafHandle = requestAnimationFrame(() => {
                queueMicrotask(() => {
                    let elementToFocus = elementsToRestoreFocusTo.get(getTopElement());
                    rafHandle = 0;
                    focusOpener((elementToFocus ?? null) as SourceElement | null);
                });
            });

            return () => {
                if (rafHandle)
                    cancelAnimationFrame(rafHandle);
            };
        }
    }, []);

    const { refElementReturn } = useRefElement<E>({
        refElementParameters: {
            onElementChange: useStableCallback((element: E | null, p: E | null | undefined) => {
                handleActiveChange(trapActive, element);
                onElementChange?.(element, p);
            }),
            ...refElementParameters
        }
    })
    const { activeElementReturn } = useActiveElement({ activeElementParameters });
    const { getElement } = refElementReturn;
    const { getLastActiveElement } = activeElementReturn;


    // When the trap becomes active, before we let the blockingElements hook run,
    // keep track of whatever's currently focused and save it.
    useLayoutEffect(() => {
        const element = getElement();
        if (trapActive && element) {
            const document = getDocument(element);

            // Save the currently focused element
            // to whatever's currently at the top of the stack
            elementsToRestoreFocusTo.set(getTopElement(), (getLastActiveElement() as (Element & HTMLOrSVGElement)) ?? document.body);
        }
    }, [trapActive]);

    useBlockingElement(trapActive, getElement);

    /**
     * Any time we activate or deactivate the trap,
     * change focus to something else (something in
     * the trap if it's active, or whatever we've
     * tracked in elementsToRestoreFocusTo if not)
     */
    useLayoutEffect(() => {
        handleActiveChange(trapActive, getElement());
    }, [trapActive]);


    return {
        activeElementReturn,
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

