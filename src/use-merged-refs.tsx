import { Ref, RefCallback, RefObject } from "preact";
import { useCallback } from "preact/hooks";


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

interface R<E> {
    ref?: Ref<E>;
}


/**
 * Combines two refs into one. This allows a component to both use its own ref *and* forward a ref that was given to it.
 * @param lhs 
 * @param rhs 
 * @returns 
 */
export function useMergedRefs<E extends EventTarget>() {
    return function <Lhs extends R<E>, Rhs extends R<E>>(lhsProps: Lhs | null | undefined, rhsProps: Rhs | null | undefined): Ref<E> {

        const lhs = lhsProps?.ref;
        const rhs = rhsProps?.ref;
        const combined: RefCallback<E> = useCallback((current: E | null) => {
            processRef(current, lhs);
            processRef(current, rhs);
        }, [lhs, rhs]);


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
}
