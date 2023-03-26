import { ElementProps } from "../util/types.js";
type C = ElementProps<EventTarget>["className"];
/**
 * Given two sets of props, merges their `class` and `className` properties.
 * Duplicate classes are removed (order doesn't matter anyway).
 *
 * @param lhs Classes of the first component
 * @param rhs Classes of the second component
 * @returns A string representing all combined classes from both arguments.
 */
export declare function useMergedClasses(lhsClassName: C, rhsClassName: C): string | undefined;
export {};
//# sourceMappingURL=use-merged-classes.d.ts.map