import { TargetedPick, type RenderableProps } from "../util/lib.js";
import { CSSProperties, ElementProps, Ref } from "../util/types.js";
import { UseRefElementReturnType } from "./use-ref-element.js";
export type HasClass = UseImperativePropsReturnTypeSelf<any>["hasClass"];
export type SetClass = UseImperativePropsReturnTypeSelf<any>["setClass"];
export type SetStyle = UseImperativePropsReturnTypeSelf<any>["setStyle"];
export type GetAttribute<T extends Element> = UseImperativePropsReturnTypeSelf<T>["getAttribute"];
export type SetAttribute<T extends Element> = UseImperativePropsReturnTypeSelf<T>["setAttribute"];
export type SetChildren = UseImperativePropsReturnTypeSelf<any>["setChildren"];
export type DangerouslySetInnerHTML = UseImperativePropsReturnTypeSelf<any>["dangerouslySetInnerHTML"];
export type DangerouslyAppendHTML = UseImperativePropsReturnTypeSelf<any>["dangerouslyAppendHTML"];
export type SetEventHandler = UseImperativePropsReturnTypeSelf<any>["setEventHandler"];
export interface UseImperativePropsReturnTypeSelf<T extends Element> {
    /** Returns whether the element currently has the current CSS class */
    hasClass(cls: string): boolean;
    /** Applies or removes the given CSS class to the element */
    setClass(cls: string, enabled: boolean): void;
    /** Applies the given CSS style to the element */
    setStyle<K extends (keyof CSSStyleDeclaration) & string>(prop: K, value: CSSProperties[K] | null): void;
    /** Returns the current value of the attribute on the element */
    getAttribute<K extends keyof ElementProps<T>>(prop: K): ElementProps<T>[K];
    /** Applies the given attribute to the element */
    setAttribute<K extends keyof ElementProps<T>>(prop: K, value: ElementProps<T>[K] | null): void;
    /** Sets the element's `textContent` */
    setChildren(children: string | null): void;
    /** Sets the element's `innerHTML` */
    dangerouslySetInnerHTML(html: string): void;
    /** Evaluates the given HTML and appends it to the current children. */
    dangerouslyAppendHTML(html: string): Element;
    setEventHandler<K extends keyof HTMLElementEventMap>(type: K, listener: null | ((this: HTMLElement, ev: HTMLElementEventMap[K]) => void), options: AddEventListenerOptions): void;
}
export interface UseImperativePropsParameters<E extends Element> extends TargetedPick<UseRefElementReturnType<E>, "refElementReturn", "getElement"> {
}
interface ImperativeElementProps<T extends keyof HTMLElementTagNameMap> extends ElementProps<HTMLElementTagNameMap[T]> {
    tag: T;
    handle: Ref<UseImperativePropsReturnTypeSelf<HTMLElementTagNameMap[T]>>;
}
export interface UseImperativePropsReturnType<T extends Element> {
    imperativePropsReturn: UseImperativePropsReturnTypeSelf<T>;
    props: ElementProps<T>;
}
/**
 * Easy access to an HTMLElement that can be controlled imperatively.
 *
 * The HTMLElement rendered is controlled by the `tag` prop (e.g. "span", "div").
 *
 * The `handle` prop should be e.g. `useRef<ImperativeHandle<HTMLDivElement>>(null)`
 */
export declare const ImperativeElement: typeof ImperativeElementU;
/**
 * Allows controlling an element's `class`, `style`, etc. with functions like `setStyle` in addition to being reactive to incoming props.
 *
 * @remarks If the component is re-rendered after the element is modified in some way, those changes are remembered and included in the returned `props` that are meant to be spread to the element in question.
 *
 * @compositeParams
 */
export declare function useImperativeProps<E extends Element>({ refElementReturn: { getElement } }: UseImperativePropsParameters<E>): UseImperativePropsReturnType<E>;
declare function ImperativeElementU<T extends keyof HTMLElementTagNameMap>({ tag: Tag, handle, ...props }: RenderableProps<ImperativeElementProps<T>>, ref: Ref<HTMLElementTagNameMap[T]>): import("preact").VNode<any>;
export {};
//# sourceMappingURL=use-imperative-props.d.ts.map