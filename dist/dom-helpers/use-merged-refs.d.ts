import { ElementProps } from "../util/types.js";
/**
 * Combines two refs into one. This allows a component to both use its own ref *and* forward a ref that was given to it.
 * @param lhs
 * @param rhs
 * @returns
 */
export declare function useMergedRefs<E extends EventTarget>(rhs: ElementProps<E>["ref"], lhs: ElementProps<E>["ref"]): string | ((instance: E | null) => void) | import("react").RefObject<E>;
//# sourceMappingURL=use-merged-refs.d.ts.map