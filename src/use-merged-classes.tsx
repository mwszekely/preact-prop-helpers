import { default as clsx } from "clsx";
import { h } from "preact";

/**
 * Given two sets of props, merges their `class` and `className` properties.
 * Duplicate classes are removed (order doesn't matter anyway).
 * 
 * @param lhs Classes of the first component
 * @param rhs Classes of the second component
 * @returns A string representing all combined classes from both arguments.
 */
export function useMergedClasses<Lhs extends MergeClassesProps | null | undefined, Rhs extends MergeClassesProps | null | undefined>(lhs: Lhs, rhs: Rhs): MergedClasses<Lhs, Rhs> {

    // Note: For the sake of forward compatibility, this function is labelled as
    // a hook, but as it uses no other hooks it technically isn't one.
    return mergeClasses(lhs, rhs);
}

export type MergedClasses<Lhs extends Pick<h.JSX.HTMLAttributes<any>, "class" | "className"> | null | undefined, Rhs extends Pick<h.JSX.HTMLAttributes<any>, "class" | "className"> | null | undefined> =
    NonNullable<GetBothClasses<Lhs>> extends never ?
    NonNullable<GetBothClasses<Rhs>> extends never ?
    undefined | string :                                                                        // Both are only null
    NonNullable<GetBothClasses<Rhs>> :                                                         // Rhs contains a value, lhs is only null
    NonNullable<GetBothClasses<Rhs>> extends never ? NonNullable<GetBothClasses<Lhs>> :    // Lhs contains a value, rhs is only null
    string;                                                                            // Both types are non-null



type GetClassOrUndefined<T extends { class?: any } | null | undefined> = T extends { class: infer U } ? U : undefined;
type GetClassNameOrUndefined<T extends { className?: any } | null | undefined> = T extends { className: infer U } ? U : undefined;
type GetBothClasses<T extends { class?: any, className?: any } | null | undefined> =
NonNullable<GetClassOrUndefined<T> | GetClassNameOrUndefined<T>> extends never? undefined : string;

export type MergeClassesProps = Pick<h.JSX.HTMLAttributes<any>, "class" | "className">;

function mergeClasses<Lhs extends MergeClassesProps | null | undefined, Rhs extends MergeClassesProps | null | undefined>(lhs: Lhs, rhs: Rhs): MergedClasses<Lhs, Rhs> {
    const lhsClass = lhs?.class;
    const lhsClassName = lhs?.className;
    const rhsClass = rhs?.class;
    const rhsClassName = rhs?.className;

    if (lhsClass || rhsClass || lhsClassName || rhsClassName) {
        const lhsClasses = clsx(lhsClass, lhsClassName).split(" ");
        const rhsClasses = clsx(rhsClass, rhsClassName).split(" ");
        const allClasses = new Set([...Array.from(lhsClasses), ...Array.from(rhsClasses)])

        return Array.from(allClasses).join(" ") as MergedClasses<Lhs, Rhs>;
    }
    else {
        return undefined as MergedClasses<Lhs, Rhs>;
    }
}
