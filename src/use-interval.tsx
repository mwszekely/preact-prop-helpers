import { useCallback, useEffect, useRef } from "preact/hooks";
import { useStableCallback } from "./use-stable-callback";
import { useStableGetter } from "./use-stable-getter";



export interface UseInterval {
    /**
     * The number of ms to wait before invoking `callback`.
     */
    interval: number | null;

    /**
     * Called `timeout` ms after mount, or the last change to `triggerIndex`.
     */
    callback: () => void;
}

export function useInterval({ interval, callback }: UseInterval) {
    // Get a wrapper around the given callback that's stable
    const stableCallback = useStableCallback(callback);
    const getInterval = useStableGetter(interval);

    useEffect(() => {
        let interval = getInterval();
        let lastDelayUsed = interval;

        if (interval == null)
            return;


        // Get a wrapper around the wrapper around the callback
        // that clears and resets the interval if it changes.
        const adjustableCallback = () => {
            stableCallback();
            const currentInterval = getInterval();
            if (currentInterval != lastDelayUsed) {
                clearInterval(handle);
                if (currentInterval != null)
                    handle = setInterval(adjustableCallback, lastDelayUsed = currentInterval);
            }
        }
        let handle = setInterval(adjustableCallback, interval);
        return () => clearInterval(handle);
    }, []);
}

