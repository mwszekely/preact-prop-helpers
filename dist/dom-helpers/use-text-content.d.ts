import { OnPassiveStateChange } from "../preact-extensions/use-passive-state.js";
import { TargetedPick } from "../util/lib.js";
import { UseRefElementReturnType } from "./use-ref-element.js";
export interface UseTextContentParametersSelf<E extends Element> {
    /**
     * Return the text content of this component. By default, `e => e.textContent` is probably what you want.
     *
     * @remarks Reminder that `element.innerText` is heavy and causes layout calculations, but respects `display:none` and such.
     * `element.textContent` is usually what you want if this is used many times across a page (like as part of a list item).
     */
    getText(e: E | null): string | null;
    /**
     * During `useEffect`, this is called if the text content of the rendered element has changed.
     *
     * @see {@link useMutationObserver} for a more robust implementation of this idea
     */
    onTextContentChange: OnPassiveStateChange<string | null, never>;
}
export interface UseTextContentParameters<E extends Element> extends TargetedPick<UseRefElementReturnType<E>, "refElementReturn", "getElement"> {
    textContentParameters: UseTextContentParametersSelf<E>;
}
export interface UseTextContentReturnTypeSelf {
    /** Returns the last known value of the element's text content */
    getTextContent: () => string | null;
}
export interface UseTextContentReturnType {
    textContentReturn: UseTextContentReturnTypeSelf;
}
/**
 * Allows examining the rendered component's text content whenever it renders and reacting to changes.
 *
 * @compositeParams
 */
export declare const useTextContent: <E extends Element>({ refElementReturn: { getElement }, textContentParameters: { getText, onTextContentChange } }: UseTextContentParameters<E>) => UseTextContentReturnType;
//# sourceMappingURL=use-text-content.d.ts.map