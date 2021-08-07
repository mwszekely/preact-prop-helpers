import { useLayoutEffect, useMemo } from "preact/hooks";
import { useState } from "./use-state";

// Used instead of undefined in case undefined is a 
// type that's frequently used in the used use case.
const NeverSet = Symbol("never-set");

/**
 * Returns a value that does not change between renders. The provided getter will only be called once, just in case it's expensive.
 * 
 * Optionally, the value can depend on a set of arguments that will be passed to the getter.
 * 
 * Effectively, this is `useMemo`, except it passes its dependencies to the factory function.
 * 
 * @param getter A function that returns the value you want to use
 * @param args Optional arguments to pass to the function. The function will only be called again if these change.
 * @returns 
 */
export function useConstant<G extends (...args: any[]) => any>(getter: G, ...args: Parameters<G>): ReturnType<G> {
    const [value, setValue] = useState<ReturnType<G> | typeof NeverSet>(NeverSet);

    useLayoutEffect(() => { setValue(prev => getter(...args)); }, args);

    if (value === NeverSet)
        return getter(...args);
    return value;
}