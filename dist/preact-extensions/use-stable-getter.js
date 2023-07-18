import { useCallback, useMemo, useRef } from "../util/lib.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { useBeforeLayoutEffect } from "./use-before-layout-effect.js";
import { useEnsureStability } from "./use-passive-state.js";
const Unset = Symbol("unset");
/**
 * Given an input value, returns a constant getter function that can be used
 * inside of `useEffect` and friends without including it in the dependency array.
 *
 * This uses `options.diffed` in order to run before everything, even
 * ref assignment. This means this getter is safe to use anywhere ***except the render phase***.
 */
export function useStableGetter(value) {
    monitorCallCount(useStableGetter);
    const ref = useRef(Unset);
    useBeforeLayoutEffect((() => { ref.current = value; }), [value]);
    return useCallback(() => {
        if (ref.current === Unset) {
            throw new Error('Value retrieved from useStableGetter() cannot be called during render.');
        }
        return ref.current;
    }, []);
}
/**
 * Like `useStableGetter`, but ***requires*** that everything in the object is also stable,
 * and in turn returns an object that itself is stable.
 * @param t
 * @returns
 */
function useStableObject(t) {
    const e = Object.entries(t);
    useEnsureStability("useStableObject", e.length, ...e.map(([_k, v]) => v));
    return useRef(t).current;
}
export function useMemoObject(t) {
    return useMemo(() => { return t; }, Object.values(t));
}
//# sourceMappingURL=use-stable-getter.js.map