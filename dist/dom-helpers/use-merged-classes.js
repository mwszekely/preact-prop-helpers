import { clsx } from "clsx";
import { monitorCallCount } from "../util/use-call-count.js";
/**
 * Given two sets of props, merges their `class` and `className` properties.
 * Duplicate classes are removed (order doesn't matter anyway).
 *
 * @param lhs Classes of the first component
 * @param rhs Classes of the second component
 * @returns A string representing all combined classes from both arguments.
 */
export function useMergedClasses(lhsClassName, rhsClassName) {
    monitorCallCount(useMergedClasses);
    // Note: For the sake of forward compatibility, this function is labelled as
    // a hook, but as it uses no other hooks it technically isn't one.
    if (lhsClassName || rhsClassName) {
        return clsx(lhsClassName, rhsClassName);
        /*const lhsClasses = (lhsClassName || "").split(" ");
        const rhsClasses = (rhsClassName || "").split(" ");
        const allClasses = new Set([...Array.from(lhsClasses), ...Array.from(rhsClasses)])

        return Array.from(allClasses).join(" ");*/
    }
    else {
        return undefined;
    }
}
//# sourceMappingURL=use-merged-classes.js.map