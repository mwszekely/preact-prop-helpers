import { h } from "preact";
import { useCallback, useLayoutEffect } from "preact/hooks";
import { isFocusable } from "tabbable";
import { useActiveElement, UseActiveElementParameters, UseActiveElementReturnType } from "./use-active-element";
import { getTopElement, useBlockingElement } from "./use-blocking-element";
import { getDocument } from "./use-document-class";
import { useMergedProps } from "./use-merged-props";
import { useRefElement, UseRefElementParameters, UseRefElementReturnType } from "./use-ref-element";
import { useStableCallback } from "./use-stable-callback";

/*
export function useFocusTrapProps<E extends Element>(r: UseFocusTrapReturnType<E>, ...otherProps: h.JSX.HTMLAttributes<E>[]): h.JSX.HTMLAttributes<E>[] {
    return [r.focusTrap.propsUnstable, ...otherProps];
}*/

export interface UseFocusTrapParameters<E extends Element> extends UseRefElementParameters<E>, UseActiveElementParameters { focusTrapParameters: { trapActive: boolean; } }

export interface UseFocusTrapReturnType<E extends Element> extends UseRefElementReturnType<E>, UseActiveElementReturnType {
    focusTrap: { propsUnstable: h.JSX.HTMLAttributes<E> }
}

const elementsToRestoreFocusTo = new Map<Element | null, (Node & HTMLOrSVGElement)>();

export function useFocusTrap<E extends Element>({
    focusTrapParameters: { trapActive },
    activeElementParameters,
    refElementParameters: { onElementChange, ...refElementParameters }
}: UseFocusTrapParameters<E>): UseFocusTrapReturnType<E> {

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
        focusTrap: { propsUnstable: { "aria-modal": trapActive ? "true" : undefined } as h.JSX.HTMLAttributes<E> }
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

