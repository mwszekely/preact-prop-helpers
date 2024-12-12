
import { OnPassiveStateChange, returnNull, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { Nullable, TargetedPick, useEffect } from "../util/lib.js";
import { useMonitoring } from "../util/use-call-count.js";
import { UseRefElementReturnType } from "./use-ref-element.js";

export interface UseTextContentParametersSelf<E extends Element> {
    /**
     * Return the text content of this component. By default, `e => e.textContent` is probably what you want.
     * 
     * @remarks Reminder that `element.innerText` is heavy and causes layout calculations, but respects `display:none` and such. 
     * `element.textContent` is usually what you want if this is used many times across a page (like as part of a list item).
     */
    getText(e: E | null): string | null;

    /**
     * During `useEffect`, this is called if the text content of the rendered element has changed.
     * 
     * @see {@link useMutationObserver} for a more robust implementation of this idea
     */
    onTextContentChange: Nullable<OnPassiveStateChange<string | null, never>>;
}

export interface UseTextContentParameters<E extends Element> extends TargetedPick<UseRefElementReturnType<E>, "refElementReturn", "getElement"> {
    textContentParameters: UseTextContentParametersSelf<E>;
}

export interface UseTextContentReturnTypeSelf {
    /** Returns the last known value of the element's text content */
    getTextContent: () => string | null;
}

export interface UseTextContentReturnType {
    textContentReturn: UseTextContentReturnTypeSelf;
}

/**
 * Allows examining the rendered component's text content whenever it renders and reacting to changes.
 * 
 * @compositeParams
 * 
 * #__NO_SIDE_EFFECTS__
 */
export function useTextContent<E extends Element>({ refElementReturn: { getElement }, textContentParameters: { getText, onTextContentChange } }: UseTextContentParameters<E>): UseTextContentReturnType {
    return useMonitoring(function useTextContent(): UseTextContentReturnType {
        const [getTextContent, setTextContent] = usePassiveState<string | null, never>(onTextContentChange, returnNull, { debounceRendering: runImmediately, skipMountInitialization: true });
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
    });
}
