import { h } from "preact";
import { useCallback, useRef } from "preact/hooks";
import { useMergedProps } from "./use-merged-props.js";
import { useRefElement, UseRefElementParameters, UseRefElementReturnType } from "./use-ref-element.js";

export type SetChildren = ((children: string | null) => void);
export type SetClass = (cls: string, enabled: boolean) => void;
export type SetStyle = <T extends keyof CSSStyleDeclaration>(prop: T, value: h.JSX.CSSProperties[T] | null) => void;
export type SetAttribute<T extends Element> = <K extends keyof h.JSX.HTMLAttributes<T>>(prop: K, value: h.JSX.HTMLAttributes<T>[K] | null) => void;

export interface ImperativeHandle<T extends Element> {
    setClass: SetClass;
    setStyle: SetStyle;
    setAttribute: SetAttribute<T>;
    setChildren: SetChildren;
}

export interface UseImperativePropsParameters<E extends Element> {
    refElementReturn: Pick<UseRefElementReturnType<E>["refElementReturn"], "getElement">;
}

export function useImperativeProps<E extends Element>({ refElementReturn: { getElement } }: UseImperativePropsParameters<E>) {
    const currentImperativeProps = useRef<{ className: DOMTokenList, style: h.JSX.CSSProperties, children: string | null, others: h.JSX.HTMLAttributes<E> }>({ className: new DOMTokenList(), style: {}, children: null, others: {} });



    const setClass = useCallback<SetClass>((cls, enabled) => {
        if (currentImperativeProps.current.className.contains(cls) == !enabled) {
            getElement()?.classList[enabled ? "add" : "remove"](cls);
            currentImperativeProps.current.className[enabled ? "add" : "remove"](cls);
        }
    }, []);

    const setStyle = useCallback<SetStyle>((prop, value) => {
        const element = (getElement() as Element as HTMLElement | undefined);
        if (element) {
            if (currentImperativeProps.current.style[prop] != value) {
                currentImperativeProps.current.style[prop] = value;
                element.style[prop] = value ?? ("" as any);
            }
        }
    }, []);

    const setChildren = useCallback<SetChildren>((children: string | null) => {
        let e = getElement();
        if (e && currentImperativeProps.current.children != children) {
            currentImperativeProps.current.children = children;
            e.textContent = children;
        }
    }, []);

    const setAttribute = useCallback<SetAttribute<E>>((prop, value) => {
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
        imperativeHandle: useRef<ImperativeHandle<E>>({
            setClass,
            setStyle,
            setAttribute,
            setChildren
        }).current,
        propsUnstable: useMergedProps<E>(
            { className: currentImperativeProps.current.className.toString(), style: currentImperativeProps.current.style },
            currentImperativeProps.current.others
        )

    }
}
