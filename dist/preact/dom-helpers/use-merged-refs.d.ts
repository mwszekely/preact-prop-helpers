import { ElementProps, Ref } from "../util/types.js";
/**
 * Combines two refs into one. This allows a component to both use its own ref *and* forward a ref that was given to it.
 *
 * @remarks Or just use {@link useMergedProps}
 */
export declare const useMergedRefs: <E extends EventTarget>(rhs: Ref<E> | undefined, lhs: Ref<E> | undefined) => import("preact").RefObject<E> | import("preact").RefCallback<E>;
//# sourceMappingURL=use-merged-refs.d.ts.map