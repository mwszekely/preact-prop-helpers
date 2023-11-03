import { UseRefElement } from "../dom-helpers/use-ref-element.js";
import { Parameter, StandardDepsPick, StandardDepsPropsStable, StandardHook } from "../util/types.js";
export interface UseMutationObserverParametersSelf<E extends Element> {
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
export type UseMutationObserver<E extends Element> = StandardHook<"mutationObserver", UseMutationObserverParametersSelf<E>, [StandardDepsPick<"params", UseRefElement<E>, "refElementParameters", "pick", "onElementChange">], never, [StandardDepsPick<"return", UseRefElement<E>>, StandardDepsPropsStable<E>]>;
/**
 * Effectively just a wrapper around a `MutationObserver`.
 *
 * @compositeParams
 */
export declare const useMutationObserver: <E extends Element>({ refElementParameters, mutationObserverParameters: { attributeFilter, subtree, onChildList, characterDataOldValue, onCharacterData, onAttributes, attributeOldValue }, ...void1 }: {
    mutationObserverParameters: UseMutationObserverParametersSelf<E>;
} & StandardDepsPick<"params", UseRefElement<E>, "refElementParameters", "pick", "onElementChange">) => {} & StandardDepsPick<"return", UseRefElement<E>> & StandardDepsPropsStable<E>;
//# sourceMappingURL=use-mutation-observer.d.ts.map