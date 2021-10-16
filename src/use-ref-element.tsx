import { h, RefCallback } from "preact";
import { useCallback } from "preact/hooks";
import { MergedProps, useMergedProps } from "./use-merged-props";
import { useState } from "./use-state";

export type UseRefElementPropsReturnType<T, P extends {}> = P;

export type UseRefElementProps<T> = <P extends {}>(props: P) => UseRefElementPropsReturnType<T, P>;

export interface UseRefElementReturnType<T> {
    element: T | null;
    getElement: () => T | null;
    useRefElementProps: UseRefElementProps<T>;
}

/**
 * Allows accessing the element a ref references as soon as it does so.
 * *This hook itself returns a hook*--useRefElementProps modifies the props that you were going to pass to an HTMLElement, 
 * adding a RefCallback and merging it with any existing ref that existed on the props.
 * 
 * Don't forget to provide the Element as the type argument!
 * 
 * @returns The element, and the sub-hook that makes it retrievable.
 */
export function useRefElement<T>(): UseRefElementReturnType<T> {
    // Let us store the actual (reference to) the element we capture
    const [element, setElement, getElement] = useState<T | null>(null);

    // Create a RefCallback that's fired when mounted 
    // and that notifies us of our element when we have it
    const myRef: RefCallback<T> = useCallback((e) => {
        if (e)
            setElement(() => e);
    }, []);

    const useRefElementProps = useCallback<UseRefElementProps<T>>(<P extends {}>(props: P): UseRefElementPropsReturnType<T, P> => useMergedProps<any>()({ ref: myRef }, props) as P, []);

    // Return both the element and the hook that modifies 
    // the props and allows us to actually find the element
    return {
        useRefElementProps,
        element,
        getElement
    }
}

function test<T extends HTMLElement>() {
    function foo<P extends h.JSX.HTMLAttributes<T>>(props: P) {

        const { element, useRefElementProps } = useRefElement<T>();
        const p1 = useRefElementProps(props);
        if (p1.style == undefined) {

        }
        else if (typeof p1.style === "string") {}
        else {
            p1.style?.backgroundColor;
        }

    }
}


