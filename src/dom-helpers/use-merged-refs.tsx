
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { ElementProps, Ref, RefObject } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";


function processRef<T>(instance: T | null, ref: Ref<T> | null | undefined) {
    if (typeof ref === "function") {
        ref(instance);
    }
    else if (ref != null) {
        (ref as RefObject<T | null>).current = instance;
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
 */
export function useMergedRefs<E extends EventTarget>(rhs: ElementProps<E>["ref"], lhs: ElementProps<E>["ref"]) {
    monitorCallCount(useMergedRefs);
    
    // This *must* be stable in order to prevent repeated reset `null` calls after every render.
    const combined = useStableCallback(function combined(current: E | null) {
        processRef(current, lhs);
        processRef(current, rhs);
    });

    if (lhs == null && rhs == null) {
        return undefined!;
    }
    else if (lhs == null) {
        return rhs!;
    }
    else if (rhs == null) {
        return lhs!;
    }
    else {
        return combined;
    }
}
