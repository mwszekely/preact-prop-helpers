
import LodashDebounce from "lodash-es/debounce";
import { useCallback, useEffect, useMemo } from "preact/hooks";
import { useStableCallback } from "./use-stable-callback";
import { useState } from "./use-state";

type Func = (...args: any) => Promise<unknown> | unknown;

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

export interface UseAsyncReturnType<AP extends unknown[], SP extends unknown[], R> {

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

function identity<AP extends unknown[], SP extends unknown[]>(...t: SP) { return t as unknown[] as AP; }

/**
 * Returns a throttled version of the given (stable) callback using Lodash's `throttle` function.
 * 
 * If the callback is `null`, then `null` will be returned, otherwise `callback` must be stable for this to work as intented.
 */
/*export function useThrottled<F extends Func>(callback: F | null, wait: number, options?: ThrottleSettings): DebouncedFunc<F>;
export function useThrottled<F extends Func>(callback: F | null, wait: number, options?: ThrottleSettings): DebouncedFunc<F> | null;
export function useThrottled<F extends Func>(callbackUnstable: F | null, wait: number, options?: ThrottleSettings): DebouncedFunc<F> | null {
    let { leading, trailing } = (options || {});
    // These are the lodash defaults, but lodash treats nonexistence and being undefined as separate things...
    leading ??= true;
    trailing ??= true;
    const enabled = (callbackUnstable != null);
    const callbackStable = useStableCallback(callbackUnstable ?? noop);
    const throttled = useMemo(() => {
        return enabled ? throttle(callbackStable, wait, { leading, trailing }) : null;
    }, [enabled, wait, options?.leading, options?.trailing]);

    useEffect(() => {
        return () => { console.log("cancel throttle"); throttled?.cancel(); }
    }, [throttled])

    return throttled;
}*/

/**
 * Returns a debounced version of the given (stable) callback using Lodash's `debounced` function.
 * 
 * If the callback is `null`, then `null` will be returned, otherwise `callback` must be stable for this to work as intented.
 */
/*export function useDebounced<F extends Func>(callback: F, wait: number, options?: DebounceSettings): DebouncedFunc<F>;
export function useDebounced<F extends Func>(callback: F | null, wait: number, options?: DebounceSettings): DebouncedFunc<F> | null;
export function useDebounced<F extends Func>(callbackUnstable: F | null, wait: number, options?: DebounceSettings): DebouncedFunc<F> | null {
    let { leading, maxWait, trailing } = (options || {});
    // These are the lodash defaults, but lodash treats nonexistence and being undefined as separate things...
    leading ??= false;
    trailing ??= true;
    maxWait ??= 1e99;
    const enabled = (callbackUnstable != null);
    const callbackStable = useStableCallback(callbackUnstable ?? noop);
    const debounced = useMemo(() => {
        return enabled ? debounce(callbackStable, wait, { leading, trailing, maxWait }) : null;
    }, [enabled, wait, leading, maxWait, trailing]);

    useEffect(() => {
        return () => { console.log("cancel debounce"); debounced?.cancel(); }
    }, [debounced])

    return debounced;
}*/

type SyncFunctionType<SP extends unknown[], R> = (...args: SP) => (R | undefined);
type AsyncFunctionType<AP extends unknown[], R> = ((...args: AP) => (R | Promise<R>));
//type GlueFunctionType<AP extends unknown[], R> = (enqueue: boolean, ...args: AP) => R | undefined;
type CaptureFunctionType<AP extends unknown[], SP extends unknown[] = AP> = (...args: SP) => AP;

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
export function useAsync<AP extends unknown[], R, SP extends unknown[] = AP>(asyncHandler2: AsyncFunctionType<AP, R> | null, options?: UseAsyncParameters<AP, SP>): UseAsyncReturnType<AP, SP, R> {


    // Things related to current execution
    // Because we can both return and throw undefined, 
    // we need separate state to track their existance too.
    const [pending, setPending, getPending] = useState(false);
    const [result, setResult, getResult] = useState<R>(undefined!);
    const [error, setError, _getError] = useState<unknown>(undefined!);
    const [hasError, setHasError, _getHasError] = useState<boolean | null>(false);
    const [hasResult, setHasResult, _getHasResult] = useState<boolean | null>(false);
    const [asyncDebouncing, setAsyncDebouncing] = useState(false);
    const [syncDebouncing, setSyncDebouncing] = useState(false);
    //const [currentCapture, setCurrentCapture] = useState<AP | undefined>(undefined);
    const incrementCallCount = useCallback(() => { setRunCount(c => c + 1) }, []);
    const incrementResolveCount = useCallback(() => { setResolveCount(c => c + 1) }, []);
    const incrementRejectCount = useCallback(() => { setRejectCount(c => c + 1) }, []);
    const incrementFinallyCount = useCallback(() => { setSettleCount(c => c + 1) }, []);

    /* eslint-disable prefer-const */
    let { throttle, debounce, capture: captureUnstable } = (options ?? {});
    const captureStable = useStableCallback(captureUnstable ?? identity);
    const asyncHandlerStable = useStableCallback<(...args: AP) => R | Promise<R>>(asyncHandler2 ?? (identity as any));
    const { flush, syncOutput, cancel } = useMemo(() => {
        return asyncToSync<AP, SP, R>({
            asyncInput: asyncHandlerStable,
            capture: captureStable,
            setAsyncDebouncing,
            setError,
            setPending,
            setReturn: setResult,
            setSyncDebouncing,
            setHasError,
            setHasResult,
            incrementCallCount,
            incrementFinallyCount,
            incrementRejectCount,
            incrementResolveCount,
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
        callCount: runCount,
        flushDebouncedPromise: flush
    }


}







interface AsyncToSyncParameters<AsyncArgs extends any[], SyncArgs extends any[], Return> {
    asyncInput: (...args: AsyncArgs) => (Return | Promise<Return>);
    setPending(pending: boolean): void;
    setSyncDebouncing(debouncing: boolean): void;
    setAsyncDebouncing(debouncing: boolean): void;
    setReturn(ret: Return): void;
    setError(ex: unknown): void;
    incrementCallCount(): void;
    incrementResolveCount(): void;
    incrementRejectCount(): void;
    incrementFinallyCount(): void;
    capture: CaptureFunctionType<AsyncArgs, SyncArgs>;
    throttle: number | undefined;
    wait: number | undefined;
    setHasError(hasError: boolean | null): void;
    setHasResult(hasResult: boolean | null): void;
}

interface AsyncToSyncReturn<SyncArgs extends any[], _Return> {
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
 */
function asyncToSync<AsyncArgs extends any[], SyncArgs extends any[], Return>({ asyncInput, incrementCallCount, incrementFinallyCount, incrementRejectCount, incrementResolveCount, setHasError, setHasResult, setError, setReturn, capture, setAsyncDebouncing, setSyncDebouncing, setPending, throttle, wait }: AsyncToSyncParameters<AsyncArgs, SyncArgs, Return>): AsyncToSyncReturn<SyncArgs, Return> {
    let pending = false;
    let syncDebouncing = false;
    let asyncDebouncing = false;
    let currentCapture: AsyncArgs | typeof Unset = Unset;

    const onAsyncFinished = () => {

        // 8. This is run at the end of every invocation of the async handler,
        // whether it completed or not.
        incrementFinallyCount();
        setPending(pending = false);

        if (!asyncDebouncing) {
            // 9a. After completing the async handler, we found that it wasn't called again since the last time.
            // This means we can just end. We're done. Mission accomplished.
        }
        else {
            // 9a. Another request to run the async handler came in while we were running this one.
            // Instead of stopping, we're just going to immediately run again using the arguments that were given to us most recently.
            // We also clear that flag, because we're handling it now. It'll be set again if the handler is called again while *this* one is running
            setAsyncDebouncing(asyncDebouncing = false);
            console.assert(currentCapture !== Unset);
            if (currentCapture != Unset) {
                setSyncDebouncing(syncDebouncing = true);
                syncDebounced();
            }
        }
    }

    const sync = (...args: AsyncArgs) => {
        // 5. We're finally running the async version of the function, so notify the caller that the return value is pending.
        // And because the fact that we're here means the debounce/throttle period is over, we can clear that flag too.
        setPending(pending = true);
        console.assert(syncDebouncing == false);
        setHasError(null);
        setHasResult(null);
        let promiseOrReturn: Promise<Return> | Return | undefined;

        let hadSyncError = false;
        try {
            // 6. Run the function we were given.
            // Because it may be sync, or it may throw before returning, we must still wrap it in a try/catch...
            // Also important is that we preserve the async-ness (or lack thereof) on the original input function.
            incrementCallCount();
            promiseOrReturn = asyncInput(...args);
            setHasError(false);
        }
        catch (ex) {
            hadSyncError = true;
            setError(ex);
        }

        // 7. Either end immediately, or schedule to end when completed.
        if (isPromise(promiseOrReturn)) {
            promiseOrReturn
                .then(r => { incrementResolveCount(); setHasResult(true); setReturn(r); return r; })
                .catch(e => { incrementRejectCount(); setHasError(true); setError(e); return e; })
                .finally(onAsyncFinished);
        }
        else {
            if (!hadSyncError) {
                incrementResolveCount();
                setHasResult(true);
                setHasError(false);
            }
            else {
                incrementRejectCount();
                setHasResult(false);
                setHasError(true);
            }
            setReturn(promiseOrReturn as Return);
            setPending(pending = false);
            onAsyncFinished();
        }
    }

    // 4. Instead of calling the sync version of our function directly, we allow it to be throttled/debounced.
    const syncDebounced = LodashDebounce(() => {
        setSyncDebouncing(syncDebouncing = false);
        if (!pending) {
            // 3a. If this is the first invocation, or if we're not still waiting for a previous invocation to finish its async call,
            // then we can just go ahead and run the debounced version of our function.
            console.assert(currentCapture != Unset);
            sync(...(currentCapture as AsyncArgs));
        } else {
            // 3b. If we were called while still waiting for the (or a) previous invocation to finish,
            // then we'll need to delay this one. When that previous invocation finishes, it'll check
            // to see if it needs to run again, and it will use these new captured arguments from step 2.
            setAsyncDebouncing(asyncDebouncing = true);
        }

    }, wait, { leading: true, trailing: true, maxWait: throttle });

    return {
        syncOutput: (...args: SyncArgs) => {
            // 1. We call the sync version of our async function.
            // 2. We capture the arguments into a form that won't become stale if/when the function is called with a (possibly seconds-long) delay.
            currentCapture = capture(...args);
            setSyncDebouncing(syncDebouncing = true);
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


