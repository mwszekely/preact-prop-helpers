
import { h } from "preact";
import { useAsync, UseAsyncParameters, UseAsyncReturnType } from "./use-async";
import { useStableCallback } from "./use-stable-callback";
import { useState } from "./use-state";

export interface UseAsyncHandlerParameters<EventType extends Event, CaptureType> extends Omit<UseAsyncParameters<[CaptureType, EventType], [EventType]>, "capture"> {
    /**
     * What transient information is captured by this event 
     * and presented as the first argument of the event handler?
     * 
     * The "capture" parameter answers this question. To implement a checkbox, for example, return `target.checked`.
     */
    capture: (event: EventType) => CaptureType;
}

export interface UseAsyncHandlerReturnType<EventType extends Event, CaptureType> extends UseAsyncReturnType<[EventType], void> {

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

    // Same as in useAsync, but with a different type
    //promise: Promise<void> | null;

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
 * const asyncOnInput = async (value: number, e: Event) => { 
 *     [...] // Ex. send to a server and setState when done
 * };
 * const {
 *     // A sync version of asyncOnInput
 *     syncHandler,
 *     // True while the handler is running
 *     pending,
 *     // The error thrown, if any
 *     error,
 *     // Show this value while the operation's pending
 *     currentCapture,
 *     // And others, see `UseAsyncHandlerReturnType`
 *     ...rest
 * } = useAsyncHandler<HTMLInputElement>()(asyncOnInput, { 
 *     // Pass in the capture function that saves event data
 *     // from being stale.
 *     capture: e => { 
 *         // `capture` can have side-effects because
 *         // it's called exactly once per invocation
 *         e.preventDefault(); 
 * 
 *         // Save this value so that it's never stale
 *         return e.currentTarget.valueAsNumber;
 *     }
 * });
 * 
 * const onInput = pending? null : syncHandler;
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
 * You may optionally *also* specify debounce and throttle parameters that wait until the
 * syncronous handler has not been called for the specified number of
 * milliseconds, at which point we *actually* run the asyncronous handler
 * according to the logic in the previous paragraph. This is in
 * *addition* to throttling the handler, and does not replace that behavior.
 * 
 * @see useAsync A more general version of this hook that can work with any type of handler, not just DOM event handlers.
 */
export function useAsyncHandler<EventType extends Event, CaptureType>(asyncHandler: ((c: CaptureType, e: EventType) => (Promise<void> | void)) | null, { capture: originalCapture, ...restAsyncOptions }: UseAsyncHandlerParameters<EventType, CaptureType>): UseAsyncHandlerReturnType<EventType, CaptureType> {
    
    // We need to differentiate between "nothing captured yet" and "`undefined` was captured"
    const [currentCapture, setCurrentCapture, getCurrentCapture] = useState<CaptureType | undefined>(undefined);
    const [hasCapture, setHasCapture] = useState(false);
    
    // Wrap around the normal `useAsync` `capture` function to also
    // keep track of the last value the user actually input.
    // 
    // Without this there's no way to re-render the control with
    // it being both controlled and also having the "correct" value,
    // and at any rate also protects against sudden exceptions reverting
    // your change out from under you.
    const capture = useStableCallback((e: EventType): [CaptureType, EventType] => { 
        const captured = originalCapture(e); 
        setCurrentCapture(captured);
        setHasCapture(true);
        return [captured, e];
    });

    return {
        getCurrentCapture,
        currentCapture,
        hasCapture,
        ...useAsync(asyncHandler, { capture, ...restAsyncOptions })
    };
}







