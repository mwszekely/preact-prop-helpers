import { useRefElement } from "../dom-helpers/use-ref-element.js";
import { returnNull, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useCallback, useEffect } from "../util/lib.js";
import { monitored } from "../util/use-call-count.js";
/**
 * Effectively just a wrapper around a `MutationObserver`.
 *
 * @compositeParams
 */
export const useMutationObserver = /*@__PURE__*/ monitored(function useMutationObserver({ refElementParameters, mutationObserverParameters: { attributeFilter, subtree, onChildList, characterDataOldValue, onCharacterData, onAttributes, attributeOldValue } }) {
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
    }), returnNull, { debounceRendering: runImmediately, skipMountInitialization: true });
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
    const { refElementReturn, propsStable } = useRefElement({
        refElementParameters: {
            onElementChange: useStableCallback((e, p, r) => { onElementChange?.(e, p, r); onNeedMutationObserverReset(e); }),
            ...rest
        }
    });
    const { getElement } = refElementReturn;
    return {
        refElementReturn,
        propsStable
    };
});
//# sourceMappingURL=use-mutation-observer.js.map