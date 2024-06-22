import { $onElementChange, $onMount, $onUnmount, $getElement, $refElementParameters, $refElementReturn, useRefElement } from "../dom-helpers/use-ref-element.js";
import { returnNull, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { getDocument, getWindow } from "../util/get-window.js";
import { useCallback, useEffect, useRef } from "../util/lib.js";
import { monitored } from "../util/use-call-count.js";
export const $onSizeChange = Symbol();
export const $getObserveBox = Symbol();
export const $elementSizeParameters = Symbol();
export const $getSize = Symbol();
export const $elementSizeReturn = Symbol();
/**
 * Measures an element, allowing you to react to its changes in size.
 *
 * @compositeParams
 */
export const useElementSize = monitored(function useElementSize({ [$elementSizeParameters]: { [$getObserveBox]: getObserveBox, [$onSizeChange]: onSizeChange }, [$refElementParameters]: refElementParameters }) {
    const { [$onElementChange]: onElementChange, [$onMount]: onMount, [$onUnmount]: onUnmount } = (refElementParameters || {});
    useEnsureStability("useElementSize", getObserveBox, onSizeChange, onElementChange, onMount, onUnmount);
    const [getSize, setSize] = usePassiveState(onSizeChange, returnNull, runImmediately);
    const currentObserveBox = useRef(undefined);
    const needANewObserver = useCallback((element, observeBox) => {
        if (element) {
            const document = getDocument(element);
            const window = getWindow(element);
            const handleUpdate = (entries) => {
                if (element.isConnected) {
                    const { clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop } = element;
                    setSize({ clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop }, entries);
                }
            };
            if (window && ("ResizeObserver" in window)) {
                const observer = new ResizeObserver((entries) => { handleUpdate(entries); });
                observer.observe(element, { box: observeBox });
                return () => observer.disconnect();
            }
            else {
                document?.addEventListener("resize", handleUpdate, { passive: true });
                return () => document?.removeEventListener("resize", handleUpdate);
            }
        }
    }, []);
    const { [$refElementReturn]: refElementReturn, ...rest } = useRefElement({
        [$refElementParameters]: {
            [$onElementChange]: useCallback((e, p, r) => { needANewObserver(e, getObserveBox?.()); onElementChange?.(e, p, r); }, []),
            [$onMount]: onMount,
            [$onUnmount]: onUnmount
        }
    });
    const { [$getElement]: getElement } = refElementReturn;
    useEffect(() => {
        if (getObserveBox) {
            if (currentObserveBox.current !== getObserveBox())
                needANewObserver(getElement(), getObserveBox());
        }
    });
    return {
        [$elementSizeReturn]: { [$getSize]: getSize },
        [$refElementReturn]: refElementReturn,
        ...rest
    };
});
//# sourceMappingURL=use-element-size.js.map