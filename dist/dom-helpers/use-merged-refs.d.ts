import { Ref } from "react";
/**
 * Combines two refs into one. This allows a component to both use its own ref *and* forward a ref that was given to it.
 * @param lhs
 * @param rhs
 * @returns
 */
export declare function useMergedRefs<E extends EventTarget>(rhs: Ref<E> | null | undefined, lhs: Ref<E> | null | undefined): ((instance: E | null) => void) | import("react").RefObject<E>;
//# sourceMappingURL=use-merged-refs.d.ts.map