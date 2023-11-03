import "blocking-elements";
import "wicg-inert";
import { UseActiveElement } from "../observers/use-active-element.js";
import { Parameter, StandardDepsPick, StandardHook } from "../util/types.js";
export interface UseBlockingElementParametersSelf {
    enabled: boolean;
    getTarget(): (Element | null);
}
export type UseBlockingElement = StandardHook<"blockingElement", UseBlockingElementParametersSelf, [StandardDepsPick<"params", UseActiveElement>], never, [StandardDepsPick<"return", UseActiveElement>]>;
/**
 * Allows an element to trap focus by applying the "inert" attribute to all sibling, aunt, and uncle nodes.
 *
 * @remarks Automatically handles consecutive calls with a loosely applied stack operation
 * (specifically via `blockingElements`, with a small polyfill because I'm not sure how long
 * it'll take to find its way into the spec, if ever)
 *
 * @param target
 */
export declare const useBlockingElement: ({ activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, ...void3 }, blockingElementParameters: { enabled, getTarget, ...void1 }, ...void2 }: Parameter<UseBlockingElement>) => {
    getTop: () => HTMLElement | null;
    getLastActiveWhenClosed: () => HTMLElement | null;
    getLastActiveWhenOpen: () => HTMLElement | null;
};
export declare function getTopElement(): HTMLElement | null;
//# sourceMappingURL=use-blocking-element.d.ts.map