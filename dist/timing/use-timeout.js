import { useCallback, useEffect, useRef } from "react";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useStableGetter } from "../preact-extensions/use-stable-getter.js";
import { monitorCallCount } from "../util/use-call-count.js";
export function useTimeout({ timeout, callback, triggerIndex }) {
    monitorCallCount(useTimeout);
    const stableCallback = useStableCallback(() => { startTimeRef.current = null; callback(); });
    const getTimeout = useStableGetter(timeout);
    // Set any time we start timeout.
    // Unset any time the timeout completes
    const startTimeRef = useRef(null);
    const timeoutIsNull = (timeout == null);
    // Any time the triggerIndex changes (including on mount)
    // restart the timeout.  The timeout does NOT reset
    // when the duration or callback changes, only triggerIndex.
    useEffect(() => {
        if (!timeoutIsNull) {
            const timeout = getTimeout();
            console.assert(timeoutIsNull == (timeout == null));
            if (timeout != null) {
                startTimeRef.current = +(new Date());
                const handle = setTimeout(stableCallback, timeout);
                return () => clearTimeout(handle);
            }
        }
    }, [triggerIndex, timeoutIsNull]);
    const getElapsedTime = useCallback(() => {
        return (+(new Date())) - (+(startTimeRef.current ?? new Date()));
    }, []);
    const getRemainingTime = useCallback(() => {
        const timeout = getTimeout();
        return timeout == null ? null : Math.max(0, timeout - getElapsedTime());
    }, []);
    return { getElapsedTime, getRemainingTime };
}
//# sourceMappingURL=use-timeout.js.map