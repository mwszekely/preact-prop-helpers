import { h } from "preact";
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
export declare function useImperativeProps<E extends Element>(): {
    imperativeHandle: ImperativeHandle<E>;
    refElementReturn: {
        getElement(): E | null;
        propsStable: h.JSX.HTMLAttributes<E>;
    };
    propsUnstable: h.JSX.HTMLAttributes<E>;
};
//# sourceMappingURL=use-imperative-props.d.ts.map