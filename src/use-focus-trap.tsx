import { useLayoutEffect } from "preact/hooks";
import { useBlockingElement } from "./use-blocking-element";
import { ManagedChildInfo } from "./use-child-manager";
import { MergedProps, useMergedProps } from "./use-merged-props";
import { useRefElement, UseRefElementPropsParameters, UseRefElementPropsReturnType, UseRefElementReturnType } from "./use-ref-element";
import { useState } from "./use-state";


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
}


export interface UseFocusTrapPropsParameters<E extends Node> extends UseRefElementPropsParameters<E> { }
export type UseFocusTrapPropsReturnType<E extends Node, P extends UseRefElementPropsParameters<E>> = MergedProps<E, {}, UseRefElementPropsReturnType<E, P>>;

type UseFocusTrapProps<E extends Node> = <P extends UseFocusTrapPropsParameters<E>>({ ref, ...rest }: P) => UseFocusTrapPropsReturnType<E, P>;


// Keep track of the last focused element (not including the body element)
// Used by the focus trap to know what to restore to.


export function useFocusTrap<E extends HTMLElement>({ trapActive }: UseFocusTrapParameters): UseFocusTrapReturnType<E> {
    const { element, useRefElementProps, getElement } = useRefElement<E>();


    let active = (trapActive);
    useBlockingElement(active ? element : null);

    const useFocusTrapProps: UseFocusTrapProps<E> = (<P extends UseFocusTrapPropsParameters<E>>(props: P): UseFocusTrapPropsReturnType<E, P> => {
        return useMergedProps<E>()({ "aria-modal": active? "true" : undefined } as {}, useRefElementProps(props));
    });


    return {
        useFocusTrapProps,
        element,
        getElement
    };
}




/**
 * We need to keep a sorted list of elements so that we always know what
 * the first and last element are, even if an arbitrary child
 * unmounts itself at an arbitrary time.
 *
 * This is separate from the list of children we get back from `useChildManager`
 * because it's nowhere near worth the effort to keep that list sorted
 * relative to the document order, especially since we need to wait until
 * we've rendered at least once to even have a shot at trying that.
 */
/*const elementByDocumentOrder = useRef<((HTMLOrSVGElement & Node) | null)[]>([]);
const [sortedElementCount, setSortedElementCount] = useState(0);

const [overridden, setOverridden, getOverridden] = useState(false);
const trapActive = (overridden ? false : activeIfNotOverridden);
const getTrapActive = useStableGetter(trapActive);
const { childCount, managedChildren, useManagedChild } = useChildManager<Node, FocusTrapChildInfo & { index: string, element: Node | null }>();
//const firstFocusableChild = useRef<Foo | null>(null);
//const lastFocusableChild = useRef<Foo | null>(null);

/*const addFocusableChild = useCallback((child: Node) => {
    if (firstFocusableChild.current == null) {
        firstFocusableChild.current = { node: child, prev: null, next: lastFocusableChild.current?.node ?? null };
    }
    else {
        let preceding = !!(firstFocusableChild.current.compareDocumentPosition(child) & Node.DOCUMENT_POSITION_PRECEDING);
        if (preceding)
            firstFocusableChild.current = child;
    }

    if (lastFocusableChild.current == null) {
        lastFocusableChild.current = {node: child, next: null, prev: firstf};
    }
    else {
        let following = !!(lastFocusableChild.current.compareDocumentPosition(child) & Node.DOCUMENT_POSITION_FOLLOWING);
        if (following)
            lastFocusableChild.current = child;
    }
}, []);

const removeFocusableChild = useCallback((child: Node) => {
    if (firstFocusableChild.current == null) {
        firstFocusableChild.current = child;
    }
    else {
        let preceding = !!(firstFocusableChild.current.compareDocumentPosition(child) & Node.DOCUMENT_POSITION_PRECEDING);
        if (preceding)
            firstFocusableChild.current = child;
    }

    if (lastFocusableChild.current == null) {
        lastFocusableChild.current = child;
    }
    else {
        let following = !!(lastFocusableChild.current.compareDocumentPosition(child) & Node.DOCUMENT_POSITION_FOLLOWING);
        if (following)
            lastFocusableChild.current = child;
    }
}, []);*/

/*const useFocusTrapProps = useCallback<UseFocusTrapProps<E>>(<P extends UseFocusTrapPropsParameters<E>>(props: P): UseFocusTrapPropsReturnType<E, P> => {
    const { element, useRefElementProps, getElement } = useRefElement<E>();
    const { useFocusProps, focusedInner } = useHasFocus<E>();


    useBlockingElement(trapActive? element : null);
    const hasFirstElementToFocus = !!(elementByDocumentOrder.current[0])
    useLayoutEffect(() => {
        if (hasFirstElementToFocus && trapActive) {
            elementByDocumentOrder.current[0]?.focus();
            const element = getElement();
            if (element){
                return applyInverseInert(element);
            }

        }
    }, [trapActive, hasFirstElementToFocus]);

    return useMergedProps({ "aria-modal": trapActive ? "true" : undefined } as {}, useFocusProps(useRefElementProps(props)));
}, [trapActive]);

useLayoutEffect(() => {
    if (activeIfNotOverridden) {
        const { handle, previous } = onFocusTrapEnable({ setOverridden });
        previous?.setOverridden(true);

        return () => {
            onFocusTrapDisable(handle)?.setOverridden(false);
        }
    }
}, [activeIfNotOverridden])


const useFocusTrapFocusable = useCallback<UseFocusTrapFocusable>(<ChildElement extends (Node & HTMLOrSVGElement)>(info: FocusTrapChildInfo) => {

    const { element, useRefElementProps } = useRefElement<ChildElement>();



    useLayoutEffect(() => {
        if (element) {

            // Find where we should be inserted
            let index = binarySearch(elementByDocumentOrder.current, element, comparator);
            if (index < 0)
                index = -index - 1;
            elementByDocumentOrder.current.splice(index, 0, element);
            setSortedElementCount(c => ++c);

            return () => {
                // Find where we currently are in the array
                // (this is likely to have changed since we were added)
                let index = binarySearch(elementByDocumentOrder.current, element, comparator);
                elementByDocumentOrder.current.splice(index, 1);
                setSortedElementCount(c => --c);
            }

        }
    }, [element])


    const index = generateRandomId();
    useManagedChild({ ...info, index, element });

    return {
        useFocusTrapFocusableProps: useCallback<UseFocusTrapFocusableProps<ChildElement>>(<P extends UseFocusTrapFocusablePropsParameters<ChildElement>>(p: P): UseFocusTrapFocusablePropsReturnType<ChildElement, P> => {

            const onKeyDown = useCallback((e: KeyboardEvent) => {
                return;
                /*const isTab = (e.key === "Tab");
                if (getTrapActive() && isTab) {
                    const isFirst = (element == elementByDocumentOrder.current[0]);
                    const isLast = (element == elementByDocumentOrder.current[elementByDocumentOrder.current.length - 1]);
                    let isNextNav = (!e.shiftKey);
                    let isPrevNav = (e.shiftKey);

                    if (isFirst && isPrevNav) {
                        e.preventDefault();
                        elementByDocumentOrder.current[elementByDocumentOrder.current.length - 1]!.focus();
                    }
                    else if (isLast && isNextNav) {
                        e.preventDefault();
                        elementByDocumentOrder.current[0]!.focus();
                    }
                }*\/
            }, [element]);

            return useMergedProps(useRefElementProps({ onKeyDown }), p);
        }, [element, useRefElementProps, trapActive])
    }


}, [useManagedChild])*/































/*
function isFocusable<T extends HTMLInputElement | HTMLAnchorElement | SVGElement | MathMLElement>(element: T) {
    if (element.tabIndex > 0 || (element.tabIndex === 0 && element.getAttribute("tabIndex") !== null)) {
        return true;
    }

    if ("disabled" in element && element.disabled)
        return false;

    switch (element.nodeName) {
        case "A":
            return !!(element as HTMLAnchorElement).href && (element as HTMLAnchorElement).rel != 'ignore';
        case "INPUT":
            return (element as HTMLInputElement).type != 'hidden' && (element as HTMLInputElement).type != 'file';
        case "BUTTON":
        case "SELECT":
        case "TEXTAREA":
            return true;
        default:
            return false;
    }
}

function attemptFocus(child: HTMLElement | SVGElement | MathMLElement) {
    if (!isFocusable(child))
        return false;

    try {
        child.focus();
    }
}

function focusFirstDescendant<T extends Node>(element: T) {
    for (let i = 0; i < element.childNodes.length; ++i) {
        let child = element.childNodes[i];

    }
}
*/