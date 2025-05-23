import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useStableGetter } from "../preact-extensions/use-stable-getter.js";
import { useCallback, useEffect, useRef } from "../util/lib.js";
import { useMonitoring } from "../util/use-call-count.js";
/**
 * Runs a function the specified number of milliseconds after the component renders.
 *
 * @remarks This is particularly useful to function as "useEffect on a delay".
 *
 * @remarks
 * {@include } {@link UseTimeoutParameters}
 */
export function useTimeout({ timeout, callback, triggerIndex }) {
    return useMonitoring(function useTimeout() {
        const stableCallback = useStableCallback(() => { startTimeRef.current = null; callback(); });
        const getTimeout = useStableGetter(timeout);
        // Set any time we start timeout.
        // Unset any time the timeout completes
        const startTimeRef = useRef(null);
        const disabled = (timeout == null);
        // Any time the triggerIndex changes (including on mount)
        // restart the timeout.  The timeout does NOT reset
        // when the duration or callback changes, only triggerIndex.
        useEffect(() => {
            if (!disabled) {
                const timeout = getTimeout();
                console.assert(disabled == (timeout == null));
                if (timeout != null) {
                    startTimeRef.current = +(new Date());
                    const handle = setTimeout(stableCallback, timeout);
                    return () => clearTimeout(handle);
                }
            }
        }, [triggerIndex, disabled]);
        const getElapsedTime = useCallback(() => {
            return (+(new Date())) - (+(startTimeRef.current ?? new Date()));
        }, []);
        const getRemainingTime = useCallback(() => {
            const timeout = getTimeout();
            return timeout == null ? null : Math.max(0, timeout - getElapsedTime());
        }, []);
        return { getElapsedTime, getRemainingTime };
    });
}
//# sourceMappingURL=use-timeout.js.map