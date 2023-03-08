import { h, RefObject } from "preact";
/**
 * Combines two refs into one. This allows a component to both use its own ref *and* forward a ref that was given to it.
 * @param lhs
 * @param rhs
 * @returns
 */
export declare function useMergedRefs<E extends EventTarget>(rhs: h.JSX.HTMLAttributes<E>["ref"], lhs: h.JSX.HTMLAttributes<E>["ref"]): RefObject<E> | import("preact").RefCallback<E>;
//# sourceMappingURL=use-merged-refs.d.ts.map