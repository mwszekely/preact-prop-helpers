import { useEffect } from "preact/hooks";
import { OnPassiveStateChange, returnNull, usePassiveState } from "../preact-extensions/use-passive-state";
import { UseRefElementReturnType } from "./use-ref-element";

export interface UseTextContentParameters<E extends Element> {
    refElementReturn: Pick<UseRefElementReturnType<E>["refElementReturn"], "getElement">;
    textContentParameters: {
        onTextContentChange: OnPassiveStateChange<string | null>;
    }
}

export function useTextContent<E extends Element>({ refElementReturn: { getElement }, textContentParameters: { onTextContentChange } }: UseTextContentParameters<E>) {
    const [getTextContent, setTextContent] = usePassiveState<string | null>(onTextContentChange, returnNull);
    useEffect(() => {
        const element = getElement();
        if (element) {
            const textContent = element.textContent;
            if (textContent) {
                setTextContent(textContent);
            }
        }
    });
    return { textContentReturn: { getTextContent } }
}
