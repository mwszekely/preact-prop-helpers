
import { OnPassiveStateChange, returnNull, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useEffect } from "../util/lib.js";
import { PropNames } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
import { UseRefElementReturnType } from "./use-ref-element.js";

declare module "../util/types.js" { interface PropNames { TextContentParameters: typeof PNames } }
declare module "../util/types.js" { interface PropNames { TextContentReturn: typeof RNames } }

const P = `PropNames.TextContentParameters`;
const R = `PropNames.TextContentReturn`;

export const PNames = {
    getText: `${P}.getText`,
    onTextContentChange: `${P}.onTextContentChange`
} as const;

export const RNames = {
    getTextContent: `${R}.getTextContent`
} as const;
PropNames.TextContentParameters = PNames;
PropNames.TextContentReturn = RNames;
export interface UseTextContentParametersSelf<E extends Element> {
    /**
     * Return the text content of this component. By default, `e => e.textContent` is probably what you want.
     * 
     * @remarks Reminder that `element.innerText` is heavy and causes layout calculations, but respects `display:none` and such. 
     * `element.textContent` is usually what you want if this is used many times across a page (like as part of a list item).
     */
    [PropNames.TextContentParameters.getText](e: E | null): string | null;

    /**
     * During `useEffect`, this is called if the text content of the rendered element has changed.
     * 
     * @see {@link useMutationObserver} for a more robust implementation of this idea
     */
    [PropNames.TextContentParameters.onTextContentChange]: OnPassiveStateChange<string | null, never>;
}


export interface UseTextContentReturnTypeSelf {
    /** Returns the last known value of the element's text content */
    [PropNames.TextContentReturn.getTextContent]: () => string | null;
}

export interface UseTextContentParameters<E extends Element> extends UseTextContentParametersSelf<E>, Pick<UseRefElementReturnType<E>, (typeof PropNames)["RefElementReturn"]["getElement"]> { }
export interface UseTextContentReturnType extends UseTextContentReturnTypeSelf {}

/**
 * Allows examining the rendered component's text content whenever it renders and reacting to changes.
 * 
 * @compositeParams
 */
export const useTextContent = monitored(function useTextContent<E extends Element>({ 
    [PropNames.RefElementReturn.getElement]: getElement,
    [PropNames.TextContentParameters.getText]: getText,
    [PropNames.TextContentParameters.onTextContentChange]: onTextContentChange
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
        [PropNames.TextContentReturn.getTextContent]: getTextContent
    }
})
