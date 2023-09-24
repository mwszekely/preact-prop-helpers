
import { OnPassiveStateChange, returnNull, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useEffect } from "../util/lib.js";
import { monitored } from "../util/use-call-count.js";
import { PropNames_RefElementReturn_getElement, UseRefElementReturnType } from "./use-ref-element.js";

const P = `PropNames.TextContentParameters`;
const R = `PropNames.TextContentReturn`;

export const PropNames_TextContentParameters_getText = `${P}.getText`;
export const PropNames_TextContentParameters_onTextContentChange = `${P}.onTextContentChange`;
export const PropNames_TextContentReturn_getTextContent = `${R}.getTextContent`;

export interface UseTextContentParametersSelf<E extends Element> {
    /**
     * Return the text content of this component. By default, `e => e.textContent` is probably what you want.
     * 
     * @remarks Reminder that `element.innerText` is heavy and causes layout calculations, but respects `display:none` and such. 
     * `element.textContent` is usually what you want if this is used many times across a page (like as part of a list item).
     */
    [PropNames_TextContentParameters_getText](e: E | null): string | null;

    /**
     * During `useEffect`, this is called if the text content of the rendered element has changed.
     * 
     * @see {@link useMutationObserver} for a more robust implementation of this idea
     */
    [PropNames_TextContentParameters_onTextContentChange]: OnPassiveStateChange<string | null, never>;
}


export interface UseTextContentReturnTypeSelf {
    /** Returns the last known value of the element's text content */
    [PropNames_TextContentReturn_getTextContent]: () => string | null;
}

export interface UseTextContentParameters<E extends Element> extends UseTextContentParametersSelf<E>, Pick<UseRefElementReturnType<E>, typeof PropNames_RefElementReturn_getElement> { }
export interface UseTextContentReturnType extends UseTextContentReturnTypeSelf { }

/**
 * Allows examining the rendered component's text content whenever it renders and reacting to changes.
 * 
 * @compositeParams
 */
export const useTextContent = monitored(function useTextContent<E extends Element>({
    [PropNames_RefElementReturn_getElement]: getElement,
    [PropNames_TextContentParameters_getText]: getText,
    [PropNames_TextContentParameters_onTextContentChange]: onTextContentChange
}: UseTextContentParameters<E>): UseTextContentReturnType {
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
    return {
        [PropNames_TextContentReturn_getTextContent]: getTextContent
    }
})
