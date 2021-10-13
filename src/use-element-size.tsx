import { h } from "preact";
import { useEffect } from "preact/hooks";
import { useRefElement, UseRefElementProps } from "./use-ref-element";
import { useStableCallback } from "./use-stable-callback";

interface UseElementSizeParameters {
    /**
     * Called any time the browser detects a size change
     * on the element. Does not need to be stable, so you
     * can pass an anonymous function that only sets the
     * values you use if you'd like.
     * @param sizeInfo 
     */
    setSize(sizeInfo: ElementSize): void;

    /**
     * Passed as an argument to the created ResizeObserver.
     * 
     * @see https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/observe#parameters
     */
    observeBox?: ResizeObserverOptions["box"];
}

export type UseElementSizeProps<E extends HTMLElement> = UseRefElementProps<E>;
export interface UseElementSizePropsParameters<E extends HTMLElement> extends h.JSX.HTMLAttributes<E> { }

export interface ElementSize {
    clientWidth: number;
    scrollWidth: number;
    offsetWidth: number;
    clientHeight: number;
    scrollHeight: number;
    offsetHeight: number;
    clientLeft: number;
    scrollLeft: number;
    offsetLeft: number;
    clientTop: number;
    scrollTop: number;
    offsetTop: number;
}

export interface UseElementSizeReturnType<E extends HTMLElement> {
    element: E | null;
    getElement(): E | null;
    useElementSizeProps: UseElementSizeProps<E>;
}

export function useElementSize<E extends HTMLElement>({ observeBox, setSize }: UseElementSizeParameters): UseElementSizeReturnType<E> {
    const { element, getElement, useRefElementProps } = useRefElement<E>();

    const stableSetSize = useStableCallback(setSize);

    useEffect(() => {
        if (element) {
            const handleUpdate = () => {
                const { clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop } = element;
                stableSetSize({ clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop });
            }
            if (!("ResizeObserver" in window)) {
                document.addEventListener("resize", handleUpdate, { passive: true });
                return () => document.removeEventListener("resize", handleUpdate);
            }
            else {
                const observer = new ResizeObserver((entries) => { handleUpdate(); });

                observer.observe(element, { box: observeBox });

                return () => observer.disconnect();
            }
        }
    }, [element, observeBox]);

    return {
        element,
        getElement,
        useElementSizeProps: useRefElementProps
    }


}
