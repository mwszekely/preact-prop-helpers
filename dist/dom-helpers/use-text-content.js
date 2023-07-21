import { returnNull, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useEffect } from "../util/lib.js";
import { monitorCallCount } from "../util/use-call-count.js";
/**
 * Allows examining the rendered component's text content whenever it renders and reacting to changes.
 *
 * @compositeParams
 */
export function useTextContent({ refElementReturn: { getElement }, textContentParameters: { getText, onTextContentChange } }) {
    monitorCallCount(useTextContent);
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
    return { textContentReturn: { getTextContent } };
}
//# sourceMappingURL=use-text-content.js.map