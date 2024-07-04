import { asyncToSync } from "async-to-sync";
import { identity } from "lodash-es";
import { useCallback, useEffect, useMemo } from "../util/lib.js";
import { monitored } from "../util/use-call-count.js";
import { useStableCallback } from "./use-stable-callback.js";
import { useState } from "./use-state.js";
function identityCapture(...t) { return t; }
const AsyncFunction = ((async function () { }).constructor);
/**
 * Given an async function, returns a function that's suitable for non-async APIs,
 * along with other information about the current run's status.
 *
 * @see {@link useAsyncHandler} for a version that's specialized for DOM event handlers.
 *
 * @remarks When called multiple times in quick succession, (i.e. before the handler has finished),
 * this works like Lodash's `throttle` function with the `wait` option always
 * set to however long the handler takes to complete. A second call to the sync function will be
 * throttled until the first call has finished. The return value of the function is the result
 * of the previous invocation, or `undefined` on the first call.
 *
 * The handler is only ever delayed if one is currently running, so, e.g. for iOS touch events the
 * first call happens in the same event handler (which means things like calls to `element.focus()`
 * will work as intended, since that fails when the event is "split up")
 *
 * Finally, because the sync handler may be invoked on a delay, any property references on the arguments
 * provided might be stale by the time it's actually invoked (e.g. accessing `event.currentTarget.checked`
 * is not stable across time because it's a "live" value -- you almost always want the value that it
 * had at the original time the handler was called). The `capture` option allows you to save that kind of
 * dynamic data at the time it runs; the `AP` and `SP` type parameters likewise control
 * the parameters the async handler and sync handler expect respectively.
 *
 * {@include } {@link UseAsyncParameters}
 *
 * @param asyncHandler - The async function to make sync
 * @param options - @see {@link UseAsyncParameters}
 *
 */
export const useAsync = /*@__PURE__*/ monitored(function useAsync(asyncHandler, options) {
    // Things related to current execution
    // Because we can both return and throw undefined, 
    // we need separate state to track their existence too.
    //
    // We keep, like, a *lot* of render-state, but it only ever triggers a re-render
    // when we start/stop an async action.
    const [pending, setPending, _getPending] = useState(false);
    const [result, setResult, _getResult] = useState(undefined);
    const [error, setError, _getError] = useState(undefined);
    const [hasError, setHasError, _getHasError] = useState(false);
    const [hasResult, setHasResult, _getHasResult] = useState(false);
    const [asyncDebouncing, setAsyncDebouncing] = useState(false);
    const [syncDebouncing, setSyncDebouncing] = useState(false);
    const [invocationResult, setInvocationResult] = useState(asyncHandler instanceof AsyncFunction ? "async" : null);
    // Keep track of this for the caller's sake -- we don't really care.
    const [runCount, setRunCount] = useState(0);
    const [settleCount, setSettleCount] = useState(0);
    const [resolveCount, setResolveCount] = useState(0);
    const [rejectCount, setRejectCount] = useState(0);
    const incrementCallCount = useCallback(() => { setRunCount(c => c + 1); }, []);
    const incrementResolveCount = useCallback(() => { setResolveCount(c => c + 1); }, []);
    const incrementRejectCount = useCallback(() => { setRejectCount(c => c + 1); }, []);
    const incrementFinallyCount = useCallback(() => { setSettleCount(c => c + 1); }, []);
    /* eslint-disable prefer-const */
    let { throttle, debounce, capture: captureUnstable } = (options ?? {});
    const captureStable = useStableCallback(captureUnstable ?? identityCapture);
    const asyncHandlerStable = useStableCallback(asyncHandler ?? identity);
    const { flushSyncDebounce, syncOutput, cancelSyncDebounce } = useMemo(() => {
        return asyncToSync({
            asyncInput: asyncHandlerStable,
            capture: captureStable,
            onAsyncDebounce: setAsyncDebouncing,
            onError: setError,
            onPending: setPending,
            onReturnValue: setResult,
            onSyncDebounce: setSyncDebouncing,
            onHasError: setHasError,
            onHasResult: setHasResult,
            onInvoked: setInvocationResult,
            onInvoke: incrementCallCount,
            onFinally: incrementFinallyCount,
            onReject: incrementRejectCount,
            onResolve: incrementResolveCount,
            throttle: options?.throttle ?? undefined,
            wait: options?.debounce ?? undefined
        });
    }, [throttle, debounce]);
    useEffect(() => {
        return () => cancelSyncDebounce();
    }, [cancelSyncDebounce]);
    return {
        syncHandler: syncOutput,
        pending,
        result,
        error,
        hasError: hasError || false,
        hasResult: hasResult || false,
        resolveCount,
        rejectCount,
        settleCount,
        debouncingAsync: asyncDebouncing,
        debouncingSync: syncDebouncing,
        invocationResult,
        callCount: runCount,
        flushDebouncedPromise: flushSyncDebounce
    };
});
//# sourceMappingURL=use-async.js.map