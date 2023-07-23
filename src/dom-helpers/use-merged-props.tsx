import { useEnsureStability } from "../preact-extensions/use-passive-state.js";
import { ElementProps } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { useMergedChildren } from "./use-merged-children.js";
import { useMergedClasses } from "./use-merged-classes.js";
import { useMergedRefs } from "./use-merged-refs.js";
import { useMergedStyles } from "./use-merged-styles.js";

let log = console.warn;

/**
 * When `useMergedProps` encounters a conflict, the function passed here will be called.
 * 
 * @defaultValue `console.warn`
 */
export function enableLoggingPropConflicts(log2: typeof console["log"]) {
    log = log2
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
 * @param allProps - A variadic number of props to merge into one
 * 
 * @returns A single object with all the provided props merged into one.
 */
export function useMergedProps<E extends EventTarget>(...allProps: ElementProps<E>[]) {
    monitorCallCount(useMergedProps);
    useEnsureStability("useMergedProps", allProps.length);
    let ret: ElementProps<E> = {};
    for (let nextProps of allProps) {
        ret = useMergedProps2<E>(ret, nextProps);
    }

    return ret;
}

const knowns = new Set<string>(["children", "ref", "className", "class", "style"])

function mergeUnknown(key: string, lhsValue: unknown, rhsValue: unknown) {

    if (typeof lhsValue === "function" || typeof rhsValue === "function") {

        // They're both functions that can be merged (or one's a function and the other's null).
        // Not an *easy* case, but a well-defined one.
        const merged = mergeFunctions(lhsValue as never, rhsValue as never);
        return merged as never;
    }
    else {
        // Uh...they're not both functions so we're here because one of them's null, right?
        if (lhsValue == null && rhsValue == null) {
            if (rhsValue === null && lhsValue === undefined)
                return rhsValue as never;
            else
                return lhsValue as never;
        }
        if (lhsValue == null)
            return rhsValue as never;
        else if (rhsValue == null)
            return lhsValue as never;
        else if ((rhsValue as any) == lhsValue) {
            // I mean, they're the same value at least
            // so we don't need to do anything.
            // Not really ideal though.
            return rhsValue as never;
        }
        else {
            // Ugh.
            // No good strategies here, just log it if requested
            log?.(`The prop "${key}" cannot simultaneously be the values ${lhsValue} and ${rhsValue}. One must be chosen outside of useMergedProps.`);
            return rhsValue as never
        }
    }
}

/**
 * Helper function.
 * 
 * This is one of the most commonly called functions in this and consumer libraries,
 * so it trades a bit of readability for speed (i.e. we don't decompose objects and just do regular property access, iterate with `for...in`, instead of `Object.entries`, etc.)
 */
function useMergedProps2<E extends EventTarget>(lhsAll: ElementProps<E>, rhsAll: ElementProps<E>): ElementProps<E> {

    
    const ret: ElementProps<E> = {
        ref: useMergedRefs<E>(lhsAll.ref, rhsAll.ref),
        style: useMergedStyles(lhsAll.style, rhsAll.style),
        className: useMergedClasses(lhsAll["class" as keyof ElementProps<E>], lhsAll.className, rhsAll["class" as keyof ElementProps<E>], rhsAll.className),
        children: useMergedChildren(lhsAll.children, rhsAll.children),
    } as any;

    if (ret.ref === undefined) delete ret.ref;
    if (ret.style === undefined) delete ret.style;
    if (ret.className === undefined) delete ret.className;
    if (ret["class" as keyof ElementProps<E>] === undefined) delete ret["class" as keyof ElementProps<E>];
    if (ret.children === undefined) delete ret.children;

    for (const lhsKeyU in lhsAll) {
        const lhsKey = lhsKeyU as keyof typeof lhsAll;
        if (knowns.has(lhsKey))
            continue;
        ret[lhsKey] = lhsAll[lhsKey];
    }

    for (const rhsKeyU in rhsAll) {
        const rhsKey = rhsKeyU as keyof typeof rhsAll;
        if (knowns.has(rhsKey))
            continue;
        ret[rhsKey] = mergeUnknown(rhsKey, ret[rhsKey], rhsAll[rhsKey]);
    }

    return ret;

}

export function mergeFunctions<T extends (...args: any[]) => (void | Promise<void>), U extends (...args: any[]) => (void | Promise<void>)>(lhs: T | null | undefined, rhs: U | null | undefined) {

    if (!lhs)
        return rhs;
    if (!rhs)
        return lhs;

    return (...args: Parameters<T>) => {
        const lv = lhs(...args);
        const rv = rhs(...args);

        if (lv instanceof Promise || rv instanceof Promise)
            return Promise.all([lv, rv]);
    };
}
