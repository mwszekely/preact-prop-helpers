import { ElementProps, JSX, Ref } from "../util/lib.js";
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
export declare function usePropsOnChildren(children: ElementProps<any>["children"] | undefined | null, props: ElementProps<any>, ref: Ref<any> | null | undefined, Tag?: keyof JSX.IntrinsicElements): import("preact").VNode<any>;
//# sourceMappingURL=use-props-on-children.d.ts.map