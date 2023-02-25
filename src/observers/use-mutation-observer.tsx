import { useCallback, useEffect } from "preact/hooks";
import { useRefElement, UseRefElementParameters } from "../dom-helpers/use-ref-element.js";
import { returnNull, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";

export interface UseMutationObserverParameters<E extends Element> extends UseRefElementParameters<E> {
    mutationObserverParameters: {
        onChildList: null | ((info: { addedNodes: NodeList, removedNodes: NodeList }) => void);
        onAttributes: null | ((info: { attributeName: string | null, attributeNamespace: string | null, oldValue?: string | null }) => void);
        onCharacterData: null | ((info: MutationRecord) => void);
        subtree: boolean;
        characterDataOldValue: boolean;
        attributeOldValue: boolean;
        attributeFilter: string | string[];
    }
}

export function useMutationObserver<E extends Element>({
    refElementParameters,
    mutationObserverParameters: { attributeFilter, subtree, onChildList, characterDataOldValue, onCharacterData, onAttributes, attributeOldValue }
}: UseMutationObserverParameters<E>) {
    /* eslint-disable prefer-const */
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

    const { refElementReturn } = useRefElement<E>({
        refElementParameters: {
            onElementChange: useStableCallback((e: E | null, p: E | null | undefined) => { onElementChange?.(e, p); onNeedMutationObserverReset(e); }),
            ...rest
        }
    });
    const { getElement } = refElementReturn;

    return {
        refElementReturn,
        mutationObserverReturn: {}
    };
}