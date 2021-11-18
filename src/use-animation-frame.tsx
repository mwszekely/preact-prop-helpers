import { useEffect } from "preact/hooks";
import { useStableCallback } from "./use-stable-callback";


export interface UseAnimationFrameParameters {
    /**
     * Callback with effectively the same rules as `requestAnimationFrame`
     */
    callback: null | ((msSinceLast: number) => void);
}

/**
 * The (optionally non-stable) `callback` you provide will start running every frame after the component mounts.
 * 
 * Passing `null` is fine and simply stops the effect until you restart it by providing a non-null callback.
 * 
 * **This hook does not return anything at all, including no prop-modifying hooks**
 */
export function useAnimationFrame({ callback }: UseAnimationFrameParameters): void {
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