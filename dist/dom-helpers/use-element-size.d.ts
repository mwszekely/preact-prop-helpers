import { h } from "preact";
import { UseRefElementParameters, UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
export interface UseElementSizeParameters<T extends Element> extends UseRefElementParameters<T> {
    elementSizeParameters: {
        onSizeChange(sizeInfo: ElementSize, prevSize: ElementSize | undefined, entries: ResizeObserverEntry[] | h.JSX.TargetedEvent<T>): void;
        /**
         * Passed as an argument to the created ResizeObserver.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/observe#parameters
         */
        getObserveBox: null | (() => ResizeObserverOptions["box"]);
    };
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
export interface UseElementSizeReturnType<E extends Element> extends UseRefElementReturnType<E> {
    elementSizeReturn: {
        getSize(): ElementSize | null;
    };
}
export declare function useElementSize<E extends Element>({ elementSizeParameters: { getObserveBox, onSizeChange }, refElementParameters }: UseElementSizeParameters<E>): UseElementSizeReturnType<E>;
//# sourceMappingURL=use-element-size.d.ts.map