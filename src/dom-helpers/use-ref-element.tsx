import { OnPassiveStateChange, returnNull, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { Nullable, useCallback, useRef } from "../util/lib.js";
import { ElementProps } from "../util/types.js";
import { useMonitoring } from "../util/use-call-count.js";
import { useTagProps } from "../util/use-tag-props.js";

export interface UseRefElementReturnTypeSelf<T extends EventTarget> {
    /** 
     * 
     * Returns the element that the props were rendered to, or `null` if they were not rendered to an element.
     * 
     * @stable
     */
    getElement(): T | null;
}
export interface UseRefElementReturnType<T extends EventTarget> {
    /** @stable */
    propsStable: ElementProps<T>;
    refElementReturn: UseRefElementReturnTypeSelf<T>;
}
export interface UseRefElementParametersSelf<T> {
    /**
     * Called with the `Element` when it mounts, called with `null` when it unmounts.
     * 
     * @stable
     */
    onElementChange?: Nullable<OnPassiveStateChange<T | null, never>>;
    /** 
     * Called when the element mounts 
     * 
     * @stable
     */
    onMount?: Nullable<(element: T) => void>;
    /** 
     * Called when the element unmounts
     * 
     * @stable 
     */
    onUnmount?: Nullable<(element: T) => void>;
}

export interface UseRefElementParameters<T> {
    refElementParameters: UseRefElementParametersSelf<T>;
}

/**
 * Access the `HTMLElement` rendered by this hook/these props, either as soon as it's available (as a callback), or whenever you need it (as a getter function).
 * 
 * @remarks
 * 
 * This hook, like many others, works with either `useState` or {@link usePassiveState}. Why use one over the other?
 * 
 * ```md-literal
 * * `useState` is familiar and easy to use, but calling `setState` causes a re-render, which you might not need/want
 * * `usePassiveState` is faster and more scalable, but its state can't be accessed during render and it's more complex.
 * ```
 * 
 * Suppose we want to call the `HTMLElement`'s `doSomethingFunny` method as soon as the element has been created:
 * 
 * @example
 * Easiest way to use (but setElement causes an extra re-render when it's called...)
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
 * 
 * @compositeParams
 */
export function useRefElement<T extends EventTarget>(args: UseRefElementParameters<T>): UseRefElementReturnType<T> {
    return useMonitoring(function useRefElement(): UseRefElementReturnType<T> {
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
        const [getElement, setElement] = usePassiveState<T | null, never>(handler, returnNull, { debounceRendering: runImmediately, skipMountInitialization: true });
        const propsStable = useRef<ElementProps<T>>(useTagProps({ ref: setElement as never }, "data-use-ref-element"));

        // Return both the element and the hook that modifies 
        // the props and allows us to actually find the element
        return {
            propsStable: propsStable.current,

            refElementReturn: {
                getElement,
            }
        }
    });
}

