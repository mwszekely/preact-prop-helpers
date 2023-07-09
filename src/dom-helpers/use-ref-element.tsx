import { OnPassiveStateChange, returnNull, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useCallback, useRef } from "../util/lib.js";
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
    const nonElementWarn = useRef(false);
    if (nonElementWarn.current) {
        nonElementWarn.current = false;
        // There are two of these to catch the problem in the two most useful areas --
        // when it initially happens, and also in the component stack.
        console.assert(false, `useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead.`);
    }

    const { onElementChange, onMount, onUnmount } = (args.refElementParameters || {});
    useEnsureStability("useRefElement", onElementChange, onMount, onUnmount);

    // Called (indirectly) by the ref that the element receives.
    const handler = useCallback<OnPassiveStateChange<T | null, never>>((e, prevValue) => {
        if (!(e == null || e instanceof Element)) {
            console.assert(e == null || e instanceof Element, `useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead.`);
            nonElementWarn.current = true;
        }
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

