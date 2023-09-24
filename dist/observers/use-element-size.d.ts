import { UseRefElementParameters, UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { PropNames } from "../util/types.js";
declare module "../util/types.js" {
    interface PropNames {
        ElementSizeParameters: typeof PNames;
    }
}
declare module "../util/types.js" {
    interface PropNames {
        ElementSizeReturn: typeof RNames;
    }
}
export declare const PNames: {
    readonly onSizeChange: "PropNames.ElementSizeParameters.onSizeChange";
    readonly getObserveBox: "PropNames.ElementSizeParameters.getObserveBox";
};
export declare const RNames: {
    readonly getSize: "PropNames.ElementSizeReturn.getSize";
};
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
export interface UseElementSizeParameters<T extends Element> extends UseElementSizeParametersSelf, Pick<UseRefElementReturnType<T>, (typeof PropNames)["RefElementReturn"]["getElement"]> {
}
export interface UseElementSizeReturnType<E extends Element> extends UseElementSizeReturnTypeSelf<E>, Pick<UseRefElementParameters<E>, (typeof PropNames)["RefElementParameters"]["onElementChange"]> {
}
/**
 * Measures an element, allowing you to react to its changes in size.
 *
 * @compositeParams
 */
export declare const useElementSize: <E extends Element>({ [PropNames.ElementSizeParameters.getObserveBox]: getObserveBox, [PropNames.ElementSizeParameters.onSizeChange]: onSizeChange, [PropNames.RefElementReturn.getElement]: getElement }: UseElementSizeParameters<E>) => UseElementSizeReturnType<E>;
//# sourceMappingURL=use-element-size.d.ts.map