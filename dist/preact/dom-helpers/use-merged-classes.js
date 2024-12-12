/**
 * Merged the `class` and `className` properties of two sets of props into a single string.
 *
 * @remarks Duplicate classes are removed (order doesn't matter anyway).
 */
export function useMergedClasses(...classes) {
    // Note: For the sake of forward compatibility, this function is labelled as
    // a hook, but as it uses no other hooks it technically isn't one.
    let classesSet = new Set();
    for (let c of classes) {
        if (typeof c == "string" && c.trim())
            classesSet.add(c);
    }
    if (classesSet.size) {
        return Array.from(classesSet).join(" ");
    }
    else {
        return undefined;
    }
}
//# sourceMappingURL=use-merged-classes.js.map