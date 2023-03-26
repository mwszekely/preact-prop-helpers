import { useLayoutEffect as useLayoutEffectNative } from "preact/hooks";
import { monitorCallCount } from "../util/use-call-count.js";
import { useEffectDebug } from "./use-effect-debug.js";
/**
 * Wrap the native `useLayoutEffect` to add arguments
 * that allow accessing the previous value as the first argument,
 * as well as the changes that caused the hook to be called as the second argument.
 *
 * @param effect
 * @param inputs
 */
export function useLayoutEffectDebug(effect, inputs) {
    monitorCallCount(useLayoutEffectDebug);
    return useEffectDebug(effect, inputs, useLayoutEffectNative);
}
//# sourceMappingURL=use-layout-effect-debug.js.map