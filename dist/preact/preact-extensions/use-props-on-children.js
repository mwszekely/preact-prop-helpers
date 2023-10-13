import { jsx as _jsx } from "preact/jsx-runtime";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { createElement } from "../util/lib.js";
function childrenIsVnode(children) {
    if (children && children.type && children.props)
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
export function usePropsOnChildren(children, props, ref, Tag = 'span') {
    const c = (childrenIsVnode(children) ? children : _jsx(Tag, { children: children }));
    return createElement(c.type, useMergedProps(c.props, { ref: c.ref }, props, { ref }));
}
//# sourceMappingURL=use-props-on-children.js.map