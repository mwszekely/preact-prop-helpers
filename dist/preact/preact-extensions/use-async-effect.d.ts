import { Inputs } from "../util/lib.js";
import { OmitStrong } from "../util/types.js";
import { $capture, $syncHandler, UseAsyncParameters, UseAsyncReturnType } from "./use-async.js";
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
export declare const useAsyncEffect: <I extends Inputs>(effect: () => Promise<(void | (() => void))>, inputs?: I | undefined, options?: OmitStrong<UseAsyncParameters<[void], [void]>, typeof $capture>) => OmitStrong<UseAsyncReturnType<[], void | (() => void)>, typeof $syncHandler>;
//# sourceMappingURL=use-async-effect.d.ts.map