import { useCallback as useCallbackNative } from "../util/lib.js";
import { useEnsureStability } from "./use-passive-state.js";
import { useStableGetter } from "./use-stable-getter.js";


//const _IS_STABLE_GETTER = Symbol("STABLE");
export type Stable<T> = T;// & { [_STABLE]: true };

/**
 * We keep track of which callbacks are stable with a WeakMap instead of, say, a symbol because
 * `useCallback` will return a function that's stable across *all* renders, meaning
 * we can't use our funny "`if` only works here because it doesn't break the rules of hooks" trick then.
 * 
 * TODO: This is disabled because it doesn't provide much performance benefit and also inherently leaks memory
 */
const map = new WeakMap<Function, boolean>();

export function isStableGetter<T extends Function>(obj: T): obj is Stable<T> {
    return false;
    return (map.get(obj) ?? false);
}
function setIsStableGetter<T extends (..._args: any[]) => any>(obj: T): Stable<T> {
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
export const useStableCallback = (function useStableCallback<T extends Function | null | undefined>(fn: NonNullable<T>, noDeps?: [] | null | undefined): Stable<NonNullable<T>> {

    type U = (NonNullable<T> & ((...args: any) => any));
    useEnsureStability("useStableCallback", noDeps == null, noDeps?.length, isStableGetter<U>(fn as U));
    if (isStableGetter(fn))
        return fn;

    if (noDeps == null) {
        const currentCallbackGetter = useStableGetter<U>(fn);
        return setIsStableGetter(useCallbackNative<U>(((...args) => {
            return currentCallbackGetter()(...args);
        }) as U, []));

    }
    else {
        console.assert(noDeps.length === 0);
        return setIsStableGetter(useCallbackNative<U>(fn, []));
    }
})

export const useStableMergedCallback = (function useStableMergedCallback<T extends (Function | null | undefined)[]>(...fns: T) {
    return useStableCallback<T[number]>((...args: any[]) => {
        for (let i = 0; i < fns.length; ++i) {
            fns[i]?.(...args);
        }
    });

});

