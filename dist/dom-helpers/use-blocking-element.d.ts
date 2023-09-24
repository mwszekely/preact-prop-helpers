import "blocking-elements";
import "wicg-inert";
import { UseActiveElementParameters } from "../observers/use-active-element.js";
import { PropNames } from "../util/types.js";
declare module "../util/types.js" {
    interface PropNames {
        BlockingElementParameters: typeof PNames;
    }
}
declare module "../util/types.js" {
    interface PropNames {
        BlockingElementReturn: typeof RNames;
    }
}
export declare const PNames: {
    readonly enabled: "PropNames.BlockingElementParameters.enabled";
    readonly getTarget: "PropNames.BlockingElementParameters.getTarget";
};
export declare const RNames: {
    readonly getTop: "PropNames.BlockingElementReturn.getTop";
    readonly getTarget: "PropNames.BlockingElementReturn.getTarget";
    readonly getLastActiveWhenClosed: "PropNames.BlockingElementReturn.getLastActiveWhenClosed";
    readonly getLastActiveWhenOpen: "PropNames.BlockingElementReturn.getLastActiveWhenOpen";
};
export interface UseBlockingElementParametersSelf<E extends Element> {
    [PropNames.BlockingElementParameters.enabled]: boolean;
    [PropNames.BlockingElementParameters.getTarget](): (E | null);
}
export interface UseBlockingElementReturnTypeSelf<E extends Element> {
    [PropNames.BlockingElementReturn.getTarget](): (E | null);
    [PropNames.BlockingElementReturn.getTop](): Element | null;
    [PropNames.BlockingElementReturn.getLastActiveWhenClosed](): Element | null;
    [PropNames.BlockingElementReturn.getLastActiveWhenOpen](): Element | null;
}
export interface UseBlockingElementParameters<E extends Element> extends UseBlockingElementParametersSelf<E> {
}
export interface UseBlockingElementReturnType<E extends Element> extends UseBlockingElementReturnTypeSelf<E>, Pick<UseActiveElementParameters, (typeof PropNames)["ActiveElementParameters"]["onLastActiveElementChange"]> {
}
/**
 * Allows an element to trap focus by applying the "inert" attribute to all sibling, aunt, and uncle nodes.
 *
 * @remarks Automatically handles consecutive calls with a loosely applied stack operation
 * (specifically via `blockingElements`, with a small polyfill because I'm not sure how long
 * it'll take to find its way into the spec, if ever)
 *
 * @param target
 */
export declare const useBlockingElement: <E extends Element>({ [PropNames.BlockingElementParameters.enabled]: enabled, [PropNames.BlockingElementParameters.getTarget]: getTarget, ...void2 }: UseBlockingElementParameters<E>) => UseBlockingElementReturnType<E>;
export declare function getTopElement(): HTMLElement | null;
//# sourceMappingURL=use-blocking-element.d.ts.map