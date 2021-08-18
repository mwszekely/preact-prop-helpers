import { h, Ref, RefCallback, RefObject } from "preact";
import { useCallback, useRef } from "preact/hooks";
import type { GenericReplace } from "./use-merged-props"


function processRef<T>(instance: T | null, ref: Ref<T> | null | undefined) {
    if (typeof ref === "function") {
        ref(instance);
    } else if (ref != null) {
        (ref as RefObject<T | null>).current = instance;
    }
}


export type MergedRefs<E extends EventTarget, Lhs extends Pick<h.JSX.HTMLAttributes<E>, "ref"> | null | undefined, Rhs extends Pick<h.JSX.HTMLAttributes<E>, "ref"> | null | undefined> =
    GenericReplace<Lhs, "ref", RefCallback<E>> | GenericReplace<Rhs, "ref", RefCallback<E>>


/**
 * Combines two refs into one. This allows a component to both use its own ref *and* forward a ref that was given to it.
 * @param lhs 
 * @param rhs 
 * @returns 
 */
export function useMergedRefs<E extends EventTarget>() {
    return function <Lhs extends Pick<h.JSX.HTMLAttributes<E>, "ref"> | null | undefined, Rhs extends Pick<h.JSX.HTMLAttributes<E>, "ref"> | null | undefined>(lhsProps: Lhs, rhsProps: Rhs): MergedRefs<E, Lhs, Rhs> {


        const lhs = lhsProps?.ref;
        const rhs = rhsProps?.ref;
        if (lhs == null && rhs == null) {
            return undefined as MergedRefs<E, Lhs, Rhs>;
        }
        else if (lhs == null) {
            return rhs as MergedRefs<E, Lhs, Rhs>;
        }
        else if (rhs == null) {
            return lhs as MergedRefs<E, Lhs, Rhs>;
        }
        else {
            let ret = useCallback((current: E | null) => {
                processRef(current, lhs);
                processRef(current, rhs);
            }, [lhs, rhs]);

            return ret as MergedRefs<E, Lhs, Rhs>;
        }
    }
}

/*
function typetest<P extends h.JSX.HTMLAttributes<HTMLInputElement>>(props: P) {

    const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

    function acceptsRef(ref: Ref<any>) { }
    function acceptsOptionalRef(ref: Ref<any> | undefined) { }

    const c = [
        useMergedRefs<HTMLInputElement>()(undefined, undefined),
        useMergedRefs<HTMLInputElement>()({}, undefined),
        useMergedRefs<HTMLInputElement>()(props, undefined),
        useMergedRefs<HTMLInputElement>()(undefined, props),
        useMergedRefs<HTMLInputElement>()(props, props),
        useMergedRefs<HTMLInputElement>()({ ref }, props),
        useMergedRefs<HTMLInputElement>()({ ref }, { ref: undefined }),
        useMergedRefs<HTMLInputElement>()({ ref: undefined }, { ref }),
        useMergedRefs<HTMLInputElement>()({ ref }, { ref }),
    ] as const;

    /// @ts-expect-error
    acceptsRef(c[0]);
    /// @ts-expect-error
    acceptsRef(c[1]);

    acceptsOptionalRef(c[2]);
    acceptsOptionalRef(c[3]);
    acceptsOptionalRef(c[4]);

    /// @ts-expect-error TODO
    acceptsRef(c[5]);
    acceptsRef(c[6]);
    acceptsRef(c[7]);
    acceptsRef(c[8]);
}
*/

