import { getDocument } from "../dom-helpers/use-document-class.js";
import { UseRefElementParameters, UseRefElementReturnType, useRefElement } from "../dom-helpers/use-ref-element.js";
import { OnPassiveStateChange, returnNull, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useCallback, useEffect, useRef } from "../util/lib.js";
import { monitorCallCount } from "../util/use-call-count.js";

export interface UseElementSizeParametersSelf {
    /**
     * Called any time the browser detects a size change
     * on the element. Does not need to be stable, so you
     * can pass an anonymous function that only sets the
     * values you use if you'd like.
     * 
     * @stable
     */
    onSizeChange(sizeInfo: ElementSize, prevSize: ElementSize | undefined, entries: ResizeObserverEntry[] | UIEvent): void;

    /**
     * Passed as an argument to the created ResizeObserver.
     * 
     * @see https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/observe#parameters
     * 
     * @stable 
     */
    getObserveBox: null | (() => ResizeObserverOptions["box"]);
}


export interface UseElementSizeParameters<T extends Element> extends UseRefElementParameters<T> {
    elementSizeParameters: UseElementSizeParametersSelf;
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

export interface UseElementSizeReturnTypeSelf<E extends Element> {
    /** @stable */
    getSize(): ElementSize | null;
}


export interface UseElementSizeReturnType<E extends Element> extends UseRefElementReturnType<E> {
    elementSizeReturn: UseElementSizeReturnTypeSelf<E>;
}

/**
 * Measures an element, allowing you to react to its changes in size.
 * 
 * @compositeParams
 */
export function useElementSize<E extends Element>({ elementSizeParameters: { getObserveBox, onSizeChange }, refElementParameters }: UseElementSizeParameters<E>): UseElementSizeReturnType<E> {
    monitorCallCount(useElementSize);

    const { onElementChange, onMount, onUnmount } = (refElementParameters || {})

    useEnsureStability("useElementSize", getObserveBox, onSizeChange, onElementChange, onMount, onUnmount);

    const [getSize, setSize] = usePassiveState<ElementSize | null, UIEvent | ResizeObserverEntry[]>(onSizeChange as OnPassiveStateChange<ElementSize | null, UIEvent | ResizeObserverEntry[]>, returnNull, runImmediately);

    const currentObserveBox = useRef<ResizeObserverBoxOptions | undefined>(undefined);

    const needANewObserver = useCallback((element: E | null, observeBox: ResizeObserverBoxOptions | undefined) => {
        if (element) {
            const document = getDocument(element);
            const window = document.defaultView;

            const handleUpdate = (entries: ResizeObserverEntry[] | UIEvent) => {
                if (element.isConnected) {
                    const { clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop } = (element as Element & Partial<HTMLElement>);
                    setSize({ clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop }, entries);
                }
            }


            if (window && ("ResizeObserver" in window)) {
                const observer = new ResizeObserver((entries) => { handleUpdate(entries); });

                observer.observe(element, { box: observeBox });

                return () => observer.disconnect();
            }
            else {
                document.addEventListener("resize", handleUpdate, { passive: true });
                return () => document.removeEventListener("resize", handleUpdate);
            }
        }
    }, [])

    const { refElementReturn, ...rest } = useRefElement<E>({
        refElementParameters: {
            onElementChange: useCallback((e: E | null, p: E | null | undefined, r?: never) => { needANewObserver(e, getObserveBox?.()); onElementChange?.(e, p, r); }, []),
            onMount,
            onUnmount
        }
    });

    const { getElement } = refElementReturn;

    useEffect(() => {
        if (getObserveBox) {
            if (currentObserveBox.current !== getObserveBox())
                needANewObserver(getElement(), getObserveBox());
        }
    });

    return {
        elementSizeReturn: { getSize },
        refElementReturn,
        ...rest
    }


}
