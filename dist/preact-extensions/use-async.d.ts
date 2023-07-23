import { CaptureFunctionType } from "async-to-sync";
import { Nullable } from "../util/lib.js";
type SyncFunctionType<SP extends unknown[], R> = (...args: SP) => (R | undefined);
type AsyncFunctionType<AP extends unknown[], R> = ((...args: AP) => (R | Promise<R>));
export interface UseAsyncParameters<AP extends unknown[], SP extends unknown[] = AP> {
    /**
     * If provided, adds a debounce behavior *in addition* to
     * the default "wait until resolved" throttling behavior.
     */
    debounce: Nullable<number>;
    /**
     * By default, `useAsync` will auto-throttle based on how long it takes
     * for the operation to complete.  If you would like there to be a
     * minimum amount of time to wait before allowing a second operation,
     * the `throttle` parameter can be used in addition to that behavior.
     *
     * `throttle` *includes* the time it takes for the async operation to finish.
     * If `throttle` is 500ms, and the async function finishes in 700ms, then
     * another one will be run immediately. If it took 100ms, then we'd wait
     * for the remaining 400ms until allowing a second run.
     */
    throttle: Nullable<number>;
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
     *
     * @nonstable
     */
    capture: Nullable<CaptureFunctionType<AP, SP>>;
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
     * The transformed version of the async handler provided,
     * now synchronous and/or throttled and/or debounced
     *
     * **Quasi-stable** (don't use during render)
     */
    syncHandler: SyncFunctionType<SP, void>;
}
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
export declare function useAsync<AP extends unknown[], R, SP extends unknown[] = AP>(asyncHandler: AsyncFunctionType<AP, R> | null, options?: UseAsyncParameters<AP, SP>): UseAsyncReturnType<SP, R>;
export {};
//# sourceMappingURL=use-async.d.ts.map