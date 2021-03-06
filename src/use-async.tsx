
import debounce, { DebouncedFunc, type DebounceSettings } from "lodash-es/debounce";
import throttle, { type ThrottleSettings } from "lodash-es/throttle";
import { useEffect, useMemo } from "preact/hooks";
import { returnNull, usePassiveState } from "./use-passive-state";
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

    //promise: Promise<Awaited<ReturnType<F>>> | null;

    /**
     * When a handler is currently executing, this is true.
     * 
     * It is false before the first execution, true during the
     * first execution, remains true if continuing immediately
     * into a second, and only returns to false when a handler
     * completes with no handler in waiting.
     */
    pending: boolean;

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
    currentType: null | "sync" | "async";

    /**
     * The transformed version of the async handler provided,
     * now synchronous and/or throttled and/or debounced
     */
    syncHandler: SyncFunctionType<SP, R>;
}

function identity<AP extends unknown[], SP extends unknown[]>(...t: SP) { return t as unknown[] as AP; }

/**
 * Returns a throttled version of the given (stable) callback using Lodash's `throttle` function.
 * 
 * If the callback is `null`, then `null` will be returned, otherwise `callback` must be stable for this to work as intented.
 */
export function useThrottled<F extends Func>(callback: F | null, wait: number, options?: ThrottleSettings): DebouncedFunc<F>;
export function useThrottled<F extends Func>(callback: F | null, wait: number, options?: ThrottleSettings): DebouncedFunc<F> | null;
export function useThrottled<F extends Func>(callback: F | null, wait: number, options?: ThrottleSettings): DebouncedFunc<F> | null {
    const throttled = useMemo(() => {
        return callback ? throttle(callback, wait, options) : null;
    }, [callback, wait, options?.leading, options?.trailing]);

    useEffect(() => {
        return () => throttled?.cancel();
    }, [throttled])

    return throttled;
}

/**
 * Returns a debounced version of the given (stable) callback using Lodash's `debounced` function.
 * 
 * If the callback is `null`, then `null` will be returned, otherwise `callback` must be stable for this to work as intented.
 */
export function useDebounced<F extends Func>(callback: F, wait: number, options?: DebounceSettings): DebouncedFunc<F>;
export function useDebounced<F extends Func>(callback: F | null, wait: number, options?: DebounceSettings): DebouncedFunc<F> | null;
export function useDebounced<F extends Func>(callback: F | null, wait: number, options?: DebounceSettings): DebouncedFunc<F> | null {
    const debounced = useMemo(() => {
        return callback ? debounce(callback, wait, options) : null;
    }, [callback, wait, options?.leading, options?.maxWait, options?.trailing]);

    useEffect(() => {
        return () => debounced?.cancel();
    }, [debounced])

    return debounced;
}

type SyncFunctionType<SP extends unknown[], R> = (...args: SP) => (R | undefined);
type AsyncFunctionType<AP extends unknown[], R> = ((...args: AP) => (R | Promise<R>));
type GlueFunctionType<AP extends unknown[], R> = (enqueue: boolean, ...args: AP) => R | undefined;
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
export function useAsync<AP extends unknown[], R, SP extends unknown[] = AP>(asyncHandler: AsyncFunctionType<AP, R> | null, options?: UseAsyncParameters<AP, SP>): UseAsyncReturnType<SP, R> {


    /* eslint-disable prefer-const */
    let { throttle, debounce, capture } = (options ?? {});
    capture ??= identity;

    // We keep, like, a lot of render-state, but it only ever triggers a re-render
    // when we start/stop an async action.

    // Keep track of this for the caller's sake -- we don't really care.
    const [currentType, setCurrentType] = useState<null | "sync" | "async">(null);
    const [runCount, setRunCount] = useState(0);
    const [settleCount, setSettleCount] = useState(0);
    const [resolveCount, setResolveCount] = useState(0);
    const [rejectCount, setRejectCount] = useState(0);

    // Things related to current execution
    // Because we can both return and throw undefined, 
    // we need separate state to track their existance too.
    const [pending, setPending, getPending] = useState(false);
    const [result, setResult, getResult] = useState<R>(undefined!);
    const [error, setError, _getError] = useState<unknown>(undefined!);
    const [hasError, setHasError, _getHasError] = useState(false);
    const [hasResult, setHasResult, _getHasResult] = useState(false);

    // We implement our own throttling behavior in regards to waiting until the async handler finishes.
    // These two passive state variables keep track of that, automatically queueing/dequeuing the next handler.
    const [getQueued, setQueued] = usePassiveState<AP | null>(null, returnNull);


    // The actual sync handler.
    // Capture/transform the given parameters if applicable,
    // then run further logic that's debounced/throttled
    const captureArgsAndExecuteDebouncedHandler = useStableCallback<SyncFunctionType<SP, R>>(function onNewExecuteRequest(...newArgs2: SP) {
        console.log("captureArgsAndExecuteDebouncedHandler");

        // Capture the arguments we were given.
        // We might use them immediately, or we might store them to `queued`,
        // but in either case we do need the captured value.
        const captured = capture!(...newArgs2);

        // This is all logic that deals with the captured value instead of the raw arguments.
        // It's called in two separate circumstances,
        // and has the debounce/throttle logic already applied
        return executeHandlerWithDebounce(getPending(), ...captured);

    });

    // This is the logic that runs when the handler is *just* about to start.
    // This function itself is further transformed to be throttled/debounced if requested,
    // so this might not be called immediately after 
    const executeHandlerWithoutDebounce = useStableCallback<GlueFunctionType<AP, R>>(function onNewExecuteRequest2(enqueue: boolean, ...newArgs: AP) {

        const onThen = (value: R) => { console.log("executeHandlerWithoutDebounce.onThen"); setResult(value); setHasResult(true); setHasError(false); setResolveCount(r => ++r); };
        const onCatch = (ex: any) => { console.log("executeHandlerWithoutDebounce.onCatch"); setError(ex); setHasError(true); setHasResult(false); setRejectCount(r => ++r); };
        const onFinally = () => {
            const queued = getQueued();
            setSettleCount(s => ++s);
            if (queued) {
                console.log("executeHandlerWithoutDebounce.onFinally (queued)");
                setQueued(null);
                executeHandlerWithDebounce(false, ...queued);
            }
            else {
                console.log("executeHandlerWithoutDebounce.onFinally (empty)");
                setPending(false);
            }

        };

        if (!enqueue) {
            console.log("executeHandlerWithoutDebounce (immediate)");
            // Nothing is pending at the moment, so we can run our function immediately.
            setRunCount(r => ++r);
            setPending(true);
            const result = asyncHandler?.(...newArgs) as R;
            const isPromise = (result != null && typeof result == "object" && "then" in (result as unknown as Promise<any>));
            if (result == null || !isPromise) {
                // It's synchronous and returned successfully.
                // Bail out early.
                onThen(result as R);
                onFinally();
                setCurrentType("sync");
            }
            else {
                (result as unknown as Promise<R>).then(onThen).catch(onCatch).finally(onFinally);
                setCurrentType("async");
            }
        }
        else {
            console.log("executeHandlerWithoutDebounce (pending)");
            // When we're still running a previous handler,
            // just set ourselves as the next one to run and quit early.
            // Nothing more to do.
            setQueued(newArgs);
        }




        return getResult();
    });

    const executeHandlerWithT = useThrottled<NonNullable<typeof executeHandlerWithoutDebounce>>(!throttle ? null : executeHandlerWithoutDebounce, throttle ?? 0);
    const executeHandlerWithD = useDebounced(!debounce ? null : (executeHandlerWithT ?? executeHandlerWithoutDebounce), debounce ?? 0);
    const executeHandlerWithDebounce = (executeHandlerWithD ?? executeHandlerWithT ?? executeHandlerWithoutDebounce);

    const flushDebouncedPromise = useStableCallback(() => {
        if (executeHandlerWithDebounce && "flush" in executeHandlerWithDebounce)
            executeHandlerWithDebounce.flush();
    });

    return {
        syncHandler: captureArgsAndExecuteDebouncedHandler,
        currentType,
        pending,
        result,
        error,
        hasError,
        hasResult,
        resolveCount,
        rejectCount,
        settleCount,
        callCount: runCount,
        flushDebouncedPromise
    }


}
