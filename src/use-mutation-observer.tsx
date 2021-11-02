import { useEffect } from "preact/hooks";
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

export function useMutationObserver(element?: HTMLElement, options: UseMutationObserverParameters = {}) {
    let { attributeFilter, subtree, onChildList, characterDataOldValue, onCharacterData, onAttributes, attributeOldValue } = options;

    if (typeof attributeFilter === "string")
        attributeFilter = [attributeFilter];
    let attributeKey = attributeFilter?.join(";");

    const attributes = !!onAttributes;
    const characterData = !!onCharacterData;
    const childList = !!onChildList;

    const stableOnChildList = useStableCallback(onChildList ?? (() => { }));
    const stableOnCharacterData = useStableCallback(onCharacterData ?? (() => { }));
    const stableOnAttributes = useStableCallback(onAttributes ?? (() => { }));

    useEffect(() => {
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
    }, [element, attributeKey, subtree, childList, characterDataOldValue, characterData, attributes, attributeOldValue])
}