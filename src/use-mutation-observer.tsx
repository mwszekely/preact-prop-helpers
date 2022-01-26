import { useEnsureStability } from "./use-passive-state";
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
    let { attributeFilter, subtree, onChildList, characterDataOldValue, onCharacterData, onAttributes, attributeOldValue } = (options || ({} as Partial<UseMutationObserverParameters>));

    if (typeof attributeFilter === "string")
        attributeFilter = [attributeFilter];
    let attributeKey = attributeFilter?.join(";");

    useEnsureStability(options?.subtree ?? false, options?.characterDataOldValue ?? false, options?.attributeOldValue ?? false, attributeKey ?? "");

    const attributes = !!onAttributes;
    const characterData = !!onCharacterData;
    const childList = !!onChildList;

    const stableOnChildList = useStableCallback(onChildList ?? (() => { }));
    const stableOnCharacterData = useStableCallback(onCharacterData ?? (() => { }));
    const stableOnAttributes = useStableCallback(onAttributes ?? (() => { }));

    const { getElement, useRefElementProps: useMutationObserverProps } = useRefElement<E>({
        onElementChange: element => {
            if (element) {
                let observer = new MutationObserver((a) => {
                    for (let mutation of a) {
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
                                ;
                        }
                    }
                });

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
        }
    });

    return { useMutationObserverProps, getElement };
}