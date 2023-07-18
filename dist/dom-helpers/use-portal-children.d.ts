import { VNode } from "../util/types.js";
export interface UsePortalChildrenParameters {
    target: string | Element | null;
}
export interface UsePortalChildrenReturnType {
    children: VNode;
    portalElement: Element | null;
    pushChild: PushPortalChild;
    updateChild: UpdatePortalChild;
    removeChild: RemovePortalChild;
}
/**
 * Very basic hook for a root-level component to use to allow any children within the whole app to push children to a portal somewhere.
 *
 * Returns the portal (as `children`, and functions to add, remove, or update a child to the portaled area)
 *
 * TODO: Can't push a child until after the very first `useLayoutEffect`
 */
export declare function usePortalChildren({ target }: UsePortalChildrenParameters): {
    children: import("preact").VNode<any> | null;
    pushChild: PushPortalChild;
    updateChild: UpdatePortalChild;
    removeChild: RemovePortalChild;
    portalElement: Element | null;
};
export type PortalChildUpdater<S> = (value: ((prevState: S) => S)) => void;
export type PushPortalChild = (child: VNode) => number;
export type UpdatePortalChild = (index: number, child: VNode) => void;
export type RemovePortalChild = (index: number) => void;
//# sourceMappingURL=use-portal-children.d.ts.map