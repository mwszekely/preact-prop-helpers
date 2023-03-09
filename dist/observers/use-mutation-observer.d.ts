import { UseRefElementParameters } from "../dom-helpers/use-ref-element.js";
export interface UseMutationObserverParameters<E extends Element> extends UseRefElementParameters<E> {
    mutationObserverParameters: {
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
    };
}
export declare function useMutationObserver<E extends Element>({ refElementParameters, mutationObserverParameters: { attributeFilter, subtree, onChildList, characterDataOldValue, onCharacterData, onAttributes, attributeOldValue } }: UseMutationObserverParameters<E>): {
    refElementReturn: {
        getElement(): E | null;
    };
    mutationObserverReturn: {};
};
//# sourceMappingURL=use-mutation-observer.d.ts.map