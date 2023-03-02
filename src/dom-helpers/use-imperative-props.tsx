import { ComponentChildren, h } from "preact";
import { useCallback, useRef } from "preact/hooks";
import { useMergedProps } from "./use-merged-props.js";
import { useRefElement } from "./use-ref-element.js";

export function useImperativeProps<T extends Element>() {
    const currentImperativeProps = useRef<{ className: DOMTokenList, style: h.JSX.CSSProperties, children: string | null, others: h.JSX.HTMLAttributes<T> }>({ className: new DOMTokenList(), style: {}, children: null, others: {} });


    const {
        refElementReturn: { getElement, propsStable }
    } = useRefElement<T>({ refElementParameters: { onElementChange: undefined, onMount: undefined, onUnmount: undefined } });

    const setClass = useCallback((cls: string, enabled: boolean) => {
        if (currentImperativeProps.current.className.contains(cls) == !enabled) {
            getElement()?.classList[enabled ? "add" : "remove"](cls);
            currentImperativeProps.current.className[enabled ? "add" : "remove"](cls);
        }
    }, []);

    const setStyle = useCallback(<T extends keyof CSSStyleDeclaration>(prop: T, value: h.JSX.CSSProperties[T] | null) => {
        const element = (getElement() as Element as HTMLElement | undefined);
        if (element) {
            if (currentImperativeProps.current.style[prop] != value) {
                currentImperativeProps.current.style[prop] = value;
                element.style[prop] = value ?? ("" as any);
            }
        }
    }, []);

    const setChildren = useCallback((children: string | null) => {
        let e = getElement();
        if (e && currentImperativeProps.current.children != children) {
            currentImperativeProps.current.children = children;
            e.textContent = children;
        }
    }, []);

    const setAttribute = useCallback(<K extends keyof h.JSX.HTMLAttributes<T>>(prop: K, value: h.JSX.HTMLAttributes<T>[K] | null) => {
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
        imperativeProps: useRef({
            setClass,
            setStyle,
            setAttribute,
            setChildren
        }).current,

        propsUnstable: useMergedProps<T>(
            propsStable,
            { className: currentImperativeProps.current.className.toString(), style: currentImperativeProps.current.style },
            currentImperativeProps.current.others
        )

    }
}
