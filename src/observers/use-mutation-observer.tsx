import { UseRefElementParameters, UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { returnNull, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useCallback, useEffect } from "../util/lib.js";
import { PropNames } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";

const P = `PropNames.MutationObserverParameters`;
const R = `PropNames.MutationObserverReturn`;

declare module "../util/types.js" { interface PropNames { MutationObserverParameters: typeof MutationObserverParameters } }
declare module "../util/types.js" { interface PropNames { MutationObserverReturn: typeof MutationObserverReturn } }

export const MutationObserverParameters = {
    onChildList: `${P}.onChildList`,
    onAttributes: `${P}.onAttributes`,
    onCharacterData: `${P}.onCharacterData`,
    subtree: `${P}.subtree`,
    characterDataOldValue: `${P}.characterDataOldValue`,
    attributeOldValue: `${P}.attributeOldValue`,
    attributeFilter: `${P}.attributeFilter`
} as const;

export const MutationObserverReturn = {}

export type UseMutationObserverParametersSelf = {
    [MutationObserverParameters.onChildList]: null | ((info: { addedNodes: NodeList, removedNodes: NodeList }) => void);
    [MutationObserverParameters.onAttributes]: null | ((info: { attributeName: string | null, attributeNamespace: string | null, oldValue?: string | null }) => void);
    [MutationObserverParameters.onCharacterData]: null | ((info: MutationRecord) => void);
    [MutationObserverParameters.subtree]: boolean;
    [MutationObserverParameters.characterDataOldValue]: boolean;
    [MutationObserverParameters.attributeOldValue]: boolean;
    [MutationObserverParameters.attributeFilter]: string | string[];
}

export interface UseMutationObserverParameters<E extends Element> extends UseMutationObserverParametersSelf, Pick<UseRefElementReturnType<E>, typeof PropNames.RefElementReturn.getElement> {}

export interface UseMutationObserverReturnType<E extends Element> extends 
Pick<UseRefElementParameters<E>, typeof PropNames.RefElementParameters.onElementChange> {}

/**
 * Effectively just a wrapper around a `MutationObserver`.
 * 
 * @compositeParams
 */
export const useMutationObserver = monitored(function useMutationObserver<E extends Element>({
    [PropNames.RefElementReturn.getElement]: getElement,
    [PropNames.MutationObserverParameters.attributeFilter]: attributeFilter, 
    [PropNames.MutationObserverParameters.subtree]: subtree, 
    [PropNames.MutationObserverParameters.onChildList]: onChildList, 
    [PropNames.MutationObserverParameters.characterDataOldValue]: characterDataOldValue, 
    [PropNames.MutationObserverParameters.onCharacterData]: onCharacterData, 
    [PropNames.MutationObserverParameters.onAttributes]: onAttributes, 
    [PropNames.MutationObserverParameters.attributeOldValue]: attributeOldValue
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
        [PropNames.RefElementParameters.onElementChange]: useStableCallback((e: E | null, p: E | null | undefined, r) => {
            onNeedMutationObserverReset(e);
        }),
    };
})