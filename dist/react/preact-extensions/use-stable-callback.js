import { useCallback as useCallbackNative } from "../util/lib.js";
import { useEnsureStability } from "./use-passive-state.js";
import { useStableGetter } from "./use-stable-getter.js";
/**
 * We keep track of which callbacks are stable with a WeakMap instead of, say, a symbol because
 * `useCallback` will return a function that's stable across *all* renders, meaning
 * we can't use our funny "`if` only works here because it doesn't break the rules of hooks" trick then.
 *
 * TODO: This is disabled because it doesn't provide much performance benefit and also inherently leaks memory
 */
const map = new WeakMap();
export function isStableGetter(obj) {
    return false;
    return (map.get(obj) ?? false);
}
function setIsStableGetter(obj) {
    return obj;
    map.set(obj, true);
    return obj;
}
/**
 * Alternate useCallback() which always returns the same (wrapped) function reference
 * so that it can be excluded from the dependency arrays of `useEffect` and friends.
 *
 * @remarks In general, just pass the function you want to be stable (but you can't use it during render,
 * so be careful!).  Alternatively, if you need a stable callback that **can** be used
 * during render, pass an empty dependency array and it'll act like `useCallback` with an
 * empty dependency array, but with the associated stable typing. In this case, you ***must*** ensure that it
 * truly has no dependencies/only stable dependencies!!
 */
export const useStableCallback = (function useStableCallback(fn, noDeps) {
    useEnsureStability("useStableCallback", noDeps == null, noDeps?.length, isStableGetter(fn));
    if (isStableGetter(fn))
        return fn;
    if (noDeps == null) {
        const currentCallbackGetter = useStableGetter(fn);
        return setIsStableGetter(useCallbackNative(((...args) => {
            return currentCallbackGetter()(...args);
        }), []));
    }
    else {
        console.assert(noDeps.length === 0);
        return setIsStableGetter(useCallbackNative(fn, []));
    }
});
//# sourceMappingURL=use-stable-callback.js.map