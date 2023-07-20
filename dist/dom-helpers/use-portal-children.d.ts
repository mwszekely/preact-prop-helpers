import { VNode } from "../util/types.js";
export interface UsePortalChildrenParameters {
    /**
     * The element that will contain the portal's children, or the string of its `id`.
     */
    target: string | Element | null;
}
export type PortalChildUpdater<S> = (value: ((prevState: S) => S)) => void;
export type PushPortalChild = UsePortalChildrenReturnType["pushChild"];
export type UpdatePortalChild = UsePortalChildrenReturnType["updateChild"];
export type RemovePortalChild = UsePortalChildrenReturnType["removeChild"];
export interface UsePortalChildrenReturnType {
    /** The return value of `createPortal` */
    children: VNode | null;
    /** The element that the portal was rendered to (even if an `id` was provided) */
    portalElement: Element | null;
    /** Appends the given child to the portal's existing children, and returns a number that can be used to request updates to it/remove it later if necessary */
    pushChild(child: VNode): number;
    /** Allows a child to be updated with new props. `index` is the value returned from `pushChild`. */
    updateChild(index: number, child: VNode): void;
    /** Removes the child at the given `index` (the value returned from `pushChild`) */
    removeChild(index: number): void;
}
/**
 * Very basic hook for a root-level component to use to allow any children within the whole app to push children to a portal somewhere.
 *
 * @remarks Returns the portal (as `children`, and functions to add, remove, or update a child to the portaled area)
 *
 * TODO: Can't push a child until after the very first `useLayoutEffect`
 *
 * {@include } {@link UsePortalChildrenParameters}
 */
export declare function usePortalChildren({ target }: UsePortalChildrenParameters): UsePortalChildrenReturnType;
//# sourceMappingURL=use-portal-children.d.ts.map