import { JSX, TagToElement, TargetedPick, createElement, forwardRef, getEventMapping, memo, useCallback, useImperativeHandle, useRef, type RenderableProps } from "../util/lib.js";
import { CSSProperties, ElementProps, Ref } from "../util/types.js";
import { useMergedProps } from "./use-merged-props.js";
import { UseRefElementReturnType, useRefElement } from "./use-ref-element.js";

export type HasClass = UseImperativePropsReturnTypeSelf<any>["hasClass"];
export type SetClass = UseImperativePropsReturnTypeSelf<any>["setClass"];
export type SetStyle = UseImperativePropsReturnTypeSelf<any>["setStyle"];
export type GetAttribute<Tag extends keyof JSX.IntrinsicElements> = UseImperativePropsReturnTypeSelf<Tag>["getAttribute"];
export type SetAttribute<Tag extends keyof JSX.IntrinsicElements> = UseImperativePropsReturnTypeSelf<Tag>["setAttribute"];
export type SetChildren = UseImperativePropsReturnTypeSelf<any>["setChildren"];
export type DangerouslySetInnerHTML = UseImperativePropsReturnTypeSelf<any>["dangerouslySetInnerHTML"];
export type DangerouslyAppendHTML = UseImperativePropsReturnTypeSelf<any>["dangerouslyAppendHTML"];
export type SetEventHandler = UseImperativePropsReturnTypeSelf<any>["setEventHandler"];

type AvailableStyles = (keyof CSSStyleDeclaration & keyof CSSProperties) & string;

export interface UseImperativePropsReturnTypeSelf<Tag extends keyof JSX.IntrinsicElements> {
    /** @stable Returns whether the element currently has the current CSS class */
    hasClass(cls: string): boolean;
    /** @stable Applies or removes the given CSS class to the element and its props */
    setClass(cls: string, enabled: boolean, delay?: boolean): void;
    /** @stable Applies the given CSS style to the element and its props */
    setStyle<K extends AvailableStyles>(prop: K, value: CSSProperties[K] | null, delay?: boolean): void;
    /** @stable Returns the current value of the attribute on the element */
    getAttribute<K extends keyof ElementProps<Tag>>(prop: K): ElementProps<Tag>[K];
    /** @stable Applies the given attribute to the element and its props */
    setAttribute<K extends keyof ElementProps<Tag>>(prop: K, value: ElementProps<Tag>[K] | null, delay?: boolean): void;
    /** @stable Sets the element's `textContent` and `props.children` */
    setChildren(children: string | null): void;
    /** @stable Sets the element's `innerHTML` and `props.dangerouslySetInnerHTML.__html` */
    dangerouslySetInnerHTML(html: string): void;
    /** @stable Evaluates the given HTML and appends it to the current children and the current props. */
    dangerouslyAppendHTML(html: string): Element;
    /** @stable Applies the given event handler to the element and its props */
    setEventHandler<K extends keyof HTMLElementEventMap>(type: K, listener: null | ((this: HTMLElement, ev: HTMLElementEventMap[K]) => void), options: AddEventListenerOptions): void;
}

export interface UseImperativePropsParameters<Tag extends keyof JSX.IntrinsicElements> extends TargetedPick<UseRefElementReturnType<Tag>, "refElementReturn", "getElement"> { }

type ImperativeElementProps<Tag extends keyof JSX.IntrinsicElements> = ElementProps<Tag> & {
    tag: Tag;
    handle: Ref<UseImperativePropsReturnTypeSelf<Tag>>;
}

export interface UseImperativePropsReturnType<Tag extends keyof JSX.IntrinsicElements> {
    /**
     * @stable
     * 
     *  (The object itself and everything within it are all stable and can be passed around freely)
     */
    imperativePropsReturn: UseImperativePropsReturnTypeSelf<Tag>;
    props: ElementProps<Tag>;
}

let templateElement: HTMLTemplateElement | null = null;

function htmlToElement(parent: Element, html: string) {
    const document = parent.ownerDocument;
    templateElement ??= document.createElement("template");
    templateElement.innerHTML = html.trim();   // TODO: Trim ensures whitespace doesn't add anything, but with a better explanation of why
    return templateElement.content.firstChild! as Element;
}

let updatesToRunOnNextTick = new Set<() => void>();
let hasScheduledUpdate = false;

function scheduleUpdate(f: () => void) {
    updatesToRunOnNextTick.add(f);

    if (!hasScheduledUpdate) {
        hasScheduledUpdate = true;
        queueMicrotask(() => {
            updatesToRunOnNextTick.forEach(f => f());
            updatesToRunOnNextTick.clear();
            hasScheduledUpdate = false;
        });
    }
}

function scheduleOrRun(immediate: boolean | undefined, func: () => void) {
    if (immediate)
        func();
    else
        scheduleUpdate(func);
}

/**
 * Easy access to an HTMLElement that can be controlled imperatively.
 * 
 * The HTMLElement rendered is controlled by the `tag` prop (e.g. "span", "div").
 * 
 * The `handle` prop should be e.g. `useRef<ImperativeHandle<HTMLDivElement>>(null)`
 */
export const ImperativeElement = /* @__PURE__ */ memo( /* @__PURE__ */ forwardRef(ImperativeElementU)) as any as typeof ImperativeElementU;

/**
 * Allows controlling an element's `class`, `style`, etc. with functions like `setStyle` in addition to being reactive to incoming props.
 * 
 * @remarks If the component is re-rendered after the element is modified in some way, those changes are remembered and included in the returned `props` that are meant to be spread to the element in question. 
 * 
 * This is extremely useful for integrating with 3rd party libraries that expect to be able to directly manipulate the DOM because it keeps everything syncced together.
 * 
 * @compositeParams
 */
export function useImperativeProps<Tag extends keyof JSX.IntrinsicElements>({ refElementReturn: { getElement } }: UseImperativePropsParameters<Tag>): UseImperativePropsReturnType<Tag> {
    
    const currentImperativeProps = useRef<{ className: Set<string>, style: CSSProperties, children: string | null, html: string | null, others: ElementProps<Tag> }>({ className: new Set(), style: {}, children: null, html: null, others: {} as any });


    const hasClass = useCallback<HasClass>((cls: string) => { return currentImperativeProps.current.className.has(cls); }, [])
    const setClass = useCallback<SetClass>((cls, enabled, immediate) => {
        scheduleOrRun(immediate, () => {
            if (hasClass(cls) == !enabled) {
                getElement()?.classList[enabled ? "add" : "remove"](cls);
                currentImperativeProps.current.className[enabled ? "add" : "delete"](cls);
            }
        });
    }, []);

    const setStyle = useCallback<SetStyle>((prop, value, immediate) => {
        scheduleOrRun(immediate, () => {
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
        });
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

    const getAttribute = useCallback<GetAttribute<Tag>>((prop) => {
        return currentImperativeProps.current.others[prop];
    }, []);

    const setAttribute = useCallback<SetAttribute<Tag>>((prop, value, immediate) => {
        scheduleOrRun(immediate, () => {
            if (value != null) {
                if (getAttribute(prop as any) != value) {
                    currentImperativeProps.current.others[prop] = value;
                    getElement()?.setAttribute(prop as string, value as any);
                }
            }
            else {
                if (getAttribute(prop as any) != undefined) {
                    delete currentImperativeProps.current.others[prop];
                    getElement()?.removeAttribute(prop as string);
                }
            }
        });
    }, []);

    const setEventHandler = useCallback<SetEventHandler>((type, handler, options) => {
        const element = (getElement() as Element as HTMLElement | undefined);
        const mappedKey = getEventMapping()[type] as keyof ElementProps<Tag>;
        if (element) {
            if (handler) {
                element.addEventListener(type, handler, options);
                currentImperativeProps.current.others[mappedKey] = handler as any;
            }
            else if (currentImperativeProps.current.others[mappedKey]) {
                element.removeEventListener(type, currentImperativeProps.current.others[mappedKey] as any, options);
                currentImperativeProps.current.others[mappedKey] = undefined!;
            }
        }
    }, [])

    return {
        imperativePropsReturn: useRef<UseImperativePropsReturnTypeSelf<Tag>>({
            hasClass,
            setClass,
            setStyle,
            getAttribute,
            setAttribute,
            setEventHandler,
            setChildren,
            dangerouslySetInnerHTML,
            dangerouslyAppendHTML
        }).current,
        props: useMergedProps(
            {
                className: [...currentImperativeProps.current.className].join(" "),
                style: { ...currentImperativeProps.current.style }, // React freezes any style object it sees (I don't know why), so we copy it each time.
                children: currentImperativeProps.current.children
            },
            currentImperativeProps.current.html ? { dangerouslySetInnerHTML: { __html: currentImperativeProps.current.html } } : {},
            currentImperativeProps.current.others
        )

    }
}

function ImperativeElementU<Tag extends keyof JSX.IntrinsicElements>({ tag: Tag, handle, ...props }: RenderableProps<ImperativeElementProps<Tag>>, ref: Ref<TagToElement<Tag>>) {
    const { propsStable, refElementReturn } = useRefElement<Tag>({ refElementParameters: {} })
    const { props: imperativeProps, imperativePropsReturn: imperativeHandle } = useImperativeProps<Tag>({ refElementReturn });
    useImperativeHandle(handle, () => imperativeHandle);
    return (createElement(Tag as any, useMergedProps(propsStable as any, imperativeProps as any, props as any, { ref } as any) as any));
}


