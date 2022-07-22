import { h } from "preact";
import { useCallback } from "preact/hooks";
import { useMergedProps } from "./use-merged-props";
import { OnPassiveStateChange, returnNull, useEnsureStability, usePassiveState } from "./use-passive-state";

export interface UseRefElementReturnType<T extends EventTarget> {
    getElement(): T | null;
    useRefElementProps(props: h.JSX.HTMLAttributes<T>): h.JSX.HTMLAttributes<T>;
}

export interface UseRefElementParameters<T> {
    onElementChange?: OnPassiveStateChange<T | null>;
    onMount?: (element: T) => void;
    onUnmount?: (element: T) => void;
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
export function useRefElement<T extends EventTarget>(args?: UseRefElementParameters<T>): UseRefElementReturnType<T> {
    const { onElementChange, onMount, onUnmount } = (args ?? {});

    useEnsureStability("useRefElement", onElementChange, onMount, onUnmount);

    // Called (indirectly) by the ref that the element receives.
    const handler = useCallback<OnPassiveStateChange<T | null>>((e, prevValue) => {
        const cleanup = onElementChange?.(e, prevValue);
        if (prevValue)
            onUnmount?.(prevValue!);

        if (e)
            onMount?.(e);

        return cleanup;
    }, []);

    // Let us store the actual (reference to) the element we capture
    const [getElement, setElement] = usePassiveState<T | null>(handler, returnNull);
    const useRefElementProps = useCallback<UseRefElementReturnType<T>["useRefElementProps"]>((props) => useMergedProps<T>({ ref: setElement }, props), []);

    // Return both the element and the hook that modifies 
    // the props and allows us to actually find the element
    return {
        useRefElementProps,
        getElement
    }
}
