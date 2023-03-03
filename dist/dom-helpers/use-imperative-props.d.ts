import { h } from "preact";
import { UseRefElementReturnType } from "./use-ref-element.js";
export type SetChildren = ((children: string | null) => void);
export type GetClass = (cls: string) => boolean;
export type SetClass = (cls: string, enabled: boolean) => void;
export type SetStyle = <T extends (keyof CSSStyleDeclaration) & string>(prop: T, value: h.JSX.CSSProperties[T] | null) => void;
export type GetAttribute<T extends Element> = <K extends keyof h.JSX.HTMLAttributes<T>>(prop: K) => h.JSX.HTMLAttributes<T>[K];
export type SetAttribute<T extends Element> = <K extends keyof h.JSX.HTMLAttributes<T>>(prop: K, value: h.JSX.HTMLAttributes<T>[K] | null) => void;
export type SetEventHandler = <K extends keyof HTMLElementEventMap>(type: K, listener: null | ((this: HTMLElement, ev: HTMLElementEventMap[K]) => void), options: AddEventListenerOptions) => void;
export interface ImperativeHandle<T extends Element> {
    hasClass: GetClass;
    setClass: SetClass;
    setStyle: SetStyle;
    getAttribute: GetAttribute<T>;
    setAttribute: SetAttribute<T>;
    setChildren: SetChildren;
    setEventHandler: SetEventHandler;
}
export interface UseImperativePropsParameters<E extends Element> {
    refElementReturn: Pick<UseRefElementReturnType<E>["refElementReturn"], "getElement">;
}
export declare function useImperativeProps<E extends Element>({ refElementReturn: { getElement } }: UseImperativePropsParameters<E>): {
    imperativeHandle: ImperativeHandle<E>;
    propsUnstable: h.JSX.HTMLAttributes<E>;
};
//# sourceMappingURL=use-imperative-props.d.ts.map