import { EventMapping, createElement, forwardRef, memo, useCallback, useImperativeHandle, useRef, type RenderableProps } from "../util/lib.js";
import { CSSProperties, ElementProps, PropNames, Ref } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
import { useMergedProps } from "./use-merged-props.js";
import { UseRefElementReturnType, useRefElement } from "./use-ref-element.js";

export type HasClass = UseImperativePropsReturnTypeSelf<any>[typeof ImperativePropsReturn["hasClass"]];
export type SetClass = UseImperativePropsReturnTypeSelf<any>[typeof ImperativePropsReturn["setClass"]];
export type SetStyle = UseImperativePropsReturnTypeSelf<any>[typeof ImperativePropsReturn["setStyle"]];
export type GetAttribute<T extends Element> = UseImperativePropsReturnTypeSelf<T>[typeof ImperativePropsReturn["getAttribute"]];
export type SetAttribute<T extends Element> = UseImperativePropsReturnTypeSelf<T>[typeof ImperativePropsReturn["setAttribute"]];
export type SetChildren = UseImperativePropsReturnTypeSelf<any>[typeof ImperativePropsReturn["setChildren"]];
export type DangerouslySetInnerHTML = UseImperativePropsReturnTypeSelf<any>[typeof ImperativePropsReturn["dangerouslySetInnerHTML"]];
export type DangerouslyAppendHTML = UseImperativePropsReturnTypeSelf<any>[typeof ImperativePropsReturn["dangerouslyAppendHTML"]];
export type SetEventHandler = UseImperativePropsReturnTypeSelf<any>[typeof ImperativePropsReturn["setEventHandler"]];

type AvailableStyles = (keyof CSSStyleDeclaration & keyof CSSProperties) & string;


const P = `PropNames.PropNames.ImperativePropsParameters`;
const R = `PropNames.PropNames.ImperativePropsReturn`;

const ImperativePropsParameters = {
} as const;

const ImperativePropsReturn = {
    hasClass: `${R}.hasClass`,
    setClass: `${R}.setClass`,
    setStyle: `${R}.setStyle`,
    getAttribute: `${R}.getAttribute`,
    setAttribute: `${R}.setAttribute`,
    setChildren: `${R}.setChildren`,
    dangerouslySetInnerHTML: `${R}.dangerouslySetInnerHTML`,
    dangerouslyAppendHTML: `${R}.dangerouslyAppendHTML`,
    setEventHandler: `${R}.setEventHandler`
} as const;

declare module "../util/types.js" { interface PropNames { ImperativePropsReturn: typeof ImperativePropsReturn } }
declare module "../util/types.js" { interface PropNames { ImperativePropsParameters: typeof ImperativePropsParameters } }

export interface UseImperativePropsReturnTypeSelf<T extends Element> {
    /** @stable Returns whether the element currently has the current CSS class */
    [ImperativePropsReturn.hasClass](cls: string): boolean;
    /** @stable Applies or removes the given CSS class to the element and its props */
    [ImperativePropsReturn.setClass](cls: string, enabled: boolean): void;
    /** @stable Applies the given CSS style to the element and its props */
    [ImperativePropsReturn.setStyle]<K extends AvailableStyles>(prop: K, value: CSSProperties[K] | null): void;
    /** @stable Returns the current value of the attribute on the element */
    [ImperativePropsReturn.getAttribute]<K extends keyof ElementProps<T>>(prop: K): ElementProps<T>[K];
    /** @stable Applies the given attribute to the element and its props */
    [ImperativePropsReturn.setAttribute]<K extends keyof ElementProps<T>>(prop: K, value: ElementProps<T>[K] | null): void;
    /** @stable Sets the element's `textContent` and `props.children` */
    [ImperativePropsReturn.setChildren](children: string | null): void;
    /** @stable Sets the element's `innerHTML` and `props.dangerouslySetInnerHTML.__html` */
    [ImperativePropsReturn.dangerouslySetInnerHTML](html: string): void;
    /** @stable Evaluates the given HTML and appends it to the current children and the current props. */
    [ImperativePropsReturn.dangerouslyAppendHTML](html: string): Element;
    /** @stable Applies the given event handler to the element and its props */
    [ImperativePropsReturn.setEventHandler]<K extends keyof HTMLElementEventMap>(type: K, listener: null | ((this: HTMLElement, ev: HTMLElementEventMap[K]) => void), options: AddEventListenerOptions): void;
}


export interface UseImperativePropsParameters<E extends Element> extends Pick<UseRefElementReturnType<E>, PropNames["RefElementReturn"]["getElement"]> { }

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

let templateElement: HTMLTemplateElement | null = null;

function htmlToElement(parent: Element, html: string) {
    const document = parent.ownerDocument;
    templateElement ??= document.createElement("template");
    templateElement.innerHTML = html.trim();   // TODO: Trim ensures whitespace doesn't add anything, but with a better explanation of why
    return templateElement.content.firstChild! as Element;
}

/**
 * Easy access to an HTMLElement that can be controlled imperatively.
 * 
 * The HTMLElement rendered is controlled by the `tag` prop (e.g. "span", "div").
 * 
 * The `handle` prop should be e.g. `useRef<ImperativeHandle<HTMLDivElement>>(null)`
 */
export const ImperativeElement = memo(forwardRef(ImperativeElementU)) as any as typeof ImperativeElementU;

/**
 * Allows controlling an element's `class`, `style`, etc. with functions like `setStyle` in addition to being reactive to incoming props.
 * 
 * @remarks If the component is re-rendered after the element is modified in some way, those changes are remembered and included in the returned `props` that are meant to be spread to the element in question. 
 * 
 * This is extremely useful for integrating with 3rd party libraries that expect to be able to directly manipulate the DOM because it keeps everything syncced together.
 * 
 * @compositeParams
 */
export const useImperativeProps = monitored(function useImperativeProps<E extends Element>(args: UseImperativePropsParameters<E>): UseImperativePropsReturnType<E> {
    const currentImperativeProps = useRef<{ className: Set<string>, style: CSSProperties, children: string | null, html: string | null, others: ElementProps<E> }>({ className: new Set(), style: {}, children: null, html: null, others: {} });

    const { [PropNames.RefElementReturn.getElement]: getElement } = args;

    const hasClass = useCallback<HasClass>((cls: string) => { return currentImperativeProps.current.className.has(cls); }, [])
    const setClass = useCallback<SetClass>((cls, enabled) => {
        if (hasClass(cls) == !enabled) {
            getElement()?.classList[enabled ? "add" : "remove"](cls);
            currentImperativeProps.current.className[enabled ? "add" : "delete"](cls);
        }
    }, []);

    const setStyle = useCallback<SetStyle>((prop, value) => {
        const element = (getElement() as Element as HTMLElement | undefined);
        if (element) {
            if (currentImperativeProps.current.style[prop] != value) {
                currentImperativeProps.current.style[prop as never] = value as never;
                if ((prop as string).startsWith("--")) {
                    if (value != null)
                        element.style.setProperty(prop, `${value}`);
                    else
                        element.style.removeProperty(prop);
                }
                else {
                    element.style[prop] = value ?? ("" as any);
                }
            }
        }
    }, []);

    const setChildren = useCallback<SetChildren>((children: string | null) => {
        let e = getElement();
        if (e && currentImperativeProps.current.children != children) {
            currentImperativeProps.current.children = children;
            currentImperativeProps.current.html = null;
            e.textContent = children;
        }
    }, []);

    const dangerouslySetInnerHTML = useCallback<DangerouslySetInnerHTML>((children: string) => {
        let e = getElement();
        if (e && currentImperativeProps.current.html != children) {
            currentImperativeProps.current.children = null;
            currentImperativeProps.current.html = children;
            e.innerHTML = children;
        }
    }, []);

    const dangerouslyAppendHTML = useCallback<DangerouslyAppendHTML>((children: string) => {
        let e = getElement();
        if (e && children) {
            const newChild = htmlToElement(e, children);
            console.assert((newChild && newChild instanceof Node));
            if (newChild && newChild instanceof Node) {
                currentImperativeProps.current.children = null;
                currentImperativeProps.current.html ||= "";
                currentImperativeProps.current.html += children;
                e.appendChild(newChild);
                return newChild;
            }
        }
        return null!;
    }, [])

    const getAttribute = useCallback<GetAttribute<E>>((prop) => {
        return currentImperativeProps.current.others[prop];
    }, []);

    const setAttribute = useCallback<SetAttribute<E>>((prop, value) => {
        if (value != null) {
            if (getAttribute(prop) != value) {
                currentImperativeProps.current.others[prop] = value;
                getElement()?.setAttribute(prop, value);
            }
        }
        else {
            if (getAttribute(prop) != undefined) {
                delete currentImperativeProps.current.others[prop];
                getElement()?.removeAttribute(prop);
            }
        }
    }, []);

    const setEventHandler = useCallback<SetEventHandler>((type, handler, options) => {
        const element = (getElement() as Element as HTMLElement | undefined);
        const mappedKey = EventMapping[type] as keyof ElementProps<E>;
        if (element) {
            if (handler) {
                element.addEventListener(type, handler, options);
                currentImperativeProps.current.others[mappedKey] = handler;
            }
            else if (currentImperativeProps.current.others[mappedKey]) {
                element.removeEventListener(type, currentImperativeProps.current.others[mappedKey], options);
                currentImperativeProps.current.others[mappedKey] = undefined;
            }
        }
    }, [])

    return {
        imperativePropsReturn: useRef<UseImperativePropsReturnTypeSelf<E>>({
            [ImperativePropsReturn.hasClass]: hasClass,
            [ImperativePropsReturn.setClass]: setClass,
            [ImperativePropsReturn.setStyle]: setStyle,
            [ImperativePropsReturn.getAttribute]: getAttribute,
            [ImperativePropsReturn.setAttribute]: setAttribute,
            [ImperativePropsReturn.setEventHandler]: setEventHandler,
            [ImperativePropsReturn.setChildren]: setChildren,
            [ImperativePropsReturn.dangerouslySetInnerHTML]: dangerouslySetInnerHTML,
            [ImperativePropsReturn.dangerouslyAppendHTML]: dangerouslyAppendHTML
        }).current,
        props: [
            { className: [...currentImperativeProps.current.className].join(" "), style: currentImperativeProps.current.style },
            currentImperativeProps.current.html ? { dangerouslySetInnerHTML: { __html: currentImperativeProps.current.html } } : {},
            { children: currentImperativeProps.current.children },
            currentImperativeProps.current.others
        ]

    }
})

function ImperativeElementU<T extends keyof HTMLElementTagNameMap>({ tag: Tag, handle, ...props }: RenderableProps<ImperativeElementProps<T>>, ref: Ref<HTMLElementTagNameMap[T]>) {
    const { props: propsStable, ...ret } = useRefElement<HTMLElementTagNameMap[T]>({})
    const { props: imperativeProps, imperativePropsReturn: imperativeHandle } = useImperativeProps<HTMLElementTagNameMap[T]>(ret);
    useImperativeHandle(handle, () => imperativeHandle);
    return (createElement(Tag, useMergedProps(propsStable, ...imperativeProps, props, { ref })));
}


