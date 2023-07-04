import { createElement, Fragment } from "../util/lib.js";
import { monitorCallCount } from "../util/use-call-count.js";
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