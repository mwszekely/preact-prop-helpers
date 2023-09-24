import { createElement, type RenderableProps } from "../util/lib.js";
import { CSSProperties, ElementProps, Ref } from "../util/types.js";
import { PropNames_RefElementReturn_getElement, UseRefElementReturnType } from "./use-ref-element.js";
export type HasClass = UseImperativePropsReturnTypeSelf<any>[typeof PropNames_ImperativePropsReturn_hasClass];
export type SetClass = UseImperativePropsReturnTypeSelf<any>[typeof PropNames_ImperativePropsReturn_setClass];
export type SetStyle = UseImperativePropsReturnTypeSelf<any>[typeof PropNames_ImperativePropsReturn_setStyle];
export type GetAttribute<T extends Element> = UseImperativePropsReturnTypeSelf<T>[typeof PropNames_ImperativePropsReturn_getAttribute];
export type SetAttribute<T extends Element> = UseImperativePropsReturnTypeSelf<T>[typeof PropNames_ImperativePropsReturn_setAttribute];
export type SetChildren = UseImperativePropsReturnTypeSelf<any>[typeof PropNames_ImperativePropsReturn_setChildren];
export type DangerouslySetInnerHTML = UseImperativePropsReturnTypeSelf<any>[typeof PropNames_ImperativePropsReturn_dangerouslySetInnerHTML];
export type DangerouslyAppendHTML = UseImperativePropsReturnTypeSelf<any>[typeof PropNames_ImperativePropsReturn_dangerouslyAppendHTML];
export type SetEventHandler = UseImperativePropsReturnTypeSelf<any>[typeof PropNames_ImperativePropsReturn_setEventHandler];
type AvailableStyles = (keyof CSSStyleDeclaration & keyof CSSProperties) & string;
export declare const PropNames_ImperativePropsReturn_hasClass = "PropNames.PropNames.ImperativePropsReturn.hasClass";
export declare const PropNames_ImperativePropsReturn_setClass = "PropNames.PropNames.ImperativePropsReturn.setClass";
export declare const PropNames_ImperativePropsReturn_setStyle = "PropNames.PropNames.ImperativePropsReturn.setStyle";
export declare const PropNames_ImperativePropsReturn_getAttribute = "PropNames.PropNames.ImperativePropsReturn.getAttribute";
export declare const PropNames_ImperativePropsReturn_setAttribute = "PropNames.PropNames.ImperativePropsReturn.setAttribute";
export declare const PropNames_ImperativePropsReturn_setChildren = "PropNames.PropNames.ImperativePropsReturn.setChildren";
export declare const PropNames_ImperativePropsReturn_dangerouslySetInnerHTML = "PropNames.PropNames.ImperativePropsReturn.dangerouslySetInnerHTML";
export declare const PropNames_ImperativePropsReturn_dangerouslyAppendHTML = "PropNames.PropNames.ImperativePropsReturn.dangerouslyAppendHTML";
export declare const PropNames_ImperativePropsReturn_setEventHandler = "PropNames.PropNames.ImperativePropsReturn.setEventHandler";
export interface UseImperativePropsReturnTypeSelf<T extends Element> {
    /** @stable Returns whether the element currently has the current CSS class */
    [PropNames_ImperativePropsReturn_hasClass](cls: string): boolean;
    /** @stable Applies or removes the given CSS class to the element and its props */
    [PropNames_ImperativePropsReturn_setClass](cls: string, enabled: boolean): void;
    /** @stable Applies the given CSS style to the element and its props */
    [PropNames_ImperativePropsReturn_setStyle]<K extends AvailableStyles>(prop: K, value: CSSProperties[K] | null): void;
    /** @stable Returns the current value of the attribute on the element */
    [PropNames_ImperativePropsReturn_getAttribute]<K extends keyof ElementProps<T>>(prop: K): ElementProps<T>[K];
    /** @stable Applies the given attribute to the element and its props */
    [PropNames_ImperativePropsReturn_setAttribute]<K extends keyof ElementProps<T>>(prop: K, value: ElementProps<T>[K] | null): void;
    /** @stable Sets the element's `textContent` and `props.children` */
    [PropNames_ImperativePropsReturn_setChildren](children: string | null): void;
    /** @stable Sets the element's `innerHTML` and `props.dangerouslySetInnerHTML.__html` */
    [PropNames_ImperativePropsReturn_dangerouslySetInnerHTML](html: string): void;
    /** @stable Evaluates the given HTML and appends it to the current children and the current props. */
    [PropNames_ImperativePropsReturn_dangerouslyAppendHTML](html: string): Element;
    /** @stable Applies the given event handler to the element and its props */
    [PropNames_ImperativePropsReturn_setEventHandler]<K extends keyof HTMLElementEventMap>(type: K, listener: null | ((this: HTMLElement, ev: HTMLElementEventMap[K]) => void), options: AddEventListenerOptions): void;
}
export interface UseImperativePropsParameters<E extends Element> extends Pick<UseRefElementReturnType<E>, typeof PropNames_RefElementReturn_getElement> {
}
interface ImperativeElementProps<T extends keyof HTMLElementTagNameMap> extends ElementProps<HTMLElementTagNameMap[T]> {
    tag: T;
    handle: Ref<UseImperativePropsReturnTypeSelf<HTMLElementTagNameMap[T]>>;
}
export interface UseImperativePropsReturnType<T extends Element> {
    /**
     * @stable
     *
     *  (The object itself and everything within it are all stable and can be passed around freely)
     */
    imperativePropsReturn: UseImperativePropsReturnTypeSelf<T>;
    props: ElementProps<T>[];
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
 * This is extremely useful for integrating with 3rd party libraries that expect to be able to directly manipulate the DOM because it keeps everything syncced together.
 *
 * @compositeParams
 */
export declare const useImperativeProps: <E extends Element>(args: UseImperativePropsParameters<E>) => UseImperativePropsReturnType<E>;
declare function ImperativeElementU<T extends keyof HTMLElementTagNameMap>({ tag: Tag, handle, ...props }: RenderableProps<ImperativeElementProps<T>>, ref: Ref<HTMLElementTagNameMap[T]>): import("preact").VNode<import("preact").ClassAttributes<any> & createElement.JSX.HTMLAttributes<EventTarget> & createElement.JSX.SVGAttributes<SVGElement>>;
export {};
//# sourceMappingURL=use-imperative-props.d.ts.map