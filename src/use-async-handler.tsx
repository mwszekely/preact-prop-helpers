
import { h } from "preact";
import { useStableCallback } from "./use-stable-callback";
import { useLayoutEffect } from "./use-layout-effect";
import { useState } from "./use-state";
import { useTimeout } from "./use-timeout";

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

export interface UseAsyncHandlerParameters<E extends EventTarget, A extends (`on${string}` & keyof ExtractFunction<Required<h.JSX.HTMLAttributes<E>>>), CaptureType> {
    capture: (event: Parameters<Required<h.JSX.HTMLAttributes<E>>[A]>[0]) => CaptureType;

    event: A;

    /**
     * If provided, adds a debounce behavior *in addition* to
     * the default "wait until resolved" throttling behavior.
     */
    debounce?: number;
}

export type UseAsyncHandlerReturnType<E extends EventTarget, A extends (`on${string}` & keyof ExtractFunction<Required<h.JSX.HTMLAttributes<E>>>), CaptureType> = { 
    [K in A as `getSync${Capitalize<K>}`]: (asyncHandler: ((value: CaptureType, event: Parameters<Required<h.JSX.HTMLAttributes<E>>[A]>[0]) => (Promise<void> | void)) | null | undefined) => Required<h.JSX.HTMLAttributes<E>>[A] 
} & {

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
     * @see hasCapture
     */
    currentCapture: CaptureType | undefined;
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
export function useAsyncHandler<E extends EventTarget>() {
    return function <A extends (`on${string}` & keyof ExtractFunction<Required<h.JSX.HTMLAttributes<E>>>), CaptureType>({ capture, event: eventName, debounce }: UseAsyncHandlerParameters<E, A, CaptureType>) {

        // Always represents whatever promise is currently being waited on, or null if none.
        const [promise, setPromise, getPromise] = useState<Promise<void> | null>(null);

        // Keep track of how many times we've actually called the async handler
        const [runCount, setRunCount] = useState(0);
        const [resolveCount, setResolveCount] = useState(0);
        const [rejectCount, setRejectCount] = useState(0);

        // If we're set to use a debounce, then when the timeout finishes,
        // the promise from this state object is transferred over to either 
        // the current promise or the pending promise.
        const [debouncedPromiseStarter, setDebouncedPromiseStarter, getDebouncedPromiseStarter] = useState<(() => (Promise<void> | void)) | null>(null);

        // When we want to start a new promise, we won't allow it to start if one is still running.
        // In that case, we store the promise (or rather, a way to start the promise) in state.
        const [pendingPromiseStarter, setPendingPromiseStarter, getPendingPromiseStarter] = useState<(() => (Promise<void> | void)) | null>(null);

        // We need to differentiate between `undefined` and "no error has been thrown".
        // We could also keep a separate boolean state to track that.
        const [error, setError, getError] = useState<unknown>(undefined);
        const [hasError, setHasError, getHasError] = useState(false);

        const [currentCapture, setCurrentCapture, getCurrentCapture] = useState<CaptureType | undefined>(undefined);
        const [hasCapture, setHasCapture] = useState(false);


        // Handle the debounce. Logically this happens before the main step as a sort of step 0.
        // Resets the timeout any time the handler was requested to be called again
        // and when it finishes, actually call the handler (or set it as the pending promise)
        useTimeout({
            timeout: debounce ?? null,
            callback: () => {
                if (debouncedPromiseStarter)
                    wantToStartANewPromise(debouncedPromiseStarter);

                setDebouncedPromiseStarter(null);

            },
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
            let P = () => {
                // When it starts, notify the caller
                setRunCount(r => ++r);

                // When it completes, notify the caller
                const onThen = () => { setResolveCount(c => ++c) };
                // When it fails, save the error and notify the caller
                const onCatch = (ex: any) => { setError(ex); setHasError(true); setRejectCount(c => ++c); }
                // When it settles, reset our state so we can 
                // run a pending promise if it exists
                const onFinally = () => { setPromise(null); }

                let sync = false;

                // Handle the special case where the handler is synchronous
                let result: void | Promise<void>
                try {
                    result = startPromise();
                    if (result == undefined) {
                        // It's synchronous and returned successfully.
                        // Bail out early.
                        onThen();
                        onFinally();
                        return;
                    }
                }
                catch (ex) {
                    // It's synchronous and threw an error.
                    // Bail out early.
                    onCatch(ex);
                    onFinally();
                }

                // The handler is asynchronous
                return (async () => { await result; })().then(onThen).catch(onCatch).finally(onFinally);
            }


            if (!alreadyRunningPromise) {
                // Start the promise immediately, because there wasn't one running already.
                let nextPromise = P();
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
                setPendingPromiseStarter(_ => P);
            }
        }



        let ret: UseAsyncHandlerReturnType<E, A, CaptureType> = {
            ...{ [`getSync${capitalize(eventName)}`]: getSyncHandler } as unknown as { [K in A as `getSync${Capitalize<K>}`]: (asyncHandler: ((value: CaptureType, event: Parameters<Required<h.JSX.HTMLAttributes<E>>[A]>[0]) => (Promise<void> | void)) | null | undefined) => Required<h.JSX.HTMLAttributes<E>>[A] },
            getCurrentCapture,
            callCount: runCount,
            currentCapture,
            hasCapture,
            pending: (promise != null),
            hasError,
            error,

            resolveCount,
            rejectCount,
            settleCount: rejectCount + resolveCount
        };

        return ret;

        function getSyncHandler(asyncHandler: undefined | null | ((value: CaptureType, event: Parameters<Required<h.JSX.HTMLAttributes<E>>[A]>[0]) => (Promise<void> | void))): Required<h.JSX.HTMLAttributes<E>>[A] {

            const syncHandler = useStableCallback(function syncHandler(e: Event) {

                if (asyncHandler == null)
                    return;

                const event = e as Parameters<Required<h.JSX.HTMLAttributes<E>>[A]>[0];

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

            return syncHandler;
        }

    }

}

function capitalize<T extends string>(str: T): Capitalize<T> { return (str[0].toUpperCase() + str.substr(1)) as Capitalize<T> }

function isVoid(v: any): v is void { return v == undefined; }