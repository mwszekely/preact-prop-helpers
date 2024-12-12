import { createElement, Fragment } from "../util/lib.js";
/**
 * Combines two `children`.
 *
 * @remarks This is fairly trivial and not even technically a hook, as it doesn't use any other hooks, but is this way for consistency.
 *
 * TODO: This could accept a variable number of arguments to be consistent with useMergedProps, but I feel like it might be a performance hit.
 *
 * #__NO_SIDE_EFFECTS__
 */
export function useMergedChildren(lhs, rhs) {
    if (lhs == null && rhs == null) {
        return undefined;
    }
    else if (lhs == null) {
        return rhs;
    }
    else if (rhs == null) {
        return lhs;
    }
    else {
        return createElement(Fragment, {}, lhs, rhs);
    }
}
//# sourceMappingURL=use-merged-children.js.map