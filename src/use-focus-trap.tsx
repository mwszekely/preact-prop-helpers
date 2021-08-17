import { useLayoutEffect } from "preact/hooks";
import { isFocusable } from "tabbable";
import { useActiveElement } from "./use-active-element";
import { getTopElement, useBlockingElement } from "./use-blocking-element";
import { ManagedChildInfo } from "./use-child-manager";
import { MergedProps, useMergedProps } from "./use-merged-props";
import { useRefElement, UseRefElementPropsParameters, UseRefElementPropsReturnType, UseRefElementReturnType } from "./use-ref-element";


export interface FocusTrapChildInfo extends Omit<ManagedChildInfo<string>, "index"> {
    /**
     * If true, the element will not be able to receive focus via the keyboard, 
     * but if it is the first "focusable" descendant, then it will still receive focus on mount.  
     * This will make it "first" in the tabIndex order, but it won't actually be focusable.
     * 
     * This is extremely useful if there are no elements in the focus trap that receive
     * focus in the traditional sense (e.g. an alert without a close button where you
     * just click the backdrop to dismiss it) or if the first element that would normally receive
     * focus isn't at the top and would result in the page scrolling immediately on load.
     */
    inert?: boolean;
}

export interface UseFocusTrapParameters { trapActive: boolean; }

export interface UseFocusTrapReturnType<E extends Node> extends Omit<UseRefElementReturnType<E>, "useRefElementProps"> {
    useFocusTrapProps: UseFocusTrapProps<E>;
    //useFocusTrapFocusable: UseFocusTrapFocusable;
}

/*interface UseFocusTrapFocusableReturnType<E extends Node> {
    useFocusTrapFocusableProps: UseFocusTrapFocusableProps<E>;
}*/

export interface UseFocusTrapPropsParameters<E extends Node> extends UseRefElementPropsParameters<E> { }
export type UseFocusTrapPropsReturnType<E extends Node, P extends UseRefElementPropsParameters<E>> = MergedProps<E, {}, UseRefElementPropsReturnType<E, P>>;

//export interface UseFocusTrapFocusableParameters<E extends Node> extends UseRefElementPropsParameters<E> { }
//export type UseFocusTrapFocusable = <ChildElement extends (Node & HTMLOrSVGElement), P extends FocusTrapChildInfo>(props: P) => UseFocusTrapFocusableReturnType<ChildElement>;
//export type UseFocusTrapFocusableProps<ChildElement extends Node> = <P extends UseFocusTrapFocusablePropsParameters<ChildElement>>(props: P) => UseFocusTrapFocusablePropsReturnType<ChildElement, P>;
//export type UseFocusTrapFocusablePropsParameters<ChildElement extends Node> = UseRefElementPropsParameters<ChildElement>;
//export type UseFocusTrapFocusablePropsReturnType<ChildElement extends Node, P extends UseFocusTrapFocusablePropsParameters<ChildElement>> = MergedProps<UseRefElementPropsReturnType<ChildElement, { onKeyDown: (e: KeyboardEvent) => void; }>, P>;

type UseFocusTrapProps<E extends Node> = <P extends UseFocusTrapPropsParameters<E>>({ ref, ...rest }: P) => UseFocusTrapPropsReturnType<E, P>;



const elementsToRestoreFocusTo = new Map<Element | null, (Node & HTMLOrSVGElement)>();

export function useFocusTrap<E extends HTMLElement>({ trapActive }: UseFocusTrapParameters): UseFocusTrapReturnType<E> {
    const { element, useRefElementProps, getElement } = useRefElement<E>();
    const { getLastActiveElement } = useActiveElement();


    // When the trap becomes active, before we let the blockingElements hook run,
    // keep track of whatever's currently focused and save it.
    useLayoutEffect(() => {
        if (trapActive && element) {
            // Save the currently focused element
            // to whatever's currently at the top of the stack
            elementsToRestoreFocusTo.set(getTopElement(), getLastActiveElement() ?? document.body);
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

