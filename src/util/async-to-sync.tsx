import { DebounceSettings, debounce as LodashDebounce } from "lodash-es";


export type CaptureFunctionType<AP extends unknown[], SP extends unknown[] = AP> = (...args: SP) => AP;



export interface AsyncToSyncParameters<AsyncArgs extends any[], SyncArgs extends any[], Return> {
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
    onPending?(pending: boolean): void;

    /**
     * When the *sync handler is invoked* (even if the async handler doesn't run yet), this is set to `true`.
     * 
     * When the debounce period, as specified by either `wait` or `throttle`, as ended, this is set to `false.
     * 
     * This is the same even when not using `wait` or `throttle`. In this case, `onSyncDebounce` will be called twice on the same frame.
     * @param debouncing 
     */
    onSyncDebounce?(debouncing: boolean): void;
    /**
     * When the async handler is about to start running (after debouncing and throttling have finished), 
     * but must wait for another in-process handler to finish, this is set to `true`.
     * 
     * When the handler finishes (regardless of if it was sync or async), this is set to `false`.
     * 
     * @param debouncing 
     */
    onAsyncDebounce?(debouncing: boolean): void;
    /**
     * When the handler returns, its return value will be passed to this function (after awaiting it if necessary).
     * 
     * Even if the handler does not return anything, this will still be called (with `undefined`)
     * 
     * This value is not reset at any time! See `setHasReturn` to determine if there is a value at any given time.
     * @param ret 
     */
    onReturnValue?(ret: Return): void;

    /**
     * When the handler `throw`s, the value thrown will be passed to this function.
     * 
     * This value is not reset at any time! See `setHasError` to determine if there is a value at any given time.
     * 
     * @param ex 
     */
    onError?(ex: unknown): void;

    /**
     * Immediately before the handler will be called (after all methods of debouncing and throttling and such)
     * this is always called once.
     * 
     * @see onInvoked (called immediately after instead)
     */
    onInvoke?(): void;

    /**
     * Immediately after the handler has been called, this is called once with the result of the call.
     * 
     * This can be used to estimate if a given handler was sync or async, though if it throws you might not know.
     * 
     * @see onInvoke (called immediately before instead)
     */
    onInvoked?(result: "async" | "throw" | "sync"): void;

    /**
     * When the handler returns successfully, this will be called once.
     * 
     * @see onFinally
     * @see onReject
     */
    onResolve?(): void;

    /**
     * When the handler rejects, for any reason, this will be called once.
     * 
     * @see onResolve
     * @see onFinally
     */
    onReject?(): void;

    /**
     * When the handler resolves, for any reason, this will be called once.
     * @see onResolve
     * @see onReject
     */
    onFinally?(): void;

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
    capture?: CaptureFunctionType<AsyncArgs, SyncArgs>;

    /**
     * Identical to Lodash's `throttle` function, applying *before* waiting for any prior async handlers to finish.
     */
    throttle?: number | undefined;

    /**
     * Identical to Lodash's `debounce` function, applying *before* waiting for any prior async handlers to finish.
     */
    wait?: number | undefined;

    /**
     * When the handler is about to run, this is called with `null`.
     * 
     * If the handler throws, then this will be called with `true`. If it resolves, this will be called with `false`.
     * 
     * This is the same for sync and async functions; 
     * sync functions will result in this function being called twice in one frame.
     */
    onHasError?(hasError: boolean | null): void;

    /**
     * When the handler is about to run, this is called with `null`.
     * 
     * If the handler resolves successfully, then this will be called with `true`. If it throws, this will be called with `false`.
     * 
     * This is the same for sync and async functions; 
     * sync functions will result in this function being called twice in one frame.
     */
    onHasResult?(hasResult: boolean | null): void;
}

export interface AsyncToSyncReturn<SyncArgs extends any[]> {
    /**
     * The sync version of the handler you specified.
     * 
     * It doesn't return a value (because it can't in case the handler was async).
     */
    syncOutput: (...args: SyncArgs) => void;
    /**
     * If there are currently any handlers in wait because they are throttled or debounced
     * (not from being async, but from the `throttle` or `debounce` settings),
     * this will force its immediate invocation (as soon as the given async handler has
     * finished, if any
     */
    flushSyncDebounce(): void;

    /**
     * If there are currently any handlers in wait because they are throttled or debounced
     * (not from being async, but from the `throttle` or `debounce` settings),
     * this will cancel its future invocation, causing it to no longer run.
     */
    cancelSyncDebounce(): void;
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
export function asyncToSync<AsyncArgs extends any[], SyncArgs extends any[], Return>({ asyncInput, onInvoke, onInvoked, onFinally: onFinallyAny, onReject, onResolve, onHasError, onHasResult, onError, onReturnValue, capture, onAsyncDebounce, onSyncDebounce, onPending, throttle, wait }: AsyncToSyncParameters<AsyncArgs, SyncArgs, Return>): AsyncToSyncReturn<SyncArgs> {
    let pending = false;
    let syncDebouncing = false;
    let asyncDebouncing = false;
    let currentCapture: AsyncArgs | typeof Unset = Unset;

    const onFinally = () => {

        // 8. This is run at the end of every invocation of the async handler,
        // whether it completed or not, and whether it was async or not.
        onFinallyAny?.();
        onPending?.(pending = false);

        let nothingElseToDo = (!asyncDebouncing);

        onAsyncDebounce?.(asyncDebouncing = false);
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
                onSyncDebounce?.(syncDebouncing = true);
                syncDebounced();
            }
        }
    }

    const sync = (...args: AsyncArgs) => {
        // 5. We're finally running the async version of the function, so notify the caller that the return value is pending.
        // And because the fact that we're here means the debounce/throttle period is over, we can clear that flag too.
        onPending?.(pending = true);
        console.assert(syncDebouncing == false);
        onHasError?.(null);
        onHasResult?.(null);
        let promiseOrReturn: Promise<Return> | Return | undefined;

        let hadSyncError = false;
        try {
            // 6. Run the function we were given.
            // Because it may be sync, or it may throw before returning, we must still wrap it in a try/catch...
            // Also important is that we preserve the async-ness (or lack thereof) on the original input function.
            onInvoke?.();
            promiseOrReturn = asyncInput(...args);
            onHasError?.(false);
        }
        catch (ex) {
            hadSyncError = true;
            onError?.(ex);
            onInvoked?.("throw");
        }

        // 7. Either end immediately, or schedule to end when completed.
        if (isPromise(promiseOrReturn)) {
            onInvoked?.("async");
            promiseOrReturn
                .then(r => { onResolve?.(); onHasResult?.(true); onReturnValue?.(r); return r; })
                .catch(e => { onReject?.(); onHasError?.(true); onError?.(e); return e; })
                .finally(onFinally);
        }
        else {
            onInvoked?.("sync");
            if (!hadSyncError) {
                onResolve?.();
                onHasResult?.(true);
                onHasError?.(false);
            }
            else {
                onReject?.();
                onHasResult?.(false);
                onHasError?.(true);
            }
            onReturnValue?.(promiseOrReturn as Return);
            onPending?.(pending = false);
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
        // 3. Instead of calling the sync version of our function directly, we allow it to be throttled/debounced (above)
        // and now that we're done throttling/debouncing, notify anyone who cares of this fact (below).
        onSyncDebounce?.(syncDebouncing = false);
        if (!pending) {
            // 4a. If this is the first invocation, or if we're not still waiting for a previous invocation to finish its async call,
            // then we can just go ahead and run the debounced version of our function.
            console.assert(currentCapture != Unset);
            sync(...(currentCapture as AsyncArgs));
        } else {
            // 4b. If we were called while still waiting for the (or a) previous invocation to finish,
            // then we'll need to delay this one. When that previous invocation finishes, it'll check
            // to see if it needs to run again, and it will use these new captured arguments from step 2.
            onAsyncDebounce?.(asyncDebouncing = true);
        }
    }, wait || undefined, lodashOptions);

    return {
        syncOutput: (...args: SyncArgs) => {
            // 1. Someone just called the sync version of our async function.
            // 2. We capture the arguments in a way that won't become stale if/when the function is called with a (possibly seconds-long) delay (e.g. event.currentTarget.value on an <input> element).
            currentCapture = capture!?.(...args);   // Intentional!? because void == undefined.
            onSyncDebounce?.(syncDebouncing = true);
            syncDebounced();
        },
        flushSyncDebounce: () => {
            syncDebounced.flush();
        },
        cancelSyncDebounce: () => {
            syncDebounced.cancel();
        }
    };
}

