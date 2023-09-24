import { getDocument } from "../dom-helpers/use-document-class.js";
import { returnNull, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useCallback, useEffect, useRef } from "../util/lib.js";
import { PropNames } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
const P = `PropNames.ElementSizeParameters`;
const R = `PropNames.ElementSizeReturn`;
export const PNames = {
    onSizeChange: `${P}.onSizeChange`,
    getObserveBox: `${P}.getObserveBox`
};
export const RNames = {
    getSize: `${R}.getSize`
};
PropNames.ElementSizeParameters ??= PNames;
PropNames.ElementSizeReturn ??= RNames;
/**
 * Measures an element, allowing you to react to its changes in size.
 *
 * @compositeParams
 */
export const useElementSize = monitored(function useElementSize({ [PropNames.ElementSizeParameters.getObserveBox]: getObserveBox, [PropNames.ElementSizeParameters.onSizeChange]: onSizeChange, [PropNames.RefElementReturn.getElement]: getElement }) {
    useEnsureStability("useElementSize", getObserveBox, onSizeChange);
    const currentObserveBox = useRef(undefined);
    const [getSize, setSize] = usePassiveState(onSizeChange, returnNull, runImmediately);
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
    useEffect(() => {
        if (getObserveBox) {
            if (currentObserveBox.current !== getObserveBox())
                needANewObserver(getElement(), getObserveBox());
        }
    });
    return {
        [PropNames.RefElementParameters.onElementChange]: useCallback((e, p, r) => { needANewObserver(e, getObserveBox?.()); }, []),
        [PropNames.ElementSizeReturn.getSize]: getSize
    };
});
//# sourceMappingURL=use-element-size.js.map