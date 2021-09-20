import { h } from "preact";
import type { GenericGet } from "./use-merged-props";


/*type MergedNulls<T extends null | undefined, U extends | null | undefined> =
    UnionIncludes<T, null> extends true ? null :
    UnionIncludes<U, null> extends true ? null : undefined;*/

type NonNullableOrUnknown<T> = T extends null | undefined ? undefined : h.JSX.CSSProperties;

export type MergedStyles<Lhs extends Pick<h.JSX.HTMLAttributes<any>, "style"> | null | undefined, Rhs extends Pick<h.JSX.HTMLAttributes<any>, "style"> | null | undefined> = undefined | h.JSX.CSSProperties;

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
    if (!lhs?.style && !rhs?.style)
        return undefined as MergedStyles<Lhs, Rhs>;

    if (typeof lhs != typeof rhs) {
        // Easy cases, when one is null and the other isn't.
        if (lhs?.style && !rhs?.style)
            return lhs.style as MergedStyles<Lhs, Rhs>;
        if (!lhs?.style && rhs?.style)
            return rhs.style as MergedStyles<Lhs, Rhs>;

        // They're both non-null but different types.
        // Convert the string type to an object bag type and run it again.
        if (lhs?.style && rhs?.style) {
            if (typeof lhs?.style == "string")
                return useMergedStyles({ style: Object.fromEntries((lhs?.style as string).split(";").map(statement => statement.split(":"))) as any as h.JSX.CSSProperties }, rhs) as MergedStyles<Lhs, Rhs>;
            if (typeof rhs?.style == "string")
                return useMergedStyles(lhs?.style as Pick<h.JSX.HTMLAttributes<any>, "style">, { style: Object.fromEntries((lhs?.style as any as string).split(";").map(statement => statement.split(":"))) as any as h.JSX.CSSProperties }) as MergedStyles<Lhs, Rhs>;
        }

        // Logic???
        return undefined as MergedStyles<Lhs, Rhs>;
    }

    // They're both strings, just concatenate them.
    if (typeof lhs?.style == "string") {
        return `${lhs.style};${rhs?.style ?? ""}` as unknown as MergedStyles<Lhs, Rhs>;
    }

    // They're both objects, just merge them.
    return {
        ...(lhs?.style ?? {}) as h.JSX.CSSProperties,
        ...(rhs?.style ?? {}) as h.JSX.CSSProperties
    } as unknown as MergedStyles<Lhs, Rhs>;
}

