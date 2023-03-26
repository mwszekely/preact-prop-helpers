import { Ref } from "react";
import { useEnsureStability } from "../preact-extensions/use-passive-state.js";
import { ElementProps } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { useMergedChildren } from "./use-merged-children.js";
import { useMergedClasses } from "./use-merged-classes.js";
import { useMergedRefs } from "./use-merged-refs.js";
import { useMergedStyles } from "./use-merged-styles.js";

let log = console.warn;

export function enableLoggingPropConflicts(log2: typeof console["log"]) {
    log = log2
}

/**
 * Given two sets of props, merges them and returns the result.
 * 
 * The hook is aware of and can intelligently merge `className`, `class`, `style`, `ref`, and all event handlers.
 * @param lhs2 
 * @param rhs2 
 * @returns 
 */
export function useMergedProps<E extends EventTarget>(...allProps: {}[]) {
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
        // Uh...we're here because one of them's null, right?
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
function useMergedProps2<E extends EventTarget>(lhsAll: any, rhsAll: any): ElementProps<E> {

    
    const ret: any = {
        ref: useMergedRefs<E>(lhsAll.ref as Ref<E>, rhsAll.ref as Ref<E>),
        style: useMergedStyles(lhsAll.style, rhsAll.style),
        className: useMergedClasses(lhsAll.className, rhsAll.className),
        children: useMergedChildren(lhsAll.children, rhsAll.children),
    } as any;

    if (ret.ref === undefined) delete ret.ref;
    if (ret.style === undefined) delete ret.style;
    if (ret.className === undefined) delete ret.className;
    if (ret.children === undefined) delete ret.children;

    for (const lhsKeyU in lhsAll) {
        const lhsKey = lhsKeyU as keyof typeof lhsAll;
        if (knowns.has(lhsKey as string))
            continue;
        ret[lhsKey] = lhsAll[lhsKey];
    }

    for (const rhsKeyU in rhsAll) {
        const rhsKey = rhsKeyU as (keyof typeof rhsAll) & string;
        if (knowns.has(rhsKey as string))
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
