import { $onElementChange, $getElement, $refElementParameters, $refElementReturn, useRefElement } from "../dom-helpers/use-ref-element.js";
import { returnNull, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useCallback, useEffect } from "../util/lib.js";
import { monitored } from "../util/use-call-count.js";
export const $onChildList = Symbol();
export const $onAttributes = Symbol();
export const $onCharacterData = Symbol();
export const $subtree = Symbol();
export const $characterDataOldValue = Symbol();
export const $attributeOldValue = Symbol();
export const $attributeFilter = Symbol();
export const $mutationObserverParameters = Symbol();
/**
 * Effectively just a wrapper around a `MutationObserver`.
 *
 * @compositeParams
 */
export const useMutationObserver = monitored(function useMutationObserver({ [$refElementParameters]: refElementParameters, [$mutationObserverParameters]: { [$attributeFilter]: attributeFilter, [$subtree]: subtree, [$onChildList]: onChildList, [$characterDataOldValue]: characterDataOldValue, [$onCharacterData]: onCharacterData, [$onAttributes]: onAttributes, [$attributeOldValue]: attributeOldValue } }) {
    const { [$onElementChange]: onElementChange, ...rest } = (refElementParameters || {});
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
    const { [$refElementReturn]: refElementReturn, propsStable } = useRefElement({
        [$refElementParameters]: {
            [$onElementChange]: useStableCallback((e, p, r) => { onElementChange?.(e, p, r); onNeedMutationObserverReset(e); }),
            ...rest
        }
    });
    const { [$getElement]: getElement } = refElementReturn;
    return {
        [$refElementReturn]: refElementReturn,
        propsStable
    };
});
//# sourceMappingURL=use-mutation-observer.js.map