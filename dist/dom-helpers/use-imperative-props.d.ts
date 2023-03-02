import { h } from "preact";
export declare function useImperativeProps<T extends Element>(): {
    imperativeProps: {
        setClass: (cls: string, enabled: boolean) => void;
        setStyle: <T_1 extends keyof CSSStyleDeclaration>(prop: T_1, value: h.JSX.CSSProperties[T_1] | null) => void;
        setAttribute: <K extends keyof h.JSX.HTMLAttributes<T>>(prop: K, value: h.JSX.HTMLAttributes<T>[K] | null) => void;
        setChildren: (children: string | null) => void;
    };
    propsUnstable: h.JSX.HTMLAttributes<T>;
};
//# sourceMappingURL=use-imperative-props.d.ts.map