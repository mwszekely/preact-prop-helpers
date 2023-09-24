import { PropNames_RefElementParameters_onElementChange, PropNames_RefElementReturn_getElement, UseRefElementParameters, UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
export declare const PropNames_MutationObserverParameters_onChildList = "PropNames.MutationObserverParameters.onChildList";
export declare const PropNames_MutationObserverParameters_onAttributes = "PropNames.MutationObserverParameters.onAttributes";
export declare const PropNames_MutationObserverParameters_onCharacterData = "PropNames.MutationObserverParameters.onCharacterData";
export declare const PropNames_MutationObserverParameters_subtree = "PropNames.MutationObserverParameters.subtree";
export declare const PropNames_MutationObserverParameters_characterDataOldValue = "PropNames.MutationObserverParameters.characterDataOldValue";
export declare const PropNames_MutationObserverParameters_attributeOldValue = "PropNames.MutationObserverParameters.attributeOldValue";
export declare const PropNames_MutationObserverParameters_attributeFilter = "PropNames.MutationObserverParameters.attributeFilter";
export type UseMutationObserverParametersSelf = {
    [PropNames_MutationObserverParameters_onChildList]: null | ((info: {
        addedNodes: NodeList;
        removedNodes: NodeList;
    }) => void);
    [PropNames_MutationObserverParameters_onAttributes]: null | ((info: {
        attributeName: string | null;
        attributeNamespace: string | null;
        oldValue?: string | null;
    }) => void);
    [PropNames_MutationObserverParameters_onCharacterData]: null | ((info: MutationRecord) => void);
    [PropNames_MutationObserverParameters_subtree]: boolean;
    [PropNames_MutationObserverParameters_characterDataOldValue]: boolean;
    [PropNames_MutationObserverParameters_attributeOldValue]: boolean;
    [PropNames_MutationObserverParameters_attributeFilter]: string | string[];
};
export interface UseMutationObserverParameters<E extends Element> extends UseMutationObserverParametersSelf, Pick<UseRefElementReturnType<E>, typeof PropNames_RefElementReturn_getElement> {
}
export interface UseMutationObserverReturnType<E extends Element> extends Pick<UseRefElementParameters<E>, typeof PropNames_RefElementParameters_onElementChange> {
}
/**
 * Effectively just a wrapper around a `MutationObserver`.
 *
 * @compositeParams
 */
export declare const useMutationObserver: <E extends Element>({ [PropNames_RefElementReturn_getElement]: getElement, [PropNames_MutationObserverParameters_attributeFilter]: attributeFilter, [PropNames_MutationObserverParameters_subtree]: subtree, [PropNames_MutationObserverParameters_onChildList]: onChildList, [PropNames_MutationObserverParameters_characterDataOldValue]: characterDataOldValue, [PropNames_MutationObserverParameters_onCharacterData]: onCharacterData, [PropNames_MutationObserverParameters_onAttributes]: onAttributes, [PropNames_MutationObserverParameters_attributeOldValue]: attributeOldValue }: UseMutationObserverParameters<E>) => UseMutationObserverReturnType<E>;
//# sourceMappingURL=use-mutation-observer.d.ts.map