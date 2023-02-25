import { h } from "preact";
export declare function useImperativeProps<T extends Element>(): {
    imperativeProps: {
        addClass: (cls: string) => void;
        removeClass: (cls: string) => void;
        setStyle: <T_1 extends keyof h.JSX.CSSProperties>(prop: T_1, value: h.JSX.CSSProperties[T_1]) => void;
        removeStyle: <T_2 extends keyof h.JSX.CSSProperties>(prop: T_2) => void;
        setAttribute: <K extends keyof h.JSX.HTMLAttributes<T>>(prop: K, value: h.JSX.HTMLAttributes<T>[K]) => void;
        removeAttribute: <K_1 extends keyof h.JSX.HTMLAttributes<T>>(prop: K_1) => void;
    };
    propsUnstable: h.JSX.HTMLAttributes<T>;
};
//# sourceMappingURL=use-imperative-props.d.ts.map