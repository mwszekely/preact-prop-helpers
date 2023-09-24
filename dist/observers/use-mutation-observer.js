import { returnNull, runImmediately, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useCallback, useEffect } from "../util/lib.js";
import { PropNames } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
const P = `PropNames.MutationObserverParameters`;
const R = `PropNames.MutationObserverReturn`;
export const MutationObserverParameters = {
    onChildList: `${P}.onChildList`,
    onAttributes: `${P}.onAttributes`,
    onCharacterData: `${P}.onCharacterData`,
    subtree: `${P}.subtree`,
    characterDataOldValue: `${P}.characterDataOldValue`,
    attributeOldValue: `${P}.attributeOldValue`,
    attributeFilter: `${P}.attributeFilter`
};
export const MutationObserverReturn = {};
/**
 * Effectively just a wrapper around a `MutationObserver`.
 *
 * @compositeParams
 */
export const useMutationObserver = monitored(function useMutationObserver({ [PropNames.RefElementReturn.getElement]: getElement, [PropNames.MutationObserverParameters.attributeFilter]: attributeFilter, [PropNames.MutationObserverParameters.subtree]: subtree, [PropNames.MutationObserverParameters.onChildList]: onChildList, [PropNames.MutationObserverParameters.characterDataOldValue]: characterDataOldValue, [PropNames.MutationObserverParameters.onCharacterData]: onCharacterData, [PropNames.MutationObserverParameters.onAttributes]: onAttributes, [PropNames.MutationObserverParameters.attributeOldValue]: attributeOldValue }) {
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
    return {
        [PropNames.RefElementParameters.onElementChange]: useStableCallback((e, p, r) => {
            onNeedMutationObserverReset(e);
        }),
    };
});
//# sourceMappingURL=use-mutation-observer.js.map