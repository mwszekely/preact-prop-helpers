import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { ElementProps, ElementPropsAll, JSX, VNode, createElement } from "../util/lib.js";

function childrenIsVnode(children: ElementPropsAll<any>["children"] | null | undefined): children is VNode {
    if (children && (children as VNode).type && (children as VNode).props)
        return true;
    return false;
}

/**
 * Passes props onto another set of props' `children`. 
 * 
 * @details If `children` is a VNode (e.g. a `<div>` or a `<Component>`), then the props are spread to that.
 * Otherwise, a new element is created with the `Tag` parameter, which defaults to `"span"`
 * 
 * @param children 
 * @param props 
 * @param ref 
 * @param Tag 
 * @returns 
 */
export function usePropsOnChildren(children: ElementPropsAll<any>["children"] | undefined | null, props: ElementProps<any>, Tag: keyof JSX.IntrinsicElements = 'span') {
    const c = (childrenIsVnode(children) ? children : createElement(Tag, null, children)) as VNode;
    return createElement(c.type as any, useMergedProps(c.props, props));
}
