import { OnPassiveStateChange } from "../preact-extensions/use-passive-state.js";
import { PropNames } from "../util/types.js";
import { UseRefElementReturnType } from "./use-ref-element.js";
declare module "../util/types.js" {
    interface PropNames {
        TextContentParameters: typeof PNames;
    }
}
declare module "../util/types.js" {
    interface PropNames {
        TextContentReturn: typeof RNames;
    }
}
export declare const PNames: {
    readonly getText: "PropNames.TextContentParameters.getText";
    readonly onTextContentChange: "PropNames.TextContentParameters.onTextContentChange";
};
export declare const RNames: {
    readonly getTextContent: "PropNames.TextContentReturn.getTextContent";
};
export interface UseTextContentParametersSelf<E extends Element> {
    /**
     * Return the text content of this component. By default, `e => e.textContent` is probably what you want.
     *
     * @remarks Reminder that `element.innerText` is heavy and causes layout calculations, but respects `display:none` and such.
     * `element.textContent` is usually what you want if this is used many times across a page (like as part of a list item).
     */
    [PropNames.TextContentParameters.getText](e: E | null): string | null;
    /**
     * During `useEffect`, this is called if the text content of the rendered element has changed.
     *
     * @see {@link useMutationObserver} for a more robust implementation of this idea
     */
    [PropNames.TextContentParameters.onTextContentChange]: OnPassiveStateChange<string | null, never>;
}
export interface UseTextContentReturnTypeSelf {
    /** Returns the last known value of the element's text content */
    [PropNames.TextContentReturn.getTextContent]: () => string | null;
}
export interface UseTextContentParameters<E extends Element> extends UseTextContentParametersSelf<E>, Pick<UseRefElementReturnType<E>, (typeof PropNames)["RefElementReturn"]["getElement"]> {
}
export interface UseTextContentReturnType extends UseTextContentReturnTypeSelf {
}
/**
 * Allows examining the rendered component's text content whenever it renders and reacting to changes.
 *
 * @compositeParams
 */
export declare const useTextContent: <E extends Element>({ [PropNames.RefElementReturn.getElement]: getElement, [PropNames.TextContentParameters.getText]: getText, [PropNames.TextContentParameters.onTextContentChange]: onTextContentChange }: UseTextContentParameters<E>) => UseTextContentReturnType;
//# sourceMappingURL=use-text-content.d.ts.map