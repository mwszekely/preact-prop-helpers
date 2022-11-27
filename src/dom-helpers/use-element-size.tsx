import { h } from "preact";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { getDocument } from "./use-document-class";
import { OnPassiveStateChange, returnNull, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state";
import { useRefElement, UseRefElementParameters, UseRefElementReturnType } from "./use-ref-element";

export interface UseElementSizeParameters<T extends Element> extends UseRefElementParameters<T> {
    elementSizeParameters: {/**
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
        getObserveBox: null | (() => ResizeObserverOptions["box"]);
    }
}

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

export interface UseElementSizeReturnType<E extends Element> extends Omit<UseRefElementReturnType<E>, "props" | "useProps"> {
    elementSizeReturn: {/** **STABLE** */
        getSize(): ElementSize | null;
    }
}


export function useElementSize<E extends Element>({ elementSizeParameters: { getObserveBox, onSizeChange }, refElementParameters: { onElementChange, onMount, onUnmount } }: UseElementSizeParameters<E>): UseElementSizeReturnType<E> {

    useEnsureStability("useElementSize", getObserveBox, onSizeChange, onElementChange, onMount, onUnmount);

    const [getSize, setSize] = usePassiveState<ElementSize | null>(onSizeChange as OnPassiveStateChange<ElementSize | null>, returnNull);

    const currentObserveBox = useRef<ResizeObserverBoxOptions | undefined>(undefined);

    const needANewObserver = useCallback((element: E | null, observeBox: ResizeObserverBoxOptions | undefined) => {
        if (element) {
            const document = getDocument(element);
            const window = document.defaultView;

            const handleUpdate = () => {
                if (element.isConnected) {
                    const { clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop } = (element as Element & Partial<HTMLElement>);
                    setSize({ clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop });
                }
            }


            if (window && ("ResizeObserver" in window)) {
                const observer = new ResizeObserver((_entries) => { handleUpdate(); });

                observer.observe(element, { box: observeBox });

                return () => observer.disconnect();
            }
            else {
                document.addEventListener("resize", handleUpdate, { passive: true });
                return () => document.removeEventListener("resize", handleUpdate);
            }
        }
    }, [])

    const { refElementReturn } = useRefElement<E>({
        refElementParameters: {
            onElementChange: useCallback((e: E | null, p: E | null | undefined) => { needANewObserver(e, getObserveBox?.()); onElementChange?.(e, p); }, []),
            onMount,
            onUnmount
        }
    });

    const { getElement } = refElementReturn

    useEffect(() => {
        if (getObserveBox) {
            if (currentObserveBox.current !== getObserveBox())
                needANewObserver(getElement(), getObserveBox());
        }
    });

    return {
        elementSizeReturn: { getSize },
        refElementReturn
    }


}