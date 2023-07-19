import { OnPassiveStateChange } from "../preact-extensions/use-passive-state.js";
import { TargetedPick } from "../util/lib.js";
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
export interface UseTextContentReturnTypeSelf {
    getTextContent: () => string | null;
}
export interface UseTextContentReturnType {
    textContentReturn: UseTextContentReturnTypeSelf;
}
/**
 * @compositeParams
 */
export declare function useTextContent<E extends Element>({ refElementReturn: { getElement }, textContentParameters: { getText, onTextContentChange } }: UseTextContentParameters<E>): UseTextContentReturnType;
//# sourceMappingURL=use-text-content.d.ts.map