
import { h } from "preact";
import { useAsync, UseAsyncParameters, UseAsyncReturnType } from "./use-async";
import { useStableCallback } from "./use-stable-callback";
import { useState } from "./use-state";


export interface AsyncHandler<CaptureType, E extends h.JSX.TargetedEvent> {
    /**
     * The `this` keyword always points to the DOM element the event handler
     * was invoked on. See: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers#Event_handlers_parameters_this_binding_and_the_return_value
     */
    (this: never, capturedValue: CaptureType, event: E): void;
}
export type GenericAsyncHandler<CaptureType, Target extends EventTarget> = AsyncHandler<CaptureType, h.JSX.TargetedEvent<Target>>;


export interface UseAsyncHandlerParameters<ElementType extends EventTarget, EventType extends h.JSX.TargetedEvent<ElementType>, CaptureType> extends Omit<UseAsyncParameters, "handler"> {
    /**
     * What transient information is captured by this event 
     * and presented as the first argument of the event handler?
     * 
     * The "capture" parameter answers this question. To implement a checkbox, for example, return `target.checked`.
     */
    capture: (event: EventType) => CaptureType;
}

export interface UseAsyncHandlerReturnType<ElementType extends EventTarget, EventType extends h.JSX.TargetedEvent<ElementType>, CaptureType> extends Omit<UseAsyncReturnType<CaptureType>, "useSyncHandler"> {
    /**
     * Pass the actual asynchronous handler you'd like to use to this function, 
     * and you'll get the synchronous handler back.
     * 
     * Passing `null` is a way to disable the handler, for example, while one is already pending, if you'd like to do so.
     * Because 
     * 
     */
    useSyncHandler(asyncHandler: ((value: CaptureType, event: EventType) => (Promise<void> | void)) | null | undefined): h.JSX.EventHandler<EventType> | undefined;

    /**
     * The most recently captured value. In other words, represents what
     * the current value would be if this operation were synchronous and 
     * and couldn't fail. It's useful to pretend this is the actual value
     * for an input field, for example, so that the value doesn't "snap
     * back" while you're waiting for the handler to finish.
     * 
     * Something like `value={pending? currentCapture : value}` is good for checkboxes,
     * something like `value={(pending || hasFocus)? currentCapture : value} for text fields.
     * 
     * @see hasCapture
     */
    currentCapture: CaptureType | undefined;

    /** The above, but stable, if you need the current capture without it being an explicit dependency. */
    getCurrentCapture(): (CaptureType | undefined);

    /**
     * Because you're allowed to have `CaptureType` extend `undefined`,
     * you might need this.
     */
    hasCapture: boolean;

}

/**
 * Given an asyncronous event handler, returns a syncronous one that works on the DOM,
 * along with some other information related to the current state.
 * Does not modify any props.
 * 
 * Note that because the handler you provide may be called with a delay, and 
 * because the value of, e.g., an `<input>` element will likely be stale by the 
 * time the delay is over, a `capture` function is necessary in order to 
 * capture the relevant information from the DOM. Any other simple event data, 
 * like `mouseX` or `shiftKey` can stay on the event itself and don't 
 * need to be captured &ndash; it's never stale.
 * 
 * ```tsx
 * const syncOnInput = async (value: number, e: Event) => { 
 *     [...] // Ex. send to a server and setState when done
 * };
 * const {
 *     // When called, returns the synchronous event handler
 *     useSyncHandler,
 *     // True while the handler is running
 *     pending,
 *     // The error thrown, if any
 *     error,
 *     // Show this value while the operation's pending
 *     currentCapture,
 *     // And others, see `UseAsyncHandlerReturnType`
 *     ...rest
 * } = useAsyncHandler<HTMLInputElement>()({ 
 *     // Pass in the capture function that saves event data
 *     // from being stale.  Note that the async event handler 
 *     // isn't passed here, it's passed to `useSyncHandler` above.
 *     capture: e => { 
 *         e.preventDefault(); 
 * 
 *         // Save this value so that it's never stale
 *         return e.currentTarget.valueAsNumber;
 *     }
 * });
 * 
 * const onInput = useSyncHandler(someAsyncFunction);
 * // OR the following, if you want the input entirely disabled while pending:
 * const onInput = useSyncHandler(pending? null : someAsyncFunction);
 * ```
 * 
 * The handler is automatically throttled to only run one at a time. 
 * If the handler is called, and then before it finishes, is called again,
 * it will be put on hold until the current one finishes, at which point
 * the second one will run.  If the handler is called a third time before
 * the first has finished, it will *replace* the second, so only the most
 * recently called iteration of the handler will run.
 * 
 * 
 * You may optionally *also* specify a debounce parameter that waits until the
 * syncronous handler has not been called for the specified number of
 * milliseconds, at which point we *actually* run the asyncronous handler
 * according to the logic in the previous paragraph. This is in
 * *addition* to throttling the handler, and does not replace that behavior.
 */
export function useAsyncHandler<ElementType extends EventTarget>() {
    return function <EventType extends h.JSX.TargetedEvent<ElementType>, CaptureType>({ capture, debounce }: UseAsyncHandlerParameters<ElementType, EventType, CaptureType>): UseAsyncHandlerReturnType<ElementType, EventType, CaptureType> {
        const { callCount, currentType, error, flushDebouncedPromise, useSyncHandler, hasError, pending, rejectCount, resolveCount, settleCount, promise } = useAsync<CaptureType>({ debounce });


        // We need to differentiate between "nothing captured yet" and "`undefined` was captured"
        const [currentCapture, setCurrentCapture, getCurrentCapture] = useState<CaptureType | undefined>(undefined);
        const [hasCapture, setHasCapture] = useState(false);

        let ret: UseAsyncHandlerReturnType<ElementType, EventType, CaptureType> = {
            useSyncHandler: useSyncHandler2,
            getCurrentCapture,
            callCount,
            currentCapture,
            hasCapture,
            pending: (promise != null),
            hasError,
            error,
            promise,

            currentType,

            flushDebouncedPromise,

            resolveCount,
            rejectCount,
            settleCount: rejectCount + resolveCount
        };

        return ret;

        function useSyncHandler2(asyncHandler: ((value: CaptureType, event: EventType) => (Promise<void> | void)) | null | undefined): h.JSX.EventHandler<EventType> | undefined {

            let captured: CaptureType;
            let event: EventType;
            const syncHandler2 = useSyncHandler(asyncHandler == null ? asyncHandler : () => {
                let ret = asyncHandler(captured, event);
                if (!ret || !("then" in ret)) {
                    return captured;
                }
                else {
                    return ret.then(_ => captured);
                }
            });

            const syncHandler = useStableCallback<h.JSX.EventHandler<EventType>>(function syncHandler(e: EventType): void {
                // Get the most significant information from the event at this time,
                // which is necessary since the promise could actually be called much later
                // when the element's value (etc.) has changed.
                captured = capture(e);
                event = e;

                if (syncHandler2 == null)
                    return;


                setCurrentCapture(captured);
                setHasCapture(true);
                syncHandler2();
            });

            return syncHandler;
        }
    }

}





