import { returnNull, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useEffect } from "../util/lib.js";
import { $getElement, $refElementReturn } from "./use-ref-element.js";
export const $getText = Symbol();
export const $onTextContentChange = Symbol();
export const $textContentParameters = Symbol();
export const $getTextContent = Symbol();
export const $textContentReturn = Symbol();
/**
 * Allows examining the rendered component's text content whenever it renders and reacting to changes.
 *
 * @compositeParams
 */
export const useTextContent = (function useTextContent({ [$refElementReturn]: { [$getElement]: getElement }, [$textContentParameters]: { [$getText]: getText, [$onTextContentChange]: onTextContentChange } }) {
    const [getTextContent, setTextContent] = usePassiveState(onTextContentChange, returnNull, runImmediately);
    useEffect(() => {
        const element = getElement();
        if (element) {
            const textContent = getText(element);
            if (textContent) {
                setTextContent(textContent);
            }
        }
    });
    return { [$textContentReturn]: { [$getTextContent]: getTextContent } };
});
//# sourceMappingURL=use-text-content.js.map