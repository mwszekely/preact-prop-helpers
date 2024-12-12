import { UseRefElementParameters, UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
export interface UseMutationObserverParametersSelf<E extends Element> extends UseRefElementParameters<E> {
    onChildList: null | ((info: {
        addedNodes: NodeList;
        removedNodes: NodeList;
    }) => void);
    onAttributes: null | ((info: {
        attributeName: string | null;
        attributeNamespace: string | null;
        oldValue?: string | null;
    }) => void);
    onCharacterData: null | ((info: MutationRecord) => void);
    subtree: boolean;
    characterDataOldValue: boolean;
    attributeOldValue: boolean;
    attributeFilter: string | string[];
}
export interface UseMutationObserverParameters<E extends Element> extends UseRefElementParameters<E> {
    mutationObserverParameters: UseMutationObserverParametersSelf<E>;
}
export interface UseMutationObserverReturnType<E extends Element> extends UseRefElementReturnType<E> {
}
/**
 * Effectively just a wrapper around a `MutationObserver`.
 *
 * @compositeParams
 */
export declare function useMutationObserver<E extends Element>({ refElementParameters, mutationObserverParameters: { attributeFilter, subtree, onChildList, characterDataOldValue, onCharacterData, onAttributes, attributeOldValue } }: UseMutationObserverParameters<E>): UseMutationObserverReturnType<E>;
//# sourceMappingURL=use-mutation-observer.d.ts.map