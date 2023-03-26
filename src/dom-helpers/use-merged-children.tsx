import { createElement, Fragment, HTMLAttributes, ReactNode } from "react";
import { monitorCallCount } from "../util/use-call-count.js";

export function useMergedChildren(lhs: HTMLAttributes<EventTarget>["children"], rhs: HTMLAttributes<EventTarget>["children"]): HTMLAttributes<EventTarget>["children"] {
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
