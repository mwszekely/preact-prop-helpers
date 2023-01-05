import { h } from "preact";

function styleStringToObject(style: string): h.JSX.CSSProperties {
    // TODO: This sucks D:
    return Object.fromEntries(style.split(";").map(statement => statement.split(":"))) as unknown as h.JSX.CSSProperties;
}

/**
 * Merges two style objects, returning the result.
 * 
 * @param style The user-given style prop for this component
 * @param obj The CSS properties you want added to the user-given style
 * @returns A CSS object containing the properties of both objects.
 */
export function useMergedStyles(lhs: Pick<h.JSX.HTMLAttributes<EventTarget>, "style">, rhs: Pick<h.JSX.HTMLAttributes<EventTarget>, "style">): h.JSX.HTMLAttributes<EventTarget>["style"] {

    // Easy case, when there are no styles to merge return nothing.
    if (!lhs?.style && !rhs?.style)
        return undefined;

    if (typeof lhs != typeof rhs) {
        // Easy cases, when one is null and the other isn't.
        if (lhs?.style && !rhs?.style)
            return lhs.style;
        if (!lhs?.style && rhs?.style)
            return rhs.style;

        // They're both non-null but different types.
        // Convert the string type to an object bag type and run it again.
        if (lhs?.style && rhs?.style) {
            // (useMergedStyles isn't a true hook -- this isn't a violation)
            if (typeof lhs?.style == "string")
                return useMergedStyles({ style: styleStringToObject(lhs?.style as string) }, rhs) as h.JSX.CSSProperties;
            if (typeof rhs?.style == "string")
                return useMergedStyles(lhs, { style: styleStringToObject(rhs?.style as string) }) as h.JSX.CSSProperties;
        }

        // Logic???
        return undefined;
    }

    // They're both strings, just concatenate them.
    if (typeof lhs?.style == "string") {
        return `${lhs.style};${rhs?.style ?? ""}` as unknown as string;
    }

    // They're both objects, just merge them.
    return {
        ...(lhs?.style ?? {}) as h.JSX.CSSProperties,
        ...(rhs?.style ?? {}) as h.JSX.CSSProperties
    } as unknown as h.JSX.CSSProperties
}

