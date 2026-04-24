import { ElementProps, ElementPropsAll, JSX } from "../util/lib.js";
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
export declare function usePropsOnChildren(children: ElementPropsAll<any>["children"] | undefined | null, props: ElementProps<any>, Tag?: keyof JSX.IntrinsicElements): import("react").DetailedReactHTMLElement<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
//# sourceMappingURL=use-props-on-children.d.ts.map