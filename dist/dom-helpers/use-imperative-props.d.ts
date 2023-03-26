import { type Ref, type RenderableProps } from "preact";
import { CSSProperties, ElementProps } from "../util/types.js";
import { UseRefElementReturnType } from "./use-ref-element.js";
export type SetChildren = ((children: string | null) => void);
export type GetClass = (cls: string) => boolean;
export type SetClass = (cls: string, enabled: boolean) => void;
export type SetStyle = <T extends (keyof CSSStyleDeclaration) & string>(prop: T, value: CSSProperties[T] | null) => void;
export type GetAttribute<T extends Element> = <K extends keyof ElementProps<T>>(prop: K) => ElementProps<T>[K];
export type SetAttribute<T extends Element> = <K extends keyof ElementProps<T>>(prop: K, value: ElementProps<T>[K] | null) => void;
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
export interface ImperativeElementProps<T extends keyof HTMLElementTagNameMap> extends ElementProps<HTMLElementTagNameMap[T]> {
    tag: T;
    handle: Ref<ImperativeHandle<HTMLElementTagNameMap[T]>>;
}
/**
 * Easy access to an HTMLElement that can be controlled imperatively.
 *
 * The HTMLElement rendered is controlled by the `tag` prop (e.g. "span", "div").
 *
 * The `handle` prop should be e.g. `useRef<ImperativeHandle<HTMLDivElement>>(null)`
 */
export declare const ImperativeElement: typeof ImperativeElementU;
export declare function useImperativeProps<E extends Element>({ refElementReturn: { getElement } }: UseImperativePropsParameters<E>): {
    imperativeHandle: ImperativeHandle<E>;
    props: ElementProps<E>;
};
declare function ImperativeElementU<T extends keyof HTMLElementTagNameMap>({ tag: Tag, handle, ...props }: RenderableProps<ImperativeElementProps<T>>, ref: Ref<HTMLElementTagNameMap[T]>): import("preact").VNode<any>;
export {};
//# sourceMappingURL=use-imperative-props.d.ts.map