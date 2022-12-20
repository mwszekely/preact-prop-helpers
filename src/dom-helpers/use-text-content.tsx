import { useEffect } from "preact/hooks";
import { OnPassiveStateChange, returnNull, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state";
import { UseRefElementReturnType } from "./use-ref-element";

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

export function useTextContent<E extends Element>({ refElementReturn: { getElement }, textContentParameters: { getText, onTextContentChange } }: UseTextContentParameters<E>) {
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
