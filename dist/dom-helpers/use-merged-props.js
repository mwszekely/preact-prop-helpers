import { useEnsureStability } from "../preact-extensions/use-passive-state.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { useMergedChildren } from "./use-merged-children.js";
import { useMergedClasses } from "./use-merged-classes.js";
import { useMergedRefs } from "./use-merged-refs.js";
import { useMergedStyles } from "./use-merged-styles.js";
let log = console.warn;
export function enableLoggingPropConflicts(log2) {
    log = log2;
}
/**
 * Given two sets of props, merges them and returns the result.
 *
 * @remarks The hook is aware of and can intelligently merge `className`, `class`, `style`, `ref`, `children`, and all event handlers.
 *
 * If two sets of props both specify the same attribute, e.g. both specify two different `id`s, then an error will be printed to the console (customize this with {@link enableLoggingPropConflicts}), as this conflict needs to be arbitrated on by you.
 *
 * {@include } {@link enableLoggingPropConflicts}
 *
 * @see {@link useMergedRefs}
 * @see {@link useMergedStyles}
 * @see {@link useMergedClasses}
 * @see {@link useMergedChildren}
 *
 *
 * @param allProps - A variadic number of props to merge into one
 *
 * @returns A single object with all the provided props merged into one.
 */
export function useMergedProps(...allProps) {
    monitorCallCount(useMergedProps);
    useEnsureStability("useMergedProps", allProps.length);
    let ret = {};
    for (let nextProps of allProps) {
        ret = useMergedProps2(ret, nextProps);
    }
    return ret;
}
const knowns = new Set(["children", "ref", "className", "class", "style"]);
function mergeUnknown(key, lhsValue, rhsValue) {
    if (typeof lhsValue === "function" || typeof rhsValue === "function") {
        // They're both functions that can be merged (or one's a function and the other's null).
        // Not an *easy* case, but a well-defined one.
        const merged = mergeFunctions(lhsValue, rhsValue);
        return merged;
    }
    else {
        // Uh...they're not both functions so we're here because one of them's null, right?
        if (lhsValue == null && rhsValue == null) {
            if (rhsValue === null && lhsValue === undefined)
                return rhsValue;
            else
                return lhsValue;
        }
        if (lhsValue == null)
            return rhsValue;
        else if (rhsValue == null)
            return lhsValue;
        else if (rhsValue == lhsValue) {
            // I mean, they're the same value at least
            // so we don't need to do anything.
            // Not really ideal though.
            return rhsValue;
        }
        else {
            // Ugh.
            // No good strategies here, just log it if requested
            log?.(`The prop "${key}" cannot simultaneously be the values ${lhsValue} and ${rhsValue}. One must be chosen outside of useMergedProps.`);
            return rhsValue;
        }
    }
}
/**
 * Helper function.
 *
 * This is one of the most commonly called functions in this and consumer libraries,
 * so it trades a bit of readability for speed (i.e. we don't decompose objects and just do regular property access, iterate with `for...in`, instead of `Object.entries`, etc.)
 */
function useMergedProps2(lhsAll, rhsAll) {
    const ret = {
        ref: useMergedRefs(lhsAll.ref, rhsAll.ref),
        style: useMergedStyles(lhsAll.style, rhsAll.style),
        className: useMergedClasses(lhsAll["class"], lhsAll.className, rhsAll["class"], rhsAll.className),
        children: useMergedChildren(lhsAll.children, rhsAll.children),
    };
    if (ret.ref === undefined)
        delete ret.ref;
    if (ret.style === undefined)
        delete ret.style;
    if (ret.className === undefined)
        delete ret.className;
    if (ret["class"] === undefined)
        delete ret["class"];
    if (ret.children === undefined)
        delete ret.children;
    for (const lhsKeyU in lhsAll) {
        const lhsKey = lhsKeyU;
        if (knowns.has(lhsKey))
            continue;
        ret[lhsKey] = lhsAll[lhsKey];
    }
    for (const rhsKeyU in rhsAll) {
        const rhsKey = rhsKeyU;
        if (knowns.has(rhsKey))
            continue;
        ret[rhsKey] = mergeUnknown(rhsKey, ret[rhsKey], rhsAll[rhsKey]);
    }
    return ret;
}
export function mergeFunctions(lhs, rhs) {
    if (!lhs)
        return rhs;
    if (!rhs)
        return lhs;
    return (...args) => {
        const lv = lhs(...args);
        const rv = rhs(...args);
        if (lv instanceof Promise || rv instanceof Promise)
            return Promise.all([lv, rv]);
    };
}
//# sourceMappingURL=use-merged-props.js.map