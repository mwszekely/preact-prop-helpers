import { useCallback, useRef } from "preact/hooks";
import { useMergedProps } from "./use-merged-props.js";
export function useImperativeProps({ refElementReturn: { getElement } }) {
    const currentImperativeProps = useRef({ className: new DOMTokenList(), style: {}, children: null, others: {} });
    const setClass = useCallback((cls, enabled) => {
        if (currentImperativeProps.current.className.contains(cls) == !enabled) {
            getElement()?.classList[enabled ? "add" : "remove"](cls);
            currentImperativeProps.current.className[enabled ? "add" : "remove"](cls);
        }
    }, []);
    const setStyle = useCallback((prop, value) => {
        const element = getElement();
        if (element) {
            if (currentImperativeProps.current.style[prop] != value) {
                currentImperativeProps.current.style[prop] = value;
                element.style[prop] = value ?? "";
            }
        }
    }, []);
    const setChildren = useCallback((children) => {
        let e = getElement();
        if (e && currentImperativeProps.current.children != children) {
            currentImperativeProps.current.children = children;
            e.textContent = children;
        }
    }, []);
    const setAttribute = useCallback((prop, value) => {
        if (value != null) {
            currentImperativeProps.current.others[prop] = value;
            getElement()?.setAttribute(prop, value);
        }
        else {
            delete currentImperativeProps.current.others[prop];
            getElement()?.removeAttribute(prop);
        }
    }, []);
    return {
        imperativeHandle: useRef({
            setClass,
            setStyle,
            setAttribute,
            setChildren
        }).current,
        propsUnstable: useMergedProps({ className: currentImperativeProps.current.className.toString(), style: currentImperativeProps.current.style }, currentImperativeProps.current.others)
    };
}
//# sourceMappingURL=use-imperative-props.js.map