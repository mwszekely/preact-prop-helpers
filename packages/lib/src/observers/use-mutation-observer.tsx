import { UseRefElementParameters, UseRefElementReturnType, useRefElement } from "../dom-helpers/use-ref-element.js";
import { returnNull, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { JSX, TagToElement, useCallback, useEffect } from "../util/lib.js";
import { useMonitoring } from "../util/use-call-count.js";

export interface UseMutationObserverParametersSelf<Tag extends keyof JSX.IntrinsicElements> extends UseRefElementParameters<Tag> {
    onChildList: null | ((info: { addedNodes: NodeList, removedNodes: NodeList }) => void);
    onAttributes: null | ((info: { attributeName: string | null, attributeNamespace: string | null, oldValue?: string | null }) => void);
    onCharacterData: null | ((info: MutationRecord) => void);
    subtree: boolean;
    characterDataOldValue: boolean;
    attributeOldValue: boolean;
    attributeFilter: string | string[];
}


export interface UseMutationObserverParameters<Tag extends keyof JSX.IntrinsicElements> extends UseRefElementParameters<Tag> {
    mutationObserverParameters: UseMutationObserverParametersSelf<Tag>;
}

export interface UseMutationObserverReturnType<Tag extends keyof JSX.IntrinsicElements> extends UseRefElementReturnType<Tag> {

}

/**
 * Effectively just a wrapper around a `MutationObserver`.
 * 
 * @compositeParams
 */
export function useMutationObserver<Tag extends keyof JSX.IntrinsicElements>({
    refElementParameters,
    mutationObserverParameters: { attributeFilter, subtree, onChildList, characterDataOldValue, onCharacterData, onAttributes, attributeOldValue }
}: UseMutationObserverParameters<Tag>): UseMutationObserverReturnType<Tag> {

    return useMonitoring(function useMutationObserver(): UseMutationObserverReturnType<Tag> {

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
        }), returnNull, { debounceRendering: runImmediately, skipMountInitialization: true })

        const onNeedMutationObserverReset = useCallback((element: TagToElement<Tag> | null) => {
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

        const { refElementReturn, propsStable } = useRefElement<Tag>({
            refElementParameters: {
                onElementChange: useStableCallback((e: TagToElement<Tag> | null, p: TagToElement<Tag> | null | undefined, r) => { onElementChange?.(e, p, r); onNeedMutationObserverReset(e); }),
                ...rest
            }
        });
        const { getElement } = refElementReturn;

        return {
            refElementReturn,
            propsStable
        };
    });
}