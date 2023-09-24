import "blocking-elements";
import "wicg-inert";
import { PropNames_ActiveElementParameters_onLastActiveElementChange, UseActiveElementParameters } from "../observers/use-active-element.js";
export declare const PropNames_BlockingElementParameters_enabled = "PropNames.BlockingElementParameters.enabled";
export declare const PropNames_BlockingElementParameters_getTarget = "PropNames.BlockingElementParameters.getTarget";
export declare const PropNames_BlockingElementReturn_getTop = "PropNames.BlockingElementReturn.getTop";
export declare const PropNames_BlockingElementReturn_getTarget = "PropNames.BlockingElementReturn.getTarget";
export declare const PropNames_BlockingElementReturn_getLastActiveWhenClosed = "PropNames.BlockingElementReturn.getLastActiveWhenClosed";
export declare const PropNames_BlockingElementReturn_getLastActiveWhenOpen = "PropNames.BlockingElementReturn.getLastActiveWhenOpen";
export interface UseBlockingElementParametersSelf<E extends Element> {
    [PropNames_BlockingElementParameters_enabled]: boolean;
    [PropNames_BlockingElementParameters_getTarget](): (E | null);
}
export interface UseBlockingElementReturnTypeSelf<E extends Element> {
    [PropNames_BlockingElementReturn_getTarget](): (E | null);
    [PropNames_BlockingElementReturn_getTop](): Element | null;
    [PropNames_BlockingElementReturn_getLastActiveWhenClosed](): Element | null;
    [PropNames_BlockingElementReturn_getLastActiveWhenOpen](): Element | null;
}
export interface UseBlockingElementParameters<E extends Element> extends UseBlockingElementParametersSelf<E> {
}
export interface UseBlockingElementReturnType<E extends Element> extends UseBlockingElementReturnTypeSelf<E>, Pick<UseActiveElementParameters, typeof PropNames_ActiveElementParameters_onLastActiveElementChange> {
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
export declare const useBlockingElement: <E extends Element>({ [PropNames_BlockingElementParameters_enabled]: enabled, [PropNames_BlockingElementParameters_getTarget]: getTarget, ...void2 }: UseBlockingElementParameters<E>) => UseBlockingElementReturnType<E>;
export declare function getTopElement(): HTMLElement | null;
//# sourceMappingURL=use-blocking-element.d.ts.map