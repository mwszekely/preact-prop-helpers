import { ClassAttributes, h, Ref, RefCallback } from "preact";
import { MergedClasses, useMergedClasses } from "./use-merged-classes";
import { MergedRefs, useMergedRefs } from "./use-merged-refs";
import { MergedStyles, useMergedStyles } from "./use-merged-styles";

let log: typeof console["log"] | undefined = (str) => { debugger;   /* Intentional */ };
export function enableLoggingPropConflicts(log2: typeof console["log"]) {
    log = log2
}

type ElementFromAttributes<A extends { ref?: Ref<any> }> = A["ref"] extends Ref<infer E> ? E : EventTarget;

/**
 * A type that represents the merging of two prop objects
 */
export type MergedProps<E extends EventTarget, T extends h.JSX.HTMLAttributes<E>, U extends h.JSX.HTMLAttributes<E>> = h.JSX.HTMLAttributes<E> & Omit<T, keyof h.JSX.HTMLAttributes<E>> & Omit<U, keyof h.JSX.HTMLAttributes<E>>;

// Generally too complex
//Pick<h.JSX.HTMLAttributes<E>, keyof h.JSX.HTMLAttributes<E> & (keyof T | keyof U)>; 


/**
 * Given two sets of props, merges them and returns the result.
 * 
 * The hook is aware of and can intelligently merge `className`, `class`, `style`, `ref`, and all event handlers.
 * @param lhs2 
 * @param rhs2 
 * @returns 
 */
export function useMergedProps<E extends EventTarget>() {
    return function <T extends h.JSX.HTMLAttributes<E>, U extends h.JSX.HTMLAttributes<E>>(lhs2: T, rhs2: U): MergedProps<E, T, U> {


        // First, put in all the properties that are easy to reason about
        // and all lhs props. We're going to merge in rhs just after.
        const { class: lhsClass, className: lhsClassName, style: lhsStyle, ref: lhsRef, ...lhs } = lhs2;
        const { class: rhsClass, className: rhsClassName, style: rhsStyle, ref: rhsRef, ...rhs } = rhs2;

        let ret: MergedProps<E, T, U> = {
            ...lhs,
            ref: useMergedRefs<E>()(lhs2, rhs2) as MergedRefs<E, T, U>,
            style: useMergedStyles(lhs2, rhs2) as MergedStyles<T, U>,
            className: useMergedClasses(lhs2, rhs2) as MergedClasses<T, U>
        } as any;


        // Now, do *everything* else
        // Merge every remaining existing entry in lhs with what we've already put in ret.
        //const lhsEntries = Object.entries(lhs) as [keyof T, T[keyof T]][];
        const rhsEntries = Object.entries(rhs) as [keyof U, U[keyof U]][];

        for (const [rhsKey, rhsValue] of rhsEntries) {

            const lhsValue = lhs[rhsKey as keyof typeof lhs];

            if (typeof lhsValue === "function" || typeof rhsValue === "function") {

                // They're both functions that can be merged (or one's a function and the other's null).
                // Not an *easy* case, but a well-defined one.
                const merged = mergeFunctions(lhsValue as never, rhsValue as never);
                ret[rhsKey as keyof MergedProps<E, T, U>] = merged as never;
            }
            else {
                // Uh...we're here because one of them's null, right?
                if (lhsValue == null && rhsValue == null) {
                    if (rhsValue === null && lhsValue === undefined)
                        ret[rhsKey as keyof MergedProps<E, T, U>] = rhsValue as never;
                    else
                        ret[rhsKey as keyof MergedProps<E, T, U>] = lhsValue as never;
                }
                if (lhsValue == null)
                    ret[rhsKey as keyof MergedProps<E, T, U>] = rhsValue as never;
                else if (rhsValue == null)
                    ret[rhsKey as keyof MergedProps<E, T, U>] = lhsValue as never;
                else if ((rhsValue as any) == lhsValue) {
                    // I mean, they're the same value at least
                    // so we don't need to do anything.
                    // Not really ideal though.
                }
                else {
                    // Ugh.
                    // No good strategies here, just log it if requested
                    log?.(`Could not merge incompatible prop "${rhsKey}" (type: ${typeof rhsValue}, values: [${lhsValue}, ${rhsValue}])`);
                    ret[rhsKey as keyof MergedProps<E, T, U>] = rhsValue as never
                }
            }
        }

        return ret;
    }
}

function mergeFunctions<T extends (...args: any[]) => any, U extends (((...args: any[]) => any) | null | undefined)[]>(first: T | null | undefined, ...rest: U): (...args: Parameters<T>) => void {
    return (...args: Parameters<T>) => {
        first?.(...args);
        for (let callback of rest) {
            callback?.(...args);
        }
    };
}

/*type ZipSingle<Lhs extends h.JSX.HTMLAttributes<any>, Rhs extends h.JSX.HTMLAttributes<any>, K extends (keyof Lhs | keyof Rhs)> = 
Lhs extends { [K2 in K]: any }?;*/

/*Pick<Lhs, K> extends never ? Extract<Rhs, K> extends never? undefined : Extract<Rhs, K> : Extract<Rhs, K> extends never? Extract<Lhs, K> :
NonNullable<Lhs[K] | Rhs[K]> extends never? undefined : NonNullable<Lhs[K] | Rhs[K]>;*/

/**
 * Sort of like `NonNullable<T>`,
 * but returns `undefined` instead of `never` or `unknown` on failure.
 */
export type NonNullableOrUndefined<T> = T extends null | undefined ? undefined : T;

export type ZipObject<Lhs, Rhs> = {
    //[K in (keyof Lhs | keyof Rhs)]: (K extends keyof Lhs? Lhs[K & keyof Lhs] : undefined) | (K extends keyof Rhs? Rhs[K & keyof Rhs] : undefined);
    [K in (keyof Lhs | keyof Rhs)]: GenericGet<Lhs, K> | GenericGet<Rhs, K>;
}

//export type ZipSingle<Lhs, Rhs> = NonNullableOrUndefined<Lhs | Rhs>;

/**
 * Sort of like doing `prop[name]`, 
 * but returns `undefined` instead of `never` or `unknown` on failure.
 * 
 */
export type GenericGet<T, K extends string | number | symbol, ExtraNullType = never> = (K extends keyof T ? (ExtraNullType | T[K] | undefined) : ExtraNullType | undefined);

export type GenericReplace<T, K extends string | number | symbol, ReplaceType, ExtraNullType = never> = (K extends keyof T ? (ReplaceType) : ExtraNullType | undefined);


/*K extends keyof T? T[K] :
K extends keyof Template ? 
(Required<Template>[K] | undefined) : undefined;*/

function genericGetTest() {
    const t1: GenericGet<{}, "id"> = null! as never;
    const t2: GenericGet<{ id: string }, "id"> = null! as never;
    const t3: Pick<{ id?: string }, "id"> = null! as never;

    if (t3.id == null) {

    }
    else {
        t3.id.concat("")
    }
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