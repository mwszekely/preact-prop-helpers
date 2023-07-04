import { returnNull, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useCallback, useRef } from "../util/lib.js";
import { monitorCallCount } from "../util/use-call-count.js";
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
export function useRefElement(args) {
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
    const [getElement, setElement] = usePassiveState(handler, returnNull, runImmediately);
    const propsStable = useRef({ ref: setElement });
    // Return both the element and the hook that modifies 
    // the props and allows us to actually find the element
    return {
        propsStable: propsStable.current,
        refElementReturn: {
            getElement,
        }
    };
}
//# sourceMappingURL=use-ref-element.js.map