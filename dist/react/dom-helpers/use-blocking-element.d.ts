import { UseActiveElementParameters } from "../observers/use-active-element.js";
export interface UseBlockingElementParametersSelf<E extends Element> {
    enabled: boolean;
    getTarget(): (E | null);
}
export interface UseBlockingElementParameters<E extends Element> extends UseActiveElementParameters {
    blockingElementParameters: UseBlockingElementParametersSelf<E>;
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
export declare const useBlockingElement: <E extends Element>({ activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, ...void3 }, blockingElementParameters: { enabled, getTarget, ...void1 }, ...void2 }: UseBlockingElementParameters<E>) => {
    getTop: () => HTMLElement | null;
    getLastActiveWhenClosed: () => HTMLElement | null;
    getLastActiveWhenOpen: () => HTMLElement | null;
};
export declare function getTopElement(): HTMLElement | null;
//# sourceMappingURL=use-blocking-element.d.ts.map