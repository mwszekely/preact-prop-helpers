import { CSSProperties, ElementProps } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";

/**
 * Merges two style objects, returning the result.
 * 
 * @param style The user-given style prop for this component
 * @param obj The CSS properties you want added to the user-given style
 * @returns A CSS object containing the properties of both objects.
 */
export function useMergedStyles(lhs: ElementProps<EventTarget>["style"], rhs: ElementProps<EventTarget>["style"]): ElementProps<EventTarget>["style"] {
    monitorCallCount(useMergedStyles);

    // Easy case, when there are no styles to merge return nothing.
    if (!lhs && !rhs)
        return undefined;

        // Easy cases, when one is null and the other isn't.
        if (lhs && !rhs)
            return lhs;
        if (!lhs && rhs)
            return rhs;

    // They're both objects, just merge them.
    return {
        ...(lhs ?? {}) as CSSProperties,
        ...(rhs ?? {}) as CSSProperties
    } as unknown as CSSProperties
}

