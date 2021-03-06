import { h } from "preact";
import { useCallback, useRef } from "preact/hooks";
import { useMergedProps } from "./use-merged-props";
import { useRefElement } from "./use-ref-element";

export function useImperativeProps<T extends HTMLElement>(incomingProps: h.JSX.HTMLAttributes<T>) {
    const currentImperativeProps = useRef<{ className: DOMTokenList, style: h.JSX.CSSProperties, others: h.JSX.HTMLAttributes<T> }>({ className: new DOMTokenList(), style: {}, others: {} });


    const { getElement, useRefElementProps } = useRefElement<T>({});

    const addClass = useCallback((cls: string) => {
        getElement()?.classList.add(cls);
        currentImperativeProps.current.className.add(cls);
    }, []);

    const removeClass = useCallback((cls: string) => {
        getElement()?.classList.remove(cls);
        currentImperativeProps.current.className.remove(cls);
    }, []);

    const setStyle = useCallback(<T extends keyof h.JSX.CSSProperties>(prop: T, value: h.JSX.CSSProperties[T]) => {
        currentImperativeProps.current.style[prop] = value;
        getElement()?.style.setProperty(prop as string, value as string ?? null);
    }, []);

    const removeStyle = useCallback(<T extends keyof h.JSX.CSSProperties>(prop: T) => {
        delete currentImperativeProps.current.style[prop];
        getElement()?.style.removeProperty(prop as string);
    }, []);

    const setAttribute = useCallback(<K extends keyof h.JSX.HTMLAttributes<T>>(prop: K, value: h.JSX.HTMLAttributes<T>[K]) => {
        currentImperativeProps.current.others[prop] = value;
        getElement()?.setAttribute(prop, value);
    }, [])

    const removeAttribute = useCallback(<K extends keyof h.JSX.HTMLAttributes<T>>(prop: K) => {
        delete currentImperativeProps.current.others[prop];
        getElement()?.removeAttribute(prop);
    }, [])

    return {
        addClass,
        removeClass,
        setStyle,
        removeStyle,
        setAttribute,
        removeAttribute,

        props: useRefElementProps(
            useMergedProps<T>(
                incomingProps,
                useMergedProps<T>({
                    className: currentImperativeProps.current.className.toString(),
                    style: currentImperativeProps.current.style
                },
                currentImperativeProps.current.others)
            ))
    }
}
