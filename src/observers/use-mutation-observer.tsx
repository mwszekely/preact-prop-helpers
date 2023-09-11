import { UseRefElementParameters, UseRefElementReturnType, useRefElement } from "../dom-helpers/use-ref-element.js";
import { returnNull, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useCallback, useEffect } from "../util/lib.js";
import { monitored } from "../util/use-call-count.js";

export interface UseMutationObserverParametersSelf<E extends Element> extends UseRefElementParameters<E> {
    onChildList: null | ((info: { addedNodes: NodeList, removedNodes: NodeList }) => void);
    onAttributes: null | ((info: { attributeName: string | null, attributeNamespace: string | null, oldValue?: string | null }) => void);
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
export const useMutationObserver = monitored(function useMutationObserver<E extends Element>({
    refElementParameters,
    mutationObserverParameters: { attributeFilter, subtree, onChildList, characterDataOldValue, onCharacterData, onAttributes, attributeOldValue }
}: UseMutationObserverParameters<E>): UseMutationObserverReturnType<E> {

    const { onElementChange, ...rest } = (refElementParameters || {})


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
    }, [attributeKey, attributeOldValue, characterDataOldValue, subtree])

    const { refElementReturn, propsStable } = useRefElement<E>({
        refElementParameters: {
            onElementChange: useStableCallback((e: E | null, p: E | null | undefined, r) => { onElementChange?.(e, p, r); onNeedMutationObserverReset(e); }),
            ...rest
        }
    });
    const { getElement } = refElementReturn;

    return {
        refElementReturn,
        propsStable
    };
})