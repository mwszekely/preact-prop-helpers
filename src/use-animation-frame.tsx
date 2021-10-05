import { useEffect } from "preact/hooks";
import { useStableCallback } from "./use-stable-callback";


export interface UseAnimationFrameParameters {
    /**
     * Callback with effectively the same rules as `requestAnimationFrame`
     */
    callback: null | ((msSinceLast: number) => void);
}

export function useAnimationFrame({ callback }: UseAnimationFrameParameters) {
    // Get a wrapper around the given callback that's stable
    const stableCallback = useStableCallback(callback ?? (() => { }));
    const hasCallback = (callback != null);

    useEffect(() => {
        if (hasCallback) {
            // Get a wrapper around the wrapper around the callback
            // that also calls `requestAnimationFrame` again.
            const rafCallback = (ms: number) => {
                handle = requestAnimationFrame(rafCallback);
                stableCallback(ms);
            }
            let handle = requestAnimationFrame(rafCallback);
            return () => cancelAnimationFrame(handle);
        }
    }, [hasCallback])
}