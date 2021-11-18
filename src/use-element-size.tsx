import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { useRefElement, UseRefElementProps } from "./use-ref-element";
import { usePassiveState } from "./use-passive-state";

interface UseElementSizeParameters {
    /**
     * Called any time the browser detects a size change
     * on the element. Does not need to be stable, so you
     * can pass an anonymous function that only sets the
     * values you use if you'd like.
     * @param sizeInfo 
     */
    onSizeChange(sizeInfo: ElementSize): void;

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
    offsetWidth: number | undefined;
    clientHeight: number;
    scrollHeight: number;
    offsetHeight: number | undefined;
    clientLeft: number;
    scrollLeft: number;
    offsetLeft: number | undefined;
    clientTop: number;
    scrollTop: number;
    offsetTop: number | undefined;
}

export interface UseElementSizeReturnType<E extends HTMLElement> {
    getElement(): E | null;
    getSize(): ElementSize | null;
    useElementSizeProps: UseElementSizeProps<E>;
}

function extractElementSize(element: Element | undefined | null): ElementSize {
    if (!element)
        throw new Error("Cannot retrieve the size of an element that has not been rendered yet");

    const { clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop } = (element as (Element & Partial<HTMLElement>));
    return ({ clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop });
}

export function useElementSize<E extends HTMLElement>({ observeBox, onSizeChange }: UseElementSizeParameters): UseElementSizeReturnType<E> {

    const [getSize, setSize] = usePassiveState(onSizeChange);

    const currentObserveBox = useRef<ResizeObserverBoxOptions | undefined>(observeBox);

    const needANewObserver = (element: E | null, observeBox: ResizeObserverBoxOptions | undefined) => {
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
                currentObserveBox.current = observeBox;

                return () => observer.disconnect();
            }
        }
    }

    const { getElement, useRefElementProps } = useRefElement<E>({ onElementChange: e => needANewObserver(e, observeBox) });

    useEffect(() => {
        if (currentObserveBox.current !== observeBox)
            needANewObserver(getElement(), observeBox);
    }, [observeBox]);

    return {
        getElement,
        getSize,
        useElementSizeProps: useRefElementProps
    }


}
