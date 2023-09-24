import { UseRefElementParameters, UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { PropNames } from "../util/types.js";
declare module "../util/types.js" {
    interface PropNames {
        MutationObserverParameters: typeof MutationObserverParameters;
    }
}
declare module "../util/types.js" {
    interface PropNames {
        MutationObserverReturn: typeof MutationObserverReturn;
    }
}
export declare const MutationObserverParameters: {
    readonly onChildList: "PropNames.MutationObserverParameters.onChildList";
    readonly onAttributes: "PropNames.MutationObserverParameters.onAttributes";
    readonly onCharacterData: "PropNames.MutationObserverParameters.onCharacterData";
    readonly subtree: "PropNames.MutationObserverParameters.subtree";
    readonly characterDataOldValue: "PropNames.MutationObserverParameters.characterDataOldValue";
    readonly attributeOldValue: "PropNames.MutationObserverParameters.attributeOldValue";
    readonly attributeFilter: "PropNames.MutationObserverParameters.attributeFilter";
};
export declare const MutationObserverReturn: {};
export type UseMutationObserverParametersSelf = {
    [MutationObserverParameters.onChildList]: null | ((info: {
        addedNodes: NodeList;
        removedNodes: NodeList;
    }) => void);
    [MutationObserverParameters.onAttributes]: null | ((info: {
        attributeName: string | null;
        attributeNamespace: string | null;
        oldValue?: string | null;
    }) => void);
    [MutationObserverParameters.onCharacterData]: null | ((info: MutationRecord) => void);
    [MutationObserverParameters.subtree]: boolean;
    [MutationObserverParameters.characterDataOldValue]: boolean;
    [MutationObserverParameters.attributeOldValue]: boolean;
    [MutationObserverParameters.attributeFilter]: string | string[];
};
export interface UseMutationObserverParameters<E extends Element> extends UseMutationObserverParametersSelf, Pick<UseRefElementReturnType<E>, typeof PropNames.RefElementReturn.getElement> {
}
export interface UseMutationObserverReturnType<E extends Element> extends Pick<UseRefElementParameters<E>, typeof PropNames.RefElementParameters.onElementChange> {
}
/**
 * Effectively just a wrapper around a `MutationObserver`.
 *
 * @compositeParams
 */
export declare const useMutationObserver: <E extends Element>({ [PropNames.RefElementReturn.getElement]: getElement, [PropNames.MutationObserverParameters.attributeFilter]: attributeFilter, [PropNames.MutationObserverParameters.subtree]: subtree, [PropNames.MutationObserverParameters.onChildList]: onChildList, [PropNames.MutationObserverParameters.characterDataOldValue]: characterDataOldValue, [PropNames.MutationObserverParameters.onCharacterData]: onCharacterData, [PropNames.MutationObserverParameters.onAttributes]: onAttributes, [PropNames.MutationObserverParameters.attributeOldValue]: attributeOldValue }: UseMutationObserverParameters<E>) => UseMutationObserverReturnType<E>;
//# sourceMappingURL=use-mutation-observer.d.ts.map