import { UseRefElementParameters, UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
export interface UseElementSizeParametersSelf<T extends Element> extends UseRefElementParameters<T> {
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
    elementSizeParameters: UseElementSizeParametersSelf<T>;
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
    /** **STABLE** */
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
export declare function useElementSize<E extends Element>({ elementSizeParameters: { getObserveBox, onSizeChange }, refElementParameters }: UseElementSizeParameters<E>): UseElementSizeReturnType<E>;
//# sourceMappingURL=use-element-size.d.ts.map