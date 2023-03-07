import { useCallback } from "preact/hooks";
import { useEnsureStability } from "../preact-extensions/use-passive-state.js";
function processRef(instance, ref) {
    if (typeof ref === "function") {
        ref(instance);
    }
    else if (ref != null) {
        ref.current = instance;
    }
    else {
        /* eslint-disable no-debugger */
        debugger;
        console.assert(false, "Unknown ref type found that was neither a RefCallback nor a RefObject");
    }
}
/**
 * Combines two refs into one. This allows a component to both use its own ref *and* forward a ref that was given to it.
 * @param lhs
 * @param rhs
 * @returns
 */
export function useMergedRefs(rhs, lhs) {
    useEnsureStability("useMergedRefs", lhs, rhs);
    const combined = useCallback(function combined(current) {
        processRef(current, lhs);
        processRef(current, rhs);
    }, []);
    if (lhs == null && rhs == null) {
        return undefined;
    }
    else if (lhs == null) {
        return rhs;
    }
    else if (rhs == null) {
        return lhs;
    }
    else {
        return combined;
    }
}
//# sourceMappingURL=use-merged-refs.js.map