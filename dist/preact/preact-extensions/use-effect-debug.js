import { useEffect as useEffectNative, useRef } from "../util/lib.js";
import { useMonitoring } from "../util/use-call-count.js";
/**
 * Wrap the native `useEffect` to add arguments
 * that allow accessing the previous value as the first argument,
 * as well as the changes that caused the hook to be called as the second argument.
 *
 * @param effect - Same as the default
 * @param inputs - Same as the default
 * @param impl - You can choose whether to use `useEffect` or `useLayoutEffect` by
 * passing one of them as this argument. By default, it's `useEffect`.
 */
export function useEffectDebug(effect, inputs, impl = useEffectNative) {
    return useMonitoring(function useEffectDebug() {
        const prevInputs = useRef(undefined);
        const effect2 = () => {
            const changes = [];
            if (inputs && prevInputs.current) {
                for (let i = 0; i < Math.max(prevInputs.current.length, inputs.length); ++i) {
                    if (prevInputs.current[i] != inputs[i])
                        changes[i] = { from: prevInputs.current[i], to: inputs[i] };
                }
            }
            const ret = effect(prevInputs.current, changes);
            prevInputs.current = inputs;
            return ret;
        };
        impl(effect2, inputs);
    });
}
//# sourceMappingURL=use-effect-debug.js.map