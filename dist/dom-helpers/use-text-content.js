import { returnNull, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useEffect } from "../util/lib.js";
import { monitored } from "../util/use-call-count.js";
import { PropNames_RefElementReturn_getElement } from "./use-ref-element.js";
const P = `PropNames.TextContentParameters`;
const R = `PropNames.TextContentReturn`;
export const PropNames_TextContentParameters_getText = `${P}.getText`;
export const PropNames_TextContentParameters_onTextContentChange = `${P}.onTextContentChange`;
export const PropNames_TextContentReturn_getTextContent = `${R}.getTextContent`;
/**
 * Allows examining the rendered component's text content whenever it renders and reacting to changes.
 *
 * @compositeParams
 */
export const useTextContent = monitored(function useTextContent({ [PropNames_RefElementReturn_getElement]: getElement, [PropNames_TextContentParameters_getText]: getText, [PropNames_TextContentParameters_onTextContentChange]: onTextContentChange }) {
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
    return {
        [PropNames_TextContentReturn_getTextContent]: getTextContent
    };
});
//# sourceMappingURL=use-text-content.js.map