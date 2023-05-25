import { useEffect } from "preact/hooks";
import { OnPassiveStateChange, returnNull, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { UseRefElementReturnType } from "./use-ref-element.js";

export interface UseTextContentParameters<E extends Element> {
    refElementReturn: Pick<UseRefElementReturnType<E>["refElementReturn"], "getElement">;
    textContentParameters: {
        /**
         * Return the text content of this component. By default, `e => e.textContent` is probably what you want.
         */
        getText(e: E | null): string | null;
        onTextContentChange: OnPassiveStateChange<string | null, never>;
    }
}

export interface UseTextContentReturnType {
    textContentReturn: { getTextContent: () => string | null; }
}

export function useTextContent<E extends Element>({ refElementReturn: { getElement }, textContentParameters: { getText, onTextContentChange } }: UseTextContentParameters<E>): UseTextContentReturnType {
    monitorCallCount(useTextContent);

    const [getTextContent, setTextContent] = usePassiveState<string | null, never>(onTextContentChange, returnNull, runImmediately);
    useEffect(() => {
        const element = getElement();
        if (element) {
            const textContent = getText(element);
            if (textContent) {
                setTextContent(textContent);
            }
        }
    });
    return { textContentReturn: { getTextContent } }
}
