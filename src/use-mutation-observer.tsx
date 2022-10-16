import { useCallback, useEffect } from "preact/hooks";
import { returnNull, usePassiveState } from "./use-passive-state";
import { useRefElement } from "./use-ref-element";
import { useStableCallback } from "./use-stable-callback";

export interface UseMutationObserverParameters {
    onChildList?: (info: { addedNodes: NodeList, removedNodes: NodeList }) => void;
    onAttributes?: (info: { attributeName: string | null, attributeNamespace: string | null, oldValue?: string | null }) => void;
    onCharacterData?: (info: MutationRecord) => void;
    subtree?: boolean;
    characterDataOldValue?: boolean;
    attributeOldValue?: boolean;
    attributeFilter?: string | string[];
}

export function useMutationObserver<E extends Element>(options: UseMutationObserverParameters | null) {
    /* eslint-disable prefer-const */
    let { attributeFilter, subtree, onChildList, characterDataOldValue, onCharacterData, onAttributes, attributeOldValue } = (options || ({} as Partial<UseMutationObserverParameters>)); 

    if (typeof attributeFilter === "string")
        attributeFilter = [attributeFilter];
    const attributeKey = attributeFilter?.join(";");

    const attributes = !!onAttributes;
    const characterData = !!onCharacterData;
    const childList = !!onChildList;

    const stableOnChildList = useStableCallback(onChildList ?? (() => { }));
    const stableOnCharacterData = useStableCallback(onCharacterData ?? (() => { }));
    const stableOnAttributes = useStableCallback(onAttributes ?? (() => { }));

    const [_getMo, setMo] = usePassiveState<MutationObserver | null>(useStableCallback(observer => {
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
    }), returnNull)

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

    const { getElement, props } = useRefElement<E>({
        onElementChange: onNeedMutationObserverReset
    });

    return { getElement, props };
}