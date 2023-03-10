import { createElement, Fragment, h } from "preact";
import { monitorCallCount } from "../util/use-call-count.js";

export function useMergedChildren(lhs: h.JSX.HTMLAttributes<EventTarget>["children"], rhs: h.JSX.HTMLAttributes<EventTarget>["children"]): h.JSX.HTMLAttributes<EventTarget>["children"] {
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
