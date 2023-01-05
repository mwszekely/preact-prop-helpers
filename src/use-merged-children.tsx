import { createElement, Fragment, h } from "preact";

export function useMergedChildren({ children: lhs }: Pick<h.JSX.HTMLAttributes<EventTarget>, "children">, { children: rhs}: Pick<h.JSX.HTMLAttributes<EventTarget>, "children">): h.JSX.HTMLAttributes<EventTarget>["children"] {
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
