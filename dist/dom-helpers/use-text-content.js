import { useEffect } from "preact/hooks";
import { returnNull, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
export function useTextContent({ refElementReturn: { getElement }, textContentParameters: { getText, onTextContentChange, hidden } }) {
    const [getTextContent, setTextContent] = usePassiveState(onTextContentChange, returnNull, runImmediately);
    useEffect(() => {
        if (!hidden) {
            const element = getElement();
            if (element) {
                const textContent = getText(element);
                if (textContent) {
                    setTextContent(textContent);
                }
            }
        }
    });
    return { textContentReturn: { getTextContent } };
}
//# sourceMappingURL=use-text-content.js.map