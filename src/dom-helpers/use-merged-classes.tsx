import { ElementProps } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";

/**
 * Merged the `class` and `className` properties of two sets of props into a single string.
 * 
 * @remarks Duplicate classes are removed (order doesn't matter anyway).
 */
export function useMergedClasses(...classes: ElementProps<EventTarget>["className"][]): string | undefined {
    monitorCallCount(useMergedClasses);

    // Note: For the sake of forward compatibility, this function is labelled as
    // a hook, but as it uses no other hooks it technically isn't one.
    let classesSet = new Set<ElementProps<EventTarget>["className"]>();
    for (let c of classes) {
        classesSet.add(c);
    }

    if (classesSet.size) {
        return Array.from(classesSet).join(" ");
    }
    else {
        return undefined;
    }
}
