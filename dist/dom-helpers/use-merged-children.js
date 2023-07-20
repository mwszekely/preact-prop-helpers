import { createElement, Fragment } from "../util/lib.js";
import { monitorCallCount } from "../util/use-call-count.js";
/**
 * Combines two `children`.
 *
 * @remarks This is fairly trivial and not even technically a hook, as it doesn't use any other hooks, but is this way for consistency.
 */
export function useMergedChildren(lhs, rhs) {
    monitorCallCount(useMergedChildren);
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