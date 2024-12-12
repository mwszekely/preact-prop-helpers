import { returnNull, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useCallback, useRef } from "../util/lib.js";
import { useMonitoring } from "../util/use-call-count.js";
import { useTagProps } from "../util/use-tag-props.js";
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
export function useRefElement(args) {
    return useMonitoring(function useRefElement() {
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
        const handler = useCallback((e, prevValue) => {
            if (!(e == null || e instanceof Element)) {
                console.assert(e == null || e instanceof Element, `useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead.`);
                nonElementWarn.current = true;
            }
            const cleanup = onElementChange?.(e, prevValue);
            if (prevValue)
                onUnmount?.(prevValue);
            if (e)
                onMount?.(e);
            return cleanup;
        }, []);
        // Let us store the actual (reference to) the element we capture
        const [getElement, setElement] = usePassiveState(handler, returnNull, { debounceRendering: runImmediately, skipMountInitialization: true });
        const propsStable = useRef(useTagProps({ ref: setElement }, "data-use-ref-element"));
        // Return both the element and the hook that modifies 
        // the props and allows us to actually find the element
        return {
            propsStable: propsStable.current,
            refElementReturn: {
                getElement,
            }
        };
    });
}
//# sourceMappingURL=use-ref-element.js.map