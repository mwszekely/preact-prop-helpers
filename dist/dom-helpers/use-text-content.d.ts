import { OnPassiveStateChange } from "../preact-extensions/use-passive-state.js";
import { UseRefElementReturnType } from "./use-ref-element.js";
export interface UseTextContentParameters<E extends Element> {
    refElementReturn: Pick<UseRefElementReturnType<E>["refElementReturn"], "getElement">;
    textContentParameters: {
        /**
         * Return the text content of this component. By default, `e => e.textContent` is probably what you want.
         */
        getText(e: E | null): string | null;
        onTextContentChange: OnPassiveStateChange<string | null, never>;
        hidden: boolean;
    };
}
export interface UseTextContentReturnType {
    textContentReturn: {
        getTextContent: () => string | null;
    };
}
export declare function useTextContent<E extends Element>({ refElementReturn: { getElement }, textContentParameters: { getText, onTextContentChange, hidden } }: UseTextContentParameters<E>): UseTextContentReturnType;
//# sourceMappingURL=use-text-content.d.ts.map