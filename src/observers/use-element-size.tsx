import { getDocument } from "../dom-helpers/use-document-class.js";
import { PropNames_RefElementParameters_onElementChange, PropNames_RefElementReturn_getElement, UseRefElementParameters, UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { OnPassiveStateChange, returnNull, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useCallback, useEffect, useRef } from "../util/lib.js";
import { monitored } from "../util/use-call-count.js";

const P = `PropNames.ElementSizeParameters`;
const R = `PropNames.ElementSizeReturn`;

export const PropNames_ElementSizeParameters_onSizeChange = `${P}.onSizeChange`;
export const PropNames_ElementSizeParameters_getObserveBox = `${P}.getObserveBox`;
export const PropNames_ElementSizeReturn_getSize = `${R}.getSize`;

export interface UseElementSizeParametersSelf {
    /**
     * Called any time the browser detects a size change
     * on the element. Does not need to be stable, so you
     * can pass an anonymous function that only sets the
     * values you use if you'd like.
     * 
     * @stable
     */
    [PropNames_ElementSizeParameters_onSizeChange](sizeInfo: ElementSize, prevSize: ElementSize | undefined, entries: ResizeObserverEntry[] | UIEvent): void;

    /**
     * Passed as an argument to the created ResizeObserver.
     * 
     * @see https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/observe#parameters
     * 
     * @stable 
     */
    [PropNames_ElementSizeParameters_getObserveBox]: null | (() => ResizeObserverOptions["box"]);
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
    [PropNames_ElementSizeReturn_getSize](): ElementSize | null;
}


export interface UseElementSizeParameters<T extends Element> extends UseElementSizeParametersSelf, Pick<UseRefElementReturnType<T>, typeof PropNames_RefElementReturn_getElement> { }
export interface UseElementSizeReturnType<E extends Element> extends UseElementSizeReturnTypeSelf<E>, Pick<UseRefElementParameters<E>, typeof PropNames_RefElementParameters_onElementChange> { }

/**
 * Measures an element, allowing you to react to its changes in size.
 * 
 * @compositeParams
 */
export const useElementSize = monitored(function useElementSize<E extends Element>({ 
    [PropNames_ElementSizeParameters_getObserveBox]: getObserveBox, 
    [PropNames_ElementSizeParameters_onSizeChange]: onSizeChange,
    [PropNames_RefElementReturn_getElement]: getElement
 }: UseElementSizeParameters<E>): UseElementSizeReturnType<E> {
    useEnsureStability("useElementSize", getObserveBox, onSizeChange);
    const currentObserveBox = useRef<ResizeObserverBoxOptions | undefined>(undefined);
    const [getSize, setSize] = usePassiveState<ElementSize | null, UIEvent | ResizeObserverEntry[]>(onSizeChange as OnPassiveStateChange<ElementSize | null, UIEvent | ResizeObserverEntry[]>, returnNull, runImmediately);


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
    }, []);

    useEffect(() => {
        if (getObserveBox) {
            if (currentObserveBox.current !== getObserveBox())
                needANewObserver(getElement(), getObserveBox());
        }
    });

    return {
        [PropNames_RefElementParameters_onElementChange]: useCallback((e: E | null, p: E | null | undefined, r?: never) => { needANewObserver(e, getObserveBox?.()); }, []),
        [PropNames_ElementSizeReturn_getSize]: getSize
    }
});
