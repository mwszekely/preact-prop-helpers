
import { useCallback } from "preact/hooks";
import { useLayoutEffect } from "./use-layout-effect";
import { useStableCallback } from "./use-stable-callback";
import { useState } from "./use-state";
import { useTimeout } from "./use-timeout";


export interface UseAsyncParameters {
    /**
     * If provided, adds a debounce behavior *in addition* to
     * the default "wait until resolved" throttling behavior.
     */
    debounce?: number;
}

export interface UseAsyncReturnType<T> {

    promise: Promise<T> | null;

    /**
     * Whether or not the handler has been called but has not completed yet.
     * If this is false, it has completed
     */
    pending: boolean;

    /**
     * The number of times the asyncronous event handler has run.
     * Does not include times where it was throttled or debounced away.
     * 
     * Useful for knowing if the handler has been called yet, or for
     * setting a new timeout to show a spinner.
     */
    callCount: number;

    /**
     * The number of times the asyncronous event handler has settled
     * (resolved or rejected), similarly to `callCount`.
     * 
     * Useful for knowing if the handler has completed even once yet,
     * or just for when the handler has finished
     */
    settleCount: number;

    /**
     * The number of times the asyncronous event handler has 
     * completed successfully, similarly to `settleCount`.
     */
    resolveCount: number;


    /**
     * The number of times the asyncronous event handler has 
     * failed to complete, similarly to `resolveCount`.
     */
    rejectCount: number;

    /**
     * The error the handler threw. `undefined` otherwise, though note
     * that `undefined` is a valid thing to throw.
     * 
     * @see hasError
     */
    error: unknown;

    /**
     * Whether or not the current handler finished with an error.
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
     * Pass the actual asynchronous handler you'd like to use to this function, 
     * and you'll get the synchronous handler back.
     * 
     * Passing `null` is a way to disable the handler, for example, while one is already pending, if you'd like to do so.
     * Because 
     * 
     */
    useSyncHandler: (asyncHandler: undefined | null | (() => (Promise<T> | T | undefined))) => ((() => T | undefined) | undefined);
}





export function useAsync<T>({ debounce }: UseAsyncParameters): UseAsyncReturnType<T> {

    // Always represents whatever promise is currently being waited on, or null if none.
    const [promise, setPromise, getPromise] = useState<Promise<T> | null>(null);

    // Keep track of how many times we've actually called the async handler
    const [runCount, setRunCount] = useState(0);
    const [resolveCount, setResolveCount] = useState(0);
    const [rejectCount, setRejectCount] = useState(0);

    // Keep track of whether we're acting on a sync or async handler, just in case that's important.
    // This can change if the handler switches between being sync or async, technically, and will be
    // null until the first time the handler is called.
    const [currentType, setCurrentType] = useState<null | "sync" | "async">(null);

    // If we're set to use a debounce, then when the timeout finishes,
    // the promise from this state object is transferred over to either 
    // the current promise or the pending promise.
    const [debouncedPromiseStarter, setDebouncedPromiseStarter, getDebouncedPromiseStarter] = useState<(() => (Promise<T> | T | undefined)) | null>(null);

    // When we want to start a new promise, we won't allow it to start if one is still running.
    // In that case, we store the promise (or rather, a way to start the promise) in state.
    const [pendingPromiseStarter, setPendingPromiseStarter, getPendingPromiseStarter] = useState<(() => (Promise<T> | T | undefined)) | null>(null);

    // We need to differentiate between `undefined` and "no error has been thrown",
    // so we have two separate error state variables.
    const [error, setError, getError] = useState<unknown>(undefined);
    const [hasError, setHasError, getHasError] = useState(false);


    // When the debounce timer is up (or the user manually requests the debounce to end)
    // run the normal "please consider running this promise" routine that we would
    // have just run immediately if we weren't debouncing our promises.
    const onDebounceTimeUp = useCallback(() => {
        const debouncedPromiseStarter = getDebouncedPromiseStarter();
        if (debouncedPromiseStarter)
            wantToStartANewPromise(debouncedPromiseStarter);

        setDebouncedPromiseStarter(null);
    }, [wantToStartANewPromise, setDebouncedPromiseStarter])

    // Handle the debounce. Logically this happens before the main step as a sort of step 0.
    // Resets the timeout any time the handler was requested to be called again
    // and when it finishes, actually call the handler (or set it as the pending promise)
    useTimeout({
        timeout: debounce ?? null,
        callback: onDebounceTimeUp,
        triggerIndex: debouncedPromiseStarter
    });

    // See if we should set our current promise to be whatever the pending promise is
    // (usually because the current promise finished and became null).
    useLayoutEffect(() => {
        // Our current promise just finished and there's one waiting?
        if (promise == null && pendingPromiseStarter != null) {
            wantToStartANewPromise(pendingPromiseStarter);
            setPendingPromiseStarter(null);
        }

    }, [promise, pendingPromiseStarter]);



    let ret: UseAsyncReturnType<T> = {
        useSyncHandler,
        callCount: runCount,
        pending: (promise != null),
        hasError,
        error,
        resolveCount,
        rejectCount,
        flushDebouncedPromise: onDebounceTimeUp,
        promise,

        currentType,
        settleCount: rejectCount + resolveCount
    };

    return ret;



    // Called any time the async handler is about to be called for whatever reason,
    // except for debounce, which comes first, as a sort of "step 0".
    // Handles all the necessary boilerplate related to choosing whether to
    // run or set as pending, resetting state variables, etc.
    function wantToStartANewPromise(startPromise: (() => (Promise<T> | T | undefined))) {
        let alreadyRunningPromise = (getPromise() != null);

        // Boilerplate wrapper around the given promise starter
        let startPromiseWithBoilerplate = (): (T | Promise<T> | undefined) => {
            // When it starts, notify the caller
            setRunCount(r => ++r);

            // When it completes, notify the caller
            // When it fails, save the error and notify the caller
            // When it settles, reset our state so we can run a pending promise if it exists
            const onThen = (value: T | undefined) => { setResolveCount(c => ++c); return value; };
            const onCatch = (ex: any) => { setError(ex); setHasError(true); setRejectCount(c => ++c); };
            const onFinally = () => { setPromise(null); };

            // Handle the special case where the handler is synchronous
            let result: T | Promise<T> | undefined;
            try {
                result = startPromise();
                if (result == null || !("then" in result)) {
                    // It's synchronous and returned successfully.
                    // Bail out early.
                    onThen(result);
                    onFinally();
                    setCurrentType("sync");
                }
                else {
                    result.then(onThen).catch(onCatch).finally(onFinally);
                    setCurrentType("async");
                }
                return result;

                //console.assert("then" in (result as Promise<any>));
            }
            catch (ex) {
                // It's synchronous (or asynchronous but didn't await anything yet) and threw an error.
                // Bail out early.
                onCatch(ex);
                onFinally();
                setCurrentType("sync");
                return;
            }

            // The handler is asynchronous
            //setCurrentType("async");
            //return (async () => { await result; })().then(onThen).catch(onCatch).finally(onFinally);
        }


        if (!alreadyRunningPromise) {
            // Start the promise immediately, because there wasn't one running already.
            let nextPromise = startPromiseWithBoilerplate();
            if (nextPromise == null || !("then" in nextPromise)) {
                // Hold on! The handler was actually synchronous, and already finished.
                // Bail out early.
            }
            else {
                setError(undefined);
                setHasError(false);
                setPromise(nextPromise);
            }
        }
        else {
            // Don't start the promise yet, 
            // and allow it to start in the future instead.
            setPendingPromiseStarter(_ => startPromiseWithBoilerplate);
        }
    }

    function useSyncHandler(asyncHandler: undefined | null | (() => (Promise<T> | T | undefined))): (() => T | undefined) {

        const syncHandler = useStableCallback(function syncHandler(): T | undefined {

            if (asyncHandler == null)
                return;


            const startPromise = () => asyncHandler(/*captured, event*/);

            if (debounce == null) {
                wantToStartANewPromise(startPromise);
            }
            else {
                setDebouncedPromiseStarter(_ => startPromise);
            }

        })

        return syncHandler;
    }

}

