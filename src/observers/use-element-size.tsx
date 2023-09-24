import { getDocument } from "../dom-helpers/use-document-class.js";
import { UseRefElementParameters, UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { OnPassiveStateChange, returnNull, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useCallback, useEffect, useRef } from "../util/lib.js";
import { PropNames } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";


declare module "../util/types.js" { interface PropNames { ElementSizeParameters: typeof PNames } }
declare module "../util/types.js" { interface PropNames { ElementSizeReturn: typeof RNames } }

const P = `PropNames.ElementSizeParameters`;
const R = `PropNames.ElementSizeReturn`;


export const PNames = {
    onSizeChange: `${P}.onSizeChange`,
    getObserveBox: `${P}.getObserveBox`
} as const satisfies Record<any, any>;

export const RNames = {
    getSize: `${R}.getSize`
} as const;

PropNames.ElementSizeParameters ??=  PNames;
PropNames.ElementSizeReturn ??=  RNames;

export interface UseElementSizeParametersSelf {
    /**
     * Called any time the browser detects a size change
     * on the element. Does not need to be stable, so you
     * can pass an anonymous function that only sets the
     * values you use if you'd like.
     * 
     * @stable
     */
    [PropNames.ElementSizeParameters.onSizeChange](sizeInfo: ElementSize, prevSize: ElementSize | undefined, entries: ResizeObserverEntry[] | UIEvent): void;

    /**
     * Passed as an argument to the created ResizeObserver.
     * 
     * @see https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/observe#parameters
     * 
     * @stable 
     */
    [PropNames.ElementSizeParameters.getObserveBox]: null | (() => ResizeObserverOptions["box"]);
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
    [PropNames.ElementSizeReturn.getSize](): ElementSize | null;
}


export interface UseElementSizeParameters<T extends Element> extends UseElementSizeParametersSelf, Pick<UseRefElementReturnType<T>, (typeof PropNames)["RefElementReturn"]["getElement"]> { }
export interface UseElementSizeReturnType<E extends Element> extends UseElementSizeReturnTypeSelf<E>, Pick<UseRefElementParameters<E>, (typeof PropNames)["RefElementParameters"]["onElementChange"]> { }

/**
 * Measures an element, allowing you to react to its changes in size.
 * 
 * @compositeParams
 */
export const useElementSize = monitored(function useElementSize<E extends Element>({ 
    [PropNames.ElementSizeParameters.getObserveBox]: getObserveBox, 
    [PropNames.ElementSizeParameters.onSizeChange]: onSizeChange,
    [PropNames.RefElementReturn.getElement]: getElement
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
        [PropNames.RefElementParameters.onElementChange]: useCallback((e: E | null, p: E | null | undefined, r?: never) => { needANewObserver(e, getObserveBox?.()); }, []),
        [PropNames.ElementSizeReturn.getSize]: getSize
    }
});
