import type { JSX } from "preact";
import { UseRefElementParameters, UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
export interface UseElementSizeParameters<T extends Element> extends UseRefElementParameters<T> {
    elementSizeParameters: {
        /**
         * Called any time the browser detects a size change
         * on the element. Does not need to be stable, so you
         * can pass an anonymous function that only sets the
         * values you use if you'd like.
         * @param sizeInfo
         */
        onSizeChange(sizeInfo: ElementSize, prevSize: ElementSize | undefined, entries: ResizeObserverEntry[] | JSX.TargetedEvent<T>): void;
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