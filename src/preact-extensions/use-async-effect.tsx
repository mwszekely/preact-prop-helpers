import { Inputs, useEffect } from "preact/hooks";
import { useAsync, UseAsyncParameters } from "./use-async";

type OmitStrong<T, K extends keyof T> = Omit<T, K>

/**
 * Combines the semantics of `useAsync` and `useEffect`. 
 * 
 * More specifically, if an event would run again, but the previous async event is still running,
 * then we'll wait until it finishes to run the new effect. 
 * And while waiting, further new effect runs will bump old ones off,
 * only remembering the most recent request.
 * 
 * @returns All values from `useAsync`, except for `syncHandler`.
 */
export function useAsyncEffect<I extends Inputs>(effect: () => Promise<(void | (() => void))>, inputs?: I, options?: OmitStrong<UseAsyncParameters<[void], [void]>, "capture">) {
    const { syncHandler, ...rest } = useAsync(effect, options);
    useEffect(syncHandler, inputs);
    return rest;
}
