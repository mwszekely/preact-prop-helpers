import { returnNull, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useEffect } from "../util/lib.js";
import { PropNames } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
const P = `PropNames.TextContentParameters`;
const R = `PropNames.TextContentReturn`;
export const PNames = {
    getText: `${P}.getText`,
    onTextContentChange: `${P}.onTextContentChange`
};
export const RNames = {
    getTextContent: `${R}.getTextContent`
};
PropNames.TextContentParameters = PNames;
PropNames.TextContentReturn = RNames;
/**
 * Allows examining the rendered component's text content whenever it renders and reacting to changes.
 *
 * @compositeParams
 */
export const useTextContent = monitored(function useTextContent({ [PropNames.RefElementReturn.getElement]: getElement, [PropNames.TextContentParameters.getText]: getText, [PropNames.TextContentParameters.onTextContentChange]: onTextContentChange }) {
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
        [PropNames.TextContentReturn.getTextContent]: getTextContent
    };
});
//# sourceMappingURL=use-text-content.js.map