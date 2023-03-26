import { createElement, Fragment } from "preact";
import { ElementProps } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";

export function useMergedChildren(lhs: ElementProps<EventTarget>["children"], rhs: ElementProps<EventTarget>["children"]): ElementProps<EventTarget>["children"] {
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
