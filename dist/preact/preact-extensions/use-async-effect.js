import { useEffect } from "../util/lib.js";
import { monitored } from "../util/use-call-count.js";
import { $capture, $debounce, $throttle, $syncHandler, useAsync } from "./use-async.js";
/**
 * Combines the semantics of `useAsync` and `useEffect`.
 *
 * @remarks More specifically, if an event would run again, but the previous async event is still running,
 * then we'll wait until it finishes to run the new effect.
 * And while waiting, further new effect runs will bump old ones off,
 * only remembering the most recent request.
 *
 * @returns All values from `useAsync`, except for `syncHandler`.
 */
export const useAsyncEffect = monitored(function useAsyncEffect(effect, inputs, options) {
    const ret = useAsync(effect, { ...options, [$capture]: null, [$debounce]: null, [$throttle]: null });
    useEffect(ret[$syncHandler], inputs);
    return ret;
});
//# sourceMappingURL=use-async-effect.js.map