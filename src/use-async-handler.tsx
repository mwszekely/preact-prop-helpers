
import { h } from "preact";
import { useStableCallback } from "./use-stable-callback";
import { useLayoutEffect } from "./use-layout-effect";
import { useState } from "./use-state";
import { useTimeout } from "./use-timeout";
import { useCallback } from "preact/hooks";

type SubType<Base, Condition> = Pick<Base, { [Key in keyof Base]: Base[Key] extends Condition ? Key : never }[keyof Base]>;

type ExtractFunction<T> = SubType<T, Function>


export interface AsyncHandler<CaptureType, E extends h.JSX.TargetedEvent> {
    /**
     * The `this` keyword always points to the DOM element the event handler
     * was invoked on. See: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers#Event_handlers_parameters_this_binding_and_the_return_value
     */
    (this: never, capturedValue: CaptureType, event: E): void;
}
export type GenericAsyncHandler<CaptureType, Target extends EventTarget> = AsyncHandler<CaptureType, h.JSX.TargetedEvent<Target>>;

//const NoError = Symbol("no-error");
//const NoCapture = Symbol("no-capture");

export interface UseAsyncHandlerParameters<ElementType extends EventTarget, EventType extends h.JSX.TargetedEvent<ElementType>, CaptureType> {
    /**
     * What transient information is captured by this event 
     * and presented as the first argument of the event handler?
     * 
     * The "capture" parameter answers this question. To implement a checkbox, for example, return `target.checked`.
     */
    capture: (event: EventType) => CaptureType;

    /**
     * If provided, adds a debounce behavior *in addition* to
     * the default "wait until resolved" throttling behavior.
     */
    debounce?: number;
}

export interface UseAsyncHandlerReturnType<ElementType extends EventTarget, EventType extends h.JSX.TargetedEvent<ElementType>, CaptureType> {

    /**
     * Pass the actual asynchronous handler you'd like to use to this function, 
     * and you'll get the synchronous handler back.
     * 
     * Passing `null` is a way to disable the handler, for example, while one is already pending, if you'd like to do so.
     * Because 
     * 
     */
    getSyncHandler: (asyncHandler: undefined | null | ((value: CaptureType, event: EventType) => (Promise<void> | void))) => (h.JSX.EventHandler<EventType> | undefined);

    /**
     * Whether or not the handler has been called but has not completed yet.
     * If this is false, it has completed
     */
    pending: boolean;

    /**
     * The most recently captured value. In other words, represents what
     * the current value would be if this operation were synchronous and 
     * and couldn't fail. It's useful to pretend this is the actual value
     * for an input field, for example, so that the value doesn't "snap
     * back" while you're waiting for the handler to finish.
     * 
     * Something like `value={currentCapture ?? value}` is usually good enough.
     * 
     * @see hasCapture
     */
    currentCapture: CaptureType | undefined;

    /** The above, but stable, if you need the current capture without it being an explicit dependency. */
    getCurrentCapture(): (CaptureType | undefined);

    /**
     * Because you're allowed have `CaptureType` extend `undefined`,
     * you might need this.
     */
    hasCapture: boolean;

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
}

/**
 * Given an asyncronous event handler, returns a syncronous one that works on the DOM,
 * along with some other information related to the current state.
 * Does not modify any props.
 * 
 * The handler is automatically throttled to only run one at a time. 
 * If the handler is called, and then before it finishes, is called again,
 * it will be put on hold until the current one finishes, at which point
 * the second one will run.  If the handler is called a third time before
 * the first has finished, it will *replace* the second, so only the most
 * recently called iteration of the handler will run.
 * 
 * You may optionally *also* specify a debounce parameter that waits until the
 * syncronous handler has not been called for the specified number of
 * milliseconds, at which point we *actually* run the asyncronous handler
 * according to the logic in the previous paragraph. This is in
 * *addition* to throttling the handler, and does not replace that behavior.
 * 
 * Note that the parameters to the async handler are slightly different than
 * the sync handler &ndash; the first argument, as decided by you with the
 * `capture` parameter for this hook, is the "saved" information from the
 * event.  For example, the event's currentTarget's `value`, which may have
 * changed by the time the handler is *actually* called.  The second argument
 * is the original event, which might still have some useful fields on it
 * like `mouseX` or something, but is stale at least in regards to the
 * element it references.
 */
export function useAsyncHandler<ElementType extends EventTarget>() {
    return function <EventType extends h.JSX.TargetedEvent<ElementType>, CaptureType>({ capture, debounce }: UseAsyncHandlerParameters<ElementType, EventType, CaptureType>) {

        // Always represents whatever promise is currently being waited on, or null if none.
        const [promise, setPromise, getPromise] = useState<Promise<void> | null>(null);

        // Keep track of how many times we've actually called the async handler
        const [runCount, setRunCount] = useState(0);
        const [resolveCount, setResolveCount] = useState(0);
        const [rejectCount, setRejectCount] = useState(0);

        // 
        const [currentType, setCurrentType] = useState<null | "sync" | "async">(null);

        // If we're set to use a debounce, then when the timeout finishes,
        // the promise from this state object is transferred over to either 
        // the current promise or the pending promise.
        const [debouncedPromiseStarter, setDebouncedPromiseStarter, getDebouncedPromiseStarter] = useState<(() => (Promise<void> | void)) | null>(null);

        // When we want to start a new promise, we won't allow it to start if one is still running.
        // In that case, we store the promise (or rather, a way to start the promise) in state.
        const [pendingPromiseStarter, setPendingPromiseStarter, getPendingPromiseStarter] = useState<(() => (Promise<void> | void)) | null>(null);

        // We need to differentiate between `undefined` and "no error has been thrown".
        const [error, setError, getError] = useState<unknown>(undefined);
        const [hasError, setHasError, getHasError] = useState(false);

        // Same thing, we need to differentiate between "nothing captured yet" and "`undefined` was captured"
        const [currentCapture, setCurrentCapture, getCurrentCapture] = useState<CaptureType | undefined>(undefined);
        const [hasCapture, setHasCapture] = useState(false);


        // When the debounce timer is up (or we manually request the debounce to end)
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

        // Called any time the async handler is about to be called for whatever reason,
        // except for debounce, which comes first, as a sort of "step 0".
        // Handles all the necessary boilerplate related to choosing whether to
        // run or set as pending, resetting state variables, etc.
        function wantToStartANewPromise(startPromise: (() => (Promise<void> | void))) {
            let alreadyRunningPromise = (getPromise() != null);

            // Boilerplate wrapper around the given promise starter
            let startPromiseWithBoilerplate = () => {
                // When it starts, notify the caller
                setRunCount(r => ++r);

                // When it completes, notify the caller
                // When it fails, save the error and notify the caller
                // When it settles, reset our state so we can run a pending promise if it exists
                const onThen = () => { setResolveCount(c => ++c) };
                const onCatch = (ex: any) => { setError(ex); setHasError(true); setRejectCount(c => ++c); };
                const onFinally = () => { setPromise(null); setHasCapture(false); setCurrentCapture(undefined); };

                // Handle the special case where the handler is synchronous
                let result: void | Promise<void>;
                try {
                    result = startPromise();
                    if (result == undefined) {
                        // It's synchronous and returned successfully.
                        // Bail out early.
                        onThen();
                        onFinally();
                        setCurrentType("sync");
                        return;
                    }

                    console.assert("then" in (result as Promise<any>));
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
                setCurrentType("async");
                return (async () => { await result; })().then(onThen).catch(onCatch).finally(onFinally);
            }


            if (!alreadyRunningPromise) {
                // Start the promise immediately, because there wasn't one running already.
                let nextPromise = startPromiseWithBoilerplate();
                if (nextPromise == undefined) {
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



        let ret: UseAsyncHandlerReturnType<ElementType, EventType, CaptureType> = {
            getSyncHandler,
            getCurrentCapture,
            callCount: runCount,
            currentCapture,
            hasCapture,
            pending: (promise != null),
            hasError,
            error,

            currentType,

            flushDebouncedPromise: onDebounceTimeUp,

            resolveCount,
            rejectCount,
            settleCount: rejectCount + resolveCount
        };

        return ret;

        function getSyncHandler(asyncHandler: undefined | null | ((value: CaptureType, event: EventType) => (Promise<void> | void))): h.JSX.EventHandler<EventType> | undefined {

            const syncHandler = useStableCallback<h.JSX.EventHandler<EventType>>(function syncHandler(event: EventType) {

                if (asyncHandler == null)
                    return;


                // Get the most significant information from the event at this time,
                // which is necessary since the promise could actually be called much later
                // when the element's value (etc.) has changed.
                const captured = capture(event);
                setCurrentCapture(captured);
                setHasCapture(true);


                const startPromise = () => asyncHandler(captured, event);

                if (debounce == null) {
                    wantToStartANewPromise(startPromise);
                }
                else {
                    setDebouncedPromiseStarter(_ => startPromise);
                }

            })

            return asyncHandler == null ? undefined : syncHandler;
        }

    }

}
