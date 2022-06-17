import { h, RefCallback } from "preact";
import { useCallback } from "preact/hooks";
import { MergedProps, useMergedProps } from "./use-merged-props";
import { OnPassiveStateChange, useEnsureStability, usePassiveState } from "./use-passive-state";

export type UseRefElementPropsReturnType<T extends EventTarget, P extends {}> = MergedProps<T, P, {}>;

export type UseRefElementProps<T extends EventTarget> = <P extends {}>(props: P) => UseRefElementPropsReturnType<T, P>;

export interface UseRefElementReturnType<T extends EventTarget> {
    getElement: () => T | null;
    useRefElementProps: UseRefElementProps<T>;
}

export interface UseRefElementParameters<T> {
    onElementChange?: OnPassiveStateChange<T | null>;
    onMount?: (element: T) => void;
    onUnmount?: (element: T) => void;
}
function returnNull() { return null; }
/**
 * Allows accessing the element a ref references as soon as it does so.
 * *This hook itself returns a hook*--useRefElementProps modifies the props that you were going to pass to an HTMLElement, 
 * adding a RefCallback and merging it with any existing ref that existed on the props.
 * 
 * Don't forget to provide the Element as the type argument!
 * 
 * @returns The element, and the sub-hook that makes it retrievable.
 */
export function useRefElement<T extends EventTarget>(args?: UseRefElementParameters<T>): UseRefElementReturnType<T> {
    const { onElementChange, onMount, onUnmount } = (args ?? {});

    useEnsureStability("useRefElement", onElementChange, onMount, onUnmount);

    // Called (indirectly) by the ref that the element receives.
    const handler = useCallback<OnPassiveStateChange<T | null>>((e, prevValue) => {
        onElementChange?.(e, prevValue);
        if (prevValue)
            onUnmount?.(prevValue!);

        if (e)
            onMount?.(e);
    }, []);

    // Let us store the actual (reference to) the element we capture
    const [getElement, setElement] = usePassiveState<T | null>(handler, returnNull);

    // Create a RefCallback that's fired when mounted 
    // and that notifies us of our element when we have it
    const myRef: RefCallback<T> = useCallback((e) => {
        if (e)
            setElement(() => e);
    }, []);

    const useRefElementProps = useCallback<UseRefElementProps<T>>(<P extends {}>(props: P): UseRefElementPropsReturnType<T, P> => useMergedProps<T>()({ ref: myRef }, props), []);

    // Return both the element and the hook that modifies 
    // the props and allows us to actually find the element
    return {
        useRefElementProps,
        getElement
    }
}
