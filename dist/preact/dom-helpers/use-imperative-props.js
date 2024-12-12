import { EventMapping, createElement, forwardRef, memo, useCallback, useImperativeHandle, useRef } from "../util/lib.js";
import { useMonitoring } from "../util/use-call-count.js";
import { useMergedProps } from "./use-merged-props.js";
import { useRefElement } from "./use-ref-element.js";
let templateElement = null;
function htmlToElement(parent, html) {
    const document = parent.ownerDocument;
    templateElement ??= document.createElement("template");
    templateElement.innerHTML = html.trim(); // TODO: Trim ensures whitespace doesn't add anything, but with a better explanation of why
    return templateElement.content.firstChild;
}
/**
 * Easy access to an HTMLElement that can be controlled imperatively.
 *
 * The HTMLElement rendered is controlled by the `tag` prop (e.g. "span", "div").
 *
 * The `handle` prop should be e.g. `useRef<ImperativeHandle<HTMLDivElement>>(null)`
 */
export const ImperativeElement = memo(forwardRef(ImperativeElementU));
/**
 * Allows controlling an element's `class`, `style`, etc. with functions like `setStyle` in addition to being reactive to incoming props.
 *
 * @remarks If the component is re-rendered after the element is modified in some way, those changes are remembered and included in the returned `props` that are meant to be spread to the element in question.
 *
 * This is extremely useful for integrating with 3rd party libraries that expect to be able to directly manipulate the DOM because it keeps everything syncced together.
 *
 * @compositeParams
 */
export function useImperativeProps({ refElementReturn: { getElement } }) {
    return useMonitoring(function useImperativeProps() {
        const currentImperativeProps = useRef({ className: new Set(), style: {}, children: null, html: null, others: {} });
        const hasClass = useCallback((cls) => { return currentImperativeProps.current.className.has(cls); }, []);
        const setClass = useCallback((cls, enabled) => {
            if (hasClass(cls) == !enabled) {
                getElement()?.classList[enabled ? "add" : "remove"](cls);
                currentImperativeProps.current.className[enabled ? "add" : "delete"](cls);
            }
        }, []);
        const setStyle = useCallback((prop, value) => {
            const element = getElement();
            if (element) {
                if (currentImperativeProps.current.style[prop] != value) {
                    currentImperativeProps.current.style[prop] = value;
                    if (prop.startsWith("--")) {
                        if (value != null)
                            element.style.setProperty(prop, `${value}`);
                        else
                            element.style.removeProperty(prop);
                    }
                    else {
                        element.style[prop] = value ?? "";
                    }
                }
            }
        }, []);
        const setChildren = useCallback((children) => {
            let e = getElement();
            if (e && currentImperativeProps.current.children != children) {
                currentImperativeProps.current.children = children;
                currentImperativeProps.current.html = null;
                e.textContent = children;
            }
        }, []);
        const dangerouslySetInnerHTML = useCallback((children) => {
            let e = getElement();
            if (e && currentImperativeProps.current.html != children) {
                currentImperativeProps.current.children = null;
                currentImperativeProps.current.html = children;
                e.innerHTML = children;
            }
        }, []);
        const dangerouslyAppendHTML = useCallback((children) => {
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
            return null;
        }, []);
        const getAttribute = useCallback((prop) => {
            return currentImperativeProps.current.others[prop];
        }, []);
        const setAttribute = useCallback((prop, value) => {
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
        const setEventHandler = useCallback((type, handler, options) => {
            const element = getElement();
            const mappedKey = EventMapping[type];
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
        }, []);
        return {
            imperativePropsReturn: useRef({
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
            props: useMergedProps({ className: [...currentImperativeProps.current.className].join(" "), style: currentImperativeProps.current.style }, currentImperativeProps.current.html ? { dangerouslySetInnerHTML: { __html: currentImperativeProps.current.html } } : {}, { children: currentImperativeProps.current.children }, currentImperativeProps.current.others)
        };
    });
}
function ImperativeElementU({ tag: Tag, handle, ...props }, ref) {
    const { propsStable, refElementReturn } = useRefElement({ refElementParameters: {} });
    const { props: imperativeProps, imperativePropsReturn: imperativeHandle } = useImperativeProps({ refElementReturn });
    useImperativeHandle(handle, () => imperativeHandle);
    return (createElement(Tag, useMergedProps(propsStable, imperativeProps, props, { ref })));
}
//# sourceMappingURL=use-imperative-props.js.map