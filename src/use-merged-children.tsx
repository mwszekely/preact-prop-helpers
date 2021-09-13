import { ComponentChildren, Fragment, h } from "preact";
import { GenericReplace } from "./use-merged-props";

// Generally too complex
//Pick<h.JSX.HTMLAttributes<E>, keyof h.JSX.HTMLAttributes<E> & (keyof T | keyof U)>; 

export type MergedChildren<Lhs extends Pick<h.JSX.HTMLAttributes<any>, "children"> | null | undefined, Rhs extends Pick<h.JSX.HTMLAttributes<any>, "children"> | null | undefined> =
    GenericReplace<Lhs, "children", ComponentChildren> | GenericReplace<Rhs, "children", ComponentChildren>;

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
        let ret = <>{lhs}{rhs}</>;
        return ret as MergedChildren<Lhs, Rhs>;
    }
}
