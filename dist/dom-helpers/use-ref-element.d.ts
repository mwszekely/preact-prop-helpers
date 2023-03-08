import { h } from "preact";
import { OnPassiveStateChange } from "../preact-extensions/use-passive-state.js";
export interface UseRefElementReturnType<T extends EventTarget> {
    refElementReturn: {
        /** **STABLE** */
        getElement(): T | null;
        propsStable: h.JSX.HTMLAttributes<T>;
    };
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
    };
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
export declare function useRefElement<T extends EventTarget>(args: UseRefElementParameters<T>): UseRefElementReturnType<T>;
//# sourceMappingURL=use-ref-element.d.ts.map