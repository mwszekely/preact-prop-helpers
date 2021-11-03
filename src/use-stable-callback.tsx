import { useCallback } from "preact/hooks";
import { useStableGetter } from "./use-stable-getter";


/**
 * Alternate useCallback() which always returns the same (wrapped) function reference
 * so that it can be excluded from the dependency arrays of `useEffect` and friends.
 * 
 * Do not use during the render phase!  `useLayoutEffect` is fine though.
 */
export function useStableCallback<T extends (...args: any[]) => any>(fn: T): T {
    const currentCallbackGetter = useStableGetter<T>(fn);

    return useCallback((...args: Parameters<T>): ReturnType<T> => {
        return currentCallbackGetter()(...args);
    }, []) as T;
}