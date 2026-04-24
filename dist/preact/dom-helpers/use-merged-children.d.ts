import { ElementPropsAll } from "../util/lib.js";
/**
 * Combines two `children`.
 *
 * @remarks This is fairly trivial and not even technically a hook, as it doesn't use any other hooks, but is this way for consistency.
 *
 * TODO: This could accept a variable number of arguments to be consistent with useMergedProps, but I feel like it might be a performance hit.
 */
export declare function useMergedChildren(lhs: ElementPropsAll<EventTarget>["children"], rhs: ElementPropsAll<EventTarget>["children"]): ElementPropsAll<EventTarget>["children"];
//# sourceMappingURL=use-merged-children.d.ts.map