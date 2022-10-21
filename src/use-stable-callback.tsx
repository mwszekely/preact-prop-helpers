import { useCallback as useCallbackNative } from "preact/hooks";
import { Stable, useStableGetter } from "./use-stable-getter";



/**
 * Alternate useCallback() which always returns the same (wrapped) function reference
 * so that it can be excluded from the dependency arrays of `useEffect` and friends.
 * 
 * In general, just pass the function you want to be stable (but you can't use it during render,
 * so be careful!).  Alternatively, if you need a stable callback that **can** be used
 * during render, pass an empty dependency array and it'll act like `useCallback` with an
 * empty dependency array, but with the associated stable typing. In this case, you ***must*** ensure that it
 * truly has no dependencies/only stable dependencies!!
 */
export function useStableCallback<T extends (..._args: any[]) => any>(fn: T, noDeps: []): Stable<T>;
export function useStableCallback<T extends (..._args: any[]) => any>(fn: T): Stable<T>;
export function useStableCallback<T extends (..._args: any[]) => any>(fn: T, noDeps?: []): Stable<T> {
    if (noDeps == null) {
        const currentCallbackGetter = useStableGetter<T>(fn);

        return useCallbackNative((...args: Parameters<T>): ReturnType<T> => {
            return currentCallbackGetter()(...args);
        }, []) as Stable<T>;
    }
    else {
        console.assert(noDeps.length === 0);
        return useCallbackNative(fn, []) as Stable<T>;
    }
}
