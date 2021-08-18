import { h } from "preact";
import type { GenericGet } from "./use-merged-props";


/*type MergedNulls<T extends null | undefined, U extends | null | undefined> =
    UnionIncludes<T, null> extends true ? null :
    UnionIncludes<U, null> extends true ? null : undefined;*/

type NonNullableOrUnknown<T> = T extends null | undefined ? undefined : h.JSX.CSSProperties;

export type MergedStyles<Lhs extends Pick<h.JSX.HTMLAttributes<any>, "style"> | null | undefined, Rhs extends Pick<h.JSX.HTMLAttributes<any>, "style"> | null | undefined> = GenericGet<Lhs, "style"> | GenericGet<Rhs, "style">;

//NonNullableOrUnknown<GenericGet<h.JSX.HTMLAttributes<any>, Lhs, "style"> | GenericGet<h.JSX.HTMLAttributes<any>, Rhs, "style"> | undefined>;

type F = NonNullableOrUnknown<GenericGet<{}, "style">> extends string ? true : false;

/**
 * Merges two style objects, returning the result.
 * 
 * @param style The user-given style prop for this component
 * @param obj The CSS properties you want added to the user-given style
 * @returns A CSS object containing the properties of both objects.
 */
export function useMergedStyles<Lhs extends Pick<h.JSX.HTMLAttributes<any>, "style"> | null | undefined, Rhs extends Pick<h.JSX.HTMLAttributes<any>, "style"> | null | undefined>(lhs: Lhs, rhs: Rhs): MergedStyles<Lhs, Rhs> {

    // Easy case, when there are no styles to merge return nothing.
    if (!lhs && !rhs)
        return undefined as MergedStyles<Lhs, Rhs>;

    if (typeof lhs != typeof rhs) {
        // Easy cases, when one is null and the other isn't.
        if (lhs && !rhs)
            return lhs as MergedStyles<Lhs, Rhs>;
        if (!lhs && rhs)
            return rhs as MergedStyles<Lhs, Rhs>;

        // They're both non-null but different types.
        // Convert the string type to an object bag type and run it again.
        if (lhs && rhs) {
            if (typeof lhs == "string")
                return useMergedStyles({ style: Object.fromEntries((lhs as string).split(";").map(statement => statement.split(":"))) as any as h.JSX.CSSProperties }, rhs) as MergedStyles<Lhs, Rhs>;
            if (typeof rhs == "string")
                return useMergedStyles(lhs, { style: Object.fromEntries((lhs as string).split(";").map(statement => statement.split(":"))) as any as h.JSX.CSSProperties }) as MergedStyles<Lhs, Rhs>;
        }

        // Logic???
        return undefined as MergedStyles<Lhs, Rhs>;
    }

    // They're both strings, just concatenate them.
    if (typeof lhs == "string") {
        return `${lhs};${rhs}` as unknown as MergedStyles<Lhs, Rhs>;    // TODO: Improve the typing to make this possible
    }

    // They're both objects, just merge them.
    return {
        ...(lhs?.style ?? {}) as h.JSX.CSSProperties,
        ...(rhs?.style ?? {}) as h.JSX.CSSProperties
    } as unknown as MergedStyles<Lhs, Rhs>;
}


function acceptsStringOrCssOrUndefined(u: string | h.JSX.CSSProperties | undefined) { }
function acceptsStringOrCss(str: string | h.JSX.CSSProperties) { }
function acceptsCss(prop: h.JSX.CSSProperties) { }

function typetest<P extends h.JSX.HTMLAttributes<any>>(props: P) {

    const style: h.JSX.CSSProperties = {};

    const c = [
        useMergedStyles(undefined, undefined),
        useMergedStyles({}, undefined),
        useMergedStyles(undefined, {}),
        useMergedStyles({}, {}),
        useMergedStyles(props, undefined),
        useMergedStyles(undefined, props),
        useMergedStyles(props, props),
        useMergedStyles({ style }, {}),
        useMergedStyles({ style }, props),
        useMergedStyles(props, { style }),
        useMergedStyles({ style }, { style }),
    ] as const;

    // Sanity checks
    c[0] === undefined;
    c[1] === undefined;
    c[2] === undefined;
    c[3] === undefined;
    c[4] === undefined;
    c[5] === undefined;
    c[6] === undefined;

    /// @ts-expect-error Because both were undefined
    c[0]?.backgroundColor;
    /// @ts-expect-error Because "style" was not provided as a prop
    c[1]?.backgrounColor;
    /// @ts-expect-error Because "style" was not provided as a prop
    c[2]?.backgroundColor;
    /// @ts-expect-error Because "style" was not provided as a prop
    c[3]?.backgroundColor;

    /// @ts-expect-error Because "style" may be undefined depending on how P extends HTMLAttributes
    acceptsStringOrCss(c[4]);
    acceptsStringOrCssOrUndefined(c[4]);

    /// @ts-expect-error Because "style" may be undefined depending on how P extends HTMLAttributes
    acceptsStringOrCss(c[5]);
    acceptsStringOrCssOrUndefined(c[5]);

    /// @ts-expect-error Because "style" may be undefined depending on how P extends HTMLAttributes
    acceptsStringOrCss(c[6]);
    acceptsStringOrCssOrUndefined(c[6]);

    // @ts-expect-error TODO: This should be allowed
    acceptsStringOrCss(c[7]);
    acceptsStringOrCssOrUndefined(c[7]);

    // @ts-expect-error TODO: This should be allowed
    acceptsStringOrCss(c[8]);
    acceptsStringOrCssOrUndefined(c[8]);

    // @ts-expect-error TODO: This should be allowed
    acceptsStringOrCss(c[9]);
    acceptsStringOrCssOrUndefined(c[9]);

    // @ts-expect-error TODO: This should be allowed
    acceptsStringOrCss(c[10]);
    acceptsStringOrCssOrUndefined(c[10]);
}