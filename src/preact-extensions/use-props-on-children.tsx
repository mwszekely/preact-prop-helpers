import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { ElementProps, JSX, Ref, VNode, createElement } from "../util/lib.js";

function childrenIsVnode(children: ElementProps<any>["children"] | null | undefined): children is VNode {
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
 * 
 * #__NO_SIDE_EFFECTS__
 */
export function usePropsOnChildren(children: ElementProps<any>["children"] | undefined | null, props: ElementProps<any>, ref: Ref<any> | null | undefined, Tag: keyof JSX.IntrinsicElements = 'span') {
    const c = (childrenIsVnode(children) ? children : <Tag>{children}</Tag>) as any as VNode;
    return createElement(c.type as any, useMergedProps(c.props, { ref: c.ref }, props, { ref }));
}
