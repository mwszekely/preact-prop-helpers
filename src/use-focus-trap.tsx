import { h } from "preact";
import { useCallback, useLayoutEffect } from "preact/hooks";
import { isFocusable } from "tabbable";
import { useActiveElement } from "./use-active-element";
import { getTopElement, useBlockingElement } from "./use-blocking-element";
import { getDocument } from "./use-document-class";
import { useMergedProps } from "./use-merged-props";
import { useRefElement, UseRefElementReturnType } from "./use-ref-element";
import { useStableCallback } from "./use-stable-callback";

export interface UseFocusTrapParameters { trapActive: boolean; }

export interface UseFocusTrapReturnType<E extends Element> extends Omit<UseRefElementReturnType<E>, "props" | "useProps"> {

    props: UseRefElementReturnType<E>["props"] & {
        focusTrapProps: h.JSX.HTMLAttributes<E>;
    };
}

const elementsToRestoreFocusTo = new Map<Element | null, (Node & HTMLOrSVGElement)>();

export function useFocusTrap<E extends Element>({ trapActive }: UseFocusTrapParameters): UseFocusTrapReturnType<E> {

    const handleActiveChange = useCallback((trapActive: boolean, element: E | null) => {
        if (trapActive && element) {

            let rafHandle = requestAnimationFrame(() => {
                // TODO: This extra queueMicrotask is needed for
                // ...reasons?
                queueMicrotask(() => {
                    findFirstFocusable(element)?.focus();
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
                    elementsToRestoreFocusTo.get(getTopElement())?.focus();
                    rafHandle = 0;
                });
            });

            return () => {
                if (rafHandle)
                    cancelAnimationFrame(rafHandle);
            };
        }
    }, []);

    const { getElement, props: otherProps } = useRefElement<E>({ onElementChange: useStableCallback((element: E | null) => handleActiveChange(trapActive, element)) })
    const { getLastActiveElement } = useActiveElement({ getDocument: useStableCallback(() => getElement()?.ownerDocument ?? window.document) });


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
        getElement,
        props: {
            focusTrapProps: { "aria-modal": trapActive ? "true" : undefined } as h.JSX.HTMLAttributes<E>,
            ...otherProps
        }
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

