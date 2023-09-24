import { PropNames_RefElementParameters_onElementChange, PropNames_RefElementReturn_getElement, UseRefElementParameters, UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { returnNull, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useCallback, useEffect } from "../util/lib.js";
import { monitored } from "../util/use-call-count.js";

const P = `PropNames.MutationObserverParameters`;
const R = `PropNames.MutationObserverReturn`;


export const PropNames_MutationObserverParameters_onChildList = `${P}.onChildList`;
export const PropNames_MutationObserverParameters_onAttributes = `${P}.onAttributes`;
export const PropNames_MutationObserverParameters_onCharacterData = `${P}.onCharacterData`;
export const PropNames_MutationObserverParameters_subtree = `${P}.subtree`;
export const PropNames_MutationObserverParameters_characterDataOldValue = `${P}.characterDataOldValue`;
export const PropNames_MutationObserverParameters_attributeOldValue = `${P}.attributeOldValue`;
export const PropNames_MutationObserverParameters_attributeFilter = `${P}.attributeFilter`;


export type UseMutationObserverParametersSelf = {
    [PropNames_MutationObserverParameters_onChildList]: null | ((info: { addedNodes: NodeList, removedNodes: NodeList }) => void);
    [PropNames_MutationObserverParameters_onAttributes]: null | ((info: { attributeName: string | null, attributeNamespace: string | null, oldValue?: string | null }) => void);
    [PropNames_MutationObserverParameters_onCharacterData]: null | ((info: MutationRecord) => void);
    [PropNames_MutationObserverParameters_subtree]: boolean;
    [PropNames_MutationObserverParameters_characterDataOldValue]: boolean;
    [PropNames_MutationObserverParameters_attributeOldValue]: boolean;
    [PropNames_MutationObserverParameters_attributeFilter]: string | string[];
}

export interface UseMutationObserverParameters<E extends Element> extends UseMutationObserverParametersSelf, Pick<UseRefElementReturnType<E>, typeof PropNames_RefElementReturn_getElement> {}

export interface UseMutationObserverReturnType<E extends Element> extends 
Pick<UseRefElementParameters<E>, typeof PropNames_RefElementParameters_onElementChange> {}

/**
 * Effectively just a wrapper around a `MutationObserver`.
 * 
 * @compositeParams
 */
export const useMutationObserver = monitored(function useMutationObserver<E extends Element>({
    [PropNames_RefElementReturn_getElement]: getElement,
    [PropNames_MutationObserverParameters_attributeFilter]: attributeFilter, 
    [PropNames_MutationObserverParameters_subtree]: subtree, 
    [PropNames_MutationObserverParameters_onChildList]: onChildList, 
    [PropNames_MutationObserverParameters_characterDataOldValue]: characterDataOldValue, 
    [PropNames_MutationObserverParameters_onCharacterData]: onCharacterData, 
    [PropNames_MutationObserverParameters_onAttributes]: onAttributes, 
    [PropNames_MutationObserverParameters_attributeOldValue]: attributeOldValue
}: UseMutationObserverParameters<E>): UseMutationObserverReturnType<E> {


    if (typeof attributeFilter === "string")
        attributeFilter = [attributeFilter];
    const attributeKey = attributeFilter?.join(";");

    const attributes = !!onAttributes;
    const characterData = !!onCharacterData;
    const childList = !!onChildList;

    const stableOnChildList = useStableCallback(onChildList ?? (() => { }));
    const stableOnCharacterData = useStableCallback(onCharacterData ?? (() => { }));
    const stableOnAttributes = useStableCallback(onAttributes ?? (() => { }));

    const [_getMo, setMo] = usePassiveState<MutationObserver | null, never>(useStableCallback(observer => {
        const element = getElement();
        if (element && observer && (!!attributeKey || !!characterData || !!childList)) {
            observer.observe(element, {
                attributeFilter: attributeFilter as Array<string>,
                attributeOldValue,
                attributes,
                characterData,
                characterDataOldValue,
                childList,
                subtree
            })

            return () => observer.disconnect();
        }
    }), returnNull, runImmediately)

    const onNeedMutationObserverReset = useCallback((element: E | null) => {
        if (element) {
            queueMicrotask(() => {
                setMo(new MutationObserver((a) => {
                    for (const mutation of a) {
                        switch (mutation.type) {
                            case "childList":
                                stableOnChildList(mutation);
                                break;

                            case "attributes":
                                stableOnAttributes(mutation);
                                break;

                            case "characterData":
                                stableOnCharacterData(mutation);
                                break;
                        }
                    }
                }));
            })
        }
    }, []);

    useEffect(() => {
        onNeedMutationObserverReset(getElement());
    }, [attributeKey, attributeOldValue, characterDataOldValue, subtree]);

    return {
        [PropNames_RefElementParameters_onElementChange]: useStableCallback((e: E | null, p: E | null | undefined, r) => {
            onNeedMutationObserverReset(e);
        }),
    };
})