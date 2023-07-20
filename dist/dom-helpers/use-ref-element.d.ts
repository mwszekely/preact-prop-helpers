import { OnPassiveStateChange } from "../preact-extensions/use-passive-state.js";
import { ElementProps } from "../util/types.js";
export interface UseRefElementReturnTypeSelf<T extends EventTarget> {
    /**
     * **STABLE**
     *
     * Call to return the element that the props were rendered to, or `null` if they were not rendered to an element.
     */
    getElement(): T | null;
}
export interface UseRefElementReturnType<T extends EventTarget> {
    propsStable: ElementProps<T>;
    refElementReturn: UseRefElementReturnTypeSelf<T>;
}
export interface UseRefElementParametersSelf<T> {
    /**
     * Called with the `Element` when it mounts, called with `null` when it unmounts.
     */
    onElementChange?: OnPassiveStateChange<T | null, never>;
    /** Called when the element mounts */
    onMount?: (element: T) => void;
    /** Called when the element unmounts */
    onUnmount?: (element: T) => void;
}
export interface UseRefElementParameters<T> {
    /**
     * For the sake of convenience,
     * this one is optional, since using this hook is so common,
     * but using its parameter options is so uncommon, and it's
     * absence isn't usually because it was forgotten, it's because
     * it doesn't matter.
     */
    refElementParameters?: UseRefElementParametersSelf<T>;
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
 *
 * @compositeParams
 */
export declare function useRefElement<T extends EventTarget>(args: UseRefElementParameters<T>): UseRefElementReturnType<T>;
//# sourceMappingURL=use-ref-element.d.ts.map