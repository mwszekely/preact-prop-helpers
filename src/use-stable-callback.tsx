import { useCallback } from "preact/hooks";
import { useStableGetter } from "./use-stable-getter";


/**
 * Alternate useCallback() which always returns the same (wrapped) function reference
 * so that it can be excluded from the dependency arrays of `useEffect` and friends.
 * 
 * DO NOT USE THE RESULT IN useLayoutEffect!!
 * 
 * TODO: Investigate options.diffed if the useLayoutEffect limitation becomes limitlessly limiting.
 * 
 * Source: https://github.com/facebook/react/issues/14099#issuecomment-659298422
 */
export function useStableCallback<T extends (...args: any[]) => any>(fn: T): T {
    const currentCallbackGetter = useStableGetter<T>(fn);

    return useCallback((...args: Parameters<T>): ReturnType<T> => {
        return currentCallbackGetter()(...args);
    }, []) as T;
}