import { ComponentChildren, createElement, Fragment, h } from "preact";

export type MergedChildren<Lhs extends Pick<h.JSX.HTMLAttributes<any>, "children"> | null | undefined, Rhs extends Pick<h.JSX.HTMLAttributes<any>, "children"> | null | undefined> = undefined | ComponentChildren;

export function useMergedChildren<Lhs extends Pick<h.JSX.HTMLAttributes<any>, "children"> | null | undefined, Rhs extends Pick<h.JSX.HTMLAttributes<any>, "children"> | null | undefined>(lhsProps: Lhs, rhsProps: Rhs): MergedChildren<Lhs, Rhs> {

    const lhs = lhsProps?.children;
    const rhs = rhsProps?.children;
    if (lhs == null && rhs == null) {
        return undefined as MergedChildren<Lhs, Rhs>;
    }
    else if (lhs == null) {
        return rhs as MergedChildren<Lhs, Rhs>;
    }
    else if (rhs == null) {
        return lhs as MergedChildren<Lhs, Rhs>;
    }
    else {
        let ret = createElement(Fragment, {}, lhs, rhs);
        return ret as MergedChildren<Lhs, Rhs>;
    }
}
