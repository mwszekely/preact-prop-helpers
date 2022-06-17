import { ComponentChildren, createElement, Fragment, h } from "preact";

export function useMergedChildren<Lhs extends Pick<h.JSX.HTMLAttributes<EventTarget>, "children"> | null | undefined, Rhs extends Pick<h.JSX.HTMLAttributes<EventTarget>, "children"> | null | undefined>(lhsProps: Lhs, rhsProps: Rhs): ComponentChildren {

    const lhs = lhsProps?.children;
    const rhs = rhsProps?.children;
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
        const ret = createElement(Fragment, {}, lhs, rhs);
        return ret;
    }
}
