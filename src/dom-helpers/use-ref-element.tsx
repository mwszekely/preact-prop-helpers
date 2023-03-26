import { useCallback, useRef } from "preact/hooks";
import { OnPassiveStateChange, returnNull, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { ElementProps } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";

export interface UseRefElementReturnType<T extends EventTarget> {
    propsStable: ElementProps<T>;

    refElementReturn: {
        /** **STABLE** */
        getElement(): T | null;
    }
}

export interface UseRefElementParameters<T> {
    /**
     * For the sake of convenience,
     * this one is optional, since using this hook is so common,
     * but using its parameter options is so uncommon, and it's
     * absense isn't usually because it was forgotten, it's because
     * it doesn't matter.
     */
    refElementParameters?: {
        onElementChange?: OnPassiveStateChange<T | null, never>;
        onMount?: (element: T) => void;
        onUnmount?: (element: T) => void;
    }
}


/*
export function useRefElementProps<E extends Element>(r: UseRefElementReturnType<E>, ...otherProps: ElementProps<E>[]): ElementProps<E>[] {
    return [r.refElementReturn.propsStable, ...otherProps];
}*/

/**
 * Allows accessing the element a ref references as soon as it does so.
 * *This hook itself returns a hook*--useRefElementProps modifies the props that you were going to pass to an HTMLElement, 
 * adding a RefCallback and merging it with any existing ref that existed on the props.
 * 
 * Don't forget to provide the Element as the type argument!
 * 
 * @returns The element, and the sub-hook that makes it retrievable.
 */
export function useRefElement<T extends EventTarget>(args: UseRefElementParameters<T>): UseRefElementReturnType<T> {
    monitorCallCount(useRefElement);

    const { onElementChange, onMount, onUnmount } = (args.refElementParameters || {});
    useEnsureStability("useRefElement", onElementChange, onMount, onUnmount);

    // Called (indirectly) by the ref that the element receives.
    const handler = useCallback<OnPassiveStateChange<T | null, never>>((e, prevValue) => {
        const cleanup = onElementChange?.(e, prevValue);
        if (prevValue)
            onUnmount?.(prevValue!);

        if (e)
            onMount?.(e);

        return cleanup;
    }, []);

    // Let us store the actual (reference to) the element we capture
    const [getElement, setElement] = usePassiveState<T | null, never>(handler, returnNull, runImmediately);
    const propsStable = useRef<ElementProps<T>>({ ref: setElement });

    // Return both the element and the hook that modifies 
    // the props and allows us to actually find the element
    return {
        propsStable: propsStable.current,
        
        refElementReturn: {
            getElement,
        }
    }
}

