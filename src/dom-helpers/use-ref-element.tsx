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
     * absence isn't usually because it was forgotten, it's because
     * it doesn't matter.
     */
    refElementParameters?: {
        onElementChange?: OnPassiveStateChange<T | null, never>;
        onMount?: (element: T) => void;
        onUnmount?: (element: T) => void;
    }
}

/**
 * Allows you to access the `HTMLElement` rendered by this hook/these props, either as soon as it's available (as a callback), or whenever you need it (as a getter function).
 * 
 * @remarks
 * 
 * This hook, like many others, works with either `useState` or {@link usePassiveState}. Why use one over the other?
 * 
 * * `useState` is familiar and easy to use, but causes the component to re-render itself, which is slow.
 * * `usePassiveState` is faster and more scalable, but its state can't be accessed during render and it's more complex.
 * 
 * @example
 * Easiest way to use (but causes an extra re-render 🐌)
 * ```typescript
 * const [element, setElement] = useState<HTMLButtonElement | null>(null);
 * const { propsStable } = useRefElement({ onElementChange: setElement });
 * useEffect(() => {
 *     element.doSomethingFunny();
 * }, [element])
 * ```
 * 
 * @example
 * Fastest (but slightly more verbose)
 * ```typescript
 * // The code in useEffect is moved into this callback, but runs at the same time
 * const onElementChange = useCallback(element => element.doSomethingFunny(), []);
 * const [getElement, setElement] = usePassiveState<HTMLButtonElement | null>(onElementChange, returnNull);
 * const { propsStable } = useRefElement({ onElementChange: setElement });
 * ```
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

