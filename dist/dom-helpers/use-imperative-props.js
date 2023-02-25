import { useCallback, useRef } from "preact/hooks";
import { useMergedProps } from "./use-merged-props.js";
import { useRefElement } from "./use-ref-element.js";
export function useImperativeProps() {
    const currentImperativeProps = useRef({ className: new DOMTokenList(), style: {}, others: {} });
    const { refElementReturn: { getElement, propsStable } } = useRefElement({ refElementParameters: { onElementChange: undefined, onMount: undefined, onUnmount: undefined } });
    const addClass = useCallback((cls) => {
        getElement()?.classList.add(cls);
        currentImperativeProps.current.className.add(cls);
    }, []);
    const removeClass = useCallback((cls) => {
        getElement()?.classList.remove(cls);
        currentImperativeProps.current.className.remove(cls);
    }, []);
    const setStyle = useCallback((prop, value) => {
        currentImperativeProps.current.style[prop] = value;
        getElement()?.style.setProperty(prop, value ?? null);
    }, []);
    const removeStyle = useCallback((prop) => {
        delete currentImperativeProps.current.style[prop];
        getElement()?.style.removeProperty(prop);
    }, []);
    const setAttribute = useCallback((prop, value) => {
        currentImperativeProps.current.others[prop] = value;
        getElement()?.setAttribute(prop, value);
    }, []);
    const removeAttribute = useCallback((prop) => {
        delete currentImperativeProps.current.others[prop];
        getElement()?.removeAttribute(prop);
    }, []);
    return {
        imperativeProps: useRef({
            addClass,
            removeClass,
            setStyle,
            removeStyle,
            setAttribute,
            removeAttribute,
        }).current,
        propsUnstable: useMergedProps(propsStable, { className: currentImperativeProps.current.className.toString(), style: currentImperativeProps.current.style }, currentImperativeProps.current.others)
    };
}
//# sourceMappingURL=use-imperative-props.js.map