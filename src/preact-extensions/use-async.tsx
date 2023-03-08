
import { debounce as LodashDebounce, DebounceSettings, identity } from "lodash-es";
import { useCallback, useEffect, useMemo } from "preact/hooks";
import { useStableCallback } from "./use-stable-callback.js";
import { useState } from "./use-state.js";

//type Func = (...args: any) => Promise<unknown> | unknown;

export interface UseAsyncParameters<AP extends unknown[], SP extends unknown[] = AP> {
    /**
     * If provided, adds a debounce behavior *in addition* to
     * the default "wait until resolved" throttling behavior.
     */
    debounce?: number;

    /**
     * By default, `useAsync` with auto-throttle based on how long it takes
     * for the operation to complete.  If you would like there to be a
     * minimum amount of time to wait before allowing a second operation,
     * the `throttle` parameter can be used in addition to that behavior.
     * 
     * `throttle` *includes* the time it takes for the async operation to finish.
     * If `throttle` is 500ms, and the async function finishes in 700ms, then
     * another one will be run immediately. If it took 100ms, then we'd wait
     * for the remaining 400ms until allowing a second run.
     */
    throttle?: number;

    /**
     * When an async function is debounced due to one already running,
     * it will run on a delay and, as a result, the original arguments
     * that were passed to it may need to be adjusted to account for that.
     * 
     * For example, during `onInput`, the `value` of that event isn't stored
     * in the event itself, it's stored in the `HTMLInputElement` that raised it.
     * So when our handler actually runs a few seconds later, it'll read the **next**
     * `event.currentTarget.value`, instead of the one from a few seconds ago 
     * that actually raised the event!
     * 
     * If the arguments to your handler require referencing data in the arguments
     * that may become "stale" by the time the function actually runs (generally event
     * handlers and other things that reference the properties of existing objects),
     * the `capture` parameter allows you to transform the parameters you were given
     * when the request to run was initially made into parameters that you have
     * guaranteed will still be good by the time the handler actually runs.
     */
    capture?: CaptureFunctionType<AP, SP>;
}

export interface UseAsyncReturnType<SP extends unknown[], R> {

    /**
     * When the async handler is currently executing, this is true.
     * When it finishes, this becomes false.
     */
    pending: boolean;

    /** 
     * True when we're waiting for a debounce or throttle to end (that's not due waiting for the async function to complete)
     */
    debouncingSync: boolean;

    /**
     * True when a second invocation of the handler has been called, and it's waiting until the first before it runs.
     */
    debouncingAsync: boolean;

    /**
     * The number of times the handler has run.
     * Does not include times where it was throttled or debounced away.
     * 
     * Useful for knowing if the handler has been called yet, or for
     * setting a new timeout to show a spinner.
     */
    callCount: number;

    /**
     * The number of times the handler has settled
     * (resolved or rejected), similarly to `callCount`.
     * 
     * Useful for knowing if the handler has completed even once yet,
     * or just for when the handler has finished
     */
    settleCount: number;

    /**
     * The number of times the handler has completed successfully, 
     * similarly to `settleCount`.
     */
    resolveCount: number;


    /**
     * The number of times the handler has failed to complete, 
     * similarly to `resolveCount`.
     */
    rejectCount: number;

    /**
     * Represents the value most recently returned from a successful handler invocation,
     * or undefined if no handler has successfully returned yet.
     * 
     * If the handler rejects after having succeeded previously, then
     * `result` will still keep its value; it won't be "erased" due to the error.
     * This means that `result` and `error` can both be populated at the same time.
     * 
     * @see hasResult for if `result` being `undefined` means it's unfinished or the function itself returned `undefined`.
     */
    result: R | undefined;

    /**
     * True when the most recently-run handler completed successfully,
     * also meaning that that it's returned a value that we currently have.
     * 
     * While `pending` is true, **`hasResult` and `hasError` may be simultaneously true**,
     * but in all other cases they're mutually exclusive.
     */
    hasResult: boolean;

    /**
     * The error the handler threw. `undefined` otherwise, though note
     * that `undefined` is a valid thing to throw, so check `hasError` too.
     * 
     * @see hasError
     */
    error: unknown;

    /**
     * Whether or not the most recent handler finished with an error.
     * 
     * This is necessary because, technically, `error` can be `undefined`.
     */
    hasError: boolean;

    /**
     * What happened the last time the handler was called?
     * * `"async"`: A `Promise` was returned, and we're about to `await` it.
     * * `"sync"`: `undefined` was returned, so it finished immediately.
     * * `"throw"`: An error was thrown, so it could have been either (more likely `"sync"`, though).
     * * `null`: Nothing's happened yet.
     */
    invocationResult: "async" | "sync" | "throw" | null;

    /**
     * If you would like any currently debounced-but-eventually-pending promises to immediately be considered by cancelling their debounce timeout,
     * you can call this function.  Normal procedure applies as if the debounced ended normally -- if there's no promise waiting in the queue,
     * the debounced promise runs normally, otherwise, it waits its turn until the current one ends, potentially being overwritten later on
     * if a new promise runs out *its* debounce timer before this one got a chance to run.
     * 
     * **Quasi-stable** (don't use during render)
     */
    flushDebouncedPromise: () => void;

    /**
     * Based on the type of handler passed in, this returned value will
     * represent what type of handler it was, just in case you
     * yourself need to know that and don't have access to the original
     * to find out without it actually being run.
     * 
     * Until a handler is called, this will be null.  Naturally, if 
     * different handlers are passed in, it can flip back and
     * forth between "async" and "sync" as well.
     */
    //currentType: null | "sync" | "async";

    /**
     * The transformed version of the async handler provided,
     * now synchronous and/or throttled and/or debounced
     * 
     * **Quasi-stable** (don't use during render)
     */
    syncHandler: SyncFunctionType<SP, void>;
}

function identityCapture<AP extends unknown[], SP extends unknown[]>(...t: SP) { return t as unknown[] as AP; }


type SyncFunctionType<SP extends unknown[], R> = (...args: SP) => (R | undefined);
type AsyncFunctionType<AP extends unknown[], R> = ((...args: AP) => (R | Promise<R>));
type CaptureFunctionType<AP extends unknown[], SP extends unknown[] = AP> = (...args: SP) => AP;

const AsyncFunction = ((async function () {}).constructor)

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
export function useAsync<AP extends unknown[], R, SP extends unknown[] = AP>(asyncHandler2: AsyncFunctionType<AP, R> | null, options?: UseAsyncParameters<AP, SP>): UseAsyncReturnType<SP, R> {


    // Things related to current execution
    // Because we can both return and throw undefined, 
    // we need separate state to track their existance too.
    const [pending, setPending, _getPending] = useState(false);
    const [result, setResult, _getResult] = useState<R>(undefined!);
    const [error, setError, _getError] = useState<unknown>(undefined!);
    const [hasError, setHasError, _getHasError] = useState<boolean | null>(false);
    const [hasResult, setHasResult, _getHasResult] = useState<boolean | null>(false);
    const [asyncDebouncing, setAsyncDebouncing] = useState(false);
    const [syncDebouncing, setSyncDebouncing] = useState(false);
    const [invocationResult, setInvocationResult] = useState<"async" | "sync" | "throw" | null>(asyncHandler2 instanceof AsyncFunction? "async" : null);
    const incrementCallCount = useCallback(() => { setRunCount(c => c + 1) }, []);
    const incrementResolveCount = useCallback(() => { setResolveCount(c => c + 1) }, []);
    const incrementRejectCount = useCallback(() => { setRejectCount(c => c + 1) }, []);
    const incrementFinallyCount = useCallback(() => { setSettleCount(c => c + 1) }, []);

    /* eslint-disable prefer-const */
    let { throttle, debounce, capture: captureUnstable } = (options ?? {});
    const captureStable = useStableCallback(captureUnstable ?? identityCapture);
    const asyncHandlerStable = useStableCallback<(...args: AP) => R | Promise<R>>(asyncHandler2 ?? (identity as any));
    const { flush, syncOutput, cancel } = useMemo(() => {
        return asyncToSync<AP, SP, R>({
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
        })
    }, [throttle, debounce]);

    useEffect(() => {
        return () => cancel();
    }, [cancel])

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
    }


}







interface AsyncToSyncParameters<AsyncArgs extends any[], SyncArgs extends any[], Return> {



    /**
     * The function to create a sync version of
     */
    asyncInput: (...args: AsyncArgs) => (Return | Promise<Return>);

    /**
     * When the function starts running, this is set to true.
     * When it stops running, this is set to false.
     * 
     * This is the same for sync and async functions. When
     * a sync function is used, onPending will be called twice on the same frame.
     */
    onPending(pending: boolean): void;

    /**
     * When the *sync handler is invoked* (even if the async handler doesn't run yet), this is set to `true`.
     * 
     * When the debounce period, as specified by either `wait` or `throttle`, as ended, this is set to `false.
     * 
     * This is the same even when not using `wait` or `throttle`. In this case, `onSyncDebounce` will be called twice on the same frame.
     * @param debouncing 
     */
    onSyncDebounce(debouncing: boolean): void;
    /**
     * When the async handler is about to start running (after debouncing and throttling have finished), 
     * but must wait for another in-process handler to finish, this is set to `true`.
     * 
     * When the handler finishes (regardless of if it was sync or async), this is set to `false`.
     * 
     * @param debouncing 
     */
    onAsyncDebounce(debouncing: boolean): void;
    /**
     * When the handler returns, its return value will be passed to this function (after awaiting it if necessary).
     * 
     * Even if the handler does not return anything, this will still be called (with `undefined`)
     * 
     * This value is not reset at any time! See `setHasReturn` to determine if there is a value at any given time.
     * @param ret 
     */
    onReturnValue(ret: Return): void;

    /**
     * When the handler `throw`s, the value thrown will be passed to this function.
     * 
     * This value is not reset at any time! See `setHasError` to determine if there is a value at any given time.
     * 
     * @param ex 
     */
    onError(ex: unknown): void;

    /**
     * When the handler is about to be called (after all methods of debouncing and throttling and such)
     * this is always called once.
     */
    onInvoke(): void;

    /**
     * Immediately after the handler has been called, this is called once with the result of the call.
     * 
     * This can be used to estimate if a given handler was sync or async, though if it throws you might not know.
     */
    onInvoked(result: "async" | "throw" | "sync"): void;

    /**
     * When the handler returns successfully, this will be called once.
     */
    onResolve(): void;
    /**
     * When the handler rejects, for any reason, this will be called once.
     */
    onReject(): void;
    /**
     * When the handler resolves, for any reason, this will be called once.
     */
    onFinally(): void;

    //onResolve2(type: "resolve", value: Return): void;
    //onResolve2(type: "reject", value: Error): void;

    /**
     * It's frequently necessary (especially with DOM events) to save
     * values so that they don't become stale.  For example, referencing
     * `event.currentTarget.value` is a *live* value, so your handler
     * could be called with, seemingly, different arguments than were initially passed.
     * 
     * To prevent this "stale argument" problem, you can capture the useful parts
     * of whatever the async function's arguments are into an object that's not live.
     * 
     * `capture` will be called with the arguments your sync handler takes, 
     * and should return the arguments your async handler takes as an array.
     * 
     * For example, `e => [e, e.currentTarget.value]`
     */
    capture: CaptureFunctionType<AsyncArgs, SyncArgs>;

    /**
     * Identical to Lodash's `throttle` function, applying *before* waiting for any prior async handlers to finish.
     */
    throttle: number | undefined;

    /**
     * Identical to Lodash's `debounce` function, applying *before* waiting for any prior async handlers to finish.
     */
    wait: number | undefined;

    /**
     * When the handler is about to run, this is set to `null`.
     * 
     * If the handler throws, then this will be set to `true`. If it resolves, this will be set to `false`.
     * 
     * This is the same for sync and async functions; 
     * sync functions will result in this function being called twice in one frame.
     */
    onHasError(hasError: boolean | null): void;

    /**
     * When the handler is about to run, this is set to `null`.
     * 
     * If the handler resolves successfully, then this will be set to `true`. If it throws, this will be set to `false`.
     * 
     * This is the same for sync and async functions; 
     * sync functions will result in this function being called twice in one frame.
     */
    onHasResult(hasResult: boolean | null): void;
}

interface AsyncToSyncReturn<SyncArgs extends any[]> {
    /**
     * The sync version of the handler you specified.
     * 
     * It doesn't return a value (because it can't in case the handler was async).
     */
    syncOutput: (...args: SyncArgs) => void;
    flush(): void;
    cancel(): void;
}

function isPromise<T>(p: T | Promise<T>): p is Promise<T> {
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
function asyncToSync<AsyncArgs extends any[], SyncArgs extends any[], Return>({ asyncInput, onInvoke, onInvoked, onFinally: onFinallyAny, onReject, onResolve, onHasError, onHasResult, onError, onReturnValue, capture, onAsyncDebounce, onSyncDebounce, onPending, throttle, wait }: AsyncToSyncParameters<AsyncArgs, SyncArgs, Return>): AsyncToSyncReturn<SyncArgs> {
    let pending = false;
    let syncDebouncing = false;
    let asyncDebouncing = false;
    let currentCapture: AsyncArgs | typeof Unset = Unset;

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
    }

    const sync = (...args: AsyncArgs) => {
        // 5. We're finally running the async version of the function, so notify the caller that the return value is pending.
        // And because the fact that we're here means the debounce/throttle period is over, we can clear that flag too.
        onPending(pending = true);
        console.assert(syncDebouncing == false);
        onHasError(null);
        onHasResult(null);
        let promiseOrReturn: Promise<Return> | Return | undefined;

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
            onReturnValue(promiseOrReturn as Return);
            onPending(pending = false);
            onFinally();
        }
    }

    // lodash uses "in" instead of checking for `undefined`...
    const lodashOptions: DebounceSettings = {
        leading: !wait,
        trailing: true
    }
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
            sync(...(currentCapture as AsyncArgs));
        } else {
            // 4b. If we were called while still waiting for the (or a) previous invocation to finish,
            // then we'll need to delay this one. When that previous invocation finishes, it'll check
            // to see if it needs to run again, and it will use these new captured arguments from step 2.
            onAsyncDebounce(asyncDebouncing = true);
        }
    }, wait || undefined, lodashOptions);

    return {
        syncOutput: (...args: SyncArgs) => {
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
