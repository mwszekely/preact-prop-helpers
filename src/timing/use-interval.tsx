import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useStableGetter } from "../preact-extensions/use-stable-getter.js";
import { useEffect } from "../util/lib.js";
import { Nullable } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";



export interface UseIntervalParameters {
    /**
     * The number of ms to wait before invoking `callback`.
     */
    interval: Nullable<number>;

    /**
     * Called `timeout` ms after mount, or the last change to `triggerIndex`.
     */
    callback: () => void;
}

/**
 * Runs a function every time the specified number of milliseconds elapses while the component is mounted.
 * 
 * @remarks
 * {@include } {@link UseIntervalParameters}
 */
export function useInterval({ interval, callback }: UseIntervalParameters) {
    monitorCallCount(useInterval);
    
    // Get a wrapper around the given callback that's stable
    const stableCallback = useStableCallback(callback);
    const getInterval = useStableGetter(interval);

    useEffect(() => {
        const interval = getInterval();
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

