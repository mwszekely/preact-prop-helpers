import { useEffect } from "preact/hooks";
import { useStableCallback } from "./use-stable-callback";
import { useStableGetter } from "./use-stable-getter";

export interface UseTimeout {
    /**
     * The number of ms to wait before invoking `callback`.  
     * If `null`, cancels the timeout immediately.
     */
    timeout: number | null;

    /**
     * Changes to this prop between renders can be used to clear the current timeout and create a new one.
     */
    triggerIndex?: unknown;

    /**
     * Called `timeout` ms after mount, or the last change to `triggerIndex`.
     * 
     * Does *not* need to be stable. Go ahead and pass an anonymous function.
     */
    callback: () => void;
}

export function useTimeout({ timeout, callback, triggerIndex }: UseTimeout) {
    const stableCallback = useStableCallback(callback);
    const getTimeout = useStableGetter(timeout);

    const timeoutIsNull = (timeout == null);

    useEffect(() => {
        const timeout = getTimeout();
        console.assert(timeoutIsNull == (timeout == null));

        if (timeout) {
            const handle = setTimeout(stableCallback, timeout);
            return () => clearTimeout(handle);
        }
    }, [triggerIndex, timeoutIsNull])
}
