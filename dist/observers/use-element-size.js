import { useCallback, useEffect, useRef } from "preact/hooks";
import { getDocument } from "../dom-helpers/use-document-class.js";
import { useRefElement } from "../dom-helpers/use-ref-element.js";
import { returnNull, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { monitorCallCount } from "../util/use-call-count.js";
export function useElementSize({ elementSizeParameters: { getObserveBox, onSizeChange }, refElementParameters }) {
    monitorCallCount(useElementSize);
    const { onElementChange, onMount, onUnmount } = (refElementParameters || {});
    useEnsureStability("useElementSize", getObserveBox, onSizeChange, onElementChange, onMount, onUnmount);
    const [getSize, setSize] = usePassiveState(onSizeChange, returnNull, runImmediately);
    const currentObserveBox = useRef(undefined);
    const needANewObserver = useCallback((element, observeBox) => {
        if (element) {
            const document = getDocument(element);
            const window = document.defaultView;
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
                document.addEventListener("resize", handleUpdate, { passive: true });
                return () => document.removeEventListener("resize", handleUpdate);
            }
        }
    }, []);
    const { refElementReturn, ...rest } = useRefElement({
        refElementParameters: {
            onElementChange: useCallback((e, p) => { needANewObserver(e, getObserveBox?.()); onElementChange?.(e, p); }, []),
            onMount,
            onUnmount
        }
    });
    const { getElement } = refElementReturn;
    useEffect(() => {
        if (getObserveBox) {
            if (currentObserveBox.current !== getObserveBox())
                needANewObserver(getElement(), getObserveBox());
        }
    });
    return {
        elementSizeReturn: { getSize },
        refElementReturn,
        ...rest
    };
}
//# sourceMappingURL=use-element-size.js.map