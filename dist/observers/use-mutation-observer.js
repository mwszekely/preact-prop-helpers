import { useCallback, useEffect } from "react";
import { useRefElement } from "../dom-helpers/use-ref-element.js";
import { returnNull, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { monitorCallCount } from "../util/use-call-count.js";
export function useMutationObserver({ refElementParameters, mutationObserverParameters: { attributeFilter, subtree, onChildList, characterDataOldValue, onCharacterData, onAttributes, attributeOldValue } }) {
    monitorCallCount(useMutationObserver);
    const { onElementChange, ...rest } = (refElementParameters || {});
    if (typeof attributeFilter === "string")
        attributeFilter = [attributeFilter];
    const attributeKey = attributeFilter?.join(";");
    const attributes = !!onAttributes;
    const characterData = !!onCharacterData;
    const childList = !!onChildList;
    const stableOnChildList = useStableCallback(onChildList ?? (() => { }));
    const stableOnCharacterData = useStableCallback(onCharacterData ?? (() => { }));
    const stableOnAttributes = useStableCallback(onAttributes ?? (() => { }));
    const [_getMo, setMo] = usePassiveState(useStableCallback(observer => {
        const element = getElement();
        if (element && observer && (!!attributeKey || !!characterData || !!childList)) {
            observer.observe(element, {
                attributeFilter: attributeFilter,
                attributeOldValue,
                attributes,
                characterData,
                characterDataOldValue,
                childList,
                subtree
            });
            return () => observer.disconnect();
        }
    }), returnNull, runImmediately);
    const onNeedMutationObserverReset = useCallback((element) => {
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
            });
        }
    }, []);
    useEffect(() => {
        onNeedMutationObserverReset(getElement());
    }, [attributeKey, attributeOldValue, characterDataOldValue, subtree]);
    const { refElementReturn } = useRefElement({
        refElementParameters: {
            onElementChange: useStableCallback((e, p) => { onElementChange?.(e, p); onNeedMutationObserverReset(e); }),
            ...rest
        }
    });
    const { getElement } = refElementReturn;
    return {
        refElementReturn,
        mutationObserverReturn: {}
    };
}
//# sourceMappingURL=use-mutation-observer.js.map