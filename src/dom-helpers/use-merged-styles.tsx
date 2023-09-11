
import { CSSProperties, ElementProps } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";

function styleStringToObject(style: string): CSSProperties {
    // TODO: This sucks D:
    return Object.fromEntries(style.split(";").map(statement => statement.split(":"))) as unknown as CSSProperties;
}

/**
 * Merges two style objects, returning the result.
 * 
 * @param style - The user-given style prop for this component
 * @param obj - The CSS properties you want added to the user-given style
 * @returns A CSS object containing the properties of both objects.
 */
export const useMergedStyles = monitored(function useMergedStyles(lhs: ElementProps<EventTarget>["style"], rhs: ElementProps<EventTarget>["style"]): ElementProps<EventTarget>["style"] {
    // Easy case, when there are no styles to merge return nothing.
    if (!lhs && !rhs)
        return undefined;

    if (typeof lhs != typeof rhs) {
        // Easy cases, when one is null and the other isn't.
        if (lhs && !rhs)
            return lhs;
        if (!lhs && rhs)
            return rhs;

        // They're both non-null but different types.
        // Convert the string type to an object bag type and run it again.
        if (lhs && rhs) {
            // (useMergedStyles isn't a true hook -- this isn't a violation)
            if (typeof lhs == "string")
                return useMergedStyles(styleStringToObject(lhs as string), rhs) as CSSProperties;
            if (typeof rhs == "string")
                return useMergedStyles(lhs, styleStringToObject(rhs as string)) as CSSProperties;
        }

        // Logic???
        return undefined;
    }

    // They're both strings, just concatenate them.
    if (typeof lhs == "string") {
        return `${lhs};${rhs ?? ""}` as unknown as ElementProps<EventTarget>["style"];
    }

    // They're both objects, just merge them.
    return {
        ...(lhs ?? {}) as CSSProperties,
        ...(rhs ?? {}) as CSSProperties
    } as CSSProperties
})

