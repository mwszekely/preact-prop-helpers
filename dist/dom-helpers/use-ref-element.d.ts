import { OnPassiveStateChange } from "../preact-extensions/use-passive-state.js";
import { Nullable } from "../util/lib.js";
import { ElementProps } from "../util/types.js";
export declare const PropNames_RefElementParameters_onElementChange = "PropNames.RefElementParameters.onElementChange";
export declare const PropNames_RefElementParameters_onMount = "PropNames.RefElementParameters.onMount";
export declare const PropNames_RefElementParameters_onUnmount = "PropNames.RefElementParameters.onUnmount";
export declare const PropNames_RefElementReturn_getElement = "PropNames.RefElementReturn.getElement";
export interface UseRefElementReturnTypeSelf<T extends EventTarget> {
    /**
     *
     * Returns the element that the props were rendered to, or `null` if they were not rendered to an element.
     *
     * @stable
     */
    [PropNames_RefElementReturn_getElement]: () => T | null;
    /**
     * @stable
     */
    props: ElementProps<T>;
}
export interface UseRefElementParametersSelf<T extends EventTarget> {
    /**
     * Called with the `Element` when it mounts, called with `null` when it unmounts.
     *
     * @stable
     */
    [PropNames_RefElementParameters_onElementChange]?: Nullable<OnPassiveStateChange<T | null, never>>;
    /**
     * Called when the element mounts
     *
     * @stable
     */
    [PropNames_RefElementParameters_onMount]?: Nullable<(element: T) => void>;
    /**
     * Called when the element unmounts
     *
     * @stable
     */
    [PropNames_RefElementParameters_onUnmount]?: Nullable<(element: T) => void>;
}
export type UseRefElementParameters<T extends EventTarget> = UseRefElementParametersSelf<T>;
export type UseRefElementReturnType<T extends EventTarget> = UseRefElementReturnTypeSelf<T>;
/**
 * Access `HTMLElement` rendered by this hook/these props, either as soon as it's available (as a callback), or whenever you need it (as a getter function).
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
export declare const useRefElement: <T extends EventTarget>({ [PropNames_RefElementParameters_onElementChange]: onElementChange, [PropNames_RefElementParameters_onMount]: onMount, [PropNames_RefElementParameters_onUnmount]: onUnmount, ...void1 }: UseRefElementParameters<T>) => UseRefElementReturnType<T>;
//# sourceMappingURL=use-ref-element.d.ts.map