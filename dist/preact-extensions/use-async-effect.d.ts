import { Inputs } from "preact/hooks";
import { UseAsyncParameters } from "./use-async.js";
type OmitStrong<T, K extends keyof T> = Omit<T, K>;
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
export declare function useAsyncEffect<I extends Inputs>(effect: () => Promise<(void | (() => void))>, inputs?: I, options?: OmitStrong<UseAsyncParameters<[void], [void]>, "capture">): {
    pending: boolean;
    debouncingSync: boolean;
    debouncingAsync: boolean;
    callCount: number;
    settleCount: number;
    resolveCount: number;
    rejectCount: number;
    result: void | (() => void) | undefined;
    hasResult: boolean;
    error: unknown;
    hasError: boolean;
    invocationResult: "sync" | "async" | "throw" | null;
    flushDebouncedPromise: () => void;
};
export {};
//# sourceMappingURL=use-async-effect.d.ts.map