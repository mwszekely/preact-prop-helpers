import { UseRefElementParameters, UseRefElementReturnType, $refElementParameters } from "../dom-helpers/use-ref-element.js";
export declare const $onChildList: unique symbol;
export declare const $onAttributes: unique symbol;
export declare const $onCharacterData: unique symbol;
export declare const $subtree: unique symbol;
export declare const $characterDataOldValue: unique symbol;
export declare const $attributeOldValue: unique symbol;
export declare const $attributeFilter: unique symbol;
export declare const $mutationObserverParameters: unique symbol;
export interface UseMutationObserverParametersSelf<E extends Element> extends UseRefElementParameters<E> {
    [$onChildList]: null | ((info: {
        addedNodes: NodeList;
        removedNodes: NodeList;
    }) => void);
    [$onAttributes]: null | ((info: {
        attributeName: string | null;
        attributeNamespace: string | null;
        oldValue?: string | null;
    }) => void);
    [$onCharacterData]: null | ((info: MutationRecord) => void);
    [$subtree]: boolean;
    [$characterDataOldValue]: boolean;
    [$attributeOldValue]: boolean;
    [$attributeFilter]: string | string[];
}
export interface UseMutationObserverParameters<E extends Element> extends UseRefElementParameters<E> {
    [$mutationObserverParameters]: UseMutationObserverParametersSelf<E>;
}
export interface UseMutationObserverReturnType<E extends Element> extends UseRefElementReturnType<E> {
}
/**
 * Effectively just a wrapper around a `MutationObserver`.
 *
 * @compositeParams
 */
export declare const useMutationObserver: <E extends Element>({ [$refElementParameters]: refElementParameters, [$mutationObserverParameters]: { [$attributeFilter]: attributeFilter, [$subtree]: subtree, [$onChildList]: onChildList, [$characterDataOldValue]: characterDataOldValue, [$onCharacterData]: onCharacterData, [$onAttributes]: onAttributes, [$attributeOldValue]: attributeOldValue } }: UseMutationObserverParameters<E>) => UseMutationObserverReturnType<E>;
//# sourceMappingURL=use-mutation-observer.d.ts.map