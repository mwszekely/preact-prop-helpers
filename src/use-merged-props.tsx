import { h } from "preact";
import { useEnsureStability } from "./use-passive-state";
import { useMergedChildren } from "./use-merged-children";
import { useMergedClasses } from "./use-merged-classes";
import { useMergedRefs } from "./use-merged-refs";
import { useMergedStyles } from "./use-merged-styles";

let log = console.warn;

export function enableLoggingPropConflicts(log2: typeof console["log"]) {
    log = log2
}

export function useMergedProps<E extends EventTarget>(...allProps: h.JSX.HTMLAttributes<E>[]) {
    useEnsureStability("useMergedProps", allProps.length);
    let ret: h.JSX.HTMLAttributes<E> = {};
    for (let nextProps of allProps) {
        ret = useMergedProps2<E>(ret, nextProps);
    }

    return ret;
}


/**
 * Given two sets of props, merges them and returns the result.
 * 
 * The hook is aware of and can intelligently merge `className`, `class`, `style`, `ref`, and all event handlers.
 * @param lhs2 
 * @param rhs2 
 * @returns 
 */
function useMergedProps2<E extends EventTarget>(lhsAll: h.JSX.HTMLAttributes<E>, rhsAll: h.JSX.HTMLAttributes<E>): h.JSX.HTMLAttributes<E> {
    // First, separate the props we were given into two groups:
    // lhsAll and rhsAll contain all the props we were given, and
    // lhsMisc and rhsMisc contain all props *except* for the easy ones
    // like className and style that we already know how to merge.
    const { children: _lhsChildren, class: _lhsClass, className: _lhsClassName, style: _lhsStyle, ref: _lhsRef, ...lhsMisc } = lhsAll;
    const { children: _rhsChildren, class: _rhsClass, className: _rhsClassName, style: _rhsStyle, ref: _rhsRef, ...rhsMisc } = rhsAll;

    const ret: h.JSX.HTMLAttributes<E> = {
        ...lhsMisc,
        ref: useMergedRefs<E>(lhsAll, rhsAll),
        style: useMergedStyles(lhsAll, rhsAll),
        className: useMergedClasses(lhsAll, rhsAll),
        children: useMergedChildren(lhsAll, rhsAll),
    } as any;

    if (ret.ref === undefined) delete ret.ref;
    if (ret.style === undefined) delete ret.style;
    if (ret.className === undefined) delete ret.className;
    if (ret.children === undefined) delete ret.children;

    // Now, do *everything* else
    // Merge every remaining existing entry in lhs with what we've already put in ret.
    //const lhsEntries = Object.entries(lhs) as [keyof T, T[keyof T]][];
    const rhsEntries = Object.entries(rhsMisc);

    for (const [rhsKeyU, rhsValue] of rhsEntries) {
        const rhsKey = rhsKeyU as keyof h.JSX.HTMLAttributes<E>;

        const lhsValue = lhsMisc[rhsKey as keyof typeof lhsMisc];

        if (typeof lhsValue === "function" || typeof rhsValue === "function") {

            // They're both functions that can be merged (or one's a function and the other's null).
            // Not an *easy* case, but a well-defined one.
            const merged = mergeFunctions(lhsValue as never, rhsValue as never);
            ret[rhsKey as keyof h.JSX.HTMLAttributes<E>] = merged as never;
        }
        else {
            // Uh...we're here because one of them's null, right?
            if (lhsValue == null && rhsValue == null) {
                if (rhsValue === null && lhsValue === undefined)
                    ret[rhsKey] = rhsValue as never;
                else
                    ret[rhsKey] = lhsValue as never;
            }
            if (lhsValue == null)
                ret[rhsKey] = rhsValue as never;
            else if (rhsValue == null)
                ret[rhsKey] = lhsValue as never;
            else if ((rhsValue as any) == lhsValue) {
                // I mean, they're the same value at least
                // so we don't need to do anything.
                // Not really ideal though.
            }
            else {
                // Ugh.
                // No good strategies here, just log it if requested
                log?.(`The prop "${rhsKey}" cannot simultaneously be the values ${lhsValue} and ${rhsValue}. One must be chosen outside of useMergedProps.`);
                ret[rhsKey] = rhsValue as never
            }
        }
    }

    return ret;

}

function mergeFunctions<T extends (...args: any[]) => any, U extends (...args: any[]) => any>(lhs: T | null | undefined, rhs: U | null | undefined) {

    if (!lhs)
        return rhs;
    if (!rhs)
        return lhs;

    return (...args: Parameters<T>) => {
        const lv = lhs(...args);
        const rv = rhs(...args);

        if (lv instanceof Promise || rv instanceof Promise)
            return Promise.all([lv, rv]);
    };
}

/*
function test<P extends h.JSX.HTMLAttributes<HTMLInputElement>>(props: P) {

    const id0: GenericGet<{}, "id", string> = "";
    const id3: GenericGet<{ id: undefined }, "id", string> = undefined;
    const id4: GenericGet<{ id: undefined }, "id", string> = undefined;
    const id5: GenericGet<{ id: undefined }, "id", string> = undefined;
    const id6: GenericGet<{ id: undefined }, "id", string> = undefined;
    //const id2: ZipSingle<string | undefined, string | undefined> = undefined;
    const id1: ZipObject<{ id: undefined }, { id: string }> = { id: undefined };

    type M1 = GenericGet<P, "style", string>;
    type M2 = GenericGet<{}, "style", string>;
    const m1: M1 = "";
    const m2: M1 = undefined;
    /// @ts-expect-error    Because number isn't assignable to string
    const m3: M1 = 0;

    const m4: M2 = "";
    const m5: M2 = undefined;
    /// @ts-expect-error    Because number isn't assignable to string
    const m6: M2 = 0;

    const p1: MergedProps<HTMLInputElement, {}, { id: string }> = useMergedProps<HTMLInputElement>()({}, { id: "string" });
    const p2: MergedProps<HTMLInputElement, { id: undefined }, { id: string }> = useMergedProps<HTMLInputElement>()({ id: undefined }, { id: "string" });
    const p3: MergedProps<HTMLInputElement, { id: undefined }, { id: undefined }> = useMergedProps<HTMLInputElement>()({ id: undefined }, { id: undefined });
    const p4: MergedProps<HTMLInputElement, {}, {}> = useMergedProps<HTMLInputElement>()({}, {});
    const p5 = useMergedProps<HTMLInputElement>()(props, {});
    const p6 = useMergedProps<HTMLInputElement>()(props, { id: undefined });
    const p7 = useMergedProps<HTMLInputElement>()(props, { id: "string" });


    p1.id?.concat("");
    p2.id?.concat("");
    /// @ts-expect-error    id can't be anything but undefined
    p3.id?.concat("");
    /// @ts-expect-error    id can't be anything but undefined
    p4.id?.concat("");


    p5.id?.concat("");
    p6.id?.concat("");
    p7.id?.concat("");

    /// @ts-expect-error    id must contain undefined
    p5.id.concat("");
    /// @ts-expect-error    id must contain undefined
    p6.id.concat("");
    /// @ts-expect-error    id must contain undefined
    p7.id.concat("");


    if (p5.allowFullScreen === undefined) {}
    else if (p5.allowFullScreen === false) {}
    else if (p5.allowFullScreen === true) {}
    else {
        acceptsNever(p5.allowFullScreen);
    }


    if (p6.allowFullScreen === undefined) {}
    else if (p6.allowFullScreen === false) {}
    else if (p6.allowFullScreen === true) {}
    else {
        acceptsNever(p6.allowFullScreen);
    }


    if (p7.allowFullScreen === undefined) {}
    else if (p7.allowFullScreen === false) {}
    else if (p7.allowFullScreen === true) {}
    else {
        acceptsNever(p7.allowFullScreen);
    }


    // Make sure it works recursively
    const r1a = useMergedProps<HTMLInputElement>()({}, p1);
    const r1b = useMergedProps<HTMLInputElement>()(props, p1);
    const r2a = useMergedProps<HTMLInputElement>()({}, p2);
    const r2b = useMergedProps<HTMLInputElement>()(props, p2);
    const r3a = useMergedProps<HTMLInputElement>()({}, p3);
    const r3b = useMergedProps<HTMLInputElement>()(props, p3);
    const r4a = useMergedProps<HTMLInputElement>()({}, p4);
    const r4b = useMergedProps<HTMLInputElement>()(props, p4);
    const r5a = useMergedProps<HTMLInputElement>()({}, p5);
    const r5b = useMergedProps<HTMLInputElement>()(props, p5);
    const r6a = useMergedProps<HTMLInputElement>()({}, p6);
    const r6b = useMergedProps<HTMLInputElement>()(props, p6);
    const r7a = useMergedProps<HTMLInputElement>()({}, p7);
    const r7b = useMergedProps<HTMLInputElement>()(props, p7);


    r1a.id?.concat("");
    r1b.id?.concat("");
    r2a.id?.concat("");
    r2b.id?.concat("");
    // @ts-expect-error    id can't be anything but undefined
    r3a.id?.concat("");
    r3b.id?.concat("");
    /// @ts-expect-error    id can't be anything but undefined
    r4a.id?.concat("");
    r4b.id?.concat("");


    r5a.id?.concat("");
    r5b.id?.concat("");
    r6a.id?.concat("");
    r6b.id?.concat("");
    r7a.id?.concat("");
    r7b.id?.concat("");

    /// @ts-expect-error    id must contain undefined
    r5a.id.concat("");
    /// @ts-expect-error    id must contain undefined
    r5b.id.concat("");
    /// @ts-expect-error    id must contain undefined
    r6a.id.concat("");
    /// @ts-expect-error    id must contain undefined
    r6b.id.concat("");
    /// @ts-expect-error    id must contain undefined
    r7a.id.concat("");
    /// @ts-expect-error    id must contain undefined
    r7b.id.concat("");


    if (r5a.allowFullScreen === undefined) {}
    else if (r5a.allowFullScreen === false) {}
    else if (r5a.allowFullScreen === true) {}
    else {
        acceptsNever(r5a.allowFullScreen);
    }


    if (r5b.allowFullScreen === undefined) {}
    else if (r5b.allowFullScreen === false) {}
    else if (r5b.allowFullScreen === true) {}
    else {
        acceptsNever(r5b.allowFullScreen);
    }


    if (r6a.allowFullScreen === undefined) {}
    else if (r6a.allowFullScreen === false) {}
    else if (r6a.allowFullScreen === true) {}
    else {
        acceptsNever(r6a.allowFullScreen);
    }


    if (r6b.allowFullScreen === undefined) {}
    else if (r6b.allowFullScreen === false) {}
    else if (r6b.allowFullScreen === true) {}
    else {
        acceptsNever(r6b.allowFullScreen);
    }


    if (r7a.allowFullScreen === undefined) {}
    else if (r7a.allowFullScreen === false) {}
    else if (r7a.allowFullScreen === true) {}
    else {
        acceptsNever(r7a.allowFullScreen);
    }


    if (r7b.allowFullScreen === undefined) {}
    else if (r7b.allowFullScreen === false) {}
    else if (r7b.allowFullScreen === true) {}
    else {
        acceptsNever(r7b.allowFullScreen);
    }

}
function acceptsNever(n: never) {}
*/