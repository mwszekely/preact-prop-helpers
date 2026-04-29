/**
 * Your usual binary search implementation.
 *
 * Used for typeahead (to search for strings)
 * and managed children (to manage highest/lowest indices)
 *
 * @param array - The array to search through
 * @param wanted - The value you'd like to find
 * @param comparator - Compares `wanted` with the current value in `array`
 * @returns A non-negative value if `wanted` was found, and a negative number if not.
 * The absolute value of this number, minus one, is where `wanted` *would* be found if it *was* in `array`
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function binarySearch<T, U, F extends (lhs: U, rhs: T) => number = (lhs: U, rhs: T) => number>(array: T[], wanted: U, comparator: F): number;
//# sourceMappingURL=binary-search.d.ts.map