import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
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
 *
 * @remarks Or just use {@link useMergedProps}
 *
 * #__NO_SIDE_EFFECTS__
 */
export function useMergedRefs(rhs, lhs) {
    // This *must* be stable in order to prevent repeated reset `null` calls after every render.
    const combined = useStableCallback(function combined(current) {
        processRef(current, lhs);
        processRef(current, rhs);
    });
    if (lhs == null && rhs == null) {
        return undefined;
    }
    else if (lhs == null) {
        if (process.env.NODE_ENV === 'development')
            console.assert(typeof rhs == "function" || "current" in rhs, "Unknown ref type found that was neither a RefCallback nor a RefObject");
        return rhs;
    }
    else if (rhs == null) {
        if (process.env.NODE_ENV === 'development')
            console.assert(typeof lhs == "function" || "current" in lhs, "Unknown ref type found that was neither a RefCallback nor a RefObject");
        return lhs;
    }
    else {
        return combined;
    }
}
//# sourceMappingURL=use-merged-refs.js.map