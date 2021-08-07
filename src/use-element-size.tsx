import { h, Ref } from "preact"
import { useCallback, useEffect } from "preact/hooks";
import { useRefElement, UseRefElementProps, UseRefElementPropsParameters } from "./use-ref-element";
import { useState } from "./use-state";

interface UseElementSizeParameters {
    observeBox?: ResizeObserverOptions["box"];
}

export type UseElementSizeProps<E extends HTMLElement> = UseRefElementProps<E>;
export interface UseElementSizePropsParameters<E extends HTMLElement> extends UseRefElementPropsParameters<E> { }

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
    elementSize: ElementSize | null;
    getElementSize: () => ElementSize | null;
    useElementSizeProps: UseElementSizeProps<E>;
}


export function useElementSize<E extends HTMLElement>({ observeBox }: UseElementSizeParameters = { }): UseElementSizeReturnType<E> {
    const { element, useRefElementProps } = useRefElement<E>();

    const [size, setSize, getSize] = useState<ElementSize | null>(null);

    useEffect(() => {
        if (element) {
            const handleUpdate = () => {
                const { clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop } = element;
                setSize({ clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop });
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
    }, [element, observeBox])

    return {
        element,
        elementSize: size,
        getElementSize: getSize,
        useElementSizeProps: useRefElementProps
    }


}
