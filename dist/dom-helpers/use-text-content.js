import { useEffect } from "react";
import { returnNull, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { monitorCallCount } from "../util/use-call-count.js";
export function useTextContent({ refElementReturn: { getElement }, textContentParameters: { getText, onTextContentChange, hidden } }) {
    monitorCallCount(useTextContent);
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