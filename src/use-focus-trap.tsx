import { h } from "preact";
import { useLayoutEffect } from "preact/hooks";
import { isFocusable } from "tabbable";
import { useActiveElement } from "./use-active-element";
import { getTopElement, useBlockingElement } from "./use-blocking-element";
import { MergedProps, useMergedProps } from "./use-merged-props";
import { useRefElement, UseRefElementPropsReturnType, UseRefElementReturnType } from "./use-ref-element";
import { useState } from "./use-state";

export interface UseFocusTrapParameters { trapActive: boolean; }

export interface UseFocusTrapReturnType<E extends Node> extends Omit<UseRefElementReturnType<E>, "useRefElementProps"> {
    useFocusTrapProps: UseFocusTrapProps<E>;
}


export interface UseFocusTrapPropsParameters<E extends Node> extends h.JSX.HTMLAttributes<E> { }
export type UseFocusTrapPropsReturnType<E extends Node, P extends h.JSX.HTMLAttributes<E>> = MergedProps<E, {}, UseRefElementPropsReturnType<E, P>>;

type UseFocusTrapProps<E extends Node> = <P extends UseFocusTrapPropsParameters<E>>(props: P) => UseFocusTrapPropsReturnType<E, P>;



const elementsToRestoreFocusTo = new Map<Element | null, (Node & HTMLOrSVGElement)>();

export function useFocusTrap<E extends HTMLElement>({ trapActive }: UseFocusTrapParameters): UseFocusTrapReturnType<E> {
    const { element, useRefElementProps, getElement } = useRefElement<E>();
    const [lastActiveElement, setLastActiveElement, getLastActiveElement] = useState<Node | null>(null);
    useActiveElement({ setLastActiveElement });


    // When the trap becomes active, before we let the blockingElements hook run,
    // keep track of whatever's currently focused and save it.
    useLayoutEffect(() => {
        if (trapActive && element) {
            // Save the currently focused element
            // to whatever's currently at the top of the stack
            elementsToRestoreFocusTo.set(getTopElement(), (getLastActiveElement() as (Node & HTMLOrSVGElement)) ?? document.body);
        }
    }, [trapActive, element])

    useBlockingElement(trapActive ? element : null);

    /**
     * Any time we activate or deactivate the trap,
     * change focus to something else (something in
     * the trap if it's active, or whatever we've
     * tracked in elementsToRestoreFocusTo if not)
     */
    useLayoutEffect(() => {
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
    }, [trapActive, element]);

    const useFocusTrapProps: UseFocusTrapProps<E> = (<P extends UseFocusTrapPropsParameters<E>>(props: P): UseFocusTrapPropsReturnType<E, P> => {
        return useMergedProps<E>()({ "aria-modal": trapActive? "true" : undefined } as {}, useRefElementProps(props));
    });


    return {
        useFocusTrapProps,
        element,
        getElement
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

