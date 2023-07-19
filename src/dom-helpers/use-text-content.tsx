import { OnPassiveStateChange, returnNull, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { TargetedPick, useEffect } from "../util/lib.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { UseRefElementReturnType } from "./use-ref-element.js";

export interface UseTextContentParametersSelf<E extends Element> {
    /**
     * Return the text content of this component. By default, `e => e.textContent` is probably what you want.
     */
    getText(e: E | null): string | null;
    onTextContentChange: OnPassiveStateChange<string | null, never>;
}

export interface UseTextContentParameters<E extends Element> extends TargetedPick<UseRefElementReturnType<E>, "refElementReturn", "getElement"> {
    textContentParameters: UseTextContentParametersSelf<E>;
}

export interface UseTextContentReturnTypeSelf { getTextContent: () => string | null; }

export interface UseTextContentReturnType {
    textContentReturn: UseTextContentReturnTypeSelf;
}

/**
 * @compositeParams
 */
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
