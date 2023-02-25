import { debounce as LodashDebounce } from "lodash-es";
import { useCallback, useEffect, useMemo } from "preact/hooks";
import { useStableCallback } from "./use-stable-callback.js";
import { useState } from "./use-state.js";
function identity(...t) { return t; }
// why???
const AsyncFunction = (async function () { }.constructor);
/**
 * Given an async function, returns a function that's suitable for non-async APIs,
 * along with other information about the current run's status.
 *
 * See also `useAsyncHandler` for a version that's specialized for DOM event handlers.
 *
 * When called multiple times in quick succession, (i.e. before the handler has finished),
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
 */
export function useAsync(asyncHandler2, options) {
    // Things related to current execution
    // Because we can both return and throw undefined, 
    // we need separate state to track their existance too.
    const [pending, setPending, _getPending] = useState(false);
    const [result, setResult, _getResult] = useState(undefined);
    const [error, setError, _getError] = useState(undefined);
    const [hasError, setHasError, _getHasError] = useState(false);
    const [hasResult, setHasResult, _getHasResult] = useState(false);
    const [asyncDebouncing, setAsyncDebouncing] = useState(false);
    const [syncDebouncing, setSyncDebouncing] = useState(false);
    const [invocationResult, setInvocationResult] = useState(asyncHandler2 instanceof AsyncFunction ? "async" : null);
    //const [currentCapture, setCurrentCapture] = useState<AP | undefined>(undefined);
    const incrementCallCount = useCallback(() => { setRunCount(c => c + 1); }, []);
    const incrementResolveCount = useCallback(() => { setResolveCount(c => c + 1); }, []);
    const incrementRejectCount = useCallback(() => { setRejectCount(c => c + 1); }, []);
    const incrementFinallyCount = useCallback(() => { setSettleCount(c => c + 1); }, []);
    /* eslint-disable prefer-const */
    let { throttle, debounce, capture: captureUnstable } = (options ?? {});
    const captureStable = useStableCallback(captureUnstable ?? identity);
    const asyncHandlerStable = useStableCallback(asyncHandler2 ?? identity);
    const { flush, syncOutput, cancel } = useMemo(() => {
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
            throttle: options?.throttle,
            wait: options?.debounce
        });
    }, [throttle, debounce]);
    useEffect(() => {
        return () => cancel();
    }, [cancel]);
    // We keep, like, a lot of render-state, but it only ever triggers a re-render
    // when we start/stop an async action.
    // Keep track of this for the caller's sake -- we don't really care.
    /*const [currentType, setCurrentType] = useState<null | "sync" | "async">(null);*/
    const [runCount, setRunCount] = useState(0);
    const [settleCount, setSettleCount] = useState(0);
    const [resolveCount, setResolveCount] = useState(0);
    const [rejectCount, setRejectCount] = useState(0);
    return {
        syncHandler: syncOutput,
        //currentType,
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
        flushDebouncedPromise: flush
    };
}
function isPromise(p) {
    return p instanceof Promise;
}
const Unset = Symbol("Unset");
/**
 * lodash-ish function that's like debounce + (throttle w/ async handling) combined.
 *
 * Requires a lot of callbacks to meaningfully turn a red function into a blue one, but you *can* do it!
 * Note that part of this is emulating the fact that the sync handler cannot have a return value,
 * so you'll need to use `setResolve` and the other related functions to do that in whatever way works for your specific scenario.
 *
 * The comments are numbered in approximate execution order for your reading pleasure (1 is near the bottom).
 */
function asyncToSync({ asyncInput, onInvoke, onInvoked, onFinally: onFinallyAny, onReject, onResolve, onHasError, onHasResult, onError, onReturnValue, capture, onAsyncDebounce, onSyncDebounce, onPending, throttle, wait }) {
    let pending = false;
    let syncDebouncing = false;
    let asyncDebouncing = false;
    let currentCapture = Unset;
    const onFinally = () => {
        // 8. This is run at the end of every invocation of the async handler,
        // whether it completed or not, and whether it was async or not.
        onFinallyAny();
        onPending(pending = false);
        let nothingElseToDo = (!asyncDebouncing);
        onAsyncDebounce(asyncDebouncing = false);
        if (nothingElseToDo) {
            // 9a. After completing the async handler, we found that it wasn't called again since the last time.
            // This means we can just end. We're done. Mission accomplished.
        }
        else {
            // 9b. Another request to run the async handler came in while we were running this one.
            // Instead of stopping, we're just going to immediately run again using the arguments that were given to us most recently.
            // We also clear that flag, because we're handling it now. It'll be set again if the handler is called again while *this* one is running
            console.assert(currentCapture !== Unset);
            if (currentCapture != Unset) {
                onSyncDebounce(syncDebouncing = true);
                syncDebounced();
            }
        }
    };
    const sync = (...args) => {
        // 5. We're finally running the async version of the function, so notify the caller that the return value is pending.
        // And because the fact that we're here means the debounce/throttle period is over, we can clear that flag too.
        onPending(pending = true);
        console.assert(syncDebouncing == false);
        onHasError(null);
        onHasResult(null);
        let promiseOrReturn;
        let hadSyncError = false;
        try {
            // 6. Run the function we were given.
            // Because it may be sync, or it may throw before returning, we must still wrap it in a try/catch...
            // Also important is that we preserve the async-ness (or lack thereof) on the original input function.
            onInvoke();
            promiseOrReturn = asyncInput(...args);
            onHasError(false);
        }
        catch (ex) {
            hadSyncError = true;
            onError(ex);
            onInvoked("throw");
        }
        // 7. Either end immediately, or schedule to end when completed.
        if (isPromise(promiseOrReturn)) {
            onInvoked("async");
            promiseOrReturn
                .then(r => { onResolve(); onHasResult(true); onReturnValue(r); return r; })
                .catch(e => { onReject(); onHasError(true); onError(e); return e; })
                .finally(onFinally);
        }
        else {
            onInvoked("sync");
            if (!hadSyncError) {
                onResolve();
                onHasResult(true);
                onHasError(false);
            }
            else {
                onReject();
                onHasResult(false);
                onHasError(true);
            }
            onReturnValue(promiseOrReturn);
            onPending(pending = false);
            onFinally();
        }
    };
    // lodash uses "in" instead of checking for `undefined`...
    const lodashOptions = {
        leading: !wait,
        trailing: true
    };
    if (throttle) {
        if (wait == null || (wait < throttle))
            wait = throttle;
        lodashOptions.maxWait = throttle;
    }
    const syncDebounced = LodashDebounce(() => {
        // 3. Instead of calling the sync version of our function directly, we allow it to be throttled/debounced.
        onSyncDebounce(syncDebouncing = false);
        if (!pending) {
            // 4a. If this is the first invocation, or if we're not still waiting for a previous invocation to finish its async call,
            // then we can just go ahead and run the debounced version of our function.
            console.assert(currentCapture != Unset);
            sync(...currentCapture);
        }
        else {
            // 4b. If we were called while still waiting for the (or a) previous invocation to finish,
            // then we'll need to delay this one. When that previous invocation finishes, it'll check
            // to see if it needs to run again, and it will use these new captured arguments from step 2.
            onAsyncDebounce(asyncDebouncing = true);
        }
    }, wait || undefined, lodashOptions);
    return {
        syncOutput: (...args) => {
            // 1. We call the sync version of our async function.
            // 2. We capture the arguments into a form that won't become stale if/when the function is called with a (possibly seconds-long) delay (e.g. event.currentTarget.value on an <input> element).
            currentCapture = capture(...args);
            onSyncDebounce(syncDebouncing = true);
            syncDebounced();
        },
        flush: () => {
            syncDebounced.flush();
        },
        cancel: () => {
            syncDebounced.cancel();
        }
    };
}
//# sourceMappingURL=use-async.js.map