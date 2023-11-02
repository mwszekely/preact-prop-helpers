
import { OnPassiveStateChange, returnNull, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useEffect } from "../util/lib.js";
import { GenericHook, Nullable, Parameter, StandardDepsPick } from "../util/types.js";
import { UseRefElement } from "./use-ref-element.js";

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

export interface UseTextContentReturnTypeSelf {
    /** Returns the last known value of the element's text content */
    getTextContent: () => string | null;
}


export type UseTextContent<E extends Element> = GenericHook<
    "textContent", 
    UseTextContentParametersSelf<E>, [StandardDepsPick<"return", UseRefElement<E>, "refElementReturn", "pick", "getElement">],
    UseTextContentReturnTypeSelf, []
>;
/**
 * Allows examining the rendered component's text content whenever it renders and reacting to changes.
 * 
 * @compositeParams
 */
export const useTextContent = (function useTextContent<E extends Element>({ refElementReturn: { getElement }, textContentParameters: { getText, onTextContentChange } }: Parameter<UseTextContent<E>>): ReturnType<UseTextContent<E>> {
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
})
